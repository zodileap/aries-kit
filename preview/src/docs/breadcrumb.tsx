import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicBreadcrumb, WithIconBreadcrumb, WithLinkBreadcrumb, CustomSeparatorBreadcrumb, WithClickEventBreadcrumb } from './codes/breadcrumb';
import { sourceMap } from './codes/source-map';

export const breadcrumbExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的面包屑组件，显示网站的层级结构。',
        demos: [{
            component: BasicBreadcrumb,
            sourceCode: sourceMap['breadcrumb']['BasicBreadcrumb']
        }]
    },
    withIcon: {
        title: '带图标的面包屑',
        key: 'with-icon',
        description: '可以在面包屑项目中添加图标。',
        demos: [{
            component: WithIconBreadcrumb,
            sourceCode: sourceMap['breadcrumb']['WithIconBreadcrumb']
        }]
    },
    withLink: {
        title: '带链接的面包屑',
        key: 'with-link',
        description: '可以在面包屑项目中添加链接，点击可跳转到对应页面。',
        demos: [{
            component: WithLinkBreadcrumb,
            sourceCode: sourceMap['breadcrumb']['WithLinkBreadcrumb']
        }]
    },
    customSeparator: {
        title: '自定义分隔符',
        key: 'custom-separator',
        description: '可以自定义分隔符，支持字符串或React节点。',
        demos: [{
            component: CustomSeparatorBreadcrumb,
            sourceCode: sourceMap['breadcrumb']['CustomSeparatorBreadcrumb']
        }]
    },
    withClickEvent: {
        title: '点击事件',
        key: 'click-event',
        description: '可以为每个面包屑项添加点击回调函数。',
        demos: [{
            component: WithClickEventBreadcrumb,
            sourceCode: sourceMap['breadcrumb']['WithClickEventBreadcrumb']
        }]
    }
};

export const breadcrumbAPI: DocAPI = {
    props: [
        {
            param: 'items',
            desc: '按层级顺序渲染的面包屑项数组',
            type: 'AriBreadcrumbItem[]',
            default: '[]'
        },
        {
            param: 'separator',
            desc: '相邻面包屑项之间展示的分隔内容',
            type: 'string | React.ReactNode',
            default: '/'
        },
        {
            param: 'showIcon',
            desc: '是否在每个面包屑项前展示其 icon',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const breadcrumbItemAPI: DocAPI = {
    props: [
        {
            param: 'key',
            desc: '用于区分当前面包屑项的唯一标识',
            type: 'string',
            default: '-'
        },
        {
            param: 'label',
            desc: '当前项展示的文本内容',
            type: 'string',
            default: '-'
        },
        {
            param: 'href',
            desc: '点击当前项时跳转的目标地址；未提供时按普通文本渲染',
            type: 'string',
            default: '-'
        },
        {
            param: 'icon',
            desc: '使用的内置图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'disabled',
            desc: '禁用当前项的点击与跳转行为',
            type: 'boolean',
            default: 'false'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击当前项时触发的回调函数',
            type: '() => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(breadcrumbExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' },
    { key: 'breadcrumb-item-api', label: 'BreadcrumbItem API' }
]);

const BreadcrumbDoc: React.FC = () => {
    return (
        <Doc
            title="Breadcrumb 面包屑"
            description="面包屑是辅助导航模式，用于显示当前页面在系统层级结构中的位置，并能够快速返回之前的任何一个层级。"
            examples={breadcrumbExamples}
            api={breadcrumbAPI}
            extraProps={[
                {
                    title: 'BreadcrumbItem API',
                    data: breadcrumbItemAPI.props,
                    anchor: 'breadcrumb-item-api'
                }
            ]}
            extraEvents={[
                {
                    title: 'BreadcrumbItem API',
                    data: breadcrumbItemAPI.events
                }
            ]}
        />
    );
};

export default BreadcrumbDoc;
