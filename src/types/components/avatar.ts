import { WidgetSize } from "../widget";
import { _Props } from "./base";

/**
 * 头像组件属性
 * 定义头像组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/avatar}
 */
export interface AriAvatarProps extends Omit<_Props, 'ref'> {
    /**
     * 头像图片地址
     * 优先级最高，如果提供了图片地址，将显示图片
     * 
     * default: undefined
     */
    src?: string;

    /**
     * 图片的替代文本
     * 当图片无法加载时显示的文本
     * 
     * default: undefined
     */
    alt?: string;

    /**
     * 头像中显示的图标名称
     * 当没有提供图片和文字时显示
     * 
     * default: 'person'
     */
    icon?: string;

    /**
     * 头像中显示的文字
     * 通常用于显示用户名称的首字母
     * 如果文字超过2个字符，只显示前两个字符
     * 
     * default: undefined
     */
    text?: string;

    /**
     * 头像的形状
     * circle: 圆形
     * square: 方形（带圆角）
     * 
     * default: 'circle'
     */
    shape?: 'circle' | 'square';

    /**
     * 头像的尺寸
     * 预设的尺寸选项
     * 
     * default: 'default'
     */
    size?: WidgetSize;

    /**
     * 自定义背景颜色
     * 支持任何有效的CSS颜色值
     * 
     * default: undefined
     */
    backgroundColor?: string;

    /**
     * 自定义文字颜色
     * 当显示文字或图标时生效
     * 
     * default: undefined
     */
    textColor?: string;

    /**
     * 自定义样式
     * 可以覆盖组件的默认样式
     * 
     * default: undefined
     */
    style?: React.CSSProperties;

    /**
     * 自定义类名
     * 额外的CSS类名
     * 
     * default: undefined
     */
    className?: string;

    /**
     * 子元素内容
     * 自定义显示内容，优先级高于文字和图标
     * 
     * default: undefined
     */
    children?: React.ReactNode;
}
