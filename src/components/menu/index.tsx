// @ari/components/menu/Menu.tsx

import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useCollapseHeight, useCss, useCollapseIndexMap, getCssVarName } from '@ari/utils';
import { AriIcon } from '../icon';
import { AriTypography } from '../typography';
import { AriMenuItemProps, AriMenuProps } from '@ari/types/components';

/**
 * 菜单项组件
 * 
 * 用于渲染菜单项的内容和子菜单
 * 
 * Emxample:
 * {@link https://aries-react.dev/docs/menu} 
 */
const AriMenuItem: React.FC<{
    item: AriMenuItemProps;
    selectedKey: string;
    expandedKeys: string[];
    mode: 'vertical' | 'horizontal';
    onExpand: (key: string, expanded: boolean) => void;
    onSelect: (key: string, item: AriMenuItemProps) => void;
    level?: number;
    style?: React.CSSProperties;
    onHeightChange?: (key: string, height: number) => void;
    indexMap?: Record<string, number>; // 添加全局索引映射
    isRoot?: boolean;
    onNodeNumChange?: (nodeNum: number, layoutDuration: number) => void,
    parsetChildrenNodeNum?: number;
    parentExpanded?: boolean;
    expandIconPosition: 'right' | 'left' | 'none';
}> = ({
    item,
    selectedKey,
    expandedKeys,
    onExpand,
    onSelect,
    level = 0,
    mode,
    style,
    onHeightChange,
    indexMap,
    isRoot = false,
    onNodeNumChange,
    parsetChildrenNodeNum = 0,
    parentExpanded = false,
    expandIconPosition
}) => {
        const cs = useCss('menu-item');
        const [isOpen, setIsOpen] = useState(false);
        const [animationReady, setAnimationReady] = useState(false);
        const contentRef = useRef<HTMLDivElement>(null);
        const children = item.children ?? [];
        const hasChildren = !!item.children?.length;

        const handleClick = useCallback(() => {
            if (item.disabled || item.isGroup) return;

            if (hasChildren) {
                // 不依赖 isOpen.current，而是直接检查当前项是否在 expandedKeys 中
                const currentlyExpanded = expandedKeys.includes(item.key);
                onExpand(item.key, !currentlyExpanded);
            } else {
                onSelect(item.key, item);
                item.onClick?.();
            }
        }, [item, hasChildren, onExpand, onSelect, expandedKeys]);


        // 在组件加载后延迟设置真实展开状态
        useEffect(() => {
            let timer: string | number | NodeJS.Timeout | undefined;

            if (expandedKeys.includes(item.key)) {
                // 设置一个较小的延迟，让组件先渲染为收起状态
                timer = setTimeout(() => {
                    setIsOpen(true);
                    setAnimationReady(true); // 触发重渲染
                }, 50); // 50ms延迟足够浏览器渲染初始状态
            } else {
                // 对于非默认展开的项，直接响应expandedKeys变化
                setIsOpen(expandedKeys.includes(item.key))
                setAnimationReady(true);
            }

            return () => clearTimeout(timer);
        }, []);

        // 后续expandedKeys变化的处理
        useEffect(() => {
            if (animationReady) {
                setIsOpen(hasChildren && expandedKeys.includes(item.key));
            }
        }, [expandedKeys, animationReady, hasChildren, item.key]);

        useEffect(() => {
            if (!hasChildren) {
                setIsOpen(false);
                if (expandedKeys.includes(item.key)) {
                    onExpand(item.key, false);
                }
            }
        }, [expandedKeys, hasChildren, item.key, onExpand]);

        // 使用自定义Hook计算全局索引
        const { globalIndex, globalIndexMap, childrenNodeNum, layoutDuration, reset, resetChildrenNode, setChildrenNodeNum } = useCollapseIndexMap(item, expandedKeys, isRoot, onNodeNumChange, indexMap);

        // 使用自定义hook计算高度
        const { containerRef, containerHeight, handleChildHeightChange } = useCollapseHeight({
            isExpanded: isOpen,
            childrenCount: item.children?.length || 0,
            nodeKey: item.key,
            onHeightChange,
            contentHeight: contentRef,
            globalIndex,
            animationStaggerDelay: 50,
            gapSize: 4
        });

        return (
            <div
                className={cs.gen(
                    cs.b(),
                    cs.is('group', item.isGroup),
                    cs.is('selected', !item.isGroup && item.key === selectedKey),
                    cs.is('disabled', item.disabled),
                    cs.is('has-children', hasChildren && !item.isGroup),
                    cs.is('open', isOpen),
                    cs.is('parent-expanded', parentExpanded)
                )}
                style={{
                    ...style,
                    // 使用全局索引而不是局部索引
                    ["--z-collapse-index" as string]: globalIndex,
                }}
                data-z-collapse-node
            >
                <div
                    ref={contentRef}
                    className={cs.gen(
                        cs.e('content'),
                        item.textPosition ? `text-${item.textPosition}` : '',
                        cs.is('has-meta', !!item.meta),
                        cs.is('has-actions', !!item.actions),
                        cs.is('hover-actions', !!item.showActionsOnHover),
                        cs.is('arrow-left', expandIconPosition === 'left'),
                    )}
                    onClick={handleClick}
                    onContextMenu={item.onContextMenu}
                    style={{ paddingLeft: `calc(${getCssVarName('inset','sm')} + ${level * 1.5}rem)` }}
                >
                    {item.icon && !item.isGroup && (
                        <AriIcon
                            name={
                                (item.key === selectedKey)
                                    ? (item.fillIcon ? item.fillIcon : item.icon + "_fill")
                                    : item.icon
                            }
                            strokeWidth={item.key === selectedKey ? 3 : 1}
                            animation={item.iconAnimation}
                            state={item.iconState}
                            className={cs.e('icon')}
                        />
                    )}
                    <div className={cs.e('main')}>
                        {item.label && (
                            item.isGroup ? (
                                <AriTypography variant='caption' className={cs.e('label')} noWrap>{item.label}</AriTypography>
                            ) : (
                                (typeof item.label === 'string'
                                    ? <AriTypography variant='body' className={cs.e('label')} noWrap>{item.label}</AriTypography>
                                    : <div className={cs.e('label')}>{item.label}</div>)
                            )
                        )}
                    </div>
                    {item.meta ? <div className={cs.e('meta')}>{item.meta}</div> : null}
                    {item.actions ? (
                        <div
                            className={cs.e('actions')}
                            onClick={(event) => event.stopPropagation()}
                            onMouseDown={(event) => event.stopPropagation()}
                            onContextMenu={(event) => event.stopPropagation()}
                        >
                            {item.actions}
                        </div>
                    ) : null}
                    {hasChildren && !item.isGroup && expandIconPosition !== 'none' && (
                        <AriIcon
                            name="chevron_right"
                            className={cs.e('arrow')}
                        />
                    )}
                </div>

                {hasChildren && mode === "vertical" && (
                    <div
                        ref={containerRef}
                        className={cs.e('children')}
                        style={{
                            ["--z-collapse-num" as string]: childrenNodeNum,
                            ["--z-collapse-layout-duration" as string]: `${layoutDuration}ms`,
                            ["--z-collapse-height" as string]: `${containerHeight}px`
                        }}
                    >
                        {children.map((child, index) => (
                            <AriMenuItem
                                mode='vertical'
                                key={child.key}
                                item={child}
                                selectedKey={selectedKey}
                                expandedKeys={expandedKeys}
                                onExpand={onExpand}
                                onSelect={onSelect}
                                level={level + 1}
                                style={{ ["--z-collapse-index" as string]: index }}
                                onHeightChange={handleChildHeightChange}
                                indexMap={globalIndexMap}
                                onNodeNumChange={resetChildrenNode}
                                parsetChildrenNodeNum={childrenNodeNum}
                                parentExpanded={isOpen && parentExpanded}
                                expandIconPosition={expandIconPosition}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };

/**
 * 菜单组件
 * 
 * 用于渲染菜单项的列表，支持垂直和水平两种展示方式
 * 
 * Emxample:
 * {@link https://aries-react.dev/docs/menu} 
 */
export const AriMenu: React.FC<AriMenuProps> = ({
    items,
    defaultSelectedKey,
    selectedKey,
    defaultExpandedKeys = [],
    expandedKeys,
    onSelect,
    onExpand,
    className,
    mode = 'vertical',
    expandIconPosition = 'right',
    ...props
}) => {
    const [internalSelectedKey, setInternalSelectedKey] = useState(defaultSelectedKey);
    const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(defaultExpandedKeys);
    const cs = useCss('menu');
    const getAllKeys = useCallback((menuItems: AriMenuItemProps[]): Set<string> => {
        const keys = new Set<string>();

        const visit = (nodes: AriMenuItemProps[]) => {
            nodes.forEach(node => {
                keys.add(node.key);
                if (node.children?.length) {
                    visit(node.children);
                }
            });
        };

        visit(menuItems);
        return keys;
    }, []);

    const getExpandableKeys = useCallback((menuItems: AriMenuItemProps[]): Set<string> => {
        const keys = new Set<string>();

        const visit = (nodes: AriMenuItemProps[]) => {
            nodes.forEach(node => {
                if (node.children?.length) {
                    keys.add(node.key);
                    visit(node.children);
                }
            });
        };

        visit(menuItems);
        return keys;
    }, []);

    const allKeys = useMemo(() => getAllKeys(items), [getAllKeys, items]);
    const expandableKeys = useMemo(() => getExpandableKeys(items), [getExpandableKeys, items]);


    const handleExpand = useCallback((key: string, expanded: boolean) => {
        const nextExpandedKeys = expanded
            ? [...new Set([...internalExpandedKeys, key])]
            : internalExpandedKeys.filter(k => k !== key);

        const newExpandedKeys = nextExpandedKeys.filter(currentKey => expandableKeys.has(currentKey));

        setInternalExpandedKeys(newExpandedKeys);
        onExpand?.(newExpandedKeys);
    }, [expandableKeys, internalExpandedKeys, onExpand]);

    const handleSelect = useCallback((key: string, item: AriMenuItemProps) => {
        setInternalSelectedKey(key);
        onSelect?.(key, item);
    }, [onSelect]);

    useEffect(() => {
        setInternalSelectedKey(selectedKey);
    }, [selectedKey]);

    useEffect(() => {
        if (expandedKeys) {
            setInternalExpandedKeys(expandedKeys.filter(key => expandableKeys.has(key)));
        }
    }, [expandedKeys, expandableKeys]);

    useEffect(() => {
        if (expandedKeys === undefined) {
            setInternalExpandedKeys(prev => prev.filter(key => expandableKeys.has(key)));
        } else {
            const sanitizedExpandedKeys = expandedKeys.filter(key => expandableKeys.has(key));
            if (
                sanitizedExpandedKeys.length !== expandedKeys.length ||
                sanitizedExpandedKeys.some((key, index) => key !== expandedKeys[index])
            ) {
                onExpand?.(sanitizedExpandedKeys);
            }
        }
    }, [expandedKeys, expandableKeys, onExpand]);

    useEffect(() => {
        if (selectedKey === undefined) {
            setInternalSelectedKey(prev => (prev && allKeys.has(prev) ? prev : undefined));
        }
    }, [allKeys, selectedKey]);

    return (
        <div className={cs.gen(cs.b(), cs.m(mode), className)} {...props}>
            {items.map(item => (
                <AriMenuItem
                    mode={mode}
                    key={item.key}
                    item={item}
                    selectedKey={internalSelectedKey || ""}
                    expandedKeys={internalExpandedKeys}
                    onExpand={handleExpand}
                    onSelect={handleSelect}
                    isRoot
                    parentExpanded
                    expandIconPosition={expandIconPosition}
                />
            ))}
        </div>
    );
};

export default AriMenu;
