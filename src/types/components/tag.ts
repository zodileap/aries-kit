import { WidgetSize } from "../widget";

/**
 * 标签组件 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tag}
 */
export interface AriTagProps {
    /**
     * 标签的文本内容
     */
    children: React.ReactNode;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 是否可关闭
     * @default false
     */
    closable?: boolean;

    /**
     * 关闭标签时的回调函数
     */
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;

    /**
     * 点击标签时的回调函数
     */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /**
     * 标签颜色
     * @default undefined
     */
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 
            // 基础颜色
            'blue' | 'green' | 'grey' | 'orange' | 'persimmon' | 
            'pink' | 'purple' | 'red' | 'teal' | 'violet' | 'yellow' |
            // 淡色系列
            'pale-blue' | 'pale-green' | 'pale-persimmon' | 'pale-pink' | 
            'pale-purple' | 'pale-red' | 'pale-violet' | 'pale-yellow' |
            string;

    /**
     * 标签前图标
     */
    icon?: string;

    /**
     * 是否有边框
     * @default false
     */
    bordered?: boolean;
    
    /**
     * 标签大小
     * @default 'default'
     */
    size?: WidgetSize;
    
    /**
     * 是否处于激活状态
     * @default false
     */
    active?: boolean;
}
