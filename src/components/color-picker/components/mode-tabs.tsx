import React, { useMemo } from 'react';
import { AriTabs } from '@ari/components';
import { AriColorMode } from '@ari/types/components/color-picker';
import { AriTabItem } from '@ari/types/components/tabs';

/**
 * 模式标签属性接口
 */
interface ModeTabsProps {
  /**
   * 当前颜色模式
   */
  mode: AriColorMode;
  
  /**
   * 是否启用渐变色
   */
  enableGradient?: boolean;
  
  /**
   * 模式变化回调
   */
  onChange: (mode: AriColorMode) => void;
}

/**
 * 模式标签组件
 * 提供单色和渐变色模式切换的标签页，使用AriTabs实现
 */
export const ModeTabs: React.FC<ModeTabsProps> = ({ 
  mode, 
  enableGradient = false, 
  onChange 
}) => {

  /**
   * 标签页配置项
   */
  const tabItems: AriTabItem[] = useMemo(() => [
    {
      key: 'solid',
      label: '单色',
      children: null
    },
    {
      key: 'gradient', 
      label: '渐变色',
      children: null
    }
  ], []);

  /**
   * 切换颜色模式
   * 
   * Params:
   * 
   *   - selectedMode: 要切换到的颜色模式
   */
  const handleModeChange = (selectedMode: string) => {
    const newMode = selectedMode as AriColorMode;
    if (newMode !== mode) {
      onChange(newMode);
    }
  };

  if (!enableGradient) {
    return null;
  }

  return (
    <AriTabs
      activeKey={mode}
      items={tabItems}
      onChange={handleModeChange}
    />
  );
};