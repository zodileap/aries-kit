import { ReactNode } from "react";
import { _Props } from "./base";



/**
 * 布局区域
 * 定义布局中的区域类型
 */
export type AriLayoutArea = 'left' | 'center' | 'right';

/**
 * 布局组件属性
 * 定义布局组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/layout}
 */
export interface AriLayoutProps extends _Props {
    /**
     * 左侧区域内容
     */
    left?: ReactNode;

    /**
     * 中间区域内容
     */
    center?: ReactNode;

    /**
     * 右侧区域内容
     */
    right?: ReactNode;

    /**
     * 默认显示的区域
     * 未指定则全部显示
     * 
     * default: ['left', 'center', 'right']
     */
    defaultVisibleAreas?: AriLayoutArea[];

    /**
     * 区域可见性变化时的回调
     */
    onAreaVisibilityChange?: (visibleAreas: AriLayoutArea[]) => void;

    /**
     * 左侧区域的宽度
     * 
     * default: '250px'
     */
    leftWidth?: string;

    /**
     * 右侧区域的宽度
     * 
     * default: '250px'
     */
    rightWidth?: string;
}

/**
 * 布局上下文状态
 * 定义布局上下文中的状态
 */
export interface AriLayoutContextState {
    /**
     * 当前可见的区域
     */
    visibleAreas: AriLayoutArea[];

    /**
     * 切换区域可见性
     * @param area 要切换的区域
     * @param visible 是否可见，不传则切换当前状态
     */
    setArea: (area: AriLayoutArea, visible?: boolean) => void;

    /**
     * 设置所有区域可见性
     * @param areas 要显示的区域列表
     */
    setVisibleAreas: (areas: AriLayoutArea[]) => void;

    /**
     * 检查区域是否可见
     * @param area 要检查的区域
     */
    isVisible: (area: AriLayoutArea) => boolean;
}
