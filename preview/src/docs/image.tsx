import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicImage, BackgroundDemo, FallbackDemo, PreviewDemo, PlaceholderDemo, SrcDemo } from './codes/image';
import { sourceMap } from './codes/source-map';

export const imageExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的图片组件用法，显示为普通图片。',
        demos: [{
            component: BasicImage,
            sourceCode: sourceMap['image']['BasicImage']
        }]
    },
    background: {
        title: '背景图片模式',
        key: 'background',
        description: '通过usage="background"设置为背景图片模式，图片会自动适应容器大小。',
        demos: [{
            component: BackgroundDemo,
            sourceCode: sourceMap['image']['BackgroundDemo']
        }]
    },
    fallback: {
        title: '加载失败回退',
        key: 'fallback',
        description: '当图片加载失败时，可以显示自定义的回退内容。',
        demos: [{
            component: FallbackDemo,
            sourceCode: sourceMap['image']['FallbackDemo']
        }]
    },
    placeholder: {
        title: '加载占位符',
        key: 'placeholder',
        description: '在图片加载过程中显示占位效果，提升用户体验。',
        demos: [{
            component: PlaceholderDemo,
            sourceCode: sourceMap['image']['PlaceholderDemo']
        }]
    },
    preview: {
        title: '图片预览',
        key: 'preview',
        description: '支持点击图片查看大图预览。',
        demos: [{
            component: PreviewDemo,
            sourceCode: sourceMap['image']['PreviewDemo']
        }]
    },
    src: {
        title: '直接使用src',
        key: 'src-usage',
        description: '可以直接通过src属性指定图片路径，而不是通过fileName构建。',
        demos: [{
            component: SrcDemo,
            sourceCode: sourceMap['image']['SrcDemo']
        }]
    }
};

export const imageAPI: DocAPI = {
    props: [
        {
            param: 'fileName',
            desc: '图片文件名，相对于localImgSrc的路径',
            type: 'string',
            default: '-'
        },
        {
            param: 'usage',
            desc: '图片使用方式（必需）',
            type: '"background" | "image"',
            default: '必需参数'
        },
        {
            param: 'fallback',
            desc: '图片加载失败时显示的替代内容',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'placeholder',
            desc: '是否使用占位符',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'preview',
            desc: '是否支持预览',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'src',
            desc: '图片源地址，优先级高于fileName',
            type: 'string',
            default: '-'
        },
        {
            param: 'alt',
            desc: '图片的替代文本',
            type: 'string',
            default: '-'
        },
        {
            param: 'width',
            desc: '图片宽度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'height',
            desc: '图片高度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '自定义样式',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击事件',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onError',
            desc: '图片加载失败的回调函数',
            type: '() => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(imageExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const ImageDoc: React.FC = () => {
    return (
        <Doc
            title="Image 图片"
            description="用于展示图片的基础组件，支持普通图片和背景图片两种模式，并提供加载失败回退、预览等功能。"
            examples={imageExamples}
            api={imageAPI}
        />
    );
};

export default ImageDoc;
