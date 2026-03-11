import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AriMenu } from '@ari/components/menu';
import { routes } from '../config';
import "./theme.scss"
import { Navigation } from './header';
import { AriMenuItemProps } from '@ari/types/components';

const MOBILE_LAYOUT_QUERY = '(max-width: 960px)';

interface LayoutProps {
    menu: AriMenuItemProps[];
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ menu, children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(() => {
        const firstMenuItem = menu[0];
        return firstMenuItem?.children?.[0]?.key || location.pathname;
    });
    const [anchors, setAnchors] = useState<AriMenuItemProps[]>([]);
    const [selectedAnchor, setSelectedAnchor] = useState<string>('');
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return window.matchMedia(MOBILE_LAYOUT_QUERY).matches;
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleAnchorSelect = useCallback((anchorKey: string) => {
        const element = document.getElementById(anchorKey);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (selectedAnchor !== anchorKey) {
            setSelectedAnchor(anchorKey);
        }
    }, [selectedAnchor]);

    useEffect(() => {
        setSelectedKey(location.pathname);
        const currentRoute = routes.find(route => route.path === location.pathname);
        if (currentRoute?.anchors) {
            const anchorItems = currentRoute.anchors.map(anchor => ({
                ...anchor,
                onClick: () => handleAnchorSelect(anchor.key)
            }));
            setAnchors(anchorItems);
            setSelectedAnchor(anchorItems[0]?.key ?? '');
        } else {
            setAnchors([]);
            setSelectedAnchor('');
        }
    }, [location.pathname, handleAnchorSelect]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia(MOBILE_LAYOUT_QUERY);
        const handleChange = (event?: MediaQueryListEvent) => {
            setIsMobile(event?.matches ?? mediaQuery.matches);
        };

        handleChange();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    }, [location.pathname, isMobile]);

    // 添加滚动监听
    useEffect(() => {
        const contentElement = contentRef.current;
        const handleScroll = () => {
            if (anchors.length === 0 || !contentElement) return;

            const scrollTop = contentElement.scrollTop;
            const viewportHeight = contentElement.clientHeight;

            for (const anchor of anchors) {
                const element = document.getElementById(anchor.key);
                if (element) {
                    const elementTop = element.offsetTop - contentElement.offsetTop;
                    const relativeTop = elementTop - scrollTop;

                    if (relativeTop >= 0 && relativeTop <= viewportHeight / 2) {
                        setSelectedAnchor(anchor.key);
                        break;
                    }
                }
            }
        };

        contentElement?.addEventListener('scroll', handleScroll);
        return () => contentElement?.removeEventListener('scroll', handleScroll);
    }, [anchors]);

    const handleMenuSelect = (key: string) => {
        setSelectedKey(key);
        navigate(key);
    };

    return (
        <div className='doc-layout'>
            <Navigation
                showMenuToggle={isMobile}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            />
            <div className='doc-layout__body'>
                <div className={`doc-layout__sidebar${isMobile ? ' doc-layout__sidebar--mobile' : ''}${isSidebarOpen ? ' is-open' : ''}`}>
                    <button
                        type="button"
                        className="doc-layout__sidebar-backdrop"
                        aria-label="关闭文档导航"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className='menu doc-layout__sidebar-panel'>
                        <AriMenu
                            items={menu}
                            selectedKey={selectedKey}
                            onSelect={handleMenuSelect}
                            defaultExpandedKeys={menu.map(item => item.key)}
                        />
                    </div>
                </div>

                <div
                    ref={contentRef}
                    className='doc-layout__content'
                >
                    {isMobile && anchors.length > 0 && (
                        <div className='doc-layout__anchor-chips'>
                            {anchors.map(anchor => (
                                <button
                                    key={anchor.key}
                                    type="button"
                                    className={`doc-layout__anchor-chip${selectedAnchor === anchor.key ? ' is-active' : ''}`}
                                    onClick={() => handleAnchorSelect(anchor.key)}
                                >
                                    {anchor.label}
                                </button>
                            ))}
                        </div>
                    )}
                    <div className='doc-layout__content-inner'>
                        {children}
                    </div>
                </div>

                {!isMobile && anchors.length > 0 && (
                    <div className='sub-menu doc-layout__outline'>
                        <div style={{ fontSize: '12px', fontWeight: 300 }}>
                            <AriMenu
                                items={anchors}
                                mode="vertical"
                                selectedKey={selectedAnchor}
                            />
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Layout;
