import { ChangeEvent, useState, useEffect, forwardRef } from 'react';
import { useCss } from '@ari/utils';
import { AriTextInputProps } from '@ari/types/components';
import { AriContainer } from '../container';
import { AriTypography } from '../typography';
import { AriIcon } from '../icon';

/**
 * 文本输入框组件
 * 提供标准的文本输入功能，支持多种输入类型和自动完成
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export const AriTextInput = forwardRef<HTMLInputElement, AriTextInputProps>(({
    value,
    onChange,
    className,
    placeholder,
    type = "text",
    autoComplete = "off",
    disabled = false,
    label,
    help,
    prefix,
    suffix,
    showCount = false,
    maxLength,
    minLength,
    allowClear = false,
    showPasswordToggle = true,
    variant = "outlined",
    status = "default",
    bordered = true,
    enableHoverFocusEffect = true,
    maxWidth,
    minWidth,
    size = 'default',
    ...props
}, ref) => {
    const cs = useCss("text-input");
    // 确保value不为null，如果为null或undefined则使用空字符串
    const safeValue = value ?? '';
    const [innerValue, setInnerValue] = useState(safeValue);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        setInnerValue(value ?? '');
    }, [value]);

    /**
     * 处理输入变化事件
     * 提取输入值并调用onChange回调
     * 
     * Params:
     * 
     *   - e: 输入框change事件对象
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = maxLength ? e.target.value.slice(0, maxLength) : e.target.value;
        setInnerValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleClear = () => {
        setInnerValue('');
        if (onChange) {
            onChange('');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // 计算实际使用的输入框类型
    const actualType = type === 'password' && passwordVisible ? 'text' : type;

    const renderSuffix = () => {
        const hasPasswordToggle = type === 'password' && showPasswordToggle;
        const hasSuffix = suffix || allowClear && innerValue || (showCount && maxLength) || hasPasswordToggle;

        if (!hasSuffix) {
            return null;
        }

        return (
            <div className={cs.e('suffix')}>
                {showCount && maxLength && (
                    <span className={cs.e('count')}>
                        {innerValue.length}/{maxLength}
                    </span>
                )}
                {hasPasswordToggle && (
                    <span 
                        className={cs.e('password-toggle')} 
                        onClick={disabled ? undefined : togglePasswordVisibility}
                    >
                        <AriIcon name={passwordVisible ? "visibility" : "visibility_off"} />
                    </span>
                )}
                {allowClear && innerValue && (
                    <span 
                        className={cs.e('clear-icon')} 
                        onClick={disabled ? undefined : handleClear}
                    >
                        <AriIcon name="close" />
                    </span>
                )}
                {suffix}
            </div>
        );
    };

    // 创建样式对象，处理最大宽度和最小宽度
    const containerStyle: React.CSSProperties = {};
    if (maxWidth !== undefined) {
        containerStyle.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
    }
    if (minWidth !== undefined) {
        containerStyle.minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
    }

    return (
        <AriContainer 
            className={cs.gen(
                cs.b(), 
                cs.is('disabled', disabled),
                cs.is('with-prefix', !!prefix),
                cs.is('with-suffix', !!(suffix || (allowClear && innerValue) || (showCount && maxLength) || (type === 'password' && showPasswordToggle))),
                cs.is(variant),
                cs.is(`status-${status}`, status !== 'default'),
                cs.is('borderless', !bordered),
                cs.is('no-hover-focus-effect', !enableHoverFocusEffect),
                cs.m(size),
                className
            )}
            style={containerStyle}  
        >
            {label && <AriTypography variant='body' className={cs.e('label')} value={label} />}
            
            <div className={cs.e('wrapper')}>
                {prefix && <div className={cs.e('prefix')}>{prefix}</div>}
                
                <input
                    ref={ref}
                    className={cs.e('input')}
                    value={innerValue || ''}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={actualType}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    aria-invalid={status === 'error'}
                    maxLength={maxLength}
                    minLength={minLength}
                    {...(({ children, ...inputProps }) => inputProps)(props)}
                />
                
                {renderSuffix()}
            </div>
            
            {showCount && !maxLength && (
                <div className={cs.e('count-standalone')}>
                    {innerValue.length} 个字符
                </div>
            )}
            {help ? (
                <div className={cs.e('help')}>
                    {help}
                </div>
            ) : null}
        </AriContainer>
    );
});
