import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCss } from '@ari/utils';
import { AriPopoverProps } from '@ari/types';
import { AriPortal } from '../portal';

const normalizeWidth = (value?: number | string): string | undefined => {
    if (value === undefined) {
        return undefined;
    }

    return typeof value === 'number' ? `${value}px` : value;
};

/**
 * 弹层组件
 *
 * 用于承载菜单、卡片和轻量操作面板，不与 Tooltip 的短提示语义混用。
 *
 * Example:
 * {@link https://aries-react.dev/docs/popover}
 */
export const AriPopover: React.FC<AriPopoverProps> = ({
    content,
    children,
    position = 'bottom',
    trigger = 'click',
    open,
    defaultOpen = false,
    onOpenChange,
    matchTriggerWidth = false,
    minWidth,
    closeOnOutsideClick = true,
    className,
    style,
    ...restProps
}) => {
    const cs = useCss('popover');
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const positionFrameRef = useRef<number | null>(null);
    const isMouseInTriggerRef = useRef(false);
    const isMouseInPopoverRef = useRef(false);

    const isOpen = open ?? internalOpen;

    const updateOpen = useCallback((nextOpen: boolean) => {
        if (open === undefined) {
            setInternalOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
    }, [onOpenChange, open]);

    const cancelPositionFrame = useCallback(() => {
        if (positionFrameRef.current !== null) {
            cancelAnimationFrame(positionFrameRef.current);
            positionFrameRef.current = null;
        }
    }, []);

    const updatePosition = useCallback(() => {
        if (!triggerRef.current || !popoverRef.current) {
            positionFrameRef.current = requestAnimationFrame(() => {
                positionFrameRef.current = null;
                updatePosition();
            });
            return;
        }

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();

        if (popoverRect.width === 0 || popoverRect.height === 0) {
            positionFrameRef.current = requestAnimationFrame(() => {
                positionFrameRef.current = null;
                updatePosition();
            });
            return;
        }

        const gap = 8;
        const margin = 8;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        let top = 0;
        let left = 0;

        switch (position) {
            case 'top':
                top = triggerRect.top - popoverRect.height - gap;
                left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
                break;
            case 'left':
                top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
                left = triggerRect.left - popoverRect.width - gap;
                break;
            case 'right':
                top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
                left = triggerRect.right + gap;
                break;
            case 'topLeft':
                top = triggerRect.top - popoverRect.height - gap;
                left = triggerRect.left;
                break;
            case 'topRight':
                top = triggerRect.top - popoverRect.height - gap;
                left = triggerRect.right - popoverRect.width;
                break;
            case 'bottomLeft':
                top = triggerRect.bottom + gap;
                left = triggerRect.left;
                break;
            case 'bottomRight':
                top = triggerRect.bottom + gap;
                left = triggerRect.right - popoverRect.width;
                break;
            case 'bottom':
            default:
                top = triggerRect.bottom + gap;
                left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
                break;
        }

        if (left < margin) {
            left = margin;
        } else if (left + popoverRect.width > viewportWidth - margin) {
            left = viewportWidth - popoverRect.width - margin;
        }

        if (top < margin) {
            top = margin;
        } else if (top + popoverRect.height > viewportHeight - margin) {
            top = viewportHeight - popoverRect.height - margin;
        }

        popoverRef.current.style.top = `${top}px`;
        popoverRef.current.style.left = `${left}px`;
    }, [position]);

    const schedulePositionUpdate = useCallback(() => {
        cancelPositionFrame();
        positionFrameRef.current = requestAnimationFrame(() => {
            positionFrameRef.current = null;
            updatePosition();
        });
    }, [cancelPositionFrame, updatePosition]);

    const show = useCallback(() => {
        updateOpen(true);
    }, [updateOpen]);

    const hide = useCallback(() => {
        updateOpen(false);
    }, [updateOpen]);

    const handleTriggerClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (trigger !== 'click') {
            return;
        }

        event.stopPropagation();
        updateOpen(!isOpen);
    }, [isOpen, trigger, updateOpen]);

    const handleTriggerMouseEnter = useCallback(() => {
        if (trigger !== 'hover') {
            return;
        }

        isMouseInTriggerRef.current = true;
        show();
    }, [show, trigger]);

    const handleTriggerMouseLeave = useCallback(() => {
        if (trigger !== 'hover') {
            return;
        }

        isMouseInTriggerRef.current = false;
        window.setTimeout(() => {
            if (!isMouseInTriggerRef.current && !isMouseInPopoverRef.current) {
                hide();
            }
        }, 0);
    }, [hide, trigger]);

    const handlePopoverMouseEnter = useCallback(() => {
        if (trigger !== 'hover') {
            return;
        }

        isMouseInPopoverRef.current = true;
    }, [trigger]);

    const handlePopoverMouseLeave = useCallback(() => {
        if (trigger !== 'hover') {
            return;
        }

        isMouseInPopoverRef.current = false;
        if (!isMouseInTriggerRef.current) {
            hide();
        }
    }, [hide, trigger]);

    useEffect(() => {
        if (!isOpen || !closeOnOutsideClick || trigger === 'hover') {
            return;
        }

        const handlePointerDown = (event: MouseEvent | TouchEvent) => {
            const eventTarget = event.target as Node | null;

            if (
                !eventTarget ||
                triggerRef.current?.contains(eventTarget) ||
                popoverRef.current?.contains(eventTarget)
            ) {
                return;
            }

            hide();
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('touchstart', handlePointerDown);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('touchstart', handlePointerDown);
        };
    }, [closeOnOutsideClick, hide, isOpen, trigger]);

    useEffect(() => {
        if (!isOpen) {
            cancelPositionFrame();
            return;
        }

        schedulePositionUpdate();

        window.addEventListener('scroll', schedulePositionUpdate, true);
        window.addEventListener('resize', schedulePositionUpdate);

        const resizeObservers: ResizeObserver[] = [];
        const mutationObservers: MutationObserver[] = [];

        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(() => {
                schedulePositionUpdate();
            });

            if (triggerRef.current) {
                resizeObserver.observe(triggerRef.current);
            }

            if (popoverRef.current) {
                resizeObserver.observe(popoverRef.current);
            }

            resizeObservers.push(resizeObserver);
        }

        if (popoverRef.current && typeof MutationObserver !== 'undefined') {
            const mutationObserver = new MutationObserver(() => {
                schedulePositionUpdate();
            });

            mutationObserver.observe(popoverRef.current, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
            });

            mutationObservers.push(mutationObserver);
        }

        return () => {
            window.removeEventListener('scroll', schedulePositionUpdate, true);
            window.removeEventListener('resize', schedulePositionUpdate);
            resizeObservers.forEach((observer) => observer.disconnect());
            mutationObservers.forEach((observer) => observer.disconnect());
            cancelPositionFrame();
        };
    }, [cancelPositionFrame, isOpen, schedulePositionUpdate]);

    useEffect(() => {
        return () => {
            cancelPositionFrame();
        };
    }, [cancelPositionFrame]);

    const triggerWidth = matchTriggerWidth && triggerRef.current
        ? `${triggerRef.current.getBoundingClientRect().width}px`
        : undefined;

    const popoverStyle = useMemo<React.CSSProperties>(() => {
        return {
            ...(style ?? {}),
            minWidth: normalizeWidth(minWidth),
            width: matchTriggerWidth ? triggerWidth : style?.width,
        };
    }, [matchTriggerWidth, minWidth, style, triggerWidth]);

    return (
        <>
            <div
                ref={triggerRef}
                className={cs.e('trigger')}
                onClick={handleTriggerClick}
                onMouseEnter={handleTriggerMouseEnter}
                onMouseLeave={handleTriggerMouseLeave}
            >
                {children}
            </div>
            {isOpen ? (
                <AriPortal>
                    <div
                        ref={popoverRef}
                        className={cs.gen(cs.b(), className)}
                        style={popoverStyle}
                        onMouseEnter={handlePopoverMouseEnter}
                        onMouseLeave={handlePopoverMouseLeave}
                        {...restProps}
                    >
                        <div className={cs.e('content')}>
                            {content}
                        </div>
                    </div>
                </AriPortal>
            ) : null}
        </>
    );
};
