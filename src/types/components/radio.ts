import { _Props } from "./base";

/**
 * 单选框组件属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
export interface AriRadioProps extends Omit<_Props, 'onChange'> {
    /**
     * 单选框的值
     * 用于唯一标识该单选框
     * 
     * default: undefined
     */
    value: string | number;

    /**
     * 单选框组名称
     * 用于关联一组单选框
     * 
     * default: undefined
     */
    name?: string;

    /**
     * 是否选中
     * 控制单选框是否被选中
     * 
     * default: false
     */
    checked?: boolean;

    /**
     * 默认是否选中
     * 非受控组件的默认值
     * 
     * default: false
     */
    defaultChecked?: boolean;

    /**
     * 是否禁用
     * 控制单选框是否可交互
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 选中状态改变时的回调函数
     * 
     * Params:
     * 
     *   - e: 事件对象
     *   - value: 单选框的值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;

    /**
     * 标签内容
     * 显示在单选框旁边的文本
     * 
     * default: undefined
     */
    label?: React.ReactNode;

    /**
     * 单选框尺寸
     * 控制单选框的大小
     * 
     * default: 'default'
     */
    size?: 'sm' | 'default' | 'lg';
}

/**
 * 单选框组属性
 * 用于管理一组单选框
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
export interface AriRadioGroupProps extends Omit<_Props, 'onChange'> {
    /**
     * 选中的值
     * 受控组件的当前值
     * 
     * default: undefined
     */
    value?: string | number;

    /**
     * 默认选中的值
     * 非受控组件的默认值
     * 
     * default: undefined
     */
    defaultValue?: string | number;

    /**
     * 单选框组名称
     * 用于关联一组单选框
     * 
     * default: undefined
     */
    name?: string;

    /**
     * 选项数组
     * 用于批量生成单选框
     * 
     * default: []
     */
    options?: Array<{
        label: React.ReactNode;
        value: string | number;
        disabled?: boolean;
    }>;

    /**
     * 子元素
     * 可以是任意 React 节点
     */
    children?: React.ReactNode;

    /**
     * 是否禁用整个单选框组
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 选中值变化时的回调函数
     * 
     * Params:
     * 
     *   - value: 当前选中的值
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onChange?: (value: string | number) => void;

    /**
     * 单选框尺寸
     * 控制单选框的大小
     * 
     * default: 'default'
     */
    size?: 'sm' | 'default' | 'lg';
}

/**
 * 单选框按钮属性
 * 按钮样式的单选框
 * 
 * Example:
 * {@link https://aries-react.dev/docs/radio}
 */
export interface AriRadioButtonProps extends AriRadioProps {
    /**
     * 子元素
     * 可以是任意 React 节点，用作按钮文本内容
     */
    children?: React.ReactNode;
}