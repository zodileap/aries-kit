import { ReactNode } from 'react';
import { AriDragListItem } from './drag-list';
import { _Props } from './base';

/**
 * 上传文件信息接口
 * 描述单个上传文件的基本信息和状态
 */
export interface AriUploadFile {
  /**
   * 文件的唯一标识符
   * 用于在列表中标识具体的文件
   */
  id: string;

  /**
   * 文件名称
   * 显示给用户的文件名
   */
  name: string;

  /**
   * 文件大小（字节）
   * 文件的实际大小
   */
  size: number;

  /**
   * 文件类型
   * MIME类型字符串
   */
  type: string;

  /**
   * 文件状态
   * 表示文件当前的上传状态
   * 
   * default: 'pending'
   */
  status: 'pending' | 'uploading' | 'success' | 'error';

  /**
   * 上传进度
   * 0-100的数值，表示上传完成的百分比
   * 
   * default: 0
   */
  progress?: number;

  /**
   * 错误信息
   * 当上传失败时的错误描述
   */
  error?: string;

  /**
   * 文件预览URL
   * 可以是base64数据URL或者远程URL
   */
  url?: string;

  /**
   * 原始文件对象
   * 浏览器的原生File对象
   */
  file?: File;

  /**
   * 文件的缩略图URL
   * 用于图片文件的小图预览
   */
  thumbUrl?: string;

  /**
   * 自定义数据
   * 可以存储任何额外的文件相关信息
   */
  extra?: Record<string, any>;
}

/**
 * 上传组件属性接口
 * 定义上传组件的所有配置选项
 */
export interface AriUploadProps extends Omit<_Props, 'children' | 'onChange'> {
  /**
   * 当前文件列表
   * 包含所有已选择的文件
   */
  fileList?: AriUploadFile[];

  /**
   * 文件列表变化回调
   * 当文件列表发生变化时触发
   * 
   * Params:
   * 
   *   - fileList: 更新后的文件列表
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onChange?: (fileList: AriUploadFile[]) => void;

  /**
   * 文件选择/拖拽上传回调
   * 当用户选择文件或拖拽文件到上传区域时触发
   * 
   * Params:
   * 
   *   - files: 选择的文件数组
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onUpload?: (files: File[]) => void;

  /**
   * 文件删除回调
   * 当用户删除文件时触发
   * 
   * Params:
   * 
   *   - file: 要删除的文件信息
   *   - index: 文件在列表中的索引
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onRemove?: (file: AriUploadFile, index: number) => void;

  /**
   * 文件列表重排序回调
   * 当用户拖拽改变文件顺序时触发
   * 
   * Params:
   * 
   *   - fileList: 重排序后的文件列表
   *   - fromIndex: 原始位置索引
   *   - toIndex: 目标位置索引
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onReorder?: (fileList: AriUploadFile[], fromIndex: number, toIndex: number) => void;

  /**
   * 文件预览回调
   * 当用户点击预览文件时触发
   * 
   * Params:
   * 
   *   - file: 要预览的文件信息
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onPreview?: (file: AriUploadFile) => void;

  /**
   * 是否支持多选
   * 控制是否可以选择多个文件
   * 
   * default: true
   */
  multiple?: boolean;

  /**
   * 接受的文件类型
   * 限制可以选择的文件类型，使用MIME类型或文件扩展名
   * 
   * default: undefined
   */
  accept?: string;

  /**
   * 最大文件大小（字节）
   * 限制单个文件的最大大小
   * 
   * default: undefined
   */
  maxSize?: number;

  /**
   * 最大文件数量
   * 限制可以上传的文件总数
   * 
   * default: undefined
   */
  maxCount?: number;

  /**
   * 是否禁用上传
   * 禁用后无法选择或拖拽文件
   * 
   * default: false
   */
  disabled?: boolean;

  /**
   * 是否显示文件列表
   * 控制是否显示已选择的文件列表
   * 
   * default: true
   */
  showFileList?: boolean;

  /**
   * 是否支持拖拽上传
   * 控制是否启用拖拽上传功能
   * 
   * default: true
   */
  dragUpload?: boolean;

