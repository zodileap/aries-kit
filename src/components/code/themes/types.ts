import * as monaco from 'monaco-editor';

/**
 * Monaco Editor 主题规则配置
 */
export interface MonacoThemeRule {
  token: string;
  foreground: string;
  fontStyle?: string;
}

/**
 * Monaco Editor 主题颜色配置
 */
export interface MonacoThemeColors {
  'editor.background': string;
  'editor.foreground': string;
  'editorLineNumber.foreground': string;
  'editorCursor.foreground': string;
  'editor.selectionBackground': string;
  'editorWhitespace.foreground': string;
  [key: string]: string;
}

/**
 * Monaco Editor 主题配置
 */
export interface MonacoTheme extends monaco.editor.IStandaloneThemeData {
  base: "vs" | "vs-dark";
  inherit: boolean;
  rules: MonacoThemeRule[];
  colors: MonacoThemeColors;
}