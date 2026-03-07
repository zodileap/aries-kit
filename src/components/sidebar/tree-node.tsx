import{  useEffect, useRef, useState } from 'react';
import { useCollapseHeight, useCss, useCollapseIndexMap } from '@ari/utils';
import { AriIcon } from '../icon';
import { type AriExtendedTreeNodeProps, type AriTreeNode, type AriTreeNodeProps, type AriTreeViewProps } from '@ari/types/components';
import { AriCustomSidebar } from './custom';

/**
 * 树视图组件
 * 用于展示层级结构数据
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/sidebar}
 */
export const AriTreeView: React.FC<AriTreeViewProps> = ({
    tree,
    onNodeSelect,
    ...sidebarProps
}) => {
    const cs = useCss('sidebar');

    const getExpendKeys = (tree: AriTreeNode[]): string[] => {
        const keys: string[] = [];
        tree.forEach(node => {
            if (node.expanded && node.children && node.children.length > 0) {
                keys.push(node.key);
                keys.push(...getExpendKeys(node.children));
            }
        });
        return keys;
    }


    const [expandedKeys, setExpandedKeys] = useState<string[]>(getExpendKeys(tree));
    // 新增selectedKey状态，用于跟踪当前选中的节点
    const [selectedKey, setSelectedKey] = useState<string | null>(null);

    const handleNodeSelect = (node: AriTreeNode) => {
        // 处理展开/折叠逻辑
        if (node.children && node.children.length > 0) {
            const newExpandedKeys = expandedKeys.includes(node.key)
                ? expandedKeys.filter(key => key !== node.key)
                : [...expandedKeys, node.key];
            setExpandedKeys(newExpandedKeys);
        }

        // 设置选中节点（仅当节点没有子节点或允许选择父节点时）
        if (!node.children || node.children.length === 0) {
            setSelectedKey(node.key);
        }

        onNodeSelect?.(node);
    }

    // 创建树视图内容
    const treeContent = (
        <div className={cs.e('file-tree')}>
            {tree.map(node => {
                return (
                    <AriTreeNodeComponent
                        key={node.key}
                        node={node}
                        expandedKeys={expandedKeys}
                        onNodeSelect={handleNodeSelect}
                        selectedKey={selectedKey} // 传递当前选中节点的key
                        isRoot
                        parentExpanded
                    />
                )
            })}
        </div>
    );

    // 使用AriCustomSidebar作为基础组件
    return (
        <AriCustomSidebar
            {...sidebarProps}
            content={treeContent}
            onNodeSelect={onNodeSelect}
        />
    );
};



/**
 * 树节点组件
 * 用于展示单个树节点及其子节点
 */
export const AriTreeNodeComponent: React.FC<AriExtendedTreeNodeProps> = ({
    node,
    expandedKeys,
    onNodeSelect,
    selectedKey,
    style,
    onHeightChange,
    indexMap,
    isRoot = false,
    onNodeNumChange,
    parsetChildrenNodeNum = 0,
    parentExpanded = false
}) => {
    const cs = useCss('sidebar');
    const [isExpanded, setIsExpanded] = useState(false);
    // 不再本地管理选中状态，而是通过比较selectedKey来确定
    const isSelected = selectedKey === node.key;
    const contentRef = useRef<HTMLDivElement>(null);
    const [animationReady, setAnimationReady] = useState(false);

    // 使用自定义Hook计算全局索引
    const { globalIndex, globalIndexMap, childrenNodeNum, layoutDuration, reset, resetChildrenNode, setChildrenNodeNum } = useCollapseIndexMap(node, expandedKeys, isRoot, onNodeNumChange, indexMap);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();

        // 如果有子节点，处理展开/折叠
        if (node.children && node.children.length > 0) {
            setIsExpanded(!isExpanded);
        }

        // 通知父组件处理选中逻辑
        onNodeSelect?.({ ...node, expanded: isExpanded });
    };

    useEffect(() => {
        setChildrenNodeNum(parsetChildrenNodeNum);
    }, [parsetChildrenNodeNum]);

    // 在组件加载后延迟设置真实展开状态
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        if (expandedKeys.includes(node.key)) {
            // 设置一个较小的延迟，让组件先渲染为收起状态
            timer = setTimeout(() => {
                setIsExpanded(true);
                setAnimationReady(true); // 触发重渲染
            }, 50); // 50ms延迟足够浏览器渲染初始状态
        } else {
            // 对于非默认展开的项，直接响应expandedKeys变化
            setIsExpanded(expandedKeys.includes(node.key))
            setAnimationReady(true);
        }

        return () => clearTimeout(timer);
    }, []);

    // 后续expandedKeys变化的处理
    useEffect(() => {
        if (animationReady) {
            setIsExpanded(expandedKeys.includes(node.key))
        }
    }, [expandedKeys, animationReady, parentExpanded]);


    // 使用自定义hook计算高度
    const { containerRef, containerHeight, handleChildHeightChange } = useCollapseHeight({
        isExpanded,
        childrenCount: node.children?.length || 0,
        nodeKey: node.key,
        onHeightChange,
        gapSize: 4,
        contentHeight: contentRef // 假设节点内容高度约为40px
    });

    return (
        <div
            key={node.key}
            className={cs.gen(
                cs.e('node'),
                cs.is('expanded', isExpanded),
                cs.is('parent-expanded', parentExpanded)
            )}
            style={{
                ...style,
                // 使用全局索引而不是局部索引
                ["--z-collapse-index" as string]: globalIndex,
            }}
            data-z-collapse-node
        >
            <div
                ref={contentRef}
                className={cs.gen(cs.e('node-content'), cs.is('selected', isSelected))}
                onClick={handleClick}
                onMouseEnter={() => reset()}
            >
                {node.icon && <AriIcon name={node.icon} />}
                {node.prefix}
                <span className={cs.e('node-name')}>{node.name}</span>
                {node.children && node.children.length > 0 && (
                    <AriIcon
                        className={cs.e('node-toggle')}
                        name="chevron_right"
                    />
                )}
            </div>
            {node.children && (
                <div
                    ref={containerRef}
                    className={cs.gen(cs.e('node-children'))}
                    style={{
                        ["--z-collapse-num" as string]: childrenNodeNum,
                        ["--z-collapse-layout-duration" as string]: `${layoutDuration}ms`,
                        ["--z-collapse-height" as string]: `${containerHeight}px`
                    }}
                >
                    {node.children.map((child, index) => (
                        <AriTreeNodeComponent
                            z-collapse-node="true"
                            key={child.key}
                            node={child}
                            expandedKeys={expandedKeys}
                            onNodeSelect={onNodeSelect}
                            selectedKey={selectedKey}
                            onHeightChange={handleChildHeightChange}
                            indexMap={globalIndexMap}
                            onNodeNumChange={resetChildrenNode}
                            parsetChildrenNodeNum={childrenNodeNum}
                            parentExpanded={isExpanded && parentExpanded}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
