// @/components/grid/row.tsx
import { FC, CSSProperties, Children, isValidElement, cloneElement, useMemo, ReactNode } from 'react';
import { AriRowProps } from '@ari/types/components';
import { useCss } from '@ari/utils';

/**
 * 行组件
 * 栅格系统的行组件，用于包含列组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/grid}
 */
export const AriRow: FC<AriRowProps> = ({
    children,
    gutter = 0,
    justify,
    align,
    wrap = true,
    className,
    style,
    ...restProps
}) => {
    const cs = useCss('row');

    // 计算间隔样式
    const [horizontalGutter, verticalGutter] = useMemo(() => {
        if (Array.isArray(gutter)) {
            return gutter;
        }
        return [gutter, gutter];
    }, [gutter]);

    // 基础样式
    const rowStyle: CSSProperties = {
        ...style,
    };

    // 间隔样式 - 使用CSS自定义属性支持gap
    if (horizontalGutter! > 0 || verticalGutter! > 0) {
        (rowStyle as any)['--row-gap'] = `${verticalGutter}px`;
        (rowStyle as any)['--column-gap'] = `${horizontalGutter}px`;
        rowStyle.gap = `${verticalGutter}px ${horizontalGutter}px`;
    }

    // 将gutter信息传递给子组件
    const rowContext = useMemo(() => ({ gutter: [horizontalGutter, verticalGutter] as [number, number] }), [horizontalGutter, verticalGutter]);

    return (
        <div
            className={
                cs.gen(
                    cs.b(),
                    justify ? cs.m(`justify-${justify}`) : undefined,
                    align ? cs.m(`align-${align}`) : undefined,
                    cs.is('no-wrap', !wrap),
                    className
                )
            }
            style={rowStyle}
            {...restProps}
        >
            {
                Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            ...child.props,
                            // 传递间隔信息给列组件
                            _gutter: rowContext.gutter,
                        });
                    }
                    return child;
                })
            }
        </div>
    );
};