// src/components/message/Message.tsx
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useCss } from '@ari/utils';
import { AriTypography, AriIcon } from '@ari/components';
import { AriMessageConfig, AriMessageProps, AriMessageType } from '@ari/types';
import { createRoot } from 'react-dom/client';

let seed = 0;
let messageInstances = new Map<string, {
    close: () => void;
    height: number;
    timestamp: number;
}>();

// 命令式调用方法
type MessageMethod = (content: string | AriMessageConfig) => {
    close: () => void;
};

// 创建基础消息函数
function baseMessage(content: string | AriMessageConfig) {
    const config = typeof content === 'string' ? { content } : content;
    return createMessage(config);
}


/**
 * 消息对象
 * 
 * Example:
 * {@link https://aries-react.dev/docs/message} 
 */
export const AriMessage = baseMessage as unknown as MessageMethod & {
    info: MessageMethod;
    success: MessageMethod;
    warning: MessageMethod;
    error: MessageMethod;
    primary: MessageMethod;
    clear: () => void;
};


/**
 * 创建消息实例 
 */
const createMessage = (config: AriMessageConfig) => {
    const messageId = `message-${seed++}`;
    const timestamp = Date.now();

    // 创建一个状态管理函数
    let currentVisible = true;

    // 渲染函数
    const renderMessage = () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        // 使用ReactDOM.render渲染组件
        const root = createRoot(container);
        root.render(
            <Message
                {...config}
                id={messageId}
                visible={currentVisible}
                onClose={() => {
                    root.unmount();
                    document.body.removeChild(container);
                    config.onClose?.();
                }}
            />
        );

        return root;
    };

    // 渲染消息
    const root = renderMessage();

    // 创建实例并存储
    const instance = {
        close: () => {
            // 为了保证动画效果，先设置visible为false
            currentVisible = false;
            root.render(
                <Message
                    {...config}
                    id={messageId}
                    visible={false}
                    onClose={() => {
                        root.unmount();
                        config.onClose?.();
                    }}
                />
            );
        },
        height: 0,
        timestamp
    };

    messageInstances.set(messageId, instance);

    // 延迟更新位置，确保DOM已渲染
    setTimeout(() => {
        updateMessagePositions();
    }, 50);

    return {
        close: instance.close
    };
};

// 添加不同类型的调用方法
['info', 'success', 'warning', 'error', 'primary'].forEach((type) => {
    (AriMessage as any)[type] = (content: string | AriMessageConfig) => {
        const config = typeof content === 'string' ? { content } : content;
        return createMessage({
            ...config,
            type: type as AriMessageType,
        });
    };
});


/**
 * 消息组件
 * 用于显示全局性的通知消息
 */
const Message: React.FC<AriMessageProps> = ({
    id,
    content,
    type = 'info',
    visible,
    duration = 3000,
    showClose = false,
    zIndex,
    className,
    onClose,
    autoClose = true,
}) => {
    const cs = useCss('message');
    const [isLeaving, setIsLeaving] = useState(false);
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageRef.current && visible && !isLeaving) {
            const newHeight = messageRef.current.offsetHeight;

            const instance = messageInstances.get(id);
            if (instance) {
                instance.height = newHeight;
                updateMessagePositions();
            }
        }
    }, [id, visible, isLeaving]);

    useEffect(() => {
        if (visible && duration > 0 && autoClose) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [visible, duration, autoClose]);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            onClose?.();
            messageInstances.delete(id);
            updateMessagePositions();
        }, 300); // 动画持续时间
    };

    // 使用 Portal 渲染到消息容器
    return createPortal(
        <div
            ref={messageRef}
            id={id}
            className={cs.gen(
                cs.b(),
                cs.m(type),
                cs.m('top'),
                cs.is('enter', visible && !isLeaving),
                cs.is('leave', isLeaving),
                className
            )}
            style={{
                zIndex,
                position: 'fixed',
                top: '0', // 初始位置，会被updateMessagePositions更新
            }}
        >
            <AriTypography variant='caption' className={cs.e('content')} value={content} />
            {(showClose || !autoClose) && (
                <AriIcon
                    name="close"
                    className={cs.e('close')}
                    onClick={handleClose}
                />
            )}
        </div>,
        getMessageContainer()
    );
};


// 创建消息容器
const createMessageContainer = () => {
    const containerId = 'ari-message-container';
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }

    return container;
};

// 获取消息容器
const getMessageContainer = () => {
    return createMessageContainer();
};

// 更新所有消息的位置
const updateMessagePositions = () => {
    let currentTopOffset = 20; // 初始顶部间距

    // 按照时间戳排序所有消息实例（较早的消息在顶部）
    const sortedInstances = Array.from(messageInstances.entries())
        .sort(([, a], [, b]) => a.timestamp - b.timestamp);

    // 更新每个消息的位置
    for (const [id] of sortedInstances) {
        const messageElement = document.getElementById(id);
        if (messageElement) {
            messageElement.style.top = `${currentTopOffset}px`;
            currentTopOffset += messageElement.offsetHeight + 16; // 消息高度 + 间距
        }
    }
};

// 添加清除所有消息的方法
AriMessage.clear = () => {
    for (const [, instance] of messageInstances) {
        instance.close();
    }
    messageInstances = new Map();
};
