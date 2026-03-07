/**
 * 用于操作剪贴板的 Hook
 * 
 * Params:
 * 
 *   - text: 默认复制到剪贴板的文本
 *     default: ''
 * 
 * Returns:
 * 
 *   - value: 当前剪贴板值
 *   - setValue: 设置剪贴板值的函数
 *   - copy: 复制文本到剪贴板的函数
 *   - copyStatus: 复制操作的状态（'idle' | 'success' | 'error'）
 *   - error: 复制过程中发生的错误
 *   - reset: 重置剪贴板状态的函数
 * 
 * Example:
 * 
 * ```tsx
 * const { value, copy, copyStatus } = useClipboard();
 * 
 * // 复制文本到剪贴板
 * const handleCopy = () => {
 *   copy('要复制的文本');
 * };
 * 
 * ```
 */
export interface UseClipboardReturn {
  /**
   * 当前剪贴板值
   */
  value: string;
  
  /**
   * 设置剪贴板值的函数
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  
  /**
   * 复制文本到剪贴板的函数
   */
  copy: (text?: string) => Promise<boolean>;
  
  /**
   * 复制操作的状态
   */
  copyStatus: 'idle' | 'success' | 'error';
  
  /**
   * 重置剪贴板状态的函数
   */
  reset: () => void;
}

/**
 * 用于操作剪贴板的 Hook
 * 
 * Params:
 * 
 *   - text: 默认复制到剪贴板的文本
 *     default: ''
 *   - timeout: 复制状态重置的超时时间（毫秒）
 *     default: 2000
 *   - showMessage: 是否显示提示消息
 *     default: true
 * 
 * Returns:
 * 
 *   返回一个对象，包含剪贴板相关的操作和状态
 *   
 * Example:
 * 
 * ```tsx
 * const { value, copy, copyStatus } = useClipboard();
 * ```
 */
export type UseClipboard = (text?: string, timeout?: number, showMessage?: boolean) => UseClipboardReturn;
