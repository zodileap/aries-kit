import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AriMenu } from '@ari/components/menu';
import { AriPortal } from '@ari/components/portal';
import { AriContainer } from '@ari/components/container';
import { AriContextMenuProps } from '@ari/types/components/context-menu';
import { AriMenuItemProps } from '@ari/types/components/menu';
import { getCssVarName, useClickAway, useCss } from '@ari/utils';
import { calculateContextMenuPosition } from './position';

/**
 * 描述：右键菜单复合组件。
 *
 * 该组件负责处理右键触发、定位、关闭逻辑，默认渲染 AriMenu，
 * 也支持通过 overlay 或 renderOverlay 完全自定义菜单内容。
 *
 * Example:
 * {@link https://aries-react.dev/docs/context-menu}
 */
export const AriContextMenu: React.FC<AriContextMenuProps> = ({
    children,
    targetRef,
    items = [],
    menuProps,
    overlay,
    renderOverlay,
    disabled = false,
    defaultOpen = false,
    open,
    onOpenChange,
    onSelect,
    closeOnSelect = true,
    closeOnClickOutside = true,
    closeOnEscape = true,
    closeOnScroll = false,
    offset,
    mouseGap,
    safePadding,
    portalContainer,
    overlayClassName,
    overlayStyle,
    className,
    style,
    onContextMenu,
    ...props
}) => {
    // 描述：受控/非受控打开状态管理。
    const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);

    // 描述：记录最近一次右键点击坐标，用于菜单定位。
    const [clickPoint, setClickPoint] = useState<{ x: number; y: number } | null>(null);

    // 描述：当前菜单面板位置。
    const [menuPosition, setMenuPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const triggerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const cs = useCss('context-menu');
    const useExternalTarget = Boolean(targetRef);

    // 描述：兼容受控与非受控模式的可见状态。
    const isOpen = open ?? internalOpen;
    const isOpenRef = useRef<boolean>(isOpen);
    useEffect(() => {
        isOpenRef.current = isOpen;
    }, [isOpen]);

    /**
     * 描述：读取主题变量并转换为像素值。
     *
     * Params:
     *
     *   - args: 变量路径片段，例如 ["inset", "xs"]。
     *
     * Returns:
     *
     *   - number: token 对应的像素值，读取失败时返回 0。
     */
    const readThemeNumber = useCallback((...args: string[]): number => {
        if (typeof window === 'undefined') {
            return 0;
        }

        const variableName = `--z-${args.join('-')}`;
        const rawValue = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
        const matched = rawValue.match(/^(-?\d*\.?\d+)\s*([a-z%]*)$/i);

        if (!matched) {
            return 0;
        }

        const value = parseFloat(matched[1]);
        const unit = (matched[2] || 'px').toLowerCase();

        if (!Number.isFinite(value)) {
            return 0;
        }

        if (unit === 'rem') {
            const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
            return value * (Number.isFinite(rootFontSize) ? rootFontSize : 16);
        }

        if (unit === 'px' || unit === '') {
            return value;
        }

        return value;
    }, []);

    /**
     * 描述：统一设置菜单打开状态，并向外通知状态变更。
     *
     * Params:
     *
     *   - nextOpen: 下一状态。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const setOpenState = useCallback((nextOpen: boolean): void => {
        if (isOpenRef.current === nextOpen) {
            return;
        }
        if (open === undefined) {
            setInternalOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
    }, [open, onOpenChange]);

    /**
     * 描述：关闭菜单。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const closeMenu = useCallback((): void => {
        setOpenState(false);
    }, [setOpenState]);

    /**
     * 描述：在指定坐标位置打开菜单。
     *
     * Params:
     *
     *   - x: 鼠标 X 坐标。
     *   - y: 鼠标 Y 坐标。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const openMenuAt = useCallback((x: number, y: number): void => {
        const defaultGapX = 4;
        const defaultGapY = -4;
        const offsetX = mouseGap?.x ?? offset?.x ?? defaultGapX;
        const offsetY = mouseGap?.y ?? offset?.y ?? defaultGapY;
        const nextLeft = x + offsetX;
        const nextTop = y + offsetY;

        setClickPoint((previousPoint) => {
            if (previousPoint?.x === x && previousPoint?.y === y) {
                return previousPoint;
            }
            return { x, y };
        });
        setMenuPosition((previousPosition) => {
            if (previousPosition.left === nextLeft && previousPosition.top === nextTop) {
                return previousPosition;
            }
            return { left: nextLeft, top: nextTop };
        });
        setOpenState(true);
    }, [mouseGap?.x, mouseGap?.y, offset?.x, offset?.y, setOpenState]);

    /**
     * 描述：处理触发区域的右键事件，阻止浏览器默认菜单并打开组件菜单。
     *
     * Params:
     *
     *   - event: 鼠标事件对象。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const handleTriggerContextMenu = useCallback((event: React.MouseEvent<HTMLDivElement>): void => {
        onContextMenu?.(event);

        if (disabled) {
            return;
        }

        event.preventDefault();
        openMenuAt(event.clientX, event.clientY);
    }, [disabled, onContextMenu, openMenuAt]);

    /**
     * 描述：处理外部目标元素的原生右键事件。
     *
     * Params:
     *
     *   - event: 原生鼠标事件对象。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const handleNativeContextMenu = useCallback((event: MouseEvent): void => {
        onContextMenu?.(event as unknown as React.MouseEvent<HTMLElement>);

        if (disabled) {
            return;
        }

        event.preventDefault();
        openMenuAt(event.clientX, event.clientY);
    }, [disabled, onContextMenu, openMenuAt]);

    /**
     * 描述：默认 AriMenu 的选中回调桥接，支持选中后自动关闭菜单。
     *
     * Params:
     *
     *   - key: 菜单项 key。
     *   - item: 菜单项对象。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const handleMenuSelect = useCallback((key: string, item: AriMenuItemProps): void => {
        onSelect?.(key, item);
        if (closeOnSelect) {
            closeMenu();
        }
    }, [closeMenu, closeOnSelect, onSelect]);

    /**
     * 描述：根据当前点击点和菜单尺寸更新菜单定位。
     *
     * Returns:
     *
     *   - void: 无返回值。
     */
    const updateMenuPosition = useCallback((): void => {
        if (!menuRef.current || typeof window === 'undefined') {
            return;
        }

        const defaultGapX = 4;
        const defaultGapY = -4;
        const edgePadding = safePadding ?? readThemeNumber('inset', 'xs');
        const offsetX = mouseGap?.x ?? offset?.x ?? defaultGapX;
        const offsetY = mouseGap?.y ?? offset?.y ?? defaultGapY;
        const anchorPoint = clickPoint ?? { x: edgePadding, y: edgePadding };

        const rect = menuRef.current.getBoundingClientRect();
        const nextPosition = calculateContextMenuPosition({
            clickX: anchorPoint.x,
            clickY: anchorPoint.y,
            menuWidth: rect.width,
            menuHeight: rect.height,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            safePadding: edgePadding,
            offsetX,
            offsetY,
        });

        setMenuPosition((previousPosition) => {
            if (previousPosition.left === nextPosition.left && previousPosition.top === nextPosition.top) {
                return previousPosition;
            }
            return nextPosition;
        });
    }, [clickPoint, mouseGap?.x, mouseGap?.y, offset?.x, offset?.y, readThemeNumber, safePadding]);

    // 描述：菜单显示后在下一帧计算最终位置，避免使用未渲染尺寸定位。
    useLayoutEffect(() => {
        if (!isOpen || typeof window === 'undefined') {
            return;
        }

        const frameId = window.requestAnimationFrame(() => {
            updateMenuPosition();
        });

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, [isOpen, updateMenuPosition]);

    // 描述：打开状态下响应窗口尺寸变化与滚动。
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleResize = (): void => {
            updateMenuPosition();
        };

        const handleScroll = (): void => {
            if (closeOnScroll) {
                closeMenu();
                return;
            }
            updateMenuPosition();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [closeMenu, closeOnScroll, isOpen, updateMenuPosition]);

    // 描述：支持 ESC 快捷关闭。
    useEffect(() => {
        if (!isOpen || !closeOnEscape) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeMenu, closeOnEscape, isOpen]);

    // 描述：在独立模式下，绑定外部目标元素的原生右键事件。
    useEffect(() => {
        if (!useExternalTarget) {
            return;
        }

        const targetElement = targetRef?.current;
        if (!targetElement) {
            return;
        }

        targetElement.addEventListener('contextmenu', handleNativeContextMenu);
        return () => {
            targetElement.removeEventListener('contextmenu', handleNativeContextMenu);
        };
    }, [handleNativeContextMenu, targetRef, useExternalTarget]);

    // 描述：点击菜单区域外部自动关闭。
    useClickAway(menuRef, (event) => {
        if (!isOpen || !closeOnClickOutside) {
            return;
        }

        if (targetRef?.current?.contains(event.target as Node)) {
            return;
        }

        if (triggerRef.current?.contains(event.target as Node)) {
            return;
        }

        closeMenu();
    }, ['mousedown', 'touchstart']);

    /**
     * 描述：根据用户配置决定最终渲染的菜单内容。
     *
     * Returns:
     *
     *   - ReactNode: 菜单面板内容。
     */
    const menuContent = useMemo(() => {
        if (typeof renderOverlay === 'function') {
            return renderOverlay({
                close: closeMenu,
                position: menuPosition,
            });
        }

        if (overlay) {
            return overlay;
        }

        return (
            <AriMenu
                items={items}
                mode='vertical'
                {...menuProps}
                onSelect={handleMenuSelect}
            />
        );
    }, [closeMenu, handleMenuSelect, items, menuPosition, menuProps, overlay, renderOverlay]);

    return (
        <>
            {useExternalTarget ? (
                children ?? null
            ) : (
                <div
                    ref={triggerRef}
                    className={cs.gen(cs.b(), className)}
                    style={style}
                    onContextMenu={handleTriggerContextMenu}
                    {...props}
                >
                    {children}
                </div>
            )}

            {isOpen ? (
                <AriPortal container={portalContainer}>
                    <div
                        ref={menuRef}
                        className={cs.gen(cs.e('overlay'), overlayClassName)}
                        style={{
                            left: `${menuPosition.left}px`,
                            top: `${menuPosition.top}px`,
                            zIndex: getCssVarName('z-index', 'popover'),
                            ...overlayStyle,
                        }}
                    >
                        <AriContainer
                            className={cs.e('container')}
                            showBorder
                            material='glass'
                            padding={getCssVarName('inset', 'xxs')}
                        >
                            {menuContent}
                        </AriContainer>
                    </div>
                </AriPortal>
            ) : null}
        </>
    );
};

export default AriContextMenu;
