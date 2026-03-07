import { useEffect } from 'react';
import { useRichEditor } from './useRichEditor';

/**
 * 滚动同步 Hook
 * 用于同步行号滚动和编辑器预览同步
 * 
 * Example:
 * 
 * ```tsx
 * function Editor() {
 *   useScrollSync();
 *   
 *   return <div>编辑器组件</div>;
 * }
 * ```
 */
export function useScrollSync() {
  const { useEditor } = useRichEditor();
  const { textareaRef, lineNumbersRef } = useEditor;
  
  // 同步行号滚动
  useEffect(() => {
    const textarea = textareaRef.current;
    const lineNumbers = lineNumbersRef.current;
    
    if (!textarea || !lineNumbers) return;
    
    const handleScroll = () => {
      lineNumbers.scrollTop = textarea.scrollTop;
    };
    
    textarea.addEventListener('scroll', handleScroll);
    
    return () => {
      textarea.removeEventListener('scroll', handleScroll);
    };
  }, [textareaRef, lineNumbersRef]);
}