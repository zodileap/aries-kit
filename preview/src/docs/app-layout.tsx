import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicAppLayout } from './codes/app-layout';
import { sourceMap } from './codes/source-map';

export const appLayoutExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '应用布局的基础用法，需要通过Provider提供配置信息。',
        demos: [{
            component: BasicAppLayout,
            sourceCode: sourceMap['app-layout']['BasicAppLayout']
        }]
    }
};

export const appLayoutAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '渲染在组件内部的 React 节点内容',
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
            param: 'style',
            desc: '直接作用于组件根节点的内联样式对象',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const appLayoutProviderAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '渲染在组件内部的 React 节点内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'appConfig',
            desc: '向 AppLayout 及其子组件提供应用级配置的上下文对象',
            type: 'AppConfig',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const anchors = Object.values(appLayoutExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'AppLayout API' },
    { key: 'provider-api', label: 'AppLayoutProvider API' }
]);

const AppLayoutDoc: React.FC = () => {
    return (
        <Doc
            title="AppLayout 应用布局"
            description="用于构建应用程序的基础布局框架，提供统一的布局结构和配置管理。AppLayout组件需要在AppLayoutProvider包裹下使用。"
            examples={appLayoutExamples}
            api={{
                ...appLayoutAPI
            }}
            extraProps={[
                {
                    title: 'AppLayoutProvider Props',
                    data: appLayoutProviderAPI.props,
                    anchor: 'provider-api'
                }
            ]}
        />
    );
};

export default AppLayoutDoc;
