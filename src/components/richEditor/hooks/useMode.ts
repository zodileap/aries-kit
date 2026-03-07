import { useState, useCallback, useEffect } from 'react';
import { RichEditorMode } from '@ari/types';

/**
 * 模式管理 Hook
 * 
 * Returns:
 * 
 *   模式状态和切换方法
 */
export function useMode(
  propMode: RichEditorMode = 'split',
  onModeChange?: (mode: RichEditorMode) => void
) {
  const [mode, setMode] = useState<RichEditorMode>(propMode);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // 受控模式处理
  useEffect(() => {
    if (propMode !== undefined) {
      setMode(propMode);
    }
  }, [propMode]);
  
  // 处理模式切换
  const handleModeChange = useCallback((newMode: RichEditorMode) => {
    setMode(newMode);
    onModeChange?.(newMode);
  }, [onModeChange]);
  
  // 全屏切换
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);
  
  return {
    mode,
    isFullscreen,
    handleModeChange,
    toggleFullscreen
  };
}