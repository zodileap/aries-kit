import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicButton, ShapeDemo, SizeDemo, ColorDemo, TypeDemo } from './codes/button';
import { sourceMap } from './codes/source-map';


export const buttonExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的按钮组件用法，支持文本和图标。',
        demos: [{
            component: BasicButton,
            sourceCode: sourceMap['button']['BasicButton']
        }]
    },
    shape: {
        title: '按钮形状',
        key: 'shape',
        description: '支持默认、圆形和圆角三种形状。',
        demos: [{
            component: ShapeDemo,
            sourceCode: sourceMap['button']['ShapeDemo']
        }]
    },
    size: {
        title: '按钮尺寸',
        key: 'size',
        description: '提供四种尺寸：小、默认、大。',
        demos: [{
            component: SizeDemo,
            sourceCode: sourceMap['button']['SizeDemo']
        }]
    },
    color: {
        title: '按钮颜色',
        key: 'color',
        description: '支持主题色和默认色。',
        demos: [{
            component: ColorDemo,
            sourceCode: sourceMap['button']['ColorDemo']
        }]
    },
    type: {
        title: '按钮类型',
        key: 'type',
        description: '提供虚线、链接和文本三种类型。',
        demos: [{
            component: TypeDemo,
            sourceCode: sourceMap['button']['TypeDemo']
        }]
    }   
};

export const buttonAPI: DocAPI = {
    props: [
        {
            param: 'label',
            desc: '按钮文本',
            type: 'string',
            default: '-'
        },
        {
            param: 'icon',
            desc: '按钮图标',
            type: 'string',
            default: '-'
        },
        {
            param: 'shape',
            desc: '按钮形状',
            type: "'default' | 'circle' | 'round'",
            default: 'default'
        },
        {
            param: 'size',
            desc: '按钮尺寸',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'color',
            desc: '按钮颜色风格（普通按钮影响背景色；ghost按钮影响文字与图标颜色）',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'brand'",
            default: 'default'
        },
        {
            param: 'type',
            desc: '按钮显示样式',
            type: "'default' | 'dashed' | 'link' | 'text'",
            default: 'default'
        },
        {
            param: 'htmlType',
            desc: 'HTML按钮类型',
            type: "'button' | 'submit' | 'reset'",
            default: 'button'
        },
        {
            param: 'disabled',
            desc: '是否禁用按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'loading',
            desc: '是否显示加载状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: "ghost",
            desc: "幽灵按钮（透明背景）",
            type: "boolean",
            default: "false"
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击事件',
            type: '(e: React.MouseEvent<HTMLButtonElement>) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '按钮内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(buttonExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const ButtonDoc: React.FC = () => {
    return (
        <Doc
            title="Button 按钮"
            description="用于触发操作的基础按钮组件，支持多种形状和尺寸。"
            examples={buttonExamples}
            api={buttonAPI}
        />
    );
};

export default ButtonDoc;
