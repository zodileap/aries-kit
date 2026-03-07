import { AriContainer, AriSliderComponent, AriFlex, AriIcon } from '@aries-kit/react';
import React, { useState } from 'react';

export const BasicSlider: React.FC = () => {
    const [value, setValue] = useState(30);

    const handleChange = (value: number) => {
        setValue(value);
    };

    return (
        <AriContainer>
            <AriSliderComponent value={value} onChange={handleChange} />
            <div style={{ marginTop: '20px' }}>当前值: {value}</div>
        </AriContainer>
    );
};

export const RangeSlider: React.FC = () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);

    const handleChange = (value: [number, number]) => {
        setValue(value);
    };

    return (
        <AriContainer>
            <AriSliderComponent.Range value={value} onChange={handleChange} />
            <div style={{ marginTop: '20px' }}>当前范围: [{value[0]}, {value[1]}]</div>
        </AriContainer>
    );
};

export const DisabledSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} disabled />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} disabled />
            </AriContainer>
        </AriFlex>
    );
};

export const StepsSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} step={10} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} step={10} />
            </AriContainer>
        </AriFlex>
    );
};

export const MarksSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickCount={5} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickLabels={["差", "一般", "良好", "优秀", "极佳"]} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showTicks 
                    tickCount={4} 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ValueLabelSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showValueLabel 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    showValueLabel 
                    valueLabelFormat={(value) => `${value}%`} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ColorSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} color="primary" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={40} color="success" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} color="warning" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={60} color="danger" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} color="info" />
            </AriContainer>
        </AriFlex>
    );
};

export const VerticalSlider: React.FC = () => {
    return (
        <AriFlex space={24} style={{ height: '200px' }}>
            <AriContainer>
                <AriSliderComponent vertical defaultValue={30} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range vertical defaultValue={[20, 80]} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    vertical 
                    defaultValue={50} 
                    showTicks 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const PrefixSuffixSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    prefix={<AriIcon name="volume_down" />} 
                    suffix={<AriIcon name="volume_up" />} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    prefix="0°C" 
                    suffix="100°C" 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ShapeSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} shape="default" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} shape="rounded" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} shape="square" />
            </AriContainer>
        </AriFlex>
    );
};
