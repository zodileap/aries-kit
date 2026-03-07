import React from 'react';
import { useCss } from '@ari/utils';

/**
 * 预设颜色属性接口
 */
interface PresetColorsProps {
  /**
   * 预设颜色列表
   */
  colors: string[];
  
  /**
   * 颜色选择回调
   */
  onSelect: (color: string) => void;
}

/**
 * 预设颜色组件
 * 展示预设颜色供用户选择
 */
export const PresetColors: React.FC<PresetColorsProps> = ({ colors, onSelect }) => {
  const cn = useCss('color-picker');

  return (
    <div className={cn.e('presets')}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={cn.e('preset-color')}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        ></div>
      ))}
    </div>
  );
};