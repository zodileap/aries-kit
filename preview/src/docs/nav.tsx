import React from 'react';
import { AriNav } from '@ari/components';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicNav, SubMenuNav, DisableHoverNav } from './codes/nav';
import { sourceMap } from './codes/source-map';

export const navExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的导航栏用法，展示导航项目。',
        demos: [{
            component: BasicNav,
            sourceCode: sourceMap['nav']['BasicNav']
        }]
    },
    submenu: {
        title: '子菜单',
        key: 'submenu',
        description: '带有子菜单的导航栏，支持多级导航。',
        demos: [{
            component: SubMenuNav,
            sourceCode: sourceMap['nav']['SubMenuNav']
        }]
    },
    hover: {
        title: '禁用悬停',
        key: 'disable-hover',
        description: '可以禁用悬停展开子菜单的功能。',
        demos: [{
            component: DisableHoverNav,
            sourceCode: sourceMap['nav']['DisableHoverNav']
        }]
    }
};

export const navAPI: DocAPI = {
    props: [
        {
            param: 'items',
            desc: '导航项目列表',
            type: 'AriNavItem[]',
            default: '[]'
        },
        {
            param: 'logo',
            desc: '导航栏logo组件',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'navigate',
            desc: '路由跳转函数（必需）',
            type: 'NavigateFunction',
            default: '必需参数'
        },
        {
            param: 'disableHover',
            desc: '是否禁用悬停展开',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'suffixed',
            desc: '是否显示后缀内容',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'sticky',
            desc: '是否启用粘性定位',
            type: 'boolean',
            default: 'false'
        }
    ],
    events: [
        {
            event: 'onSubMenuOpen',
            desc: '子菜单打开时的回调',
            type: '(key: string) => void'
        },
        {
            event: 'onSubMenuClose',
            desc: '子菜单关闭时的回调',
            type: '(key: string) => void'
        },
        {
            event: 'onClick',
            desc: '导航项点击事件',
            type: '(item: AriNavItem, e: React.MouseEvent) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(navExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const NavDoc: React.FC = () => {
    return (
        <Doc
            title="Nav 导航"
            description="网站导航组件，提供顶部导航栏功能，支持子菜单。"
            examples={navExamples}
            api={navAPI}
        />
    );
};

export default NavDoc;
