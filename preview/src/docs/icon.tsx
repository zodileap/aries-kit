import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicIcon, SizeDemo, ColorDemo, StrokeWidthDemo, StyleVariantDemo, AnimationDemo, StateDemo } from './codes/icon';
import { sourceMap } from './codes/source-map';
import AllIconsDemo from './icon/all-icons';

export const iconExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '使用内置图标名称或者外部链接来显示不同的图标。',
        demos: [{
            component: BasicIcon,
            sourceCode: sourceMap['icon']['BasicIcon']
        }]
    },
    size: {
        title: '图标尺寸',
        key: 'size',
        description: '通过size属性设置图标大小，支持xs、sm、default、lg、xl、xxl。',
        demos: [{
            component: SizeDemo,
            sourceCode: sourceMap['icon']['SizeDemo']
        }]
    },
    color: {
        title: '图标颜色',
        key: 'color',
        description: '使用color属性设置图标颜色，支持所有CSS颜色值。',
        demos: [{
            component: ColorDemo,
            sourceCode: sourceMap['icon']['ColorDemo']
        }]
    },
    strokeWidth: {
        title: '线条粗细',
        key: 'stroke-width',
        description: '通过strokeWidth属性设置图标线条的粗细程度，值越大线条越粗。',
        demos: [{
            component: StrokeWidthDemo,
            sourceCode: sourceMap['icon']['StrokeWidthDemo']
        }]
    },
    styleVariant: {
        title: '样式变体',
        key: 'style-variant',
        description: '使用styleVariant属性设置图标的视觉样式，包括clickable、filled、outlined、circular。',
        demos: [{
            component: StyleVariantDemo,
            sourceCode: sourceMap['icon']['StyleVariantDemo']
        }]
    },
    animation: {
        title: '动画效果',
        key: 'animation',
        description: '使用animation属性为图标添加动画效果，包括spinning、pulse、shake。',
        demos: [{
            component: AnimationDemo,
            sourceCode: sourceMap['icon']['AnimationDemo']
        }]
    },
    state: {
        title: '状态',
        key: 'state',
        description: '使用state属性设置图标的交互状态，包括disabled、loading、error、success。',
        demos: [{
            component: StateDemo,
            sourceCode: sourceMap['icon']['StateDemo']
        }]
    },
    allIcons: {
        title: '图标集合',
        key: 'all-icons',
        description: '展示所有内置的图标集合。每个图标都显示其对应的名称，便于使用时参考。',
        demos: [{
            component: AllIconsDemo,
            sourceCode: ""
        }]
    }
};

export const iconAPI: DocAPI = {
    props: [
        {
            param: 'name',
            desc: '使用的内置图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'fullPath',
            desc: '外部图标路径',
            type: 'string',
            default: '-'
        },
        {
            param: 'size',
            desc: '图标大小',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'color',
            desc: '图标颜色',
            type: 'string',
            default: 'currentColor'
        },
        {
            param: 'styleVariant',
            desc: '样式变体',
            type: "'clickable' | 'filled' | 'outlined' | 'circular'",
            default: '-'
        },
        {
            param: 'animation',
            desc: '动画效果',
            type: "'spinning' | 'pulse' | 'shake'",
            default: '-'
        },
        {
            param: 'state',
            desc: '状态',
            type: "'disabled' | 'loading' | 'error' | 'success'",
            default: '-'
        },
        {
            param: 'strokeWidth',
            desc: '图标线条粗细',
            type: 'number',
            default: '1'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '直接作用于组件根节点的内联样式对象',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击组件根节点时触发',
            type: '(e: React.MouseEvent) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(iconExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const IconDoc: React.FC = () => {
    return (
        <Doc
            title="Icon 图标"
            description="提供了一套常用的图标集合，支持自定义尺寸、颜色等属性。"
            examples={iconExamples}
            api={iconAPI}
        />
    );
};

export default IconDoc;
