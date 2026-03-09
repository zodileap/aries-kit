import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicFlex, VerticalFlex, SizeFlex, AlignFlex, JustifyFlex, WrapFlex, FlexItemDemo } from './codes/flex';
import { sourceMap } from './codes/source-map';

export const flexExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的弹性布局组件用法，默认为水平布局。',
        demos: [{
            component: BasicFlex,
            sourceCode: sourceMap['flex']['BasicFlex']
        }]
    },
    vertical: {
        title: '垂直布局',
        key: 'vertical',
        description: '设置 vertical 属性可以展示垂直布局。',
        demos: [{
            component: VerticalFlex,
            sourceCode: sourceMap['flex']['VerticalFlex']
        }]
    },
    space: {
        title: '间距大小',
        key: 'space',
        description: '通过 space 属性控制间距大小，支持数字（px）或其他 CSS 单位。',
        demos: [{
            component: SizeFlex,
            sourceCode: sourceMap['flex']['SizeFlex']
        }]
    },
    align: {
        title: '垂直对齐',
        key: 'align',
        description: '设置 align 属性可以调整元素在垂直方向上的对齐方式。',
        demos: [{
            component: AlignFlex,
            sourceCode: sourceMap['flex']['AlignFlex']
        }]
    },
    justify: {
        title: '水平对齐',
        key: 'justify',
        description: '设置 justify 属性可以调整元素在水平方向上的对齐方式。',
        demos: [{
            component: JustifyFlex,
            sourceCode: sourceMap['flex']['JustifyFlex']
        }]
    },
    wrap: {
        title: '自动换行',
        key: 'wrap',
        description: '设置 wrap 属性后，子元素会在空间不足时自动换行。',
        demos: [{
            component: WrapFlex,
            sourceCode: sourceMap['flex']['WrapFlex']
        }]
    },
    flexItem: {
        title: '弹性项目属性',
        key: 'flex-item',
        description: '通过 flexItem 属性设置子元素的弹性特性，如自动填充空间和溢出行为。',
        demos: [{
            component: FlexItemDemo,
            sourceCode: sourceMap['flex']['FlexItemDemo']
        }]
    }
};

export const flexAPI: DocAPI = {
    props: [
        {
            param: 'space',
            desc: '间距大小',
            type: 'number | string',
            default: '8'
        },
        {
            param: 'vertical',
            desc: '是否垂直排列',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'align',
            desc: '垂直对齐方式 (align-items)',
            type: "'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",
            default: 'center'
        },
        {
            param: 'justify',
            desc: '水平对齐方式 (justify-content)',
            type: "'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",
            default: 'flex-start'
        },
        {
            param: 'wrap',
            desc: '是否自动换行',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'fill',
            desc: '是否填充父容器宽度',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'flexItem',
            desc: '设置子元素的弹性特性',
            type: '{ index?: number; overflow?: "auto" | "hidden" | "scroll" | "visible"; flex?: string | number; width?: string | number; height?: string | number; maxWidth?: string | number; minWidth?: string | number; maxHeight?: string | number; minHeight?: string | number; } | Array<{ index: number; overflow?: "auto" | "hidden" | "scroll" | "visible"; flex?: string | number; width?: string | number; height?: string | number; maxWidth?: string | number; minWidth?: string | number; maxHeight?: string | number; minHeight?: string | number; }>',
            default: '-'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [],
    slots: [
        {
            name: 'children',
            desc: '直接渲染在组件内部的 React 节点内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(flexExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const FlexDoc: React.FC = () => {
    return (
        <Doc
            title="Flex 弹性布局"
            description="常用于在一个页面内，在局部对元素之间的布局进行控制。继承自AriContainer，支持Container的所有属性。"
            examples={flexExamples}
            api={flexAPI}
        />
    );
};

export default FlexDoc;
