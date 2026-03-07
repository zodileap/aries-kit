/**
 * 复选框属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/checked}
 */
export interface AriCheckboxProps {
    /** 是否选中 */
    checked?: boolean;
    /** 默认是否选中（非受控模式） */
    defaultChecked?: boolean;
    /** 值改变回调 */
    onChange?: (checked: boolean) => void;
    /** 标签内容 */
    children?: React.ReactNode;
    /** 是否禁用 */
    disabled?: boolean;
    /** 半选状态 */
    indeterminate?: boolean;
    /** 复选框的值，在CheckboxGroup中使用 */
    value?: string | number;
    /** 自定义类名 */
    className?: string;
}

/**
 * 复选框组属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/checked}
 */
export interface AriCheckboxGroupProps {
    /** 当前选中的值数组 */
    value?: Array<string | number>;
    /** 默认选中的值数组（非受控模式） */
    defaultValue?: Array<string | number>;
    /** 选中值变化回调 */
    onChange?: (checkedValues: Array<string | number>) => void;
    /** 子元素 */
    children?: React.ReactNode;
    /** 是否禁用所有复选框 */
    disabled?: boolean;
    /** 自定义类名 */
    className?: string;
}