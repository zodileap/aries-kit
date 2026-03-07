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
            desc: '子元素内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义CSS类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '自定义样式',
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
            desc: '子元素内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'appConfig',
            desc: '应用配置信息',
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
                ...appLayoutAPI,
                providerProps: appLayoutProviderAPI.props
            }}
            extraProps={[
                {
                    title: 'AppLayoutProvider Props',
                    content: 'providerProps'
                }
            ]}
        />
    );
};

export default AppLayoutDoc;
