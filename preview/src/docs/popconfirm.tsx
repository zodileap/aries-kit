import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicPopconfirm, PlacementPopconfirm, ControlledPopconfirm, CustomButtonPopconfirm } from './codes/popconfirm';
import { sourceMap } from './codes/source-map'; // 确保 source-map 已更新

export const popconfirmExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的用法，点击触发元素弹出确认框。',
        demos: [{
            component: BasicPopconfirm,
            sourceCode: sourceMap['popconfirm']['BasicPopconfirm']
        }]
    },
    placement: {
        title: '不同位置',
        key: 'placement',
        description: '支持12种不同的弹出位置。',
        demos: [{
            component: PlacementPopconfirm,
            sourceCode: sourceMap['popconfirm']['PlacementPopconfirm']
        }]
    },
    controlled: {
        title: '受控模式',
        key: 'controlled',
        description: '通过 `open` 属性控制 Popconfirm 的显示和隐藏。',
        demos: [{
            component: ControlledPopconfirm,
            sourceCode: sourceMap['popconfirm']['ControlledPopconfirm']
        }]
    },
    customButton: {
        title: '自定义按钮',
        key: 'custom-button',
        description: '通过 `okText`, `cancelText`, `okButtonProps`, `cancelButtonProps` 自定义按钮。',
        demos: [{
            component: CustomButtonPopconfirm,
            sourceCode: sourceMap['popconfirm']?.['CustomButtonPopconfirm'] || ''
        }]
    }
};

export const popconfirmAPI: DocAPI = {
    props: [
        { param: 'title', desc: '确认框标题', type: 'React.ReactNode', default: '-' },
        { param: 'description', desc: '确认框描述信息', type: 'React.ReactNode', default: '-' },
        { param: 'okText', desc: '确认按钮文字', type: 'string', default: '"确定"' },
        { param: 'cancelText', desc: '取消按钮文字', type: 'string', default: '"取消"' },
        { param: 'placement', desc: '气泡框位置', type: "'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'", default: '"top"' },
        { param: 'children', desc: '触发确认框显示的子元素', type: 'React.ReactNode', default: '-' },
        { param: 'onConfirm', desc: '点击确认按钮的回调函数', type: '() => void', default: '-' },
        { param: 'onCancel', desc: '点击取消按钮的回调函数', type: '() => void', default: '-' },
        { param: 'okButtonProps', desc: '确认按钮的属性，会传递给 AriButton', type: 'Record<string, any>', default: '-' },
        { param: 'cancelButtonProps', desc: '取消按钮的属性，会传递给 AriButton', type: 'Record<string, any>', default: '-' },
        { param: 'open', desc: '是否显示气泡确认框（受控）', type: 'boolean', default: '-' },
        { param: 'defaultOpen', desc: '默认是否显示气泡确认框', type: 'boolean', default: 'false' },
        { param: 'closeOnEscape', desc: '是否支持按 ESC 关闭', type: 'boolean', default: 'true' },
    ],
    events: [
        { event: 'onConfirm', desc: '点击确认按钮时触发', type: '() => void' },
        { event: 'onCancel', desc: '点击取消按钮或按下 ESC 时触发', type: '() => void' },
    ],
    slots: [
        { name: 'children', desc: '触发 Popconfirm 显示的元素', type: '-' }
    ]
};

export const anchors = Object.values(popconfirmExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const PopconfirmDoc: React.FC = () => {
    return (
        <Doc
            title="Popconfirm 气泡确认框"
            description="点击元素弹出气泡式的确认框，常用于操作确认。"
            examples={popconfirmExamples}
            api={popconfirmAPI}
        />
    );
};

export default PopconfirmDoc;
