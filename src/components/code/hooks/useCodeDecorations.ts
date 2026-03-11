import { useCallback, useRef } from 'react';
import * as monaco from "monaco-editor";
import { AriCodeDiffLines, AriCodeLineConfig } from "@ari/types/components";

/**
 * 代码装饰器管理 Hook
 * 
 * 管理 Monaco Editor 中的装饰器，提供统一的装饰器管理接口。
 * 
 * 功能特性：
 * - 代码行高亮装饰器：通过 highlightLines 属性指定需要高亮的代码行
 * - 当前选中行装饰器：跟踪用户当前选中或光标所在的行
 * - 支持单行和范围高亮：可以指定单个行号或行号范围
 * - 自动去重和排序：处理重复的行号并按升序排列
 * - 装饰器生命周期管理：自动清理和更新装饰器
 * 
 * Returns:
 * 
 *   - applyHighlightDecorations: 应用代码行高亮装饰器的函数
 *   - applyCurrentLinesDecoration: 应用当前选中行装饰器的函数  
 *   - getSelectedLineNumbers: 获取当前选中行号的函数
 *   - clearAllDecorations: 清理所有装饰器的函数
 * 
 * Example:
 * ```tsx
 * const {
 *   applyHighlightDecorations,
 *   applyCurrentLinesDecoration,
 *   getSelectedLineNumbers,
 *   clearAllDecorations,
 * } = useCodeDecorations();
 * 
 * // 应用代码行高亮
 * applyHighlightDecorations(editor, [1, 3, {start: 5, end: 7}]);
 * 
 * // 应用当前行高亮
 * const selectedLines = getSelectedLineNumbers(editor);
 * applyCurrentLinesDecoration(editor, selectedLines, true);
 * ```
 */
