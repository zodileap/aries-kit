import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicSticky, PositionSticky, OffsetSticky, StickyStateDemo, DisabledSticky } from './codes/sticky';
import { sourceMap } from './codes/source-map';

export const stickyExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的粘性布局，容器滚动到顶部时会自动固定。',
        demos: [{
            component: BasicSticky,
            sourceCode: sourceMap['sticky']['BasicSticky']
        }]
    },
    position: {
        title: '不同位置',
        key: 'position',
        description: '可以设置粘性定位在顶部、底部、左侧或右侧。',
        demos: [{
            component: PositionSticky,
            sourceCode: sourceMap['sticky']['PositionSticky']
        }]
    },
    offset: {
        title: '偏移量',
        key: 'offset',
        description: '通过offset属性设置粘性定位时与边缘的距离。',
        demos: [{
            component: OffsetSticky,
            sourceCode: sourceMap['sticky']['OffsetSticky']
        }]
    },
    stickyState: {
        title: '状态监听',
        key: 'sticky-state',
        description: '通过onStickyChange回调函数来监听元素的粘性状态变化。',
        demos: [{
            component: StickyStateDemo,
            sourceCode: sourceMap['sticky']?.['StickyStateDemo'] || ''
        }]
    },
    disabled: {
        title: '禁用粘性',
        key: 'disabled',
        description: '通过enabled属性控制是否启用粘性定位效果。',
        demos: [{
            component: DisabledSticky,
            sourceCode: sourceMap['sticky']?.['DisabledSticky'] || ''
        }]
    }
};

export const stickyAPI: DocAPI = {
    props: [
        {
            param: 'position',
            desc: '粘性定位位置',
            type: "'top' | 'bottom' | 'left' | 'right'",
            default: "'top'"
        },
        {
            param: 'offset',
            desc: '偏移量，距离定位边的偏移像素值',
            type: 'number',
            default: '0'
        },
        {
            param: 'enabled',
            desc: '是否启用粘性定位',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'zIndex',
            desc: 'Z轴层级，粘性定位时的z-index值',
            type: 'number',
            default: '100'
        },
        {
            param: 'scrollContainer',
            desc: '滚动容器，指定滚动容器的RefObject',
            type: 'RefObject<HTMLElement>',
            default: 'undefined (使用window作为滚动容器)'
        },
        {
            param: 'onStickyChange',
            desc: '粘性状态变化的回调函数',
            type: '(isSticky: boolean) => void',
            default: '-'
        }
    ],
    events: [],
    slots: [
        {
            name: 'children',
            desc: '需要添加粘性定位的内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(stickyExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API参考' }
]);

const StickyDoc: React.FC = () => {
    return (
        <Doc
            title="Sticky 粘性定位"
            description="Sticky组件提供了粘性定位功能，当元素滚动到特定位置时会自动固定。常用于导航栏、标题栏等需要在滚动时保持可见的元素。"
            examples={stickyExamples}
            api={stickyAPI}
        />
    );
};

export default StickyDoc;
