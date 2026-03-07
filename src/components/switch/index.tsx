import { useState, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriSwitchProps } from '@ari/types/components';
import { AriIcon } from '../icon';

/**
 * 开关组件
 * 用于在两种状态间切换
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/switch}
 */
export const AriSwitch = <T = boolean>(props: AriSwitchProps<T>) => {
  const {
    checked,
    defaultChecked,
    disabled = false,
    onChange,
    className,
    style,
    loading = false,
    size = 'default',
    checkedChildren,
    unCheckedChildren,
    checkedValue,
    uncheckedValue,
    ...rest
  } = props;

  // 确定默认值
  const getDefaultCheckedValue = () => {
    if (defaultChecked !== undefined) return defaultChecked;
    return (uncheckedValue !== undefined ? uncheckedValue : false) as T;
  };

  const getCheckedValue = () => {
    return (checkedValue !== undefined ? checkedValue : true) as T;
  };

  const getUncheckedValue = () => {
    return (uncheckedValue !== undefined ? uncheckedValue : false) as T;
  };

  const [innerValue, setInnerValue] = useState<T>(checked !== undefined ? checked : getDefaultCheckedValue());
  const cs = useCss('switch');

  // 判断当前值是否为选中状态
  const isChecked = innerValue === getCheckedValue();

  useEffect(() => {
    if (checked !== undefined) {
      setInnerValue(checked);
    }
  }, [checked]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      return;
    }

    const newValue = isChecked ? getUncheckedValue() : getCheckedValue();

    if (checked === undefined) {
      setInnerValue(newValue);
    }

    onChange?.(newValue, e);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={cs.gen(
        cs.b(),
        cs.is('checked', isChecked),
        cs.is('disabled', disabled || loading),
        cs.m(size),
        cs.is('loading', loading),
        className
      )}
      style={style}
      onClick={handleClick}
      disabled={disabled || loading}
      {...rest}
    >
      <span className={cs.gen(cs.e('label'), cs.e('label-checked'))}>
        {checkedChildren}
      </span>

      <div className={cs.e('handle')}>
        {loading && <AriIcon name='loading' className={cs.e('loading-icon')} />}
      </div>

      <span className={cs.gen(cs.e('label'), cs.e('label-unchecked'))}>
        {unCheckedChildren}
      </span>
    </button>
  );
};

