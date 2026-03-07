// src/types/componets/breadcrumb.ts

import { _Props } from "./base";

/**
 * 面包屑项目
 * 定义面包屑中的单个项目
 */
export interface AriBreadcrumbItem {
    /**
     * 项目的唯一标识
     */
    key: string;

    /**
     * 显示的文本
     */
    label: string;

    /**
     * 链接地址，如果提供则可点击跳转
     */
    href?: string;

    /**
     * 图标名称
     */
    icon?: string;

    /**
     * 是否禁用点击
     */
    disabled?: boolean;

    /**
     * 点击回调函数
     */
    onClick?: () => void;
}

/**
 * 面包屑组件
 * 
 * 用于显示当前页面在网站中的层级位置，帮助用户了解当前所处位置并提供导航功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/breadcrumb}
 */
export interface AriBreadcrumbProps extends _Props {
    /**
     * 面包屑项目列表
     */
    items: AriBreadcrumbItem[];

    /**
     * 分隔符
     * 
     * default: "/"
     */
    separator?: string | React.ReactNode;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 是否显示图标
     * 
     * default: true
     */
    showIcon?: boolean;
}