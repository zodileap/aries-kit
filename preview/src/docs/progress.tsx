import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
  BasicProgress, 
  CircleProgress, 
  DashboardProgress, 
  SizeDemo, 
  ColorDemo, 
  StepsDemo, 
  FormatDemo,
  SuccessSegmentDemo
} from './codes/progress';
import { sourceMap } from './codes/source-map';

export const progressExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic-usage',
    description: '标准的进度条，支持三种状态：正常、活动中和异常。',
    demos: [{
      component: BasicProgress,
      sourceCode: sourceMap['progress']['BasicProgress']
    }]
  },
  circle: {
    title: '圆形进度条',
    key: 'circle',
    description: '圆形进度条，更适合展示单个数值的完成情况。',
    demos: [{
      component: CircleProgress,
      sourceCode: sourceMap['progress']['CircleProgress']
    }]
  },
  dashboard: {
    title: '仪表盘进度条',
    key: 'dashboard',
    description: '仪表盘形式的进度条，可以通过 gapDegree 设置缺口角度，gapPosition 设置缺口位置。',
    demos: [{
      component: DashboardProgress,
      sourceCode: sourceMap['progress']['DashboardProgress']
    }]
  },
  size: {
    title: '尺寸',
    key: 'size',
    description: '可以设置不同尺寸的进度条，包括 small、default、large 或自定义数值尺寸。',
    demos: [{
      component: SizeDemo,
      sourceCode: sourceMap['progress']['SizeDemo']
    }]
  },
  color: {
    title: '自定义颜色',
    key: 'color',
    description: '可以设置不同的颜色，支持纯色或渐变色。',
    demos: [{
      component: ColorDemo,
      sourceCode: sourceMap['progress']['ColorDemo']
    }]
  },
  steps: {
    title: '步骤进度条',
    key: 'steps',
    description: '可以设置间断的步骤进度条，通过 steps 属性控制步数。',
    demos: [{
      component: StepsDemo,
      sourceCode: sourceMap['progress']['StepsDemo']
    }]
  },
  format: {
    title: '自定义文字格式',
    key: 'format',
    description: '通过 format 属性自定义进度条文字显示内容。',
    demos: [{
      component: FormatDemo,
      sourceCode: sourceMap['progress']['FormatDemo']
    }]
  },
  successSegment: {
    title: '分段进度条',
    key: 'success-segment',
    description: '通过 successPercent 设置已完成的分段。',
    demos: [{
      component: SuccessSegmentDemo,
      sourceCode: sourceMap['progress']['SuccessSegmentDemo']
    }]
  }
};

export const progressAPI: DocAPI = {
  props: [
    {
      param: 'percent',
      desc: '当前进度百分比',
      type: 'number',
      default: '0'
    },
    {
      param: 'type',
      desc: '进度条类型',
      type: "'line' | 'circle' | 'dashboard'",
      default: 'line'
    },
    {
      param: 'status',
      desc: '进度条状态',
      type: "'normal' | 'exception' | 'active' | 'success'",
      default: 'normal'
    },
    {
      param: 'showInfo',
      desc: '是否显示进度信息',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'format',
      desc: '自定义进度信息显示函数',
      type: '(percent: number, successPercent?: number) => ReactNode',
      default: '-'
    },
    {
      param: 'successPercent',
      desc: '已完成的分段百分比',
      type: 'number',
      default: '-'
    },
    {
      param: 'trailColor',
      desc: '进度条背景色',
      type: 'string',
      default: '-'
    },
    {
      param: 'size',
      desc: '进度条尺寸',
      type: "'default' | 'sm' | 'lg'",
      default: 'default'
    },
    {
      param: 'strokeColor',
      desc: '进度条颜色',
      type: "string | { from: string; to: string; direction?: string }",
      default: '-'
    },
    {
      param: 'strokeWidth',
      desc: '进度条线的宽度',
      type: 'number',
      default: '8'
    },
    {
      param: 'gapPosition',
      desc: '仪表盘进度条缺口位置',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: 'bottom'
    },
    {
      param: 'gapDegree',
      desc: '仪表盘进度条缺口角度',
      type: 'number',
      default: '75'
    },
    {
      param: 'strokeRounded',
      desc: '是否使用圆角',
      type: 'boolean',
      default: 'false'
    },
    {
      param: 'steps',
      desc: '进度条总步数',
      type: 'number',
      default: '-'
    },
    {
      param: 'stepSmall',
      desc: '是否使用小型步骤条',
      type: 'boolean',
      default: 'false'
    }
  ],
  events: [],
  slots: []
};

export const anchors = Object.values(progressExamples).map(example => ({
  key: example.key,
  label: example.title
})).concat([
  { key: 'api', label: 'API' }
]);

const ProgressDoc: React.FC = () => {
  return (
    <Doc
      title="Progress 进度条"
      description="展示操作的当前进度或完成状态的组件，用于表示处理过程或操作的完成度。"
      examples={progressExamples}
      api={progressAPI}
    />
  );
};

export default ProgressDoc;
