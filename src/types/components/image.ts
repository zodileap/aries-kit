/**
 * 图片使用方式
 * 定义图片组件的两种显示模式
 * 
 *   - background: 背景图片模式
 *   - image: 普通图片模式
 */
export type AriImageUsage = "background" | "image";

/**
 * 图片组件属性
 * 定义图片组件支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/image}
 */
export interface AriImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * 图片文件名
     * 相对于 localImgSrc 的路径
     * 
     * Example: "logo.png"
     */
    fileName?: string;

    /**
     * 图片使用方式
     * 控制图片的显示模式
     * 
     * default: undefined（必须显式指定）
     */
    usage: AriImageUsage;

    /**
     * 图片加载失败时显示的替代内容
     * 可以是文本或React节点
     * 
     * default: undefined
     */
    fallback?: React.ReactNode;

    /**
     * 是否使用占位符
     * 图片加载过程中显示占位效果
     * 
     * default: false
     */
    placeholder?: boolean;

    /**
     * 是否支持预览
     * 点击图片时是否显示大图预览
     * 
     * default: false
     */
    preview?: boolean;

    /**
     * 图片源地址
     * 如果提供则优先使用，而不是通过fileName构建
     * 
     * default: undefined
     */
    src?: string;

    /**
     * 图片加载失败时的回调函数
     * 
     * default: undefined
     */
    onError?: () => void;
}