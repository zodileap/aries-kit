/**
 * 自定义 hook，用于根据不同类型参数渲染对应的表单项 UI 组件
 * 
 * Returns:
 *
 *   包含 renderField 方法的对象，用于渲染不同类型的字段组件
 * 
 * Example:
 * 
 * ```tsx
 * const { renderField } = useRender();
 * 
 * // 在组件中使用
 * {renderField({
 *   paramType: 'code',
 *   options: { language: 'javascript' },
 *   defaultValue: 'console.log("Hello")',
 *   onChange: (value) => console.log(value)
 * })}
 * ```
 */

import React, { useCallback, useMemo } from 'react';
import { UseRenderReturn as UseFormItemRenderReturn, RenderFieldParams } from '@ari/types/hooks/use-render';
import { useI18n } from '@ari/i18n';

// 导入所需组件
import { AriInput } from '@ari/components/input';
import { AriTextArea } from '@ari/components/input';
import { AriTextListInput } from '@ari/components/input';
import { AriSwitch } from '@ari/components/switch';
import { AriSelect } from '@ari/components/select';
import { AriCode } from '@ari/components/code';
import { AriDatePicker } from '@ari/components/date-picker';
import { AriTimePicker } from '@ari/components/time-picker';
import { AriDivider } from '@ari/components/divider';

export const useFormItemRender = (): UseFormItemRenderReturn => {
    // 获取翻译函数
    const { t } = useI18n(['common']);

    /**
     * 解析字段选项配置
     * 支持从 JSON 字符串解析选项
     */
    const parseFieldOptions = useCallback((fieldType: string, config: any): Record<string, any> => {
        switch (fieldType) {
            case 'select':
                // 如果配置是字符串，尝试解析为 JSON
                if (typeof config === 'string') {
                    try {
                        const options = JSON.parse(config);
                        return { options: Array.isArray(options) ? options : [] };
                    } catch {
                        return { options: [] };
                    }
                }
                return { options: [], ...config };
            
            case 'code':
                return {
                    language: config?.language || 'javascript',
                    editable: config?.editable !== false,
                    height: config?.height || '200px',
                    ...config
                };
            
            case 'number':
                return {
                    min: config?.min,
                    max: config?.max,
                    step: config?.step || 1,
                    ...config
                };

            case 'boolean':
                return {
                    ...config
                };

            case 'text':
                return {
                    ...config
                };

            case 'textarea':
                return {
                    ...config
                };

            case 'date':
                return {
                    ...config
                };

            case 'time':
                return {
                    ...config
                };

            case 'datetime':
                return {
                    ...config
                };
            
            case 'textList':
                return {
                    maxItems: config?.maxItems,
                    minItems: config?.minItems || 0,
                    allowEmpty: config?.allowEmpty || false,
                    allowDrag: config?.allowDrag !== false,
                    addText: config?.addText || '添加',
                    itemPlaceholder: config?.itemPlaceholder || '请输入...',
                    ...config
                };
            
            case 'divider':
                return {
                    variant: config?.variant || 'default',
                    orientation: config?.orientation || 'center',
                    plain: config?.plain || false,
                    type: config?.type || 'horizontal',
                    color: config?.color,
                    ...config
                };
            
            default:
                return config || {};
        }
    }, []);

    /**
     * 渲染代码字段组件
     */
    const renderCodeField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            options: rawOptions = {},
            disabled,
            className
        } = params;

        const options = parseFieldOptions('code', rawOptions);

        return (
            <AriCode
                {...options}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染布尔字段组件
     */
    const renderBooleanField = useCallback((params: RenderFieldParams) => {
        const {
            description = '',
            onChange,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('boolean', rawOptions);

        return (
          <AriSwitch
            {...options}
            onChange={(checked) => onChange?.(checked)}
            disabled={disabled}
            className={className}
            checkedChildren={options.checkedChildren || description}
            unCheckedChildren={options.unCheckedChildren || description}
          />
        );
    }, [parseFieldOptions]);

    /**
     * 渲染数字字段组件
     */
    const renderNumberField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('number', rawOptions);

        return (
            <AriInput
                {...options}
                type="number"
                placeholder={placeholder}
                onChange={(e) => onChange?.(e)}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染选择字段组件
     */
    const renderSelectField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            options: rawOptions = {},
            disabled,
            className,
        } = params;

        const options = parseFieldOptions('select', rawOptions);

        return (
            <AriSelect
            {...options}
            placeholder={placeholder}
            options={Array.isArray(options.options) ? options.options : []}
            onChange={onChange}
            disabled={disabled}
            className={className}
          />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染文本区域字段组件
     */
    const renderTextareaField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('textarea', rawOptions);

        return (
            <AriTextArea
                {...options}
                placeholder={placeholder}
                onChange={(e) => onChange?.(e)}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染日期字段组件
     */
    const renderDateField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('date', rawOptions);

        return (
            <AriDatePicker
                {...options}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染时间字段组件
     */
    const renderTimeField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('time', rawOptions);

        return (
            <AriTimePicker
                {...options}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染日期时间字段组件
     */
    const renderDateTimeField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('datetime', rawOptions);

        return (
            <AriDatePicker
                {...options}
                showTime
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染文本字段组件
     */
    const renderTextField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            placeholder = t.common.pleaseEnter,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('text', rawOptions);

        return (
            <AriInput
                {...options}
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange?.(e)}
                disabled={disabled}
                className={className}
            />
        );
    }, [t, parseFieldOptions]);

    /**
     * 渲染文本列表字段组件
     */
    const renderTextListField = useCallback((params: RenderFieldParams) => {
        const {
            onChange,
            disabled,
            className,
            options: rawOptions = {}
        } = params;

        const options = parseFieldOptions('textList', rawOptions);

        return (
            <AriTextListInput
                {...options}
                onChange={onChange}
                disabled={disabled}
                className={className}
            />
        );
    }, [parseFieldOptions]);

    /**
     * 渲染分割线组件
     */
    const renderDividerField = useCallback((params: RenderFieldParams) => {
        const {
            className,
            options: rawOptions = {},
            label
        } = params;

        const options = parseFieldOptions('divider', rawOptions);

        return (
          <AriDivider {...options} className={className}>
            {label}
          </AriDivider>
        );
    }, [parseFieldOptions]);

    /**
     * 根据参数类型渲染对应的字段组件
     */
    const renderField = useCallback((params: RenderFieldParams) => {
        const { type: paramType = 'text' } = params;

        switch (paramType) {
            case 'code':
                return renderCodeField(params);
            case 'boolean':
                return renderBooleanField(params);
            case 'number':
                return renderNumberField(params);
            case 'select':
                return renderSelectField(params);
            case 'textarea':
                return renderTextareaField(params);
            case 'date':
                return renderDateField(params);
            case 'time':
                return renderTimeField(params);
            case 'datetime':
                return renderDateTimeField(params);
            case 'textList':
                return renderTextListField(params);
            case 'divider':
                return renderDividerField(params);
            case 'text':
            default:
                return renderTextField(params);
        }
    }, [
        renderCodeField,
        renderBooleanField,
        renderNumberField,
        renderSelectField,
        renderTextareaField,
        renderDateField,
        renderTimeField,
        renderDateTimeField,
        renderTextListField,
        renderDividerField,
        renderTextField
    ]);

    // 返回渲染方法
    return useMemo(() => ({
        renderField,
        parseFieldOptions
    }), [renderField, parseFieldOptions]);
};

export default useFormItemRender;