import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicChartDemo, CustomStyleDemo, InteractiveDemo, LegendAndLabelsDemo } from './codes/chart';
import { sourceMap } from './codes/source-map';

// 假设已有这个导入，如果没有可能需要更新
// import { sourceMap } from './codes/source-map';

export const chartExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic',
    description: '图表组件支持三种基本类型：饼图(pie)、柱状图(bar)和折线图(line)，通过设置type属性可以切换不同类型的图表。',
    demos: [{
      component: BasicChartDemo,
      sourceCode: sourceMap['chart']['BasicChartDemo'] // 假设source-map已更新
    }]
  },
  style: {
    title: '自定义样式',
    key: 'style',
    description: '可以自定义图表的颜色、大小、显示位置等样式属性，使图表更符合设计需求。',
    demos: [{
      component: CustomStyleDemo,
      sourceCode: sourceMap['chart']['CustomStyleDemo']
    }]
  },
  interactive: {
    title: '交互功能',
    key: 'interactive',
    description: '图表支持交互功能，可以通过onElementClick属性绑定点击事件处理函数。',
    demos: [{
      component: InteractiveDemo,
      sourceCode: sourceMap['chart']['InteractiveDemo']
    }]
  },
  legend: {
    title: '图例和数据标签',
    key: 'legend',
    description: '可以配置图例的位置(legendPosition)和是否显示数据标签(showDataLabels)。',
    demos: [{
      component: LegendAndLabelsDemo,
      sourceCode: sourceMap['chart']['LegendAndLabelsDemo']
    }]
  }
};

export const anchors = Object.values(chartExamples).map(example => ({
  key: example.key,
  label: example.title
})).concat([
  { key: 'api', label: 'API' }
]);

export const chartAPI: DocAPI = {
  props: [
    {
      param: 'type',
      desc: '图表类型，控制图表的展示样式',
      type: "'pie' | 'line' | 'bar'",
      default: 'bar'
    },
    {
      param: 'title',
      desc: '图表标题，显示在图表顶部',
      type: 'string',
      default: 'undefined'
    },
    {
      param: 'width',
      desc: '图表宽度，可以是数字（px）或字符串值（如 "100%"）',
      type: 'number | string',
      default: '100%'
    },
    {
      param: 'height',
      desc: '图表高度，可以是数字（px）或字符串值（如 "300px"）',
      type: 'number | string',
      default: '300'
    },
    {
      param: 'xAxis',
      desc: 'X轴标签，用于折线图和柱状图',
      type: 'string[]',
      default: '[]'
    },
    {
      param: 'yAxis',
      desc: '自定义Y轴显示设置',
      type: '{ title?: string; min?: number; max?: number }',
      default: 'undefined'
    },
    {
      param: 'data',
      desc: '数据点集合，用于饼图的数据展示',
      type: 'ChartDataPoint[]',
      default: '[]'
    },
    {
      param: 'series',
      desc: '数据系列集合，用于折线图和柱状图的多系列数据展示',
      type: 'ChartSeries[]',
      default: '[]'
    },
    {
      param: 'showLegend',
      desc: '是否显示图例',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'legendPosition',
      desc: '图例位置',
      type: "'top' | 'right' | 'bottom' | 'left'",
      default: 'bottom'
    },
    {
      param: 'showDataLabels',
      desc: '是否显示数据标签',
      type: 'boolean',
      default: 'false'
    },
    {
      param: 'interactive',
      desc: '是否启用交互功能',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'animationDuration',
      desc: '动画持续时间（毫秒）',
      type: 'number',
      default: '750'
    },
    {
      param: 'onElementClick',
      desc: '图表元素点击事件',
      type: '(data: ChartDataPoint | ChartSeries, index: number) => void',
      default: 'undefined'
    }
  ],
  events: [
    {
      event: 'onElementClick',
      desc: '点击图表元素时触发',
      type: '(data: ChartDataPoint | ChartSeries, index: number)'
    }
  ],
  slots: []
};

const ChartDoc: React.FC = () => {
  return (
    <Doc
      title="Chart 图表"
      description="图表组件提供了简单易用的数据可视化能力，支持饼图、柱状图和折线图三种基本图表类型，具有自定义样式、交互功能和动画效果。"
      examples={chartExamples}
      api={chartAPI}
    />
  );
};

export default ChartDoc;
