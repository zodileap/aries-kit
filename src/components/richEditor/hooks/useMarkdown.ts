import { useCallback } from 'react';

/**
 * Markdown 元素类型
 */
export type MarkdownElementType = 
  | 'heading' 
  | 'paragraph' 
  | 'codeBlock' 
  | 'blockquote' 
  | 'callout'
  | 'list' 
  | 'hr' 
  | 'text'
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'inlineCode'
  | 'link'
  | 'image';

/**
 * Markdown 元素接口
 */
export interface MarkdownElement {
  type: MarkdownElementType;
  content?: string;
  props?: Record<string, any>;
  children?: MarkdownElement[];
}

/**
 * 代码块渲染器配置
 */
export interface CodeBlockConfig {
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  showTitle?: boolean;
  onCodeEdit?: (code: string, language: string, title?: string) => void;
}


/**
 * Markdown Hook
 * 提供纯解析功能，返回结构化数据而不是JSX
 * 
 * Returns:
 * 
 *   Markdown 解析相关方法
 */
export function useMarkdown(config?: CodeBlockConfig) {
  
  // 解析Markdown为结构化数据
  const parseMarkdown = useCallback((markdown: string): MarkdownElement[] => {
    const elements: MarkdownElement[] = [];
    const lines = markdown.split('\n');
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];
      
      // 告示框处理
      if (line.startsWith(':::')) {
        const calloutMatch = line.match(/^:::(\w+)\s*(.*)$/);
        if (calloutMatch) {
          const type = calloutMatch[1];
          const title = calloutMatch[2].trim() || '';
          
          // 验证是否为有效的告示框类型
          const validTypes = ['note', 'tip', 'info', 'warning', 'danger'];
          if (validTypes.includes(type)) {
            // 找到告示框结束位置
            let calloutEndIndex = currentIndex + 1;
            while (calloutEndIndex < lines.length && !lines[calloutEndIndex].startsWith(':::')) {
              calloutEndIndex++;
            }
            
            // 提取告示框内容（即使没有结束符也处理）
            const contentLines = lines.slice(currentIndex + 1, calloutEndIndex);
            const content = contentLines.join('\n').trim();
            
            // 解析告示框内容中的Markdown
            const contentElements = content ? parseMarkdown(content) : [];
            
            // 创建告示框元素
            elements.push({
              type: 'callout',
              props: {
                type,
                title: title || undefined
              },
              children: contentElements
            });
            
            // 如果找到了结束符，跳过它；否则处理到文件末尾
            currentIndex = calloutEndIndex < lines.length ? calloutEndIndex + 1 : calloutEndIndex;
            continue;
          }
        }
      }

      // 代码块处理
      if (line.startsWith('```')) {
        // 支持以下格式：
        // ```jsx
        // ```jsx title="Example"
        // ```jsx {1,4-6,11}
        // ```jsx {1,4-6,11} title="Example"
        const codeBlockMatch = line.match(/```(\w+)?\s*(?:\{([^}]*)\})?\s*(?:title="([^"]*)")?\s*$/);
        if (codeBlockMatch) {
          const language = codeBlockMatch[1] || 'plaintext';
          const highlightLinesStr = codeBlockMatch[2] || '';
          const title = codeBlockMatch[3] || '';
          
          // 解析高亮行
          const highlightLines = parseHighlightLines(highlightLinesStr);
          
          // 找到代码块结束位置
          let codeEndIndex = currentIndex + 1;
          while (codeEndIndex < lines.length && !lines[codeEndIndex].startsWith('```')) {
            codeEndIndex++;
          }
          
          if (codeEndIndex < lines.length) {
            // 提取代码内容
            const codeLines = lines.slice(currentIndex + 1, codeEndIndex);
            const code = codeLines.join('\n');
            
            // 创建代码块元素
            elements.push({
              type: 'codeBlock',
              props: {
                language,
                title,
                code,
                highlightLines,
                config
              }
            });
            
            currentIndex = codeEndIndex + 1;
            continue;
          }
        }
      }
      
      // 标题处理
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const content = headingMatch[2];
        
        elements.push({
          type: 'heading',
          props: {
            level,
            id: content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
          },
          children: parseInlineMarkdown(content)
        });
        currentIndex++;
        continue;
      }
      
      // 引用处理
      if (line.startsWith('> ')) {
        const content = line.substring(2);
        elements.push({
          type: 'blockquote',
          children: parseInlineMarkdown(content)
        });
        currentIndex++;
        continue;
      }
      
      // 水平线处理
      if (line.trim() === '---') {
        elements.push({
          type: 'hr'
        });
        currentIndex++;
        continue;
      }
      
      // 列表处理
      if (line.match(/^[*-]\s+/) || line.match(/^\d+\.\s+/) || line.match(/^- \[[x ]\]\s+/)) {
        const listItems: MarkdownElement[] = [];
        let listType = 'ul';
        
        // 确定列表类型
        if (line.match(/^\d+\.\s+/)) {
          listType = 'ol';
        }
        
        // 收集连续的列表项
        while (currentIndex < lines.length) {
          const currentLine = lines[currentIndex];
          
          // 任务列表
          const taskMatch = currentLine.match(/^- \[([x ])\]\s+(.+)$/);
          if (taskMatch) {
            const checked = taskMatch[1] === 'x';
            const content = taskMatch[2];
            listItems.push({
              type: 'text',
              props: {
                className: 'task-item',
                checked
              },
              children: parseInlineMarkdown(content)
            });
            currentIndex++;
            continue;
          }
          
          // 普通列表项
          const listMatch = currentLine.match(/^(?:[*-]|\d+\.)\s+(.+)$/);
          if (listMatch) {
            const content = listMatch[1];
            listItems.push({
              type: 'text',
              children: parseInlineMarkdown(content)
            });
            currentIndex++;
            continue;
          }
          
          break;
        }
        
        if (listItems.length > 0) {
          elements.push({
            type: 'list',
            props: {
              listType
            },
            children: listItems
          });
        }
        continue;
      }
      
      // 空行跳过
      if (line.trim() === '') {
        currentIndex++;
        continue;
      }
      
      // 普通段落
      elements.push({
        type: 'paragraph',
        children: parseInlineMarkdown(line)
      });
      currentIndex++;
    }

    return elements;
  }, [config]);

  // 解析高亮行字符串
  const parseHighlightLines = useCallback((highlightStr: string): Array<number | {start: number; end: number}> => {
    if (!highlightStr.trim()) return [];
    
    const result: Array<number | {start: number; end: number}> = [];
    const parts = highlightStr.split(',');
    
    for (const part of parts) {
      const trimmed = part.trim();
      
      // 检查是否为范围格式 (例如: "4-6")
      if (trimmed.includes('-')) {
        const [start, end] = trimmed.split('-').map(n => parseInt(n.trim(), 10));
        if (!isNaN(start) && !isNaN(end) && start <= end) {
          result.push({ start, end });
        }
      } else {
        // 单个行号
        const lineNumber = parseInt(trimmed, 10);
        if (!isNaN(lineNumber)) {
          result.push(lineNumber);
        }
      }
    }
    
    return result;
  }, []);

  // 解析行内Markdown语法
  const parseInlineMarkdown = useCallback((text: string): MarkdownElement[] => {
    const elements: MarkdownElement[] = [];
    let remaining = text;

    while (remaining.length > 0) {
      // 行内代码
      const codeMatch = remaining.match(/^`([^`]+)`(.*)$/);
      if (codeMatch) {
        elements.push({
          type: 'inlineCode',
          content: codeMatch[1]
        });
        remaining = codeMatch[2];
        continue;
      }

      // 加粗
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*(.*)$/) || remaining.match(/^__([^_]+)__(.*)$/);
      if (boldMatch) {
        elements.push({
          type: 'bold',
          content: boldMatch[1]
        });
        remaining = boldMatch[2];
        continue;
      }

      // 斜体
      const italicMatch = remaining.match(/^\*([^*]+)\*(.*)$/) || remaining.match(/^_([^_]+)_(.*)$/);
      if (italicMatch) {
        elements.push({
          type: 'italic',
          content: italicMatch[1]
        });
        remaining = italicMatch[2];
        continue;
      }

      // 删除线
      const strikeMatch = remaining.match(/^~~([^~]+)~~(.*)$/);
      if (strikeMatch) {
        elements.push({
          type: 'strikethrough',
          content: strikeMatch[1]
        });
        remaining = strikeMatch[2];
        continue;
      }

      // 链接
      const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)(.*)$/);
      if (linkMatch) {
        elements.push({
          type: 'link',
          content: linkMatch[1],
          props: {
            href: linkMatch[2]
          }
        });
        remaining = linkMatch[3];
        continue;
      }

      // 图片
      const imageMatch = remaining.match(/^!\[([^\]]*)\]\(([^)]+)\)(.*)$/);
      if (imageMatch) {
        elements.push({
          type: 'image',
          props: {
            src: imageMatch[2],
            alt: imageMatch[1]
          }
        });
        remaining = imageMatch[3];
        continue;
      }

      // 没有匹配到任何格式，取第一个字符
      elements.push({
        type: 'text',
        content: remaining[0]
      });
      remaining = remaining.substring(1);
    }

    return elements;
  }, []);

  // 文本编辑工具函数
  
  /**
   * 在光标位置插入文本
   */
  const insertTextAtCursor = useCallback((textarea: HTMLTextAreaElement, text: string): void => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    
    textarea.value = value.substring(0, start) + text + value.substring(end);
    
    // 设置光标位置
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  }, []);

  /**
   * 检测选中文本是否已经包含指定格式
   */
  const hasFormat = useCallback((text: string, before: string, after: string): boolean => {
    return text.startsWith(before) && text.endsWith(after);
  }, []);

  /**
   * 移除文本的格式标记
   */
  const removeFormat = useCallback((text: string, before: string, after: string): string => {
    if (hasFormat(text, before, after)) {
      return text.substring(before.length, text.length - after.length);
    }
    return text;
  }, [hasFormat]);

  /**
   * 智能包裹选中的文本（支持格式切换）
   */
  const toggleWrapSelection = useCallback((
    textarea: HTMLTextAreaElement, 
    before: string, 
    after: string
  ): { success: boolean; message?: string; hasSelection: boolean } => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.substring(start, end);
    
    // 检查是否有选中文本
    if (start === end) {
      return { success: false, message: '请先选中要格式化的文本', hasSelection: false };
    }
    
    let newText: string;
    let cursorPosition: number;
    
    // 检查是否已经包含格式
    if (hasFormat(selected, before, after)) {
      // 移除格式
      newText = removeFormat(selected, before, after);
      cursorPosition = start + newText.length;
    } else {
      // 添加格式
      newText = before + selected + after;
      cursorPosition = start + newText.length;
    }
    
    // 更新文本域
    textarea.value = value.substring(0, start) + newText + value.substring(end);
    
    // 取消选中，只保留光标位置
    textarea.selectionStart = cursorPosition;
    textarea.selectionEnd = cursorPosition;
    textarea.focus();
    
    return { success: true, hasSelection: true };
  }, [hasFormat, removeFormat]);

  /**
   * 包裹选中的文本（保留原有功能）
   */
  const wrapSelection = useCallback((textarea: HTMLTextAreaElement, before: string, after: string): void => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.substring(start, end);
    
    textarea.value = value.substring(0, start) + before + selected + after + value.substring(end);
    
    // 设置光标位置
    if (selected) {
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selected.length;
    } else {
      textarea.selectionStart = textarea.selectionEnd = start + before.length;
    }
    
    textarea.focus();
  }, []);

  return {
    // 核心解析方法
    parseMarkdown,
    parseInlineMarkdown,
    
    // 文本编辑工具
    insertTextAtCursor,
    toggleWrapSelection,
    wrapSelection,
    hasFormat,
    removeFormat
  };
}