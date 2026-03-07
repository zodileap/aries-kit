import { ReactNode } from "react";
import { _Props } from "./base";

/**
 * 分割线组件属性
 * 定义分割线组件支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/divider}
 */
export interface AriDividerProps extends _Props {
    /**
     * 分割线中显示的自定义内容
     * 
     * default: undefined
     */
    children?: ReactNode;

    /**
     * 分割线中显示的文本标签
     * 当同时提供 children 和 label 时，children 优先级更高
     * 
     * default: undefined
     */
    label?: string;

    /**
     * 分割线的变体风格
     * 当不是plain模式时，variant会影响标签的颜色
     * 
     * default: 'default'
     */
    variant?: 'default' | 'dashed' | 'dotted' | 'double' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * 文本的位置
     * 
     * default: 'center'
     */
    orientation?: 'left' | 'right' | 'center';

    /**
     * 是否应用简洁样式，将children套用label样式
     * 
     * default: false
     */
    plain?: boolean;

    /**
     * 分割线的类型，水平或垂直
     * 
     * default: 'horizontal'
     */
    type?: 'horizontal' | 'vertical';

    /**
     * 分割线颜色
     * 自定义分割线的颜色
     * 
     * default: undefined
     */
    color?: string;
}
