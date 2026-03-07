import React, { useState } from 'react';
import { AriPopconfirm, AriButton, AriMessage, AriFlex, AriRadio } from '@aries-kit/react';
import type { AriPopconfirmProps } from '@aries-kit/react';

export const BasicPopconfirm: React.FC = () => (
    <AriPopconfirm
        title="确定要执行此操作吗？"
        description="该操作会立即生效，请确认是否继续。"
        onConfirm={() => AriMessage.success('已确认')}
        onCancel={() => AriMessage.info('已取消')}
        children={<AriButton>点击触发</AriButton>}
    />
);

export const PlacementPopconfirm: React.FC = () => {
    const [placement, setPlacement] = useState<AriPopconfirmProps['placement']>('top');

    const placements: AriPopconfirmProps['placement'][] = [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ];

    return (
        <AriFlex vertical space={16}> {/* 使用 space 属性并指定数值 */}
            <AriRadio.Group value={placement} onChange={(val) => setPlacement(val as AriPopconfirmProps['placement'])}> {/* 修正 AriRadioGroup 用法 */}
                {placements.map(p => <AriRadio key={p} value={p as string}>{p}</AriRadio>)}
            </AriRadio.Group>
            <AriPopconfirm
                title={`当前位置：${placement}`}
                placement={placement}
                onConfirm={() => AriMessage.success('已确认')}
            >
                <AriButton>触发位置：{placement}</AriButton>
            </AriPopconfirm>
        </AriFlex>
    );
};

export const ControlledPopconfirm: React.FC = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleConfirm = () => {
        AriMessage.success('已确认');
        setOpen(false);
    };

    const handleCancel = () => {
        AriMessage.info('已取消');
        setOpen(false);
    };

    return (
        <AriFlex space={8} align="center">
            <AriButton ref={buttonRef} onClick={() => setOpen(true)}>
                打开 Popconfirm (受控)
            </AriButton>
            <AriPopconfirm
                title="这是一个受控的 Popconfirm"
                open={open}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                okButtonProps={{ color: 'danger' }}
                cancelButtonProps={{ type: 'outline' }}
                positionTarget={buttonRef}
            >
                <span style={{ display: 'none' }} />
            </AriPopconfirm>
            <span>当前状态: {open ? '打开' : '关闭'}</span>
        </AriFlex>
    );
};

export const CustomButtonPopconfirm: React.FC = () => (
    <AriPopconfirm
        title="自定义按钮文本和属性"
        defaultOpen={true}
        closeOnEscape={false}
        okText="是的"
        cancelText="不了"
        okButtonProps={{ color: 'success', type: 'outline' }}
        cancelButtonProps={{ color: 'secondary' }}
        onConfirm={() => AriMessage.success('选择了 是的')}
        onCancel={() => AriMessage.info('选择了 不了')}
    >
        <AriButton>自定义按钮</AriButton>
    </AriPopconfirm>
);
