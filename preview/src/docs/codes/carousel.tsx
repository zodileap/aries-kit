import { AriCarousel } from '@ari/components';
import React, { useState } from 'react';

const createSlideImage = (label: string, startColor: string, endColor: string) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${startColor}" />
                    <stop offset="100%" stop-color="${endColor}" />
                </linearGradient>
            </defs>
            <rect width="600" height="800" rx="36" fill="url(#bg)" />
            <circle cx="460" cy="180" r="88" fill="rgba(255,255,255,0.18)" />
            <circle cx="150" cy="620" r="110" fill="rgba(255,255,255,0.12)" />
            <text x="64" y="640" fill="white" font-size="72" font-family="Arial, sans-serif" font-weight="700">${label}</text>
            <text x="64" y="704" fill="rgba(255,255,255,0.8)" font-size="26" font-family="Arial, sans-serif">Aries Kit Preview</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// 毛玻璃轮播示例图片数据
const carouselImages = [
    {
        id: 1,
        src: createSlideImage('Bloom', '#667eea', '#764ba2'),
        alt: 'bloom',
        title: 'bloom'
    },
    {
        id: 2,
        src: createSlideImage('Vivia', '#f093fb', '#f5576c'),
        alt: 'vivia',
        title: 'vivia'
    },
    {
        id: 3,
        src: createSlideImage('Petaled', '#4facfe', '#00f2fe'),
        alt: 'petaled',
        title: 'petaled'
    },
    {
        id: 4,
        src: createSlideImage('Nature', '#43cea2', '#185a9d'),
        alt: 'nature',
        title: 'nature'
    },
    {
        id: 5,
        src: createSlideImage('Forest', '#ff9a9e', '#fad0c4'),
        alt: 'forest',
        title: 'forest'
    }
];

const createCarouselFrameStyle = (background: string, height: string) => ({
    width: '100%',
    height,
    minHeight: 320,
    borderRadius: '24px',
    padding: '12px',
    boxSizing: 'border-box' as const,
    overflow: 'hidden' as const,
    background,
});

const createContentSlideStyle = (background: string) => ({
    width: '100%',
    height: '100%',
    background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'clamp(28px, 8vw, 48px)',
    fontWeight: 300,
    letterSpacing: '0.08em',
    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
    borderRadius: '16px',
    padding: '24px',
    boxSizing: 'border-box' as const,
    textAlign: 'center' as const,
});

const tallCarouselHeight = 'clamp(320px, 72vw, 500px)';
const mediumCarouselHeight = 'clamp(300px, 68vw, 420px)';
const compactCarouselHeight = 'clamp(280px, 62vw, 400px)';

// 基础用法示例 - 毛玻璃中心展示轮播
export const BasicExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #667eea 0%, #764ba2 100%)', tallCarouselHeight)}>
        <AriCarousel 
            items={carouselImages} 
            height={tallCarouselHeight}
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);

// 自动播放示例
export const AutoplayExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', tallCarouselHeight)}>
        <AriCarousel 
            items={carouselImages} 
            height={tallCarouselHeight}
            autoplay={true}
            interval={4000}
            pauseOnHover={true}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);

// 无循环播放示例
export const NoLoopExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', tallCarouselHeight)}>
        <AriCarousel 
            items={carouselImages} 
            height={tallCarouselHeight}
            loop={false}
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);

// 自定义指示器示例
export const CustomIndicatorsExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #fa709a 0%, #fee140 100%)', tallCarouselHeight)}>
        <AriCarousel 
            items={carouselImages} 
            height={tallCarouselHeight}
            autoplay={false}
            showArrows={true}
            showIndicators={true}
            renderIndicator={(index, isActive) => (
                <div style={{
                    width: isActive ? '32px' : '16px',
                    height: '6px',
                    borderRadius: '3px',
                    background: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.3s ease',
                    border: isActive ? '2px solid rgba(255, 255, 255, 0.8)' : 'none'
                }} />
            )}
        />
    </div>
);

// 使用子元素的示例
export const ChildrenExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', tallCarouselHeight)}>
        <AriCarousel
            height={tallCarouselHeight}
            autoplay={true}
            interval={3000}
            children={[
                <div key="child-1" style={createContentSlideStyle('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')}>
                轮播内容1
            </div>,
                <div key="child-2" style={createContentSlideStyle('linear-gradient(135deg, #f093fb 0%, #f5576c 100%)')}>
                轮播内容2
            </div>,
                <div key="child-3" style={createContentSlideStyle('linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)')}>
                轮播内容3
            </div>
            ]}
        />
    </div>
);

// 最小化示例
export const MinimalExample: React.FC = () => (
    <div style={createCarouselFrameStyle('linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', compactCarouselHeight)}>
        <AriCarousel 
            items={carouselImages.slice(0, 3)} 
            height={compactCarouselHeight}
            autoplay={false}
            showArrows={false}
            showIndicators={false}
        />
    </div>
);

export const ControlledCarouselExample: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div style={createCarouselFrameStyle('linear-gradient(135deg, #111827 0%, #334155 100%)', mediumCarouselHeight)}>
            <AriCarousel
                items={carouselImages}
                activeIndex={activeIndex}
                defaultActiveIndex={1}
                duration={900}
                onSlideChange={setActiveIndex}
                renderItem={(item, index) => (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '18px',
                        }}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                            right: 0,
                            bottom: 0,
                            padding: 'clamp(12px, 4vw, 20px)',
                            color: '#fff',
                            background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))',
                        }}
                        >
                            第 {index + 1} 张: {item.title}
                        </div>
                    </div>
                )}
                height={mediumCarouselHeight}
            />
        </div>
    );
};
