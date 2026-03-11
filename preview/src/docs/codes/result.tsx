import React from 'react';
import { AriResult, AriButton, AriFlex } from '@aries-kit/react';

export const BasicResult: React.FC = () => (
  <AriResult
    className="preview-result-basic"
    title="基础结果"
    subTitle="这是一条基础结果的描述文本"
  />
);

export const StatusResults: React.FC = () => (
  <AriFlex vertical space={24}>
    <AriResult
      status="success"
      title="成功状态"
      subTitle="这是一条成功状态的描述文本"
    />
    <AriResult
      status="error"
      title="错误状态"
      subTitle="这是一条错误状态的描述文本"
    />
    <AriResult
      status="info"
      title="信息状态"
      subTitle="这是一条信息状态的描述文本"
    />
    <AriResult
      status="warning"
      title="警告状态"
      subTitle="这是一条警告状态的描述文本"
    />
  </AriFlex>
);

export const CustomIcon: React.FC = () => (
  <AriResult
    title="自定义图标"
    subTitle="使用自定义图标替代默认状态图标"
    icon="sentiment_satisfied"
  />
);

export const CustomImage: React.FC = () => (
  <AriResult
    title="自定义图片"
    subTitle="使用自定义图片替代默认图标"
    image="/assets/logo/logo.png"
  />
);

export const ExtraContent: React.FC = () => (
  <AriResult
    status="success"
    title="提交成功"
    subTitle="提交结果已经通过审核"
    extra={
      <AriFlex space={8}>
        <AriButton color="primary">返回首页</AriButton>
        <AriButton>查看详情</AriButton>
      </AriFlex>
    }
  >
    <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
      这里可以放置一些额外的内容说明，结果详情等
    </div>
  </AriResult>
);
