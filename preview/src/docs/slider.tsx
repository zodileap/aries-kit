import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
    BasicSlider, 
    RangeSlider, 
    DisabledSlider, 
    StepsSlider, 
    MarksSlider,
    ValueLabelSlider,
    ColorSlider,
    VerticalSlider,
    PrefixSuffixSlider,
    ShapeSlider
} from './codes/slider';
import { sourceMap } from './codes/source-map';

export const sliderExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的滑动条组件，滑动来选择一个值。',
        demos: [{
            component: BasicSlider,
            sourceCode: sourceMap['slider']['BasicSlider']
        }]
    },
    range: {
        title: '范围选择',
        key: 'range',
        description: '范围滑动条可以选择一个值的范围。',
        demos: [{
            component: RangeSlider,
            sourceCode: sourceMap['slider']['RangeSlider']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过设置disabled属性禁用滑动条。',
        demos: [{
            component: DisabledSlider,
            sourceCode: sourceMap['slider']['DisabledSlider']
        }]
    },
    steps: {
        title: '步长',
        key: 'step',
        description: '通过设置step属性控制步长，即可选值之间的最小间隔。',
        demos: [{
            component: StepsSlider,
            sourceCode: sourceMap['slider']['StepsSlider']
        }]
    },
    marks: {
        title: '刻度标记',
        key: 'marks',
        description: '可以通过showTicks属性显示刻度标记，通过tickCount控制刻度数量，或者通过tickLabels自定义刻度标签。',
        demos: [{
            component: MarksSlider,
            sourceCode: sourceMap['slider']['MarksSlider']
        }]
    },
    valueLabel: {
        title: '值标签',
        key: 'value-label',
        description: '通过设置showValueLabel属性显示当前值标签，可以使用valueLabelFormat对值进行格式化显示。',
        demos: [{
            component: ValueLabelSlider,
            sourceCode: sourceMap['slider']['ValueLabelSlider']
        }]
    },
    color: {
        title: '主题颜色',
        key: 'color',
        description: '提供多种主题颜色选择：primary、success、warning、danger、info。',
        demos: [{
            component: ColorSlider,
            sourceCode: sourceMap['slider']['ColorSlider']
        }]
    },
    vertical: {
        title: '垂直方向',
        key: 'vertical',
        description: '设置vertical属性使滑动条垂直显示。',
        demos: [{
            component: VerticalSlider,
            sourceCode: sourceMap['slider']['VerticalSlider']
        }]
    },
    prefixSuffix: {
        title: '前缀和后缀',
        key: 'prefix-suffix',
        description: '可以在滑动条的两侧添加前缀和后缀内容，如图标或文字。',
        demos: [{
            component: PrefixSuffixSlider,
            sourceCode: sourceMap['slider']['PrefixSuffixSlider']
        }]
    },
    shape: {
        title: '形状',
        key: 'shape',
        description: '提供三种形状选择：default（默认）、rounded（圆角）、square（方形）。',
        demos: [{
            component: ShapeSlider,
            sourceCode: sourceMap['slider']['ShapeSlider']
        }]
    }
};

export const sliderAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '滑动条的值（受控组件）',
            type: 'number',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '滑动条的默认值（非受控组件）',
            type: 'number',
            default: '0'
        },
        {
            param: 'min',
            desc: '最小值',
            type: 'number',
            default: '0'
        },
        {
            param: 'max',
            desc: '最大值',
            type: 'number',
            default: '100'
        },
        {
            param: 'step',
            desc: '步长',
            type: 'number',
            default: '1'
        },
        {
            param: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showTicks',
            desc: '是否显示刻度标记',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'tickCount',
            desc: '刻度标记的数量（不包括起点和终点）',
            type: 'number',
            default: '5'
        },
        {
            param: 'tickLabels',
            desc: '自定义刻度标签',
            type: 'string[] | ((value: number) => string)',
            default: '-'
        },
        {
            param: 'showValueLabel',
            desc: '是否显示当前值标签',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'valueLabelFormat',
            desc: '值标签格式化函数',
            type: '(value: number) => string',
            default: '-'
        },
        {
            param: 'color',
            desc: '滑动条的颜色主题',
            type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
            default: "'primary'"
        },
        {
            param: 'vertical',
            desc: '是否垂直显示',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'size',
            desc: '垂直滑动条的高度或水平滑动条的宽度',
            type: 'string | number',
            default: '-'
        },
        {
            param: 'shape',
            desc: '滑动条的形状',
            type: "'default' | 'rounded' | 'square'",
            default: "'default'"
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
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '滑动条值变化时的回调函数',
            type: '(value: number) => void'
        },
        {
            event: 'onAfterChange',
            desc: '滑动条拖动结束时的回调函数',
            type: '(value: number) => void'
        }
    ],
    slots: [] // Slider 本身没有 slots，prefix/suffix 通过 props 传递
};

// 恢复 rangeSliderAPI 定义
export const rangeSliderAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '范围滑动条的值（受控组件）',
            type: '[number, number]',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '范围滑动条的默认值（非受控组件）',
            type: '[number, number]',
            default: '[0, 0]'
        },
        {
            param: 'onChange',
            desc: '范围滑动条值变化时的回调函数',
            type: '(value: [number, number]) => void',
            default: '-'
        },
        {
            param: 'onAfterChange',
            desc: '范围滑动条拖动结束时的回调函数',
            type: '(value: [number, number]) => void',
            default: '-'
        }
    ],
    events: [],
    slots: []
};


export const anchors = Object.values(sliderExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'slider-api', label: 'Slider API' }, // 恢复独立的 API anchor
    { key: 'range-slider-api', label: 'Range Slider API' } // 恢复独立的 API anchor
]);

const SliderDoc: React.FC = () => {
    return (
        <Doc
            title="Slider 滑动输入条"
            description="滑动输入条组件，通过滑动来选择一个或一段连续的值。包含基础滑动条 (AriSlider) 和范围滑动条 (AriSlider.Range)。"
            examples={sliderExamples}
            api={sliderAPI} // 使用基础 Slider API
            extraProps={[ // 使用 extraProps 传递 Range Slider 的特定 API
                {
                    title: 'Range Slider API',
                    content: "rangeSliderAPI" // 引用 rangeSliderAPI
                }
            ]}
            // 移除 extraSlots，因为 Range Slider 没有额外的 slots
        />
    );
};

export default SliderDoc;
