import { _Props } from "./base";

/**
 * 时间选择器组件属性
 * 
 * 用于选择时间的输入框组件，点击后显示时间选择面板进行时间选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/time-picker}
 */
export interface AriTimePickerProps extends Omit<_Props, 'onChange'> {
    /**
     * 当前选中的时间
     * 受控组件模式下的当前值
     */
    value?: Date;

    /**
     * 默认选中的时间
     * 非受控组件模式下的默认值
     * 
     * default: 当前时间
     */
    defaultValue?: Date;

    /**
     * 时间变化回调
     * 当用户选择时间时触发
     * 
     * Params:
     * 
     *   - time: 选中的时间
     */
    onChange?: (time: Date) => void;

    /**
     * 最小可选时间
     * 用户只能选择该时间及之后的时间
     */
    minTime?: Date;

    /**
     * 最大可选时间
     * 用户只能选择该时间及之前的时间
     */
    maxTime?: Date;

    /**
     * 禁用状态
     * 是否禁用时间选择器
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 时间格式化函数
     * 用于自定义时间的显示格式
     * 
     * Params:
     * 
     *   - time: 时间对象
     * 
     * Returns:
     * 
     *   格式化后的时间字符串
     * 
     * default: 'HH:MM:SS'格式
     */
    format?: (time: Date) => string;

    /**
     * 占位符文本
     * 当没有选择时间时显示的文本
     * 
     * default: '请选择时间'
     */
    placeholder?: string;

    /**
     * 尺寸
     * 组件的大小
     * 
     * default: 'medium'
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否可清除
     * 是否显示清除按钮
     * 
     * default: true
     */
    clearable?: boolean;

    /**
     * 使用12小时制
     * 是否使用12小时制（上午/下午）而不是24小时制
     * 
     * default: false
     */
    use12Hours?: boolean;

    /**
     * 步长
     * 分钟和秒的选择步长
     */
    step?: {
        /**
         * 小时步长
         * 
         * default: 1
         */
        hour?: number;
        
        /**
         * 分钟步长
         * 
         * default: 1
         */
        minute?: number;
        
        /**
         * 秒步长
         * 
         * default: 1
         */
        second?: number;
    };

    /**
     * 显示秒选择器
     * 是否显示秒选择
     * 
     * default: true
     */
    showSecond?: boolean;

    /**
     * 弹出位置
     * 时间选择面板弹出的位置
     * 
     * default: 'bottom-start'
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';

    /**
     * 自定义前缀图标
     * 输入框前的图标
     * 
     * default: 'schedule'
     */
    prefixIcon?: string;

    /**
     * 输入框readonly
     * 是否只读（不允许键盘输入）
     * 
     * default: true
     */
    readonly?: boolean;

    /**
     * 隐藏底部按钮
     * 是否隐藏确定和此刻按钮
     * 
     * default: false
     */
    hideFooter?: boolean;

    /**
     * 嵌入模式
     * 直接显示时间选择面板，不显示输入框
     * 
     * default: false
     */
    embedded?: boolean;
}