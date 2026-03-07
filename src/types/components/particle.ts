import { _Props } from "./base";

/**
 * 五彩斑斓粒子动画组件
 * 实现canvas五彩斑斓的粒子动画特效，具有虚化发光效果
 * 
 * Example:
 * {@link https://aries-react.dev/docs/particle}
 */
export interface AriParticleProps extends _Props {
  /**
   * 粒子数量
   * 
   * default: 200
   */
  count?: number;

  /**
   * 粒子大小范围
   * 
   * default: [2, 30]
   */
  sizeRange?: [number, number];

  /**
   * 粒子速度范围
   * 
   * default: [0.1, 0.5]
   */
  speedRange?: [number, number];

  /**
   * 是否启用鼠标交互
   * 
   * default: true
   */
  interactive?: boolean;

  /**
   * 鼠标交互范围
   * 
   * default: 100
   */
  interactionRadius?: number;

  /**
   * 粒子发光效果强度
   * 
   * default: 0.8
   */
  glowIntensity?: number;

  /**
   * 动画速度倍数
   * 
   * default: 1
   */
  animationSpeed?: number;

  /**
   * 背景颜色
   * 
   * default: '#000000'
   */
  backgroundColor?: string;

  /**
   * 粒子透明度范围
   * 
   * default: [0.3, 1]
   */
  alphaRange?: [number, number];

  /**
   * 虚化程度
   * 
   * default: 15
   */
  blurAmount?: number;

  /**
   * 子元素内容
   */
  children?: React.ReactNode;
}

// 五彩斑斓粒子接口
export interface ColorfulBokehParticle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  speedX: number;
  speedY: number;
  hue: number;
  saturation: number;
  lightness: number;
  pulsePhase: number;
  pulseSpeed: number;
}