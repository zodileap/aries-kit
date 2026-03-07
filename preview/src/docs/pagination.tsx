import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicPagination, SimplePagination, JumperPagination, SizeChangerPagination, DisabledPagination, TotalInfoPagination } from './codes/pagination';
import { sourceMap } from './codes/source-map';

export const paginationExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的分页组件，展示页码、上一页、下一页按钮。',
        demos: [{
            component: BasicPagination,
            sourceCode: sourceMap['pagination']['BasicPagination']
        }]
    },
    simple: {
        title: '简洁模式',
        key: 'simple-mode',
        description: '简洁版本的分页，只显示较少的页码按钮。',
        demos: [{
            component: SimplePagination,
            sourceCode: sourceMap['pagination']['SimplePagination']
        }]
    },
    jumper: {
        title: '快速跳转',
        key: 'quick-jumper',
        description: '通过设置showQuickJumper属性，可以显示快速跳转输入框。',
        demos: [{
            component: JumperPagination,
            sourceCode: sourceMap['pagination']['JumperPagination']
        }]
    },
    sizeChanger: {
        title: '每页数量',
        key: 'page-size',
        description: '可以通过showSizeChanger属性设置每页显示条数选择器。',
        demos: [{
            component: SizeChangerPagination,
            sourceCode: sourceMap['pagination']['SizeChangerPagination']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过设置disabled属性禁用分页组件。',
        demos: [{
            component: DisabledPagination,
            sourceCode: sourceMap['pagination']['DisabledPagination']
        }]
    },
    total: {
        title: '总数展示',
        key: 'total-display',
        description: '通过设置showTotal属性可以自定义显示总条数和当前数据范围。',
        demos: [{
            component: TotalInfoPagination,
            sourceCode: sourceMap['pagination']['TotalInfoPagination']
        }]
    }
};

export const paginationAPI: DocAPI = {
    props: [
        {
            param: 'current',
            desc: '当前页码',
            type: 'number',
            default: '1'
        },
        {
            param: 'defaultCurrent',
            desc: '默认的当前页码',
            type: 'number',
            default: '1'
        },
        {
            param: 'pageSize',
            desc: '每页条数',
            type: 'number',
            default: '10'
        },
        {
            param: 'defaultPageSize',
            desc: '默认的每页条数',
            type: 'number',
            default: '10'
        },
        {
            param: 'total',
            desc: '数据总数',
            type: 'number',
            default: '0'
        },
        {
            param: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'simple',
            desc: '是否显示较少的页码按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showQuickJumper',
            desc: '是否显示快速跳转',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showSizeChanger',
            desc: '是否显示每页条数选择器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'pageSizeOptions',
            desc: '每页条数选项',
            type: 'number[]',
            default: '[10, 20, 50, 100]'
        },
        {
            param: 'showTotal',
            desc: '是否显示总数',
            type: '(total: number, range: [number, number]) => React.ReactNode',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '页码或每页条数改变的回调',
            type: '(page: number, pageSize: number) => void'
        },
        {
            event: 'onShowSizeChange',
            desc: '每页条数变化的回调',
            type: '(current: number, size: number) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(paginationExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const PaginationDoc: React.FC = () => {
    return (
        <Doc
            title="Pagination 分页"
            description="分页组件，提供按页码浏览数据的功能，支持自定义每页条数、快速跳转等特性。"
            examples={paginationExamples}
            api={paginationAPI}
        />
    );
};

export default PaginationDoc;
