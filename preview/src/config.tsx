import type { ComponentType } from 'react';
import { AriMenuItemProps } from '@ari/types';

type PreviewAnchor = {
    key: string;
    label: string;
};

type PreviewDocModule = {
    default: ComponentType;
    anchors?: PreviewAnchor[];
};

const docModules = import.meta.glob('./docs/*.tsx', {
    eager: true,
}) as Record<string, PreviewDocModule>;

const getDocModule = (name: string) => docModules[`./docs/${name}.tsx`];

const getDocComponent = (name: string) => {
    const module = getDocModule(name);

    if (!module?.default) {
        throw new Error(`Preview doc module not found: ${name}`);
    }

    return module.default;
};

const getDocAnchors = (name: string, fallback: PreviewAnchor[] = []) => {
    return getDocModule(name)?.anchors ?? fallback;
};

export const menuConfig: AriMenuItemProps[] = [
    {
        key: "base",
        label: "基础",
        children: [
            {
                key: '/icon',
                label: 'Icon 图标',
            },
            {
                key: '/typography',
                label: 'Typography 排版',
            },
            {
                key: '/link',
                label: 'Link 链接',
            },
            {
                key: '/color',
                label: 'Color 颜色',
            },
            {
                key: "/style",
                label: "Style 样式",
            }
        ]
    },
    {
        key: 'layout',
        label: '布局',
        children: [
            {
                key: "/app-layout",
                label: "AppLayout 应用布局",
            },
            {
                key: '/container',
                label: 'Container 容器',
            },
            {
                key: '/flex',
                label: 'Flex 弹性布局',
            },
            {
                key: '/grid',
                label: 'Grid 栅格',
            },
            {
                key: '/layout',
                label: 'Layout 布局区域',
            },
            {
                key: '/sticky',
                label: 'Sticky 粘性定位',
            },
            {
                key: '/fixed-size-grid',
                label: 'FixedSizeGrid 固定尺寸网格',
            },
            {
                key: '/card',
                label: 'Card 卡片',
            },
            {
                key: "/collapse",
                label: "Collapse 折叠面板",
            },
            {
                key: '/divider',
                label: 'Divider 分割线',
            },
        ]
    },
    {
        key: "button",
        label: "按钮",
        children: [
            {
                key: '/button',
                label: 'Button 按钮',
            },
            {
                key: '/social-login-button',
                label: 'Social Login Button 社交登录',
            }
        ]
    },
    {
        key: 'navigation',
        label: '导航',
        children: [
            {
                key: '/menu',
                label: 'Menu 菜单',
            },
            {
                key: '/context-menu',
                label: 'ContextMenu 右键菜单',
            },
            {
                key: '/nav',
                label: 'Nav 导航',
            },
            {
                key: '/sidebar',
                label: 'Sidebar 侧边栏',
            },
            {
                key: '/breadcrumb',
                label: 'Breadcrumb 面包屑',
            },
        ]
    },
    {
        key: 'data-entry',
        label: "数据录入",
        children: [
            {
                key: '/form',
                label: 'Form 表单',
            },
            {
                key: '/input',
                label: 'Input 输入框',
            },
            {
                key: '/radio',
                label: 'Radio 单选框',
            },
            {
                key: '/select',
                label: 'Select 选择器',
            },
            {
                key: '/checkbox',
                label: 'Checkbox 复选框',
            },
            {
                key: '/switch',
                label: 'Switch 开关',
            },
            {
                key: '/color-picker',
                label: 'ColorPicker 颜色选择器',
            },
            {
                key: '/slider',
                label: 'Slider 滑动输入条',
            },
            {
                key: '/date-picker',
                label: 'DatePicker 日期选择器', // 新增菜单项
            },
            {
                key: '/time-picker',
                label: 'TimePicker 时间选择器', // 新增菜单项
            },
            {
                key: '/richEditor',
                label: 'RichEditor 富文本编辑器',
            },
            {
                key: '/upload',
                label: 'Upload 上传',
            }
        ]
    },
    {
        key: 'data-display',
        label: "数据展示",
        children: [
            {
                key: "/avatar",
                label: "Avatar 头像",
            },
            {
                key: "/image",
                label: "Image 图片",
            },
            {
                key: "/table",
                label: "Table 表格",
            },
            {
                key: "/list",
                label: "List 列表",
            },
            {
                key: '/drag-list',
                label: 'DragList 拖拽列表',
            },
            {
                key: "/tag",
                label: "Tag 标签",
            },
            {
                key: "/tabs",
                label: "Tabs 标签页",
            },
            {
                key: '/empty',
                label: 'Empty 空状态',
            },
            {
                key: '/pagination',
                label: 'Pagination 分页',
            },
            {
                key: '/timeline',
                label: 'Timeline 时间轴',
            },
            {
                key: '/chart',
                label: 'Chart 图表',
            },
            {
                key: '/tooltip',
                label: 'Tooltip 提示框',
            },
            {
                key: '/calendar',
                label: 'Calendar 日历',
            },
            {
                key: '/carousel',
                label: 'Carousel 轮播图',
            },
            {
                key: '/statistic',
                label: 'Statistic 统计数值',
            },
            {
                key: '/progress',
                label: 'Progress 进度条',
            }
        ]
    },
    {
        key: 'feedback',
        label: "反馈",
        children: [
            {
                key: '/callout',
                label: 'Callout 告示框',
            },
            {
                key: '/message',
                label: 'Message 消息',
            },
            {
                key: '/notification',
                label: 'Notification 通知',
            },
            {
                key: '/result',
                label: 'Result 结果',
            },
            {
                key: '/modal',
                label: 'Modal 对话框',
            },
            {
                key: '/drawer',
                label: 'Drawer 抽屉',
            },
            {
                key: '/popconfirm',
                label: 'Popconfirm 气泡确认框',
            },
            {
                key: '/spin',
                label: 'Spin 加载中',
            }
        ]
    },
    {
        key: 'others',
        label: "其他",
        children: [
            {
                key: '/portal',
                label: 'Portal 传送门',
            },
            {
                key: '/particle',
                label: 'Particle 粒子系统',
            },
            {
                key: '/code',
                label: 'Code 代码',
            }
        ]
    }
];

