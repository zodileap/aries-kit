import { useRef, useState, useEffect, useCallback, Fragment } from 'react';
import { useCss } from "@ari/utils";
import { AriFixedSizeGridProps } from '@ari/types/components';

/**
 * 固定尺寸网格组件，支持虚拟滚动 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/fixed-size-grid}
 */
export const AriFixedSizeGrid: React.FC<AriFixedSizeGridProps> = ({
    columnCount = 3,
    columnWidth = 100,
    rowHeight = 100,
    height = 400,
    width = '100%',
    overscanRowsCount = 1,
    children,
    itemCount,
    className,
    onScroll,
    onItemsRendered
}) => {
    const cs = useCss('fixed-size-grid');
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    // 计算列数（如果没有明确指定）
    const calculatedColumnCount = columnCount || Math.floor(containerWidth / columnWidth) || 1;
    
    // 根据项目总数计算行数
    const rowCount = itemCount 
        ? Math.ceil(itemCount / calculatedColumnCount)
        : 0;
    
    // 获取有效的容器高度（用于计算）
    const effectiveHeight = typeof height === 'number' ? height : containerHeight || 400;
    
    // 计算当前可见行的范围
    const visibleRowStartIndex = Math.floor(scrollTop / rowHeight);
    const visibleRowStopIndex = Math.min(
        rowCount - 1,
        Math.floor((scrollTop + effectiveHeight) / rowHeight)
    );
    
    // 添加预渲染行
    const renderedRowStartIndex = Math.max(0, visibleRowStartIndex - overscanRowsCount);
    const renderedRowStopIndex = Math.min(
        rowCount - 1,
        visibleRowStopIndex + overscanRowsCount
    );

    // 处理滚动事件
    const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollLeft } = event.currentTarget;
        setScrollTop(scrollTop);
        
        onScroll?.(scrollTop, scrollLeft);
        
        // 计算可见项目的索引范围
        const startIndex = visibleRowStartIndex * calculatedColumnCount;
        const stopIndex = Math.min(
            itemCount ? itemCount - 1 : 0,
            (visibleRowStopIndex + 1) * calculatedColumnCount - 1
        );
        
        onItemsRendered?.({
            visibleStartIndex: startIndex,
            visibleStopIndex: stopIndex
        });
    }, [
        calculatedColumnCount, 
        visibleRowStartIndex, 
        visibleRowStopIndex, 
        itemCount, 
        onScroll, 
        onItemsRendered
    ]);

    // 计算容器实际尺寸
    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setContainerWidth(entry.contentRect.width);
                    setContainerHeight(entry.contentRect.height);
                }
            });
            
            resizeObserver.observe(containerRef.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, []);

    // 创建网格项目
    const renderItems = () => {
        const items = [];
        
        for (let rowIndex = renderedRowStartIndex; rowIndex <= renderedRowStopIndex; rowIndex++) {
            for (let columnIndex = 0; columnIndex < calculatedColumnCount; columnIndex++) {
                const itemIndex = rowIndex * calculatedColumnCount + columnIndex;
                
                // 如果提供了 itemCount 且当前索引超出了总数，则不渲染
                if (itemCount !== undefined && itemIndex >= itemCount) {
                    continue;
                }
                
                // 计算项目的位置和样式
                const style: React.CSSProperties = {
                    position: 'absolute',
                    left: columnIndex * columnWidth,
                    top: rowIndex * rowHeight,
                    width: columnWidth,
                    height: rowHeight,
                };
                
                items.push(
                    <Fragment key={`${rowIndex}-${columnIndex}`}>
                        {children({
                            columnIndex,
                            rowIndex,
                            style
                        })}
                    </Fragment>
                );
            }
        }
        
        return items;
    };

    // 计算内部内容的总高度
    const innerHeight = rowCount * rowHeight;
    const innerWidth = calculatedColumnCount * columnWidth;

    return (
        <div 
            ref={containerRef}
            className={cs.gen(cs.b(), className)}
            style={{ 
                position: 'relative',
                height,
                width,
                overflow: 'auto'
            }}
            onScroll={handleScroll}
        >
            <div 
                style={{ 
                    height: innerHeight, 
                    width: innerWidth,
                    position: 'relative'
                }}
            >
                {renderItems()}
            </div>
        </div>
    );
};

export default AriFixedSizeGrid;
