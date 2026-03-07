import { AriContainerProps } from "@ari/types/components/container";
import { useCss } from "@ari/utils";

/**
 * 容器组件
 * 用于包裹和组织内容的基础容器组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/container}
 */
export const AriContainer: React.FC<AriContainerProps> = ({
    children,
    className,
    fill = false,
    maxWidth,
    minWidth,
    width,
    maxHeight,
    minHeight,
    height,
    bgColor,
    bgVariant,
    positionType = 'static',
    style,
    ghost = false,
    showBorderRadius = true,
    padding,
    overflow,
    blur = false,
    hoverTransform = true,
    shadowMode, 
    showBorder,
    borderStyle,
    alignment,
    material,
    ...props
}) => {
    const cs = useCss("container");

    // 处理样式
    const containerStyle: React.CSSProperties = {
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        backgroundColor: bgColor,
        position: positionType as React.CSSProperties['position'],
        overflow: overflow,
        ...(style || {}),
    };

    // 处理padding
    if (padding !== undefined) {
        if (typeof padding === 'number') {
            containerStyle.padding = `${padding}px`;
        } else if (typeof padding === 'string') {
            containerStyle.padding = padding;
        } else if (typeof padding === 'object') {
            // 对于对象形式，分别设置各个方向的padding
            const { top, right, bottom, left } = padding;
            
            if (top !== undefined) {
                containerStyle.paddingTop = typeof top === 'number' ? `${top}px` : top;
            }
            if (right !== undefined) {
                containerStyle.paddingRight = typeof right === 'number' ? `${right}px` : right;
            }
            if (bottom !== undefined) {
                containerStyle.paddingBottom = typeof bottom === 'number' ? `${bottom}px` : bottom;
            }
            if (left !== undefined) {
                containerStyle.paddingLeft = typeof left === 'number' ? `${left}px` : left;
            }
        }
    }

    return <div
        className={
            cs.gen(
                className,
                cs.b(),
                alignment ? cs.m(alignment) : undefined, // 对齐方式修饰符
                material ? cs.m(material) : undefined, // 材质修饰符
                bgVariant ? cs.m(`bg-${bgVariant}`) : undefined, // 背景色变体修饰符
                shadowMode ? cs.is(`shadow-${shadowMode}`) : undefined,
                cs.is('hover-transform', hoverTransform),
                cs.is('border-radius', showBorderRadius),
                cs.is('fill', fill),
                cs.is('ghost', ghost),
                cs.is('border', showBorder),
                cs.is('blur', blur),
                // 只有在有边框时才应用边框样式
                showBorder && borderStyle ? cs.m(borderStyle) : undefined,
            )}
        style={containerStyle}
        {...props}
    >
        {children}
    </div>
}
