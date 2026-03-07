import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AriMenu } from '@ari/components/menu';
import { routes } from '../config';
import "./theme.scss"
import { Navigation } from './header';
import { AriMenuItemProps } from '@ari/types/components';

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
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelectedKey(location.pathname);
        const currentRoute = routes.find(route => route.path === location.pathname);
        if (currentRoute?.anchors) {
            const anchorItems = currentRoute.anchors.map(anchor => ({
                ...anchor,
                onClick: () => {
                    const element = document.getElementById(anchor.key);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    if (selectedAnchor !== anchor.key) {
                        setSelectedAnchor(anchor.key);
                    }
                }
            }));
            setAnchors(anchorItems);
        } else {
            setAnchors([]);
        }
    }, [location.pathname]);

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
            <Navigation />
            <div style={{ display: 'flex', height: 'calc(100% - 60px)',boxSizing: 'border-box' }}>
                <div className='menu'>
                    <AriMenu
                        items={menu}
                        selectedKey={selectedKey}
                        onSelect={handleMenuSelect}
                        defaultExpandedKeys={menu.map(item => item.key)}
                    />
                </div>

                <div
                    ref={contentRef}
                    style={{ flex: 1, padding: '0 20px', overflow: 'auto' }}
                >
                    {children}
                </div>

                {anchors.length > 0 && (
                    <div className='sub-menu' style={{ }}>
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
