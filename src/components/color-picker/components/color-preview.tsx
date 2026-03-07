import React from 'react';
import { useCss } from '@ari/utils';
import { AriColorMode, AriGradientColor } from '@ari/types/components/color-picker';

/**
 * 颜色预览属性接口
 */
interface ColorPreviewProps {
  /**
   * 颜色值
   */
  color: string | AriGradientColor;
  
  /**
   * 颜色模式
   */
  mode: AriColorMode;
}

/**
 * 颜色预览组件
 * 在滑块右侧显示当前颜色预览
 */
export const ColorPreview: React.FC<ColorPreviewProps> = ({ color, mode }) => {
  const cn = useCss('color-picker');

  /**
   * 生成CSS背景样式
   */
  const getBackgroundStyle = () => {
    if (mode === 'solid') {
      return { backgroundColor: color as string };
    } else if (mode === 'gradient') {
      const gradient = color as AriGradientColor;
      const stops = gradient.stops.map(stop => 
        `${stop.color} ${stop.position}%`
      ).join(', ');
      
      return {
        backgroundImage: `linear-gradient(${gradient.direction}, ${stops})`
      };
    }
    
    return { backgroundColor: 'transparent' };
  };

  return (
    <div 
      className={cn.e('preview-rect')}
      style={getBackgroundStyle()}
    ></div>
  );
};