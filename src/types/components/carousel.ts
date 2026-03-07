/**
 * 轮播组件项的配置
 * 定义单个轮播项的内容和属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/carousel}
 */
export interface AriCarouselItem {
    /**
     * 轮播项的唯一标识
     * 用于React的key属性
     */
    id: string | number;

    /**
     * 轮播项的内容
     * 可以是图片、文字或其他React节点
     */
    content?: React.ReactNode;

    /**
     * 图片地址
     * 如果轮播项是图片时使用
     * 
     * default: undefined
     */
    src?: string;

    /**
     * 图片的替代文本
     * 用于无障碍访问
     * 
     * default: undefined
     */
    alt?: string;

    /**
     * 轮播项标题
     * 在卡片模式下作为覆盖层文字显示
     * 
     * default: undefined
     */
    title?: string;
}

/**
 * 轮播方向（已废弃，新设计固定为中心展示模式）
 * 定义轮播图的滚动方向
 * 
 *   - horizontal: 水平方向
 *   - vertical: 垂直方向
 * 
 * @deprecated 新版carousel采用固定中心展示设计
 */
export type AriCarouselDirection = "horizontal" | "vertical";

/**
 * 轮播效果（已废弃，新设计固定为毛玻璃中心展示效果）
 * 定义轮播图的切换效果
 * 
 *   - slide: 滑动效果
 *   - fade: 淡入淡出效果
 * 
 * @deprecated 新版carousel采用固定毛玻璃中心展示设计
 */
export type AriCarouselEffect = "slide" | "fade";

/**
 * 轮播变体（已废弃，新设计固定为中心展示模式）
 * 定义轮播图的展示样式
 * 
 *   - default: 默认样式
 *   - cards: 卡片式 3D 效果
 * 
 * @deprecated 新版carousel采用固定中心展示设计
 */
export type AriCarouselVariant = "default" | "cards";

/**
 * 轮播组件属性
 * 定义轮播组件支持的配置选项
 * 
 * Example:
 * {@link https://aries-react.dev/docs/carousel}
 */
export interface AriCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * 轮播项列表
     * 可以是数组或React子元素
     */
    items?: AriCarouselItem[];

    /**
     * 子元素
     * 如果不使用items，可以直接传入子元素
     * 
     * default: undefined
     */
    children?: React.ReactNode;

    /**
     * 当前激活的索引
     * 受控模式下使用
     * 
     * default: undefined
     */
    activeIndex?: number;

    /**
     * 默认激活的索引
     * 非受控模式下使用
     * 
     * default: 0
     */
    defaultActiveIndex?: number;

    /**
     * 轮播方向（已废弃）
     * 控制轮播图的滚动方向
     * 
     * default: "horizontal"
     * 
     * @deprecated 新版carousel采用固定中心展示设计，此属性已无效
     */
    direction?: AriCarouselDirection;

    /**
     * 轮播效果（已废弃）
     * 控制轮播图的切换效果
     * 
     * default: "slide"
     * 
     * @deprecated 新版carousel采用固定毛玻璃中心展示设计，此属性已无效
     */
    effect?: AriCarouselEffect;

    /**
     * 轮播变体（已废弃）
     * 控制轮播图的展示样式
     * 
     * default: "default"
     * 
     * @deprecated 新版carousel采用固定中心展示设计，此属性已无效
     */
    variant?: AriCarouselVariant;

    /**
     * 是否自动播放
     * 控制轮播图是否自动切换
     * 
     * default: false
     */
    autoplay?: boolean;

    /**
     * 自动播放间隔
     * 单位：毫秒
     * 
     * default: 3000
     */
    interval?: number;

    /**
     * 是否显示指示器
     * 控制是否显示底部的点状指示器
     * 
     * default: true
     */
    showIndicators?: boolean;

    /**
     * 是否显示箭头
     * 控制是否显示左右切换箭头
     * 
     * default: true
     */
    showArrows?: boolean;

    /**
     * 是否循环播放
     * 到达最后一项后是否循环到第一项
     * 
     * default: true
     */
    loop?: boolean;

    /**
     * 轮播图高度
     * 
     * default: "300px"
     */
    height?: string | number;

    /**
     * 过渡动画持续时间
     * 单位：毫秒
     * 
     * default: 500
     */
    duration?: number;

    /**
     * 激活索引改变时的回调
     * 
     * Params:
     * 
     *   - index: 新的激活索引
     * 
     * default: undefined
     */
    onSlideChange?: (index: number) => void;

    /**
     * 鼠标移入时暂停自动播放
     * 
     * default: true
     */
    pauseOnHover?: boolean;

    /**
     * 自定义渲染轮播项
     * 
     * Params:
     * 
     *   - item: 轮播项数据
     *   - index: 轮播项索引
     * 
     * Returns:
     * 
     *   渲染的React节点
     * 
     * default: undefined
     */
    renderItem?: (item: AriCarouselItem, index: number) => React.ReactNode;

    /**
     * 自定义指示器的渲染
     * 
     * Params:
     * 
     *   - index: 指示器索引
     *   - isActive: 是否是当前激活项
     * 
     * Returns:
     * 
     *   渲染的React节点
     * 
     * default: undefined
     */
    renderIndicator?: (index: number, isActive: boolean) => React.ReactNode;
}
