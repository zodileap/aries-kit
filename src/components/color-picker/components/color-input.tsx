import React, { useState, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriTextInput, AriSelect } from '@ari/components';
import { AriColorFormat } from '@ari/types/components/color-picker';

/**
 * 颜色输入组件属性接口
 */
interface ColorInputProps {
  /**
   * 颜色值
   */
  value: string;
  
  /**
   * 透明度值 (0-1)
   */
  alpha: number;
  
  /**
   * 颜色格式
   */
  format: AriColorFormat;
  
  /**
   * 显示透明度输入
   */
  showAlpha?: boolean;
  
  /**
   * 颜色变化回调
   */
  onChange: (value: string) => void;
  
  /**
   * 透明度变化回调
   */
  onAlphaChange: (alpha: number) => void;
  
  /**
   * 格式变化回调
   */
  onFormatChange: (format: AriColorFormat) => void;
}

/**
 * 将HEX颜色转换为RGB颜色对象
 */
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

/**
 * 将RGB颜色对象转换为HEX颜色
 */
const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

/**
 * 将RGB颜色对象转换为HSB颜色对象
 */
const rgbToHsb = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  
  if (max !== min) {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    b: Math.round(v * 100)
  };
};

/**
 * 将RGB颜色对象转换为HSL颜色对象
 */
const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

/**
 * 解析颜色值为各种颜色格式的组件
 */
const parseColorValue = (value: string, format: AriColorFormat) => {
  try {
    // 默认值
    const defaultValues = {
      hex: '#000000',
      rgb: { r: 0, g: 0, b: 0 },
      hsb: { h: 0, s: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 }
    };
    
    // 正则表达式
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const rgbRegex = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/;
    const hsbRegex = /^hsb\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+)\s*)?\)$/;
    const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+)\s*)?\)$/;
    
    // 先尝试解析原始格式
    let parsedResult = defaultValues[format];
    let rgbValue = { r: 0, g: 0, b: 0 };
    
    // 尝试解析颜色值
    if (hexRegex.test(value)) {
      // 处理HEX格式
      const hexValue = value.charAt(0) === '#' ? value : `#${value}`;
      rgbValue = hexToRgb(hexValue);
      
      if (format === 'hex') {
        return hexValue;
      }
    } else if (rgbRegex.test(value)) {
      // 处理RGB格式
      const match = rgbRegex.exec(value);
      if (match) {
        rgbValue = {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3])
        };
        
        if (format === 'rgb') {
          return rgbValue;
        }
      }
    } else if (hsbRegex.test(value)) {
      // 处理HSB格式 (需要先转换为RGB)
      const match = hsbRegex.exec(value);
      if (match && format === 'hsb') {
        return {
          h: parseInt(match[1]),
          s: parseInt(match[2]),
          b: parseInt(match[3])
        };
      }
    } else if (hslRegex.test(value)) {
      // 处理HSL格式 (需要先转换为RGB)
      const match = hslRegex.exec(value);
      if (match && format === 'hsl') {
        return {
          h: parseInt(match[1]),
          s: parseInt(match[2]),
          l: parseInt(match[3])
        };
      }
    }
    
    // 根据目标格式转换RGB值
    switch(format) {
      case 'hex':
        return rgbToHex(rgbValue.r, rgbValue.g, rgbValue.b);
      case 'rgb':
        return rgbValue;
      case 'hsb':
        return rgbToHsb(rgbValue.r, rgbValue.g, rgbValue.b);
      case 'hsl':
        return rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b);
      default:
        return defaultValues[format];
    }
  } catch (error) {
    console.error('Failed to parse color value:', error);
    const defaultValues = {
      hex: '#000000',
      rgb: { r: 0, g: 0, b: 0 },
      hsb: { h: 0, s: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 }
    };
    return defaultValues[format];
  }
};

/**
 * 颜色输入组件
 * 提供颜色值和透明度的输入控制
 */
