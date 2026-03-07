import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { 
  BasicExample, 
  FileTypesExample, 
  LimitExample, 
  CustomRenderExample, 
  DisabledExample, 
  CustomUploadAreaExample,
  ManualUploadExample,
  FrontendOnlyExample
} from './codes/upload';
import { sourceMap } from './codes/source-map';

export const uploadExamples: Record<string, DocExample> = {
  basic: {
    title: '基础用法',
    key: 'basic-usage',
    description: '最基本的上传组件使用方法，支持拖拽上传和点击选择文件。上半部分是拖拽区域，下半部分是可拖拽排序的文件列表。',
    demos: [{
      component: BasicExample,
      sourceCode: sourceMap['upload']['BasicExample']
    }]
  },
  fileTypes: {
    title: '文件类型限制',
    key: 'file-types',
    description: '通过 accept 属性限制可以上传的文件类型，支持 MIME 类型或文件扩展名。',
    demos: [{
      component: FileTypesExample,
      sourceCode: sourceMap['upload']['FileTypesExample']
    }]
  },
  limits: {
    title: '文件限制',
    key: 'limits',
    description: '可以限制文件的数量和大小，当文件不符合要求时会触发验证错误回调。',
    demos: [{
      component: LimitExample,
      sourceCode: sourceMap['upload']['LimitExample']
    }]
  },
  customRender: {
    title: '自定义文件项',
    key: 'custom-render',
    description: '通过 renderFileItem 属性可以完全自定义文件列表项的显示内容和样式。',
    demos: [{
      component: CustomRenderExample,
      sourceCode:  sourceMap['upload']['CustomRenderExample']
    }]
  },
  disabled: {
    title: '禁用状态',
    key: 'disabled',
    description: '组件支持多种禁用状态，包括完全禁用和禁用特定功能（如拖拽排序）。',
    demos: [{
      component: DisabledExample,
      sourceCode: sourceMap['upload']['DisabledExample']
    }]
  },
  customUploadArea: {
    title: '自定义上传区域',
    key: 'custom-upload-area',
    description: '通过 renderUploadArea 属性可以完全自定义上传区域的外观和交互效果。',
    demos: [{
      component: CustomUploadAreaExample,
      sourceCode: sourceMap['upload']['CustomUploadAreaExample']
    }]
  },
  manualUpload: {
    title: '手动上传',
    key: 'manual-upload',
    description: '设置 autoUpload={false} 后，文件选择后不会自动上传，需要手动触发上传操作。',
    demos: [{
      component: ManualUploadExample,
      sourceCode: sourceMap['upload']['ManualUploadExample']
    }]
  },
  frontendOnly: {
    title: '纯前端模式',
    key: 'frontend-only',
    description: '设置 frontendOnly={true} 后，文件选择后直接标记为完成状态，不进行实际上传。适用于只需要文件选择而不需要上传到服务器的场景。',
    demos: [{
      component: FrontendOnlyExample,
      sourceCode: sourceMap['upload']['FrontendOnlyExample']
    }]
  }
};

