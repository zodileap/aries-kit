import { ReactNode } from "react";
import { _Props } from "./base";

/**
 * 传送门组件属性
 * 用于将内容渲染到 DOM 树中的其他位置
 * 
 * Example:
 * {@link https://aries-react.dev/docs/portal}
 */
export interface AriPortalProps extends _Props {
    /**
     * 要传送的内容
     */
    children: ReactNode;

    /**
     * 目标容器元素
     * 内容将被渲染到该元素内
     * 
     * default: document.body
     */
    container?: HTMLElement | null;
}