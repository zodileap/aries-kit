export * from '../../components/app-layout';

import { createContext, useContext } from 'react';

import { AppLayoutState } from '../../types/components';


/**
 * AppLayout上下文
 * 
 * 如果需要添加参数，在src/components/app-layout/index.tsx中添加
 */
export const appLayoutState = createContext<AppLayoutState | undefined>(undefined);

/**
 * AppLayout状态
 * @returns 
 */
export const useAppLayoutState = (): AppLayoutState => {
    const context = useContext(appLayoutState);
    if (context === undefined) {
        throw new Error('useAppLayout必须在AppLayoutProvider内使用');
    }
    return context;
};




