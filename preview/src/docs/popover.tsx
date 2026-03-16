import React from 'react';
import Doc from '../layout/doc';
import { DocAPI, DocExample } from '../layout/types';
import {
    BasicPopover,
    PositionPopover,
    TriggerPopover,
    ControlledPopover,
    WidthPopover,
} from './codes/popover';
import { sourceMap } from './codes/source-map';

export const popoverExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: 'Popover 用于承载轻量操作面板、更多菜单或说明卡片，默认通过点击触发。',
        demos: [{
            component: BasicPopover,
            sourceCode: sourceMap['popover']['BasicPopover']
        }]
    },
    position: {
        title: '不同位置',
        key: 'position',
        description: '支持上下左右以及角落对齐的位置配置。',
        demos: [{
            component: PositionPopover,
            sourceCode: sourceMap['popover']['PositionPopover']
        }]
    },
    trigger: {
        title: '触发方式',
        key: 'trigger',
        description: '支持 click、hover 和 manual 三种触发方式。manual 模式由外部状态完全控制。',
        demos: [{
            component: TriggerPopover,
            sourceCode: sourceMap['popover']['TriggerPopover']
        }]
    },
    controlled: {
        title: '受控模式',
        key: 'controlled',
        description: '通过 open / onOpenChange 控制弹层状态，并可关闭点击外部自动收起。',
        demos: [{
            component: ControlledPopover,
            sourceCode: sourceMap['popover']['ControlledPopover']
        }]
    },
    width: {
        title: '宽度控制',
        key: 'width',
        description: '通过 matchTriggerWidth 和 minWidth 控制弹层宽度。',
        demos: [{
            component: WidthPopover,
            sourceCode: sourceMap['popover']['WidthPopover']
        }]
    }
};

export const popoverAPI: DocAPI = {
    props: [
        {
            param: 'content',
            desc: '弹层内容，可以是任意 React 节点',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'children',
            desc: '触发弹层的元素',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'position',
            desc: '弹层显示位置',
            type: "'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'",
            default: '"bottom"'
        },
        {
            param: 'trigger',
            desc: '触发方式',
            type: "'click' | 'hover' | 'manual'",
            default: '"click"'
        },
        {
            param: 'open',
            desc: '受控显示状态',
            type: 'boolean',
            default: '-'
        },
        {
            param: 'defaultOpen',
            desc: '非受控模式下默认是否打开',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'matchTriggerWidth',
            desc: '是否让弹层宽度与触发元素保持一致',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'minWidth',
            desc: '弹层最小宽度，支持 number 或 CSS 宽度字符串',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'closeOnOutsideClick',
            desc: '是否允许点击弹层外部时关闭',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'className',
            desc: '附加到弹层根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onOpenChange',
            desc: '显示状态变化时触发',
            type: '(open: boolean) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '触发元素',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(popoverExamples).map((example) => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const PopoverDoc: React.FC = () => {
    return (
        <Doc
            title="Popover 气泡层"
            description="用于承载更多菜单、筛选器、轻量表单和操作面板的独立弹层组件。相比 Tooltip，Popover 更适合放置可交互内容。"
            examples={popoverExamples}
            api={popoverAPI}
        />
    );
};

export default PopoverDoc;
