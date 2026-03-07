import { ReactNode } from "react";
import { _Props } from "./base";

/**
 * 时间轴组件属性
 * 定义时间轴组件的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/timeline}
 */
export interface AriTimelineProps extends _Props {
    /**
     * 时间轴节点数组
     */
    items: TimelineItemProps[];

    /**
     * 时间轴方向
     * 
     * default: 'vertical'
     */
    direction?: 'vertical' | 'horizontal';

    /**
     * 时间轴在水平方向的布局
     * left: 时间轴在左侧
     * right: 时间轴在右侧
     * center: 时间轴在中间，内容左右交替显示
     * 
     * default: 'left'
     */
    mode?: 'left' | 'right' | 'center';

    /**
     * 是否倒序排列
     * 
     * default: false
     */
    reverse?: boolean;

    /**
     * 最后一项是否为虚线
     * 
     * default: false
     */
    lastDashed?: boolean;
}

/**
 * 时间轴子项属性
 */
export interface TimelineItemProps {
    /**
     * 节点内容
     */
    children: ReactNode;

    /**
     * 时间节点的标签
     */
    label?: ReactNode;

    /**
     * 自定义时间节点图标
     */
    icon?: ReactNode;

    /**
     * 节点颜色
     * 
     * default: 'primary'
     */
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | string;

    /**
     * 是否为虚线
     * 
     * default: false
     */
    dashed?: boolean;

    /**
     * 节点类型
     * 
     * default: 'filled'
     */
    type?: 'filled' | 'hollow' | 'borderless';

    /**
     * 唯一标识
     */
    key?: string | number;
}
