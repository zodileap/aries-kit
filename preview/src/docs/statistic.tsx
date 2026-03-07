import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
    BasicStatistic, 
    StatisticWithFormat, 
    StatisticSize, 
    StatisticColor, 
    StatisticLayout, 
    StatisticAlign,
    StatisticLoading,
    CountdownDemo
} from './codes/statistic';
import { sourceMap } from './codes/source-map';

export const statisticExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '简单的展示数值和标题。',
        demos: [{
            component: BasicStatistic,
            sourceCode: sourceMap['statistic']['BasicStatistic']
        }]
    },
    format: {
        title: '数值格式化',
        key: 'formatting',
        description: '支持精度设置、自定义千分位分隔符、小数点符号以及自定义格式化函数。',
        demos: [{
            component: StatisticWithFormat,
            sourceCode: sourceMap['statistic']['StatisticWithFormat']
        }]
    },
    size: {
        title: '不同尺寸',
        key: 'size',
        description: '支持小、默认、大三种尺寸。',
        demos: [{
            component: StatisticSize,
            sourceCode: sourceMap['statistic']['StatisticSize']
        }]
    },
    color: {
        title: '不同颜色',
        key: 'color',
        description: '支持不同的颜色主题。',
        demos: [{
            component: StatisticColor,
            sourceCode: sourceMap['statistic']['StatisticColor']
        }]
    },
    layout: {
        title: '布局方式',
        key: 'layout',
        description: '支持垂直（默认）和内联两种布局方式。',
        demos: [{
            component: StatisticLayout,
            sourceCode: sourceMap['statistic']['StatisticLayout']
        }]
    },
    align: {
        title: '对齐方式',
        key: 'align',
        description: '支持左对齐（默认）、居中、右对齐三种对齐方式。',
        demos: [{
            component: StatisticAlign,
            sourceCode: sourceMap['statistic']['StatisticAlign']
        }]
    },
    loading: {
        title: '加载状态',
        key: 'loading',
        description: '数值区域显示加载中状态。',
        demos: [{
            component: StatisticLoading,
            sourceCode: sourceMap['statistic']['StatisticLoading']
        }]
    },
    countdown: {
        title: '倒计时',
        key: 'countdown',
        description: '倒计时组件，支持天、时、分、秒的显示，支持自定义格式。',
        demos: [{
            component: CountdownDemo,
            sourceCode: sourceMap['statistic']['CountdownDemo']
        }]
    }
};

export const statisticAPI: DocAPI = {
    props: [
        {
            param: 'title',
            desc: '数值的标题',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'value',
            desc: '数值的内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'prefix',
            desc: '设置数值的前缀',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'suffix',
            desc: '设置数值的后缀',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'precision',
            desc: '数值精度，小数点后位数',
            type: 'number',
            default: '-'
        },
        {
            param: 'loading',
            desc: '是否将数值加载为动画形式',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'valueStyle',
            desc: '自定义数值样式',
            type: 'React.CSSProperties',
            default: '-'
        },
        {
            param: 'groupSeparator',
            desc: '千分位分隔符',
            type: 'string',
            default: ','
        },
        {
            param: 'decimalSeparator',
            desc: '小数点符号',
            type: 'string',
            default: '.'
        },
        {
            param: 'formatter',
            desc: '自定义格式化函数',
            type: '(value: any) => React.ReactNode',
            default: '-'
        },
        {
            param: 'size',
            desc: '尺寸大小',
            type: "'small' | 'default' | 'large'",
            default: 'default'
        },
        {
            param: 'color',
            desc: '颜色主题',
            type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
            default: '-'
        },
        {
            param: 'layout',
            desc: '布局方式',
            type: "'vertical' | 'inline'",
            default: 'vertical'
        },
        {
            param: 'align',
            desc: '对齐方式',
            type: "'left' | 'center' | 'right'",
            default: 'left'
        }
    ],
    events: [],
    slots: [],
    countdownProps: [
        {
            param: 'value',
            desc: '倒计时的时间戳或日期对象',
            type: 'number | string | Date',
            default: '-'
        },
        {
            param: 'format',
            desc: '倒计时格式，DD-天，HH-时，mm-分，ss-秒，SSS-毫秒',
            type: 'string',
            default: 'HH:mm:ss'
        },
        {
            param: 'onFinish',
            desc: '倒计时完成时的回调函数',
            type: '() => void',
            default: '-'
        },
        {
            param: 'onChange',
            desc: '倒计时变化时的回调函数',
            type: '(value: number) => void',
            default: '-'
        }
    ]
};

export const anchors = Object.values(statisticExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'statistic-api', label: 'Statistic API' },
    { key: 'countdown-api', label: 'Countdown API' }
]);

const StatisticDoc: React.FC = () => {
    return (
        <Doc
            title="Statistic 统计数值"
            description="用于展示统计数据、指标等数值信息，具有数字格式化、前缀/后缀、千分位分隔、精度控制等功能。"
            examples={statisticExamples}
            api={statisticAPI}
            extraProps={[
                {
                    title: 'Countdown API',
                    content: "countdownProps"
                }
            ]}
        />
    );
};

export default StatisticDoc;
