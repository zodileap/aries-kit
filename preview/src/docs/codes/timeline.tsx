import React from 'react';
import { AriTimeline, AriContainer, AriFlex, AriTypography, AriIcon, AriCard } from '@aries-kit/react';
import './style.scss';

export const BasicTimeline: React.FC = () => (
    <AriContainer>
        <AriTimeline 
            items={[
                {
                    label: '2024-01-10',
                    children: <AriTypography variant='h3'>创建项目</AriTypography>
                },
                {
                    label: '2024-02-15',
                    children: <AriTypography variant='h3'>完成第一阶段开发</AriTypography>
                },
                {
                    label: '2024-04-30',
                    children: <AriTypography variant='h3'>测试和修复</AriTypography>
                },
                {
                    label: '2024-05-10',
                    children: <AriTypography variant='h3'>发布</AriTypography>
                }
            ]}
        />
    </AriContainer>
);

export const DirectionTimeline: React.FC = () => (
    <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">垂直方向（默认）</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                direction="vertical"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">水平方向</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布</AriTypography>
                    }
                ]}
                direction="horizontal"
            />
        </AriContainer>
    </AriFlex>
);

export const ModeTimeline: React.FC = () => (
    <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">左侧模式（默认）</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    }
                ]}
                mode="left"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">右侧模式</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    }
                ]}
                mode="right"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">居中模式</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '2024-05-10',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                mode="center"
            />
        </AriContainer>
    </AriFlex>
);

export const CustomNodeTimeline: React.FC = () => (
    <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">自定义颜色</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '进行中',
                        children: <AriTypography variant='h3'>当前任务</AriTypography>,
                        color: 'primary'
                    },
                    {
                        label: '成功',
                        children: <AriTypography variant='h3'>已完成任务</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '警告',
                        children: <AriTypography variant='h3'>需注意任务</AriTypography>,
                        color: 'warning'
                    },
                    {
                        label: '错误',
                        children: <AriTypography variant='h3'>有问题任务</AriTypography>,
                        color: 'danger'
                    },
                    {
                        label: '信息',
                        children: <AriTypography variant='h3'>参考信息</AriTypography>,
                        color: 'info'
                    },
                    {
                        label: '自定义色彩',
                        children: <AriTypography variant='h3'>自定义颜色</AriTypography>,
                        color: '#8A2BE2'
                    }
                ]}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">自定义图标</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '创建时间',
                        children: <AriTypography variant='h3'>2024-01-10 创建项目</AriTypography>,
                        icon: <AriIcon name="clock" />
                    },
                    {
                        label: '完成阶段',
                        children: <AriTypography variant='h3'>2024-02-15 完成第一阶段</AriTypography>,
                        icon: <AriIcon name="check-circle" />,
                        color: 'success'
                    },
                    {
                        label: '注意事项',
                        children: <AriTypography variant='h3'>2024-04-30 测试中发现问题</AriTypography>,
                        icon: <AriIcon name="exclamation-circle" />,
                        color: 'warning'
                    },
                    {
                        label: '参考信息',
                        children: <AriTypography variant='h3'>2024-05-10 发布相关信息</AriTypography>,
                        icon: <AriIcon name="info-circle" />,
                        color: 'info'
                    }
                ]}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">节点类型</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '默认填充节点',
                        children: <AriTypography variant='h3'>type: filled (默认)</AriTypography>,
                        type: 'filled'
                    },
                    {
                        label: '空心节点',
                        children: <AriTypography variant='h3'>type: hollow</AriTypography>,
                        type: 'hollow',
                        color: 'primary'
                    },
                    {
                        label: '无边框节点',
                        children: <AriTypography variant='h3'>type: borderless</AriTypography>,
                        type: 'borderless',
                        color: 'success'
                    }
                ]}
            />
        </AriContainer>
    </AriFlex>
);

export const AdvancedTimeline: React.FC = () => (
    <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">倒序排列</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                reverse={true}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">虚线连接</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '已完成',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '已完成',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '进行中',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>,
                        color: 'primary',
                        dashed: true
                    },
                    {
                        label: '未开始',
                        children: <AriTypography variant='h3'>准备发布</AriTypography>,
                        color: 'info'
                    }
                ]}
                lastDashed={true}
            />
        </AriContainer>
    </AriFlex>
);

export const RichContentTimeline: React.FC = () => (
    <AriContainer>
        <AriTimeline 
            items={[
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-01-10</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard  style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>项目启动</AriTypography>
                                <AriTypography variant='h3'>确定项目需求，开始规划设计</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 张三</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="file-text" />,
                    color: 'primary'
                },
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-02-15</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard  style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>开发阶段</AriTypography>
                                <AriTypography variant='h3'>完成核心功能开发，进入内部测试</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 李四</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="setting" />,
                    color: 'success'
                },
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-04-30</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>测试阶段</AriTypography>
                                <AriTypography variant='h3'>进行全面测试，修复bug，优化性能</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 王五</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="exclamation-circle" />,
                    color: 'warning',
                    dashed: true
                }
            ]}
        />
    </AriContainer>
);
