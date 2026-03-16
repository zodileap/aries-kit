import { _Props } from "./base";
import React from "react";

/**
 * 输入框变体类型
 * 控制输入框的外观样式
 */
export type AriInputVariant = 'outlined' | 'borderless' | 'filled' | 'underlined' | 'embedded';
export type AriInputStatus = 'default' | 'error' | 'warning' | 'success';

/**
 * 文本输入框属性
 * 定义输入框组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export interface AriTextInputProps extends Omit<_Props, 'onChange' | 'ref'> {
    /**
     * 输入框元素的引用
     */
    ref?: React.LegacyRef<HTMLInputElement>;
    /**
     * 输入框的值
     * 受控组件的当前值
     */
    value?: string;

    /**
     * 输入框的占位符
     * 当输入框为空时显示的提示文本
     * 
     * default: undefined
     */
    placeholder?: string;

    /**
     * 输入框的类型
     * HTML input 元素的 type 属性
     * 
     * default: "text"
     */
    type?: string;

    /**
     * 输入框的自动完成属性
     * 控制浏览器的自动完成行为
     * 
     * default: undefined
     */
    autoComplete?: string;

    /**
     * 输入框的禁用状态
     * 控制输入框是否禁用
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 输入框标签
     * 显示在输入框上方的描述文本
     * 
     * default: undefined
     */
    label?: string;

    /**
     * 帮助信息
     * 显示在输入框下方的提示、校验信息或说明文案
     *
     * default: undefined
     */
    help?: React.ReactNode;

    /**
     * 前缀内容
     * 显示在输入框前面的内容
     * 
     * default: undefined
     */
    prefix?: React.ReactNode;

    /**
     * 后缀内容
     * 显示在输入框后面的内容
     * 
     * default: undefined
     */
    suffix?: React.ReactNode;

    /**
     * 显示字数统计
     * 是否在输入框后方显示字数统计
     * 
     * 但是如果有maxLength属性，则不会显示字数统计
     * 
     * default: false
     */
    showCount?: boolean;

    /**
     * 最大字符数
     * 限制输入的最大字符数
     * 
     * default: undefined
     */
    maxLength?: number;

    /**
     * 最小字符数
     * 限制输入的最小字符数
     * 
     * default: undefined
     */
    minLength?: number;

    /**
     * 是否允许清除
     * 显示清除按钮
     * 
     * default: false
     */
    allowClear?: boolean;

    /**
     * 是否显示密码切换图标
     * 当type为password时，控制是否显示切换密码可见性的按钮
     * 
     * default: true
     */
    showPasswordToggle?: boolean;


    /**
     * 输入框变体
     * 控制输入框的外观样式：outlined(有边框), borderless(无边框), filled(填充背景), underlined(下划线)
     * 
     * default: "outlined"
     */
    variant?: AriInputVariant;

    /**
     * 输入状态
     * 用于表达校验和反馈状态
     *
     * default: "default"
     */
    status?: AriInputStatus;

    /**
     * 是否显示边框
     * 设为 false 时将隐藏输入框边框（等价于无边框视觉）
     *
     * default: true
     */
    bordered?: boolean;

    /**
     * 是否启用 hover/focus 悬浮视觉效果
     * 设为 false 时会关闭输入框在悬停和聚焦时的背景、阴影、边框高亮变化
     *
     * default: true
     */
    enableHoverFocusEffect?: boolean;

    /**
     * 最大宽度
     * 输入框的最大宽度，可以是像素值、百分比或其他CSS宽度值
     * 
     * default: undefined
     */
    maxWidth?: string | number;

    /**
     * 最小宽度
     * 输入框的最小宽度，可以是像素值、百分比或其他CSS宽度值
     * 
     * default: undefined
     */
    minWidth?: string | number;
    
    /**
     * 尺寸
     * 输入框的大小
     * 
     * default: 'default'
     */
    size?: import('../widget').WidgetSize;

    /**
     * 输入框值变化时的回调
     * 当用户输入或修改内容时触发
     * 
     * Params:
     * 
     *   - value: 新的输入值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: string) => void;
}

/**
 * 多行文本输入框属性
 * 定义多行文本区域组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export interface AriTextAreaProps extends Omit<AriTextInputProps, 'type' | 'ref'> {
    /**
     * 文本域元素的引用
     */
    ref?: React.LegacyRef<HTMLTextAreaElement>;
    /**
     * 自动调整高度
     * 根据内容自动调整文本区域的高度
     * 
     * default: false
     */
    autoSize?: boolean | { minRows?: number; maxRows?: number };

    /**
     * 行数
     * 文本区域的默认行数
     * 
     * default: 1
     */
    rows?: number;

    /**
     * 列数
     * 文本区域的默认列数
     * 
     * default: undefined
     */
    cols?: number;
}

