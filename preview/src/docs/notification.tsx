import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
  BasicNotification, 
  NotificationTypes, 
  CustomDurationNotification, 
  CustomPositionNotification, 
  NotificationWithoutClose
} from './codes/notification';
import { sourceMap } from './codes/source-map';

export const notificationExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic-usage',
    description: '最简单的使用方式，展示通知信息。',
    demos: [{
      component: BasicNotification,
      sourceCode: sourceMap['notification']['BasicNotification']
    }]
  },
  types: {
    title: '不同类型',
    key: 'different-types',
    description: '通知组件有四种类型：info、success、warning、error。',
    demos: [{
      component: NotificationTypes,
      sourceCode: sourceMap['notification']['NotificationTypes']
    }]
  },
  duration: {
    title: '自定义显示时长',
    key: 'custom-duration',
    description: '可以自定义通知的显示时长，单位为毫秒。设置为0则不会自动关闭。',
    demos: [{
      component: CustomDurationNotification,
      sourceCode: sourceMap['notification']['CustomDurationNotification']
    }]
  },
  position: {
    title: '自定义位置',
    key: 'custom-position',
    description: '可以自定义通知的显示位置，有6个方向可选。',
    demos: [{
      component: CustomPositionNotification,
      sourceCode: sourceMap['notification']['CustomPositionNotification']
    }]
  },
  hideClose: {
    title: '不显示关闭图标',
    key: 'no-close-icon',
    description: '通过设置showClose属性为false，可以隐藏关闭按钮。',
    demos: [{
      component: NotificationWithoutClose,
      sourceCode: sourceMap['notification']['NotificationWithoutClose']
    }]
  }
};

export const notificationAPI: DocAPI = {
  props: [
    {
      param: 'title',
      desc: '通知的标题',
      type: 'ReactNode',
      default: '-'
    },
    {
      param: 'content',
      desc: '通知的内容',
      type: 'ReactNode',
      default: '-'
    },
    {
      param: 'type',
      desc: '通知的类型',
      type: "'info' | 'success' | 'warning' | 'error'",
      default: 'info'
    },
    {
      param: 'position',
      desc: '通知的显示位置',
      type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",
      default: 'top-right'
    },
    {
      param: 'duration',
      desc: '显示时长(ms)，设为0则不会自动关闭',
      type: 'number',
      default: '3000'
    },
    {
      param: 'showClose',
      desc: '是否显示关闭按钮',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'zIndex',
      desc: '层级',
      type: 'number',
      default: '-'
    },
    {
      param: 'className',
      desc: '附加到组件根节点的自定义 CSS 类名',
      type: 'string',
      default: '-'
    },
    {
      param: 'onClose',
      desc: '通知关闭回调',
      type: '() => void',
      default: '-'
    }
  ],
  events: [],
  slots: [],
  methods: [
    {
      name: 'notification(config)',
      desc: '显示通知',
      returns: '{id: string, close: () => void}'
    },
    {
      name: 'notification.info(content, options)',
      desc: '显示信息通知',
      returns: 'string'
    },
    {
      name: 'notification.success(content, options)',
      desc: '显示成功通知',
      returns: 'string'
    },
    {
      name: 'notification.warning(content, options)',
      desc: '显示警告通知',
      returns: 'string'
    },
    {
      name: 'notification.error(content, options)',
      desc: '显示错误通知',
      returns: 'string'
    },
    {
      name: 'notification.clear()',
      desc: '清除所有通知',
      returns: 'void'
    }
  ],
  contextProps: [
    {
      param: 'maxCount',
      desc: '最大显示数量',
      type: 'number',
      default: '5'
    },
    {
      param: 'defaultPosition',
      desc: '默认显示位置',
      type: 'AriNotificationPosition',
      default: 'top-right'
    }
  ]
};

export const anchors = Object.values(notificationExamples).map(example => ({
  key: example.key,
  label: example.title
})).concat([
  { key: 'api', label: 'API' },
  { key: 'provider-api', label: 'NotificationProvider API' },
  { key: 'methods', label: '方法' }
]);

const NotificationDoc: React.FC = () => {
  return (
    <Doc
      title="Notification 通知"
      description="全局展示通知提醒信息，可以自定义显示位置和时长。"
      examples={notificationExamples}
      api={notificationAPI}
      extraProps={[
        {
          title: 'NotificationProvider API',
          data: notificationAPI.contextProps,
          anchor: 'provider-api'
        }
      ]}
    />
  );
};

export default NotificationDoc;
