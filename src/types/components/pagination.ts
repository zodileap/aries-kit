import { _Props } from "./base";

/**
 * 分页组件
 * 
 * 用于展示分页信息，支持自定义每页条数、快速跳转等功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/pagination}
 */
export interface AriPaginationProps extends Omit<_Props, 'onChange'> {
    /**
     * 当前页码
     * default: 1
     */
    current?: number;

    /**
     * 默认的当前页码
     * default: 1
     */
    defaultCurrent?: number;

    /**
     * 每页条数
     * default: 10
     */
    pageSize?: number;

    /**
     * 默认的每页条数
     * default: 10
     */
    defaultPageSize?: number;

    /**
     * 数据总数
     */
    total: number;

    /**
     * 页码改变的回调
     */
    onChange?: (page: number, pageSize: number) => void;

    /**
     * 是否显示较少的页码按钮
     * default: false
     */
    simple?: boolean;

    /**
     * 是否禁用
     * default: false
     */
    disabled?: boolean;

    /**
     * 是否显示快速跳转
     * default: false
     */
    showQuickJumper?: boolean;

    /**
     * 是否显示每页条数选择器
     * default: false
     */
    showSizeChanger?: boolean;

    /**
     * 每页条数选项
     * default: [10, 20, 50, 100]
     */
    pageSizeOptions?: number[];

    /**
     * 每页条数变化的回调
     */
    onShowSizeChange?: (current: number, size: number) => void;

    /**
     * 是否显示总数
     * default: false
     */
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}