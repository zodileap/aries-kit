import { CodeHistoryItem } from "@ari/types";
import { UseCodeEditorOptions, UseCodeEditorResult } from "@ari/types/hooks/use-code-editor";
import { useState, useRef, useEffect, useCallback } from "react";
import { indentText, outdentText, shouldOutdent, shouldIndent, insertTab, shouldUndo, shouldRedo, shouldSave } from "./code-editor";

/**
 * 代码编辑器钩子
 * 
 * 提供代码编辑器的核心功能，包括：
 * - 历史记录管理（撤销/重做）
 * - 缩进/取消缩进操作
 * - 键盘事件处理
 * - 粘贴事件处理
 * 
 * Example:
 * ```tsx
 * const {
 *   content,
 *   textareaRef,
 *   handleChange,
 *   handleKeyDown,
 *   handlePaste,
 *   handleIndent,
 *   handleOutdent,
 *   handleUndo,
 *   handleRedo,
 *   canUndo,
 *   canRedo
 * } = useCodeEditor({
 *   defaultValue: 'const hello = "world";',
 *   tabSize: 2,
 *   onChange: (value) => console.log(value)
 * });
 * ```
 */
export const useCodeEditor = ({
    defaultValue = '',
    tabSize = 4,
    disabled = false,
    onChange
}: UseCodeEditorOptions): UseCodeEditorResult => {
    // 处理初始值中的换行符
    const initialValue = defaultValue.replace(/\\n/g, '\n');

    // 状态
    const [content, setContent] = useState<string>(initialValue);
    const [history, setHistory] = useState<CodeHistoryItem[]>([{ content: initialValue }]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);
    const [selectionRange, setSelectionRange] = useState<{ start: number, end: number } | null>(null);

    // 引用
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const hasUnsavedChanges = useRef<boolean>(false);

    // 当defaultValue变化时更新content和历史记录
    useEffect(() => {
        const processedValue = defaultValue.replace(/\\n/g, '\n');
        setContent(processedValue);
        // 重置历史记录
        setHistory([{ content: processedValue }]);
        setHistoryIndex(0);
    }, [defaultValue]);

    // 保存当前状态到历史记录
    const saveToHistory = useCallback((newContent: string, selection?: { start: number, end: number }) => {
        if (disabled) return;

        // 如果内容没有变化，则不记录
        if (newContent === history[historyIndex].content) return;

        // 截断历史记录，移除当前位置之后的记录
        const newHistory = history.slice(0, historyIndex + 1);

        // 添加新的历史记录
        newHistory.push({
            content: newContent,
            selection
        });

        // 如果历史记录超过50项，则移除最早的记录
        if (newHistory.length > 50) {
            newHistory.shift();
        }

        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        hasUnsavedChanges.current = false;
    }, [history, historyIndex, disabled]);

    // 定时保存到历史记录
    useEffect(() => {
        if (disabled) return;

        const intervalId = setInterval(() => {
            if (hasUnsavedChanges.current) {
                saveToHistory(content, selectionRange || undefined);
            }
        }, 2000); // 每2秒保存一次

        return () => clearInterval(intervalId);
    }, [disabled, content, selectionRange, saveToHistory]);

    // 处理文本变化
    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (disabled) return;
        const newValue = e.target.value;
        setContent(newValue);
        onChange?.(newValue);

        // 标记有未保存的更改
        hasUnsavedChanges.current = true;

        // 获取当前选中区域
        const textarea = e.currentTarget;
        setSelectionRange({
            start: textarea.selectionStart,
            end: textarea.selectionEnd
        });
    }, [onChange, disabled]);

    // 处理粘贴事件
    const handlePaste = useCallback((e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        if (disabled) return;

        // 获取剪贴板数据
        const pastedText = e.clipboardData.getData('text');
        if (!pastedText) return;

        const textarea = e.currentTarget;
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;

        // 构建新的文本内容
        const newText = textarea.value.substring(0, startPos) +
            pastedText +
            textarea.value.substring(endPos);

        // 计算新的光标位置
        const newCursorPos = startPos + pastedText.length;

        // 更新内容
        setContent(newText);
        onChange?.(newText);

        // 标记有未保存的更改
        hasUnsavedChanges.current = true;

        // 设置新的选区位置
        setSelectionRange({
            start: newCursorPos,
            end: newCursorPos
        });

        // 立即将更改保存到历史记录
        saveToHistory(newText, { start: newCursorPos, end: newCursorPos });

        // 在下一个事件循环中更新光标位置
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.selectionStart = newCursorPos;
                textareaRef.current.selectionEnd = newCursorPos;

                // 触发一个"模拟"点击事件来确保撤销按钮状态更新
                const event = new Event('input', { bubbles: true });
                textareaRef.current.dispatchEvent(event);
            }
        }, 0);

        // 阻止默认粘贴行为，因为我们已经手动处理了
        e.preventDefault();
    }, [disabled, onChange, saveToHistory]);

    // 处理缩进操作
    const handleIndent = useCallback(() => {
        if (disabled || !textareaRef.current) return;

        const textarea = textareaRef.current;
        const { text, newSelStart, newSelEnd } = indentText(
            textarea.value,
            textarea.selectionStart,
            textarea.selectionEnd,
            tabSize
        );

        setContent(text);
        onChange?.(text);

        // 设置选中区域
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.selectionStart = newSelStart;
                textareaRef.current.selectionEnd = newSelEnd;
                textareaRef.current.focus();
            }
        });

        // 保存到历史记录
        saveToHistory(text, { start: newSelStart, end: newSelEnd });
    }, [disabled, tabSize, onChange, saveToHistory]);

    // 处理取消缩进操作
    const handleOutdent = useCallback(() => {
        if (disabled || !textareaRef.current) return;

        const textarea = textareaRef.current;
        const { text, newSelStart, newSelEnd } = outdentText(
            textarea.value,
            textarea.selectionStart,
            textarea.selectionEnd,
            tabSize
        );

        setContent(text);
        onChange?.(text);

        // 设置选中区域
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.selectionStart = newSelStart;
                textareaRef.current.selectionEnd = newSelEnd;
                textareaRef.current.focus();
            }
        });

        // 保存到历史记录
        saveToHistory(text, { start: newSelStart, end: newSelEnd });
    }, [disabled, tabSize, onChange, saveToHistory]);

    // 撤销操作
    const handleUndo = useCallback(() => {
        if (disabled || historyIndex <= 0) return;

        // 如果有未保存的更改，先保存
        if (hasUnsavedChanges.current) {
            saveToHistory(content, selectionRange || undefined);
            hasUnsavedChanges.current = false;
            return; // 保存后，下一次点击才会回退
        }

        const newIndex = historyIndex - 1;
        const historyItem = history[newIndex];

        setContent(historyItem.content);
        setHistoryIndex(newIndex);
        onChange?.(historyItem.content);

        // 恢复光标位置
        if (historyItem.selection && textareaRef.current) {
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.selectionStart = historyItem.selection!.start;
                    textareaRef.current.selectionEnd = historyItem.selection!.end;
                    textareaRef.current.focus();
                }
            });
        }
    }, [disabled, historyIndex, history, content, selectionRange, saveToHistory, onChange]);

    // 重做操作
    const handleRedo = useCallback(() => {
        if (disabled || historyIndex >= history.length - 1) return;

        const newIndex = historyIndex + 1;
        const historyItem = history[newIndex];

        setContent(historyItem.content);
        setHistoryIndex(newIndex);
        onChange?.(historyItem.content);

        // 恢复光标位置
        if (historyItem.selection && textareaRef.current) {
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.selectionStart = historyItem.selection!.start;
                    textareaRef.current.selectionEnd = historyItem.selection!.end;
                    textareaRef.current.focus();
                }
            });
        }
    }, [disabled, historyIndex, history, onChange]);

    // 处理键盘事件
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (disabled) return;

        // Tab键处理
        if (e.key === 'Tab') {
            e.preventDefault();

            if (shouldOutdent(e)) {
                handleOutdent();
            } else if (shouldIndent(e)) {
                // 如果有选择区域，对选择的行进行缩进
                if (e.currentTarget.selectionStart !== e.currentTarget.selectionEnd) {
                    handleIndent();
                } else {
                    // 如果没有选择区域，插入Tab空格
                    const textarea = e.currentTarget;
                    const { text, newSelStart, newSelEnd } = insertTab(
                        textarea.value,
                        textarea.selectionStart,
                        tabSize
                    );

                    setContent(text);
                    onChange?.(text);

                    // 设置光标位置
                    setTimeout(() => {
                        if (textareaRef.current) {
                            textareaRef.current.selectionStart = newSelStart;
                            textareaRef.current.selectionEnd = newSelEnd;
                            textareaRef.current.focus();
                        }
                    });

                    // 保存到历史记录
                    saveToHistory(text, { start: newSelStart, end: newSelEnd });
                }
            }
            return;
        }

        // 撤销操作
        if (shouldUndo(e)) {
            e.preventDefault();
            handleUndo();
            return;
        }

        // 重做操作
        if (shouldRedo(e)) {
            e.preventDefault();
            handleRedo();
            return;
        }

        // 保存操作
        if (shouldSave(e)) {
            e.preventDefault();
            saveToHistory(content, {
                start: e.currentTarget.selectionStart,
                end: e.currentTarget.selectionEnd
            });
            return;
        }
    }, [
        content,
        disabled,
        tabSize,
        onChange,
        saveToHistory,
        handleUndo,
        handleRedo,
        handleIndent,
        handleOutdent
    ]);

    return {
        content,
        textareaRef,
        selectionRange,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
        handleChange,
        handleKeyDown,
        handlePaste,
        handleIndent,
        handleOutdent,
        handleUndo,
        handleRedo
    };
};

