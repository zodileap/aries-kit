import { useState, useEffect, useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriTypography, AriIcon, AriInput, AriSelect } from '@ari/components';
import { AriPaginationProps } from '@ari/types/components/pagination';

/**
 * 分页组件
 * 
 * 用于展示分页信息，支持自定义每页条数、快速跳转等功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/pagination}
 */
export const AriPagination: React.FC<AriPaginationProps> = ({
    current: propCurrent,
    defaultCurrent = 1,
    pageSize: propPageSize,
    defaultPageSize = 10,
    total,
    onChange,
    simple = false,
    disabled = false,
    showQuickJumper = false,
    showSizeChanger = false,
    pageSizeOptions = [10, 20, 50, 100],
    onShowSizeChange,
    showTotal,
    className,
    style
}) => {
    const [localCurrent, setLocalCurrent] = useState(defaultCurrent);
    const [localPageSize, setLocalPageSize] = useState(defaultPageSize);
    const [jumpValue, setJumpValue] = useState('');

    const current = propCurrent !== undefined ? propCurrent : localCurrent;
    const pageSize = propPageSize !== undefined ? propPageSize : localPageSize;

    const cs = useCss('pagination');

    // 计算总页数
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    // 确保当前页在有效范围内
    useEffect(() => {
        if (current > totalPages) {
            setLocalCurrent(totalPages);
            onChange?.(totalPages, pageSize);
        }
    }, [totalPages, current, pageSize, onChange]);

    // 处理页码变化
    const handlePageChange = (page: number) => {
        if (disabled || page === current || page < 1 || page > totalPages) {
            return;
        }

        setLocalCurrent(page);
        onChange?.(page, pageSize);
    };

    // 处理每页条数变化
    const handlePageSizeChange = (size: string | number | (string | number)[] | undefined) => {
        if (size !== undefined && !Array.isArray(size)) {
            const newPageSize = Number(size);
            setLocalPageSize(newPageSize);

            // 计算新页码，保持显示的数据范围尽量不变
            const newCurrent = Math.max(1, Math.min(Math.ceil((current * pageSize) / newPageSize), Math.ceil(total / newPageSize)));
            setLocalCurrent(newCurrent);

            onShowSizeChange?.(newCurrent, newPageSize);
            onChange?.(newCurrent, newPageSize);
        }
    };

    // 处理跳转
    const handleJump = () => {
        const value = parseInt(jumpValue, 10);
        if (!isNaN(value) && value >= 1 && value <= totalPages) {
            handlePageChange(value);
        }
        setJumpValue('');
    };

    // 生成页码列表
    const getPageNumbers = useMemo(() => {
        if (simple) {
            return [];
        }

        const pageNumbers: (number | 'ellipsis')[] = [];
        const visiblePageCount = 5; // 可见页码按钮数量

        if (totalPages <= visiblePageCount + 2) {
            // 总页数少，全部显示
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // 总是显示第一页和最后一页
            pageNumbers.push(1);

            // 计算中间显示的页码
            const startPage = Math.max(2, current - Math.floor(visiblePageCount / 2));
            const endPage = Math.min(totalPages - 1, startPage + visiblePageCount - 1);

            // 添加左侧省略号
            if (startPage > 2) {
                pageNumbers.push('ellipsis');
            }

            // 添加中间页码
            for (let i = Math.max(2, startPage); i <= Math.min(totalPages - 1, endPage); i++) {
                pageNumbers.push(i);
            }

            // 添加右侧省略号
            if (endPage < totalPages - 1) {
                pageNumbers.push('ellipsis');
            }

            // 只有当总页数大于1时才添加最后一页
            if (totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        // 去重保护，确保不会有重复的页码
        const uniquePageNumbers: (number | 'ellipsis')[] = [];
        const seen = new Set<number>();
        
        pageNumbers.forEach((page, index) => {
            if (page === 'ellipsis') {
                // 避免连续的省略号
                const lastItem = uniquePageNumbers[uniquePageNumbers.length - 1];
                if (lastItem !== 'ellipsis') {
                    uniquePageNumbers.push(page);
                }
            } else if (!seen.has(page)) {
                seen.add(page);
                uniquePageNumbers.push(page);
            }
        });

        return uniquePageNumbers;
    }, [current, totalPages, simple]);

    // 计算当前显示的数据范围
    const getRange = (): [number, number] => {
        const start = (current - 1) * pageSize + 1;
        const end = Math.min(current * pageSize, total);
        return [start, end];
    };

    return (
        <div className={cs.gen(cs.b(), cs.is('disabled', disabled), cs.is('simple', simple), className)} style={style}>
            {showTotal && (
                <div className={cs.e('total')}>
                    {showTotal(total, getRange())}
                </div>
            )}

            <ul className={cs.e('list')}>
                {/* 上一页按钮 */}
                <li
                    className={cs.gen(cs.e('item'), cs.is('disabled', current === 1 || disabled))}
                    onClick={() => handlePageChange(current - 1)}
                >
                    <AriIcon name="chevron_left" />
                </li>

                {simple ? (
                    <li className={cs.e('jumper')}>
                        <AriInput.Number
                            value={current}
                            disabled={disabled}
                            onChange={(value) => handlePageChange(Number(value))}
                            onBlur={handleJump}
                            min={1}
                            max={totalPages}
                            className={cs.e('label')} 
                        />
                        <AriTypography variant='body' className={cs.e('label')} value="/" />
                        <AriTypography variant='body' className={cs.e('label')} value={String(totalPages)} />
                    </li>
                ) : (
                    getPageNumbers.map((page, index) =>
                        page === 'ellipsis' ? (
                            <li key={`ellipsis-${index}`} className={cs.e('ellipsis')}>
                                <AriIcon name="more_horiz" />
                            </li>
                        ) : (
                            <li
                                key={`page-${page}`}
                                className={cs.gen(cs.e('item'), cs.is('active', page === current))}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </li>
                        )
                    )
                )}

                {/* 下一页按钮 */}
                <li
                    className={cs.gen(cs.e('item'), cs.is('disabled', current === totalPages || disabled))}
                    onClick={() => handlePageChange(current + 1)}
                >
                    <AriIcon name="chevron_right" />
                </li>
            </ul>

            {showSizeChanger && (
                <div className={cs.e('options')}>
                    <AriTypography variant='body' className={cs.gen(cs.e('label'), cs.em('label', "page"))} value="每页" />
                    <AriSelect
                        value={pageSize}
                        disabled={disabled}
                        onChange={handlePageSizeChange}
                        options={pageSizeOptions.map(size => ({
                            label: `${size} 条/页`,
                            value: size
                        }))}
                    />
                </div>
            )}

            {showQuickJumper && (
                <div className={cs.e('jumper')}>
                    <AriTypography variant='body' className={cs.gen(cs.e('label'), cs.em('label', "page")) } value="每页" />
                    <AriInput
                        value={jumpValue}
                        onChange={setJumpValue}
                        disabled={disabled}
                        onBlur={handleJump}
                        type="number"
                        minLength={1}
                        maxLength={totalPages}
                    />
                    <AriTypography variant='body' className={cs.e('label')} value="页" />
                </div>
            )}
        </div>
    );
};

export default AriPagination;
