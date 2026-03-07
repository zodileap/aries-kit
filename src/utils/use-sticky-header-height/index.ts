import { StickyHeaderHeightOptions } from "@ari/types";
import { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";

/**
 * 自定义 Hook：动态计算粘性头部高度
 * @param dependencies - 影响头部高度的依赖项
 * @param options - 配置选项
 * @returns [ref, height, isCalculating] - 头部元素的 ref、计算出的总高度和计算状态
 */
export const useStickyHeaderHeight = <T extends HTMLElement = HTMLDivElement>(
  dependencies: React.DependencyList = [],
  options: StickyHeaderHeightOptions = {}
) => {
  const {
    defaultHeight = 100,
    includeMargin = true,
    debounce = 0,
    synchronous = true,
  } = options;

  const headerRef = useRef<T>(null);
  const [headerHeight, setHeaderHeight] = useState(defaultHeight);
  const [isCalculating, setIsCalculating] = useState(false);

  // 用于防抖的引用
  const timeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();

  // 缓存上一次的高度值
  const prevHeightRef = useRef(headerHeight);

  // 计算高度的核心函数
  const calculateHeight = useCallback(() => {
    const element = headerRef.current;
    if (!element) return;

    try {
      const computedStyle = window.getComputedStyle(element);

      // 使用 getBoundingClientRect 获取更精确的高度
      const rect = element.getBoundingClientRect();
      let totalHeight = rect.height;

      // 根据需求调整计算逻辑
      const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
      totalHeight -= paddingTop;

      if (includeMargin) {
        const marginBottom = parseFloat(computedStyle.marginBottom) || 0;
        totalHeight += marginBottom;
      }

      // 确保高度值合理
      totalHeight = Math.max(0, Math.round(totalHeight));

      // 只在值真正改变时更新（避免微小的浮点数差异）
      if (Math.abs(totalHeight - prevHeightRef.current) >= 1) {
        prevHeightRef.current = totalHeight;
        setHeaderHeight(totalHeight);
      }
    } catch (error) {
      console.error("计算头部高度时出错:", error);
    } finally {
      setIsCalculating(false);
    }
  }, [includeMargin]);

  // 带防抖和 RAF 的更新函数
  const updateHeight = useCallback(() => {
    setIsCalculating(true);

    // 清理之前的定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const performUpdate = () => {
      rafRef.current = requestAnimationFrame(() => {
        calculateHeight();
      });
    };

    if (debounce > 0) {
      timeoutRef.current = setTimeout(performUpdate, debounce);
    } else {
      performUpdate();
    }
  }, [calculateHeight, debounce]);

  // 选择使用 useEffect 或 useLayoutEffect
  const useIsomorphicLayoutEffect = synchronous ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // 立即计算初始高度
    calculateHeight();

    const element = headerRef.current;
    if (!element) return;

    // 创建观察器
    const observers: Array<ResizeObserver | MutationObserver> = [];

    // ResizeObserver - 监听尺寸变化
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === element) {
            updateHeight();
            break;
          }
        }
      });
      resizeObserver.observe(element);
      observers.push(resizeObserver);
    }

    // MutationObserver - 监听 DOM 结构变化
    if (typeof MutationObserver !== "undefined") {
      const mutationObserver = new MutationObserver((mutations) => {
        // 检查是否有实质性变化
        const hasRelevantChange = mutations.some(
          (mutation) =>
            mutation.type === "childList" ||
            (mutation.type === "attributes" &&
              ["class", "style"].includes(mutation.attributeName || ""))
        );

        if (hasRelevantChange) {
          updateHeight();
        }
      });

      mutationObserver.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"],
      });
      observers.push(mutationObserver);
    }

    // 窗口大小变化监听
    const handleResize = updateHeight;
    window.addEventListener("resize", handleResize, { passive: true });

    // 清理函数
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("resize", handleResize);
    };
  }, [...dependencies, updateHeight]);

  return [headerRef, headerHeight, isCalculating] as const;
};