export const routes = [
    {
        path: '/menu',
        component: getDocComponent('menu'),
        anchors: getDocAnchors('menu')
    },
    {
        path: '/context-menu',
        component: getDocComponent('context-menu'),
        anchors: getDocAnchors('context-menu')
    },
    {
        path: '/container',
        component: getDocComponent('container'),
        anchors: getDocAnchors('container')
    },
    {
        path: '/card',
        component: getDocComponent('card'),
        anchors: getDocAnchors('card')
    },
    {
        path: '/collapse',
        component: getDocComponent('collapse'),
        anchors: getDocAnchors('collapse')
    },
    {
        path: '/app-layout',
        component: getDocComponent('app-layout'),
        anchors: getDocAnchors('app-layout')
    },
    {
        path: '/button',
        component: getDocComponent('button'),
        anchors: getDocAnchors('button')
    },
    {
        path: '/social-login-button',
        component: getDocComponent('social-login-button'),
        anchors: getDocAnchors('social-login-button')
    },
    {
        path: '/divider',
        component: getDocComponent('divider'),
        anchors: getDocAnchors('divider')
    },
    {
        path: '/form',
        component: getDocComponent('form'),
        anchors: getDocAnchors('form')
    },
    {
        path: '/icon',
        component: getDocComponent('icon'),
        anchors: getDocAnchors('icon')
    },
    {
        path: '/image',
        component: getDocComponent('image'),
        anchors: getDocAnchors('image')
    },
    {
        path: '/input',
        component: getDocComponent('input'),
        anchors: getDocAnchors('input')
    },
    {
        path: '/link',
        component: getDocComponent('link'),
        anchors: getDocAnchors('link')
    },
    {
        path: '/select',
        component: getDocComponent('select'),
        anchors: getDocAnchors('select')
    },
    {
        path: '/callout',
        component: getDocComponent('callout'),
        anchors: getDocAnchors('callout')
    },
    {
        path: '/message',
        component: getDocComponent('message'),
        anchors: getDocAnchors('message')
    },
    {
        path: '/nav',
        component: getDocComponent('nav'),
        anchors: getDocAnchors('nav')
    },
    {
        path: '/sidebar',
        component: getDocComponent('sidebar'),
        anchors: getDocAnchors('sidebar')
    },
    {
        path: '/flex',
        component: getDocComponent('flex'),
        anchors: getDocAnchors('flex')
    },
    {
        path: '/table',
        component: getDocComponent('table'),
        anchors: getDocAnchors('table')
    },
    {
        path: '/tag',
        component: getDocComponent('tag'),
        anchors: getDocAnchors('tag')
    },
    {
        path: '/tabs',
        component: getDocComponent('tabs'),
        anchors: getDocAnchors('tabs')
    },
    {
        path: '/checkbox',
        component: getDocComponent('checkbox'),
        anchors: getDocAnchors('checkbox')
    },
    {
        path: '/empty',
        component: getDocComponent('empty'),
        anchors: getDocAnchors('empty')
    },
    {
        path: '/color',
        component: getDocComponent('color'),
        anchors: getDocAnchors('color')
    },
    {
        path: "/style",
        component: getDocComponent('style'),
        anchors: getDocAnchors('style')
    },
    {
        path: '/spin',
        component: getDocComponent('spin'),
        anchors: getDocAnchors('spin')
    },
    {
        path: '/grid',
        component: getDocComponent('grid'),
        anchors: getDocAnchors('grid')
    },
    {
        path: '/fixed-size-grid',
        component: getDocComponent('fixed-size-grid'),
        anchors: getDocAnchors('fixed-size-grid')
    },
    {
        path: '/pagination',
        component: getDocComponent('pagination'),
        anchors: getDocAnchors('pagination')
    },
    {
        path: '/switch',
        component: getDocComponent('switch'),
        anchors: getDocAnchors('switch')
    },
    {
        path: '/layout',
        component: getDocComponent('layout'),
        anchors: getDocAnchors('layout')
    },
    {
        path: '/sticky',
        component: getDocComponent('sticky'),
        anchors: getDocAnchors('sticky')
    },
    {
        path: '/breadcrumb',
        component: getDocComponent('breadcrumb'),
        anchors: getDocAnchors('breadcrumb')
    },
    {
        path: '/chart',
        component: getDocComponent('chart'),
        anchors: getDocAnchors('chart')
    },
    {
        path: '/radio',
        component: getDocComponent('radio'),
        anchors: getDocAnchors('radio')
    },
    {
        path: '/portal',
        component: getDocComponent('portal'),
        anchors: getDocAnchors('portal')
    },
    {
        path: '/tooltip',
        component: getDocComponent('tooltip'),
        anchors: getDocAnchors('tooltip')
    },
    {
        path: '/calendar',
        component: getDocComponent('calendar'),
        anchors: getDocAnchors('calendar')
    },
    {
        path: '/color-picker',
        component: getDocComponent('color-picker'),
        anchors: getDocAnchors('color-picker')
    },
    {
        path: '/modal',
        component: getDocComponent('modal'),
        anchors: getDocAnchors('modal')
    },
    {
        path: '/slider',
        component: getDocComponent('slider'),
        anchors: getDocAnchors('slider')
    },
    {
        path: '/drawer',
        component: getDocComponent('drawer'),
        anchors: getDocAnchors('drawer')
    },
    {
        path: '/typography',
        component: getDocComponent('typography'),
        anchors: getDocAnchors('typography')
    },
    {
        path: '/popconfirm',
        component: getDocComponent('popconfirm'),
        anchors: getDocAnchors('popconfirm')
    },
    {
        path: '/notification',
        component: getDocComponent('notification'),
        anchors: getDocAnchors('notification')
    },
    { 
        path: '/result',
        component: getDocComponent('result'),
        anchors: getDocAnchors('result')
    },
    { 
        path: '/code',
        component: getDocComponent('code'),
        anchors: getDocAnchors('code')
    },
    { 
        path: '/particle',
        component: getDocComponent('particle'),
        anchors: getDocAnchors('particle')
    },
    { 
        path: '/date-picker',
        component: getDocComponent('date-picker'),
        anchors: getDocAnchors('date-picker')
    }, // 新增路由
    { 
        path: '/time-picker',
        component: getDocComponent('time-picker'),
        anchors: getDocAnchors('time-picker')
    }, // 新增路由
    {
        path: '/carousel',
        component: getDocComponent('carousel'),
        anchors: getDocAnchors('carousel')
    }, // 新增路由
    {
        path: '/list',
        component: getDocComponent('list'),
        anchors: getDocAnchors('list')
    }, // 新增路由
    {
        path: '/statistic',
        component: getDocComponent('statistic'),
        anchors: getDocAnchors('statistic')
    }, // 新增路由
    {
        path: '/progress',
        component: getDocComponent('progress'),
        anchors: getDocAnchors('progress')
    }, // 新增路由
    {
        path: '/avatar',
        component: getDocComponent('avatar'),
        anchors: getDocAnchors('avatar')
    }, // 新增路由
    {
        path: '/timeline',
        component: getDocComponent('timeline'),
        anchors: getDocAnchors('timeline')
    }, // 新增路由
    {
        path: '/drag-list',
        component: getDocComponent('drag-list'),
        anchors: getDocAnchors('drag-list')
    },
    {
        path: '/richEditor',
        component: getDocComponent('richEditor'),
        anchors: getDocAnchors('richEditor')
    },
    {
        path: '/upload',
        component: getDocComponent('upload'),
        anchors: getDocAnchors('upload')
    }
];
