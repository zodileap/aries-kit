
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AriPortalProps } from '@ari/types';

/**
 * 传送门组件
 * 
 * 用于将内容渲染到 DOM 树中的指定位置，通常用于弹窗、提示框等需要避免定位和层叠上下文问题的组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/portal}
 */
export const AriPortal: React.FC<AriPortalProps> = ({
    children,
    container
}) => {
    // 1. 状态初始化
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    // 2. 副作用处理 - 设置挂载节点
    useEffect(() => {
        // 确定挂载节点，优先使用传入的容器，否则使用 document.body
        const targetContainer = container || document.body;
        setMountNode(targetContainer);

        // 不需要清理函数，因为 React 会自动移除挂载的内容
    }, [container]);

    // 3. 条件渲染
    // 如果还没有确定挂载节点，不渲染任何内容
    if (!mountNode) return null;

    // 4. 使用 createPortal 将内容传送到目标容器
    return createPortal(children, mountNode);
};