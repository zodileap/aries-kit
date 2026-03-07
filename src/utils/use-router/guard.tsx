import { Prefs } from "@ari/repository";
import { RouterGuardObject, ExtendedRouteObject } from "@ari/types";
import { useLocation, useMatches, replace, Outlet, Navigate } from "react-router-dom";

/**
 * 路由守卫组件
 * 
 * Params:
 * 
 *   - protected: 是否需要登录
 *     default: true
 *   - showHeader: 是否显示头部
 *     default: true
 *   - showFooter: 是否显示底部
 *     default: true
 *   - header: 头部组件
 *   - footer: 底部组件
 * 
 * Example:
 * 
 *   <RouteGuard protected={false} showHeader={true} header={<CustomHeader />} />
 */
export const RouteGuard: React.FC<RouterGuardObject> = ({
    protected: guardProtected = true,
    showHeader: guardShowHeader = true,
    showFooter: guardShowFooter = true,
    header: guardHeader,
    footer: guardFooter,
}) => {
    const location = useLocation();
    const matches = useMatches();

    // 获取当前路由（子路由）的数据
    const currentRoute = matches[matches.length - 1] as ExtendedRouteObject;
    const currentRouteData: ExtendedRouteObject['matedata'] = currentRoute.matedata || {};

    // 1. 判断是否需要登录保护
    const needsProtection = guardProtected ||
        (guardProtected === false && currentRouteData.protected === true);

    if (needsProtection) {
        const hasToken = Prefs.user.getIdentityToken() !== null;
        if (!hasToken) {
            return <Navigate to="/login" state={{ from: location }
            } replace />;
        }
    }

    // 2. 处理 header 显示逻辑
    const showHeader = guardShowHeader !== false &&
        (currentRouteData.showHeader !== false);
    const headerComponent = guardHeader ||
        (showHeader && currentRouteData.header) ||
        (showHeader && <header>Default Header Content</header>);

    // 3. 处理 footer 显示逻辑
    const showFooter = guardShowFooter !== false &&
        (currentRouteData.showFooter !== false);
    const footerComponent = guardFooter ||
        (showFooter && currentRouteData.footer) ||
        (showFooter && <footer>Default Footer Content</footer>);

    if (currentRouteData.title) {
        document.title = currentRouteData.title;
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* 固定头部 */}
            {showHeader && (
                <div style={{ 
                    flexShrink: 0,
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    backgroundColor: 'var(--color-bg)', // 确保头部有背景色
                }}>
                    {headerComponent}
                </div>
            )}
            
            {/* 主内容区域 - 可增长，参与整体滚动 */}
            <main style={{
                width: '100%',
                minHeight: 'calc(100vh - var(--z-nav-height, 0px))', // 确保至少占满视窗减去头部的高度
            }}>
                <Outlet />
            </main>
            
            {/* Footer - 在内容之后，参与滚动 */}
            {showFooter && (
                <div style={{ flexShrink: 0 }}>
                    {footerComponent}
                </div>
            )}
        </div>
    );
};

