import { AriContainerProps } from "./container";


/**
 * 卡片组件的属性
 * 继承自容器组件的所有属性，并预设了部分属性的默认值
 * 
 * Example:
 * {@link https://aries-react.dev/docs/card}
 */
export interface AriCardProps extends AriContainerProps {
    /**
     * 卡片标题
     * 显示在卡片顶部的标题文本
     * 
     * default: undefined
     */
    title?: React.ReactNode;
}