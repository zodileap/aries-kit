import React, { useState, useCallback } from 'react';
import { useCss } from '@ari/utils';
import { AriIcon } from '@ari/components';
import { AriCalloutProps, AriCalloutType } from '@ari/types';

// 告示框类型对应的图标映射
const typeIconMap: Record<AriCalloutType, string> = {
  note: 'sticky_note_2',
  tip: 'lightbulb',
  info: 'info',
  warning: 'warning',
  danger: 'error'
};

// 告示框类型对应的默认标题
const typeTitleMap: Record<AriCalloutType, string> = {
  note: '注意',
  tip: '提示',
  info: '信息',
  warning: '警告',
  danger: '危险'
};

/**
 * 告示框组件
 * 用于显示不同类型的提示信息，支持折叠功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/callout}
 */
export const AriCallout: React.FC<AriCalloutProps> = ({
  type = 'note',
  title,
  children,
  className,
  showIcon = true,
  collapsible = false,
  defaultExpanded = true,
  onExpandedChange
}) => {
  const cn = useCss('callout');
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleToggle = useCallback(() => {
    if (collapsible) {
      const newExpanded = !expanded;
      setExpanded(newExpanded);
      onExpandedChange?.(newExpanded);
    }
  }, [collapsible, expanded, onExpandedChange]);

  const displayTitle = title || typeTitleMap[type];
  const iconName = typeIconMap[type];

  return (
    <div 
      className={cn.gen(
        className,
        cn.b(),
        cn.m(type),
        cn.is('collapsible', collapsible),
        cn.is('expanded', expanded)
      )}
    >
      <div 
        className={cn.gen(
          cn.e('header'),
          cn.is('clickable', collapsible)
        )}
        onClick={handleToggle}
      >
        <div className={cn.e('title-wrapper')}>
          {showIcon && (
            <AriIcon 
              name={iconName}
              className={cn.e('icon')}
            />
          )}
          <span className={cn.e('title')}>
            {displayTitle}
          </span>
        </div>
        
        {collapsible && (
          <AriIcon
            name={expanded ? 'expand_less' : 'expand_more'}
            className={cn.e('toggle-icon')}
          />
        )}
      </div>

      <div className={cn.gen(
        cn.e('content'),
        cn.is('hidden', collapsible && !expanded)
      )}>
        <div className={cn.e('body')}>
          {children}
        </div>
      </div>
    </div>
  );
};
