import { AriaAttributes, CSSProperties, ReactNode } from 'react';

/**
 * 富文本编辑器实例接口
 * 
 * Example:
 * {@link https://aries-react.dev/docs/RichEditor}
 */
export interface RichEditorInstance {
  /**
   * 获取编辑器内容（Markdown格式）
   * 
   * Returns:
   * 
   *   Markdown格式的内容字符串
   */
  getContent: () => string;
  
  /**
   * 设置编辑器内容
   * 
   * Params:
   * 
   *   - content: Markdown格式的内容
   */
  setContent: (content: string) => void;
  
  /**
   * 导出内容为指定格式
   * 
   * Params:
   * 
   *   - format: 导出格式
   * 
   * Returns:
   * 
   *   Promise<string> - 导出的内容
   */
  exportAs: (format: 'md' | 'html' | 'pdf') => Promise<string>;
  
  /**
   * 导入Markdown文件
   * 
   * Params:
   * 
   *   - file: 要导入的文件
   * 
   * Returns:
   * 
   *   Promise<void>
   */
  importFile: (file: File) => Promise<void>;
  
  /**
   * 清空编辑器内容
   */
  clear: () => void;
  
  /**
   * 聚焦编辑器
   */
  focus: () => void;
}

/**
 * 编辑器模式类型
 */
export type RichEditorMode = 'source' | 'visual' | 'split';

/**
 * 工具栏按钮类型
 */
export type ToolbarButton = 
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'heading'
  | 'quote'
  | 'code'
  | 'codeBlock'
  | 'link'
  | 'image'
  | 'table'
  | 'list'
  | 'orderedList'
  | 'taskList'
  | 'divider'
  | 'undo'
  | 'redo';

/**
 * 工具栏配置
 */
export interface ToolbarConfig {
  /**
   * 要显示的按钮列表
   * 
   * default: 所有按钮
   */
  buttons?: ToolbarButton[];
  
  /**
   * 是否显示导入按钮
   * 
   * default: true
   */
  showImport?: boolean;
  
  /**
   * 是否显示导出按钮
   * 
   * default: true
   */
  showExport?: boolean;
  
  /**
   * 是否显示模式切换按钮
   * 
   * default: true
   */
  showModeSwitch?: boolean;
}

/**
 * 富文本编辑器属性接口
 */
export interface RichEditorProps extends AriaAttributes {
  /**
   * 编辑器内容（受控模式）
   */
  value?: string;
  
  /**
   * 默认内容（非受控模式）
   * 
   * default: ''
   */
  defaultValue?: string;
  
  /**
   * 内容变化回调
   * 
   * Params:
   * 
   *   - value: 新的内容值
   */
  onChange?: (value: string) => void;
  
  /**
   * 编辑器模式
   * - source: 源码编辑模式（Markdown）
   * - visual: 可视化编辑模式（渲染后）
   * - split: 分屏模式（同时显示源码和可视化）
   * 
   * default: 'split'
   */
  mode?: RichEditorMode;
  
  /**
   * 模式变化回调
   * 
   * Params:
   * 
   *   - mode: 新的模式
   */
  onModeChange?: (mode: RichEditorMode) => void;
  
  /**
   * 占位文本
   * 
   * default: '请输入内容...'
   */
  placeholder?: string;
  
  /**
   * 编辑器高度
   * 
   * default: '500px'
   */
  height?: string | number;
  
  /**
   * 编辑器最小高度
   * 
   * default: '300px'
   */
  minHeight?: string | number;
  
  /**
   * 编辑器最大高度
   * 
   * default: '800px'
   */
  maxHeight?: string | number;
  
  /**
   * 是否只读
   * 
   * default: false
   */
  readOnly?: boolean;
  
  /**
   * 是否禁用
   * 
   * default: false
   */
  disabled?: boolean;
  
  /**
   * 工具栏配置
   */
  toolbar?: ToolbarConfig | false;
  
  /**
   * 是否显示行号（源码模式）
   * 
   * default: true
   */
  showLineNumbers?: boolean;
  
  /**
   * 是否启用自动保存
   * 
   * default: false
   */
  autoSave?: boolean;
  
  /**
   * 自动保存间隔（毫秒）
   * 
   * default: 30000
   */
  autoSaveInterval?: number;
  
  /**
   * 自动保存回调
   * 
   * Params:
   * 
   *   - content: 当前内容
   */
  onAutoSave?: (content: string) => void;
  
  /**
   * 导入文件前的钩子
   * 
   * Params:
   * 
   *   - file: 要导入的文件
   * 
   * Returns:
   * 
   *   boolean | Promise<boolean> - 是否继续导入
   */
  beforeImport?: (file: File) => boolean | Promise<boolean>;
  
  /**
   * 导出前的钩子
   * 
   * Params:
   * 
   *   - format: 导出格式
   *   - content: 当前内容
   * 
   * Returns:
   * 
   *   string | Promise<string> - 处理后的内容
   */
  beforeExport?: (format: 'md' | 'html' | 'pdf', content: string) => string | Promise<string>;
  
  /**
   * 自定义类名
   */
  className?: string;
  
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  
  /**
   * 代码块配置
   * 控制代码块的显示和功能选项
   */
  codeBlockConfig?: {
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    showTitle?: boolean;
    enableHighlight?: boolean;
    enableMonaco?: boolean;
    onCodeEdit?: (code: string, language: string, title?: string) => void;
  };
  
  /**
   * 子元素（用于扩展功能）
   */
  children?: ReactNode;
}