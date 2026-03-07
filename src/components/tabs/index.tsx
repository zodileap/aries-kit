import { useCss } from '@ari/utils';
import { AriTabsProps } from '@ari/types/components';
import { useRef, useEffect, useCallback } from 'react';

/**
 * 标签页组件 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tabs}
 */
export const AriTabs: React.FC<AriTabsProps> = ({
    activeKey,
    items,
    onChange,
    className,
    variant = 'default'
}) => {
    const cs = useCss('tabs');
    const navRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    // 更新滑块位置和大小
    const updateSlider = useCallback(() => {
        if (!navRef.current || !sliderRef.current) return;
        
        const activeTab = navRef.current.querySelector(`[data-key="${activeKey}"]`) as HTMLElement;
        if (!activeTab) return;

        const isVertical = variant === 'vertical';
        
        if (isVertical) {
            // 垂直模式
            const top = activeTab.offsetTop;
            const height = activeTab.offsetHeight;
            
            sliderRef.current.style.transform = `translateY(${top}px)`;
            sliderRef.current.style.height = `${height}px`;
        } else {
            // 水平模式 - 使用相对于nav容器的偏移量
            const left = activeTab.offsetLeft;
            const width = activeTab.offsetWidth;
            
            sliderRef.current.style.transform = `translateX(${left}px)`;
            sliderRef.current.style.width = `${width}px`;
        }
    }, [activeKey, variant, items]);

    // 监听activeKey变化更新滑块
    useEffect(() => {
        // 延迟执行以确保DOM渲染完成
        const timer = setTimeout(updateSlider, 10);
        return () => clearTimeout(timer);
    }, [updateSlider]);

    // 监听窗口大小变化
    useEffect(() => {
        const handleResize = () => updateSlider();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateSlider]);

    return (
        <div className={cs.gen(
            cs.b(), 
            cs.m(variant),
            className
        )}>
            <div 
                ref={navRef}
                className={cs.e('nav')}
            >
                <div 
                    ref={sliderRef}
                    className={cs.e('slider')}
                />
                {items.map(item => (
                    <div
                        key={item.key}
                        data-key={item.key}
                        className={cs.gen(
                            cs.e('nav-item'),
                            cs.is('active', activeKey === item.key),
                            cs.is('disabled', item.disabled)
                        )}
                        style={{ flexShrink: 0 }}
                        onClick={() => {
                            if (!item.disabled) {
                                onChange(item.key);
                            }
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            {
                items.find(item => item.key === activeKey)?.children && (
                    <div className={cs.e('content')}>
                        {items.find(item => item.key === activeKey)?.children}
                    </div>
                )
            }
        </div>
    );
};