import React, { useState } from 'react';
import { AriTimePicker, AriFlex, AriButton, AriTypography } from '@aries-kit/react';

export const BasicTimePicker: React.FC = () => {
    const [time, setTime] = useState<Date | undefined>(new Date());

    const handleChange = (newTime: Date | undefined) => {
        setTime(newTime);
    };

    return (
        <AriFlex vertical space={16} height={400}>
            <AriTimePicker value={time} onChange={handleChange} />
            <AriTimePicker defaultValue={new Date(2024, 1, 1, 10, 30, 0)} />
            <AriTimePicker use12Hours showSecond={false} />
            <AriTimePicker disabled />
            <AriTimePicker clearable={false} />
        </AriFlex>
    );
};

export const ControlledTimePicker: React.FC = () => {
    const [time, setTime] = useState<Date | undefined>(new Date());

    return (
      <AriFlex vertical space={16} height={300}>
        <AriTimePicker value={time} onChange={setTime} />
        <AriButton onClick={() => setTime(new Date(2025, 4, 9, 12, 0, 0))}>
          Set Time to 12:00
        </AriButton>
        <AriButton onClick={() => setTime(undefined)}>Clear Time</AriButton>
        <div>Selected Time: {time ? time.toLocaleTimeString() : "None"}</div>
      </AriFlex>
    );
};

export const TimePickerStep: React.FC = () => {
    return (
        <AriTimePicker step={{ hour: 2, minute: 15, second: 30 }} />
    );
};

export const TimePickerMinMax: React.FC = () => {
    const minTime = new Date();
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(18, 0, 0, 0);

    return (
        <AriTimePicker minTime={minTime} maxTime={maxTime} />
    );
};

export const TimePickerDisplayDemo: React.FC = () => {
    return (
        <>
            <style>{`
                .preview-time-picker-outline {
                    outline: 2px dashed var(--z-color-info);
                    outline-offset: 4px;
                    border-radius: 14px;
                }
            `}</style>
            <AriFlex vertical space={16} height={320}>
                <AriTypography variant='body' value='这个示例覆盖 format、placeholder、size、placement、prefixIcon、readonly、className 与 style。' />
                <AriTimePicker
                    placeholder='顶部结束位置弹出'
                    size='large'
                    placement='top-end'
                    prefixIcon='alarm'
                    readonly={false}
                    className='preview-time-picker-outline'
                    style={{ width: 320 }}
                    format={(time) => `${time.getHours()} 点 ${time.getMinutes()} 分`}
                />
            </AriFlex>
        </>
    );
};
