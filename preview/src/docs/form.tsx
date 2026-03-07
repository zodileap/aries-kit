import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicForm, LayoutDemo, ValidationDemo, NestedFieldsDemo, CustomLayoutDemo, ResponsiveDemo, UseRefDemo, UseHookDemo } from './codes/form';
import { sourceMap } from './codes/source-map';

export const formExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的表单组件用法，可包含各种表单控件。',
        demos: [{
            component: BasicForm,
            sourceCode: sourceMap['form']['BasicForm']
        }]
    },
    layout: {
        title: '表单布局',
        key: 'layout',
        description: '通过layout属性控制表单的布局方式，支持垂直(vertical)、水平(horizontal)和内联(inline)三种布局。',
        demos: [{
            component: LayoutDemo,
            sourceCode: sourceMap['form']['LayoutDemo']
        }]
    },
    validation: {
        title: '表单验证',
        key: 'validation',
        description: '通过rules属性设置表单验证规则，支持必填、长度限制、正则表达式和自定义验证函数。',
        demos: [{
            component: ValidationDemo,
            sourceCode: sourceMap['form']['ValidationDemo']
        }]
    },
    nestedFields: {
        title: '嵌套字段',
        key: 'nested-fields',
        description: '支持嵌套数据结构，可通过点表示法或数组表示法设置深层次字段。',
        demos: [{
            component: NestedFieldsDemo,
            sourceCode: sourceMap['form']['NestedFieldsDemo']
        }]
    },
    customLayout: {
        title: '自定义表单布局',
        key: 'custom-layout',
        description: '通过labelCol和wrapperCol属性自定义表单项标签和控件的布局比例。',
        demos: [{
            component: CustomLayoutDemo,
            sourceCode: sourceMap['form']['CustomLayoutDemo']
        }]
    },
    responsive: {
        title: '响应式表单',
        key: 'responsive',
        description: '结合栅格系统实现响应式的表单布局。',
        demos: [{
            component: ResponsiveDemo,
            sourceCode: sourceMap['form']['ResponsiveDemo']
        }]
    },
    useRef: {
        title: '使用表单Ref',
        key: 'use-ref',
        description: '通过React ref获取表单实例，可以直接调用表单的各种方法，如重置、设置值、获取值等。',
        demos: [{
            component: UseRefDemo,
            sourceCode: sourceMap['form']['UseRefDemo']
        }]
    },
    useHook: {
        title: '使用表单Hook',
        key: 'use-hook',
        description: '使用useFormInstance创建表单实例，或通过useForm访问表单上下文，实现更灵活的表单控制。',
        demos: [{
            component: UseHookDemo,
            sourceCode: sourceMap['form']['UseHookDemo']
        }]
    }
};

