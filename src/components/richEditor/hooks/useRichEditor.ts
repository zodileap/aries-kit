import { useContext } from 'react';
import { RichEditorContext, RichEditorContextValue } from '../context';

/**
 * 使用富文本编辑器上下文的 Hook
 * 
 * Returns:
 * 
 *   富文本编辑器上下文值
 * 
 * Example:
 * 
 * ```tsx
 * function MyComponent() {
 *   const { content, handleContentChange } = useRichEditor();
 *   
 *   return (
 *     <div>
 *       <p>当前内容长度: {content.length}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useRichEditor(): RichEditorContextValue {
  const context = useContext(RichEditorContext);
  
  if (!context) {
    throw new Error('useRichEditor must be used within a RichEditorProvider');
  }
  
  return context;
}