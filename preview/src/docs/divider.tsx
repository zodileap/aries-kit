import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicDivider, LabelDivider, OrientationDivider, VariantDivider, PlainDivider, VerticalDivider } from './codes/divider';
import { sourceMap } from './codes/source-map';

export const dividerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的分割线用法，用于分隔内容区域。',
        demos: [{
            component: BasicDivider,
            sourceCode: sourceMap['divider']['BasicDivider']
        }]
    },
    withLabel: {
        title: '带标签的分割线',
        key: 'with-label',
        description: '分割线中可以添加文字或其他内容。',
        demos: [{
            component: LabelDivider,
            sourceCode: sourceMap['divider']['LabelDivider']
        }]
    },
    orientation: {
        title: '标签位置',
        key: 'orientation',
        description: '标签可以设置在分割线的左侧、中间或右侧。',
        demos: [{
            component: OrientationDivider,
            sourceCode: sourceMap['divider']['OrientationDivider']
        }]
    },
    variant: {
        title: '分割线样式',
        key: 'variant',
        description: '支持多种线条样式：实线、虚线、点状、双线。',
        demos: [{
            component: VariantDivider,
            sourceCode: sourceMap['divider']['VariantDivider']
        }]
    },
    plain: {
        title: '简洁样式',
        key: 'plain',
        description: '使用简洁样式的分割线，标签将使用更小更轻的样式。',
        demos: [{
            component: PlainDivider,
            sourceCode: sourceMap['divider']['PlainDivider']
        }]
    },
    vertical: {
        title: '垂直分割线',
        key: 'vertical',
        description: '垂直方向的分割线，用于内联元素之间的分隔。',
        demos: [{
            component: VerticalDivider,
            sourceCode: sourceMap['divider']['VerticalDivider']
        }]
    }
};

export const dividerAPI: DocAPI = {
    props: [
        {
            param: 'children',
            desc: '分割线中显示的自定义内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'label',
            desc: '分割线中显示的文本标签',
            type: 'string',
            default: '-'
        },
        {
            param: 'variant',
            desc: '分割线的变体风格',
            type: "'default' | 'dashed' | 'dotted' | 'double' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",
            default: 'default'
        },
        {
            param: 'orientation',
            desc: '文本的位置',
            type: "'left' | 'right' | 'center'",
            default: 'center'
        },
        {
            param: 'plain',
            desc: '是否应用简洁样式，将children套用label样式',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'type',
            desc: '分割线的类型，水平或垂直',
            type: "'horizontal' | 'vertical'",
            default: 'horizontal'
        },
        {
            param: 'color',
            desc: '分割线颜色',
            type: 'string',
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
    ]
};

export const anchors = Object.values(dividerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const DividerDoc: React.FC = () => {
    return (
        <Doc
            title="Divider 分割线"
            description="区隔内容的分割线组件，可在不同章节的文本间分隔，或分隔行内文字/链接。"
            examples={dividerExamples}
            api={dividerAPI}
        />
    );
};

export default DividerDoc;
