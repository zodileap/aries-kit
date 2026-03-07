import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriContainer, AriIcon } from '@ari/components';
import { AriCollapseProps } from '@ari/types/components';

/**
 * 可折叠容器
 * 
 * 用于在页面中展示可折叠的内容区域 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/collapse}
 */
const AriCollapseComponent: React.FC<AriCollapseProps> = ({
    children,
    collapseContent,
    className,
    defaultExpanded = false,
    expanded: propExpanded,
    onExpandChange,
    toggleContent,
    showDefaultIcon = true,
    shadowMode = "default",
    ...props
}) => {
    const [localExpanded, setLocalExpanded] = useState(defaultExpanded);
    const isExpanded = propExpanded !== undefined ? propExpanded : localExpanded;
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationState, setAnimationState] = useState<'expanding' | 'collapsing' | null>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const cs = useCss('collapse');

    // 计算内容高度，但只在必要时触发
    const measureHeight = useCallback(() => {
        if (contentRef.current) {
            return contentRef.current.scrollHeight;
        }
        return 0;
    }, []);

    // 初始化时测量高度
    useEffect(() => {
        const element = contentRef.current;
        if (element) {
            setContentHeight(element.scrollHeight);
        }
    }, []); // 只在挂载时运行

    const handleToggle = useCallback(() => {
        const newExpanded = !isExpanded;
        
        if (newExpanded) {
            // 展开时：先测量高度，然后在下一帧更新状态
            const currentHeight = measureHeight();
            setContentHeight(currentHeight);
            
            // 使用 requestAnimationFrame 确保高度状态已更新
            requestAnimationFrame(() => {
                setLocalExpanded(true);
                onExpandChange?.(true);
            });
        } else {
            // 收起时：直接更新状态
            setLocalExpanded(false);
            onExpandChange?.(false);
        }
        
        setIsAnimating(true);
        setAnimationState(newExpanded ? 'expanding' : 'collapsing');
        
        // 动画结束后清除状态
        setTimeout(() => {
            setIsAnimating(false);
            setAnimationState(null);
        }, 250); // 匹配CSS动画时长
    }, [isExpanded, onExpandChange, measureHeight]);

    // 缓存CSS类名，避免不必要的重新计算
    const containerClassName = useMemo(() => cs.gen(
        cs.b(), 
        cs.is('expanded', isExpanded),
        cs.is('expanding', animationState === 'expanding'),
        cs.is('collapsing', animationState === 'collapsing'),
        cs.m(`shadow-${shadowMode}`),
        className
    ), [cs, isExpanded, animationState, shadowMode, className]);

    // 缓存图标样式，避免每次渲染都创建新对象
    const iconStyle = useMemo(() => ({
        transition: 'transform 0.3s',
        marginLeft: toggleContent ? '8px' : '0'
    }), [toggleContent]);

    // 缓存折叠区域样式 - 使用动态计算的高度，让CSS处理过渡
    const collapseStyle = useMemo(() => ({
        height: isExpanded ? contentHeight : 0
        // 移除JavaScript中的transition设置，使用CSS中的transition
    }), [isExpanded, contentHeight]);

    // 缓存CSS类名，避免重复计算
    const collapseContentClassName = useMemo(() => cs.e('collapse-content'), [cs]);
    const bodyClassName = useMemo(() => cs.e('body'), [cs]);

    return (
        <AriContainer
            className={containerClassName}
            {...props}
        >
            <AriContainer className={cs.e('content')}>
                {children}
            </AriContainer>
            <AriContainer
                className={cs.e('toggle')}
                onClick={handleToggle}
            >
                {toggleContent}
                {showDefaultIcon && (
                    <AriIcon 
                        size='sm'
                        name="expand_all" 
                        style={iconStyle}
                    />
                )}
            </AriContainer>
            <AriContainer
                className={cs.e('collapse-section')}
                style={collapseStyle}
            >
                <div ref={contentRef} className={collapseContentClassName}>
                    <div className={bodyClassName}>
                        {collapseContent}
                    </div>
                </div>
            </AriContainer>
        </AriContainer>
    ); 
};

// 使用 React.memo 优化性能，只在 props 发生变化时才重新渲染
export const AriCollapse = React.memo(AriCollapseComponent);

export default AriCollapse;