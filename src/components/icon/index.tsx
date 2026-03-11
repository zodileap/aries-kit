import { useEffect, useState, useRef, useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriIconProps } from '@ari/types/components';

// 创建一个全局缓存对象，用于存储已加载的SVG
const svgCache: Record<string, string> = {};

// 创建一个全局的加载状态管理器，用于跟踪正在进行的请求
const loadingPromises: Record<string, Promise<string>> = {};

const ICON_NAME_ALIASES: Record<string, string> = {
    image_broken: 'broken_image',
    external_link: 'open_in_new',
    info_circle: 'info',
    warning_circle: 'warning',
    close_circle: 'cancel',
    exclamation_circle: 'warning',
    heart: 'favorite',
    clock: 'schedule',
    unorderedlist: 'format_list_bulleted',
    file: 'description',
    calendar: 'calendar_month',
    user: 'person',
    setting: 'settings',
    file_text: 'description',
    file_html: 'html',
    file_code: 'code',
    file_css: 'css',
    file_markdown: 'markdown',
    caret_down: 'arrow_drop_down',
    smile: 'sentiment_satisfied',
    sticky_note_2: 'description'
};

const normalizeIconName = (iconName?: string) => {
    return iconName?.trim().replace(/-/g, '_').toLowerCase();
};

const resolveIconCandidates = (iconName?: string) => {
    const normalizedName = normalizeIconName(iconName);

    if (!normalizedName) {
        return [];
    }

    const aliasedName = ICON_NAME_ALIASES[normalizedName];
    return Array.from(new Set([aliasedName, normalizedName].filter(Boolean))) as string[];
};

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
    const iconCandidates = useMemo(() => resolveIconCandidates(name), [name]);
    const resolvedName = iconCandidates[0];

    // 生成缓存键
    const cacheKey = useRef(fullPath || (resolvedName ? `icon-${resolvedName}-${strokeWidth || 1}` : ''));

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

                if (fullPath || resolvedName) {
                    // 创建新的加载 Promise
                    const loadPromise = (async () => {
                        let svg = '';
                        let lastError: Error | undefined;

                        for (const candidate of fullPath ? [fullPath] : iconCandidates) {
                            const fetchUrl = fullPath || `/assets/icons/${candidate}.svg`;
                            const url = new URL(fetchUrl, import.meta.url).href;

                            try {
                                const response = await fetch(url, {
                                    headers: {
                                        'Accept': 'image/svg+xml'
                                    }
                                });

                                if (!response.ok) {
                                    throw new Error(`Failed to load SVG: ${response.status} ${response.statusText}`);
                                }

                                svg = await response.text();
                                break;
                            } catch (error) {
                                lastError = error instanceof Error ? error : new Error(String(error));
                            }
                        }

                        if (!svg) {
                            throw lastError ?? new Error('Failed to load SVG');
                        }

                        // 移除所有fill属性，添加currentColor和stroke-width
                        let processedSvg = svg;

                        if (resolvedName) {
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
        cacheKey.current = fullPath || (resolvedName ? `icon-${resolvedName}-${strokeWidth || 1}` : '');

        if (fullPath || resolvedName) {
            loadSvg();
        } else {
            setSvgContent('');
        }
    }, [fullPath, iconCandidates, resolvedName, strokeWidth]);

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
