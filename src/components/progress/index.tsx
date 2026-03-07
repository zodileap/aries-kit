import React, { useMemo } from 'react';
import { AriProgressProps } from '@ari/types/components';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';

/**
 * 进度条组件
 * 用于展示任务的完成进度，支持线条、圆形和仪表盘等多种样式
 * 
 * Example:
 * {@link https://aries-react.dev/docs/progress}
 */
export const AriProgress: React.FC<AriProgressProps> = ({
    percent = 0,
    type = 'line',
    status = 'normal',
    showInfo = true,
    format,
    successPercent,
    trailColor,
    size = 'default',
    strokeColor,
    strokeWidth = 8,
    gapPosition = 'bottom',
    gapDegree = 75,
    strokeRounded = false,
    steps,
    stepSmall = false,
    className,
    style,
    ...restProps
}) => {
    const cs = useCss('progress');

    // 计算实际的百分比值（确保在0-100之间）
    const normalizedPercent = useMemo(() => Math.min(100, Math.max(0, percent)), [percent]);
    const normalizedSuccessPercent = useMemo(() => 
        successPercent ? Math.min(100, Math.max(0, successPercent)) : undefined, 
        [successPercent]
    );

    // 自动计算状态
    const actualStatus = useMemo(() => {
        if (status !== 'normal') return status;
        if (normalizedPercent >= 100) return 'success';
        return 'normal';
    }, [status, normalizedPercent]);

    // 渲染进度信息
    const renderInfo = () => {
        if (!showInfo) return null;

        if (format) {
            return <span className={cs.e('info-text')}>{format(normalizedPercent, normalizedSuccessPercent)}</span>;
        }

        const icon = actualStatus === 'exception' ? 'close_circle' : 
                     actualStatus === 'success' ? 'check_circle' : null;

        return (
            <span className={cs.e('info')}>
                {icon ? (
                    <AriIcon name={icon} className={cs.e('icon')} />
                ) : (
                    <span className={cs.e('info-text')}>{`${normalizedPercent}%`}</span>
                )}
            </span>
        );
    };

    // 渲染线条进度条
    const renderLine = () => {
        const innerStyle: React.CSSProperties = {};
        if (strokeColor) {
            if (typeof strokeColor === 'string') {
                innerStyle.backgroundColor = strokeColor;
            } else {
                innerStyle.background = `linear-gradient(${strokeColor.direction || 'to right'}, ${strokeColor.from}, ${strokeColor.to})`;
            }
        }

        const trailStyle: React.CSSProperties = trailColor ? { backgroundColor: trailColor } : {};
        const barStyle: React.CSSProperties = { height: `${strokeWidth}px`, ...trailStyle };

        if (steps) {
            return (
                <div className={cs.e('steps')}>
                    {Array.from({ length: steps }, (_, index) => {
                        const stepPercent = (100 / steps) * (index + 1);
                        const stepActive = normalizedPercent >= stepPercent;
                        const stepSuccess = normalizedSuccessPercent && normalizedSuccessPercent >= stepPercent;
                        const stepStatus = stepSuccess ? 'success' : stepActive ? actualStatus : 'default';
                        
                        return (
                            <div 
                                key={index} 
                                className={cs.gen(
                                    cs.e('step'),
                                    cs.is(`step-${stepStatus}`),
                                    cs.is('step-active', stepActive)
                                )}
                                style={stepActive ? innerStyle : {}}
                            />
                        );
                    })}
                    {renderInfo()}
                </div>
            );
        }

        return (
            <>
                <div className={cs.e('outer')}>
                    <div className={cs.e('inner')} style={barStyle}>
                        <div 
                            className={cs.e('bg')} 
                            style={{
                                width: `${normalizedPercent}%`,
                                ...innerStyle,
                                borderRadius: strokeRounded ? '999px' : undefined
                            }}
                        />
                        {normalizedSuccessPercent !== undefined && (
                            <div 
                                className={cs.e('success-bg')} 
                                style={{
                                    width: `${normalizedSuccessPercent}%`,
                                    borderRadius: strokeRounded ? '999px' : undefined
                                }}
                            />
                        )}
                    </div>
                </div>
                {renderInfo()}
            </>
        );
    };

    // 渲染圆形/仪表盘进度条
    const renderCircle = () => {
        const circleSize = typeof size === 'number' ? size : 
                           size === 'sm' ? 80 : 
                           size === 'lg' ? 160 : 120;
        
        const circleStrokeWidth = strokeWidth;
        const radius = (circleSize - circleStrokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        
        // 计算仪表盘样式的缺口
        const gapOffset = type === 'dashboard' ? (gapDegree / 360) * circumference : 0;
        const dashboardCircumference = circumference - gapOffset;
        
        // 进度值的偏移量
        const progressOffset = dashboardCircumference * (1 - normalizedPercent / 100);
        const successProgressOffset = normalizedSuccessPercent !== undefined
            ? dashboardCircumference * (1 - normalizedSuccessPercent / 100)
            : null;

        // 计算旋转角度以确定缺口位置
        const rotateAngle = {
            top: -90,
            bottom: 90,
            left: 180,
            right: 0
        }[gapPosition];

        const svgStyle = type === 'dashboard' 
            ? { transform: `rotate(${rotateAngle + gapDegree / 2}deg)` }
            : {};

        const pathStyle: React.CSSProperties = {
            strokeDasharray: `${dashboardCircumference} ${circumference}`,
            strokeDashoffset: progressOffset,
            transition: 'stroke-dashoffset 0.6s ease 0s',
            stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
            strokeLinecap: strokeRounded ? 'round' : 'butt'
        };

        const successPathStyle: React.CSSProperties = {
            strokeDasharray: `${dashboardCircumference} ${circumference}`,
            strokeDashoffset: successProgressOffset || 0,
            transition: 'stroke-dashoffset 0.6s ease 0s',
            strokeLinecap: strokeRounded ? 'round' : 'butt'
        };

        return (
            <div className={cs.e('circle')} style={{ width: circleSize, height: circleSize }}>
                <svg viewBox={`0 0 ${circleSize} ${circleSize}`} style={svgStyle}>
                    {/* 轨道 */}
                    <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        stroke={trailColor || 'var(--divider-color)'}
                        strokeWidth={circleStrokeWidth}
                        strokeDasharray={`${dashboardCircumference} ${circumference}`}
                    />
                    {/* 成功进度 */}
                    {normalizedSuccessPercent !== undefined && (
                        <circle
                            className={cs.e('circle-path-success')}
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            fill="none"
                            strokeWidth={circleStrokeWidth}
                            style={successPathStyle}
                        />
                    )}
                    {/* 主进度 */}
                    <circle
                        className={cs.e('circle-path')}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        strokeWidth={circleStrokeWidth}
                        style={pathStyle}
                    />
                </svg>
                <div className={cs.e('circle-info')}>
                    {renderInfo()}
                </div>
            </div>
        );
    };

    const customStyle = { ...style } as React.CSSProperties & { [key: string]: string };
    if (typeof strokeColor === 'object' && strokeColor.from && strokeColor.to) {
        customStyle['--progress-gradient'] = `linear-gradient(${strokeColor.direction || 'to right'}, ${strokeColor.from}, ${strokeColor.to})`;
    }

    return (
        <div 
            className={cs.gen(
                className,
                cs.b(),
                cs.m(type),
                cs.m(actualStatus),
                cs.m(size),
                cs.is('show-info', showInfo),
                cs.is('steps', !!steps),
                cs.is('step-small', stepSmall && !!steps)
            )}
            style={customStyle}
            {...restProps}
        >
            {type === 'line' ? renderLine() : renderCircle()}
        </div>
    );
};
