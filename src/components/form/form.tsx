import { useState, useEffect, useCallback, forwardRef, useImperativeHandle, SetStateAction } from 'react';
import { AriFormInstance, AriFormProps, AriFormValues } from '@ari/types/components/form';
import { FormContext, setNestedValue } from './context';
import { useCss } from '@ari/utils';
import { useFormInstance } from './instance';

/**
 * 表单组件
 * 提供标准的表单布局和样式，支持表单验证和嵌套字段
 * 
 * Example:
 * {@link https://aries-react.dev/docs/form}
 */
export const AriForm = forwardRef<AriFormInstance, AriFormProps>(({
    children,
    className,
    layout = "horizontal",
    density = "default", // 表单项间距密度
    size, // 表单元素大小
    labelAlign = 'right',
    labelWidth,
    labelCol,
    wrapperCol,
    values: externalValues,
    initialValues = {},
    onValuesChange,
    onFinish,
    onFinishFailed,
    rules,
    maxWidth,
    ...props
}, ref) => {
    const cs = useCss("form");
    // 创建表单实例
    const formInstance = useFormInstance(initialValues, rules);

    // 设置回调
    useEffect(() => {
        formInstance.setCallbacks({
            onValuesChange: (changedValues: AriFormValues, allValues: SetStateAction<AriFormValues>, prevValues: AriFormValues) => { 
                setValues(allValues);
                if (onValuesChange) {
                    onValuesChange(changedValues, allValues, prevValues);
                }
            },
            onSync: () => {
                // 同步错误状态
                setErrors(formInstance.getErrors());
            },
            onFinish,
            onFinishFailed
        });
        
        // 设置提交相关回调
        (formInstance as any).setSubmitCallbacks({
            onFinish,
            onFinishFailed
        });
    }, [formInstance, onValuesChange, onFinish, onFinishFailed]);

    // 设置规则
    useEffect(() => {
        formInstance.setRules(rules);
    }, [formInstance, rules]);

    // 暴露表单实例方法给父组件
    useImperativeHandle(ref, () => formInstance, [formInstance]);

    const [values, setValues] = useState<AriFormValues>(externalValues || initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // 当外部values变化时更新内部状态
    useEffect(() => {
        if (externalValues) {
            setValues(externalValues);
            // 同步到表单实例
            formInstance.setFieldsValue(externalValues);
        }
    }, [formInstance, externalValues]);

    // 设置字段值
    const setFieldValue = useCallback((name: string | string[], value: any) => {
        const fieldPath = Array.isArray(name) ? name.join('.') : name;
        setValues((prev: any) => {
            const newValues = setNestedValue(prev, name, value);

            if (onValuesChange) {
                const changedValues = { [fieldPath]: value };
                onValuesChange(changedValues, newValues, prev);
            }

            return newValues;
        });

        // 同步到表单实例
        formInstance.setFieldValue(name, value);

        // 清除对应字段的错误
        setErrors(prev => {
            if (prev[fieldPath]) {
                const newErrors = { ...prev };
                delete newErrors[fieldPath];
                return newErrors;
            }
            return prev;
        });
    }, [onValuesChange, formInstance]);

    // 获取字段值
    const getFieldValue = useCallback((name: string | string[]) => {
        return formInstance.getFieldValue(name);
    }, [formInstance]);

    // 验证单个字段
    const validateField = useCallback(async (name: string | string[]): Promise<string | undefined> => {
        const error = await formInstance.validateField(name);
        // 同步错误状态
        setErrors(formInstance.getErrors());
        return error;
    }, [formInstance]);

    // 表单提交处理
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await formInstance.submit();
    };

    // 注册字段方法
    const registerField = useCallback((name: string | string[], rules?: any[]) => {
        if (!name) return;
        (formInstance as any).registerField(name, rules);
    }, [formInstance]);

    // 创建上下文值
    const contextValue = {
        values,
        setFieldValue,
        getFieldValue,
        validateField,
        errors,
        setErrors,
        labelAlign,
        labelWidth,
        labelCol,
        wrapperCol,
        layout,
        density, // 传递密度
        size, // 传递大小
        rules,
        formInstance,
        registerField
    };

    // 处理maxWidth样式
    const formStyle = {
        ...(maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth } : {}),
        ...(props.style || {})
    };

    return (
        <FormContext.Provider value={contextValue}>
            <form
                className={cs.gen(cs.b(), cs.m(layout), cs.m(`density-${density}`), className)}
                onSubmit={handleSubmit}
                style={formStyle}
                {...props}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
});

AriForm.displayName = 'AriForm';
