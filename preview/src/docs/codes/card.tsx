import { AriCard, AriContainer, AriFlex, AriTypography } from '@aries-kit/react';

const cardPreviewClassName = 'preview-card-outline';

const cardPreviewStyle = `
.${cardPreviewClassName} {
    outline: 2px dashed var(--z-color-primary);
    outline-offset: 4px;
}
`;

export const BasicCard: React.FC = () => {
    return (
        <AriFlex vertical space={24} padding={20}>
            <AriCard>
                <AriTypography variant='caption' value='这是一个基础的卡片组件，默认带有阴影和圆角效果。' />
                <AriTypography variant='caption' value='卡片组件继承自 Container 组件，保留了所有布局与表面属性。' />
                <AriTypography variant='caption' value='你可以在卡片中放置文字、图片、表格或操作区。' />
            </AriCard>
        </AriFlex>
    );
};

export const CardSurfaceDemo: React.FC = () => {
    return (
        <>
            <style>{cardPreviewStyle}</style>
            <AriFlex vertical space={24} padding={20}>
                <AriCard
                    title='带标题的玻璃卡片'
                    shadowMode='active'
                    hoverTransform
                    showBorder
                    borderStyle='dashed'
                    showBorderRadius
                    material='glass'
                    bgVariant='glass'
                    blur
                    className={cardPreviewClassName}
                    style={{
                        background: 'linear-gradient(135deg, rgba(98, 0, 238, 0.18), rgba(0, 188, 212, 0.14))',
                    }}
                >
                    <AriTypography variant='caption' value='悬停时可看到 active 阴影与位移。' />
                    <AriTypography variant='caption' value='className 会给卡片增加外部虚线轮廓，style 会覆盖表面背景。' />
                </AriCard>

                <AriFlex space={16} wrap>
                    <AriCard
                        title='无圆角实色卡片'
                        showBorder
                        showBorderRadius={false}
                        borderStyle='solid'
                        shadowMode='never'
                        bgColor='rgba(255, 193, 7, 0.18)'
                        width={260}
                        height={160}
                    >
                        <AriTypography variant='caption' value='通过 showBorderRadius={false} 关闭圆角。' />
                    </AriCard>

                    <AriCard
                        title='Ghost 溢出卡片'
                        ghost
                        overflow='auto'
                        minWidth={220}
                        maxWidth={260}
                        minHeight={120}
                        maxHeight={160}
                        height={140}
                        showBorder
                    >
                        <AriTypography variant='caption' value='ghost 会让卡片更透明，overflow="auto" 会在内容过多时出现滚动。' />
                        <AriTypography variant='caption' value='这里刻意放入多段说明文本，以便观察最小/最大尺寸与滚动行为。' />
                        <AriTypography variant='caption' value='当内容超出高度限制时，卡片内部会保持在设定尺寸内。' />
                    </AriCard>
                </AriFlex>
            </AriFlex>
        </>
    );
};

export const CardLayoutDemo: React.FC = () => {
    return (
        <AriFlex vertical space={24} padding={20}>
            <AriContainer
                showBorder
                padding={16}
                style={{
                    minHeight: 260,
                    position: 'relative',
                    background:
                        'linear-gradient(135deg, rgba(0, 150, 136, 0.08), rgba(63, 81, 181, 0.08))',
                }}
            >
                <AriTypography variant='caption' value='下面的卡片使用 positionType="absolute" 与 alignment="bottomRight" 固定在右下角。' />
                <AriCard
                    title='定位卡片'
                    positionType='absolute'
                    alignment='bottomRight'
                    width={220}
                    minWidth={180}
                    maxWidth={240}
                    height={130}
                    minHeight={120}
                    maxHeight={150}
                    showBorder
                    bgVariant='solid'
                >
                    <AriTypography variant='caption' value='positionType 与 alignment 常用于浮层式信息卡。' />
                </AriCard>
            </AriContainer>

            <div
                style={{
                    height: 220,
                    border: '1px dashed var(--z-color-border)',
                    borderRadius: 'var(--z-border-radius-container)',
                    padding: 12,
                    boxSizing: 'border-box',
                }}
            >
                <AriCard
                    title='填充父容器'
                    fill
                    showBorder
                    bgColor='rgba(76, 175, 80, 0.12)'
                >
                    <AriTypography variant='caption' value='fill 会让卡片占满父容器的可用宽高。' />
                </AriCard>
            </div>
        </AriFlex>
    );
};
