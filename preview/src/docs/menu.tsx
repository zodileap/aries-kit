import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicMenu, SubMenu, ModeDemo, IconAnimationDemo, ArrowPositionDemo, GroupDemo, SessionLikeMenu } from './codes/menu';
import { sourceMap } from './codes/source-map';

export const menuExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的菜单组件用法，展示基本的菜单项、图标、选中效果与 hover 背景反馈（含无子菜单项）。',
        demos: [{
            component: BasicMenu,
            sourceCode: sourceMap['menu']['BasicMenu']
        }]
    },
    subMenu: {
        title: '子菜单',
        key: 'sub-menu',
        description: '支持多级菜单结构，可以展开和收起子菜单。目前只支持垂直布局。',
        demos: [{
            component: SubMenu,
            sourceCode: sourceMap['menu']['SubMenu']
        }]
    },
    mode: {
        title: '菜单模式',
        key: 'mode-demo',
        description: '支持水平和垂直两种布局模式。',
        demos: [{
            component: ModeDemo,
            sourceCode: sourceMap['menu']['ModeDemo']
        }]
    },
    iconAnimation: {
        title: '图标动画',
        key: 'icon-animation',
        description: '菜单项支持配置图标动画和状态，例如 loading 场景下图标持续旋转。',
        demos: [{
            component: IconAnimationDemo,
            sourceCode: sourceMap['menu']['IconAnimationDemo']
        }]
    },
    arrowPosition: {
        title: '箭头位置',
        key: 'arrow-position',
        description: '通过 expandIconPosition 控制子菜单展开箭头显示在右侧、左侧或隐藏。',
        demos: [{
            component: ArrowPositionDemo,
            sourceCode: sourceMap['menu']['ArrowPositionDemo']
        }]
    },
    group: {
        title: '分组菜单',
        key: 'group-demo',
        description: '使用 isGroup 属性可以创建菜单分组，分组标题会以不同的样式显示。',
        demos: [{
            component: GroupDemo,
            sourceCode: sourceMap['menu']['GroupDemo']
        }]
    },
    sessionLike: {
        title: '会话列表样式',
        key: 'session-like',
        description: '支持左侧标题、右侧时间、hover 操作区和右键菜单，适合对话历史侧边栏。',
        demos: [{
            component: SessionLikeMenu,
            sourceCode: sourceMap['menu']['SessionLikeMenu'] || sourceMap['menu']['BasicMenu']
        }]
    }
};

export const menuAPI: DocAPI = {
    slots: [],
    props: [
        {
            param: 'items',
            desc: '菜单项配置数组（必需）',
            type: 'AriMenuItemProps[]',
            default: '必需参数'
        },
        {
            param: 'defaultSelectedKey',
            desc: '非受控模式下默认选中的菜单项 key，仅初始化时生效',
            type: 'string',
            default: '-'
        },
        {
            param: 'selectedKey',
            desc: '受控模式下当前选中的菜单项 key',
            type: 'string',
            default: '-'
        },
        {
            param: 'mode',
            desc: '控制菜单按纵向列表或横向导航栏方式布局',
            type: "'vertical' | 'horizontal'",
            default: 'vertical'
        },
        {
            param: 'expandIconPosition',
            desc: '控制含子菜单项的展开箭头显示在左侧、右侧或隐藏',
            type: "'right' | 'left' | 'none'",
            default: 'right'
        },
        {
            param: 'defaultExpandedKeys',
            desc: '非受控模式下默认展开的子菜单 key 数组，仅初始化时生效',
            type: 'string[]',
            default: '[]'
        },
        {
            param: 'expandedKeys',
            desc: '受控模式下当前展开的子菜单 key 数组',
            type: 'string[]',
            default: '-'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onSelect',
            desc: '点击可选菜单项并完成选中后触发',
            type: '(key: string, item: AriMenuItemProps) => void'
        },
        {
            event: 'onExpand',
            desc: '子菜单展开状态变化后返回最新展开 key 数组',
            type: '(expandedKeys: string[]) => void'
        }
    ]
};

export const menuItemAPI: DocAPI = {
    slots: [],
    props: [
        {
            param: 'key',
            desc: '用于区分当前菜单项并驱动选中与展开状态的唯一标识',
            type: 'string',
            default: '-'
        },
        {
            param: 'label',
            desc: '菜单项主内容，支持字符串或 ReactNode',
            type: 'string | ReactNode',
            default: '-'
        },
        {
            param: 'icon',
            desc: '默认状态下显示在菜单项前的内置图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'fillIcon',
            desc: '菜单项激活时使用的图标名称；未传时会尝试基于 icon 推导',
            type: 'string',
            default: '-'
        },
        {
            param: 'iconAnimation',
            desc: '为菜单项图标附加持续动画效果',
            type: "'spinning' | 'pulse' | 'shake'",
            default: '-'
        },
        {
            param: 'iconState',
            desc: '设置菜单项图标的状态语义样式',
            type: "'disabled' | 'loading' | 'error' | 'success'",
            default: '-'
        },
        {
            param: 'disabled',
            desc: '禁用后组件不可交互',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'children',
            desc: '当前菜单项的子菜单配置；存在时该项可展开或收起',
            type: 'AriMenuItemProps[]',
            default: '-'
        },
        {
            param: 'textPosition',
            desc: '控制 label 相对 icon 的排布方向',
            type: "'right' | 'left' | 'top' | 'bottom'",
            default: "'right'"
        },
        {
            param: 'isGroup',
            desc: '将当前项渲染为分组标题，而不是可点击菜单项',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'meta',
            desc: '渲染在菜单项尾部的补充信息区域，如时间、计数或状态',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'actions',
            desc: '渲染在菜单项尾部的操作按钮区域，如更多、删除或置顶',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'showActionsOnHover',
            desc: '是否仅在 hover 时显示 actions，并在显示时隐藏 meta',
            type: 'boolean',
            default: 'false'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击当前项时触发的回调函数',
            type: '() => void'
        },
        {
            event: 'onContextMenu',
            desc: '在当前菜单项上触发右键菜单时回调原始事件',
            type: '(event: React.MouseEvent<HTMLElement>) => void'
        }
    ]
};

export const anchors = Object.values(menuExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' },
    { key: 'menu-item-api', label: 'MenuItem API' }
]);

const MenuDoc: React.FC = () => {
    return (
        <Doc
            title="Menu 菜单"
            description="提供导航功能的菜单组件，支持多级菜单、不同布局模式和自定义图标。MenuItem 圆角使用 lg 规格，与按钮视觉保持一致。"
            examples={menuExamples}
            api={menuAPI}
            extraProps={[
                {
                    title: 'MenuItem API',
                    data: menuItemAPI.props,
                    anchor: 'menu-item-api'
                }
            ]}
            extraEvents={[
                {
                    title: 'MenuItem API',
                    data: menuItemAPI.events
                }
            ]}
        />
    );
};

export default MenuDoc;
