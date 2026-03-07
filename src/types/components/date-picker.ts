import { _Props } from "./base";
import { AriCalendarProps } from "./calendar";
import { AriTimePickerProps } from "./time-picker";

/**
 * 日期选择器组件属性
 * 
 * 用于选择日期的输入框组件，点击后显示日历进行日期选择
 * 
 * Example:
 * {@link https://aries-react.dev/docs/date-picker}
 */
export interface AriDatePickerProps extends Omit<_Props, 'onChange'> {
    /**
     * 当前选中的日期
     * 受控组件模式下的当前值
     */
    value?: Date;

    /**
     * 默认选中的日期
     * 非受控组件模式下的默认值
     * 
     * default: 当前日期
     */
    defaultValue?: Date;

    /**
     * 日期变化回调
     * 当用户选择日期时触发
     * 
     * Params:
     * 
     *   - date: 选中的日期
     */
    onChange?: (date: Date) => void;

    /**
     * 最小可选日期
     * 用户只能选择该日期及之后的日期
     */
    minDate?: Date;

    /**
     * 最大可选日期
     * 用户只能选择该日期及之前的日期
     */
    maxDate?: Date;

    /**
     * 禁用的日期
     * 用户无法选择这些日期
     */
    disabledDates?: Date[];

    /**
     * 禁用状态
     * 是否禁用日期选择器
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 日期格式化函数
     * 用于自定义日期的显示格式
     * 
     * Params:
     * 
     *   - date: 日期对象
     * 
     * Returns:
     * 
     *   格式化后的日期字符串
     * 
     * default: 'YYYY-MM-DD'格式
     */
    format?: (date: Date) => string;

    /**
     * 占位符文本
     * 当没有选择日期时显示的文本
     * 
     * default: '请选择日期'
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
     * 日历面板属性
     * 传递给日历组件的属性
     */
    calendarProps?: Partial<AriCalendarProps>;

    /**
     * 弹出位置
     * 日历弹出的位置
     * 
     * default: 'bottom-start'
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';

    /**
     * 自定义前缀图标
     * 输入框前的图标
     * 
     * default: 'calendar_today'
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
     * 是否显示时间选择器
     * 是否在日期选择器中显示时间选择
     * 
     * default: false
     */
    showTime?: boolean;

    /**
     * 时间选择器属性
     * 传递给时间选择器的属性
     */
    timePickerProps?: Partial<Omit<AriTimePickerProps, 'value' | 'defaultValue' | 'onChange'>>;

    /**
     * 日期时间格式化函数
     * 当showTime为true时，用于自定义日期和时间的显示格式
     * 
     * Params:
     * 
     *   - date: 日期时间对象
     * 
     * Returns:
     * 
     *   格式化后的日期时间字符串
     * 
     * default: 'YYYY-MM-DD HH:mm:ss'格式
     */
    dateTimeFormat?: (date: Date) => string;
}