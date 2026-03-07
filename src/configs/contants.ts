// ...existing code...

/** Widget位置常量 */
export const WIDGET_POSITIONS = {
    CENTER: 'center' as const,
    TOP_LEFT: 'topLeft' as const,
    TOP_RIGHT: 'topRight' as const,
    BOTTOM_LEFT: 'bottomLeft' as const,
    BOTTOM_RIGHT: 'bottomRight' as const,
    LEFT: 'left' as const,
    RIGHT: 'right' as const,
    TOP: 'top' as const,
    BOTTOM: 'bottom' as const
} as const;

/** Widget阴影模式常量 */
export const WIDGET_SHADOW_MODES = {
    ALWAYS: 'always' as const,
    ACTIVE: 'active' as const,
    NEVER: 'never' as const
} as const;

/** Widget布局方向常量 */
export const WIDGET_LAYOUT_DIRECTIONS = {
    HORIZONTAL: 'horizontal' as const,
    VERTICAL: 'vertical' as const
} as const;
