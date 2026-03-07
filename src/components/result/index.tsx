import React, { useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components/icon';
import { AriResultProps } from '@ari/types/components/result';
import { AriImage } from '../image';
import { AriTypography } from '../typography';

/**
 * 结果组件
 * 用于展示操作结果的反馈组件，包含不同状态的图标、标题、描述和额外内容
 * 
 * Example:
 * {@link https://aries-react.dev/docs/result}
 */
export const AriResult: React.FC<AriResultProps> = ({
    status = 'info',
    title,
    subTitle,
    icon,
    image,
    extra,
    className,
    children,
    ...restProps
}) => {
    // 状态初始化和引用的hook
    const cs = useCss('result');

    // 派生状态计算
    const statusIcon = useMemo(() => {
        if (icon) return icon;
        
        switch (status) {
            case 'success':
                return 'check_circle';
            case 'error':
                return 'error';
            case 'warning':
                return 'warning';
            case 'info':
            default:
                return 'info';
        }
    }, [status, icon]);

    // 样式计算
    const containerClassName = useMemo(() => {
        return cs.gen(cs.b(), cs.m(status), className);
    }, [cs, status, className]);

    // 主要JSX返回
    return (
        <div className={containerClassName} {...restProps}>
            <div className={cs.e('icon-container')}>
                {image ? (
                    <AriImage
                        usage='image'
                        src={image}
                        alt={typeof title === 'string' ? title : 'result'}
                        className={cs.e('image')}
                    />
                ) : (
                    <AriIcon
                        name={statusIcon}
                        size="xl"
                        className={cs.e('icon')}
                    />
                )}
            </div>
            
            {title && (
                <div className={cs.e('title')}>
                    {typeof title === 'string' ? (
                        <AriTypography variant='h1'>{title}</AriTypography>
                    ) : (
                        title
                    )}
                </div>
            )}
            
            {subTitle && (
                <div className={cs.e('subtitle')}>
                    {typeof subTitle === 'string' ? (
                        <AriTypography variant='body'>{subTitle}</AriTypography>
                    ) : (
                        subTitle
                    )}
                </div>
            )}
            
            {children && (
                <div className={cs.e('content')}>
                    {children}
                </div>
            )}
            
            {extra && (
                <div className={cs.e('extra')}>
                    {extra}
                </div>
            )}
        </div>
    );
};