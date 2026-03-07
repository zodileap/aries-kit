// src/hooks/useTreeIndexMap.ts
import { useState, useCallback, useEffect, useRef } from 'react';
import { AriTreeNode } from '@ari/types/components';
import { use } from 'i18next';
import { useCss } from '../use-css';
import { CollapseNode } from '@ari/types/hooks/use-collapse-index-map';



/**
 * 计算嵌套伸缩框的结构全局索引的Hook
 * 
 * 用于给树形结构中的每个节点分配全局唯一索引，支持根据展开/折叠状态重新计算
 * 
 * @param node 树形结构数据
 * @param expandedKeys 已展开节点的key列表
 * @param isRoot 是否是根节点
 * @param onNodeNumChange 节点数量变化时的回调
 * @param indexMap 外部提供的索引映射
 * @returns 节点key到全局索引的映射对象和重置方法
 */
export const useCollapseIndexMap = (node: CollapseNode, expandedKeys: string[], isRoot = false, onNodeNumChange?: (nodeNum: number, layoutDuration: number) => void, indexMap: Record<string, number> = {}) => {
    // 节点全局索引映射
    const [globalIndexMap, setGlobalIndexMap] = useState<Record<string, number>>(indexMap || {});
    const [childrenNodeNum, setChildrenNodeNum] = useState<number>(0);
    const [layoutDuration, setLayoutDuration] = useState<number>(0);

    const cs = useCss('')
    const duration = cs.getCssVarAsNumber("duration", "collapse")

    // 使用 ref 来存储变化的值，避免无限循环
    const nodeRef = useRef(node);
    const expandedKeysRef = useRef(expandedKeys);

    // 更新引用值
    useEffect(() => {
        nodeRef.current = node;
        expandedKeysRef.current = expandedKeys;
    }, [node, expandedKeys]);

    // 获取当前节点的全局索引
    const globalIndex = globalIndexMap[node.key] ?? 0;

    // 计算全局索引和节点数量
    const calculateIndices = useCallback(() => {
        const newIndices: Record<string, number> = {};
        let currentIndex = 0;
        let visibleNodeCount = 0;

        // 递归遍历树结构，为每个节点分配索引并计数
        const traverseTree = (nodes: CollapseNode[]): number => {
            if (!nodes) return 0;

            let nodeCount = 0;

            for (const currentNode of nodes) {
                // 为当前节点分配递增的索引
                newIndices[currentNode.key] = currentIndex++;
                nodeCount++; // 计数当前节点
                visibleNodeCount++; // 增加可见节点总数

                // 如果节点展开且有子节点，递归处理子节点
                const isExpanded = expandedKeysRef.current.includes(currentNode.key);

                if (isExpanded && currentNode.children && currentNode.children.length > 0) {
                    // 添加子节点数量到当前计数
                    const childCount = traverseTree(currentNode.children);
                    nodeCount += childCount;
                } else {
                    
                }
            }

            return nodeCount;
        };

        // 从当前节点的子节点开始计算
        if (nodeRef.current.children) {
            traverseTree(nodeRef.current.children);
        }

        // 更新可见子节点总数（不包括当前节点自身）
        setChildrenNodeNum(visibleNodeCount);

        let layoutDuration = (visibleNodeCount) * duration
        if (expandedKeysRef.current.includes(node.key)) {
            layoutDuration = (visibleNodeCount + 0.5) * duration
        }
        setLayoutDuration(layoutDuration);

        // 返回索引映射和节点计数
        return { indices: newIndices, count: visibleNodeCount, duration: layoutDuration };
    }, []); // 不再依赖于可能变化的外部值

    // 更新索引
    const updateIndices = useCallback(() => {
        const result = calculateIndices();
        setGlobalIndexMap(prev => {
            // 如果是根节点，替换整个映射
            if (isRoot) {
                return result.indices;
            }

            // 否则合并新的索引到现有映射
            return { ...prev, ...result.indices };
        });
    }, [calculateIndices, isRoot]);

    // 仅在根节点初始化时计算整个树的索引
    useEffect(() => {
        if (isRoot) {
            updateIndices();
        }
    }, [isRoot, updateIndices]);

    // 当外部indexMap变化时更新
    useEffect(() => {
        if (indexMap && Object.keys(indexMap).length > 0) {
            setGlobalIndexMap(prev => ({ ...prev, ...indexMap }));
        }
    }, [indexMap]);

    // 提供重置函数，在需要时手动触发索引重新计算
    const reset = useCallback(() => {
        const result = calculateIndices();
        setGlobalIndexMap(prev => {
            if (isRoot) {
                return result.indices;
            }
            return { ...prev, ...result.indices };
        });
        onNodeNumChange?.(result.count, result.duration);
    }, [updateIndices]);

    const resetChildrenNode = (nodeNum: number, duration: number) => {
        setChildrenNodeNum(nodeNum);
        setLayoutDuration(duration);
        onNodeNumChange?.(nodeNum, duration);
    }

    return {
        globalIndexMap,
        globalIndex,
        childrenNodeNum,
        layoutDuration,
        reset,
        resetChildrenNode,
        setChildrenNodeNum
    };
};