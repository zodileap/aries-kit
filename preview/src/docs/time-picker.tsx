import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicTimePicker, ControlledTimePicker, TimePickerStep, TimePickerMinMax } from './codes/time-picker';
import { sourceMap } from './codes/source-map';

export const timePickerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '展示 TimePicker 的基本使用，包括受控与非受控模式、12小时制、禁用、清除等。',
        demos: [{
            component: BasicTimePicker,
            sourceCode: sourceMap['time-picker']['BasicTimePicker']
        }]
    },
    controlled: {
        title: '受控组件',
        key: 'controlled',
        description: '演示如何通过 value 和 onChange 属性控制 TimePicker 的状态。',
        demos: [{
            component: ControlledTimePicker,
            sourceCode: sourceMap['time-picker']['ControlledTimePicker']
        }]
    },
    step: {
        title: '步长设置',
        key: 'step',
        description: '通过 step 属性设置小时、分钟、秒的选择步长。',
        demos: [{
            component: TimePickerStep,
            sourceCode: sourceMap['time-picker']['TimePickerStep']
        }]
    },
    minMax: {
        title: '限制时间范围',
        key: 'min-max',
        description: '通过 minTime 和 maxTime 属性限制用户可选的时间范围。',
        demos: [{
            component: TimePickerMinMax,
            sourceCode: sourceMap['time-picker']['TimePickerMinMax']
        }]
    }
};

export const timePickerAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '当前选中的时间（受控）',
            type: 'Date',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认选中的时间（非受控）',
            type: 'Date',
            default: '当前时间'
        },
        {
            param: 'onChange',
            desc: '时间变化时的回调函数',
            type: '(time: Date) => void',
            default: '-'
        },
        {
            param: 'minTime',
            desc: '最小可选时间',
            type: 'Date',
            default: '-'
        },
        {
            param: 'maxTime',
            desc: '最大可选时间',
            type: 'Date',
            default: '-'
        },
        {
            param: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'format',
            desc: '自定义时间显示格式',
            type: '(time: Date) => string',
            default: 'HH:MM:SS / hh:mm:ss A'
        },
        {
            param: 'placeholder',
            desc: '占位文本',
            type: 'string',
            default: '请选择时间'
        },
        {
            param: 'size',
            desc: '组件尺寸',
            type: '\'small\' | \'medium\' | \'large\'',
            default: '\'medium\''
        },
        {
            param: 'clearable',
            desc: '是否显示清除按钮',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'use12Hours',
            desc: '是否使用12小时制',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'step',
            desc: '时间选择步长',
            type: '{ hour?: number; minute?: number; second?: number }',
            default: '{ hour: 1, minute: 1, second: 1 }'
        },
        {
            param: 'showSecond',
            desc: '是否显示秒选择器',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'placement',
            desc: '弹出位置',
            type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\'',
            default: '\'bottom-start\''
        },
        {
            param: 'prefixIcon',
            desc: '输入框前缀图标',
            type: 'string',
            default: '\'schedule\''
        },
        {
            param: 'readonly',
            desc: '输入框是否只读',
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
            desc: '自定义内联样式',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '时间选中时触发',
            type: '(date: Date) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(timePickerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const TimePickerDoc: React.FC = () => {
    return (
        <Doc
            title="TimePicker 时间选择器"
            description="用于选择或输入特定时间的组件。"
            examples={timePickerExamples}
            api={timePickerAPI}
        />
    );
};

export default TimePickerDoc;
