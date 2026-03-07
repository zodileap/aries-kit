import { LineClamp } from "../widget";
import { _Props } from "./base";

/**
 * Typography组件属性
 * 用于展示各种类型的文本内容，支持不同的样式变体、颜色和排版属性
 */
export interface AriTypographyProps extends _Props {
    /**
     * 文本内容
     */
    value?: string | number | React.ReactNode;
    
    /**
     * 文本的变体样式
     * 
     * default: 'body'
     */
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'overline';
    
    /**
     * 文本颜色
     * 
     * default: 'inherit'
     */
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
    
    /**
     * 文本对齐方式
     * 
     * default: 'inherit'
     */
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    
    /**
     * 是否在底部添加间距
     * 
     * default: false
     */
    gutterBottom?: boolean;
    
    /**
     * 文本换行方式
     * 
     * normal: 默认值，文本会在到达容器边界时换行
     * nowrap: 文本不会换行，会被截断
     * pre: 保留空格和换行符
     * pre-wrap: 保留空格和换行符，但是会换行
     * pre-line: 保留空格和换行符，但是会换行
     * 
     * default: 'normal'
     */
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
    
    /**
     * 超出容器的处理方式
     * 
     * visible: 默认值，超出容器的文本会被显示
     * hidden: 超出容器的文本会被隐藏
     * scroll: 超出容器的文本会被隐藏，但是会显示滚动条
     * auto: 超出容器的文本会被隐藏，但是会显示滚动条，只有在文本超出容器时才会显示滚动条
     * 
     * default: 'visible'
     */
    overflow?: "visible" | "hidden" | "scroll" | "auto";
    
    /**
     * 文本溢出时的处理方式
     * 
     * clip: 默认值，文本会被截断
     * ellipsis: 文本会被截断，被省略号代替
     * 
     * default: 'clip'
     */
    textOverflow?: "clip" | "ellipsis";
    
    /**
     * 文本行数限制
     */
    lineClamp?: LineClamp;
    
    /**
     * 是否不换行，超出显示省略号
     * 
     * default: false
     */
    noWrap?: boolean;

    /**
     * 是否加粗文本
     *
     * default: false
     */
    bold?: boolean;

    /**
     * 是否使用斜体文本
     *
     * default: false
     */
    italic?: boolean;
    
    /**
     * 额外的CSS类名
     */
    className?: string;
    
    /**
     * 子元素，通常是文本内容
     */
    children?: React.ReactNode;
    
    /**
     * 点击事件处理器
     */
    onClick?: (e: React.MouseEvent) => void;
    
    /**
     * 鼠标进入事件处理器
     */
    onMouseEnter?: (e: React.MouseEvent) => void;
    
    /**
     * 鼠标离开事件处理器
     */
    onMouseLeave?: (e: React.MouseEvent) => void;
    
    /**
     * 鼠标按下事件处理器
     */
    onMouseDown?: (e: React.MouseEvent) => void;
    
    /**
     * 鼠标松开事件处理器
     */
    onMouseUp?: (e: React.MouseEvent) => void;
}