/**
 * 搜索输入框属性
 * 定义搜索输入框组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export interface AriSearchInputProps extends AriTextInputProps {
    /**
     * 加载状态
     * 控制搜索按钮的加载状态
     * 
     * default: false
     */
    loading?: boolean;

    /**
     * 搜索按钮
     * 自定义搜索按钮
     * 
     * default: true
     */
    enterButton?: React.ReactNode | boolean;

    /**
     * 搜索回调
     * 当用户点击搜索按钮或按下回车键时触发
     * 
     * Params:
     * 
     *   - value: 搜索的值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onSearch?: (value: string) => void;
    
    /**
     * 尺寸
     * 搜索输入框的大小
     * 
     * default: 'default'
     */
    size?: import('../widget').WidgetSize;
}

/**
 * 数字输入框属性
 * 定义数字输入框组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export interface AriInputNumberProps extends Omit<AriTextInputProps, 'value' | 'onChange'> {
    /**
     * 数字输入框的值
     * 受控组件的当前值
     */
    value?: number;

    /**
     * 默认值
     * 非受控组件的默认值
     */
    defaultValue?: number;

    /**
     * 最小值
     * 用户可输入的最小数值
     */
    min?: number;

    /**
     * 最大值
     * 用户可输入的最大数值
     */
    max?: number;

    /**
     * 步长
     * 每次增减的数值
     * 
     * default: 1
     */
    step?: number;

    /**
     * 精度
     * 数值精度，小数点后位数
     */
    precision?: number;

    /**
     * 数字输入框值变化时的回调
     * 当用户输入或修改内容时触发
     * 
     * Params:
     * 
     *   - value: 新的输入值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: number) => void;
}

/**
 * 文本列表输入框属性
 * 定义文本列表输入框组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export interface AriTextListInputProps extends Omit<AriTextInputProps, 'value' | 'onChange'> {
    /**
     * 文本列表输入框的值
     * 受控组件的当前值，为字符串数组
     */
    value?: string[];

    /**
     * 默认值
     * 非受控组件的默认值
     * 
     * default: []
     */
    defaultValue?: string[];

    /**
     * 新增按钮文本
     * 自定义新增按钮的显示文本
     * 
     * default: "添加"
     */
    addText?: string;

    /**
     * 空项目占位符
     * 当列表项为空时显示的占位符文本
     * 
     * default: "请输入..."
     */
    itemPlaceholder?: string;

    /**
     * 是否允许空值
     * 控制是否允许列表中包含空字符串
     * 
     * default: false
     */
    allowEmpty?: boolean;

    /**
     * 是否允许拖拽排序
     * 控制是否启用拖拽排序功能
     * 
     * default: true
     */
    allowDrag?: boolean;

    /**
     * 最大项目数量
     * 限制列表中最多可包含的项目数量
     * 
     * default: undefined
     */
    maxItems?: number;

    /**
     * 最小项目数量
     * 限制列表中最少需要包含的项目数量
     * 
     * default: 0
     */
    minItems?: number;

    /**
     * 列表值变化时的回调
     * 当用户添加、删除或修改列表项时触发
     * 
     * Params:
     * 
     *   - value: 新的列表值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: string[]) => void;

    /**
     * 项目变化时的回调
     * 当单个列表项的值发生变化时触发
     * 
     * Params:
     * 
     *   - index: 变化项的索引
     *   - itemValue: 新的项目值
     *   - allValues: 完整的列表值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onItemChange?: (index: number, itemValue: string, allValues: string[]) => void;

    /**
     * 项目添加时的回调
     * 当用户添加新项目时触发
     * 
     * Params:
     * 
     *   - index: 新添加项目的索引
     *   - allValues: 完整的列表值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onItemAdd?: (index: number, allValues: string[]) => void;

    /**
     * 项目删除时的回调
     * 当用户删除项目时触发
     * 
     * Params:
     * 
     *   - index: 被删除项目的索引
     *   - deletedValue: 被删除的项目值
     *   - allValues: 删除后的列表值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onItemRemove?: (index: number, deletedValue: string, allValues: string[]) => void;

    /**
     * 拖拽排序时的回调
     * 当用户通过拖拽改变项目顺序时触发
     * 
     * Params:
     * 
     *   - fromIndex: 拖拽的源索引
     *   - toIndex: 拖拽的目标索引
     *   - allValues: 排序后的列表值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onDragSort?: (fromIndex: number, toIndex: number, allValues: string[]) => void;
}
