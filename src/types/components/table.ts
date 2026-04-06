/**
 * CSS类名配置接口
 */
export interface CellClassConfig {
  base: string;
  leftFixed: string;
  rightFixed: string;
  lastLeftFixed: string;
  firstRightFixed: string;
}

/**
 * CSS生成器接口
 */
export interface CssGenerator {
  gen: (...args: (string | undefined)[]) => string;
  e: (element: string) => string;
  is: (state: string, condition: boolean) => string | undefined;
  em: (element: string, modifier: string) => string;
  b: () => string;
  m: (modifier: string) => string;
}

/**
 * 优化的表格行组件 - 使用 React.memo 防止不必要的重新渲染
 */
export interface TableRowProps<
  T extends Record<string, unknown>,
  K extends string = string
> {
  row: T;
  rowIndex: number;
  columns: AriTableColumn<T, K>[];
  staticCellClasses: CellClassConfig[];
  hasHorizontalScroll: boolean;
  isHovered: boolean;
  isSelected: boolean;
  striped: boolean;
  selectable: boolean;
  cs: CssGenerator;
  emptyPlaceholder: string;
  onRowClick: (index: number) => void;
  onRowMouseEnter: (index: number) => void;
  onRowMouseLeave: () => void;
  onRow?: (
    record: T,
    index: number
  ) => React.HTMLAttributes<HTMLTableRowElement>;
  renderCellContent: (
    column: AriTableColumn<T, K>,
    row: T,
    rowIndex: number
  ) => React.ReactNode;
  columnStyles: React.CSSProperties[];
}

/**
 * 表格组件属性
 *
 * Example:
 * {@link https://aries-react.dev/docs/table}
 */
export interface AriTableProps<T = any, K extends string = string> {
  /**
   * 表格数据
   */
  data?: T[];

  /**
   * 表格列配置
   */
  columns: AriTableColumn<T, K>[];

  /**
   * 表格标题
   */
  title?: string;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean;

  /**
   * 是否显示斑马纹
   * @default false
   */
  striped?: boolean;

  /**
   * 是否可以选择行
   * @default false
   */
  selectable?: boolean;

  /**
   * 选中行变化时的回调
   */
  onSelectionChange?: (selectedItems: T[]) => void;

  /**
   * 表格尺寸
   * 'xs': 紧凑型表格
   * 'default': 默认大小
   * 'xl': 宽松型表格
   * @default 'default'
   */
  size?: "xs" | "default" | "xl";

  /**
   * 是否启用粘性表头
   * @default true
   */
  stickyHeader?: boolean;

  /**
   * 表格内容区域的最大高度
   * 设置后表格将在内部滚动
   */
  maxHeight?: number | string;

  /**
   * 父容器引用
   * 如果提供，表格会计算父容器的可用高度并用作最大高度
   * 优先级高于 maxHeight
   */
  parentContainer?: React.RefObject<HTMLElement>;

  /**
   * 粘性状态变化回调
   * 当表头的粘性状态发生变化时触发
   */
  onStickyChange?: (isSticky: boolean) => void;

  /**
   * 自定义行属性
   * 可以为表格行设置额外的属性，例如事件处理函数和样式
   */
  onRow?: (
    record: T,
    index: number
  ) => React.HTMLAttributes<HTMLTableRowElement>;

  /**
   * 单元格为空时显示的占位符
   * @default '-'
   */
  emptyPlaceholder?: string;

  /** 当前页码 */
  current?: number;
  /** 默认页码 */
  defaultCurrent?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 默认每页条数 */
  defaultPageSize?: number;
  /** 是否显示分页器 */
  showPagination?: boolean;
  /** 分页器位置 */
  paginationPosition?: "top" | "bottom" | "both";
  /** 是否显示每页条数选择器 */
  showSizeChanger?: boolean;
  /** 每页条数选择器可选值 */
  pageSizeOptions?: number[];
  /** 是否显示快速跳转 */
  showQuickJumper?: boolean;
  /** 是否显示总数 */
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  /** 页码改变时的回调 */
  onPageChange?: (page: number, pageSize: number) => void;
  /** 每页条数改变时的回调 */
  onPageSizeChange?: (current: number, size: number) => void;

  /** 是否启用滚动分页 */
  enableScrollPaging?: boolean;
  /** 滚动分页时的加载阈值（距离底部多少像素时触发） */
  scrollThreshold?: number;
  /** 滚动加载时的回调，返回 false 表示没有更多数据 */
  onScrollLoad?: () => Promise<boolean> | boolean;
  /** 是否正在加载更多数据 */
  loading?: boolean;
  /** 是否还有更多数据 */
  hasMore?: boolean;
  /**
   * 是否显示底部滚动提示（加载中/没有更多）
   * @default true
   */
  showScrollTip?: boolean;
  /** 加载状态显示文本 */
  loadingText?: string;
  /** 没有更多数据时显示的文本 */
  noMoreText?: string;
}

/**
 * 表格列配置
 */
export interface AriTableColumn<T = any, K extends string = never> {
  /**
   * 列标题
   */
  title: string;

  /**
   * 列数据在数据项中对应的路径或额外支持的键名
   */
  key: keyof T | K;

  /**
   * 列宽度
   */
  width?: number | string;

  /**
   * 列最大宽度
   * 当内容超出此宽度时，将显示省略号并在hover时显示tooltip
   */
  maxWidth?: number | string;

  /**
   * 对齐方式
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * 固定列位置
   * 设置为true时固定在左侧，设置为'right'时固定在右侧
   */
  fixed?: boolean | "right" | "left";

  /**
   * 自定义渲染函数
   */
  render?: (value: any, record: T, index: number) => React.ReactNode;

  /**
   * 是否启用文本省略
   * 超出部分将被省略号替代，并在hover时显示tooltip
   * 当启用时，该列的内容将被限制为单行显示，超出的部分将被省略号替代
   * 当鼠标挂停在单元格上时，将会显示一个包含完整内容的tooltip
   * @default false
   */
  ellipsis?: boolean;

  /**
   * 点击行时的回调函数
   * @param record 
   * @param index 
   * @returns 
   */
  onClick?: (record: T, index: number) => void;
}
