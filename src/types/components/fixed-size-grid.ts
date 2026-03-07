import { AriContainerProps } from "./container";

/**
 * 固定尺寸网格项目渲染函数的参数
 */
export interface AriFixedSizeGridItemProps {
    /**
     * 列索引
     */
    columnIndex: number;

    /**
     * 行索引
     */
    rowIndex: number;

    /**
     * 应用于网格项目的样式
     */
    style: React.CSSProperties;
}

/**
 * 固定尺寸网格组件
 * 
 * 主要用于需要动态加载大量数据的场景，通过固定尺寸的网格布局，可以提高渲染性能。
 * 
 * Example:
 * {@link https://aries-react.dev/docs/fixed-size-grid}
 */
export interface AriFixedSizeGridProps extends Omit<AriContainerProps, 'children' | 'onScroll'> {
    /**
     * 列数
     * @default 3
     */
    columnCount?: number;

    /**
     * 列宽（像素）
     * @default 100
     */
    columnWidth?: number;

    /**
     * 行高（像素）
     * @default 100
     */
    rowHeight?: number;

    /**
     * 容器高度（像素或CSS长度单位）
     * @default 400
     */
    height?: number | string;

    /**
     * 容器宽度（像素或百分比）
     * @default '100%'
     */
    width?: number | string;

    /**
     * 预渲染的额外行数（视口上方）
     * @default 1
     */
    overscanRowsCount?: number;

    /**
     * 渲染项目的函数
     */
    children: (props: AriFixedSizeGridItemProps) => React.ReactNode;

    /**
     * 项目总数
     */
    itemCount?: number;

    /**
     * 滚动事件处理函数
     */
    onScroll?: (scrollTop: number, scrollLeft: number) => void;

    /**
     * 当项目变为可见时的回调
     */
    onItemsRendered?: (params: {
        visibleStartIndex: number;
        visibleStopIndex: number;
    }) => void;
}

