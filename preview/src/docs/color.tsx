import React, { useState } from 'react';
import { AriMessage, AriFlex, AriTypography, AriButton, AriCode } from '@aries-kit/react';

interface ColorGridProps {
    colors: { [key: string]: string }
    title: string;
    description?: string;
}

const COLOR_CARD_WIDTH = 180;

const ColorGrid: React.FC<ColorGridProps> = ({ colors, title, description }) => {
    const copyToClipboard = (variable: string) => {
        navigator.clipboard.writeText(variable).then(() => {
            AriMessage.success(`已复制变量: ${variable}`);
        }).catch(() => {
            AriMessage.error('复制失败');
        });
    };

    return (
        <div style={{ marginBottom: '40px' }}>
            <AriTypography variant="h3" value={title} style={{ marginBottom: '8px' }} />
            {description && (
                <AriTypography 
                    variant="body" 
                    value={description} 
                    color="secondary" 
                    style={{ marginBottom: '20px' }} 
                />
            )}
            <div style={{ 
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${COLOR_CARD_WIDTH}px, 100%), ${COLOR_CARD_WIDTH}px))`,
                gap: '16px',
                justifyContent: 'start'
            }}>
                {Object.entries(colors).map(([name, value]) => (
                    <div
                        key={name}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid var(--z-color-border)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            backgroundColor: 'var(--z-color-bg)'
                        }}
                        onClick={() => copyToClipboard(`getVar(color, ${name})`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = 'var(--z-color-box-shadow)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            height: '80px',
                            backgroundColor: value,
                            border: value === 'transparent' ? '1px solid var(--z-color-border)' : 'none',
                            position: 'relative'
                        }}>
                            {value === 'transparent' && (
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
                                    backgroundSize: '10px 10px',
                                    backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px'
                                }} />
                            )}
                        </div>
                        <div style={{ padding: '12px' }}>
                            <div style={{ 
                                fontSize: '13px', 
                                color: 'var(--z-color-text)', 
                                fontWeight: '500',
                                marginBottom: '4px'
                            }}>
                                {name}
                            </div>
                            <div style={{ 
                                fontSize: '11px', 
                                color: 'var(--z-color-text-secondary)',
                                fontFamily: 'monospace',
                                wordBreak: 'break-all'
                            }}>
                                {value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ColorDoc: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    // 切换主题
    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        document.documentElement.setAttribute('data-color-theme', newTheme);
    };

    // 语义化颜色 - 品牌色系
    const brandColors = {
        'brand': 'var(--z-color-brand)',
        'brand-active': 'var(--z-color-brand-active)',
        'brand-secondary': 'var(--z-color-brand-secondary)',
        'brand-tertiary': 'var(--z-color-brand-tertiary)',
    };

    // 语义化颜色 - 功能色系
    const functionalColors = {
        'success': 'var(--z-color-success)',
        'success-active': 'var(--z-color-success-active)',
        'success-secondary': 'var(--z-color-success-secondary)',
        'warning': 'var(--z-color-warning)',
        'warning-active': 'var(--z-color-warning-active)',
        'warning-secondary': 'var(--z-color-warning-secondary)',
        'danger': 'var(--z-color-danger)',
        'danger-active': 'var(--z-color-danger-active)',
        'danger-secondary': 'var(--z-color-danger-secondary)',
        'info': 'var(--z-color-info)',
        'info-active': 'var(--z-color-info-active)',
        'info-secondary': 'var(--z-color-info-secondary)',
    };

    // 界面色系 - 背景色
    const backgroundColors = {
        'bg': 'var(--z-color-bg)',
        'bg-secondary': 'var(--z-color-bg-secondary)',
        'bg-tertiary': 'var(--z-color-bg-tertiary)',
        'bg-active': 'var(--z-color-bg-active)',
        'bg-brand': 'var(--z-color-bg-brand)',
        'bg-app-layout': 'var(--z-color-bg-app-layout)',
        'bg-opacity': 'var(--z-color-bg-opacity)',
        'bg-mask': 'var(--z-color-bg-mask)',
    };

    // 界面色系 - 文本色
    const textColors = {
        'text': 'var(--z-color-text)',
        'text-secondary': 'var(--z-color-text-secondary)',
        'text-tertiary': 'var(--z-color-text-tertiary)',
        'text-active': 'var(--z-color-text-active)',
        'text-brand': 'var(--z-color-text-brand)',
        'text-success': 'var(--z-color-text-success)',
        'text-warning': 'var(--z-color-text-warning)',
        'text-danger': 'var(--z-color-text-danger)',
        'text-info': 'var(--z-color-text-info)',
        'text-disabled': 'var(--z-color-text-disabled)',
        'text-on-bg': 'var(--z-color-text-on-bg)',
        'text-on-brand': 'var(--z-color-text-on-brand)',
    };

    // 界面色系 - 边框色
    const borderColors = {
        'border': 'var(--z-color-border)',
        'border-strong': 'var(--z-color-border-strong)',
        'border-active': 'var(--z-color-border-active)',
        'border-brand': 'var(--z-color-border-brand)',
        'border-success': 'var(--z-color-border-success)',
        'border-warning': 'var(--z-color-border-warning)',
        'border-danger': 'var(--z-color-border-danger)',
        'border-info': 'var(--z-color-border-info)',
        'border-divider': 'var(--z-color-border-divider)',
    };

    // 标签颜色系统 - 基础色系
    const tagColors = {
        'tag-blue': 'var(--z-color-tag-blue)',
        'tag-blue-text': 'var(--z-color-tag-blue-text)',
        'tag-green': 'var(--z-color-tag-green)',
        'tag-green-text': 'var(--z-color-tag-green-text)',
        'tag-orange': 'var(--z-color-tag-orange)',
        'tag-orange-text': 'var(--z-color-tag-orange-text)',
        'tag-red': 'var(--z-color-tag-red)',
        'tag-red-text': 'var(--z-color-tag-red-text)',
        'tag-purple': 'var(--z-color-tag-purple)',
        'tag-purple-text': 'var(--z-color-tag-purple-text)',
        'tag-pink': 'var(--z-color-tag-pink)',
        'tag-pink-text': 'var(--z-color-tag-pink-text)',
        'tag-yellow': 'var(--z-color-tag-yellow)',
        'tag-yellow-text': 'var(--z-color-tag-yellow-text)',
        'tag-teal': 'var(--z-color-tag-teal)',
        'tag-teal-text': 'var(--z-color-tag-teal-text)',
    };

    // 特效色系
    const effectColors = {
        'box-shadow': 'var(--z-color-box-shadow)',
        'box-shadow-popover': 'var(--z-color-box-shadow-popover)',
        'box-shadow-input': 'var(--z-color-box-shadow-input)',
        'opacity-disabled': 'var(--z-color-opacity-disabled)',
        'opacity-hover': 'var(--z-color-opacity-hover)',
        'opacity-active': 'var(--z-color-opacity-active)',
    };

    return (
        <div style={{ padding: '0 0 24px', maxWidth: '100%' }}>
            <div
                style={{
                    marginBottom: '32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ minWidth: 0, flex: '1 1 240px' }}>
                    <AriTypography variant="h1" value="颜色系统" style={{ marginBottom: '8px' }} />
                    <AriTypography 
                        variant="body" 
                        value="Aries Kit 的完整颜色设计系统，支持多主题切换和语义化颜色使用。" 
                        color="secondary" 
                    />
                </div>
                <AriButton 
                    type="default"
                    style={{ flexShrink: 0 }}
                    onClick={toggleTheme}
                >
                    {currentTheme === 'light' ? '切换到暗主题' : '切换到亮主题'}
                </AriButton>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <AriTypography variant="h2" value="使用指南" style={{ marginBottom: '16px' }} />
                <AriTypography variant="body" color="secondary" style={{ marginBottom: '12px' }}>
                    在 SCSS 中使用颜色变量：
                </AriTypography>
                <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <AriCode
                        language="scss"
                        showCopyButton={true}
                        showLineNumbers={true}
                        value={`// 语义化颜色（推荐使用）
color: getVar(color, brand);              // 品牌主色
background-color: getVar(color, bg);      // 背景色
border: 1px solid getVar(color, border); // 边框色

// 功能色
color: getVar(color, text-success);      // 成功文本色
background-color: getVar(color, success); // 成功背景色

// 标签颜色
background-color: getVar(color, tag-blue);      // 蓝色标签背景
color: getVar(color, tag-blue-text);            // 蓝色标签文本`}
                    />
                </div>
            </div>

            <ColorGrid 
                colors={brandColors} 
                title="品牌色系" 
                description="用于体现品牌特色的主要颜色，包括主色调和各种激活状态"
            />

            <ColorGrid 
                colors={functionalColors} 
                title="功能色系" 
                description="用于表达不同功能状态的颜色，如成功、警告、错误和信息提示"
            />

            <ColorGrid 
                colors={backgroundColors} 
                title="背景色系" 
                description="用于各种背景的颜色，包括主要背景、次要背景和激活状态背景"
            />

            <ColorGrid 
                colors={textColors} 
                title="文本色系" 
                description="用于各种文本内容的颜色，包括主要文本、次要文本和特殊状态文本"
            />

            <ColorGrid 
                colors={borderColors} 
                title="边框色系" 
                description="用于边框、分割线等元素的颜色"
            />

            <ColorGrid 
                colors={tagColors} 
                title="标签颜色系统" 
                description="用于标签、标记等组件的预定义颜色方案"
            />

            <ColorGrid 
                colors={effectColors} 
                title="特效色系" 
                description="用于阴影、透明度等视觉效果的颜色和参数"
            />

            <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'var(--z-color-bg-secondary)', borderRadius: '8px' }}>
                <AriTypography variant="h3" value="主题系统说明" style={{ marginBottom: '16px' }} />
                <AriFlex vertical space={12}>
                    <AriTypography variant="body">
                        • 所有颜色都支持亮色和暗色主题自动切换
                    </AriTypography>
                    <AriTypography variant="body">
                        • 优先使用语义化颜色（如 brand、success、text）而非具体颜色值
                    </AriTypography>
                    <AriTypography variant="body">
                        • 点击任意颜色块可复制对应的 SCSS 变量语法
                    </AriTypography>
                    <AriTypography variant="body">
                        • 系统基于 CSS 自定义属性实现，支持运行时主题切换
                    </AriTypography>
                </AriFlex>
            </div>
        </div>
    );
};

export default ColorDoc;
