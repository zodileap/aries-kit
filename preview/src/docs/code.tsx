import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
    BasicCodeDemo,
    WithTitleDemo,
    LineNumbersDemo,
    EditableCodeDemo,
    MultiLanguageDemo,
    HighlightLinesDemo,
    DiffCodeDemo,
    ClosableLanguageTagDemo,
    FontSizeDemo,
    CustomLineNumbersDemo,
    CodeEditorOptionsDemo
} from './codes/code';
import { sourceMap } from './codes/source-map';

export const codeExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '基础的代码展示组件，支持语法高亮与默认快捷键（如 Cmd/Ctrl + C 复制、Cmd/Ctrl + F 查找）。',
        demos: [{
            component: BasicCodeDemo,
            sourceCode: sourceMap['code']['BasicCodeDemo']
        }]
    },
    title: {
        title: '路径与增减统计',
        key: 'with-title',
        description: '支持展示文件路径，以及代码新增和删除统计。',
        demos: [{
            component: WithTitleDemo,
            sourceCode: sourceMap['code']['WithTitleDemo']
        }]
    },
    lineNumbers: {
        title: '显示行号',
        key: 'line-numbers',
        description: '通过设置 showLineNumbers 属性可以显示行号。',
        demos: [{
            component: LineNumbersDemo,
            sourceCode: sourceMap['code']['LineNumbersDemo']
        }]
    },
    editable: {
        title: '可编辑模式',
        key: 'editable',
        description: '设置 editable 属性可以让代码块变为可编辑模式，用户可以直接修改代码内容。',
        demos: [{
            component: EditableCodeDemo,
            sourceCode: sourceMap['code']['EditableCodeDemo']
        }]
    },
    multiLanguage: {
        title: '多语言支持',
        key: 'multi-language',
        description: '支持多种编程语言的语法高亮，包括 JavaScript、TypeScript、CSS、HTML、JSON 等。',
        demos: [{
            component: MultiLanguageDemo,
            sourceCode: sourceMap['code']['MultiLanguageDemo']
        }]
    },
    highlightLines: {
        title: '行高亮',
        key: 'highlight-lines',
        description: '通过 highlightLines 属性可以高亮指定的代码行，支持单行和范围高亮，方便突出重要代码段。',
        demos: [{
            component: HighlightLinesDemo,
            sourceCode: sourceMap['code']['HighlightLinesDemo']
        }]
    },
    diff: {
        title: 'Diff 模式',
        key: 'diff-lines',
        description: '通过 diffLines 属性配置新增和删除整行高亮，并在头部展示变更统计。',
        demos: [{
            component: DiffCodeDemo
        }, {
            title: '自定义重复行号',
            component: CustomLineNumbersDemo
        }]
    },
    closableLanguageTag: {
        title: '可关闭语言标签',
        key: 'closable-language-tag',
        description: 'languageTagClosable 为 true 时，代码语言标签支持关闭。',
        demos: [{
            component: ClosableLanguageTagDemo
        }]
    },
    fontSize: {
        title: '代码字号',
        key: 'font-size',
        description: 'fontSize 支持 sm、default、lg 三档，便于适配不同阅读场景。',
        demos: [{
            component: FontSizeDemo
        }]
    },
    editorOptions: {
        title: '编辑器细节',
        key: 'editor-options',
        description: '展示占位符、复制按钮、语言标签、工具栏与缩进空格设置。',
        demos: [{
            component: CodeEditorOptionsDemo,
            sourceCode: sourceMap['code']['CodeEditorOptionsDemo']
        }]
    }
};

