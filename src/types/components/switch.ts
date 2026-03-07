import { _Props } from "./base";

/**
 * 开关组件属性
 * 定义开关组件支持的所有配置选项
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/switch}
 */
export interface AriSwitchProps<T = boolean> extends Omit<_Props, 'onChange'| 'children' | 'ref'> {
    /**
     * 开关元素的引用
     */
    ref?: React.LegacyRef<HTMLButtonElement>;
    /**
     * 开关状态
     * 控制开关的开启/关闭状态
     * 
     * default: false
     */
    checked?: T;

    /**
     * 默认状态
     * 非受控状态下的默认值
     * 
     * default: false
     */
    defaultChecked?: T;

    /**
     * 禁用状态
     * 控制开关是否禁用
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 状态变化回调
     * 当开关状态改变时触发
     * 
     * Params:
     * 
     *   - value: 新的开关值
     *   - event: 事件对象
     */
    onChange?: (value: T, event: React.MouseEvent) => void;

    /**
     * 选中时的值
     * 开关打开状态时的值
     * 
     * default: true
     */
    checkedValue?: T;

    /**
     * 未选中时的值
     * 开关关闭状态时的值
     * 
     * default: false
     */
    uncheckedValue?: T;

    /**
     * 加载状态
     * 开关处于加载中状态
     * 
     * default: false
     */
    loading?: boolean;

    /**
     * 尺寸大小
     * 控制开关的尺寸大小
     * 
     * default: "default"
     */
    size?: 'sm' | 'default' | 'lg';
    
    /**
     * 选中时的内容
     * 在开关打开状态时显示在开关左侧的内容
     * 切换时会有左右移动效果
     */
    checkedChildren?: React.ReactNode;
    
    /**
     * 非选中时的内容
     * 在开关关闭状态时显示在开关右侧的内容
     * 切换时会有左右移动效果
     */
    unCheckedChildren?: React.ReactNode;
}