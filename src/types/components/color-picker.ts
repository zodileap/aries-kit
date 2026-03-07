import { WidgetSize } from "../widget";
import { _Props } from "./base";

/**
 * 颜色格式类型
 * 支持的颜色格式
 */
export type AriColorFormat = 'hex' | 'rgb' | 'hsb' | 'hsl';

/**
 * 渐变方向类型
 * 定义渐变色的方向
 */
export type AriGradientDirection = 'to right' | 'to left' | 'to top' | 'to bottom' | 'to right top' | 'to right bottom' | 'to left top' | 'to left bottom';

/**
 * 渐变色停止点类型
 * 定义渐变色中的颜色停止点
 */
export interface AriGradientStop {
  /**
   * 颜色值
   * 可以是任何有效的CSS颜色
   */
  color: string;
  
  /**
   * 位置百分比
   * 范围从0到100
   * 
   * default: 0
   */
  position?: number;

  /**
   * 透明度
   * 范围从0到1
   * 
   * default: 1
   */
  alpha?: number;
}

/**
 * 渐变色类型
 * 定义渐变色的属性
 */
export interface AriGradientColor {
  /**
   * 渐变方向
   * 定义渐变的方向
   * 
   * default: 'to right'
   */
  direction: AriGradientDirection;
  
  /**
   * 颜色停止点列表
   * 至少需要两个颜色点才能形成渐变
   */
  stops: AriGradientStop[];
}

/**
 * 颜色类型
 * 可以是单色或渐变色
 */
export type AriColorValue = string | AriGradientColor;

/**
 * HSV颜色模型
 * 用于内部颜色计算
 */
export interface AriHSVColor {
  /**
   * 色相
   * 范围从0到360
   */
  h: number;
  
  /**
   * 饱和度
   * 范围从0到100
   */
  s: number;
  
  /**
   * 明度
   * 范围从0到100
   */
  v: number;
  
  /**
   * 透明度
   * 范围从0到1
   * 
   * default: 1
   */
  a: number;
}

/**
 * RGB颜色模型
 * 用于内部颜色计算
 */
export interface AriRGBColor {
  /**
   * 红色通道
   * 范围从0到255
   */
  r: number;
  
  /**
   * 绿色通道
   * 范围从0到255
   */
  g: number;
  
  /**
   * 蓝色通道
   * 范围从0到255
   */
  b: number;
  
  /**
   * 透明度
   * 范围从0到1
   * 
   * default: 1
   */
  a: number;
}

/**
 * 颜色模式类型
 * 定义颜色选择器的模式
 */
export type AriColorMode = 'solid' | 'gradient';

/**
 * 颜色选择器属性
 * 用于选择和预览颜色的组件属性定义
 * 
 * Example:
 * {@link https://aries-react.dev/docs/color-picker}
 */
export interface AriColorPickerProps extends Omit<_Props, 'onChange'> {
  /**
   * 当前选中的颜色值
   * 单色时支持HEX、RGB、RGBA格式
   * 渐变色时为GradientColor对象
   * 
   * default: '#000000'
   */
  value?: AriColorValue;

  /**
   * 默认颜色值
   * 当value未指定时使用此值
   * 
   * default: '#000000'
   */
  defaultValue?: AriColorValue;

  /**
   * 组件尺寸
   * 定义颜色选择器的大小
   * 
   * default: 'default'
   */
  size?: WidgetSize;

  /**
   * 是否禁用选择器
   * 禁用后不可交互
   * 
   * default: false
   */
  disabled?: boolean;

  /**
   * 自定义颜色面板中的预设颜色列表
   * 如果指定，将替换默认预设颜色
   * 
   * default: undefined
   */
  presetColors?: string[];

  /**
   * 颜色变化回调函数
   * 当选择的颜色发生变化时触发
   * 
   * Params:
   * 
   *   - color: 新选择的颜色值(单色为字符串，渐变色为GradientColor对象)
   * 
   * Returns:
   *   
   *   void: 无返回值
   */
  onChange?: (color: AriColorValue) => void;

  /**
   * 弹出面板位置
   * 控制颜色选择面板弹出的位置
   * 
   * default: 'bottom'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * 颜色格式
   * 控制颜色值的显示和返回格式
   * 
   * default: 'hex'
   */
  format?: AriColorFormat;

  /**
   * 是否支持透明度选择
   * 开启后可以选择颜色的透明度
   * 
   * default: false
   */
  showAlpha?: boolean;

  /**
   * 是否支持渐变色选择
   * 开启后可以创建和编辑渐变色
   * 
   * default: false
   */
  enableGradient?: boolean;

  /**
   * 是否显示输入框
   * 开启后可以手动输入颜色值
   * 
   * default: true
   */
  showInput?: boolean;
}