// @/components/AriSpin.tsx
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';
import { AriSpinProps } from '@ari/types/components';

/**
 * 加载中组件
 * 用于展示内容区域的加载状态
 * 
 * Example:
 * {@link https://aries-react.dev/docs/spin}
 */
export const AriSpin: React.FC<AriSpinProps> = ({
    children,
    spinning = true,
    size = 'default',
    fullScreen = false,
    tip,
    icon,
    className,
    ...props
}) => {
    const cs = useCss('spin');

    const renderIndicator = () => (
        <div className={cs.e('indicator')}>
            {icon ? (
            <span className={cs.gen(cs.e('icon'))}>
                {icon}
            </span>
            ) : (
            <AriIcon
                name="loading"
                size={size}
                className={cs.gen(cs.e('icon'))}
            />
            )}
            {tip && <div className={cs.e('tip')}>{tip}</div>}
        </div>
    );

    if (fullScreen) {
        return (
            <>
                {children}
                {spinning && (
                    <div className={cs.gen(cs.b(), cs.m('fullscreen'), className)} {...props}>
                        {renderIndicator()}
                    </div>
                )}
            </>
        );
    }


    // 包裹子元素的正常模式
    return (
        <div className={cs.gen(cs.b(), className)} {...props}>
            <div className={cs.e('container')}>
                {children}
                <div className={cs.gen(cs.e('mask'), cs.is('spinning', spinning))}>
                    {renderIndicator()}
                </div>
            </div>
        </div>
    );
};