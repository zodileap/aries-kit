// @ari/components/select/Select.tsx

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useCss } from "@ari/utils";
import { AriTypography, AriContainer, AriIcon, AriPortal, AriTag, AriTextInput, AriButton, AriEmpty, AriDragList } from '@ari/components';
import { AriSelectOption, AriSelectProps, AriDragListItem } from '@ari/types/components';
import { useI18n } from '@ari/i18n';

/**
 * 选择器组件
 * 
 * 通过下拉菜单展示并选择内容
 * 
 * Example:
 * 
 * ```tsx
 * // 基本用法
 * <AriSelect 
 *   options={[
 *     { value: '1', label: '选项一' },
 *     { value: '2', label: '选项二' }
 *   ]} 
 * />
 * 
 * // 带清除按钮
 * <AriSelect 
 *   allowClear
 *   options={[
 *     { value: '1', label: '选项一' },
 *     { value: '2', label: '选项二' }
 *   ]} 
 * />
 * 
 * // 启用搜索功能
 * <AriSelect 
 *   searchable
 *   searchPlaceholder="搜索选项"
 *   options={[
 *     { value: '1', label: '选项一' },
 *     { value: '2', label: '选项二' },
 *     { value: '3', label: '选项三' }
 *   ]} 
 * />
 * 
 * // 自定义过滤函数
 * <AriSelect 
 *   searchable
 *   filterOption={(input, option) => 
 *     option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
 *   }
 *   options={options} 
 * />
 * ```
 * 
 * {@link https://aries-react.dev/docs/select}
 */
