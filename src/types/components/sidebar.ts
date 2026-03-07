import { _Props } from "./base";

/**
 * 侧边栏组件 
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/sidebar}
 */
export interface AriSidebarProps extends _Props {
    /** 方向，控制侧边栏显示在左侧还是右侧 */
    direction?: AriSidebarDirection;
    /** 活动栏位置 */
    activityBarPosition?: AriActivityBarPosition;
    /** 活动栏项目列表 */
    activityBarItems?: AriActivityBarItem[];
    /** 自定义内容 */
    content?: React.ReactNode;
    /** 宽度 */
    width?: number;
    /** 自定义类名 */
    className?: string;
    /** 节点选中回调 */
    onNodeSelect?: (node: AriTreeNode) => void;
    /** 活动栏项目切换回调 */
    onActivityChange?: (item: AriActivityBarItem) => void;
}

/**
 * 树视图组件
 * 用于展示层级结构数据
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/sidebar}
 */
export interface AriTreeViewProps extends AriSidebarProps {
    tree: AriTreeNode[];
    onNodeSelect?: (node: AriTreeNode) => void;
}


/** 侧边栏方向 */
export type AriSidebarDirection = 'left' | 'right';

/** 活动栏位置 */
export type AriActivityBarPosition = 'top' | 'bottom' | 'side';

/** 活动栏项目 */
export interface AriActivityBarItem {
    /** 项目唯一标识 */
    key: string;
    /** 显示图标 */
    icon: string;
    /** 显示标题 */
    title: string;
    /** 自定义内容 */
    content?: React.ReactNode;
}


/** 文件树节点类型 */
export interface AriTreeNode {
    /** 节点唯一标识 */
    key: string;
    /** 节点显示名称 */
    name: string;
    /** 节点图标（可选） */
    icon?: string;
    /** 节点前缀（可选） */
    prefix?: React.ReactNode;
    /** 子节点 */
    children?: AriTreeNode[];
    /** 是否展开 */
    expanded?: boolean;
    /** 是否选中 */
    selected?: boolean;
    /**
     * 节点数据
     */
    data?: any;
}

export interface AriTreeNodeProps {
    node: AriTreeNode;
    expandedKeys: string[];
    onNodeSelect?: (node: AriTreeNode) => void;
}

// 更新TreeNodeProps接口，添加selectedKey属性
export interface AriExtendedTreeNodeProps extends AriTreeNodeProps {
    selectedKey: string | null;
    style?: React.CSSProperties;
    onHeightChange?: (key: string, height: number) => void;
    indexMap?: Record<string, number>; // 添加全局索引映射
    isRoot?: boolean;
    onNodeNumChange?: (nodeNum: number, layoutDuration: number) => void,
    parsetChildrenNodeNum?: number;
    parentExpanded?: boolean;
}