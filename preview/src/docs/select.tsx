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
            desc: '受控模式下当前选中的值；多选时传入数组',
            type: 'string | number | (string | number)[]',
            default: '-'
        },
        {
            param: 'options',
            desc: '下拉面板渲染使用的选项数组',
            type: 'SelectOption[]',
            default: '[]'
        },
        {
            param: 'defaultValue',
            desc: '非受控模式下的初始选中值，仅首次渲染生效',
            type: 'string | number | (string | number)[]',
            default: '-'
        },
        {
            param: 'placeholder',
            desc: '未选择任何值时触发器中显示的占位文本',
            type: 'string',
            default: '请选择'
        },
        {
            param: 'disabled',
            desc: '禁用后组件不可交互',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'bordered',
            desc: '控制组件是否渲染外边框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'allowClear',
            desc: '有选中值时是否显示一键清除按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'multiple',
            desc: '开启后允许一次选择多个选项',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'searchable',
            desc: '开启后在下拉面板顶部显示搜索输入框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'sortable',
            desc: '多选模式下是否允许拖拽调整已选项顺序',
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
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'arrowIcon',
            desc: '替换默认下拉箭头的内置图标名称',
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
            desc: '直接作用于组件根节点的内联样式对象',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '选中值变化后触发，返回新值与变更前的旧值',
            type: '(value: string | number | (string | number)[] | undefined, oldValue?: string | number | (string | number)[] | undefined) => void'
        },
        {
            event: 'onSortChange',
            desc: '拖拽调整多选顺序后触发',
            type: '(newValues: (string | number)[], fromIndex: number, toIndex: number) => void'
        },
        {
            event: 'onTriggerClick',
            desc: '点击触发器时触发，可结合 context 接管展开状态或执行自定义逻辑',
            type: '(event: React.MouseEvent<HTMLDivElement>, context: { value; open; setOpen; toggleDropdown; }) => void'
        },
        {
            event: 'onItemClick',
            desc: '点击下拉选项时触发，返回被点击的原始选项对象',
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
