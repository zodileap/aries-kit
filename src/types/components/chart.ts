import { _Props } from "./base";

/**
 * 图表类型
 * 定义图表的展示类型
 */
export type AriChartType = 'pie' | 'line' | 'bar';

/**
 * 图表数据点
 * 定义单个数据点的结构
 */
export interface AriChartDataPoint {
    /**
     * 数据标签
     */
    label: string;

    /**
     * 数据值
     */
    value: number;

    /**
     * 数据点颜色（可选）
     * 如果不提供，将使用预设的颜色序列
     */
    color?: string;
}

/**
 * 图表系列
 * 定义数据系列，用于折线图和柱状图的多系列数据
 */
export interface AriChartSeries {
    /**
     * 系列名称
     */
    name: string;

    /**
     * 系列数据
     */
    data: number[];

    /**
     * 系列颜色（可选）
     */
    color?: string;
}

/**
 * 图表组件属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/chart}
 */
export interface AriChartProps extends _Props {
    /**
     * 图表类型
     * 控制图表的展示样式：饼图、折线图或柱状图
     * 
     * default: "bar"
     */
    type: AriChartType;

    /**
     * 图表标题
     * 显示在图表顶部的标题文本
     * 
     * default: undefined
     */
    title?: string;

    /**
     * 图表宽度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '500px'）
     * 
     * default: "100%"
     */
    width?: number | string;

    /**
     * 图表高度
     * 可以是数字（自动转为px）或字符串值（例如 '300px'）
     * 
     * default: 300
     */
    height?: number | string;

    /**
     * 图表最大高度
     * 可以是数字（自动转为px）或字符串值（例如 '80vh'）
     * 用于确保图表不会在大屏幕上过大
     * 
     * default: "600px"
     */
    maxHeight?: number | string;

    /**
     * X轴标签
     * 用于折线图和柱状图，定义X轴的类别
     * 
     * default: []
     */
    xAxis?: string[];

    /**
     * Y轴标签
     * 用于自定义Y轴显示
     * 
     * default: undefined
     */
    yAxis?: {
        /**
         * Y轴标题
         */
        title?: string;

        /**
         * 最小值
         */
        min?: number;

        /**
         * 最大值
         */
        max?: number;
    };

    /**
     * 数据点集合
     * 用于饼图的数据展示
     * 
     * default: []
     */
    data?: AriChartDataPoint[];

    /**
     * 数据系列集合
     * 用于折线图和柱状图的多系列数据展示
     * 
     * default: []
     */
    series?: AriChartSeries[];

    /**
     * 是否显示图例
     * 
     * default: true
     */
    showLegend?: boolean;

    /**
     * 图例位置
     * 
     * default: "bottom"
     */
    legendPosition?: 'top' | 'right' | 'bottom' | 'left';

    /**
     * 是否显示数据标签
     * 
     * default: false
     */
    showDataLabels?: boolean;

    /**
     * 是否启用交互
     * 启用后可以点击图表元素
     * 
     * default: true
     */
    interactive?: boolean;

    /**
     * 动画持续时间（毫秒）
     * 设置为0禁用动画
     * 
     * default: 750
     */
    animationDuration?: number;

    /**
     * 图表元素点击事件
     * 当点击图表中的元素时触发
     * 
     * default: undefined
     */
    onElementClick?: (data: AriChartDataPoint | AriChartSeries, index: number) => void;
}