import React, { useState } from 'react';
import { AriPopover, AriButton, AriContainer, AriFlex, AriTypography, AriInput } from '@aries-kit/react';

export const BasicPopover: React.FC = () => {
    return (
        <>
            <style>{`
                .preview-popover-panel {
                    border: 1px solid var(--z-color-border);
                    box-shadow: var(--z-shadow-md);
                }
            `}</style>
            <AriPopover
                className='preview-popover-panel'
            content={
                <AriFlex vertical space={8}>
                    <AriTypography variant='h4' value='快速操作' />
                    <AriTypography variant='caption' value='在这里放置说明、按钮或轻量面板内容。' />
                </AriFlex>
            }
                children={<AriButton>点击打开</AriButton>}
            />
        </>
    );
};

export const PositionPopover: React.FC = () => {
    const positions = ['top', 'right', 'bottom', 'left', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const;

    return (
        <AriFlex wrap space={12}>
            {positions.map((position) => (
                <AriPopover
                    key={position}
                    position={position}
                    content={<AriTypography variant='caption' value={`当前位置：${position}`} />}
                >
                    <AriButton size='sm'>{position}</AriButton>
                </AriPopover>
            ))}
        </AriFlex>
    );
};

export const TriggerPopover: React.FC = () => {
    const [manualOpen, setManualOpen] = useState(false);

    return (
        <AriFlex wrap space={12} align='center'>
            <AriPopover
                trigger='hover'
                content={<AriTypography variant='caption' value='hover 更适合承载带操作的轻量卡片。' />}
            >
                <AriButton>悬停触发</AriButton>
            </AriPopover>

            <AriPopover
                trigger='click'
                content={<AriTypography variant='caption' value='click 适合更多菜单和筛选面板。' />}
            >
                <AriButton>点击触发</AriButton>
            </AriPopover>

            <AriPopover
                trigger='manual'
                open={manualOpen}
                onOpenChange={setManualOpen}
                content={
                    <AriFlex vertical space={8}>
                        <AriTypography variant='caption' value='manual 模式完全由外部状态控制。' />
                        <AriButton size='sm' onClick={() => setManualOpen(false)}>关闭</AriButton>
                    </AriFlex>
                }
            >
                <AriButton onClick={() => setManualOpen((prev) => !prev)}>
                    {manualOpen ? '收起手动弹层' : '打开手动弹层'}
                </AriButton>
            </AriPopover>
        </AriFlex>
    );
};

export const ControlledPopover: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('桌面端设置');

    return (
        <AriPopover
            open={open}
            onOpenChange={setOpen}
            closeOnOutsideClick={false}
            content={
                <AriFlex vertical space={12} style={{ width: 280 }}>
                    <AriTypography variant='h4' value='编辑名称' />
                    <AriInput
                        variant='embedded'
                        value={name}
                        onChange={setName}
                        placeholder='请输入名称'
                    />
                    <AriFlex justify='end' space={8}>
                        <AriButton type='text' size='sm' onClick={() => setOpen(false)}>取消</AriButton>
                        <AriButton size='sm' onClick={() => setOpen(false)}>保存</AriButton>
                    </AriFlex>
                </AriFlex>
            }
        >
            <AriButton onClick={() => setOpen(true)}>受控模式</AriButton>
        </AriPopover>
    );
};

export const WidthPopover: React.FC = () => {
    return (
        <AriFlex wrap space={16} align='start'>
            <AriPopover
                matchTriggerWidth
                content={
                    <AriTypography variant='caption' value='matchTriggerWidth 会让弹层宽度与触发元素保持一致，适合筛选器或下拉面板。' />
                }
            >
                <AriButton style={{ width: 220 }}>匹配触发宽度</AriButton>
            </AriPopover>

            <AriPopover
                minWidth={260}
                defaultOpen
                content={
                    <AriContainer variant='plain' style={{ padding: 4 }}>
                        <AriTypography variant='caption' value='minWidth 适合为多列操作菜单或说明卡片预留稳定宽度。' />
                    </AriContainer>
                }
            >
                <AriButton>最小宽度 260px</AriButton>
            </AriPopover>
        </AriFlex>
    );
};
