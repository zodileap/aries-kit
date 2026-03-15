import { AriContainer, AriImage, AriNav } from '@ari/components';
import { useNavigate } from 'react-router-dom';

const navLogo = (
    <AriImage
        fileName="/assets/logo/logo.png"
        style={{ width: 16, height: 16 }}
        usage="image"
    />
);

const navSuffix = (
    <span style={{ fontSize: 12, whiteSpace: 'nowrap' }}>文档入口</span>
);

export const BasicNav: React.FC = () => {
    const navigate = useNavigate();

    return (
      <AriContainer style={{ position: "relative" }} height={50}>
        <AriNav
          items={[
            { key: "home", label: "首页", path: "/" },
            { key: "products", label: "产品", path: "/products" },
            { key: "about", label: "关于", path: "/about" },
          ]}
          sticky
          suffixed={navSuffix}
          logo={navLogo}
          navigate={navigate}
        />
      </AriContainer>
    );
};

export const EdgeAlignedNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AriContainer style={{ display: 'grid', gap: 16 }}>
            <style>
                {`
                    .nav-demo--hidden-items .z-nav__items {
                        display: none;
                    }
                `}
            </style>

            <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ fontSize: 12, color: 'var(--z-color-text-secondary)' }}>
                    items 为空
                </div>
                <AriContainer style={{ position: 'relative' }} height={50}>
                    <AriNav
                        items={[]}
                        logo={navLogo}
                        suffixed={navSuffix}
                        navigate={navigate}
                    />
                </AriContainer>
            </div>

            <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ fontSize: 12, color: 'var(--z-color-text-secondary)' }}>
                    items 被隐藏
                </div>
                <AriContainer style={{ position: 'relative' }} height={50}>
                    <AriNav
                        className="nav-demo--hidden-items"
                        items={[
                            { key: 'home', label: '首页', path: '/' },
                            { key: 'products', label: '产品', path: '/products' }
                        ]}
                        logo={navLogo}
                        suffixed={navSuffix}
                        navigate={navigate}
                    />
                </AriContainer>
            </div>
        </AriContainer>
    );
};

export const DisableHoverNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AriContainer style={{ position: 'relative', height: '300px' }}>
            <AriNav
                items={[
                    {
                        key: 'products',
                        label: '产品',
                        children: [
                            {
                                key: 'group1',
                                title: '产品组1',
                                items: [
                                    { key: 'item1', title: '产品1', path: '/item1' },
                                    { key: 'item2', title: '产品2', path: '/item2' }
                                ]
                            }
                        ]
                    },
                    {
                        key: 'services',
                        label: '服务',
                        children: [
                            {
                                key: 'support',
                                title: '技术支持',
                                items: [
                                    { key: 'docs', title: '文档', path: '/docs' },
                                    { key: 'faq', title: 'FAQ', path: '/faq' }
                                ]
                            }
                        ]
                    }
                ]}
                navigate={navigate}
                disableHover={true}
            />
        </AriContainer>

    );
};

export const SubMenuNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AriContainer style={{ position: 'relative', height: '600px'}}>
            <AriNav
                items={[
                    {
                        key: 'products',
                        label: '产品',
                        path: '/products',
                        children: [
                            {
                                key: 'software',
                                title: '软件产品',
                                items: [
                                    { key: 'ide', title: '开发工具', path: '/ide' },
                                    { key: 'cms', title: '内容管理', path: '/cms' }
                                ]
                            },
                            {
                                key: 'hardware',
                                title: '硬件产品',
                                items: [
                                    { key: 'device', title: '智能设备', path: '/device' },
                                    { key: 'accessory', title: '配件', path: '/accessory' }
                                ]
                            }
                        ]
                    },
                    {
                        key: 'solutions',
                        label: '解决方案',
                        path: '/solutions',
                        children: [
                            {
                                key: 'industry',
                                title: '行业方案',
                                items: [
                                    { key: 'finance', title: '金融', path: '/finance' },
                                    { key: 'education', title: '教育', path: '/education' }
                                ]
                            }
                        ]
                    }
                ]}
                navigate={navigate}
            />
        </AriContainer>

    );
};
