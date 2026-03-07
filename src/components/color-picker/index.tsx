import React, { useEffect, useRef, useState } from 'react';
import { useCss } from "@ari/utils";
import { AriIcon, AriPortal } from "@ari/components";
import { AriColorFormat, AriColorMode, AriColorPickerProps, AriColorValue, AriGradientColor, AriHSVColor } from "@ari/types/components/color-picker";

// 引入工具函数
import { formatColor, hexToRgb, hsvToRgb, parseColorString, rgbToHex } from './utils';

// 引入子组件
import {
  ModeTabs,
  ColorPanel,
  HueSlider,
  AlphaSlider,
  ColorPreview,
  ColorInput,
  GradientEditor,
  PresetColors
} from './components';

/**
 * 颜色选择器组件
 * 用于选择和预览颜色，支持HEX、RGB、HSB和HSL格式，可选择透明度和渐变色
 * 
 * Example:
 * 
 * ```tsx
 * <AriColorPicker value="#ff0000" onChange={(color) => console.log(color)} />
 * ```
 */
export const AriColorPicker: React.FC<AriColorPickerProps> = ({
  value,
  defaultValue = '#000000',
  size = 'default',
  disabled = false,
  presetColors,
  showInput = true,
  onChange,
  placement = 'bottom',
  format = 'hex',
  showAlpha = false,
  enableGradient = false,
  className,
  ...props
}) => {
  const cn = useCss("color-picker");
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  
  // 颜色模式状态（单色/渐变色）
  const [colorMode, setColorMode] = useState<AriColorMode>(
    typeof value === 'object' || typeof defaultValue === 'object' ? 'gradient' : 'solid'
  );

  // 单色相关状态
  const [color, setColor] = useState<string>(
    typeof value === 'string' ? value : typeof defaultValue === 'string' ? defaultValue : '#000000'
  );
  const [hsv, setHsv] = useState<AriHSVColor>({ h: 0, s: 0, v: 0, a: 1 });
  
  // 渐变色相关状态
  const [gradientColor, setGradientColor] = useState<AriGradientColor>(
    typeof value === 'object' ? value : 
    typeof defaultValue === 'object' ? defaultValue : 
    { direction: 'to right', stops: [{ color: '#ff0000', position: 0 }, { color: '#0000ff', position: 100 }] }
  );
  
  // 当前活动的渐变停止点索引
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  
  // 面板显示状态
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  
  // 面板位置状态
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});
  
  // 显示格式状态（输入框显示格式）
  const [displayFormat, setDisplayFormat] = useState<AriColorFormat>(format);
  
  // 默认预设颜色
  const defaultPresetColors = [
    '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', 
    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', 
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', 
    '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#000000'
  ];

  /**
   * 更新单色颜色状态
   */
  const updateColor = (newHsv: Partial<AriHSVColor>) => {
    const updatedHsv = { ...hsv, ...newHsv };
    setHsv(updatedHsv);
    
    const formattedColor = formatColor(
      updatedHsv.h, 
      updatedHsv.s, 
      updatedHsv.v, 
      updatedHsv.a, 
      format,
      true // 总是显示透明度
    );
    
    setColor(formattedColor);
    
    // 如果在渐变模式下，更新当前选中的渐变点的颜色
    if (colorMode === 'gradient' && activeStopIndex >= 0) {
      const newStops = [...gradientColor.stops];
      newStops[activeStopIndex] = {
        ...newStops[activeStopIndex],
        color: rgbToHex(
          hsvToRgb(updatedHsv.h, updatedHsv.s, updatedHsv.v).r,
          hsvToRgb(updatedHsv.h, updatedHsv.s, updatedHsv.v).g,
          hsvToRgb(updatedHsv.h, updatedHsv.s, updatedHsv.v).b
        ),
        alpha: updatedHsv.a
      };
      
      const newGradient = { ...gradientColor, stops: newStops };
      setGradientColor(newGradient);
      
      // 触发onChange回调
      if (onChange) {
        onChange(newGradient);
      }
    } else if (colorMode === 'solid' && onChange) {
      // 单色模式直接传递颜色值
      onChange(formattedColor);
    }
  };

  /**
   * 更新渐变色状态
   */
  const updateGradientColor = (newGradient: Partial<AriGradientColor>) => {
    const updatedGradient = { ...gradientColor, ...newGradient };
    setGradientColor(updatedGradient);
    
    if (onChange && colorMode === 'gradient') {
      onChange(updatedGradient);
    }
    
    // 如果当前有选中的渐变点，更新HSV状态
    if (activeStopIndex >= 0 && updatedGradient.stops && updatedGradient.stops.length > activeStopIndex) {
      const activeStop = updatedGradient.stops[activeStopIndex];
      if (activeStop && activeStop.color) {
        try {
          const newHsv = parseColorString(activeStop.color);
          if (activeStop.alpha !== undefined) {
            newHsv.a = activeStop.alpha;
          }
          setHsv(newHsv);
        } catch (error) {
          console.error('解析颜色错误:', error);
          // 使用默认HSV值
          setHsv({ h: 0, s: 0, v: 0, a: 1 });
        }
      }
    }
  };

  /**
   * 处理颜色输入变化
   */
  const handleColorInputChange = (inputValue: string) => {
    try {
      const newHsv = parseColorString(inputValue);
      updateColor(newHsv);
    } catch (error) {
      console.error('Invalid color format:', error);
    }
  };

  /**
   * 处理透明度输入变化
   */
  const handleAlphaInputChange = (alpha: number) => {
    updateColor({ a: alpha });
  };

  /**
   * 处理格式变化
   */
  const handleFormatChange = (newFormat: AriColorFormat) => {
    setDisplayFormat(newFormat);
  };

  /**
   * 处理预设颜色选择
   */
  const handlePresetColorSelect = (presetColor: string) => {
    const newHsv = parseColorString(presetColor);
    updateColor(newHsv);
  };

  /**
   * 处理颜色模式变化
   */
  const handleColorModeChange = (mode: AriColorMode) => {
    setColorMode(mode);
    
    if (mode === 'solid') {
      // 从渐变切换到单色，使用第一个渐变点的颜色
      if (gradientColor.stops && gradientColor.stops.length > 0) {
        const stop = gradientColor.stops[0];
        if (stop && stop.color) {
          try {
            const newHsv = parseColorString(stop.color);
            if (stop.alpha !== undefined) {
              newHsv.a = stop.alpha;
            }
            updateColor(newHsv);
          } catch (error) {
            console.error('解析颜色错误:', error);
            // 出错时使用默认颜色
            updateColor({ h: 0, s: 0, v: 0, a: 1 });
          }
        }
      }
    } else {
      // 从单色切换到渐变，将当前颜色设为第一个渐变点的颜色
      const rgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      
      const newGradient: AriGradientColor = {
        direction: 'to right',
        stops: [
          { color: hex, position: 0, alpha: hsv.a },
          { color: '#ffffff', position: 100, alpha: hsv.a }
        ]
      };
      
      setGradientColor(newGradient);
      setActiveStopIndex(0);
      
      if (onChange) {
        onChange(newGradient);
      }
    }
  };

  /**
   * 计算面板位置
   */
  const calculatePanelPosition = () => {
    if (!containerRef.current) return;
    
    const triggerRect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;
    const insetValue = 8; // 距离值，相当于getVar(inset)，这里确保与CSS变量符合
    
    // 根据 placement 计算不同的位置样式
    let style: React.CSSProperties = {};
    
    switch (placement) {
      case 'top':
        style = {
          bottom: `${window.innerHeight - triggerRect.top + scrollTop + insetValue}px`,
          left: `${triggerRect.left + scrollLeft}px`,
          width: '350px' // 与 CSS 中定义的宽度保持一致
        };
        break;
      case 'left':
        style = {
          top: `${triggerRect.top + scrollTop}px`,
          right: `${window.innerWidth - triggerRect.left + scrollLeft + insetValue}px`,
          width: '350px'
        };
        break;
      case 'right':
        style = {
          top: `${triggerRect.top + scrollTop}px`,
          left: `${triggerRect.right + scrollLeft + insetValue}px`,
          width: '350px'
        };
        break;
      default: // bottom
        style = {
          top: `${triggerRect.bottom + scrollTop + insetValue}px`, // 增加了一个inset的距离
          left: `${triggerRect.left + scrollLeft}px`,
          width: '350px'
        };
        break;
    }
    
    setPanelStyle(style);
  };

  /**
   * 切换面板可见性
   */
  const togglePanel = () => {
    if (disabled) return;
    
    if (!isPanelVisible) {
      calculatePanelPosition();
    }
    
    setIsPanelVisible(!isPanelVisible);
  };

  /**
   * 初始化HSV状态
   */
  useEffect(() => {
    if (typeof value === 'string') {
      const initialHsv = parseColorString(value);
      setHsv(initialHsv);
      setColor(value);
      setColorMode('solid');
    } else if (typeof value === 'object') {
      setGradientColor(value);
      setColorMode('gradient');
      
      // 初始化HSV为第一个渐变点的颜色
      if (value.stops && value.stops.length > 0) {
        const stop = value.stops[0];
        if (stop && stop.color) {
          try {
            const newHsv = parseColorString(stop.color);
            if (stop.alpha !== undefined) {
              newHsv.a = stop.alpha;
            }
            setHsv(newHsv);
          } catch (error) {
            console.error('解析颜色错误:', error);
            // 使用默认HSV值
            setHsv({ h: 0, s: 0, v: 0, a: 1 });
          }
        }
      }
    } else if (typeof defaultValue === 'string') {
      const initialHsv = parseColorString(defaultValue);
      setHsv(initialHsv);
      setColor(defaultValue);
      setColorMode('solid');
    } else if (typeof defaultValue === 'object') {
      setGradientColor(defaultValue);
      setColorMode('gradient');
      
      // 初始化HSV为第一个渐变点的颜色
      if (defaultValue.stops && defaultValue.stops.length > 0) {
        const stop = defaultValue.stops[0];
        if (stop && stop.color) {
          try {
            const newHsv = parseColorString(stop.color);
            if (stop.alpha !== undefined) {
              newHsv.a = stop.alpha;
            }
            setHsv(newHsv);
          } catch (error) {
            console.error('解析颜色错误:', error);
            // 使用默认HSV值
            setHsv({ h: 0, s: 0, v: 0, a: 1 });
          }
        }
      }
    }
  }, []);

  /**
   * 监听外部value变化
   */
  useEffect(() => {
    if (value && value !== color && typeof value === 'string' && colorMode === 'solid') {
      const newHsv = parseColorString(value);
      setHsv(newHsv);
      setColor(value);
    } else if (value && typeof value === 'object' && colorMode === 'gradient') {
      setGradientColor(value);
      
      // 更新HSV为当前选中的渐变点的颜色
      if (value.stops && value.stops.length > activeStopIndex && activeStopIndex >= 0) {
        const stop = value.stops[activeStopIndex];
        if (stop && stop.color) {
          try {
            const newHsv = parseColorString(stop.color);
            if (stop.alpha !== undefined) {
              newHsv.a = stop.alpha;
            }
            setHsv(newHsv);
          } catch (error) {
            console.error('解析颜色错误:', error);
            // 使用默认HSV值
            setHsv({ h: 0, s: 0, v: 0, a: 1 });
          }
        }
      }
    }
  }, [value]);

  /**
   * 使用鼠标事件来停止冒泡，防止点击面板内元素关闭面板
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    // 阻止事件传播，防止触发文档级的点击事件处理
    e.stopPropagation();
  };

  /**
   * 点击外部关闭面板
   */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // 如果面板不可见，直接返回
      if (!isPanelVisible) return;
      
      // 如果点击的是触发器，通过togglePanel处理，这里不用关心
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        return;
      }
      
      // 检查DOM中的面板元素，而不是通过ref
      const panelElement = document.querySelector('.ari-color-picker__panel');
      if (panelElement && panelElement.contains(e.target as Node)) {
        return;
      }
      
      // 关闭面板
      setIsPanelVisible(false);
    };
    
    // 窗口调整和滚动时重新计算面板位置
    const handleWindowChange = () => {
      if (isPanelVisible) {
        calculatePanelPosition();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleWindowChange);
    window.addEventListener('scroll', handleWindowChange, true);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleWindowChange);
      window.removeEventListener('scroll', handleWindowChange, true);
    };
  }, [isPanelVisible]);

  // 生成颜色预览区域的样式
  const colorPreviewStyle = {
    backgroundColor: color,
  };

  return (
    <div
      className={cn.gen(
        className,
        cn.b(), 
        cn.m(size),
        cn.is('disabled', disabled)
      )}
      ref={containerRef}
      {...props}
    >
      <div className={cn.e('container')}>
        {/* 颜色选择器触发器 */}
        <div 
          className={cn.gen(
            cn.e('trigger'),
            cn.is('active', isPanelVisible),
            cn.is('disabled', disabled)
          )}
          onClick={togglePanel}
        >
          <div 
            className={cn.gen(
              cn.e('color-preview'),
              cn.is('gradient', colorMode === 'gradient')
            )}
            style={colorMode === 'solid' ? colorPreviewStyle : {
              backgroundImage: `linear-gradient(${gradientColor.direction}, ${
                gradientColor.stops.map(stop => `${stop.color} ${stop.position}%`).join(', ')
              })`
            }}
          ></div>
          <span className={cn.e('color-value')}>
            {colorMode === 'solid' ? color : '渐变色'}
          </span>
          <AriIcon
            name="caret-down"
            className={cn.gen(
              cn.e('arrow-icon'),
              cn.is('active', isPanelVisible)
            )}
            size={size}
          />
        </div>

        {/* 通过 Portal 渲染面板到 body */}
        {isPanelVisible && (
          <AriPortal>
            <div 
              ref={panelRef}
              className={cn.gen(
                cn.e('panel'),
                cn.m(placement),
                cn.is('visible', true)
              )}
              style={panelStyle}
              onMouseDown={handleMouseDown}
            >
              {/* 颜色模式切换标签 */}
              <ModeTabs
                mode={colorMode}
                enableGradient={enableGradient}
                onChange={handleColorModeChange}
              />

              {/* 颜色选择面板 */}
              <ColorPanel
                hsv={hsv}
                onChange={updateColor}
              />

              {/* 滑动条区域 */}
              <div className={cn.e('sliders-area')}>
                <div className={cn.e('sliders')}>
                  {/* 色相滑动条 */}
                  <HueSlider
                    hue={hsv.h}
                    onChange={(h) => updateColor({ h })}
                  />

                  {/* 透明度滑动条 - 始终显示 */}
                  <AlphaSlider
                    alpha={hsv.a}
                    color={rgbToHex(
                      hsvToRgb(hsv.h, hsv.s, hsv.v).r,
                      hsvToRgb(hsv.h, hsv.s, hsv.v).g,
                      hsvToRgb(hsv.h, hsv.s, hsv.v).b
                    )}
                    onChange={(a) => updateColor({ a })}
                  />
                </div>

                {/* 颜色预览 */}
                <ColorPreview
                  color={colorMode === 'solid' ? color : gradientColor}
                  mode={colorMode}
                />
              </div>

              {/* 渐变色编辑器 */}
              {colorMode === 'gradient' && (
                <GradientEditor
                  gradient={gradientColor}
                  activeStopIndex={activeStopIndex}
                  onChange={updateGradientColor}
                  onActiveStopChange={setActiveStopIndex}
                />
              )}

              {/* 颜色输入区域 */}
              {showInput && (
                <ColorInput
                  value={formatColor(hsv.h, hsv.s, hsv.v, hsv.a, displayFormat, true)}
                  alpha={hsv.a}
                  format={displayFormat}
                  showAlpha={true}
                  onChange={handleColorInputChange}
                  onAlphaChange={handleAlphaInputChange}
                  onFormatChange={handleFormatChange}
                />
              )}
            </div>
          </AriPortal>
        )}
      </div>
    </div>
  );
};