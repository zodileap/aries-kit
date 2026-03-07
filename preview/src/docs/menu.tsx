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
            desc: '默认选中的菜单项key',
            type: 'string',
            default: '-'
        },
        {
            param: 'selectedKey',
            desc: '当前选中的菜单项key（受控）',
            type: 'string',
            default: '-'
        },
        {
            param: 'mode',
            desc: '菜单展开方式',
            type: "'vertical' | 'horizontal'",
            default: 'vertical'
        },
        {
            param: 'expandIconPosition',
            desc: '子菜单展开箭头位置',
            type: "'right' | 'left' | 'none'",
            default: 'right'
        },
        {
            param: 'defaultExpandedKeys',
            desc: '默认展开的子菜单key数组',
            type: 'string[]',
            default: '[]'
        },
        {
            param: 'expandedKeys',
            desc: '展开的子菜单key数组（受控）',
            type: 'string[]',
            default: '-'
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
            event: 'onSelect',
            desc: '菜单项选中回调',
            type: '(key: string, item: AriMenuItemProps) => void'
        },
        {
            event: 'onExpand',
            desc: '子菜单展开/收起回调',
            type: '(expandedKeys: string[]) => void'
        }
    ]
};

export const menuItemAPI: DocAPI = {
    slots: [],
    props: [
        {
            param: 'key',
            desc: '菜单项的唯一标识',
            type: 'string',
            default: '-'
        },
        {
            param: 'label',
            desc: '菜单项标题，支持字符串或 ReactNode',
            type: 'string | ReactNode',
            default: '-'
        },
        {
            param: 'icon',
            desc: '菜单项的图标名称',
            type: 'string',
            default: '-'
        },
        {
            param: 'fillIcon',
            desc: '激活时的图标名称，如果没有设置，默认使用icon并添加_fill后缀',
            type: 'string',
            default: '-'
        },
        {
            param: 'iconAnimation',
            desc: '菜单项图标动画',
            type: "'spinning' | 'pulse' | 'shake'",
            default: '-'
        },
        {
            param: 'iconState',
            desc: '菜单项图标状态',
            type: "'disabled' | 'loading' | 'error' | 'success'",
            default: '-'
        },
        {
            param: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'children',
            desc: '子菜单项',
            type: 'MenuItem[]',
            default: '-'
        },
        {
            param: 'textPosition',
            desc: '文本相对于图标的位置',
            type: "'right' | 'left' | 'top' | 'bottom'",
            default: "'right'"
        },
        {
            param: 'isGroup',
            desc: '是否为分组标签',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'meta',
            desc: '菜单项右侧信息区域（如时间、状态）',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'actions',
            desc: '菜单项右侧操作区（如图钉、删除按钮）',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'showActionsOnHover',
            desc: '是否仅在 hover 时显示 actions（会自动隐藏 meta）',
            type: 'boolean',
            default: 'false'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击回调',
            type: '() => void'
        },
        {
            event: 'onContextMenu',
            desc: '右键菜单事件',
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
                    content: "menuItemAPI"
                }
            ]}
        />
    );
};

export default MenuDoc;
