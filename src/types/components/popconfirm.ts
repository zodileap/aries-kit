import { _Props } from "./base";

/**
 * 气泡确认框属性
 * 
 * Params:
 * 
 *   - title: 确认框标题。
 *   - description: 确认框描述信息。
 *     default: undefined
 *   - okText: 确认按钮文字。
 *     default: "确定"
 *   - cancelText: 取消按钮文字。
 *     default: "取消"
 *   - placement: 气泡框位置。
 *     default: "top"
 *   - children: 触发确认框显示的子元素。
 *   - onConfirm: 点击确认按钮的回调函数。
 *     default: undefined
 *   - onCancel: 点击取消按钮的回调函数。
 *     default: undefined
 *   - okButtonProps: 确认按钮的属性。
 *     default: undefined
 *   - cancelButtonProps: 取消按钮的属性。
 *     default: undefined
 *   - open: 是否显示气泡确认框。
 *     default: undefined
 *   - defaultOpen: 默认是否显示气泡确认框。
 *     default: false
 *   - closeOnEscape: 是否支持按ESC关闭。
 *     default: true
 */
export interface AriPopconfirmProps extends Omit<_Props, 'onConfirm' | 'onCancel'> {
  /**
   * 确认框标题
   */
  title: React.ReactNode;
  
  /**
   * 确认框描述信息
   */
  description?: React.ReactNode;
  
  /**
   * 确认按钮文字
   * 
   * default: "确定"
   */
  okText?: string;
  
  /**
   * 取消按钮文字
   * 
   * default: "取消"
   */
  cancelText?: string;
  
  /**
   * 气泡框位置
   * 
   * default: "top"
   */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
  
  /**
   * 触发确认框显示的子元素
   */
  children: React.ReactNode;
  
  /**
   * 点击确认按钮的回调函数
   */
  onConfirm?: (e: React.MouseEvent) => void;
  
  /**
   * 点击取消按钮的回调函数
   */
  onCancel?: () => void;
  
  /**
   * 确认按钮的属性
   */
  okButtonProps?: Record<string, any>;
  
  /**
   * 取消按钮的属性
   */
  cancelButtonProps?: Record<string, any>;
  
  /**
   * 是否显示气泡确认框
   */
  open?: boolean;
  
  /**
   * 默认是否显示气泡确认框
   * 
   * default: false
   */
  defaultOpen?: boolean;
  
  /**
   * 是否支持按ESC关闭
   * 
   * default: true
   */
  closeOnEscape?: boolean;
  
  /**
   * 定位参考元素，用于受控模式时指定弹窗相对于哪个元素定位
   */
  positionTarget?: React.RefObject<HTMLElement>;
}