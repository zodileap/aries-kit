import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
  BasicExample, 
  ModeExample, 
  ToolbarExample, 
  CustomToolbarExample,
  ReadOnlyExample,
  ApiExample,
  AutoSaveExample,
  CodeHighlightExample,
  CodeHighlightLinesExample,
  CalloutExample,
  CodeTitleExample,
  AdvancedConfigExample,
} from './codes/richEditor';
import { sourceMap } from './codes/source-map';

export const richEditorExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '富文本编辑器的基本使用方法，支持 Markdown 编辑和实时预览。',
        demos: [{
            component: BasicExample,
            sourceCode: sourceMap['richEditor']['BasicExample']
        }]
    },
    mode: {
        title: '编辑模式',
        key: 'mode',
        description: '支持三种编辑模式：源码编辑模式（Markdown源码）、可视化编辑模式（渲染结果）、分屏模式（同时显示源码和渲染效果）。',
        demos: [{
            component: ModeExample,
            sourceCode: sourceMap['richEditor']['ModeExample']
        }]
    },
    toolbar: {
        title: '工具栏功能',
        key: 'toolbar',
        description: '内置丰富的格式化工具栏，支持快捷格式化操作和内容插入。',
        demos: [{
            component: ToolbarExample,
            sourceCode: sourceMap['richEditor']['ToolbarExample']
        }]
    },
    customToolbar: {
        title: '自定义工具栏',
        key: 'custom-toolbar',
        description: '可以自定义工具栏显示的按钮和功能，适应不同的使用场景。',
        demos: [{
            component: CustomToolbarExample,
            sourceCode: sourceMap['richEditor']['CustomToolbarExample']
        }]
    },
    readOnly: {
        title: '只读模式',
        key: 'readonly',
        description: '只读模式适合用来展示 Markdown 内容，不可编辑但保留所有样式效果。',
        demos: [{
            component: ReadOnlyExample,
            sourceCode: sourceMap['richEditor']['ReadOnlyExample']
        }]
    },
    api: {
        title: '实例方法',
        key: 'api-methods',
        description: '通过 ref 可以调用编辑器的实例方法，如获取内容、设置内容、清空等操作。',
        demos: [{
            component: ApiExample,
            sourceCode: sourceMap['richEditor']['ApiExample']
        }]
    },
    autoSave: {
        title: '自动保存',
        key: 'auto-save',
        description: '支持自动保存功能，可以设置保存间隔和保存回调函数。',
        demos: [{
            component: AutoSaveExample,
            sourceCode: sourceMap['richEditor']['AutoSaveExample']
        }]
    },
    codeHighlight: {
        title: '代码高亮',
        key: 'code-highlight',
        description: '支持代码块语法高亮、代码标题、复制功能和编辑功能。使用 Monaco Editor 提供专业的代码高亮效果。',
        demos: [{
            component: CodeHighlightExample,
            sourceCode: sourceMap['richEditor']['CodeHighlightExample']
        }]
    },
    codeHighlightLines: {
        title: '代码行高亮',
        key: 'code-highlight-lines',
        description: '支持高亮显示特定的代码行，通过 {行号列表} 语法指定要高亮的行，帮助读者关注重点代码。',
        demos: [{
            component: CodeHighlightLinesExample,
            sourceCode: sourceMap['richEditor']['CodeHighlightLinesExample']
        }]
    },
    callout: {
        title: '告示框',
        key: 'callout',
        description: '支持多种类型的告示框（Callout），通过 :::type 语法创建，包括 note、tip、info、warning、danger 等类型，用于突出显示重要信息。',
        demos: [{
            component: CalloutExample,
            sourceCode: sourceMap['richEditor']['CalloutExample']
        }]
    },
    codeTitle: {
        title: '代码标题',
        key: 'code-title',
        description: '代码块支持添加标题，通过 title 属性为代码块指定文件名或描述信息，提升代码可读性。',
        demos: [{
            component: CodeTitleExample,
            sourceCode: sourceMap['richEditor']['CodeTitleExample']
        }]
    },
    advancedConfig: {
        title: '高级配置',
        key: 'advanced-config',
        description: '展示默认内容、模式回调、最小/最大高度，以及导入导出前置钩子的组合用法。',
        demos: [{
            component: AdvancedConfigExample,
            sourceCode: sourceMap['richEditor']['AdvancedConfigExample']
        }]
    },
};

