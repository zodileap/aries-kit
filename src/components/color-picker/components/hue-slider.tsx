import React, { useRef } from 'react';
import { useCss } from '@ari/utils';

/**
 * 色相滑块属性接口
 */
interface HueSliderProps {
  /**
   * 当前色相值 (0-360)
   */
  hue: number;
  
  /**
   * 色相变化回调
   */
  onChange: (hue: number) => void;
}

/**
 * 色相滑块组件
 * 提供色相调节的滑动条
 */
export const HueSlider: React.FC<HueSliderProps> = ({ hue, onChange }) => {
  const cn = useCss('color-picker');
  const hueRef = useRef<HTMLDivElement>(null);

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
   * 处理色相选择区域的鼠标事件
   * 
   * Params:
   * 
   *   - e: 鼠标事件对象
   */
  const handleHueChange = (e: React.MouseEvent | MouseEvent) => {
    if (!hueRef.current) return;
    
    const rect = hueRef.current.getBoundingClientRect();
    const width = rect.width;
    
    let left = e.clientX - rect.left;
    left = Math.max(0, Math.min(left, width));
    
    const h = Math.round((left / width) * 360);
    
    onChange(h);
  };

  // 生成色相选择器指针的样式
  const huePointerStyle = {
    left: `${(hue / 360) * 100}%`,
  };

  return (
    <div 
      className={cn.e('hue')}
      ref={hueRef}
      onMouseDown={handleMouseDown(handleHueChange)}
    >
      <div 
        className={cn.e('hue-pointer')}
        style={huePointerStyle}
      ></div>
    </div>
  );
};