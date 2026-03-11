import React, { useEffect, useMemo, useRef } from 'react';
import { useCss } from '@ari/utils';
import { useKeyboardShortcuts, useRichEditor } from '../hooks';
import { MarkdownRenderer } from './MarkdownRenderer';

/**
 * 预览组件属性接口
 */
export interface PreviewProps {
  /** 自定义样式类名 */
  className?: string;
}

/**
 * Markdown 预览 / 可视化编辑组件
 */
export const Preview: React.FC<PreviewProps> = ({ className }) => {
  const cn = useCss('rich-editor');
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    useEditor,
    useMode,
    useMarkdown,
    disabled,
    readOnly,
  } = useRichEditor();
  const handleKeyDown = useKeyboardShortcuts();

  const isEditableVisualMode = useMode.mode === 'visual' && !readOnly && !disabled;
  const markdownElements = useMemo(
    () => useMarkdown.parseMarkdown(useEditor.content),
    [useEditor.content, useMarkdown],
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    useEditor.previewRef.current = element;

    if (isEditableVisualMode) {
      useEditor.visualEditorRef.current = element;
      useEditor.syncVisualEditorContent();
      return;
    }

    useEditor.visualEditorRef.current = null;
  }, [isEditableVisualMode, useEditor]);

  if (isEditableVisualMode) {
    return (
      <div
        ref={containerRef}
        className={cn.gen(className, cn.e('preview'), cn.em('preview', 'editable'))}
        contentEditable
        suppressContentEditableWarning
        data-rich-editor-root="true"
        onInput={useEditor.handleVisualInput}
        onKeyDown={handleKeyDown}
        onPaste={useEditor.handlePaste}
        onMouseUp={useEditor.saveVisualSelection}
        onKeyUp={useEditor.saveVisualSelection}
        onFocus={useEditor.saveVisualSelection}
        style={{ outline: 'none' }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn.gen(className, cn.e('preview'))}
    >
      <MarkdownRenderer elements={markdownElements} />
    </div>
  );
};
