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
  renderHtmlDocument: (markdown: string) => string,
  beforeImport?: (file: File) => boolean | Promise<boolean>,
  beforeExport?: (format: 'md' | 'html' | 'pdf', content: string) => string | Promise<string>
) {
  const handleImport = useCallback(async (file: File) => {
    if (beforeImport) {
      const shouldContinue = await beforeImport(file);
      if (!shouldContinue) {
        return;
      }
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      handleContentChange(text);
    };
    reader.readAsText(file);
  }, [beforeImport, handleContentChange]);

  const exportAs = useCallback(async (format: 'md' | 'html' | 'pdf'): Promise<string> => {
    let exportContent = content;

    if (beforeExport) {
      exportContent = await beforeExport(format, content);
    }

    if (format === 'md') {
      return exportContent;
    }

    return renderHtmlDocument(exportContent);
  }, [beforeExport, content, renderHtmlDocument]);

  const downloadFile = useCallback((filename: string, fileContent: string, type: string) => {
    const blob = new Blob([fileContent], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }, []);

  const printHtmlDocument = useCallback((html: string) => {
    const printWindow = window.open('', '_blank', 'noopener,noreferrer');

    if (!printWindow) {
      return;
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();

    const finalize = () => {
      printWindow.print();
      printWindow.close();
    };

    if (printWindow.document.readyState === 'complete') {
      finalize();
      return;
    }

    printWindow.onload = finalize;
  }, []);

  const handleExport = useCallback(async (format: 'md' | 'html' | 'pdf') => {
    const exportedContent = await exportAs(format);

    if (format === 'pdf') {
      printHtmlDocument(exportedContent);
      return;
    }

    const filename = `document.${format}`;
    const mimeType = format === 'md' ? 'text/markdown' : 'text/html';
    downloadFile(filename, exportedContent, mimeType);
  }, [downloadFile, exportAs, printHtmlDocument]);

  return {
    handleImport,
    handleExport,
    exportAs,
  };
}
