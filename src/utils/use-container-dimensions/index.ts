import { UseContainerDimensionsOptions, ContainerDimensions } from "@ari/types/hooks/use-container-dimensions";
import { useRef, useState, useCallback, useLayoutEffect } from "react";

/**
 * 自定义 Hook：动态计算容器的尺寸和位置
 * @param options - 配置选项
 * @returns [ref, dimensions] - 容器元素的 ref 和尺寸信息
 */
export const useContainerDimensions = <T extends HTMLElement = HTMLDivElement>(
  options: UseContainerDimensionsOptions = {}
) => {
  const {
    debounce = 0,
    observeScroll = true,
    initialDimensions = {},
  } = options;

  const containerRef = useRef<T>(null);
  const rafIdRef = useRef<number>();
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  // 使用 useLayoutEffect 时的初始值，避免闪烁
  const [dimensions, setDimensions] = useState<ContainerDimensions>({
    width: 0,
    left: 0,
    right: 0,
    paddingLeft: 0,
    paddingRight: 0,
    ...initialDimensions,
  });

  // 缓存上一次的值，避免不必要的更新
  const prevDimensionsRef = useRef<ContainerDimensions>(dimensions);

  const measureDimensions = useCallback(() => {
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);

    // 计算各项数值
    const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
    const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
    const rightWidth = window.innerWidth - rect.right;

    const newDimensions: ContainerDimensions = {
      width: rect.width,
      left: rect.left,
      right: rightWidth,
      paddingLeft,
      paddingRight,
    };

    // 只在值真正改变时才更新（避免浮点数精度问题）
    const hasChanged = Object.keys(newDimensions).some(
      (key) =>
        Math.abs(
          newDimensions[key as keyof ContainerDimensions] -
            prevDimensionsRef.current[key as keyof ContainerDimensions]
        ) > 0.1
    );

    if (hasChanged) {
      prevDimensionsRef.current = newDimensions;
      setDimensions(newDimensions);
    }
  }, []);

  // 带防抖的更新函数
  const updateDimensions = useCallback(() => {
    // 取消之前的更新
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // 使用 requestAnimationFrame 优化性能
    const update = () => {
      rafIdRef.current = requestAnimationFrame(() => {
        measureDimensions();
      });
    };

    if (debounce > 0) {
      timeoutIdRef.current = setTimeout(update, debounce);
    } else {
      update();
    }
  }, [measureDimensions, debounce]);

  // 使用 useLayoutEffect 避免首次渲染闪烁
  useLayoutEffect(() => {
    // 立即测量
    measureDimensions();

    // 设置事件监听器
    const handleResize = updateDimensions;
    const handleScroll = observeScroll ? updateDimensions : undefined;

    window.addEventListener("resize", handleResize, { passive: true });
    if (handleScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // ResizeObserver
    let resizeObserver: ResizeObserver | null = null;
    const element = containerRef.current;

    if (element && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        // 只处理我们关心的元素
        for (const entry of entries) {
          if (entry.target === element) {
            updateDimensions();
            break;
          }
        }
      });
      resizeObserver.observe(element);
    }

    // 清理函数
    return () => {
      // 取消所有待处理的更新
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      window.removeEventListener("resize", handleResize);
      if (handleScroll) {
        window.removeEventListener("scroll", handleScroll);
      }
      resizeObserver?.disconnect();
    };
  }, [measureDimensions, updateDimensions, observeScroll]);

  return [containerRef, dimensions] as const;
};
