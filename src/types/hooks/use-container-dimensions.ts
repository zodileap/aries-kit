export interface ContainerDimensions {
  width: number;
  left: number;
  right: number;
  paddingLeft: number;
  paddingRight: number;
}

export interface UseContainerDimensionsOptions {
  // 是否启用防抖
  debounce?: number;
  // 是否监听滚动事件
  observeScroll?: boolean;
  // 初始尺寸（避免首次渲染闪烁）
  initialDimensions?: Partial<ContainerDimensions>;
}
