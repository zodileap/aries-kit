import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicLink, DisabledLink, UnderlineLink, SizeLink, IconLink, BlockLink } from './codes/link';
import { sourceMap } from './codes/source-map';

export const linkExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的链接组件，可以通过type属性设置不同的样式。',
        demos: [{
            component: BasicLink,
            sourceCode: sourceMap['link']['BasicLink']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过设置disabled属性禁用链接，禁用的链接不可点击。',
        demos: [{
            component: DisabledLink,
            sourceCode: sourceMap['link']['DisabledLink']
        }]
    },
    underline: {
        title: '下划线',
        key: 'underline',
        description: '通过underline属性设置链接是否带有下划线。',
        demos: [{
            component: UnderlineLink,
            sourceCode: sourceMap['link']['UnderlineLink']
        }]
    },
    size: {
        title: '链接尺寸',
        key: 'size',
        description: '链接支持四种尺寸：小、默认、大、超大。',
        demos: [{
            component: SizeLink,
            sourceCode: sourceMap['link']?.['SizeLink'] || ''
        }]
    },
    icon: {
        title: '图标链接',
        key: 'icon',
        description: '可以在链接中添加图标，支持设置图标位置。',
        demos: [{
            component: IconLink,
            sourceCode: sourceMap['link']?.['IconLink'] || ''
        }]
    },
    block: {
        title: '块级链接',
        key: 'block',
        description: '通过block属性将链接设置为块级元素，占据整个父容器宽度。',
        demos: [{
            component: BlockLink,
            sourceCode: sourceMap['link']?.['BlockLink'] || ''
        }]
    }
};

export const linkAPI: DocAPI = {
    props: [
        {
            param: 'href',
            desc: '链接目标地址',
            type: 'string',
            default: '#'
        },
        {
            param: 'target',
            desc: '链接打开方式',
            type: '"_self" | "_blank" | "_parent" | "_top"',
            default: '_self'
        },
        {
            param: 'rel',
            desc: '链接与当前文档的关系',
            type: 'string',
            default: '当target为"_blank"时为"noopener noreferrer"'
        },
        {
            param: 'disabled',
            desc: '是否禁用链接',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'type',
            desc: '链接类型',
            type: '"default" | "brand" | "success" | "warning" | "danger" | "info" | "muted"',
            default: 'default'
        },
        {
            param: 'size',
            desc: '链接尺寸',
            type: '"small" | "default" | "large" | "extra-large"',
            default: 'default'
        },
        {
            param: 'underline',
            desc: '是否使用下划线',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'block',
            desc: '是否为块级元素',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'icon',
            desc: '链接内图标',
            type: 'string',
            default: '-'
        },
        {
            param: 'iconPosition',
            desc: '图标位置',
            type: '"left" | "right"',
            default: 'left'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '内联样式',
            type: 'React.CSSProperties',
            default: '-'
        },
        {
            param: 'onClick',
            desc: '点击事件处理函数',
            type: '(e: React.MouseEvent<HTMLAnchorElement>) => void',
            default: '-'
        }
    ],
    events: [],
    slots: [
        {
            name: 'children',
            desc: '链接文本内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(linkExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const LinkDoc: React.FC = () => {
    return (
        <Doc
            title="Link 链接"
            description="用于页面间跳转或锚点定位，支持多种样式和状态"
            examples={linkExamples}
            api={linkAPI}
        />
    );
};

export default LinkDoc;