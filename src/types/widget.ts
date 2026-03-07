/**
 * Position 部件的位置
 */
export type Position =
    | 'center'       /** 居中 */
    | 'topLeft'      /** 左上 */
    | 'topRight'     /** 右上 */
    | 'bottomLeft'   /** 左下 */
    | 'bottomRight'  /** 右下 */
    | 'left'          /** 左 */
    | 'right'       /** 右中 */
    | 'top'         /** 上中 */
    | 'bottom'      /** 下中 */
/**
 * ShadowMode 阴影显示模式
 */
export type ShadowMode = 'always' | 'active' | 'never'
/**
 * LayoutDirection 布局方向
 */
export type LayoutDirection = 'horizontal' | 'vertical'

/**
 * WidgetSize 部件大小
 */
export type WidgetSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl'

/**
 * 文本行数限制
 */
export type LineClamp = number | undefined