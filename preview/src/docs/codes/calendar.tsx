import React, { useState } from 'react';
import { AriCalendar, AriFlex, AriButton, AriTag, AriIcon, AriTooltip } from '@aries-kit/react';

export const BasicCalendar: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    
    return (
        <AriFlex vertical>
            <AriCalendar
                value={date}
                onChange={(newDate) => setDate(newDate)}
            />
            <div style={{ marginTop: 16 }}>
                当前选择的日期: {date.toLocaleDateString()}
            </div>
        </AriFlex>
    );
};

export const DisabledCalendar: React.FC = () => {
    // 禁用过去的日期
    const today = new Date();
    
    // 禁用特定日期
    const disabledDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
    ];
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用过去的日期:</div>
                <AriCalendar minDate={today} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用特定日期:</div>
                <AriCalendar disabledDates={disabledDates} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>完全禁用的日历:</div>
                <AriCalendar disabled />
            </AriFlex>
        </AriFlex>
    );
};

export const ModeCalendar: React.FC = () => {
    const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton onClick={() => setMode('date')} color={mode === 'date' ? 'primary' : 'default'}>日期视图</AriButton>
                <AriButton onClick={() => setMode('month')} color={mode === 'month' ? 'primary' : 'default'}>月份视图</AriButton>
                <AriButton onClick={() => setMode('year')} color={mode === 'year' ? 'primary' : 'default'}>年份视图</AriButton>
            </AriFlex>
            <AriCalendar mode={mode} />
        </AriFlex>
    );
};

export const CustomHeaderCalendar: React.FC = () => {
    return (
        <AriCalendar 
            headerRender={(
                date,
                mode,
                changeMode,
                onPrevMonth,
                onNextMonth,
                onPrevYear,
                onNextYear
            ) => (
                <AriFlex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_left" size="sm" onClick={onPrevMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="left" size="sm" onClick={onPrevYear} />}
                    </AriFlex>
                    
                    <div onClick={() => {
                        if (mode === 'date') changeMode('month');
                        else if (mode === 'month') changeMode('year');
                    }} style={{ cursor: 'pointer' }}>
                        {mode === 'date' && `${date.getFullYear()}年${date.getMonth() + 1}月`}
                        {mode === 'month' && `${date.getFullYear()}年`}
                        {mode === 'year' && `${Math.floor(date.getFullYear() / 10) * 10}年代`}
                    </div>
                    
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_right" size="sm" onClick={onNextMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="right" size="sm" onClick={onNextYear} />}
                    </AriFlex>
                </AriFlex>
            )}
        />
    );
};

export const CustomRenderCalendar: React.FC = () => {
    // 模拟有事件的日期
    const now = new Date();
    const eventsData = {
        [`${now.getFullYear()}-${now.getMonth() + 1}-10`]: { type: 'success', content: '产品发布会' },
        [`${now.getFullYear()}-${now.getMonth() + 1}-15`]: { type: 'warning', content: '团队会议' },
        [`${now.getFullYear()}-${now.getMonth() + 1}-20`]: { type: 'error', content: '项目截止日' },
    };
    
    return (
        <AriCalendar 
            dateRender={(date, isSelected, isDisabled, isToday) => {
                const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                const hasEvent = dateKey in eventsData;
                
                return (
                    <div style={{ 
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: isSelected ? '#1890ff' : isToday ? '#e6f7ff' : 'transparent',
                        color: isSelected ? '#fff' : isDisabled ? '#ccc' : 'inherit',
                        borderRadius: '50%'
                    }}>
                        {date.getDate()}
                        {hasEvent && (
                            <AriTooltip content={eventsData[dateKey].content}>
                                <div style={{ 
                                    position: 'absolute',
                                    bottom: '2px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: eventsData[dateKey].type === 'success' ? '#52c41a' : 
                                               eventsData[dateKey].type === 'warning' ? '#faad14' : '#f5222d'
                                }} />
                            </AriTooltip>
                        )}
                    </div>
                );
            }}
        />
    );
};