export const formAPI: DocAPI = {
    props: [
        {
            param: 'layout',
            desc: '表单布局方式',
            type: "'horizontal' | 'vertical' | 'inline'",
            default: 'horizontal'
        },
        {
            param: 'density',
            desc: '表单项间距密度',
            type: "'compact' | 'default' | 'loose'",
            default: 'default'
        },
        {
            param: 'size',
            desc: '表单组件大小',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'labelAlign',
            desc: '标签对齐方式',
            type: "'left' | 'right'",
            default: 'right'
        },
        {
            param: 'labelWidth',
            desc: '标签宽度',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'labelCol',
            desc: '标签栅格配置',
            type: 'number | ColProps',
            default: '-'
        },
        {
            param: 'wrapperCol',
            desc: '控件栅格配置',
            type: 'number | ColProps',
            default: '-'
        },
        {
            param: 'values',
            desc: '表单数据（受控模式）',
            type: 'FormValues',
            default: '-'
        },
        {
            param: 'initialValues',
            desc: '表单初始值',
            type: 'FormValues',
            default: '-'
        },
        {
            param: 'rules',
            desc: '表单校验规则',
            type: 'FormRules',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '自定义样式',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onValuesChange',
            desc: '表单值变化时的回调函数',
            type: '(changedValues: FormValues, allValues: FormValues) => void'
        },
        {
            event: 'onFinish',
            desc: '提交表单且校验成功后的回调函数',
            type: '(values: FormValues) => void'
        },
        {
            event: 'onFinishFailed',
            desc: '提交表单且校验失败后的回调函数',
            type: '(errorFields: { name: string[], errors: string[] }[], values: FormValues) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '表单内容',
            type: 'React.ReactNode'
        }
    ],
    formItem: {
        title: 'FormItem',
        props: [
            {
                param: 'name',
                desc: '表单项字段名',
                type: 'string | string[]',
                default: '-'
            },
            {
                param: 'label',
                desc: '标签文本',
                type: 'React.ReactNode',
                default: '-'
            },
            {
                param: 'labelWidth',
                desc: '标签宽度（会覆盖Form的labelWidth）',
                type: 'string | number',
                default: '-'
            },
            {
                param: 'labelCol',
                desc: '标签栅格配置（会覆盖Form的labelCol）',
                type: 'number | ColProps',
                default: '-'
            },
            {
                param: 'wrapperCol',
                desc: '控件栅格配置（会覆盖Form的wrapperCol）',
                type: 'number | ColProps',
                default: '-'
            },
            {
                param: 'required',
                desc: '是否必填',
                type: 'boolean',
                default: 'false'
            },
            {
                param: 'rules',
                desc: '校验规则',
                type: 'FormRule[]',
                default: '-'
            },
            {
                param: 'error',
                desc: '错误信息',
                type: 'string',
                default: '-'
            },
            {
                param: 'help',
                desc: '帮助文本',
                type: 'React.ReactNode',
                default: '-'
            },
            {
                param: 'labelAlign',
                desc: '标签对齐方式',
                type: "'left' | 'right'",
                default: '继承Form的设置'
            },
            {
                param: 'colon',
                desc: '是否显示冒号',
                type: 'boolean',
                default: 'true'
            },
            {
                param: 'className',
                desc: '自定义类名',
                type: 'string',
                default: '-'
            },
            {
                param: 'style',
                desc: '自定义样式',
                type: 'React.CSSProperties',
                default: '-'
            }
        ],
        slots: [
            {
                name: 'children',
                desc: '表单项内容',
                type: 'React.ReactNode'
            }
        ]
    },
    hooks: {
        title: '表单Hooks',
        apis: [
            {
                name: 'useFormInstance',
                desc: '创建表单实例，可用于非AriForm组件场景',
                type: '(initialValues?: FormValues, rules?: FormRules) => FormInstance'
            },
            {
                name: 'useForm',
                desc: '访问当前表单上下文，必须在AriForm子组件中使用',
                type: '() => FormContextType'
            }
        ]
    },
    methods: {
        title: '表单方法',
        apis: [
            {
                name: 'getFieldValue',
                desc: '获取指定字段的值',
                type: '(name: string | string[]) => any'
            },
            {
                name: 'getFieldsValue',
                desc: '获取所有表单字段的值',
                type: '() => FormValues'
            },
            {
                name: 'setFieldValue',
                desc: '设置指定字段的值',
                type: '(name: string | string[], value: any) => FormInstance'
            },
            {
                name: 'setFieldsValue',
                desc: '设置多个表单字段的值',
                type: '(values: FormValues) => FormInstance'
            },
            {
                name: 'validateField',
                desc: '验证指定字段',
                type: '(name: string | string[]) => Promise<string | undefined>'
            },
            {
                name: 'validateFields',
                desc: '验证所有字段',
                type: '() => Promise<{ errorFields: { name: string[], errors: string[] }[], isValid: boolean }>'
            },
            {
                name: 'resetFields',
                desc: '重置表单字段为初始值',
                type: '() => FormInstance'
            },
            {
                name: 'submit',
                desc: '提交表单并验证',
                type: '() => void'
            }
        ]
    }
};

export const anchors = Object.values(formExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const FormDoc: React.FC = () => {
    return (
        <Doc
            title="Form 表单"
            description="用于收集、验证和提交数据的表单组件，支持多种布局方式和验证规则。"
            examples={formExamples}
            api={formAPI}
        />
    );
};

export default FormDoc;
