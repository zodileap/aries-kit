import { AriTag, AriFlex, AriMessage } from '@aries-kit/react';

export const BasicTag: React.FC = () => (
    <AriTag>默认标签</AriTag>
);

export const ClosableDemo: React.FC = () => {
    const handleClose = () => {
        AriMessage.success('标签已关闭');
    };

    return (
        <AriTag closable onClose={handleClose}>
            可关闭标签
        </AriTag>
    );
};

export const ColorTagDemo: React.FC = () => (
    <AriFlex space={8}>
        <AriTag color="primary">主要</AriTag>
        <AriTag color="success">成功</AriTag>
        <AriTag color="warning">警告</AriTag>
        <AriTag color="danger">危险</AriTag>
        <AriTag color="info">信息</AriTag>
        <AriTag color="#f50">自定义颜色 #f50</AriTag>
        <AriTag color="#2db7f5">自定义颜色 #2db7f5</AriTag>
        <AriTag color="#87d068">自定义颜色 #87d068</AriTag>
    </AriFlex>
);

export const IconTagDemo: React.FC = () => (
    <AriFlex space={8}>
        <AriTag icon="info-circle">信息</AriTag>
        <AriTag icon="check-circle">成功</AriTag>
        <AriTag icon="warning-circle">警告</AriTag>
        <AriTag icon="close-circle">错误</AriTag>
        <AriTag icon="star" color="warning">收藏</AriTag>
        <AriTag icon="heart" color="danger">喜爱</AriTag>
    </AriFlex>
);

export const BorderedTagDemo: React.FC = () => (
    <AriFlex space={8}>
        <AriTag bordered>默认边框</AriTag>
        <AriTag bordered color="primary">主要</AriTag>
        <AriTag bordered color="success">成功</AriTag>
        <AriTag bordered color="warning">警告</AriTag>
        <AriTag bordered color="danger">危险</AriTag>
        <AriTag bordered color="info">信息</AriTag>
    </AriFlex>
);

export const CombinationDemo: React.FC = () => (
    <AriFlex space={8}>
        <AriTag bordered color="primary" icon="tag">标签</AriTag>
        <AriTag bordered color="success" icon="check-circle" closable>已完成</AriTag>
        <AriTag bordered color="warning" icon="clock">待处理</AriTag>
        <AriTag bordered color="danger" icon="exclamation-circle" closable>紧急</AriTag>
    </AriFlex>
);
