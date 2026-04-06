import { RouteObject } from 'react-router-dom';
import { I18nTranslates } from './i18n';

/**
 * 路由守卫对象
 */
export type RouterGuardObject = {
    /**
     * 是否需要登录，默认为 都是需要的
     */
    protected?: boolean;

    /**
     * 是否显示头部, 默认为 true
     */
    showHeader?: boolean;

    /**
     * 是否显示底部, 默认为 true
     */
    showFooter?: boolean;

    /**
     * 头部组件
     */
    header?: React.ReactNode;

    /**
     * 底部组件
     */
    footer?: React.ReactNode;
}

/**
 * 扩展的路由配置对象，用于 handle 属性
 * 继承自基础路由守卫配置，可以在这里添加额外的配置项
 */
export interface ExtendedRouteObjectMetadata extends RouterGuardObject {
    /**
     * 路由标题
     * 用于在页面上显示的标题
     */
    title?: string;
}

/**
 * 注册模块的路由
 */
export type ModuleRoutes = (t: I18nTranslates) => ExtendedRouteObject[]

/**
 * 路由配置
 */
export type ExtendedRouteObject = Omit<RouteObject, "handle" | "children"> & {
  matedata?: ExtendedRouteObjectMetadata;
  children?: ExtendedRouteObject[];
};
