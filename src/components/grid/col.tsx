// @/components/grid/col.tsx
import { FC, CSSProperties } from 'react';
import { useCss } from '@ari/utils';
import { AriColProps, AriResponsiveConfig } from '@ari/types/components';

/**
 * 列组件
 * 栅格系统的列组件，必须在Row组件内使用
 * 
 * Example:
 * {@link https://aries-react.dev/docs/grid}
 */
export const AriCol: FC<AriColProps & { _gutter?: [number, number] }> = ({
    children,
    span,
    offset = 0,
    pull = 0,
    push = 0,
    order = 0,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    className,
    style,
    _gutter,
    ...restProps
}) => {
    const cs = useCss('col');

    // 处理响应式属性
    const responsiveClasses: string[] = [];

    // 处理单个响应式配置
    const processResponsiveSize = (size: string, value: number | AriResponsiveConfig | undefined) => {
        if (typeof value === 'number') {
            responsiveClasses.push(cs.m(`${size}-span-${value}`));
        } else if (value && typeof value === 'object') {
            if (value.span) responsiveClasses.push(cs.m(`${size}-span-${value.span}`));
            if (value.offset) responsiveClasses.push(cs.m(`${size}-offset-${value.offset}`));
            if (value.pull) responsiveClasses.push(cs.m(`${size}-pull-${value.pull}`));
            if (value.push) responsiveClasses.push(cs.m(`${size}-push-${value.push}`));
            if (value.order) responsiveClasses.push(cs.m(`${size}-order-${value.order}`));
        }
    };

    // 处理所有响应式配置
    processResponsiveSize('xs', xs);
    processResponsiveSize('sm', sm);
    processResponsiveSize('md', md);
    processResponsiveSize('lg', lg);
    processResponsiveSize('xl', xl);
    processResponsiveSize('xxl', xxl);

    // 计算基础样式
    const colStyle: CSSProperties = {
        ...style,
    };

    // 处理内间距
    if (_gutter && _gutter[0] > 0) {
        colStyle.paddingLeft = _gutter[0] / 2;
        colStyle.paddingRight = _gutter[0] / 2;
    }

    return (
        <div
            className={cs.gen(
                cs.b(),
                span !== undefined ? cs.m(`span-${span}`) : undefined,
                offset > 0 ? cs.m(`offset-${offset}`) : undefined,
                pull > 0 ? cs.m(`pull-${pull}`) : undefined,
                push > 0 ? cs.m(`push-${push}`) : undefined,
                order !== 0 ? cs.m(`order-${order}`) : undefined,
                ...responsiveClasses,
                className
            )}
            style={colStyle}
            {...restProps}
        >
            {children}
        </div>
    );
};
