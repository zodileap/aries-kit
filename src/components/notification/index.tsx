// src/components/notification/index.tsx
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';
import { 
  AriNotificationConfig, 
  AriNotificationContextType, 
  AriNotificationPosition, 
  AriNotificationProps, 
  AriNotificationProviderProps 
} from '@ari/types';
import { createRoot } from 'react-dom/client';

// 用于生成唯一ID的种子
let seed = 0;

// 保存所有通知实例的Map
const notificationInstances = new Map<string, {
  close: () => void;
  height: number;
  timestamp: number;
  position: AriNotificationPosition;
}>();

// 创建通知上下文
const AriNotificationContext = createContext<AriNotificationContextType | null>(null);

/**
 * 通知组件
 * 用于显示全局性的通知信息
 * 
 * Example:
 * {@link https://aries-react.dev/docs/notification}
 */
const Notification: React.FC<AriNotificationProps> = ({
  id,
  title,
  content,
  type = 'info',
  position = 'top-right',
  duration = 3000,
  showClose = true,
  zIndex,
  className,
  visible,
  onClose,
  ...restProps
}) => {
  // 1. 状态初始化和引用hook
  const cs = useCss('notification');
  const [isLeaving, setIsLeaving] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // 2. 派生状态计算
  const typeIcon = useMemo(() => {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
      default:
        return 'info';
    }
  }, [type]);

  // 3. 事件处理函数
  const handleClose = useCallback(() => {
    setIsLeaving(true);
    // 等待离开动画完成后执行关闭回调
    setTimeout(() => {
      onClose?.();
      notificationInstances.delete(id);
      updateNotificationPositions();
    }, 300); // 动画持续时间
  }, [id, onClose]);

  // 4. 副作用处理
  useEffect(() => {
    if (notificationRef.current && visible && !isLeaving) {
      const newHeight = notificationRef.current.offsetHeight;
      const instance = notificationInstances.get(id);
      
      if (instance) {
        instance.height = newHeight;
        updateNotificationPositions();
      }
    }
  }, [id, visible, isLeaving]);

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, handleClose]);

  // 5. 渲染通知组件
  return (
    <div
      ref={notificationRef}
      id={id}
      className={cs.gen(
        cs.b(),
        cs.m(position),
        cs.m(type),
        cs.is('enter', visible && !isLeaving),
        cs.is('leave', isLeaving),
        className
      )}
      style={{ zIndex }}
      {...restProps}
    >
      <div className={cs.e('header')}>
        <div className={cs.e('title')}>
          <AriIcon name={typeIcon} className={cs.gen(cs.e('icon'), cs.is(type))} />
          {title}
        </div>
        {showClose && (
          <AriIcon
            name="close"
            className={cs.e('close')}
            onClick={handleClose}
          />
        )}
      </div>
      <div className={cs.e('content')}>{content}</div>
    </div>
  );
};

/**
 * 创建通知容器
 */
const createNotificationContainer = () => {
  const containerId = 'ari-notification-container';
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    container.className = 'ari-notification-container';
    document.body.appendChild(container);
  }

  return container;
};

/**
 * 获取通知容器
 */
const getNotificationContainer = () => {
  return createNotificationContainer();
};

/**
 * 更新所有通知的位置
 */
const updateNotificationPositions = () => {
  // 按位置分组
  const notificationsByPosition = new Map<AriNotificationPosition, { id: string, instance: any }[]>();
  
  // 收集所有通知并按位置分组
  Array.from(notificationInstances.entries()).forEach(([id, instance]) => {
    const position = instance.position;
    if (!notificationsByPosition.has(position)) {
      notificationsByPosition.set(position, []);
    }
    notificationsByPosition.get(position)?.push({ id, instance });
  });
  
  // 更新每个位置的通知
  notificationsByPosition.forEach((notifications, position) => {
    // 对每个位置的通知按时间戳排序
    notifications.sort((a, b) => a.instance.timestamp - b.instance.timestamp);
    
    // 计算偏移量
    const isTop = position.startsWith('top');
    const baseOffset = 24; // 基础偏移量，对应CSS中的getVar(inset, xl)
    let currentOffset = baseOffset;
    
    notifications.forEach(({ id }) => {
      const notificationElement = document.getElementById(id);
      if (notificationElement) {
        if (isTop) {
          notificationElement.style.top = `${currentOffset}px`;
        } else {
          // bottom位置现在使用top计算：100vh - 通知高度 - 当前偏移
          const windowHeight = window.innerHeight;
          const notificationHeight = notificationElement.offsetHeight || 100; // 默认高度100px
          notificationElement.style.top = `${windowHeight - notificationHeight - currentOffset}px`;
        }
        
        // 更新下一个通知的偏移量
        currentOffset += (notificationElement.offsetHeight || 100) + 16; // 通知高度 + 间距
      }
    });
  });
};

/**
 * 创建一个通知
 */
const createNotification = (config: AriNotificationConfig & { id?: string }) => {
  const notificationId = config.id || `notification-${seed++}`;
  const timestamp = Date.now();
  
  // 当前可见状态
  let currentVisible = true;
  const position = config.position || 'top-right';
  
  // 创建实例并存储
  const instance = {
    close: () => {
      // 为了保证动画效果，先设置visible为false
      currentVisible = false;
      // 触发关闭会在Notification组件内部处理
    },
    height: 0,
    timestamp,
    position
  };
  
  notificationInstances.set(notificationId, instance);
  
  // 使用统一的通知容器渲染
  const container = getNotificationContainer();
  const notificationWrapper = document.createElement('div');
  container.appendChild(notificationWrapper);
  
  // 使用createRoot渲染组件
  const root = createRoot(notificationWrapper);
  root.render(
    <Notification
      {...config}
      id={notificationId}
      visible={currentVisible}
      onClose={() => {
        root.unmount();
        container.removeChild(notificationWrapper);
        config.onClose?.();
      }}
    />
  );
  
  // 更新close方法以正确处理动画
  instance.close = () => {
    currentVisible = false;
    root.render(
      <Notification
        {...config}
        id={notificationId}
        visible={false}
        onClose={() => {
          root.unmount();
          if (container.contains(notificationWrapper)) {
            container.removeChild(notificationWrapper);
          }
          config.onClose?.();
        }}
      />
    );
  };
  
  // 延迟更新位置，确保DOM已渲染
  setTimeout(() => {
    updateNotificationPositions();
  }, 50);
  
  return {
    id: notificationId,
    close: instance.close
  };
};

