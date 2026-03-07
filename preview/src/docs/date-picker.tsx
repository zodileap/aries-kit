import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicDatePicker } from './codes/date-picker';
import { sourceMap } from './codes/source-map';

export const datePickerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '日期选择器的基础用法，支持受控和非受控模式。',
        demos: [{
            component: BasicDatePicker,
            sourceCode: sourceMap['date-picker']['BasicDatePicker']
        }]
    }
};

export const datePickerAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '当前选中的日期（受控）',
            type: 'Date',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认选中的日期（非受控）',
            type: 'Date',
            default: '当前日期'
        },
        {
            param: 'onChange',
            desc: '日期变化时的回调函数',
            type: '(date: Date) => void',
            default: '-'
        },
        {
            param: 'minDate',
            desc: '最小可选日期',
            type: 'Date',
            default: '-'
        },
        {
            param: 'maxDate',
            desc: '最大可选日期',
            type: 'Date',
            default: '-'
        },
        {
            param: 'disabledDates',
            desc: '禁用的日期数组',
            type: 'Date[]',
            default: '[]'
        },
        {
            param: 'disabled',
            desc: '是否禁用选择器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'format',
            desc: '日期显示格式化函数',
            type: '(date: Date) => string',
            default: 'YYYY-MM-DD'
        },
        {
            param: 'placeholder',
            desc: '占位符文本',
            type: 'string',
            default: '请选择日期'
        },
        {
            param: 'size',
            desc: '组件尺寸',
            type: "'small' | 'medium' | 'large'",
            default: 'medium'
        },
        {
            param: 'clearable',
            desc: '是否显示清除按钮',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'calendarProps',
            desc: '传递给日历组件的属性',
            type: 'Partial<AriCalendarProps>',
            default: '-'
        },
        {
            param: 'placement',
            desc: '日历弹出的位置',
            type: "'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'",
            default: 'bottom-start'
        },
        {
            param: 'prefixIcon',
            desc: '输入框前缀图标',
            type: 'string',
            default: 'calendar_today'
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
        },
        {
            param: 'showTime',
            desc: '是否显示时间选择器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'timePickerProps',
            desc: '传递给时间选择器的属性',
            type: "Partial<Omit<AriTimePickerProps, 'value' | 'defaultValue' | 'onChange'>>",
            default: '-'
        },
        {
            param: 'dateTimeFormat',
            desc: '当 showTime 为 true 时，自定义日期和时间的显示格式',
            type: '(date: Date) => string',
            default: 'YYYY-MM-DD HH:mm:ss'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '日期选择变化时触发',
            type: '(date: Date) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(datePickerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const DatePickerDoc: React.FC = () => {
    return (
        <Doc
            title="DatePicker 日期选择器"
            description="用于选择或输入日期的控件。"
            examples={datePickerExamples}
            api={datePickerAPI}
        />
    );
};

export default DatePickerDoc;
