import { _Props } from "./base";

/**
 * 日历组件属性
 * 
 * 用于展示和选择日期的组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/calendar}
 */
export interface AriCalendarProps extends Omit<_Props, 'onChange'> {
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
     * 是否禁用日历
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 日历模式
     * 控制日历显示的视图类型
     * 
     * default: "date"
     */
    mode?: 'date' | 'month' | 'year';

    /**
     * 自定义日期渲染函数
     * 可以自定义日期单元格的渲染内容
     * 
     * Params:
     * 
     *   - date: 日期
     *   - isSelected: 是否选中
     *   - isDisabled: 是否禁用
     *   - isToday: 是否是今天
     */
    dateRender?: (date: Date, isSelected: boolean, isDisabled: boolean, isToday: boolean) => React.ReactNode;

    /**
     * 自定义头部渲染函数
     * 可以自定义日历头部的渲染内容
     * 
     * Params:
     * 
     *   - date: 当前显示的日期
     *   - mode: 当前显示的模式
     *   - changeMode: 改变模式的回调函数
     *   - onPrevMonth: 上个月按钮的回调函数
     *   - onNextMonth: 下个月按钮的回调函数
     *   - onPrevYear: 上一年按钮的回调函数
     *   - onNextYear: 下一年按钮的回调函数
     */
    headerRender?: (
        date: Date,
        mode: 'date' | 'month' | 'year',
        changeMode: (mode: 'date' | 'month' | 'year') => void,
        onPrevMonth: () => void,
        onNextMonth: () => void,
        onPrevYear: () => void,
        onNextYear: () => void
    ) => React.ReactNode;

    /**
     * 是否显示今天按钮
     * 
     * default: true
     */
    showToday?: boolean;

    /**
     * 每周的起始日
     * 0表示周日，1表示周一
     * 
     * default: 0
     */
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

    /**
     * 日期单元格形状
     * 
     * default: "circle"
     */
    dateShape?: 'circle' | 'square';
}