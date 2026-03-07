import { AriCarousel } from '@ari/components';
import React, { useState } from 'react';

// 毛玻璃轮播示例图片数据
const carouselImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&crop=center',
        alt: 'bloom',
        title: 'bloom'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop&crop=center',
        alt: 'vivia',
        title: 'vivia'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=800&fit=crop&crop=center',
        alt: 'petaled',
        title: 'petaled'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=800&fit=crop&crop=center',
        alt: 'nature',
        title: 'nature'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=800&fit=crop&crop=center',
        alt: 'forest',
        title: 'forest'
    }
];

// 基础用法示例 - 毛玻璃中心展示轮播
export const BasicExample: React.FC = () => (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);

// 自动播放示例
export const AutoplayExample: React.FC = () => (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
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
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            loop={false}
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);

// 自定义指示器示例
export const CustomIndicatorsExample: React.FC = () => (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
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
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
        <AriCarousel
            height="500px"
            autoplay={true}
            interval={3000}
            children={[
                <div key="child-1" style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容1
            </div>,
                <div key="child-2" style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容2
            </div>,
                <div key="child-3" style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容3
            </div>
            ]}
        />
    </div>
);

// 最小化示例
export const MinimalExample: React.FC = () => (
    <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}>
        <AriCarousel 
            items={carouselImages.slice(0, 3)} 
            height="400px"
            autoplay={false}
            showArrows={false}
            showIndicators={false}
        />
    </div>
);

export const ControlledCarouselExample: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div style={{ width: '100%', height: '420px', background: 'linear-gradient(135deg, #111827 0%, #334155 100%)' }}>
            <AriCarousel
                items={carouselImages}
                activeIndex={activeIndex}
                defaultActiveIndex={1}
                duration={900}
                onChange={setActiveIndex}
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
                                padding: '20px',
                                color: '#fff',
                                background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))',
                            }}
                        >
                            第 {index + 1} 张: {item.title}
                        </div>
                    </div>
                )}
                height={420}
            />
        </div>
    );
};
