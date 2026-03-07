import { brandLightTheme, brandDarkTheme } from './brand';
import { MonacoTheme } from './types';

// 主题映射
const themeMap: Record<string, Record<'light' | 'dark', MonacoTheme>> = {
  brand: {
    light: brandLightTheme,
    dark: brandDarkTheme
  }
};

/**
 * 获取Monaco Editor主题配置
 * @param theme 主题名称 (如 'brand')
 * @param colorTheme 颜色模式 ('light' | 'dark')
 * @returns Monaco Editor主题配置
 */
export const getMonacoTheme = (theme: string, colorTheme: 'light' | 'dark'): MonacoTheme => {
  const selectedTheme = themeMap[theme];
  if (!selectedTheme) {
    console.warn(`未找到主题 "${theme}"，使用默认brand主题`);
    return themeMap.brand[colorTheme];
  }
  
  return selectedTheme[colorTheme];
};

export * from './types';
export * from './brand';