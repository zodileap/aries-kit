import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicSidebar, DirectionDemo, FileTreeDemo, ActivityBarPositionDemo, EventHandlingDemo, TreeViewComponentDemo } from './codes/sidebar';
import { sourceMap } from './codes/source-map';

export const sidebarExamples: Record<string, DocExample> = {
    // basic: {
    //     title: '基础用法',
    //     key: 'basic-usage',
    //     description: '最基础的侧边栏组件用法，展示简单的自定义内容。',
    //     demos: [{
    //         component: BasicSidebar,
    //         sourceCode: sourceMap['sidebar']['BasicSidebar']
    //     }]
    // },
    // direction: {
    //     title: '方向',
    //     key: 'direction',
    //     description: '通过direction属性控制侧边栏显示在左侧或右侧。',
    //     demos: [{
    //         component: DirectionDemo,
    //         sourceCode: sourceMap['sidebar']['DirectionDemo']
    //     }]
    // },
    // activityBarPosition: {
    //     title: '活动栏',
    //     key: 'activity-bar-position',
    //     description: '使用活动栏来切换不同的侧边栏内容。通过activityBarPosition属性控制活动栏显示在顶部、底部或侧边。',
    //     demos: [{
    //         component: ActivityBarPositionDemo,
    //         sourceCode: sourceMap['sidebar']['ActivityBarPositionDemo']
    //     }]
    // },
    fileTree: {
        title: '文件树',
        key: 'file-tree',
        description: '展示文件树结构的侧边栏。',
        demos: [{
            component: FileTreeDemo,
            sourceCode: sourceMap['sidebar']['FileTreeDemo']
        }]
    },
    // eventHandling: {
    //     title: '事件处理',
    //     key: 'event-handling',
    //     description: '处理节点选择和活动栏切换事件。',
    //     demos: [{
    //         component: EventHandlingDemo,
    //         sourceCode: sourceMap['sidebar']['EventHandlingDemo']
    //     }]
    // },
    // treeViewComponent: {
    //     title: '树视图组件',
    //     key: 'tree-view-component',
    //     description: '使用 AriSidebar.TreeView 和 AriSidebar.TreeNode 组件构建自定义树视图。',
    //     demos: [{
    //         component: TreeViewComponentDemo,
    //         sourceCode: sourceMap['sidebar']['TreeViewComponentDemo']
    //     }]
    // }
};

export const sidebarAPI: DocAPI = {
    props: [
        {
            param: 'direction',
            desc: '侧边栏方向',
            type: "'left' | 'right'",
            default: "'left'"
        },
        {
            param: 'activityBarPosition',
            desc: '活动栏位置',
            type: "'top' | 'bottom' | 'side'",
            default: "'side'"
        },
        {
            param: 'activityBarItems',
            desc: '活动栏项目列表',
            type: 'AriActivityBarItem[]',
            default: '-'
        },
        {
            param: 'content',
            desc: '自定义内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'width',
            desc: '侧边栏宽度',
            type: 'number',
            default: '300'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onNodeSelect',
            desc: '节点选中回调',
            type: '(node: AriTreeNode) => void'
        },
        {
            event: 'onActivityChange',
            desc: '活动栏项目切换回调',
            type: '(item: AriActivityBarItem) => void'
        }
    ],
    slots: []
};

export const treeViewAPI: DocAPI = {
    props: [
        {
            param: 'tree',
            desc: '树结构数据',
            type: 'AriTreeNode[]',
            default: '[]'
        },
        {
            param: 'selectedKey',
            desc: '当前选中的节点键值',
            type: 'string',
            default: '-'
        },
        {
            param: 'expandedKeys',
            desc: '展开的节点键值数组',
            type: 'string[]',
            default: '[]'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onNodeSelect',
            desc: '节点选中回调',
            type: '(node: AriTreeNode) => void'
        },
        {
            event: 'onHeightChange',
            desc: '高度变化回调',
            type: '(height: number) => void'
        },
        {
            event: 'onExpandedKeysChange',
            desc: '展开状态变化回调',
            type: '(expandedKeys: string[]) => void'
        }
    ],
    slots: []
};

export const treeNodeAPI: DocAPI = {
    props: [
        {
            param: 'node',
            desc: '节点数据',
            type: 'AriTreeNode',
            default: '-'
        },
        {
            param: 'selectedKey',
            desc: '当前选中的节点键值',
            type: 'string',
            default: '-'
        },
        {
            param: 'expandedKeys',
            desc: '展开的节点键值数组',
            type: 'string[]',
            default: '[]'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onNodeSelect',
            desc: '节点选中回调',
            type: '(node: AriTreeNode) => void'
        },
        {
            event: 'onExpandedKeysChange',
            desc: '展开状态变化回调',
            type: '(expandedKeys: string[]) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(sidebarExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' },
    { key: 'tree-view-api', label: 'TreeView API' },
    { key: 'tree-node-api', label: 'TreeNode API' }
]);

const SidebarDoc: React.FC = () => {
    return (
        <Doc
            title="Sidebar 侧边栏"
            description="用于展示应用程序的导航、文件树等内容的侧边栏组件，支持自定义内容和活动栏。提供 TreeView 和 TreeNode 子组件用于自定义树结构视图。"
            examples={sidebarExamples}
            api={sidebarAPI}
            extraProps={[
                {
                    title: 'TreeView API',
                    content: 'treeViewAPI'
                },
                {
                    title: 'TreeNode API',
                    content: 'treeNodeAPI'
                }
            ]}
        />
    );
};

export default SidebarDoc;
