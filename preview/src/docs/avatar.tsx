import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicAvatar, ShapeDemo, SizeDemo, CustomStyleDemo, TypeDemo } from './codes/avatar';
import { sourceMap } from './codes/source-map';

export const avatarExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '头像组件的基本使用方式，可以展示图片、图标或文字。',
        demos: [{
            component: BasicAvatar,
            sourceCode: sourceMap['avatar']['BasicAvatar']  // 不需要编写source-map
        }]
    },
    shape: {
        title: '头像形状',
        key: 'shape',
        description: '头像有两种形状：circle（圆形）和square（方形）。',
        demos: [{
            component: ShapeDemo,
            sourceCode: sourceMap['avatar']['ShapeDemo']  // 不需要编写source-map
        }]
    },
    size: {
        title: '头像尺寸',
        key: 'size',
        description: '通过size属性设置头像大小，支持xs、sm、default、lg、xl、xxl。',
        demos: [{
            component: SizeDemo,
            sourceCode: sourceMap['avatar']['SizeDemo']  // 不需要编写source-map
        }]
    },
    customStyle: {
        title: '自定义样式',
        key: 'custom-style',
        description: '通过backgroundColor和textColor属性自定义头像的背景色和文字颜色。',
        demos: [{
            component: CustomStyleDemo,
            sourceCode: sourceMap['avatar']['CustomStyleDemo']  // 不需要编写source-map
        }]
    },
    type: {
        title: '头像类型',
        key: 'avatar-type',
        description: '头像支持多种内容类型：图片、图标、文字或自定义内容。优先级依次为：图片 > 自定义内容 > 图标 > 文字。',
        demos: [{
            component: TypeDemo,
            sourceCode: sourceMap['avatar']['TypeDemo']  // 不需要编写source-map
        }]
    }
};

export const avatarAPI: DocAPI = {
    props: [
        {
            param: 'src',
            desc: '头像图片地址',
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
            param: 'icon',
            desc: '头像中显示的图标名称',
            type: 'string',
            default: 'person'
        },
        {
            param: 'text',
            desc: '头像中显示的文字（超过2个字符只显示前两个）',
            type: 'string',
            default: '-'
        },
        {
            param: 'shape',
            desc: '头像的形状',
            type: "'circle' | 'square'",
            default: 'circle'
        },
        {
            param: 'size',
            desc: '头像的尺寸',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'",
            default: 'default'
        },
        {
            param: 'backgroundColor',
            desc: '自定义背景颜色',
            type: 'string',
            default: '-'
        },
        {
            param: 'textColor',
            desc: '自定义文字颜色',
            type: 'string',
            default: '-'
        },
        {
            param: 'children',
            desc: '头像内容（可以是任意React节点）',
            type: 'React.ReactNode',
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
    events: [],
    slots: [
        {
            name: 'children',
            desc: '自定义头像内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(avatarExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const AvatarDoc: React.FC = () => {
    return (
        <Doc
            title="Avatar 头像"
            description="用于展示用户头像、用户名称首字母或图标。支持多种尺寸和形状，可以自定义颜色和内容。"
            examples={avatarExamples}
            api={avatarAPI}
        />
    );
};

export default AvatarDoc;
