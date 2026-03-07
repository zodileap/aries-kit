import React, { useState } from 'react';
import { AriColorPicker, AriRow, AriCol, AriForm, AriFlex, AriButton, AriFormItem, useForm } from '@aries-kit/react';
import { AriColorValue } from '@ari/types/components/color-picker';

export const BasicColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('#1890ff');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    {color}
                </div>
            </AriCol>
        </AriRow>
    );
};

export const SizeColorPicker: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriColorPicker defaultValue="#1890ff" size="sm" />
            <AriColorPicker defaultValue="#1890ff" size="default" />
            <AriColorPicker defaultValue="#1890ff" size="lg" />
        </AriFlex>
    );
};

export const CustomPresetColorPicker: React.FC = () => {
    const presetColors = [
        '#F5222D', '#FA541C', '#FA8C16', '#FAAD14', '#FADB14',
        '#A0D911', '#52C41A', '#13C2C2', '#1890FF', '#2F54EB',
        '#722ED1', '#EB2F96', '#F5222D', '#FA541C', '#FA8C16'
    ];

    return (
        <AriColorPicker defaultValue="#1890ff" presetColors={presetColors} />
    );
};

export const FormatColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('rgb(24, 144, 255)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={6}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsl(215, 100%, 55%)"
                    format="hsl"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsb(215, 91%, 100%)"
                    format="hsb"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="#1890ff"
                    format="hex"
                />
            </AriCol>
        </AriRow>
    );
};

export const AlphaColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    showAlpha
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                }}>
                    <div style={{
                        backgroundColor: color,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px'
                    }}>
                        {color}
                    </div>
                </div>
            </AriCol>
        </AriRow>
    );
};

export const GradientColorPicker: React.FC = () => {
    const [colorValue, setColorValue] = useState<AriColorValue>({
        direction: 'to right',
        stops: [
            { color: '#1890ff', position: 0 },
            { color: '#f5222d', position: 100 }
        ]
    });

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={colorValue}
                    enableGradient
                    onChange={setColorValue}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    backgroundImage: typeof colorValue === 'object' ?
                        `linear-gradient(${colorValue.direction}, ${colorValue.stops.map(stop =>
                            `${stop.color} ${stop.position}%`).join(', ')})` :
                        'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    渐变色预览
                </div>
            </AriCol>
        </AriRow>
    );
};

export const DisabledColorPicker: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriColorPicker defaultValue="#1890ff" disabled />
            <AriColorPicker defaultValue="#722ed1" placement="top" showInput={false} />
        </AriFlex>
    );
};

export const FormUsageColorPicker: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};
