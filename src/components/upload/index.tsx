import React, { useCallback, useRef, useState, useMemo } from 'react';
import { useCss } from '@ari/utils';
import { AriUploadProps, AriUploadFile, convertUploadFileToListItem } from '@ari/types/components';
import { AriContainer } from '../container';
import { AriDragList } from '../drag-list';
import { AriIcon } from '../icon';
import { AriButton } from '../button';
import { AriProgress } from '../progress';
import { AriTypography } from '../typography';
import { AriFlex } from '../flex';

/**
 * 文件上传组件
 * 
 * 提供完整的文件上传功能，包括拖拽上传、文件列表管理、拖拽排序等功能。
 * 上半部分是拖拽上传区域，下半部分是可拖拽排序的文件列表。
 * 
 * Example:
 * 
 * ```tsx
 * // 基本用法
 * <AriUpload 
 *   onUpload={(files) => {
 *     console.log('上传文件:', files);
 *   }}
 *   onChange={(fileList) => {
 *     console.log('文件列表变化:', fileList);
 *   }}
 * />
 * 
 * // 限制文件类型和大小
 * <AriUpload 
 *   accept="image/*"
 *   maxSize={5 * 1024 * 1024} // 5MB
 *   maxCount={10}
 *   onUpload={handleUpload}
 * />
 * 
 * // 自定义文件项渲染
 * <AriUpload 
 *   renderFileItem={(file, index) => (
 *     <div>
 *       <span>{file.name}</span>
 *       <span>{file.status}</span>
 *     </div>
 *   )}
 * />
 * ```
 * 
 * {@link https://aries-react.dev/docs/upload}
 */
