import { ReactNode } from "react";
import { Position, WidgetSize } from "../widget";

/**
 * 对话框组件属性
 * 用于在页面上显示需要用户关注的内容，通常用于确认信息或执行特定操作
 */
export interface AriModalProps {
    /**
     * 对话框是否可见
     * 控制对话框的显示和隐藏
     * 
     * default: false
     */
    visible: boolean;

    /**
     * 关闭对话框的回调函数
     * 当用户点击关闭按钮、点击遮罩层或按下ESC键时触发
     */
    onClose: () => void;

    /**
     * 对话框标题
     * 显示在对话框头部的内容
     */
    title?: ReactNode;

    /**
     * 对话框内容
     * 对话框中间部分的主要内容
     */
    children: ReactNode;

    /**
     * 对话框底部内容
     * 通常用于放置操作按钮
     * 
     * default: undefined
     */
    footer?: ReactNode;

    /**
     * 是否显示关闭按钮
     * 控制对话框右上角关闭按钮的显示状态
     * 
     * default: true
     */
    closable?: boolean;

    /**
     * 点击遮罩层是否关闭对话框
     * 控制点击对话框外部区域时的行为
     * 
     * default: true
     */
    maskClosable?: boolean;

    /**
     * 是否在按下ESC键时关闭对话框
     * 
     * default: true
     */
    escClosable?: boolean;

    /**
     * 对话框宽度
     * 可以是CSS支持的宽度值或预设尺寸
     * 
     * default: 'default'
     */
    width?: string | number | WidgetSize;

    /**
     * 对话框位置
     * 控制对话框在屏幕中的位置
     * 
     * default: 'center'
     */
    position?: Position;

    /**
     * 自定义类名
     * 添加到对话框根元素的自定义CSS类名
     * 
     * default: undefined
     */
    className?: string;

    /**
     * 自定义样式
     * 添加到对话框根元素的自定义内联样式
     * 
     * default: undefined
     */
    style?: React.CSSProperties;

    /**
     * 是否显示遮罩层
     * 控制对话框背景遮罩层的显示状态
     * 
     * default: true
     */
    mask?: boolean;

    /**
     * 自定义遮罩层样式
     * 添加到遮罩层的自定义内联样式
     * 
     * default: undefined
     */
    maskStyle?: React.CSSProperties;

    /**
     * 是否在初始渲染时挂载对话框
     * 如果为false，只有visible为true时才会挂载对话框
     * 
     * default: false
     */
    forceRender?: boolean;

    /**
     * 对话框打开后的回调函数
     * 在对话框完全打开并显示后触发
     * 
     * default: undefined
     */
    afterOpen?: () => void;

    /**
     * 对话框关闭后的回调函数
     * 在对话框完全关闭后触发
     * 
     * default: undefined
     */
    afterClose?: () => void;

    /**
     * 是否显示最大化按钮
     * 控制对话框右上角最大化按钮的显示状态
     * 
     * default: false
     */
    maximizable?: boolean;

    /**
     * 是否以全屏方式显示对话框
     * 控制对话框是否铺满整个屏幕
     * 
     * default: false
     */
    fullscreen?: boolean;

    /**
     * 全屏状态变化时的回调函数
     * 当对话框最大化或恢复正常大小时触发
     * 
     * default: undefined
     */
    onFullscreenChange?: (fullscreen: boolean) => void;
}