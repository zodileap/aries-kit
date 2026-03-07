import { _Props } from "./base";

/**
 * 结果组件属性
 * 用于展示操作结果的反馈组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/result}
 */
export interface AriResultProps extends _Props {
    /**
     * 结果状态
     * 不同状态会展示不同的图标和颜色
     * 
     * default: "info"
     */
    status?: 'success' | 'error' | 'info' | 'warning';

    /**
     * 结果标题
     * 展示在图标下方的主要文本
     * 
     * default: undefined
     */
    title?: React.ReactNode;

    /**
     * 结果子标题或描述
     * 展示在标题下方的辅助文本
     * 
     * default: undefined
     */
    subTitle?: React.ReactNode;

    /**
     * 自定义图标名称
     * 使用AriIcon组件显示的图标
     * 当设置后将覆盖状态图标
     * 
     * default: undefined
     */
    icon?: string;

    /**
     * 自定义图片路径
     * 显示自定义的图片而不是图标
     * 
     * default: undefined
     */
    image?: string;

    /**
     * 额外内容
     * 通常用于放置操作按钮
     * 
     * default: undefined
     */
    extra?: React.ReactNode;
}