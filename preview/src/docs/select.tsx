import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicDemo,
    BorderlessDemo,
    ClearableDemo,
    CustomArrowDemo,
    CustomStyleDemo,
    DisabledDemo,
    MultiSelectDemo,
    TriggerActionDemo,
} from './codes/select';
import { sourceMap } from './codes/source-map';

export const selectExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的选择器用法。',
        demos: [{
            component: BasicDemo,
            sourceCode: sourceMap['select']['BasicDemo']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '选择器的禁用状态。',
        demos: [{
            component: DisabledDemo,
            sourceCode: sourceMap['select']['DisabledDemo']
        }]
    },
    clearable: {
        title: '可清除',
        key: 'clearable',
        description: '可以清除已选项。',
        demos: [{
            component: ClearableDemo,
            sourceCode: sourceMap['select']['ClearableDemo']
        }]
    },
    customStyle: {
        title: '自定义样式',
        key: 'custom-style',
        description: '可以自定义选择器的样式。',
        demos: [{
            component: CustomStyleDemo,
            sourceCode: sourceMap['select']['CustomStyleDemo']
        }]
    },
    triggerAction: {
        title: '触发自定义行为',
        key: 'trigger-action',
        description: '点击触发器后执行自定义回调，可用于弹出自定义组件。',
        demos: [{
            component: TriggerActionDemo,
            sourceCode: sourceMap['select']['TriggerActionDemo']
        }]
    },
    borderless: {
        title: '无边框',
        key: 'borderless',
        description: '通过 bordered={false} 关闭触发器边框。',
        demos: [{
            component: BorderlessDemo,
            sourceCode: sourceMap['select']['BorderlessDemo']
        }]
    },
    customArrow: {
        title: '自定义箭头',
        key: 'custom-arrow',
        description: '通过 arrowIcon 自定义触发器箭头图标。',
        demos: [{
            component: CustomArrowDemo,
            sourceCode: sourceMap['select']['CustomArrowDemo']
        }]
    },
    multi: {
        title: '多选与搜索排序',
        key: 'multi',
        description: '展示多选、搜索、排序以及最大最小选择数量限制。',
        demos: [{
            component: MultiSelectDemo,
            sourceCode: sourceMap['select']['MultiSelectDemo']
        }]
    }
};

export const selectAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '当前选中的值',
            type: 'string | number | (string | number)[]',
            default: '-'
        },
        {
            param: 'options',
            desc: '可选项数据源',
            type: 'SelectOption[]',
            default: '[]'
        },
        {
            param: 'defaultValue',
            desc: '默认选中的值',
            type: 'string | number | (string | number)[]',
            default: '-'
        },
        {
            param: 'placeholder',
            desc: '选择框默认文本',
            type: 'string',
            default: '请选择'
        },
        {
            param: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'bordered',
            desc: '是否显示边框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'allowClear',
            desc: '是否显示清除按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'multiple',
            desc: '是否多选模式',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'searchable',
            desc: '是否可搜索',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'sortable',
            desc: '是否可排序（多选模式下有效）',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'maxItems',
            desc: '多选模式下的最大选择数量',
            type: 'number',
            default: '-'
        },
        {
            param: 'minItems',
            desc: '多选模式下的最小选择数量',
            type: 'number',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'arrowIcon',
            desc: '自定义箭头图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'openOnTriggerClick',
            desc: '点击触发器时是否执行默认展开/收起逻辑',
            type: 'boolean',
            default: 'true'
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
            event: 'onChange',
            desc: '选中值变化时的回调',
            type: '(value: string | number | (string | number)[] | undefined, oldValue?: string | number | (string | number)[] | undefined) => void'
        },
        {
            event: 'onSortChange',
            desc: '多选排序变化时的回调（sortable模式下有效）',
            type: '(newValues: (string | number)[], fromIndex: number, toIndex: number) => void'
        },
        {
            event: 'onTriggerClick',
            desc: '点击触发器时的回调，可用于执行自定义行为',
            type: '(event: React.MouseEvent<HTMLDivElement>, context: { value; open; setOpen; toggleDropdown; }) => void'
        },
        {
            event: 'onItemClick',
            desc: '选项点击事件',
            type: '(option: AriSelectOption) => void'
        }
    ],
};

export const anchors = Object.values(selectExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const SelectDoc: React.FC = () => {
    return (
        <Doc
            title="Select 选择器"
            description="下拉选择器，当用户需要从一组相关的数据中进行选择时使用。"
            examples={selectExamples}
            api={selectAPI}
        />
    );
};

export default SelectDoc;
