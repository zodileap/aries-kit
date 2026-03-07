import { useCallback } from 'react';
import { useRichEditor } from './useRichEditor';

/**
 * 键盘快捷键 Hook
 * 
 * Returns:
 * 
 *   处理键盘事件的函数
 * 
 * Example:
 * 
 * ```tsx
 * function Editor() {
 *   const handleKeyDown = useKeyboardShortcuts();
 *   
 *   return (
 *     <textarea onKeyDown={handleKeyDown} />
 *   );
 * }
 * ```
 */
export function useKeyboardShortcuts() {
  const { useEditor } = useRichEditor();
  const { undo, redo } = useEditor;
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // 处理撤销/重做快捷键
    const isMac = navigator.platform.match(/Mac/);
    
    // 撤销: Ctrl/Cmd + Z (不带 Shift)
    if ((isMac ? e.metaKey : e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      undo();
      return;
    }
    
    // 重做 - Mac: Cmd + Shift + Z
    if (isMac && e.metaKey && e.shiftKey && e.key === 'z') {
      e.preventDefault();
      redo();
      return;
    }
    
    // 重做 - Windows/Linux: Ctrl + Y 或 Ctrl + Shift + Z
    if (!isMac && e.ctrlKey && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) {
      e.preventDefault();
      redo();
      return;
    }
  }, [undo, redo]);
  
  return handleKeyDown;
}