/**
 * Typography组件
 * 用于展示各种类型的文本内容，支持不同的样式变体、颜色和排版属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/Typography}
 */
import React, { useMemo } from 'react';
import { AriTypographyProps } from '@ari/types';
import { useCss } from '@ari/utils';

export const AriTypography: React.FC<AriTypographyProps> = ({
    value,
    variant = 'body',
    color = 'inherit',
    align = 'inherit',
    gutterBottom = false,
    whiteSpace = 'normal',
    overflow = 'visible',
    textOverflow = 'clip',
    lineClamp,
    noWrap = false,
    bold = false,
    italic = false,
    className,
    style,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    ...restProps
}) => {
    // 1 状态初始化和Refs以及引用的hook
    const cn = useCss('typography');
    
    // 2 派生状态计算（计算得出的值）
    const computedWhiteSpace = useMemo(() => {
        if (noWrap) return 'nowrap';
        return whiteSpace;
    }, [noWrap, whiteSpace]);
    
    const computedOverflow = useMemo(() => {
        if (noWrap || lineClamp) return 'hidden';
        return overflow;
    }, [noWrap, lineClamp, overflow]);
    
    const computedTextOverflow = useMemo(() => {
        if (noWrap || lineClamp) return 'ellipsis';
        return textOverflow;
    }, [noWrap, lineClamp, textOverflow]);
    
    // 3 事件处理函数，直接响应用户交互的函数（使用useCallback优化性能）
    const handleClick = useMemo(() => onClick, [onClick]);
    const handleMouseEnter = useMemo(() => onMouseEnter, [onMouseEnter]);
    const handleMouseLeave = useMemo(() => onMouseLeave, [onMouseLeave]);
    const handleMouseDown = useMemo(() => onMouseDown, [onMouseDown]);
    const handleMouseUp = useMemo(() => onMouseUp, [onMouseUp]);
    
    // 7 样式计算
    const rootStyle = useMemo(() => ({
        whiteSpace: computedWhiteSpace,
        overflow: computedOverflow,
        textOverflow: computedTextOverflow,
        textAlign: align !== 'inherit' ? align : undefined,
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: lineClamp ? ('vertical' as any) : undefined,
        display: lineClamp ? '-webkit-box' : undefined,
        ...style,
    }), [computedWhiteSpace, computedOverflow, computedTextOverflow, align, lineClamp, style]);
    
    // 8 渲染辅助函数
    const renderContent = useMemo(() => {
        return value !== undefined ? value : children;
    }, [value, children]);
    
    // 9 条件渲染判断
    const isInteractive = Boolean(onClick);
    
    // 确定使用的HTML标签
    const Component = useMemo(() => {
        switch (variant) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
                return 'span';
            case 'body':
            case 'caption':
            case 'overline':
            default:
                return 'span';
        }
    }, [variant]);
    
    // 10 主要JSX返回
    return (
        <Component
            className={cn.gen(
                className,
                cn.b(),
                cn.m(variant),
                color !== 'inherit' ? cn.m(color) : undefined,
                align !== 'inherit' ? cn.m(align) : undefined,
                gutterBottom ? cn.m('gutter-bottom') : undefined,
                isInteractive ? cn.m('interactive') : undefined,
                lineClamp ? cn.m('line-clamp') : undefined,
                bold ? cn.m('bold') : undefined,
                italic ? cn.m('italic') : undefined
            )}
            style={rootStyle}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...(restProps as any)}
        >
            {renderContent}
        </Component>
    );
};
