import { AriList, AriListItem, AriFlex, AriButton, AriAvatar, AriTag, AriTypography, AriImage, AriEmpty } from '@aries-kit/react';
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
                        image="/assets/images/empty.png"
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
                className="preview-loading-list"
                bordered
                loading={loading}
                loadingMessage={<span>正在同步列表数据...</span>}
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
        </AriFlex>
    );
};

export const SortableList: React.FC = () => {
    const [tasks, setTasks] = useState([
        { id: 'todo-1', title: '确认需求范围', owner: '产品', status: '待开始' },
        { id: 'todo-2', title: '拆分交互细节', owner: '设计', status: '进行中' },
        { id: 'todo-3', title: '联调接口返回', owner: '前端', status: '待验证' }
    ]);
    const [sortMessage, setSortMessage] = useState('拖动左侧手柄可调整任务优先级');

    return (
        <AriFlex space={16} vertical>
            <AriTypography variant='h3'>{sortMessage}</AriTypography>
            <AriList
                bordered
                allowDrag
                header="可拖拽任务列表"
                dataSource={tasks}
                onDragSort={(fromIndex, toIndex, allItems) => {
                    const nextTasks = [...allItems] as typeof tasks;
                    setTasks(nextTasks);
                    setSortMessage(`已将「${nextTasks[toIndex].title}」从第 ${fromIndex + 1} 位移动到第 ${toIndex + 1} 位`);
                }}
                renderItem={(item) => (
                    <AriFlex align="center" justify="space-between" space={16}>
                        <div>
                            <AriTypography variant='h3' style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                {item.title}
                            </AriTypography>
                            <AriTypography variant='h3' color='secondary'>
                                负责人：{item.owner}
                            </AriTypography>
                        </div>
                        <AriTag>{item.status}</AriTag>
                    </AriFlex>
                )}
            />
        </AriFlex>
    );
};

export const ListItemDemo: React.FC = () => {
    const data = [1, 2, 3];

    return (
        <AriList
            bordered
            children={data.map((item, index) => (
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
        />
    );
};

export const ComplexList: React.FC = () => {
    const data = [
        {
            title: 'Aries Kit',
            description: '面向 React 的前端基础库，提供组件、hooks 与基础交互能力',
            avatar: '/assets/logo/logo.png',
            tags: [
                { label: 'React', color: 'pale-blue' },
                { label: 'Hooks', color: 'pale-violet' }
            ]
        },
        {
            title: '组件与交互',
            description: '覆盖常用组件场景，支持响应式布局、主题定制与细粒度交互',
            avatar: '/assets/logo/logo.png',
            tags: [
                { label: 'UI', color: 'pale-green' },
                { label: '组件', color: 'pale-yellow' }
            ]
        },
        {
            title: '主题与样式',
            description: '内置图标、颜色、排版与样式变量，方便建立一致的前端体验',
            avatar: '/assets/logo/logo.png',
            tags: [
                { label: 'Theme', color: 'pale-persimmon' },
                { label: 'Styles', color: 'pale-pink' }
            ]
        }
    ];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem
                    key={item.title}
                    split={index < data.length - 1}
                >
                    <AriFlex
                        align="flex-start"
                        justify="space-between"
                        space={24}
                        wrap
                    >
                        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
                            <AriFlex vertical align="flex-start" space={14}>
                                <AriFlex vertical align="flex-start" space={8}>
                                    <AriTypography
                                        variant='h3'
                                        style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.2 }}
                                    >
                                        {item.title}
                                    </AriTypography>
                                    <AriTypography
                                        variant='h3'
                                        color='secondary'
                                        style={{ fontSize: '15px', lineHeight: 1.75 }}
                                    >
                                        {item.description}
                                    </AriTypography>
                                </AriFlex>

                                <AriFlex wrap align="center" space={8}>
                                    {item.tags.map((tag) => (
                                        <AriTag
                                            key={tag.label}
                                            size="sm"
                                            bordered
                                            color={tag.color}
                                        >
                                            {tag.label}
                                        </AriTag>
                                    ))}
                                </AriFlex>

                                <AriFlex space={12} align="center">
                                    <AriButton key="view" type="text" size="sm" icon="visibility">
                                        查看
                                    </AriButton>
                                    <AriButton key="edit" type="text" size="sm" icon="edit">
                                        编辑
                                    </AriButton>
                                </AriFlex>
                            </AriFlex>
                        </div>

                        <div
                            style={{
                                width: 112,
                                padding: 10,
                                borderRadius: 18,
                                background: 'linear-gradient(180deg, var(--z-color-bg-secondary) 0%, var(--z-color-bg) 100%)',
                                boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)'
                            }}
                        >
                            <AriImage
                                width={92}
                                height={92}
                                src={item.avatar}
                                alt={item.title}
                                style={{ borderRadius: 16 }}
                            />
                        </div>
                    </AriFlex>
                </AriListItem>
            ))}
        </AriList>
    );
};
