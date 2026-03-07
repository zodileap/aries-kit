import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicTabs, DisabledTabs } from './codes/tabs';
import { sourceMap } from './codes/source-map';

export const tabsExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的标签页用法，通过items属性配置标签内容。',
        demos: [{
            component: BasicTabs,
            sourceCode: sourceMap['tabs']['BasicTabs']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '可以通过disabled属性禁用某个标签。',
        demos: [{
            component: DisabledTabs,
            sourceCode: sourceMap['tabs']['DisabledTabs']
        }]
    }
};

export const tabsAPI: DocAPI = {
    props: [
        {
            param: 'activeKey',
            desc: '当前激活标签的key',
            type: 'string',
            default: '-'
        },
        {
            param: 'items',
            desc: '标签项配置',
            type: 'TabItem[]',
            default: '[]'
        },
        {
            param: 'onChange',
            desc: '切换标签的回调函数',
            type: '(activeKey: string) => void',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
};

export const anchors = Object.values(tabsExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const TabsDoc: React.FC = () => {
    return (
        <Doc
            title="Tabs 标签页"
            description="将内容分区显示的标签页组件。"
            examples={tabsExamples}
            api={tabsAPI}
        />
    );
};

export default TabsDoc;
