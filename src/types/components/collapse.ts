import { AriContainerProps } from "./container";

/**
* 可折叠容器的属性
* 
* Example:
* {@link https://aries-react.dev/docs/collapse}
*/
export interface AriCollapseProps extends Omit<AriContainerProps, 'shadowMode'> {
    /**
     * 折叠区域的内容
     */
    collapseContent: React.ReactNode;

    /**
     * 自定义展开按钮的内容
     */
    toggleContent?: React.ReactNode;

    /**
     * 是否展开
     */
    expanded?: boolean;

    /**
     * 初始展开状态（非受控模式下使用）
     * @default false
     */
    defaultExpanded?: boolean;

    /**
     * 展开/收起状态改变时的回调
     */
    onExpandChange?: (expanded: boolean) => void;

    /**
     * 是否显示默认的展开图标
     * @default true
     */
    showDefaultIcon?: boolean;

    /**
     * 阴影模式
     * @default "default" - 始终显示阴影
     * "active" - 仅在悬浮时显示阴影
     * "none" - 不显示阴影
     */
    shadowMode?: "default" | "active" | "none";
}
