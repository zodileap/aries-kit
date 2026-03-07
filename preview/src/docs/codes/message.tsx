import { AriContainer, AriButton, AriFlex, AriMessage } from '@aries-kit/react';
export const BasicMessage: React.FC = () => {
    return (
        <AriContainer>
            <AriFlex space={16}>
                <AriButton
                    label="显示主要信息"
                    onClick={() => {
                        AriMessage.primary('这是一条主要信息');
                    }}
                />
                <AriButton
                    label="显示成功信息"
                    onClick={() => {
                        AriMessage.success('这是一条成功信息');
                    }}
                />
                <AriButton
                    label="显示警告信息"
                    onClick={() => {
                        AriMessage.warning('这是一条警告信息');
                    }}
                />
                <AriButton
                    label="显示错误信息"
                    onClick={() => {
                        AriMessage.error('这是一条错误信息');
                    }}
                />
                <AriButton
                    label="显示提示信息"
                    onClick={() => {
                        AriMessage.info('这是一条提示信息');
                    }}
                />
            </AriFlex>
        </AriContainer>
    );
}

export const DurationDemo: React.FC = () => {
    return (
        <AriContainer>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <AriButton
                    label="显示3秒消息"
                    onClick={() => {
                        AriMessage.info({
                            content: '3秒后自动关闭的消息提示',
                            duration: 3000,
                        })
                    }}
                />
            </div>
        </AriContainer>
    );
};

export const CloseButtonDemo: React.FC = () => {
    return (
        <AriContainer>
            <style>{`
                .preview-message-outline {
                    outline: 2px dashed var(--z-color-warning);
                }
            `}</style>
            <AriButton
                label="显示可关闭消息"
                onClick={() => {
                    AriMessage.info({
                        content: '点击右侧按钮可以关闭此消息',
                        showClose: true,
                        autoClose: false,
                        onClose: () => {
                            console.log('消息被关闭');
                        }
                    })
                }}
            />
            <AriButton
                label="显示自定义类型消息"
                onClick={() => {
                    AriMessage({
                        content: '自定义配置消息',
                        type: 'warning',
                        zIndex: 1400,
                        className: 'preview-message-outline',
                        onClose: () => {
                            console.log('自定义消息关闭');
                        }
                    })
                }}
            />
        </AriContainer>
    );
}

