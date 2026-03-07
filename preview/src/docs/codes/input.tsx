import React, { useState } from 'react';
import { AriInput, AriInputNumber, AriSearchInput, AriFlex, AriContainer, AriIcon, AriTypography } from '@aries-kit/react';

export const BasicInput: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="请输入内容"
                value={value}
                onChange={setValue}
                minLength={3}
                className="preview-input-outline"
            />
            <div>当前输入值: {value}</div>
        </AriFlex>
    );
};

export const InputWithLabel: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput label="用户名" placeholder="请输入用户名" />
            <AriInput label="邮箱地址" placeholder="请输入邮箱" />
        </AriFlex>
    );
};

export const InputWithPrefixSuffix: React.FC = () => {
    return (
      <AriFlex vertical space={16}>
        <AriInput
          placeholder="带前缀的输入框"
          prefix={<AriIcon name="search" />}
        />
        <AriInput
          placeholder="带后缀的输入框"
          suffix={<AriIcon name="search" />}
        />
        <AriInput placeholder="带前缀和后缀的输入框" prefix="￥" suffix="RMB" />
      </AriFlex>
    );
};

export const InputWithCount: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <AriFlex vertical space={16}>
            <AriInput
                placeholder="限制最多输入20个字符"
                showCount
                maxLength={20}
            />
            <AriInput
                placeholder="字数统计"
                showCount
                value={value}
                onChange={setValue}
            />
            <AriInput.TextArea
                placeholder="限制最多输入100个字符的多行文本"
                showCount
                maxLength={100}
            />
        </AriFlex>
    );
};

export const InputWithClear: React.FC = () => {
    const [value, setValue] = useState('可以点击右侧图标清除');

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="请输入内容"
                allowClear
                value={value}
                onChange={setValue}
            />
            <AriInput.Search
                placeholder="搜索框也可以清除"
                allowClear
            />
        </AriFlex>
    );
};

export const InputTypes: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput type="text" placeholder="文本输入框" />
            <AriInput type="password" placeholder="密码输入框" />
            <AriInput type="email" placeholder="邮箱输入框" />
            <AriInput type="tel" placeholder="电话号码输入框" />
        </AriFlex>
    );
};

export const VariantDemp: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput placeholder="有边框" variant="outlined" />
            <AriInput placeholder="无边框" variant="borderless" />
            <AriInput placeholder="通过 bordered 关闭边框" bordered={false} />
            <AriInput placeholder="填充背景" variant="filled" />
            <AriInput placeholder="下划线" variant="underlined" />
        </AriFlex>
    );
}

export const NoHoverFocusEffectDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="关闭 hover/focus 悬浮效果的输入框"
                enableHoverFocusEffect={false}
            />
            <AriInput.TextArea
                placeholder="关闭 hover/focus 悬浮效果的文本域"
                rows={4}
                enableHoverFocusEffect={false}
            />
        </AriFlex>
    );
}

export const AutoCompleteDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriTypography variant='h4' value="常用自动完成属性示例" />
            <AriInput type="text" placeholder="姓名" autoComplete="name" />
            <AriInput type="email" placeholder="电子邮箱" autoComplete="email" />
            <AriInput type="tel" placeholder="电话号码" autoComplete="tel" />
            <AriInput type="text" placeholder="用户名" autoComplete="username" />
            <AriInput type="password" placeholder="当前密码" autoComplete="current-password" />
            <AriInput type="password" placeholder="新密码" autoComplete="new-password" />
            <AriInput type="text" placeholder="地址" autoComplete="street-address" />
            <AriInput type="text" placeholder="禁用自动完成" autoComplete="off" />
        </AriFlex>
    );
};

export const DisabledInput: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput placeholder="普通输入框" />
            <AriInput placeholder="禁用状态" disabled />
        </AriFlex>
    );
};

export const TextAreaDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.TextArea
                placeholder="基础文本域"
                rows={4}
                allowClear
                showCount
            />
            <AriInput.TextArea
                placeholder="自适应高度文本域"
                autoSize={{ minRows: 2, maxRows: 6 }}

            />
            <AriInput.TextArea
                placeholder="禁用状态"
                disabled
                allowClear
            />
            <AriInput.TextArea
                placeholder="通过 bordered 关闭边框"
                bordered={false}
            />
            <AriInput.TextArea
                placeholder="通过 variant 使用无边框"
                variant="borderless"
            />
        </AriFlex>
    );
};

