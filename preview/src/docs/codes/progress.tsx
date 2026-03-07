import React from 'react';
import { AriProgress, AriFlex } from '@aries-kit/react';
import './style.scss';

export const BasicProgress: React.FC = () => (
    <AriFlex space={16} vertical>
        <AriProgress percent={30} />
        <AriProgress percent={50} status="active" />
        <AriProgress percent={70} status="exception" />
        <AriProgress percent={100} />
    </AriFlex>
);

export const CircleProgress: React.FC = () => (
    <AriFlex space={24}>
        <AriProgress type="circle" percent={30} />
        <AriProgress type="circle" percent={70} status="exception" />
        <AriProgress type="circle" percent={100} />
    </AriFlex>
);

export const DashboardProgress: React.FC = () => (
    <AriFlex space={24}>
        <AriProgress type="dashboard" percent={30} />
        <AriProgress type="dashboard" percent={70} gapDegree={30} />
        <AriProgress type="dashboard" percent={100} gapPosition="top" />
    </AriFlex>
);

export const SizeDemo: React.FC = () => (
    <AriFlex vertical space={24}>
        <AriFlex space={24}>
            <AriProgress type="circle" percent={75} size="sm" />
            <AriProgress type="circle" percent={75} size="default" />
            <AriProgress type="circle" percent={75} size="lg" />
        </AriFlex>
        
        <AriFlex vertical space={16}>
            <AriProgress percent={50} size="sm" />
            <AriProgress percent={50} size="default" />
            <AriProgress percent={50} size="lg" strokeWidth={12} />
        </AriFlex>
    </AriFlex>
);

export const ColorDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriProgress percent={40} strokeColor="#1890ff" trailColor="#e6f4ff" />
        <AriProgress percent={60} strokeColor="#52c41a" />
        <AriProgress 
            percent={80} 
            strokeColor={{
                from: '#108ee9',
                to: '#87d068',
            }} 
        />
        <AriProgress 
            type="circle" 
            percent={90} 
            strokeColor="#722ed1" 
        />
    </AriFlex>
);

export const StepsDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriProgress percent={60} steps={5} showInfo={false} />
        <AriProgress percent={30} steps={10} size="sm" stepSmall />
        <AriProgress percent={100} steps={10} strokeColor="#52c41a" />
        <AriProgress percent={60} steps={5} strokeColor="#f5222d" status="exception" />
    </AriFlex>
);

export const FormatDemo: React.FC = () => (
    <AriFlex space={24}>
        <AriProgress 
            type="circle" 
            percent={75} 
            format={(percent) => `${percent} 天`} 
        />
        <AriProgress 
            type="dashboard" 
            percent={80} 
            format={() => '优秀'} 
        />
        <AriProgress 
            percent={50} 
            format={(percent) => {
                if (percent < 30) return '低';
                if (percent < 70) return '中';
                return '高';
            }} 
        />
    </AriFlex>
);

export const SuccessSegmentDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriProgress percent={60} successPercent={30} />
        <AriProgress percent={70} successPercent={50} strokeRounded />
        <AriProgress type="circle" percent={80} successPercent={40} />
        <AriProgress type="dashboard" percent={90} successPercent={60} />
    </AriFlex>
);
