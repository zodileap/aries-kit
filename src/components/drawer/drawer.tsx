import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AriDrawerProps } from '@ari/types/components/drawer';
import { AriIcon } from '@ari/components/icon';
import { AriPortal } from '@ari/components/portal';
import { useCss } from '@ari/utils';
import { AriTypography } from '../typography';
import { AriButton } from '../button';

/**
 * 抽屉组件，从屏幕边缘滑出的浮层面板。
 * 
 * 可用于展示临时的、辅助性的内容，或在不离开当前页面的情况下进行操作。
 * 支持从上、右、下、左四个方向滑出，并提供遮罩层、标题、页脚等功能。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/drawer}
 */
export const AriDrawer: React.FC<AriDrawerProps> = ({
  visible = false,
  placement = 'right',
  width = '300px',
  height = '240px',
  mask = true,
  maskClosable = true,
  closable = true,
  destroyOnClose = false,
  title,
  footer,
  zIndex = 1000,
  className = '',
  style,
  bodyStyle,
  headerStyle,
  footerStyle,
  maskStyle,
  onClose,
  afterVisibleChange,
  children,
  getContainer = document.body,
}) => {
  // 1 状态初始化和Refs
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(visible); // 控制子元素是否渲染
  const drawerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [isDirectRender, setIsDirectRender] = useState(getContainer === false);
  const cn = useCss("drawer");
  
  // 计算实际容器
  const actualContainer = useMemo(() => {
    if (getContainer === false) {
      setIsDirectRender(true);
      return document.body; // 即使是直接渲染，我们也需要一个挂载点
    } else {
      setIsDirectRender(false);
      if (typeof getContainer === 'function') {
        return getContainer();
      } else if (getContainer instanceof HTMLElement) {
        return getContainer;
      } else {
        return document.body; // 默认为 body
      }
    }
  }, [getContainer]);

  // 2 派生状态计算
  const isHorizontal = placement === 'left' || placement === 'right';
  const sizeStyle = useMemo(() => {
    // 水平抽屉使用宽度，垂直抽屉使用高度
    return isHorizontal 
      ? { width: typeof width === 'number' ? `${width}px` : width } 
      : { height: typeof height === 'number' ? `${height}px` : height };
  }, [isHorizontal, width, height]);
  
  // 计算抽屉位置样式
  const positionStyle = useMemo(() => {
    const baseStyle = {
      ...sizeStyle,
    };
    
    return baseStyle;
  }, [sizeStyle, placement]);
  
  // 3 事件处理函数
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);
  
  const handleMaskClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === maskRef.current) {
      handleClose();
    }
  }, [maskClosable, handleClose]);
  
  // 4 业务逻辑处理函数
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      visible &&
      drawerRef.current && 
      !drawerRef.current.contains(event.target as Node) &&
      maskClosable &&
      !mask // 当没有遮罩层时才需要点击外部关闭
    ) {
      handleClose();
    }
  }, [visible, maskClosable, mask, handleClose]);
  
  // 5 副作用处理
  // 处理可见性状态变化和动画
  useEffect(() => {
    if (visible) {
      // 先设置shouldRenderChildren为true，确保内容被渲染
      setShouldRenderChildren(true);
      // 使用requestAnimationFrame确保DOM已更新
      requestAnimationFrame(() => {
        // 使用setTimeout给浏览器一个绘制周期，然后再设置动画状态
        setTimeout(() => {
          setAnimatedVisible(true);
        }, 10);
      });
    } else {
      // 先将animatedVisible设为false，触发关闭动画
      setAnimatedVisible(false);
      // 等待动画完成后再处理子元素的渲染状态
      const timer = setTimeout(() => {
        // 如果设置了 destroyOnClose，则在动画结束后不渲染子元素
        if (destroyOnClose) {
          setShouldRenderChildren(false);
        }
      }, 300); // 与CSS动画时长保持一致
      return () => clearTimeout(timer);
    }
  }, [visible, destroyOnClose]);

  // 通知可见性状态变化
  useEffect(() => {
    afterVisibleChange?.(visible);
  }, [visible, afterVisibleChange]);
  
  // 添加和移除点击外部关闭的事件监听
  useEffect(() => {
    if (!mask && maskClosable) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [mask, maskClosable, handleClickOutside]);
  
  // 9 条件渲染判断
  // 修改条件：即使animatedVisible为false，我们也需要渲染组件，但会有不同的样式
  // 10 主要JSX返回
  const DrawerContent = (
    <>
      {mask && (
        <div 
          ref={maskRef}
          className={cn.gen(
            cn.e('mask'),
            cn.is('visible', visible),
            cn.is('contained', isDirectRender)
          )}
          style={{ zIndex, ...maskStyle }}
          onClick={handleMaskClick}
        />
      )}
      <div 
        ref={drawerRef}
        className={cn.gen(
          className,
          cn.b(),
          cn.m(placement),
          cn.is('visible', animatedVisible), // 注意这里使用animatedVisible来控制动画
          cn.is('contained', isDirectRender)
        )}
        style={{ 
          ...positionStyle, 
          ...style,
          zIndex,
          // 如果不可见且不应该渲染子元素，则隐藏整个组件
          display: !shouldRenderChildren && !visible ? 'none' : undefined
        }}
      >
        <div className={cn.e('content')}>
          {(title || closable) && (
            <div className={cn.e('header')} style={headerStyle}>
              {title && <div className={cn.e('title')}><AriTypography variant='h3'>{title}</AriTypography></div>}
              {closable && (
                    <AriButton
                      className={cn.e('action-btn')}
                      onClick={onClose}
                      icon="close">
                    </AriButton>
              )}
            </div>
          )}
          <div className={cn.e('body')} style={bodyStyle}>
            {shouldRenderChildren && children}
          </div>
          {footer && (
            <div className={cn.e('footer')} style={footerStyle}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
  
  // 使用 Portal 组件渲染内容
  return <AriPortal container={actualContainer}>{DrawerContent}</AriPortal>;
};
