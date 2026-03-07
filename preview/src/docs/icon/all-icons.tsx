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
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '16px',
                        border: '1px solid #f0f0f0',
                        borderRadius: '4px',
                        backgroundColor: '#fff1f0',
                    }}
                >
                    <div style={{ width: 16, height: 16, marginBottom: '8px' }}>❌</div>
                    <span style={{ fontSize: '12px', color: '#ff4d4f' }}>{name}</span>
                </div>
            );
        }
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                }}
                onClick={() => copyToClipboard(name)}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                }}
            >
                <AriIcon
                    name={name}
                    style={{ marginBottom: '8px' }}
                    onError={() => handleIconError(name)}
                />
                <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
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
        <div ref={iconSectionRef} style={{ width: '100%', position: 'relative' }}>
            <div
                ref={headerRef}
                style={{
                    position: isHeaderSticky ? 'sticky' : 'static',
                    top: 0,
                    zIndex: 10,
                    backgroundColor: 'white',
                    padding: '16px 0',
                    boxShadow: isHeaderSticky ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'box-shadow 0.3s ease',
                    marginBottom: '20px',
                    width: "100%"
                }}
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
                    <div style={{ width: '100%', overflowX: 'scroll', }}>
                        <AriTabs
                            items={categoryTabs}
                            activeKey={activeCategory}
                            onChange={setActiveCategory}
                            tabPosition="top"
                            style={{ marginBottom: 0 }}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        总共 {filteredIcons.length} 个图标，当前显示 {Math.min(visibleIconsCount, filteredIcons.length)} 个
                        {visibleIconsCount < filteredIcons.length && (
                            <span style={{ marginLeft: '10px', color: '#1890ff' }}>
                                ({loadingProgress}% 已加载)
                            </span>
                        )}
                    </div>
                </AriFlex>
            </div>

            <div
                ref={contentRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: '16px',
                }}
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
