import { ShadowMode } from "../widget";
import { _Props } from "./base";

/**
 * 容器组件可选属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/container}
 */
export interface AriContainerProps extends _Props {
    /**
     * 容器视觉变体
     * - default: 默认容器样式
     * - plain: 透明、无默认 padding、无默认圆角/边框/阴影的轻量容器
     *
     * default: "default"
     */
    variant?: 'default' | 'plain';

    /**
     * 是否启用阴影激活态下的位移动画
     * 仅在 shadowMode 为 active 时生效
     *
     * default: true
     */
    hoverTransform?: boolean;

    /**
     * 定位类型
     * 设置容器的定位方式
     * - relative: 相对定位
     * - absolute: 绝对定位
     * - fixed: 固定定位
     * - sticky: 粘性定位
     * 
     * default: static (静态定位)
     */
    positionType?: 'relative' | 'absolute' | 'fixed' | 'sticky';

    /**
     * 子元素的对齐方式
     * 设置容器内子元素的对齐位置
     * 
     * default: undefined
     */
    alignment?: 'center' | 'topLeft' | 'top' | 'topRight' | 'left' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight';

    /**
     * 阴影显示模式
     * 控制容器阴影的显示时机和方式
     * 
     * default: undefined
     */
    shadowMode?: ShadowMode;

    /**
     * 是否显示边框
     * 
     * default: false
     */
    showBorder?: boolean;

    /**
     * 是否显示圆角边框
     * 设置容器是否使用圆角样式
     * 
     * default: true
     */
    showBorderRadius?: boolean;

    /**
     * 边框类型样式
     * 
     * default: 'solid'
     */
    borderStyle?: 'solid' | 'dashed' | 'dotted';

    /**
     * 容器材质类型
     * 设置容器的视觉材质效果
     * - solid: 实心材质，使用标准边框和背景
     * - glass: 玻璃材质，使用透明效果和较淡边框
     * 
     * default: undefined
     */
    material?: 'solid' | 'glass';

    /**
     * 是否填充容器
     * 设置容器是否填充其父元素的宽度和高度
     * 
     * default: false
     */
    fill?: boolean;

    /**
     * 最大宽度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     * 
     * default: undefined
     */
    maxWidth?: number | string;

    /**
     * 最小宽度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     * 
     * default: undefined
     */
    minWidth?: number | string;

    /**
     * 容器的宽度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     */
    width?: number | string;

    /**
     * 容器的高度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     */
    height?: number | string;

    /**
     * 最大高度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     */
    maxHeight?: number | string;

    /**
     * 最小高度
     * 可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）
     */
    minHeight?: number | string;

    /**
     * 背景色
     * 可以是CSS颜色值或主题变量名
     * 
     * default: undefined (无背景色)
     */
    bgColor?: string;

    /**
     * 背景色变体
     * 使用预定义的主题背景色
     * - solid: 实心背景色
     * - glass: 玻璃背景色
     * 
     * default: undefined
     */
    bgVariant?: 'solid' | 'glass';

    /**
     * 内容溢出处理方式
     * 控制当内容超出容器边界时的行为
     * 
     * default: undefined (浏览器默认行为，通常是 'visible')
     */
    overflow?: React.CSSProperties['overflow'];

    /**
     * 是否透明
     * 
     * default: false
     */
    ghost?: boolean;

    /**
     * 是否模糊
     * 
     * default: false
     */
    blur?: boolean;

    /**
     * 内边距设置
     * 可以是以下几种形式:
     * - 数字: 所有方向使用相同的内边距 (单位: px)
     * - 字符串: CSS padding值 (例如: '10px' 或 '10px 20px')
     * - 对象: 分别指定各方向的内边距 {top?, right?, bottom?, left?}
     * 
     * default: 使用主题中定义的默认内边距
     */
    padding?: number | string | {
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
        left?: number | string;
    };

    /**
     * 点击事件处理函数
     * 当用户点击容器时触发
     */
    onClick?: (e: React.MouseEvent) => void;

    /**
     * 鼠标进入事件处理函数
     * 当鼠标指针进入容器区域时触发
     */
    onMouseEnter?: (e: React.MouseEvent) => void;

    /**
     * 鼠标离开事件处理函数
     * 当鼠标指针离开容器区域时触发
     */
    onMouseLeave?: (e: React.MouseEvent) => void;

    /**
     * 鼠标按下事件处理函数
     * 当用户在容器上按下鼠标按钮时触发
     */
    onMouseDown?: (e: React.MouseEvent) => void;

    /**
     * 鼠标松开事件处理函数
     * 当用户在容器上松开鼠标按钮时触发
     */
    onMouseUp?: (e: React.MouseEvent) => void;

    /**
     * 触摸开始事件处理函数
     * 当用户开始触摸容器时触发
     */
    onTouchStart?: (e: React.TouchEvent) => void;

    /**
     * 触摸移动事件处理函数
     * 当用户在容器上移动触摸点时触发
     */
    onTouchMove?: (e: React.TouchEvent) => void;

    /**
     * 触摸结束事件处理函数
     * 当用户结束触摸容器时触发
     */
    onTouchEnd?: (e: React.TouchEvent) => void;
}
