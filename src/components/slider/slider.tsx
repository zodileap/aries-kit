import { useState, useEffect, useRef, useCallback } from 'react';
import { useCss } from '@ari/utils';
import { _Props } from '@ari/types/components/base';
import { AriContainer } from '../container';
import { AriIcon } from '../icon';

/**
 * 滑动输入条组件属性
 * 定义滑动输入条组件支持的所有配置选项
 */
export interface SliderProps extends Omit<_Props, 'onChange'> {
    /**
     * 滑动条的值
     * 受控组件的当前值
     */
    value?: number;

    /**
     * 默认值
     * 非受控组件的默认值
     * 
     * default: 0
     */
    defaultValue?: number;

    /**
     * 最小值
     * 滑动条的最小值
     * 
     * default: 0
     */
    min?: number;

    /**
     * 最大值
     * 滑动条的最大值
     * 
     * default: 100
     */
    max?: number;

    /**
     * 步长
     * 滑动条的步长
     * 
     * default: 1
     */
    step?: number;

    /**
     * 是否禁用
     * 控制滑动条是否禁用
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 显示刻度
     * 是否显示刻度标记
     * 
     * default: false
     */
    showTicks?: boolean;

    /**
     * 刻度数量
     * 刻度标记的数量(不包括起点和终点)
     * 
     * default: 5
     */
    tickCount?: number;

    /**
     * 刻度标签
     * 自定义刻度标签，如果是函数，则接收当前刻度值并返回标签内容
     */
    tickLabels?: string[] | ((value: number) => string);

    /**
     * 显示值标签
     * 是否显示当前值标签
     * 
     * default: false
     */
    showValueLabel?: boolean;

    /**
     * 值标签格式化函数
     * 用于格式化值标签显示的内容
     * 
     * Params:
     * 
     *   - value: 当前值
     * 
     * Returns:
     *   
     *   string: 格式化后的值标签
     */
    valueLabelFormat?: (value: number) => string;

    /**
     * 颜色
     * 滑动条的颜色主题
     * 
     * default: "primary"
     */
    color?: "primary" | "success" | "warning" | "danger" | "info";

    /**
     * 是否垂直
     * 控制滑动条的方向是否垂直
     * 
     * default: false
     */
    vertical?: boolean;

    /**
     * 高度/宽度
     * 垂直滑动条的高度或水平滑动条的宽度
     */
    size?: string | number;

    /**
     * 滑动条形状
     * 控制滑动条的外观形状
     * 
     * default: "default"
     */
    shape?: "default" | "rounded" | "square";

    /**
     * 前缀内容
     * 显示在滑动条前面的内容
     */
    prefix?: React.ReactNode;

    /**
     * 后缀内容
     * 显示在滑动条后面的内容
     */
    suffix?: React.ReactNode;

    /**
     * 滑动条变化时的回调函数
     * 当用户拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 新的值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: number) => void;

    /**
     * 滑动条拖动结束时的回调函数
     * 当用户结束拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 最终值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onAfterChange?: (value: number) => void;
}

/**
 * 滑动输入条组件
 * 提供可拖动的滑动条来选择一个数值
 */
export const AriSlider: React.FC<SliderProps> = ({
    value,
    defaultValue = 0,
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
    const [innerValue, setInnerValue] = useState<number>(initialValue);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [thumbPosition, setThumbPosition] = useState<number>(() => {
        // 根据初始值计算初始位置
        return ((initialValue - min) / (max - min)) * 100;
    });
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

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
    const updateValue = useCallback((newValue: number) => {
        const clampedValue = Math.max(min, Math.min(max, newValue));
        const steppedValue = Math.round((clampedValue - min) / step) * step + min;
        const finalValue = Math.max(min, Math.min(max, steppedValue));
        
        setInnerValue(finalValue);
        setThumbPosition(valueToPercent(finalValue));
        
        if (onChange) {
            onChange(finalValue);
        }
    }, [min, max, step, onChange, valueToPercent]);

    // 初始化和受控组件值变化时更新内部状态
    useEffect(() => {
        if (value !== undefined) {
            setInnerValue(value);
            setThumbPosition(valueToPercent(value));
        }
    }, [value, valueToPercent]);

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
        
        // 更新值
        const newValue = percentToValue(percent);
        updateValue(newValue);
        
        // 设置拖动状态
        setIsDragging(true);
        
        // 捕获指针
        slider.setPointerCapture(e.pointerId);
    }, [disabled, percentToValue, updateValue, vertical]);

    // 处理鼠标/触摸移动事件
    const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging || !sliderRef.current) return;
        
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
        updateValue(newValue);
    }, [isDragging, percentToValue, updateValue, vertical]);

    // 处理鼠标/触摸释放事件
    const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        
        // 阻止默认行为
        e.preventDefault();
        
        // 结束拖动
        setIsDragging(false);
        
        // 释放指针捕获
        if (sliderRef.current) {
            sliderRef.current.releasePointerCapture(e.pointerId);
        }
        
        // 触发拖动结束回调
        if (onAfterChange) {
            onAfterChange(innerValue);
        }
    }, [isDragging, innerValue, onAfterChange]);

    // 处理键盘事件
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;
        
        let newValue = innerValue;
        
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = Math.min(max, innerValue + step);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = Math.max(min, innerValue - step);
                break;
            case 'Home':
                newValue = min;
                break;
            case 'End':
                newValue = max;
                break;
            default:
                return;
        }
        
        // 阻止默认行为
        e.preventDefault();
        
        // 更新值
        updateValue(newValue);
        
        // 触发拖动结束回调
        if (onAfterChange) {
            onAfterChange(newValue);
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
    const renderValueLabel = () => {
        if (!showValueLabel) return null;
        
        const formattedValue = valueLabelFormat ? valueLabelFormat(innerValue) : innerValue.toString();
        
        return (
            <div 
                className={cs.e('value-label')}
                style={vertical ? { bottom: `${thumbPosition}%` } : { left: `${thumbPosition}%` }}
            >
                {formattedValue}
            </div>
        );
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
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={innerValue}
                aria-disabled={disabled}
            >
                <div ref={trackRef} className={cs.e('track')}>
                    <div
                        className={cs.e('track-fill')}
                        style={vertical ? { height: `${thumbPosition}%` } : { width: `${thumbPosition}%` }}
                    />
                </div>
                
                <div
                    className={cs.e('thumb')}
                    style={vertical ? { bottom: `${thumbPosition}%` } : { left: `${thumbPosition}%` }}
                />
                
                {renderTicks()}
                {renderValueLabel()}
            </div>
            
            {suffix && <div className={cs.e('suffix')}>{suffix}</div>}
        </AriContainer>
    );
};
