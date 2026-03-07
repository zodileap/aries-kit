
export interface UseCollapseHeightOptions {
    /**
     * 是否展开
     */
    isExpanded: boolean;
    /**
     * 子节点数量
     */
    childrenCount: number;
    /**
     * 节点间距，单位为像素
     */
    gapSize?: number;
    /**
     * 高度变化的回调函数
     */
    onHeightChange?: (key: string, height: number) => void;
    /**
     * 节点的唯一标识
     */
    nodeKey: string;
    /**
     * 节点内容的高度，会被加到总高度中返回给父组件
     */
    contentHeight?: React.RefObject<HTMLDivElement>;
    /**
     * 是否是默认展开状态
     */
    defaultExpanded?: boolean;
    /**
     * 节点的全局索引，用于计算顺序动画延迟
     */
    globalIndex?: number;
    /**
     * 动画错开延迟时间，单位为毫秒
     */
    animationStaggerDelay?: number;
}