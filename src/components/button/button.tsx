import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { useCss } from "@ari/utils";
import { AriTypography, AriIcon } from "@ari/components";
import { AriButtonProps, AriButtonInstance } from "@ari/types/components";
import { useButtonInstance } from "./instance";

/**
 * 标准按钮组件
 * 这是最常用的按钮组件，支持自定义标签和子内容。通过使用 forwardRef，现在支持转发 ref 引用，便于外部组件获取按钮 DOM 元素的引用。
 * 组件支持多种样式变体、尺寸和状态，适用于各种交互场景。
 * 
 * Example:
 * 
 * ```tsx
 * // 基本使用
 * <AriButton label="提交" onClick={handleSubmit} />
 * 
 * // 使用 ref
 * const buttonRef = useRef<AriButtonInstance>(null);
 * <AriButton ref={buttonRef} label="点击我" />
 * // 设置加载状态
 * buttonRef.current?.setLoading(true);
 * ```
 * 
 * Params:
 * 
 *   - ref: 转发给按钮的引用对象，可通过它调用按钮实例方法如setLoading。
 *   - props: 按钮组件的属性集合。
 * 
 * Returns:
 * 
 *   一个可被引用的按钮组件实例。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/button}
 */
export const AriButton = forwardRef<AriButtonInstance & HTMLButtonElement, AriButtonProps>(({
    children,
    label,
    className,
    icon,
    shape = 'default',
    size = 'default',
    color = 'default',
    type = 'default',
    disabled = false,
    loading = false,
    onClick,
    htmlType,
    ghost = false,
    ...props
}, ref) => {
    const cn = useCss("button");
    const [isLoading, setIsLoading] = useState(loading);
    const buttonInstance = useButtonInstance();
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    // 创建组合引用，同时支持DOM元素和实例方法
    useImperativeHandle(ref, () => {
        return Object.assign(buttonRef.current as HTMLButtonElement, buttonInstance);
    }, [buttonRef, buttonInstance]);

    // 监听loading属性变化
    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    // 设置回调
    useEffect(() => {
        (buttonInstance as any).setCallbacks({
            onLoadingChange: (loading: boolean) => {
                setIsLoading(loading);
            }
        });
    }, [buttonInstance]);

    // 处理点击事件
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isLoading || disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    const isRipple = type != 'link' && !disabled && type != "text" && !ghost

    return (
        <button
            ref={buttonRef}
            className={cn.gen(
                className,
                cn.b(),
                cn.m(size),
                cn.m(type),
                cn.m(shape),
                cn.is('disabled', disabled),
                cn.is('loading', isLoading),
                cn.is('ripple', isRipple),
                cn.m(color),
                cn.is('icon-only', !label && !children),
                cn.is('ghost', ghost),
            )}
            disabled={disabled || isLoading}
            onClick={handleClick}
            type={htmlType || 'button'}
            {...props}
        >
            {isLoading && (
                <span className={cn.e("loading-wrapper")}>
                    <AriIcon
                        name="loading"
                        className={cn.e("loading-icon")}
                        size={size}
                    />
                </span>
            )}
            {icon && !isLoading && (
                <AriIcon
                    name={icon}
                    className={cn.e("icon")}
                    size={size}
                />
            )}
            {label && <AriTypography variant='body' className={cn.gen(cn.e("label"), 'text-truncate')} value={ label } />}
            {children}
        </button>
    );
});

// 添加 displayName，便于调试与开发工具识别
AriButton.displayName = 'AriButton';