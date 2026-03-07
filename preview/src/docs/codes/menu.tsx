import { AriMenu, AriContainer, AriButton, AriFlex, AriInput, AriTypography } from '@ari/components';
import { useMemo, useState } from 'react';

export const BasicMenu: React.FC = () => {
    const items = [
        { key: '1', label: '菜单项1', icon: 'home', textPosition: 'top' as const },
        { key: '2', label: '菜单项2', icon: 'person', disabled: true },
        { key: '3', label: '菜单项3', icon: 'settings' }
    ];

    return (
        <AriMenu
            className="preview-basic-menu"
            items={items}
            defaultSelectedKey="1"
            onSelect={(key, item) => console.log('selected:', key, item)}
        />
    );
};

export const SubMenu: React.FC = () => {
    const [expandedKeys, setExpandedKeys] = useState<string[]>(['1']);
    const items = [
        {
            key: '1',
            label: '菜单1',
            icon: 'folder',
            children: [
                { key: '1-1', label: '子项1-1', icon: 'home' },
                { key: '1-2', label: '子项1-2' }
            ]
        },
        {
            key: '2',
            label: '菜单2',
            icon: 'folder',
            children: [
                { key: '2-1', label: '子项2-1' },
                { key: '2-2', label: '子项2-2' }
            ]
        }
    ];

    return (
        <AriMenu
            items={items}
            expandedKeys={expandedKeys}
            onExpand={setExpandedKeys}
            mode="vertical"
        />
    );
};

export const ModeDemo: React.FC = () => {
    const items = [
        { key: '1', label: '菜单项1', icon: 'home' },
        { key: '2', label: '菜单项2', icon: 'person' },
        { key: '3', label: '菜单项3', icon: 'settings' }
    ];

    return (
        <>
            <AriContainer style={{ marginBottom: '20px' }}>
                <h4>水平模式</h4>
                <AriMenu items={items} mode="horizontal" />
            </AriContainer>

            <AriContainer>
                <h4>垂直模式</h4>
                <AriMenu items={items} mode="vertical" />
            </AriContainer>
        </>
    );
};

export const IconAnimationDemo: React.FC = () => {
    const items = [
        {
            key: 'sync',
            label: '同步中（旋转）',
            icon: 'sync',
            fillIcon: 'sync',
            iconAnimation: 'spinning' as const,
            iconState: 'loading' as const,
            meta: <AriTypography variant='caption'>处理中</AriTypography>,
        },
        {
            key: 'success',
            label: '同步完成',
            icon: 'check_circle',
            fillIcon: 'check_circle',
            iconState: 'success' as const,
            meta: <AriTypography variant='caption'>已完成</AriTypography>,
        },
        {
            key: 'warning',
            label: '同步失败（抖动）',
            icon: 'warning',
            fillIcon: 'warning',
            iconAnimation: 'shake' as const,
            iconState: 'error' as const,
            meta: <AriTypography variant='caption'>需重试</AriTypography>,
        }
    ];

    return (
        <AriMenu
            items={items}
            defaultSelectedKey='sync'
        />
    );
};

export const ArrowPositionDemo: React.FC = () => {
    const items = [
        {
            key: '1',
            label: '菜单1',
            icon: 'folder',
            children: [
                { key: '1-1', label: '子项1-1' },
                { key: '1-2', label: '子项1-2' }
            ]
        },
        {
            key: '2',
            label: '菜单2',
            icon: 'folder',
            children: [
                { key: '2-1', label: '子项2-1' },
                { key: '2-2', label: '子项2-2' }
            ]
        }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriContainer>
                <AriTypography variant='caption'>右侧箭头（默认）</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="right" />
            </AriContainer>
            <AriContainer>
                <AriTypography variant='caption'>左侧箭头</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="left" />
            </AriContainer>
            <AriContainer>
                <AriTypography variant='caption'>无箭头</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="none" />
            </AriContainer>
        </AriFlex>
    );
};


export const GroupDemo: React.FC = () => {
    const items = [
        {
            key: 'group1',
            label: '系统功能',
            isGroup: true
        },
        {
            key: 'dashboard',
            label: '仪表盘',
            icon: 'dashboard'
        },
        {
            key: 'settings',
            label: '系统设置',
            icon: 'settings'
        },
        {
            key: 'group2',
            label: '内容管理',
            isGroup: true
        },
        {
            key: 'article',
            label: '文章管理',
            icon: 'article'
        },
        {
            key: 'comment',
            label: '评论管理',
            icon: 'comment'
        }
    ];

    return (
        <AriMenu items={items} defaultSelectedKey="dashboard" />
    );
};

