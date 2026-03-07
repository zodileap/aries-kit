import { useCss } from "@ari/utils";
import { AriContainer } from "../container";
import { AriCardProps } from "@ari/types/components";

/**
 * 卡片组件
 * 基于容器组件的扩展，提供预设的阴影和圆角样式
 * 
 * Example:
 * {@link https://aries-react.dev/docs/card}
 */
export const AriCard: React.FC<AriCardProps> = ({
    children,
    className,
    shadowMode = 'always',
    showBorderRadius = true,
    hoverTransform = false,
    title,
    ...props
}) => {
    const cn = useCss("card");
    const containerProps = Object.assign(props, {
        shadowMode,
        showBorderRadius,
        hoverTransform
    })

    return (
        <AriContainer
            className={cn.gen(
                cn.b(),
                className
            )}
            {...containerProps}
        >
            {title && <div className={cn.e('title')}>{title}</div>}
            <div className={cn.e('content')}>
                {children}
            </div>
        </AriContainer>
    );
};
