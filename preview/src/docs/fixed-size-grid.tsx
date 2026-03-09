import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicGrid, CustomSizeGrid, OverscanDemo, EventDemo } from './codes/fixed-size-grid';
import { sourceMap } from './codes/source-map';

export const fixedSizeGridExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的网格布局用法，设置列数、列宽和行高来创建一个固定尺寸的网格。',
        demos: [{
            component: BasicGrid,
            sourceCode: sourceMap['fixed-size-grid']['BasicGrid']
        }]
    },
    customSize: {
        title: '自定义尺寸',
        key: 'custom-size',
        description: '可以自定义网格的列数、列宽和行高，以适应不同的布局需求。',
        demos: [{
            component: CustomSizeGrid,
            sourceCode: sourceMap['fixed-size-grid']['CustomSizeGrid']
        }]
    },
    overscan: {
        title: '预渲染行数',
        key: 'overscan',
        description: '通过设置 overscanRowsCount 属性，可以在视口外预渲染额外的行，提高滚动性能。',
        demos: [{
            component: OverscanDemo,
            sourceCode: sourceMap['fixed-size-grid']['OverscanDemo']
        }]
    },
    events: {
        title: '事件监听',
        key: 'events',
        description: '支持滚动事件和可见项目变化事件的监听，方便进行更复杂的交互控制。',
        demos: [{
            component: EventDemo,
            sourceCode: sourceMap['fixed-size-grid']?.['EventDemo'] || ''
        }]
    }
};

export const fixedSizeGridAPI: DocAPI = {
    props: [
        {
            param: 'columnCount',
            desc: '列数',
            type: 'number',
            default: '3'
        },
        {
            param: 'columnWidth',
            desc: '列宽（像素）',
            type: 'number',
            default: '100'
        },
        {
            param: 'rowHeight',
            desc: '行高（像素）',
            type: 'number',
            default: '100'
        },
        {
            param: 'height',
            desc: '容器高度（像素或CSS长度单位）',
            type: 'number | string',
            default: '400'
        },
        {
            param: 'width',
            desc: '容器宽度（像素或百分比）',
            type: 'number | string',
            default: '100%'
        },
        {
            param: 'overscanRowsCount',
            desc: '预渲染的额外行数（视口上方）',
            type: 'number',
            default: '1'
        },
        {
            param: 'itemCount',
            desc: '项目总数',
            type: 'number',
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
            event: 'onScroll',
            desc: '滚动事件处理函数',
            type: '(scrollTop: number, scrollLeft: number) => void'
        },
        {
            event: 'onItemsRendered',
            desc: '当项目变为可见时的回调',
            type: '(params: { visibleStartIndex: number; visibleStopIndex: number }) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '渲染项目的函数',
            type: '(props: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => React.ReactNode'
        }
    ]
};

export const anchors = Object.values(fixedSizeGridExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const FixedSizeGridDoc: React.FC = () => {
    return (
        <Doc
            title="FixedSizeGrid 固定尺寸网格"
            description="用于高性能渲染大量数据的网格组件，通过虚拟滚动技术优化性能。"
            examples={fixedSizeGridExamples}
            api={fixedSizeGridAPI}
        />
    );
};

export default FixedSizeGridDoc;
