export interface StickyHeaderHeightOptions {
  // 默认高度（避免首次渲染跳动）
  defaultHeight?: number;
  // 是否包含 margin
  includeMargin?: boolean;
  // 防抖延迟
  debounce?: number;
  // 是否使用 useLayoutEffect（同步计算，避免闪烁）
  synchronous?: boolean;
}
