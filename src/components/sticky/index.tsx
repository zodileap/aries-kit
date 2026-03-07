import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useCss, useProfiler } from '@ari/utils';
import { AriStickyProps } from '@ari/types';

/**
 * 粘性定位容器组件
 * 提供一个可以在滚动时保持粘性定位的容器
 * 
 * Example:
 * {@link https://aries-react.dev/docs/sticky}
 */
export const AriSticky: React.FC<AriStickyProps> = ({
    position = 'top',
    offset = 0,
    enabled = true,
    zIndex = 100,
    scrollContainer,
    onStickyChange,
    className,
    children,
    style: customStyle,
    ...restProps
}) => {
    // 1. 状态初始化和Refs
    const cs = useCss('sticky');
    const { initialized } = useProfiler('AriSticky');
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const thresholdRef = useRef<number | null>(null);

    // 2. 计算滚动阈值的函数
    const calculateThreshold = useCallback(() => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();

        if (scrollContainer?.current) {
            const scrollRect = scrollContainer.current.getBoundingClientRect();
            const scrollStyle = window.getComputedStyle(scrollContainer.current);

            // 计算滚动容器的内边距
            const paddingTop = parseFloat(scrollStyle.paddingTop);

            // 计算元素顶部到滚动容器顶部的距离（减去内边距）
            thresholdRef.current = containerRect.top - scrollRect.top - paddingTop;
        } else {
            // 相对于文档顶部的距离
            thresholdRef.current = containerRect.top + window.scrollY;
        }
    }, [scrollContainer]);

    // 3. 事件处理函数
    const handleScroll = useCallback(() => {
        if (!containerRef.current || thresholdRef.current === null) return;

        let scrollTop = 0;

        // 获取滚动位置
        if (scrollContainer?.current) {
            scrollTop = scrollContainer.current.scrollTop;
        } else {
            scrollTop = window.scrollY;
        }

        // 通过比较滚动位置和阈值来判断粘性状态
        const newIsSticky = scrollTop > thresholdRef.current - offset;

        // 使用函数形式更新状态，避免依赖当前状态
        setIsSticky(prevIsSticky => {
            if (prevIsSticky !== newIsSticky) {
                onStickyChange?.(newIsSticky);
                return newIsSticky;
            }
            return prevIsSticky;
        });
    }, [offset, onStickyChange, scrollContainer]);

    const handleResize = useCallback(() => {
        calculateThreshold();
        handleScroll();
    }, [calculateThreshold, handleScroll]);

    // 4. 副作用处理
    // 初始化计算阈值
    useEffect(() => {
        if (!initialized.current) {
            calculateThreshold();
        }
    }, [calculateThreshold]);

    // 设置滚动监听
    useEffect(() => {
        if (!enabled || !containerRef.current) return;

        // 获取滚动容器
        const scrollEl = scrollContainer?.current || window;

        if (!scrollEl) return;
        // 初始检查
        handleScroll();

        // 添加滚动监听
        scrollEl.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });

        // 清理函数
        return () => {
            scrollEl.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [enabled, handleScroll, handleResize, scrollContainer]);

    // 5. 样式计算
    const style = useMemo((): React.CSSProperties => ({
        ...customStyle,
        position: enabled ? 'sticky' : 'relative',
        [position]: `${offset}px`,
        zIndex: isSticky ? zIndex : undefined,
    }), [customStyle, enabled, isSticky, offset, position, zIndex]);

    // 6. 主要JSX返回
    return (
        <div
            ref={containerRef}
            className={cs.gen(
                cs.b(),
                cs.m(position),
                cs.is('sticky', isSticky),
                cs.is('enabled', enabled),
                className
            )}
            style={style}
            {...restProps}
        >
            {children}
        </div>
    );
};