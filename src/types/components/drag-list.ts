import { ReactNode } from 'react';

/**
 * 拖拽列表项配置接口
 * 定义单个拖拽列表项的基本配置
 */
export interface AriDragListItem {
  /**
   * 列表项的唯一标识符
   * 用于在排序过程中识别具体的项目
   */
  id: string | number;

  /**
   * 列表项的内容
   * 可以是任何可渲染的React内容
   */
  content: ReactNode;

  /**
   * 是否禁用该项的拖拽功能
   * 
   * default: false
   */
  disabled?: boolean;
}

/**
 * 拖拽列表组件属性接口
 * 定义拖拽列表组件的配置选项
 */
export interface AriDragListProps {
  /**
   * 拖拽列表的数据项
   * 包含所有需要显示和排序的列表项
   */
  items: AriDragListItem[];

  /**
   * 排序变化回调函数
   * 当列表项顺序发生变化时触发
   * 
   * Params:
   * 
   *   - newItems: 排序后的新列表
   *   - fromIndex: 拖拽项的原始索引
   *   - toIndex: 拖拽项的目标索引
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onSortChange?: (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => void;

  /**
   * 自定义渲染函数
   * 用于自定义每个列表项的渲染内容
   * 
   * Params:
   * 
   *   - item: 当前列表项数据
   *   - index: 当前项在列表中的索引
   *   - isDragging: 是否正在拖拽该项
   *   - isDragOver: 是否有其他项正在拖拽至此项上方
   * 
   * Returns:
   * 
   *   React节点或null
   */
  renderItem?: (
    item: AriDragListItem, 
    index: number, 
    isDragging: boolean, 
    isDragOver: boolean
  ) => ReactNode;

  /**
   * 组件的CSS类名
   * 用于添加额外的样式类
   */
  className?: string;

  /**
   * 组件的内联样式
   * 用于直接设置组件样式
   */
  style?: React.CSSProperties;

  /**
   * 是否禁用整个拖拽列表
   * 禁用后所有项目都无法拖拽
   * 
   * default: false
   */
  disabled?: boolean;

  /**
   * 是否显示拖拽手柄
   * 控制每个列表项是否显示拖拽图标
   * 
   * default: true
   */
  showDragHandle?: boolean;

  /**
   * 列表项之间的间距大小
   * 
   * default: xs
   */
  gap?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * 拖拽手柄的图标名称
   * 使用Google Material Icons的图标名称
   * 
   * default: drag_indicator
   */
  dragHandleIcon?: string;

  /**
   * 空状态时的显示内容
   * 当列表为空时显示的内容
   */
  emptyContent?: ReactNode;

  /**
   * 是否允许空列表
   * 当为true时，空列表也会显示容器
   * 
   * default: true
   */
  allowEmpty?: boolean;
}