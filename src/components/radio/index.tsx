import React, { useContext, createContext, useState, useMemo, useCallback, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriRadioProps, AriRadioGroupProps, AriRadioButtonProps } from '@ari/types';

// 创建 RadioGroup 上下文
const RadioContext = createContext<{
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
    name?: string;
    disabled?: boolean;
    size?: 'sm' | 'default' | 'lg';
}>({});

/**
 * 单选框组件
 * 
 * 用于在一组互斥选项中进行选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
export const AriRadio: React.FC<AriRadioProps> & {
    Group: React.FC<AriRadioGroupProps>;
    Button: React.FC<AriRadioButtonProps>;
} = ({
    value,
    name,
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    label,
    size = 'default',
    className,
    style,
    id,
    onClick,
    onContextMenu,
    onDoubleClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    ...restProps
}) => {
        // 状态初始化
        const [internalChecked, setInternalChecked] = useState(defaultChecked);
        const cs = useCss('radio');

        // 上下文获取
        const radioContext = useContext(RadioContext);

        // 派生状态计算
        const mergedChecked = useMemo(() => {
            if (radioContext.value !== undefined) {
                return radioContext.value === value;
            }
            return checked !== undefined ? checked : internalChecked;
        }, [radioContext.value, value, checked, internalChecked]);

        const mergedDisabled = useMemo(() =>
            disabled || radioContext.disabled,
            [disabled, radioContext.disabled]
        );

        const mergedSize = useMemo(() =>
            radioContext.size || size,
            [radioContext.size, size]
        );

        const mergedName = useMemo(() =>
            radioContext.name || name,
            [radioContext.name, name]
        );

        // 事件处理函数
        const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            if (mergedDisabled) {
                return;
            }

            // 在组模式下，不需要设置个别单选框的内部状态
            // 状态由组统一管理
            if (!radioContext.onChange && !('checked' in restProps)) {
                setInternalChecked(e.target.checked);
            }

            if (radioContext.onChange) {
                radioContext.onChange(e, value);
            } else if (onChange) {
                onChange(e, value);
            }
        }, [mergedDisabled, onChange, restProps, radioContext, value]);

        // 渲染
        return (
            <label
                className={cs.gen(
                    cs.b(),
                    cs.is('checked', mergedChecked),
                    cs.is('disabled', mergedDisabled),
                    cs.m(mergedSize),
                    className
                )}
                style={style}
                id={id}
                onClick={onClick}
                onContextMenu={onContextMenu}
                onDoubleClick={onDoubleClick}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
                onMouseUp={onMouseUp}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
            >
                <span className={cs.e('input-wrapper')}>
                    <input
                        type="radio"
                        className={cs.e('input')}
                        name={mergedName}
                        value={value.toString()}
                        checked={mergedChecked}
                        disabled={mergedDisabled}
                        onChange={handleChange}
                    />
                    <span className={cs.gen(
                        cs.e('inner'),
                        cs.is('checked', mergedChecked),
                        cs.is('disabled', mergedDisabled),
                        cs.is('checked-disabled', mergedChecked && mergedDisabled)
                    )}></span>
                </span>
                {label && <span className={cs.gen(
                    cs.e('label'),
                    cs.is('checked', mergedChecked),
                    cs.is('disabled', mergedDisabled)
                )}>{label}</span>}
            </label>
        );
    };

/**
 * 单选框组组件
 * 
 * 用于管理一组互斥的单选框
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
AriRadio.Group = ({
    value,
    defaultValue,
    name,
    options = [],
    children,
    disabled = false,
    onChange,
    size = 'default',
    className,
    style,
    ...props
}) => {
    // 状态初始化
    const [internalValue, setInternalValue] = useState(defaultValue);
    const cs = useCss('radio-group');

    // 派生状态计算
    const mergedValue = useMemo(() =>
        value !== undefined ? value : internalValue,
        [value, internalValue]
    );

    // 事件处理函数
    const handleChange = useCallback((_e: React.ChangeEvent<HTMLInputElement>, radioValue: string | number) => {
        // 单选框组应该是互斥的，直接设置新值
        if (!('value' in props)) {
            setInternalValue(radioValue);
        }

        onChange?.(radioValue);
    }, [onChange, props]);

    // 上下文值计算
    const contextValue = useMemo(() => ({
        value: mergedValue,
        onChange: handleChange,
        name,
        disabled,
        size,
    }), [mergedValue, handleChange, name, disabled, size]);

    // 渲染
    return (
        <RadioContext.Provider value={contextValue}>
            <div
                className={cs.gen(cs.b(), className)}
                style={style}
                {...props}
            >
                {options && options.length > 0 ? (
                    options.map(option => (
                        <AriRadio
                            key={option.value.toString()}
                            value={option.value}
                            disabled={option.disabled}
                            label={option.label}
                        />
                    ))
                ) : (
                    children
                )}
            </div>
        </RadioContext.Provider>
    );
};

/**
 * 单选按钮组件
 * 
 * 按钮样式的单选框，通常用于多个选项的紧凑展示
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
AriRadio.Button = ({
    value,
    name,
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    label,
    children,
    size = 'default',
    className,
    style,
    id,
    onClick,
    onContextMenu,
    onDoubleClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    ...restProps
}) => {
    // 状态初始化
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const cs = useCss('radio-button');

    // 上下文获取
    const radioContext = useContext(RadioContext);

    // 派生状态计算
    const mergedChecked = useMemo(() => {
        if (radioContext.value !== undefined) {
            return radioContext.value === value;
        }
        return checked !== undefined ? checked : internalChecked;
    }, [radioContext.value, value, checked, internalChecked]);

    const mergedDisabled = useMemo(() =>
        disabled || radioContext.disabled,
        [disabled, radioContext.disabled]
    );

    const mergedSize = useMemo(() =>
        radioContext.size || size,
        [radioContext.size, size]
    );

    const mergedName = useMemo(() =>
        radioContext.name || name,
        [radioContext.name, name]
    );

    // 事件处理函数
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (mergedDisabled) {
            return;
        }

        // 在组模式下，不需要设置个别单选框的内部状态
        // 状态由组统一管理
        if (!radioContext.onChange && !('checked' in restProps)) {
            setInternalChecked(e.target.checked);
        }

        if (radioContext.onChange) {
            radioContext.onChange(e, value);
        } else if (onChange) {
            onChange(e, value);
        }
    }, [mergedDisabled, onChange, restProps, radioContext, value]);

    // 渲染
    return (
        <label
            className={cs.gen(
                cs.b(),
                cs.is('checked', mergedChecked),
                cs.is('disabled', mergedDisabled),
                cs.is('checked-disabled', mergedChecked && mergedDisabled),
                cs.m(mergedSize),
                className
            )}
            style={style}
            id={id}
            onClick={onClick}
            onContextMenu={onContextMenu}
            onDoubleClick={onDoubleClick}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseUp}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
        >
            <input
                type="radio"
                className={cs.e('input')}
                name={mergedName}
                value={value.toString()}
                checked={mergedChecked}
                disabled={mergedDisabled}
                onChange={handleChange}
            />
            <span className={cs.e('label')}>{children || label}</span>
        </label>
    );
};

export default AriRadio;