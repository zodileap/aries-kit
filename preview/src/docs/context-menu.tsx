import React from 'react';
import Doc from '../layout/doc';
import { DocAPI, DocExample } from '../layout/types';
import {
    BasicContextMenu,
    ContextMenuBehaviorDemo,
    ContextMenuControlDemo,
    CustomContextMenu,
    DetachedContextMenu,
} from './codes/context-menu';
import { sourceMap } from './codes/source-map';

export const contextMenuExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '在触发区域右键打开菜单，默认使用 AriMenu 渲染菜单项。',
        demos: [{
            component: BasicContextMenu,
            sourceCode: sourceMap['context-menu']?.['BasicContextMenu'],
        }],
    },
    customOverlay: {
        title: '自定义菜单',
        key: 'custom-overlay',
        description: '使用 renderOverlay 自定义菜单内容，可组合表单和按钮等任意组件。',
        demos: [{
            component: CustomContextMenu,
            sourceCode: sourceMap['context-menu']?.['CustomContextMenu'],
        }],
    },
    detachedTarget: {
        title: '独立目标挂载',
        key: 'detached-target',
        description: '通过 targetRef 将右键菜单挂载到外部目标元素，不需要由 ContextMenu 额外包裹节点。',
        demos: [{
            component: DetachedContextMenu,
            sourceCode: sourceMap['context-menu']?.['DetachedContextMenu'],
        }],
    },
    behavior: {
        title: '挂载与关闭策略',
        key: 'behavior',
        description: '展示默认打开、自定义挂载容器、偏移量、安全边距以及 overlay 面板样式能力。',
        demos: [{
            component: ContextMenuBehaviorDemo,
            sourceCode: sourceMap['context-menu']?.['ContextMenuBehaviorDemo'],
        }],
    },
    control: {
        title: '菜单控制选项',
        key: 'control',
        description: '展示 menuProps、选中后保留菜单与禁用状态。',
        demos: [{
            component: ContextMenuControlDemo,
            sourceCode: sourceMap['context-menu']?.['ContextMenuControlDemo'],
        }],
    },
};

export const contextMenuAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '触发右键菜单的子元素（未使用 targetRef 时作为默认触发区域）',
            type: 'ReactNode',
            default: '-',
        },
        {
            param: 'targetRef',
            desc: '外部触发目标的引用，传入后将监听该元素右键事件且不额外包裹触发区域',
            type: 'RefObject<HTMLElement | null>',
            default: '-',
        },
        {
            param: 'items',
            desc: '默认菜单项配置（未传 overlay/renderOverlay 时使用）',
            type: 'AriMenuItemProps[]',
            default: '[]',
        },
        {
            param: 'menuProps',
            desc: '默认 AriMenu 的透传参数',
            type: 'Omit<AriMenuProps, "items" | "onSelect">',
            default: '-',
        },
        {
            param: 'overlay',
            desc: '自定义菜单内容（静态节点）',
            type: 'ReactNode',
            default: '-',
        },
        {
            param: 'renderOverlay',
            desc: '自定义菜单渲染函数（可拿到 close 和 position）',
            type: '(context) => ReactNode',
            default: '-',
        },
        {
            param: 'open',
            desc: '是否打开菜单（受控）',
            type: 'boolean',
            default: '-',
        },
        {
            param: 'defaultOpen',
            desc: '默认是否打开菜单（非受控）',
            type: 'boolean',
            default: 'false',
        },
        {
            param: 'disabled',
            desc: '是否禁用右键菜单',
            type: 'boolean',
            default: 'false',
        },
        {
            param: 'closeOnSelect',
            desc: '默认菜单选中后是否自动关闭',
            type: 'boolean',
            default: 'true',
        },
        {
            param: 'closeOnClickOutside',
            desc: '点击外部是否自动关闭',
            type: 'boolean',
            default: 'true',
        },
        {
            param: 'closeOnEscape',
            desc: '按 ESC 是否自动关闭',
            type: 'boolean',
            default: 'true',
        },
        {
            param: 'closeOnScroll',
            desc: '滚动时是否自动关闭',
            type: 'boolean',
            default: 'false',
        },
        {
            param: 'offset',
            desc: '菜单偏移量（兼容字段，推荐使用 mouseGap）',
            type: '{ x?: number; y?: number }',
            default: '-',
        },
        {
            param: 'mouseGap',
            desc: '菜单与鼠标点击点的间距（单位 px）',
            type: '{ x?: number; y?: number }',
            default: '{ x: 4, y: -4 }',
        },
        {
            param: 'safePadding',
            desc: '菜单贴边时的安全间距',
            type: 'number',
            default: '--z-inset-xs',
        },
        {
            param: 'portalContainer',
            desc: '菜单挂载容器',
            type: 'HTMLElement | null',
            default: 'document.body',
        },
        {
            param: 'overlayClassName',
            desc: '菜单面板自定义类名',
            type: 'string',
            default: '-',
        },
        {
            param: 'overlayStyle',
            desc: '菜单面板自定义样式',
            type: 'CSSProperties',
            default: '-',
        },
    ],
    events: [
        {
            event: 'onOpenChange',
            desc: '菜单打开状态变化回调',
            type: '(open: boolean) => void',
        },
        {
            event: 'onSelect',
            desc: '默认 AriMenu 菜单项选中回调',
            type: '(key: string, item: AriMenuItemProps) => void',
        },
        {
            event: 'onContextMenu',
            desc: '触发区域右键事件回调',
            type: '(event: React.MouseEvent<HTMLElement>) => void',
        },
    ],
    slots: [],
};

export const anchors = Object.values(contextMenuExamples).map((example) => ({
    key: example.key,
    label: example.title,
})).concat([
    { key: 'context-menu-api', label: 'ContextMenu API' },
]);

const ContextMenuDoc: React.FC = () => {
    return (
        <Doc
            title='ContextMenu 右键菜单'
            description='用于在目标区域右键打开操作菜单。默认渲染 AriMenu，同时支持自定义菜单内容。'
            examples={contextMenuExamples}
            api={contextMenuAPI}
        />
    );
};

export default ContextMenuDoc;
