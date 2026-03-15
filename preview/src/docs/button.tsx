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
            desc: '未传 children 时显示的文案内容',
            type: 'string',
            default: '-'
        },
        {
            param: 'icon',
            desc: '显示在按钮内容前的内置图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'shape',
            desc: '控制按钮外轮廓为默认、圆形或圆角样式',
            type: "'default' | 'circle' | 'round'",
            default: 'default'
        },
        {
            param: 'size',
            desc: '控制按钮高度、内边距和图标字号规格',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'color',
            desc: '按钮颜色风格。默认会为彩色按钮应用同色系浅底；ghost按钮主要影响文字与图标颜色',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'brand'",
            default: 'default'
        },
        {
            param: 'useColorText',
            desc: '是否让彩色按钮文字跟随 color 使用同色系高对比方案；关闭后回退为中性色文字',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'type',
            desc: '按钮显示样式',
            type: "'default' | 'dashed' | 'link' | 'text'",
            default: 'default'
        },
        {
            param: 'htmlType',
            desc: '原生 button 元素的 type 属性，影响表单提交与重置行为',
            type: "'button' | 'submit' | 'reset'",
            default: 'button'
        },
        {
            param: 'disabled',
            desc: '禁用后按钮不可点击，也不会触发交互状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'loading',
            desc: '进入加载态后显示 loading 图标，并阻止重复触发',
            type: 'boolean',
            default: 'false'
        },
        {
            param: "ghost",
            desc: "启用透明背景样式，颜色主要作用于边框、文字和图标",
            type: "boolean",
            default: "false"
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
            event: 'onClick',
            desc: '点击组件根节点时触发',
            type: '(e: React.MouseEvent<HTMLButtonElement>) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '直接渲染到按钮内部的自定义内容',
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
