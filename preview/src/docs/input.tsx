import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicInput, InputWithLabel, InputTypes, DisabledInput,
    BasicSearchInput, CustomSearchButton,
    BasicInputNumber, InputNumberRange, InputNumberStep,
    InputWithPrefixSuffix, InputWithCount, InputWithClear, TextAreaDemo, VariantDemp, NoHoverFocusEffectDemo,
    AutoCompleteDemo, BasicTextListInput, TextListWithEvents, TextListWithLimits, 
    TextListVariants, TextListSizes
} from './codes/input';
import { sourceMap } from './codes/source-map';

export const inputExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的文本输入框用法，支持受控和非受控两种模式。',
        demos: [{
            component: BasicInput,
            sourceCode: sourceMap['input']['BasicInput']
        }]
    },
    label: {
        title: '带标签的输入框',
        key: 'input-with-label',
        description: '通过label属性为输入框添加描述标签。',
        demos: [{
            component: InputWithLabel,
            sourceCode: sourceMap['input']['InputWithLabel']
        }]
    },
    prefixSuffix: {
        title: '前缀和后缀',
        key: 'prefix-suffix',
        description: '通过prefix和suffix属性添加前缀和后缀内容，常用于添加图标或单位。',
        demos: [{
            component: InputWithPrefixSuffix,
            sourceCode: sourceMap['input']['InputWithPrefixSuffix']
        }]
    },
    count: {
        title: '字数统计',
        key: 'show-count',
        description: '通过showCount属性显示字数统计，maxLength可限制最大输入长度。',
        demos: [{
            component: InputWithCount,
            sourceCode: sourceMap['input']['InputWithCount']
        }]
    },
    clear: {
        title: '可清除输入框',
        key: 'allow-clear',
        description: '通过allowClear属性添加清除按钮，点击即可清空输入内容。',
        demos: [{
            component: InputWithClear,
            sourceCode: sourceMap['input']['InputWithClear']
        }]
    },
    types: {
        title: '不同类型的输入框',
        key: 'input-types',
        description: '通过type属性指定不同类型的输入框，支持text、password、email、tel等HTML输入类型。',
        demos: [{
            component: InputTypes,
            sourceCode: sourceMap['input']['InputTypes']
        }]
    },
    variant: {
        title: '输入框变体',
        key: 'input-variant',
        description: '通过variant属性设置输入框的样式变体。',
        demos: [{
            component: VariantDemp,
            sourceCode: sourceMap['input']['VariantDemp']
        }]
    },
    noHoverFocusEffect: {
        title: '关闭悬浮效果',
        key: 'no-hover-focus-effect',
        description: '通过 enableHoverFocusEffect 属性关闭输入框与文本域在 hover/focus 时的悬浮视觉效果。',
        demos: [{
            component: NoHoverFocusEffectDemo,
            sourceCode: 'NoHoverFocusEffectDemo'
        }]
    },
    autoComplete: {
        title: '自动完成',
        key: 'auto-complete',
        description: '通过autoComplete属性控制浏览器的自动填充行为，提高用户输入体验。',
        demos: [{
            component: AutoCompleteDemo,
            sourceCode: sourceMap['input']['AutoCompleteDemo']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled-input',
        description: '通过disabled属性设置输入框的禁用状态。',
        demos: [{
            component: DisabledInput,
            sourceCode: sourceMap['input']['DisabledInput']
        }]
    },
    textarea: {
        title: '文本域',
        key: 'textarea',
        description: '使用AriInput.TextArea组件创建多行文本输入区域，支持自动调整高度。',
        demos: [{
            component: TextAreaDemo,
            sourceCode: sourceMap['input']['TextAreaDemo']
        }]
    },
    search: {
        title: '搜索框',
        key: 'search-input',
        description: '带有搜索按钮的输入框，点击按钮或按下回车键可触发搜索事件。',
        demos: [{
            component: BasicSearchInput,
            sourceCode: sourceMap['input']['BasicSearchInput']
        }]
    },
    customSearch: {
        title: '自定义搜索按钮',
        key: 'custom-search-button',
        description: '可以自定义搜索框的按钮内容。',
        demos: [{
            component: CustomSearchButton,
            sourceCode: sourceMap['input']['CustomSearchButton']
        }]
    },
    inputNumber: {
        title: '数字输入框',
        key: 'input-number',
        description: '通过鼠标或键盘，输入范围内的数值。',
        demos: [{
            component: BasicInputNumber,
            sourceCode: sourceMap['input']['BasicInputNumber']
        }]
    },
    numberRange: {
        title: '限制数值范围',
        key: 'number-range',
        description: '通过min和max属性限制数值的输入范围。',
        demos: [{
            component: InputNumberRange,
            sourceCode: sourceMap['input']['InputNumberRange']
        }]
    },
    numberStep: {
        title: '步长和精度',
        key: 'number-step',
        description: '通过step属性设置每次增减的步长，通过precision属性控制数值精度。',
        demos: [{
            component: InputNumberStep,
            sourceCode: sourceMap['input']['InputNumberStep']
        }]
    },
    textList: {
        title: '文本列表输入框',
        key: 'text-list-input',
        description: '用于输入和管理多个文本项的组件，支持增删、排序和拖拽等操作。',
        demos: [{
            component: BasicTextListInput,
            sourceCode: 'BasicTextListInput'
        }]
    },
    textListEvents: {
        title: '事件回调',
        key: 'text-list-events',
        description: '文本列表输入框支持丰富的事件回调，可以监听项目的增加、删除、修改和拖拽排序。',
        demos: [{
            component: TextListWithEvents,
            sourceCode: 'TextListWithEvents'
        }]
    },
    textListLimits: {
        title: '数量限制',
        key: 'text-list-limits',
        description: '通过maxItems和minItems属性可以限制列表的最大和最小项目数量。',
        demos: [{
            component: TextListWithLimits,
            sourceCode: 'TextListWithLimits'
        }]
    },
    textListVariants: {
        title: '不同变体',
        key: 'text-list-variants',
        description: '支持禁用状态、禁用拖拽和允许空项等不同变体。',
        demos: [{
            component: TextListVariants,
            sourceCode: 'TextListVariants'
        }]
    },
    textListSizes: {
        title: '不同尺寸',
        key: 'text-list-sizes',
        description: '支持不同尺寸的文本列表输入框。',
        demos: [{
            component: TextListSizes,
            sourceCode: 'TextListSizes'
        }]
    },
};

export const inputAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '输入框的值',
            type: 'string',
            default: '-'
        },
        {
            param: 'onChange',
            desc: '输入框值变化时的回调',
            type: '(value: string) => void',
            default: '-'
        },
        {
            param: 'placeholder',
            desc: '输入框的占位符',
            type: 'string',
            default: '-'
        },
        {
            param: 'type',
            desc: '输入框的类型',
            type: 'string',
            default: 'text'
        },
        {
            param: 'autoComplete',
            desc: '输入框的自动完成属性',
            type: 'string',
            default: '-'
        },
        {
            param: 'disabled',
            desc: '输入框的禁用状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'label',
            desc: '输入框标签',
            type: 'string',
            default: '-'
        },
        {
            param: 'prefix',
            desc: '前缀内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'suffix',
            desc: '后缀内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'showCount',
            desc: '是否显示字数统计',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'maxLength',
            desc: '最大输入字符数',
            type: 'number',
            default: '-'
        },
        {
            param: 'minLength',
            desc: '最小输入字符数',
            type: 'number',
            default: '-'
        },
        {
            param: 'allowClear',
            desc: '是否允许清除内容',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'className',
            desc: '输入框的类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'variant',
            desc: '输入框变体样式',
            type: "'outlined' | 'borderless' | 'filled' | 'underlined'",
            default: 'outlined'
        },
        {
            param: 'bordered',
            desc: '是否显示边框，设为 false 可隐藏边框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'enableHoverFocusEffect',
            desc: '是否启用 hover/focus 悬浮视觉效果，设为 false 时关闭背景、阴影、边框高亮变化',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'size',
            desc: '输入框尺寸',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        }
    ],
    events: [
        {
            event: 'onFocus',
            desc: '获取焦点时的回调',
            type: '(e: React.FocusEvent<HTMLInputElement>) => void'
        },
        {
            event: 'onBlur',
            desc: '失去焦点时的回调',
            type: '(e: React.FocusEvent<HTMLInputElement>) => void'
        },
        {
            event: 'onPressEnter',
            desc: '按下回车键时的回调',
            type: '(e: React.KeyboardEvent<HTMLInputElement>) => void'
        }
    ],
    slots: [],
    searchInput: [
        {
            param: 'onSearch',
            desc: '搜索回调',
            type: '(value: string) => void',
            default: '-'
        },
        {
            param: 'loading',
            desc: '加载状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'enterButton',
            desc: '搜索按钮',
            type: 'React.ReactNode',
            default: '-'
        }
    ],
    inputNumber: [
        {
            param: 'value',
            desc: '数字输入框的值',
            type: 'number',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认值',
            type: 'number',
            default: '-'
        },
        {
            param: 'onChange',
            desc: '数值变化时的回调',
            type: '(value: number) => void',
            default: '-'
        },
        {
            param: 'min',
            desc: '最小值',
            type: 'number',
            default: '-'
        },
        {
            param: 'max',
            desc: '最大值',
            type: 'number',
            default: '-'
        },
        {
            param: 'step',
            desc: '步长',
            type: 'number',
            default: '1'
        },
        {
            param: 'precision',
            desc: '精度，小数点后位数',
            type: 'number',
            default: '-'
        },
        {
            param: 'disabled',
            desc: '禁用状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'placeholder',
            desc: '占位文本',
            type: 'string',
            default: '-'
        },
        {
            param: 'size',
            desc: '控制组件的视觉尺寸规格',
            type: "'small' | 'default' | 'large'",
            default: 'default'
        },
        {
            param: 'allowClear',
            desc: '是否允许清除',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'bordered',
            desc: '控制组件是否渲染外边框',
            type: 'boolean',
            default: 'true'
        }
    ],
    textArea: [
        {
            param: 'variant',
            desc: '输入框样式变体',
            type: "'outlined' | 'borderless' | 'filled' | 'underlined'",
            default: 'outlined'
        },
        {
            param: 'autoSize',
            desc: '自动调整高度',
            type: 'boolean | { minRows?: number; maxRows?: number }',
            default: 'false'
        },
        {
            param: 'rows',
            desc: '文本域默认行数',
            type: 'number',
            default: '1'
        },
        {
            param: 'cols',
            desc: '文本域默认列数',
            type: 'number',
            default: '-'
        },
        {
            param: 'bordered',
            desc: '是否显示边框，设为 false 时会强制使用 borderless 视觉',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'enableHoverFocusEffect',
            desc: '是否启用 hover/focus 悬浮视觉效果，设为 false 时关闭背景、阴影、边框高亮变化',
            type: 'boolean',
            default: 'true'
        }
    ],
    textList: [
        {
            param: 'value',
            desc: '文本列表输入框的值',
            type: 'string[]',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认值',
            type: 'string[]',
            default: '[]'
        },
        {
            param: 'onChange',
            desc: '列表值变化时的回调',
            type: '(value: string[]) => void',
            default: '-'
        },
        {
            param: 'onItemChange',
            desc: '项目变化时的回调',
            type: '(index: number, itemValue: string, allValues: string[]) => void',
            default: '-'
        },
        {
            param: 'onItemAdd',
            desc: '项目添加时的回调',
            type: '(index: number, allValues: string[]) => void',
            default: '-'
        },
        {
            param: 'onItemRemove',
            desc: '项目删除时的回调',
            type: '(index: number, deletedValue: string, allValues: string[]) => void',
            default: '-'
        },
        {
            param: 'onDragSort',
            desc: '拖拽排序时的回调',
            type: '(fromIndex: number, toIndex: number, allValues: string[]) => void',
            default: '-'
        },
        {
            param: 'addText',
            desc: '添加新条目按钮显示的文本',
            type: 'string',
            default: '"添加"'
        },
        {
            param: 'itemPlaceholder',
            desc: '空项目占位符',
            type: 'string',
            default: '"请输入..."'
        },
        {
            param: 'allowEmpty',
            desc: '是否允许空值',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'allowDrag',
            desc: '是否允许拖拽排序',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'maxItems',
            desc: '最大项目数量',
            type: 'number',
            default: '-'
        },
        {
            param: 'minItems',
            desc: '最小项目数量',
            type: 'number',
            default: '0'
        },
        {
            param: 'disabled',
            desc: '禁用状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'label',
            desc: '标签文本',
            type: 'string',
            default: '-'
        },
        {
            param: 'size',
            desc: '控制组件的视觉尺寸规格',
            type: "'sm' | 'default' | 'lg'",
            default: 'default'
        },
        {
            param: 'maxWidth',
            desc: '最大宽度',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'minWidth',
            desc: '最小宽度',
            type: 'string | number',
            default: '-'
        }
    ]
};

export const anchors = Object.values(inputExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'Input API' },
    { key: 'textarea-api', label: 'TextArea API' },
    { key: 'search-api', label: 'SearchInput API' },
    { key: 'number-api', label: 'InputNumber API' }
]);

const InputDoc: React.FC = () => {
    return (
        <Doc
            title="Input 输入框"
            description="用于获取用户输入的基础表单组件，支持文本输入、搜索和数字输入等多种形式。"
            examples={inputExamples}
            api={inputAPI}
            extraProps={[
                {
                    title: 'TextArea API',
                    data: inputAPI.textArea,
                    anchor: 'textarea-api'
                },
                {
                    title: 'SearchInput API',
                    data: inputAPI.searchInput,
                    anchor: 'search-api'
                },
                {
                    title: 'InputNumber API',
                    data: inputAPI.inputNumber,
                    anchor: 'number-api'
                }
            ]}
        />
    );
};

export default InputDoc;
