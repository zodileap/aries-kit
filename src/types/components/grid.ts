import { _Props } from "./base";

/**
 * 响应式配置对象
 * 用于设置不同断点的栅格属性
 */
export interface AriResponsiveConfig {
    span?: number;
    offset?: number;
    pull?: number;
    push?: number;
    order?: number;
}


/**
 * 栅格行属性
 * 定义了行组件支持的所有属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/grid}
 */
export interface AriRowProps extends _Props {
    /**
     * 栅格间隔
     * 可以是一个数字（等同于 [n, n]）或一个包含 [水平间隔, 垂直间隔] 的数组
     * 
     * default: 0
     * 
     * Example:
     *   gutter={16} // 水平垂直间隔均为 16
     *   gutter={[16, 24]} // 水平间隔为 16，垂直间隔为 24
     */
    gutter?: number | [number, number];

    /**
     * 水平排列方式
     * 
     * default: undefined
     */
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

    /**
     * 垂直对齐方式
     * 
     * default: undefined
     */
    align?: 'top' | 'middle' | 'bottom' | 'stretch';

    /**
     * 是否自动换行
     * 
     * default: true
     */
    wrap?: boolean;
}

/**
 * 栅格列属性
 * 定义了列组件支持的所有属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/grid}
 */
export interface AriColProps extends _Props {
    /**
     * 栅格占据的列数
     * 总列数为 24，如 span={6} 表示占据 1/4 的宽度
     * 
     * default: undefined
     */
    span?: number;

    /**
     * 栅格左侧的间隔格数
     * 
     * default: 0
     */
    offset?: number;

    /**
     * 栅格向左移动格数
     * 
     * default: 0
     */
    pull?: number;

    /**
     * 栅格向右移动格数
     * 
     * default: 0
     */
    push?: number;

    /**
     * 栅格顺序，用于 flex 布局
     * 
     * default: 0
     */
    order?: number;

    /**
     * <576px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    xs?: number | AriResponsiveConfig;

    /**
     * ≥576px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    sm?: number | AriResponsiveConfig;

    /**
     * ≥768px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    md?: number | AriResponsiveConfig;

    /**
     * ≥992px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    lg?: number | AriResponsiveConfig;

    /**
     * ≥1200px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    xl?: number | AriResponsiveConfig;

    /**
     * ≥1600px 响应式栅格
     * 可以是列数或包含其他属性的对象
     */
    xxl?: number | AriResponsiveConfig;
}