export const SessionLikeMenu: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState('s-1');
    const [pinnedKeys, setPinnedKeys] = useState<string[]>([]);
    const [renamingKey, setRenamingKey] = useState<string>('');
    const [renameValue, setRenameValue] = useState('');
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number; key: string } | null>(null);
    const [titleMap, setTitleMap] = useState<Record<string, string>>({});

    const sessions = [
        { key: 's-1', title: '机械臂材质方案：PBR + 烘焙流程', time: '今天 10:12' },
        { key: 's-2', title: '低模角色风格探索', time: '昨天 18:22' },
        { key: 's-3', title: '工业控制台重建与导出', time: '02/08 09:18' },
    ];

    const sortedSessions = useMemo(() => {
        return [...sessions].sort((a, b) => {
            const aPinned = pinnedKeys.includes(a.key);
            const bPinned = pinnedKeys.includes(b.key);
            if (aPinned === bPinned) return 0;
            return aPinned ? -1 : 1;
        });
    }, [pinnedKeys]);

    const startRename = (key: string) => {
        const target = sessions.find(item => item.key === key);
        if (!target) return;
        setRenamingKey(key);
        setRenameValue(titleMap[key] || target.title);
    };

    const commitRename = () => {
        if (!renamingKey) return;
        const value = renameValue.trim();
        if (value) {
            setTitleMap(prev => ({ ...prev, [renamingKey]: value }));
        }
        setRenamingKey('');
        setRenameValue('');
    };

    return (
        <AriContainer style={{ position: 'relative', maxWidth: 360 }}>
            <AriTypography variant='caption'>
                标题左侧自适应省略，右侧时间固定；Hover 显示图钉/删除；右键菜单支持重命名。
            </AriTypography>
            <AriContainer style={{ height: 8 }} />
            <AriMenu
                selectedKey={selectedKey}
                items={sortedSessions.map((session) => {
                    const isPinned = pinnedKeys.includes(session.key);
                    const isRenaming = renamingKey === session.key;
                    const title = titleMap[session.key] || session.title;
                    return {
                        key: session.key,
                        label: isRenaming ? (
                            <AriInput
                                value={renameValue}
                                autoFocus
                                onChange={setRenameValue}
                                onBlur={commitRename}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        commitRename();
                                    }
                                    if (event.key === 'Escape') {
                                        event.preventDefault();
                                        setRenamingKey('');
                                        setRenameValue('');
                                    }
                                }}
                            />
                        ) : (
                            title
                        ),
                        meta: isRenaming ? null : <AriTypography variant='caption'>{session.time}</AriTypography>,
                        actions: isRenaming ? null : (
                            <AriFlex align='center' space={4}>
                                <AriButton
                                    type='text'
                                    size='sm'
                                    icon={isPinned ? 'push_pin_fill' : 'push_pin'}
                                    onClick={() => {
                                        setPinnedKeys(prev =>
                                            prev.includes(session.key)
                                                ? prev.filter(key => key !== session.key)
                                                : [session.key, ...prev]
                                        );
                                    }}
                                />
                                <AriButton
                                    type='text'
                                    size='sm'
                                    icon='delete'
                                    onClick={() => console.log('delete:', session.key)}
                                />
                            </AriFlex>
                        ),
                        showActionsOnHover: true,
                        onContextMenu: (event) => {
                            event.preventDefault();
                            setContextMenu({ x: event.clientX, y: event.clientY, key: session.key });
                        },
                        onClick: () => setSelectedKey(session.key),
                    };
                })}
                onSelect={(key) => setSelectedKey(key)}
            />

            {contextMenu ? (
                <AriContainer
                    style={{
                        position: 'fixed',
                        left: contextMenu.x,
                        top: contextMenu.y,
                        zIndex: 999,
                        minWidth: 180,
                    }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <AriMenu
                        items={[
                            {
                                key: 'rename',
                                icon: 'edit',
                                label: '重新命名',
                                onClick: () => {
                                    startRename(contextMenu.key);
                                    setContextMenu(null);
                                },
                            }
                        ]}
                    />
                </AriContainer>
            ) : null}
        </AriContainer>
    );
};
