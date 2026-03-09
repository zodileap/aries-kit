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
    selectedKey: controlledSelectedKey,
    expandedKeys: controlledExpandedKeys,
    onExpandedKeysChange,
    ...sidebarProps
}) => {
    const cs = useCss('sidebar');
    const collectTreeKeys = (nodes: AriTreeNode[]): Set<string> => {
        const keys = new Set<string>();

        const visit = (treeNodes: AriTreeNode[]) => {
            treeNodes.forEach(node => {
                keys.add(node.key);
                if (node.children?.length) {
                    visit(node.children);
                }
            });
        };

        visit(nodes);
        return keys;
    };

    const collectExpandableKeys = (nodes: AriTreeNode[]): Set<string> => {
        const keys = new Set<string>();

        const visit = (treeNodes: AriTreeNode[]) => {
            treeNodes.forEach(node => {
                if (node.children?.length) {
                    keys.add(node.key);
                    visit(node.children);
                }
            });
        };

        visit(nodes);
        return keys;
    };

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

    const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(getExpendKeys(tree));
    const [internalSelectedKey, setInternalSelectedKey] = useState<string | null>(null);
    const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;
    const selectedKey = controlledSelectedKey ?? internalSelectedKey;

    useEffect(() => {
        if (controlledExpandedKeys === undefined) {
            setInternalExpandedKeys(getExpendKeys(tree));
        }
    }, [tree, controlledExpandedKeys]);

    useEffect(() => {
        const expandableKeys = collectExpandableKeys(tree);

        if (controlledExpandedKeys === undefined) {
            setInternalExpandedKeys(prev => prev.filter(key => expandableKeys.has(key)));
            return;
        }

        const sanitizedExpandedKeys = controlledExpandedKeys.filter(key => expandableKeys.has(key));
        if (
            sanitizedExpandedKeys.length !== controlledExpandedKeys.length ||
            sanitizedExpandedKeys.some((key, index) => key !== controlledExpandedKeys[index])
        ) {
            onExpandedKeysChange?.(sanitizedExpandedKeys);
        }
    }, [tree, controlledExpandedKeys, onExpandedKeysChange]);

    useEffect(() => {
        if (controlledSelectedKey !== undefined) {
            return;
        }

        const allKeys = collectTreeKeys(tree);
        setInternalSelectedKey(prev => (prev && allKeys.has(prev) ? prev : null));
    }, [tree, controlledSelectedKey]);

    const updateExpandedKeys = (nextExpandedKeys: string[]) => {
        if (controlledExpandedKeys === undefined) {
            setInternalExpandedKeys(nextExpandedKeys);
        }
        onExpandedKeysChange?.(nextExpandedKeys);
    };

    const handleNodeSelect = (node: AriTreeNode) => {
        // 处理展开/折叠逻辑
        if (node.children && node.children.length > 0) {
            const newExpandedKeys = expandedKeys.includes(node.key)
                ? expandedKeys.filter(key => key !== node.key)
                : [...expandedKeys, node.key];
            updateExpandedKeys(newExpandedKeys);
        }

        // 点击任意节点都进入选中态，保证文件夹和根节点也有可见反馈
        if (controlledSelectedKey === undefined) {
            setInternalSelectedKey(node.key);
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
                        selectedKey={selectedKey}
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
    const children = node.children ?? [];
    const hasChildren = !!node.children?.length;

    // 使用自定义Hook计算全局索引
    const { globalIndex, globalIndexMap, childrenNodeNum, layoutDuration, reset, resetChildrenNode, setChildrenNodeNum } = useCollapseIndexMap(node, expandedKeys, isRoot, onNodeNumChange, indexMap);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const nextExpanded = hasChildren && !isExpanded;

        // 如果有子节点，处理展开/折叠
        if (hasChildren) {
            setIsExpanded(nextExpanded);
        }

        // 通知父组件处理选中逻辑
        onNodeSelect?.({ ...node, expanded: nextExpanded });
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
            setIsExpanded(hasChildren && expandedKeys.includes(node.key))
        }
    }, [expandedKeys, animationReady, hasChildren, node.key, parentExpanded]);

    useEffect(() => {
        if (!hasChildren) {
            setIsExpanded(false);
        }
    }, [hasChildren]);


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
                {hasChildren && (
                    <AriIcon
                        className={cs.e('node-toggle')}
                        name="chevron_right"
                    />
                )}
            </div>
            {hasChildren && (
                <div
                    ref={containerRef}
                    className={cs.gen(cs.e('node-children'))}
                    style={{
                        ["--z-collapse-num" as string]: childrenNodeNum,
                        ["--z-collapse-layout-duration" as string]: `${layoutDuration}ms`,
                        ["--z-collapse-height" as string]: `${containerHeight}px`
                    }}
                >
                    {children.map((child, index) => (
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
