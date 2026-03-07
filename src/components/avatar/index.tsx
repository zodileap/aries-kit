import React, { forwardRef, useMemo } from "react";
import { useCss } from "@ari/utils";
import { AriIcon, AriImage } from "@ari/components";
import { AriAvatarProps } from "@ari/types/components";

/**
 * 头像组件
 * 
 * 用于展示用户头像、用户名称首字母或图标。支持多种尺寸和形状，可以自定义颜色和内容。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/avatar}
 */
export const AriAvatar = forwardRef<HTMLDivElement, AriAvatarProps>(({
    children,
    className,
    shape = 'circle',
    size = 'default',
    src,
    alt,
    icon,
    text,
    style,
    backgroundColor,
    textColor,
    ...restProps
}, ref) => {
    const cn = useCss("avatar");

    // 计算显示内容
    const renderContent = useMemo(() => {
        // 优先显示图片
        if (src) {
            return (
                <AriImage
                    src={src}
                    alt={alt || ''}
                    className={cn.e("image")}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} usage={"image"} />
            );
        }

        // 其次显示自定义内容
        if (children) {
            return children;
        }

        // 再次显示图标
        if (icon) {
            return (
                <AriIcon
                    name={icon}
                    size={size}
                    className={cn.e("icon")}
                />
            );
        }

        // 最后显示文字
        if (text) {
            // 获取文字的首字母或前两个字符
            const displayText = text.length > 2 ? text.slice(0, 2) : text;
            return (
                <span className={cn.e("text")}>
                    {displayText.toUpperCase()}
                </span>
            );
        }

        // 默认显示用户图标
        return (
            <AriIcon
                name="person"
                size={size}
                className={cn.e("icon")}
            />
        );
    }, [src, children, icon, text, alt, size, cn]);

    // 合并样式
    const mergedStyle = useMemo(() => ({
        backgroundColor,
        color: textColor,
        ...style
    }), [backgroundColor, textColor, style]);

    return (
        <div
            ref={ref}
            className={cn.gen(
                className,
                cn.b(),
                cn.m(size),
                cn.m(shape)
            )}
            style={mergedStyle}
            {...restProps}
        >
            {renderContent}
        </div>
    );
});

// 添加 displayName，便于调试与开发工具识别
AriAvatar.displayName = 'AriAvatar';
