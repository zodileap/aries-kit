import { ReactNode } from "react";
import { _Props } from "./base";
import { Position } from "../widget";

/**
 * 弹层组件属性
 *
 * Example:
 * {@link https://aries-react.dev/docs/popover}
 */
export interface AriPopoverProps extends _Props {
    /**
     * 弹层内容
     */
    content: ReactNode;

    /**
     * 触发元素
     */
    children: ReactNode;

    /**
     * 弹层位置
     *
     * default: "bottom"
     */
    position?: Position;

    /**
     * 触发方式
     *
     * default: "click"
     */
    trigger?: 'click' | 'hover' | 'manual';

    /**
     * 受控显示状态
     */
    open?: boolean;

    /**
     * 默认显示状态
     *
     * default: false
     */
    defaultOpen?: boolean;

    /**
     * 显示状态变化回调
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * 是否让弹层宽度与触发元素保持一致
     *
     * default: false
     */
    matchTriggerWidth?: boolean;

    /**
     * 弹层最小宽度
     */
    minWidth?: number | string;

    /**
     * 是否允许点击外部关闭
     *
     * default: true
     */
    closeOnOutsideClick?: boolean;
}
