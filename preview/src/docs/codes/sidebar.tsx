import { AriSidebar, AriContainer, AriButton } from '@aries-kit/react';
import { useState } from 'react';

export const BasicSidebar: React.FC = () => (
    <AriContainer style={{ height: '400px' }}>
        <AriSidebar
            content={
                <div style={{ padding: '20px' }}>
                    <h3>基础侧边栏</h3>
                    <p>这是一个最基本的侧边栏示例，展示简单的自定义内容。</p>
                </div>
            }
            width={250}
        />
    </AriContainer>
);


export const DirectionDemo: React.FC = () => {
    const [direction, setDirection] = useState<'left' | 'right'>('left');

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <AriButton
                    label="切换方向"
                    onClick={() => setDirection(prev => prev === 'left' ? 'right' : 'left')}
                />
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    direction={direction}
                    content={
                        <div style={{ padding: '20px' }}>
                            <h3>{direction === 'left' ? '左侧' : '右侧'}侧边栏</h3>
                            <p>当前方向: {direction}</p>
                        </div>
                    }
                    width={250}
                />
            </AriContainer>
        </div>
    );
};

export const ActivityBarPositionDemo: React.FC = () => {
    const [position, setPosition] = useState<'top' | 'bottom' | 'side'>('side');

    const activityItems = [
        {
            key: 'files',
            icon: 'docs',
            title: '文件',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>文件浏览器</h3>
                    <p>这里展示文件列表内容</p>
                </div>
            )
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>这里是搜索界面</p>
                </div>
            )
        },
        {
            key: 'settings',
            icon: 'settings',
            title: '设置',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>设置选项</h3>
                    <p>这里是设置界面</p>
                </div>
            )
        }
    ];

    const handlePositionChange = (newPosition: 'top' | 'bottom' | 'side') => {
        setPosition(newPosition);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <AriButton
                    label="顶部"
                    onClick={() => handlePositionChange('top')}
                    style={{ marginRight: '8px' }}
                    color={position === 'top' ? 'primary' : 'default'}
                />
                <AriButton
                    label="底部"
                    onClick={() => handlePositionChange('bottom')}
                    style={{ marginRight: '8px' }}
                    color={position === 'bottom' ? 'primary' : 'default'}
                />
                <AriButton
                    label="侧边"
                    onClick={() => handlePositionChange('side')}
                    color={position === 'side' ? 'primary' : 'default'}
                />
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    activityBarPosition={position}
                    width={300}
                />
            </AriContainer>
        </div>
    );
};

export const EventHandlingDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');
    const [activeTab, setActiveTab] = useState<string>('files');

    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    children: [
                        {
                            key: 'components',
                            name: 'components.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'public',
                    name: 'public',
                    icon: 'folder',
                    children: [
                        {
                            key: 'index',
                            name: 'index.html',
                            icon: 'file-html'
                        }
                    ]
                }
            ]
        }
    ];

    const activityItems = [
        {
            key: 'files',
            icon: 'file',
            title: '文件',
            contentType: 'fileTree',
            fileTree: fileTreeData
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>搜索界面</p>
                </div>
            )
        }
    ];

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    const handleActivityChange = (item: any) => {
        setActiveTab(item.title);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
                <p><strong>当前活动标签:</strong> {activeTab}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    width={300}
                    onNodeSelect={handleNodeSelect}
                    onActivityChange={handleActivityChange}
                />
            </AriContainer>
        </div>
    );
};

export const FileTreeDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('root');
    const [expandedKeys, setExpandedKeys] = useState<string[]>(['root', 'src']);

    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    expanded: true,
                    children: [
                        {
                            key: 'components',
                            name: 'components',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'button1',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button2',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button3',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button4',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button5',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button6',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button7',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                // {
                                //     key: 'button8',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button9',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button10',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'button11',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button12',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button13',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button14',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button15',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'sidebar',
                                //     name: 'sidebar.tsx',
                                //     icon: 'file-code'
                                // }
                            ]
                        },
                        {
                            key: 'styles',
                            name: 'styles',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'main',
                                    name: 'main.scss',
                                    icon: 'file-css'
                                }
                            ]
                        },
                        {
                            key: 'index',
                            name: 'index.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'package',
                    name: 'package.json',
                    icon: 'file-json'
                },
                {
                    key: 'readme',
                    name: 'README.md',
                    icon: 'file-markdown'
                }
            ]
        }
    ];
    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
                <p><strong>当前展开节点:</strong> {expandedKeys.join(', ') || '无'}</p>
            </div>
            <AriContainer style={{ height: '800px' }}>
                <AriSidebar.TreeView
                    tree={fileTreeData}
                    width={300}
                    className="preview-sidebar-tree"
                    selectedKey={selectedNode}
                    expandedKeys={expandedKeys}
                    onExpandedKeysChange={setExpandedKeys}
                    onNodeSelect={(node) => setSelectedNode(node.key)}
                />
            </AriContainer>
        </div>
    );
}

export const TreeViewComponentDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};
