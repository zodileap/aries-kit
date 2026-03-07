import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicRadio, RadioGroupExample, RadioGroupWithOptions, RadioButtonExample, RadioSizesExample } from './codes/radio';
import { sourceMap } from './codes/source-map';

export const radioExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的用法，展示了Radio单独使用的场景。',
        demos: [{
            component: BasicRadio,
            sourceCode: sourceMap['radio']['BasicRadio']
        }]
    },
    group: {
        title: '单选框组',
        key: 'radio-group',
        description: '使用RadioGroup统一管理一组Radio，通过onChange监听选中值的变化。',
        demos: [{
            component: RadioGroupExample,
            sourceCode: sourceMap['radio']['RadioGroupExample']
        }]
    },
    options: {
        title: '配置式单选框组',
        key: 'radio-options',
        description: '通过options属性配置单选框组，适合简单的数据驱动场景。',
        demos: [{
            component: RadioGroupWithOptions,
            sourceCode: sourceMap['radio']['RadioGroupWithOptions']
        }]
    },
    button: {
        title: '按钮样式',
        key: 'radio-button',
        description: '使用RadioButton可以实现按钮样式的单选框组，适合紧凑型布局。',
        demos: [{
            component: RadioButtonExample,
            sourceCode: sourceMap['radio']['RadioButtonExample']
        }]
    },
    size: {
        title: '尺寸',
        key: 'radio-size',
        description: '提供三种尺寸的单选框：小(sm)、默认(default)、大(lg)。',
        demos: [{
            component: RadioSizesExample,
            sourceCode: sourceMap['radio']['RadioSizesExample']
        }]
    }
};

export const radioAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '单选框的值，用于唯一标识该单选框',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'name',
            desc: '单选框组名称，用于关联一组单选框',
            type: 'string',
            default: '-'
        },
        {
            param: 'checked',
            desc: '是否选中，控制单选框是否被选中',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'defaultChecked',
            desc: '默认是否选中，非受控组件的默认值',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'disabled',
            desc: '是否禁用，控制单选框是否可交互',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'label',
            desc: '标签内容，显示在单选框旁边的文本',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'size',
            desc: '单选框尺寸，控制单选框的大小',
            type: "'sm' | 'default' | 'lg'",
            default: "'default'"
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '选中状态改变时触发',
            type: '(e: React.ChangeEvent<HTMLInputElement>, value: string | number) => void'
        }
    ],
    slots: [],
    groupProps: [
        {
            param: 'value',
            desc: '选中的值，受控组件的当前值',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认选中的值，非受控组件的默认值',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'name',
            desc: '单选框组名称，用于关联一组单选框',
            type: 'string',
            default: '-'
        },
        {
            param: 'options',
            desc: '选项数组，用于批量生成单选框',
            type: 'Array<{ label: React.ReactNode; value: string | number; disabled?: boolean; }>',
            default: '[]'
        },
        {
            param: 'disabled',
            desc: '是否禁用整个单选框组',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'onChange',
            desc: '选中值变化时的回调函数',
            type: '(value: string | number) => void',
            default: '-'
        },
        {
            param: 'size',
            desc: '单选框尺寸，控制单选框的大小',
            type: "'sm' | 'default' | 'lg'",
            default: "'default'"
        }
    ],
    groupSlots: [
        {
            name: 'children',
            desc: '子元素，可以是任意React节点，通常是Radio或RadioButton组件',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(radioExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'radio-api', label: 'Radio API' },
    { key: 'radio-group-api', label: 'Radio.Group API' }
]);

const RadioDoc: React.FC = () => {
    return (
        <Doc
            title="Radio 单选框"
            description="单选框允许用户从一组选项中选择一个选项，用于在有限数量的选择中进行单选。"
            examples={radioExamples}
            api={radioAPI}
            extraProps={[
                {
                    title: 'Radio.Group API',
                    content: "groupProps"
                }
            ]}
            extraSlots={
                [
                    {
                        title: 'Radio.Group Slots',
                        content: "groupSlots"
                    }
                ]
            }
        />
    );
};

export default RadioDoc;