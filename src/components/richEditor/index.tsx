import React, { forwardRef, useImperativeHandle } from 'react';
import { useCss } from '@ari/utils';
import { RichEditorProps, RichEditorInstance } from '@ari/types';
import { RichEditorProvider } from './provider';
import { useRichEditor } from './hooks';
import { Toolbar, Editor, Preview } from './components';

/**
 * 富文本编辑器内部组件
 */
const RichEditorContent = forwardRef<RichEditorInstance, {}>((_, ref) => {
  const cn = useCss('rich-editor');
  const {
    useEditor,
    useMode,
    useImportExport,
    disabled,
    readOnly,
    height,
    minHeight,
    maxHeight,
    style,
    className,
    toolbar,
  } = useRichEditor();
  
  const {
    content,
    getContent,
    setContent,
    clear,
    focus,
  } = useEditor;
  
  const {
    mode,
    isFullscreen,
  } = useMode;
  
  const {
    exportAs,
    handleImport: importFile,
  } = useImportExport;
  
  // 暴露实例方法
  useImperativeHandle(ref, () => ({
    getContent,
    setContent,
    exportAs,
    importFile,
    clear,
    focus
  }), [getContent, setContent, exportAs, importFile, clear, focus]);
  
  // 计算编辑器高度样式
  const editorStyle = {
    height,
    minHeight,
    maxHeight,
    ...style
  };
  
  return (
    <div 
      className={cn.gen(
        className,
        cn.b(),
        cn.m(mode),
        cn.is('fullscreen', isFullscreen),
        cn.is('disabled', disabled),
        cn.is('readonly', readOnly)
      )}
      style={editorStyle}
    >
      {/* 工具栏 */}
      {toolbar !== false && (
        <Toolbar
          buttons={toolbar === false ? [] : (toolbar?.buttons || [
            'bold', 'italic', 'strikethrough', 'divider',
            'heading', 'quote', 'code', 'codeBlock', 'divider',
            'link', 'image', 'table', 'divider',
            'list', 'orderedList', 'taskList', 'divider',
            'undo', 'redo'
          ])}
          showImport={toolbar !== false && (toolbar?.showImport ?? true)}
          showExport={toolbar !== false && (toolbar?.showExport ?? true)}
          showModeSwitch={toolbar !== false && (toolbar?.showModeSwitch ?? true)}
        />
      )}
      
      {/* 编辑器主体 */}
      <div className={cn.e('body')}>
        {/* 编辑区 */}
        {(mode === 'source' || mode === 'split') && (
          <Editor />
        )}
        
        {/* 预览区 */}
        {(mode === 'visual' || mode === 'split') && (
          <Preview />
        )}
      </div>
    </div>
  );
});

RichEditorContent.displayName = 'RichEditorContent';

/**
 * 富文本编辑器组件
 * 支持 Markdown 编辑、实时预览、导入导出等功能
 * 
 * Example:
 * {@link https://aries-react.dev/docs/RichEditor}
 */
export const AriRichEditor = forwardRef<RichEditorInstance, RichEditorProps>((
  props,
  ref
) => {
  return (
    <RichEditorProvider {...props}>
      <RichEditorContent ref={ref} />
    </RichEditorProvider>
  );
});

AriRichEditor.displayName = 'AriRichEditor';