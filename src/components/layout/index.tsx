import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useCss } from '@ari/utils';
import { AriLayoutArea, AriLayoutContextState, AriLayoutProps } from '@ari/types';

// 创建布局上下文
const LayoutContext = createContext<AriLayoutContextState | undefined>(undefined);

/**
 * 使用布局上下文的Hook
 * 获取布局上下文中的状态和方法
 */
export const useLayout = (): AriLayoutContextState => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout必须使用在AriLayout内');
    }
    return context;
};

/**
 * 判断两个数组是否有相同的内容（不考虑顺序）
 */
function areArraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) return false;

    const set = new Set(arr1);
    for (const item of arr2) {
        if (!set.has(item)) return false;
    }

    return true;
}

/**
 * 布局组件
 * 
 * 提供左中右三个区域的布局，并允许通过上下文控制区域的显隐
 * 
 * Example:
 * {@link https://aries-react.dev/docs/layout}
 */
export const AriLayout: React.FC<AriLayoutProps> = ({
    left,
    center,
    right,
    defaultVisibleAreas = ['left', 'center', 'right'],
    onAreaVisibilityChange,
    className,
    children,
    leftWidth = '250px',
    rightWidth = '250px',
    ...props
}) => {
    // 1. 状态初始化和Refs以及引用的hook
    const cs = useCss('layout');
    const layoutRef = useRef<HTMLDivElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    // 将初始默认值保存在ref中，使其不受重新渲染影响
    const initialDefaultAreas = useRef(defaultVisibleAreas);
    // 使用初始值设置状态，后续外部属性变化不会影响此状态
    const [visibleAreas, setVisibleAreasState] = useState<AriLayoutArea[]>(initialDefaultAreas.current);
    // 保存最近一次的可见区域状态，用于计算过渡效果
    const [previousAreas, setPreviousAreas] = useState<AriLayoutArea[]>(initialDefaultAreas.current);
    // 保存最新的defaultVisibleAreas和onAreaVisibilityChange引用
    const defaultVisibleAreasRef = useRef(defaultVisibleAreas);
    const onAreaVisibilityChangeRef = useRef(onAreaVisibilityChange);

    // 2. 派生状态计算
    // 预先计算各区域的可见性
    const leftVisible = visibleAreas.includes('left') && !!left;
    const centerVisible = visibleAreas.includes('center') && !!(center || children);
    const rightVisible = visibleAreas.includes('right') && !!right;

    // 3. 事件处理函数
    // 包装setVisibleAreas以避免循环更新
    const setVisibleAreas = useCallback((areas: AriLayoutArea[]) => {
        setVisibleAreasState(prevAreas => {
            if (areArraysEqual(prevAreas, areas)) return prevAreas;

            // 保存之前的状态用于过渡效果
            setPreviousAreas(prevAreas);
            // 只在状态实际变化时调用回调
            onAreaVisibilityChangeRef.current?.(areas);
            return areas;
        });
    }, []);

    // 检查区域是否可见
    const isAreaVisible = useCallback((area: AriLayoutArea): boolean => {
        return visibleAreas.includes(area);
    }, [visibleAreas]);

    // 切换区域可见性的方法
    const toggleAreaVisibility = useCallback((area: AriLayoutArea, visible?: boolean) => {
        setVisibleAreasState(prevAreas => {
            const newVisibleAreas = [...prevAreas];
            const index = newVisibleAreas.indexOf(area);

            let changed = false;

            if (visible === undefined) {
                // 切换状态
                if (index >= 0) {
                    newVisibleAreas.splice(index, 1);
                    changed = true;
                } else {
                    newVisibleAreas.push(area);
                    changed = true;
                }
            } else if (visible) {
                // 设置为可见
                if (index < 0) {
                    newVisibleAreas.push(area);
                    changed = true;
                }
            } else {
                // 设置为不可见
                if (index >= 0) {
                    newVisibleAreas.splice(index, 1);
                    changed = true;
                }
            }

            // 如果没有变化，返回之前的状态避免触发重渲染
            if (!changed) return prevAreas;

            // 保存之前的状态用于过渡效果
            setPreviousAreas(prevAreas);
            // 只在状态实际变化时调用回调
            onAreaVisibilityChangeRef.current?.(newVisibleAreas);
            return newVisibleAreas;
        });
    }, []);

    // 5. 副作用处理
    // 更新引用
    useEffect(() => {
        defaultVisibleAreasRef.current = defaultVisibleAreas;
        onAreaVisibilityChangeRef.current = onAreaVisibilityChange;
    }, [defaultVisibleAreas, onAreaVisibilityChange]);

    // 响应外部defaultVisibleAreas的变化，仅在初始化时或defaultVisibleAreas引用真正变化时更新
    useEffect(() => {
        if (defaultVisibleAreas && !areArraysEqual(defaultVisibleAreasRef.current, defaultVisibleAreas)) {
            // 只有当defaultVisibleAreas真正变化时才更新状态
            setPreviousAreas(visibleAreas);
            setVisibleAreasState(defaultVisibleAreas);
        }
    }, [defaultVisibleAreas]);

    // 更新CSS变量以保持固定宽度
    useEffect(() => {
        // 为左侧面板设置CSS变量
        if (leftContentRef.current) {
            leftContentRef.current.style.setProperty('--panel-width', typeof leftWidth === 'number' ? `${leftWidth}px` : leftWidth);
        }

        // 为右侧面板设置CSS变量
        if (rightContentRef.current) {
            rightContentRef.current.style.setProperty('--panel-width', typeof rightWidth === 'number' ? `${rightWidth}px` : rightWidth);
        }
    }, [leftWidth, rightWidth]);

    // 6. 上下文值计算
    const contextValue = useMemo<AriLayoutContextState>(() => ({
        visibleAreas,
        setArea: toggleAreaVisibility,
        setVisibleAreas,
        isVisible: isAreaVisible
    }), [visibleAreas, toggleAreaVisibility, setVisibleAreas, isAreaVisible]);

    // 7. 样式计算
    const leftContainerStyle = useMemo(() => ({
        width: leftVisible ? leftWidth : 0,
    }), [leftVisible, leftWidth]);

    const rightContainerStyle = useMemo(() => ({
        width: rightVisible ? rightWidth : 0,
    }), [rightVisible, rightWidth]);

    // 10. 主要JSX返回
    return (
        <LayoutContext.Provider value={contextValue}>
            <div
                className={cs.gen(cs.b(), className)}
                ref={layoutRef}
                {...props}
            >
                <div
                    className={cs.gen(
                        cs.e('left'),
                        cs.is('hidden', !leftVisible)
                    )}
                    style={leftContainerStyle}
                >
                    {left && (
                        <div
                            className="layout-content-wrapper"
                            ref={leftContentRef}
                        >
                            {left}
                        </div>
                    )}
                </div>

                {centerVisible && (
                    <div className={cs.gen(cs.e('center'), cs.is('no-right', !rightVisible))}>
                        {center || children}
                    </div>
                )}

                <div
                    className={cs.gen(
                        cs.e('right'),
                        cs.is('hidden', !rightVisible)
                    )}
                    style={rightContainerStyle}
                >
                    {right && (
                        <div
                            className="layout-content-wrapper"
                            ref={rightContentRef}
                        >
                            {right}
                        </div>
                    )}
                </div>
            </div>
        </LayoutContext.Provider>
    );
};