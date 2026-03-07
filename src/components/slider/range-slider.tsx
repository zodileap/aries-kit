import { useState, useEffect, useRef, useCallback } from 'react';
import { useCss } from '@ari/utils';
import { _Props } from '@ari/types/components/base';
import { AriContainer } from '../container';
import { SliderProps } from './slider';

/**
 * 范围滑动条组件属性
 * 定义范围滑动条组件支持的所有配置选项
 */
export interface RangeSliderProps extends Omit<SliderProps, 'value' | 'defaultValue' | 'onChange' | 'onAfterChange'> {
    /**
     * 范围滑动条的值
     * 受控组件的当前值，包含最小值和最大值
     */
    value?: [number, number];

    /**
     * 默认值
     * 非受控组件的默认值，包含最小值和最大值
     * 
     * default: [0, 0]
     */
    defaultValue?: [number, number];

    /**
     * 滑动条变化时的回调函数
     * 当用户拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 新的值范围
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: [number, number]) => void;

    /**
     * 滑动条拖动结束时的回调函数
     * 当用户结束拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 最终值范围
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onAfterChange?: (value: [number, number]) => void;
}

/**
 * 范围滑动输入条组件
 * 提供可拖动的范围滑动条来选择一个数值范围
 */
export const AriRangeSlider: React.FC<RangeSliderProps> = ({
    value,
    defaultValue = [0, 0],
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    showTicks = false,
    tickCount = 5,
    tickLabels,
    showValueLabel = false,
    valueLabelFormat,
    color = "primary",
    vertical = false,
    size,
    shape = "default",
    prefix,
    suffix,
    onChange,
    onAfterChange,
    className,
    ...props
}) => {
    const cs = useCss("slider");
    const initialValue = value !== undefined ? value : defaultValue;
    const [innerValue, setInnerValue] = useState<[number, number]>(initialValue);
    const [activeThumb, setActiveThumb] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [thumbPositions, setThumbPositions] = useState<[number, number]>(() => {
        // 根据初始值计算初始位置
        const pos0 = ((initialValue[0] - min) / (max - min)) * 100;
        const pos1 = ((initialValue[1] - min) / (max - min)) * 100;
        return [pos0, pos1];
    });
    const sliderRef = useRef<HTMLDivElement>(null);

    // 将值转换为百分比位置
    const valueToPercent = useCallback((val: number): number => {
        return ((val - min) / (max - min)) * 100;
    }, [min, max]);

    // 将百分比位置转换为值
    const percentToValue = useCallback((percent: number): number => {
        const rawValue = min + (percent / 100) * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        return Math.max(min, Math.min(max, steppedValue));
    }, [min, max, step]);

    // 更新滑块位置和值
    const updateValue = useCallback((index: number, newValue: number) => {
        if (index !== 0 && index !== 1) return;
        
        const clampedValue = Math.max(min, Math.min(max, newValue));
        const steppedValue = Math.round((clampedValue - min) / step) * step + min;
        const finalValue = Math.max(min, Math.min(max, steppedValue));
        
        const newInnerValue: [number, number] = [...innerValue];
        newInnerValue[index] = finalValue;
        
        // 确保最小值不大于最大值
        if (index === 0 && newInnerValue[0] > newInnerValue[1]) {
            newInnerValue[0] = newInnerValue[1];
        } else if (index === 1 && newInnerValue[1] < newInnerValue[0]) {
            newInnerValue[1] = newInnerValue[0];
        }
        
        setInnerValue(newInnerValue);
        setThumbPositions([
            valueToPercent(newInnerValue[0]),
            valueToPercent(newInnerValue[1])
        ]);
        
        if (onChange) {
            onChange(newInnerValue);
        }
    }, [innerValue, min, max, step, onChange, valueToPercent]);

    // 初始化和受控组件值变化时更新内部状态
    useEffect(() => {
        if (value !== undefined) {
            setInnerValue(value);
            setThumbPositions([
                valueToPercent(value[0]),
                valueToPercent(value[1])
            ]);
        }
    }, [value, valueToPercent]);

    // 确定最近的滑块
    const getClosestThumb = useCallback((percent: number): number => {
        const val = percentToValue(percent);
        const distToMin = Math.abs(val - innerValue[0]);
        const distToMax = Math.abs(val - innerValue[1]);
        return distToMin <= distToMax ? 0 : 1;
    }, [percentToValue, innerValue]);

    // 处理鼠标/触摸按下事件
    const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (disabled || !sliderRef.current) return;
        
        // 阻止默认行为和事件冒泡
        e.preventDefault();
        e.stopPropagation();
        
        // 计算新位置和值
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        
        let percent;
        if (vertical) {
            // 垂直模式下直接使用rail元素的实际可用高度，不需要额外的偏移计算
            const height = rect.height;
            const relativeY = e.clientY - rect.top;
            percent = (relativeY / height) * 100;
            // 垂直模式下需要反转，因为CSS使用bottom定位
            percent = 100 - percent;
        } else {
            const width = rect.width;
            percent = ((e.clientX - rect.left) / width) * 100;
        }
        
        // 确定激活的滑块
        const thumbIndex = getClosestThumb(percent);
        setActiveThumb(thumbIndex);
        
        // 更新值
        const newValue = percentToValue(percent);
        updateValue(thumbIndex, newValue);
        
        // 设置拖动状态
        setIsDragging(true);
        
        // 捕获指针
        slider.setPointerCapture(e.pointerId);
    }, [disabled, percentToValue, updateValue, vertical, getClosestThumb]);

    // 处理鼠标/触摸移动事件
    const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging || activeThumb === null || !sliderRef.current) return;
        
        // 阻止默认行为
        e.preventDefault();
        
        // 计算新位置和值
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        
        let percent;
        if (vertical) {
            // 垂直模式下使用与handlePointerDown相同的计算逻辑
            const height = rect.height;
            const relativeY = e.clientY - rect.top;
            percent = (relativeY / height) * 100;
            // 垂直模式下需要反转，因为CSS使用bottom定位
            percent = 100 - percent;
        } else {
            const width = rect.width;
            percent = ((e.clientX - rect.left) / width) * 100;
        }
        
        // 更新值
        const newValue = percentToValue(percent);
        updateValue(activeThumb, newValue);
    }, [isDragging, activeThumb, percentToValue, updateValue, vertical]);

    // 处理鼠标/触摸释放事件
    const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging || activeThumb === null) return;
        
        // 阻止默认行为
        e.preventDefault();
        
        // 结束拖动
        setIsDragging(false);
        setActiveThumb(null);
        
        // 释放指针捕获
        if (sliderRef.current) {
            sliderRef.current.releasePointerCapture(e.pointerId);
        }
        
        // 触发拖动结束回调
        if (onAfterChange) {
            onAfterChange(innerValue);
        }
    }, [isDragging, activeThumb, innerValue, onAfterChange]);

    // 处理键盘事件
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>, thumbIndex: number) => {
        if (disabled) return;
        
        let newValue = innerValue[thumbIndex];
        
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = Math.min(max, newValue + step);
                if (thumbIndex === 0) {
                    newValue = Math.min(newValue, innerValue[1]);
                }
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = Math.max(min, newValue - step);
                if (thumbIndex === 1) {
                    newValue = Math.max(newValue, innerValue[0]);
                }
                break;
            case 'Home':
                newValue = thumbIndex === 0 ? min : innerValue[0];
                break;
            case 'End':
                newValue = thumbIndex === 1 ? max : innerValue[1];
                break;
            default:
                return;
        }
        
        // 阻止默认行为
        e.preventDefault();
        
        // 更新值
        updateValue(thumbIndex, newValue);
        
        // 触发拖动结束回调
        if (onAfterChange) {
            const newInnerValue: [number, number] = [...innerValue];
            newInnerValue[thumbIndex] = newValue;
            onAfterChange(newInnerValue);
        }
    }, [disabled, innerValue, max, min, onAfterChange, step, updateValue]);

    // 渲染刻度
    const renderTicks = () => {
        if (!showTicks) return null;
        
        const ticks = [];
        const totalTicks = tickCount + 2; // 包括起点和终点
        
        for (let i = 0; i < totalTicks; i++) {
            const percent = (i / (totalTicks - 1)) * 100;
            const tickValue = percentToValue(percent);
            let tickLabel;
            
            if (tickLabels) {
                if (Array.isArray(tickLabels) && i < tickLabels.length) {
                    tickLabel = tickLabels[i];
                } else if (typeof tickLabels === 'function') {
                    tickLabel = tickLabels(tickValue);
                }
            } else {
                tickLabel = tickValue.toString();
            }
            
            ticks.push(
                <div
                    key={i}
                    className={cs.e('tick')}
                    style={vertical ? { bottom: `${percent}%` } : { left: `${percent}%` }}
                >
                    <div className={cs.e('tick-mark')} />
                    {tickLabel && <div className={cs.e('tick-label')}>{tickLabel}</div>}
                </div>
            );
        }
        
        return (
            <div className={cs.e('ticks')}>
                {ticks}
            </div>
        );
    };

    // 渲染值标签
    const renderValueLabels = () => {
        if (!showValueLabel) return null;
        
        const labels = [];
        
        for (let i = 0; i < 2; i++) {
            const formattedValue = valueLabelFormat 
                ? valueLabelFormat(innerValue[i]) 
                : innerValue[i].toString();
            
            labels.push(
                <div 
                    key={i}
                    className={cs.gen(
                        cs.e('value-label'),
                        cs.is('active', activeThumb === i)
                    )}
                    style={vertical ? { bottom: `${thumbPositions[i]}%` } : { left: `${thumbPositions[i]}%` }}
                >
                    {formattedValue}
                </div>
            );
        }
        
        return labels;
    };

    // 计算容器样式
    const containerStyle: React.CSSProperties = {};
    if (size !== undefined) {
        if (vertical) {
            containerStyle.height = typeof size === 'number' ? `${size}px` : size;
        } else {
            containerStyle.width = typeof size === 'number' ? `${size}px` : size;
        }
    } else if (vertical) {
        // 垂直模式下如果没有指定尺寸，提供默认高度
        containerStyle.height = '200px';
    }

    return (
        <AriContainer
            className={cs.gen(
                cs.b(),
                cs.is('range'),
                cs.is('vertical', vertical),
                cs.is('disabled', disabled),
                cs.is('dragging', isDragging),
                cs.m(color),
                cs.is(`shape-${shape}`),
                cs.is('with-prefix', !!prefix),
                cs.is('with-suffix', !!suffix),
                className
            )}
            style={containerStyle}
            {...props as unknown as React.ComponentProps<typeof AriContainer>}
        >
            {prefix && <div className={cs.e('prefix')}>{prefix}</div>}
            
            <div
                ref={sliderRef}
                className={cs.e('rail')}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                role="group"
                aria-disabled={disabled}
            >
                <div className={cs.e('track')}>
                    <div
                        className={cs.e('track-fill')}
                        style={vertical 
                            ? { 
                                bottom: `${thumbPositions[0]}%`, 
                                height: `${thumbPositions[1] - thumbPositions[0]}%` 
                              } 
                            : { 
                                left: `${thumbPositions[0]}%`, 
                                width: `${thumbPositions[1] - thumbPositions[0]}%` 
                              }
                        }
                    />
                </div>
                
                {/* 最小值滑块 */}
                <div
                    className={cs.gen(
                        cs.e('thumb'),
                        cs.is('active', activeThumb === 0)
                    )}
                    style={vertical ? { bottom: `${thumbPositions[0]}%` } : { left: `${thumbPositions[0]}%` }}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-valuemin={min}
                    aria-valuemax={innerValue[1]}
                    aria-valuenow={innerValue[0]}
                    aria-disabled={disabled}
                    onKeyDown={(e) => handleKeyDown(e, 0)}
                />
                
                {/* 最大值滑块 */}
                <div
                    className={cs.gen(
                        cs.e('thumb'),
                        cs.is('active', activeThumb === 1)
                    )}
                    style={vertical ? { bottom: `${thumbPositions[1]}%` } : { left: `${thumbPositions[1]}%` }}
                    tabIndex={disabled ? -1 : 0}
                    role="slider"
                    aria-valuemin={innerValue[0]}
                    aria-valuemax={max}
                    aria-valuenow={innerValue[1]}
                    aria-disabled={disabled}
                    onKeyDown={(e) => handleKeyDown(e, 1)}
                />
                
                {renderTicks()}
                {renderValueLabels()}
            </div>
            
            {suffix && <div className={cs.e('suffix')}>{suffix}</div>}
        </AriContainer>
    );
};
