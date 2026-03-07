import { UseClipboard } from '@ari/types/hooks/use-clipboard';
import { useState, useCallback, useEffect, useRef } from 'react';
import { AriMessage } from '@ari/components';
import { useI18n } from '@ari/i18n';

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
 */
export const useClipboard: UseClipboard = (
  text = '', 
  timeout = 2000, 
  showMessage = true
) => {
  // 状态初始化
  const [value, setValue] = useState<string>(text);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  
  // 获取国际化翻译函数
  const { t } = useI18n(["common"]);
  
  // 重置状态的函数
  const reset = useCallback(() => {
    setCopyStatus('idle');
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  // 复制函数
  const copy = useCallback(
    async (newText?: string) => {
      const textToCopy = newText !== undefined ? newText : value;
      
      // 重置之前的状态
      reset();
      
      try {
        // 使用现代 API 复制到剪贴板
        await navigator.clipboard.writeText(textToCopy);
        
        // 如果提供了新文本，更新状态值
        if (newText !== undefined) {
          setValue(newText);
        }
        
        // 设置成功状态
        setCopyStatus('success');
        
        // 显示成功消息
        if (showMessage) {
          AriMessage.success({
            content: t.common.copySuccess,
            duration: timeout,
          });
        }
        
        // 设置自动重置定时器
        const id = setTimeout(() => {
          setCopyStatus('idle');
          setTimeoutId(null);
        }, timeout);
        
        setTimeoutId(id);
        return true;
      } catch (error) {
        // 设置错误状态
        setCopyStatus('error');
        
        // 显示错误消息
        if (showMessage) {
          AriMessage.error({
            content: t.common.copyFailed,
            duration: timeout
          });
        }
        
        // 设置自动重置定时器
        const id = setTimeout(() => {
          setCopyStatus('idle');
          setTimeoutId(null);
        }, timeout);
        
        setTimeoutId(id);
        return false;
      }
    },
    [value, reset, timeout, showMessage]
  );

  // 当组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return {
    value,
    setValue,
    copy,
    copyStatus,
    reset
  };
};
