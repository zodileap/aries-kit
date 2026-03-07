import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { useMarkdown } from './useMarkdown';

/**
 * 编辑器核心 Hook
 * 管理内容、历史记录、选择、工具栏操作等核心编辑功能
 * 
 * Returns:
 * 
 *   编辑器核心状态和操作方法
 */
export function useEditor(
  value?: string,
  defaultValue = '',
  onChange?: (value: string) => void
) {
  // 创建 markdown 工具实例
  const markdownTools = useMarkdown();
  
  // 内容状态
  const [content, setContentState] = useState(value ?? defaultValue);
  
  // 历史记录状态
  const [history, setHistory] = useState<string[]>([value ?? defaultValue]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isUndoRedoAction, setIsUndoRedoAction] = useState(false);
  
  // 选择状态
  const [savedSelection, setSavedSelection] = useState<{ start: number; end: number } | null>(null);
  
  // 引用
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  
  // 计算派生状态
  const canUndo = useMemo(() => historyIndex > 0, [historyIndex]);
  const canRedo = useMemo(() => historyIndex < history.length - 1, [historyIndex, history.length]);
  
  // 受控模式处理
  useEffect(() => {
    if (value !== undefined) {
      setContentState(value);
    }
  }, [value]);
  
  // 处理内容变化
  const handleContentChange = useCallback((newContent: string, addToHistory = true) => {
    setContentState(newContent);
    onChange?.(newContent);
    
    // 添加到历史记录 - 但不在撤销/重做操作中添加
    if (addToHistory && !isUndoRedoAction) {
      setHistory(currentHistory => {
        // 如果当前不在历史记录的末尾，删除后面的记录
        const newHistory = currentHistory.slice(0, historyIndex + 1);
        newHistory.push(newContent);
        
        console.log('添加到历史记录:', { 
          historyIndex, 
          oldHistoryLength: currentHistory.length, 
          newHistoryLength: newHistory.length,
          contentPreview: newContent.substring(0, 50) + '...'
        });
        
        // 限制历史记录数量（最多保留50条）
        if (newHistory.length > 50) {
          newHistory.shift();
          setHistoryIndex(newHistory.length - 1);
        } else {
          setHistoryIndex(newHistory.length - 1);
        }
        
        return newHistory;
      });
    } else if (isUndoRedoAction) {
      console.log('跳过历史记录添加 - 撤销/重做操作中');
    }
  }, [onChange, historyIndex, isUndoRedoAction]);
  
  // 保存选择范围
  const saveSelection = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      setSavedSelection({
        start: textarea.selectionStart,
        end: textarea.selectionEnd
      });
    }
  }, []);

  // 恢复选择范围
  const restoreSelection = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea && savedSelection) {
      textarea.focus();
      textarea.setSelectionRange(savedSelection.start, savedSelection.end);
    }
  }, [savedSelection]);
  
  // 聚焦到编辑器
  const focus = useCallback(() => {
    textareaRef.current?.focus();
  }, []);
  
  // 撤销
  const undo = useCallback(() => {
    if (canUndo) {
      const newIndex = historyIndex - 1;
      const previousContent = history[newIndex];
      
      console.log('Undo操作:', { 
        currentIndex: historyIndex, 
        newIndex, 
        historyLength: history.length,
        currentContent: content.substring(0, 50) + '...',
        previousContent: previousContent.substring(0, 50) + '...'
      });
      
      setIsUndoRedoAction(true);
      setHistoryIndex(newIndex);
      setContentState(previousContent);
      onChange?.(previousContent);
      
      // 强制更新 textarea 的值
      setTimeout(() => {
        const textarea = textareaRef.current;
        if (textarea && textarea.value !== previousContent) {
          textarea.value = previousContent;
        }
        setIsUndoRedoAction(false);
      }, 0);
    }
  }, [canUndo, historyIndex, history, onChange, content]);
  
  // 重做
  const redo = useCallback(() => {
    if (canRedo) {
      const newIndex = historyIndex + 1;
      const nextContent = history[newIndex];
      
      console.log('Redo操作:', { 
        currentIndex: historyIndex, 
        newIndex, 
        historyLength: history.length,
        currentContent: content.substring(0, 50) + '...',
        nextContent: nextContent.substring(0, 50) + '...'
      });
      
      setIsUndoRedoAction(true);
      setHistoryIndex(newIndex);
      setContentState(nextContent);
      onChange?.(nextContent);
      
      // 强制更新 textarea 的值
      setTimeout(() => {
        const textarea = textareaRef.current;
        if (textarea && textarea.value !== nextContent) {
          textarea.value = nextContent;
        }
        setIsUndoRedoAction(false);
      }, 0);
    }
  }, [canRedo, historyIndex, history, onChange, content]);
  
  // 插入标题
  const handleInsertHeading = useCallback((level: string | number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const levelNum = typeof level === 'string' ? parseInt(level) : level;
    
    // 获取当前的选择（优先使用当前实际选择，其次使用保存的选择）
    const currentStart = textarea.selectionStart;
    const currentEnd = textarea.selectionEnd;
    const hasCurrentSelection = currentStart !== currentEnd;
    
    // 使用当前选择或保存的选择
    const start = hasCurrentSelection ? currentStart : (savedSelection?.start ?? currentStart);
    const end = hasCurrentSelection ? currentEnd : (savedSelection?.end ?? currentEnd);
    const hasSelection = start !== end;
    
    if (hasSelection) {
      const selected = textarea.value.substring(start, end);
      const prefix = '#'.repeat(levelNum) + ' ';
      const newText = prefix + selected;
      
      textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
      
      // 将光标定位到格式化文本的末尾
      const newCursorPos = start + newText.length;
      textarea.selectionStart = newCursorPos;
      textarea.selectionEnd = newCursorPos;
      textarea.focus();
      handleContentChange(textarea.value);
    } else {
      const prefix = '#'.repeat(levelNum) + ' ';
      markdownTools.insertTextAtCursor(textarea, prefix);
      handleContentChange(textarea.value);
    }
    
    setSavedSelection(null);
  }, [handleContentChange, savedSelection, markdownTools]);
  
  // 工具栏操作
  const handleToolbarAction = useCallback((action: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    let result: { success: boolean; message?: string; hasSelection: boolean } | null = null;
    
    switch (action) {
      case 'bold':
        result = markdownTools.toggleWrapSelection(textarea, '**', '**');
        break;
      case 'italic':
        result = markdownTools.toggleWrapSelection(textarea, '*', '*');
        break;
      case 'strikethrough':
        result = markdownTools.toggleWrapSelection(textarea, '~~', '~~');
        break;
      case 'heading':
        // 这个按钮由 AriSelect 处理，不需要在这里处理
        return;
      case 'quote':
        result = markdownTools.toggleWrapSelection(textarea, '> ', '');
        if (!result.success) {
          markdownTools.insertTextAtCursor(textarea, '\n> ');
          result = { success: true, hasSelection: false };
        }
        break;
      case 'code':
        result = markdownTools.toggleWrapSelection(textarea, '`', '`');
        break;
      case 'codeBlock':
        result = markdownTools.toggleWrapSelection(textarea, '\n```\n', '\n```\n');
        if (!result.success) {
          markdownTools.insertTextAtCursor(textarea, '\n```\n\n```\n');
          result = { success: true, hasSelection: false };
        }
        break;
      case 'link':
        result = markdownTools.toggleWrapSelection(textarea, '[', '](url)');
        break;
      case 'image':
        result = markdownTools.toggleWrapSelection(textarea, '![', '](url)');
        break;
      case 'table':
        markdownTools.insertTextAtCursor(textarea, '\n| Header | Header |\n|--------|--------|\n| Cell   | Cell   |\n');
        result = { success: true, hasSelection: false };
        break;
      case 'list':
        markdownTools.insertTextAtCursor(textarea, '\n- ');
        result = { success: true, hasSelection: false };
        break;
      case 'orderedList':
        markdownTools.insertTextAtCursor(textarea, '\n1. ');
        result = { success: true, hasSelection: false };
        break;
      case 'taskList':
        markdownTools.insertTextAtCursor(textarea, '\n- [ ] ');
        result = { success: true, hasSelection: false };
        break;
      case 'undo':
        undo();
        result = { success: true, hasSelection: false };
        break;
      case 'redo':
        redo();
        result = { success: true, hasSelection: false };
        break;
    }
    
    // 处理操作结果
    if (result) {
      if (!result.success && result.message) {
        // 显示提示消息
        alert(result.message); // 这里可以后续改为更好的提示组件
      } else if (action !== 'undo' && action !== 'redo') {
        handleContentChange(textarea.value);
      }
    }
  }, [undo, redo, handleContentChange, markdownTools]);
  
  // 基础操作方法
  const getContent = useCallback(() => content, [content]);
  const setContent = useCallback((newContent: string) => handleContentChange(newContent), [handleContentChange]);
  const clear = useCallback(() => handleContentChange(''), [handleContentChange]);
  
  // 文本域事件处理
  const handleTextareaClick = useCallback(() => {
    // 可以在这里添加其他逻辑
  }, []);
  
  const handleTextareaSelect = useCallback(() => {
    // 可以在这里添加其他逻辑
  }, []);
  
  return {
    // 状态
    content,
    history,
    historyIndex,
    canUndo,
    canRedo,
    savedSelection,
    
    // 引用
    textareaRef,
    lineNumbersRef,
    previewRef,
    
    // 内容操作
    handleContentChange,
    getContent,
    setContent,
    clear,
    
    // 选择操作
    saveSelection,
    restoreSelection,
    focus,
    
    // 历史操作
    undo,
    redo,
    
    // 工具栏操作
    handleToolbarAction,
    handleInsertHeading,
    
    // 事件处理
    handleTextareaClick,
    handleTextareaSelect
  };
}