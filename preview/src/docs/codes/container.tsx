import { AriContainer, AriFlex, AriTypography } from '@aries-kit/react';
import { WIDGET_POSITIONS } from '@ari/configs';

const containerPreviewClassName = 'preview-container-outline';

const containerPreviewStyle = `
.${containerPreviewClassName} {
    outline: 2px dashed var(--z-color-success);
    outline-offset: 4px;
}
`;

export const BasicContainer: React.FC = () => (
    <AriContainer>
        基础容器
    </AriContainer>
);

export const PlainContainerDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriContainer
            variant='plain'
            style={{
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(76, 175, 80, 0.08))',
                padding: 16,
            }}
        >
            <AriTypography variant='caption' value='plain 变体默认移除背景、圆角、边框、阴影和默认 padding，适合作为纯布局容器。' />
        </AriContainer>

        <AriContainer
            variant='plain'
            showBorder
            showBorderRadius
            bgVariant='solid'
            padding={16}
        >
            plain 也可以通过显式传参重新打开边框、圆角与背景。
        </AriContainer>
    </AriFlex>
);

export const PositionDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriContainer
                showBorder
                showBorderRadius
                alignment={WIDGET_POSITIONS.LEFT}
                padding={16}
                style={{ minHeight: '80px' }}
            >
                左对齐
            </AriContainer>

            <AriContainer
                showBorder
                showBorderRadius
                alignment={WIDGET_POSITIONS.CENTER}
                padding={16}
                style={{ minHeight: '80px' }}
            >
                居中对齐
            </AriContainer>

            <div
                style={{
                    position: 'relative',
                    minHeight: 180,
                    border: '1px dashed var(--z-color-border)',
                    borderRadius: 'var(--z-border-radius-container)',
                    padding: 12,
                    boxSizing: 'border-box',
                }}
            >
                <AriContainer
                    positionType='absolute'
                    alignment='bottomRight'
                    width={180}
                    height={90}
                    showBorder
                    showBorderRadius
                    padding={16}
                    bgVariant='solid'
                >
                    absolute + bottomRight
                </AriContainer>
            </div>
        </AriFlex>
    );
};

export const ShadowDemo: React.FC = () => {
    return (
        <AriFlex vertical space={24} padding={16}>
            <AriContainer shadowMode='always' padding={16}>
                始终显示阴影
            </AriContainer>
            <AriContainer shadowMode='active' hoverTransform padding={16}>
                悬停显示阴影并上浮
            </AriContainer>
            <AriContainer shadowMode='never' padding={16} showBorder>
                不显示阴影
            </AriContainer>
        </AriFlex>
    );
};

export const BorderRadiusDemo: React.FC = () => {
    return (
        <AriFlex space={16} wrap>
            <AriContainer
                showBorderRadius
                shadowMode='always'
                padding={16}
                style={{
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--z-color-bg-secondary)',
                    width: 220,
                }}
            >
                默认圆角
            </AriContainer>
            <AriContainer
                showBorder
                showBorderRadius={false}
                padding={16}
                style={{
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--z-color-bg-secondary)',
                    width: 220,
                }}
            >
                关闭圆角
            </AriContainer>
        </AriFlex>
    );
};

export const FillDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriContainer fill={false} showBorder padding={16}>
                默认不填充容器
            </AriContainer>

            <div
                style={{
                    backgroundColor: 'var(--z-color-bg-secondary)',
                    padding: '1rem',
                    height: 180,
                    borderRadius: 'var(--z-border-radius-container)',
                }}
            >
                <AriContainer fill showBorder padding={16}>
                    填充容器
                </AriContainer>
            </div>
        </AriFlex>
    );
};

export const BorderDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriContainer showBorder padding={16}>
                实线边框
            </AriContainer>
            <AriContainer showBorder borderStyle='dashed' padding={16}>
                虚线边框
            </AriContainer>
            <AriContainer showBorder borderStyle='dotted' padding={16}>
                点线边框
            </AriContainer>
        </AriFlex>
    );
};

export const BackgroundDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ backgroundColor: 'var(--z-color-bg-tertiary)', padding: '16px' }}>
            <AriContainer
                style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}
            >
                默认容器（无背景色）
            </AriContainer>
            <AriContainer
                bgVariant='solid'
                style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                实心背景色变体
            </AriContainer>
            <AriContainer
                bgVariant='glass'
                style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                玻璃背景色变体
            </AriContainer>
        </AriFlex>
    );
};

export const CustomBackgroundDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriContainer
                bgColor='#f0f8ff'
                style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                自定义背景色（浅蓝色）
            </AriContainer>
            <AriContainer
                bgColor='linear-gradient(45deg, #ff6b6b, #4ecdc4)'
                style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
            >
                渐变背景色
            </AriContainer>
        </AriFlex>
    );
};

export const SizeAndMaterialDemo: React.FC = () => {
    return (
        <>
            <style>{containerPreviewStyle}</style>
            <AriFlex vertical space={24} padding={16}>
                <AriFlex space={16} wrap>
                    <AriContainer
                        width={220}
                        minWidth={180}
                        maxWidth={260}
                        height={120}
                        minHeight={100}
                        maxHeight={140}
                        padding={16}
                        showBorder
                        bgVariant='solid'
                    >
                        <AriTypography variant='caption' value='width / minWidth / maxWidth / height / minHeight / maxHeight' />
                    </AriContainer>

                    <AriContainer
                        showBorder
                        ghost
                        material='glass'
                        blur
                        overflow='auto'
                        padding={16}
                        className={containerPreviewClassName}
                        style={{
                            width: 240,
                            maxHeight: 140,
                            background:
                                'linear-gradient(135deg, rgba(255, 87, 34, 0.12), rgba(33, 150, 243, 0.12))',
                        }}
                    >
                        <AriTypography variant='caption' value='ghost / material / blur / overflow / className / style' />
                        <AriTypography variant='caption' value='这里放入多行文本，方便观察滚动与玻璃材质的视觉差异。' />
                        <AriTypography variant='caption' value='当内容超出高度时，overflow="auto" 会让容器内部滚动。' />
                    </AriContainer>
                </AriFlex>
            </AriFlex>
        </>
    );
};
