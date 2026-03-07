import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { AriTimePickerProps } from '@ari/types';
import { useCss } from '@ari/utils';
import { AriIcon } from '../icon';

/**
 * 时间选择器组件
 * 
 * 用于选择时间的输入框组件，点击后显示时间选择面板进行时间选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/time-picker}
 */
export const AriTimePicker: React.FC<AriTimePickerProps> = ({
    value,
    defaultValue,
    onChange,
    minTime,
    maxTime,
    disabled = false,
    format,
    placeholder = '请选择时间',
    size = 'medium',
    clearable = true,
    use12Hours = false,
    step = { hour: 1, minute: 1, second: 1 },
    showSecond = true,
    placement = 'bottom-start',
    prefixIcon = 'schedule',
    readonly = true,
    hideFooter = false,
    embedded = false,
    className,
    style,
    ...restProps
}) => {
    // 1. 状态初始化和Refs
    const cs = useCss('time-picker');
    const pickerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const hourListRef = useRef<HTMLDivElement>(null);
    const minuteListRef = useRef<HTMLDivElement>(null);
    const secondListRef = useRef<HTMLDivElement>(null);
    const periodListRef = useRef<HTMLDivElement>(null);
    
    // 处理受控和非受控模式
    const now = useMemo(() => new Date(), []);
    const [selectedTime, setSelectedTime] = useState<Date | undefined>(() => {
        if (value !== undefined) return value;
        if (defaultValue !== undefined) return defaultValue;
        return undefined;
    });
    const [tempTime, setTempTime] = useState<Date>(() => selectedTime || now);
    const [popupVisible, setPopupVisible] = useState<boolean>(embedded);
    const [shouldShowAbove, setShouldShowAbove] = useState<boolean>(false);
    const [isCompactMode, setIsCompactMode] = useState<boolean>(false);

    // 2. 当value变化时更新选中时间（受控模式）
    useEffect(() => {
        if (value !== undefined) {
            setSelectedTime(value);
            setTempTime(value || now);
        }
    }, [value, now]);

    // 查找最近的滚动容器
    const findScrollParent = useCallback((element: HTMLElement): HTMLElement => {
        if (!element || element === document.body) {
            return document.body;
        }
        
        const style = getComputedStyle(element);
        const overflowY = style.overflowY;
        const overflowX = style.overflowX;
        const overflow = style.overflow;
        
        if (/(auto|scroll|hidden)/.test(overflow + overflowY + overflowX)) {
            return element;
        }
        
        return findScrollParent(element.parentElement!);
    }, []);

    // 检测popup显示位置（上方还是下方）
    useEffect(() => {
        if (embedded) return; // 嵌入模式下不需要定位检测
        
        if (popupVisible && pickerRef.current) {
            // 延迟检测，确保DOM已经更新
            const timer = setTimeout(() => {
                const inputRect = pickerRef.current!.getBoundingClientRect();
                const scrollParent = findScrollParent(pickerRef.current!);
                
                let containerRect: DOMRect;
                if (scrollParent === document.body) {
                    // 如果没有找到特殊的滚动容器，使用视窗
                    containerRect = new DOMRect(0, 0, window.innerWidth, window.innerHeight);
                } else {
                    containerRect = scrollParent.getBoundingClientRect();
                }
                
                const spaceBelow = containerRect.bottom - inputRect.bottom;
                const spaceAbove = inputRect.top - containerRect.top;
                
                // 如果下方空间不足300px且上方空间更充足，则显示在上方
                const shouldShow = spaceBelow < 300 && spaceAbove > spaceBelow;
                setShouldShowAbove(shouldShow);
                
                // 检测是否需要紧凑模式
                const availableSpace = shouldShow ? spaceAbove : spaceBelow;
                const needCompact = availableSpace < 260; // 小于260px时启用紧凑模式
                setIsCompactMode(needCompact);
            }, 10);
            
            return () => clearTimeout(timer);
        }
        // 注意：popup关闭时不重置shouldShowAbove，保持最后的位置状态用于过渡动画
    }, [popupVisible, embedded, findScrollParent]);

    // 3. 派生状态计算
    const hourStep = step?.hour || 1;
    const minuteStep = step?.minute || 1;
    const secondStep = step?.second || 1;

    const hours = useMemo(() => {
        const result = [];
        const limit = use12Hours ? 12 : 24;
        const start = use12Hours ? 1 : 0;
        const end = use12Hours ? 12 : 23;
        
        for (let i = start; i <= end; i += hourStep) {
            result.push(i);
        }
        return result;
    }, [use12Hours, hourStep]);

    const minutes = useMemo(() => {
        const result = [];
        for (let i = 0; i < 60; i += minuteStep) {
            result.push(i);
        }
        return result;
    }, [minuteStep]);

    const seconds = useMemo(() => {
        const result = [];
        for (let i = 0; i < 60; i += secondStep) {
            result.push(i);
        }
        return result;
    }, [secondStep]);

    const periods = useMemo(() => ['AM', 'PM'], []);

    // 获取当前时间的小时、分钟、秒和时间段
    const currentHour = useMemo(() => {
        if (!tempTime) return use12Hours ? 12 : 0;
        
        let hour = tempTime.getHours();
        if (use12Hours) {
            hour = hour % 12;
            return hour === 0 ? 12 : hour;
        }
        return hour;
    }, [tempTime, use12Hours]);

    const currentMinute = useMemo(() => 
        tempTime ? tempTime.getMinutes() : 0
    , [tempTime]);
    
    const currentSecond = useMemo(() => 
        tempTime ? tempTime.getSeconds() : 0
    , [tempTime]);
    
    const currentPeriod = useMemo(() => 
        tempTime && tempTime.getHours() >= 12 ? 'PM' : 'AM'
    , [tempTime]);

    // 时间格式化
    const formatTime = useCallback((time: Date | undefined): string => {
        if (!time) return '';
        
        if (format) {
            return format(time);
        }
        
        // 默认格式化
        const hours = time.getHours();
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        
        if (use12Hours) {
            const period = hours >= 12 ? 'PM' : 'AM';
            const hour12 = hours % 12 || 12;
            const hourString = hour12.toString().padStart(2, '0');
            
            return showSecond
                ? `${hourString}:${minutes}:${seconds} ${period}`
                : `${hourString}:${minutes} ${period}`;
        } else {
            const hourString = hours.toString().padStart(2, '0');
            return showSecond
                ? `${hourString}:${minutes}:${seconds}`
                : `${hourString}:${minutes}`;
        }
    }, [format, showSecond, use12Hours]);

    const displayValue = useMemo(() => formatTime(selectedTime), [formatTime, selectedTime]);
    const hasValue = !!selectedTime;

    // 用于判断时间是否禁用
    const isTimeDisabled = useCallback((hour: number, minute: number, second: number, period?: string): boolean => {
        if (!minTime && !maxTime) return false;
        
        let tempDate = new Date();
        tempDate.setHours(0, 0, 0, 0); // 重置为当天0点
        
        if (use12Hours) {
            let hours = hour;
            if (period === 'PM' && hour !== 12) {
                hours += 12;
            } else if (period === 'AM' && hour === 12) {
                hours = 0;
            }
            tempDate.setHours(hours, minute, second);
        } else {
            tempDate.setHours(hour, minute, second);
        }
        
        if (minTime && tempDate < minTime) return true;
        if (maxTime && tempDate > maxTime) return true;
        
        return false;
    }, [minTime, maxTime, use12Hours]);

    // 4. 事件处理函数
    const handleInputClick = useCallback(() => {
        if (disabled || embedded) return;
        setPopupVisible(true);
        
        // 聚焦输入框
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }, [disabled, embedded]);

    const handleClear = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        
        setSelectedTime(undefined);
        onChange?.(undefined as any);
    }, [disabled, onChange]);

    const handleHourChange = useCallback((hour: number) => {
        const newDate = new Date(tempTime);
        
        if (use12Hours) {
            let currentHours = newDate.getHours();
            const isPM = currentHours >= 12;
            
            if (isPM) {
                newDate.setHours(hour === 12 ? 12 : hour + 12);
            } else {
                newDate.setHours(hour === 12 ? 0 : hour);
            }
        } else {
            newDate.setHours(hour);
        }
        
        setTempTime(newDate);
        
        // 嵌入模式下直接触发变化
        if (embedded) {
            setSelectedTime(newDate);
            onChange?.(newDate);
        }
        
        // 滚动到选中的小时
        if (hourListRef.current) {
            const hourElement = hourListRef.current.querySelector(`[data-hour="${hour}"]`);
            hourElement?.scrollIntoView({ block: 'center' });
        }
    }, [tempTime, use12Hours, embedded, onChange]);

    const handleMinuteChange = useCallback((minute: number) => {
        const newDate = new Date(tempTime);
        newDate.setMinutes(minute);
        setTempTime(newDate);
        
        // 嵌入模式下直接触发变化
        if (embedded) {
            setSelectedTime(newDate);
            onChange?.(newDate);
        }
        
        // 滚动到选中的分钟
        if (minuteListRef.current) {
            const minuteElement = minuteListRef.current.querySelector(`[data-minute="${minute}"]`);
            minuteElement?.scrollIntoView({ block: 'center' });
        }
    }, [tempTime, embedded, onChange]);

    const handleSecondChange = useCallback((second: number) => {
        const newDate = new Date(tempTime);
        newDate.setSeconds(second);
        setTempTime(newDate);
        
        // 嵌入模式下直接触发变化
        if (embedded) {
            setSelectedTime(newDate);
            onChange?.(newDate);
        }
        
        // 滚动到选中的秒钟
        if (secondListRef.current) {
            const secondElement = secondListRef.current.querySelector(`[data-second="${second}"]`);
            secondElement?.scrollIntoView({ block: 'center' });
        }
    }, [tempTime, embedded, onChange]);

    const handlePeriodChange = useCallback((period: string) => {
        const newDate = new Date(tempTime);
        const currentHours = newDate.getHours();
        const isPM = currentHours >= 12;
        
        if (period === 'AM' && isPM) {
            newDate.setHours(currentHours - 12);
        } else if (period === 'PM' && !isPM) {
            newDate.setHours(currentHours + 12);
        }
        
        setTempTime(newDate);
        
        // 嵌入模式下直接触发变化
        if (embedded) {
            setSelectedTime(newDate);
            onChange?.(newDate);
        }
        
        // 滚动到选中的时间段
        if (periodListRef.current) {
            const periodElement = periodListRef.current.querySelector(`[data-period="${period}"]`);
            periodElement?.scrollIntoView({ block: 'center' });
        }
    }, [tempTime, embedded, onChange]);

    const handleConfirm = useCallback(() => {
        setSelectedTime(tempTime);
        onChange?.(tempTime);
        if (!embedded) {
            setPopupVisible(false);
        }
    }, [tempTime, onChange, embedded]);

    const handleNow = useCallback(() => {
        const now = new Date();
        setTempTime(now);
        setSelectedTime(now);
        onChange?.(now);
        if (!embedded) {
            setPopupVisible(false);
        }
    }, [onChange, embedded]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setPopupVisible(false);
        } else if (e.key === 'Enter') {
            if (!popupVisible) {
                setPopupVisible(true);
            } else {
                handleConfirm();
            }
        }
    }, [popupVisible, handleConfirm]);

    // 5. 外部点击处理
    useEffect(() => {
        if (embedded) return; // 嵌入模式下不需要外部点击处理
        
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (pickerRef.current && !pickerRef.current.contains(target)) {
                setPopupVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [embedded]);

    // 滚动到当前选中的时间
    useEffect(() => {
        if (popupVisible) {
            setTimeout(() => {
                if (hourListRef.current) {
                    const hourElement = hourListRef.current.querySelector(`[data-hour="${currentHour}"]`);
                    hourElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
                
                if (minuteListRef.current) {
                    const minuteElement = minuteListRef.current.querySelector(`[data-minute="${currentMinute}"]`);
                    minuteElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
                
                if (showSecond && secondListRef.current) {
                    const secondElement = secondListRef.current.querySelector(`[data-second="${currentSecond}"]`);
                    secondElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
                
                if (use12Hours && periodListRef.current) {
                    const periodElement = periodListRef.current.querySelector(`[data-period="${currentPeriod}"]`);
                    periodElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
            }, 0);
        }
    }, [popupVisible, currentHour, currentMinute, currentSecond, currentPeriod, showSecond, use12Hours]);

    // 6. 渲染辅助函数
    const renderPrefix = useCallback(() => {
        return (
            <div className={cs.e('prefix-icon')}>
                <AriIcon name={prefixIcon} />
            </div>
        );
    }, [cs, prefixIcon]);

    const renderSuffix = useCallback(() => {
        return (
            <div className={cs.e('suffix-icons')}>
                {clearable && hasValue && (
                    <div 
                        className={cs.e('clear-icon')} 
                        onClick={handleClear}
                    >
                        <AriIcon name="close" />
                    </div>
                )}
                <div className={cs.e('dropdown-icon')}>
                    <AriIcon name="expand_more" />
                </div>
            </div>
        );
    }, [cs, clearable, hasValue, handleClear]);

    const renderHourColumn = useCallback(() => {
        return (
            <div className={cs.e('column')}>
                <div className={cs.e('column-title')}>时</div>
                <div className={cs.e('column-list')} ref={hourListRef}>
                    {hours.map(hour => {
                        const isDisabled = isTimeDisabled(
                            hour, 
                            currentMinute, 
                            currentSecond, 
                            use12Hours ? currentPeriod : undefined
                        );
                        
                        return (
                            <div
                                key={`hour-${hour}`}
                                className={cs.gen(
                                    cs.e('column-item'),
                                    cs.is('selected', hour === currentHour),
                                    cs.is('disabled', isDisabled)
                                )}
                                data-hour={hour}
                                onClick={() => !isDisabled && handleHourChange(hour)}
                            >
                                {hour.toString().padStart(2, '0')}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }, [
        cs, hours, currentHour, currentMinute, currentSecond, 
        currentPeriod, handleHourChange, isTimeDisabled, use12Hours
    ]);

    const renderMinuteColumn = useCallback(() => {
        return (
            <div className={cs.e('column')}>
                <div className={cs.e('column-title')}>分</div>
                <div className={cs.e('column-list')} ref={minuteListRef}>
                    {minutes.map(minute => {
                        const isDisabled = isTimeDisabled(
                            currentHour, 
                            minute, 
                            currentSecond, 
                            use12Hours ? currentPeriod : undefined
                        );
                        
                        return (
                            <div
                                key={`minute-${minute}`}
                                className={cs.gen(
                                    cs.e('column-item'),
                                    cs.is('selected', minute === currentMinute),
                                    cs.is('disabled', isDisabled)
                                )}
                                data-minute={minute}
                                onClick={() => !isDisabled && handleMinuteChange(minute)}
                            >
                                {minute.toString().padStart(2, '0')}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }, [
        cs, minutes, currentHour, currentMinute, currentSecond, 
        currentPeriod, handleMinuteChange, isTimeDisabled, use12Hours
    ]);

    const renderSecondColumn = useCallback(() => {
        if (!showSecond) return null;
        
        return (
            <div className={cs.e('column')}>
                <div className={cs.e('column-title')}>秒</div>
                <div className={cs.e('column-list')} ref={secondListRef}>
                    {seconds.map(second => {
                        const isDisabled = isTimeDisabled(
                            currentHour, 
                            currentMinute, 
                            second, 
                            use12Hours ? currentPeriod : undefined
                        );
                        
                        return (
                            <div
                                key={`second-${second}`}
                                className={cs.gen(
                                    cs.e('column-item'),
                                    cs.is('selected', second === currentSecond),
                                    cs.is('disabled', isDisabled)
                                )}
                                data-second={second}
                                onClick={() => !isDisabled && handleSecondChange(second)}
                            >
                                {second.toString().padStart(2, '0')}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }, [
        cs, seconds, showSecond, currentHour, currentMinute, currentSecond, 
        currentPeriod, handleSecondChange, isTimeDisabled, use12Hours
    ]);

    const renderPeriodColumn = useCallback(() => {
        if (!use12Hours) return null;
        
        return (
            <div className={cs.gen(cs.e('column'), cs.e('period-column'))}>
                <div className={cs.e('column-title')}>时段</div>
                <div className={cs.e('column-list')} ref={periodListRef}>
                    {periods.map(period => {
                        const isDisabled = isTimeDisabled(
                            currentHour, 
                            currentMinute, 
                            currentSecond, 
                            period
                        );
                        
                        return (
                            <div
                                key={`period-${period}`}
                                className={cs.gen(
                                    cs.e('column-item'),
                                    cs.is('selected', period === currentPeriod),
                                    cs.is('disabled', isDisabled)
                                )}
                                data-period={period}
                                onClick={() => !isDisabled && handlePeriodChange(period)}
                            >
                                {period}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }, [
        cs, periods, use12Hours, currentHour, currentMinute, 
        currentSecond, currentPeriod, handlePeriodChange, isTimeDisabled
    ]);

    const renderTimePicker = useCallback(() => {
        return (
            <div className={cs.e('panel')}>
                <div className={cs.e('columns')}>
                    {renderHourColumn()}
                    
                    <div className={cs.e('column-divider')}>:</div>
                    
                    {renderMinuteColumn()}
                    
                    {showSecond && (
                        <>
                            <div className={cs.e('column-divider')}>:</div>
                            {renderSecondColumn()}
                        </>
                    )}
                    
                    {use12Hours && (
                        <>
                            <div className={cs.e('column-divider')}></div>
                            {renderPeriodColumn()}
                        </>
                    )}
                </div>
                
                {!hideFooter && (
                    <div className={cs.e('footer')}>
                        <button
                            className={cs.e('now-btn')}
                            onClick={handleNow}
                        >
                            此刻
                        </button>
                        
                        <button
                            className={cs.e('confirm-btn')}
                            onClick={handleConfirm}
                        >
                            确定
                        </button>
                    </div>
                )}
            </div>
        );
    }, [
        cs, showSecond, use12Hours, hideFooter,
        renderHourColumn, renderMinuteColumn, renderSecondColumn, renderPeriodColumn,
        handleNow, handleConfirm
    ]);

    // 7. 主要JSX返回
    if (embedded) {
        // 嵌入模式：只显示时间选择面板
        return (
            <div
                ref={pickerRef}
                className={cs.gen(
                    cs.b(),
                    cs.m(`size-${size}`),
                    cs.is('embedded'),
                    cs.is('disabled', disabled),
                    className
                )}
                style={style}
                {...restProps}
            >
                {renderTimePicker()}
            </div>
        );
    }

    return (
        <div
            ref={pickerRef}
            className={cs.gen(
                cs.b(),
                cs.m(`size-${size}`),
                cs.m(`placement-${placement}`),
                cs.is('popup-visible', popupVisible),
                cs.is('has-value', hasValue),
                cs.is('disabled', disabled),
                cs.is('show-above', shouldShowAbove),
                cs.is('compact', isCompactMode),
                className
            )}
            style={style}
            {...restProps}
        >
            <div 
                className={cs.e('input-wrapper')}
                onClick={handleInputClick}
            >
                {renderPrefix()}
                <input
                    ref={inputRef}
                    className={cs.e('input')}
                    type="text"
                    placeholder={placeholder}
                    value={displayValue}
                    readOnly={readonly}
                    disabled={disabled}
                    onKeyDown={handleKeyDown}
                />
                {renderSuffix()}
            </div>

            {popupVisible && (
                <div className={cs.e('popup')}>
                    {renderTimePicker()}
                </div>
            )}
        </div>
    );
};
