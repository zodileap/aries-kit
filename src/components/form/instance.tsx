import { AriFormValues, AriFormRules, AriFormRule, AriFormInstance } from '@ari/types/components/form';
import { getNestedValue, setNestedValue, getRulesByPath, useForm, FormContext } from './context';
import { useContext, useRef } from 'react';


// 表单实例内部接口，包含公开不暴露的方法
interface FormInstanceInternal extends AriFormInstance {
    registerField: (name: string | string[], rules?: AriFormRule[]) => void;
    setSubmitCallbacks: (callbacks: {
        onFinish?: (values: AriFormValues) => void;
        onFinishFailed?: (errorFields: { name: string[], errors: string[] }[], values: AriFormValues) => void;
    }) => AriFormInstance;
}

// 创建表单实例
export const createFormInstance = (
    initialValues: AriFormValues = {},
    initialRules?: AriFormRules
): FormInstanceInternal => {
    let formValues = { ...initialValues };
    let formErrors: Record<string, string> = {};
    let formRules = initialRules || {};
    
    // 添加用于跟踪字段的集合
    const registeredFields = new Set<string>();

    const callbacks: {
        onValuesChange?: (changedValues: AriFormValues, allValues: AriFormValues) => void;
        onFinish?: (values: AriFormValues) => void;
        onFinishFailed?: (errorFields: { name: string[], errors: string[] }[], values: AriFormValues) => void;
        onSync?: () => void;
    } = {};

    const instance: FormInstanceInternal = {
        getFieldValue: (name: string | string[]) => getNestedValue(formValues, name),

        getFieldsValue: () => ({ ...formValues }),

        setFieldValue: (name: string | any[], value: any, prevValue?: any) => {
           
            const fieldPath = Array.isArray(name) ? name.join('.') : name;
            
            // 保存当前所有值的副本，用于回调
            const prevValues = { ...formValues };
            
            // 从表单中获取字段的当前值（如果没有提供用户传入的prevValue）
            if (prevValue === undefined) {
                prevValue = getNestedValue(formValues, name);
            }
            
            formValues = setNestedValue(formValues, name, value);

            // 清除对应字段的错误
            if (formErrors[fieldPath]) {
                const newErrors = { ...formErrors };
                delete newErrors[fieldPath];
                formErrors = newErrors;
            }

            // 清除该字段及其所有子字段在registeredFields中的记录
            const fieldsToRemove: string[] = [];
            registeredFields.forEach(field => {
                // 如果字段是当前字段的子字段，就移除它
                if (field.startsWith(`${fieldPath}.`)) {
                    fieldsToRemove.push(field);
                }
            });
            
            // 从registeredFields中移除字段
            fieldsToRemove.forEach(field => {
                registeredFields.delete(field);
            });

            if (callbacks.onValuesChange) {
                const changedValues = { [fieldPath]: value };
                callbacks.onValuesChange(changedValues, formValues);
            }

            return instance;
        },

        setFieldsValue: (values: any) => {
            // 保存当前所有值的副本，用于回调
            const prevValues = { ...formValues };
            
            formValues = { ...formValues, ...values };

            // 遍历传入的值对象中的所有字段
            Object.keys(values).forEach(keyPath => {
                // 清除该字段及其所有子字段在registeredFields中的记录
                const fieldsToRemove: string[] = [];
                registeredFields.forEach(field => {
                    // 如果字段是当前字段的子字段，就移除它
                    if (field.startsWith(`${keyPath}.`)) {
                        fieldsToRemove.push(field);
                    }
                });
                
                // 从registeredFields中移除字段
                fieldsToRemove.forEach(field => {
                    registeredFields.delete(field);
                });
                
                // 清除对应字段的错误
                if (formErrors[keyPath]) {
                    const newErrors = { ...formErrors };
                    delete newErrors[keyPath];
                    formErrors = newErrors;
                }
            });

            // 通知值变化
            if (callbacks.onValuesChange) {
                callbacks.onValuesChange(values, formValues);
            }

            return instance;
        },

        validateField: async (name: string | any[]) => {
            const fieldPath = Array.isArray(name) ? name.join('.') : name;
            const value = instance.getFieldValue(name);
            // 获取字段规则
            const fieldRules = getRulesByPath(formRules, name);
            if (fieldRules.length === 0) {
                return undefined;
            }

            // 组合表单项自己的规则
            for (const rule of fieldRules) {
                // 必填校验
                if (rule.required && (value === undefined || value === null || value === '')) {
                    const errorMsg = rule.message || '此字段为必填项';
                    formErrors = { ...formErrors, [fieldPath]: errorMsg };
                    return errorMsg;
                }

                // 长度校验
                if (value !== undefined && value !== null) {
                    if (typeof value === 'string' || Array.isArray(value)) {
                        if (rule.min !== undefined && value.length < rule.min) {
                            const errorMsg = rule.message || `长度不能少于${rule.min}个字符`;
                            formErrors = { ...formErrors, [fieldPath]: errorMsg };
                            return errorMsg;
                        }

                        if (rule.max !== undefined && value.length > rule.max) {
                            const errorMsg = rule.message || `长度不能超过${rule.max}个字符`;
                            formErrors = { ...formErrors, [fieldPath]: errorMsg };
                            return errorMsg;
                        }
                    }
                }

                // 正则校验
                if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
                    const errorMsg = rule.message || '格式不正确';
                    formErrors = { ...formErrors, [fieldPath]: errorMsg };
                    return errorMsg;
                }

                // 自定义校验
                if (rule.validator) {
                    try {
                        const result = await rule.validator(value, formValues);
                        if (result) {
                            formErrors = { ...formErrors, [fieldPath]: result };
                            return result;
                        }
                    } catch (err) {
                        const errorMsg = (err as Error).message || '校验失败';
                        formErrors = { ...formErrors, [fieldPath]: errorMsg };
                        return errorMsg;
                    }
                }
            }

            // 校验通过，清除错误
            if (formErrors[fieldPath]) {
                const newErrors = { ...formErrors };
                delete newErrors[fieldPath];
                formErrors = newErrors;
            }

            return undefined;
        },

        validate: async () => {
            const errorFields: { name: string[], errors: string[] }[] = [];
            // 使用已注册的字段而不是遍历规则
            const validationPromises = Array.from(registeredFields).map(async fieldPath => {
                const path = fieldPath.split('.');
                const error = await instance.validateField(path);
                if (error) {
                    errorFields.push({
                        name: path,
                        errors: [error]
                    });
                }
            });

            await Promise.all(validationPromises);

            if (callbacks.onSync) {
                callbacks.onSync();
            }
            return { errorFields, isValid: errorFields.length === 0 };
        },

        resetFields: () => {
            formValues = { ...initialValues };
            formErrors = {};

            if (callbacks.onValuesChange) {
                callbacks.onValuesChange({}, formValues);
            }

            return instance;
        },

        getErrors: () => ({ ...formErrors }),

        setCallbacks: (newCallbacks: any) => {
            if (newCallbacks.onValuesChange) {
                callbacks.onValuesChange = newCallbacks.onValuesChange;
            }
            if (newCallbacks.onSync) {
                callbacks.onSync = newCallbacks.onSync;
            }
            if (newCallbacks.onFinish) {
                callbacks.onFinish = newCallbacks.onFinish;
            }
            if (newCallbacks.onFinishFailed) {
                callbacks.onFinishFailed = newCallbacks.onFinishFailed;
            }
            return instance;
        },
        
        setSubmitCallbacks: (newCallbacks: any) => {
            if (newCallbacks.onFinish) {
                callbacks.onFinish = newCallbacks.onFinish;
            }
            if (newCallbacks.onFinishFailed) {
                callbacks.onFinishFailed = newCallbacks.onFinishFailed;
            }
            return instance;
        },

        setRules: (newRules) => {
            // 只有当新规则存在时才更新，否则保留现有规则
            if (newRules) {
                formRules = { ...formRules, ...newRules };
            }
            return instance;
        },
        
        submit: async () => {
            const { errorFields, isValid } = await instance.validate();
            if (isValid && callbacks.onFinish) {
                callbacks.onFinish(instance.getFieldsValue());
            } else if (!isValid && callbacks.onFinishFailed) {
                callbacks.onFinishFailed(errorFields, instance.getFieldsValue());
            }

            if (callbacks.onSync) {
                callbacks.onSync();
            }


            return;
        },

        registerField: (name: string | string[], rules?: AriFormRule[]) => {
            if (!name) return;

            const fieldPath = Array.isArray(name) ? name.join('.') : name;
            registeredFields.add(fieldPath);
            if (rules && rules.length > 0) {
                // 更新规则
                formRules = setNestedValue(formRules, name, rules);


            }
        }
    };

    return instance;
};

// 自定义hook创建表单实例
export const useFormInstance = (
    initialValues: AriFormValues = {},
    rules?: AriFormRules
) => {
    const formRef = useRef<ReturnType<typeof createFormInstance>>();

    if (!formRef.current) {
        formRef.current = createFormInstance(initialValues, rules);
    } else {
        // 即使已经存在表单实例，也需要更新规则
        formRef.current.setRules(rules);
    }

    return formRef.current;
};