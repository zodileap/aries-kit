import { ReactNode } from "react";
import { _Props } from "./base";

/**
 * 进度条组件属性
 * 定义进度条组件支持的配置选项，用于显示任务的完成百分比
 * 
 * Example:
 * {@link https://aries-react.dev/docs/progress}
 */
export interface AriProgressProps extends _Props {
    /**
     * 当前进度百分比
     * 取值范围为 0-100
     * 
     * default: 0
     */
    percent?: number;

    /**
     * 进度条类型
     * 定义进度条的展示形式
     * 
     * default: 'line'
     */
    type?: 'line' | 'circle' | 'dashboard';

    /**
     * 进度条状态
     * 定义进度条的状态样式
     * 
     * default: 'normal'
     */
    status?: 'normal' | 'exception' | 'active' | 'success';

    /**
     * 是否显示进度信息
     * 控制是否在进度条旁边显示百分比或其他信息
     * 
     * default: true
     */
    showInfo?: boolean;

    /**
     * 自定义进度信息内容
     * 替代默认的百分比显示
     * 
     * default: undefined
     */
    format?: (percent: number, successPercent?: number) => ReactNode;

    /**
     * 成功进度百分比
     * 用于展示任务中的成功部分
     * 
     * default: undefined
     */
    successPercent?: number;

    /**
     * 进度条背景色
     * 
     * default: undefined
     */
    trailColor?: string;

    /**
     * 进度条尺寸
     * 当type为circle或dashboard时，表示圆形进度条的尺寸
     * 
     * default: 'default'
     */
    size?: 'default' | 'sm' | 'lg' ;

    /**
     * 进度条的色彩，支持字符串或对象形式的渐变色
     * 
     * default: undefined
     */
    strokeColor?: string | {
        from: string;
        to: string;
        direction?: 'to right' | 'to left' | 'to top' | 'to bottom';
    };

    /**
     * 进度条的宽度
     * 当type为line时，为高度；当type为circle/dashboard时，为线条宽度
     * 
     * default: 8
     */
    strokeWidth?: number;

    /**
     * 缺口位置，仅type='dashboard'时可用
     * 
     * default: 'bottom'
     */
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';

    /**
     * 缺口角度，仅type='dashboard'时可用
     * 
     * default: 75
     */
    gapDegree?: number;

    /**
     * 是否圆角
     * 控制进度条两端是否为圆角
     * 
     * default: false
     */
    strokeRounded?: boolean;

    /**
     * 步数，仅type='line'时可用
     * 显示步数形式的进度条
     * 
     * default: undefined
     */
    steps?: number;

    /**
     * 小型步数进度条，对应size='small'
     * 仅在steps时生效
     * 
     * default: false
     */
    stepSmall?: boolean;
}
