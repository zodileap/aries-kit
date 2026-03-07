import { useCss } from "@ari/utils";
import { appLayoutState } from "@ari/repository/state";
import { ReactElement } from "react";
import { AppLayoutProps, AppLayoutProviderProps } from "@ari/types/components";

/**
 * AppLayout提供者
 * 用于提供应用布局的配置信息
 * 
 * Params:
 * 
 *   - children: 子组件
 *   - appConfig: 应用配置信息
 * 
 * Returns:
 *   
 *   ReactElement: 返回一个React元素
 * 
 * Example:
 * 
 *   <AriAppLayoutProvider appConfig={config}>
 *     <App />
 *   </AriAppLayoutProvider>
 */
export const AriAppLayoutProvider: React.FC<AppLayoutProviderProps> = ({
    children,
    appConfig,
}): ReactElement => {
    return (
        <appLayoutState.Provider value={{ appConfig }}>
            {children}
        </appLayoutState.Provider>
    );
};

/**
 * AppLayout组件
 * 应用的主布局组件，用于包裹整个应用内容
 * 
 * Example:
 * {@link https://aries-react.dev/docs/app-layout}
 */
export const AriAppLayout: React.FC<AppLayoutProps> = ({
    children,
    className,
    style,
}) => {
    const cn = useCss("app-layout");

    return (
        <div className={cn.gen(cn.b(), className)} style={style}>
            {children}
        </div>
    );
}
