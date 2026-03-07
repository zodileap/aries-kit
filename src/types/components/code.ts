/** 代码组件的历史记录项 */
export interface CodeHistoryItem {
    /** 代码内容 */
    content: string;
    /** 光标位置信息 */
    selection?: {
        /** 选择开始位置 */
        start: number;
        /** 选择结束位置 */
        end: number;
    };
}

/**
 * 代码行配置
 * 支持单个行号或行号范围
 */
export type AriCodeLineConfig = number | { start: number; end: number };

/**
 * Diff 行配置
 * 用于标记新增和删除的代码行
 */
export interface AriCodeDiffLines {
    /**
     * 新增的行号
     */
    added?: AriCodeLineConfig[];

    /**
     * 删除的行号
     */
    removed?: AriCodeLineConfig[];
}

/** 代码组件的属性 */
export interface AriCodeProps {
    /**
     * 默认快捷键：
     * - Cmd/Ctrl + C：复制（只读模式无选区时复制全文）
     * - Cmd/Ctrl + F：查找
     * - Cmd/Ctrl + A：只读模式全选
     * - Cmd/Ctrl + Shift + F：编辑模式格式化
     * - Cmd/Ctrl + Z / Shift + Z / Y：编辑模式撤销与重做
     */
    /** 标题，可选 */
    title?: string;
    /** 代码语言类型 */
    language?: 'typescript' | 'javascript' | 'html' | 'css' | 'scss' | 'json' | 'markdown' | 'sql' | 'tsx' | 'jsx' | 'go' | 'python' | 'java' | 'c' | 'cpp' | 'csharp' | 'ruby' | 'swift' | 'kotlin' | 'rust' | 'bash' | 'dart' | string;

    /**
     * 代码路径
     * 用于头部展示文件路径，优先级高于 title
     */
    path?: string;

    /**
     * 新增代码行数
     * 如果未传入，会基于 diffLines.added 自动推导
     */
    addedCount?: number;

    /**
     * 删除代码行数
     * 如果未传入，会基于 diffLines.removed 自动推导
     */
    removedCount?: number;
    /** 自定义类名 */
    className?: string;
    /** 是否为编辑模式，默认为false(只读模式) */
    editable?: boolean;
    /** 是否禁用组件，禁用后无法进行编辑和复制操作 */
    disabled?: boolean;
    /** 编辑器高度 */
    height?: string;
    /** 占位符文本 */
    placeholder?: string;
    /** 代码内容，用于只读模式和编辑模式 */
    value?: string;
    /** 值变化时的回调函数 */
    onChange?: (value: string) => void;
    /** 是否显示复制按钮 */
    showCopyButton?: boolean;

    /**
     * 是否显示语言标签
     * default: true
     */
    showLanguageTag?: boolean;

    /**
     * 语言标签是否可关闭
     * default: false
     */
    languageTagClosable?: boolean;

    /**
     * 关闭语言标签时触发
     */
    onLanguageTagClose?: (e: React.MouseEvent<HTMLElement>) => void;
    /** 是否显示行号 */
    showLineNumbers?: boolean;

    /**
     * 自定义行号显示
     * 数组索引对应代码行（从第1行开始），值用于覆盖默认行号文本
     * 
     * Example:
     * ```tsx
     * <AriCode
     *   customLineNumbers={[109, 110, 110, 111]}
     * />
     * ```
     */
    customLineNumbers?: Array<number | string>;

    /** 是否显示编辑工具栏 */
    showToolbar?: boolean;
    /** Tab缩进的空格数，默认为4 */
    tabSize?: number;

    /**
     * 代码字体大小
     * default: 'default'
     */
    fontSize?: 'sm' | 'default' | 'lg';

    /**
     * Diff 行配置
     */
    diffLines?: AriCodeDiffLines;

    /** 
     * 需要高亮的行号
     * 
     * 支持的格式：
     * - 单个行号：[1, 3, 5] 
     * - 行号范围：[{start: 1, end: 3}, {start: 5, end: 8}]
     * - 混合使用：[1, {start: 3, end: 5}, 7]
     * 
     * Example:
     * ```tsx
     * // 高亮第1、3、5行
     * <AriCode highlightLines={[1, 3, 5]} />
     * 
     * // 高亮第1-3行和第5-8行
     * <AriCode highlightLines={[{start: 1, end: 3}, {start: 5, end: 8}]} />
     * 
     * // 混合使用
     * <AriCode highlightLines={[1, {start: 3, end: 5}, 7]} />
     * ```
     */
    highlightLines?: AriCodeLineConfig[];
}
