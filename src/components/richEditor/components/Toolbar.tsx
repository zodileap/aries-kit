import React, { useRef } from 'react';
import { useCss } from '@ari/utils';
import { AriButton } from '@ari/components/button';
import { AriTooltip } from '@ari/components/tooltip';
import { AriSelect } from '@ari/components/select';
import { ToolbarButton } from '@ari/types';
import { useRichEditor } from '../hooks';

/**
 * 工具栏配置接口
 */
export interface ToolbarProps {
  buttons?: ToolbarButton[];
  showImport?: boolean;
  showExport?: boolean;
  showModeSwitch?: boolean;
}

/**
 * 工具栏组件
 */
export const Toolbar: React.FC<ToolbarProps> = ({
  buttons = [
    'bold', 'italic', 'strikethrough', 'divider',
    'heading', 'quote', 'code', 'codeBlock', 'divider',
    'link', 'image', 'video', 'table', 'divider',
    'list', 'orderedList', 'taskList', 'divider',
    'undo', 'redo',
  ],
  showImport = true,
  showExport = true,
  showModeSwitch = true,
}) => {
  const cn = useCss('rich-editor');
  const importInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const {
    useEditor,
    useMode,
    useImportExport,
    disabled,
    readOnly,
    media,
  } = useRichEditor();

  const {
    handleToolbarAction,
    handleInsertHeading,
    handleMediaFilesSelected,
    saveSelection,
    pendingUploads,
  } = useEditor;

  const {
    mode,
    isFullscreen,
    handleModeChange,
    toggleFullscreen,
  } = useMode;

  const {
    handleImport,
    handleExport,
  } = useImportExport;

  const iconMap: Record<ToolbarButton, string> = {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    heading: 'title',
    quote: 'format_quote',
    code: 'code',
    codeBlock: 'code_blocks',
    link: 'link',
    image: 'image',
    video: 'movie',
    table: 'table_chart',
    list: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    taskList: 'checklist',
    undo: 'undo',
    redo: 'redo',
    divider: '',
  };

  const tooltipMap: Record<ToolbarButton, string> = {
    bold: '加粗',
    italic: '斜体',
    strikethrough: '删除线',
    heading: '标题',
    quote: '引用',
    code: '行内代码',
    codeBlock: '代码块',
    link: '链接',
    image: '上传图片',
    video: '上传视频',
    table: '表格',
    list: '无序列表',
    orderedList: '有序列表',
    taskList: '任务列表',
    undo: '撤销',
    redo: '重做',
    divider: '',
  };

  const handleMouseDown = (callback?: () => void) => (event: React.MouseEvent) => {
    event.preventDefault();
    saveSelection();
    callback?.();
  };

  const openFilePicker = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    inputRef.current?.click();
  };

  const renderToolbarButton = (button: ToolbarButton) => {
    if (button === 'divider') {
      return null;
    }

    if (button === 'heading') {
      const headingOptions = [
        { value: 1, label: '# 标题 1' },
        { value: 2, label: '## 标题 2' },
        { value: 3, label: '### 标题 3' },
        { value: 4, label: '#### 标题 4' },
        { value: 5, label: '##### 标题 5' },
        { value: 6, label: '###### 标题 6' },
      ];

      return (
        <AriSelect
          key={button}
          options={headingOptions}
          trigger="hover"
          renderTrigger={() => (
            <AriTooltip content={tooltipMap[button]}>
              <AriButton
                type="text"
                icon={iconMap[button]}
                onMouseDown={handleMouseDown()}
                disabled={disabled || readOnly}
              />
            </AriTooltip>
          )}
          onChange={(value) => {
            if (typeof value === 'number') {
              handleInsertHeading(value);
            }
          }}
          style={{ display: 'inline-block' }}
        />
      );
    }

    if (button === 'image' || button === 'video') {
      const isImage = button === 'image';
      const inputRef = isImage ? imageInputRef : videoInputRef;
      const uploadDisabled = disabled || readOnly || !media?.upload;

      return (
        <AriTooltip key={button} content={tooltipMap[button]}>
          <AriButton
            type="text"
            icon={iconMap[button]}
            onMouseDown={handleMouseDown(() => openFilePicker(inputRef))}
            disabled={uploadDisabled}
          />
        </AriTooltip>
      );
    }

    return (
      <AriTooltip key={button} content={tooltipMap[button]}>
        <AriButton
          type="text"
          icon={iconMap[button]}
          onMouseDown={handleMouseDown(() => handleToolbarAction(button))}
          disabled={disabled || readOnly}
        />
      </AriTooltip>
    );
  };

  const renderGroup = (groupButtons: ToolbarButton[]) => {
    const visibleButtons = groupButtons.filter((button) => buttons.includes(button));
    if (visibleButtons.length === 0) {
      return null;
    }

    return (
      <>
        <div className={cn.e('toolbar-divider')} />
        <div className={cn.e('toolbar-group')}>
          {visibleButtons.map(renderToolbarButton)}
        </div>
      </>
    );
  };

  return (
    <div className={cn.e('toolbar')}>
      <input
        ref={importInputRef}
        type="file"
        accept=".md,.markdown,.txt"
        style={{ display: 'none' }}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            handleImport(file);
          }
          event.target.value = '';
        }}
      />
      <input
        ref={imageInputRef}
        type="file"
        accept={media?.acceptImage || 'image/*'}
        style={{ display: 'none' }}
        onChange={(event) => {
          handleMediaFilesSelected(event.target.files, 'toolbar');
          event.target.value = '';
        }}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept={media?.acceptVideo || 'video/*'}
        style={{ display: 'none' }}
        onChange={(event) => {
          handleMediaFilesSelected(event.target.files, 'toolbar');
          event.target.value = '';
        }}
      />

      <div className={cn.e('toolbar-group')}>
        {buttons.filter((button) => ['bold', 'italic', 'strikethrough'].includes(button)).map(renderToolbarButton)}
      </div>

      {renderGroup(['heading', 'quote'])}
      {renderGroup(['code', 'codeBlock'])}
      {renderGroup(['link', 'image', 'video', 'table'])}
      {renderGroup(['list', 'orderedList', 'taskList'])}
      {renderGroup(['undo', 'redo'])}

      <div className={cn.e('toolbar-spacer')} />

      <div className={cn.e('toolbar-actions')}>
        {pendingUploads.length > 0 && (
          <AriTooltip content={`还有 ${pendingUploads.length} 个媒体资源上传中`}>
            <AriButton type="text" icon="cloud_sync" disabled>
              {pendingUploads.length}
            </AriButton>
          </AriTooltip>
        )}

        {(showImport || showExport) && (
          <div className={cn.e('toolbar-group')}>
            {showImport && (
              <AriTooltip content="导入 Markdown">
                <AriButton
                  type="text"
                  icon="upload_file"
                  onMouseDown={handleMouseDown(() => openFilePicker(importInputRef))}
                  disabled={disabled || readOnly}
                />
              </AriTooltip>
            )}
            {showExport && (
              <>
                <AriTooltip content="导出 Markdown">
                  <AriButton
                    type="text"
                    icon="description"
                    onMouseDown={handleMouseDown(() => handleExport('md'))}
                    disabled={disabled}
                  />
                </AriTooltip>
                <AriTooltip content="导出 HTML">
                  <AriButton
                    type="text"
                    icon="html"
                    onMouseDown={handleMouseDown(() => handleExport('html'))}
                    disabled={disabled}
                  />
                </AriTooltip>
                <AriTooltip content="打印 / 导出 PDF">
                  <AriButton
                    type="text"
                    icon="picture_as_pdf"
                    onMouseDown={handleMouseDown(() => handleExport('pdf'))}
                    disabled={disabled}
                  />
                </AriTooltip>
              </>
            )}
          </div>
        )}

        {showModeSwitch && (
          <div className={cn.e('toolbar-group')}>
            <AriTooltip content="源码模式">
              <AriButton
                type={mode === 'source' ? 'default' : 'text'}
                onMouseDown={handleMouseDown(() => handleModeChange('source'))}
                disabled={disabled}
              >
                源码
              </AriButton>
            </AriTooltip>
            <AriTooltip content="可视模式">
              <AriButton
                type={mode === 'visual' ? 'default' : 'text'}
                onMouseDown={handleMouseDown(() => handleModeChange('visual'))}
                disabled={disabled}
              >
                可视
              </AriButton>
            </AriTooltip>
            <AriTooltip content="分屏模式">
              <AriButton
                type={mode === 'split' ? 'default' : 'text'}
                onMouseDown={handleMouseDown(() => handleModeChange('split'))}
                disabled={disabled}
              >
                分屏
              </AriButton>
            </AriTooltip>
            <AriTooltip content={isFullscreen ? '退出全屏' : '全屏'}>
              <AriButton
                type="text"
                icon={isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                onMouseDown={handleMouseDown(toggleFullscreen)}
                disabled={disabled}
              />
            </AriTooltip>
          </div>
        )}
      </div>
    </div>
  );
};
