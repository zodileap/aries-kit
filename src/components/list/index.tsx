import React, { useMemo, useCallback } from 'react';
import { useCss } from "@ari/utils";
import { AriListProps, AriListItemProps } from "@ari/types/components";
import { AriEmpty } from "@ari/components/empty";

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
    loading = false,
    loadingMessage = '加载中...',
    bordered = false,
    size = 'md',
    split = true,
    header,
    footer,
    emptyMessage = '暂无数据',
    ...restProps
}) => {
    const cn = useCss('list');

    // 渲染列表项
    const renderListItem = useCallback((item: any, index: number) => {
        if (renderItem) {
            return (
                <AriListItem 
                    key={index} 
                    className={cn.e('item')}
                    bordered={bordered}
                    split={split && index < dataSource!.length - 1}
                >
                    {renderItem(item, index)}
                </AriListItem>
            );
        }
        return null;
    }, [renderItem, cn, bordered, split, dataSource]);

    // 渲染数据源内容
    const renderDataSourceContent = useMemo(() => {
        if (!dataSource || dataSource.length === 0) {
            return <AriEmpty description={typeof emptyMessage === 'string' ? emptyMessage : '暂无数据'} />;
        }
        return dataSource.map(renderListItem);
    }, [dataSource, renderListItem, emptyMessage]);

    // 渲染主要内容
    const renderContent = useMemo(() => {
        if (loading) {
            return <div className={cn.e('loading')}>{loadingMessage}</div>;
        }
        
        if (dataSource !== undefined) {
            return renderDataSourceContent;
        }
        
        return children;
    }, [loading, dataSource, children, renderDataSourceContent, cn, loadingMessage]);

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
