import  { useState, useEffect } from 'react';
import { useCss } from '@ari/utils';
import { AriTextInput } from './text-input';
import { AriInputNumberProps } from '@ari/types/components';
import { AriIcon } from '../icon';

/**
 * 数字输入框组件
 * 用于输入数值类内容
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export const AriInputNumber: React.FC<AriInputNumberProps> = (props) => {
  const {
    value,
    defaultValue,
    min,
    max,
    step = 1,
    precision,
    disabled = false,
    onChange,
    className,
    style,
    ...rest
  } = props;

  const cs = useCss('input-number');
  const [innerValue, setInnerValue] = useState<number | undefined>(
    value !== undefined ? value : defaultValue
  );

  const [inputValue, setInputValue] = useState<string>(
    innerValue !== undefined ? String(innerValue) : ''
  );

  useEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
      setInputValue(value !== undefined ? String(value) : '');
    }
  }, [value]);

  const formatNumber = (num: number): number => {
    if (precision !== undefined) {
      const factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    }
    return num;
  };

  const limitValue = (val: number): number => {
    let result = val;

    if (min !== undefined) {
      result = Math.max(min, result);
    }

    if (max !== undefined) {
      result = Math.min(max, result);
    }

    return formatNumber(result);
  };

  const handleInputChange = (val: string) => {
    setInputValue(val);

    // 允许空值和单独的负号
    if (val === '' || val === '-') {
      if (value === undefined) {
        setInnerValue(undefined);
      }
      return;
    }

    const parsedValue = parseFloat(val);
    if (!isNaN(parsedValue)) {
      const limitedValue = limitValue(parsedValue);
      if (value === undefined) {
        setInnerValue(limitedValue);
      }
      onChange?.(limitedValue);
    }
  };

  const handleStep = (isUp: boolean) => {
    if (disabled) return;

    const currentValue = innerValue ?? 0;
    const newValue = isUp ? currentValue + step : currentValue - step;
    const limitedValue = limitValue(newValue);

    setInputValue(String(limitedValue));

    if (value === undefined) {
      setInnerValue(limitedValue);
    }

    onChange?.(limitedValue);
  };

  const handleBlur = () => {
    // 当输入框失焦时，格式化输入值
    if (inputValue === '' || inputValue === '-') {
      if (min !== undefined && min >= 0) {
        const newValue = min;
        setInputValue(String(newValue));
        if (value === undefined) {
          setInnerValue(newValue);
        }
        onChange?.(newValue);
      } else {
        if (value === undefined) {
          setInnerValue(undefined);
        }
        setInputValue('');
      }
      return;
    }

    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      const limitedValue = limitValue(parsedValue);
      setInputValue(String(limitedValue));
      if (value === undefined) {
        setInnerValue(limitedValue);
      }
      onChange?.(limitedValue);
    }
  };

  const renderNumberHandler = () => (
    <div className={cs.e('handler-wrap')}>
      <span
        className={cs.gen(
          cs.e('handler'),
          cs.e('handler-down'),
          cs.is('disabled', disabled || (min !== undefined && innerValue !== undefined && innerValue <= min))
        )}
        onClick={() => handleStep(false)}
      >
        <span className={cs.e('handler-down-icon')}>
          <AriIcon name="remove" />
        </span>
      </span>
      <span
        className={cs.gen(
          cs.e('handler'),
          cs.e('handler-up'),
          cs.is('disabled', disabled || (max !== undefined && innerValue !== undefined && innerValue >= max))
        )}
        onClick={() => handleStep(true)}
      >
        <span className={cs.e('handler-up-icon')}>
          <AriIcon name="add" />
        </span>
      </span>
    </div>
  );

  return (
    <AriTextInput
      className={cs.gen(cs.b(), className)}
      style={style}
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleBlur}
      disabled={disabled}
      type="text"
      suffix={renderNumberHandler()}
      {...rest}
    />
  );
};