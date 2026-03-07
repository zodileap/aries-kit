import { _Props } from '@ari/types/components/base';
import { UseCss } from '@ari/types/hooks/use-css';
import { useMemo } from 'react';

// 默认命名空间
const defaultNamespace = 'z';
// 默认状态前缀
const statePrefix = 'is-';

/**
 * 用于根据给定的块名称、块后缀、元素名称和修饰符生成 BEM（块元素修饰符）类名。 
 * @param namespace 
 * @param block 
 * @param blockSuffix 
 * @param element 
 * @param modifier 
 * @returns 
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

/**
 * 根据提供的状态生成状态类名。 
 * @param args 
 * @returns 
 */
const getState = (args: (boolean | undefined)[]): boolean | undefined => {
  return args.every(Boolean);
};


/**
 * 用于根据给定的块名称生成 BEM（块元素修饰符）类名。

 */
export const useCss: UseCss = (block: string) => {
  return useMemo(() => {
    const namespace = defaultNamespace;

    const b = (blockSuffix = '') =>
      _bem(namespace, block, blockSuffix, '', '');

    const e = (element?: string) =>
      element ? _bem(namespace, block, '', element, '') : '';

    const m = (modifier?: string) =>
      modifier ? _bem(namespace, block, '', '', modifier) : '';

    const be = (blockSuffix?: string, element?: string) =>
      blockSuffix && element
        ? _bem(namespace, block, blockSuffix, element, '')
        : '';

    const em = (element?: string, modifier?: string) =>
      element && modifier
        ? _bem(namespace, block, '', element, modifier)
        : '';

    const bm = (blockSuffix?: string, modifier?: string) =>
      blockSuffix && modifier
        ? _bem(namespace, block, blockSuffix, '', modifier)
        : '';

    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
      blockSuffix && element && modifier
        ? _bem(namespace, block, blockSuffix, element, modifier)
        : '';

    const is = (name: string, ...args: (boolean | undefined)[]): string => {
      const state = args.length >= 1 ? getState(args) : true;
      return name && state ? `${namespace}-${statePrefix}${name}` : '';
    };


    const gen = (...args: Array<_Props['className']>): string => {
      const classNames = args
        .flat()
        .filter(item => {
          if (item) {
            return typeof item === 'string' ? item : false
          }
          return false
        });
      
      // 添加去重逻辑
      const uniqueClassNames = [...new Set(classNames)];
      
      return uniqueClassNames.join(' ').trim();
    }; 

    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
      gen,
      getCssVarName,
      getCssVarAsNumber
    }
  }, [block]);
};


/**
 * 获取全局 CSS 变量的值
 */
export const getCssVarName = (...args: Array<string>): string => {
  // 转换为 "--z-color-primary"
  const cssVarName = args.join('-');

  // 构建完整的CSS变量名
  const fullVarName = `--${defaultNamespace}-${cssVarName}`;

  return `var(${fullVarName})`;
};

/**
 * 获取全局 CSS 变量的值并转换为数字
 */
export const getCssVarAsNumber = (...args: Array<string>): number => {
  const variableName = `--${defaultNamespace}-${args.join('-')}`;
  // 使用 useCss 提供的 getCssVar 方法 (如果有的话)
  const rawValue = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  // 移除单位并转换为整数
  return parseInt(rawValue.replace(/[^0-9]/g, ''), 10);
}

/**
 * 获取全局 CSS 变量的值
 */
export const getCssVar = (...args: Array<string>): string => {
  return getCssVarName(...args);
}