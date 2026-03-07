import React from 'react';
import { AriButton, AriFlex, AriNotificationProvider, useNotification, AriNotification } from '@aries-kit/react';

// 基础用法示例
export const BasicNotification: React.FC = () => {
  const handleClick = () => {
    AriNotification({
      type: 'info',
      title: '基础通知',
      content: '这是一条带完整配置的通知示例',
      zIndex: 4000,
      className: 'preview-notification-basic',
      onClose: () => console.log('notification closed'),
    });
  };

  return (
    <AriButton onClick={handleClick}>显示通知</AriButton>
  );
};

// 不同类型示例
export const NotificationTypes: React.FC = () => {
  return (
    <AriFlex>
      <AriButton onClick={() => AriNotification.info('这是一条信息通知')}>信息通知</AriButton>
      <AriButton onClick={() => AriNotification.success('这是一条成功通知')}>成功通知</AriButton>
      <AriButton onClick={() => AriNotification.warning('这是一条警告通知')}>警告通知</AriButton>
      <AriButton onClick={() => AriNotification.error('这是一条错误通知')}>错误通知</AriButton>
    </AriFlex>
  );
};

// 自定义显示时长示例
export const CustomDurationNotification: React.FC = () => {
  const handleNormalClick = () => {
    // 带标题的使用
    AriNotification.success({
      title: '成功',
      content: '操作已成功完成',
      duration: 3000
    });
  };

  const handleLongClick = () => {
    // 配置更长的显示时间
    AriNotification.success({
      title: '成功',
      content: '将在10秒后自动关闭',
      duration: 10000
    });
  };

  const handlePersistentClick = () => {
    // 设置为0则不会自动关闭
    AriNotification.info({
      title: '通知标题',
      content: '这是一个不会自动关闭的通知',
      duration: 0
    });
  };

  return (
    <AriFlex>
      <AriButton onClick={handleNormalClick}>默认时长</AriButton>
      <AriButton onClick={handleLongClick}>较长时长(10s)</AriButton>
      <AriButton onClick={handlePersistentClick}>不自动关闭</AriButton>
    </AriFlex>
  );
};

// 自定义位置示例
export const CustomPositionNotification: React.FC = () => {
  const positions = [
    'top-right', 'top-left', 'bottom-right', 
    'bottom-left', 'top-center', 'bottom-center'
  ] as const;

  return (
    <AriFlex wrap>
      {positions.map(position => (
        <AriButton 
          key={position}
          onClick={() => AriNotification.warning({
            content: `位置: ${position}`,
            position,
          })}
        >
          {position}
        </AriButton>
      ))}
    </AriFlex>
  );
};

// 不显示关闭图标示例
export const NotificationWithoutClose: React.FC = () => {
  const handleClick = () => {
    AriNotification({
      title: '通知标题',
      content: '这个通知没有关闭按钮',
      showClose: false,
    });
  };

  return (
    <AriButton onClick={handleClick}>没有关闭按钮的通知</AriButton>
  );
};

// 手动关闭示例
export const ManualCloseNotification: React.FC = () => {
  const [closeFunc, setCloseFunc] = React.useState<(() => void) | null>(null);
  
  const handleShow = () => {
    // 手动关闭实例
    const { close } = AriNotification.error('这是一个可以手动关闭的错误通知');
    setCloseFunc(() => close);
  };
  
  const handleClose = () => {
    if (closeFunc) {
      closeFunc();
      setCloseFunc(null);
    }
  };
  
  const handleClearAll = () => {
    // 清除所有通知
    AriNotification.clear();
  };

  return (
    <AriFlex>
      <AriButton onClick={handleShow}>显示通知</AriButton>
      <AriButton onClick={handleClose} disabled={!closeFunc}>手动关闭</AriButton>
      <AriButton onClick={handleClearAll}>清除所有通知</AriButton>
    </AriFlex>
  );
};

// 使用Context钩子示例
export const NotificationWithContext: React.FC = () => {
  const ContextExample = () => {
    const notification = useNotification();
    
    return (
      <AriButton 
        onClick={() => notification.info('这是通过useNotification钩子创建的通知')}
      >
        使用Context
      </AriButton>
    );
  };

  return (
    <AriNotificationProvider>
      <ContextExample />
    </AriNotificationProvider>
  );
};