export const AriSelect: React.FC<AriSelectProps> = ({
    value,
    options,
    defaultValue,
    placeholder = '请选择',
    disabled = false,
    bordered = true,
    className,
    onChange,
    allowClear = false,
    style,
    multiple = false,
    searchable = false,
    searchPlaceholder = '',
    filterOption,
    sortable = false,
    onSortChange,
    maxItems,
    minItems = 0,
    label,
    addText = '添加选项',
    onItemClick,
    trigger = 'click',
    onTriggerClick,
    openOnTriggerClick = true,
    arrowIcon,
    renderTrigger,
}) => {
    const cs = useCss('select');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number | (string | number)[] | undefined>(() => {
        if (multiple) {
            // 多选模式下，确保值始终是数组
            if (value !== undefined) {
                return Array.isArray(value) ? value : [value];
            }
            if (defaultValue !== undefined) {
                return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
            }
            return [];
        } else {
            // 单选模式，注意要正确处理空字符串等falsy值
            if (value !== undefined) {
                return value;
            }
            return defaultValue;
        }
    });
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
    const [isSelected, setIsSelected] = useState(() => {
        if (multiple) {
            const arrayValue = Array.isArray(value) ? value : (value !== undefined ? [value] : []);
            return arrayValue.length > 0;
        } else {
            return value !== undefined && value !== "" && value !== null;
        }
    });
    const [searchValue, setSearchValue] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const hoverTimerRef = useRef<NodeJS.Timeout>();

    const { t } = useI18n(['common']);
    useEffect(() => {
        if (value !== undefined) {
            if (multiple) {
                // 确保多选值是数组
                const arrayValue = Array.isArray(value) ? value : [value];
                setSelectedValue(arrayValue);
                setIsSelected(arrayValue.length > 0);
            } else {
                setSelectedValue(value);
                setIsSelected(value !== undefined && value !== "" && value !== null);
            }
        } else {
            // 当value为undefined时，也要更新状态
            setSelectedValue(multiple ? [] : undefined);
            setIsSelected(false);
        }
    }, [value, multiple]);

    // 创建一个下拉菜单引用，用于在组件外部访问下拉菜单元素
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        // 点击外部关闭下拉菜单
        const handleClickOutside = (event: MouseEvent) => {
            // 获取事件目标元素
            const target = event.target as Node;
            
            // 检查点击是否发生在 select 元素外部
            const isOutsideSelect = selectRef.current && !selectRef.current.contains(target);
            // 检查点击是否发生在下拉菜单外部（Portal 挂载到 body 上的元素）
            const isOutsideDropdown = !dropdownRef.current || !dropdownRef.current.contains(target);
            
            // 只有当点击同时在 select 和下拉菜单外部时，才关闭下拉菜单
            if (isOutsideSelect && isOutsideDropdown) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 添加滚动和窗口大小调整事件监听
    useEffect(() => {
        // 只在下拉菜单打开时添加监听
        if (isOpen) {
            const handlePositionUpdate = () => {
                calculateDropdownPosition();
            };
            
            // 初始计算位置（使用延迟确保下拉菜单已经渲染）
            const timer = setTimeout(() => {
                calculateDropdownPosition();
            }, 0);
            
            // 监听窗口滚动和调整大小事件
            window.addEventListener('scroll', handlePositionUpdate, true);
            window.addEventListener('resize', handlePositionUpdate);
            
            return () => {
                // 清除定时器
                clearTimeout(timer);
                // 清除事件监听
                window.removeEventListener('scroll', handlePositionUpdate, true);
                window.removeEventListener('resize', handlePositionUpdate);
            };
        }
    }, [isOpen]);

    // 计算下拉菜单位置
    const calculateDropdownPosition = () => {
        if (!triggerRef.current) return;
        
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // 估算下拉菜单的高度
        // 每个选项高度: element-size-sm = 1.5rem = 24px
        // 内边距: inset-xs = 0.25rem * 2 = 8px
        // 间距: inset-sm = 0.5rem = 8px (每个选项之间)
        const optionHeight = 24; // 1.5rem
        const dropdownPadding = 8; // 上下内边距 0.25rem * 2
        const gapBetweenOptions = 8; // 0.5rem
        // 最大高度: 15rem = 240px
        const dropdownMaxHeightPixels = 240;
        const estimatedHeight = Math.min(
            options.length * optionHeight + (options.length - 1) * gapBetweenOptions + dropdownPadding,
            dropdownMaxHeightPixels
        );
        const insetSize = 8; // inset-sm = 0.5rem = 8px
        
        // 检查底部空间是否足够
        const bottomSpace = viewportHeight - triggerRect.bottom;
        const topSpace = triggerRect.top;
        
        const styles: React.CSSProperties = {
            minWidth: `${triggerRect.width}px`,
            maxWidth: `${Math.max(viewportWidth - insetSize * 2, triggerRect.width)}px`,
            position: 'fixed',
        };

        const safeWidth = Math.max(
            triggerRect.width,
            Math.min(viewportWidth - insetSize * 2, 360)
        );
        const safeLeft = Math.min(
            Math.max(triggerRect.left, insetSize),
            Math.max(insetSize, viewportWidth - safeWidth - insetSize)
        );

        styles.left = `${safeLeft}px`;
        
        // 如果底部空间不足且顶部空间足够，则向上显示
        if (bottomSpace < estimatedHeight + insetSize && topSpace > estimatedHeight + insetSize) {
            styles.bottom = `calc(${viewportHeight - triggerRect.top}px + ${cs.getCssVarName('inset','sm')})`;
        } else {
            // 否则正常向下显示
            styles.top = `calc(${triggerRect.bottom}px + ${cs.getCssVarName('inset','sm')})`;
        }
        
        setDropdownStyle(styles);
    };

    const toggleDropdown = () => {
        if (disabled) return;
        
        if (!isOpen) {
            calculateDropdownPosition();
            setSearchValue(''); // 打开下拉菜单时清空搜索
            // 自动聚焦搜索框（如果启用了搜索）
            setTimeout(() => {
                if (searchable && searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }, 50);
        }
        
        setIsOpen(!isOpen);
    };

    const handleTriggerClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onTriggerClick?.(event, {
            value: selectedValue,
            open: isOpen,
            setOpen: setIsOpen,
            toggleDropdown
        });

        if (trigger === 'click' && openOnTriggerClick) {
            toggleDropdown();
        }
    };

    // 处理 hover 事件
    const handleMouseEnter = useCallback(() => {
        if (trigger === 'hover' && !disabled) {
            // 清除任何现有的关闭定时器
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
            
            if (!isOpen) {
                calculateDropdownPosition();
                setSearchValue('');
                setIsOpen(true);
                
                // 自动聚焦搜索框（如果启用了搜索）
                setTimeout(() => {
                    if (searchable && searchInputRef.current) {
                        searchInputRef.current.focus();
                    }
                }, 50);
            }
        }
    }, [trigger, disabled, isOpen, searchable]);

    const handleMouseLeave = useCallback(() => {
        if (trigger === 'hover' && !disabled) {
            // 延迟关闭，给用户时间移动到下拉菜单
            hoverTimerRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 300);
        }
    }, [trigger, disabled]);

    // 清理定时器
    useEffect(() => {
        return () => {
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, []);

    /**
     * 处理选项选中事件
     * 
     * @param option 被选中的选项对象
     */
    const handleSelect = (option: AriSelectOption) => {
        // 如果选项被禁用，则不进行任何操作
        if (option.disabled) return;
        setIsSelected(true);

        if (multiple) {
            // 多选模式
            const currentValues = selectedValue as (string | number)[] || [];
            let newValues: (string | number)[];
            
            // 检查是否已经选了该值
            if (currentValues.includes(option.value)) {
                // 如果已经选中，则移除
                newValues = currentValues.filter(v => v !== option.value);
            } else {
                // 如果未选中，则添加
                newValues = [...currentValues, option.value];
            }
            
            const oldValues = [...(selectedValue as (string | number)[])]; // 复制旧值
            setSelectedValue(newValues);
            // 多选模式下选择了选项后不关闭下拉菜单
            onChange?.(newValues, oldValues);
        } else {
            // 单选模式
            const oldValue = selectedValue; // 保存旧值
            setSelectedValue(option.value);
            setIsOpen(false);
            onChange?.(option.value, oldValue);
        }
    };

    /**
     * 处理清除选中值的事件
     * 
     * @param e 点击事件对象
     */
    const handleClear = (e: React.MouseEvent) => {
        // 阻止事件冒泡，防止触发下拉菜单切换
        e.stopPropagation();
        
        if (multiple) {
            // 多选模式下清除全部
            const oldValues = [...(selectedValue as (string | number)[])]; // 复制旧值
            setSelectedValue([]);
            setIsSelected(false);
            onChange?.([], oldValues);
        } else {
            // 单选模式
            const oldValue = selectedValue; // 保存旧值
            setSelectedValue(undefined);
            setIsSelected(false);
            onChange?.(undefined, oldValue);
        }
    };

    // 根据是单选还是多选模式处理选中选项
    const selectedOptions = useMemo(() => {
        if (multiple) {
            // 多选模式，返回所有选中的选项
            const values = selectedValue as (string | number)[] || [];
            if (sortable) {
                // 排序模式下，保持顺序
                return values.map(val => options.find(opt => opt.value === val)).filter(Boolean) as AriSelectOption[];
            } else {
                return options.filter(opt => values.includes(opt.value));
            }
        } else {
            // 单选模式，返回单个选项或空
            const option = options.find(opt => opt.value === selectedValue);
            return option ? [option] : [];
        }
    }, [options, selectedValue, multiple, sortable]);

    // 过滤选项
    const filteredOptions = useMemo(() => {
        if (!searchable || !searchValue) {
            return options;
        }
        
        if (filterOption) {
            // 使用自定义过滤函数
            return options.filter(option => filterOption(searchValue, option));
        }
        
        // 默认过滤：不区分大小写的包含匹配
        const lowerSearchValue = searchValue.toLowerCase();
        return options.filter(option => 
            option.label.toLowerCase().includes(lowerSearchValue)
        );
    }, [options, searchValue, searchable, filterOption]);

    // 渲染下拉菜单
    const renderDropdown = () => {
        if (!isOpen || disabled) return null;
        
        return (
            <AriPortal>
                <AriContainer 
                    ref={(el) => {
                        // 将下拉菜单元素的引用保存到 dropdownRef
                        if (el) dropdownRef.current = el;
                    }}
                    className={cs.gen(
                        cs.e('dropdown'),
                        cs.is('visible', isOpen),
                        cs.is('sortable-mode', multiple && sortable)
                    )} 
                    style={dropdownStyle}
                    onMouseEnter={() => {
                        if (trigger === 'hover' && hoverTimerRef.current) {
                            clearTimeout(hoverTimerRef.current);
                        }
                    }}
                    onMouseLeave={() => {
                        if (trigger === 'hover') {
                            handleMouseLeave();
                        }
                    }}>
                    {/* 搜索框 */}
                    {searchable && (
                        <div className={cs.e('search-container')}>
                            <AriTextInput
                                ref={searchInputRef}
                                value={searchValue}
                                onChange={setSearchValue}
                                placeholder={searchPlaceholder === '' ? t.common.searchPlaceholder : searchPlaceholder}
                                prefix={<AriIcon name="search" />}
                                size="sm"
                                className={cs.e('search-input')}
                                onClick={(e) => e.stopPropagation()}
                                onFocus={(e) => e.stopPropagation()}
                                onKeyDown={(e) => {
                                    // 阻止一些快捷键传递到外部
                                    if (e.key === 'Escape') {
                                        setIsOpen(false);
                                        e.stopPropagation();
                                    }
                                }}
                            />
                        </div>
                    )}
                    {filteredOptions.length === 0 ? (
                        <div className={cs.e('empty-message')}>
                            {t.common.noSearchResults}
                        </div>
                    ) : (
                        (sortable && multiple ? availableOptions : filteredOptions).map((option) => (
                        <div
                            key={option.value}
                            className={cs.gen(
                                cs.e('option'),
                                cs.e('value'),
                                cs.is('selected', multiple 
                                    ? Array.isArray(selectedValue) && selectedValue.includes(option.value)
                                    : option.value === selectedValue
                                ),
                                cs.is('disabled', option.disabled)
                            )}
                            onClick={(e) => {
                                // 阻止事件冒泡，防止触发document上的mousedown事件
                                // 这样可以避免在选择选项时过早关闭下拉菜单
                                e.stopPropagation();
                                if (sortable && multiple) {
                                    handleAddFromDropdown(option);
                                } else {
                                    handleSelect(option);
                                }
                            }}
                        >
                            {option.label}
                        </div>
                    ))
                    )}
                </AriContainer>
            </AriPortal>
        );
    };

    // 派生状态计算
    const canAddMore = useMemo(() => {
        if (!multiple || !sortable) return false;
        return !disabled && (!maxItems || selectedOptions.length < maxItems);
    }, [disabled, maxItems, selectedOptions.length, multiple, sortable]);

    const canRemove = useMemo(() => {
        if (!multiple || !sortable) return true;
        return !disabled && selectedOptions.length > minItems;
    }, [disabled, selectedOptions.length, minItems, multiple, sortable]);

    // 处理从下拉菜单添加选项（排序模式下）
    const handleAddFromDropdown = useCallback((option: AriSelectOption) => {
        if (!sortable || !multiple || !canAddMore) return;
        
        const currentValues = selectedValue as (string | number)[] || [];
        if (!currentValues.includes(option.value)) {
            const newValues = [...currentValues, option.value];
            setSelectedValue(newValues);
            onChange?.(newValues, currentValues);
        }
        setIsOpen(false);
    }, [sortable, multiple, canAddMore, selectedValue, onChange]);

    // 处理移除选项（排序模式下）
    const handleRemoveFromList = useCallback((optionValue: string | number) => {
        if (!sortable || !multiple || !canRemove) return;
        
        const currentValues = selectedValue as (string | number)[] || [];
        const newValues = currentValues.filter(v => v !== optionValue);
        setSelectedValue(newValues);
        onChange?.(newValues, currentValues);
    }, [sortable, multiple, canRemove, selectedValue, onChange]);


    // 获取可添加的选项（排序模式下）
    const availableOptions = useMemo(() => {
        if (!sortable || !multiple) return filteredOptions;
        
        const selectedValues = selectedValue as (string | number)[] || [];
        return filteredOptions.filter(option => !selectedValues.includes(option.value));
    }, [sortable, multiple, filteredOptions, selectedValue]);

    // 将选项转换为拖拽列表项
    const dragListItems = useMemo((): AriDragListItem[] => {
        if (!multiple || !sortable) return [];
        
        return selectedOptions.map((option) => ({
            id: option.value,
            content: (
                <div className={cs.e('sortable-item-content')}>
                    <span 
                        className={cs.e('item-label')}
                        onClick={() => onItemClick?.(option)}
                        style={{ cursor: onItemClick ? 'pointer' : 'default' }}
                    >
                        {option.label}
                    </span>
                    {canRemove && (
                        <div
                            className={cs.e('remove-button')}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFromList(option.value);
                            }}
                            title="删除此项"
                        >
                            <AriIcon name="close" />
                        </div>
                    )}
                </div>
            ),
            disabled: disabled
        }));
    }, [selectedOptions, canRemove, disabled, handleRemoveFromList, cs, onItemClick]);

    // 处理拖拽排序
    const handleDragSort = useCallback((newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        const newValues = newItems.map(item => item.id);
        setSelectedValue(newValues);
        onChange?.(newValues, selectedValue);
        onSortChange?.(newValues, fromIndex, toIndex);
    }, [onChange, onSortChange, selectedValue]);

    // 如果是排序模式，渲染不同的界面
    if (multiple && sortable) {
        return (
            <AriContainer
                className={cs.gen(
                    cs.b(),
                    cs.m('sortable'),
                    cs.is('disabled', disabled),
                    className
                )}
                style={style}
            >
                {label && <AriTypography variant='body' className={cs.e('label')} value={label} />}
                
                <div className={cs.e('sortable-wrapper')}>
                    <AriDragList
                        items={dragListItems}
                        onSortChange={handleDragSort}
                        disabled={disabled}
                        gap="xs"
                        emptyContent={<AriEmpty description="暂无选项，点击下方按钮添加" />}
                        className={cs.e('drag-list')}
                    />
                    
                    {canAddMore && (
                        <div ref={selectRef}>
                            <div ref={triggerRef}>
                                <AriButton
                                    type="dashed"
                                    disabled={disabled}
                                    onClick={toggleDropdown}
                                    label={addText}
                                    icon="add"
                                />
                            </div>
                            {renderDropdown()}
                        </div>
                    )}
                </div>
                
                {maxItems && (
                    <div className={cs.e('count')}>
                        {selectedOptions.length}/{maxItems}
                    </div>
                )}
            </AriContainer>
        );
    }

    return (
        <div
            ref={selectRef}
            className={cs.gen(cs.b(), className)}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {renderTrigger ? (
                <div ref={triggerRef}>
                    {renderTrigger({
                        value: selectedValue,
                        open: isOpen,
                        onToggle: toggleDropdown
                    })}
                </div>
            ) : (
            <div
                ref={triggerRef}
                className={cs.gen(
                    cs.e('trigger'),
                    cs.is('disabled', disabled),
                    cs.is('open', isOpen),
                    cs.is('multiple', multiple),
                    cs.is('borderless', !bordered)
                )}
                onClick={trigger === 'click' || onTriggerClick ? handleTriggerClick : undefined}
            >
                <div className={cs.e('values-container')}>
                    {multiple && selectedOptions.length > 0 ? (
                        // 多选模式下渲染多个标签
                        <div className={cs.e('tags')}>
                            {selectedOptions.map(option => (
                                <AriTag 
                                    key={option.value} 
                                    className={cs.e('selected-tag')}
                                    onClose={(e) => {
                                        e.stopPropagation();
                                        // 移除该项
                                        const oldValues = [...(selectedValue as (string | number)[])]; // 复制旧值
                                        const newValues = oldValues.filter(v => v !== option.value);
                                        setSelectedValue(newValues);
                                        onChange?.(newValues, oldValues);
                                    }}
                                >
                                    {option.label}
                                </AriTag>
                            ))}
                        </div>
                    ) : (
                        // 单选或未选中任何项
                        <AriTypography
                            variant='body'
                            className={cs.e('value')}
                            value={selectedOptions.length ? selectedOptions[0].label : placeholder}
                            noWrap
                        />
                    )}
                </div>
                <div className={cs.e('suffix')}>
                    {allowClear && isSelected && (
                        <AriIcon
                            name='close'
                            onClick={handleClear}
                            className={cs.e('clear-icon')}
                        />
                    )}
                    <AriIcon
                        name={arrowIcon || (isOpen ? 'expand_less' : 'expand_more')}
                        className={cs.e('arrow')}
                    />
                </div>
            </div>
            )}
            {renderDropdown()}
        </div>
    );
};
