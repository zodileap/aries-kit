import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicTag, ClosableDemo, ColorTagDemo, IconTagDemo, BorderedTagDemo, CombinationDemo } from './codes/tag';
import { sourceMap } from './codes/source-map';

export const tagExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础标签的用法展示。',
        demos: [{
            component: BasicTag,
            sourceCode: sourceMap['tag']['BasicTag']
        }]
    },
    closable: {
        title: '可关闭标签',
        key: 'closable',
        description: '可以关闭的标签，点击关闭图标可触发 onClose 事件。',
        demos: [{
            component: ClosableDemo,
            sourceCode: sourceMap['tag']['ClosableDemo']
        }]
    },
    color: {
        title: '多彩标签',
        key: 'color',
        description: '我们提供了多种预设色彩的标签样式，通过 color 属性可以设置为内置的颜色或自定义颜色。',
        demos: [{
            component: ColorTagDemo,
            sourceCode: sourceMap['tag']['ColorTagDemo']
        }]
    },
    icon: {
        title: '图标标签',
        key: 'icon',
        description: '可以通过 icon 属性在标签内嵌入图标。',
        demos: [{
            component: IconTagDemo,
            sourceCode: sourceMap['tag']['IconTagDemo']
        }]
    },
    bordered: {
        title: '边框标签',
        key: 'bordered',
        description: '设置 bordered 属性可以给标签添加边框。',
        demos: [{
            component: BorderedTagDemo,
            sourceCode: sourceMap['tag']['BorderedTagDemo']
        }]
    },
    combination: {
        title: '组合使用',
        key: 'combination',
        description: '将图标、颜色、边框和可关闭等特性组合使用。',
        demos: [{
            component: CombinationDemo,
            sourceCode: sourceMap['tag']['CombinationDemo']
        }]
    }
};

export const tagAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '标签的文本内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'closable',
            desc: '是否可关闭',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'color',
            desc: '标签颜色，可以是预设色彩或自定义色值',
            type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | string",
            default: '-'
        },
        {
            param: 'icon',
            desc: '标签前图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'bordered',
            desc: '是否有边框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'size',
            desc: '标签大小',
            type: "'sm' | 'default' | 'lg'",
            default: "'default'"
        },
        {
            param: 'active',
            desc: '是否处于激活状态',
            type: 'boolean',
            default: 'false'
        }
    ],
    events: [
        {
            event: 'onClose',
            desc: '关闭标签时的回调',
            type: '(e: React.MouseEvent<HTMLElement>) => void'
        },
        {
            event: 'onClick',
            desc: '点击标签时的回调',
            type: '(e: React.MouseEvent<HTMLElement>) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(tagExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const TagDoc: React.FC = () => {
    return (
        <Doc
            title="Tag 标签"
            description="用于标记和选择的标签组件。"
            examples={tagExamples}
            api={tagAPI}
        />
    );
};

export default TagDoc;
