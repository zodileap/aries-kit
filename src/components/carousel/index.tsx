import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useCss } from "@ari/utils";
import { AriCarouselProps, AriCarouselItem } from '@ari/types/components';
import { AriIcon } from "@ari/components/icon";

/**
 * 现代化轮播组件，支持毛玻璃效果和中心突出显示
 * 
 * Example:
 * 
 * ```jsx
 * const items = [
 *   { id: 1, src: '/image1.jpg', alt: 'Image 1', title: 'bloom' },
 *   { id: 2, src: '/image2.jpg', alt: 'Image 2', title: 'vivia' },
 *   { id: 3, src: '/image3.jpg', alt: 'Image 3', title: 'petaled' }
 * ];
 * 
 * <AriCarousel items={items} />
 * ```
 */
export const AriCarousel: React.FC<AriCarouselProps> = ({
    items = [],
    children,
    activeIndex,
    defaultActiveIndex = 0,
    autoplay = false,
    interval = 3000,
    showIndicators = true,
    showArrows = true,
    loop = true,
    height = "400px",
    duration = 600,
    pauseOnHover = true,
    renderItem,
    renderIndicator,
    onSlideChange,
    className,
    style,
    ...restProps
}) => {
    const cn = useCss("carousel");
    const { onChange: legacyOnChange, ...domProps } = restProps as typeof restProps & { onChange?: (index: number) => void };
    
    // 处理受控和非受控模式
    const isControlled = activeIndex !== undefined;
    const [internalIndex, setInternalIndex] = useState(defaultActiveIndex);
    const currentIndex = isControlled ? activeIndex : internalIndex;
    
    const setCurrentIndex = useCallback((newIndex: number) => {
        if (!isControlled) {
            setInternalIndex(newIndex);
        }
        onSlideChange?.(newIndex);
        legacyOnChange?.(newIndex);
    }, [isControlled, legacyOnChange, onSlideChange]);
    
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number>();
    
    // 处理轮播项数据
    const carouselItems = useMemo(() => {
        if (items && items.length > 0) {
            return items;
        }
        const childrenArray = React.Children.toArray(children);
        return childrenArray.map((child, index) => ({
            id: index,
            content: child
        }));
    }, [items, children]);
    
    const itemCount = carouselItems.length;
    
    // 计算是否可以切换
    const canGoNext = useMemo(() => {
        return loop || (currentIndex ?? 0) < itemCount - 1;
    }, [loop, currentIndex, itemCount]);
    
    const canGoPrev = useMemo(() => {
        return loop || (currentIndex ?? 0) > 0;
    }, [loop, currentIndex]);
    
    // 切换到指定索引
    const goToSlide = useCallback((index: number, direction?: 'left' | 'right') => {
        if (isTransitioning || itemCount === 0) return;
        
        let targetIndex = index;
        
        if (loop) {
            if (index >= itemCount) {
                targetIndex = 0;
            } else if (index < 0) {
                targetIndex = itemCount - 1;
            }
        } else {
            targetIndex = Math.max(0, Math.min(itemCount - 1, index));
        }
        
        if (targetIndex !== currentIndex) {
            setIsTransitioning(true);
            
            // 直接切换到新索引，让CSS transition处理动画
            setCurrentIndex(targetIndex);
            
            // 动画完成后清除过渡状态
            setTimeout(() => {
                setIsTransitioning(false);
            }, 600); // 匹配CSS transition时长
        }
    }, [currentIndex, itemCount, loop, isTransitioning, setCurrentIndex]);
    
    // 下一项
    const handleNext = useCallback(() => {
        if (canGoNext) {
            goToSlide((currentIndex ?? 0) + 1);
        }
    }, [currentIndex, canGoNext, goToSlide]);
    
    // 上一项
    const handlePrev = useCallback(() => {
        if (canGoPrev) {
            goToSlide((currentIndex ?? 0) - 1);
        }
    }, [currentIndex, canGoPrev, goToSlide]);
    
    // 自动播放
    useEffect(() => {
        if (autoplay && !isPaused && itemCount > 1) {
            intervalRef.current = window.setInterval(() => {
                handleNext();
            }, interval);
            
            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [autoplay, interval, isPaused, handleNext, itemCount]);
    
    // 鼠标悬停处理
    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover && autoplay) {
            setIsPaused(true);
        }
    }, [pauseOnHover, autoplay]);
    
    const handleMouseLeave = useCallback(() => {
        if (pauseOnHover && autoplay) {
            setIsPaused(false);
        }
    }, [pauseOnHover, autoplay]);
    
    // 计算容器样式
    const containerStyle = useMemo(() => ({
        height: typeof height === "number" ? `${height}px` : height,
        ...style
    }), [height, style]);
    
    // 获取可见项目
    const getVisibleItems = useCallback(() => {
        if (itemCount === 0) return [];
        if (itemCount === 1) return [{ item: carouselItems[0], index: 0, position: 'center' as const }];
        
        const current = currentIndex ?? 0;
        const prevIndex = loop ? (current - 1 + itemCount) % itemCount : Math.max(0, current - 1);
        const nextIndex = loop ? (current + 1) % itemCount : Math.min(itemCount - 1, current + 1);
        
        return [
            { item: carouselItems[prevIndex], index: prevIndex, position: 'prev' as const },
            { item: carouselItems[current], index: current, position: 'center' as const },
            { item: carouselItems[nextIndex], index: nextIndex, position: 'next' as const }
        ];
    }, [carouselItems, currentIndex, itemCount, loop]);
    
    // 渲染单个轮播项
    const renderCarouselItem = useCallback((item: AriCarouselItem, index: number) => {
        if (renderItem) {
            return renderItem(item, index);
        }
        
        if (item.src) {
            return (
                <div className={cn.e("item-wrapper")}>
                    <img src={item.src} alt={item.alt || `slide-${index}`} />
                    {item.title && (
                        <div className={cn.e("item-overlay")}>
                            <h2 className={cn.e("item-title")}>{item.title}</h2>
                        </div>
                    )}
                </div>
            );
        }
        
        return item.content;
    }, [renderItem, cn]);
    
    // 渲染指示器
    const renderIndicators = useCallback(() => {
        return carouselItems.map((_, index) => (
            <button
                key={index}
                className={cn.gen(
                    cn.e("indicator"),
                    cn.is("active", currentIndex === index)
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
            >
                {renderIndicator ? renderIndicator(index, currentIndex === index) : null}
            </button>
        ));
    }, [carouselItems, currentIndex, goToSlide, renderIndicator, cn]);
    
    const visibleItems = getVisibleItems();
    
    if (itemCount === 0) {
        return (
            <div className={cn.gen(cn.b(), className)} style={containerStyle}>
                <div className={cn.e("empty")}>暂无数据</div>
            </div>
        );
    }
    
    return (
        <div
            ref={containerRef}
            className={cn.gen(cn.b(), className)}
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...domProps}
        >
            {/* 毛玻璃背景 */}
            <div className={cn.e("background")}></div>
            
            {/* 轮播内容 */}
            <div className={cn.e("content")}>
                {visibleItems.map(({ item, index, position }) => (
                    <div
                        key={`${item.id}-${position}`}
                        className={cn.gen(
                            cn.e("item"),
                            cn.em("item", position)
                        )}
                        onClick={() => position !== 'center' && !isTransitioning && goToSlide(index)}
                    >
                        {renderCarouselItem(item, index)}
                    </div>
                ))}
            </div>
            
            {/* 导航箭头 */}
            {showArrows && itemCount > 1 && (
                <>
                    <button
                        className={cn.gen(cn.e("arrow"), cn.em("arrow", "prev"))}
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        aria-label="Previous slide"
                    >
                        <AriIcon name="chevron_left" />
                    </button>
                    <button
                        className={cn.gen(cn.e("arrow"), cn.em("arrow", "next"))}
                        onClick={handleNext}
                        disabled={!canGoNext}
                        aria-label="Next slide"
                    >
                        <AriIcon name="chevron_right" />
                    </button>
                </>
            )}
            
            {/* 指示器 */}
            {showIndicators && itemCount > 1 && (
                <div className={cn.e("indicators")}>
                    {renderIndicators()}
                </div>
            )}
        </div>
    );
};
