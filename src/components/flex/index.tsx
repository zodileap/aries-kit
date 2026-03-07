import { useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriFlexProps } from '@ari/types';
import { AriContainer } from '../container';

/**
 * 弹性布局组件
 * 
 * 常用于在一个页面内，在局部对元素之间的布局进行控制。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/flex}
 */
export const AriFlex: React.FC<AriFlexProps> = ({
    space = 8,
    vertical = false,
    align = 'center',
    justify = 'flex-start',
    wrap = false,
    fill = false,
    flexItem,
    className,
    children = [],
    style: _style,
    ghost = true,
    ...props
}) => {
    const cs = useCss('flex');

    const style = useMemo(() => ({
        ..._style,
        '--space-gap': typeof space === 'number' ? `${space}px` : space
    } as React.CSSProperties), [space]);

    return (
        <AriContainer
            className={cs.gen(
                cs.b(),
                cs.is('vertical', vertical),
                cs.is('wrap', wrap),
                cs.is('fill', fill),
                cs.m('align-' + align),
                cs.m('justify-' + justify),
                className
            )}
            style={style}
            ghost={ghost}
            {...props}
        >
            {Array.isArray(children)
                ? children.map((child, index) => {
                    // 处理flexItem属性，支持对象或数组形式
                    let shouldApplyFlex = false;
                    let itemStyle: React.CSSProperties | undefined = undefined;
                    
                    // 将长度值转换为样式字符串
                    const convertSizeValue = (value: string | number | undefined): string | undefined => {
                        if (value === undefined) return undefined;
                        return typeof value === 'number' ? `${value}px` : value;
                    };
                    
                    // 应用所有样式属性
                    const applyStyles = (item: any): React.CSSProperties => {
                        return {
                            flex: item.flex !== undefined ? item.flex : 1,
                            overflow: item.overflow || 'auto',
                            width: convertSizeValue(item.width),
                            height: convertSizeValue(item.height),
                            maxWidth: convertSizeValue(item.maxWidth),
                            minWidth: convertSizeValue(item.minWidth),
                            maxHeight: convertSizeValue(item.maxHeight),
                            minHeight: convertSizeValue(item.minHeight)
                        };
                    };
                    
                    if (flexItem) {
                        if (Array.isArray(flexItem)) {
                            // 数组形式，查找匹配当前索引的项
                            const matchItem = flexItem.find(item => item.index === index);
                            if (matchItem) {
                                shouldApplyFlex = true;
                                itemStyle = applyStyles(matchItem);
                            }
                        } else {
                            // 对象形式
                            if (flexItem.index === undefined || flexItem.index === index) {
                                shouldApplyFlex = true;
                                itemStyle = applyStyles(flexItem);
                            }
                        }
                    }
                    
                    return (
                        <div
                            key={index}
                            className={cs.gen(
                                cs.e('item'),
                                cs.is('flex', shouldApplyFlex)
                            )}
                            style={itemStyle}
                        >
                            {child}
                        </div>
                    );
                })
                : children && (
                    <div className={cs.e('item')}>
                        {children}
                    </div>
                )
            }
        </AriContainer>
    );
};