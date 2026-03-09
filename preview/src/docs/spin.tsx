import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicSpin, SizeDemo, FullScreenDemo, TipDemo, CustomIconDemo } from './codes/spin';
import { sourceMap } from './codes/source-map';

export const spinExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的加载中组件用法，可以控制是否显示加载状态。',
        demos: [{
            component: BasicSpin,
            sourceCode: sourceMap['spin']['BasicSpin']
        }]
    },
    size: {
        title: '尺寸大小',
        key: 'size',
        description: '通过size属性控制加载图标的大小，支持small、medium、extra-large三种尺寸。',
        demos: [{
            component: SizeDemo,
            sourceCode: sourceMap['spin']['SizeDemo']
        }]
    },
    fullScreen: {
        title: '全屏加载',
        key: 'fullscreen',
        description: '通过fullScreen属性控制加载动画是否全屏显示。',
        demos: [{
            component: FullScreenDemo,
            sourceCode: sourceMap['spin']['FullScreenDemo']
        }]
    },
    tip: {
        title: '加载提示',
        key: 'tip',
        description: '通过tip属性添加加载中的文字提示。',
        demos: [{
            component: TipDemo,
            sourceCode: sourceMap['spin']['TipDemo']
        }]
    },
    customIcon: {
        title: '自定义图标',
        key: 'custom-icon',
        description: '通过icon属性自定义加载图标。',
        demos: [{
            component: CustomIconDemo,
            sourceCode: sourceMap['spin']['CustomIconDemo']
        }]
    }
};

export const spinAPI: DocAPI = {
    props: [
        {
            param: 'spinning',
            desc: '是否为加载中状态',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'size',
            desc: '加载图标的大小',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'fullScreen',
            desc: '是否全屏显示',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'tip',
            desc: '加载中的提示文字',
            type: 'string',
            default: '-'
        },
        {
            param: 'icon',
            desc: '自定义加载图标',
            type: 'React.ReactNode',
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
            event: 'onClick',
            desc: '点击加载动画时触发的事件',
            type: '() => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '被加载包裹的内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(spinExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const SpinDoc: React.FC = () => {
    return (
        <Doc
            title="Spin 加载中"
            description="用于页面和区块的加载中状态，提供了多种尺寸和自定义选项。"
            examples={spinExamples}
            api={spinAPI}
        />
    );
};

export default SpinDoc;
