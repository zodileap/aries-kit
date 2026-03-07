import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BackgroundDemo,
    BasicContainer,
    BorderDemo,
    BorderRadiusDemo,
    CustomBackgroundDemo,
    FillDemo,
    PositionDemo,
    ShadowDemo,
    SizeAndMaterialDemo,
} from './codes/container';
import { sourceMap } from './codes/source-map';

export const containerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基础的容器组件用法，可以包含任意内容。',
        demos: [{
            component: BasicContainer,
            sourceCode: sourceMap['container']['BasicContainer']
        }]
    },
    position: {
        title: '对齐方式',
        key: 'alignment',
        description: '通过alignment属性控制子元素的对齐方式，支持九种对齐位置。',
        demos: [{
            component: PositionDemo,
            sourceCode: sourceMap['container']['PositionDemo']
        }]
    },
    shadow: {
        title: '阴影效果',
        key: 'shadow',
        description: '通过shadowMode属性控制容器阴影的显示方式；在 active 模式下可通过 hoverTransform 控制是否位移。',
        demos: [{
            component: ShadowDemo,
            sourceCode: sourceMap['container']['ShadowDemo']
        }]
    },
    borderRadius: {
        title: '圆角边框',
        key: 'border-radius',
        description: '通过showBorderRadius属性控制容器是否显示圆角。',
        demos: [{
            component: BorderRadiusDemo,
            sourceCode: sourceMap['container']['BorderRadiusDemo']
        }]
    },
    fill: {
        title: '填充父容器',
        key: 'fill',
        description: '通过fill属性控制容器是否填充父容器的宽度和高度。',
        demos: [{
            component: FillDemo,
            sourceCode: sourceMap['container']['FillDemo']
        }]
    },
    border: {
        title: '边框',
        key: 'border',
        description: '通过showBorder属性控制容器是否显示边框。并且能够设置边框类型。',
        demos: [{
            component: BorderDemo,
            sourceCode: sourceMap['container']['BorderDemo']
        }]
    },
    background: {
        title: '背景色变体',
        key: 'background',
        description: '通过bgVariant属性设置预定义的背景色变体，支持默认、实心和玻璃材质背景。',
        demos: [{
            component: BackgroundDemo,
            sourceCode: sourceMap['container']['BackgroundDemo']
        }]
    },
    customBackground: {
        title: '自定义背景色',
        key: 'custom-background',
        description: '通过bgColor属性设置自定义背景色，支持颜色值、CSS变量和渐变。',
        demos: [{
            component: CustomBackgroundDemo,
            sourceCode: sourceMap['container']['CustomBackgroundDemo']
        }]
    },
    sizeAndMaterial: {
        title: '尺寸与材质',
        key: 'size-material',
        description: '集中展示尺寸约束、玻璃材质、透明模式、模糊、溢出滚动与自定义类名样式。',
        demos: [{
            component: SizeAndMaterialDemo,
            sourceCode: sourceMap['container']['SizeAndMaterialDemo']
        }]
    }
};

export const containerAPI: DocAPI = {
    props: [
        {
            param: 'positionType',
            desc: '定位类型',
            type: "'relative' | 'absolute' | 'fixed' | 'sticky'",
            default: 'static'
        },
        {
            param: 'alignment',
            desc: '子元素的对齐方式，建议使用 WIDGET_POSITIONS 常量',
            type: "'center' | 'topLeft' | 'top' | 'topRight' | 'left' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight' | WIDGET_POSITIONS",
            default: '-'
        },
        {
            param: 'shadowMode',
            desc: '阴影显示模式，建议使用 WIDGET_SHADOW_MODES 常量',
            type: "'always' | 'active' | 'never' | WIDGET_SHADOW_MODES",
            default: '-'
        },
        {
            param: 'hoverTransform',
            desc: '在 shadowMode="active" 时是否启用 hover 位移效果',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'showBorder',
            desc: '是否显示边框',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showBorderRadius',
            desc: '是否显示圆角',
            type: 'boolean',
            default: 'true'
        },
        {
            param: "borderStyle",
            desc: "边框样式",
            type: "'solid' | 'dashed' | 'dotted'",
            default: "solid"
        },
        {
            param: 'fill',
            desc: '是否填充父容器背景色',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'maxWidth',
            desc:  "最大宽度，可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）",
            type: 'number | string',
            default: '-'
        },
        {
            param: 'minWidth',
            desc:  "最小宽度，可以是数字（自动转为px）或字符串值（例如 '100%', '200px'）",
            type: 'number | string',
            default: '-'
        },
        {
            param: 'width',
            desc: '容器的高度，可以是数字（自动转为px）或字符串值（例如 \'100%\', \'200px\'）',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'maxHeight',
            desc: '容器的最大高度，可以是数字（自动转为px）或字符串值（例如 \'100%\', \'200px\'）',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'minHeight',
            desc: '容器的最小高度，可以是数字（自动转为px）或字符串值（例如 \'100%\', \'200px\'）',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'height',
            desc: '容器的高度，可以是数字（自动转为px）或字符串值（例如 \'100%\', \'200px\'）',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'bgColor',
            desc: '自定义背景色，可以是CSS颜色值或主题变量名',
            type: 'string',
            default: 'undefined'
        },
        {
            param: 'bgVariant',
            desc: '背景色变体，使用预定义的主题背景色',
            type: "'default' | 'solid' | 'glass'",
            default: 'undefined'
        },
        {
            param: 'ghost',
            desc: '是否为幽灵容器, 会让容器变成透明',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'material',
            desc: '材质类型',
            type: "'solid' | 'glass'",
            default: '-'
        },
        {
            param: 'blur',
            desc: '是否模糊',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'padding',
            desc: '内边距',
            type: 'number | string | object',
            default: '主题默认值'
        },
        {
            param: 'overflow',
            desc: '溢出处理',
            type: "React.CSSProperties['overflow']",
            default: '-'
        },
        {
            param: 'className',
            desc: '自定义类名',
            type: 'string',
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
            event: 'onMouseEnter',
            desc: '鼠标进入事件',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseLeave',
            desc: '鼠标离开事件',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseDown',
            desc: '鼠标按下事件',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onMouseUp',
            desc: '鼠标松开事件',
            type: '(e: React.MouseEvent) => void'
        },
        {
            event: 'onTouchStart',
            desc: '触摸开始事件',
            type: '(e: React.TouchEvent) => void'
        },
        {
            event: 'onTouchMove',
            desc: '触摸移动事件',
            type: '(e: React.TouchEvent) => void'
        },
        {
            event: 'onTouchEnd',
            desc: '触摸结束事件',
            type: '(e: React.TouchEvent) => void'
        }
    ],
    slots: [
        {
            name: 'children',
            desc: '容器内容',
            type: 'React.ReactNode'
        }
    ]
};


export const anchors = Object.values(containerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const ContainerDoc: React.FC = () => {
    return (
        <Doc
            title="Container 容器"
            description="用于包裹和组织内容的基础容器组件，支持定位、阴影效果、填充父容器和事件处理。"
            examples={containerExamples}
            api={containerAPI}
        />
    );
};

export default ContainerDoc;
