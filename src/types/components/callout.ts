/**
 * 告示框类型
 * 定义告示框支持的样式类型
 */
export type AriCalloutType = 'note' | 'tip' | 'info' | 'warning' | 'danger';

/**
 * 告示框属性接口
 * 
 * Example:
 * {@link https://aries-react.dev/docs/callout}
 */
export interface AriCalloutProps {
  /**
   * 告示框类型
   * 控制告示框的样式类型和图标显示
   * 
   * default: 'note'
   */
  type?: AriCalloutType;

  /**
   * 告示框标题
   * 显示在告示框顶部的标题文本
   */
  title?: string;

  /**
   * 告示框内容
   * 支持字符串或React节点
   */
  children?: React.ReactNode;

  /**
   * 自定义类名
   * 添加到告示框的额外CSS类名
   */
  className?: string;

  /**
   * 是否显示图标
   * 控制是否在标题前显示类型图标
   * 
   * default: true
   */
  showIcon?: boolean;

  /**
   * 是否可折叠
   * 当设为true时，告示框可以折叠收起
   * 
   * default: false
   */
  collapsible?: boolean;

  /**
   * 默认是否展开
   * 仅在collapsible为true时有效
   * 
   * default: true
   */
  defaultExpanded?: boolean;

  /**
   * 展开状态变化回调
   * 当告示框展开状态改变时触发
   */
  onExpandedChange?: (expanded: boolean) => void;
}