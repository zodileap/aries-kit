import React from 'react';
import { useCss } from '@ari/utils';
import { useRichEditor } from '../hooks';
import { useKeyboardShortcuts, useScrollSync } from '../hooks';

/**
 * 编辑器组件属性接口
 */
export interface EditorProps {
  placeholder?: string;
}

/**
 * 源码编辑器组件
 * 
 * Params:
 * 
 *   - placeholder: 占位符文本
 * 
 * Example:
 * 
 * ```tsx
 * <Editor placeholder="请输入Markdown内容..." />
 * ```
 */
export const Editor: React.FC<EditorProps> = ({ 
  placeholder = "请输入Markdown内容..." 
}) => {
  const cn = useCss('rich-editor');
  const {
    useEditor,
    disabled,
    readOnly,
    placeholder: contextPlaceholder,
    handleTextareaClick,
    handleTextareaSelect,
  } = useRichEditor();
  
  const {
    content,
    textareaRef,
    lineNumbersRef,
    handleContentChange,
    handlePaste,
  } = useEditor;
  
  const finalPlaceholder = placeholder || contextPlaceholder;
  
  // 使用键盘快捷键
  const handleKeyDown = useKeyboardShortcuts();
  
  // 使用滚动同步
  useScrollSync();
  
  // 计算行号
  const lineCount = content.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);
  
  return (
    <div className={cn.e('editor')}>
      {/* 行号区域 */}
      <div 
        ref={lineNumbersRef}
        className={cn.e('line-numbers')}
      >
        {lineNumbers.map(num => (
          <div key={num} className={cn.e('line-number')}>
            {num}
          </div>
        ))}
      </div>
      
      {/* 编辑区域 */}
      <textarea
        ref={textareaRef}
        className={cn.e('textarea')}
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
        onClick={handleTextareaClick}
        onSelect={handleTextareaSelect}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={finalPlaceholder}
        disabled={disabled}
        readOnly={readOnly}
        spellCheck={false}
      />
    </div>
  );
};
