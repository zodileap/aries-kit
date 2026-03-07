// src/types/components/nav.d.ts

import { NavigateFunction } from "react-router-dom";
import { _Props } from "./base";

/**
 * 导航组件
 * 
 * 用于展示网站的主导航栏，支持悬停展开子菜单
 * 
 * Example:
 * {@link https://aries-react.dev/docs/nav}
 */
export interface AriNavProps extends _Props {
    /**
     * 导航项目列表
     */
    items: AriNavItem[];
    /**
     * 路由跳转函数，通过useNavigate()获取，因为上下文的缘故，必须通过注册的路由组件传递
     */
    navigate: NavigateFunction;
    /**
     * 导航栏logo组件
     * 
     * default: undefined
     */
    logo?: React.ReactNode;
    /**
     * 是否禁用hover触发
     * 
     * default: false
     */
    disableHover?: boolean;
    /**
     * 导航栏后缀组件
     */
    suffixed?: React.ReactNode;
    /**
     * 是否启用吸顶效果
     * 滚动时导航栏会固定在页面顶部且添加阴影效果
     * 
     * default: false
     */
    sticky?: boolean;
    /**
     * 子菜单打开时的回调
     * 
     * @param key - 打开的主菜单项key
     */
    onSubMenuOpen?: (key: string) => void;

    /**
     * 子菜单关闭时的回调
     * 
     * @param key - 关闭的菜单项key
     */
    onSubMenuClose?: (key: string) => void;
}


/**
 * 导航子菜单组中的项配置
 */
export interface NavSubMenuItem {
    /**
     * 项目的唯一标识
     */
    key: string;

    /**
     * 项目标题
     */
    title: string;

    /**
     * 跳转路径, 会在点击时调用navigate函数跳转,
     * 这个会和所有父节点的Path拼接，作为跳转路径
     */
    path: string;

    /**
     * 项目描述
     */
    description?: string;
}

/**
 * 导航子菜单组配置
 */
export interface AriNavSubMenuGroup {
    /**
     * 分组的唯一标识
     */
    key: string;

    /**
     * 分组标题
     */
    title: string;
    /**
     * 跳转路径, 会在点击时调用navigate函数跳转,
     */
    path?: string;

    /**
     * 分组中的项目
     */
    items: NavSubMenuItem[];
}

/**
 * 导航菜单项配置
 */
export interface AriNavItem {
    /**
     * 项目的唯一标识
     */
    key: string;

    /**
     * 显示的文本
     */
    label: string;
    /**
     * 子菜单配置
     */
    children?: AriNavSubMenuGroup[];
    /**
     * 跳转路径。
     * 
     * 如果没有children，点击时会调用navigate函数跳转.
     * 如果有children，那这个路径会作为父节点的路径，子节点的路径会拼接在这个路径后面
     */
    path?: string;
    /**
     * 点击事件
     */
    onClick?: () => void;
}

