import { CSSProperties, ReactNode, RefObject } from 'react';
import { _Props } from './base';
import { AriMenuItemProps, AriMenuProps } from './menu';

/**
 * 描述：右键菜单渲染回调参数。
 */
export interface AriContextMenuRenderContext {
    /**
     * 描述：主动关闭菜单的方法。
     */
    close: () => void;

    /**
     * 描述：菜单当前位置。
     */
    position: {
        /**
         * 描述：菜单左侧坐标。
         */
        left: number;

        /**
         * 描述：菜单顶部坐标。
         */
        top: number;
    };
}

/**
 * 描述：右键菜单组件属性。
 *
 * 该组件默认使用 AriMenu 渲染菜单项，
 * 也支持通过 overlay 或 renderOverlay 自定义菜单内容。
 *
 * Example:
 * {@link https://aries-react.dev/docs/context-menu}
 */
export interface AriContextMenuProps extends Omit<_Props, 'onSelect'> {
    /**
     * 描述：触发右键菜单的子元素。
     */
    children?: ReactNode;

    /**
     * 描述：外部触发目标的引用。
     * 传入后将监听该元素的原生 contextmenu 事件，
     * 组件自身不再额外包裹触发区域，适合画布等复杂场景。
     */
    targetRef?: RefObject<HTMLElement | null>;

    /**
     * 描述：默认菜单项配置，未提供自定义 overlay 时生效。
     *
     * default: []
     */
    items?: AriMenuItemProps[];

    /**
     * 描述：默认 AriMenu 的附加属性。
     */
    menuProps?: Omit<AriMenuProps, 'items' | 'onSelect'>;

    /**
     * 描述：自定义菜单内容，优先级低于 renderOverlay，高于默认 AriMenu。
     */
    overlay?: ReactNode;

    /**
     * 描述：自定义菜单渲染函数，返回内容将替代默认 AriMenu。
     */
    renderOverlay?: (context: AriContextMenuRenderContext) => ReactNode;

    /**
     * 描述：是否禁用右键菜单能力。
     *
     * default: false
     */
    disabled?: boolean;

    /**
     * 描述：是否显示菜单（受控模式）。
     */
    open?: boolean;

    /**
     * 描述：默认显示状态（非受控模式）。
     *
     * default: false
     */
    defaultOpen?: boolean;

    /**
     * 描述：菜单显示状态变化回调。
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * 描述：默认 AriMenu 选中项回调。
     */
    onSelect?: (key: string, item: AriMenuItemProps) => void;

    /**
     * 描述：默认 AriMenu 选中后是否自动关闭。
     *
     * default: true
     */
    closeOnSelect?: boolean;

    /**
     * 描述：点击菜单外部是否自动关闭。
     *
     * default: true
     */
    closeOnClickOutside?: boolean;

    /**
     * 描述：按下 ESC 是否自动关闭。
     *
     * default: true
     */
    closeOnEscape?: boolean;

    /**
     * 描述：滚动时是否自动关闭。
     *
     * default: false
     */
    closeOnScroll?: boolean;

    /**
     * 描述：菜单相对点击点的偏移量。
     *
     * default:
     *   x: --z-inset-xxs
     *   y: --z-inset-xxs
     */
    offset?: {
        /**
         * 描述：X 方向偏移量。
         */
        x?: number;

        /**
         * 描述：Y 方向偏移量。
         */
        y?: number;
    };

    /**
     * 描述：菜单与鼠标点击点的间距。
     * 会在默认定位时加到点击坐标上，用于避免菜单紧贴光标。
     *
     * default:
     *   x: 4
     *   y: -4
     */
    mouseGap?: {
        /**
         * 描述：X 方向间距（单位：px）。
         */
        x?: number;

        /**
         * 描述：Y 方向间距（单位：px）。
         */
        y?: number;
    };

    /**
     * 描述：边界安全间距，未传入时使用 --z-inset-xs。
     */
    safePadding?: number;

    /**
     * 描述：菜单挂载容器。
     *
     * default: document.body
     */
    portalContainer?: HTMLElement | null;

    /**
     * 描述：菜单面板自定义类名。
     */
    overlayClassName?: string;

    /**
     * 描述：菜单面板行内样式。
     */
    overlayStyle?: CSSProperties;
}
