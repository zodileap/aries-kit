import { useEffect, useRef, useState } from 'react';
import { AriPortal } from '../portal';
import { AriIcon } from '../icon';
import { useCss } from '@ari/utils';
import { AriModalProps } from '@ari/types';
import { AriTypography } from '../typography';
import { AriButton } from '../button';
import { AriFlex } from '../flex';

/**
 * 对话框组件
 * 
 * 用于在页面上展示需要用户关注的内容，通常用于确认信息或执行特定操作
 * 
 * Example:
 * {@link https://aries-react.dev/docs/modal}
 */
export const AriModal: React.FC<AriModalProps> = ({
  visible = false,
  onClose,
  title,
  children,
  footer,
  closable = true,
  maskClosable = true,
  escClosable = true,
  width = 'default',
  position = 'center',
  className,
  style,
  mask = true,
  maskStyle,
  forceRender = false,
  afterOpen,
  afterClose,
  maximizable = false,
  fullscreen = false,
  onFullscreenChange,
}) => {
  // 1. 内部状态管理
  const [isVisible, setIsVisible] = useState(visible);
  const [isFullscreen, setIsFullscreen] = useState(fullscreen);
  const [isRendered, setIsRendered] = useState(forceRender || visible);
  const [animationVisible, setAnimationVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cn = useCss('modal');

  // 追踪鼠标按下位置的状态
  const mouseDownPositionRef = useRef<{ x: number; y: number } | null>(null);
  const mouseDownOnModalRef = useRef<boolean>(false);

  // 2. 处理可见性变化
  useEffect(() => {
    if (visible) {
      // 显示对话框
      setIsRendered(true);
      // 先渲染再执行动画
      setTimeout(() => {
        setIsVisible(true);
        setAnimationVisible(true);
      }, 10);
    } else {
      // 隐藏对话框
      setAnimationVisible(false);
      // 等动画结束后再隐藏
      const timer = setTimeout(() => {
        setIsVisible(false);
        // 如果不是强制渲染，则卸载DOM
        if (!forceRender) {
          setTimeout(() => setIsRendered(false), 100);
        }
        // 执行关闭后回调
        afterClose?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible, forceRender, afterClose]);

  // 3. 处理打开后的回调
  useEffect(() => {
    if (isVisible && animationVisible) {
      afterOpen?.();
    }
  }, [isVisible, animationVisible, afterOpen]);

  // 4. 处理ESC关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible && escClosable) {
        onClose();
      }
    };

    if (isVisible && escClosable) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, escClosable, onClose]);

  // 5. 处理全屏模式变更
  useEffect(() => {
    setIsFullscreen(fullscreen);
  }, [fullscreen]);

  // 6. 切换全屏状态
  const toggleFullscreen = () => {
    const newFullscreenState = !isFullscreen;
    setIsFullscreen(newFullscreenState);
    onFullscreenChange?.(newFullscreenState);
  };

  // 7. 处理全局鼠标事件，用于改进mask点击行为
  useEffect(() => {
    if (!isVisible || !maskClosable) return;
    
    // 当鼠标按下时记录位置
    const handleMouseDown = (e: MouseEvent) => {
      // 获取遮罩元素
      const maskElement = document.querySelector(`.${cn.e('mask')}`);
      
      // 只有当点击发生在遮罩元素上时才记录位置和状态
      // 这样可以避免影响到Portal中的元素（如Select下拉框）
      if (maskElement === e.target) {
        // 记录鼠标按下的位置
        mouseDownPositionRef.current = { x: e.clientX, y: e.clientY };
        
        // 检查点击是否发生在Modal容器内部
        if (containerRef.current && containerRef.current.contains(e.target as Node)) {
          mouseDownOnModalRef.current = true;
        } else {
          mouseDownOnModalRef.current = false;
        }
      } else {
        // 点击不在遮罩上，重置状态
        mouseDownPositionRef.current = null;
        mouseDownOnModalRef.current = false;
      }
    };

    // 当鼠标释放时检查位置
    const handleMouseUp = (e: MouseEvent) => {
      // 获取遮罩元素
      const maskElement = document.querySelector(`.${cn.e('mask')}`);
      
      // 如果没有遮罩元素或鼠标不是释放在遮罩上，则不处理
      if (!maskElement || maskElement !== e.target) {
        mouseDownPositionRef.current = null;
        mouseDownOnModalRef.current = false;
        return;
      }
      
      // 如果鼠标按下时在Modal内部，则不处理
      if (mouseDownOnModalRef.current) {
        mouseDownPositionRef.current = null;
        mouseDownOnModalRef.current = false;
        return;
      }

      // 获取鼠标按下的位置
      const downPosition = mouseDownPositionRef.current;

      // 如果有记录的按下位置，并且当前不在Modal容器内
      if (downPosition &&
        !(containerRef.current && containerRef.current.contains(e.target as Node))) {

        // 计算鼠标移动距离
        const moveDistance = Math.sqrt(
          Math.pow(e.clientX - downPosition.x, 2) +
          Math.pow(e.clientY - downPosition.y, 2)
        );

        // 如果移动距离小于一个阈值（例如5像素），则视为点击而非拖拽
        if (moveDistance < 5) {
          onClose();
        }
      }

      // 重置状态
      mouseDownPositionRef.current = null;
      mouseDownOnModalRef.current = false;
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible, maskClosable, onClose]);

  // 8. 处理点击遮罩层
  // 注意：我们不再在这里处理关闭逻辑，而是移到全局mousedown/mouseup事件中
  const handleMaskClick = (e: React.MouseEvent) => {
    // 防止冒泡到其他可能的点击处理器
    if (e.target === e.currentTarget) {
      e.stopPropagation();
    }
  };

  // 9. 获取宽度样式
  const getWidthStyle = () => {
    if (typeof width === 'number') {
      return { width: `${width}px` };
    }
    if (typeof width === 'string' && ['xs', 'sm', 'default', 'lg', 'xl', 'xxl'].includes(width)) {
      // 预设尺寸通过CSS类实现
      return {};
    }
    if (typeof width === 'string') {
      return { width };
    }
    return {};
  };

  // 10. 如果不需要渲染，则返回null
  if (!isRendered) {
    return null;
  }

  // 11. 渲染对话框
  return (
    <AriPortal>
      {mask && (
        <div
          className={cn.gen(
            cn.e('mask'),
            cn.m(position),
            cn.is('visible', animationVisible)
          )}
          style={maskStyle}
          onClick={handleMaskClick}
        >
          <div
            ref={containerRef}
            className={cn.gen(
              cn.e('container'),
              cn.is(String(width), ['xs', 'sm', 'default', 'lg', 'xl', 'xxl'].includes(String(width))),
              cn.is('fullscreen', isFullscreen),
              cn.is('visible', animationVisible),
              className
            )}
            style={{ ...getWidthStyle(), ...style }}
          >
            {/* 头部 */}
            {(title || closable || maximizable) && (
              <div className={cn.e('header')}>
                <div className={cn.e('title')}>
                  <AriTypography variant='h3'>{title}</AriTypography>
                </div>
                <AriFlex>
                  {maximizable && (
                    <AriButton
                      className={cn.e('action-btn')}
                      onClick={toggleFullscreen}
                      icon={isFullscreen ? 'fullscreen_exit' : 'fullscreen'}>
                    </AriButton>
                  )}
                  {closable && (
                    <AriButton
                      className={cn.e('action-btn')}
                      onClick={onClose}
                      icon="close">
                    </AriButton>
                  )}
                </AriFlex>
              </div>
            )}

            {/* 内容区 */}
            <div className={cn.e('content')}>{children}</div>

            {/* 底部 */}
            {footer && <div className={cn.e('footer')}>{footer}</div>}
          </div>
        </div>
      )}
    </AriPortal>
  );
};