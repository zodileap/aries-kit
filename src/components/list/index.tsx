import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useCss, useDragSort } from "@ari/utils";
import { AriListProps, AriListItemProps } from "@ari/types/components";
import { AriEmpty } from "@ari/components/empty";
import { AriIcon } from "@ari/components/icon";

/**
 * 列表组件
 * 用于展示一系列相关内容的列表容器
 * 
 * Example:
 * {@link https://aries-react.dev/docs/list}
 * 
 * @param {AriListProps} props - 列表组件的属性
 */
export const AriList: React.FC<AriListProps> = ({
    className,
    children,
    dataSource,
    renderItem,
    allowDrag = false,
    loading = false,
    loadingMessage = '加载中...',
    bordered = false,
    size = 'md',
    split = true,
    header,
    footer,
    emptyMessage = '暂无数据',
    onDragSort,
    ...restProps
}) => {
    const cn = useCss('list');
    const [innerDataSource, setInnerDataSource] = useState<any[]>(() => dataSource ?? []);

    useEffect(() => {
        if (dataSource !== undefined) {
            setInnerDataSource(dataSource);
        }
    }, [dataSource]);

    const currentDataSource = dataSource !== undefined ? innerDataSource : undefined;
    const canDrag = allowDrag && !loading && !!currentDataSource && currentDataSource.length > 1;

    const { dragState, getDragItemProps } = useDragSort({
        items: currentDataSource ?? [],
        onSortChange: (newItems, fromIndex, toIndex) => {
            setInnerDataSource(newItems);
            onDragSort?.(fromIndex, toIndex, newItems);
        }
    });

    const getItemKey = useCallback((item: any, index: number) => {
        if (item && typeof item === 'object') {
            const candidate = item.id ?? item.key;

            if (typeof candidate === 'string' || typeof candidate === 'number') {
                return candidate;
            }
        }

        return `list-item-${index}`;
    }, []);

    // 渲染列表项
    const renderListItem = useCallback((item: any, index: number) => {
        if (renderItem) {
            const isDragging = canDrag && dragState.dragIndex === index;
            const isDragOver = canDrag && dragState.hoverIndex === index;
            const dragProps = canDrag ? getDragItemProps(index) : {};

            return (
                <AriListItem 
                    key={getItemKey(item, index)}
                    className={cn.gen(
                        canDrag ? cn.is('draggable', true) : '',
                        isDragging ? cn.is('dragging', true) : '',
                        isDragOver ? cn.is('drag-over', true) : ''
                    )}
                    split={split && index < (currentDataSource?.length ?? 0) - 1}
                    {...dragProps}
                >
                    <div className={cn.e('item-main')}>
                        {canDrag && (
                            <div className={cn.e('item-drag-handle')} aria-hidden="true">
                                <AriIcon name="drag_indicator" />
                            </div>
                        )}
                        <div className={cn.e('item-body')}>
                            {renderItem(item, index)}
                        </div>
                    </div>
                </AriListItem>
            );
        }
        return null;
    }, [renderItem, cn, bordered, split, currentDataSource, canDrag, dragState.dragIndex, dragState.hoverIndex, getDragItemProps, getItemKey]);

    // 渲染数据源内容
    const renderDataSourceContent = useMemo(() => {
        if (!currentDataSource || currentDataSource.length === 0) {
            if (typeof emptyMessage === 'string') {
                return <AriEmpty description={emptyMessage} />;
            }

            return emptyMessage;
        }
        return currentDataSource.map(renderListItem);
    }, [currentDataSource, renderListItem, emptyMessage]);

    // 渲染主要内容
    const renderContent = useMemo(() => {
        if (loading) {
            return <div className={cn.e('loading')}>{loadingMessage}</div>;
        }
        
        if (currentDataSource !== undefined) {
            return renderDataSourceContent;
        }
        
        return children;
    }, [loading, currentDataSource, children, renderDataSourceContent, cn, loadingMessage]);

    return (
        <div 
            className={cn.gen(
                cn.b(),
                bordered ? cn.m('bordered') : '',
                cn.m(`size-${size}`),
                className
            )}
            {...restProps}
        >
            {header && (
                <div className={cn.e('header')}>
                    {header}
                </div>
            )}
            
            <div className={cn.e('content')}>
                {renderContent}
            </div>
            
            {footer && (
                <div className={cn.e('footer')}>
                    {footer}
                </div>
            )}
        </div>
    );
};

/**
 * 列表项组件
 * 列表中的单个项目容器
 * 
 * Example:
 * {@link https://aries-react.dev/docs/list-item}
 * 
 * @param {AriListItemProps} props - 列表项组件的属性
 */
export const AriListItem: React.FC<AriListItemProps> = ({
    className,
    children,
    bordered = false,
    split = false,
    actions,
    extra,
    ...restProps
}) => {
    const cn = useCss('list');

    return (
        <div 
            className={cn.gen(
                cn.e('item'),
                bordered ? cn.m('bordered') : '',
                split ? cn.m('split') : '',
                className
            )}
            {...restProps}
        >
            <div className={cn.e('item-content')}>
                {children}
            </div>
            
            {(actions || extra) && (
                <div className={cn.e('item-action')}>
                    {actions && (
                        <div className={cn.e('item-actions')}>
                            {actions.map((action, index) => (
                                <span 
                                    key={index} 
                                    className={cn.e('item-action-item')}
                                >
                                    {action}
                                </span>
                            ))}
                        </div>
                    )}
                    {extra && (
                        <div className={cn.e('item-extra')}>
                            {extra}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
