// src/types/componets/form.ts
import { ReactNode } from "react";
import { _Props } from "./base";
import { WidgetSize } from "../widget";
import { AriColProps } from "./grid";

/**
 * 表单值类型
 * 用于表单数据的类型定义
 */
export type AriFormValues = Record<string, any>;

/**
 * 表单校验规则接口
 * 定义了单个字段的校验规则
 */
export interface AriFormRule {
  /**
   * 是否必填
   * default: false
   */
  required?: boolean;

  /**
   * 最小长度
   */
  min?: number;

  /**
   * 最大长度
   */
  max?: number;

  /**
   * 正则表达式校验
   */
  pattern?: RegExp;

  /**
   * 自定义校验函数
   * 返回undefined表示校验通过，返回字符串表示校验失败，错误信息为返回的字符串
   */
  validator?: (value: any, formValues: AriFormValues) => string | undefined | Promise<string | undefined>;

  /**
   * 错误提示信息
   * 当校验失败时显示的错误信息
   */
  message?: string;
}

/**
 * 表单校验规则集合
 * 定义了整个表单的校验规则，支持嵌套字段
 */
export type AriFormRules = Record<string, AriFormRule | AriFormRule[] | Record<string, AriFormRule | AriFormRule[]>>;

/**
 * 表单组件属性
 * 定义表单组件支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/form}
 */
export interface AriFormProps extends _Props {
  /**
   * 表单项间距密度
   * 控制表单内各元素之间的垂直间距
   * 
   * default: "default"
   */
  density?: 'compact' | 'default' | 'loose';

  /**
   * 表单组件大小
   * 控制表单内各表单元素的大小，会被传递给表单项内的组件
   * 
   * default: "default"
   */
  size?: WidgetSize;

  /**
   * 表单布局方式
   * 控制标签与控件的排列方式
   * 
   * Params:
   * 
   *   - "horizontal": 标签和控件水平排列（默认）
   *   - "vertical": 标签和控件上下排列
   *   - "inline": 表单项水平排列
   * 
   * default: "horizontal"
   */
  layout?: 'horizontal' | 'vertical' | 'inline';

  /**
   * 标签对齐方式
   * 控制表单中所有表单项的标签对齐方式
   * 
   * default: 'right'
   */
  labelAlign?: 'left' | 'right';

  /**
   * 标签宽度
   * 控制表单中所有表单项的标签宽度
   * 当设置了labelCol时，此属性无效
   */
  labelWidth?: string | number;

  /**
   * 表单最大宽度
   * 控制表单组件的最大宽度
   */
  maxWidth?: string | number;

  /**
   * 标签栅格配置
   * 控制表单中所有表单项的标签布局
   */
  labelCol?: number | AriColProps;

  /**
   * 控件栅格配置
   * 控制表单中所有表单项的控件布局
   */
  wrapperCol?: number | AriColProps;

  /**
   * 表单数据
   * 用于受控表单
   */
  values?: AriFormValues;

  /**
   * 表单初始值
   * 用于非受控表单的初始值设置
   */
  initialValues?: AriFormValues;

  /**
   * 表单值变化回调
   * 当表单值变化时触发
   * 
   * Params:
   * 
   *   - changedValues: 变化的字段值对象。
   *   - allValues: 所有字段的当前值。
   *   - prevValues: 所有字段变化前的值（包括变化的字段的原值）。
   */
  onValuesChange?: (changedValues: AriFormValues, allValues: AriFormValues, prevValues: AriFormValues) => void;

  /**
   * 表单提交回调
   * 当表单提交且校验通过时触发
   */
  onFinish?: (values: AriFormValues) => void;

  /**
   * 表单校验失败回调
   * 当表单提交校验失败时触发
   */
  onFinishFailed?: (errorFields: { name: string[], errors: string[] }[], values: AriFormValues) => void;

  /**
   * 表单校验规则
   * 定义表单字段的校验规则
   */
  rules?: AriFormRules;

  /**
   * 表单子元素
   */
  children?: ReactNode;
}

/**
 * 表单项组件属性
 * 定义表单项支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/form}
 */
