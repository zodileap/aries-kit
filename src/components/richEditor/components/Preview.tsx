import React, { useRef, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { useRichEditor } from '../hooks';
import { MarkdownRenderer } from './MarkdownRenderer';

/**
 * 预览组件属性接口
 */
export interface PreviewProps {
  /** 自定义样式类名 */
  className?: string;
}

/**
 * Markdown预览组件
 * 
 * 支持两种模式：
 * 1. 预览模式：只读显示渲染后的React组件
 * 2. 可视化编辑模式：可以直接编辑渲染后的内容
 * 
 * Params:
 * 
 *   - className: 自定义样式类名
 * 
 * Example:
 * 
 * ```tsx
 * <Preview className="custom-preview" />
 * ```
 */
export const Preview: React.FC<PreviewProps> = ({ className }) => {
  const cn = useCss('rich-editor');
  const { useEditor, useMode, useMarkdown, codeBlockConfig } = useRichEditor();
  const editableRef = useRef<HTMLDivElement>(null);
  
  // 检查是否为可视化编辑模式
  const isVisualMode = useMode.mode === 'visual';
  
  // 解析Markdown为结构化数据
  const markdownElements = useMarkdown.parseMarkdown(useEditor.content);
  
  // 设置预览容器的ref
  useEffect(() => {
    if (editableRef.current) {
      useEditor.previewRef.current = editableRef.current;
    }
  }, [useEditor]);
  
  if (isVisualMode) {
    // 可视化编辑模式：使用contentEditable
    // TODO: 实现可视化编辑功能
    return (
      <div 
        ref={editableRef}
        className={cn.gen(className, cn.e('preview'), cn.m('editable'))}
        contentEditable
        suppressContentEditableWarning
        style={{
          outline: 'none',
          minHeight: '200px',
          padding: '16px',
        }}
      >
        <MarkdownRenderer elements={markdownElements} />
      </div>
    );
  }
  
  // 预览模式：只读显示React组件
  return (
    <div 
      ref={editableRef}
      className={cn.gen(className, cn.e('preview'))}
    >
      <MarkdownRenderer elements={markdownElements} />
    </div>
  );
};