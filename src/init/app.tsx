import { AriAppLayout, AriAppLayoutProvider } from "@ari/repository";
import { useInitialization, setTheme } from ".";
import Lottie from 'lottie-react';
import { AppProps } from "@ari/types";
import { useEffect } from "react";


export const AriApp: React.FC<AppProps> = ({
    children,
    loadingAnimation: animationData,
    appConfig,
}) => {
    const { isInitialized, isLoading, error } = useInitialization(appConfig);
    
    // 初始化主题样式
    useEffect(() => {
        if (appConfig.theme) {
            setTheme(appConfig.theme);
        }
    }, [appConfig.theme]);

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
            
            {animationData != undefined && <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: 200, height: 200 }} // 根据需要调整大小
            />}

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
