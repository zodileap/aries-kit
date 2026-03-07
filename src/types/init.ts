
/**
 * 核心配置选项
 * 
 * 包含应用运行所需的基础配置
 */
export interface CoreOptions {
    /**
     * API服务器基础URL
     * 
     * 用于所有API请求的基础地址
     * 
     * Example:
     * 
     *   "https://api.example.com"
     *   "http://localhost:3000"
     */
    baseUrl: string;
}

/**
 * 应用配置接口
 * 
 * 定义应用初始化时需要的全部配置参数
 * 
 * Extends {@link CoreOptions}
 */
export interface AppConfig extends CoreOptions {
    /**
     * 本地图片资源路径前缀
     * 
     * 用于拼接本地静态图片资源的基础路径
     * 
     * default: ""
     * 
     * Example:
     * 
     *   "/assets/images"
     *   "https://cdn.example.com/images"
     */
    localImgSrc: string;
    
    /**
     * 应用主题标识
     * 
     * 指定应用使用的主题样式，目前只支持brand主题
     * 
     * default: "brand"
     * 
     * Example:
     * 
     *   "brand"
     */
    theme?: 'brand';
}


export interface AppProps {
    children: React.ReactNode;
    /**
     * 等待动画数据
     */
    loadingAnimation?: unknown;
    appConfig: AppConfig;
}


export interface GlobalState {
    /**
     * 是否已初始化
     */
    isInitialized: boolean;
    /**
     * 是否正在加载
     */
    isLoading: boolean;
    /**
     * 错误信息
     */
    error: Error | null;
    /**
     * 当前主题
     */
    theme: AppConfig["theme"];
    /**
     * 颜色主题
     */
    colorTheme: "light" | "dark";
}
