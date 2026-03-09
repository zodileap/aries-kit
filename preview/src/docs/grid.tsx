import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicGrid, GutterDemo, ResponsiveDemo, AlignmentDemo, OffsetOrderDemo } from './codes/grid';
import { sourceMap } from './codes/source-map';

export const gridExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '栅格系统基于24列，通过Row和Col组件创建行和列的布局。',
        demos: [{
            component: BasicGrid,
            sourceCode: sourceMap['grid']['BasicGrid']
        }]
    },
    gutter: {
        title: '区块间隔',
        key: 'gutter',
        description: '通过Row的gutter属性设置栅格间隔，可以是单个数值或一个包含水平和垂直间距的数组。',
        demos: [{
            component: GutterDemo,
            sourceCode: sourceMap['grid']['GutterDemo']
        }]
    },
    responsive: {
        title: '响应式布局',
        key: 'responsive',
        description: '使用xs、sm、md、lg、xl、xxl属性，可以根据屏幕宽度自动调整布局。',
        demos: [{
            component: ResponsiveDemo,
            sourceCode: sourceMap['grid']['ResponsiveDemo']
        }]
    },
    alignment: {
        title: '对齐方式',
        key: 'alignment',
        description: '通过Row的justify和align属性控制子元素的水平和垂直对齐方式。',
        demos: [{
            component: AlignmentDemo,
            sourceCode: sourceMap['grid']['AlignmentDemo']
        }]
    },
    offsetOrder: {
        title: '栅格偏移与排序',
        key: 'offset-order',
        description: '使用offset、pull、push和order属性调整栅格的位置和顺序。',
        demos: [{
            component: OffsetOrderDemo,
            sourceCode: sourceMap['grid']['OffsetOrderDemo']
        }]
    }
};

export const gridAPI: DocAPI = {
    props: [],
    events: [],
    slots: [],
    rowProps: [
        {
            param: 'gutter',
            desc: '栅格间隔，可以是数字或数组[水平间距, 垂直间距]',
            type: 'number | [number, number]',
            default: '0'
        },
        {
            param: 'justify',
            desc: '水平排列方式',
            type: "'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",
            default: '-'
        },
        {
            param: 'align',
            desc: '控制同一行内各列在交叉轴上的垂直对齐方式',
            type: "'top' | 'middle' | 'bottom' | 'stretch'",
            default: '-'
        },
        {
            param: 'wrap',
            desc: '是否自动换行',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    rowSlots: [
        {
            name: 'children',
            desc: '行内容，通常为Col组件',
            type: 'React.ReactNode'
        }
    ],
    colProps: [
        {
            param: 'span',
            desc: '栅格占据的列数，总列数为24',
            type: 'number',
            default: '-'
        },
        {
            param: 'offset',
            desc: '栅格左侧的间隔格数',
            type: 'number',
            default: '0'
        },
        {
            param: 'pull',
            desc: '栅格向左移动格数',
            type: 'number',
            default: '0'
        },
        {
            param: 'push',
            desc: '栅格向右移动格数',
            type: 'number',
            default: '0'
        },
        {
            param: 'order',
            desc: '栅格顺序，用于flex布局',
            type: 'number',
            default: '0'
        },
        {
            param: 'xs',
            desc: '<576px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'sm',
            desc: '≥576px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'md',
            desc: '≥768px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'lg',
            desc: '≥992px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'xl',
            desc: '≥1200px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'xxl',
            desc: '≥1600px 响应式栅格',
            type: 'number | AriResponsiveConfig',
            default: '-'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    colSlots: [
        {
            name: 'children',
            desc: '列内容',
            type: 'React.ReactNode'
        }
    ]
}


export const anchors = Object.values(gridExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'Grid API' },
    { key: 'row-api', label: 'Row API' },
    { key: 'col-api', label: 'Col API' },
    { key: 'row-slots', label: 'Row Slots' },
    { key: 'col-slots', label: 'Col Slots' }
]);

const GridDoc: React.FC = () => {
    return (
        <Doc
            title="Grid 栅格"
            description="基于24栅格系统，通过Row和Col组件，迅速简便地创建布局。采用了flex布局，支持响应式设计和多种对齐方式。"
            apiAnchor="api"
            examples={gridExamples}
            api={gridAPI}
            extraProps={[
                {
                    title: 'Row API',
                    data: gridAPI.rowProps,
                    anchor: 'row-api'
                },
                {
                    title: 'Col API',
                    data: gridAPI.colProps,
                    anchor: 'col-api'
                }
            ]}
            extraSlots={
                [
                    {
                        title: 'Row Slots',
                        data: gridAPI.rowSlots,
                        anchor: 'row-slots'
                    },
                    {
                        title: 'Col Slots',
                        data: gridAPI.colSlots,
                        anchor: 'col-slots'
                    }
                ]
            }
        />
    );
};

export default GridDoc;
