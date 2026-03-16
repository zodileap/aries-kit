import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicTooltip,
    ControlledTooltip,
    NoArrowTooltip,
    PositionedTooltip,
    RichContentTooltip,
    TooltipBehaviorDemo,
    TriggerTooltip,
} from './codes/tooltip';
import { sourceMap } from './codes/source-map';

export const tooltipExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的提示框用法，将鼠标悬停在元素上，显示简单的文本提示。',
        demos: [{
            component: BasicTooltip,
            sourceCode: sourceMap['tooltip']['BasicTooltip']
        }]
    },
    position: {
        title: '不同位置',
        key: 'position',
        description: '提示框支持四个不同的方位：上(top)、右(right)、下(bottom)、左(left)。',
        demos: [{
            component: PositionedTooltip,
            sourceCode: sourceMap['tooltip']['PositionedTooltip']
        }]
    },
    trigger: {
        title: '触发方式',
        key: 'trigger',
        description: '提示框可以通过不同方式触发：悬停(hover)、点击(click)、获取焦点(focus)。',
        demos: [{
            component: TriggerTooltip,
            sourceCode: sourceMap['tooltip']['TriggerTooltip']
        }]
    },
    controlled: {
        title: '手动控制',
        key: 'controlled',
        description: '使用trigger="manual"和visible属性可以手动控制提示框的显示与隐藏。',
        demos: [{
            component: ControlledTooltip,
            sourceCode: sourceMap['tooltip']['ControlledTooltip']
        }]
    },
    noArrow: {
        title: '箭头开关',
        key: 'no-arrow',
        description: '默认不显示箭头；设置arrow={true}时显示提示框箭头。',
        demos: [{
            component: NoArrowTooltip,
            sourceCode: sourceMap['tooltip']['NoArrowTooltip']
        }]
    },
    richContent: {
        title: '富文本内容',
        key: 'rich-content',
        description: '提示框内容可以是任意React节点，支持富文本展示。',
        demos: [{
            component: RichContentTooltip,
            sourceCode: sourceMap['tooltip']['RichContentTooltip']
        }]
    },
    behavior: {
        title: '延迟与禁用',
        key: 'behavior',
        description: '展示显示/隐藏延迟、最小宽度、宽度匹配、禁用状态和显隐回调。',
        demos: [{
            component: TooltipBehaviorDemo,
            sourceCode: sourceMap['tooltip']['TooltipBehaviorDemo']
        }]
    }
};

export const tooltipAPI: DocAPI = {
    props: [
        {
            param: 'content',
            desc: '提示框内容，显示在提示框中的文本或节点内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'children',
            desc: '触发元素，提示框依附的元素',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'position',
            desc: '提示框位置，控制提示框相对于触发元素的显示位置',
            type: "'top' | 'right' | 'bottom' | 'left'",
            default: "'top'"
        },
        {
            param: 'trigger',
            desc: '触发方式，控制提示框显示的触发方式',
            type: "'hover' | 'click' | 'focus' | 'manual'",
            default: "'hover'"
        },
        {
            param: 'arrow',
            desc: '是否显示箭头，控制提示框是否显示指向触发元素的箭头',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'visible',
            desc: '手动控制显示状态（仅在trigger为"manual"时有效）',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showDelay',
            desc: '延迟显示时间（毫秒）',
            type: 'number',
            default: '100'
        },
        {
            param: 'hideDelay',
            desc: '延迟隐藏时间（毫秒）',
            type: 'number',
            default: '100'
        },
        {
            param: 'disabled',
            desc: '是否禁用提示框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'minWidth',
            desc: '提示框最小宽度，支持 number（自动补全为px）或 CSS 宽度字符串',
            type: 'number | string',
            default: '按内容自适应'
        },
        {
            param: 'matchTriggerWidth',
            desc: '是否让提示框宽度与触发元素保持一致',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'onShow',
            desc: '提示框显示时的回调',
            type: '() => void',
            default: '-'
        },
        {
            param: 'onHide',
            desc: '提示框隐藏时的回调',
            type: '() => void',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const anchors = Object.values(tooltipExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'tooltip-api', label: 'Tooltip API' }
]);

const TooltipDoc: React.FC = () => {
    return (
        <Doc
            title="Tooltip 提示框"
            description="文字提示组件，当用户鼠标悬停、聚焦或点击元素时，显示简短的提示信息。默认按内容宽度收缩；如果需要承载菜单或操作面板，请优先使用 Popover。"
            examples={tooltipExamples}
            api={tooltipAPI}
        />
    );
};

export default TooltipDoc;
