import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicSwitch, SizeSwitch, DisabledSwitch, LoadingSwitch, TextSwitch } from './codes/switch';
import { sourceMap } from './codes/source-map';

export const switchExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的开关组件，点击切换状态。',
        demos: [{
            component: BasicSwitch,
            sourceCode: sourceMap['switch']['BasicSwitch']
        }]
    },
    size: {
        title: '尺寸大小',
        key: 'size',
        description: '提供三种尺寸的开关：小、默认和大。',
        demos: [{
            component: SizeSwitch,
            sourceCode: sourceMap['switch']['SizeSwitch']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过设置disabled属性禁用开关。',
        demos: [{
            component: DisabledSwitch,
            sourceCode: sourceMap['switch']['DisabledSwitch']
        }]
    },
    loading: {
        title: '加载状态',
        key: 'loading',
        description: '通过设置loading属性显示开关的加载状态。',
        demos: [{
            component: LoadingSwitch,
            sourceCode: sourceMap['switch']['LoadingSwitch']
        }]
    },
    text: {
        title: '文字说明',
        key: 'text',
        description: '带有文字说明的开关组件，更清晰地表达开关的含义。',
        demos: [{
            component: TextSwitch,
            sourceCode: sourceMap['switch']['TextSwitch']
        }]
    }
};

export const switchAPI: DocAPI = {
    props: [
        {
            param: 'checked',
            desc: '开关状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'defaultChecked',
            desc: '默认状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'disabled',
            desc: '禁用状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'loading',
            desc: '加载状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'size',
            desc: '尺寸大小',
            type: "'sm' | 'default' | 'lg'",
            default: "'default'"
        },
        {
            param: 'checkedValue',
            desc: '选中时的值',
            type: 'T',
            default: 'true'
        },
        {
            param: 'uncheckedValue',
            desc: '未选中时的值',
            type: 'T',
            default: 'false'
        },
        {
            param: 'checkedChildren',
            desc: '选中时的内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'unCheckedChildren',
            desc: '非选中时的内容',
            type: 'React.ReactNode',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '状态变化时的回调',
            type: '(value: T, event: React.MouseEvent) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(switchExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const SwitchDoc: React.FC = () => {
    return (
        <Doc
            title="Switch 开关"
            description="开关组件，用于在两种状态间切换，表示开启或关闭某个功能。"
            examples={switchExamples}
            api={switchAPI}
        />
    );
};

export default SwitchDoc;
