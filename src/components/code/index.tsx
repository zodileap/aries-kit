import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCss } from "@ari/utils";
import {
  AriButton,
  AriFlex,
  AriTag,
  AriTooltip,
  AriDivider,
} from "@ari/components";
import { useI18n } from "@ari/i18n";
import * as monaco from "monaco-editor";
import { AriCodeLineConfig, AriCodeProps } from "@ari/types/components";
import { getThemeManager } from "./themeManager";
import { useCodeDecorations } from "./hooks";

// 处理转义字符串，将\n等转义字符转换为实际字符
const processEscapeSequences = (text: string): string => {
  return text
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\r/g, "\r")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
};

const getNormalizedLineCount = (lines: AriCodeLineConfig[] = []): number => {
  const lineSet = new Set<number>();

  lines.forEach((line) => {
    if (typeof line === "number") {
      if (line > 0) {
        lineSet.add(line);
      }
      return;
    }

    const start = Math.max(1, line.start);
    const end = Math.max(start, line.end);
    for (let i = start; i <= end; i++) {
      lineSet.add(i);
    }
  });

  return lineSet.size;
};

// 扩展Window类型以支持MonacoEnvironment
declare global {
  interface Window {
    MonacoEnvironment?: monaco.Environment;
  }
}

// 配置 Monaco Editor 的 Worker 环境
if (typeof window !== 'undefined' && !window.MonacoEnvironment) {
  window.MonacoEnvironment = {
    getWorker: function (_workerId, label) {
      // 使用动态导入来避免路径问题
      const workerMap = {
        json: () => import('monaco-editor/esm/vs/language/json/json.worker?worker'),
        css: () => import('monaco-editor/esm/vs/language/css/css.worker?worker'),
        scss: () => import('monaco-editor/esm/vs/language/css/css.worker?worker'),
        less: () => import('monaco-editor/esm/vs/language/css/css.worker?worker'),
        html: () => import('monaco-editor/esm/vs/language/html/html.worker?worker'),
        handlebars: () => import('monaco-editor/esm/vs/language/html/html.worker?worker'),
        razor: () => import('monaco-editor/esm/vs/language/html/html.worker?worker'),
        typescript: () => import('monaco-editor/esm/vs/language/typescript/ts.worker?worker'),
        javascript: () => import('monaco-editor/esm/vs/language/typescript/ts.worker?worker'),
      };

      // 获取对应的 Worker 模块或使用默认的 editor worker
      const workerModule = workerMap[label as keyof typeof workerMap] || 
        (() => import('monaco-editor/esm/vs/editor/editor.worker?worker'));

      return workerModule().then((module) => new module.default());
    },
  };
}

/**
 * 代码组件，使用 Monaco Editor 支持浏览和编辑一体的功能
 *
 * 主要特点：
 * - 支持 Monaco Editor 的所有语言高亮
 * - 支持智能提示和代码补全
 * - 支持代码折叠和缩略图导航
 * - 自动适应系统主题（light/dark）
 * - 编辑模式下支持完整的撤销/重做功能
 * - 支持代码格式化
 * - 支持查找替换功能
 * - 支持多光标编辑
 *
 * Example:
 * ```tsx
 * // 只读模式
 * <AriCode language="javascript" defaultValue="const hello = 'world';\nconsole.log(hello);" />
 *
 * // 编辑模式
 * <AriCode
 *   editable
 *   language="javascript"
 *   height="200px"
 *   placeholder="请输入代码"
 *   defaultValue="const hello = 'world';"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // 带工具栏的编辑模式
 * <AriCode
 *   editable
 *   showToolbar
 *   showLineNumbers
 *   language="javascript"
 *   height="200px"
 *   tabSize={2}
 *   defaultValue="const hello = 'world';\nfunction greet() {\n  console.log(hello);\n}"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * // 禁用模式
 * <AriCode
 *   language="javascript"
 *   defaultValue="const hello = 'world';"
 *   disabled
 * />
 * 
 * // 行高亮模式
 * <AriCode
 *   language="javascript"
 *   defaultValue="const hello = 'world';\nfunction greet() {\n  console.log(hello);\n}\ngreet();"
 *   highlightLines={[1, 3]}
 * />
 * 
 * // 行高亮范围模式
 * <AriCode
 *   language="javascript"
 *   defaultValue="const hello = 'world';\nfunction greet() {\n  console.log(hello);\n}\ngreet();"
 *   highlightLines={[{start: 2, end: 3}]}
 * />
 * ```
 */
