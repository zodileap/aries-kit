/**
 * 描述：右键菜单定位计算参数。
 */
export interface AriContextMenuPositionOptions {
    /**
     * 描述：右键点击位置的 X 坐标。
     */
    clickX: number;

    /**
     * 描述：右键点击位置的 Y 坐标。
     */
    clickY: number;

    /**
     * 描述：菜单面板宽度。
     */
    menuWidth: number;

    /**
     * 描述：菜单面板高度。
     */
    menuHeight: number;

    /**
     * 描述：视口宽度。
     */
    viewportWidth: number;

    /**
     * 描述：视口高度。
     */
    viewportHeight: number;

    /**
     * 描述：边界安全间距。
     */
    safePadding: number;

    /**
     * 描述：X 方向偏移。
     */
    offsetX: number;

    /**
     * 描述：Y 方向偏移。
     */
    offsetY: number;
}

/**
 * 描述：右键菜单定位结果。
 */
export interface AriContextMenuPositionResult {
    /**
     * 描述：菜单左侧坐标。
     */
    left: number;

    /**
     * 描述：菜单顶部坐标。
     */
    top: number;
}

/**
 * 描述：根据点击位置、菜单尺寸和视口尺寸，计算菜单应当显示的位置并做边界裁剪。
 *
 * Params:
 *
 *   - options: 定位计算参数。
 *
 * Returns:
 *
 *   - left: 最终左侧坐标。
 *   - top: 最终顶部坐标。
 */
export const calculateContextMenuPosition = (
    options: AriContextMenuPositionOptions
): AriContextMenuPositionResult => {
    const {
        clickX,
        clickY,
        menuWidth,
        menuHeight,
        viewportWidth,
        viewportHeight,
        safePadding,
        offsetX,
        offsetY,
    } = options;

    const rawLeft = clickX + offsetX;
    const rawTop = clickY + offsetY;

    const minLeft = safePadding;
    const minTop = safePadding;
    const maxLeft = Math.max(safePadding, viewportWidth - menuWidth - safePadding);
    const maxTop = Math.max(safePadding, viewportHeight - menuHeight - safePadding);

    const left = Math.min(Math.max(rawLeft, minLeft), maxLeft);
    const top = Math.min(Math.max(rawTop, minTop), maxTop);

    return { left, top };
};
