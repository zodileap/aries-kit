import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicResult, StatusResults, CustomIcon, CustomImage, ExtraContent } from './codes/result';
import { sourceMap } from './codes/source-map';

export const resultExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic-usage',
    description: '最简单的结果反馈，仅包含标题和描述。',
    demos: [{
      component: BasicResult,
      sourceCode: sourceMap['result']['BasicResult']
    }]
  },
  status: {
    title: '不同状态',
    key: 'different-status',
    description: '结果组件有四种不同的状态：success、error、info、warning，每种状态都有对应的图标和颜色。',
    demos: [{
      component: StatusResults,
      sourceCode: sourceMap['result']['StatusResults']
    }]
  },
  icon: {
    title: '自定义图标',
    key: 'custom-icon',
    description: '可以使用 icon 属性自定义结果组件的图标。',
    demos: [{
      component: CustomIcon,
      sourceCode: sourceMap['result']['CustomIcon']
    }]
  },
  image: {
    title: '自定义图片',
    key: 'custom-image',
    description: '可以使用 image 属性自定义结果组件的图片，优先级高于图标。',
    demos: [{
      component: CustomImage,
      sourceCode: sourceMap['result']['CustomImage']
    }]
  },
  extra: {
    title: '额外内容',
    key: 'extra-content',
    description: '可以通过 extra 属性和 children 添加额外的操作和内容。',
    demos: [{
      component: ExtraContent,
      sourceCode: sourceMap['result']['ExtraContent']
    }]
  }
};

export const resultAPI: DocAPI = {
  props: [
    {
      param: 'status',
      desc: '结果的状态',
      type: "'success' | 'error' | 'info' | 'warning'",
      default: 'info'
    },
    {
      param: 'title',
      desc: '结果标题',
      type: 'React.ReactNode',
      default: '-'
    },
    {
      param: 'subTitle',
      desc: '结果子标题或描述',
      type: 'React.ReactNode',
      default: '-'
    },
    {
      param: 'icon',
      desc: '自定义图标名称',
      type: 'string',
      default: '-'
    },
    {
      param: 'image',
      desc: '自定义图片路径',
      type: 'string',
      default: '-'
    },
    {
      param: 'extra',
      desc: '额外操作区域',
      type: 'React.ReactNode',
      default: '-'
    },
    {
      param: 'className',
      desc: '自定义类名',
      type: 'string',
      default: '-'
    }
  ],
  events: [],
  slots: [
    {
      name: 'children',
      desc: '结果组件的内容区域',
      type: 'React.ReactNode'
    }
  ],
  methods: []
};

export const anchors = Object.values(resultExamples).map(example => ({
  key: example.key,
  label: example.title
})).concat([
  { key: 'api', label: 'API' }
]);

const ResultDoc: React.FC = () => {
  return (
    <Doc
      title="Result 结果"
      description="用于反馈一系列操作任务的处理结果，如成功、失败、完成等。"
      examples={resultExamples}
      api={resultAPI}
    />
  );
};

export default ResultDoc;
