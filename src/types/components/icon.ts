/**
 * 图标尺寸类型
 */
export type IconSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl';


/**
 * 图标样式变体类型
 */
export type IconStyleVariant = 'clickable' | 'filled' | 'outlined' | 'circular';

/**
 * 图标动画类型
 */
export type IconAnimation = 'spinning' | 'pulse' | 'shake';

/**
 * 图标状态类型
 */
export type IconState = 'disabled' | 'loading' | 'error' | 'success';

/**
 * 图标组件属性
 * 定义图标组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/icon}
 */
export interface AriIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * 图标名称
     * 使用库中预定义的图标名称
     * 
     * default: undefined
     */
    name?: string;

    /**
     * 图标的完整路径
     * 外部SVG图标的URL，优先级高于name属性
     * 
     * 如果使用外部SVG图标，那对图标的样式设置将不再生效
     * 
     * default: undefined
     */
    fullPath?: string;

    /**
     * 图标大小
     * 预设的图标尺寸选项
     * 
     * default: 'default'
     */
    size?: IconSize;

    /**
     * 图标颜色
     * 支持任何有效的CSS颜色值
     * 
     * default: 'currentColor'
     */
    color?: string;


    /**
     * 图标样式变体
     * 设置图标的视觉样式
     * 
     * default: undefined
     */
    styleVariant?: IconStyleVariant;

    /**
     * 图标动画效果
     * 设置图标的动画类型
     * 
     * default: undefined
     */
    animation?: IconAnimation;

    /**
     * 图标状态
     * 设置图标的交互状态
     * 
     * default: undefined
     */
    state?: IconState;

    /**
     * 自定义类名
     * 额外的CSS类名
     * 
     * default: undefined
     */
    className?: string;

    /**
     * 图标宽度
     * 
     * default: 1
     */
    strokeWidth?: number;

    /**
     * 点击事件处理函数
     * 当图标被点击时触发
     */
    onClick?: (e: React.MouseEvent) => void;
}
