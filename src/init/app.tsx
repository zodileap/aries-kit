import { AriAppLayout, AriAppLayoutProvider } from "@ari/repository";
import { useInitialization, setTheme } from ".";
import { AppProps } from "@ari/types";
import { lazy, Suspense, useEffect, useRef } from "react";

const LazyLottie = lazy(() => import("lottie-react"));


export const AriApp: React.FC<AppProps> = ({
    children,
    loadingAnimation: animationData,
    appConfig,
}) => {
    const { isInitialized, isLoading, error } = useInitialization(appConfig);
    const appliedCssVarKeysRef = useRef<string[]>([]);
    
    // 初始化主题样式
    useEffect(() => {
        if (appConfig.theme) {
            setTheme(appConfig.theme);
        }
    }, [appConfig.theme]);

    useEffect(() => {
        const root = document.documentElement;
        const nextCssVars = appConfig.cssVars ?? {};
        const previousKeys = new Set(appliedCssVarKeysRef.current);

        Object.entries(nextCssVars).forEach(([name, value]) => {
            root.style.setProperty(name, `${value}`);
            previousKeys.delete(name);
        });

        previousKeys.forEach((name) => {
            root.style.removeProperty(name);
        });

        appliedCssVarKeysRef.current = Object.keys(nextCssVars);

        return () => {
            appliedCssVarKeysRef.current.forEach((name) => {
                root.style.removeProperty(name);
            });
            appliedCssVarKeysRef.current = [];
        };
    }, [appConfig.cssVars]);

    if (error) {
      return <div>初始化失败: {error.message}</div>;
    }
    
    if (isLoading || !isInitialized) {
        return <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0', // 根据需要调整背景色
        }}>
            
            {animationData != undefined && (
                <Suspense fallback={null}>
                    <LazyLottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: 200, height: 200 }} // 根据需要调整大小
                    />
                </Suspense>
            )}

        </div>
    }

    return (
        <AriAppLayoutProvider appConfig={appConfig}>
            <AriAppLayout>
                {children}
            </AriAppLayout>
        </AriAppLayoutProvider>
    );
}
