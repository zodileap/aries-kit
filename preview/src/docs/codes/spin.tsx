import { useState } from 'react';
import { AriSpin, AriButton, AriFlex, useCss, AriIcon } from '@aries-kit/react';

export const BasicSpin = () => {
    const [spinning, setSpinning] = useState(true);
    const cs = useCss("")
    return (
        <AriFlex>
            <AriSpin spinning={spinning} className="preview-spin-outline">
                <div style={{ padding: '20px', backgroundColor: cs.getCssVarName('color', 'bg'), minHeight: '120px' }}>
                    可以被包裹的内容区域
                </div>
            </AriSpin>

            <AriButton onClick={() => setSpinning(!spinning)}>
                {spinning ? '停止加载' : '开始加载'}
            </AriButton>
        </AriFlex>
    );
};

export const CustomIconDemo = () => {
    return (
        <AriFlex>

            <AriSpin icon={<AriIcon name="refresh" className="custom-spinning-icon" />}>
                <div style={{ padding: '20px' }}>使用自定义图标</div>
            </AriSpin>


            <AriSpin
                icon={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AriIcon name="sync" className="spinning-icon" />
                        <AriIcon name="arrow_forward" style={{ marginLeft: '5px' }} />
                    </div>
                }
            >
                <div style={{ padding: '20px' }}>使用复杂自定义图标</div>
            </AriSpin>
        </AriFlex>
    );
};

export const FullScreenDemo = () => {
    const [fullScreenSpinning, setFullScreenSpinning] = useState(false);

    return (
        <>
            <AriButton onClick={() => setFullScreenSpinning(true)}>
                显示全屏加载
            </AriButton>

            {fullScreenSpinning && (
                <AriSpin
                    fullScreen
                    spinning={true}
                    tip="加载中，请稍候..."
                    onClick={() => setFullScreenSpinning(false)}
                />
            )}
            <p>点击全屏遮罩可关闭</p>
        </>
    );
};

export const SizeDemo = () => {
    return (
        <AriFlex space={48} align='center'>

            <AriSpin size="xs">
                <div style={{ padding: '20px' }}>超小尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="sm">
                <div style={{ padding: '20px' }}>小尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="default">
                <div style={{ padding: '20px' }}>默认尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="lg">
                <div style={{ padding: '20px' }}>大尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="xl">
                <div style={{ padding: '20px' }}>超大尺寸加载图标</div>
            </AriSpin>
        </AriFlex>
    );
};

export const TipDemo = () => {
    return (
        <AriFlex space={48} align='center'>
            <AriSpin tip="加载中，请稍候...">
                <div style={{ padding: '20px' }}>内容区域</div>
            </AriSpin>
        </AriFlex>
    );
};
