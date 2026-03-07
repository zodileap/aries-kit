import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    AlignmentTypography,
    BasicTypography,
    ColorTypography,
    ContentTypography,
    EventTypography,
    OtherPropsTypography,
    StyleTypography,
} from './codes/typography';
import { sourceMap } from './codes/source-map';

export const typographyExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '展示不同变体（variant）的排版样式，包括标题、正文、说明文字等。',
        demos: [{
            component: BasicTypography,
            sourceCode: sourceMap['typography']['BasicTypography']
        }]
    },
    color: {
        title: '文本颜色',
        key: 'color',
        description: '通过 color 属性设置文本颜色，支持主题色、语义色等。',
        demos: [{
            component: ColorTypography,
            sourceCode: sourceMap['typography']['ColorTypography']
        }]
    },
    style: {
        title: '字体样式',
        key: 'font-style',
        description: '通过 bold 和 italic 属性设置加粗与斜体，支持同时开启。',
        demos: [{
            component: StyleTypography,
            sourceCode: sourceMap['typography']['StyleTypography']
        }]
    },
    alignment: {
        title: '对齐方式',
        key: 'alignment',
        description: '通过 align 属性设置文本对齐方式，支持左对齐、居中、右对齐、两端对齐等。',
        demos: [{
            component: AlignmentTypography,
            sourceCode: sourceMap['typography']['AlignmentTypography']
        }]
    },
    overflow: {
        title: '文本溢出与样式控制',
        key: 'text-overflow',
        description: '通过设置whiteSpace、overflow、textOverflow和lineClamp属性控制文本的换行、溢出和显示方式。',
        demos: [{
            component: OtherPropsTypography,
            sourceCode: sourceMap['typography']['OtherPropsTypography']
        }]
    },
    events: {
        title: '事件处理',
        key: 'text-events',
        description: '文本组件支持点击、鼠标移入移出等事件，可用于创建可交互的文本元素。',
        demos: [{
            component: EventTypography,
            sourceCode: sourceMap['typography']['EventTypography']
        }]
    },
    content: {
        title: '内容来源与裁切',
        key: 'content',
        description: '展示 value、children、自定义类名以及文本裁切行为。',
        demos: [{
            component: ContentTypography,
            sourceCode: sourceMap['typography']['ContentTypography']
        }]
    }
};

export const typographyAPI: DocAPI = {
    props: [
        { param: 'value', desc: '文本内容', type: 'string | number | React.ReactNode', default: '-' },
        { param: 'variant', desc: '文本变体样式', type: "'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'overline'", default: "'body'" },
        { param: 'color', desc: '文本颜色', type: "'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit'", default: "'inherit'" },
        { param: 'align', desc: '文本对齐方式', type: "'inherit' | 'left' | 'center' | 'right' | 'justify'", default: "'inherit'" },
        { param: 'gutterBottom', desc: '是否在底部添加间距', type: 'boolean', default: 'false' },
        { param: 'whiteSpace', desc: '文本换行方式', type: "'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'", default: "'normal'" },
        { param: 'overflow', desc: '超出容器的处理方式', type: "'visible' | 'hidden' | 'scroll' | 'auto'", default: "'visible'" },
        { param: 'textOverflow', desc: '文本溢出时的处理方式', type: "'clip' | 'ellipsis'", default: "'clip'" },
        { param: 'lineClamp', desc: '文本行数限制', type: 'number', default: '-' },
        { param: 'noWrap', desc: '是否不换行，超出显示省略号', type: 'boolean', default: 'false' },
        { param: 'bold', desc: '是否加粗文本', type: 'boolean', default: 'false' },
        { param: 'italic', desc: '是否使用斜体文本', type: 'boolean', default: 'false' },
        { param: 'className', desc: '额外的 CSS 类名', type: 'string', default: '-' },
        { param: 'style', desc: '内联样式', type: 'React.CSSProperties', default: '-' },
        { param: 'children', desc: '子元素，通常是文本内容', type: 'React.ReactNode', default: '-' }
    ],
    events: [
        { event: 'onClick', desc: '点击事件', type: '(e: React.MouseEvent) => void' },
        { event: 'onMouseEnter', desc: '鼠标进入事件', type: '(e: React.MouseEvent) => void' },
        { event: 'onMouseLeave', desc: '鼠标离开事件', type: '(e: React.MouseEvent) => void' },
        { event: 'onMouseDown', desc: '鼠标按下事件', type: '(e: React.MouseEvent) => void' },
        { event: 'onMouseUp', desc: '鼠标松开事件', type: '(e: React.MouseEvent) => void' }
    ],
    slots: []
};

export const anchors = Object.values(typographyExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const TypographyDoc: React.FC = () => {
    return (
        <Doc
            title="Typography 排版"
            description="用于展示各类文本内容的基础组件，支持多种文本类型和样式。提供了标题、正文、说明等多种文本样式，并支持控制文本溢出、换行方式和事件处理。整合了原有的Text组件功能，提供统一的文本显示解决方案。"
            examples={typographyExamples}
            api={typographyAPI}
        />
    );
};

export default TypographyDoc;
