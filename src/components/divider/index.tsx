import { AriDividerProps } from "@ari/types/components";
import { useCss } from "@ari/utils";
import { AriTag } from "@ari/components/tag";

/**
 * 分割线组件
 * 用于分隔不同内容区域，支持显示文本标签
 * 
 * Example:
 * {@link https://aries-react.dev/docs/divider}
 */
export const AriDivider: React.FC<AriDividerProps> = ({
    className,
    children,
    label,
    variant = 'default',
    orientation = 'center',
    plain = false,
    type = 'horizontal',
    color,
    ...props
}) => {
    const cs = useCss('divider');
    
    // children 优先级更高，如果没有 children 则使用 label
    const content = children || label;
    const hasContent = !!content;

    const style = color ? {
        '--divider-color': color,
        ...props.style
    } as React.CSSProperties : undefined;

    return (
        <div 
            className={cs.gen(
                cs.b(),
                cs.is('has-content', hasContent),
                cs.is(type),
                cs.m(orientation),
                cs.m(variant),
                className
            )} 
            style={style}
            {...props}
        >
            {hasContent && (
                plain ? (
                    <div className={cs.e('content-plain')}>
                        {content}
                    </div>
                ) : (
                    <AriTag 
                        size="sm" 
                        color={
                            variant === 'primary' || variant === 'success' || 
                            variant === 'warning' || variant === 'danger' || 
                            variant === 'info' ? variant : undefined
                        }
                        className={cs.e('content-tag')}
                    >
                        {content}
                    </AriTag>
                )
            )}
        </div>
    );
};