export const richEditorAPI: DocAPI = {
    props: [
        {
            param: 'value',
            desc: '编辑器内容（受控模式）',
            type: 'string',
            default: '-'
        },
        {
            param: 'defaultValue',
            desc: '默认内容（非受控模式）',
            type: 'string',
            default: "\"\""
        },
        {
            param: 'onChange',
            desc: '内容变化回调函数',
            type: '(value: string) => void',
            default: '-'
        },
        {
            param: 'mode',
            desc: '编辑器模式',
            type: "'source' | 'visual' | 'split'",
            default: "'split'"
        },
        {
            param: 'onModeChange',
            desc: '模式变化回调函数',
            type: "(mode: 'source' | 'visual' | 'split') => void",
            default: '-'
        },
        {
            param: 'placeholder',
            desc: '占位文本',
            type: 'string',
            default: "'请输入内容...'"
        },
        {
            param: 'height',
            desc: '编辑器高度',
            type: 'string | number',
            default: "'500px'"
        },
        {
            param: 'minHeight',
            desc: '编辑器最小高度',
            type: 'string | number',
            default: "'300px'"
        },
        {
            param: 'maxHeight',
            desc: '编辑器最大高度',
            type: 'string | number',
            default: "'800px'"
        },
        {
            param: 'readOnly',
            desc: '是否只读',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'disabled',
            desc: '禁用后组件不可交互',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'toolbar',
            desc: '工具栏配置，设为false可隐藏工具栏',
            type: 'ToolbarConfig | false',
            default: '默认配置'
        },
        {
            param: 'showLineNumbers',
            desc: '是否显示行号（源码模式）',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'autoSave',
            desc: '是否启用自动保存',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'autoSaveInterval',
            desc: '自动保存间隔（毫秒）',
            type: 'number',
            default: '30000'
        },
        {
            param: 'onAutoSave',
            desc: '自动保存回调函数',
            type: '(content: string) => void',
            default: '-'
        },
        {
            param: 'beforeImport',
            desc: '导入文件前的钩子函数',
            type: '(file: File) => boolean | Promise<boolean>',
            default: '-'
        },
        {
            param: 'beforeExport',
            desc: '导出前的钩子函数',
            type: "(format: 'md' | 'html' | 'pdf', content: string) => string | Promise<string>",
            default: '-'
        },
        {
            param: 'codeBlockConfig',
            desc: '代码块配置',
            type: 'CodeBlockConfig',
            default: '默认配置'
        }
    ],
    events: [
        {
            event: 'onChange',
            desc: '内容变化时触发',
            type: '(value: string) => void'
        },
        {
            event: 'onModeChange',
            desc: '编辑模式变化时触发',
            type: "(mode: 'source' | 'visual' | 'split') => void"
        },
        {
            event: 'onAutoSave',
            desc: '自动保存时触发',
            type: '(content: string) => void'
        }
    ],
    slots: []
};

export const anchors = Object.values(richEditorExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const RichEditorDoc: React.FC = () => {
    return (
        <Doc
            title="RichEditor 富文本编辑器"
            description="功能强大的 Markdown 富文本编辑器，支持实时预览、多种编辑模式、工具栏快捷操作、导入导出等功能。内部以 Markdown 格式存储，可与后端 API 轻松集成。"
            examples={richEditorExamples}
            api={richEditorAPI}
        />
    );
};

export default RichEditorDoc;
