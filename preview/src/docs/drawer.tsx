import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicDrawer,
    ContainerDrawer,
    CustomContentDrawer,
    DrawerBehaviorDrawer,
    DrawerStyleDrawer,
    PlacementDrawer,
} from './codes/drawer';
import { sourceMap } from './codes/source-map'; // 假设 sourceMap 会自动更新

export const drawerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的抽屉用法，点击按钮从右侧滑出。',
        demos: [{
            component: BasicDrawer,
            sourceCode: sourceMap['drawer']['BasicDrawer'] // 确保 sourceMap 包含 drawer
        }]
    },
    placement: {
        title: '不同位置',
        key: 'placement',
        description: '可以从上、右、下、左四个方向滑出。',
        demos: [{
            component: PlacementDrawer,
            sourceCode: sourceMap['drawer']['PlacementDrawer']
        }]
    },
    customContent: {
        title: '自定义内容',
        key: 'custom-content',
        description: '可以自定义页头、页脚等内容。',
        demos: [{
            component: CustomContentDrawer,
            sourceCode: sourceMap['drawer']['CustomContentDrawer']
        }]
    },
    container: {
        title: '渲染在指定容器',
        key: 'container',
        description: '通过 getContainer 属性，可以将抽屉渲染到指定 DOM 节点。',
        demos: [{
            component: ContainerDrawer,
            sourceCode: sourceMap['drawer']['ContainerDrawer']
        }]
    },
    style: {
        title: '样式与层级',
        key: 'style',
        description: '展示宽度、层级、关闭按钮开关和各区域样式控制。',
        demos: [{
            component: DrawerStyleDrawer,
            sourceCode: sourceMap['drawer']['DrawerStyleDrawer']
        }]
    },
    behavior: {
        title: '关闭行为',
        key: 'behavior',
        description: '展示无遮罩、遮罩点击策略与关闭后销毁内容。',
        demos: [{
            component: DrawerBehaviorDrawer,
            sourceCode: sourceMap['drawer']['DrawerBehaviorDrawer']
        }]
    }
};

export const drawerAPI: DocAPI = {
    props: [
        { param: 'visible', desc: '抽屉是否可见', type: 'boolean', default: 'false' },
        { param: 'placement', desc: '抽屉滑出的位置', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'" },
        { param: 'width', desc: '宽度 (placement 为 left 或 right 时生效)', type: 'string | number', default: "'300px'" },
        { param: 'height', desc: '高度 (placement 为 top 或 bottom 时生效)', type: 'string | number', default: "'300px'" },
        { param: 'mask', desc: '是否显示遮罩层', type: 'boolean', default: 'true' },
        { param: 'maskClosable', desc: '点击遮罩层是否允许关闭', type: 'boolean', default: 'true' },
        { param: 'closable', desc: '是否显示右上角的关闭按钮', type: 'boolean', default: 'true' },
        { param: 'title', desc: '标题内容', type: 'React.ReactNode', default: '-' },
        { param: 'footer', desc: '抽屉页脚内容', type: 'React.ReactNode', default: '-' },
        { param: 'zIndex', desc: '设置抽屉的 z-index', type: 'number', default: '1000' },
        { param: 'className', desc: '自定义 Drawer 对话框类名', type: 'string', default: '-' },
        { param: 'style', desc: '自定义 Drawer 对话框样式', type: 'React.CSSProperties', default: '-' },
        { param: 'bodyStyle', desc: '自定义 Drawer body 部分样式', type: 'React.CSSProperties', default: '-' },
        { param: 'headerStyle', desc: '自定义 Drawer header 部分样式', type: 'React.CSSProperties', default: '-' },
        { param: 'footerStyle', desc: '自定义 Drawer footer 部分样式', type: 'React.CSSProperties', default: '-' },
        { param: 'maskStyle', desc: '自定义遮罩层样式', type: 'React.CSSProperties', default: '-' },
        { param: 'getContainer', desc: '指定 Drawer 挂载的 HTML 节点，false 为挂载在当前 dom', type: 'HTMLElement | (() => HTMLElement) | false', default: 'document.body' },
        { param: 'destroyOnClose', desc: '关闭时是否销毁子元素', type: 'boolean', default: 'false' },
    ],
    events: [
        { event: 'onClose', desc: '点击遮罩层或关闭按钮的回调', type: '() => void' },
        { event: 'afterVisibleChange', desc: '切换抽屉时动画结束后的回调', type: '(visible: boolean) => void'},
    ],
    slots: [
        { name: 'children', desc: '抽屉的内容', type: 'React.ReactNode' }
    ]
};

export const anchors = Object.values(drawerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const DrawerDoc: React.FC = () => {
    return (
        <Doc
            title="Drawer 抽屉"
            description="从屏幕边缘滑出的浮层面板，用于展示辅助信息或操作。"
            examples={drawerExamples}
            api={drawerAPI}
        />
    );
};

export default DrawerDoc;
