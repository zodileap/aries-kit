import { AriContainerProps } from "./container";

/**
 * 弹性布局组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/flex}
 */
export interface AriFlexProps extends AriContainerProps {
    /** 间距大小，支持数字（px）或字符串值 */
    space?: number | string;
    /** 是否垂直排列 */
    vertical?: boolean;
    /** 垂直对齐方式 (align-items) */
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    /** 水平对齐方式 (justify-content) */
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    /** 子元素是否自动换行 */
    wrap?: boolean;
    /** 是否填充父容器宽度 */
    fill?: boolean;
    /**
     * 弹性项目属性
     * 
     * 用于设置子元素的弹性属性和尺寸属性，支持单个对象或数组形式。
     * 当使用单个对象形式时，可以指定或不指定 index，不指定时弹性属性应用于所有子元素。
     * 当使用数组形式时，可以对多个子元素分别设置不同的弹性属性。
     * 
     * Params:
     * 
     *   - index: 指定哪个子元素应用弹性属性。如果是对象形式且不指定，则应用于所有子元素。
     *   - overflow: 指定溢出行为，默认为 'auto'。
     *   - flex: 指定 flex 属性值，如 '1 0 auto', 1 等。如果不指定，默认为 1。
     *   - width: 指定元素宽度，可以是数字（px）或字符串值（如 '200px', '50%'）。
     *   - height: 指定元素高度，可以是数字（px）或字符串值。
     *   - maxWidth: 指定元素最大宽度。
     *   - minWidth: 指定元素最小宽度。
     *   - maxHeight: 指定元素最大高度。
     *   - minHeight: 指定元素最小高度。
     * 
     * Example:
     * 
     * ```tsx
     * // 单个对象形式，指定索引和宽度
     * <AriFlex flexItem={{ index: 1, flex: 2, width: 200 }}>
     *   <div>Item 1</div>
     *   <div>Item 2</div>
     * </AriFlex>
     * 
     * // 单个对象形式，应用于所有子元素
     * <AriFlex flexItem={{ flex: '1 0 auto', maxWidth: '300px' }}>
     *   <div>Item 1</div>
     *   <div>Item 2</div>
     * </AriFlex>
     * 
     * // 数组形式，对不同子元素设置不同属性
     * <AriFlex flexItem={[
     *   { index: 0, flex: 1, minWidth: 100 },
     *   { index: 1, flex: 2, overflow: 'hidden', maxHeight: 300 }
     * ]}>
     *   <div>Item 1</div>
     *   <div>Item 2</div>
     * </AriFlex>
     * ```
     */
    flexItem?: {
        index?: number;       // 指定哪个子元素应用弹性属性
        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'; // 指定溢出行为
        flex?: string | number; // 指定flex属性值，如 '1 0 auto', 1 等
        width?: string | number; // 指定元素宽度
        height?: string | number; // 指定元素高度
        maxWidth?: string | number; // 指定元素最大宽度
        minWidth?: string | number; // 指定元素最小宽度
        maxHeight?: string | number; // 指定元素最大高度
        minHeight?: string | number; // 指定元素最小高度
    } | Array<{
        index: number;       // 指定哪个子元素应用弹性属性
        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'; // 指定溢出行为
        flex?: string | number; // 指定flex属性值，如 '1 0 auto', 1 等
        width?: string | number; // 指定元素宽度
        height?: string | number; // 指定元素高度
        maxWidth?: string | number; // 指定元素最大宽度
        minWidth?: string | number; // 指定元素最小宽度
        maxHeight?: string | number; // 指定元素最大高度
        minHeight?: string | number; // 指定元素最小高度
    }>;
    /** 子元素 */
    children?: React.ReactNode;
    
}
