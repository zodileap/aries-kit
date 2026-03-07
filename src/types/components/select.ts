
/**
 * 选择器组件
 * 
 * Example:
 * {@link https://aries-react.dev/docs/select}
 */
export interface AriSelectProps {
    /** 选择器的值，单选时为string|number，多选时为(string|number)[] */
    value?: string | number | (string | number)[];
    /** 选项列表 */
    options: AriSelectOption[];
    /** 默认值，单选时为string|number，多选时为(string|number)[] */
    defaultValue?: string | number | (string | number)[];
    /** 占位提示文本 */
    placeholder?: string;
    /** 是否禁用选择器 */
    disabled?: boolean;
    /** 是否显示边框 */
    bordered?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 值变化时的回调函数，单选时返回string|number，多选时返回(string|number)[]，同时返回旧值 */
    onChange?: (value: string | number | (string | number)[] | undefined, oldValue?: string | number | (string | number)[] | undefined) => void;
    /** 是否显示清除按钮 */
    allowClear?: boolean;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 是否开启多选模式 */
    multiple?: boolean;
    /** 是否开启搜索功能 */
    searchable?: boolean;
    /** 搜索时的占位文本 */
    searchPlaceholder?: string;
    /** 自定义过滤函数，返回true表示显示该选项 */
    filterOption?: (inputValue: string, option: AriSelectOption) => boolean;
    /** 是否启用排序模式（仅在多选模式下有效） */
    sortable?: boolean;
    /** 排序模式下的回调函数，当项目拖拽排序完成时触发 */
    onSortChange?: (newValues: (string | number)[], fromIndex: number, toIndex: number) => void;
    /** 排序模式下的最大选择数量 */
    maxItems?: number;
    /** 排序模式下的最小选择数量 */
    minItems?: number;
    /** 排序模式下的标签文本 */
    label?: string;
    /** 排序模式下添加按钮的文本 */
    addText?: string;
    /** 排序模式下点击列表项的回调函数 */
    onItemClick?: (option: AriSelectOption) => void;
    /** 触发下拉框的方式 */
    trigger?: 'click' | 'hover';
    /** 点击触发器时的自定义回调，可用于弹出自定义组件等行为 */
    onTriggerClick?: (event: React.MouseEvent<HTMLDivElement>, context: {
        value: string | number | (string | number)[] | undefined;
        open: boolean;
        setOpen: (open: boolean) => void;
        toggleDropdown: () => void;
    }) => void;
    /** 点击触发器时是否执行默认展开/收起逻辑 */
    openOnTriggerClick?: boolean;
    /** 自定义箭头图标名称 */
    arrowIcon?: string;
    /** 自定义触发器渲染函数 */
    renderTrigger?: (props: {
        value: string | number | (string | number)[] | undefined;
        open: boolean;
        onToggle: () => void;
    }) => React.ReactNode;
}

/**
 * 选择器选项类型
 */
export interface AriSelectOption {
    /** 选项的值 */
    value: string | number;
    /** 选项的标签文本 */
    label: string;
    /** 是否禁用该选项 */
    disabled?: boolean;
}
