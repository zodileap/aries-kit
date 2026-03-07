import React, { memo, useMemo, useCallback } from "react";
import { TableRowProps } from "@ari/types";

const TableRowComponent = <T extends Record<string, unknown>, K extends string = string>({
    row,
    rowIndex,
    columns,
    staticCellClasses,
    hasHorizontalScroll,
    isHovered,
    isSelected,
    striped,
    selectable,
    cs,
    emptyPlaceholder,
    onRowClick,
    onRowMouseEnter,
    onRowMouseLeave,
    onRow,
    renderCellContent,
    columnStyles
}: TableRowProps<T, K>) => {
    // **性能优化：预计算行的className，减少每次渲染的计算**
    const rowClassName = useMemo(() => {
        const isEvenRow = rowIndex % 2 === 1;
        return cs.gen(
            cs.e('row'),
            isSelected ? cs.is('selected', true) : undefined,
            isHovered ? cs.is('hovered', true) : undefined,
            selectable ? cs.is('selectable', true) : undefined,
            (isEvenRow && striped) ? cs.is('even', true) : undefined
        );
    }, [cs, isSelected, isHovered, selectable, striped, rowIndex]);

    // **性能优化：预计算所有单元格的className**
    const cellClassNames = useMemo(() => {
        return columns.map((_, colIndex) => {
            const staticClass = staticCellClasses[colIndex];
            if (!staticClass) return '';

            const isEvenRow = rowIndex % 2 === 1;

            return cs.gen(
                staticClass.base,
                hasHorizontalScroll ? staticClass.leftFixed : undefined,
                hasHorizontalScroll ? staticClass.rightFixed : undefined,
                hasHorizontalScroll ? staticClass.lastLeftFixed : undefined,
                hasHorizontalScroll ? staticClass.firstRightFixed : undefined,
                isHovered ? cs.is('hovered', true) : undefined,
                isSelected ? cs.is('selected', true) : undefined,
                (isEvenRow && striped) ? cs.is('even', true) : undefined
            );
        });
    }, [staticCellClasses, hasHorizontalScroll, isHovered, isSelected, striped, rowIndex, cs, columns]);

    const customRowProps = onRow ? onRow(row, rowIndex) : {};

    const handleClick = useCallback((e: React.MouseEvent<HTMLTableRowElement>) => {
        onRowClick(rowIndex);
        customRowProps.onClick?.(e);
    }, [onRowClick, rowIndex, customRowProps.onClick]);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLTableRowElement>) => {
        onRowMouseEnter(rowIndex);
        customRowProps.onMouseEnter?.(e);
    }, [onRowMouseEnter, rowIndex, customRowProps.onMouseEnter]);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLTableRowElement>) => {
        onRowMouseLeave();
        customRowProps.onMouseLeave?.(e);
    }, [onRowMouseLeave, customRowProps.onMouseLeave]);

    return (
        <tr
            className={cs.gen(rowClassName, customRowProps.className)}
            {...customRowProps}
            style={{ ...customRowProps.style }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {columns.map((column, colIndex) => (
                <td
                    key={colIndex}
                    className={cellClassNames[colIndex]}
                    style={{
                        ...columnStyles[colIndex],
                        boxSizing: 'border-box',
                        ...(columns[colIndex] && (columns[colIndex].ellipsis || columns[colIndex].maxWidth) && {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            wordBreak: 'normal',
                            ...(columns[colIndex].maxWidth && {
                                maxWidth: columns[colIndex].maxWidth,
                                width: columns[colIndex].maxWidth
                            })
                        })
                    }}
                    onClick={(e) => {
                        column.onClick?.(row, rowIndex);
                        e.stopPropagation();
                    }}
                >
                    {renderCellContent(column, row, rowIndex)}
                </td>
            ))}
        </tr>
    );
};

// 使用 memo 包装组件，并提供正确的泛型类型
export const TableRow = memo(TableRowComponent, <T extends Record<string, unknown>, K extends string = string>(
    prevProps: TableRowProps<T, K>,
    nextProps: TableRowProps<T, K>
) => {
    // **自定义比较函数：只有影响渲染的属性改变时才重新渲染**
    return (
        prevProps.row === nextProps.row &&
        prevProps.isHovered === nextProps.isHovered &&
        prevProps.isSelected === nextProps.isSelected &&
        prevProps.hasHorizontalScroll === nextProps.hasHorizontalScroll &&
        prevProps.columns === nextProps.columns &&
        prevProps.staticCellClasses === nextProps.staticCellClasses &&
        prevProps.columnStyles === nextProps.columnStyles
    );
}) as <T extends Record<string, unknown>, K extends string = string>(
    props: TableRowProps<T, K>
) => JSX.Element;
