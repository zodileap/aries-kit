import { AriTableProps, AriTableColumn, TableRowProps } from "@ari/types";
import { useCss } from "@ari/utils";
import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  startTransition,
  useDeferredValue,
  useLayoutEffect,
} from "react";
import { AriTypography } from "../typography";
import { AriTooltip } from "../tooltip";
import { AriPagination } from "../pagination";
import { TableRow } from "./TableRow";
import { measureTextWidth } from "./utils";

/**
 * 表格组件（带分页支持）
 */
export const AriTable = <
  T extends Record<string, unknown>,
  K extends string = string
>({
  data = [],
  columns,
  title,
  className,
  bordered = false,
  striped = false,
  selectable = false,
  onSelectionChange,
  size = "default",
  stickyHeader = true,
  parentContainer,
  maxHeight,
  onStickyChange,
  onRow,
  emptyPlaceholder = "-",
  // 分页相关属性
  current: propCurrent,
  defaultCurrent = 1,
  pageSize: propPageSize,
  defaultPageSize = 20,
  showPagination = true,
  paginationPosition = "bottom",
  showSizeChanger = true,
  pageSizeOptions = [10, 20, 50, 100],
  showQuickJumper = true,
  showTotal,
  onPageChange,
  onPageSizeChange,
  // 滚动分页相关属性
  enableScrollPaging = false,
  scrollThreshold = 400,
  onScrollLoad,
  loading = false,
  hasMore = true,
  showScrollTip = true,
  loadingText = "正在加载...",
  noMoreText = "没有更多数据了",
  ...props
}: AriTableProps<T, K>) => {
  const cs = useCss("table");
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // 分页状态
  const [localCurrent, setLocalCurrent] = useState(defaultCurrent);
  const [localPageSize, setLocalPageSize] = useState(defaultPageSize);
  // 滚动分页显示的数据数量
  const [scrollDisplayCount, setScrollDisplayCount] = useState(defaultPageSize);

  const current = propCurrent !== undefined ? propCurrent : localCurrent;
  const pageSize = propPageSize !== undefined ? propPageSize : localPageSize;

  // **性能优化：使用 useDeferredValue 延迟hover状态更新**
  const [hoveredRowInternal, setHoveredRowInternal] = useState<number | null>(
    null
  );
  const hoveredRow = useDeferredValue(hoveredRowInternal);

  // **合并状态，减少渲染次数**
  const [tableState, setTableState] = useState({
    isSticky: false,
    hasHorizontalScroll: false,
    containerHeight: undefined as number | undefined,
  });

  // 表格容器引用
  const containerRef = useRef<HTMLDivElement>(null);
  const tableBodyRef = useRef<HTMLDivElement>(null);
  const tableContentRef = useRef<HTMLTableElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const topPaginationRef = useRef<HTMLDivElement>(null);
  const bottomPaginationRef = useRef<HTMLDivElement>(null);

  // **性能优化：将hover状态更新包装在 startTransition 中**
  const handleRowMouseEnter = useCallback((rowIndex: number) => {
    startTransition(() => {
      setHoveredRowInternal(rowIndex);
    });
  }, []);

  const handleRowMouseLeave = useCallback(() => {
    startTransition(() => {
      setHoveredRowInternal(null);
    });
  }, []);

  // **性能优化：预计算列的固定信息**
  const baseColumnInfo = useMemo(() => {
    const left: AriTableColumn<T, K>[] = [];
    const right: AriTableColumn<T, K>[] = [];
    const normal: AriTableColumn<T, K>[] = [];

    columns.forEach((column) => {
      if (column.fixed === true || column.fixed === "left") {
        left.push(column);
      } else if (column.fixed === "right") {
        right.push(column);
      } else {
        normal.push(column);
      }
    });

    return { left, right, normal };
  }, [columns]);

  // **性能优化：使用 startTransition 包装状态更新**
  const handleRowSelection = useCallback(
    (index: number, e?: React.MouseEvent) => {
      startTransition(() => {
        setSelectedRows((prev) => {
          const newSelection = new Set(prev);
          // 滚动分页模式下使用原始索引，传统分页模式下转换为原始数据索引
          const originalIndex = enableScrollPaging
            ? index
            : (current - 1) * pageSize + index;

          if (newSelection.has(originalIndex)) {
            newSelection.delete(originalIndex);
          } else {
            newSelection.add(originalIndex);
          }

          if (onSelectionChange && data) {
            const selectedItems = Array.from(newSelection)
              .map((idx) => data[idx])
              .filter(Boolean);
            onSelectionChange(selectedItems);
          }

          return newSelection;
        });
      });
    },
    [data, onSelectionChange, current, pageSize, enableScrollPaging]
  );

  // 分离选择列的生成逻辑
  const allColumnsWithSelection = useMemo(() => {
    const { left, right, normal } = baseColumnInfo;
    let allColumns = [...left, ...normal, ...right];

    if (selectable) {
      const hasLeftFixed = left.length > 0;
      const selectionColumn: AriTableColumn<T, K> = {
        title: "",
        key: "selection" as K,
        width: 50,
        align: "center",
        fixed: hasLeftFixed ? "left" : undefined,
        render: (_, __, rowIndex) => {
          const originalIndex = enableScrollPaging
            ? rowIndex
            : (current - 1) * pageSize + rowIndex;
          return (
            <div className={cs.e("checkbox")}>
              <input
                type="checkbox"
                checked={selectedRows.has(originalIndex)}
                onChange={(e) => {
                  e.stopPropagation();
                  handleRowSelection(rowIndex);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          );
        },
      };
      allColumns = [selectionColumn, ...allColumns];
    }

    return allColumns;
  }, [
    baseColumnInfo,
    selectable,
    cs,
    selectedRows,
    handleRowSelection,
    current,
    pageSize,
    enableScrollPaging,
  ]);

  const columnInfo = useMemo(() => {
    const { left, right } = baseColumnInfo;
    const allColumns = allColumnsWithSelection;

    const columnMeta = allColumns.map((column, index) => {
      const isLeftFixed = column.fixed === true || column.fixed === "left";
      const isRightFixed = column.fixed === "right";

      const leftFixedCount = allColumns.filter(
        (col) => col.fixed === true || col.fixed === "left"
      ).length;

      const lastLeftFixedIndex = leftFixedCount - 1;
      const firstRightFixedIndex = allColumns.length - right.length;

      return {
        column,
        index,
        isLeftFixed,
        isRightFixed,
        isLastLeftFixed: isLeftFixed && index === lastLeftFixedIndex,
        isFirstRightFixed: isRightFixed && index === firstRightFixedIndex,
      };
    });

    return {
      leftFixedColumns: left,
      rightFixedColumns: right,
      normalColumns: baseColumnInfo.normal,
      allColumns,
      columnMeta,
    };
  }, [baseColumnInfo, allColumnsWithSelection]);

  // **一次性计算所有样式**
  const { columnStyles, staticHeaderClasses, staticCellClasses } =
    useMemo(() => {
      // 计算列样式
      const computedColumnStyles = columnInfo.allColumns.map((column) => {
        const style: React.CSSProperties = {};

        if (column.width) {
          style.width = column.width;
          style.minWidth = column.width;
          style.maxWidth = column.width;
        } else if (column.maxWidth) {
          style.maxWidth = column.maxWidth;
          style.width = column.maxWidth;
          style.minWidth = column.maxWidth;
        } else {
          const minWidth = measureTextWidth(column.title);
          style.minWidth = `${minWidth}px`;
        }

        return style;
      });

      // 计算表头样式类
      const computedHeaderClasses = columnInfo.columnMeta.map(
        ({
          column,
          isLeftFixed,
          isRightFixed,
          isLastLeftFixed,
          isFirstRightFixed,
        }) => ({
          base: cs.gen(
            cs.e("header-cell"),
            cs.em("header-cell", `align-${column.align || "left"}`)
          ),
          leftFixed: isLeftFixed ? cs.em("header-cell", "fixed-left") : "",
          rightFixed: isRightFixed ? cs.em("header-cell", "fixed-right") : "",
          lastLeftFixed: isLastLeftFixed
            ? cs.em("header-cell", "last-fixed-left")
            : "",
          firstRightFixed: isFirstRightFixed
            ? cs.em("header-cell", "first-fixed-right")
            : "",
        })
      );

      // 计算单元格样式类
      const computedCellClasses = columnInfo.columnMeta.map(
        ({
          column,
          isLeftFixed,
          isRightFixed,
          isLastLeftFixed,
          isFirstRightFixed,
        }) => ({
          base: cs.gen(
            cs.e("cell"),
            cs.em("cell", `align-${column.align || "left"}`)
          ),
          leftFixed: isLeftFixed ? cs.em("cell", "fixed-left") : "",
          rightFixed: isRightFixed ? cs.em("cell", "fixed-right") : "",
          lastLeftFixed: isLastLeftFixed
            ? cs.em("cell", "last-fixed-left")
            : "",
          firstRightFixed: isFirstRightFixed
            ? cs.em("cell", "first-fixed-right")
            : "",
        })
      );

      return {
        columnStyles: computedColumnStyles,
        staticHeaderClasses: computedHeaderClasses,
        staticCellClasses: computedCellClasses,
      };
    }, [columnInfo, cs]);

  // 检测是否有水平滚动条
  const checkForHorizontalScroll = useCallback(() => {
    if (tableBodyRef.current && tableContentRef.current) {
      const hasScroll =
        tableBodyRef.current.scrollWidth > tableBodyRef.current.clientWidth;
      setTableState((prev) => ({ ...prev, hasHorizontalScroll: hasScroll }));
    }
  }, []);

  const handleRowClick = useCallback(
    (index: number) => {
      if (selectable) {
        handleRowSelection(index);
      }
    },
    [selectable, handleRowSelection]
  );

  // 滚动处理（包含滚动分页逻辑）
  const handleScroll = useCallback(async () => {
    if (!tableBodyRef.current) return;
    const scrollContainer = tableBodyRef.current;
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;

    // 处理 sticky header
    if (stickyHeader) {
      const newIsSticky = scrollTop > 0;
      if (newIsSticky !== tableState.isSticky) {
        startTransition(() => {
          setTableState((prev) => ({ ...prev, isSticky: newIsSticky }));
          onStickyChange?.(newIsSticky);
        });
      }
    }

    // 处理滚动分页
    if (enableScrollPaging && !loading) {
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceFromBottom <= scrollThreshold) {
        try {
          // 先检查是否还有本地数据可以加载
          if (scrollDisplayCount < data.length) {
            // 加载更多本地数据
            const nextCount = Math.min(
              scrollDisplayCount + pageSize,
              data.length
            );
            setScrollDisplayCount(nextCount);
          } else if (onScrollLoad && hasMore) {
            // 本地数据已经全部显示，且有外部加载函数，调用外部加载函数
            const hasMoreData = await onScrollLoad();
            if (!hasMoreData) {
              // 如果没有更多数据，可以在这里更新 hasMore 状态
              // 但这应该由父组件控制
            }
          }
        } catch (error) {
          console.error("滚动加载数据失败:", error);
        }
      }
    }

    checkForHorizontalScroll();
  }, [
    stickyHeader,
    tableState.isSticky,
    onStickyChange,
    checkForHorizontalScroll,
    enableScrollPaging,
    onScrollLoad,
    hasMore,
    loading,
    scrollThreshold,
  ]);

  // **性能优化：缓存单元格内容渲染逻辑**
  const renderCellContent = useCallback(
    (column: AriTableColumn<T, K>, row: T, rowIndex: number) => {
      let cellContent;
      let cellStyles = {};

      const shouldEllipsis = column.ellipsis || column.maxWidth;

      if (shouldEllipsis) {
        cellStyles = {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
          maxWidth: "100%",
          display: "block",
        };
      }

      if (column.render) {
        const renderResult = column.render(
          row[column.key as keyof T],
          row,
          rowIndex
        );
        if (
          !React.isValidElement(renderResult) &&
          (typeof renderResult === "string" ||
            typeof renderResult === "number" ||
            typeof renderResult === "boolean" ||
            renderResult === null ||
            renderResult === undefined)
        ) {
          cellContent = (
            <AriTypography variant="body" style={cellStyles}>
              {renderResult ?? emptyPlaceholder}
            </AriTypography>
          );
        } else {
          cellContent = shouldEllipsis ? (
            <div style={cellStyles}>{renderResult}</div>
          ) : (
            renderResult
          );
        }
      } else {
        const value = row[column.key as keyof T] || emptyPlaceholder;
        cellContent = (
          <AriTypography variant="body" style={cellStyles}>
            {String(value)}
          </AriTypography>
        );
      }

      if (shouldEllipsis) {
        let tooltipContent: React.ReactNode;
        if (React.isValidElement(cellContent)) {
          try {
            const props = cellContent.props;
            if (props && typeof props === "object") {
              const hasChildren = "children" in props && props.children != null;
              const hasValue = "value" in props && props.value != null;

              if (hasChildren) {
                tooltipContent = props.children as React.ReactNode;
              } else if (hasValue) {
                tooltipContent = (props as Record<string, unknown>)
                  .value as React.ReactNode;
              } else {
                tooltipContent = String(
                  row[column.key as keyof T] || emptyPlaceholder
                );
              }
            } else {
              tooltipContent = String(
                row[column.key as keyof T] || emptyPlaceholder
              );
            }
          } catch {
            tooltipContent = String(
              row[column.key as keyof T] || emptyPlaceholder
            );
          }
        } else {
          tooltipContent = String(
            row[column.key as keyof T] || emptyPlaceholder
          );
        }

        return <AriTooltip content={tooltipContent}>{cellContent}</AriTooltip>;
      }

      return cellContent;
    },
    [emptyPlaceholder]
  );

  // 当 data 变化时，重置滚动显示计数
  useEffect(() => {
    if (enableScrollPaging) {
      setScrollDisplayCount(Math.min(defaultPageSize, data.length));
    }
  }, [data, enableScrollPaging, defaultPageSize]);

  // 判断分页器是否应该显示
  const shouldShowPagination = useCallback(() => {
    return !enableScrollPaging && showPagination && data.length > pageSize;
  }, [enableScrollPaging, showPagination, data.length, pageSize]);

  // 计算分页器高度 - 使用固定高度65px
  const getPaginationHeight = useCallback(() => {
    let totalPaginationHeight = 0;
    const PAGINATION_HEIGHT = 65; // 固定分页器高度

    // 只有在分页器应该显示时才计算高度
    if (!shouldShowPagination()) {
      return 0;
    }

    // 检查是否显示顶部分页器
    if (paginationPosition === "top" || paginationPosition === "both") {
      totalPaginationHeight += PAGINATION_HEIGHT;
    }

    // 检查是否显示底部分页器
    if (paginationPosition === "bottom" || paginationPosition === "both") {
      totalPaginationHeight += PAGINATION_HEIGHT;
    }

    return totalPaginationHeight;
  }, [shouldShowPagination, paginationPosition]);

  // **使用 useLayoutEffect 来避免视觉闪烁**
  useLayoutEffect(() => {
    const calculateHeight = () => {
      let baseHeight: number | undefined;

      if (parentContainer?.current) {
        const parentRect = parentContainer.current.getBoundingClientRect();
        const parentStyle = window.getComputedStyle(parentContainer.current);
        const paddingTop = parseFloat(parentStyle.paddingTop);
        const paddingBottom = parseFloat(parentStyle.paddingBottom);
        baseHeight = parentRect.height - paddingTop - paddingBottom;
      } else if (maxHeight) {
        baseHeight =
          typeof maxHeight === "number" ? maxHeight : parseFloat(maxHeight);
      }

      if (baseHeight) {
        // 计算分页器总高度 - 使用固定高度
        const paginationHeight = getPaginationHeight();

        // 从总高度中减去分页器高度，得到滚动容器的高度
        const scrollContainerHeight = baseHeight - paginationHeight;

        setTableState((prev) => ({
          ...prev,
          containerHeight: Math.max(scrollContainerHeight, 100), // 最小高度100px
        }));
      }
    };

    // 立即计算，无需等待分页器渲染
    calculateHeight();
    checkForHorizontalScroll();

    if (parentContainer?.current) {
      const resizeObserver = new ResizeObserver(() => {
        calculateHeight();
        checkForHorizontalScroll();
      });

      resizeObserver.observe(parentContainer.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [
    parentContainer,
    maxHeight,
    checkForHorizontalScroll,
    getPaginationHeight,
  ]);

  // 设置滚动事件监听
  useEffect(() => {
    if (!tableBodyRef.current) return;

    const scrollContainer = tableBodyRef.current;
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      checkForHorizontalScroll();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, checkForHorizontalScroll]);

  // 延迟检查滚动条
  useEffect(() => {
    const timer = setTimeout(() => {
      checkForHorizontalScroll();
    }, 0);
    return () => clearTimeout(timer);
  }, [data, columns, checkForHorizontalScroll]);

  // 当分页器显示状态变化时，重新计算高度
  useEffect(() => {
    if (maxHeight || parentContainer?.current) {
      // 立即重新计算高度
      const paginationHeight = getPaginationHeight();
      let baseHeight: number | undefined;

      if (parentContainer?.current) {
        const parentRect = parentContainer.current.getBoundingClientRect();
        const parentStyle = window.getComputedStyle(parentContainer.current);
        const paddingTop = parseFloat(parentStyle.paddingTop);
        const paddingBottom = parseFloat(parentStyle.paddingBottom);
        baseHeight = parentRect.height - paddingTop - paddingBottom;
      } else if (maxHeight) {
        baseHeight =
          typeof maxHeight === "number" ? maxHeight : parseFloat(maxHeight);
      }

      if (baseHeight) {
        const scrollContainerHeight = baseHeight - paginationHeight;
        setTableState((prev) => ({
          ...prev,
          containerHeight: Math.max(scrollContainerHeight, 100),
        }));
      }
    }
  }, [
    showPagination,
    paginationPosition,
    getPaginationHeight,
    maxHeight,
    parentContainer,
  ]);

  const getHeaderClassName = useCallback(
    (colIndex: number) => {
      const staticClass = staticHeaderClasses[colIndex];
      if (!staticClass) return "";

      return cs.gen(
        staticClass.base,
        tableState.hasHorizontalScroll ? staticClass.leftFixed : "",
        tableState.hasHorizontalScroll ? staticClass.rightFixed : "",
        tableState.hasHorizontalScroll ? staticClass.lastLeftFixed : "",
        tableState.hasHorizontalScroll ? staticClass.firstRightFixed : "",
        tableState.isSticky ? cs.is("sticky", true) : ""
      );
    },
    [
      staticHeaderClasses,
      tableState.hasHorizontalScroll,
      tableState.isSticky,
      cs,
    ]
  );

  // 分页相关逻辑
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

  // 计算当前页显示的数据
  const currentPageData = useMemo(() => {
    // 滚动分页模式下显示前 scrollDisplayCount 条数据
    if (enableScrollPaging) {
      return data
        .slice(0, scrollDisplayCount)
        .map((row, index) => ({ row, index }));
    }

    // 传统分页模式
    if (!showPagination) {
      return data.map((row, index) => ({ row, index }));
    }

    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return data.slice(startIndex, endIndex).map((row, idx) => ({
      row,
      index: idx, // 页面内索引
    }));
  }, [
    data,
    current,
    pageSize,
    showPagination,
    enableScrollPaging,
    scrollDisplayCount,
  ]);

  // 处理分页变化
  const handlePaginationChange = useCallback(
    (page: number, size: number) => {
      setLocalCurrent(page);
      setLocalPageSize(size);
      onPageChange?.(page, size);

      // 清空当前页的选中状态，但保留其他页的选中状态
      if (selectable) {
        setSelectedRows((prev) => {
          const newSelection = new Set(prev);
          const currentPageStart = (current - 1) * pageSize;
          const currentPageEnd = currentPageStart + pageSize;

          // 移除当前页的选中项
          for (let i = currentPageStart; i < currentPageEnd; i++) {
            newSelection.delete(i);
          }

          return newSelection;
        });
      }
    },
    [current, pageSize, onPageChange, selectable]
  );

  const handlePageSizeChange = useCallback(
    (newCurrent: number, newSize: number) => {
      setLocalCurrent(newCurrent);
      setLocalPageSize(newSize);
      onPageSizeChange?.(newCurrent, newSize);
    },
    [onPageSizeChange]
  );

  // 默认总数显示函数
  const defaultShowTotal = useCallback(
    (total: number, range: [number, number]) => (
      <span>
        共 {total} 条数据，显示第 {range[0]}-{range[1]} 条
      </span>
    ),
    []
  );

  // 计算当前页数据范围
  const getRange = useCallback((): [number, number] => {
    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, data.length);
    return [start, end];
  }, [current, pageSize, data.length]);

  // 渲染分页器
  const renderPagination = () => {
    // 滚动分页模式下不显示传统分页器
    if (enableScrollPaging) {
      return null;
    }

    if (!showPagination || data.length <= pageSize) {
      return null;
    }

    return (
      <AriPagination
        current={current}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePaginationChange}
        onShowSizeChange={handlePageSizeChange}
        showSizeChanger={showSizeChanger}
        pageSizeOptions={pageSizeOptions}
        showQuickJumper={showQuickJumper}
        showTotal={showTotal || defaultShowTotal}
      />
    );
  };

  // 渲染滚动分页的加载状态
  const renderScrollLoader = () => {
    if (!enableScrollPaging || !showScrollTip) {
      return null;
    }

    // 检查是否还有本地数据可以显示
    const hasLocalData = scrollDisplayCount < data.length;

    if (loading) {
      return (
        <div className={cs.e("scroll-loader")}>
          <div className={cs.e("loading-content")}>{loadingText}</div>
        </div>
      );
    }

    // 如果还有本地数据，不显示“没有更多”
    if (hasLocalData) {
      return null;
    }

    // 本地数据已显示完且没有更多数据
    if (!hasMore) {
      return (
        <div className={cs.e("scroll-loader")}>
          <div className={cs.e("no-more-content")}>{noMoreText}</div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={cs.gen(cs.b(), cs.m(size), className)}>
      {title && <div className={cs.e("title")}>{title}</div>}

      {/* 顶部分页器 */}
      {shouldShowPagination() && (paginationPosition === "top" || paginationPosition === "both") && (
        <div
          ref={topPaginationRef}
          className={cs.gen(
            cs.e('pagination-wrapper'),
            cs.em("pagination-wrapper", "top")
          )}
        >
          {renderPagination()}
        </div>
      )}

      <div
        ref={containerRef}
        className={cs.gen(
          cs.e("container"),
          cs.is("bordered", bordered),
          cs.is("striped", striped),
          cs.em("container", size),
          tableState.hasHorizontalScroll &&
            (columnInfo.leftFixedColumns.length > 0 ||
              columnInfo.rightFixedColumns.length > 0)
            ? cs.em("container", "has-fixed-columns")
            : undefined,
          tableState.isSticky ? cs.is("sticky-active", true) : undefined,
          stickyHeader ? cs.is("sticky-enabled", true) : undefined
        )}
      >
        <div
          ref={tableBodyRef}
          className={cs.e("scroll-container")}
          style={{
            maxHeight: tableState.containerHeight
              ? `${tableState.containerHeight}px`
              : "none",
            overflow: "auto",
          }}
        >
          <table
            ref={tableContentRef}
            className={cs.e("content")}
            style={{ tableLayout: "fixed" }}
          >
            <thead
              className={cs.gen(
                cs.e("header"),
                tableState.isSticky ? cs.is("sticky", true) : ""
              )}
            >
              <tr className={cs.e("header-row")}>
                {columnInfo.allColumns.map((column, index) => (
                  <th
                    key={index}
                    className={getHeaderClassName(index)}
                    style={{
                      ...columnStyles[index],
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={column.title}
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody ref={tbodyRef} className={cs.e("body")}>
              {currentPageData.map(({ row, index: rowIndex }) => {
                // 在滚动分页模式下，使用原始索引
                const originalIndex = enableScrollPaging
                  ? rowIndex
                  : (current - 1) * pageSize + rowIndex;
                return (
                  <TableRow<T, K>
                    key={enableScrollPaging ? rowIndex : rowIndex}
                    row={row}
                    rowIndex={rowIndex}
                    columns={columnInfo.allColumns}
                    staticCellClasses={staticCellClasses}
                    hasHorizontalScroll={tableState.hasHorizontalScroll}
                    isHovered={hoveredRow === rowIndex}
                    isSelected={selectedRows.has(originalIndex)}
                    striped={striped}
                    selectable={selectable}
                    cs={cs}
                    emptyPlaceholder={emptyPlaceholder}
                    onRowClick={handleRowClick}
                    onRowMouseEnter={handleRowMouseEnter}
                    onRowMouseLeave={handleRowMouseLeave}
                    onRow={onRow}
                    renderCellContent={renderCellContent}
                    columnStyles={columnStyles}
                  />
                );
              })}
            </tbody>
          </table>

          {/* 滚动分页加载状态 */}
          {renderScrollLoader()}
        </div>
      </div>

      {/* 底部分页器 */}
      {shouldShowPagination() && (paginationPosition === "bottom" || paginationPosition === "both") && (
        <div
          ref={bottomPaginationRef}
          className={cs.gen(
            cs.e('pagination-wrapper'),
            cs.em("pagination-wrapper", "bottom")
          )}
        >
          {renderPagination()}
        </div>
      )}
    </div>
  );
};
