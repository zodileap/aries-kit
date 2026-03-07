import  { useState } from 'react';
import { useCss } from '@ari/utils';
import { AriTextInput } from './text-input';
import { AriIcon } from '../icon';
import { AriSearchInputProps } from '@ari/types/components';

/**
 * 搜索输入框组件
 * 在TextInput基础上增加搜索按钮功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/input}
 */
export const AriSearchInput: React.FC<AriSearchInputProps> = ({
    value,
    onChange,
    onSearch,
    loading = false,
    enterButton = true,
    className,
    size = 'default',
    ...props
}) => {
    const cs = useCss("search-input");
    const [innerValue, setInnerValue] = useState(value || '');

    const handleChange = (val: string) => {
        setInnerValue(val);
        if (onChange) {
            onChange(val);
        }
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(innerValue);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const renderSearchButton = () => {
        if (!enterButton) return null;

        // 根据size确定图标尺寸
        const iconSize = (() => {
            switch(size) {
                case 'xs': return 'xs';
                case 'sm': return 'sm';
                case 'lg': return 'lg';
                case 'xl': return 'xl';
                case 'xxl': return 'xxl';
                default: return 'default';
            }
        })();

        return (
            <div className={cs.e("button")} onClick={handleSearch}>
                {loading ? (
                    <AriIcon name="loading" className={cs.e("loading-icon")} size={iconSize} />
                ) : (
                    enterButton === true ? (
                        <AriIcon name="search" size={iconSize} />
                    ) : (
                        enterButton
                    )
                )}
            </div>
        );
    };

    return (
        <AriTextInput
            className={cs.gen(cs.b(), cs.m(size), className)}
            value={value !== undefined ? value : innerValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            suffix={renderSearchButton()}
            size={size}
            {...props}
        />
    );
};
