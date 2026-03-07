import { AriContainer, AriSwitch, AriFlex, AriTypography } from '@aries-kit/react';
import React, { useState } from 'react';

export const BasicSwitch: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
    };

    return (
        <AriContainer>
            <AriSwitch checked={checked} onChange={handleChange} />
        </AriContainer>
    );
};

export const SizeSwitch: React.FC = () => {
    return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch size="sm" />
            </AriContainer>
            <AriContainer>
                <AriSwitch size="default" />
            </AriContainer>
            <AriContainer>
                <AriSwitch size="lg" />
            </AriContainer>
        </AriFlex>
    );
};

export const DisabledSwitch: React.FC = () => {
    return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch disabled />
            </AriContainer>
            <AriContainer>
                <AriSwitch checked disabled />
            </AriContainer>
        </AriFlex>
    );
};

export const LoadingSwitch: React.FC = () => {
    return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch loading />
            </AriContainer>
            <AriContainer>
                <AriSwitch checked loading />
            </AriContainer>
        </AriFlex>
    );
};

export const TextSwitch: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
    };

    return (
        <AriFlex vertical>
            <AriSwitch checked={checked} onChange={handleChange} checkedChildren="开启" unCheckedChildren="关闭" /> 
        </AriFlex>
    );
};
