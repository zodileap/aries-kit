import { ReactNode } from "react";
import { _Props } from "./base";
import { Position } from "../widget";

/**
 * 提示框组件属性
 * 定义提示框组件支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tooltip}
 */
export interface AriTooltipProps extends _Props {
    /**
     * 提示框内容
     * 显示在提示框中的文本或节点内容
     * 
     * default: undefined
     */
    content: ReactNode;

    /**
     * 触发元素
     * 提示框依附的元素
     */
    children: ReactNode;

    /**
     * 提示框位置
     * 控制提示框相对于触发元素的显示位置
     * 
     * default: "top"
     */
    position?: Position;

    /**
     * 触发方式
     * 控制提示框显示的触发方式
     * 
     * default: "hover"
     */
    trigger?: 'hover' | 'click' | 'focus' | 'manual';

    /**
     * 是否显示箭头
     * 控制提示框是否显示指向触发元素的箭头
     * 
     * default: false
     */
    arrow?: boolean;

    /**
     * 手动控制显示状态（仅在trigger为'manual'时有效）
     * 
     * default: false
     */
    visible?: boolean;

    /**
     * 延迟显示时间（毫秒）
     * 
     * default: 100
     */
    showDelay?: number;

    /**
     * 延迟隐藏时间（毫秒）
     * 
     * default: 100
     */
    hideDelay?: number;

    /**
     * 是否禁用提示框
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 是否让提示框宽度与触发元素保持一致
     *
     * default: false
     */
    matchTriggerWidth?: boolean;

    /**
     * 提示框最小宽度
     * 支持 number（自动补全为 px）或任意合法 CSS 宽度字符串（如 "12rem"、"240px"）
     *
     * default: undefined
     */
    minWidth?: number | string;

    /**
     * 提示框显示时的回调
     */
    onShow?: () => void;

    /**
     * 提示框隐藏时的回调
     */
    onHide?: () => void;
}
