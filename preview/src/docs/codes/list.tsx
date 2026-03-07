import { AriList, AriListItem, AriFlex, AriButton, AriAvatar, AriTag, AriSpin, AriTypography, AriImage, AriEmpty } from '@aries-kit/react';
import React, { useState } from 'react';

export const BasicList: React.FC = () => {
    const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发",
        "拥有完善的文档和示例"
    ];

    return (
        <AriList
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};

export const BorderedList: React.FC = () => {
    const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发",
        "拥有完善的文档和示例"
    ];

    return (
        <AriList
            bordered
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};

export const SizeList: React.FC = () => {
    const data = ["列表项内容"];

    return (
        <AriFlex space={16} vertical>
            <AriList
                size="sm"
                bordered
                header="小尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
            <AriList
                size="md"
                bordered
                header="中尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
            <AriList
                size="lg"
                bordered
                header="大尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
        </AriFlex>
    );
};

export const HeaderFooterList: React.FC = () => {
    const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发"
    ];

    return (
        <AriList
            bordered
            header={<div style={{ fontWeight: 'bold' }}>列表标题</div>}
            footer={<div>列表底部</div>}
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};

export const EmptyList: React.FC = () => {
    return (
        <AriFlex space={16} vertical>
            <AriList 
                bordered
                header="默认空状态"
                dataSource={[]}
            />
            <AriList 
                bordered
                header="自定义空状态"
                dataSource={[]}
                emptyMessage={
                    <AriEmpty 
                        description="暂无列表数据"
                        image="https://placehold.co/96x96/png"
                    />
                }
            />
        </AriFlex>
    );
};

export const LoadingList: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发"
    ];

    return (
        <AriFlex space={16} vertical>
            <AriButton onClick={() => setLoading(!loading)}>
                {loading ? '停止加载' : '开始加载'}
            </AriButton>
            <AriList
                bordered
                loading={loading}
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
        </AriFlex>
    );
};

export const ListItemDemo: React.FC = () => {
    const data = [1, 2, 3];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem 
                    key={item}
                    split={index < data.length - 1}
                    actions={[
                        <AriButton key="edit" type="text">编辑</AriButton>,
                        <AriButton key="delete" type="text">删除</AriButton>
                    ]}
                    extra={<AriTag>标签 {item}</AriTag>}
                >
                    <AriFlex align="center" space={8}>
                        <AriAvatar>{item}</AriAvatar>
                        <div>列表项 {item} 的内容</div>
                    </AriFlex>
                </AriListItem>
            ))}
        </AriList>
    );
};

export const ComplexList: React.FC = () => {
    const data = [
        {
            title: 'Aries Kit',
            description: '面向 React 的前端基础库，提供组件、hooks 与基础交互能力',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['React', 'Hooks']
        },
        {
            title: '组件与交互',
            description: '覆盖常用组件场景，支持响应式布局、主题定制与细粒度交互',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['UI', '组件']
        },
        {
            title: '主题与样式',
            description: '内置图标、颜色、排版与样式变量，方便建立一致的前端体验',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['Theme', 'Styles']
        }
    ];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem
                    key={item.title}
                    split={index < data.length - 1}
                    actions={[
                        <AriButton key="view" type="text">查看</AriButton>,
                        <AriButton key="edit" type="text">编辑</AriButton>
                    ]}
                    extra={
                        <AriImage
                            width={120}
                            height={80}
                            src={item.avatar}
                            alt={item.title}
                        />
                    }
                >
                    <AriTypography variant='h3' style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</AriTypography>
                    <AriTypography variant='h3' color='secondary'>{item.description}</AriTypography>
                    <div style={{ marginTop: '8px' }}>
                        {item.tags.map(tag => (
                            <AriTag key={tag} style={{ marginRight: '8px' }}>{tag}</AriTag>
                        ))}
                    </div>
                </AriListItem>
            ))}
        </AriList>
    );
};
