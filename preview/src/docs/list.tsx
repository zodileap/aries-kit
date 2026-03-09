import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
    BasicList, 
    BorderedList, 
    SizeList, 
    HeaderFooterList, 
    EmptyList, 
    LoadingList, 
    ListItemDemo,
    ComplexList
} from './codes/list';
import { sourceMap } from './codes/source-map';

export const listExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的列表，使用 dataSource 和 renderItem 属性来展示列表内容。',
        demos: [{
            component: BasicList,
            sourceCode: sourceMap['list']['BasicList']
        }]
    },
    bordered: {
        title: '带边框',
        key: 'bordered',
        description: '通过 bordered 属性设置是否显示边框。',
        demos: [{
            component: BorderedList,
            sourceCode: sourceMap['list']['BorderedList']
        }]
    },
    size: {
        title: '列表尺寸',
        key: 'size',
        description: '设置 size 属性可以显示不同尺寸的列表，支持 sm、md、lg 三种尺寸。',
        demos: [{
            component: SizeList,
            sourceCode: sourceMap['list']['SizeList']
        }]
    },
    headerFooter: {
        title: '列表头尾',
        key: 'header-footer',
        description: '通过 header 和 footer 属性设置列表的头部和底部内容。',
        demos: [{
            component: HeaderFooterList,
            sourceCode: sourceMap['list']['HeaderFooterList']
        }]
    },
    empty: {
        title: '空数据',
        key: 'empty',
        description: '当列表数据为空时，可以通过 emptyMessage 属性自定义空状态的显示内容。',
        demos: [{
            component: EmptyList,
            sourceCode: sourceMap['list']['EmptyList']
        }]
    },
    loading: {
        title: '加载状态',
        key: 'loading',
        description: '通过 loading 属性设置列表的加载状态，可以通过 loadingMessage 自定义加载提示文本。',
        demos: [{
            component: LoadingList,
            sourceCode: sourceMap['list']['LoadingList']
        }]
    },
    listItem: {
        title: '列表项操作',
        key: 'list-item',
        description: 'AriListItem 支持 actions 和 extra 属性，可以设置操作按钮和额外内容。',
        demos: [{
            component: ListItemDemo,
            sourceCode: sourceMap['list']['ListItemDemo']
        }]
    },
    complex: {
        title: '复杂列表',
        key: 'complex',
        description: '使用多种组件组合构建复杂的列表项。',
        demos: [{
            component: ComplexList,
            sourceCode: sourceMap['list']['ComplexList']
        }]
    }
};

export const listAPI: DocAPI = {
    props: [
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: 'undefined'
        },
        {
            param: 'dataSource',
            desc: '数据源，用于渲染列表项的数据数组',
            type: 'any[]',
            default: 'undefined'
        },
        {
            param: 'renderItem',
            desc: '列表项渲染函数，接收数据项和索引，返回渲染的内容',
            type: '(item: any, index: number) => React.ReactNode',
            default: 'undefined'
        },
        {
            param: 'loading',
            desc: '是否处于加载状态',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'loadingMessage',
            desc: '加载状态的提示文本',
            type: 'React.ReactNode',
            default: "'加载中...'"
        },
        {
            param: 'bordered',
            desc: '控制组件是否渲染外边框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'size',
            desc: '列表尺寸',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'"
        },
        {
            param: 'split',
            desc: '是否显示分割线',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'header',
            desc: '列表头部内容',
            type: 'React.ReactNode',
            default: 'undefined'
        },
        {
            param: 'footer',
            desc: '列表底部内容',
            type: 'React.ReactNode',
            default: 'undefined'
        },
        {
            param: 'emptyMessage',
            desc: '空数据时的提示文本',
            type: 'React.ReactNode',
            default: "'暂无数据'"
        },
        {
            param: 'children',
            desc: '子元素，当不使用dataSource时，可以直接传入子元素',
            type: 'React.ReactNode',
            default: 'undefined'
        }
    ],
    events: [],
    slots: [],
    listItemProps: [
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: 'undefined'
        },
        {
            param: 'bordered',
            desc: '控制组件是否渲染外边框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'split',
            desc: '是否显示分割线',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'actions',
            desc: '列表项的操作按钮',
            type: 'React.ReactNode[]',
            default: 'undefined'
        },
        {
            param: 'extra',
            desc: '列表项的额外内容',
            type: 'React.ReactNode',
            default: 'undefined'
        },
        {
            param: 'children',
            desc: '直接渲染在组件内部的 React 节点内容',
            type: 'React.ReactNode',
            default: 'undefined'
        }
    ]
};

export const anchors = Object.values(listExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'list-api', label: 'List API' },
    { key: 'list-item-api', label: 'ListItem API' }
]);

const ListDoc: React.FC = () => {
    return (
        <Doc
            title="List 列表"
            description="用于展示一组相关的内容，提供有序的展示形式。列表可以包含文本、图片、操作等多种元素，支持加载状态、空状态和分页等功能。"
            apiTitle="List API"
            apiAnchor="list-api"
            examples={listExamples}
            api={listAPI}
            extraProps={[
                {
                    title: 'ListItem API',
                    data: listAPI.listItemProps,
                    anchor: 'list-item-api'
                }
            ]}
        />
    );
};

export default ListDoc;
