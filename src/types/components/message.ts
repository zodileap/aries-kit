// src/types/components/message.ts

/**
 * 消息类型
 * 定义消息组件支持的样式类型
 */
export type AriMessageType = 'info' | 'success' | 'warning' | 'error' | 'primary';

/**
 * 消息配置接口
 * 定义消息组件的配置项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/message} 
 */
export interface AriMessageConfig {
    /**
     * 消息内容
     * 显示的文本内容
     */
    content: string;

    /**
     * 消息类型
     * 控制消息的样式类型
     * 
     * default: 'info'
     */
    type?: AriMessageType;

    /**
     * 显示时长(ms)
     * 消息自动关闭的延迟时间，设为0则不会自动关闭
     * 
     * default: 3000
     */
    duration?: number;

    /**
     * 是否显示关闭按钮
     * 
     * default: false
     */
    showClose?: boolean;

    /**
     * 层级
     * 控制消息的z-index值
     */
    zIndex?: number;

    /**
     * 自定义类名
     * 添加到消息组件的额外CSS类名
     */
    className?: string;

    /**
     * 消息关闭回调
     * 消息关闭时触发的函数
     */
    onClose?: () => void;

    /**
     * 是否自动关闭
     * 
     * default: true
     */
    autoClose?: boolean;
}

/**
 * Message内部组件属性
 * 内部消息组件使用的属性
 */
export interface AriMessageProps extends AriMessageConfig {
    /**
     * 消息唯一标识
     * 用于标识和管理消息实例
     */
    id: string;

    /**
     * 是否显示
     * 控制消息的显示状态
     */
    visible: boolean;
}