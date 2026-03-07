import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';
import { AriChartProps, AriChartDataPoint, AriChartSeries } from '@ari/types';

/**
 * 图表组件
 * 
 * 支持饼图、折线图和柱状图的数据可视化组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/chart}
 */
export const AriChart: React.FC<AriChartProps> = ({
    type = 'bar',
    title,
    width = '100%',
    height = 300,
    maxHeight = '600px', // 添加默认的最大高度
    xAxis = [],
    yAxis,
    data = [],
    series = [],
    showLegend = true,
    legendPosition = 'bottom',
    showDataLabels = false,
    interactive = true,
    animationDuration = 750,
    className,
    style: customStyle,
    onElementClick,
    ...props
}) => {
    // 使用CSS工具
    const cs = useCss('chart');

    // 图表容器引用
    const chartRef = useRef<HTMLDivElement>(null);

    // 状态
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    // 计算样式
    const containerStyle = useMemo(() => {
        // 确保CSS变量包含单位
        const heightValue = typeof height === 'number' ? `${height}px` : height;
        const widthValue = typeof width === 'number' ? `${width}px` : width;
        const maxHeightValue = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
        
        return {
            width: widthValue,
            height: heightValue,
            maxHeight: maxHeightValue,
            ...customStyle,
        };
    }, [width, height, maxHeight, customStyle]);

    // 颜色映射，使用预设的颜色
    const colorPalette = useMemo(() => [
        'var(--z-ramp-blue-500)',
        'var(--z-ramp-green-500)',
        'var(--z-ramp-orange-500)',
        'var(--z-ramp-purple-500)',
        'var(--z-ramp-red-500)',
        'var(--z-ramp-teal-500)',
        'var(--z-ramp-violet-500)',
        'var(--z-ramp-yellow-500)',
        'var(--z-ramp-pink-500)',
        'var(--z-ramp-persimmon-500)',
    ], []);

    // 处理数据，确保每个数据点都有颜色
    const processedData = useMemo(() => {
        return data.map((point, index) => ({
            ...point,
            color: point.color || colorPalette[index % colorPalette.length]
        }));
    }, [data, colorPalette]);

    // 处理系列数据，确保每个系列都有颜色
    const processedSeries = useMemo(() => {
        return series.map((item, index) => ({
            ...item,
            color: item.color || colorPalette[index % colorPalette.length]
        }));
    }, [series, colorPalette]);

    // 计算饼图数据
    const pieData = useMemo(() => {
        if (type !== 'pie' || !processedData.length) return [];

        const total = processedData.reduce((sum, item) => sum + item.value, 0);
        let startAngle = 0;

        return processedData.map((item, index) => {
            const percentage = item.value / total;
            const angle = Math.PI * 2 * percentage;
            const path = calculatePieSlicePath(startAngle, startAngle + angle, 0.8);

            const result = {
                ...item,
                percentage,
                startAngle,
                endAngle: startAngle + angle,
                path
            };

            startAngle += angle;
            return result;
        });
    }, [type, processedData]);

    // 计算柱状图或折线图的数据比例
    const chartDimensions = useMemo(() => {
        if (type === 'pie' || !processedSeries.length || !xAxis.length) return null;

        const allValues = processedSeries.flatMap(s => s.data);
        const minValue = yAxis?.min !== undefined ? yAxis.min : Math.min(0, ...allValues);
        const maxValue = yAxis?.max !== undefined ? yAxis.max : Math.max(...allValues);
        const range = maxValue - minValue;

        return {
            minValue,
            maxValue,
            range,
            categories: xAxis,
            series: processedSeries
        };
    }, [type, processedSeries, xAxis, yAxis]);

    // 图例数据
    const legendItems = useMemo(() => {
        if (type === 'pie') {
            return processedData.map(item => ({
                label: item.label,
                color: item.color
            }));
        } else {
            return processedSeries.map(item => ({
                label: item.name,
                color: item.color
            }));
        }
    }, [type, processedData, processedSeries]);

    // 事件处理函数
    const handleItemClick = useCallback((index: number) => {
        if (!interactive) return;

        setSelectedItem(selectedItem === index ? null : index);

        if (onElementClick) {
            if (type === 'pie') {
                onElementClick(processedData[index], index);
            } else {
                onElementClick(processedSeries[index], index);
            }
        }
    }, [interactive, selectedItem, onElementClick, type, processedData, processedSeries]);

    // 辅助函数：计算饼图切片路径
    function calculatePieSlicePath(startAngle: number, endAngle: number, radius: number): string {
        const center = { x: 1, y: 1 };
        const innerRadius = radius * 0.4; // 内半径，用于创建环形图效果

        const startOuterX = center.x + Math.cos(startAngle) * radius;
        const startOuterY = center.y + Math.sin(startAngle) * radius;
        const endOuterX = center.x + Math.cos(endAngle) * radius;
        const endOuterY = center.y + Math.sin(endAngle) * radius;

        const startInnerX = center.x + Math.cos(startAngle) * innerRadius;
        const startInnerY = center.y + Math.sin(startAngle) * innerRadius;
        const endInnerX = center.x + Math.cos(endAngle) * innerRadius;
        const endInnerY = center.y + Math.sin(endAngle) * innerRadius;

        const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

        return `
      M ${startOuterX} ${startOuterY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
      L ${endInnerX} ${endInnerY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInnerX} ${startInnerY}
      Z
    `;
    }

    // 辅助函数：格式化数字为简洁形式
    const formatNumber = useCallback((num: number): string => {
        if (Math.abs(num) >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (Math.abs(num) >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        } else {
            return num.toString();
        }
    }, []);

    // 渲染饼图
    const renderPieChart = useCallback(() => {
        if (!pieData.length) return null;

        return (
            <svg viewBox="0 0 2 2" className={cs.e('pie')}>
                <g>
                    {pieData.map((slice, index) => (
                        <g
                            key={`slice-${index}`}
                            className={cs.gen(
                                cs.e('slice'),
                                cs.is('selected', selectedItem === index)
                            )}
                            onClick={() => handleItemClick(index)}
                        >
                            <path
                                d={slice.path}
                                fill={slice.color}
                                stroke="var(--z-ramp-white-1000)"
                                strokeWidth="0.01"
                                style={{
                                    transform: selectedItem === index ? 'scale(1.05)' : undefined,
                                    transformOrigin: 'center',
                                    transition: `transform ${animationDuration}ms`
                                }}
                            />
                            {showDataLabels && (
                                <text
                                    x={1 + Math.cos(slice.startAngle + (slice.endAngle - slice.startAngle) / 2) * 0.6}
                                    y={1 + Math.sin(slice.startAngle + (slice.endAngle - slice.startAngle) / 2) * 0.6}
                                    textAnchor="middle"
                                    fontSize="0.08"
                                    fill="var(--z-ramp-white-1000)"
                                    stroke="var(--z-ramp-grey-900)"
                                    strokeWidth="0.01"
                                    fontWeight="700"
                                    paintOrder="stroke fill"
                                >
                                    {(slice.percentage * 100).toFixed(1)}%
                                </text>
                            )}
                        </g>
                    ))}
                </g>
            </svg>
        );
    }, [pieData, selectedItem, handleItemClick, showDataLabels, animationDuration]);

    // 渲染柱状图
    const renderBarChart = useCallback(() => {
        if (!chartDimensions) return null;

        const { minValue, maxValue, range, categories, series } = chartDimensions;
        const barWidth = 0.8 / (categories.length * series.length);
        const padding = barWidth * 0.2;

        return (
            <svg viewBox={`0 0 1 1`} className={cs.e('bar')}>
                {/* Y轴 */}
                <line x1="0.1" y1="0.1" x2="0.1" y2="0.9" stroke="var(--z-ramp-grey-300)" strokeWidth="0.005" />

                {/* X轴 */}
                <line x1="0.1" y1="0.9" x2="0.9" y2="0.9" stroke="var(--z-ramp-grey-300)" strokeWidth="0.005" />

                {/* Y轴刻度 */}
                {[0, 0.25, 0.5, 0.75, 1].map(tick => {
                    const value = minValue + range * (1 - tick);
                    return (
                        <g key={`y-tick-${tick}`}>
                            <line
                                x1="0.09"
                                y1={0.1 + tick * 0.8}
                                x2="0.11"
                                y2={0.1 + tick * 0.8}
                                stroke="var(--z-ramp-grey-300)"
                                strokeWidth="0.003"
                            />
                            <text
                                x="0.07"
                                y={0.1 + tick * 0.8 + 0.015}
                                textAnchor="end"
                                fontSize="0.03"
                                fill="var(--z-ramp-grey-500)"
                            >
                                {formatNumber(value)}
                            </text>
                        </g>
                    );
                })}

                {/* X轴标签 */}
                {categories.map((category, i) => (
                    <text
                        key={`x-label-${i}`}
                        x={0.1 + (i + 0.5) * (0.8 / categories.length)}
                        y="0.96"
                        textAnchor="middle"
                        fontSize="0.03"
                        fill="var(--z-ramp-grey-500)"
                    >
                        {category}
                    </text>
                ))}

                {/* 数据条 */}
                {series.map((serie, serieIndex) => (
                    <g key={`serie-${serieIndex}`}>
                        {serie.data.map((value, i) => {
                            const barHeight = Math.abs(value - minValue) / range * 0.8;
                            const x = 0.1 + (i + serieIndex / series.length) * (0.8 / categories.length) + padding;
                            const y = value >= 0
                                ? 0.9 - (value - minValue) / range * 0.8
                                : 0.9 - (0 - minValue) / range * 0.8;

                            return (
                                <g
                                    key={`bar-${serieIndex}-${i}`}
                                    className={cs.gen(
                                        cs.e('bar-item'),
                                        cs.is('selected', selectedItem === serieIndex),
                                        cs.is('dimmed', selectedItem !== null && selectedItem !== serieIndex)
                                    )}
                                    onClick={() => handleItemClick(serieIndex)}
                                >
                                    <rect
                                        x={x}
                                        y={y}
                                        width={barWidth - padding * 2}
                                        height={barHeight}
                                        fill={serie.color}
                                        style={{
                                            transition: `height ${animationDuration}ms, y ${animationDuration}ms`
                                        }}
                                    />

                                    {showDataLabels && (
                                        <text
                                            x={x + (barWidth - padding * 2) / 2}
                                            y={y - 0.02}
                                            textAnchor="middle"
                                            fontSize="0.025"
                                            fill="var(--z-ramp-grey-600)"
                                        >
                                            {formatNumber(value)}
                                        </text>
                                    )}
                                </g>
                            );
                        })}
                    </g>
                ))}

                {/* Y轴标题 */}
                {yAxis?.title && (
                    <text
                        x="0.03"
                        y="0.5"
                        textAnchor="middle"
                        fontSize="0.03"
                        fill="var(--z-ramp-grey-500)"
                        transform="rotate(-90, 0.03, 0.5)"
                    >
                        {yAxis.title}
                    </text>
                )}
            </svg>
        );
    }, [chartDimensions, handleItemClick, selectedItem, showDataLabels, formatNumber, animationDuration]);

    // 渲染折线图
    const renderLineChart = useCallback(() => {
        if (!chartDimensions) return null;

        const { minValue, maxValue, range, categories, series } = chartDimensions;
        
        // 计算数据点位置的辅助函数
        const getPointPosition = (categoryIndex: number, value: number) => {
            // 与柱状图保持一致的位置计算，每个类别占据等宽区间，数据点位于区间中心
            const x = 0.1 + (categoryIndex + 0.5) * (0.8 / categories.length);
            const y = 0.9 - ((value - minValue) / range) * 0.8;
            return { x, y };
        };

        return (
            <svg viewBox={`0 0 1 1`} className={cs.e('line')}>
                {/* Y轴 */}
                <line x1="0.1" y1="0.1" x2="0.1" y2="0.9" stroke="var(--z-ramp-grey-300)" strokeWidth="0.005" />

                {/* X轴 */}
                <line x1="0.1" y1="0.9" x2="0.9" y2="0.9" stroke="var(--z-ramp-grey-300)" strokeWidth="0.005" />

                {/* 网格线 */}
                {[0.25, 0.5, 0.75].map(tick => (
                    <line
                        key={`grid-${tick}`}
                        x1="0.1"
                        y1={0.1 + tick * 0.8}
                        x2="0.9"
                        y2={0.1 + tick * 0.8}
                        stroke="var(--z-ramp-grey-200)"
                        strokeWidth="0.002"
                        strokeDasharray="0.02"
                    />
                ))}

                {/* Y轴刻度 */}
                {[0, 0.25, 0.5, 0.75, 1].map(tick => {
                    const value = minValue + range * (1 - tick);
                    return (
                        <g key={`y-tick-${tick}`}>
                            <line
                                x1="0.09"
                                y1={0.1 + tick * 0.8}
                                x2="0.11"
                                y2={0.1 + tick * 0.8}
                                stroke="var(--z-ramp-grey-300)"
                                strokeWidth="0.003"
                            />
                            <text
                                x="0.07"
                                y={0.1 + tick * 0.8 + 0.015}
                                textAnchor="end"
                                fontSize="0.03"
                                fill="var(--z-ramp-grey-500)"
                            >
                                {formatNumber(value)}
                            </text>
                        </g>
                    );
                })}

                {/* X轴标签 */}
                {categories.map((category, i) => {
                    const { x } = getPointPosition(i, 0);
                    return (
                        <text
                            key={`x-label-${i}`}
                            x={x}
                            y="0.96"
                            textAnchor="middle"
                            fontSize="0.03"
                            fill="var(--z-ramp-grey-500)"
                        >
                            {category}
                        </text>
                    );
                })}

                {/* 折线 */}
                {series.map((serie, serieIndex) => {
                    // 构建路径，使用修正后的位置计算
                    let path = '';
                    serie.data.forEach((value, i) => {
                        const { x, y } = getPointPosition(i, value);
                        
                        if (i === 0) {
                            path += `M ${x} ${y}`;
                        } else {
                            path += ` L ${x} ${y}`;
                        }
                    });

                    return (
                        <g
                            key={`line-${serieIndex}`}
                            className={cs.gen(
                                cs.e('line-serie'),
                                cs.is('selected', selectedItem === serieIndex),
                                cs.is('dimmed', selectedItem !== null && selectedItem !== serieIndex)
                            )}
                        >
                            <path
                                d={path}
                                fill="none"
                                stroke={serie.color}
                                strokeWidth={selectedItem === serieIndex ? "0.008" : "0.005"}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                style={{
                                    transition: `stroke-width ${animationDuration / 2}ms`
                                }}
                                onClick={() => handleItemClick(serieIndex)}
                            />

                            {/* 数据点 */}
                            {serie.data.map((value, i) => {
                                const { x, y } = getPointPosition(i, value);

                                return (
                                    <g key={`point-${serieIndex}-${i}`}>
                                        {/* 透明的触摸区域，增大点击范围 */}
                                        <circle
                                            cx={x}
                                            cy={y}
                                            r="0.03"
                                            fill="transparent"
                                            stroke="transparent"
                                            style={{ cursor: interactive ? 'pointer' : 'default' }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick(serieIndex);
                                            }}
                                        />
                                        
                                        {/* 可见的数据点 */}
                                        <circle
                                            cx={x}
                                            cy={y}
                                            r={selectedItem === serieIndex ? 0.012 : 0.008}
                                            fill="var(--z-ramp-white-1000)"
                                            stroke={serie.color}
                                            strokeWidth="0.004"
                                            style={{
                                                transition: `r ${animationDuration / 2}ms`,
                                                pointerEvents: 'none'
                                            }}
                                        />

                                        {showDataLabels && (
                                            <text
                                                x={x}
                                                y={y - 0.025}
                                                textAnchor="middle"
                                                fontSize="0.025"
                                                fill="var(--z-ramp-grey-600)"
                                                style={{ pointerEvents: 'none' }}
                                            >
                                                {formatNumber(value)}
                                            </text>
                                        )}
                                    </g>
                                );
                            })}
                        </g>
                    );
                })}

                {/* Y轴标题 */}
                {yAxis?.title && (
                    <text
                        x="0.03"
                        y="0.5"
                        textAnchor="middle"
                        fontSize="0.03"
                        fill="var(--z-ramp-grey-500)"
                        transform="rotate(-90, 0.03, 0.5)"
                    >
                        {yAxis.title}
                    </text>
                )}
            </svg>
        );
    }, [chartDimensions, handleItemClick, selectedItem, showDataLabels, formatNumber, animationDuration, interactive]);

    // 渲染图例
    const renderLegend = useCallback(() => {
        if (!showLegend || !legendItems.length) return null;

        return (
            <div className={cs.gen(cs.e('legend'), cs.m(`legend-${legendPosition}`))}>
                {legendItems.map((item, index) => (
                    <div
                        key={`legend-${index}`}
                        className={cs.gen(
                            cs.e('legend-item'),
                            cs.is('selected', selectedItem === index),
                            cs.is('dimmed', selectedItem !== null && selectedItem !== index)
                        )}
                        onClick={() => handleItemClick(index)}
                        style={{
                            transition: `opacity ${animationDuration}ms`
                        }}
                    >
                        <div
                            className={cs.e('legend-color')}
                            style={{ backgroundColor: item.color }}
                        />
                        <div className={cs.e('legend-label')}>{item.label}</div>
                    </div>
                ))}
            </div>
        );
    }, [showLegend, legendItems, legendPosition, selectedItem, handleItemClick, animationDuration]);

    // 渲染图表
    const renderChart = useCallback(() => {
        switch (type) {
            case 'pie':
                return renderPieChart();
            case 'bar':
                return renderBarChart();
            case 'line':
                return renderLineChart();
            default:
                return null;
        }
    }, [type, renderPieChart, renderBarChart, renderLineChart]);

    // 渲染空状态
    const renderEmpty = useCallback(() => {
        if ((type === 'pie' && processedData.length > 0) ||
            (type !== 'pie' && processedSeries.length > 0 && xAxis.length > 0)) {
            return null;
        }

        return (
            <div className={cs.e('empty')}>
                <AriIcon name="chart-empty" />
                <span>暂无数据</span>
            </div>
        );
    }, [type, processedData, processedSeries, xAxis]);

    return (
        <div
            ref={chartRef}
            className={cs.gen(
                cs.b(),
                cs.m(type),
                cs.is('interactive', interactive),
                // 添加基于 legendPosition 的修饰符类
                cs.m(`legend-${legendPosition}`),
                className
            )}
            style={containerStyle}
            {...props}
        >
            {title && <div className={cs.e('title')}>{title}</div>}

            <div className={cs.e('content')}>
                <div className={cs.e('chart-container')}>
                    {renderChart()}
                    {renderEmpty()}
                </div>
                {renderLegend()}
            </div>
        </div>
    );
};