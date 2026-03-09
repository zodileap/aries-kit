import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicCheckbox, DisabledDemo, IndeterminateDemo, CheckboxGroupDemo } from './codes/checkbox';
import { sourceMap } from './codes/source-map';

export const checkboxExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的复选框用法，通过checked控制选中状态。',
        demos: [{
            component: BasicCheckbox,
            sourceCode: sourceMap['checkbox']['BasicCheckbox']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过disabled属性设置复选框为禁用状态。',
        demos: [{
            component: DisabledDemo,
            sourceCode: sourceMap['checkbox']['DisabledDemo']
        }]
    },
    indeterminate: {
        title: '半选状态',
        key: 'indeterminate',
        description: '通过indeterminate属性设置复选框的半选状态，常用于全选操作。',
        demos: [{
            component: IndeterminateDemo,
            sourceCode: sourceMap['checkbox']['IndeterminateDemo']
        }]
    },
    group: {
        title: '复选框组',
        key: 'checkbox-group',
        description: '使用CheckboxGroup管理一组相关联的复选框。',
        demos: [{
            component: CheckboxGroupDemo,
            sourceCode: sourceMap['checkbox']['CheckboxGroupDemo']
        }]
    }
};

export const checkboxAPI: DocAPI = {
    props: [
        {
            param: 'checked',
            desc: '是否选中',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'defaultChecked',
            desc: '默认是否选中（非受控模式）',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'disabled',
            desc: '禁用后组件不可交互',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'indeterminate',
            desc: '半选状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'value',
            desc: '复选框的值，在CheckboxGroup中使用',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '选中状态变化时的回调函数',
            type: '(checked: boolean) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '复选框标签内容',
            type: 'React.ReactNode'
        }
    ],
    checkboxGroupProps: [
        {
            param: 'value',
            desc: '受控模式下当前选中的复选框值数组',
            type: 'Array<string | number>',
            default: '[]'
        },
        {
            param: 'defaultValue',
            desc: '非受控模式下默认选中的值数组，仅首次渲染生效',
            type: 'Array<string | number>',
            default: '[]'
        },
        {
            param: 'disabled',
            desc: '是否禁用所有复选框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    checkboxGroupEvents: [
        {
            event: 'onChange',
            desc: '选中值变化回调',
            type: '(checkedValues: Array<string | number>) => void'
        }
    ],
    checkboxGroupSlots: [
        {
            name: 'children',
            desc: '子元素，通常是一组Checkbox组件',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(checkboxExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' },
    { key: 'checkbox-group-props', label: 'CheckboxGroup Props' },
    { key: 'checkbox-group-events', label: 'CheckboxGroup Events' },
    { key: 'checkbox-group-slots', label: 'CheckboxGroup Slots' }
]);

const CheckboxDoc: React.FC = () => {
    return (
        <Doc
            title="Checkbox 复选框"
            description="用于在多个选项中进行多选的表单组件。支持单独使用和成组使用两种方式。"
            examples={checkboxExamples}
            api={checkboxAPI}
            extraProps={[
                {
                    title: 'CheckboxGroup Props',
                    data: checkboxAPI.checkboxGroupProps,
                    anchor: 'checkbox-group-props'
                }
            ]}
            extraEvents={[
                {
                    title: 'CheckboxGroup Events',
                    data: checkboxAPI.checkboxGroupEvents,
                    anchor: 'checkbox-group-events'
                }
            ]}
            extraSlots={[
                {
                    title: 'CheckboxGroup Slots',
                    data: checkboxAPI.checkboxGroupSlots,
                    anchor: 'checkbox-group-slots'
                }
            ]}
        />
    );
};

export default CheckboxDoc;
