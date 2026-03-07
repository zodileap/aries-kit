import { WidgetSize } from "../widget";
import { _Props } from "./base";


/**
 * 按钮实例接口
 * 提供按钮操作方法，可以通过ref获取
 */
export interface AriButtonInstance {
    /**
     * 设置按钮的加载状态
     * @param loading 是否显示加载状态
     */
    setLoading: (loading: boolean) => AriButtonInstance;
}

/**
 * 标准按钮属性
 * 这是最常用的按钮组件的属性定义
 * 
 * Example:
 * {@link https://aries-react.dev/docs/button}
 */
/**
 * 排除基础属性中的原始 ref 定义，以便在 forwardRef 中正确使用
 */
type ButtonPropsWithoutRef = Omit<_Props, 'ref'>;

/**
 * 标准按钮属性
 * 这是最常用的按钮组件的属性定义，现在支持通过 forwardRef API 传递 ref
 * 
 * Example:
 * {@link https://aries-react.dev/docs/button}
 */
export interface AriButtonProps extends ButtonPropsWithoutRef {
    /**
     * 按钮标签文本
     * 显示在按钮内部的主要文本内容
     * 
     * default: undefined
     */
    label?: string

    /**
     * 按钮图标名称
     * 如果提供，将在按钮内渲染对应的图标。如果是loading状态下，图标会被替换为加载图标
     * 
     * default: undefined
     */
    icon?: string;

    /**
     * 按钮形状
     * 定义按钮的外观形状
     * 
     * default: 'default'
     */
    shape?: 'default' | 'circle' | 'round';

    /**
     * 按钮尺寸
     * 定义按钮的大小
     * 
     * default: 'default'
     */
    size?: WidgetSize;

    /**
     * 按钮颜色
     * 定义按钮的颜色风格
     * 
     * default: 'default'
     */
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'brand';

    /**
     * 按钮类型
     * 定义按钮的显示样式
     * 
     * default: 'default'
     */
    type?: 'default' | 'dashed' | 'link' | 'text';

    /**
     * HTML按钮类型
     */
    htmlType?: 'button' | 'submit' | 'reset';

    /**
     * 是否禁用按钮
     * 禁用后按钮不可点击
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 是否显示加载状态
     * 加载状态下按钮会显示加载指示器并禁用点击。
     * 
     * 如果遇到闭包的情况，通过AriButtonInstance调用setLoading来触发
     * 
     * default: false
     */
    loading?: boolean;

    /**
     * 是否为幽灵按钮
     * 幽灵按钮是一种特殊的按钮样式，背景与边框保持透明。
     * 当设置color时，颜色将作用于文本与图标。
     */
    ghost?: boolean;

    /**
     * 按钮点击事件处理函数
     * 当按钮被点击时触发的回调函数
     * 
     * Params:
     * 
     *   - e: React的鼠标事件对象
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * 社交登录按钮基础属性
 * 用于社交平台登录按钮的通用属性定义
 * 
 */
export interface AriSocialLoginButtonProps {
}

/**
 * Google登录按钮属性
 * 用于Google账号登录的按钮属性
 * 
 * Extends:
 *   SocialLoginButtonProps
 */
export interface AriGoogleLoginButtonProps extends AriSocialLoginButtonProps {
}

/**
 * 苹果登录按钮属性
 * 用于Apple ID登录的按钮属性
 * 
 * Extends:
 *   SocialLoginButtonProps
 */
export interface AriAppleLoginButtonProps extends AriSocialLoginButtonProps {
}
