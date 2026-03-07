import { useCss } from "@ari/utils";
import { AriIcon } from '@ari/components/icon';
import { AriTagProps } from '@ari/types/components';
import { AriTypography } from "../typography";
import { useState } from "react";

// 获取文字颜色的辅助函数
const getTextColor = (backgroundColor: string): string => {
    // 如果是CSS变量或者其他复杂颜色，使用白色
    if (backgroundColor.startsWith('var(') || backgroundColor.startsWith('#') === false) {
        return '#fff';
    }
    
    // 简单的亮度检测
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    // 使用相对亮度公式
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // 如果背景较亮使用深色文字，否则使用浅色文字
    return brightness > 128 ? '#000' : '#fff';
};

/**
 * 标签组件 
 * 
 * Example:
 * {@link https://aries-react.dev/docs/tag}
 */
export const AriTag: React.FC<AriTagProps> = ({
    children,
    className,
    closable = false,
    color,
    icon,
    bordered = false,
    onClose,
    onClick,
    size = 'default',
    active = false,
}) => {
    const cs = useCss('tag');

    const [visible, setVisible] = useState(true);

    const handleClose = (e: React.MouseEvent<Element>) => {
        e.stopPropagation();
        onClose?.(e as React.MouseEvent<HTMLElement>);
        setVisible(false);
    };

    // 预定义颜色列表
    const predefinedColors = [
        'primary', 'success', 'warning', 'danger', 'info',
        'blue', 'green', 'grey', 'orange', 'persimmon', 'pink', 'purple', 'red', 'teal', 'violet', 'yellow',
        'pale-blue', 'pale-green', 'pale-persimmon', 'pale-pink', 'pale-purple', 'pale-red', 'pale-violet', 'pale-yellow'
    ];

    // 检查是否为预定义颜色
    const isPredefinedColor = color && predefinedColors.includes(color);
    const isCustomColor = color && !isPredefinedColor;

    // 生成样式类名
    const classNames = cs.gen(
        cs.b(),
        isPredefinedColor && !bordered ? cs.m(color) : '',
        bordered ? cs.m('bordered') : '',
        isPredefinedColor && bordered ? cs.is(color) : '',
        size !== 'default' ? cs.m(size) : '',
        active ? cs.is('active') : '',
        className
    );

    // 自定义颜色样式
    const customStyle = {
        display: !visible ? 'none' : undefined,
        ...(isCustomColor && {
            backgroundColor: bordered ? 'transparent' : color,
            color: bordered ? color : getTextColor(color),
            borderColor: color
        })
    };

    return (
        <div 
            className={classNames} 
            style={customStyle}
            onClick={onClick}
        >
            {icon && (
                <AriIcon 
                    name={icon} 
                    className={cs.e('icon')} 
                    size={size} 
                />
            )}
            <div className={cs.e('content')}>{children}</div>
            {closable && (
                <AriIcon
                    name="close"
                    className={cs.e('close-icon')}
                    onClick={handleClose}
                    size={size}
                />
            )}
        </div>
    );
};

export default AriTag;