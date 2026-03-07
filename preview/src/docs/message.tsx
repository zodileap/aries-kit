import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicMessage, DurationDemo, CloseButtonDemo } from './codes/message';
import { sourceMap } from './codes/source-map';

export const messageExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '展示不同类型的消息提示。',
        demos: [{
            component: BasicMessage,
            sourceCode: sourceMap['message']['BasicMessage']
        }]
    },
    duration: {
        title: '自动关闭',
        key: 'duration',
        description: '可以设置消息显示的时长，默认3秒后自动关闭。',
        demos: [{
            component: DurationDemo,
            sourceCode: sourceMap['message']['DurationDemo']
        }]
    },
    closeButton: {
        title: '关闭按钮',
        key: 'close-button',
        description: '可以添加关闭按钮并监听关闭事件。',
        demos: [{
            component: CloseButtonDemo,
            sourceCode: sourceMap['message']['CloseButtonDemo']
        }]
    }
};

export const messageAPI: DocAPI = {
    props: [
        {
            param: 'content',
            desc: '消息内容',
            type: 'string',
            default: '-'
        },
        {
            param: 'type',
            desc: '消息类型',
            type: "'info' | 'success' | 'warning' | 'error' | 'primary'",
            default: "'info'"
        },
        {
            param: 'duration',
            desc: '显示时长(ms)，设为0则不会自动关闭',
            type: 'number',
            default: '3000'
        },
        {
            param: 'showClose',
            desc: '是否显示关闭按钮',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'autoClose',
            desc: '是否自动关闭',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'zIndex',
            desc: '层级',
            type: 'number',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
    ],
    events: [
        {
            event: 'onClose',
            desc: '消息关闭时的回调',
            type: '() => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(messageExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const MessageDoc: React.FC = () => {
    return (
        <Doc
            title="Message 消息"
            description="全局展示操作反馈信息。Message 消息组件用于向用户展示快速的反馈信息，支持多种类型、自定义显示时长和位置。"
            examples={messageExamples}
            api={messageAPI}
        />
    );
};

export default MessageDoc;
