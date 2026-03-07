import { useCallback } from 'react';
import { useCss, useDragSort } from '@ari/utils';
import { AriDragListProps, AriDragListItem } from '@ari/types/components';
import { AriContainer } from '../container';
import { AriIcon } from '../icon';
import { AriEmpty } from '../empty';

/**
 * 通用拖拽列表组件
 * 
 * 提供可拖拽排序的列表功能，支持自定义渲染内容。
 * 具有丰富的动画效果和交互反馈，包括拖拽时的缩放、悬停时的位移等视觉反馈。
 * 
 * Example:
 * 
 * ```tsx
 * // 基本用法
 * <AriDragList 
 *   items={[
 *     { id: '1', content: <div>项目 1</div> },
 *     { id: '2', content: <div>项目 2</div> },
 *     { id: '3', content: <div>项目 3</div> }
 *   ]}
 *   onSortChange={(newItems, fromIndex, toIndex) => {
 *     console.log('排序变化', { newItems, fromIndex, toIndex });
 *   }}
 * />
 * 
 * // 自定义渲染
 * <AriDragList 
 *   items={items}
 *   renderItem={(item, index, isDragging, isDragOver) => (
 *     <div className={`custom-item ${isDragging ? 'dragging' : ''}`}>
 *       {item.content}
 *     </div>
 *   )}
 *   onSortChange={handleSortChange}
 * />
 * 
 * // 禁用拖拽手柄
 * <AriDragList 
 *   items={items}
 *   showDragHandle={false}
 *   onSortChange={handleSortChange}
 * />
 * ```
 * 
 * {@link https://aries-react.dev/docs/drag-list}
 */
export const AriDragList: React.FC<AriDragListProps> = ({
  items,
  onSortChange,
  renderItem,
  className,
  style,
  disabled = false,
  showDragHandle = true,
  gap = 'xs',
  dragHandleIcon = 'drag_indicator',
  emptyContent,
  allowEmpty = true,
}) => {
  const cs = useCss('drag-list');

  // 拖拽排序功能
  const { dragState, getDragItemProps } = useDragSort({
    items,
    onSortChange: useCallback(
      (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        onSortChange?.(newItems, fromIndex, toIndex);
      },
      [onSortChange]
    ),
  });

  // 渲染单个列表项
  const renderListItem = useCallback((item: AriDragListItem, index: number) => {
    const isDragging = dragState.dragIndex === index;
    const isDragOver = dragState.hoverIndex === index;
    const isItemDisabled = disabled || item.disabled;

    const dragProps = !isItemDisabled ? getDragItemProps(index) : {};

    return (
      <div
        key={item.id}
        className={cs.gen(
          cs.e('item'),
          cs.is('dragging', isDragging),
          cs.is('drag-over', isDragOver),
          cs.is('disabled', isItemDisabled)
        )}
        {...dragProps}
      >
        {/* 拖拽手柄 */}
        {showDragHandle && (
          <div className={cs.e('drag-handle')}>
            <AriIcon name={dragHandleIcon} />
          </div>
        )}
        
        {/* 列表项内容 */}
        <div className={cs.e('content')}>
          {renderItem ? 
            renderItem(item, index, isDragging, isDragOver) : 
            item.content
          }
        </div>
      </div>
    );
  }, [
    dragState, 
    getDragItemProps, 
    disabled, 
    showDragHandle, 
    dragHandleIcon, 
    renderItem, 
    cs
  ]);

  // 空状态处理
  const isEmpty = items.length === 0;
  
  if (isEmpty && !allowEmpty) {
    return null;
  }

  return (
    <AriContainer
      className={cs.gen(
        cs.b(),
        cs.m(gap),
        cs.is('disabled', disabled),
        cs.is('empty', isEmpty),
        className
      )}
      style={style}
    >
      {isEmpty ? (
        <div className={cs.e('empty-state')}>
          {emptyContent || <AriEmpty description="暂无数据" />}
        </div>
      ) : (
        <div className={cs.e('wrapper')}>
          {items.map((item, index) => renderListItem(item, index))}
        </div>
      )}
    </AriContainer>
  );
};