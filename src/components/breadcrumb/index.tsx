// src/components/breadcrumb/breadcrumb.tsx

import React, { useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriBreadcrumbProps, AriBreadcrumbItem } from '@ari/types';
import { AriIcon } from '../icon';
import { AriTypography } from '../typography';

/**
 * 面包屑组件
 * 
 * 用于显示当前页面在网站中的层级位置，帮助用户了解当前所处位置并提供导航功能
 */
export const AriBreadcrumb: React.FC<AriBreadcrumbProps> = ({
    items = [],
    separator = '/',
    className,
    showIcon = true,
    ...props
}) => {
    const cs = useCss('breadcrumb');

    // 渲染单个面包屑项
    const renderItem = (item: AriBreadcrumbItem, index: number, isLast: boolean) => {
        const itemClassName = cs.gen(
            cs.e('item'),
            cs.is('disabled', item.disabled),
            cs.is('last', isLast)
        );

        // 内容元素，包含图标和文本
        const content = (
            <>
                {showIcon && item.icon && (
                    <span className={cs.e('icon')}>
                        <AriIcon name={item.icon} />
                    </span>
                )}
                <AriTypography variant='body' className={cs.e('text')}>{item.label}</AriTypography>
            </>
        );

        // 如果是最后一项或禁用，则直接显示文本
        if (isLast || item.disabled) {
            return (
                <span key={item.key} className={itemClassName}>
                    {content}
                </span>
            );
        }

        // 否则，如果有链接则渲染为a标签，否则渲染为可点击的span
        return (
            <span key={item.key} className={itemClassName}>
                {item.href ? (
                    <a
                        href={item.href}
                        className={cs.e('link')}
                        onClick={(e) => {
                            if (item.onClick) {
                                e.preventDefault();
                                item.onClick();
                            }
                        }}
                    >
                        {content}
                    </a>
                ) : (
                    <span
                        className={cs.e('link')}
                        onClick={item.onClick}
                        role="button"
                        tabIndex={0}
                    >
                        {content}
                    </span>
                )}
            </span>
        );
    };

    // 渲染分隔符
    const renderSeparator = (index: number) => {
        return (
            <span key={`separator-${index}`} className={cs.e('separator')}>
                {separator}
            </span>
        );
    };

    // 渲染所有项目和分隔符
    const breadcrumbItems = useMemo(() => {
        const elements: React.ReactNode[] = [];

        items.forEach((item, index) => {
            const isLast = index === items.length - 1;

            // 添加当前项
            elements.push(renderItem(item, index, isLast));

            // 如果不是最后一项，添加分隔符
            if (!isLast) {
                elements.push(renderSeparator(index));
            }
        });

        return elements;
    }, [items, separator]);

    return (
        <nav className={cs.gen(cs.b(), className)} aria-label="面包屑导航" {...props}>
            <ol className={cs.e('list')}>
                {breadcrumbItems}
            </ol>
        </nav>
    );
};