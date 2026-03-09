import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicModal,
    CustomModal,
    FullscreenModal,
    ModalLifecycle,
    PositionModal,
    SizeModal,
} from './codes/modal';
import { sourceMap } from './codes/source-map';

export const modalExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的对话框，展示标题、内容和底部按钮区域。',
        demos: [{
            component: BasicModal,
            sourceCode: sourceMap['modal']['BasicModal']
        }]
    },
    size: {
        title: '不同尺寸',
        key: 'size',
        description: '对话框支持多种预设尺寸，也可以通过传入数值自定义宽度。',
        demos: [{
            component: SizeModal,
            sourceCode: sourceMap['modal']['SizeModal']
        }]
    },
    position: {
        title: '对话框位置',
        key: 'position',
        description: '可以设置对话框显示在屏幕的顶部、中间或底部。',
        demos: [{
            component: PositionModal,
            sourceCode: sourceMap['modal']['PositionModal']
        }]
    },
    fullscreen: {
        title: '全屏显示',
        key: 'fullscreen',
        description: '对话框可以支持全屏显示，用于展示大量内容或复杂表单。',
        demos: [{
            component: FullscreenModal,
            sourceCode: sourceMap['modal']['FullscreenModal']
        }]
    },
    custom: {
        title: '自定义行为',
        key: 'custom-behavior',
        description: '可以自定义对话框的交互方式，比如是否允许点击遮罩关闭、按ESC键关闭等。',
        demos: [{
            component: CustomModal,
            sourceCode: sourceMap['modal']['CustomModal']
        }]
    },
    lifecycle: {
        title: '生命周期与遮罩',
        key: 'lifecycle',
        description: '展示关闭按钮开关、遮罩、强制挂载以及打开关闭回调。',
        demos: [{
            component: ModalLifecycle,
            sourceCode: sourceMap['modal']['ModalLifecycle']
        }]
    }
};

export const modalAPI: DocAPI = {
    props: [
        {
            param: 'visible',
            desc: '对话框是否可见',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'onClose',
            desc: '关闭对话框的回调函数',
            type: '() => void',
            default: '-'
        },
        {
            param: 'title',
            desc: '对话框标题',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'children',
            desc: '对话框内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'footer',
            desc: '对话框底部内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'closable',
            desc: '是否显示关闭按钮',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'maskClosable',
            desc: '点击遮罩层是否关闭对话框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'escClosable',
            desc: '是否在按下ESC键时关闭对话框',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'width',
            desc: '对话框宽度，可以是CSS支持的宽度值或预设尺寸',
            type: 'string | number | WidgetSize',
            default: 'default'
        },
        {
            param: 'position',
            desc: '对话框位置',
            type: 'Position',
            default: 'center'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '直接作用于组件根节点的内联样式对象',
            type: 'React.CSSProperties',
            default: '-'
        },
        {
            param: 'mask',
            desc: '是否显示遮罩层',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'maskStyle',
            desc: '自定义遮罩层样式',
            type: 'React.CSSProperties',
            default: '-'
        },
        {
            param: 'forceRender',
            desc: '是否在初始渲染时挂载对话框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'afterOpen',
            desc: '对话框打开后的回调函数',
            type: '() => void',
            default: '-'
        },
        {
            param: 'afterClose',
            desc: '对话框关闭后的回调函数',
            type: '() => void',
            default: '-'
        },
        {
            param: 'maximizable',
            desc: '是否显示最大化按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'fullscreen',
            desc: '是否以全屏方式显示对话框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'onFullscreenChange',
            desc: '全屏状态变化时的回调函数',
            type: '(fullscreen: boolean) => void',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onClose',
            desc: '关闭对话框时触发',
            type: '() => void'
        },
        {
            event: 'afterOpen',
            desc: '对话框打开后触发',
            type: '() => void'
        },
        {
            event: 'afterClose',
            desc: '对话框关闭后触发',
            type: '() => void'
        },
        {
            event: 'onFullscreenChange',
            desc: '全屏状态变化时触发',
            type: '(fullscreen: boolean) => void'
        }
    ],
    slots: [
        {
            name: 'title',
            desc: '对话框标题',
            type: 'ReactNode'
        },
        {
            name: 'children',
            desc: '对话框内容',
            type: 'ReactNode'
        },
        {
            name: 'footer',
            desc: '对话框底部内容',
            type: 'ReactNode'
        }
    ]
};

export const anchors = Object.values(modalExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const ModalDoc: React.FC = () => {
    return (
        <Doc
            title="Modal 对话框"
            description="用于在页面上展示需要用户关注的内容，通常用于确认信息或执行特定操作。对话框会在当前页面上浮层显示，引导用户进行相关操作。"
            examples={modalExamples}
            api={modalAPI}
        />
    );
};

export default ModalDoc;
