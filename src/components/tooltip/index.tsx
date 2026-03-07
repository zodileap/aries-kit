import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useCss } from '@ari/utils';
import { AriTooltipProps } from '@ari/types';
import { AriPortal } from '../portal';

/**
 * 提示框组件
 * 
 * 用于显示元素的额外信息，鼠标悬停或其他交互方式触发
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tooltip}
 */
export const AriTooltip: React.FC<AriTooltipProps> = ({
    content,
    children,
    position = 'top',
    trigger = 'hover',
    arrow = false,
    visible = false,
    showDelay = 100,
    hideDelay = 100,
    disabled = false,
    matchTriggerWidth = false,
    minWidth,
    className,
    style,
    onShow,
    onHide,
    ...restProps
}) => {
    // 1. 状态管理
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [isPositioned, setIsPositioned] = useState(false); // 标记位置是否已计算
    
    // 2. Refs
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const showTimerRef = useRef<number | null>(null);
    const hideTimerRef = useRef<number | null>(null);
    const isMouseInTooltip = useRef(false);
    const isMouseInTrigger = useRef(false);

    const cs = useCss('tooltip');

    // 3. 清理定时器函数
    const clearTimers = useCallback(() => {
        if (showTimerRef.current) {
            clearTimeout(showTimerRef.current);
            showTimerRef.current = null;
        }
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    }, []);

    // 4. 位置计算函数 - 简化版本
    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) {
            // 如果元素不存在，稍后重试
            requestAnimationFrame(() => {
                calculatePosition();
            });
            return;
        }

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        
        // 如果tooltip尺寸为0，稍后重试
        if (tooltipRect.width === 0 || tooltipRect.height === 0) {
            requestAnimationFrame(() => {
                calculatePosition();
            });
            return;
        }
        const gap = 8;

        let top = 0;
        let left = 0;

        // 根据position计算初始位置
        switch (position) {
            case 'top':
                top = triggerRect.top - tooltipRect.height - gap;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case 'bottom':
                top = triggerRect.bottom + gap;
                left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
                break;
            case 'left':
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.left - tooltipRect.width - gap;
                break;
            case 'right':
                top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
                left = triggerRect.right + gap;
                break;
        }

        // 边界检测和调整
        const margin = 8;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (left < margin) {
            left = margin;
        } else if (left + tooltipRect.width > viewportWidth - margin) {
            left = viewportWidth - tooltipRect.width - margin;
        }

        if (top < margin) {
            top = margin;
        } else if (top + tooltipRect.height > viewportHeight - margin) {
            top = viewportHeight - tooltipRect.height - margin;
        }

        setTooltipPosition({ top, left });
        setIsPositioned(true);
    }, [position]);

    // 5. 显示函数
    const show = useCallback(() => {
        if (disabled) return;

        clearTimers();
        
        showTimerRef.current = window.setTimeout(() => {
            setIsVisible(true);
            setIsPositioned(false); // 重置位置状态
            onShow?.();
            // 显示后立即计算位置
            requestAnimationFrame(() => {
                calculatePosition();
            });
        }, showDelay);
    }, [disabled, showDelay, onShow, clearTimers, calculatePosition]);

    // 6. 隐藏函数
    const hide = useCallback(() => {
        if (trigger === 'manual') return;

        clearTimers();
        
        hideTimerRef.current = window.setTimeout(() => {
            // 检查鼠标是否还在trigger或tooltip内
            if (trigger === 'hover' && (isMouseInTrigger.current || isMouseInTooltip.current)) {
                return;
            }
            
            setIsVisible(false);
            setIsPositioned(false); // 重置位置状态
            onHide?.();
        }, hideDelay);
    }, [trigger, hideDelay, onHide, clearTimers]);

    // 7. Trigger事件处理
    const handleTriggerMouseEnter = useCallback(() => {
        if (trigger !== 'hover') return;
        isMouseInTrigger.current = true;
        show();
    }, [trigger, show]);

    const handleTriggerMouseLeave = useCallback(() => {
        if (trigger !== 'hover') return;
        isMouseInTrigger.current = false;
        hide();
    }, [trigger, hide]);

    const handleTriggerClick = useCallback(() => {
        if (trigger !== 'click') return;
        if (isVisible) {
            setIsVisible(false);
            setIsPositioned(false); // 重置位置状态
            onHide?.();
        } else {
            show();
        }
    }, [trigger, isVisible, show, onHide]);

    const handleTriggerFocus = useCallback(() => {
        if (trigger !== 'focus') return;
        show();
    }, [trigger, show]);

    const handleTriggerBlur = useCallback(() => {
        if (trigger !== 'focus') return;
        hide();
    }, [trigger, hide]);

    // 8. Tooltip事件处理
    const handleTooltipMouseEnter = useCallback(() => {
        if (trigger !== 'hover') return;
        isMouseInTooltip.current = true;
        clearTimers();
    }, [trigger, clearTimers]);

    const handleTooltipMouseLeave = useCallback(() => {
        if (trigger !== 'hover') return;
        isMouseInTooltip.current = false;
        hide();
    }, [trigger, hide]);

    // 9. 手动控制模式
    useEffect(() => {
        if (trigger === 'manual') {
            if (visible) {
                setIsVisible(true);
                setIsPositioned(false); // 重置位置状态
                onShow?.();
                requestAnimationFrame(() => {
                    calculatePosition();
                });
            } else {
                setIsVisible(false);
                setIsPositioned(false); // 重置位置状态
                onHide?.();
            }
        }
    }, [trigger, visible, onShow, onHide, calculatePosition]);

    // 10. 位置更新监听
    useEffect(() => {
        if (!isVisible) return;

        const updatePosition = () => {
            calculatePosition();
        };

        // 监听滚动和窗口大小变化
        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isVisible, calculatePosition]);

    // 11. 清理定时器
    useEffect(() => {
        return () => {
            clearTimers();
        };
    }, [clearTimers]);

    // 12. Trigger事件对象
    const triggerEvents = useMemo(() => {
        if (disabled) return {};

        return {
            onMouseEnter: handleTriggerMouseEnter,
            onMouseLeave: handleTriggerMouseLeave,
            onClick: handleTriggerClick,
            onFocus: handleTriggerFocus,
            onBlur: handleTriggerBlur,
        };
    }, [
        disabled,
        handleTriggerMouseEnter,
        handleTriggerMouseLeave,
        handleTriggerClick,
        handleTriggerFocus,
        handleTriggerBlur,
    ]);

    const triggerWidth = matchTriggerWidth && triggerRef.current
        ? triggerRef.current.getBoundingClientRect().width
        : undefined;

    const normalizedMinWidth = useMemo(() => {
        if (minWidth === undefined) {
            return undefined;
        }
        return typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
    }, [minWidth]);

    return (
        <>
            {/* Trigger元素 */}
            <div
                ref={triggerRef}
                className={cs.e('trigger')}
                {...triggerEvents}
                {...restProps}
            >
                {children}
            </div>

            {/* Tooltip */}
            {isVisible && (
                <AriPortal>
                    <div
                        ref={tooltipRef}
                        className={cs.gen(
                            cs.b(),
                            cs.m(position),
                            cs.is('with-arrow', arrow),
                            cs.is('visible', isVisible),
                            className
                        )}
                        style={{
                            position: 'fixed',
                            top: `${tooltipPosition.top}px`,
                            left: `${tooltipPosition.left}px`,
                            width: triggerWidth ? `${triggerWidth}px` : undefined,
                            minWidth: triggerWidth ? `${triggerWidth}px` : normalizedMinWidth,
                            maxWidth: triggerWidth ? `${triggerWidth}px` : undefined,
                            zIndex: 9999,
                            visibility: isPositioned ? 'visible' : 'hidden',
                            opacity: isPositioned ? undefined : 0,
                            ...style,
                        }}
                        onMouseEnter={handleTooltipMouseEnter}
                        onMouseLeave={handleTooltipMouseLeave}
                    >
                        <div className={cs.e('content')}>
                            {content}
                        </div>
                        {arrow && (
                            <div className={cs.gen(cs.e('arrow'), cs.em('arrow', position))} />
                        )}
                    </div>
                </AriPortal>
            )}
        </>
    );
};
