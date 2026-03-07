/**
 * 表单验证器 Hook 的类型定义
 */

/**
 * 验证规则函数类型
 * @param value 待验证的值
 * @returns 错误信息或 undefined（验证通过）
 */
export type ValidationRule = (value: string | undefined) => string | undefined;

/**
 * 验证函数类型
 * @param value 待验证的值
 * @param errorMessage 错误提示信息
 * @returns 错误信息或 undefined（验证通过）
 */
export type ValidatorFunction = (value: string | undefined, errorMessage: string) => string | undefined;

/**
 * 验证器工厂函数类型
 */
export type ValidatorFactory<T extends any[] = any[]> = (...args: T) => ValidationRule;

/**
 * useValidators Hook 的返回值类型
 */
export interface UseValidatorsReturn {
  /**
   * 验证 Pascal Case 格式（首字母大写的驼峰命名）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 首字母必须大写
   * 
   * Example:
   * ```tsx
   * const { validatePascalCase } = useValidators();
   * // 验证结果: "UserInfo" ✓, "userInfo" ✗, "User_Info" ✓
   * ```
   */
  validatePascalCase: ValidatorFunction;
  
  /**
   * 验证 Camel Case 格式（首字母小写的驼峰命名）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 首字母必须小写
   * 
   * Example:
   * ```tsx
   * const { validateCamelCase } = useValidators();
   * // 验证结果: "userInfo" ✓, "UserInfo" ✗, "user_info" ✓
   * ```
   */
  validateCamelCase: ValidatorFunction;
  
  /**
   * 验证 Snake Case 格式（下划线命名）
   * 规则：只能包含小写字母、数字和下划线
   * 
   * Example:
   * ```tsx
   * const { validateSnakeCase } = useValidators();
   * // 验证结果: "user_info" ✓, "userInfo" ✗, "USER_INFO" ✗
   * ```
   */
  validateSnakeCase: ValidatorFunction;
  
  /**
   * 验证 Kebab Case 格式（短横线命名）
   * 规则：只能包含小写字母、数字和短横线
   * 
   * Example:
   * ```tsx
   * const { validateKebabCase } = useValidators();
   * // 验证结果: "user-info" ✓, "userInfo" ✗, "user_info" ✗
   * ```
   */
  validateKebabCase: ValidatorFunction;
  
  /**
   * 验证标识符格式（通用标识符）
   * 规则：
   * 1. 只能包含英文字母、数字和下划线
   * 2. 不能以数字开头
   * 
   * Example:
   * ```tsx
   * const { validateIdentifier } = useValidators();
   * // 验证结果: "userId" ✓, "1userId" ✗, "_userId" ✓
   * ```
   */
  validateIdentifier: ValidatorFunction;
  
  /**
   * 验证只包含英文字符（允许空格）
   * 
   * Example:
   * ```tsx
   * const { validateEnglishOnly } = useValidators();
   * // 验证结果: "Hello World" ✓, "Hello123" ✗, "你好" ✗
   * ```
   */
  validateEnglishOnly: ValidatorFunction;
  
  /**
   * 验证只包含字母和数字
   * 
   * Example:
   * ```tsx
   * const { validateAlphanumeric } = useValidators();
   * // 验证结果: "User123" ✓, "User_123" ✗, "User 123" ✗
   * ```
   */
  validateAlphanumeric: ValidatorFunction;
  
  /**
   * 创建自定义正则验证器
   * 
   * Example:
   * ```tsx
   * const { createRegexValidator } = useValidators();
   * const validateEmail = createRegexValidator(
   *   /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
   *   '请输入有效的邮箱地址'
   * );
   * ```
   */
  createRegexValidator: ValidatorFactory<[RegExp, string]>;
  
  /**
   * 创建长度验证器
   * 
   * Example:
   * ```tsx
   * const { createLengthValidator } = useValidators();
   * const validateUsername = createLengthValidator(3, 20, '用户名长度必须在3-20个字符之间');
   * ```
   */
  createLengthValidator: ValidatorFactory<[number, number, string]>;
}

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
 * <FormItem
 *   rules={[
 *     {
 *       validator: (value) => validatePascalCase(value, '请输入正确的类型代码')
 *     }
 *   ]}
 * />
 * ```
 */
export type UseValidators = () => UseValidatorsReturn;
