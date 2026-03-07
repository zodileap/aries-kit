import React, { useRef, useState } from 'react';
import { AriButton, AriContainer, AriContextMenu, AriFlex, AriInput, AriTypography } from '@aries-kit/react';
import { getCssVarName } from '@ari/utils';

const contextMenuOverlayClassName = 'preview-context-menu-overlay';

const contextMenuPreviewStyle = `
.${contextMenuOverlayClassName} {
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
}
`;

/**
 * 描述：基础用法示例。
 */
export const BasicContextMenu: React.FC = () => {
    const menuItems = [
        { key: 'open', label: '打开', icon: 'folder_open' },
        { key: 'rename', label: '重命名', icon: 'edit' },
        { key: 'delete', label: '删除', icon: 'delete' },
    ];

    return (
        <AriContextMenu
            items={menuItems}
            onSelect={(key) => console.log('context menu select:', key)}
            children={
                <AriContainer
                    showBorder
                    material='glass'
                    padding={getCssVarName('inset')}
                    style={{
                        width: getCssVarName('element-size', 'content-sm'),
                        minHeight: getCssVarName('element-size', 'content-xs'),
                    }}
                >
                    <AriTypography variant='h3' value='右键这里打开菜单' />
                    <AriTypography
                        variant='caption'
                        value='默认渲染 AriMenu，支持 onSelect 回调。'
                    />
                </AriContainer>
            }
        />
    );
};

/**
 * 描述：自定义菜单面板示例。
 */
export const CustomContextMenu: React.FC = () => {
    const [name, setName] = useState('新建会话');

    return (
        <AriContextMenu
            renderOverlay={({ close }) => (
                <AriContainer
                    showBorder
                    material='glass'
                    padding={getCssVarName('inset', 'sm')}
                    style={{
                        width: getCssVarName('element-size', 'content-xs'),
                    }}
                >
                    <AriFlex vertical space={getCssVarName('inset', 'sm')}>
                        <AriTypography variant='h3' value='快捷操作' />
                        <AriInput value={name} onChange={setName} placeholder='输入名称' />
                        <AriFlex justify='flex-end' space={getCssVarName('inset', 'xs')}>
                            <AriButton type='text' onClick={close}>取消</AriButton>
                            <AriButton
                                color='primary'
                                onClick={() => {
                                    console.log('create:', name);
                                    close();
                                }}
                            >
                                创建
                            </AriButton>
                        </AriFlex>
                    </AriFlex>
                </AriContainer>
            )}
            children={
                <AriContainer
                    showBorder
                    padding={getCssVarName('inset')}
                    style={{
                        width: getCssVarName('element-size', 'content-sm'),
                        minHeight: getCssVarName('element-size', 'content-xs'),
                    }}
                >
                    <AriTypography variant='h3' value='右键这里打开自定义菜单' />
                    <AriTypography
                        variant='caption'
                        value='使用 renderOverlay 完全自定义内部内容。'
                    />
                </AriContainer>
            }
        />
    );
};

/**
 * 描述：独立挂载示例。
 */
export const DetachedContextMenu: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const menuItems = [
        { key: 'copy', label: '复制', icon: 'content_copy' },
        { key: 'paste', label: '粘贴', icon: 'content_paste' },
        { key: 'delete', label: '删除', icon: 'delete' },
    ];

    return (
        <AriFlex vertical space={getCssVarName('inset', 'sm')}>
            <AriContextMenu
                targetRef={targetRef}
                items={menuItems}
                onSelect={(key) => console.log('detached context menu select:', key)}
            />
            <div
                ref={targetRef}
                style={{
                    width: getCssVarName('element-size', 'content-sm'),
                    minHeight: getCssVarName('element-size', 'content-xs'),
                    border: `1px dashed ${getCssVarName('color', 'border')}`,
                    borderRadius: getCssVarName('border-radius', 'container'),
                    padding: getCssVarName('inset'),
                    background: getCssVarName('color', 'bg-opacity'),
                    boxSizing: 'border-box',
                }}
            >
                <AriTypography variant='h3' value='独立目标：右键此区域打开菜单' />
                <AriTypography
                    variant='caption'
                    value='AriContextMenu 不包裹此区域，只通过 targetRef 监听右键事件。'
                />
            </div>
        </AriFlex>
    );
};

export const ContextMenuBehaviorDemo: React.FC = () => {
    const portalRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <style>{contextMenuPreviewStyle}</style>
            <AriFlex vertical space={16}>
                <AriTypography
                    variant='caption'
                    value='下面这个菜单使用 defaultOpen 默认展开，并把菜单挂载到虚线容器内。'
                />
                <div
                    ref={portalRef}
                    style={{
                        position: 'relative',
                        minHeight: 220,
                        border: '1px dashed var(--z-color-border)',
                        borderRadius: 'var(--z-border-radius-container)',
                        padding: 16,
                        overflow: 'hidden',
                    }}
                >
                    <AriContextMenu
                        defaultOpen
                        overlay={
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3' value='静态 Overlay 面板' />
                                <AriTypography
                                    variant='caption'
                                    value='这个示例同时覆盖 overlay、defaultOpen、offset、mouseGap、安全边距和挂载容器。'
                                />
                            </AriFlex>
                        }
                        closeOnClickOutside={false}
                        closeOnEscape={false}
                        closeOnScroll
                        offset={{ x: 24, y: 24 }}
                        mouseGap={{ x: 12, y: 12 }}
                        safePadding={24}
                        portalContainer={portalRef.current}
                        overlayClassName={contextMenuOverlayClassName}
                        overlayStyle={{ width: 260, borderRadius: 16 }}
                        children={
                            <AriContainer
                                showBorder
                                padding={16}
                                style={{ width: 220 }}
                            >
                                <AriTypography variant='body' value='这个触发区域只用来显式展示 children。' />
                            </AriContainer>
                        }
                    />
                </div>
            </AriFlex>
        </>
    );
};

export const ContextMenuControlDemo: React.FC = () => {
    const menuItems = [
        { key: 'pin', label: '置顶', icon: 'push_pin' },
        {
            key: 'share',
            label: '分享',
            icon: 'share',
            children: [
                { key: 'link', label: '复制链接', icon: 'link' },
                { key: 'team', label: '分享给团队', icon: 'groups' },
            ],
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriContextMenu
                items={menuItems}
                menuProps={{ defaultExpandedKeys: ['share'], expandIconPosition: 'left' }}
                closeOnSelect={false}
                children={
                    <AriContainer showBorder padding={16} style={{ width: 240 }}>
                        <AriTypography variant='body' value='右键此处：选中后不会自动关闭菜单。' />
                    </AriContainer>
                }
            />

            <AriContextMenu
                disabled
                items={menuItems}
                children={
                    <AriContainer showBorder padding={16} style={{ width: 240 }}>
                        <AriTypography variant='body' value='这个触发区域已禁用右键菜单。' />
                    </AriContainer>
                }
            />
        </AriFlex>
    );
};
