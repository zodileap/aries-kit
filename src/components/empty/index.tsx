import React from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components/icon';
import { AriEmptyProps } from '@ari/types/components/empty';
import { AriTypography } from '../typography';
import { AriImage } from '../image';

/**
 * 空状态组件属性
 * 用于显示空状态的提示和图标
 * 
 * Examples:
 * {@link https://aries-react.dev/docs/empty}
 */
export const AriEmpty: React.FC<AriEmptyProps> = ({
    description = "暂无数据",
    icon,
    image = "/assets/images/empty.png",
    className,
    children
}) => {
    const cs = useCss('empty');

    return (
        <div className={cs.gen(cs.b(), className)}>
            {image ? (
                <AriImage
                    usage='image'
                    src={image}
                    alt={description}
                    className={cs.e('image')}
                />
            ) : (
                <AriIcon
                    name={icon}
                    size="lg"
                    className={cs.e('icon')}
                />
            )}
            <AriTypography variant='body' className={cs.e('description')}>{description}</AriTypography>
            {children}
        </div>
    );
};