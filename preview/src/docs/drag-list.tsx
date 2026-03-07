import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
    BasicExample, 
    GapExample, 
    CustomRenderExample, 
    DisabledExample,
    EmptyStateExample,
    HandleConfigExample,
    ComplexDataExample
} from './codes/drag-list';
import { sourceMap } from './codes/source-map';

/**
 * 拖拽列表组件文档
 * 
 * Example:
 * {@link https://aries-react.dev/docs/DragList}
 */

export const dragListExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '拖拽列表的基本使用方法，支持通过拖拽操作重新排列列表项顺序。',
        demos: [{
            component: BasicExample,
            sourceCode: sourceMap['drag-list']['BasicExample']
        }]
    },
    gap: {
        title: '间距设置',
        key: 'gap',
        description: '通过gap属性设置列表项之间的间距，支持7种预设间距大小。',
        demos: [{
            component: GapExample,
            sourceCode: sourceMap['drag-list']['GapExample']
        }]
    },
    customRender: {
        title: '自定义渲染',
        key: 'custom-render',
        description: '使用renderItem属性自定义列表项的渲染内容，支持复杂的UI结构。',
        demos: [{
            component: CustomRenderExample,
            sourceCode: sourceMap['drag-list']['CustomRenderExample']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '支持全局禁用和单项禁用，禁用状态下无法进行拖拽操作。',
        demos: [{
            component: DisabledExample,
            sourceCode: sourceMap['drag-list']['DisabledExample']
        }]
    },
    handleConfig: {
        title: '拖拽手柄配置',
        key: 'handle-config',
        description: '自定义拖拽手柄的显示和图标，提供更好的交互体验。',
        demos: [{
            component: HandleConfigExample,
            sourceCode: sourceMap['drag-list']['HandleConfigExample']
        }]
    },
    emptyState: {
        title: '空状态处理',
        key: 'empty-state',
        description: '当列表为空时的显示状态，支持自定义空状态内容。',
        demos: [{
            component: EmptyStateExample,
            sourceCode: sourceMap['drag-list']['EmptyStateExample']
        }]
    },
    complexData: {
        title: '复杂数据操作',
        key: 'complex-data',
        description: '演示在实际业务场景中如何处理复杂的拖拽排序需求。',
        demos: [{
            component: ComplexDataExample,
            sourceCode: sourceMap['drag-list']['ComplexDataExample']
        }]
    }
};

export const dragListAPI: DocAPI = {
    props: [
        {
            param: 'items',
            desc: '拖拽列表的数据项',
            type: 'AriDragListItem[]',
            default: '-'
        },
        {
            param: 'onSortChange',
            desc: '排序变化回调函数',
            type: '(newItems: AriDragListItem[], fromIndex: number, toIndex: number) => void',
            default: '-'
        },
        {
            param: 'renderItem',
            desc: '自定义渲染函数',
            type: '(item: AriDragListItem, index: number, isDragging: boolean, isDragOver: boolean) => ReactNode',
            default: '-'
        },
        {
            param: 'gap',
            desc: '列表项间距大小',
            type: "'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
            default: 'xs'
        },
        {
            param: 'disabled',
            desc: '是否禁用整个列表',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showDragHandle',
            desc: '是否显示拖拽手柄',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'dragHandleIcon',
            desc: '拖拽手柄图标名称',
            type: 'string',
            default: 'drag_indicator'
        },
        {
            param: 'emptyContent',
            desc: '空状态显示内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'allowEmpty',
            desc: '是否允许显示空列表',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'className',
            desc: 'CSS类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '内联样式',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onSortChange',
            desc: '拖拽排序完成时触发',
            type: '(newItems: AriDragListItem[], fromIndex: number, toIndex: number) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(dragListExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const DragListDoc: React.FC = () => {
    return (
        <Doc
            title="DragList 拖拽列表"
            description="可视化拖拽排序列表组件，支持拖拽操作重新排列列表项顺序，提供丰富的交互反馈和灵活的自定义选项。"
            examples={dragListExamples}
            api={dragListAPI}
        />
    );
};

export default DragListDoc;