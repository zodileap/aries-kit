import { _Props } from "./base";

/**
 * 空状态组件属性
 * 用于显示空状态的提示和图标
 * 
 * Examples:
 * {@link https://aries-react.dev/docs/empty}
 */
export interface AriEmptyProps extends _Props {
    /**
     * 空状态的描述文本
     * 显示在图标下方的提示信息
     * 
     * default: "暂无数据"
     */
    description?: string;

    /**
     * 自定义图标名称
     * 使用AriIcon组件显示的图标
     * 当设置了image时，此属性将被忽略
     * 
     * default: "empty-box"
     */
    icon?: string;

    /**
     * 自定义图片路径
     * 显示自定义的图片而不是图标
     * 
     * default: undefined
     */
    image?: string;
}
