import { WidgetSize } from "../widget";
import { _Props } from "./base";

/**
 * 加载动画组件
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/spin}
 */
export interface AriSpinProps extends _Props {
    /**
     * 是否为加载中状态
     * 控制加载动画的显示与隐藏
     * 
     * default: true
     */
    spinning?: boolean;

    /**
     * 加载图标的大小
     * 控制加载图标的尺寸大小
     * 
     * default: "default"
     */
    size?: WidgetSize;

    /**
     * 是否全屏显示
     * 控制加载动画是否覆盖整个屏幕
     * 
     * default: false
     */
    fullScreen?: boolean;

    /**
     * 加载中的提示文字
     * 显示在加载图标下方的文字
     * 
     * default: undefined
     */
    tip?: string;

    /**
     * 自定义加载图标
     * 自定义的加载图标，替代默认图标
     * 
     * default: undefined
     */
    icon?: React.ReactNode;



    /**
     * 点击事件
     * 点击加载动画时触发的事件
     * 
     * default: undefined
     */
    onClick?: () => void;
}