import { useMemo, useCallback } from 'react';
import { useCss } from '@ari/utils';
import { AriLinkProps } from '@ari/types';
import { AriIcon } from '@ari/components/icon';

/**
 * 链接组件
 * 
 * 用于页面间跳转或锚点定位，支持多种样式和状态
 * 
 * Example:
 * {@link https://aries-react.dev/docs/link}
 */
export const AriLink: React.FC<AriLinkProps> = ({
    href = '#',
    target = '_self',
    rel,
    disabled = false,
    type = 'default',
    size = 'default',
    underline = false,
    block = false,
    icon,
    iconPosition = 'left',
    className,
    style,
    children,
    onClick,
    ...restProps
}) => {
    // 1. 状态初始化和hook
    const cs = useCss('link');

    // 2. 派生状态计算
    const linkRel = useMemo(() => {
        if (rel) return rel;
        if (target === '_blank') return 'noopener noreferrer';
        return undefined;
    }, [rel, target]);

    // 3. 事件处理函数
    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        onClick?.(e);
    }, [disabled, onClick]);

    // 8. 渲染辅助函数
    const renderIcon = useCallback(() => {
        if (!icon) return null;

        return (
            <span className={cs.e('icon')}>
                <AriIcon name={icon} />
            </span>
        );
    }, [icon, cs]);

    // 9. 条件渲染判断（如果需要）

    // 10. 主要JSX返回
    return (
        <a
            href={disabled ? undefined : href}
            target={target}
            rel={linkRel}
            className={
                cs.gen(
                    cs.b(),
                    cs.m(type),
                    cs.m(size),
                    cs.is('underline', underline),
                    cs.is('disabled', disabled),
                    cs.is('block', block),
                    cs.is('with-icon', !!icon),
                    cs.is('icon-right', iconPosition === 'right'),
                    className
                )
            }
            style={style}
            onClick={handleClick}
            {...restProps}
        >
            {icon && iconPosition === 'left' && renderIcon()}
            {children && <span className={cs.e('text')}>{children}</span>}
            {icon && iconPosition === 'right' && renderIcon()}
        </a>
    );
};