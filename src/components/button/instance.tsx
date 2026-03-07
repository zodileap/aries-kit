import { useRef } from 'react';
import { AriButtonInstance } from '@ari/types/components/button';

// 创建按钮实例
export const createButtonInstance = (): AriButtonInstance => {
    let loadingState = false;
    let callbacks: {
        onLoadingChange?: (loading: boolean) => void;
    } = {};

    const instance: AriButtonInstance = {
        setLoading: (loading: boolean) => {
            loadingState = loading;
            if (callbacks.onLoadingChange) {
                callbacks.onLoadingChange(loading);
            }
            return instance;
        }
    };

    // 添加一个内部方法用于设置回调函数
    (instance as any).setCallbacks = (newCallbacks: any) => {
        callbacks = { ...callbacks, ...newCallbacks };
        return instance;
    };

    return instance;
};

// 自定义hook创建按钮实例
export const useButtonInstance = () => {
    const buttonRef = useRef<ReturnType<typeof createButtonInstance>>();

    if (!buttonRef.current) {
        buttonRef.current = createButtonInstance();
    }

    return buttonRef.current;
};