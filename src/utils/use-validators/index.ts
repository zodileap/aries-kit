import { useCallback, useMemo } from 'react';
import { UseValidatorsReturn, ValidationRule, ValidatorFunction } from '@ari/types/hooks/use-validators';

/**
 * 表单验证器 Hook
 * 提供常用的表单验证函数
 * 
 * Returns:
 * 
 *   包含各种验证函数的对象
 * 
 * Example:
 * 
 * ```tsx
 * const { validatePascalCase, validateCamelCase } = useValidators();
 * 
 * // 在表单中使用
 * {
 *   validator: (value) => validatePascalCase(value, '请输入正确的类型代码')
 * }
 * ```
 */
export const useValidators = (): UseValidatorsReturn => {
  /**
   * 验证 Pascal Case 格式（首字母大写的驼峰命名）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 首字母必须大写
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validatePascalCase: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      // 检查是否只包含英文字符、数字和下划线
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return errorMessage;
      }
      
      // 检查首字母是否大写
      if (!/^[A-Z]/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证 Camel Case 格式（首字母小写的驼峰命名）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 首字母必须小写
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateCamelCase: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      // 检查是否只包含英文字符、数字和下划线
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return errorMessage;
      }
      
      // 检查首字母是否小写
      if (!/^[a-z]/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证 Snake Case 格式（下划线命名）
   * 规则：只能包含小写字母、数字和下划线
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateSnakeCase: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      if (!/^[a-z0-9_]+$/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证 Kebab Case 格式（短横线命名）
   * 规则：只能包含小写字母、数字和短横线
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateKebabCase: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      if (!/^[a-z0-9-]+$/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证标识符格式（通用标识符）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 不能以数字开头
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateIdentifier: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证只包含英文字符
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateEnglishOnly: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 验证只包含字母和数字
   * 
   * @param value 待验证的值
   * @param errorMessage 错误提示信息
   * @returns 错误信息或 undefined
   */
  const validateAlphanumeric: ValidatorFunction = useCallback(
    (value: string | undefined, errorMessage: string): string | undefined => {
      if (!value) return undefined;
      
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return errorMessage;
      }
      
      return undefined;
    },
    []
  );

  /**
   * 创建自定义正则验证器
   * 
   * @param pattern 正则表达式
   * @param errorMessage 错误提示信息
   * @returns 验证函数
   */
  const createRegexValidator = useCallback(
    (pattern: RegExp, errorMessage: string): ValidationRule => {
      return (value: string | undefined): string | undefined => {
        if (!value) return undefined;
        
        if (!pattern.test(value)) {
          return errorMessage;
        }
        
        return undefined;
      };
    },
    []
  );

  /**
   * 创建长度验证器
   * 
   * @param min 最小长度
   * @param max 最大长度
   * @param errorMessage 错误提示信息
   * @returns 验证函数
   */
  const createLengthValidator = useCallback(
    (min: number, max: number, errorMessage: string): ValidationRule => {
      return (value: string | undefined): string | undefined => {
        if (!value) return undefined;
        
        if (value.length < min || value.length > max) {
          return errorMessage;
        }
        
        return undefined;
      };
    },
    []
  );

  // 返回所有验证函数
  return useMemo(
    () => ({
      validatePascalCase,
      validateCamelCase,
      validateSnakeCase,
      validateKebabCase,
      validateIdentifier,
      validateEnglishOnly,
      validateAlphanumeric,
      createRegexValidator,
      createLengthValidator,
    }),
    [
      validatePascalCase,
      validateCamelCase,
      validateSnakeCase,
      validateKebabCase,
      validateIdentifier,
      validateEnglishOnly,
      validateAlphanumeric,
      createRegexValidator,
      createLengthValidator,
    ]
  );
};

export default useValidators;
