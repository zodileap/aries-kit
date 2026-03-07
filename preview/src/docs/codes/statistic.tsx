import React from 'react';
import { AriIcon } from '@ari/components/icon';
import { AriStatistic, AriCountdown } from '@ari/components/statistic';
import { AriFlex } from '@ari/components/flex';
import { AriContainer } from '@ari/components/container';
import { AriTypography } from '@ari/components/typography';
import { AriRow, AriCol } from '@ari/components/grid';

export const BasicStatistic: React.FC = () => {
    return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="活跃用户"
                value={112893}
                valueStyle={{ color: 'var(--z-color-primary)' }}
            />
            <AriStatistic
                title="反馈数"
                value={1128}
                prefix={<AriIcon name="attach_email" />}
            />
            <AriStatistic
                title="完成率"
                value={93.5}
                suffix="%"
                precision={1}
            />
        </AriFlex>
    );
};

export const StatisticWithFormat: React.FC = () => {
    return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="数值格式化"
                value={1234567.89}
                precision={2}
            />
            <AriStatistic
                title="自定义分隔符"
                value={1234567.89}
                groupSeparator=" "
                decimalSeparator="."
                precision={2}
            />
            <AriStatistic
                title="自定义格式化函数"
                value={9527}
                formatter={(value) => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
        </AriFlex>
    );
};

export const StatisticSize: React.FC = () => {
    return (
        <AriFlex space={24} vertical>
            <AriStatistic
                title="小尺寸"
                value={128.56}
                size="small"
                prefix={<AriIcon name="star" />}
            />
            <AriStatistic
                title="默认尺寸"
                value={9527}
                prefix={<AriIcon name="star" />}
            />
            <AriStatistic
                title="大尺寸"
                value={10086}
                size="large"
                prefix={<AriIcon name="star" />}
            />
        </AriFlex>
    );
};

export const StatisticColor: React.FC = () => {
    return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="默认"
                value={1234}
            />
            <AriStatistic
                title="主色"
                value={1234}
                color="primary"
            />
            <AriStatistic
                title="成功"
                value={1234}
                color="success"
            />
            <AriStatistic
                title="警告"
                value={1234}
                color="warning"
            />
            <AriStatistic
                title="危险"
                value={1234}
                color="danger"
            />
            <AriStatistic
                title="信息"
                value={1234}
                color="info"
            />
        </AriFlex>
    );
};

export const StatisticLayout: React.FC = () => {
    return (
        <AriFlex space={24} vertical>
            <AriTypography variant='h4' value="垂直布局" />
            <AriStatistic
                title="垂直布局"
                value={1234}
                prefix={<AriIcon name="trending_up" />}
                suffix={<AriIcon name="arrow_outward" />}
            />
            
            <AriTypography variant='h4' value="内联布局" />
            <AriStatistic
                title="内联布局"
                value={1234}
                layout="inline"
                prefix={<AriIcon name="trending_up" />}
                suffix={<AriIcon name="arrow_outward" />}
            />
        </AriFlex>
    );
};

export const StatisticAlign: React.FC = () => {
    return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="左对齐（默认）"
                        value={1234}
                        align="left"
                    />
                </AriContainer>
            </AriCol>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="居中"
                        value={1234}
                        align="center"
                    />
                </AriContainer>
            </AriCol>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="右对齐"
                        value={1234}
                        align="right"
                    />
                </AriContainer>
            </AriCol>
        </AriRow>
    );
};

export const StatisticLoading: React.FC = () => {
    return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="加载中"
                value={1234}
                loading={true}
            />
            <AriStatistic
                title="加载中"
                value={5678}
                loading={true}
                size="large"
            />
        </AriFlex>
    );
};

export const CountdownDemo: React.FC = () => {
    return (
        <AriFlex space={24} vertical>
            <AriTypography variant='h4' value="基本倒计时" />
            <AriFlex space={24} wrap>
                <AriCountdown
                    title="秒倒计时"
                    value={Date.now() + 10000}
                    format="ss秒"
                    onFinish={() => console.log('倒计时完成!')}
                />
                <AriCountdown
                    title="标准倒计时"
                    value={Date.now() + 1000 * 60 * 60 * 2}
                    format="HH:mm:ss"
                />
            </AriFlex>
            
            <AriTypography variant='h4' value="自定义格式" />
            <AriFlex space={24} wrap>
                <AriCountdown
                    title="天时分秒"
                    value={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30}
                    format="D天 H时 m分 s秒"
                />
                <AriCountdown
                    title="带前缀和后缀"
                    value={Date.now() + 1000 * 60 * 60 * 24 * 2}
                    format="DD天 HH:mm:ss"
                    prefix={<AriIcon name="timer" />}
                    suffix="后结束"
                />
            </AriFlex>
        </AriFlex>
    );
};
