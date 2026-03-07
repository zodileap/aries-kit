import React, { useRef, useState } from 'react';
import { AriButton, AriContainer, AriContextMenu, AriFlex, AriInput, AriTypography } from '@aries-kit/react';
import { getCssVarName } from '@ari/utils';

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
        >
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
        </AriContextMenu>
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
        >
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
        </AriContextMenu>
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
