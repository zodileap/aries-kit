import { AriSticky, AriContainer, AriTypography, AriFlex } from '@aries-kit/react';
import React, { useRef, useState } from 'react';
import './style.scss';

export const BasicSticky: React.FC = () => (
    <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky zIndex={200}>
            <AriContainer 
                bgColor="#1677ff" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                我会粘在顶部
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);

export const PositionSticky: React.FC = () => (
    <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky position="top" offset={0}>
            <AriContainer 
                bgColor="#1677ff" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                顶部粘性 (Top)
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, padding: 16 }}>
            <AriTypography value="内容区域" />
        </AriContainer>
        
        <AriSticky position="bottom" offset={0}>
            <AriContainer 
                bgColor="#52c41a" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                底部粘性 (Bottom)
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);

export const OffsetSticky: React.FC = () => (
    <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky offset={20}>
            <AriContainer 
                bgColor="#ff4d4f" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                距顶部20px
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);

export const StickyStateDemo: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <AriContainer
            ref={scrollContainerRef}
            style={{
                height: 400,
                overflow: 'auto',
                position: 'relative',
                border: '1px solid #eee'
            }}
        >
            <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
                <AriTypography value="向下滚动查看效果" />
            </AriContainer>

            <AriSticky
                onStickyChange={setIsSticky}
                enabled={true}
                scrollContainer={scrollContainerRef}
            >
                <AriContainer
                    bgColor={isSticky ? '#722ed1' : '#faad14'}
                    style={{
                        padding: '10px 20px',
                        color: 'white',
                        transition: 'background-color 0.3s'
                    }}
                >
                    {isSticky ? '我现在是粘性状态' : '我现在是普通状态'}
                </AriContainer>
            </AriSticky>

            <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
                <AriTypography value="继续向下滚动..." />
            </AriContainer>
        </AriContainer>
    );
};

export const DisabledSticky: React.FC = () => {
    const [enabled, setEnabled] = useState(true);
    
    return (
        <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
            <AriContainer style={{ padding: '10px 0' }}>
                <button 
                    onClick={() => setEnabled(!enabled)} 
                    style={{ 
                        padding: '5px 10px', 
                        background: enabled ? '#52c41a' : '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {enabled ? '禁用粘性' : '启用粘性'}
                </button>
            </AriContainer>
            
            <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
                <AriTypography value="向下滚动查看效果" />
            </AriContainer>
            
            <AriSticky enabled={enabled}>
                <AriContainer 
                    bgColor="#1677ff" 
                    style={{ padding: '10px 20px', color: 'white' }}
                >
                    {enabled ? '粘性已启用' : '粘性已禁用'}
                </AriContainer>
            </AriSticky>
            
            <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
                <AriTypography value="继续向下滚动..." />
            </AriContainer>
        </AriContainer>
    );
};
