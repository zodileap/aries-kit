import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicPortal, CustomContainerPortal } from './codes/portal';
import { sourceMap } from './codes/source-map';

export const portalExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的Portal用法，将内容传送到document.body，常用于模态框、对话框等需要脱离当前DOM层级的场景。',
        demos: [{
            component: BasicPortal,
            sourceCode: sourceMap['portal']['BasicPortal']
        }]
    },
    customContainer: {
        title: '自定义容器',
        key: 'custom-container',
        description: '可以通过container属性指定内容要传送到的DOM节点。',
        demos: [{
            component: CustomContainerPortal,
            sourceCode: sourceMap['portal']['CustomContainerPortal']
        }]
    }
};

export const portalAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '要传送的内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'container',
            desc: '目标容器元素，内容将被渲染到该元素内',
            type: 'HTMLElement | null',
            default: 'document.body'
        }
    ],
    events: [],
    slots: []
};

export const anchors = Object.values(portalExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'portal-api', label: 'Portal API' }
]);

const PortalDoc: React.FC = () => {
    return (
        <Doc
            title="Portal 传送门"
            description="Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案，常用于模态框、对话框、提示框等需要脱离当前DOM层级的场景。"
            examples={portalExamples}
            api={portalAPI}
        />
    );
};

export default PortalDoc;