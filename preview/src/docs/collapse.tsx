import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicCollapse, ShadowDemo, DefaultExpandedDemo } from './codes/collapse';
import { sourceMap } from './codes/source-map';

export const collapseExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '可折叠的内容区域，用于组织和隐藏复杂的内容结构。',
        demos: [{
            component: BasicCollapse,
            sourceCode: sourceMap['collapse']['BasicCollapse']
        }]
    },
    shadow: {
        title: '阴影效果',
        key: 'shadow',
        description: '通过shadowMode属性控制折叠面板阴影的显示方式。',
        demos: [{
            component: ShadowDemo,
            sourceCode: sourceMap['collapse']['ShadowDemo']
        }]
    },
    defaultExpanded: {
        title: '默认展开',
        key: 'default-expanded',
        description: '通过defaultExpanded属性控制面板的默认展开状态。',
        demos: [{
            component: DefaultExpandedDemo,
            sourceCode: sourceMap['collapse']['DefaultExpandedDemo']
        }]
    },
};

export const collapseAPI: DocAPI = {
    props: [
        {
            param: 'collapseContent',
            desc: '折叠区域的内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'defaultExpanded',
            desc: '默认是否展开',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'shadowMode',
            desc: '阴影显示模式',
            type: 'Ari.Widget.ShadowMode',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onCollapse',
            desc: '折叠状态改变时的回调',
            type: '(expanded: boolean) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '触发区域内容',
            type: 'React.ReactNode'
        },
        {
            name: 'collapseContent',
            desc: '折叠区域内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(collapseExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const CollapseDoc: React.FC = () => {
    return (
        <Doc
            title="Collapse 折叠面板"
            description="可折叠的内容区域，用于组织和隐藏复杂的内容结构。继承自AriContainer"
            examples={collapseExamples}
            api={collapseAPI}
        />
    );
};

export default CollapseDoc;
