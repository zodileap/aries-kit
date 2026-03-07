/**
 * 用于根据不同类型参数渲染对应的 UI 组件
 * 
 * Params:
 *
 *   - paramType: 参数类型，用于决定渲染哪种组件。
 *     default: 'text'
 *   - options: 渲染组件所需的配置选项。
 *   - defaultValue: 组件的默认值。
 *   - placeholder: 组件的占位文本。
 *   - onChange: 组件值变化时的回调函数。
 * 
 * Returns:
 *
 *   渲染后的 React 组件。
 * 
 * Example:
 * 
 * ```tsx
 * const { renderField } = useRender();
 * 
 * // 在组件中使用
 * {renderField({
 *   paramType: 'code',
 *   options: { language: 'javascript' },
 *   defaultValue: 'console.log("Hello")',
 *   onChange: (value) => console.log(value)
 * })}
 * ```
 */

import { ReactNode } from 'react';
import { AriSelectProps } from '../components';

/**
 * 参数类型枚举
 */
export type FieldType = 'text' | 'code' | 'boolean' | 'number' | 'select' | 'textarea' | 'date' | 'time' | 'datetime' | 'textList' | 'divider';

/**
 * 渲染字段的参数
 */
export interface RenderFieldParams {
  /**
   * 参数类型
   */
  type: FieldType;

  /**
   * 组件配置选项，不同组件类型有不同的选项
   */
  options?: Record<string, any>;

  /**
   * 占位文本
   */
  placeholder?: string;

  /**
   * 字段描述
   */
  description?: React.ReactNode;

  /**
   * 字段标签
   */
  label?: React.ReactNode;

  /**
   * 组件值变化时的回调
   */
  onChange?: (value: any) => void;

  /**
   * 样式类名
   */
  className?: string;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 示例值
   */
  example?: string;
}


/**
 * 选择组件选项
 */
export interface SelectOptions extends AriSelectProps{
}

/**
 * useRender hook 返回值
 */
export interface UseRenderReturn {
  /**
   * 渲染字段组件
   */
  renderField: (params: RenderFieldParams) => ReactNode;
  
  /**
   * 解析字段选项配置
   * @param fieldType 字段类型
   * @param config 原始配置（可能是字符串或对象）
   * @returns 解析后的配置对象
   */
  parseFieldOptions: (fieldType: string, config: any) => Record<string, any>;
}
