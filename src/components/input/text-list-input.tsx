import { useState, useEffect, useCallback, useMemo } from "react";
import { useCss } from "@ari/utils";
import { AriTextListInputProps } from "@ari/types/components/input";
import { AriDragListItem } from "@ari/types/components";
import { AriContainer } from "../container";
import { AriTypography } from "../typography";
import { AriIcon } from "../icon";
import { AriTextInput } from "./text-input";
import { AriButton } from "../button";
import { AriEmpty } from "../empty";
import { AriDragList } from "../drag-list";

/**
 * 文本列表输入框组件
 * 提供可编辑、可新增删除、可拖拽排序的文本列表输入功能
 * 每个列表元素对应一个独立的输入框，支持动态增减和排序
 *
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export const AriTextListInput: React.FC<AriTextListInputProps> = ({
  value,
  defaultValue = [],
  onChange,
  onItemChange,
  onItemAdd,
  onItemRemove,
  onDragSort,
  className,
  disabled = false,
  label,
  help,
  addText = "添加",
  itemPlaceholder = "请输入...",
  allowEmpty = false,
  allowDrag = true,
  maxItems,
  minItems = 0,
  variant = "outlined",
  status = "default",
  bordered = true,
  enableHoverFocusEffect = true,
  size = "default",
  maxWidth,
  minWidth,
  ...props
}) => {
  const cs = useCss("text-list-input");

  // 状态初始化和Refs以及引用的hook
  const [innerValue, setInnerValue] = useState<string[]>(value ?? defaultValue);

  // 同步外部value变化
  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value);
    }
  }, [value]);

  // 派生状态计算
  const canAddMore = useMemo(() => {
    return !disabled && (!maxItems || innerValue.length < maxItems);
  }, [disabled, maxItems, innerValue.length]);

  const canRemove = useMemo(() => {
    return !disabled && innerValue.length > minItems;
  }, [disabled, innerValue.length, minItems]);

  // 事件处理函数
  const handleItemChange = useCallback(
    (index: number, itemValue: string) => {
      const newValue = [...innerValue];
      newValue[index] = itemValue;
      setInnerValue(newValue);

      if (onChange) {
        onChange(newValue);
      }
      if (onItemChange) {
        onItemChange(index, itemValue, newValue);
      }
    },
    [innerValue, onChange, onItemChange]
  );

  const handleAddItem = useCallback(() => {
    if (!canAddMore) return;

    const newValue = [...innerValue, ""];
    setInnerValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
    if (onItemAdd) {
      onItemAdd(newValue.length - 1, newValue);
    }
  }, [canAddMore, innerValue, onChange, onItemAdd]);

  const handleRemoveItem = useCallback(
    (index: number) => {
      if (!canRemove) return;

      const deletedValue = innerValue[index];
      const newValue = innerValue.filter((_, i) => i !== index);
      setInnerValue(newValue);

      if (onChange) {
        onChange(newValue);
      }
      if (onItemRemove) {
        onItemRemove(index, deletedValue, newValue);
      }
    },
    [canRemove, innerValue, onChange, onItemRemove]
  );

  // 将字符串数组转换为拖拽列表项
  const dragListItems = useMemo((): AriDragListItem[] => {
    return innerValue.map((item, index) => ({
      id: index.toString(),
      content: (
        <div className={cs.e('drag-item-content')}>
          <div className={cs.e('input-wrapper')}>
            <AriTextInput
              value={item}
              onChange={(newValue) => handleItemChange(index, newValue)}
              placeholder={itemPlaceholder}
              disabled={disabled}
              variant={variant}
              status={status}
              bordered={bordered}
              enableHoverFocusEffect={enableHoverFocusEffect}
              size={size}
              maxWidth={maxWidth}
              minWidth={minWidth}
              className={cs.e('input')}
            />
          </div>
          {canRemove && (
            <div
              className={cs.e('remove-button')}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveItem(index);
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
  }, [innerValue, itemPlaceholder, disabled, size, maxWidth, minWidth, canRemove, cs, handleItemChange, handleRemoveItem]);

  // 处理拖拽排序 - 需要重新计算值的映射，因为拖拽会改变顺序
  const handleDragSort = useCallback((newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
    // 重新排序原始数组
    const newValues = [...innerValue];
    const [movedItem] = newValues.splice(fromIndex, 1);
    newValues.splice(toIndex, 0, movedItem);
    
    setInnerValue(newValues);
    if (onChange) {
      onChange(newValues);
    }
    // 调用拖拽排序回调
    if (onDragSort) {
      onDragSort(fromIndex, toIndex, newValues);
    }
  }, [innerValue, onChange, onDragSort]);

  // 业务逻辑函数
  const validateAndFilterItems = useCallback(() => {
    if (allowEmpty) {
      return innerValue;
    }
    return innerValue.filter((item) => item.trim() !== "");
  }, [innerValue, allowEmpty]);

  // 样式计算
  const containerStyle = useMemo(() => {
    const style: React.CSSProperties = {};
    if (maxWidth !== undefined) {
      style.maxWidth =
        typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
    }
    if (minWidth !== undefined) {
      style.minWidth =
        typeof minWidth === "number" ? `${minWidth}px` : minWidth;
    }
    return style;
  }, [maxWidth, minWidth]);


  // 条件渲染判断
  if (innerValue.length === 0 && !canAddMore) {
    return (
      <AriContainer
        className={cs.gen(cs.b(), className)}
        style={containerStyle}
      >
        {label && <AriTypography variant='body' className={cs.e("label")} value={label} />}
        <div className={cs.e("empty-state")}>无可编辑项</div>
      </AriContainer>
    );
  }

  // 主要JSX返回
  return (
      <AriContainer
        className={cs.gen(
          cs.b(),
          cs.is("disabled", disabled),
          cs.is(`status-${status}`, status !== "default"),
          cs.m(size),
          className
        )}
      style={containerStyle}
    >
      {label && <AriTypography variant='body' className={cs.e("label")} value={label} />}

      <div className={cs.e("wrapper")}>
        <AriDragList
          items={dragListItems}
          onSortChange={allowDrag ? handleDragSort : undefined}
          disabled={disabled || !allowDrag}
          gap="xs"
          showDragHandle={allowDrag}
          emptyContent={<AriEmpty description="暂无数据，点击下方按钮添加" />}
          className={cs.e('drag-list')}
        />

        {canAddMore && (
          <AriButton
            type="dashed"
            disabled={disabled}
            onClick={disabled ? undefined : handleAddItem}
            label={addText}
            icon="add"
          />
        )}
      </div>

      {maxItems && (
        <div className={cs.e("count")}>
          {innerValue.length}/{maxItems}
        </div>
      )}
      {help ? (
        <div className={cs.e("help")}>
          {help}
        </div>
      ) : null}
    </AriContainer>
  );
};
