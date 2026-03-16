import { _Props } from "./base";
import type { ReactNode } from "react";
import type { IconAnimation, IconState } from "./icon";

export type AriMenuActionsVisibility = 'always' | 'hover' | 'hover-or-focus';

/**
 * 菜单项配置
 * 
 * Emxample:
 * {@link https://aries-react.dev/docs/menu} 
 */
export interface AriMenuItemProps extends Omit<_Props, 'onClick' | "children"> {
    /** 菜单项的唯一标识 */
    key: string;
    /** 菜单项的显示文本 */
    label?: ReactNode;
    /** 菜单项的图标名称 */
    icon?: string;
    /** 激活时的图标名称, 如果没有设置，默认使用icon并添加_fill后缀 */
    fillIcon?: string;
    /** 菜单项图标动画 */
    iconAnimation?: IconAnimation;
    /** 菜单项图标状态 */
    iconState?: IconState;
    /** 是否禁用 */
    disabled?: boolean;
    /** 子菜单项 */
    children?: AriMenuItemProps[];
    /** 文本相对于图标的位置 */
    textPosition?: 'right' | 'left' | 'top' | 'bottom';
    /** 是否为分组标签 */
    isGroup?: boolean;
    /** 点击回调 */
    onClick?: () => void;
    /** 右侧元信息 */
    meta?: ReactNode;
    /** 右侧操作区 */
    actions?: ReactNode;
    /**
     * 右侧操作区显示时机
     *
     * default: "always"
     */
    actionsVisibility?: AriMenuActionsVisibility;
    /**
     * 是否仅在 hover 时显示右侧操作区
     *
     * @deprecated 请改用 actionsVisibility="hover"
     */
    showActionsOnHover?: boolean;
}

/** 
 * 菜单组件属性
 * 
 * Emxample:
 * {@link https://aries-react.dev/docs/menu} 
 */
export interface AriMenuProps extends _Props {
    /** 菜单项配置数组 */
    items: AriMenuItemProps[];
    /** 默认选中的菜单项key */
    defaultSelectedKey?: string;
    /** 当前选中的菜单项key（受控） */
    selectedKey?: string;
    /** 自定义类名 */
    className?: string;
    /** 菜单展开方式 */
    mode?: 'vertical' | 'horizontal';
    /** 子菜单展开箭头位置 */
    expandIconPosition?: 'right' | 'left' | 'none';
    /** 默认展开的菜单项key数组 */
    defaultExpandedKeys?: string[];
    /** 展开的菜单项key数组（受控） */
    expandedKeys?: string[];
    /** 展开/收起回调 */
    onExpand?: (expandedKeys: string[]) => void;
    /** 菜单项选中回调，返回选中项的key和完整item数据 */
    onSelect?: (key: string, item: AriMenuItemProps) => void;
}
