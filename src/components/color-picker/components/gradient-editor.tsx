import React, { useRef } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';
import { AriGradientColor, AriGradientDirection, AriGradientStop } from '@ari/types/components/color-picker';

/**
 * 渐变编辑器属性接口
 */
interface GradientEditorProps {
  /**
   * 当前渐变色值
   */
  gradient: AriGradientColor;
  
  /**
   * 当前选中的渐变点索引
   */
  activeStopIndex: number;
  
  /**
   * 渐变色变化回调
   */
  onChange: (gradient: Partial<AriGradientColor>) => void;
  
  /**
   * 选中渐变点变化回调
   */
  onActiveStopChange: (index: number) => void;
}

/**
 * 渐变编辑器组件
 * 提供渐变色的方向选择和颜色停止点编辑
 */
export const GradientEditor: React.FC<GradientEditorProps> = ({
  gradient,
  activeStopIndex,
  onChange,
  onActiveStopChange
}) => {
  const cn = useCss('color-picker');
  const gradientTrackRef = useRef<HTMLDivElement>(null);

  /**
   * 可用的渐变方向
   */
  const directions: { value: AriGradientDirection; label: string }[] = [
    { value: 'to right', label: '0°' },
    { value: 'to right bottom', label: '45°' },
    { value: 'to bottom', label: '90°' },
    { value: 'to left bottom', label: '135°' },
    { value: 'to left', label: '180°' },
    { value: 'to left top', label: '225°' },
    { value: 'to top', label: '270°' },
    { value: 'to right top', label: '315°' }
  ];

  /**
   * 处理方向变化
   */
  const handleDirectionChange = (direction: AriGradientDirection) => {
    onChange({ direction });
  };

  /**
   * 处理鼠标按下事件
   */
  const handleMouseDown = (handler: (e: React.MouseEvent | MouseEvent) => void, index: number) => (e: React.MouseEvent) => {
    onActiveStopChange(index);
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
   * 处理渐变停止点拖动
   */
  const handleGradientStopMove = (e: React.MouseEvent | MouseEvent, index: number) => {
    if (!gradientTrackRef.current) return;
    
    const rect = gradientTrackRef.current.getBoundingClientRect();
    const width = rect.width;
    
    let left = e.clientX - rect.left;
    left = Math.max(0, Math.min(left, width));
    
    const position = Math.round((left / width) * 100);
    
    const newStops = [...gradient.stops];
    newStops[index] = { ...newStops[index], position };
    
    // 对停止点按位置排序
    newStops.sort((a, b) => (a.position || 0) - (b.position || 0));
    
    // 找出排序后的活动点索引
    const newActiveIndex = newStops.findIndex(
      stop => stop === gradient.stops[index]
    );
    
    onActiveStopChange(newActiveIndex);
    onChange({ stops: newStops });
  };

  /**
   * 添加渐变停止点
   */
  const addGradientStop = (e: React.MouseEvent) => {
    if (!gradientTrackRef.current) return;
    
    const rect = gradientTrackRef.current.getBoundingClientRect();
    const width = rect.width;
    
    let left = e.clientX - rect.left;
    left = Math.max(0, Math.min(left, width));
    
    const position = Math.round((left / width) * 100);
    
    // 使用前后两个点的颜色进行插值
    const stops = [...gradient.stops];
    let color = '#ffffff';
    
    // 找到左右最近的点
    let leftStop: AriGradientStop | undefined;
    let rightStop: AriGradientStop | undefined;
    
    for (const stop of stops) {
      if ((stop.position || 0) <= position && (!leftStop || (leftStop.position || 0) < (stop.position || 0))) {
        leftStop = stop;
      }
      if ((stop.position || 0) >= position && (!rightStop || (rightStop.position || 0) > (stop.position || 0))) {
        rightStop = stop;
      }
    }
    
    if (leftStop && rightStop) {
      // 简单的颜色插值
      color = leftStop.color;
    } else if (leftStop) {
      color = leftStop.color;
    } else if (rightStop) {
      color = rightStop.color;
    }
    
    const newStop: AriGradientStop = { color, position };
    const newStops = [...stops, newStop];
    
    // 对停止点按位置排序
    newStops.sort((a, b) => (a.position || 0) - (b.position || 0));
    
    // 找出新点的索引
    const newActiveIndex = newStops.findIndex(stop => stop === newStop);
    
    onActiveStopChange(newActiveIndex);
    onChange({ stops: newStops });
  };

  /**
   * 删除渐变停止点
   */
  const removeGradientStop = (index: number) => {
    // 不允许少于2个点
    if (gradient.stops.length <= 2) return;
    
    const newStops = gradient.stops.filter((_, i) => i !== index);
    onChange({ stops: newStops });
    
    // 如果删除的是当前选中的点，选中第一个点
    if (index === activeStopIndex) {
      onActiveStopChange(0);
    } else if (index < activeStopIndex) {
      // 如果删除的点在当前选中点之前，索引减一
      onActiveStopChange(activeStopIndex - 1);
    }
  };

  /**
   * 生成渐变预览背景样式
   */
  const gradientPreviewStyle = {
    backgroundImage: `linear-gradient(${gradient.direction}, ${
      gradient.stops.map(stop => `${stop.color} ${stop.position}%`).join(', ')
    })`
  };

  return (
    <div className={cn.e('gradient-editor')}>
      {/* 渐变方向选择 */}
      <div className={cn.e('gradient-direction')}>
        {directions.map(dir => (
          <div
            key={dir.value}
            className={cn.gen(
              cn.e('direction-button'),
              cn.is('active', dir.value === gradient.direction)
            )}
            onClick={() => handleDirectionChange(dir.value)}
          >
            {dir.label}
          </div>
        ))}
      </div>
      
      {/* 渐变预览 */}
      <div
        className={cn.e('gradient-preview')}
        style={gradientPreviewStyle}
      ></div>
      
      {/* 渐变停止点轨道 */}
      <div
        className={cn.e('gradient-track')}
        ref={gradientTrackRef}
        onClick={addGradientStop}
      >
        {gradient.stops.map((stop, index) => (
          <div
            key={index}
            className={cn.gen(
              cn.e('gradient-stop'),
              cn.is('active', index === activeStopIndex)
            )}
            style={{
              left: `${stop.position}%`,
              backgroundColor: stop.color
            }}
            onMouseDown={handleMouseDown(
              (e) => handleGradientStopMove(e, index),
              index
            )}
            onContextMenu={(e) => {
              e.preventDefault();
              removeGradientStop(index);
            }}
          ></div>
        ))}
      </div>
      
      <div className={cn.e('gradient-hint')}>
        点击轨道添加颜色点，右键点击删除颜色点
      </div>
    </div>
  );
};