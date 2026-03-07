import { useCallback, useState, useRef } from 'react';

/**
 * 拖拽排序选项接口
 * 定义拖拽排序功能的配置选项
 */
export interface UseDragSortOptions<T> {
    /**
     * 数组数据
     * 需要排序的数组数据
     */
    items: T[];

    /**
     * 排序变化回调
     * 当排序发生变化时触发
     * 
     * Params:
     * 
     *   - newItems: 排序后的新数组
     *   - fromIndex: 拖拽的源索引
     *   - toIndex: 拖拽的目标索引
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onSortChange: (newItems: T[], fromIndex: number, toIndex: number) => void;
}

/**
 * 拖拽状态接口
 * 定义拖拽过程中的状态信息
 */
export interface DragState {
    /**
     * 拖拽的源索引
     * 当前被拖拽项的索引
     */
    dragIndex: number | null;

    /**
     * 鼠标悬停的目标索引
     * 鼠标当前悬停位置的索引
     */
    hoverIndex: number | null;
}

/**
 * 拖拽排序 Hook
 * 提供拖拽排序功能，支持数组元素的拖拽重新排序
 * 
 * Params:
 * 
 *   - options: 拖拽排序配置选项
 * 
 * Returns:
 *   
 *   包含拖拽状态和处理函数的对象
 */
export const useDragSort = <T>({ items, onSortChange }: UseDragSortOptions<T>) => {
    // 拖拽状态
    const [dragState, setDragState] = useState<DragState>({
        dragIndex: null,
        hoverIndex: null
    });

    // 拖拽引用，用于存储当前拖拽的索引
    const dragIndexRef = useRef<number | null>(null);
    // 原始拖拽索引，用于记录拖拽开始时的位置
    const originalDragIndexRef = useRef<number | null>(null);

    /**
     * 重新排序数组
     * 将指定位置的元素移动到目标位置
     */
    const reorderArray = useCallback((list: T[], startIndex: number, endIndex: number): T[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }, []);

    /**
     * 开始拖拽处理函数
     * 当用户开始拖拽某个项目时调用
     * 
     * Params:
     * 
     *   - index: 被拖拽项的索引
     */
    const handleDragStart = useCallback((index: number) => {
        dragIndexRef.current = index;
        originalDragIndexRef.current = index; // 记录原始位置
        setDragState({
            dragIndex: index,
            hoverIndex: null
        });
    }, []);

    /**
     * 拖拽悬停处理函数
     * 当拖拽项在目标区域上方悬停时调用
     * 
     * Params:
     * 
     *   - index: 悬停区域的索引
     */
    const handleDragOver = useCallback((index: number) => {
        const dragIndex = dragIndexRef.current;
        
        if (dragIndex === null) {
            return;
        }

        // 如果拖回原位置，清除hover状态
        if (dragIndex === index) {
            setDragState(prev => ({
                ...prev,
                hoverIndex: null
            }));
            return;
        }

        // 更新hover状态
        setDragState(prev => ({
            ...prev,
            hoverIndex: index
        }));
    }, []);

    /**
     * 拖拽结束处理函数
     * 当拖拽操作结束时调用（无论是否成功放置）
     */
    const handleDragEnd = useCallback(() => {
        // 重置所有引用和状态 - 排序已在 handleDrop 中处理
        dragIndexRef.current = null;
        originalDragIndexRef.current = null;
        setDragState({
            dragIndex: null,
            hoverIndex: null
        });
    }, []);

    /**
     * 拖拽放置处理函数
     * 当拖拽项被放置在目标区域时调用
     * 
     * Params:
     * 
     *   - index: 放置区域的索引
     */
    const handleDrop = useCallback((index: number) => {
        const originalIndex = originalDragIndexRef.current;
        
        // 如果有有效的原始位置且位置发生了变化，进行排序
        if (originalIndex !== null && originalIndex !== index) {
            const newItems = reorderArray(items, originalIndex, index);
            onSortChange(newItems, originalIndex, index);
        }
        
        // 重置所有引用和状态
        dragIndexRef.current = null;
        originalDragIndexRef.current = null;
        setDragState({
            dragIndex: null,
            hoverIndex: null
        });
    }, [items, onSortChange, reorderArray]);

    /**
     * 获取拖拽项属性
     * 返回用于绑定到拖拽项的属性对象
     * 
     * Params:
     * 
     *   - index: 项目索引
     * 
     * Returns:
     *   
     *   包含拖拽相关属性的对象
     */
    const getDragItemProps = useCallback((index: number) => ({
        draggable: true,
        onDragStart: () => handleDragStart(index),
        onDragEnd: handleDragEnd,
        onDragOver: (e: React.DragEvent) => {
            e.preventDefault();
            handleDragOver(index);
        },
        onDrop: (e: React.DragEvent) => {
            e.preventDefault();
            handleDrop(index);
        },
        'data-drag-index': index
    }), [handleDragStart, handleDragEnd, handleDragOver, handleDrop]);

    return {
        dragState,
        getDragItemProps
    };
};