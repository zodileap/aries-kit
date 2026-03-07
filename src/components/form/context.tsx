import  { createContext, useContext } from 'react';
import { AriFormValues, AriFormRules, AriFormRule, AriFormInstance } from '@ari/types/components/form';
import { WidgetSize } from '@ari/types/widget';

// 定义表单上下文类型
export interface FormContextType {
    values: AriFormValues;
    setFieldValue: (name: string | string[], value: any, prevValue?: any) => void;
    getFieldValue: (name: string | string[]) => any;
    validateField: (name: string | string[]) => Promise<string | undefined>;
    errors: Record<string, string>;
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    labelAlign: 'left' | 'right';
    labelWidth?: string | number;
    labelCol?: number | any;
    wrapperCol?: number | any;
    layout: 'vertical' | 'horizontal' | 'inline';
    density: 'compact' | 'default' | 'loose'; // 表单项间距密度
    size?: WidgetSize; // 表单元素大小
    rules?: AriFormRules;
    formInstance: AriFormInstance;
    // 注册表单项的规则
    registerField: (name: string | string[], rules?: AriFormRule[]) => void;
}

// 创建表单上下文
export const FormContext = createContext<FormContextType | undefined>(undefined);

// 自定义hook用于获取表单上下文
export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm必须在AriForm组件内使用');
    }
    return context;
};

// 辅助函数：获取嵌套对象的值
export const getNestedValue = (obj: any, path: string | string[]): any => {
    const keys = Array.isArray(path) ? path : path.split('.');
    return keys.reduce((value, key) => (value && typeof value === 'object' ? value[key] : undefined), obj);
};

// 辅助函数：设置嵌套对象的值
export const setNestedValue = (obj: any, path: string | string[], value: any): any => {
    const keys = Array.isArray(path) ? path : path.split('.');
    const newObj = { ...obj };

    let current = newObj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }

    current[keys[keys.length - 1]] = value;
    return newObj;
};

// 辅助函数：获取规则对应的路径
export const getRulesByPath = (rules: AriFormRules | undefined, path: string | string[]): AriFormRule[] => {
    if (!rules) return [];

    const pathArray = Array.isArray(path) ? path : path.split('.');
    const fieldName = pathArray[0];

    if (pathArray.length === 1) {
        const fieldRules = rules[fieldName];
        if (!fieldRules) return [];
        return Array.isArray(fieldRules) ? fieldRules : [fieldRules];
    }

    const nestedRules = rules[fieldName];
    if (typeof nestedRules === 'object' && !Array.isArray(nestedRules) && !('required' in nestedRules)) {
        return getRulesByPath(nestedRules as AriFormRules, pathArray.slice(1).join('.'));
    }

    return [];
};
