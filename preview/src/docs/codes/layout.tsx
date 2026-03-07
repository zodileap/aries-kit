import React, { useState } from 'react';
import { AriLayout, AriButton, AriContainer, AriFlex, AriTypography, useLayout, AriLayoutArea, useCss } from '@aries-kit/react';
import './style.scss';

export const BasicLayout: React.FC = () => {
    const cs = useCss("");
    return (
        <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
            <AriLayout
                left={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg')}`, height: '100%' }}>左侧区域</AriContainer>}
                center={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg', 'active')}`, height: '100%' }}>中间区域</AriContainer>}
                right={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg',)}`, height: '100%' }}>右侧区域</AriContainer>}
            />
        </AriContainer>
    )
}

export const CustomLayout: React.FC = () => {
    const cs = useCss("");
    const [visibleAreas, setVisibleAreas] = useState(['left', 'center', 'right']);

    const handleVisibilityChange = (areas: string[]) => {
        setVisibleAreas(areas);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center', 'right'])}
                    color={visibleAreas.length === 3 ? 'primary' : 'default'}>
                    显示全部
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center'])}
                    color={visibleAreas.length === 1 && visibleAreas[0] === 'center' ? 'primary' : 'default'}>
                    仅显示中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('left') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示左侧和中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center', 'right'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('right') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示中间和右侧
                </AriButton>
            </AriFlex>

            <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
                <AriLayout
                    key={visibleAreas.join('-')}
                    defaultVisibleAreas={visibleAreas as AriLayoutArea[]}
                    onAreaVisibilityChange={setVisibleAreas as (areas: AriLayoutArea[]) => void}
                    left={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg')}`, height: '100%' }}>左侧区域</AriContainer>}
                    center={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg', 'active')}`, height: '100%' }}>中间区域</AriContainer>}
                    right={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg')}`, height: '100%' }}>右侧区域</AriContainer>}
                />
            </AriContainer>
        </AriFlex>
    );
};


export const ContextLayout: React.FC = () => {
    const cs = useCss("");

    const ControlPanel: React.FC = () => {
        // 使用布局钩子获取控制方法
        const { setArea, isVisible } = useLayout();

        return (
            <div style={{ backgroundColor: `${cs.getCssVarName('color', 'bg', 'active')}`, height: '100%' }}>
                <AriButton
                    onClick={() => setArea('left')}
                    label={isVisible('left') ? "隐藏左侧面板" : "显示左侧面板"}
                />

                <AriButton
                    onClick={() => setArea('right')}
                    label={isVisible('right') ? "隐藏右侧面板" : "显示右侧面板"}
                />
            </div>
        );
    };
    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='h4' value="使用 LayoutContext 控制区域可见性" />
            <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
                <AriLayout
                    left={
                        <AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg')}`, height: '100%', padding: '16px' }}>
                            左侧区域
                        </AriContainer>
                    }
                    leftWidth='250px'
                    center={<ControlPanel />}
                    right={<AriContainer className="layout-demo-box" style={{ backgroundColor: `${cs.getCssVarName('color', 'bg')}`, height: '100%', padding: '16px' }}>右侧区域</AriContainer>}
                    rightWidth='250px'
                />
            </AriContainer>
        </AriFlex>
    )

}