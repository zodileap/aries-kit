import React from 'react';

/**
 * 列表组件的属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/list}
 */
export interface AriListProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 自定义类名
     * 
     * default: undefined
     */
    className?: string;
    
    /**
     * 数据源
     * 用于渲染列表项的数据数组
     * 
     * default: undefined
     */
    dataSource?: any[];
    
    /**
     * 列表项渲染函数
     * 接收数据项和索引，返回渲染的内容
     * 
     * default: undefined
     */
    renderItem?: (item: any, index: number) => React.ReactNode;
    
    /**
     * 是否处于加载状态
     * 
     * default: false
     */
    loading?: boolean;
    
    /**
     * 加载状态的提示文本
     * 
     * default: '加载中...'
     */
    loadingMessage?: React.ReactNode;
    
    /**
     * 是否显示边框
     * 
     * default: false
     */
    bordered?: boolean;
    
    /**
     * 列表尺寸
     * 
     * default: 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    
    /**
     * 是否显示分割线
     * 
     * default: true
     */
    split?: boolean;
    
    /**
     * 列表头部内容
     * 
     * default: undefined
     */
    header?: React.ReactNode;
    
    /**
     * 列表底部内容
     * 
     * default: undefined
     */
    footer?: React.ReactNode;
    
    /**
     * 空数据时的提示文本
     * 
     * default: '暂无数据'
     */
    emptyMessage?: React.ReactNode;
    
    /**
     * 子元素
     * 当不使用dataSource时，可以直接传入子元素
     * 
     * default: undefined
     */
    children?: React.ReactNode;
}

/**
 * 列表项组件的属性
 * 
 * Example:
 * {@link https://aries-react.dev/docs/list-item}
 */
export interface AriListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 自定义类名
     * 
     * default: undefined
     */
    className?: string;
    
    /**
     * 是否显示边框
     * 
     * default: false
     */
    bordered?: boolean;
    
    /**
     * 是否显示分割线
     * 
     * default: false
     */
    split?: boolean;
    
    /**
     * 列表项的操作按钮
     * 
     * default: undefined
     */
    actions?: React.ReactNode[];
    
    /**
     * 列表项的额外内容
     * 
     * default: undefined
     */
    extra?: React.ReactNode;
    
    /**
     * 子元素
     * 
     * default: undefined
     */
    children?: React.ReactNode;
}
