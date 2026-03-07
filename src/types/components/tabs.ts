
/** 
 * 标签页项目类型
 */
export interface AriTabItem {
    /** 唯一标识 */
    key: string;
    /** 标签标题 */
    label: React.ReactNode;
    /** 标签内容 */
    children: React.ReactNode;
    /** 是否禁用 */
    disabled?: boolean;
}

/**
 * 标签页组件 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tabs}
 */
export interface AriTabsProps {
    /** 当前激活标签的key */
    activeKey: string;
    /** 标签项 */
    items: AriTabItem[];
    /** 标签切换回调 */
    onChange: (activeKey: string) => void;
    /** 自定义类名 */
    className?: string;
    /** 标签页变体 */
    variant?: 'default' | 'vertical' | 'card';
}
