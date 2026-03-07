import React, { useRef } from 'react';
import { useCss } from '@ari/utils';
import { AriHSVColor } from '@ari/types/components/color-picker';
import { hsvToRgb, rgbToHex } from '../utils';

/**
 * 颜色面板属性接口
 */
interface ColorPanelProps {
  /**
   * 当前HSV颜色值
   */
  hsv: AriHSVColor;
  
  /**
   * 颜色变化回调
   */
  onChange: (newColor: Partial<AriHSVColor>) => void;
}

/**
 * 颜色选择面板组件
 * 提供饱和度和亮度的二维选择区域
 */
export const ColorPanel: React.FC<ColorPanelProps> = ({ hsv, onChange }) => {
  const cn = useCss('color-picker');
  const saturationRef = useRef<HTMLDivElement>(null);

  /**
   * 处理鼠标按下事件
   * 
   * Params:
   * 
   *   - handler: 处理函数
   */
  const handleMouseDown = (handler: (e: React.MouseEvent | MouseEvent) => void) => (e: React.MouseEvent) => {
    handler(e);
    
    const onMouseMove = (e: MouseEvent) => {
      handler(e);
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  /**
   * 处理饱和度-亮度选择区域的鼠标事件
   * 
   * Params:
   * 
   *   - e: 鼠标事件对象
   */
  const handleSaturationChange = (e: React.MouseEvent | MouseEvent) => {
    if (!saturationRef.current) return;
    
    const rect = saturationRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let left = e.clientX - rect.left;
    let top = e.clientY - rect.top;
    
    left = Math.max(0, Math.min(left, width));
    top = Math.max(0, Math.min(top, height));
    
    const s = Math.round((left / width) * 100);
    const v = Math.round(100 - (top / height) * 100);
    
    onChange({ s, v });
  };

  // 生成饱和度-亮度面板的背景色
  const saturationStyle = {
    backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
  };

  // 生成饱和度-亮度选择器指针的样式
  const saturationPointerStyle = {
    left: `${hsv.s}%`,
    top: `${100 - hsv.v}%`,
    backgroundColor: rgbToHex(
      hsvToRgb(hsv.h, hsv.s, hsv.v).r,
      hsvToRgb(hsv.h, hsv.s, hsv.v).g,
      hsvToRgb(hsv.h, hsv.s, hsv.v).b
    ),
  };

  return (
    <div 
      className={cn.e('saturation')}
      ref={saturationRef}
      style={saturationStyle}
      onMouseDown={handleMouseDown(handleSaturationChange)}
    >
      <div 
        className={cn.e('saturation-pointer')}
        style={saturationPointerStyle}
      ></div>
    </div>
  );
};