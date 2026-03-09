import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicLayout, CustomLayout, ContextLayout } from './codes/layout';
import { sourceMap } from './codes/source-map';

export const layoutExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的布局组件，通过left、center和right属性定义三个区域的内容。',
        demos: [{
            component: BasicLayout,
            sourceCode: sourceMap['layout']['BasicLayout']
        }]
    },
    custom: {
        title: '自定义显示区域',
        key: 'custom',
        description: '通过defaultVisibleAreas属性设置默认显示的区域，可以通过onAreaVisibilityChange回调监听区域可见性变化。',
        demos: [{
            component: CustomLayout,
            sourceCode: sourceMap['layout']['CustomLayout']
        }]
    },
    context: {
        title: '使用上下文API',
        key: 'context',
        description: '可以使用LayoutContext来控制布局区域的可见性，适合在深层嵌套组件中使用。',
        demos: [{
            component: ContextLayout,
            sourceCode: sourceMap['layout'] ? sourceMap['layout']['ContextLayout'] : ''
        }]
    }
};

export const layoutAPI: DocAPI = {
    props: [
        {
            param: 'left',
            desc: '左侧区域内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'center',
            desc: '中间区域内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'right',
            desc: '右侧区域内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'defaultVisibleAreas',
            desc: '默认显示的区域',
            type: "AriLayoutArea[]",
            default: "['left', 'center', 'right']"
        },
        {
            param: 'onAreaVisibilityChange',
            desc: '区域可见性变化时的回调',
            type: '(visibleAreas: AriLayoutArea[]) => void',
            default: '-'
        },
        {
            param: 'leftWidth',
            desc: '左侧区域的宽度',
            type: 'string',
            default: "'250px'"
        },
        {
            param: 'rightWidth',
            desc: '右侧区域的宽度',
            type: 'string',
            default: "'250px'"
        }
    ],
    events: [],
    slots: [],
    contextAPI: [
        {
            param: 'visibleAreas',
            desc: '当前可见的区域',
            type: 'AriLayoutArea[]',
            default: '-'
        },
        {
            param: 'setArea',
            desc: '切换区域可见性',
            type: '(area: AriLayoutArea, visible?: boolean) => void',
            default: '-'
        },
        {
            param: 'setVisibleAreas',
            desc: '设置所有区域可见性',
            type: '(areas: AriLayoutArea[]) => void',
            default: '-'
        },
        {
            param: 'isVisible',
            desc: '检查区域是否可见',
            type: '(area: AriLayoutArea) => boolean',
            default: '-'
        }
    ]
}

export const anchors = Object.values(layoutExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'layout-api', label: 'Layout API' },
    { key: 'context-api', label: 'Context API' }
]);

const LayoutDoc: React.FC = () => {
    return (
        <Doc
            title="Layout 布局"
            description="Layout布局组件提供了左中右三区域的布局方式，可以灵活控制各区域的显示和隐藏。适用于需要动态调整页面布局结构的场景。"
            apiTitle="Layout API"
            apiAnchor="layout-api"
            examples={layoutExamples}
            api={layoutAPI}
            extraProps={[
                {
                    title: 'Context API',
                    data: layoutAPI.contextAPI,
                    anchor: 'context-api'
                }
            ]}
        />
    );
};

export default LayoutDoc;
