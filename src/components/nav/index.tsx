// src/components/AriNav/index.tsx

import { useState, useCallback, useRef, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriTypography } from '../typography';
import { AriNavItem, AriNavProps, NavSubMenuItem } from '@ari/types/components';

/**
 * 导航组件
 * 
 * 用于展示网站的主导航栏，支持悬停展开子菜单
 * 
 * Example:
 * {@link https://aries-react.dev/docs/nav}
 */
export const AriNav: React.FC<AriNavProps> = ({
    items,
    logo,
    navigate,
    onSubMenuOpen,
    onSubMenuClose,
    disableHover = false,
    sticky = false,
    suffixed,
    className,
    style,
    ...props
}) => {
    // 当前打开的子菜单key
    const [openKey, setOpenKey] = useState<string | null>(null);
    // 是否处于吸顶状态
    const [isStuck, setIsStuck] = useState(false);

    // DOM引用
    const navRef = useRef<HTMLDivElement>(null);
    const submenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sticky || !navRef.current) return;

        // 找到滚动的父容器
        const findScrollParent = (node: HTMLElement): HTMLElement => {
            if (!node.parentElement) return document.body;

            const style = window.getComputedStyle(node.parentElement);
            const overflowY = style.overflowY;
            const isScrollable =
                (overflowY === 'auto' || overflowY === 'scroll') &&
                node.parentElement.scrollHeight > node.parentElement.clientHeight;

            if (isScrollable) {
                return node.parentElement;
            }

            return findScrollParent(node.parentElement);
        };

        const nav = navRef.current;
        const scrollParent = findScrollParent(nav);

        // 记录导航栏相对于父容器的初始位置
        const navInitialOffset = nav.offsetTop;

        const checkSticky = () => {
            if (!navRef.current) return;

            // 计算父容器的滚动位置相对于导航初始位置
            const parentScrollTop = scrollParent === document.body
                ? window.scrollY
                : scrollParent.scrollTop;
            // 如果滚动超过了导航的初始位置，启用吸顶
            setIsStuck(parentScrollTop > navInitialOffset);
        };

        // 初始检查
        checkSticky();

        // 添加滚动监听到正确的父容器
        scrollParent.addEventListener('scroll', checkSticky, { passive: true });

        return () => {
            scrollParent.removeEventListener('scroll', checkSticky);
        };
    }, [sticky]);

    /**
     * 关闭子菜单
     */
    const closeSubMenu = useCallback(() => {
        if (openKey && onSubMenuClose) {
            onSubMenuClose(openKey);
        }
        setOpenKey(null);
    }, [openKey, onSubMenuClose]);

    /**
     * 打开子菜单
     */
    const handleMenuOpen = useCallback((key: string) => {
        if (openKey === key) return;

        if (openKey && onSubMenuClose) {
            onSubMenuClose(openKey);
        }
        setOpenKey(key);
        if (onSubMenuOpen) {
            onSubMenuOpen(key);
        }
    }, [openKey, onSubMenuOpen, onSubMenuClose]);

    /**
     * 处理导航项点击
     */
    const handleItemClick = useCallback((item: AriNavItem) => {
        if (item.onClick) {
            item.onClick();
        }
        if (item.children?.length) {
            handleMenuOpen(item.key);
            return;
        }

        if (item.path) {
            navigate(item.path.replace(/^\/?/, '/'));
        }
        closeSubMenu();
    }, [closeSubMenu, handleMenuOpen, navigate]);

    /**
     * 获取完整的路径
     * 将父级路径与当前路径组合
     */
    const getFullPath = useCallback((key: string) => {
        const parentItem = items.find(item =>
            item.children?.some(group =>
                group.items.some(subItem => subItem.key === key)
            )
        );

        const subItem = parentItem?.children?.reduce<NavSubMenuItem | undefined>((found, group) => {
            return found || group.items.find(item => item.key === key);
        }, undefined);

        if (!subItem) return '';

        const paths = [];
        if (parentItem?.path) paths.push(parentItem.path);
        if (subItem.path) paths.push(subItem.path);

        return paths.join('/').replace(/\/+/g, '/');
    }, [items]);

    /**
     * 处理子菜单项点击
     * 使用完整路径进行路由跳转
     */
    const handleSubItemClick = useCallback((key: string, path: string) => {
        const fullPath = (getFullPath(key) || path).replace(/^\/?/, '/');
        navigate(fullPath);
        closeSubMenu();
    }, [navigate, closeSubMenu, getFullPath]);

    /**
     * 处理导航项悬停
     */
    const handleMouseEnter = useCallback((item: AriNavItem) => {
        if (disableHover || !item.children) return;
        handleMenuOpen(item.key);
    }, [disableHover, handleMenuOpen]);

    /**
     * 处理整个菜单区域的鼠标离开
     */
    const handleMenuAreaMouseLeave = useCallback((e: React.MouseEvent) => {
        if (disableHover) return;

        const navElement = navRef.current;
        const submenuElement = submenuRef.current;
        const relatedTarget = e.relatedTarget as HTMLElement | null;

        // 如果relatedTarget为null或不是DOM节点，则关闭子菜单
        if (!relatedTarget || !(relatedTarget instanceof Node)) {
            closeSubMenu();
            return;
        }

        const isToNav = navElement?.contains(relatedTarget) || false;
        const isToSubmenu = submenuElement?.contains(relatedTarget) || false;

        if (!isToNav && !isToSubmenu) {
            closeSubMenu();
        }
    }, [disableHover, closeSubMenu]);

    /**
     * 处理导航栏的鼠标离开
     */
    const handleNavMouseLeave = useCallback((e: React.MouseEvent) => {
        if (disableHover) return;

        const submenuElement = submenuRef.current;
        const relatedTarget = e.relatedTarget as HTMLElement | null;

        // 如果relatedTarget为null或不是DOM节点，则关闭子菜单
        if (!relatedTarget || !(relatedTarget instanceof Node)) {
            closeSubMenu();
            return;
        }

        if (!submenuElement?.contains(relatedTarget)) {
            closeSubMenu();
        }
    }, [disableHover, closeSubMenu]);

    /**
     * 渲染子菜单内容
     */
    const renderSubMenu = () => {
        const activeItem = items.find(item => item.key === openKey);
        if (!activeItem?.children) return null;

        return (
            <div className={cs.e('submenu-content')}>
                {activeItem.children.map(group => (
                    <div key={group.key} className={cs.e('submenu-group')}>
                        <AriTypography variant='overline' className={cs.e('group-title')} value={group.title} />
                        <div className={cs.e('group-items')}>

                            {group.items.map(item => (
                                <AriTypography variant='h4' key={item.key} className={cs.e('group-item')} value={item.title} onClick={() => handleSubItemClick(item.key, item.path)} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const cs = useCss('nav');

    return (
        <>
            <div
                ref={navRef}
                className={cs.gen(
                    cs.b(),
                    className,
                    cs.is('sticky', sticky),
                    cs.is('stuck', isStuck),
                    cs.is('hover', openKey != null && openKey !== ''),
                )}
                onMouseLeave={handleNavMouseLeave}
                style={style}
                {...props}
            >
                <div className={cs.e('container')}>
                    {logo && <div className={cs.e('logo')} onClick={() => handleSubItemClick('', '/')}>{logo}</div>}
                    <div className={cs.e('items')}>
                        {items.map(item => (
                            <AriTypography
                                variant='body'
                                key={item.key}
                                value={item.label}
                                className={cs.gen(
                                    cs.e('item'),
                                    cs.is('active', openKey === item.key)
                                )}
                                onClick={() => handleItemClick(item)}
                                onMouseEnter={() => handleMouseEnter(item)}
                            />
                        ))}
                    </div>
                    {suffixed && <div className={cs.e('suffix')}>{suffixed}</div>}
                </div>
            </div>

            <div
                ref={submenuRef}
                className={cs.gen(
                    cs.e('submenu'),
                    cs.is('open', openKey != null && openKey !== ''),
                    cs.is('sticky', sticky && isStuck)
                )}
                onMouseLeave={handleMenuAreaMouseLeave}
            >
                {renderSubMenu()}
            </div>

            <div
                className={cs.gen(
                    cs.e('mask'),
                    cs.is('open', openKey != null && openKey !== '')
                )}
            />
        </>
    );
};
