import { useEffect, useState, useRef } from 'react';
import { useCss } from '@ari/utils';
import { AriIconProps } from '@ari/types/components';

// 创建一个全局缓存对象，用于存储已加载的SVG
const svgCache: Record<string, string> = {};

// 创建一个全局的加载状态管理器，用于跟踪正在进行的请求
const loadingPromises: Record<string, Promise<string>> = {};

/**
 * 图标组件
 * 支持加载内置图标和外部SVG图标，提供大小和颜色的自定义能力
 * 
 * Example:
 * {@link https://aries-react.dev/docs/icon}
 */
export const AriIcon: React.FC<AriIconProps> = ({
    name,
    size = 'default',
    fullPath,
    className,
    strokeWidth,
    styleVariant,
    animation,
    state,
    ...props
}) => {
    const [svgContent, setSvgContent] = useState<string>('');
    const cs = useCss('icon');

    // 生成缓存键
    const cacheKey = useRef(fullPath || (name ? `icon-${name}-${strokeWidth || 1}` : ''));

    // 加载SVG图标内容
    useEffect(() => {
        const loadSvg = async () => {
            try {
                const key = cacheKey.current;

                // 优先检查缓存
                if (key && svgCache[key]) {
                    setSvgContent(svgCache[key]);
                    return;
                }

                // 检查是否已经有正在进行的请求
                if (key && key in loadingPromises) {
                    const content = await loadingPromises[key];
                    setSvgContent(content);
                    return;
                }

                if (fullPath || name) {
                    // 创建新的加载 Promise
                    const loadPromise = (async () => {
                        const fetchUrl = fullPath || `/assets/icons/${name}.svg`;
                        const url = new URL(fetchUrl, import.meta.url).href;

                        const response = await fetch(url, {
                            headers: {
                                'Accept': 'image/svg+xml' // 显式指定接受SVG
                            }
                        });

                        if (!response.ok) throw new Error(`Failed to load SVG: ${response.statusText}`);

                        const svg = await response.text();
                        // 移除所有fill属性，添加currentColor和stroke-width
                        let processedSvg = svg;

                        if (name) {
                            processedSvg = processedSvg
                                .replace(/fill="[^"]*"/g, '')
                                .replace(/stroke="[^"]*"/g, '')  // 移除原有的stroke
                                .replace(/<svg/, `<svg stroke="currentColor" stroke-width="${strokeWidth ?? 1}"`);
                        }

                        // 存入缓存
                        if (key) {
                            svgCache[key] = processedSvg;
                        }

                        return processedSvg;
                    })();

                    // 将 Promise 存入加载管理器
                    if (key) {
                        loadingPromises[key] = loadPromise;
                    }

                    try {
                        const content = await loadPromise;
                        setSvgContent(content);
                    } finally {
                        // 清理加载管理器中的 Promise
                        if (key) {
                            delete loadingPromises[key];
                        }
                    }
                }
            } catch (error) {
                console.error('Error loading SVG:', error);
                // 清理失败的加载 Promise
                if (cacheKey.current) {
                    delete loadingPromises[cacheKey.current];
                }
            }
        };

        // 更新缓存键，因为属性可能已经改变
        cacheKey.current = fullPath || (name ? `icon-${name}-${strokeWidth || 1}` : '');

        if (fullPath || name) {
            loadSvg();
        }
    }, [fullPath, name, strokeWidth]);

    return (
        <span
            className={cs.gen(
                cs.b(),
                size !== 'default' ? cs.m(size) : undefined, // 只在非默认尺寸时添加修饰符
                styleVariant ? cs.m(styleVariant) : undefined, // 样式变体
                animation ? cs.m(animation) : undefined, // 动画效果
                state ? cs.is(state) : undefined, // 状态类
                className
            )}
            style={{ color: props.color ?? 'currentColor' }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            {...props}
        />
    );
};