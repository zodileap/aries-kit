import React, { useState } from 'react';
import { AriFlex, AriDragList, AriContainer, AriTypography, AriIcon, AriButton, AriTag } from '@aries-kit/react';
import type { AriDragListItem } from '@aries-kit/react';

// 基础用法示例
export const BasicExample: React.FC = () => {
    const [items, setItems] = useState<AriDragListItem[]>([
        { id: 1, content: '第一项 - 可以拖拽我' },
        { id: 2, content: '第二项 - 拖拽改变顺序' },
        { id: 3, content: '第三项 - 简单易用' },
        { id: 4, content: '第四项 - 流畅交互' }
    ]);

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setItems(newItems);
        console.log(`项目从位置 ${fromIndex} 移动到位置 ${toIndex}`);
    };

    return (
        <AriContainer width={400}>
            <AriDragList 
                className="preview-drag-list"
                items={items} 
                onSortChange={handleSortChange}
            />
        </AriContainer>
    );
};

// 间距设置示例
export const GapExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '拖拽项 1' },
        { id: 2, content: '拖拽项 2' },
        { id: 3, content: '拖拽项 3' }
    ];

    return (
        <AriFlex space={24} vertical>
            <div>
                <AriTypography variant="caption" gutterBottom>小间距 (xs)</AriTypography>
                <AriDragList items={items} gap="xs" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>中等间距 (md)</AriTypography>
                <AriDragList items={items} gap="md" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>大间距 (lg)</AriTypography>
                <AriDragList items={items} gap="lg" />
            </div>
        </AriFlex>
    );
};

// 自定义渲染示例
export const CustomRenderExample: React.FC = () => {
    const [tasks, setTasks] = useState<AriDragListItem[]>([
        { 
            id: 1, 
            content: { 
                title: '设计用户界面', 
                status: 'progress', 
                priority: 'high',
                assignee: '张三'
            } 
        },
        { 
            id: 2, 
            content: { 
                title: '前端开发', 
                status: 'pending', 
                priority: 'medium',
                assignee: '李四'
            } 
        },
        { 
            id: 3, 
            content: { 
                title: '代码审查', 
                status: 'done', 
                priority: 'low',
                assignee: '王五'
            } 
        }
    ]);

    const renderTaskItem = (item: AriDragListItem) => {
        const task = item.content as any;
        const statusColors = {
            pending: 'warning',
            progress: 'info', 
            done: 'success'
        };
        
        const priorityColors = {
            high: 'danger',
            medium: 'warning',
            low: 'info'
        };

        return (
            <AriContainer 
                padding={16} 
                showBorder 
                style={{ backgroundColor: 'white' }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex vertical space={8}>
                        <AriTypography variant="body" style={{ fontWeight: 600 }}>
                            {task.title}
                        </AriTypography>
                        <AriFlex space={8} align="center">
                            <AriTag color={statusColors[task.status]}>
                                {task.status === 'pending' ? '待处理' : 
                                 task.status === 'progress' ? '进行中' : '已完成'}
                            </AriTag>
                            <AriTag color={priorityColors[task.priority]}>
                                {task.priority === 'high' ? '高优先级' : 
                                 task.priority === 'medium' ? '中优先级' : '低优先级'}
                            </AriTag>
                        </AriFlex>
                    </AriFlex>
                    <AriFlex vertical align="flex-end" space={4}>
                        <AriIcon name="person" size="sm" />
                        <AriTypography variant="caption">{task.assignee}</AriTypography>
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[]) => {
        setTasks(newItems);
    };

    return (
        <AriContainer width={500}>
            <AriDragList 
                items={tasks}
                renderItem={renderTaskItem}
                onSortChange={handleSortChange}
                gap="sm"
            />
        </AriContainer>
    );
};

// 禁用状态示例
export const DisabledExample: React.FC = () => {
    const [items] = useState<AriDragListItem[]>([
        { id: 1, content: '正常项目 - 可以拖拽' },
        { id: 2, content: '禁用项目 - 无法拖拽', disabled: true },
        { id: 3, content: '正常项目 - 可以拖拽' },
        { id: 4, content: '禁用项目 - 无法拖拽', disabled: true }
    ]);

    const [globalDisabled, setGlobalDisabled] = useState(false);

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriButton 
                    size="sm"
                    color={globalDisabled ? 'success' : 'danger'}
                    onClick={() => setGlobalDisabled(!globalDisabled)}
                >
                    {globalDisabled ? '启用列表' : '禁用列表'}
                </AriButton>
                <AriTypography variant="caption">
                    {globalDisabled ? '列表已全局禁用' : '列表正常，部分项目单独禁用'}
                </AriTypography>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    disabled={globalDisabled}
                    onSortChange={(newItems) => console.log('排序变化:', newItems)}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 拖拽手柄配置示例
export const HandleConfigExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '显示拖拽手柄的项目' },
        { id: 2, content: '拖拽手柄使用自定义图标' },
        { id: 3, content: '无拖拽手柄，点击任意位置拖拽' }
    ];

    return (
        <AriFlex vertical space={24}>
            <div>
                <AriTypography variant="caption" gutterBottom>
                    默认拖拽手柄 (drag_indicator)
                </AriTypography>
                <AriDragList items={items} />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    自定义手柄图标 (menu)
                </AriTypography>
                <AriDragList 
                    items={items} 
                    dragHandleIcon="menu"
                />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    隐藏拖拽手柄
                </AriTypography>
                <AriDragList 
                    items={items} 
                    showDragHandle={false}
                />
            </div>
        </AriFlex>
    );
};

// 空状态处理示例
export const EmptyStateExample: React.FC = () => {
    const [items, setItems] = useState<AriDragListItem[]>([]);
    const [allowEmpty, setAllowEmpty] = useState(true);

    const addItem = () => {
        const newItem: AriDragListItem = {
            id: Date.now(),
            content: `新项目 ${items.length + 1}`
        };
        setItems([...items, newItem]);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={12}>
                <AriButton size="sm" color="primary" onClick={addItem}>
                    添加项目
                </AriButton>
                <AriButton size="sm" color="danger" onClick={clearItems}>
                    清空列表
                </AriButton>
                <AriButton 
                    size="sm"
                    color={allowEmpty ? 'warning' : 'success'}
                    onClick={() => setAllowEmpty(!allowEmpty)}
                >
                    {allowEmpty ? '禁止空状态' : '允许空状态'}
                </AriButton>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    allowEmpty={allowEmpty}
                    emptyContent={
                        <AriFlex vertical align="center" space={12} style={{ padding: '40px 20px' }}>
                            <AriIcon name="inbox" size="lg" color="#ccc" />
                            <AriTypography variant="caption" color="secondary">
                                暂无数据，点击上方按钮添加项目
                            </AriTypography>
                        </AriFlex>
                    }
                    onSortChange={setItems}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 复杂数据操作示例
export const ComplexDataExample: React.FC = () => {
    const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: `4px solid ${category.color}`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(`分类 "${(newItems[toIndex].content as any).name}" 优先级从 ${fromIndex + 1} 调整为 ${toIndex + 1}`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};
