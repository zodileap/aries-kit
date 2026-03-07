import { createContext } from 'react';
import { RichEditorMode } from '@ari/types';
import type { CodeBlockConfig } from './hooks';

/**
 * 富文本编辑器上下文接口
 */
export interface RichEditorContextValue {
  // hooks
  useEditor: any;
  useMode: any;
  useMarkdown: any;
  useImportExport: any;
  
  // 配置
  disabled: boolean;
  readOnly: boolean;
  showLineNumbers: boolean;
  placeholder: string;
  height: string | number;
  minHeight: string | number;
  maxHeight: string | number;
  style?: React.CSSProperties;
  className?: string;
  toolbar: any;
  
  // 代码块配置
  codeBlockConfig?: CodeBlockConfig;
  
  // 同步定位
  syncScrollPosition: () => void;
  handleTextareaInteraction: () => void;
  handleTextareaClick: () => void;
  handleTextareaSelect: () => void;
}

/**
 * 富文本编辑器上下文
 */
export const RichEditorContext = createContext<RichEditorContextValue | null>(null);