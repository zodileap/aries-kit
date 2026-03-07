/**
 * 统计数值组件类型定义
 * 
 * 用于展示统计数据、指标等数值信息。
 * 
 * Example:
 * 
 * ```tsx
 * <AriStatistic
 *   title="活跃用户"
 *   value={112893}
 *   prefix={<AriIcon name="person" />}
 * />
 * ```
 * 
 * ExamplePath: components/statistic/example.tsx
 */
export interface AriStatisticProps {
    /**
     * 数值的标题
     */
    title?: React.ReactNode;

    /**
     * 数值的内容
     */
    value?: React.ReactNode;

    /**
     * 设置数值的前缀
     */
    prefix?: React.ReactNode;

    /**
     * 设置数值的后缀
     */
    suffix?: React.ReactNode;

    /**
     * 数值精度
     */
    precision?: number;

    /**
     * 是否将数值加载为动画形式
     * @default false
     */
    loading?: boolean;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义数值样式
     */
    valueStyle?: React.CSSProperties;

    /**
     * 分组分隔符
     * @default ','
     */
    groupSeparator?: string;

    /**
     * 小数点
     * @default '.'
     */
    decimalSeparator?: string;

    /**
     * 格式化函数
     */
    formatter?: (value: any) => React.ReactNode;

    /**
     * 尺寸大小
     * @default 'default'
     */
    size?: 'small' | 'default' | 'large';

    /**
     * 颜色主题
     */
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';

    /**
     * 布局方式
     * @default 'vertical'
     */
    layout?: 'vertical' | 'inline';

    /**
     * 对齐方式
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';
}

/**
 * 倒计时组件类型定义
 * 
 * 继承自 AriStatisticProps，用于展示倒计时信息。
 * 
 * Example:
 * 
 * ```tsx
 * <AriCountdown
 *   title="倒计时"
 *   value={Date.now() + 1000 * 60 * 60} // 1小时
 *   format="HH:mm:ss"
 *   onFinish={() => console.log('倒计时完成!')}
 * />
 * ```
 * 
 * ExamplePath: components/statistic/example.tsx
 * 
 * Extends: {@link AriStatisticProps}
 */
export interface AriCountdownProps extends Omit<AriStatisticProps, 'value'> {
    /**
     * 倒计时的时间戳
     */
    value?: number | string | Date;

    /**
     * 时间格式
     * @default 'HH:mm:ss'
     */
    format?: string;

    /**
     * 完成时的回调函数
     */
    onFinish?: () => void;

    /**
     * 时间变化时的回调函数
     */
    onChange?: (value: number) => void;
}
