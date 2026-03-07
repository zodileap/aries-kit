import { AriFlex, AriIcon } from '@aries-kit/react';

export const BasicIcon: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" />
            <AriIcon name="edit" />
            <AriIcon name="delete" />
        </AriFlex>
    </>
);

export const ColorDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" color="#1890ff" />
            <AriIcon name="star" color="#52c41a" />
            <AriIcon name="star" color="#f5222d" />
            <AriIcon name="star" color="#722ed1" />
        </AriFlex>
    </>
);

export const SizeDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" size="xs" />
            <AriIcon name="star" size="sm" />
            <AriIcon name="star" />
            <AriIcon name="star" size="lg" />
            <AriIcon name="star" size="xl" />
            <AriIcon name="star" size="xxl" />
        </AriFlex>

    </>
);

export const StrokeWidthDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" size='xl' strokeWidth={0} />
            <AriIcon name="star" size='xl' strokeWidth={1} />
            <AriIcon name="star" size='xl' strokeWidth={20} />
        </AriFlex>
    </>
);


export const StyleVariantDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" styleVariant="clickable" />
            <AriIcon name="star" styleVariant="filled" />
            <AriIcon name="star" styleVariant="outlined" />
            <AriIcon name="star" styleVariant="circular" />
        </AriFlex>
    </>
);

export const AnimationDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" animation="spinning" />
            <AriIcon name="star" animation="pulse" />
            <AriIcon name="star" animation="shake" />
        </AriFlex>
    </>
);

export const StateDemo: React.FC = () => (
    <>
        <AriFlex space={16}>
            <AriIcon name="star" />
            <AriIcon name="star" state="disabled" />
            <AriIcon name="star" state="loading" />
            <AriIcon name="star" state="error" />
            <AriIcon name="star" state="success" />
        </AriFlex>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            注意：error状态有震动动画和红色，success状态有弹跳动画和绿色
        </p>
    </>
);