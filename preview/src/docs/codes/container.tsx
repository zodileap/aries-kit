import { AriContainer, AriFlex, useCss } from '@aries-kit/react';
import { WIDGET_POSITIONS } from '@ari/configs';

export const BasicContainer: React.FC = () => (
    <AriContainer>
        基础容器
    </AriContainer>
);

export const BorderRadiusDemo: React.FC = () => {
    return (
        <AriContainer showBorderRadius={true} shadowMode="always" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--z-color-bg-secondary)' }} >
            圆角容器
        </AriContainer>
    );
};

export const FillDemo: React.FC = () => {
    const cs = useCss("");
    return (
        <>
            <AriFlex vertical>
                <AriContainer
                    fill={false}
                >
                    默认不填充容器
                </AriContainer>

                <div style={{backgroundColor: '#f0f2f5', padding: '1rem'}}>
                    <AriContainer
                        fill={true}
                    >
                        填充容器
                    </AriContainer>
                </div>
            </AriFlex>

        </>
    );
};

export const PositionDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical>
                <AriContainer
                    showBorder={true}
                    showBorderRadius={true}
                    alignment={WIDGET_POSITIONS.LEFT}
                >
                    左对齐
                </AriContainer>
                <div style={{ position: 'relative', width: '100%', marginBottom: '1rem', height: '80px' }}>
                    <AriContainer
                        showBorder={true}
                        showBorderRadius={true}
                        alignment={WIDGET_POSITIONS.CENTER}
                    >
                        居中对齐
                    </AriContainer>
                </div>
            </AriFlex>

        </>
    );
};

export const ShadowDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={24} padding={16}>
                <AriContainer shadowMode="always">
                    <div >
                        始终显示阴影
                    </div>
                </AriContainer>
                <AriContainer shadowMode="active">
                    <div>
                        悬停显示阴影（鼠标移上来试试）
                    </div>
                </AriContainer>
            </AriFlex>
        </>
    );
};

export const BorderDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical>
                <AriContainer showBorder={true}>
                    显示边框
                </AriContainer>
                <AriContainer showBorder={true} borderStyle='dashed'>
                    显示虚线
                </AriContainer>
                <AriContainer showBorder={true} borderStyle='dotted'>
                    显示点线
                </AriContainer>
            </AriFlex>
        </>
    );
}

export const BackgroundDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={16} style={{ backgroundColor: 'var(--z-color-bg-tertiary)', padding: '16px' }}>
                <AriContainer style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
                    默认容器（无背景色）
                </AriContainer>
                <AriContainer 
                    bgVariant="solid" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    实心背景色变体
                </AriContainer>
                <AriContainer 
                    bgVariant="glass" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    玻璃背景色变体
                </AriContainer>
            </AriFlex>
        </>
    );
}

export const CustomBackgroundDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={16}>
                <AriContainer 
                    bgColor="#f0f8ff" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    自定义背景色（浅蓝色）
                </AriContainer>
                <AriContainer 
                    bgColor="var(--color-brand)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    使用主题变量背景色
                </AriContainer>
                <AriContainer 
                    bgColor="linear-gradient(45deg, #ff6b6b, #4ecdc4)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    渐变背景色
                </AriContainer>
            </AriFlex>
        </>
    );
}