export const AriCode: React.FC<AriCodeProps> = ({
  title,
  language = "typescript",
  path,
  addedCount,
  removedCount,
  className,
  editable = false,
  disabled = false,
  height = "300px",
  placeholder: _placeholder,
  value = "",
  onChange,
  showCopyButton = true,
  showLanguageTag = true,
  languageTagClosable = false,
  onLanguageTagClose,
  showLineNumbers = true,
  customLineNumbers,
  showToolbar = true,
  tabSize = 4,
  fontSize = "default",
  diffLines,
  highlightLines = [],
}) => {
  const { t } = useI18n();
  const cs = useCss("code");
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [content, setContent] = useState(() => processEscapeSequences(value));
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const editableRef = useRef(editable);
  const disabledRef = useRef(disabled);
  const [isLanguageTagVisible, setIsLanguageTagVisible] = useState(showLanguageTag);

  // 初始化主题管理器
  const themeManager = useMemo(() => getThemeManager(), []);
  
  // 使用装饰器管理 hook
  const {
    applyHighlightDecorations,
    applyDiffDecorations,
    applyCurrentLinesDecoration,
    getCurrentLineNumber,
  } = useCodeDecorations();
  
  const [selectedLineNumbers, setSelectedLineNumbers] = useState<number[]>([]);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    editableRef.current = editable;
    disabledRef.current = disabled;
  }, [editable, disabled]);

  useEffect(() => {
    setIsLanguageTagVisible(showLanguageTag);
  }, [showLanguageTag]);

  const editorFontOptions = useMemo(() => {
    if (fontSize === "sm") {
      return { fontSize: 12, lineHeight: 20 };
    }

    if (fontSize === "lg") {
      return { fontSize: 16, lineHeight: 26 };
    }

    return { fontSize: 14, lineHeight: 22 };
  }, [fontSize]);

  const headerTitle = path || title;

  const lineNumbersOption = useMemo<monaco.editor.LineNumbersType>(() => {
    if (!showLineNumbers) {
      return "off";
    }

    if (!customLineNumbers || customLineNumbers.length === 0) {
      return "on";
    }

    return (lineNumber: number) => {
      const customLineNumber = customLineNumbers[lineNumber - 1];
      if (customLineNumber === undefined || customLineNumber === null || customLineNumber === "") {
        return String(lineNumber);
      }
      return String(customLineNumber);
    };
  }, [showLineNumbers, customLineNumbers]);

  const inferredAddedCount = useMemo(() => {
    return getNormalizedLineCount(diffLines?.added);
  }, [diffLines]);

  const inferredRemovedCount = useMemo(() => {
    return getNormalizedLineCount(diffLines?.removed);
  }, [diffLines]);

  const resolvedAddedCount = addedCount ?? inferredAddedCount;
  const resolvedRemovedCount = removedCount ?? inferredRemovedCount;
  const hasDiffSummary = useMemo(() => {
    return (
      addedCount !== undefined ||
      removedCount !== undefined ||
      inferredAddedCount > 0 ||
      inferredRemovedCount > 0
    );
  }, [addedCount, removedCount, inferredAddedCount, inferredRemovedCount]);

  const copyTextToClipboard = useCallback(async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  }, []);


  // 映射语言到 Monaco 支持的语言
  const getMonacoLanguage = (lang: string): string => {
    const languageMap: Record<string, string> = {
      js: "javascript",
      ts: "typescript",
      jsx: "javascript",
      tsx: "typescript",
      py: "python",
      rb: "ruby",
      go: "go",
      rs: "rust",
      cpp: "cpp",
      c: "c",
      cs: "csharp",
      java: "java",
      kt: "kotlin",
      swift: "swift",
      dart: "dart",
      html: "html",
      css: "css",
      scss: "scss",
      sass: "scss",
      less: "less",
      json: "json",
      xml: "xml",
      yaml: "yaml",
      yml: "yaml",
      sql: "sql",
      md: "markdown",
      markdown: "markdown",
      sh: "shell",
      bash: "shell",
      shell: "shell",
      dockerfile: "dockerfile",
      plaintext: "plaintext",
      text: "plaintext",
    };

    return languageMap[lang.toLowerCase()] || lang.toLowerCase();
  };

  // 清理复制成功状态的定时器
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  // 初始化 Monaco Editor
  useEffect(() => {
    if (!containerRef.current) return;

    const monacoLanguage = getMonacoLanguage(language);

    // 获取当前主题名称
    const themeName = themeManager.getThemeName();

    // 处理初始值，转换转义字符
    const processedValue = processEscapeSequences(value);

    // 创建编辑器
    const newEditor = monaco.editor.create(containerRef.current, {
      value: processedValue,
      language: monacoLanguage,
      theme: themeName,
      readOnly: !editable || disabled,
      minimap: {
        enabled: false,
      },
      fontSize: editorFontOptions.fontSize,
      fontFamily:
        "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
      lineNumbers: lineNumbersOption,
      scrollBeyondLastLine: false,
      wordWrap: "off",
      automaticLayout: true,
      tabSize: tabSize,
      insertSpaces: true,
      renderWhitespace: "none",
      scrollbar: {
        vertical: "auto",
        horizontal: "auto",
        useShadows: false,
        verticalHasArrows: false,
        horizontalHasArrows: false,
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10,
      },
      // 确保选中高亮正常工作
      selectionHighlight: true,
      occurrencesHighlight: "multiFile",
      renderLineHighlightOnlyWhenFocus: false,
      overviewRulerLanes: 0,
      hideCursorInOverviewRuler: true,
      overviewRulerBorder: false,
      folding: true,
      // 行高亮设置 - 禁用默认行高亮，使用装饰器替代
      renderLineHighlight: "none",
      lineDecorationsWidth: 0,
      lineNumbersMinChars: 4,
      glyphMargin: false,
      contextmenu: editable && !disabled,
      quickSuggestions:
        editable && !disabled
          ? {
              other: true,
              comments: true,
              strings: true,
            }
          : false,
      parameterHints: {
        enabled: editable && !disabled,
      },
      suggestOnTriggerCharacters: editable && !disabled,
      acceptSuggestionOnEnter: editable && !disabled ? "on" : "off",
      snippetSuggestions: editable && !disabled ? "inline" : "none",
      suggest: {
        insertMode: "replace",
      },
      padding: {
        top: 0,
        bottom: 16,
      },
      lineHeight: editorFontOptions.lineHeight,
      fixedOverflowWidgets: true,
      // 启用光标闪烁
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: "on",
      // 禁用缩进参考线
      guides: {
        indentation: false,
      },
    });

    editorRef.current = newEditor;

    // 应用行高亮装饰器
    applyHighlightDecorations(newEditor, highlightLines);
    applyDiffDecorations(newEditor, diffLines);

    // 初始化时不显示当前行高亮
    const initialLineNumbers = getCurrentLineNumber(newEditor);
    setSelectedLineNumbers(initialLineNumbers);
    
    // 监听光标位置和选择变化
    const cursorPositionDisposable = newEditor.onDidChangeCursorPosition(() => {
      setHasUserInteracted(true);
      const lineNumbers = getCurrentLineNumber(newEditor);
      setSelectedLineNumbers(lineNumbers);
      applyCurrentLinesDecoration(newEditor, lineNumbers, true);
    });

    // 监听选择变化
    const selectionDisposable = newEditor.onDidChangeCursorSelection(() => {
      setHasUserInteracted(true);
      const lineNumbers = getCurrentLineNumber(newEditor);
      setSelectedLineNumbers(lineNumbers);
      applyCurrentLinesDecoration(newEditor, lineNumbers, true);
    });

    // 监听点击事件
    const clickDisposable = newEditor.onMouseDown(() => {
      setHasUserInteracted(true);
    });

    // 监听内容变化
    const disposable = newEditor.onDidChangeModelContent(() => {
      const value = newEditor.getValue();
      setContent(value);
      onChange?.(value);

      // 更新撤销/重做状态 - 使用编辑器的方法而不是模型的方法
      try {
        // Monaco Editor 的 undo/redo 状态需要通过编辑器触发操作来检查
        setCanUndo(true); // 默认可撤销
        setCanRedo(false); // 默认不可重做
      } catch (e) {
        // 忽略错误，使用默认状态
        setCanUndo(false);
        setCanRedo(false);
      }
    });

    // 监听光标变化以更新撤销/重做状态
    const cursorDisposable = newEditor.onDidChangeCursorPosition(() => {
      try {
        // Monaco Editor 的 undo/redo 状态检查
        setCanUndo(true); // 简化处理
        setCanRedo(false);
      } catch (e) {
        // 忽略错误
      }
    });

    // 初始化撤销/重做状态
    try {
      // 简化状态初始化
      setCanUndo(false);
      setCanRedo(false);
    } catch (e) {
      // 忽略错误
    }

    // 监听主题变化
    const unsubscribeTheme = themeManager.addListener((newThemeName) => {
      newEditor.updateOptions({
        theme: newThemeName,
      });
    });

    // 默认快捷键支持
    const keydownDisposable = newEditor.onKeyDown((e) => {
      if (disabledRef.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const isCommand = e.metaKey || e.ctrlKey;
      if (!isCommand) return;

      // Copy: 有选区复制选区；只读模式无选区时复制全文
      if (e.keyCode === monaco.KeyCode.KeyC) {
        const model = newEditor.getModel();
        const selection = newEditor.getSelection();
        const hasSelection = !!(model && selection && !selection.isEmpty());

        if (hasSelection && model && selection) {
          e.preventDefault();
          e.stopPropagation();
          void copyTextToClipboard(model.getValueInRange(selection));
          return;
        }

        if (!editableRef.current) {
          e.preventDefault();
          e.stopPropagation();
          void copyTextToClipboard(newEditor.getValue());
        }
        return;
      }

      // 只读模式也支持全选与查找
      if (!editableRef.current && e.keyCode === monaco.KeyCode.KeyA) {
        e.preventDefault();
        e.stopPropagation();
        newEditor.trigger("keyboard", "editor.action.selectAll", null);
        return;
      }

      // 查找 / 格式化
      if (e.keyCode === monaco.KeyCode.KeyF) {
        e.preventDefault();
        e.stopPropagation();
        if (editableRef.current && e.shiftKey) {
          newEditor.trigger("keyboard", "editor.action.formatDocument", null);
        } else {
          newEditor.trigger("keyboard", "actions.find", null);
        }
        return;
      }

      // 编辑模式支持撤销/重做
      if (editableRef.current && e.keyCode === monaco.KeyCode.KeyZ) {
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey) {
          newEditor.trigger("keyboard", "redo", null);
        } else {
          newEditor.trigger("keyboard", "undo", null);
        }
        return;
      }

      if (editableRef.current && e.keyCode === monaco.KeyCode.KeyY) {
        e.preventDefault();
        e.stopPropagation();
        newEditor.trigger("keyboard", "redo", null);
      }
    });


    return () => {
      disposable.dispose();
      cursorDisposable.dispose();
      cursorPositionDisposable.dispose();
      selectionDisposable.dispose();
      clickDisposable.dispose();
      unsubscribeTheme();
      keydownDisposable.dispose();
      newEditor.dispose();
    };
  }, []); // 只在组件挂载时创建一次

  // 更新编辑器属性
  useEffect(() => {
    if (!editorRef.current) return;

    const monacoLanguage = getMonacoLanguage(language);

    // 更新只读状态
    editorRef.current.updateOptions({
      readOnly: !editable || disabled,
    });

    // 更新语言
    const model = editorRef.current.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, monacoLanguage);
    }

    // 更新行号显示
    editorRef.current.updateOptions({
      lineNumbers: lineNumbersOption,
    });

    // 更新Tab大小
    editorRef.current.updateOptions({
      tabSize: tabSize,
    });

    // 更新字体大小
    editorRef.current.updateOptions({
      fontSize: editorFontOptions.fontSize,
      lineHeight: editorFontOptions.lineHeight,
    });
  }, [editable, disabled, language, lineNumbersOption, tabSize, editorFontOptions]);

  // 更新内容
  useEffect(() => {
    if (!editorRef.current) return;
    const processedValue = processEscapeSequences(value);
    const currentValue = editorRef.current.getValue();
    if (processedValue !== currentValue) {
      editorRef.current.setValue(processedValue);
    }
  }, [value]);

  // 更新行高亮
  useEffect(() => {
    if (!editorRef.current) return;
    applyHighlightDecorations(editorRef.current, highlightLines);
  }, [highlightLines, applyHighlightDecorations]);

  // 更新 Diff 行高亮
  useEffect(() => {
    if (!editorRef.current) return;
    applyDiffDecorations(editorRef.current, diffLines);
  }, [diffLines, applyDiffDecorations]);

  // 更新当前选中行高亮（当选中行号改变时重新应用）
  useEffect(() => {
    if (!editorRef.current) return;
    applyCurrentLinesDecoration(editorRef.current, selectedLineNumbers, hasUserInteracted);
  }, [selectedLineNumbers, hasUserInteracted, applyCurrentLinesDecoration]);


  // 复制代码
  const handleCopy = useCallback(async () => {
    if (disabled) return;
    try {
      await copyTextToClipboard(content);

      // 显示复制成功状态
      setCopySuccess(true);

      // 2秒后重置状态
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  }, [content, disabled, copyTextToClipboard]);

  // 撤销
  const handleUndo = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.trigger("keyboard", "undo", null);
    }
  }, []);

  // 重做
  const handleRedo = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.trigger("keyboard", "redo", null);
    }
  }, []);

  // 格式化代码
  const handleFormat = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.trigger(
        "keyboard",
        "editor.action.formatDocument",
        null
      );
    }
  }, []);

  // 查找
  const handleFind = useCallback(() => {
    if (editorRef.current) {
      editorRef.current.trigger("keyboard", "actions.find", null);
    }
  }, []);

  const handleLanguageTagClose = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setIsLanguageTagVisible(false);
    onLanguageTagClose?.(e);
  }, [onLanguageTagClose]);

  // 生成组件的class
  const codeClasses = useMemo(() => {
    const classes = [cs.b()];
    if (className) classes.push(className);
    if (showLineNumbers) classes.push(cs.m("with-line-numbers"));
    if (editable) classes.push(cs.m("editable"));
    if (disabled) classes.push(cs.m("disabled"));
    classes.push(cs.m(`font-${fontSize}`));
    return cs.gen(...classes);
  }, [cs, className, showLineNumbers, editable, disabled, fontSize]);

  return (
    <div className={codeClasses}>
      <AriFlex
        className={cs.e("header")}
        justify="space-between"
        align="center"
        showBorderRadius={false}
        ghost={false}
      >
        <AriFlex align="center" className={cs.e("title-wrap")}>
          {headerTitle && <span className={cs.e("title")}>{headerTitle}</span>}
          {hasDiffSummary && (
            <AriFlex align="center" className={cs.e("diff-stats")}>
              <span className={cs.gen(cs.e("diff-stat"), cs.e("diff-stat-add"))}>
                +{resolvedAddedCount}
              </span>
              <span className={cs.gen(cs.e("diff-stat"), cs.e("diff-stat-remove"))}>
                -{resolvedRemovedCount}
              </span>
            </AriFlex>
          )}
        </AriFlex>
        <AriFlex align="center" className={cs.e("actions")}>
          {isLanguageTagVisible && (
            <AriTag
              className={cs.e("language")}
              color="info"
              size="sm"
              closable={languageTagClosable}
              onClose={handleLanguageTagClose}
            >
              {language}
            </AriTag>
          )}
          {showCopyButton && (
            <AriTooltip
              content={copySuccess ? t.common.copySuccess : t.common.copy}
              position="top"
            >
              <AriButton
                className={cs.e("copy")}
                onClick={handleCopy}
                icon={copySuccess ? "check" : "content_copy"}
                color={copySuccess ? "success" : "brand"}
                ghost
                disabled={disabled}
              />
            </AriTooltip>
          )}
        </AriFlex>
      </AriFlex>

      {editable && showToolbar && (
        <AriFlex
          className={cs.e("toolbar")}
          justify="flex-start"
          align="center"
          showBorderRadius={false}
          ghost={false}
        >
          <AriButton
            onClick={handleUndo}
            disabled={disabled || !canUndo}
            type="text"
            icon="undo"
            label={t.common.undo}
          />
          <AriButton
            onClick={handleRedo}
            disabled={disabled || !canRedo}
            type="text"
            icon="redo"
            label={t.common.redo}
          />
          <AriDivider type="vertical" />
          <AriButton
            onClick={handleFormat}
            disabled={disabled}
            type="text"
            icon="format_align_justify"
            label={t.common.format}
          />
          <AriButton
            onClick={handleFind}
            disabled={disabled}
            type="text"
            icon="search"
            label={t.common.find}
          />
        </AriFlex>
      )}

      <div className={cs.e("content")}>
        <div
          ref={containerRef}
          className={cs.e("monaco-container")}
          style={{ height: height || "300px" }}
        />
      </div>
    </div>
  );
};

export default AriCode;
