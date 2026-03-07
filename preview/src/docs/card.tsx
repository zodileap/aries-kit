import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicCard, CardLayoutDemo, CardSurfaceDemo } from './codes/card';
import { sourceMap } from './codes/source-map';

export const cardExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '卡片组件默认带有阴影和圆角效果，适合展示独立的内容区块。',
        demos: [{
            component: BasicCard,
            sourceCode: sourceMap['card']['BasicCard']
        }]
    },
    surface: {
        title: '卡片表面样式',
        key: 'surface',
        description: '集中展示标题、边框、阴影、材质、背景、透明度、滚动溢出与自定义类名样式。',
        demos: [{
            component: CardSurfaceDemo,
            sourceCode: sourceMap['card']['CardSurfaceDemo']
        }]
    },
    layout: {
        title: '布局与尺寸',
        key: 'layout',
        description: '展示定位、对齐、宽高限制与 fill 填充等布局能力。',
        demos: [{
            component: CardLayoutDemo,
            sourceCode: sourceMap['card']['CardLayoutDemo']
        }]
    }
};

export const cardAPI: DocAPI = {
    props: [
        {
            param: 'title',
            desc: '卡片标题',
            type: 'React.ReactNode',
            default: '-'
        },
        {
            param: 'positionType',
            desc: '定位类型',
            type: "'relative' | 'absolute' | 'fixed' | 'sticky'",
            default: 'static'
        },
        {
            param: 'alignment',
            desc: '对齐方式',
            type: "'center' | 'topLeft' | 'top' | 'topRight' | 'left' | 'right' | 'bottomLeft' | 'bottom' | 'bottomRight'",
            default: '-'
        },
        {
            param: 'shadowMode',
            desc: '阴影显示模式',
            type: "'always' | 'active' | 'never'",
            default: 'always'
        },
        {
            param: 'hoverTransform',
            desc: '在 shadowMode="active" 时是否启用 hover 位移效果',
            type: 'boolean',
            default: 'false'
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
            param: 'borderStyle',
            desc: '边框样式',
            type: "'solid' | 'dashed' | 'dotted'",
            default: 'solid'
        },
        {
            param: 'material',
            desc: '材质类型',
            type: "'solid' | 'glass'",
            default: '-'
        },
        {
            param: 'fill',
            desc: '是否填充容器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'width',
            desc: '宽度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'height',
            desc: '高度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'maxWidth',
            desc: '最大宽度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'minWidth',
            desc: '最小宽度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'maxHeight',
            desc: '最大高度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'minHeight',
            desc: '最小高度',
            type: 'number | string',
            default: '-'
        },
        {
            param: 'bgColor',
            desc: '背景色',
            type: 'string',
            default: '-'
        },
        {
            param: 'bgVariant',
            desc: '背景色变体',
            type: "'solid' | 'glass'",
            default: '-'
        },
        {
            param: 'overflow',
            desc: '溢出处理',
            type: "React.CSSProperties['overflow']",
            default: '-'
        },
        {
            param: 'ghost',
            desc: '是否透明',
            type: 'boolean',
            default: 'false'
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
            desc: '鼠标抬起事件',
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
            desc: '卡片内容',
            type: 'React.ReactNode'
        }
    ]
};

export const anchors = Object.values(cardExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const CardDoc: React.FC = () => {
    return (
        <Doc
            title="Card 卡片"
            description="预设了阴影和圆角效果的容器组件，用于展示独立的内容区块。继承自AriContainer，默认关闭 hover 位移动画。"
            examples={cardExamples}
            api={cardAPI}
        />
    );
};

export default CardDoc;
