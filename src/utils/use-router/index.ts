import { EnhancedRoute, PathBuilder, RouteConfig } from "@ari/types/hooks/use-router";
import { useNavigate } from "react-router-dom";

/**
 * 增强路由对象，为每个节点添加生成路径的能力
 */
function enhanceRoutes<T extends RouteConfig>(
    routes: T,
    parentPaths: string[] = []
): EnhancedRoute<T> {
    const enhanced = { ...routes } as any;

    // 获取当前节点的路径部分
    const currentPath = enhanced.root || '';
    const currentPaths = [...parentPaths];
    if (currentPath) {
        currentPaths.push(currentPath);
    }

    // 如果root是字符串，将其也增强为对象
    if (typeof enhanced.root === 'string') {
        const rootValue = enhanced.root;
        const rootSegments = [...parentPaths, rootValue];

        enhanced.root = {
            _value: rootValue,
            _getPath: (params?: Record<string, string>) => {
                let path = '/' + rootSegments.join('/');

                if (params) {
                    Object.entries(params).forEach(([key, value]) => {
                        path = path.replace(`:${key}`, value);
                    });
                }

                return path;
            },
            toString: () => rootValue,
        };
    }

    // 为每个子节点增强
    for (const key in enhanced) {
        if (key === 'root') continue;

        if (typeof enhanced[key] === 'object') {
            enhanced[key] = enhanceRoutes(enhanced[key], currentPaths);
        } else if (typeof enhanced[key] === 'string') {
            // 为字符串节点添加路径生成函数
            const pathSegments = [...currentPaths, enhanced[key]];
            const pathValue = enhanced[key];

            enhanced[key] = {
                _value: pathValue,
                _getPath: (params?: Record<string, string>) => {
                    let path = '/' + pathSegments.join('/');

                    if (params) {
                        Object.entries(params).forEach(([key, value]) => {
                            path = path.replace(`:${key}`, value);
                        });
                    }

                    return path;
                },
                toString: () => pathValue,
            };
        }
    }

    // 为当前节点添加路径生成函数
    enhanced._getPath = (params?: Record<string, string>) => {
        let path = '/' + currentPaths.join('/');

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                path = path.replace(`:${key}`, value);
            });
        }

        return path;
    };

    return enhanced as EnhancedRoute<T>;
}

/**
 * 使用路由的自定义hook
 * 
 * @param routes 路由配置对象
 * @returns 返回增强的路由对象和导航方法
 * 
 * Example:
 * ```tsx
 * const { routes, navigate, buildPath } = useRouter(ROUTES);
 * 
 * // 导航到特定路由
 * navigate(routes.devops.pipeline.project_detail, { id: '123' });
 * 
 * // 获取路由路径
 * const path = buildPath(routes.devops.pipeline.root);
 * ```
 */
export function useRouter<T extends RouteConfig>(routes: T) {
    const navigateFunc = useNavigate();
    // 创建增强版的路由对象
    const ENHANCED_ROUTES = enhanceRoutes(routes);

    return {
        /**
         * 增强版的路由对象
         */
        routes: ENHANCED_ROUTES,

        /**
         * 构建指定路由对象的完整路径
         * @param route 路由对象
         * @param params 路径参数
         */
        buildPath: <R extends { _getPath: PathBuilder }>(route: R, params?: Record<string, string>): string => {
            if (typeof route._getPath !== 'function') {
                throw new Error("无效的路由");
            }
            return route._getPath(params);
        },

        /**
         * 导航到指定路由
         * 如果要跳转到root的，可以输入root的上一级即可
         * 
         * 比如 routes.devops.repository.root 传入 routes.devops.repository 即可
         * @param route 路由对象
         * @param params 路径参数 比如要替换路径中的 :id, 可以传入 { id: '123' }
         */
        navigate: <R extends { _getPath: PathBuilder }>(route: R, params?: Record<string, string>): void => {
            if (typeof route._getPath !== 'function') {
                throw new Error("无效的路由");
            }
            navigateFunc(route._getPath(params));
        }
    };
}
export default useRouter;