export const uploadAPI: DocAPI = {
  props: [
    {
      param: 'fileList',
      desc: '当前文件列表',
      type: 'AriUploadFile[]',
      default: '[]'
    },
    {
      param: 'onChange',
      desc: '文件列表变化回调',
      type: '(fileList: AriUploadFile[]) => void',
      default: '-'
    },
    {
      param: 'onUpload',
      desc: '文件选择/拖拽上传回调',
      type: '(files: File[]) => void',
      default: '-'
    },
    {
      param: 'onRemove',
      desc: '文件删除回调',
      type: '(file: AriUploadFile, index: number) => void',
      default: '-'
    },
    {
      param: 'onReorder',
      desc: '文件列表重排序回调',
      type: '(fileList: AriUploadFile[], fromIndex: number, toIndex: number) => void',
      default: '-'
    },
    {
      param: 'onPreview',
      desc: '文件预览回调',
      type: '(file: AriUploadFile) => void',
      default: '-'
    },
    {
      param: 'multiple',
      desc: '是否支持多选',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'accept',
      desc: '接受的文件类型',
      type: 'string',
      default: '-'
    },
    {
      param: 'maxSize',
      desc: '最大文件大小（字节）',
      type: 'number',
      default: '-'
    },
    {
      param: 'maxCount',
      desc: '最大文件数量',
      type: 'number',
      default: '-'
    },
    {
      param: 'disabled',
      desc: '是否禁用上传',
      type: 'boolean',
      default: 'false'
    },
    {
      param: 'showFileList',
      desc: '是否显示文件列表',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'dragUpload',
      desc: '是否支持拖拽上传',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'dragSort',
      desc: '是否支持文件列表拖拽排序',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'uploadText',
      desc: '上传区域的提示文字',
      type: 'string',
      default: '点击或拖拽文件到此区域上传'
    },
    {
      param: 'uploadDescription',
      desc: '上传区域的描述文字',
      type: 'string',
      default: '-'
    },
    {
      param: 'uploadIcon',
      desc: '上传区域的图标',
      type: 'string',
      default: 'cloud_upload'
    },
    {
      param: 'renderFileItem',
      desc: '自定义文件列表项渲染',
      type: '(file: AriUploadFile, index: number) => ReactNode',
      default: '-'
    },
    {
      param: 'renderUploadArea',
      desc: '自定义上传区域渲染',
      type: '(dragActive: boolean, disabled: boolean) => ReactNode',
      default: '-'
    },
    {
      param: 'renderEmpty',
      desc: '空状态自定义渲染',
      type: '() => ReactNode',
      default: '-'
    },
    {
      param: 'autoUpload',
      desc: '是否自动上传',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'frontendOnly',
      desc: '是否为纯前端模式',
      type: 'boolean',
      default: 'false'
    },
    {
      param: 'beforeUpload',
      desc: '上传前的钩子函数',
      type: '(file: File) => boolean | Promise<boolean>',
      default: '-'
    },
    {
      param: 'onValidationError',
      desc: '文件校验失败的回调',
      type: '(file: File, reason: string) => void',
      default: '-'
    },
    {
      param: 'uploadAreaHeight',
      desc: '上传区域的高度',
      type: 'string',
      default: '120px'
    },
    {
      param: 'listGap',
      desc: '文件列表间距',
      type: "'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
      default: 'xs'
    },
    {
      param: 'showProgress',
      desc: '是否显示上传进度',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'showFileSize',
      desc: '是否显示文件大小',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'showRemoveButton',
      desc: '是否显示删除按钮',
      type: 'boolean',
      default: 'true'
    },
    {
      param: 'showPreviewButton',
      desc: '是否显示预览按钮',
      type: 'boolean',
      default: 'true'
    }
  ],
  events: [
    {
      event: 'onChange',
      desc: '文件列表变化时触发',
      type: '(fileList: AriUploadFile[]) => void'
    },
    {
      event: 'onUpload',
      desc: '文件选择或拖拽上传时触发',
      type: '(files: File[]) => void'
    },
    {
      event: 'onRemove',
      desc: '删除文件时触发',
      type: '(file: AriUploadFile, index: number) => void'
    },
    {
      event: 'onReorder',
      desc: '文件列表重排序时触发',
      type: '(fileList: AriUploadFile[], fromIndex: number, toIndex: number) => void'
    },
    {
      event: 'onPreview',
      desc: '预览文件时触发',
      type: '(file: AriUploadFile) => void'
    },
    {
      event: 'onValidationError',
      desc: '文件校验失败时触发',
      type: '(file: File, reason: string) => void'
    }
  ],
  slots: []
};

export const anchors = Object.values(uploadExamples).map(example => ({
  key: example.key,
  label: example.title
})).concat({ key: 'api', label: 'API' });

const UploadDoc: React.FC = () => {
  return (
    <Doc
      title="Upload 上传"
      description="文件上传组件，支持拖拽上传、文件列表管理、拖拽排序等功能。上半部分是拖拽上传区域，下半部分是可拖拽排序的文件列表。"
      examples={uploadExamples}
      api={uploadAPI}
    />
  );
};

export default UploadDoc;