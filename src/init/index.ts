export * from "./app"

import { useEffect, useRef, useState } from "react";
import { initI18n } from "../i18n";
import { AppConfig, GlobalState } from "@ari/types";

/**
 * 全局初始化状态
 */
const globalState: GlobalState = {
    /**
     * 是否已初始化 
     */
    isInitialized: false,
    /**
     * 是否正在初始化
     */
    isLoading: false,
    /**
     * 初始化错误
     */
    error: null,
    /**
     * 当前颜色模式
     */
    colorTheme: 'light',
    /**
     * 当前主题样式
     */
    theme:'brand',
};

type AriesColorTheme = 'light' | 'dark';

/**
 * 初始化库
 * @param options 初始化配置选项
 * @returns Promise<void>
 */
const initializeLibrary = async (configs: AppConfig): Promise<void> => {
    if (globalState.isInitialized || globalState.isLoading) {
        return;
    }
    void configs;

    globalState.isLoading = true;

    try {
        // 国际化
        initI18n();
        // 监听系统主题变化
        listenColorSchemeChange()
        globalState.isInitialized = true;
    } catch (err) {
        globalState.error = err instanceof Error ? err : new Error('初始化失败');
    } finally {
        globalState.isLoading = false;
    }
};



/**
 * 清理函数
 */
const cleanup = () => {
    // StrictMode 下 effect 会触发一次“安装->清理->安装”的演练流程，
    // 这里不能重置全局初始化状态，否则会导致应用卡在 loading。
    removeColorSchemeListener();
};

/**
 * 用于在 React 组件中使用的自定义 Hook
 * @param options 初始化配置选项
 * @returns {{isInitialized: boolean, isLoading: boolean, error: Error | null}}
 */
export const useInitialization = (configs: AppConfig) => {
    const [state, setState] = useState<GlobalState>(globalState);
    const initRef = useRef(false);

    useEffect(() => {
        if (initRef.current) return;

        if (!globalState.isInitialized && !globalState.isLoading) {
            initializeLibrary(configs).then(() => setState({ ...globalState }));
            initRef.current = true;
        }

        return () => {
            console.log('清理...');
            cleanup()
        };
    }, []);
    return state
};


/**
 * 设置App配置 
 * @param localImgSrc 
 * @returns 
 */
export const setAppConfig = (
    {
        localImgSrc = "",
        baseUrl = "",
        theme = "brand",
        cssVars,
    }: {
        localImgSrc?: string,
        baseUrl?: string,
        theme?: 'brand',
        cssVars?: AppConfig["cssVars"],
    }): AppConfig => {
    return {
        localImgSrc,
        baseUrl,
        theme,
        cssVars,
    };
};


/**
 * 设置颜色主题 
 * @param e
 */
const handleChange = (e: MediaQueryListEvent) => {
    const colorTheme = e.matches ? 'dark' : 'light';
    setColorTheme(colorTheme);
};

/**
 * 监听系统主题变化
 */
const listenColorSchemeChange = () => {
    // 获取当前系统主题
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const colorTheme = mediaQuery.matches ? 'dark' : 'light';
    setColorTheme(colorTheme);

    // 监听系统主题变化
    mediaQuery.addListener(handleChange);
}

/**
 * 移除主题监听
 */
const removeColorSchemeListener = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.removeListener(handleChange);
}


/**
 * 颜色主题变化监听器
 */
const colorThemeListeners: Array<(colorTheme: AriesColorTheme) => void> = [];

/**
 * 监听颜色主题变化
 * @param listener 监听函数
 * @returns 取消监听的函数
 */
export const onColorThemeChange = (
  listener: (colorTheme: AriesColorTheme) => void
): (() => void) => {
  colorThemeListeners.push(listener);
  return () => {
    const index = colorThemeListeners.indexOf(listener);
    if (index > -1) {
      colorThemeListeners.splice(index, 1);
    }
  };
};

/**
 * 通知颜色主题变化
 * @param colorTheme 颜色主题
 */
const notifyColorThemeChange = (colorTheme: AriesColorTheme) => {
  colorThemeListeners.forEach((listener) => listener(colorTheme));
};

/**
 * 设置颜色主题（明亮/暗黑模式）
 * @param colorTheme 'light' | 'dark'
 */
export const setColorTheme = (colorTheme: AriesColorTheme) => {
  globalState.colorTheme = colorTheme;
  document.documentElement.setAttribute("data-color-theme", colorTheme);
  console.log("设置颜色主题:", colorTheme);
  notifyColorThemeChange(colorTheme);
};

/**
 * 获取当前颜色主题
 * @returns 当前颜色主题 'light' | 'dark'
 */
export const getColorTheme = (): AriesColorTheme => {
  return globalState.colorTheme;
};

/**
 * 主题样式变化监听器
 */
const themeListeners: Array<(theme: string) => void> = [];

/**
 * 监听主题样式变化
 * @param listener 监听函数
 * @returns 取消监听的函数
 */
export const onThemeChange = (listener: (theme: string) => void): (() => void) => {
    themeListeners.push(listener);
    return () => {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
            themeListeners.splice(index, 1);
        }
    };
};

/**
 * 通知主题样式变化
 * @param theme 主题样式
 */
const notifyThemeChange = (theme: string) => {
    themeListeners.forEach(listener => listener(theme));
};

/**
 * 设置主题样式
 * @param theme 主题样式名称，默认值为 'brand'
 */
export const setTheme = (theme: AppConfig["theme"] = "brand") => {
    globalState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    notifyThemeChange(theme);
};

/**
 * 获取当前主题样式
 * @returns 当前主题样式
 */
export const getTheme = (): string => {
    return globalState.theme || 'brand';
};
