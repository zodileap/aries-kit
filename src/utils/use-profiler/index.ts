import { useEffect, useRef } from "react";

/**
 * 性能分析工具，用于跟踪组件渲染次数和首次渲染状态
 * 
 * @param name 组件名称，用于在控制台输出中标识组件
 * @returns 包含渲染次数和初始化状态的对象
 */
export const useProfiler = (name: string, openCount = false) => {
    // 渲染计数器
    const renderCount = useRef(0);
    // 初始化状态标记
    const initialized = useRef(false);

    useEffect(() => {
        if (openCount) {
            renderCount.current += 1;

            // 只在开发环境下输出日志
            if (import.meta.env.DEV) {
                console.log(`${name} 渲染次数: ${renderCount.current}`);
            }
        }


        // 标记组件已完成首次渲染
        if (!initialized.current) {
            initialized.current = true;
        }
    });

    return {
        count: renderCount.current,
        initialized: initialized
    };
};