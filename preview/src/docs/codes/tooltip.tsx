import React, { useState } from 'react';
import { AriTooltip, AriButton, AriFlex, AriTypography } from '@aries-kit/react';

/**
 * 基础用法示例
 * 
 * 基本的提示框用法
 */
export const BasicTooltip: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriTooltip
                content="这是一个简单的提示框"
                children={<AriButton>鼠标悬停</AriButton>}
            />
        </AriFlex>
    );
};

/**
 * 不同位置示例
 * 
 * 展示提示框可以出现在不同位置
 */
export const PositionedTooltip: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriTooltip content="上方提示" position="top">
                <AriButton>上方</AriButton>
            </AriTooltip>
            <AriTooltip content="右侧提示" position="right">
                <AriButton>右侧</AriButton>
            </AriTooltip>
            <AriTooltip content="下方提示" position="bottom">
                <AriButton>下方</AriButton>
            </AriTooltip>
            <AriTooltip content="左侧提示" position="left">
                <AriButton>左侧</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};

/**
 * 不同触发方式示例
 * 
 * 提示框可以通过不同方式触发显示
 */
export const TriggerTooltip: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriTooltip content="悬停触发" trigger="hover">
                <AriButton>悬停触发</AriButton>
            </AriTooltip>
            <AriTooltip content="点击触发" trigger="click">
                <AriButton>点击触发</AriButton>
            </AriTooltip>
            <AriTooltip content="获取焦点触发" trigger="focus">
                <AriButton>获取焦点触发</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};

/**
 * 手动控制示例
 * 
 * 使用trigger="manual"和visible属性手动控制提示框的显示与隐藏
 */
export const ControlledTooltip: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <AriFlex space={16}>
            <AriTooltip
                content="这是一个手动控制的提示框"
                trigger="manual"
                visible={visible}
            >
                <AriButton onClick={() => setVisible(!visible)}>
                    {visible ? '隐藏提示' : '显示提示'}
                </AriButton>
            </AriTooltip>
        </AriFlex>
    );
};

/**
 * 箭头开关示例
 */
export const NoArrowTooltip: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriTooltip content="默认无箭头（无需配置）">
                <AriButton>默认无箭头</AriButton>
            </AriTooltip>
            <AriTooltip content="手动开启箭头" arrow={true}>
                <AriButton>开启箭头</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};

/**
 * 富文本内容示例
 * 
 * 提示框内容可以是任意React节点
 */
export const RichContentTooltip: React.FC = () => {
    const content = (
        <AriFlex vertical space={8}>
            <AriTypography variant='h3' value='提示标题' />
            <div>这是一段描述文本，可以包含<b>加粗</b>、<i>斜体</i>等样式</div>
            <AriButton size="sm">点击操作</AriButton>
        </AriFlex>
    );

    return (
        <AriTooltip content={content}>
            <AriButton>富文本提示框</AriButton>
        </AriTooltip>
    );
};

export const TooltipBehaviorDemo: React.FC = () => {
    return (
        <AriFlex space={16} wrap>
            <AriTooltip
                content="延迟显示 / 隐藏，并在显示状态变化时输出日志"
                showDelay={500}
                hideDelay={300}
                minWidth={240}
                onShow={() => console.log('tooltip shown')}
                onHide={() => console.log('tooltip hidden')}
                children={<AriButton>延迟提示</AriButton>}
            />

            <AriTooltip
                content="会继承触发元素宽度，适合多行说明文案"
                matchTriggerWidth
                children={<AriButton style={{ width: 180 }}>匹配触发元素宽度</AriButton>}
            />

            <AriTooltip
                content="这个提示框已被禁用"
                disabled
                children={<AriButton>禁用状态</AriButton>}
            />
        </AriFlex>
    );
};