export const BasicSearchInput: React.FC = () => {
    const [value, setValue] = useState('');

    const handleSearch = (searchValue: string) => {
        console.log('搜索:', searchValue);
    };

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.Search
                placeholder="请输入搜索内容"
                value={value}
                onChange={setValue}
                onSearch={handleSearch}
            />
            <AriInput.Search
                placeholder="加载中的搜索框"
                loading={true}
                onSearch={handleSearch}
            />
        </AriFlex>
    );
};

export const CustomSearchButton: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.Search
                placeholder="默认搜索按钮"
                onSearch={(value) => console.log('搜索:', value)}
            />
            <AriInput.Search
                placeholder="自定义搜索按钮"
                enterButton="搜索"
                onSearch={(value) => console.log('搜索:', value)}
            />
            <AriInput.Search
                placeholder="自定义元素按钮"
                enterButton={<span>🔍</span>}
                onSearch={(value) => console.log('搜索:', value)}
            />
        </AriFlex>
    );
};

export const BasicInputNumber: React.FC = () => {
    const [value, setValue] = useState<number>(3);

    return (
        <AriFlex vertical space={16}>
            <AriInput.Number
                value={value}
                onChange={setValue}
                allowClear
            />
            <div>当前值: {value}</div>
            <AriInput.Number
                disabled
            />
        </AriFlex>
    );
};

export const InputNumberRange: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.Number min={1} max={10} defaultValue={5} />
            <div>范围限制: 1-10</div>
        </AriFlex>
    );
};

export const InputNumberStep: React.FC = () => {
    return (
        <AriFlex space={16} vertical>
            <AriInput.Number step={1} defaultValue={0} />
            <AriInput.Number step={0.1} defaultValue={0} precision={1} />
            <AriInput.Number step={0.01} defaultValue={0} precision={2} />
        </AriFlex>
    );
};

export const BasicTextListInput: React.FC = () => {
    const [value, setValue] = useState<string[]>(['React', 'Vue', 'Angular']);

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.TextList
                label="技术栈"
                value={value}
                onChange={setValue}
                placeholder="请输入技术名称"
            />
            <div>当前列表: {JSON.stringify(value)}</div>
        </AriFlex>
    );
};

export const TextListWithEvents: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (message: string) => {
        setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="待办事项"
                defaultValue={['学习 React', '写技术博客']}
                onItemChange={(index, value, all) => addLog(`修改项 ${index}: ${value}`)}
                onItemAdd={(index, all) => addLog(`添加项 ${index}`)}
                onItemRemove={(index, deleted, all) => addLog(`删除项: ${deleted}`)}
                onDragSort={(from, to, all) => addLog(`移动项: ${from} -> ${to}`)}
            />
            
            <div style={{ marginTop: 16 }}>
                <h4>操作日志：</h4>
                <div style={{ height: 150, overflow: 'auto', border: '1px solid #ccc', padding: 8 }}>
                    {logs.map((log, index) => (
                        <div key={index} style={{ fontSize: '12px', margin: '2px 0' }}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </AriFlex>
    );
};

export const TextListWithLimits: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="最多3项的列表"
                maxItems={3}
                defaultValue={['项目1', '项目2']}
                addText="添加项目"
            />
            
            <AriInput.TextList
                label="至少2项的列表"
                minItems={2}
                defaultValue={['必需项1', '必需项2', '可选项']}
            />
        </AriFlex>
    );
};

export const TextListVariants: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="禁用状态"
                disabled
                defaultValue={['不可编辑项1', '不可编辑项2']}
            />
            
            <AriInput.TextList
                label="禁用拖拽排序"
                allowDrag={false}
                defaultValue={['固定顺序1', '固定顺序2', '固定顺序3']}
            />
            
            <AriInput.TextList
                label="允许空项"
                allowEmpty
                defaultValue={['有内容的项', '']}
                itemPlaceholder="可以为空"
            />
        </AriFlex>
    );
};

export const TextListSizes: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="小尺寸"
                size="sm"
                defaultValue={['小尺寸项1', '小尺寸项2']}
            />
            
            <AriInput.TextList
                label="默认尺寸"
                size="default"
                defaultValue={['默认尺寸项1', '默认尺寸项2']}
            />
            
            <AriInput.TextList
                label="大尺寸"
                size="lg"
                defaultValue={['大尺寸项1', '大尺寸项2']}
            />
        </AriFlex>
    );
};
