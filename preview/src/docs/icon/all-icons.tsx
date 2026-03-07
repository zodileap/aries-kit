import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AriIcon, AriMessage, AriInput, AriFlex, AriTabs } from '@aries-kit/react';
import { iconNames } from './iconNames';
import { iconCategories } from './iconCategories';
import './icon-styles.css'; // 引入自定义样式文件

const AllIconsDemo: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredIcons, setFilteredIcons] = useState<string[]>(iconNames);
    const [errorIcons, setErrorIcons] = useState<Set<string>>(new Set());
    const [visibleIconsCount, setVisibleIconsCount] = useState(200);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // refs
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadTriggerRef = useRef<HTMLDivElement>(null);
    const iconSectionRef = useRef<HTMLDivElement>(null);
    const headerTopObserverRef = useRef<IntersectionObserver | null>(null);

    // 监听图标区域是否在视口中
    useEffect(() => {
        // 创建一个观察器监听header上方的元素
        const headerTopSentinel = document.createElement('div');
        headerTopSentinel.style.position = 'absolute';
        headerTopSentinel.style.top = '0';
        headerTopSentinel.style.height = '1px';
        headerTopSentinel.style.width = '100%';
        headerTopSentinel.style.pointerEvents = 'none';
        headerTopSentinel.style.opacity = '0';

        // 将sentinel添加到iconSection
        if (iconSectionRef.current) {
            iconSectionRef.current.prepend(headerTopSentinel);

            // 使用IntersectionObserver监听顶部sentinel元素
            headerTopObserverRef.current = new IntersectionObserver(
                (entries) => {
                    // 当顶部sentinel不在视口内时(已经滚动到视口外)，设置header为sticky
                    setIsHeaderSticky(!entries[0].isIntersecting);
                },
                {
                    threshold: 0,
                    rootMargin: '-1px 0px 0px 0px' // 精确到1px的临界点
                }
            );

            headerTopObserverRef.current.observe(headerTopSentinel);
        }

        // 另外监听页面滚动到API部分时取消sticky
        const handleScroll = () => {
            // 获取当前滚动位置
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const iconSectionBottom = iconSectionRef.current?.offsetTop || 0 +
                (iconSectionRef.current?.offsetHeight || 0);

            // 判断是否滚动超出图标区域
            if (scrollTop > iconSectionBottom) {
                setIsHeaderSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            if (headerTopObserverRef.current) {
                headerTopObserverRef.current.disconnect();
            }
            window.removeEventListener('scroll', handleScroll);
            if (iconSectionRef.current && headerTopSentinel.parentNode === iconSectionRef.current) {
                iconSectionRef.current.removeChild(headerTopSentinel);
            }
        };
    }, []);

    // 过滤图标
    useEffect(() => {
        let filtered = searchText
            ? iconNames.filter(name => name.toLowerCase().includes(searchText.toLowerCase()))
            : iconNames;

        // 根据选择的分类进一步过滤
        if (activeCategory !== 'all') {
            filtered = filtered.filter(name =>
                iconCategories.find(cat => cat.key === activeCategory)?.icons.includes(name)
            );
        }

        setFilteredIcons(filtered);
        setVisibleIconsCount(200); // 重置可见图标数量
    }, [searchText, activeCategory]);

    // 设置无限加载
    useEffect(() => {
        if (loadTriggerRef.current) {
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreIcons();
                }
            }, {
                rootMargin: '600px 0px',
                threshold: 0.1
            });

            observerRef.current.observe(loadTriggerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [filteredIcons]);

    const loadMoreIcons = () => {
        if (visibleIconsCount < filteredIcons.length) {
            setVisibleIconsCount(prev => Math.min(prev + 200, filteredIcons.length));
        }
    };

    const copyToClipboard = (name: string) => {
        const code = `<AriIcon name="${name}" />`;
        navigator.clipboard.writeText(code).then(() => {
            AriMessage.success(`已复制代码: ${code}`);
        }).catch(() => {
            AriMessage.error('复制失败');
        });
    };

    const handleIconError = useCallback((name: string) => {
        setErrorIcons(prev => new Set(prev).add(name));
    }, []);

    const handleSearch = (value: string) => {
        setSearchText(value);
    };

    // 单个图标组件
    const IconItem = ({ name }: { name: string }) => {
        if (errorIcons.has(name)) {
            return (
                <div className="icon-collection__item icon-collection__item--error">
                    <div className="icon-collection__item-icon">❌</div>
                    <span className="icon-collection__item-name">{name}</span>
                </div>
            );
        }
        return (
            <div
                className="icon-collection__item"
                onClick={() => copyToClipboard(name)}
            >
                <AriIcon
                    name={name}
                    className="icon-collection__item-icon"
                    onError={() => handleIconError(name)}
                />
                <span className="icon-collection__item-name">{name}</span>
            </div>
        );
    };

    // 计算当前显示进度百分比
    const loadingProgress = Math.round((visibleIconsCount / filteredIcons.length) * 100);

    // 生成分类标签页
    const categoryTabs = [
        { label: <div style={{ width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>全部图标</div>, key: 'all' },
        ...iconCategories.map(category => ({
            label: <div style={{ width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{category.label}</div>,
            key: category.key,
        }))
    ];

    return (
        <div ref={iconSectionRef} className="icon-collection">
            <div
                className={`icon-collection__header${isHeaderSticky ? ' icon-collection__header--sticky' : ''}`}
            >
                <AriFlex 
                    vertical 
                    style={{width: "100%", alignItems: 'flex-start'}}
                    className="icon-search-space"
                >
                    <AriInput.Search
                        placeholder="搜索图标"
                        value={searchText}
                        onChange={setSearchText}
                        onSearch={handleSearch}
                        style={{ width: 300 }}
                    />
                    <div className="icon-collection__tabs">
                        <AriTabs
                            items={categoryTabs}
                            activeKey={activeCategory}
                            onChange={setActiveCategory}
                            tabPosition="top"
                            style={{ marginBottom: 0 }}
                        />
                    </div>
                    <div className="icon-collection__status">
                        总共 {filteredIcons.length} 个图标，当前显示 {Math.min(visibleIconsCount, filteredIcons.length)} 个
                        {visibleIconsCount < filteredIcons.length && (
                            <span className="icon-collection__progress">
                                ({loadingProgress}% 已加载)
                            </span>
                        )}
                    </div>
                </AriFlex>
            </div>

            <div
                className="icon-collection__grid"
            >
                {filteredIcons.slice(0, visibleIconsCount).map(name => (
                    <IconItem key={name} name={name} />
                ))}
            </div>

            {visibleIconsCount < filteredIcons.length && (
                <div
                    ref={loadTriggerRef}
                    style={{
                        height: '1px',
                        opacity: 0,
                        position: 'relative',
                        top: '-500px'
                    }}
                />
            )}
        </div>
    );
};

export default AllIconsDemo;
