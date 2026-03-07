import React, { useRef } from 'react';
import { useCss } from '@ari/utils';

/**
 * 透明度滑块属性接口
 */
interface AlphaSliderProps {
  /**
   * 当前透明度值 (0-1)
   */
  alpha: number;
  
  /**
   * 背景颜色
   */
  color: string;
  
  /**
   * 透明度变化回调
   */
  onChange: (alpha: number) => void;
}

/**
 * 透明度滑块组件
 * 提供透明度调节的滑动条
 */
export const AlphaSlider: React.FC<AlphaSliderProps> = ({ alpha, color, onChange }) => {
  const cn = useCss('color-picker');
  const alphaRef = useRef<HTMLDivElement>(null);

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
   * 处理透明度选择区域的鼠标事件
   * 
   * Params:
   * 
   *   - e: 鼠标事件对象
   */
  const handleAlphaChange = (e: React.MouseEvent | MouseEvent) => {
    if (!alphaRef.current) return;
    
    const rect = alphaRef.current.getBoundingClientRect();
    const width = rect.width;
    
    let left = e.clientX - rect.left;
    left = Math.max(0, Math.min(left, width));
    
    const a = parseFloat((left / width).toFixed(2));
    
    onChange(a);
  };

  // 生成透明度选择器指针的样式
  const alphaPointerStyle = {
    left: `${alpha * 100}%`,
  };

  // 生成透明度选择器的背景样式
  const alphaGradientStyle = {
    background: `linear-gradient(to right, transparent, ${color})`,
  };

  return (
    <div 
      className={cn.e('alpha')}
      ref={alphaRef}
      onMouseDown={handleMouseDown(handleAlphaChange)}
    >
      <div 
        className={cn.e('alpha-gradient')}
        style={alphaGradientStyle}
      ></div>
      <div 
        className={cn.e('alpha-pointer')}
        style={alphaPointerStyle}
      ></div>
    </div>
  );
};