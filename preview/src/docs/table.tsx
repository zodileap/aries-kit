import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
    BasicTable, 
    StripedTable, 
    SelectableTable, 
    CustomRenderTable, 
    FixedColumnsTable, 
    BorderedTable, 
    StickyHeaderTable, 
    RowEventsTable,
    SizeDemo,
    EllipsisDemo,
    MaxHeightDemo,
    PaginationDemo,
    EmptyPlaceholderDemo,
    PaginationModesDemo,
    ScrollPagingDemo,
} from './codes/table';
import { sourceMap } from './codes/source-map';

export const tableExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的表格用法，展示数据内容。',
        demos: [{
            component: BasicTable,
            sourceCode: sourceMap['table']['BasicTable']
        }]
    },
    striped: {
        title: '斑马纹',
        key: 'striped',
        description: '使用 striped 属性可以创建带有斑马纹的表格。',
        demos: [{
            component: StripedTable,
            sourceCode: sourceMap['table']['StripedTable']
        }]
    },
    bordered: {
        title: '边框',
        key: 'bordered',
        description: '通过 bordered 属性控制表格是否显示边框。',
        demos: [{
            component: BorderedTable,
            sourceCode: sourceMap['table']['BorderedTable']
        }]
    },
    selectable: {
        title: '可选择',
        key: 'selectable',
        description: '通过 selectable 属性启用行选择功能。',
        demos: [{
            component: SelectableTable,
            sourceCode: sourceMap['table']['SelectableTable']
        }]
    },
    customRender: {
        title: '自定义渲染',
        key: 'custom-render',
        description: '使用 column.render 函数自定义单元格的渲染内容。',
        demos: [{
            component: CustomRenderTable,
            sourceCode: sourceMap['table']['CustomRenderTable']
        }]
    },
    rowEvents: {
        title: '行属性与事件',
        key: 'row-events',
        description: '使用 onRow 属性为表格行添加自定义事件处理函数和样式，例如点击、悬停等交互效果。',
        demos: [{
            component: RowEventsTable,
            sourceCode: sourceMap['table']['RowEventsTable']
        }]
    },
    fixedColumns: {
        title: '固定列',
        key: 'fixed-columns',
        description: '通过 fixed 属性可以固定列的位置，常用于数据量较多的表格。可选值为 true、"left"、"right"。',
        demos: [{
            component: FixedColumnsTable,
            sourceCode: sourceMap['table']['FixedColumnsTable']
        }]
    },
    stickyHeader: {
        title: '粘性表头',
        key: 'sticky-header',
        description: '通过 stickyHeader 属性可以让表头在滚动时固定在顶部，提高大型表格的可用性。',
        demos: [{
            component: StickyHeaderTable,
            sourceCode: sourceMap['table']['StickyHeaderTable']
        }]
    },
    size: {
        title: '表格尺寸',
        key: 'size',
        description: '通过 size 属性设置表格尺寸。支持 xs（紧凑）、default（默认）、xl（宽松）三种尺寸。',
        demos: [{
            component: SizeDemo,
            sourceCode: ''
        }]
    },
    ellipsis: {
        title: '文本省略',
        key: 'ellipsis',
        description: '通过 ellipsis 属性启用文本省略功能，超出部分显示省略号，鼠标悬停显示完整内容。',
        demos: [{
            component: EllipsisDemo,
            sourceCode: ''
        }]
    },
    maxHeight: {
        title: '固定高度',
        key: 'max-height',
        description: '通过 maxHeight 属性限制表格内容区域高度，超出部分显示滚动条。',
        demos: [{
            component: MaxHeightDemo,
            sourceCode: ''
        }]
    },
    pagination: {
        title: '分页表格',
        key: 'pagination',
        description: '表格支持完整的分页功能，包括页码切换、每页条数调整、快速跳转等功能。',
        demos: [{
            component: PaginationDemo,
            sourceCode: sourceMap['table']['PaginationDemo']
        }, {
            title: '默认分页与分页器位置',
            component: PaginationModesDemo,
            sourceCode: sourceMap['table']['PaginationModesDemo']
        }, {
            title: '滚动分页提示',
            component: ScrollPagingDemo,
            sourceCode: sourceMap['table']['ScrollPagingDemo']
        }]
    },
    emptyPlaceholder: {
        title: '空值占位符',
        key: 'empty-placeholder',
        description: '通过 emptyPlaceholder 属性自定义空值的占位符显示。',
        demos: [{
            component: EmptyPlaceholderDemo,
            sourceCode: sourceMap['table']['EmptyPlaceholderDemo']
        }]
    }
};

