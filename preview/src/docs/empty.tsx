import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicEmpty, CustomIconDemo, CustomImageDemo } from './codes/empty';
import { sourceMap } from './codes/source-map';

export const emptyExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的空状态组件用法，显示默认图标和文本。',
        demos: [{
            component: BasicEmpty,
            sourceCode: sourceMap['empty']['BasicEmpty']
        }]
    },
    customIcon: {
        title: '自定义图标',
        key: 'custom-icon',
        description: '通过icon属性自定义显示的图标。',
        demos: [{
            component: CustomIconDemo,
            sourceCode: sourceMap['empty']['CustomIconDemo']
        }]
    },
    customImage: {
        title: '自定义图片',
        key: 'custom-image',
        description: '通过image属性使用自定义图片替代图标。',
        demos: [{
            component: CustomImageDemo,
            sourceCode: sourceMap['empty']['CustomImageDemo']
        }]
    }
};

export const emptyAPI: DocAPI = {
    props: [
        {
            param: 'description',
            desc: '空状态的描述文本',
            type: 'string',
            default: '暂无数据'
        },
        {
            param: 'icon',
            desc: '自定义图标名称',
            type: 'string',
            default: 'empty-box'
        },
        {
            param: 'image',
            desc: '自定义图片路径',
            type: 'string',
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
            desc: '自定义底部内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(emptyExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const EmptyDoc: React.FC = () => {
    return (
        <Doc
            title="Empty 空状态"
            description="用于在页面中展示空状态时的占位提示。"
            examples={emptyExamples}
            api={emptyAPI}
        />
    );
};

export default EmptyDoc;
