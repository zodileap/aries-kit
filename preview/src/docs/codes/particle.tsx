import React from 'react';
import { AriParticle, AriCard, AriTypography } from '@aries-kit/react';

// 基础示例
export const BasicParticle: React.FC = () => (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <AriParticle 
            count={150}
            sizeRange={[3, 25]}
            speedRange={[0.1, 0.3]}
            glowIntensity={1.2}
            interactive={true}
            interactionRadius={120}
            alphaRange={[0.4, 0.9]}
            blurAmount={20}
            backgroundColor="#000000"
        >
            <AriCard style={{ 
                maxWidth: 350, 
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
            }}>
                <AriTypography style={{ 
                    color: '#ffffff', 
                    fontSize: '28px', 
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                    marginBottom: '10px'
                }}>
                    五彩斑斓粒子
                </AriTypography>
                <AriTypography style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    canvas五彩斑斓的粒子动画特效，具有虚化发光效果，鼠标交互时粒子会产生排斥运动
                </AriTypography>
            </AriCard>
        </AriParticle>
    </div>
);