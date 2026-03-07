import { _Props } from "./base";

/**
 * 链接组件属性
 * 定义链接组件支持的所有配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/link}
 */
export interface AriLinkProps extends Omit<_Props, 'ref'> {
    /**
     * 链接元素的引用
     */
    ref?: React.LegacyRef<HTMLAnchorElement>;
    /**
     * 链接目标地址
     * 链接指向的URL
     * 
     * default: undefined
     */
    href?: string;

    /**
     * 链接打开方式
     * 控制链接在哪个窗口或标签页中打开
     * 
     * default: "_self"
     */
    target?: "_self" | "_blank" | "_parent" | "_top";

    /**
     * 链接与当前文档的关系
     * 用于指定链接的安全性或其他属性
     * 
     * default: 当target为"_blank"时为"noopener noreferrer"，否则为undefined
     */
    rel?: string;

    /**
     * 是否禁用链接
     * 禁用时链接不可点击，但仍然保持其视觉风格
     * 
     * default: false
     */
    disabled?: boolean;

    /**
     * 链接类型
     * 控制链接的视觉样式
     * 
     * default: "default"
     */
    type?: "default" | "brand" | "success" | "warning" | "danger" | "info" | "muted";

    /**
     * 链接尺寸
     * 
     * default: "default"
     */
    size?: "small" | "default" | "large" | "extra-large";

    /**
     * 是否使用下划线
     * 
     * default: false
     */
    underline?: boolean;

    /**
     * 是否为块级元素
     * 设为true时链接会占据整个父容器宽度
     * 
     * default: false
     */
    block?: boolean;

    /**
     * 链接内图标
     * 可以指定图标名称，将在链接文本旁显示图标
     * 
     * default: undefined
     */
    icon?: string;

    /**
     * 图标位置
     * 控制图标显示在文本的左侧还是右侧
     * 
     * default: "left"
     */
    iconPosition?: "left" | "right";

    /**
     * 链接点击事件处理函数
     * 当链接被点击时触发的回调函数
     * 
     * Params:
     * 
     *   - e: React的鼠标事件对象
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}