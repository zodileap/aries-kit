import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import {
  BasicExample,
  CustomTitleExample,
  ComplexContentExample,
  CollapsibleExample,
  NoIconExample,
  UseCaseExample,
  InteractiveExample
} from './codes/callout';
import { sourceMap } from './codes/source-map';

export const calloutExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic-usage',
    description:
      '告示框支持五种不同的类型：note（注意）、tip（提示）、info（信息）、warning（警告）、danger（危险），每种类型都有对应的颜色主题和图标。',
    demos: [
      {
        component: BasicExample,
        sourceCode: sourceMap['callout']['BasicExample']
      }
    ]
  },
  customTitle: {
    title: '自定义标题',
    key: 'custom-title',
    description:
      '通过 title 属性可以为告示框设置自定义标题，如果不设置则使用对应类型的默认标题。',
    demos: [
      {
        component: CustomTitleExample,
        sourceCode: sourceMap['callout']['CustomTitleExample']
      }
    ]
  },
  complexContent: {
    title: '复杂内容',
    key: 'complex-content',
    description:
      '告示框支持复杂的HTML内容，包括文本格式化、列表、链接、代码块等各种元素。',
    demos: [
      {
        component: ComplexContentExample,
        sourceCode: sourceMap['callout']['ComplexContentExample']
      }
    ]
  },
  collapsible: {
    title: '可折叠',
    key: 'collapsible',
    description:
      '通过设置 collapsible 属性可以让告示框支持折叠功能，节省页面空间并改善用户体验。',
    demos: [
      {
        component: CollapsibleExample,
        sourceCode: sourceMap['callout']['CollapsibleExample']
      }
    ]
  },
  noIcon: {
    title: '隐藏图标',
    key: 'no-icon',
    description:
      '通过设置 showIcon={false} 可以隐藏告示框的类型图标，让界面更简洁。',
    demos: [
      {
        component: NoIconExample,
        sourceCode: sourceMap['callout']['NoIconExample']
      }
    ]
  },
  useCase: {
    title: '实际应用',
    key: 'use-case',
    description:
      '告示框在实际项目中的典型应用场景，包括产品介绍、升级提醒、安全警告、使用建议等。',
    demos: [
      {
        component: UseCaseExample,
        sourceCode: sourceMap['callout']['UseCaseExample']
      }
    ]
  },
  interactive: {
    title: '交互式配置',
    key: 'interactive',
    description:
      '动态配置告示框的各种属性，实时查看效果。这个示例展示了告示框的所有配置选项。',
    demos: [
      {
        component: InteractiveExample,
        sourceCode: sourceMap['callout']['InteractiveExample']
      }
    ]
  }
};

export const calloutAPI: DocAPI = {
  props: [
    {
      param: 'type',
      desc: '告示框类型，控制颜色主题和默认图标',
      type: "'note' | 'tip' | 'info' | 'warning' | 'danger'",
      default: "'note'"
    },
    {
      param: 'title',
      desc: '告示框标题，不设置则使用对应类型的默认标题',
      type: 'string',
      default: '-'
    },
    {
      param: 'children',
      desc: '告示框内容，支持字符串或React节点',
      type: 'React.ReactNode',
      default: '-'
    },
    {
      param: 'className',
      desc: '自定义CSS类名',
      type: 'string',
      default: '-'
    },
    {
      param: 'showIcon',
      desc: '是否显示类型图标',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'collapsible',
      desc: '是否支持折叠功能',
      type: 'boolean',
      default: 'false'
    },
    {
      param: 'defaultExpanded',
      desc: '默认是否展开（仅在collapsible为true时有效）',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'onExpandedChange',
      desc: '展开状态变化时的回调函数',
      type: '(expanded: boolean) => void',
      default: '-'
    }
  ],
  events: [
    {
      event: 'onExpandedChange',
      desc: '当告示框展开状态改变时触发',
      type: '(expanded: boolean) => void'
    }
  ],
  slots: []
};

export const anchors = Object.values(calloutExamples)
  .map(example => ({
    key: example.key,
    label: example.title
  }))
  .concat({ key: 'api', label: 'API' });

const CalloutDoc: React.FC = () => {
  return (
    <Doc
      title="Callout 告示框"
      description="用于显示重要信息的告示框组件，支持多种类型、自定义标题、折叠功能等。常用于文档说明、操作提示、警告信息等场景。"
      examples={calloutExamples}
      api={calloutAPI}
    />
  );
};

export default CalloutDoc;