/**
 * 通知上下文提供者
 * 
 * Example:
 * {@link https://aries-react.dev/docs/notification}
 */
export const AriNotificationProvider: React.FC<AriNotificationProviderProps> = ({
  children,
  maxCount = 5,
  defaultPosition = 'top-right'
}) => {
  // 1. 派生状态计算
  const contextValue = useMemo<AriNotificationContextType>(() => {
    // 添加通知方法
    const addNotification = (config: AriNotificationConfig) => {
      // 检查是否超过最大数量
      if (notificationInstances.size >= maxCount) {
        // 删除最早的通知
        const oldest = Array.from(notificationInstances.entries())
          .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0];
        
        if (oldest) {
          oldest[1].close();
        }
      }
      
      const { id } = createNotification({
        ...config,
        position: config.position || defaultPosition
      });
      
      return id;
    };
    
    // 移除通知方法
    const removeNotification = (id: string) => {
      const instance = notificationInstances.get(id);
      if (instance) {
        instance.close();
      }
    };
    
    // 清除所有通知方法
    const clearAll = () => {
      Array.from(notificationInstances.entries()).forEach(([, instance]) => {
        instance.close();
      });
    };
    
    // 快捷方法：信息通知
    const info = (contentOrConfig: React.ReactNode | Omit<AriNotificationConfig, 'type'>) => {
      const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
      
      return addNotification({
        ...(isConfigObject ? contentOrConfig as Omit<AriNotificationConfig, 'type'> : { content: contentOrConfig }),
        type: 'info'
      });
    };
    
    // 快捷方法：成功通知
    const success = (contentOrConfig: React.ReactNode | Omit<AriNotificationConfig, 'type'>) => {
      const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
      
      return addNotification({
        ...(isConfigObject ? contentOrConfig as Omit<AriNotificationConfig, 'type'> : { content: contentOrConfig }),
        type: 'success'
      });
    };
    
    // 快捷方法：警告通知
    const warning = (contentOrConfig: React.ReactNode | Omit<AriNotificationConfig, 'type'>) => {
      const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
      
      return addNotification({
        ...(isConfigObject ? contentOrConfig as Omit<AriNotificationConfig, 'type'> : { content: contentOrConfig }),
        type: 'warning'
      });
    };
    
    // 快捷方法：错误通知
    const error = (contentOrConfig: React.ReactNode | Omit<AriNotificationConfig, 'type'>) => {
      const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
      
      return addNotification({
        ...(isConfigObject ? contentOrConfig as Omit<AriNotificationConfig, 'type'> : { content: contentOrConfig }),
        type: 'error'
      });
    };
    
    return {
      addNotification,
      removeNotification,
      clearAll,
      info,
      success,
      warning,
      error
    };
  }, [maxCount, defaultPosition]);
  
  // 2. 返回上下文提供者
  return (
    <AriNotificationContext.Provider value={contextValue}>
      {children}
    </AriNotificationContext.Provider>
  );
};

/**
 * 使用通知上下文的钩子
 */
export const useNotification = () => {
  const context = useContext(AriNotificationContext);
  if (!context) {
    throw new Error('useNotification 必须在 AriNotificationProvider 内部使用');
  }
  return context;
};

/**
 * 命令式调用方法类型
 */
type NotificationMethod = {
  (content: React.ReactNode): { id: string; close: () => void; };
  (config: AriNotificationConfig): { id: string; close: () => void; };
};

/**
 * 创建基础通知函数
 */
function baseNotification(contentOrConfig: React.ReactNode | AriNotificationConfig) {
  // 判断参数类型
  const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
  
  // 处理不同的调用方式
  const config = isConfigObject 
    ? contentOrConfig as AriNotificationConfig 
    : { content: contentOrConfig };
    
  return createNotification(config);
}

/**
 * 通知对象
 * 命令式调用通知的方法集合
 * 
 * Example:
 * {@link https://aries-react.dev/docs/notification}
 */
export const AriNotification = baseNotification as unknown as NotificationMethod & {
  info: NotificationMethod;
  success: NotificationMethod;
  warning: NotificationMethod;
  error: NotificationMethod;
  clear: () => void;
};

// 添加不同类型的调用方法
['info', 'success', 'warning', 'error'].forEach((type) => {
  (AriNotification as any)[type] = (contentOrConfig: React.ReactNode | Omit<AriNotificationConfig, 'type'>) => {
    // 判断参数类型
    const isConfigObject = contentOrConfig !== null && typeof contentOrConfig === 'object' && 'content' in contentOrConfig;
    
    // 处理不同的调用方式
    const config = isConfigObject 
      ? { ...(contentOrConfig as Omit<AriNotificationConfig, 'type'>), type: type as any }
      : { content: contentOrConfig, type: type as any };
      
    return createNotification(config);
  };
});

// 添加清除所有通知的方法
AriNotification.clear = () => {
  for (const [, instance] of notificationInstances) {
    instance.close();
  }
  notificationInstances.clear();
};

