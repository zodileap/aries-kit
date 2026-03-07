import React, { useMemo } from "react";
import { AriTimelineProps, TimelineItemProps } from "@ari/types/components";
import { useCss } from "@ari/utils";
import { AriIcon } from "../icon";

/**
 * 时间轴组件
 * 用于展示一系列按时间顺序排列的活动或事件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/timeline}
 */
export const AriTimeline: React.FC<AriTimelineProps> = ({
    items,
    direction = 'vertical',
    mode = 'left',
    reverse = false,
    lastDashed = false,
    className,
    ...props
}) => {
    const cs = useCss('timeline');
    
    // 处理节点顺序
    const processedItems = useMemo(() => {
        const itemsWithIndex = items.map((item, index) => ({ ...item, _index: index }));
        return reverse ? itemsWithIndex.reverse() : itemsWithIndex;
    }, [items, reverse]);

    // 判断是否是最后一个节点
    const isLastItem = (index: number) => {
        return index === processedItems.length - 1;
    };

    // 渲染节点图标
    const renderDot = (item: TimelineItemProps, isLast: boolean) => {
        const dotClassName = cs.gen(
            cs.e('dot'),
            cs.is(`type-${item.type || 'filled'}`),
            cs.is(`color-${item.color || 'primary'}`),
            cs.is('custom-color', item.color ? !['primary', 'success', 'warning', 'danger', 'info'].includes(item.color) : false)
        );

        if (item.icon) {
            return (
                <div 
                    className={dotClassName}
                    style={item.color && !['primary', 'success', 'warning', 'danger', 'info'].includes(item.color) ? 
                        { borderColor: item.color, color: item.color } : undefined}
                >
                    {item.icon}
                </div>
            );
        }

        return (
            <div 
                className={dotClassName}
                style={item.color && !['primary', 'success', 'warning', 'danger', 'info'].includes(item.color) ? 
                    { borderColor: item.color, backgroundColor: item.type === 'filled' ? item.color : undefined } : undefined}
            />
        );
    };

    // 渲染时间轴项
    const renderTimelineItem = (item: TimelineItemProps & { _index: number }, index: number) => {
        const isLast = isLastItem(index);
        const shouldBeDashed = (isLast && lastDashed) || item.dashed;
        
        const itemClassName = cs.gen(
            cs.e('item'),
            cs.is(`mode-${mode}`),
            cs.is(`direction-${direction}`),
            cs.is('dashed', shouldBeDashed),
            cs.is('last', isLast)
        );

        return (
            <div key={item.key || item._index} className={itemClassName}>
                <div className={cs.e('tail')} />
                
                <div className={cs.e('head')}>
                    {renderDot(item, isLast)}
                </div>
                
                <div className={cs.e('content')}>
                    {mode === 'center' && item.label && (
                        <div className={cs.gen(cs.e('label'), cs.is(index % 2 === 0 ? 'left' : 'right'))}>
                            {item.label}
                        </div>
                    )}
                    
                    <div className={cs.e('wrapper')}>
                        {mode !== 'center' && item.label && (
                            <div className={cs.e('label')}>
                                {item.label}
                            </div>
                        )}
                        {item.children}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div 
            className={cs.gen(
                cs.b(),
                cs.is(`direction-${direction}`),
                cs.is(`mode-${mode}`),
                className
            )}
            {...props}
        >
            {processedItems.map(renderTimelineItem)}
        </div>
    );
};
