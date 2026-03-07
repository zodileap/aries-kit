import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicParticle } from './codes/particle';
import { sourceMap } from './codes/source-map';

export const particleExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最简单的五彩斑斓粒子效果，具有虚化发光效果和鼠标交互。',
        demos: [{
            component: BasicParticle,
            sourceCode: sourceMap['particle']['BasicParticle']
        }]
    }
};

export const particleAPI: DocAPI = {
    props: [
        {
            param: 'count',
            desc: '粒子数量',
            type: 'number',
            default: '200'
        },
        {
            param: 'sizeRange',
            desc: '粒子大小范围 [最小值, 最大值]',
            type: '[number, number]',
            default: '[2, 30]'
        },
        {
            param: 'speedRange',
            desc: '粒子速度范围 [最小值, 最大值]',
            type: '[number, number]',
            default: '[0.1, 0.5]'
        },
        {
            param: 'interactive',
            desc: '是否启用鼠标交互（排斥效果）',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'interactionRadius',
            desc: '鼠标交互范围(px)',
            type: 'number',
            default: '100'
        },
        {
            param: 'glowIntensity',
            desc: '粒子发光效果强度',
            type: 'number',
            default: '0.8'
        },
        {
            param: 'animationSpeed',
            desc: '动画速度倍数',
            type: 'number',
            default: '1'
        },
        {
            param: 'backgroundColor',
            desc: '背景颜色',
            type: 'string',
            default: '#000000'
        },
        {
            param: 'alphaRange',
            desc: '粒子透明度范围 [最小值, 最大值]',
            type: '[number, number]',
            default: '[0.3, 1]'
        },
        {
            param: 'blurAmount',
            desc: '虚化程度（像素）',
            type: 'number',
            default: '15'
        },
        {
            param: 'className',
            desc: '自定义CSS类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'style',
            desc: '自定义样式对象',
            type: 'React.CSSProperties',
            default: '-'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '子元素，将显示在粒子系统上方',
            type: 'React.ReactNode'
        }
    ],
    events: []
};

export const anchors = Object.values(particleExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([{ key: 'api', label: 'API' }]);

const ParticleDoc: React.FC = () => {
    return (
        <Doc
            title="Particle 五彩斑斓粒子"
            description="实现Canvas五彩斑斓的粒子动画特效，具有虚化发光效果和鼠标交互功能，支持多种参数调节，适合作为背景或装饰效果。"
            examples={particleExamples}
            api={particleAPI}
        />
    );
};

export default ParticleDoc;
