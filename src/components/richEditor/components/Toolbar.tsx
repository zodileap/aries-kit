import React from 'react';
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
    'link', 'image', 'table', 'divider',
    'list', 'orderedList', 'taskList', 'divider',
    'undo', 'redo'
  ],
  showImport = true,
  showExport = true,
  showModeSwitch = true,
}) => {
  const cn = useCss('rich-editor');
  const {
    useEditor,
    useMode,
    useImportExport,
    disabled,
    readOnly,
  } = useRichEditor();
  
  const {
    handleToolbarAction,
    handleInsertHeading,
    saveSelection,
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
  
  // 图标映射
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
    table: 'table_chart',
    list: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    taskList: 'checklist',
    undo: 'undo',
    redo: 'redo',
    divider: ''
  };
  
  // 工具提示映射
  const tooltipMap: Record<ToolbarButton, string> = {
    bold: '加粗',
    italic: '斜体',
    strikethrough: '删除线',
    heading: '标题',
    quote: '引用',
    code: '行内代码',
    codeBlock: '代码块',
    link: '链接',
    image: '图片',
    table: '表格',
    list: '无序列表',
    orderedList: '有序列表',
    taskList: '任务列表',
    undo: '撤销',
    redo: '重做',
    divider: ''
  };
  
  // 渲染工具栏按钮
  const renderToolbarButton = (button: ToolbarButton) => {
    if (button === 'divider') {
      return <div key={Math.random()} className={cn.e('toolbar-divider')} />;
    }
    
    // 标题按钮特殊处理
    if (button === 'heading') {
      const headingOptions = [
        { value: 1, label: '# 标题 1' },
        { value: 2, label: '## 标题 2' },
        { value: 3, label: '### 标题 3' },
        { value: 4, label: '#### 标题 4' },
        { value: 5, label: '##### 标题 5' },
        { value: 6, label: '###### 标题 6' }
      ];

      return (
        <AriSelect
          key={button}
          options={headingOptions}
          trigger="hover"
          renderTrigger={({ onToggle }) => (
            <AriTooltip content={tooltipMap[button]}>
              <AriButton
                type="text"
                icon={iconMap[button]}
                onMouseDown={(e) => {
                  e.preventDefault(); // 阻止失焦
                }}
                onMouseEnter={() => {
                  saveSelection(); // 鼠标进入时保存选择
                }}
                disabled={disabled || readOnly}
              />
            </AriTooltip>
          )}
          onChange={(value) => {
            if (value && typeof value === 'number') {
              handleInsertHeading(value);
            }
          }}
          style={{ display: 'inline-block' }}
        />
      );
    }
    
    return (
      <AriTooltip key={button} content={tooltipMap[button]}>
        <AriButton
          type="text"
          icon={iconMap[button]}
          onMouseDown={(e) => {
            e.preventDefault(); // 阻止失焦
            handleToolbarAction(button);
          }}
          disabled={disabled || readOnly}
        />
      </AriTooltip>
    );
  };
  
  return (
    <div className={cn.e('toolbar')}>
      {/* 主要格式化工具 */}
      <div className={cn.e('toolbar-group')}>
        {buttons.filter(btn => ['bold', 'italic', 'strikethrough'].includes(btn)).map(renderToolbarButton)}
      </div>
      
      {/* 标题和引用 */}
      {buttons.some(btn => ['heading', 'quote'].includes(btn)) && (
        <>
          <div className={cn.e('toolbar-divider')} />
          <div className={cn.e('toolbar-group')}>
            {buttons.filter(btn => ['heading', 'quote'].includes(btn)).map(renderToolbarButton)}
          </div>
        </>
      )}
      
      {/* 代码相关 */}
      {buttons.some(btn => ['code', 'codeBlock'].includes(btn)) && (
        <>
          <div className={cn.e('toolbar-divider')} />
          <div className={cn.e('toolbar-group')}>
            {buttons.filter(btn => ['code', 'codeBlock'].includes(btn)).map(renderToolbarButton)}
          </div>
        </>
      )}
      
      {/* 插入元素 */}
      {buttons.some(btn => ['link', 'image', 'table'].includes(btn)) && (
        <>
          <div className={cn.e('toolbar-divider')} />
          <div className={cn.e('toolbar-group')}>
            {buttons.filter(btn => ['link', 'image', 'table'].includes(btn)).map(renderToolbarButton)}
          </div>
        </>
      )}
      
      {/* 列表 */}
      {buttons.some(btn => ['list', 'orderedList', 'taskList'].includes(btn)) && (
        <>
          <div className={cn.e('toolbar-divider')} />
          <div className={cn.e('toolbar-group')}>
            {buttons.filter(btn => ['list', 'orderedList', 'taskList'].includes(btn)).map(renderToolbarButton)}
          </div>
        </>
      )}
      
      {/* 撤销重做 */}
      {buttons.some(btn => ['undo', 'redo'].includes(btn)) && (
        <>
          <div className={cn.e('toolbar-divider')} />
          <div className={cn.e('toolbar-group')}>
            {buttons.filter(btn => ['undo', 'redo'].includes(btn)).map(renderToolbarButton)}
          </div>
        </>
      )}
      
      {/* 右侧功能区 */}
      <div className={cn.e('toolbar-actions')}>
        {/* 导入导出 */}
        {(showImport || showExport) && (
          <div className={cn.e('toolbar-group')}>
            {showImport && (
              <>
                <input
                  type="file"
                  accept=".md,.markdown,.txt"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImport(file);
                    e.target.value = '';
                  }}
                  ref={(ref) => {
                    // 这里可以考虑使用 useRef 优化
                  }}
                />
                <AriTooltip content="导入文件">
                  <AriButton
                    type="text"
                    icon="upload_file"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      // 触发文件选择
                      const input = e.currentTarget.parentElement?.querySelector('input[type="file"]') as HTMLInputElement;
                      input?.click();
                    }}
                    disabled={disabled || readOnly}
                  />
                </AriTooltip>
              </>
            )}
            {showExport && (
              <>
                <AriTooltip content="导出为 Markdown">
                  <AriButton
                    type="text"
                    icon="description"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleExport('md');
                    }}
                    disabled={disabled}
                  />
                </AriTooltip>
                <AriTooltip content="导出为 HTML">
                  <AriButton
                    type="text"
                    icon="html"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleExport('html');
                    }}
                    disabled={disabled}
                  />
                </AriTooltip>
                <AriTooltip content="导出为 PDF">
                  <AriButton
                    type="text"
                    icon="picture_as_pdf"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleExport('pdf');
                    }}
                    disabled={disabled}
                  />
                </AriTooltip>
              </>
            )}
          </div>
        )}
        
        {/* 模式切换 */}
        {showModeSwitch && (
          <div className={cn.e('toolbar-group')}>
            <AriTooltip content="源码编辑">
              <AriButton
                type={mode === 'source' ? 'default' : 'text'}
                icon="code"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleModeChange('source');
                }}
                disabled={disabled}
              />
            </AriTooltip>
            <AriTooltip content="可视化编辑">
              <AriButton
                type={mode === 'visual' ? 'default' : 'text'}
                icon="visibility"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleModeChange('visual');
                }}
                disabled={disabled}
              />
            </AriTooltip>
            <AriTooltip content="分屏模式">
              <AriButton
                type={mode === 'split' ? 'default' : 'text'}
                icon="vertical_split"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleModeChange('split');
                }}
                disabled={disabled}
              />
            </AriTooltip>
          </div>
        )}
        
        {/* 全屏按钮 */}
        <AriTooltip content={isFullscreen ? '退出全屏' : '全屏'}>
          <AriButton
            type="text"
            icon={isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleFullscreen();
            }}
          />
        </AriTooltip>
      </div>
    </div>
  );
};