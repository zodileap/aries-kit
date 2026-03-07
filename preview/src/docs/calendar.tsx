import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicCalendar, DisabledCalendar, ModeCalendar, CustomHeaderCalendar, CustomRenderCalendar } from './codes/calendar';
import { sourceMap } from './codes/source-map';

export const calendarExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的日历组件，展示一个月份的日期，并可以选择日期。',
        demos: [{
            component: BasicCalendar,
            sourceCode: sourceMap['calendar']['BasicCalendar']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled-dates',
        description: '可以设置禁用的日期范围或特定日期，用户将无法选择这些日期。',
        demos: [{
            component: DisabledCalendar,
            sourceCode: sourceMap['calendar']['DisabledCalendar']
        }]
    },
    mode: {
        title: '不同视图模式',
        key: 'view-mode',
        description: '日历组件支持日期、月份和年份三种不同的视图模式。',
        demos: [{
            component: ModeCalendar,
            sourceCode: sourceMap['calendar']['ModeCalendar']
        }]
    },
    customHeader: {
        title: '自定义头部',
        key: 'custom-header',
        description: '通过自定义头部渲染函数，可以定制日历头部的显示方式。',
        demos: [{
            component: CustomHeaderCalendar,
            sourceCode: sourceMap['calendar']['CustomHeaderCalendar']
        }]
    },
    customRender: {
        title: '自定义日期渲染',
        key: 'custom-render',
        description: '通过自定义日期渲染函数，可以为特定日期添加标记或样式。',
        demos: [{
            component: CustomRenderCalendar,
            sourceCode: sourceMap['calendar']['CustomRenderCalendar']
        }]
    }
};

export const calendarAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '当前选中的日期（受控模式）',
            type: 'Date',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认选中的日期（非受控模式）',
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
            desc: '是否禁用日历',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'mode',
            desc: '显示的视图类型',
            type: "'date' | 'month' | 'year'",
            default: "'date'"
        },
        {
            param: 'dateRender',
            desc: '自定义日期单元格的渲染函数',
            type: '(date: Date, isSelected: boolean, isDisabled: boolean, isToday: boolean) => React.ReactNode',
            default: '-'
        },
        {
            param: 'headerRender',
            desc: '自定义头部的渲染函数',
            type: "(date: Date, mode: 'date' | 'month' | 'year', changeMode: (mode: 'date' | 'month' | 'year') => void, onPrevMonth: () => void, onNextMonth: () => void, onPrevYear: () => void, onNextYear: () => void) => React.ReactNode",
            default: '-'
        },
        {
            param: 'showToday',
            desc: '是否显示今天按钮',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'firstDayOfWeek',
            desc: '每周的第一天，0表示周日，1表示周一',
            type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
            default: '0'
        },
        {
            param: 'dateShape',
            desc: '日期单元格的形状',
            type: "'circle' | 'square'",
            default: "'circle'"
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '日期变化时触发',
            type: '(date: Date)'
        }
    ],
    slots: []
};

export const anchors = Object.values(calendarExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const CalendarDoc: React.FC = () => {
    return (
        <Doc
            title="Calendar 日历"
            description="日历组件用于展示日期信息，支持日期选择、月份切换、自定义渲染等功能。"
            examples={calendarExamples}
            api={calendarAPI}
        />
    );
};

export default CalendarDoc;
