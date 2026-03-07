import * as monaco from 'monaco-editor';
import { getTheme, getColorTheme, onThemeChange, onColorThemeChange } from '@ari/init';
import { getMonacoTheme } from './themes';

/**
 * Monaco Editor 主题管理器
 * 负责根据当前主题和颜色模式动态更新Monaco Editor的主题
 */
export class MonacoThemeManager {
  private static instance: MonacoThemeManager;
  private currentTheme: string = 'brand';
  private currentColorTheme: 'light' | 'dark' = 'light';
  private listeners: Array<(themeName: string) => void> = [];
  private unsubscribeTheme?: () => void;
  private unsubscribeColorTheme?: () => void;

  private constructor() {
    this.currentTheme = getTheme();
    this.currentColorTheme = getColorTheme();
    this.setupListeners();
    this.initializeThemes();
  }

  /**
   * 获取主题管理器单例
   */
  public static getInstance(): MonacoThemeManager {
    if (!MonacoThemeManager.instance) {
      MonacoThemeManager.instance = new MonacoThemeManager();
    }
    return MonacoThemeManager.instance;
  }

  /**
   * 设置监听器
   */
  private setupListeners(): void {
    // 监听主题变化
    this.unsubscribeTheme = onThemeChange((theme: string) => {
      this.currentTheme = theme;
      this.updateTheme();
    });

    // 监听颜色模式变化
    this.unsubscribeColorTheme = onColorThemeChange((colorTheme: 'light' | 'dark') => {
      this.currentColorTheme = colorTheme;
      this.updateTheme();
    });
  }

  /**
   * 初始化Monaco主题
   */
  private initializeThemes(): void {
    this.defineCurrentTheme();
  }

  /**
   * 定义当前主题
   */
  private defineCurrentTheme(): void {
    const lightTheme = getMonacoTheme(this.currentTheme, 'light');
    const darkTheme = getMonacoTheme(this.currentTheme, 'dark');

    // 定义亮色主题
    monaco.editor.defineTheme('ari-light', lightTheme);
    
    // 定义暗色主题
    monaco.editor.defineTheme('ari-dark', darkTheme);
  }

  /**
   * 更新主题
   */
  private updateTheme(): void {
    // 强制重新定义主题
    this.defineCurrentTheme();
    const themeName = this.getThemeName();
    // 强制刷新主题
    monaco.editor.setTheme('vs'); // 先切换到默认主题
    setTimeout(() => {
      monaco.editor.setTheme(themeName); // 再切换回我们的主题
    }, 10);
    this.notifyListeners(themeName);
  }

  /**
   * 获取当前应该使用的主题名称
   */
  public getThemeName(): string {
    return this.currentColorTheme === 'dark' ? 'ari-dark' : 'ari-light';
  }

  /**
   * 添加主题变化监听器
   */
  public addListener(listener: (themeName: string) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * 通知所有监听器
   */
  private notifyListeners(themeName: string): void {
    this.listeners.forEach(listener => listener(themeName));
  }

  /**
   * 获取当前主题配置
   */
  public getCurrentTheme() {
    return getMonacoTheme(this.currentTheme, this.currentColorTheme);
  }

  /**
   * 销毁管理器
   */
  public destroy(): void {
    if (this.unsubscribeTheme) {
      this.unsubscribeTheme();
    }
    if (this.unsubscribeColorTheme) {
      this.unsubscribeColorTheme();
    }
    this.listeners = [];
  }
}

/**
 * 获取主题管理器实例
 */
export const getThemeManager = () => MonacoThemeManager.getInstance();