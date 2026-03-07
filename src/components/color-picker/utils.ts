import { AriColorFormat, AriHSVColor, AriRGBColor } from "@ari/types/components";

/**
 * 颜色转换工具函数集
 * 包含HSV、RGB、HEX、HSL等各种颜色格式之间的转换函数
 */

/**
 * HSV转RGB颜色转换
 * 
 * Params:
 * 
 *   - h: 色相 (0-360)
 *   - s: 饱和度 (0-100)
 *   - v: 明度 (0-100)
 * 
 * Returns:
 * 
 *   RGB颜色对象 {r,g,b}
 */
export const hsvToRgb = (h: number, s: number, v: number): AriRGBColor => {
  h = (h % 360) / 60;
  s = s / 100;
  v = v / 100;
  
  const c = v * s;
  const x = c * (1 - Math.abs(h % 2 - 1));
  const m = v - c;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 1) {
    [r, g, b] = [c, x, 0];
  } else if (h >= 1 && h < 2) {
    [r, g, b] = [x, c, 0];
  } else if (h >= 2 && h < 3) {
    [r, g, b] = [0, c, x];
  } else if (h >= 3 && h < 4) {
    [r, g, b] = [0, x, c];
  } else if (h >= 4 && h < 5) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: 1
  };
};

/**
 * RGB转HSV颜色转换
 * 
 * Params:
 * 
 *   - r: 红色通道 (0-255)
 *   - g: 绿色通道 (0-255)
 *   - b: 蓝色通道 (0-255)
 * 
 * Returns:
 * 
 *   HSV颜色对象 {h,s,v}
 */
export const rgbToHsv = (r: number, g: number, b: number): { h: number, s: number, v: number } => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  let h = 0;
  const s = max === 0 ? 0 : delta / max;
  const v = max;
  
  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }
  
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  
  return {
    h,
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
};

/**
 * RGB转HEX颜色转换
 * 
 * Params:
 * 
 *   - r: 红色通道 (0-255)
 *   - g: 绿色通道 (0-255)
 *   - b: 蓝色通道 (0-255)
 *   - a: 透明度 (0-1)，可选
 * 
 * Returns:
 * 
 *   HEX颜色字符串
 */
export const rgbToHex = (r: number, g: number, b: number, a?: number): string => {
  const toHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  if (a !== undefined && a < 1) {
    return `${hex}${toHex(Math.round(a * 255))}`;
  }
  
  return hex;
};

/**
 * HEX转RGB颜色转换
 * 
 * Params:
 * 
 *   - hex: HEX颜色字符串
 * 
 * Returns:
 * 
 *   RGB颜色对象 {r,g,b,a}
 */
export const hexToRgb = (hex: string): AriRGBColor => {
  hex = hex.replace(/^#/, '');
  
  let r, g, b, a;
  
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
    a = 1;
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    a = 1;
  } else if (hex.length === 8) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    a = parseInt(hex.substring(6, 8), 16) / 255;
  } else {
    throw new Error('无效的HEX颜色格式');
  }
  
  return { r, g, b, a };
};

/**
 * HSL转HSV颜色转换
 * 
 * Params:
 * 
 *   - h: 色相 (0-360)
 *   - s: 饱和度 (0-100)
 *   - l: 亮度 (0-100)
 * 
 * Returns:
 * 
 *   HSV颜色对象 {h,s,v}
 */
export const hslToHsv = (h: number, s: number, l: number): { h: number, s: number, v: number } => {
  s /= 100;
  l /= 100;
  
  const v = l + s * Math.min(l, 1 - l);
  const sv = v === 0 ? 0 : 2 * (1 - l / v);
  
  return {
    h,
    s: Math.round(sv * 100),
    v: Math.round(v * 100)
  };
};

/**
 * HSV转HSL颜色转换
 * 
 * Params:
 * 
 *   - h: 色相 (0-360)
 *   - s: 饱和度 (0-100)
 *   - v: 明度 (0-100)
 * 
 * Returns:
 * 
 *   HSL颜色对象 {h,s,l}
 */
export const hsvToHsl = (h: number, s: number, v: number): { h: number, s: number, l: number } => {
  s /= 100;
  v /= 100;
  
  const l = v * (1 - s / 2);
  const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
  
  return {
    h,
    s: Math.round(sl * 100),
    l: Math.round(l * 100)
  };
};

/**
 * 解析颜色字符串为HSV颜色模型
 * 
 * Params:
 * 
 *   - colorString: 颜色字符串 (HEX, RGB, RGBA, HSB, HSV, HSL)
 * 
 * Returns:
 * 
 *   HSV颜色对象 {h,s,v,a}
 */
export const parseColorString = (colorString: string): AriHSVColor => {
  if (colorString.startsWith('#')) {
    // HEX格式
    const { r, g, b, a = 1 } = hexToRgb(colorString);
    const hsv = rgbToHsv(r, g, b);
    return { ...hsv, a };
  } else if (colorString.toLowerCase().startsWith('rgb')) {
    // RGB/RGBA格式
    const match = colorString.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*(?:\.\d+)?))?\s*\)/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
      const hsv = rgbToHsv(r, g, b);
      return { ...hsv, a };
    }
  } else if (colorString.toLowerCase().startsWith('hsb') || colorString.toLowerCase().startsWith('hsv')) {
    // HSB/HSV格式
    const match = colorString.match(/hs[bv]\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*(\d*(?:\.\d+)?))?\s*\)/);
    if (match) {
      const h = parseInt(match[1]);
      const s = parseInt(match[2]);
      const v = parseInt(match[3]);
      const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
      return { h, s, v, a };
    }
  } else if (colorString.toLowerCase().startsWith('hsl')) {
    // HSL格式
    const match = colorString.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*(\d*(?:\.\d+)?))?\s*\)/);
    if (match) {
      const h = parseInt(match[1]);
      const s = parseInt(match[2]);
      const l = parseInt(match[3]);
      const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
      const hsv = hslToHsv(h, s, l);
      return { ...hsv, a };
    }
  }
  
  // 默认返回黑色
  return { h: 0, s: 0, v: 0, a: 1 };
};

/**
 * 格式化HSV颜色为指定格式的颜色字符串
 * 
 * Params:
 * 
 *   - h: 色相 (0-360)
 *   - s: 饱和度 (0-100)
 *   - v: 明度 (0-100)
 *   - a: 透明度 (0-1)
 *   - outputFormat: 输出格式 ('hex', 'rgb', 'hsb', 'hsl')
 *   - showAlpha: 是否显示透明度
 * 
 * Returns:
 * 
 *   格式化后的颜色字符串
 */
export const formatColor = (
  h: number, 
  s: number, 
  v: number, 
  a: number, 
  outputFormat: AriColorFormat,
  showAlpha: boolean = true // 默认总是显示透明度
): string => {
  const { r, g, b } = hsvToRgb(h, s, v);
  
  if (outputFormat === 'hex') {
    return rgbToHex(r, g, b, a); // 始终包含透明度
  } else if (outputFormat === 'rgb') {
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`; // 始终使用rgba
  } else if (outputFormat === 'hsb') {
    return `hsb(${h}, ${s}%, ${v}%, ${a.toFixed(2)})`; // 始终包含透明度
  } else if (outputFormat === 'hsl') {
    const { s: hslS, l: hslL } = hsvToHsl(h, s, v);
    return `hsl(${h}, ${hslS}%, ${hslL}%, ${a.toFixed(2)})`; // 始终包含透明度
  }
  
  return rgbToHex(r, g, b, a); // 默认返回也包含透明度
};