import React from 'react';
import { AriImage, AriContainer, AriFlex, AriIcon, AriTypography } from '@aries-kit/react';

export const BackgroundDemo: React.FC = () => (
    <AriContainer style={{ width: '300px', height: '200px' }}>
        <AriImage
            fileName="empty.png"
            usage="background"
        />
    </AriContainer>
);

export const BasicImage: React.FC = () => (
    <AriImage
        fileName="empty.png"
        usage="image"
        alt="基础示例图片"
        className="preview-image-outline"
        style={{ width: '200px' }}
    />
);

export const FallbackDemo: React.FC = () => (
    <AriFlex space={16} vertical justify='center'>
        <AriImage
            fileName="non-existent-image.png"
            usage="image"
            style={{ width: '200px', height: '150px' }}
            fallback={
                <AriContainer style={{ 
                    width: '200px', 
                    height: '150px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    border: '1px dashed #d9d9d9',
                    borderRadius: '4px'
                }}>
                    <AriFlex vertical justify="center">
                        <AriIcon name="image" style={{ fontSize: '32px', color: '#999' }} />
                        <AriTypography variant='caption' value='图片加载失败' />
                    </AriFlex>
                </AriContainer>
            }
        />
        
        <AriImage
            fileName="another-missing-image.jpg"
            usage="image"
            style={{ width: '200px', height: '150px' }}
            fallback="图片无法显示"
        />
    </AriFlex>
);

export const PlaceholderDemo: React.FC = () => (
    <AriImage
        fileName="empty.png"
        usage="image"
        style={{ width: '300px' }}
        placeholder
    />
);

export const PreviewDemo: React.FC = () => (
    <AriImage
        fileName="empty.png"
        usage="image"
        style={{ width: '250px' }}
        preview
    />
);

export const SrcDemo: React.FC = () => (
    <AriFlex space={16}>
        <AriImage
            src="/assets/logo/logo.png"
            usage="image"
            style={{ width: '200px' }}
        />
        
        <AriImage
            src="/assets/images/empty.png"
            usage="background"
            style={{ width: '300px', height: '200px' }}
        />
    </AriFlex>
);
