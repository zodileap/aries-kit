import React, { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import { useCss } from '@ari/utils';
import { useClickAway } from '@ari/utils';
import { AriPortal } from '../portal';
import { AriButton } from '../button';
import { AriFlex } from '../flex';
import { AriPopconfirmProps } from '@ari/types/components/popconfirm';
import { AriTypography } from '../typography';

/**
 * 气泡确认框组件
 * 
 * 点击元素弹出气泡式的确认框，常用于操作确认
 * 
 * Example:
 * {@link https://aries-react.dev/docs/popconfirm}
 */
export const AriPopconfirm: React.FC<AriPopconfirmProps> = ({
  title,
  description,
  okText = "确定",
  cancelText = "取消",
  placement = 'top',
  children,
  onConfirm,
  onCancel,
  okButtonProps,
  cancelButtonProps,
  open,
  defaultOpen = false,
  closeOnEscape = true,
  positionTarget,
  ...restProps
}) => {
  // 1. 状态初始化和Refs
  const [isVisible, setIsVisible] = useState(defaultOpen);
  const [isInDOM, setIsInDOM] = useState(defaultOpen);
  const [popconfirmStyles, setPopconfirmStyles] = useState<React.CSSProperties>({});
  const [arrowStyles, setArrowStyles] = useState<React.CSSProperties>({});
  const [isPositionCalculated, setIsPositionCalculated] = useState(false);

  const triggerRef = useRef<HTMLDivElement>(null);
  const popconfirmRef = useRef<HTMLDivElement>(null);
  const positionFrameRef = useRef<number | null>(null);

  const cs = useCss('popconfirm');

  // 2. 处理受控模式
  useEffect(() => {
    if (open !== undefined) {
      setIsVisible(open);
      
      if (open) {
        setIsInDOM(true);
        // 给一个短暂的延迟，确保元素已添加到 DOM
        setTimeout(() => {
          updatePosition();
        }, 0);
      } else {
        // 隐藏后延迟移除，以支持过渡动画
        setTimeout(() => {
          setIsInDOM(false);
        }, 300);
      }
    }
  }, [open]);

  // 3. 显示/隐藏的处理函数
  const show = useCallback((e?: React.MouseEvent) => {
    // 阻止事件冒泡
    if (e) {
      e.stopPropagation();
    }
    
    if (open !== undefined) return; // 受控模式下不自动显示/隐藏

    // 首先确保元素在 DOM 中
    setIsInDOM(true);
    setIsPositionCalculated(false); // 重置位置计算标记

    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible, open]);

  const hide = useCallback(() => {
    if (open !== undefined) return; // 受控模式下不自动显示/隐藏

    if (isVisible) {
      setIsVisible(false);

      // 设置一个延迟，让过渡动画完成后再从 DOM 移除元素
      setTimeout(() => {
        setIsInDOM(false);
        setIsPositionCalculated(false); // 重置位置计算标记
      }, 300); // 略长于动画时间
    }
  }, [isVisible, open]);

  // 4. 处理确认和取消
  const handleConfirm = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止确认按钮点击事件冒泡
    hide();
    onConfirm?.(e);
  }, [hide, onConfirm]);

  const handleCancel = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止取消按钮点击事件冒泡
    hide();
    onCancel?.();
  }, [hide, onCancel]);

  // 5. 计算popconfirm位置
  const updatePosition = useCallback(() => {
    // 取消任何待处理的位置计算
    if (positionFrameRef.current) {
      cancelAnimationFrame(positionFrameRef.current);
      positionFrameRef.current = null;
    }

    if (!popconfirmRef.current || !triggerRef.current) {
      // A. 如果元素还未渲染，使用 requestAnimationFrame 稍后再尝试
      positionFrameRef.current = requestAnimationFrame(() => {
        updatePosition();
      });
      return;
    }

    // 获取触发元素的位置 - 优先使用positionTarget
    let triggerElement: HTMLElement;
    if (positionTarget?.current) {
      // 如果提供了positionTarget，使用它作为定位参考
      triggerElement = positionTarget.current;
    } else {
      // 否则尝试使用第一个子元素，如果没有则使用triggerRef
      triggerElement = triggerRef.current;
      const firstChild = triggerRef.current.firstElementChild;
      if (firstChild && triggerRef.current.children.length === 1) {
        triggerElement = firstChild as HTMLElement;
      }
    }

    const triggerRect = triggerElement.getBoundingClientRect();
    const popconfirmRect = popconfirmRef.current.getBoundingClientRect();

    // B. 确保有有效的尺寸（有时初始渲染时宽高可能为0）
    if (popconfirmRect.width === 0 || popconfirmRect.height === 0) {
      // 如果尺寸无效，稍后再次尝试计算
      positionFrameRef.current = requestAnimationFrame(() => {
        updatePosition();
      });
      return;
    }

    // 检查trigger元素是否有有效尺寸
    if (triggerRect.width === 0 && triggerRect.height === 0) {
      // 如果trigger没有尺寸，可能是隐藏元素，尝试延迟计算
      positionFrameRef.current = requestAnimationFrame(() => {
        updatePosition();
      });
      return;
    }

    const gap = 8; // 提示框与触发元素的间距
    const arrowSize = 6; // 箭头边长 (与 CSS 中的 border-width 保持一致)

    let top = 0;
    let left = 0;
    let currentArrowStyles: React.CSSProperties = {}; // 用于存储当前位置的箭头样式

    // C. 根据不同的placement位置来设置popconfirm和箭头的位置
    switch (placement) {
      // 处理基本位置
      case 'top':
        top = triggerRect.top - popconfirmRect.height - gap;
        left = triggerRect.left + triggerRect.width / 2 - popconfirmRect.width / 2;
        currentArrowStyles = { bottom: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%) rotate(180deg)' };
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + triggerRect.width / 2 - popconfirmRect.width / 2;
        currentArrowStyles = { top: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%)' };
        break;
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - popconfirmRect.height / 2;
        left = triggerRect.left - popconfirmRect.width - gap;
        currentArrowStyles = { right: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%) rotate(90deg)' };
        break;
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - popconfirmRect.height / 2;
        left = triggerRect.right + gap;
        currentArrowStyles = { left: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%) rotate(-90deg)' };
        break;

      // 处理复合位置
      case 'topLeft':
        top = triggerRect.top - popconfirmRect.height - gap;
        left = triggerRect.left;
        currentArrowStyles = { bottom: `-${arrowSize * 2}px`, left: '16px', transform: 'rotate(180deg)' };
        break;
      case 'topRight':
        top = triggerRect.top - popconfirmRect.height - gap;
        left = triggerRect.right - popconfirmRect.width;
        currentArrowStyles = { bottom: `-${arrowSize * 2}px`, right: '16px', transform: 'rotate(180deg)' };
        break;
      case 'bottomLeft':
        top = triggerRect.bottom + gap;
        left = triggerRect.left;
        currentArrowStyles = { top: `-${arrowSize * 2}px`, left: '16px' };
        break;
      case 'bottomRight':
        top = triggerRect.bottom + gap;
        left = triggerRect.right - popconfirmRect.width;
        currentArrowStyles = { top: `-${arrowSize * 2}px`, right: '16px' };
        break;
      case 'leftTop':
        top = triggerRect.top;
        left = triggerRect.left - popconfirmRect.width - gap;
        currentArrowStyles = { right: `-${arrowSize * 2}px`, top: '16px', transform: 'rotate(90deg)' };
        break;
      case 'leftBottom':
        top = triggerRect.bottom - popconfirmRect.height;
        left = triggerRect.left - popconfirmRect.width - gap;
        currentArrowStyles = { right: `-${arrowSize * 2}px`, bottom: '16px', transform: 'rotate(90deg)' };
        break;
      case 'rightTop':
        top = triggerRect.top;
        left = triggerRect.right + gap;
        currentArrowStyles = { left: `-${arrowSize * 2}px`, top: '16px', transform: 'rotate(-90deg)' };
        break;
      case 'rightBottom':
        top = triggerRect.bottom - popconfirmRect.height;
        left = triggerRect.right + gap;
        currentArrowStyles = { left: `-${arrowSize * 2}px`, bottom: '16px', transform: 'rotate(-90deg)' };
        break;
      default:
        top = triggerRect.top - popconfirmRect.height - gap;
        left = triggerRect.left + triggerRect.width / 2 - popconfirmRect.width / 2;
        currentArrowStyles = { bottom: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%) rotate(180deg)' };
        break;
    }

    // D. 边界检测和调整
    const margin = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < margin) {
      left = margin;
    } else if (left + popconfirmRect.width > viewportWidth - margin) {
      left = viewportWidth - popconfirmRect.width - margin;
    }

    if (top < margin) {
      top = margin;
    } else if (top + popconfirmRect.height > viewportHeight - margin) {
      top = viewportHeight - popconfirmRect.height - margin;
    }

    // E. 应用位置
    setPopconfirmStyles({
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
      zIndex: 9999
    });

    // F. 应用箭头位置
    setArrowStyles(currentArrowStyles);

    // G. 标记位置已计算
    setIsPositionCalculated(true);
  }, [placement]);

  // 6. 元素进入 DOM 后计算位置
  useEffect(() => {
    if (isInDOM && isVisible && !isPositionCalculated) {
      // 使用 requestAnimationFrame 确保 DOM 已完全渲染
      const rafId = requestAnimationFrame(() => {
        updatePosition();
      });

      return () => cancelAnimationFrame(rafId);
    }
  }, [isInDOM, isVisible, isPositionCalculated, updatePosition]);

  // 7. 监听位置变化并更新
  useLayoutEffect(() => {
    if (isVisible && isInDOM) {
      // 使用 RAF 确保在下一帧渲染前计算位置
      positionFrameRef.current = requestAnimationFrame(() => {
        updatePosition();

        // 添加事件监听器
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);
      });

      // 返回清理函数
      return () => {
        if (positionFrameRef.current) {
          cancelAnimationFrame(positionFrameRef.current);
        }
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition, true);
      };
    }
  }, [isVisible, isInDOM, updatePosition]);

  // 8. 处理点击外部关闭
  useClickAway(popconfirmRef, (e) => {
    // 如果点击的是触发元素，不处理（防止与触发器的点击事件冲突）
    if (triggerRef.current?.contains(e.target as Node)) {
      return;
    }
    hide();
  }, ['mousedown', 'touchstart']);

  // 9. 处理 ESC 键关闭
  useEffect(() => {
    if (!closeOnEscape || !isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        hide();
        onCancel?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeOnEscape, isVisible, hide, onCancel]);

  // 10. 清理 RAF
  useEffect(() => {
    return () => {
      if (positionFrameRef.current !== null) {
        cancelAnimationFrame(positionFrameRef.current);
      }
    };
  }, []);

  // 12. 渲染
  return (
    <>
      <div
        ref={triggerRef}
        className={cs.gen(cs.e('trigger')) as string}
        onClick={(e) => show(e)}
        style={{ display: 'inline-block' }}
        {...restProps}
      >
        {children}
      </div>

      {isInDOM && (
        <AriPortal>
          <div
            ref={popconfirmRef}
            className={cs.gen(
              cs.b(),
              cs.is(placement), // 使用 is 而不是 m 修饰符
              cs.is('visible', isVisible && isPositionCalculated)
            )}
            style={{
              ...popconfirmStyles,
              visibility: isPositionCalculated ? (isVisible ? 'visible' : 'hidden') : 'hidden',
              pointerEvents: isVisible ? 'auto' : 'none'
            }}
            onClick={(e) => e.stopPropagation()} // 阻止弹窗内部点击事件冒泡
          >
            <div className={cs.e('content')} onClick={(e) => e.stopPropagation()}>
              {/* 标题和描述 */}
              <AriTypography variant='body' className={cs.e('title')}>{title}</AriTypography>
              {description && (
                <AriTypography variant='caption' className={cs.e('description')}>{description}</AriTypography>
              )}
              
              {/* 操作按钮 - 使用 AriFlex 替换原来的 div */}
              <AriFlex 
                className={cs.e('actions')} 
                justify="center"
                space={8}
                ghost
                padding={{left: 0, right: 0}}
              >
                <AriButton
                  size="sm"
                  color='info'
                  onClick={(e) => handleCancel(e)}
                  {...cancelButtonProps}
                >
                  {cancelText}
                </AriButton>
                <AriButton
                  size="sm"
                  color="primary"
                  onClick={(e) => handleConfirm(e)}
                  {...okButtonProps}
                >
                  {okText}
                </AriButton>
              </AriFlex>
            </div>
            
            {/* 箭头 - 直接使用字符串拼接的类名 */}
            <div
              className={cs.gen(
                cs.e('arrow'),
                cs.is(placement),
              )}
              style={arrowStyles}
            />
          </div>
        </AriPortal>
      )}
    </>
  );
};