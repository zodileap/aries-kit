import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicColorPicker,
    SizeColorPicker,
    CustomPresetColorPicker,
    FormatColorPicker,
    AlphaColorPicker,
    GradientColorPicker,
    DisabledColorPicker,
    FormUsageColorPicker
} from './codes/color-picker';
import { sourceMap } from './codes/source-map';


// 示例配置
export const colorPickerExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '最基本的颜色选择器，支持选择颜色并实时预览。',
        demos: [{
            component: BasicColorPicker,
            sourceCode: sourceMap['color-picker']['BasicColorPicker']
        }]
    },
    size: {
        title: '不同尺寸',
        key: 'size',
        description: '支持三种不同尺寸的颜色选择器：small、default 和 large。',
        demos: [{
            component: SizeColorPicker,
            sourceCode: sourceMap['color-picker']['SizeColorPicker']
        }]
    },
    preset: {
        title: '自定义预设颜色',
        key: 'preset-colors',
        description: '可以通过 presetColors 属性自定义预设颜色。',
        demos: [{
            component: CustomPresetColorPicker,
            sourceCode: sourceMap['color-picker']['CustomPresetColorPicker']
        }]
    },
    format: {
        title: '颜色格式',
        key: 'color-format',
        description: '支持 HEX、RGB、HSB 和 HSL 四种颜色格式，可以通过 format 属性指定。',
        demos: [{
            component: FormatColorPicker,
            sourceCode: sourceMap['color-picker']['FormatColorPicker']
        }]
    },
    alpha: {
        title: '透明度选择',
        key: 'alpha',
        description: '通过 showAlpha 属性启用透明度选择，允许选择半透明颜色。',
        demos: [{
            component: AlphaColorPicker,
            sourceCode: sourceMap['color-picker']['AlphaColorPicker']
        }]
    },
    gradient: {
        title: '渐变色模式',
        key: 'gradient',
        description: '启用 enableGradient 属性后可以创建和编辑渐变色。',
        demos: [{
            component: GradientColorPicker,
            sourceCode: sourceMap['color-picker']['GradientColorPicker']
        }]
    },
    disabled: {
        title: '禁用状态',
        key: 'disabled',
        description: '通过 disabled 属性禁用颜色选择器。',
        demos: [{
            component: DisabledColorPicker,
            sourceCode: sourceMap['color-picker']['DisabledColorPicker']
        }]
    },
    form: {
        title: '在表单中使用',
        key: 'form-usage',
        description: '颜色选择器可以与 Form 组件一起使用，用于收集颜色数据。',
        demos: [{
            component: FormUsageColorPicker,
            sourceCode: sourceMap['color-picker']['FormUsageColorPicker']
        }]
    }
};

// API 说明
export const colorPickerAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '当前选中的颜色值，单色时支持HEX、RGB、RGBA格式，渐变色时为GradientColor对象',
            type: 'AriColorValue',
            default: '#000000'
        },
        {
            param: 'defaultValue',
            desc: '默认颜色值，当value未指定时使用此值',
            type: 'AriColorValue',
            default: '#000000'
        },
        {
            param: 'size',
            desc: '颜色选择器大小',
            type: "'small' | 'default' | 'large'",
            default: 'default'
        },
        {
            param: 'disabled',
            desc: '是否禁用选择器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'presetColors',
            desc: '自定义预设颜色列表',
            type: 'string[]',
            default: '-'
        },
        {
            param: 'format',
            desc: '颜色格式，控制颜色值的显示和返回格式',
            type: "'hex' | 'rgb' | 'hsb' | 'hsl'",
            default: 'hex'
        },
        {
            param: 'showAlpha',
            desc: '是否显示透明度选择器',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'enableGradient',
            desc: '是否启用渐变色模式',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'placement',
            desc: '颜色选择面板的弹出位置',
            type: "'top' | 'bottom' | 'left' | 'right'",
            default: 'bottom'
        },
        {
            param: 'showInput',
            desc: '是否显示颜色值输入框',
            type: 'boolean',
            default: 'true'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '当选择的颜色发生变化时触发',
            type: '(color: AriColorValue) => void'
        }
    ],
    slots: []
};

// 锚点定义
export const anchors = Object.values(colorPickerExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' }
]);

// 文档组件
const ColorPickerDoc: React.FC = () => {
    return (
        <Doc
            title="ColorPicker 颜色选择器"
            description="用于选择颜色的交互式组件，支持多种颜色格式、透明度调节和渐变色创建。"
            examples={colorPickerExamples}
            api={colorPickerAPI}
        />
    );
};

export default ColorPickerDoc;
