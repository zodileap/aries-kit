/**
 * 优化的文本宽度测量函数
 */
const createTextWidthMeasurer = () => {
  const cache = new Map<string, number>();
  const MAX_CACHE_SIZE = 1000; // 限制缓存大小

  return (
    text: string,
    fontSize: string = "14px",
    fontFamily: string = "system-ui, -apple-system, sans-serif"
  ): number => {
    const cacheKey = `${text}-${fontSize}-${fontFamily}`;

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!;
    }

    // 如果缓存太大，清理最旧的一半
    if (cache.size >= MAX_CACHE_SIZE) {
      const entries = Array.from(cache.entries());
      const halfSize = Math.floor(MAX_CACHE_SIZE / 2);
      entries.slice(0, halfSize).forEach(([key]) => cache.delete(key));
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return 120;

    context.font = `${fontSize} ${fontFamily}`;
    const metrics = context.measureText(text);
    const width = Math.ceil(metrics.width) + 40;

    cache.set(cacheKey, width);
    return width;
  };
};

export const measureTextWidth = createTextWidthMeasurer();