export const codeAPI: DocAPI = {
    props: [
        {
            param: 'title',
            desc: '代码块的标题',
            type: 'string',
            default: '-'
        },
        {
            param: 'path',
            desc: '代码路径，优先于 title 显示',
            type: 'string',
            default: '-'
        },
        {
            param: 'addedCount',
            desc: '新增代码行数',
            type: 'number',
            default: '自动根据 diffLines.added 推导'
        },
        {
            param: 'removedCount',
            desc: '删除代码行数',
            type: 'number',
            default: '自动根据 diffLines.removed 推导'
        },
        {
            param: 'language',
            desc: '代码语言类型',
            type: "'typescript' | 'javascript' | 'html' | 'css' | 'scss' | 'json' | 'markdown' | 'sql' | 'tsx' | 'jsx'",
            default: 'typescript'
        },
        {
            param: 'className',
            desc: '附加到组件根节点的自定义 CSS 类名',
            type: 'string',
            default: '-'
        },
        {
            param: 'editable',
            desc: '是否为可编辑模式',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'height',
            desc: '编辑器高度',
            type: 'string',
            default: '300px'
        },
        {
            param: 'placeholder',
            desc: '编辑模式下的占位符文本',
            type: 'string',
            default: '-'
        },
        {
            param: 'value',
            desc: '代码内容',
            type: 'string',
            default: '""'
        },
        {
            param: 'onChange',
            desc: '代码内容变化时的回调函数',
            type: '(value: string) => void',
            default: '-'
        },
        {
            param: 'showCopyButton',
            desc: '是否显示复制按钮',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'showLanguageTag',
            desc: '是否显示语言标签',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'languageTagClosable',
            desc: '语言标签是否可关闭',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'onLanguageTagClose',
            desc: '语言标签关闭时触发',
            type: '(e: React.MouseEvent<HTMLElement>) => void',
            default: '-'
        },
        {
            param: 'showLineNumbers',
            desc: '是否显示行号',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'customLineNumbers',
            desc: '自定义行号显示，支持重复行号（如 110 的删除行与新增行）',
            type: 'Array<number | string>',
            default: '-'
        },
        {
            param: 'disabled',
            desc: '是否禁用组件，禁用后不可编辑且不响应快捷键',
            type: 'boolean',
            default: 'false'
        },
        {
            param: 'showToolbar',
            desc: '是否显示编辑工具栏',
            type: 'boolean',
            default: 'true'
        },
        {
            param: 'tabSize',
            desc: 'Tab 缩进空格数',
            type: 'number',
            default: '4'
        },
        {
            param: 'fontSize',
            desc: '代码字体大小',
            type: "'sm' | 'default' | 'lg'",
            default: "'default'"
        },
        {
            param: 'diffLines',
            desc: 'Diff 行配置，支持新增和删除行高亮',
            type: "{ added?: Array<number | {start: number; end: number}>; removed?: Array<number | {start: number; end: number}> }",
            default: '-'
        },
        {
            param: 'highlightLines',
            desc: '需要高亮的行号',
            type: 'Array<number | {start: number; end: number}>',
            default: '[]'
        }
    ],
    shortcutAPI: [
        {
            param: 'Cmd/Ctrl + C',
            desc: '复制：有选区复制选区；只读模式无选区时复制全文',
            type: '默认支持',
            default: '-'
        },
        {
            param: 'Cmd/Ctrl + A',
            desc: '只读模式下全选',
            type: '默认支持',
            default: '-'
        },
        {
            param: 'Cmd/Ctrl + F',
            desc: '打开查找',
            type: '默认支持',
            default: '-'
        },
        {
            param: 'Cmd/Ctrl + Shift + F',
            desc: '编辑模式下格式化代码',
            type: '默认支持',
            default: '-'
        },
        {
            param: 'Cmd/Ctrl + Z',
            desc: '编辑模式下撤销',
            type: '默认支持',
            default: '-'
        },
        {
            param: 'Cmd/Ctrl + Shift + Z / Cmd/Ctrl + Y',
            desc: '编辑模式下重做',
            type: '默认支持',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const anchors = Object.values(codeExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat([
    { key: 'api', label: 'API' },
    { key: 'shortcutapi', label: '默认快捷键' }
]);

const CodeDoc: React.FC = () => {
    return (
        <Doc
            title="Code 代码"
            description="用于展示代码片段的组件，支持多种编程语言的语法高亮，并可切换为可编辑模式。"
            examples={codeExamples}
            api={codeAPI}
            extraProps={[
                {
                    title: '默认快捷键',
                    content: 'shortcutAPI'
                }
            ]}
        />
    );
};

export default CodeDoc;
