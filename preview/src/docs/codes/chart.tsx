import React, { useState } from 'react';
import { AriChart, AriRow, AriCol, AriButton, AriFlex, AriRadio, AriTypography } from '@aries-kit/react';
import { AriChartDataPoint, AriChartSeries } from '@ari/types';

export const BasicChartDemo: React.FC = () => {
    // 饼图数据
    const pieData: AriChartDataPoint[] = [
        { label: '类别A', value: 335 },
        { label: '类别B', value: 234 },
        { label: '类别C', value: 158 },
        { label: '类别D', value: 129 },
        { label: '类别E', value: 86 }
    ];

    // 柱状图和折线图共用数据
    const xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月'];
    const barSeries: AriChartSeries[] = [
        {
            name: '销售额',
            data: [120, 200, 150, 80, 70, 110]
        },
        {
            name: '利润',
            data: [90, 130, 100, 40, 50, 70]
        }
    ];

    return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={8}>
                <AriChart
                    type="pie"
                    title="饼图示例"
                    data={pieData}
                    height={350}
                />
            </AriCol>
            <AriCol span={8}>
                <AriChart
                    type="bar"
                    title="柱状图示例"
                    xAxis={xAxisData}
                    series={barSeries}
                    height={350}
                />
            </AriCol>
            <AriCol span={8}>
                <AriChart
                    type="line"
                    title="折线图示例"
                    xAxis={xAxisData}
                    series={barSeries}
                    height={350}
                />
            </AriCol>
        </AriRow>
    );
};

export const CustomStyleDemo: React.FC = () => {
    const data: AriChartDataPoint[] = [
        { label: '产品A', value: 335, color: 'var(--z-ramp-violet-500)' },
        { label: '产品B', value: 234, color: 'var(--z-ramp-teal-500)' },
        { label: '产品C', value: 158, color: 'var(--z-ramp-persimmon-500)' },
        { label: '产品D', value: 129, color: 'var(--z-ramp-yellow-500)' },
        { label: '产品E', value: 86, color: 'var(--z-ramp-blue-500)' }
    ];

    const xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const series: AriChartSeries[] = [
        {
            name: '访问量',
            data: [120, 132, 101, 134, 90, 230, 210],
            color: 'var(--z-ramp-green-500)'
        },
        {
            name: '销售额',
            data: [220, 182, 191, 234, 290, 330, 310],
            color: 'var(--z-ramp-blue-500)'
        }
    ];

    return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={12}>
                <AriChart
                    type="pie"
                    title="自定义颜色饼图"
                    data={data}
                    height={350}
                    showDataLabels={true}
                    legendPosition="right"
                />
            </AriCol>
            <AriCol span={12}>
                <AriChart
                    type="line"
                    title="自定义折线图"
                    xAxis={xAxisData}
                    series={series}
                    height={600}
                    yAxis={{ title: '数值', min: 0, max: 400 }}
                />
            </AriCol>
        </AriRow>
    );
};

export const InteractiveDemo: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState<string>('未选择');

    const data: AriChartDataPoint[] = [
        { label: '类别A', value: 335 },
        { label: '类别B', value: 234 },
        { label: '类别C', value: 158 },
        { label: '类别D', value: 129 }
    ];

    const xAxisData = ['Q1', 'Q2', 'Q3', 'Q4'];
    const series: AriChartSeries[] = [
        {
            name: '今年',
            data: [120, 132, 101, 134]
        },
        {
            name: '去年',
            data: [90, 120, 90, 110]
        }
    ];

    const handlePieClick = (data: AriChartDataPoint | AriChartSeries, index: number) => {
        if ('label' in data && 'value' in data) {
            setSelectedElement(`饼图: ${data.label}，值: ${data.value}`);
        }
    };

    const handleBarClick = (data: AriChartDataPoint | AriChartSeries, index: number) => {
        if ('name' in data && 'data' in data) {
            setSelectedElement(`柱状图: ${data.name}，索引: ${index}`);
        }
    };

    return (
        <>
            <AriTypography variant='h3' value={"点击图表元素查看交互效果：" + selectedElement} />
            <AriFlex space={24} vertical style={{ width: '100%' }}>
                <AriChart
                    type="pie"
                    title="可交互饼图"
                    data={data}
                    height={350}
                    onElementClick={handlePieClick}
                    interactive={true}
                />

                <AriChart
                    type="bar"
                    title="可交互柱状图"
                    xAxis={xAxisData}
                    series={series}
                    height={600}
                    onElementClick={handleBarClick}
                    interactive={true}
                />
            </AriFlex>
        </>
    );
};

export const LegendAndLabelsDemo: React.FC = () => {
    const [showDataLabels, setShowDataLabels] = useState(false);
    const [legendPosition, setLegendPosition] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');

    const data: AriChartDataPoint[] = [
        { label: '产品A', value: 335 },
        { label: '产品B', value: 234 },
        { label: '产品C', value: 158 },
        { label: '产品D', value: 129 }
    ];

    const xAxisData = ['第一季度', '第二季度', '第三季度', '第四季度'];
    const series: AriChartSeries[] = [
        {
            name: '2023年',
            data: [120, 132, 101, 134]
        },
        {
            name: '2022年',
            data: [90, 120, 90, 110]
        }
    ];

    return (
        <>
            <AriFlex space={16} style={{ marginBottom: 16 }}>
                <AriRadio.Group
                    name="chart-legend-position"
                    value={legendPosition}
                    onChange={(value: string | number) => setLegendPosition(value as 'top' | 'right' | 'bottom' | 'left')}
                    options={[
                        { label: '顶部', value: 'top' },
                        { label: '右侧', value: 'right' },
                        { label: '底部', value: 'bottom' },
                        { label: '左侧', value: 'left' }
                    ]}
                />
                <AriButton
                    onClick={() => setShowDataLabels(!showDataLabels)}
                >
                    {showDataLabels ? '隐藏数据标签' : '显示数据标签'}
                </AriButton>
            </AriFlex>

            <AriRow gutter={[24, 24]} style={{ minHeight: "400px" }}>
                <AriCol span={12}>
                    <AriChart
                        type="pie"
                        title="图例和标签示例 (饼图)"
                        data={data}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
                <AriCol span={12}>
                    <AriChart
                        type="bar"
                        title="图例和标签示例 (柱状图)"
                        xAxis={xAxisData}
                        series={series}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
            </AriRow>
        </>
    );
};
