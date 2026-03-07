import { AriSelect } from '@aries-kit/react';
import React, { useState } from 'react';


export const BasicDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            placeholder="请选择"
        />
    );
};
export const ClearableDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return <AriSelect options={options} allowClear={true} placeholder="可清除" />;
};
export const CustomStyleDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            style={{ width: '200px' }}
            placeholder="自定义宽度"
        />
    );
};

export const DisabledDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            disabled={true}
            placeholder="禁用状态"
        />
    );
};

export const TriggerActionDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' }
    ];
    const [showCustomPanel, setShowCustomPanel] = useState(false);

    return (
        <div style={{ width: '260px' }}>
            <AriSelect
                options={options}
                placeholder="点击后执行自定义行为"
                openOnTriggerClick={false}
                onTriggerClick={() => setShowCustomPanel(prev => !prev)}
            />
            {showCustomPanel && (
                <div style={{ marginTop: '8px', padding: '8px', border: '1px dashed #d9d9d9', borderRadius: '8px' }}>
                    这里可以放自定义组件（例如自定义弹窗内容）
                </div>
            )}
        </div>
    );
};

export const BorderlessDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' }
    ];

    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <AriSelect options={options} placeholder="默认有边框" style={{ width: '180px' }} />
            <AriSelect options={options} placeholder="无边框" bordered={false} style={{ width: '180px' }} />
        </div>
    );
};

export const CustomArrowDemo: React.FC = () => {
    const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' }
    ];

    return (
        <AriSelect
            options={options}
            placeholder="自定义箭头图标"
            arrowIcon="chevron_right"
            style={{ width: '220px' }}
        />
    );
};