export const ColorInput: React.FC<ColorInputProps> = ({
  value,
  alpha,
  format,
  showAlpha = true,
  onChange,
  onAlphaChange,
  onFormatChange
}) => {
  const cn = useCss('color-picker');
  const [parsedValue, setParsedValue] = useState<any>(parseColorValue(value, format));
  const [alphaValue, setAlphaValue] = useState(Math.round(alpha * 100));

  /**
   * 可用的颜色格式
   */
  const formatOptions = [
    { value: 'hex', label: 'HEX' },
    { value: 'rgb', label: 'RGB' },
    { value: 'hsb', label: 'HSB' },
    { value: 'hsl', label: 'HSL' }
  ];

  /**
   * 同步外部value和内部parsedValue
   */
  useEffect(() => {
    setParsedValue(parseColorValue(value, format));
  }, [value, format]);

  /**
   * 同步外部alpha和内部alphaValue
   */
  useEffect(() => {
    setAlphaValue(Math.round(alpha * 100));
  }, [alpha]);

  /**
   * 处理HEX输入框变化
   */
  const handleHexChange = (newValue: string) => {
    setParsedValue(newValue);
    onChange(newValue);
  };

  /**
   * 处理RGB输入框变化
   */
  const handleRgbChange = (channel: 'r' | 'g' | 'b', newValue: string) => {
    const numValue = Math.min(255, Math.max(0, parseInt(newValue) || 0));
    const newRgb = { ...parsedValue, [channel]: numValue };
    setParsedValue(newRgb);
    
    // 构建新的RGB字符串
    const rgbString = `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`;
    onChange(rgbString);
  };

  /**
   * 处理HSB输入框变化
   */
  const handleHsbChange = (channel: 'h' | 's' | 'b', newValue: string) => {
    let numValue = parseInt(newValue) || 0;
    
    // 范围限制
    if (channel === 'h') {
      numValue = Math.min(360, Math.max(0, numValue));
    } else {
      numValue = Math.min(100, Math.max(0, numValue));
    }
    
    const newHsb = { ...parsedValue, [channel]: numValue };
    setParsedValue(newHsb);
    
    // 构建新的HSB字符串
    const hsbString = `hsb(${newHsb.h}, ${newHsb.s}%, ${newHsb.b}%)`;
    onChange(hsbString);
  };

  /**
   * 处理HSL输入框变化
   */
  const handleHslChange = (channel: 'h' | 's' | 'l', newValue: string) => {
    let numValue = parseInt(newValue) || 0;
    
    // 范围限制
    if (channel === 'h') {
      numValue = Math.min(360, Math.max(0, numValue));
    } else {
      numValue = Math.min(100, Math.max(0, numValue));
    }
    
    const newHsl = { ...parsedValue, [channel]: numValue };
    setParsedValue(newHsl);
    
    // 构建新的HSL字符串
    const hslString = `hsl(${newHsl.h}, ${newHsl.s}%, ${newHsl.l}%)`;
    onChange(hslString);
  };

  /**
   * 处理透明度输入框变化
   */
  const handleAlphaChange = (newValue: string) => {
    const numValue = Math.min(100, Math.max(0, parseInt(newValue) || 0));
    setAlphaValue(numValue);
    onAlphaChange(numValue / 100);
  };

  /**
   * 处理格式选择变更
   */
  const handleFormatChange = (selectedFormat: string | number | (string | number)[] | undefined) => {
    if (selectedFormat && typeof selectedFormat === 'string') {
      const newFormat = selectedFormat as AriColorFormat;
      // 在格式变更时，确保先转换当前颜色到新格式，然后再更新状态
      const newParsedValue = parseColorValue(value, newFormat);
      setParsedValue(newParsedValue);
      onFormatChange(newFormat);
    }
  };

  /**
   * 根据颜色格式渲染不同的输入控件
   */
  const renderColorInput = () => {
    // 确保parsedValue不为undefined，防止调用toString出错
    if (!parsedValue) {
      setParsedValue(parseColorValue(value, format));
      return null;
    }
    
    switch (format) {
      case 'hex':
        return (
          <AriTextInput
            value={parsedValue}
            onChange={handleHexChange}
            style={{ flex: 1 }}
          />
        );
      case 'rgb':
        return (
          <div className={cn.e('multi-input')}>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>R</span>
              <AriTextInput
                value={parsedValue.r.toString()}
                onChange={(value) => handleRgbChange('r', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>G</span>
              <AriTextInput
                value={parsedValue.g.toString()}
                onChange={(value) => handleRgbChange('g', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>B</span>
              <AriTextInput
                value={parsedValue.b.toString()}
                onChange={(value) => handleRgbChange('b', value)}
                maxWidth={'40px'}
              />
            </div>
          </div>
        );
      case 'hsb':
        return (
          <div className={cn.e('multi-input')}>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>H</span>
              <AriTextInput
                value={parsedValue.h.toString()}
                onChange={(value) => handleHsbChange('h', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>S</span>
              <AriTextInput
                value={parsedValue.s.toString()}
                onChange={(value) => handleHsbChange('s', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>B</span>
              <AriTextInput
                value={parsedValue.b.toString()}
                onChange={(value) => handleHsbChange('b', value)}
                maxWidth={'40px'}
              />
            </div>
          </div>
        );
      case 'hsl':
        return (
          <div className={cn.e('multi-input')}>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>H</span>
              <AriTextInput
                value={parsedValue.h.toString()}
                onChange={(value) => handleHslChange('h', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>S</span>
              <AriTextInput
                value={parsedValue.s.toString()}
                onChange={(value) => handleHslChange('s', value)}
                maxWidth={'40px'}
              />
            </div>
            <div className={cn.e('color-channel')}>
              <span className={cn.e('channel-label')}>L</span>
              <AriTextInput
                value={parsedValue.l.toString()}
                onChange={(value) => handleHslChange('l', value)}
                maxWidth={'40px'}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn.e('info-bar')}>
      {/* 格式选择下拉框 */}
      <AriSelect
        options={formatOptions}
        value={format}
        onChange={handleFormatChange}
        style={{ width: '80px' }}
      />
      
      {/* 颜色输入控件 */}
      {renderColorInput()}
      
      {/* 透明度输入框 */}
      {showAlpha && (
        <div className={cn.e('alpha-input-container')}>
          <span className={cn.e('channel-label')}>A</span>
          <AriTextInput
            value={alphaValue.toString()}
            onChange={handleAlphaChange}
            maxWidth={'40px'}
          />
        </div>
      )}
    </div>
  );
};