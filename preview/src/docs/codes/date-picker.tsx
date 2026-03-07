import React, { useState } from 'react';
import { AriDatePicker } from '@aries-kit/react';
import { AriDatePickerProps } from '@ari/types';
import { AriFlex, AriTypography } from '@aries-kit/react';

export const BasicDatePicker: React.FC = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const handleChange = (newDate: Date | undefined) => {
        setDate(newDate);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='h4' value="基础用法" />
            <AriDatePicker value={date} onChange={handleChange} />

            <AriTypography variant='h4' value="不同尺寸" />
            <AriFlex space={8} align="center">
                <AriDatePicker placeholder="小尺寸" size="small" />
                <AriDatePicker placeholder="中等尺寸" size="medium" />
                <AriDatePicker placeholder="大尺寸" size="large" />
            </AriFlex>

            <AriTypography variant='h4' value="清除按钮" />
            <AriDatePicker defaultValue={new Date()} clearable={true} />
            <AriDatePicker defaultValue={new Date()} clearable={false} placeholder="不可清除" />

            <AriTypography variant='h4' value="禁用状态" />
            <AriDatePicker defaultValue={new Date()} disabled />

            <AriTypography variant='h4' value="自定义格式" />
            <AriDatePicker 
                defaultValue={new Date()} 
                format={(d) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`} 
            />

            <AriTypography variant='h4' value="日期范围限制" />
            <AriDatePicker 
                minDate={new Date(2025, 4, 1)} // May 1, 2025
                maxDate={new Date(2025, 4, 15)} // May 15, 2025
                placeholder="选择 5/1 到 5/15 之间的日期"
            />

            <AriTypography variant='h4' value="带时间选择" />
            <AriDatePicker showTime defaultValue={new Date()} />

            <AriTypography variant='h4' value="带时间选择并自定义格式" />
            <AriDatePicker 
                showTime 
                defaultValue={new Date()} 
                dateTimeFormat={(d) => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${d.getHours()}:${d.getMinutes()}`}
            />
        </AriFlex>
    );
};

export const AdvancedDatePicker: React.FC = () => {
    return (
        <>
            <style>{`
                .preview-date-picker-outline {
                    outline: 2px dashed var(--z-color-warning);
                    outline-offset: 4px;
                    border-radius: 14px;
                }
            `}</style>
            <AriFlex vertical space={16}>
                <AriTypography variant='h4' value='高级配置' />
                <AriDatePicker
                    defaultValue={new Date(2025, 4, 10)}
                    maxDate={new Date(2025, 4, 20)}
                    disabledDates={[new Date(2025, 4, 12), new Date(2025, 4, 16)]}
                    calendarProps={{
                        showToday: false,
                        firstDayOfWeek: 1,
                    }}
                    placement='top-end'
                    prefixIcon='event_available'
                    readonly={false}
                    className='preview-date-picker-outline'
                    style={{ width: 320 }}
                    placeholder='顶部弹出，可手动输入'
                />

                <AriTypography variant='h4' value='日期时间联动' />
                <AriDatePicker
                    showTime
                    defaultValue={new Date(2025, 4, 18, 14, 30, 0)}
                    timePickerProps={{
                        showSecond: false,
                        use12Hours: true,
                        prefixIcon: 'schedule_send',
                    }}
                    dateTimeFormat={(d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.toLocaleTimeString()}`}
                    placeholder='选择日期与时间'
                />
            </AriFlex>
        </>
    );
};
