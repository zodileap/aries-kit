import { ReactNode } from "react";
import { _Props } from "./base";

/**
 * 通知组件的类型
 * 定义通知组件支持的样式类型
 */
export type AriNotificationType = 'info' | 'success' | 'warning' | 'error';

/**
 * 通知组件的位置
 * 定义通知组件在屏幕上的显示位置
 */
export type AriNotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

/**
 * 通知组件的配置
 * 定义通知组件的配置项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/notification}
 */
export interface AriNotificationConfig {
  /**
   * 通知的标题
   */
  title?: ReactNode;

  /**
   * 通知的内容
   * 显示的文本或ReactNode内容
   */
  content: ReactNode;

  /**
   * 通知的类型
   * 控制通知的样式类型
   * 
   * default: 'info'
   */
  type?: AriNotificationType;

  /**
   * 通知的位置
   * 控制通知在屏幕上的显示位置
   * 
   * default: 'top-right'
   */
  position?: AriNotificationPosition;

  /**
   * 显示时长(ms)
   * 通知自动关闭的延迟时间，设为0则不会自动关闭
   * 
   * default: 3000
   */
  duration?: number;

  /**
   * 是否显示关闭按钮
   * 
   * default: true
   */
  showClose?: boolean;

  /**
   * 层级
   * 控制通知的z-index值
   */
  zIndex?: number;

  /**
   * 自定义类名
   * 添加到通知组件的额外CSS类名
   */
  className?: string;

  /**
   * 通知关闭回调
   * 通知关闭时触发的函数
   */
  onClose?: () => void;
}

/**
 * 通知组件的属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/notification}
 */
export interface AriNotificationProps extends AriNotificationConfig, _Props {
  /**
   * 通知唯一标识
   * 用于标识和管理通知实例
   */
  id: string;

  /**
   * 是否显示
   * 控制通知的显示状态
   */
  visible: boolean;
}

/**
 * 通知上下文类型
 * 用于在应用中全局管理通知
 */
export interface AriNotificationContextType {
  /**
   * 添加一个通知
   */
  addNotification: (notification: AriNotificationConfig) => string;

  /**
   * 移除一个通知
   */
  removeNotification: (id: string) => void;

  /**
   * 清除所有通知
   */
  clearAll: () => void;

  /**
   * 显示信息通知的快捷方法
   */
  info: {
    (content: ReactNode): string;
    (config: Omit<AriNotificationConfig, 'type'>): string;
  };

  /**
   * 显示成功通知的快捷方法
   */
  success: {
    (content: ReactNode): string;
    (config: Omit<AriNotificationConfig, 'type'>): string;
  };

  /**
   * 显示警告通知的快捷方法
   */
  warning: {
    (content: ReactNode): string;
    (config: Omit<AriNotificationConfig, 'type'>): string;
  };

  /**
   * 显示错误通知的快捷方法
   */
  error: {
    (content: ReactNode): string;
    (config: Omit<AriNotificationConfig, 'type'>): string;
  };
}

/**
 * 通知提供者的属性
 */
export interface AriNotificationProviderProps extends _Props {
  /**
   * 最大显示数量
   * 限制同时显示的通知数量
   * 
   * default: 5
   */
  maxCount?: number;

  /**
   * 默认位置
   * 通知的默认显示位置
   * 
   * default: 'top-right'
   */
  defaultPosition?: AriNotificationPosition;
}