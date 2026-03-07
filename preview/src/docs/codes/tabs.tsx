import { useState } from 'react';
import { AriTabs } from '@aries-kit/react';

export const BasicTabs: React.FC = () => {
    const [activeKey, setActiveKey] = useState('1');

    const items = [
        { key: '1', label: '标签1', children: '标签1的内容' },
        { key: '2', label: '标签2', children: '标签2的内容' },
        { key: '3', label: '标签3', children: '标签3的内容' },
    ];

    return (
        <AriTabs
            activeKey={activeKey}
            items={items}
            onChange={setActiveKey}
        />
    );
};

export const DisabledTabs: React.FC = () => {
    const [activeKey, setActiveKey] = useState('1');
    
    const items = [
        { key: '1', label: '标签1', children: '标签1的内容' },
        { key: '2', label: '标签2', children: '标签2的内容', disabled: true },
        { key: '3', label: '标签3', children: '标签3的内容' },
    ];

    return (
        <AriTabs 
            activeKey={activeKey} 
            items={items}
            onChange={setActiveKey}
        />
    );
};