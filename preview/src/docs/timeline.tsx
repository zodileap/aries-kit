import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicTimeline, DirectionTimeline, ModeTimeline, CustomNodeTimeline, AdvancedTimeline, RichContentTimeline } from './codes/timeline';

export const timelineExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的时间轴，按照时间先后顺序垂直展示信息。',
        demos: [{
            component: BasicTimeline
        }]
    },
    direction: {
        title: '不同方向',
        key: 'direction',
        description: '时间轴有垂直和水平两种方向，默认为垂直方向。',
        demos: [{
            component: DirectionTimeline
        }]
    },
    mode: {
        title: '时间轴位置',
        key: 'mode',
        description: '时间轴可以在内容的左侧、右侧或居中，默认显示在左侧。',
        demos: [{
            component: ModeTimeline
        }]
    },
    customNode: {
        title: '自定义节点',
        key: 'custom-node',
        description: '可以自定义时间轴节点的颜色、图标和类型。',
        demos: [{
            component: CustomNodeTimeline
        }]
    },
    advanced: {
        title: '高级用法',
        key: 'advanced',
        description: '支持倒序展示和虚线连接，适用于不同的展示需求。',
        demos: [{
            component: AdvancedTimeline
        }]
    },
    richContent: {
        title: '丰富的内容展示',
        key: 'rich-content',
        description: '时间轴节点可以展示更加丰富的内容，如卡片、图标等。',
        demos: [{
            component: RichContentTimeline
        }]
    }
};

export const timelineAPI: DocAPI = {
    props: [
        {
            param: 'items',
            desc: '时间轴节点数组',
            type: 'TimelineItemProps[]',
            default: '-'
        },
        {
            param: 'direction',
            desc: '时间轴方向',
            type: "'vertical' | 'horizontal'",
            default: 'vertical'
        },
        {
            param: 'mode',
            desc: '时间轴位置',
            type: "'left' | 'right' | 'center'",
            default: 'left'
        },
        {
            param: 'reverse',
            desc: '是否倒序排列',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'lastDashed',
            desc: '最后一项是否为虚线',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
            default: '-'
        }
    ],
    events: [],
    slots: [],
    itemProps: [
        {
            param: 'children',
            desc: '节点内容',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'label',
            desc: '时间节点的标签',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'icon',
            desc: '自定义时间节点图标',
            type: 'ReactNode',
            default: '-'
        },
        {
            param: 'color',
            desc: '节点颜色',
            type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | string",
            default: 'primary'
        },
        {
            param: 'dashed',
            desc: '是否为虚线',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'type',
            desc: '节点类型',
            type: "'filled' | 'hollow' | 'borderless'",
            default: 'filled'
        },
        {
            param: 'key',
            desc: '唯一标识',
            type: 'string | number',
            default: '-'
        }
    ]
};

export const anchors = Object.values(timelineExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'timeline-api', label: 'Timeline API' },
    { key: 'timeline-item-api', label: 'TimelineItem API' }
]);

const TimelineDoc: React.FC = () => {
    return (
        <Doc
            title="Timeline 时间轴"
            description="时间轴组件，用于展示一系列按时间顺序排列的活动或事件，常用于垂直展示时间流信息，如项目进度、工作计划等。"
            examples={timelineExamples}
            api={timelineAPI}
            extraProps={[
                {
                    title: 'TimelineItem API',
                    content: "itemProps"
                }
            ]}
        />
    );
};

export default TimelineDoc;
