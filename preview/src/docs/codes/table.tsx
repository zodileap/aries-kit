import { AriTable, AriTableColumn, AriFlex, AriTypography } from '@aries-kit/react';
import React, { useRef, useState } from 'react';

export const BasicTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    return (
        <AriTable data={data} columns={columns} />
    )
}



export const BorderedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <div>
            <h4>有边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={true}
            />

            <h4 style={{ marginTop: '30px' }}>无边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={false}
            />
        </div>
    );
}


export const CustomRenderTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, status: 'active' },
        { name: '李四', age: 30, status: 'inactive' },
        { name: '王五', age: 28, status: 'active' },
        { name: '赵六', age: 32, status: 'inactive' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        {
            title: '状态',
            key: 'status',
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '4px 8px',
                    borderRadius: '2px',
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    return (
        <AriTable data={data} columns={columns} />
    )
}

export const FixedColumnsTable: React.FC = () => {
    const data = [
        { id: 1, name: '张三', age: 25, city: '北京', address: '朝阳区建国路88号', phone: '13812345678', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 30, city: '上海', address: '浦东新区陆家嘴1号', phone: '13912345678', email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 28, city: '广州', address: '天河区体育西路123号', phone: '13712345678', email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 32, city: '深圳', address: '南山区科技园456号', phone: '13612345678', email: 'zhaoliu@example.com' },
    ];

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80, fixed: 'left' },
        { title: '姓名', key: 'name', width: 100, fixed: 'left' },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '电话', key: 'phone', width: 150 },
        { title: '邮箱', key: 'email', width: 180, fixed: 'right' }
    ];

    return (
        <div style={{ width: '100%' }}>
            <AriTable
                data={data}
                columns={columns}
                bordered
            />
        </div>
    );
}

export const SelectableTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: `用户${i}`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: `示例地址${i}号`,
                date: `2023-${Math.floor(i/3) + 1}-${i % 28 + 1}`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={`当前表头状态: ${isSticky ? '已固定' : '未固定'}`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: `用户${i}`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: `user${i}@example.com`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: `用户${i}`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={`当前第 ${current} 页，每页显示 ${pageSize} 条数据`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => `共 ${total} 条，当前显示 ${range[0]}-${range[1]} 条`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