export interface AriFormItemProps extends _Props {
  /**
   * 表单项间距密度
   * 会覆盖表单上设置的density
   * default: undefined (继承表单的设置)
   */
  density?: 'compact' | 'default' | 'loose';

  /**
   * 表单项字段名
   * 支持嵌套字段，如 ["user", "name"] 或 "user.name"
   * 
   * 如果为空，校验规则会被忽略
   */
  name?: string | string[];

  /**
   * 表单项标签
   */
  label?: React.ReactNode;

  /**
   * 是否必填
   * default: false
   */
  required?: boolean;

  /**
   * 表单项错误信息
   * 当设置时会覆盖表单校验产生的错误信息
   */
  error?: string;

  /**
   * 表单项帮助文本
   */
  help?: React.ReactNode;

  /**
   * 表单项标签宽度
   * 会覆盖表单上设置的labelWidth
   * 当设置了labelCol时，此属性无效
   */
  labelWidth?: string | number;

  /**
   * 是否在标签后显示冒号
   * default: true
   */
  colon?: boolean;

  /**
   * 标签对齐方式
   * 会覆盖表单上设置的labelAlign
   * default: undefined (继承表单的设置)
   */
  labelAlign?: 'left' | 'right';

  /**
   * 标签栅格配置
   * 会覆盖表单上设置的labelCol
   */
  labelCol?: number | AriColProps;

  /**
   * 控件栅格配置
   * 会覆盖表单上设置的wrapperCol
   */
  wrapperCol?: number | AriColProps;

  /**
   * 表单项校验规则
   * 会与表单级别的规则合并
   */
  rules?: AriFormRule[];

  /**
   * 标题旁的提示信息
   * 当设置时会在标签后显示一个带有提示图标的tooltip
   */
  tooltip?: React.ReactNode;

  /**
   * 标题后的自定义节点
   * 可以在标签后插入任意自定义内容
   */
  titleNode?: React.ReactNode;

  /**
   * 表单项子元素
   */
  children: React.ReactNode;

  /**
   * 子节点的值的属性
   */
  valuePropName?: string;
}

/**
 * 增强的表单实例接口
 * 提供表单操作方法，可以通过ref获取
 */
export interface AriFormInstance {
  /**
   * 获取指定字段的值
   * @param name 字段名，支持嵌套路径如 'user.name' 或 ['user', 'name']
   */
  getFieldValue: (name: string | string[]) => any;

  /**
   * 获取整个表单的值
   */
  getFieldsValue: () => AriFormValues;

  /**
   * 设置单个字段的值
   * @param name 字段名，支持嵌套路径
   * @param value 字段值
   */
  setFieldValue: (name: string | string[], value: any) => AriFormInstance;

  /**
   * 设置多个字段的值
   * @param values 要设置的字段值对象
   */
  setFieldsValue: (values: AriFormValues) => AriFormInstance;

  /**
   * 验证指定字段
   * @param name 字段名，支持嵌套路径
   * @returns 如果验证失败，返回错误信息；如果验证通过，返回undefined
   */
  validateField: (name: string | string[]) => Promise<string | undefined>;

  /**
   * 验证所有字段
   * @returns 验证结果对象，包含错误信息和是否验证通过
   */
  validate: () => Promise<{
    errorFields: { name: string[], errors: string[] }[];
    isValid: boolean;
  }>;

  /**
   * 重置所有字段为初始值
   */
  resetFields: () => AriFormInstance;

  /**
   * 获取所有字段的错误信息
   */
  getErrors: () => Record<string, string>;

  /**
   * 设置表单回调函数
   * @internal 内部使用，不应直接调用
   */
  setCallbacks: (callbacks: {
    onValuesChange?: (changedValues: AriFormValues, allValues: AriFormValues, prevValues: AriFormValues) => void;
    onSync?: () => void;
    onFinish?: (values: AriFormValues) => void;
    onFinishFailed?: (errorFields: { name: string[], errors: string[] }[], values: AriFormValues) => void;
  }) => AriFormInstance;

  /**
   * 设置表单规则
   * @internal 内部使用，不应直接调用
   */
  setRules: (rules?: AriFormRules) => AriFormInstance;

  /**
   * 手动提交表单
   * 触发onFinish或onFinishFailed回调
   */
  submit: () => Promise<void>;
}
