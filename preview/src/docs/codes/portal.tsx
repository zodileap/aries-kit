import React, { useRef, useState } from 'react';
import { AriPortal, AriButton, AriFlex, AriTypography } from '@aries-kit/react';

/**
 * 基础用法示例
 * 
 * Portal将内容传送到document.body
 */
export const BasicPortal: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <AriButton onClick={() => setVisible(true)}>显示Portal内容</AriButton>

            {visible && (
                <AriPortal
                    children={
                        <div
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'white',
                                padding: '20px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                zIndex: 1000
                            }}
                        >
                            <AriFlex vertical space={16}>
                                <AriTypography variant='h3' value='这个内容被传送到了document.body' />
                                <AriButton onClick={() => setVisible(false)}>关闭</AriButton>
                            </AriFlex>
                        </div>
                    }
                />
            )}
        </>
    );
};

/**
 * 自定义容器示例
 * 
 * Portal将内容传送到指定的DOM节点
 */
export const CustomContainerPortal: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <AriFlex vertical space={16}>
            <AriButton onClick={() => setVisible(true)}>显示在自定义容器中</AriButton>

            <div
                ref={containerRef}
                style={{
                    position: 'relative',
                    border: '1px dashed #ccc',
                    padding: '20px',
                    minHeight: '150px'
                }}
            >
                <AriTypography variant='h3' value='自定义容器 - Portal内容将显示在这里' />
            </div>

            {visible && (
                <AriPortal container={containerRef.current}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'white',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                            border: '1px solid #eee'
                        }}
                    >
                        <AriFlex vertical space={16}>
                            <AriTypography variant='h3' value='这个内容被传送到了自定义容器' />
                            <AriButton onClick={() => setVisible(false)}>关闭</AriButton>
                        </AriFlex>
                    </div>
                </AriPortal>
            )}
        </AriFlex>
    );
};
