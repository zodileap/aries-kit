/**
 * 抽屉组件的属性定义
 */
import React from 'react';

/**
 * 抽屉组件的位置
 */
export type AriDrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

/**
 * 抽屉组件属性
 * 
 * Params:
 *
 *   - visible: 是否可见。
 *     default: false
 *   - placement: 抽屉的位置。
 *     default: 'right'
 *   - width: 抽屉宽度，在 left 和 right 时生效。
 *     default: '300px'
 *   - height: 抽屉高度，在 top 和 bottom 时生效。
 *     default: '300px'
 *   - mask: 是否显示遮罩层。
 *     default: true
 *   - maskClosable: 点击遮罩层是否可以关闭抽屉。
 *     default: true
 *   - closable: 是否显示关闭按钮。
 *     default: true
 *   - destroyOnClose: 关闭时销毁 Drawer 里的子元素。
 *     default: false
 *   - title: 标题。
 *   - footer: 页脚内容。
 *     default: 1000
 *   - className: 自定义类名。
 *   - style: 自定义样式。
 *   - bodyStyle: drawer body 的样式。
 *   - headerStyle: drawer header 的样式。
 *   - footerStyle: drawer footer 的样式。
 *   - maskStyle: 遮罩层样式。
 *   - onClose: 关闭抽屉的回调函数。
 *   - afterVisibleChange: visible 属性变化时的回调函数。
 *   - children: 抽屉内容。
 *   - getContainer: 指定 Drawer 挂载的 HTML 节点，false 为挂载在当前 dom。
 *     default: document.body
 */
export interface AriDrawerProps {
  visible?: boolean;
  placement?: AriDrawerPlacement;
  width?: string | number;
  height?: string | number;
  mask?: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  destroyOnClose?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  onClose?: () => void;
  afterVisibleChange?: (visible: boolean) => void;
  children?: React.ReactNode;
  getContainer?: HTMLElement | (() => HTMLElement) | false;
}
