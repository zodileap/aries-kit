import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    AutoplayExample,
    BasicExample,
    ChildrenExample,
    ControlledCarouselExample,
    CustomIndicatorsExample,
    MinimalExample,
    NoLoopExample,
} from './codes/carousel';
import { sourceMap } from './codes/source-map';

export const carouselExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '全新的毛玻璃效果轮播组件，中间大图突出显示，左右小图预览，提供现代化的视觉体验。',
        demos: [{
            component: BasicExample,
            sourceCode: sourceMap['carousel']['BasicExample']
        }]
    },
    autoplay: {
        title: '自动播放',
        key: 'autoplay',
        description: '设置autoplay属性为true启用自动播放，interval控制播放间隔，pauseOnHover控制悬停暂停。',
        demos: [{
            component: AutoplayExample,
            sourceCode: sourceMap['carousel']['AutoplayExample']
        }]
    },
    noloop: {
        title: '禁用循环',
        key: 'no-loop',
        description: '设置loop为false可以禁用循环播放，在首尾两端时箭头会被禁用。',
        demos: [{
            component: NoLoopExample,
            sourceCode: sourceMap['carousel']['NoLoopExample']
        }]
    },
    custom: {
        title: '自定义指示器',
        key: 'custom-indicators',
        description: '通过renderIndicator函数可以完全自定义指示器的样式和行为。',
        demos: [{
            component: CustomIndicatorsExample,
            sourceCode: sourceMap['carousel']['CustomIndicatorsExample']
        }]
    },
    children: {
        title: '使用子元素',
        key: 'children',
        description: '除了使用items属性，也可以直接传入子元素作为轮播内容。',
        demos: [{
            component: ChildrenExample,
            sourceCode: sourceMap['carousel']['ChildrenExample']
        }]
    },
    minimal: {
        title: '最小化配置',
        key: 'minimal',
        description: '隐藏箭头和指示器，仅保留核心的轮播功能和毛玻璃视觉效果。',
        demos: [{
            component: MinimalExample,
            sourceCode: sourceMap['carousel']['MinimalExample']
        }]
    },
    controlled: {
        title: '受控索引与自定义项',
        key: 'controlled',
        description: '展示受控模式、默认索引、动画时长、自定义轮播项渲染和切换回调。',
        demos: [{
            component: ControlledCarouselExample,
            sourceCode: sourceMap['carousel']['ControlledCarouselExample']
        }]
    }
};

export const carouselAPI: DocAPI = {
    props: [
        {
            param: 'items',
            desc: '轮播项列表，包含图片地址、标题等信息',
            type: 'AriCarouselItem[]',
            default: '[]'
        },
        {
            param: 'children',
            desc: '子元素，如果不使用items，可以直接传入子元素',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'activeIndex',
            desc: '当前激活的索引（受控模式）',
            type: 'number',
            default: '-'
        },
        {
            param: 'defaultActiveIndex',
            desc: '默认激活的索引（非受控模式）',
            type: 'number',
            default: '0'
        },
        {
            param: 'autoplay',
            desc: '是否自动播放',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'interval',
            desc: '自动播放间隔（毫秒）',
            type: 'number',
            default: '3000'
        },
        {
            param: 'showIndicators',
            desc: '是否显示底部指示器',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'showArrows',
            desc: '是否显示左右切换箭头',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'loop',
            desc: '是否循环播放，到达最后一项后是否循环到第一项',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'height',
            desc: '轮播图容器高度',
            type: 'string | number',
            default: '400px'
        },
        {
            param: 'duration',
            desc: '切换动画持续时间（毫秒）',
            type: 'number',
            default: '600'
        },
        {
            param: 'pauseOnHover',
            desc: '鼠标悬停时是否暂停自动播放',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'renderItem',
            desc: '自定义渲染轮播项内容',
            type: '(item: AriCarouselItem, index: number) => React.ReactNode',
            default: '-'
        },
        {
            param: 'renderIndicator',
            desc: '自定义指示器的渲染方式',
            type: '(index: number, isActive: boolean) => React.ReactNode',
            default: '-'
        },
        {
            param: 'onChange',
            desc: '索引变化时的回调函数',
            type: '(index: number) => void',
            default: '-'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '当前索引变化时触发',
            type: '(index: number) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(carouselExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

const CarouselDoc: React.FC = () => {
    return (
        <Doc
            title="Carousel 轮播图"
            description="全新设计的毛玻璃效果轮播组件，采用中心突出展示设计，左右小图预览，提供现代化的视觉体验和流畅的交互效果。"
            examples={carouselExamples}
            api={carouselAPI}
        />
    );
};

export default CarouselDoc;
