import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { AriDatePickerProps } from '@ari/types';
import { useCss } from '@ari/utils';
import { AriIcon } from '../icon';
import { AriCalendar } from '../calendar';
import { AriTimePicker } from '../time-picker';

/**
 * 日期选择器组件
 * 
 * 用于选择日期的输入框组件，点击后显示日历进行日期选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/date-picker}
 */
export const AriDatePicker: React.FC<AriDatePickerProps> = ({
    value,
    defaultValue,
    onChange,
    minDate,
    maxDate,
    disabledDates = [],
    disabled = false,
    format,
    placeholder = '请选择日期',
    size = 'medium',
    clearable = true,
    calendarProps,
    placement = 'bottom-start',
    prefixIcon = 'calendar_today',
    readonly = true,
    showTime = false,
    timePickerProps,
    dateTimeFormat,
    className,
    style,
    ...restProps
}) => {
    // 1. 状态初始化和Refs
    const cs = useCss('date-picker');
    const pickerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const today = useMemo(() => new Date(), []);

    // 处理受控和非受控模式
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(defaultValue || value);
    const [tempDate, setTempDate] = useState<Date | undefined>(selectedDate);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'date' | 'time'>('date');
    const [shouldShowAbove, setShouldShowAbove] = useState<boolean>(false);

    // 2. 当value变化时更新选中日期（受控模式）
    useEffect(() => {
        if (value !== undefined) {
            setSelectedDate(value);
            setTempDate(value);
        }
    }, [value]);

    // 点击外部关闭日历
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (pickerRef.current && !pickerRef.current.contains(target)) {
                if (showTime && tempDate) {
                    // 如果是日期时间选择器，确认当前选择
                    setSelectedDate(tempDate);
                    onChange?.(tempDate);
                }
                setPopupVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTime, tempDate, onChange]);

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
                
                // 根据是否显示时间选择器调整所需高度
                const requiredHeight = showTime ? 450 : 350;
                
                // 如果下方空间不足且上方空间更充足，则显示在上方
                const shouldShow = spaceBelow < requiredHeight && spaceAbove > spaceBelow && spaceAbove >= requiredHeight;
                setShouldShowAbove(shouldShow);
            }, 10);
            
            return () => clearTimeout(timer);
        } else if (!popupVisible) {
            // 延迟重置位置状态，让关闭动画先完成
            const resetTimer = setTimeout(() => {
                setShouldShowAbove(false);
            }, 300); // 等待动画完成
            
            return () => clearTimeout(resetTimer);
        }
    }, [popupVisible, showTime, findScrollParent]);

    // 3. 派生状态计算
    const formatDate = useCallback((date: Date | undefined): string => {
        if (!date) return '';
        
        if (showTime && dateTimeFormat) {
            return dateTimeFormat(date);
        } else if (showTime) {
            // 默认的日期时间格式: YYYY-MM-DD HH:mm:ss
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        } else if (format) {
            return format(date);
        } else {
            // 默认格式化: YYYY-MM-DD
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    }, [format, dateTimeFormat, showTime]);

    const displayValue = useMemo(() => formatDate(selectedDate), [formatDate, selectedDate]);
    const hasValue = !!selectedDate;
    const [inputValue, setInputValue] = useState(displayValue);

    useEffect(() => {
        setInputValue(displayValue);
    }, [displayValue]);

    const parseInputDate = useCallback((text: string): Date | undefined => {
        const normalized = text.trim()
            .replace(/[./]/g, '-')
            .replace(/\s+/g, ' ');

        if (!normalized) {
            return undefined;
        }

        const match = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?$/);
        if (match) {
            const [, yearText, monthText, dayText, hourText, minuteText, secondText] = match;
            const year = Number(yearText);
            const month = Number(monthText);
            const day = Number(dayText);
            const fallbackDate = tempDate || selectedDate || today;
            const hours = Number(hourText ?? (showTime ? fallbackDate.getHours() : 0));
            const minutes = Number(minuteText ?? (showTime ? fallbackDate.getMinutes() : 0));
            const seconds = Number(secondText ?? (showTime ? fallbackDate.getSeconds() : 0));

            const parsedDate = new Date(year, month - 1, day, hours, minutes, showTime ? seconds : 0, 0);
            if (
                parsedDate.getFullYear() !== year ||
                parsedDate.getMonth() !== month - 1 ||
                parsedDate.getDate() !== day
            ) {
                return undefined;
            }

            return parsedDate;
        }

        const fallbackDate = new Date(normalized);
        return Number.isNaN(fallbackDate.getTime()) ? undefined : fallbackDate;
    }, [selectedDate, showTime, tempDate, today]);

    const commitInputValue = useCallback(() => {
        if (readonly) {
            return;
        }

        if (!inputValue.trim()) {
            setSelectedDate(undefined);
            setTempDate(undefined);
            onChange?.(undefined as any);
            setInputValue('');
            return;
        }

        const parsedDate = parseInputDate(inputValue);
        if (!parsedDate) {
            setInputValue(displayValue);
            return;
        }

        setSelectedDate(parsedDate);
        setTempDate(parsedDate);
        onChange?.(parsedDate);
        setInputValue(formatDate(parsedDate));
    }, [displayValue, formatDate, inputValue, onChange, parseInputDate, readonly]);

    // 4. 事件处理函数
    const handleInputClick = useCallback(() => {
        if (disabled) return;
        setPopupVisible(true);
        
        // 设置当前选择的日期作为临时日期
        setTempDate(selectedDate || today);
        
        // 默认展示日期选择面板
        setActiveTab('date');
        
        // 聚焦输入框
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }, [disabled, selectedDate, today]);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (readonly) {
            return;
        }

        setInputValue(event.target.value);
    }, [readonly]);

    const handleInputBlur = useCallback(() => {
        commitInputValue();
    }, [commitInputValue]);

    const handleClear = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        
        setSelectedDate(undefined);
        setTempDate(undefined);
        onChange?.(undefined as any);
    }, [disabled, onChange]);

    const handleDateChange = useCallback((date: Date) => {
        if (showTime) {
            // 如果启用了时间选择，保留之前的时间信息
            const newDate = new Date(date);
            if (tempDate) {
                newDate.setHours(tempDate.getHours(), tempDate.getMinutes(), tempDate.getSeconds());
            }
            setTempDate(newDate);
            
            // 自动切换到时间选择面板
            setActiveTab('time');
        } else {
            // 没有时间选择，直接更新选中日期并关闭弹窗
            setSelectedDate(date);
            onChange?.(date);
            setPopupVisible(false);
        }
    }, [onChange, showTime, tempDate]);

    const handleTimeChange = useCallback((time: Date) => {
        if (tempDate) {
            // 保留原来的日期，更新时间部分
            const newDate = new Date(tempDate);
            newDate.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
            setTempDate(newDate);
        } else {
            setTempDate(time);
        }
    }, [tempDate]);

    const handleConfirm = useCallback(() => {
        if (tempDate) {
            setSelectedDate(tempDate);
            onChange?.(tempDate);
        }
        setPopupVisible(false);
    }, [tempDate, onChange]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setPopupVisible(false);
        } else if (e.key === 'Enter') {
            if (!readonly) {
                commitInputValue();
                setPopupVisible(false);
            } else if (!popupVisible) {
                setPopupVisible(true);
            } else if (showTime) {
                handleConfirm();
            }
        }
    }, [commitInputValue, handleConfirm, popupVisible, readonly, showTime]);

    const handleTabChange = useCallback((tab: 'date' | 'time') => {
        setActiveTab(tab);
    }, []);

    // 5. 渲染辅助函数
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
                {clearable && hasValue && !disabled && (
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
    }, [cs, clearable, disabled, hasValue, handleClear]);

    const renderTabs = useCallback(() => {
        if (!showTime) return null;
        
        return (
            <div className={cs.e('tabs')}>
                <div 
                    className={cs.gen(
                        cs.e('tab'),
                        cs.is('active', activeTab === 'date')
                    )} 
                    onClick={() => handleTabChange('date')}
                >
                    日期
                </div>
                <div 
                    className={cs.gen(
                        cs.e('tab'),
                        cs.is('active', activeTab === 'time')
                    )} 
                    onClick={() => handleTabChange('time')}
                >
                    时间
                </div>
            </div>
        );
    }, [cs, showTime, activeTab, handleTabChange]);

    const renderFooter = useCallback(() => {
        if (!showTime) return null;
        
        return (
            <div className={cs.e('footer')}>
                <button
                    type="button"
                    className={cs.e('now-btn')}
                    onClick={() => {
                        const now = new Date();
                        setTempDate(now);
                        setSelectedDate(now);
                        onChange?.(now);
                        setPopupVisible(false);
                    }}
                >
                    此刻
                </button>
                <button
                    type="button"
                    className={cs.e('confirm-btn')}
                    onClick={handleConfirm}
                >
                    确定
                </button>
            </div>
        );
    }, [cs, showTime, handleConfirm, onChange]);

    const renderCalendar = useCallback(() => {
        return (
            <div className={cs.e('calendar-wrapper')}>
                {renderTabs()}
                <div className={cs.e('panel-container')}>
                    <div className={cs.gen(
                        cs.e('date-panel'),
                        cs.is('active', !showTime || activeTab === 'date')
                    )}>
                        <AriCalendar
                            value={tempDate || today}
                            minDate={minDate}
                            maxDate={maxDate}
                            disabledDates={disabledDates}
                            disabled={disabled}
                            onChange={handleDateChange}
                            {...calendarProps}
                        />
                    </div>
                    {showTime && (
                        <div className={cs.gen(
                            cs.e('time-panel'),
                            cs.is('active', activeTab === 'time')
                        )}>
                            <AriTimePicker
                                value={tempDate || today}
                                onChange={handleTimeChange}
                                disabled={disabled}
                                embedded={true}
                                hideFooter={true}
                                {...timePickerProps}
                            />
                        </div>
                    )}
                </div>
                {renderFooter()}
            </div>
        );
    }, [
        cs, tempDate, today, minDate, maxDate, disabledDates, disabled, 
        showTime, activeTab, handleDateChange, handleTimeChange, 
        calendarProps, timePickerProps, renderTabs, renderFooter
    ]);

    // 6. 主要JSX返回
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
                cs.is('with-time', showTime),
                cs.is('show-above', shouldShowAbove),
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
                    value={readonly ? displayValue : inputValue}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleInputBlur}
                />
                {renderSuffix()}
            </div>

            <div className={cs.e('popup')}>
                {renderCalendar()}
            </div>
        </div>
    );
};