export const tableAPI: DocAPI = {
    props: [
        {
            param: 'data',
            desc: '表格数据',
            type: 'T[]',
            default: '[]'
        },
        {
            param: 'columns',
            desc: '表格列配置（必需）',
            type: 'AriTableColumn<T, K>[]',
            default: '必需参数'
        },
        {
            param: 'title',
            desc: '表格标题',
            type: 'string',
            default: '-'
        },
        {
            param: 'bordered',
            desc: '是否显示边框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'striped',
            desc: '是否显示斑马纹',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'selectable',
            desc: '是否可选择行',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'onSelectionChange',
            desc: '选中行变化时的回调',
            type: '(selectedItems: T[]) => void',
            default: '-'
        },
        {
            param: 'size',
            desc: '表格尺寸',
            type: "'xs' | 'default' | 'xl'",
            default: 'default'
        },
        {
            param: 'stickyHeader',
            desc: '是否启用粘性表头',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'parentContainer',
            desc: '父容器引用，如果提供，表格会计算父容器的可用高度并用作最大高度。优先级高于 maxHeight',
            type: 'RefObject<HTMLElement>',
            default: '-'
        },
        {
            param: 'maxHeight',
            desc: '表格内容区域的最大高度，设置后表格将在内部滚动',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'emptyPlaceholder',
            desc: '单元格为空时显示的占位符',
            type: 'string',
            default: "'-'"
        },
        {
            param: 'current',
            desc: '当前页码',
            type: 'number',
            default: '-'
        },
        {
            param: 'defaultCurrent',
            desc: '默认页码',
            type: 'number',
            default: '1'
        },
        {
            param: 'pageSize',
            desc: '每页条数',
            type: 'number',
            default: '-'
        },
        {
            param: 'defaultPageSize',
            desc: '默认每页条数',
            type: 'number',
            default: '20'
        },
        {
            param: 'showPagination',
            desc: '是否显示分页器',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'paginationPosition',
            desc: '分页器位置',
            type: "'top' | 'bottom' | 'both'",
            default: "'bottom'"
        },
        {
            param: 'showSizeChanger',
            desc: '是否显示每页条数选择器',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'pageSizeOptions',
            desc: '每页条数选择器可选值',
            type: 'number[]',
            default: '[10, 20, 50, 100]'
        },
        {
            param: 'showQuickJumper',
            desc: '是否显示快速跳转',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'showTotal',
            desc: '是否显示总数',
            type: '(total: number, range: [number, number]) => React.ReactNode',
            default: '-'
        },
        {
            param: 'onStickyChange',
            desc: '粘性状态变化的回调函数',
            type: '(isSticky: boolean) => void',
            default: '-'
        },
        {
            param: 'enableScrollPaging',
            desc: '是否启用滚动分页',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'scrollThreshold',
            desc: '触发滚动加载的阈值（像素）',
            type: 'number',
            default: '200'
        },
        {
            param: 'hasMore',
            desc: '是否还有更多数据',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'loadingText',
            desc: '加载中显示的文本',
            type: 'string',
            default: '加载中...'
        },
        {
            param: 'noMoreText',
            desc: '没有更多数据时显示的文本',
            type: 'string',
            default: '没有更多数据'
        },
    ],
    events: [
        {
            event: 'onSelectionChange',
            desc: '选中行变化时的回调',
            type: '(selectedItems: T[]) => void'
        },
        {
            event: 'onStickyChange',
            desc: '表头粘性状态变化时的回调',
            type: '(isSticky: boolean) => void'
        },
        {
            event: 'onPageChange',
            desc: '页码改变时的回调',
            type: '(page: number, pageSize: number) => void'
        },
        {
            event: 'onPageSizeChange',
            desc: '每页条数改变时的回调',
            type: '(current: number, size: number) => void'
        },
        {
            event: 'onRow',
            desc: '自定义行属性，可以为表格行设置额外的属性',
            type: '(record: T, index: number) => React.HTMLAttributes<HTMLTableRowElement>'
        },
        {
            event: 'onScrollLoad',
            desc: '滚动加载时的回调函数',
            type: '() => void'
        }
    ],
    slots: [],
    columnProps: [
        {
            param: 'title',
            desc: '列标题',
            type: 'string',
            default: '-'
        },
        {
            param: 'key',
            desc: '列数据对应的键值',
            type: 'keyof T | K',
            default: '-'
        },
        {
            param: 'width',
            desc: '列宽度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'maxWidth',
            desc: '列最大宽度，当内容超出此宽度时，将显示省略号并在hover时显示tooltip',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'align',
            desc: '列内容对齐方式',
            type: '"left" | "center" | "right"',
            default: '"left"'
        },
        {
            param: 'fixed',
            desc: '列是否固定，可选值为 true、"left"、"right"',
            type: 'boolean | "left" | "right"',
            default: '-'
        },
        {
            param: 'ellipsis',
            desc: '是否启用文本省略，超出部分将被省略号替代，并在hover时显示tooltip',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'render',
            desc: '自定义列渲染函数',
            type: '(value: any, record: T, index: number) => React.ReactNode',
            default: '-'
        }
    ]
};

export const anchors = Object.values(tableExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const TableDoc: React.FC = () => {
    return (
        <Doc
            title="Table 表格"
            description="用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。"
            examples={tableExamples}
            api={tableAPI}
            extraProps={[
                {
                    title: '列属性',
                    content: 'columnProps'
                }
            ]}
        />
    );
};

export default TableDoc;
