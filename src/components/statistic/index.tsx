import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useCss } from "@ari/utils";
import { AriStatisticProps, AriCountdownProps } from '@ari/types/components';
import { AriSpin } from '@ari/components/spin';

/**
 * 统计数值组件
 * 
 * 用于展示统计数据、指标等数值信息。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/statistic}
 * 
 */
export const AriStatistic: React.FC<AriStatisticProps> = ({
    title,
    value,
    prefix,
    suffix,
    precision,
    loading = false,
    className,
    valueStyle,
    groupSeparator = ',',
    decimalSeparator = '.',
    formatter,
    size = 'default',
    color,
    layout = 'vertical',
    align = 'left',
}) => {
    const cs = useCss('statistic');

    // 格式化数值
    const formatValue = (val: any): React.ReactNode => {
        // 如果有自定义格式化函数，优先使用
        if (formatter) {
            return formatter(val);
        }

        // 如果不是数字，直接返回
        if (typeof val !== 'number' && typeof val !== 'string') {
            return val;
        }

        let num = typeof val === 'string' ? parseFloat(val) : val;

        // 如果解析失败，返回原值
        if (isNaN(num)) {
            return val;
        }

        // 处理精度
        if (precision !== undefined) {
            num = parseFloat(num.toFixed(precision));
        }

        // 转换为字符串并分离整数和小数部分
        const parts = num.toString().split('.');
        let integerPart = parts[0];
        const decimalPart = parts[1];

        // 添加千分位分隔符
        if (groupSeparator) {
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
        }

        // 组合结果
        return decimalPart 
            ? `${integerPart}${decimalSeparator}${decimalPart}` 
            : integerPart;
    };

    const renderValue = () => {
        if (loading) {
            return <AriSpin size="sm" />;
        }

        const formattedValue = formatValue(value);

        return (
            <span className={cs.e('value-content')}>
                {prefix && <span className={cs.e('prefix')}>{prefix}</span>}
                <span className={cs.e('value-text')}>{formattedValue}</span>
                {suffix && <span className={cs.e('suffix')}>{suffix}</span>}
            </span>
        );
    };

    // 生成类名
    const classNames = [
        cs.b(),
        size !== 'default' ? cs.m(size) : '',
        color ? cs.m(color) : '',
        layout === 'inline' ? cs.m('inline') : '',
        align !== 'left' ? cs.m(align) : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames}>
            {title && <div className={cs.e('title')}>{title}</div>}
            <div className={cs.e('value')} style={valueStyle}>
                {renderValue()}
            </div>
        </div>
    );
};

/**
 * 倒计时组件
 * 
 * 继承自 AriStatistic，用于展示倒计时信息。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/countdown}
 * 
 * ExamplePath: components/statistic/example.tsx
 * 
 * Extends: {@link AriStatistic}
 */
export const AriCountdown: React.FC<AriCountdownProps> = ({
    value,
    format = 'HH:mm:ss',
    onFinish,
    onChange,
    ...restProps
}) => {
    const [countdown, setCountdown] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    // 解析时间戳
    const parseTimestamp = useCallback((val: number | string | Date | undefined): number => {
        if (!val) return 0;
        
        let timestamp: number;
        
        if (val instanceof Date) {
            timestamp = val.getTime();
        } else if (typeof val === 'string') {
            timestamp = new Date(val).getTime();
        } else {
            timestamp = val;
        }
        
        // 如果时间戳小于当前时间，说明是相对时间（毫秒数）
        const now = Date.now();
        if (timestamp < now) {
            timestamp = now + timestamp;
        }
        
        return Math.max(0, timestamp - now);
    }, []);

    // 格式化倒计时
    const formatCountdown = useCallback((ms: number): string => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const s = seconds % 60;
        const m = minutes % 60;
        const h = hours % 24;
        const d = days;

        // 根据格式字符串替换时间单位
        let result = format;
        
        // 替换天数
        result = result.replace(/DD/g, d.toString().padStart(2, '0'));
        result = result.replace(/D/g, d.toString());
        
        // 替换小时
        result = result.replace(/HH/g, h.toString().padStart(2, '0'));
        result = result.replace(/H/g, h.toString());
        
        // 替换分钟
        result = result.replace(/mm/g, m.toString().padStart(2, '0'));
        result = result.replace(/m/g, m.toString());
        
        // 替换秒
        result = result.replace(/ss/g, s.toString().padStart(2, '0'));
        result = result.replace(/s/g, s.toString());
        
        // 替换毫秒
        const milliseconds = ms % 1000;
        result = result.replace(/SSS/g, milliseconds.toString().padStart(3, '0'));
        result = result.replace(/SS/g, Math.floor(milliseconds / 10).toString().padStart(2, '0'));
        result = result.replace(/S/g, Math.floor(milliseconds / 100).toString());
        
        return result;
    }, [format]);

    // 处理倒计时更新
    const updateCountdown = useCallback(() => {
        setCountdown(prev => {
            const newValue = Math.max(0, prev - 1000);
            
            if (onChange) {
                onChange(newValue);
            }
            
            if (newValue === 0) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                if (onFinish) {
                    onFinish();
                }
            }
            
            return newValue;
        });
    }, [onChange, onFinish]);

    // 初始化和监听value变化
    useEffect(() => {
        const initialCountdown = parseTimestamp(value);
        setCountdown(initialCountdown);

        if (initialCountdown > 0) {
            intervalRef.current = window.setInterval(updateCountdown, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [value, parseTimestamp, updateCountdown]);

    return (
        <AriStatistic
            {...restProps}
            value={formatCountdown(countdown)}
            formatter={undefined}
        />
    );
};

export default AriStatistic;
