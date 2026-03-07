import { RefObject } from "react";
import { AriContainerProps } from "./container";


/**
 * 粘性定位容器组件属性
 * 提供一个可以在滚动时保持粘性定位的容器
 * 
 * Example:
 * {@link https://aries-react.dev/docs/sticky}
 */
export interface AriStickyProps extends AriContainerProps {
    /**
     * 粘性定位位置
     * 控制组件在视口中的粘性定位位置
     * 
     * default: 'top'
     */
    position?: 'top' | 'bottom' | 'left' | 'right';

    /**
     * 偏移量
     * 距离定位边的偏移像素值
     * 
     * default: 0
     */
    offset?: number;

    /**
     * 是否启用粘性定位
     * 
     * default: true
     */
    enabled?: boolean;

    /**
     * Z轴层级
     * 粘性定位时的 z-index 值
     * 
     * default: 100
     */
    zIndex?: number;

    /**
     * 滚动容器
     * 指定滚动容器的 RefObject，默认为窗口
     * 
     * default: undefined (使用window作为滚动容器)
     */
    scrollContainer?: RefObject<HTMLElement>;

    /**
     * 粘性状态变化的回调函数
     * 当元素粘性状态改变时触发
     * 
     * Params:
     * 
     *   - isSticky: 是否处于粘性状态
     */
    onStickyChange?: (isSticky: boolean) => void;
}