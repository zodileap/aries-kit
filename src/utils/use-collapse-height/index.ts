// @/hooks/useCollapseHeight.ts

import { UseCollapseHeightOptions } from '@ari/types/hooks/use-collapse-height';
import { useCallback, useEffect, useRef, useState } from 'react';



/**
 * 可折叠容器高度计算 Hook
 * 
 * 用于计算可折叠容器的高度，支持嵌套折叠情况下的高度传递，
 * 支持基于索引的顺序动画，实现菜单项逐个展开/收起效果
 * 
 * 两个元素直接的间距为8px
 * 
 * @returns 包含容器引用、容器高度和子节点高度变化处理函数
 */
export const useCollapseHeight = ({
    isExpanded,
    childrenCount,
    gapSize = 8,
    onHeightChange,
    nodeKey,
    contentHeight,
    defaultExpanded = false,
    globalIndex = 0,
    animationStaggerDelay = 50
}: UseCollapseHeightOptions) => {
    // 容器引用
    const containerRef = useRef<HTMLDivElement>(null);
    // 容器高度
    const [containerHeight, setContainerHeight] = useState(0);
    // 子节点高度记录
    const [childHeights, setChildHeights] = useState<Record<string, number>>({});
    // 是否已经初始化完成
    const initializedRef = useRef(false);

    // 处理子节点高度变化
    const handleChildHeightChange = useCallback((childKey: string, height: number) => {
        setChildHeights(prev => {
            const newHeights = { ...prev, [childKey]: height };
            return newHeights;
        });
    }, []);

    // 计算容器总高度
    const calculateContainerHeight = useCallback((heights: Record<string, number> = childHeights) => {
        if (!containerRef.current || childrenCount === 0) {
            return 0;
        }

        let totalHeight = 0;
        const childElements = Array.from(containerRef.current.children);
        const recordedHeights = Object.values(heights);
        const canUseRecordedHeights =
            recordedHeights.length === childrenCount &&
            childElements.length === childrenCount;

        // 如果有记录的子节点高度，则使用它们
        if (canUseRecordedHeights) {
            totalHeight = recordedHeights.reduce((sum, height) => sum + height, 0);
        } else {
            // 否则，从DOM元素获取高度
            totalHeight = childElements.reduce((sum, child) => {
                return sum + (child as HTMLElement).offsetHeight;
            }, 0);
        }

        // 计算间距
        const gapHeight = childrenCount > 1 ? (childrenCount - 1 ) * gapSize : 0;

        return totalHeight + gapHeight;
    }, [childrenCount, childHeights, gapSize, contentHeight]);

    // 更新高度并通知父组件，支持基于索引的顺序动画
    const updateHeight = useCallback((heights: Record<string, number> = childHeights) => {
        if (!isExpanded && !defaultExpanded) {
            if (onHeightChange) {
                onHeightChange(nodeKey, contentHeight?.current?.offsetHeight || 0);
            }
            setContainerHeight(0);
            return;
        }

        // 计算基于索引的延迟时间
        // 展开时按索引顺序，收起时反向顺序（从底部开始收起）
        const baseDelay = isExpanded ? globalIndex * animationStaggerDelay : 0;
        
        // 使用 setTimeout + requestAnimationFrame 实现顺序动画
        setTimeout(() => {
            requestAnimationFrame(() => {
                const childContainerHeight = calculateContainerHeight(heights);
                const contentOffsetHeight = contentHeight?.current?.offsetHeight || 0;
                const totalNodeHeight = childContainerHeight > 0
                    ? childContainerHeight + contentOffsetHeight + gapSize
                    : contentOffsetHeight;

                setContainerHeight(childContainerHeight);

                // 通知父组件高度变化
                if (onHeightChange) {
                    onHeightChange(nodeKey, totalNodeHeight);
                }
            });
        }, baseDelay);
    }, [calculateContainerHeight, nodeKey, onHeightChange, isExpanded, defaultExpanded, contentHeight, childHeights, globalIndex, animationStaggerDelay]);

    // 在组件挂载、展开/折叠状态变化和子节点数量变化时更新高度
    useEffect(() => {
        // 延迟执行，确保DOM已更新
        const timer = setTimeout(() => {
            updateHeight();
            initializedRef.current = true;
        }, 50);

        return () => clearTimeout(timer);
    }, [isExpanded, childrenCount, updateHeight]);

    useEffect(() => {
        if (Object.keys(childHeights).length > childrenCount) {
            setChildHeights({});
        }
    }, [childHeights, childrenCount]);

    // 监听DOM变化
    useEffect(() => {
        if (!containerRef.current || (!isExpanded && !defaultExpanded)) return;

        const observer = new MutationObserver(() => {
            updateHeight();
        });

        // 观察容器及其所有子元素的变化
        observer.observe(containerRef.current, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class'],
            characterData: true
        });

        return () => {
            observer.disconnect();
        };
    }, [isExpanded, defaultExpanded, updateHeight]);

    // 使用 ResizeObserver 监听尺寸变化
    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (isExpanded || defaultExpanded) {
                updateHeight();
            }
        });

        // 观察容器尺寸变化
        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [isExpanded, defaultExpanded, updateHeight]);

    return {
        containerRef,
        containerHeight,
        handleChildHeightChange
    };
};