export const useCodeDecorations = () => {
  // 用于存储装饰器的引用
  const highlightDecorationsRef = useRef<string[]>([]);
  const currentLinesDecorationRef = useRef<string[]>([]);
  const diffAddedDecorationsRef = useRef<string[]>([]);
  const diffRemovedDecorationsRef = useRef<string[]>([]);

  // 处理行高亮配置，将不同格式的行号转换为统一的行号数组
  const processHighlightLines = useCallback((lines: AriCodeLineConfig[], maxLineNumber?: number): number[] => {
    const processedLines: number[] = [];
    
    lines.forEach(line => {
      if (typeof line === 'number') {
        // 单个行号
        if (!maxLineNumber || (line >= 1 && line <= maxLineNumber)) {
          processedLines.push(line);
        }
      } else {
        // 行号范围
        const start = Math.max(1, line.start);
        const end = maxLineNumber ? Math.min(line.end, maxLineNumber) : line.end;

        for (let i = start; i <= end; i++) {
          processedLines.push(i);
        }
      }
    });
    
    // 去重并排序
    return [...new Set(processedLines)].sort((a, b) => a - b);
  }, []);

  // 应用行高亮装饰器
  const applyHighlightDecorations = useCallback((editor: monaco.editor.IStandaloneCodeEditor, highlightLines: AriCodeLineConfig[]) => {
    if (!highlightLines || highlightLines.length === 0) {
      // 如果没有高亮行，清除所有装饰器
      highlightDecorationsRef.current = editor.deltaDecorations(highlightDecorationsRef.current, []);
      return;
    }

    const lineCount = editor.getModel()?.getLineCount();
    const linesToHighlight = processHighlightLines(highlightLines, lineCount);
    
    // 创建装饰器配置
    const decorations: monaco.editor.IModelDeltaDecoration[] = linesToHighlight.map(lineNumber => ({
      range: new monaco.Range(lineNumber, 1, lineNumber, 1),
      options: {
        isWholeLine: true,
        className: 'highlight-line',
      }
    }));

    // 应用装饰器
    highlightDecorationsRef.current = editor.deltaDecorations(highlightDecorationsRef.current, decorations);
  }, [processHighlightLines]);

  // 应用 Diff 装饰器
  const applyDiffDecorations = useCallback((editor: monaco.editor.IStandaloneCodeEditor, diffLines?: AriCodeDiffLines) => {
    if (!diffLines) {
      diffAddedDecorationsRef.current = editor.deltaDecorations(diffAddedDecorationsRef.current, []);
      diffRemovedDecorationsRef.current = editor.deltaDecorations(diffRemovedDecorationsRef.current, []);
      return;
    }

    const lineCount = editor.getModel()?.getLineCount();
    const addedLines = processHighlightLines(diffLines.added ?? [], lineCount);
    const removedLines = processHighlightLines(diffLines.removed ?? [], lineCount);

    const addedDecorations: monaco.editor.IModelDeltaDecoration[] = addedLines.map((lineNumber) => ({
      range: new monaco.Range(lineNumber, 1, lineNumber, 1),
      options: {
        isWholeLine: true,
        className: 'diff-line-add',
        marginClassName: 'diff-line-add-margin',
        lineNumberClassName: 'diff-line-add-number',
      }
    }));

    const removedDecorations: monaco.editor.IModelDeltaDecoration[] = removedLines.map((lineNumber) => ({
      range: new monaco.Range(lineNumber, 1, lineNumber, 1),
      options: {
        isWholeLine: true,
        className: 'diff-line-remove',
        marginClassName: 'diff-line-remove-margin',
        lineNumberClassName: 'diff-line-remove-number',
      }
    }));

    diffAddedDecorationsRef.current = editor.deltaDecorations(diffAddedDecorationsRef.current, addedDecorations);
    diffRemovedDecorationsRef.current = editor.deltaDecorations(diffRemovedDecorationsRef.current, removedDecorations);
  }, [processHighlightLines]);

  // 应用当前选中行装饰器
  const applyCurrentLinesDecoration = useCallback((editor: monaco.editor.IStandaloneCodeEditor, lineNumbers: number[], shouldShow: boolean) => {
    // 只有在应该显示时才显示当前行高亮
    if (!shouldShow) {
      currentLinesDecorationRef.current = editor.deltaDecorations(currentLinesDecorationRef.current, []);
      return;
    }

    if (lineNumbers.length === 0) {
      // 清除所有当前行装饰器
      currentLinesDecorationRef.current = editor.deltaDecorations(currentLinesDecorationRef.current, []);
      return;
    }

    const decorations: monaco.editor.IModelDeltaDecoration[] = lineNumbers.map(lineNumber => ({
      range: new monaco.Range(lineNumber, 1, lineNumber, 1),
      options: {
        isWholeLine: true,
        className: 'current-line-highlight',
      }
    }));

    // 应用当前行装饰器
    currentLinesDecorationRef.current = editor.deltaDecorations(currentLinesDecorationRef.current, decorations);
  }, []);

  // 检查是否有文本被选中（不只是光标定位）
  const hasTextSelection = useCallback((editor: monaco.editor.IStandaloneCodeEditor): boolean => {
    const selections = editor.getSelections();
    if (!selections || selections.length === 0) {
      return false;
    }

    return selections.some(selection => {
      // 如果选择的开始和结束位置不同，说明有文本被选中
      return !(
        selection.startLineNumber === selection.endLineNumber &&
        selection.startColumn === selection.endColumn
      );
    });
  }, []);

  // 获取当前光标所在的行号（仅在没有文本选择时使用）
  const getCurrentLineNumber = useCallback((editor: monaco.editor.IStandaloneCodeEditor): number[] => {
    // 如果有文本选择，不显示当前行高亮
    if (hasTextSelection(editor)) {
      return [];
    }

    // 只返回光标所在的行
    const position = editor.getPosition();
    return position ? [position.lineNumber] : [];
  }, [hasTextSelection]);

  // 清理所有装饰器
  const clearAllDecorations = useCallback((editor: monaco.editor.IStandaloneCodeEditor) => {
    highlightDecorationsRef.current = editor.deltaDecorations(highlightDecorationsRef.current, []);
    currentLinesDecorationRef.current = editor.deltaDecorations(currentLinesDecorationRef.current, []);
    diffAddedDecorationsRef.current = editor.deltaDecorations(diffAddedDecorationsRef.current, []);
    diffRemovedDecorationsRef.current = editor.deltaDecorations(diffRemovedDecorationsRef.current, []);
  }, []);

  return {
    applyHighlightDecorations,
    applyDiffDecorations,
    applyCurrentLinesDecoration,
    getCurrentLineNumber,
    hasTextSelection,
    clearAllDecorations,
  };
};
