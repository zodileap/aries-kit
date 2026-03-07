import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriCalendarProps } from '@ari/types';
import { AriIcon } from '../icon';

/**
 * 日历组件
 * 
 * 用于日期展示和选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/calendar}
 */
export const AriCalendar: React.FC<AriCalendarProps> = ({
    value,
    defaultValue,
    onChange,
    minDate,
    maxDate,
    disabledDates = [],
    disabled = false,
    mode: propMode = 'date',
    dateRender,
    headerRender,
    showToday = true,
    firstDayOfWeek = 0,
    dateShape = 'circle',
    className,
    style,
    ...props
}) => {
    // 1. 状态初始化和Refs
    const cs = useCss('calendar');
    const today = useMemo(() => new Date(), []);

    // 处理受控和非受控模式
    const [selectedDate, setSelectedDate] = useState<Date>(defaultValue || today);
    const [currentMonth, setCurrentMonth] = useState<Date>(value || defaultValue || today);
    const [mode, setMode] = useState<'date' | 'month' | 'year'>(propMode);

    // 2. 当value变化时更新选中日期（受控模式）
    useEffect(() => {
        if (value) {
            setSelectedDate(value);
            setCurrentMonth(new Date(value.getFullYear(), value.getMonth(), 1));
        }
    }, [value]);

    // 当propMode变化时更新mode
    useEffect(() => {
        setMode(propMode);
    }, [propMode]);

    // 3. 事件处理函数
    const handlePrevMonth = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        setCurrentMonth(prevMonth => {
            const year = prevMonth.getFullYear();
            const month = prevMonth.getMonth() - 1;
            return new Date(year, month, 1);
        });
    }, []);

    const handleNextMonth = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        setCurrentMonth(prevMonth => {
            const year = prevMonth.getFullYear();
            const month = prevMonth.getMonth() + 1;
            return new Date(year, month, 1);
        });
    }, []);

    const handlePrevYear = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        setCurrentMonth(prevMonth => {
            const year = prevMonth.getFullYear() - 1;
            const month = prevMonth.getMonth();
            return new Date(year, month, 1);
        });
    }, []);

    const handleNextYear = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        setCurrentMonth(prevMonth => {
            const year = prevMonth.getFullYear() + 1;
            const month = prevMonth.getMonth();
            return new Date(year, month, 1);
        });
    }, []);

    const handleModeChange = useCallback((newMode: 'date' | 'month' | 'year', e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        setMode(newMode);
    }, []);

    const handleSelectDate = useCallback((date: Date, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        
        if (disabled) return;

        // 检查是否在允许范围内
        if (minDate && date < minDate) return;
        if (maxDate && date > maxDate) return;

        // 检查是否在禁用日期中
        const isDisabled = disabledDates.some(disabledDate =>
            disabledDate.getFullYear() === date.getFullYear() &&
            disabledDate.getMonth() === date.getMonth() &&
            disabledDate.getDate() === date.getDate()
        );
        if (isDisabled) return;

        setSelectedDate(date);

        // 当选择日期后，如果当前模式不是日期模式，则切换到日期模式
        if (mode !== 'date') {
            setMode('date');
        }

        // 当选择的月份不是当前显示的月份时，切换到该月
        if (date.getMonth() !== currentMonth.getMonth() ||
            date.getFullYear() !== currentMonth.getFullYear()) {
            setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
        }

        // 调用onChange回调
        onChange?.(date);
    }, [disabled, minDate, maxDate, disabledDates, onChange, mode, currentMonth]);

    const handleSelectMonth = useCallback((month: number, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        if (disabled) return;

        const newDate = new Date(currentMonth.getFullYear(), month, 1);
        setCurrentMonth(newDate);

        // 如果是月份选择模式，则选择该月份的1号
        if (mode === 'month') {
            handleSelectDate(newDate);
        } else {
            setMode('date');
        }
    }, [disabled, currentMonth, mode, handleSelectDate]);

    const handleSelectYear = useCallback((year: number, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        if (disabled) return;

        const newDate = new Date(year, currentMonth.getMonth(), 1);
        setCurrentMonth(newDate);

        // 根据当前模式决定下一步
        if (mode === 'year') {
            handleSelectDate(newDate);
        } else {
            setMode('month');
        }
    }, [disabled, currentMonth, mode, handleSelectDate]);

    const handleSelectToday = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }

        handleSelectDate(today);
    }, [handleSelectDate, today]);

    // 4. 业务逻辑函数
    const isDateDisabled = useCallback((date: Date): boolean => {
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;

        return disabledDates.some(disabledDate =>
            disabledDate.getFullYear() === date.getFullYear() &&
            disabledDate.getMonth() === date.getMonth() &&
            disabledDate.getDate() === date.getDate()
        );
    }, [minDate, maxDate, disabledDates]);

    const isToday = useCallback((date: Date): boolean => {
        return date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();
    }, [today]);

    const isSelected = useCallback((date: Date): boolean => {
        return selectedDate &&
            date.getFullYear() === selectedDate.getFullYear() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getDate() === selectedDate.getDate();
    }, [selectedDate]);

    // 5. 渲染函数
    const renderHeader = useCallback(() => {
        // 如果有自定义头部渲染函数，则使用它
        if (headerRender) {
            return headerRender(
                currentMonth,
                mode,
                handleModeChange,
                handlePrevMonth,
                handleNextMonth,
                handlePrevYear,
                handleNextYear
            );
        }

        // 默认头部渲染
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const monthNames = [
            '一月', '二月', '三月', '四月', '五月', '六月',
            '七月', '八月', '九月', '十月', '十一月', '十二月'
        ];

        return (
            <div className={cs.e('header')}>
                <div className={cs.e('header-left')}>
                    {mode === 'date' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={handlePrevMonth}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_left" />
                        </button>
                    )}
                    {mode === 'month' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={handlePrevYear}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_left" />
                        </button>
                    )}
                    {mode === 'year' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentMonth(new Date(year - 10, month, 1));
                            }}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_left" />
                        </button>
                    )}
                </div>

                <div className={cs.e('header-title')}>
                    {mode === 'date' && (
                        <>
                            <button
                                type="button"
                                className={cs.e('title-btn')}
                                onClick={(e) => handleModeChange('year', e)}
                                disabled={disabled}
                            >
                                {year}年
                            </button>
                            <button
                                type="button"
                                className={cs.e('title-btn')}
                                onClick={(e) => handleModeChange('month', e)}
                                disabled={disabled}
                            >
                                {monthNames[month]}
                            </button>
                        </>
                    )}
                    {mode === 'month' && (
                        <button
                            type="button"
                            className={cs.e('title-btn')}
                            onClick={(e) => handleModeChange('year', e)}
                            disabled={disabled}
                        >
                            {year}年
                        </button>
                    )}
                    {mode === 'year' && (
                        <span className={cs.e('year-range')}>
                            {Math.floor(year / 10) * 10} - {Math.floor(year / 10) * 10 + 9}
                        </span>
                    )}
                </div>

                <div className={cs.e('header-right')}>
                    {mode === 'date' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={handleNextMonth}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_right" />
                        </button>
                    )}
                    {mode === 'month' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={handleNextYear}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_right" />
                        </button>
                    )}
                    {mode === 'year' && (
                        <button
                            type="button"
                            className={cs.e('btn')}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentMonth(new Date(year + 10, month, 1));
                            }}
                            disabled={disabled}
                        >
                            <AriIcon name="chevron_right" />
                        </button>
                    )}
                </div>
            </div>
        );
    }, [
        cs, mode, currentMonth, disabled, headerRender,
        handleModeChange, handlePrevMonth, handleNextMonth, handlePrevYear, handleNextYear
    ]);

    const renderDateContent = useCallback(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        // 获取当月的第一天是星期几
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // 获取当月的天数
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 获取上个月的天数
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        // 计算日历表格中的行数（通常为6行）
        const rows = Math.ceil((firstDayOfMonth + daysInMonth) / 7);

        // 调整星期几的顺序，使其从firstDayOfWeek开始
        const adjustedFirstDay = (firstDayOfMonth - firstDayOfWeek + 7) % 7;

        // 星期标题
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        // 根据firstDayOfWeek调整星期标题
        const adjustedWeekdays = [
            ...weekdays.slice(firstDayOfWeek),
            ...weekdays.slice(0, firstDayOfWeek)
        ];

        return (
            <div className={cs.e('body')}>
                <div className={cs.e('weekdays')}>
                    {adjustedWeekdays.map((day, index) => (
                        <div key={index} className={cs.e('weekday')}>
                            {day}
                        </div>
                    ))}
                </div>

                <div className={cs.e('days')}>
                    {Array.from({ length: rows * 7 }).map((_, index) => {
                        // 计算日期
                        let day: number;
                        let currentDate: Date;
                        let isCurrentMonth: boolean = true;

                        if (index < adjustedFirstDay) {
                            // 上个月的日期
                            day = daysInPrevMonth - adjustedFirstDay + index + 1;
                            currentDate = new Date(year, month - 1, day);
                            isCurrentMonth = false;
                        } else if (index < adjustedFirstDay + daysInMonth) {
                            // 当月的日期
                            day = index - adjustedFirstDay + 1;
                            currentDate = new Date(year, month, day);
                        } else {
                            // 下个月的日期
                            day = index - adjustedFirstDay - daysInMonth + 1;
                            currentDate = new Date(year, month + 1, day);
                            isCurrentMonth = false;
                        }

                        // 检查日期状态
                        const isCurDay = isToday(currentDate);
                        const isDateSelected = isSelected(currentDate);
                        const dateDisabled = isDateDisabled(currentDate);

                        // 使用自定义渲染或默认渲染
                        let dateContent;
                        if (dateRender && isCurrentMonth) {
                            dateContent = dateRender(currentDate, isDateSelected, dateDisabled, isCurDay);
                        } else {
                            dateContent = day;
                        }

                        return (
                            <div
                                key={index}
                                className={cs.gen(
                                    cs.e('day'),
                                    cs.is('other-month', !isCurrentMonth),
                                    cs.is('today', isCurDay),
                                    cs.is('selected', isDateSelected),
                                    cs.is('disabled', dateDisabled),
                                    cs.m(`shape-${dateShape}`)
                                )}
                                onClick={(e) => {
                                    if (!dateDisabled) {
                                        handleSelectDate(currentDate, e);
                                    }
                                }}
                            >
                                {dateContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }, [
        currentMonth, firstDayOfWeek, dateRender, dateShape,
        cs, isToday, isSelected, isDateDisabled, handleSelectDate
    ]);

    const renderMonthContent = useCallback(() => {
        const year = currentMonth.getFullYear();
        const monthNames = [
            '一月', '二月', '三月', '四月', '五月', '六月',
            '七月', '八月', '九月', '十月', '十一月', '十二月'
        ];

        return (
            <div className={cs.e('months')}>
                {monthNames.map((name, index) => {
                    const monthDate = new Date(year, index, 1);
                    const isMonthDisabled = isDateDisabled(monthDate);
                    const isMonthSelected = selectedDate &&
                        selectedDate.getFullYear() === year &&
                        selectedDate.getMonth() === index;

                    return (
                        <div
                            key={index}
                            className={cs.gen(
                                cs.e('month'),
                                cs.is('selected', isMonthSelected),
                                cs.is('disabled', isMonthDisabled),
                                cs.m(`shape-${dateShape}`)
                            )}
                            onClick={(e) => {
                                if (!isMonthDisabled) {
                                    handleSelectMonth(index, e);
                                }
                            }}
                        >
                            {name}
                        </div>
                    );
                })}
            </div>
        );
    }, [currentMonth, selectedDate, dateShape, isDateDisabled, handleSelectMonth, cs]);

    const renderYearContent = useCallback(() => {
        const year = currentMonth.getFullYear();
        const startYear = Math.floor(year / 10) * 10;

        return (
            <div className={cs.e('years')}>
                {Array.from({ length: 12 }).map((_, index) => {
                    const displayYear = startYear + index - 1;
                    const yearDate = new Date(displayYear, 0, 1);
                    const isYearDisabled = isDateDisabled(yearDate);
                    const isYearSelected = selectedDate && selectedDate.getFullYear() === displayYear;

                    return (
                        <div
                            key={index}
                            className={cs.gen(
                                cs.e('year'),
                                cs.is('selected', isYearSelected),
                                cs.is('disabled', isYearDisabled),
                                cs.is('other-decade', index === 0 || index === 11),
                                cs.m(`shape-${dateShape}`)
                            )}
                            onClick={(e) => {
                                if (!isYearDisabled) {
                                    handleSelectYear(displayYear, e);
                                }
                            }}
                        >
                            {displayYear}
                        </div>
                    );
                })}
            </div>
        );
    }, [currentMonth, selectedDate, dateShape, isDateDisabled, handleSelectYear, cs]);

    const renderFooter = useCallback(() => {
        if (!showToday) return null;

        return (
            <div className={cs.e('footer')}>
                <button
                    type="button"
                    className={cs.e('today-btn')}
                    onClick={(e) => handleSelectToday(e)}
                    disabled={disabled || isDateDisabled(today)}
                >
                    今天
                </button>
            </div>
        );
    }, [cs, showToday, handleSelectToday, disabled, isDateDisabled, today]);

    // 6. 主要JSX返回
    return (
        <div
            className={cs.gen(
                cs.b(),
                cs.is('disabled', disabled),
                className
            )}
            style={style}
            {...props}
        >
            {renderHeader()}

            {mode === 'date' && renderDateContent()}
            {mode === 'month' && renderMonthContent()}
            {mode === 'year' && renderYearContent()}

            {renderFooter()}
        </div>
    );
};