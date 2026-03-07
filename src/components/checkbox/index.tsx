import { useState, useEffect, useContext } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components/icon';
import { AriCheckboxGroupProps, AriCheckboxProps } from '@ari/types';
import { CheckboxContext } from './context';

/**
 * 复选框组件
 * 
 * 用于在表单中收集用户的多选输入，或在列表中进行多选操作
 * 
 * Example:
 * {@link https://aries-react.dev/docs/checkbox}
 */
export const AriCheckbox: React.FC<AriCheckboxProps> = ({
    checked: propChecked,
    defaultChecked = false,
    onChange,
    value,
    children,
    disabled = false,
    indeterminate = false,
    className
}) => {
    const cs = useCss('checkbox');
    const groupContext = useContext(CheckboxContext);

    // 处理受控与非受控模式
    const [innerChecked, setInnerChecked] = useState(defaultChecked);

    // 优先使用context中的状态（用于CheckboxGroup）
    const isChecked = groupContext
        ? groupContext.value?.includes(value as string | number)
        : propChecked !== undefined ? propChecked : innerChecked;

    // 合并禁用状态
    const isDisabled = groupContext?.disabled || disabled;

    useEffect(() => {
        if (propChecked !== undefined) {
            setInnerChecked(propChecked);
        }
    }, [propChecked]);

    const handleClick = () => {
        if (isDisabled) return;

        if (groupContext && value !== undefined) {
            // 在CheckboxGroup中使用
            groupContext.toggleOption(value);
        } else {
            // 独立使用
            const newChecked = !isChecked;
            setInnerChecked(newChecked);
            onChange?.(newChecked);
        }
    };

    return (
        <div
            className={cs.gen(
                cs.b(),
                cs.is('disabled', isDisabled),
                className
            )}
            onClick={handleClick}
        >
            <div
                className={cs.gen(
                    cs.e('box'),
                    cs.is('checked', isChecked),
                    cs.is('indeterminate', indeterminate)
                )}
            >
                {indeterminate ? (
                    <AriIcon
                        name="check_indeterminate_small"
                        color="var(--z-color-text-on-brand)"
                    />
                ) : isChecked && (
                    <AriIcon
                        name="check"
                        color="var(--z-color-text-on-brand)"
                    />
                )}
            </div>
            {children && (
                <div className={cs.e('label')}>
                    {children}
                </div>
            )}
        </div>
    );
};

/**
 * 复选框组组件
 * 
 * 管理多个复选框的选中状态，常用于多选列表或表单中的多选项分组
 */
export const AriCheckboxGroup: React.FC<AriCheckboxGroupProps> = ({
    value: propValue,
    defaultValue = [],
    onChange,
    children,
    disabled = false,
    className
}) => {
    const cs = useCss('checkbox-group');
    const [innerValue, setInnerValue] = useState<Array<string | number>>(defaultValue);

    // 实际选中的值数组
    const value = propValue !== undefined ? propValue : innerValue;

    useEffect(() => {
        if (propValue !== undefined) {
            setInnerValue(propValue);
        }
    }, [propValue]);

    const toggleOption = (optionValue: string | number) => {
        const newValue = [...value];
        const index = newValue.indexOf(optionValue);

        if (index !== -1) {
            newValue.splice(index, 1);
        } else {
            newValue.push(optionValue);
        }

        setInnerValue(newValue);
        onChange?.(newValue);
    };

    return (
        <CheckboxContext.Provider value={{ value, disabled, toggleOption }}>
            <div className={cs.gen(cs.b(), className)}>
                {children}
            </div>
        </CheckboxContext.Provider>
    );
};