  /**
   * 是否支持文件列表拖拽排序
   * 控制文件列表是否可以拖拽重排序
   * 
   * default: true
   */
  dragSort?: boolean;

  /**
   * 上传区域的提示文字
   * 显示在上传区域内的提示信息
   * 
   * default: '点击或拖拽文件到此区域上传'
   */
  uploadText?: string;

  /**
   * 上传区域的描述文字
   * 显示在主提示文字下方的补充说明
   */
  uploadDescription?: string;

  /**
   * 上传区域的图标
   * 显示在上传区域内的图标名称
   * 
   * default: 'cloud_upload'
   */
  uploadIcon?: string;

  /**
   * 文件列表项的自定义渲染
   * 自定义文件列表中每个文件的显示内容
   * 
   * Params:
   * 
   *   - file: 文件信息
   *   - index: 文件在列表中的索引
   * 
   * Returns:
   * 
   *   React节点
   */
  renderFileItem?: (file: AriUploadFile, index: number) => ReactNode;

  /**
   * 上传区域的自定义渲染
   * 完全自定义上传区域的内容
   * 
   * Params:
   * 
   *   - dragActive: 是否正在拖拽状态
   *   - disabled: 是否禁用状态
   * 
   * Returns:
   * 
   *   React节点
   */
  renderUploadArea?: (dragActive: boolean, disabled: boolean) => ReactNode;

  /**
   * 空状态的自定义渲染
   * 当文件列表为空时显示的内容
   */
  renderEmpty?: () => ReactNode;

  /**
   * 是否自动上传
   * 选择文件后是否自动开始上传
   * 
   * default: true
   */
  autoUpload?: boolean;

  /**
   * 是否为纯前端模式
   * 当为true时，文件选择后直接标记为成功状态，不进行实际上传
   * 适用于只需要文件选择而不需要上传到服务器的场景
   * 
   * default: false
   */
  frontendOnly?: boolean;

  /**
   * 上传前的钩子函数
   * 在文件上传前调用，返回false可以阻止上传
   * 
   * Params:
   * 
   *   - file: 要上传的文件
   * 
   * Returns:
   * 
   *   boolean: 是否继续上传
   */
  beforeUpload?: (file: File) => boolean | Promise<boolean>;

  /**
   * 文件校验失败的回调
   * 当文件不符合校验规则时触发
   * 
   * Params:
   * 
   *   - file: 校验失败的文件
   *   - reason: 失败原因
   * 
   * Returns:
   * 
   *   void: 无返回值
   */
  onValidationError?: (file: File, reason: string) => void;

  /**
   * 上传区域的高度
   * 设置上传区域的固定高度
   * 
   * default: '120px'
   */
  uploadAreaHeight?: string;

  /**
   * 文件列表间距
   * 设置文件列表项之间的间距
   * 
   * default: 'xs'
   */
  listGap?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * 是否显示上传进度
   * 控制是否在文件项中显示上传进度条
   * 
   * default: true
   */
  showProgress?: boolean;

  /**
   * 是否显示文件大小
   * 控制是否在文件项中显示文件大小
   * 
   * default: true
   */
  showFileSize?: boolean;

  /**
   * 是否显示删除按钮
   * 控制文件项是否显示删除按钮
   * 
   * default: true
   */
  showRemoveButton?: boolean;

  /**
   * 是否显示预览按钮
   * 控制文件项是否显示预览按钮
   * 
   * default: true
   */
  showPreviewButton?: boolean;
}

/**
 * 将上传文件转换为拖拽列表项
 * 
 * Params:
 * 
 *   - file: 上传文件信息
 *   - index: 文件索引
 *   - renderItem: 自定义渲染函数
 * 
 * Returns:
 * 
 *   拖拽列表项
 */
export const convertUploadFileToListItem = (
  file: AriUploadFile,
  index: number,
  renderItem?: (file: AriUploadFile, index: number) => ReactNode
): AriDragListItem => ({
  id: file.id,
  content: renderItem ? renderItem(file, index) : file.name,
  disabled: false // 允许所有文件都可以拖动排序
});