import  { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useCss } from '@ari/utils';
import { AriTextAreaProps } from '@ari/types/components';
import { AriContainer } from '../container';
import { AriTypography } from '../typography';
import { AriIcon } from '../icon';

/**
 * 多行文本输入框组件
 * 用于输入多行文本内容，支持自动调整大小
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export const AriTextArea: React.FC<AriTextAreaProps> = ({
    value = '',
    onChange,
    className,
    placeholder,
    autoComplete = "off",
    disabled = false,
    label,
    showCount = false,
    maxLength,
    allowClear = false,
    variant = "outlined",
    rows = 1,
    cols,
    autoSize = false,
    bordered = true,
    enableHoverFocusEffect = true,
    ...props
}) => {
    const cs = useCss("text-area");
    const resolvedVariant = bordered ? variant : "borderless";
    // 确保innerValue初始化时不会为null
    const [innerValue, setInnerValue] = useState(value === null ? '' : value);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        // 确保从props接收的value不会为null
        setInnerValue(value === null ? '' : value);
    }, [value]);

    useEffect(() => {
        if (autoSize && textAreaRef.current) {
            adjustHeight();
        }
    }, [innerValue, autoSize]);

    const adjustHeight = () => {
        const textArea = textAreaRef.current;
        if (!textArea) return;

        // 重置高度以获取正确的scrollHeight
        textArea.style.height = 'auto';

        // 设置新的高度
        const minRows = typeof autoSize === 'object' ? autoSize.minRows : undefined;
        const maxRows = typeof autoSize === 'object' ? autoSize.maxRows : undefined;
        
        let newHeight = textArea.scrollHeight;
        
        // 应用最小行数和最大行数限制
        if (minRows !== undefined || maxRows !== undefined) {
            // 获取计算样式以获取实际字体大小
            const computedStyle = window.getComputedStyle(textArea);
            // 从CSS变量中获取字体大小
            let fontSize = parseFloat(computedStyle.fontSize);
            let paddingTop = parseFloat(computedStyle.paddingTop);
            let paddingBottom = parseFloat(computedStyle.paddingBottom);
            // 使用字体大小计算行高（通常是字体大小的1.5倍）
            const lineHeight = fontSize * 1.5;
            // 应用最小行数限制
            if (minRows) {
                const minHeight = minRows * lineHeight + paddingTop + paddingBottom;
                newHeight = Math.max(newHeight, minHeight)
            }
            
            // 应用最大行数限制
            if (maxRows) {
                const maxHeight = maxRows * lineHeight + paddingTop + paddingBottom;
                newHeight = Math.min(newHeight, maxHeight);
            }
        }
        
        textArea.style.height = `${newHeight}px`;
    };

    /**
     * 处理输入变化事件
     * 提取输入值并调用onChange回调
     * 
     * Params:
     * 
     *   - e: 文本域change事件对象
     */
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.target.value;
        // 确保newValue不会为null
        if (newValue === null) {
            newValue = '';
        }
        // 应用maxLength限制
        if (maxLength) {
            newValue = newValue.slice(0, maxLength);
        }
        
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

    return (
        <AriContainer className={cs.gen(
            className,
            cs.b(), 
            cs.is('disabled', disabled),
            cs.is('auto-size', !!autoSize),
            cs.is(resolvedVariant),
            cs.is('no-hover-focus-effect', !enableHoverFocusEffect),
            
        )}>
            {label && <AriTypography variant='body' className={cs.e('label')} value={label} />}
            
            <div className={cs.e('wrapper')}>
                <textarea
                    ref={textAreaRef}
                    className={cs.e('textarea')}
                    value={innerValue || ''} // 确保值永远不会是null
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    rows={rows}
                    cols={cols}
                    maxLength={maxLength}
                    {...(({ prefix, suffix, ...rest }) => rest)(props)}
                />
                
                {allowClear && innerValue && (
                    <span 
                        className={cs.e('clear-icon')} 
                        onClick={disabled ? undefined : handleClear}
                    >
                        <AriIcon name="close" />
                    </span>
                )}
            </div>
            
            {showCount && (
                <div className={cs.e('count')}>
                    {maxLength ? `${(innerValue || '').length}/${maxLength}` : `${(innerValue || '').length} 个字符`}
                </div>
            )}
        </AriContainer>
    );
};
