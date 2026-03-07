import React from 'react';
import { anchors as menuAnchors } from './docs/menu';
import { anchors as contextMenuAnchors } from './docs/context-menu';
import { anchors as containerAnchors } from './docs/container';
import { anchors as appLayoutAnchors } from './docs/app-layout';
import { anchors as buttonAnchors } from './docs/button';
import { anchors as socialLoginButtonAnchors } from './docs/social-login-button';
import { anchors as dividerAnchors } from './docs/divider';
import { anchors as formAnchors } from './docs/form';
import { anchors as iconAnchors } from './docs/icon';
import { anchors as imageAnchors } from './docs/image';
import { anchors as inputAnchors } from './docs/input';
import { anchors as linkAnchors } from './docs/link';
import { anchors as messageAnchors } from './docs/message';
import { anchors as navAnchors } from './docs/nav';
import { anchors as sidebarAnchors } from './docs/sidebar';
import { anchors as flexAnchors } from './docs/flex';
import { anchors as tableAnchors } from './docs/table';
import { anchors as tagAnchors } from './docs/tag';
import { anchors as selectAnchors } from './docs/select';
import { anchors as tabsAnchors } from './docs/tabs';
import { anchors as checkboxAnchors } from './docs/checkbox';
import { anchors as emptyAnchors } from './docs/empty';
import { anchors as spinAnchors } from './docs/spin';
import { anchors as gridAnchors } from './docs/grid';
import { anchors as layoutAnchors } from './docs/layout';
import { anchors as fixedSizeGridAnchors } from './docs/fixed-size-grid';
import { anchors as paginationAnchors } from './docs/pagination';
import { anchors as switchAnchors } from './docs/switch';
import { anchors as breadcrumbAnchors } from './docs/breadcrumb';
import { anchors as calloutAnchors } from './docs/callout';
import { anchors as stickyAnchors } from './docs/sticky';
import { anchors as chartAnchors } from './docs/chart';
import { anchors as radioAnchors } from './docs/radio';
import { anchors as portalAnchors } from './docs/portal';
import { anchors as tooltipAnchors } from './docs/tooltip';
import { anchors as calendarAnchors } from './docs/calendar';
import { anchors as progressAnchors } from './docs/progress';
import { anchors as colorPickerAnchors } from './docs/color-picker';
import { anchors as modalAnchors } from './docs/modal';
import { anchors as sliderAnchors } from './docs/slider';
import { anchors as drawerAnchors } from './docs/drawer';
import { anchors as typographyAnchors } from './docs/typography';
import { anchors as popconfirmAnchors } from './docs/popconfirm';
import { anchors as notificationAnchors } from './docs/notification';
import { anchors as resultAnchors } from './docs/result';
import { anchors as particleAnchors } from './docs/particle'; // 新增导入
import { anchors as codeAnchors } from './docs/code';
import { anchors as datePickerAnchors } from './docs/date-picker'; // 新增导入
import { anchors as timePickerAnchors } from './docs/time-picker'; // 新增导入
import { anchors as carouselAnchors } from './docs/carousel'; // 新增导入
import { anchors as statisticAnchors } from './docs/statistic';
import { anchors as listAnchors } from './docs/list'; // 新增导入
import { anchors as avatarAnchors } from './docs/avatar'; // 新增导入
import { anchors as timelineAnchors } from './docs/timeline'; // 新增导入
import { anchors as dragListAnchors } from './docs/drag-list';
import { anchors as uploadAnchors } from './docs/upload';
import { anchors as richEditorAnchors } from './docs/richEditor';
import { AriMenuItemProps } from '@ari/types';

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
        component: React.lazy(() => import('./docs/menu')),
        anchors: menuAnchors
    },
    {
        path: '/context-menu',
        component: React.lazy(() => import('./docs/context-menu')),
        anchors: contextMenuAnchors
    },
    {
        path: '/container',
        component: React.lazy(() => import('./docs/container')),
        anchors: containerAnchors
    },
    {
        path: '/card',
        component: React.lazy(() => import('./docs/card')),
        anchors: containerAnchors
    },
    {
        path: '/collapse',
        component: React.lazy(() => import('./docs/collapse')),
        anchors: containerAnchors
    },
    {
        path: '/app-layout',
        component: React.lazy(() => import('./docs/app-layout')),
        anchors: appLayoutAnchors
    },
    {
        path: '/button',
        component: React.lazy(() => import('./docs/button')),
        anchors: buttonAnchors
    },
    {
        path: '/social-login-button',
        component: React.lazy(() => import('./docs/social-login-button')),
        anchors: socialLoginButtonAnchors
    },
    {
        path: '/divider',
        component: React.lazy(() => import('./docs/divider')),
        anchors: dividerAnchors
    },
    {
        path: '/form',
        component: React.lazy(() => import('./docs/form')),
        anchors: formAnchors
    },
    {
        path: '/icon',
        component: React.lazy(() => import('./docs/icon')),
        anchors: iconAnchors
    },
    {
        path: '/image',
        component: React.lazy(() => import('./docs/image')),
        anchors: imageAnchors
    },
    {
        path: '/input',
        component: React.lazy(() => import('./docs/input')),
        anchors: inputAnchors
    },
    {
        path: '/link',
        component: React.lazy(() => import('./docs/link')),
        anchors: linkAnchors
    },
    {
        path: '/select',
        component: React.lazy(() => import('./docs/select')),
        anchors: selectAnchors
    },
    {
        path: '/callout',
        component: React.lazy(() => import('./docs/callout')),
        anchors: calloutAnchors
    },
    {
        path: '/message',
        component: React.lazy(() => import('./docs/message')),
        anchors: messageAnchors
    },
    {
        path: '/nav',
        component: React.lazy(() => import('./docs/nav')),
        anchors: navAnchors
    },
    {
        path: '/sidebar',
        component: React.lazy(() => import('./docs/sidebar')),
        anchors: sidebarAnchors
    },
    {
        path: '/flex',
        component: React.lazy(() => import('./docs/flex')),
        anchors: flexAnchors
    },
    {
        path: '/table',
        component: React.lazy(() => import('./docs/table')),
        anchors: tableAnchors
    },
    {
        path: '/tag',
        component: React.lazy(() => import('./docs/tag')),
        anchors: tagAnchors
    },
    {
        path: '/tabs',
        component: React.lazy(() => import('./docs/tabs')),
        anchors: tabsAnchors
    },
    {
        path: '/checkbox',
        component: React.lazy(() => import('./docs/checkbox')),
        anchors: checkboxAnchors
    },
    {
        path: '/empty',
        component: React.lazy(() => import('./docs/empty')),
        anchors: emptyAnchors
    },
    {
        path: '/color',
        component: React.lazy(() => import('./docs/color')),
        anchors: emptyAnchors
    },
    {
        path: "/style",
        component: React.lazy(() => import('./docs/style')),
        anchors: emptyAnchors
    },
    {
        path: '/spin',
        component: React.lazy(() => import('./docs/spin')),
        anchors: spinAnchors
    },
    {
        path: '/grid',
        component: React.lazy(() => import('./docs/grid')),
        anchors: gridAnchors
    },
    {
        path: '/fixed-size-grid',
        component: React.lazy(() => import('./docs/fixed-size-grid')),
        anchors: fixedSizeGridAnchors
    },
    {
        path: '/pagination',
        component: React.lazy(() => import('./docs/pagination')),
        anchors: paginationAnchors
    },
    {
        path: '/switch',
        component: React.lazy(() => import('./docs/switch')),
        anchors: switchAnchors
    },
    {
        path: '/layout',
        component: React.lazy(() => import('./docs/layout')),
        anchors: layoutAnchors
    },
    {
        path: '/sticky',
        component: React.lazy(() => import('./docs/sticky')),
        anchors: stickyAnchors
    },
    {
        path: '/breadcrumb',
        component: React.lazy(() => import('./docs/breadcrumb')),
        anchors: breadcrumbAnchors
    },
    {
        path: '/chart',
        component: React.lazy(() => import('./docs/chart')),
        anchors: chartAnchors
    },
    {
        path: '/radio',
        component: React.lazy(() => import('./docs/radio')),
        anchors: radioAnchors
    },
    {
        path: '/portal',
        component: React.lazy(() => import('./docs/portal')),
        anchors: portalAnchors
    },
    {
        path: '/tooltip',
        component: React.lazy(() => import('./docs/tooltip')),
        anchors: tooltipAnchors
    },
    {
        path: '/calendar',
        component: React.lazy(() => import('./docs/calendar')),
        anchors: calendarAnchors
    },
    {
        path: '/color-picker',
        component: React.lazy(() => import('./docs/color-picker')),
        anchors: colorPickerAnchors
    },
    {
        path: '/modal',
        component: React.lazy(() => import('./docs/modal')),
        anchors: modalAnchors
    },
    {
        path: '/slider',
        component: React.lazy(() => import('./docs/slider')),
        anchors: sliderAnchors
    },
    {
        path: '/drawer',
        component: React.lazy(() => import('./docs/drawer')),
        anchors: drawerAnchors
    },
    {
        path: '/typography',
        component: React.lazy(() => import('./docs/typography')),
        anchors: typographyAnchors
    },
    {
        path: '/popconfirm',
        component: React.lazy(() => import('./docs/popconfirm')),
        anchors: popconfirmAnchors
    },
    {
        path: '/notification',
        component: React.lazy(() => import('./docs/notification')),
        anchors: notificationAnchors
    },
    { 
        path: '/result',
        component: React.lazy(() => import('./docs/result')),
        anchors: resultAnchors
    },
    { 
        path: '/code',
        component: React.lazy(() => import('./docs/code')),
        anchors: codeAnchors
    },
    { 
        path: '/particle',
        component: React.lazy(() => import('./docs/particle')),
        anchors: particleAnchors
    },
    { 
        path: '/date-picker',
        component: React.lazy(() => import('./docs/date-picker')),
        anchors: datePickerAnchors
    }, // 新增路由
    { 
        path: '/time-picker',
        component: React.lazy(() => import('./docs/time-picker')),
        anchors: timePickerAnchors
    }, // 新增路由
    {
        path: '/carousel',
        component: React.lazy(() => import('./docs/carousel')),
        anchors: carouselAnchors
    }, // 新增路由
    {
        path: '/list',
        component: React.lazy(() => import('./docs/list')),
        anchors: listAnchors
    }, // 新增路由
    {
        path: '/statistic',
        component: React.lazy(() => import('./docs/statistic')),
        anchors: statisticAnchors
    }, // 新增路由
    {
        path: '/progress',
        component: React.lazy(() => import('./docs/progress')),
        anchors: progressAnchors
    }, // 新增路由
    {
        path: '/avatar',
        component: React.lazy(() => import('./docs/avatar')),
        anchors: avatarAnchors
    }, // 新增路由
    {
        path: '/timeline',
        component: React.lazy(() => import('./docs/timeline')),
        anchors: timelineAnchors
    }, // 新增路由
    {
        path: '/drag-list',
        component: React.lazy(() => import('./docs/drag-list')),
        anchors: dragListAnchors
    },
    {
        path: '/richEditor',
        component: React.lazy(() => import('./docs/richEditor')),
        anchors: richEditorAnchors
    },
    {
        path: '/upload',
        component: React.lazy(() => import('./docs/upload')),
        anchors: uploadAnchors
    }
];
