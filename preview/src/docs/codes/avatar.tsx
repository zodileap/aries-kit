import { AriFlex, AriAvatar, AriTypography } from '@aries-kit/react';

export const BasicAvatar: React.FC = () => (
    <>
        <style>{`
            .preview-avatar-outline {
                outline: 2px dashed var(--z-color-primary);
                outline-offset: 4px;
            }
        `}</style>
        <AriFlex space={16} align="center">
            <AriAvatar size='xs' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="默认图片头像" className="preview-avatar-outline" />
            <AriAvatar icon="person" />
            <AriAvatar text="用户" />
            <AriAvatar children="U" />
        </AriFlex>
    </>
);

export const ShapeDemo: React.FC = () => (
    <>
        <AriFlex space={16} align="center">
            <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="circle" />
            <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square" />
        </AriFlex>
    </>
);

export const SizeDemo: React.FC = () => (
    <>
        <AriFlex space={16} align="center">
            <AriAvatar size="xs" icon="person" />
            <AriAvatar size="sm" icon="person" />
            <AriAvatar size="default" icon="person" />
            <AriAvatar size="lg" icon="person" />
            <AriAvatar size="xl" icon="person" />
            <AriAvatar size="xxl" icon="person" />
        </AriFlex>
    </>
);

export const CustomStyleDemo: React.FC = () => (
    <>
        <AriFlex space={16} align="center">
            <AriAvatar backgroundColor="#1890ff" icon="person" textColor="#ffffff" />
            <AriAvatar backgroundColor="#52c41a" text="用户" textColor="#ffffff" />
            <AriAvatar backgroundColor="#f5222d" icon="star" textColor="#ffffff" />
            <AriAvatar backgroundColor="#722ed1" text="ZL" textColor="#ffffff" />
        </AriFlex>
    </>
);

export const TypeDemo: React.FC = () => (
    <>
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <AriTypography variant='h3'>图片头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar icon="person" />
                <AriTypography variant='h3'>图标头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar text="ZL" />
                <AriTypography variant='h3'>文字头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar>
                    <span style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</span>
                </AriAvatar>
                <AriTypography variant='h3'>自定义内容</AriTypography>
            </AriFlex>
        </AriFlex>
    </>
);
