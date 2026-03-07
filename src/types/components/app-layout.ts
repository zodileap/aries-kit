import { ReactNode } from "react";
import { _Props } from "./base";
import { AppConfig } from "../init";

// 类型定义

/**
 * AppLayoutProvider
 * 
 * 用于提供AppLayout组件的上下文状态
 * 
 */
export interface AppLayoutProviderProps {
    children: ReactNode;
    appConfig: AppConfig;
}

/**
 * AppLayout上下文状态
 */
export interface AppLayoutState {
    appConfig: AppConfig
}

/**
 * AppLayout组件属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/app-layout}
 */
export interface AppLayoutProps extends _Props {
}

