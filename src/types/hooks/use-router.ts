// src/types/hooks/use-router.ts
// 路由配置类型定义
export type RouteConfig = {
  [key: string]: string | RouteConfig;
};

// 路由路径构建函数类型
export type PathBuilder = (params?: Record<string, string>) => string;

// 增强的路由对象类型
export type EnhancedRoute<T extends RouteConfig = RouteConfig> = {
  [K in keyof T]: T[K] extends string
  ? {
    _value: T[K];
    _getPath: PathBuilder;
    toString: () => string;
  }
  : T[K] extends RouteConfig
  ? EnhancedRoute<T[K]>
  : never;
} & {
  _getPath: PathBuilder;
};

/**
 * 路由钩子返回值接口
 */
export interface UseRouter<T extends RouteConfig = RouteConfig> {
  /**
   * 增强版的路由对象
   */
  routes: EnhancedRoute<T>;

  /**
   * 构建路由的完整路径
   * @param route 路由对象，如 routes.DEVOPS.PIPELINE.PROJECT_DETAIL
   * @param params 路径参数，如 { id: '123' }
   * @returns 完整的URL路径
   */
  buildPath: <R extends { _getPath: PathBuilder }>(route: R, params?: Record<string, string>) => string;

  /**
   * 导航到指定路由
   * @param route 路由对象，如 routes.DEVOPS.PIPELINE.PROJECT_DETAIL
   * @param params 路径参数，如 { id: '123' }
   */
  navigate: <R extends { _getPath: PathBuilder }>(route: R, params?: Record<string, string>) => void;
}