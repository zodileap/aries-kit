import React, { useEffect, useMemo, useRef } from 'react';
import { RichEditorContext, RichEditorContextValue } from './context';
import { RichEditorMode } from '@ari/types';
import { useEditor, useMode, useImportExport, useMarkdown } from './hooks';
import type { CodeBlockConfig } from './hooks';

/**
 * 富文本编辑器Provider属性
 */
export interface RichEditorProviderProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  mode?: RichEditorMode;
  onModeChange?: (mode: RichEditorMode) => void;
  placeholder?: string;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  toolbar?: any;
  showLineNumbers?: boolean;
  autoSave?: boolean;
  autoSaveInterval?: number;
  onAutoSave?: (content: string) => void;
  beforeImport?: (file: File) => boolean | Promise<boolean>;
  beforeExport?: (format: 'md' | 'html' | 'pdf', content: string) => string | Promise<string>;
  className?: string;
  style?: React.CSSProperties;
  codeBlockConfig?: CodeBlockConfig;
}

/**
 * 富文本编辑器Provider组件
 */
export const RichEditorProvider: React.FC<RichEditorProviderProps> = ({
  children,
  value,
  defaultValue = '',
  onChange,
  mode: propMode = 'split',
  onModeChange,
  placeholder = '请输入内容...',
  height = '500px' as string | number,
  minHeight = '300px' as string | number,
  maxHeight = '800px' as string | number,
  disabled = false,
  readOnly = false,
  toolbar = {},
  showLineNumbers = true,
  autoSave = false,
  autoSaveInterval = 30000,
  onAutoSave,
  beforeImport,
  beforeExport,
  className,
  style,
  codeBlockConfig,
}) => {
  // 自动保存定时器引用
  const autoSaveTimerRef = useRef<NodeJS.Timeout>();
  
  // 使用各种 hooks
  const useEditorHook = useEditor(value, defaultValue, onChange);
  const useModeHook = useMode(propMode, onModeChange);
  const useMarkdownHook = useMarkdown(codeBlockConfig);
  const useImportExportHook = useImportExport(
    useEditorHook.content,
    useEditorHook.handleContentChange,
    beforeImport,
    beforeExport
  );
  
  // 自动保存
  useEffect(() => {
    if (autoSave && onAutoSave) {
      autoSaveTimerRef.current = setInterval(() => {
        onAutoSave(useEditorHook.content);
      }, autoSaveInterval);
      
      return () => {
        if (autoSaveTimerRef.current) {
          clearInterval(autoSaveTimerRef.current);
        }
      };
    }
  }, [autoSave, autoSaveInterval, useEditorHook.content, onAutoSave]);
  
  // 全屏切换
  const toggleFullscreen = useModeHook.toggleFullscreen;
  
  // 同步光标位置到预览区域
  const syncScrollPosition = () => {
    const textarea = useEditorHook.textareaRef.current;
    const preview = useEditorHook.previewRef.current;
    
    if (!textarea || !preview || useModeHook.mode === 'visual') return;
    
    // 计算当前光标在文本中的百分比位置
    const cursorPosition = textarea.selectionStart;
    const totalLength = textarea.value.length;
    const scrollPercentage = totalLength > 0 ? cursorPosition / totalLength : 0;
    
    // 根据百分比同步预览区域的滚动位置
    const maxScrollTop = preview.scrollHeight - preview.clientHeight;
    preview.scrollTop = maxScrollTop * scrollPercentage;
  };

  // 处理文本域点击和键盘事件
  const handleTextareaInteraction = () => {
    // 延迟执行以确保光标位置已更新
    setTimeout(syncScrollPosition, 100);
  };
  
  // 不再需要HTML内容和DOM操作，直接使用React组件渲染
  
  // 文本域事件处理
  const handleTextareaClick = () => {
    handleTextareaInteraction();
  };
  
  const handleTextareaSelect = () => {
    handleTextareaInteraction();
  };
  
  // 上下文值
  const contextValue: RichEditorContextValue = useMemo(() => ({
    // hooks
    useEditor: useEditorHook,
    useMode: useModeHook,
    useMarkdown: useMarkdownHook,
    useImportExport: useImportExportHook,
    
    // 配置
    disabled,
    readOnly,
    showLineNumbers,
    placeholder,
    height,
    minHeight,
    maxHeight,
    style,
    className,
    toolbar,
    
    // 代码块配置
    codeBlockConfig,
    
    // 同步定位
    syncScrollPosition,
    handleTextareaInteraction,
    handleTextareaClick,
    handleTextareaSelect,
  }), [
    useEditorHook, useModeHook, useMarkdownHook, useImportExportHook,
    disabled, readOnly, showLineNumbers, placeholder, height, minHeight, maxHeight, style, className, toolbar,
    codeBlockConfig, syncScrollPosition, handleTextareaInteraction, handleTextareaClick, handleTextareaSelect
  ]);
  
  return (
    <RichEditorContext.Provider value={contextValue}>
      {children}
    </RichEditorContext.Provider>
  );
};