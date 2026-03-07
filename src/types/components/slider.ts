import { _Props } from "./base";
import React from "react";

/**
 * 滑动输入条组件属性
 * 定义滑动输入条组件支持的所有配置选项
 */
export interface AriSliderProps extends Omit<_Props, 'onChange'> {
    /**
     * 滑动条的值
     * 受控组件的当前值
     */
    value?: number;

    /**
     * 默认值
     * 非受控组件的默认值
     * 
     * default: 0
     */
    defaultValue?: number;

    /**
     * 最小值
     * 滑动条的最小值
     * 
     * default: 0
     */
    min?: number;

    /**
     * 最大值
     * 滑动条的最大值
     * 
     * default: 100
     */
    max?: number;

    /**
     * 步长
     * 滑动条的步长
     * 
     * default: 1
     */
    step?: number;

    /**
     * 是否禁用
     * 控制滑动条是否禁用
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 显示刻度
     * 是否显示刻度标记
     * 
     * default: false
     */
    showTicks?: boolean;

    /**
     * 刻度数量
     * 刻度标记的数量(不包括起点和终点)
     * 
     * default: 5
     */
    tickCount?: number;

    /**
     * 刻度标签
     * 自定义刻度标签，如果是函数，则接收当前刻度值并返回标签内容
     */
    tickLabels?: string[] | ((value: number) => string);

    /**
     * 显示值标签
     * 是否显示当前值标签
     * 
     * default: false
     */
    showValueLabel?: boolean;

    /**
     * 值标签格式化函数
     * 用于格式化值标签显示的内容
     * 
     * Params:
     * 
     *   - value: 当前值
     * 
     * Returns:
     *   
     *   string: 格式化后的值标签
     */
    valueLabelFormat?: (value: number) => string;

    /**
     * 颜色
     * 滑动条的颜色主题
     * 
     * default: "primary"
     */
    color?: "primary" | "success" | "warning" | "danger" | "info";

    /**
     * 是否垂直
     * 控制滑动条的方向是否垂直
     * 
     * default: false
     */
    vertical?: boolean;

    /**
     * 高度/宽度
     * 垂直滑动条的高度或水平滑动条的宽度
     */
    size?: string | number;

    /**
     * 滑动条形状
     * 控制滑动条的外观形状
     * 
     * default: "default"
     */
    shape?: "default" | "rounded" | "square";

    /**
     * 前缀内容
     * 显示在滑动条前面的内容
     */
    prefix?: React.ReactNode;

    /**
     * 后缀内容
     * 显示在滑动条后面的内容
     */
    suffix?: React.ReactNode;

    /**
     * 滑动条变化时的回调函数
     * 当用户拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 新的值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: number) => void;

    /**
     * 滑动条拖动结束时的回调函数
     * 当用户结束拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 最终值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onAfterChange?: (value: number) => void;
}

/**
 * 范围滑动条组件属性
 * 定义范围滑动条组件支持的所有配置选项
 */
export interface AriRangeSliderProps extends Omit<AriSliderProps, 'value' | 'defaultValue' | 'onChange' | 'onAfterChange'> {
    /**
     * 范围滑动条的值
     * 受控组件的当前值，包含最小值和最大值
     */
    value?: [number, number];

    /**
     * 默认值
     * 非受控组件的默认值，包含最小值和最大值
     * 
     * default: [0, 0]
     */
    defaultValue?: [number, number];

    /**
     * 滑动条变化时的回调函数
     * 当用户拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 新的值范围
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: [number, number]) => void;

    /**
     * 滑动条拖动结束时的回调函数
     * 当用户结束拖动滑块时触发
     * 
     * Params:
     * 
     *   - value: 最终值范围
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onAfterChange?: (value: [number, number]) => void;
}