import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicText, TextTypes, TextEvents, TextOverflow } from './codes/text';
import { sourceMap } from './codes/source-map';

export const textExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的文本组件用法，展示不同类型的文本。',
        demos: [{
            component: BasicText,
            sourceCode: sourceMap['text']['BasicText']
        }]
    },
    types: {
        title: '文本类型',
        key: 'text-types',
        description: '展示所有支持的文本类型，包括大标题、标题1-3、提要、正文等。',
        demos: [{
            component: TextTypes,
            sourceCode: sourceMap['text']['TextTypes']
        }]
    },
    overflow: {
        title: '文本溢出与样式控制',
        key: 'text-overflow',
        description: '通过设置whiteSpace、overflow和textOverflow属性控制文本的换行、溢出和显示方式。',
        demos: [{
            component: TextOverflow,
            sourceCode: sourceMap['text']['TextOverflow']
        }]
    },
    events: {
        title: '事件处理',
        key: 'text-events',
        description: '文本组件支持点击、鼠标移入移出等事件。',
        demos: [{
            component: TextEvents,
            sourceCode: sourceMap['text']['TextEvents']
        }]
    }
};

export const textAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '文本内容',
            type: 'string',
            default: '-'
        },
        {
            param: 'id',
            desc: '自定义ID',
            type: 'string',
            default: '-'
        },
        {
            param: 'whiteSpace',
            desc: '文本换行方式',
            type: '"normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line"',
            default: 'normal'
        },
        {
            param: 'overflow',
            desc: '超出容器的处理方式',
            type: '"visible" | "hidden" | "scroll" | "auto"',
            default: 'visible'
        },
        {
            param: 'textOverflow',
            desc: '文本溢出时的处理方式',
            type: '"clip" | "ellipsis"',
            default: 'clip'
        },
        {
            param: "textAlign",
            desc: "文本对齐方式",
            type: '"left" | "center" | "right" | "justify"',
            default: 'left'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击组件根节点时触发',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseEnter',
            desc: '鼠标移入组件根节点时触发',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseLeave',
            desc: '鼠标移出组件根节点时触发',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseDown',
            desc: '在组件根节点按下鼠标时触发',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseUp',
            desc: '在组件根节点松开鼠标时触发',
            type: '(e: React.MouseEvent) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(textExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const TextDoc: React.FC = () => {
    return (
        <Doc
            title="Text 文本"
            description="用于展示各类文本内容的基础组件，支持多种文本类型和样式。文本组件提供了大标题、标题、正文、说明等多种文本样式，并支持控制文本溢出、换行方式和事件处理。"
            examples={textExamples}
            api={textAPI}
        />
    );
};

export default TextDoc;
