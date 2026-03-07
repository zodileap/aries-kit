import React from 'react';
import { AriFlex, AriLink, AriContainer, AriIcon, AriTypography } from '@aries-kit/react';

export const BasicLink: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs">默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand">品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success">成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning">警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger">危险链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="info">信息链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="muted">静音链接</AriLink>
    </AriFlex>
);

export const DisabledLink: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" disabled>禁用的默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" disabled>禁用的品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" disabled>禁用的成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning" disabled>禁用的警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger" disabled>禁用的危险链接</AriLink>
    </AriFlex>
);

export const UnderlineLink: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" underline>带下划线的默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" underline>带下划线的品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" underline>带下划线的成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning" underline>带下划线的警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger" underline>带下划线的危险链接</AriLink>
    </AriFlex>
);

export const SizeLink: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" size="small">小尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs">默认尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" size="large">大尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" size="extra-large">超大尺寸链接</AriLink>
    </AriFlex>
);

export const IconLink: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" icon="link">带左侧图标的链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" icon="link" iconPosition="right">带右侧图标的链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" icon="external-link" target="_blank" rel="noreferrer noopener">外部链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" icon="download">下载链接</AriLink>
    </AriFlex>
);

export const BlockLink: React.FC = () => (
    <AriContainer style={{ width: '100%', maxWidth: '300px' }}>
        <AriFlex space={16} vertical>
            <AriTypography variant='h4' value="块级链接示例" />
            <AriLink href="https://aries-react.dev/docs" block>默认块级链接</AriLink>
            <AriLink href="https://aries-react.dev/docs" type="brand" block icon="link">带图标的块级链接</AriLink>
            <AriLink
                href="#"
                className="preview-link-outline"
                onClick={(event) => {
                    event.preventDefault();
                    console.log('link clicked');
                }}
            >
                带 className 与点击事件的链接
            </AriLink>
        </AriFlex>
    </AriContainer>
);