export const AriUpload: React.FC<AriUploadProps> = ({
  fileList = [],
  onChange,
  onUpload,
  onRemove,
  onReorder,
  onPreview,
  multiple = true,
  accept,
  maxSize,
  maxCount,
  disabled = false,
  showFileList = true,
  dragUpload = true,
  dragSort = true,
  uploadText = '点击或拖拽文件到此区域上传',
  uploadDescription,
  uploadIcon = 'cloud_upload',
  renderFileItem,
  renderUploadArea,
  renderEmpty,
  autoUpload = true,
  frontendOnly = false,
  beforeUpload,
  onValidationError,
  uploadAreaHeight = '120px',
  listGap = 'xs',
  showProgress = true,
  showFileSize = true,
  showRemoveButton = true,
  showPreviewButton = true,
  className,
  style,
  ...restProps
}) => {
  const cs = useCss('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  // 格式化文件大小
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  // 验证文件
  const validateFile = useCallback((file: File): string | null => {
    // 检查文件类型
    if (accept) {
      const acceptTypes = accept.split(',').map(type => type.trim());
      const isValidType = acceptTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type.match(type.replace('*', '.*'));
      });
      
      if (!isValidType) {
        return `文件类型不符合要求，仅支持: ${accept}`;
      }
    }

    // 检查文件大小
    if (maxSize && file.size > maxSize) {
      return `文件大小超出限制，最大支持: ${formatFileSize(maxSize)}`;
    }

    // 检查文件数量
    if (maxCount && fileList.length >= maxCount) {
      return `文件数量超出限制，最多支持: ${maxCount} 个文件`;
    }

    return null;
  }, [accept, maxSize, maxCount, fileList.length, formatFileSize]);

  // 处理文件选择
  const handleFileSelect = useCallback(async (files: File[]) => {
    if (disabled || files.length === 0) return;

    const validFiles: File[] = [];
    
    for (const file of files) {
      const validationError = validateFile(file);
      
      if (validationError) {
        onValidationError?.(file, validationError);
        continue;
      }

      if (beforeUpload) {
        try {
          const canUpload = await beforeUpload(file);
          if (!canUpload) continue;
        } catch (error) {
          onValidationError?.(file, '上传前检查失败');
          continue;
        }
      }

      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      // 创建新的上传文件列表
      const newUploadFiles: AriUploadFile[] = validFiles.map(file => ({
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        name: file.name,
        size: file.size,
        type: file.type,
        status: frontendOnly ? 'success' : (autoUpload ? 'uploading' : 'pending'),
        progress: frontendOnly ? 100 : 0,
        file,
        url: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      }));

      const updatedFileList = [...fileList, ...newUploadFiles];
      onChange?.(updatedFileList);

      if (autoUpload && !frontendOnly) {
        onUpload?.(validFiles);
      }
    }
  }, [
    disabled, 
    validateFile, 
    onValidationError, 
    beforeUpload, 
    autoUpload, 
    frontendOnly,
    fileList, 
    onChange, 
    onUpload
  ]);

  // 处理拖拽事件
  const handleDragEvents = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    handleDragEvents(e);
    if (!disabled && dragUpload) {
      setDragActive(true);
    }
  }, [disabled, dragUpload, handleDragEvents]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    handleDragEvents(e);
    if (!disabled && dragUpload) {
      setDragActive(false);
    }
  }, [disabled, dragUpload, handleDragEvents]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    handleDragEvents(e);
    setDragActive(false);
    
    if (!disabled && dragUpload) {
      const files = Array.from(e.dataTransfer.files);
      handleFileSelect(files);
    }
  }, [disabled, dragUpload, handleDragEvents, handleFileSelect]);

  // 处理点击上传
  const handleUploadClick = useCallback(() => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [disabled]);

  // 处理文件输入变化
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFileSelect(files);
    // 清空input值，允许重复选择同一文件
    if (e.target) {
      e.target.value = '';
    }
  }, [handleFileSelect]);

  // 处理文件删除
  const handleFileRemove = useCallback((file: AriUploadFile, index: number) => {
    const newFileList = fileList.filter((_: AriUploadFile, i: number) => i !== index);
    onChange?.(newFileList);
    onRemove?.(file, index);
  }, [fileList, onChange, onRemove]);


  // 处理文件重排序
  const handleFileReorder = useCallback((newItems: any[], fromIndex: number, toIndex: number) => {
    const newFileList = newItems.map(item => {
      const originalFile = fileList.find((f: AriUploadFile) => f.id === item.id);
      return originalFile!;
    });
    
    onChange?.(newFileList);
    onReorder?.(newFileList, fromIndex, toIndex);
  }, [fileList, onChange, onReorder]);

  // 默认文件项渲染
  const defaultRenderFileItem = useCallback((file: AriUploadFile, index: number) => {
    const isImage = file.type.startsWith('image/');
    
    return (
      <AriFlex
        className={cs.e("file-item")}
        align="center"
        justify="space-between"
        space={12}
        fill
        flexItem={{ index: 0, flex: 1 }}
      >
        {/* 主要内容区域 */}
        <div className={cs.e("file-main")}>
          {/* 第一行：图标 + 文件名 + 文件大小 */}
          <div className={cs.e("file-header")}>
            {/* 文件图标 */}
            <div className={cs.e("file-icon")}>
              {isImage && file.url ? (
                <img
                  src={file.thumbUrl || file.url}
                  alt={file.name}
                  className={cs.e("file-thumb")}
                />
              ) : (
                <AriIcon name="description" />
              )}
            </div>

            {/* 文件名 */}
            <div className={cs.e("file-name")} title={file.name}>
              <AriTypography variant="body">{file.name}</AriTypography>
            </div>

            {/* 文件大小 */}
            {showFileSize && (
              <AriTypography
                variant="caption"
                color="secondary"
                className={cs.e("file-size")}
              >
                {formatFileSize(file.size)}
              </AriTypography>
            )}
          </div>

          {/* 第二行：进度条或错误信息 */}
          {showProgress && file.status === "uploading" && (
            <AriProgress
              percent={file.progress || 0}
              size="sm"
              className={cs.e("file-progress")}
            />
          )}

          {file.status === "error" && file.error && (
            <AriTypography
              variant="caption"
              color="error"
              className={cs.e("file-error")}
            >
              {file.error}
            </AriTypography>
          )}
        </div>

        {/* 右侧删除按钮 */}
        {showRemoveButton && (
          <div className={cs.e("remove-button-container")}>
            <AriButton
              type="text"
              size="xs"
              icon="delete"
              color="danger"
              className={cs.e("remove-button")}
              onClick={() => handleFileRemove(file, index)}
            />
          </div>
        )}
      </AriFlex>
    );
  }, [
    cs, 
    showFileSize, 
    showProgress, 
    showRemoveButton, 
    formatFileSize,
    handleFileRemove
  ]);

  // 转换文件列表为拖拽列表项
  const dragListItems = useMemo(() => {
    return fileList.map((file: AriUploadFile, index: number) => 
      convertUploadFileToListItem(
        file, 
        index, 
        renderFileItem || defaultRenderFileItem
      )
    );
  }, [fileList, renderFileItem, defaultRenderFileItem]);

  // 渲染上传区域
  const renderUploadAreaContent = () => {
    if (renderUploadArea) {
      return renderUploadArea(dragActive, disabled);
    }

    return (
      <div className={cs.e('upload-content')}>
        <AriIcon 
          name={uploadIcon} 
          className={cs.e('upload-icon')}
        />
        
        <AriTypography 
          variant="body" 
          className={cs.e('upload-text')}
        >
          {uploadText}
        </AriTypography>
        
        {uploadDescription && (
          <AriTypography 
            variant="caption" 
            color="secondary"
            className={cs.e('upload-description')}
          >
            {uploadDescription}
          </AriTypography>
        )}
      </div>
    );
  };

  return (
    <AriContainer
      className={cs.gen(
        cs.b(),
        cs.is('disabled', disabled),
        cs.is('drag-active', dragActive),
        className
      )}
      style={style}
      {...(restProps as any)}
    >
      {/* 文件输入 */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleFileInputChange}
        className={cs.e('file-input')}
        disabled={disabled}
      />

      {/* 上传区域 */}
      <div
        className={cs.e('upload-area')}
        style={{ minHeight: uploadAreaHeight }}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEvents}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
      >
        {renderUploadAreaContent()}
      </div>

      {/* 文件列表 */}
      {showFileList && (
        <div className={cs.e('file-list')}>
          {fileList.length === 0 ? (
            renderEmpty ? (
              renderEmpty()
            ) : null
          ) : (
            <AriDragList
              items={dragListItems}
              onSortChange={dragSort ? handleFileReorder : undefined}
              disabled={!dragSort || disabled}
              gap={listGap}
              showDragHandle={dragSort}
              className={cs.e('drag-list')}
            />
          )}
        </div>
      )}
    </AriContainer>
  );
};