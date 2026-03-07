/**
 * 代码编辑器的历史记录项
 */
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
 * 代码编辑器钩子的选项
 */
export interface UseCodeEditorOptions {
  /** 初始代码内容 */
  defaultValue: string;
  /** 缩进空格数 */
  tabSize?: number;
  /** 是否禁用编辑器 */
  disabled?: boolean;
  /** 值变化时的回调函数 */
  onChange?: (value: string) => void;
}

/**
 * 代码编辑器钩子返回值
 */
export interface UseCodeEditorResult {
  /** 当前代码内容 */
  content: string;
  /** 文本框引用 */
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  /** 当前选择范围 */
  selectionRange: { start: number; end: number } | null;
  /** 是否可以撤销 */
  canUndo: boolean;
  /** 是否可以重做 */
  canRedo: boolean;
  /** 文本变化处理函数 */
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** 键盘事件处理函数 */
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /** 粘贴事件处理函数 */
  handlePaste: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  /** 缩进操作 */
  handleIndent: () => void;
  /** 取消缩进操作 */
  handleOutdent: () => void;
  /** 撤销操作 */
  handleUndo: () => void;
  /** 重做操作 */
  handleRedo: () => void;
}
