import { useCallback } from 'react';

/**
 * 导入导出 Hook
 * 
 * Returns:
 * 
 *   导入导出相关方法
 */
export function useImportExport(
  content: string,
  handleContentChange: (content: string) => void,
  beforeImport?: (file: File) => boolean | Promise<boolean>,
  beforeExport?: (format: 'md' | 'html' | 'pdf', content: string) => string | Promise<string>
) {
  
  // 导入文件
  const handleImport = useCallback(async (file: File) => {
    if (beforeImport) {
      const shouldContinue = await beforeImport(file);
      if (!shouldContinue) return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      handleContentChange(text);
    };
    reader.readAsText(file);
  }, [beforeImport, handleContentChange]);

  // 导出功能
  const exportAs = useCallback(async (format: 'md' | 'html' | 'pdf'): Promise<string> => {
    let exportContent = content;
    
    if (beforeExport) {
      exportContent = await beforeExport(format, content);
    }
    
    switch (format) {
      case 'md':
        return exportContent;
      case 'html':
        // TODO: 实现Markdown到HTML的转换
        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <pre>${exportContent}</pre>
</body>
</html>`;
      case 'pdf':
        // TODO: 实现PDF导出
        return exportContent;
      default:
        return exportContent;
    }
  }, [content, beforeExport]);
  
  // 下载文件
  const downloadFile = useCallback((filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, []);
  
  // 处理导出按钮点击
  const handleExport = useCallback(async (format: 'md' | 'html' | 'pdf') => {
    const exportedContent = await exportAs(format);
    
    const filename = `document.${format}`;
    let mimeType: string;
    
    switch (format) {
      case 'md':
        mimeType = 'text/markdown';
        break;
      case 'html':
        mimeType = 'text/html';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      default:
        mimeType = 'text/plain';
    }
    
    downloadFile(filename, exportedContent, mimeType);
  }, [exportAs, downloadFile]);
  
  return {
    handleImport,
    handleExport,
    exportAs
  };
}