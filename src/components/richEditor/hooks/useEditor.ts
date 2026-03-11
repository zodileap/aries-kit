import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { AriMessage } from '@ari/components/message';
import type {
  RichEditorMediaConfig,
  RichEditorMediaKind,
  RichEditorMediaSource,
  RichEditorPendingUpload,
  RichEditorUploadResult,
} from '@ari/types';
import { useMarkdown } from './useMarkdown';

const escapeRegExp = (value: string): string => (
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
);

const buildSourceBlockInsertion = (
  value: string,
  start: number,
  end: number,
  block: string,
): string => {
  const before = value.slice(0, start);
  const after = value.slice(end);
  const prefix = before.length > 0 && !before.endsWith('\n') ? '\n\n' : '';
  const suffix = after.length > 0 && !after.startsWith('\n') ? '\n\n' : '';
  return `${prefix}${block}${suffix}`;
};

const createUploadToken = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `upload-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const markdownHeadingPattern = /^\s{0,3}#{1,6}(?:\s+|$)/;
const markdownQuotePattern = /^\s{0,3}>\s?/;
const markdownUnorderedListPattern = /^\s*[-*+]\s+/;
const markdownOrderedListPattern = /^\s*\d+\.\s+/;
const markdownTaskListPattern = /^\s*-\s\[(?: |x|X)\]\s+/;

const resolveSourceBlockRange = (
  value: string,
  start: number,
  end: number,
): { start: number; end: number } => {
  const normalizedEnd = start !== end && end > start && value[end - 1] === '\n'
    ? end - 1
    : end;
  const blockStart = value.lastIndexOf('\n', Math.max(0, start - 1));
  const blockEnd = value.indexOf('\n', normalizedEnd);

  return {
    start: blockStart === -1 ? 0 : blockStart + 1,
    end: blockEnd === -1 ? value.length : blockEnd,
  };
};

const applyHeadingToSourceLine = (line: string, prefix: string, allowEmpty = false): string => {
  if (!line.trim()) {
    return allowEmpty ? prefix : line;
  }

  const content = line.replace(markdownHeadingPattern, '').trim();
  return `${prefix}${content}`;
};

const replaceSourceBlock = (
  textarea: HTMLTextAreaElement,
  blockStart: number,
  blockEnd: number,
  nextBlock: string,
  hasSelection: boolean,
): void => {
  const value = textarea.value;
  textarea.value = value.slice(0, blockStart) + nextBlock + value.slice(blockEnd);

  if (hasSelection) {
    textarea.selectionStart = blockStart;
    textarea.selectionEnd = blockStart + nextBlock.length;
  } else {
    const cursor = blockStart + nextBlock.length;
    textarea.selectionStart = cursor;
    textarea.selectionEnd = cursor;
  }

  textarea.focus();
};

const stripListPrefix = (line: string): string => (
  line
    .replace(markdownTaskListPattern, '')
    .replace(markdownOrderedListPattern, '')
    .replace(markdownUnorderedListPattern, '')
    .trim()
);

const resolveVisualBlockElement = (
  node: Node | null,
  offset: number,
  editor: HTMLElement,
): HTMLElement | null => {
  if (node === editor) {
    const children = Array.from(editor.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

    if (children.length === 0) {
      return null;
    }

    const previousIndex = Math.min(Math.max(offset - 1, 0), children.length - 1);
    const nextIndex = Math.min(Math.max(offset, 0), children.length - 1);
    return children[previousIndex] ?? children[nextIndex] ?? null;
  }

  let current: Node | null = node;

  while (current && current !== editor) {
    if (current instanceof HTMLElement && current.parentElement === editor) {
      return current;
    }
    current = current.parentNode;
  }

  return null;
};

const collectVisualBlocks = (
  editor: HTMLElement,
  range: Range,
): HTMLElement[] => {
  const startBlock = resolveVisualBlockElement(range.startContainer, range.startOffset, editor);
  const endBlock = resolveVisualBlockElement(range.endContainer, range.endOffset, editor);

  if (!startBlock && !endBlock) {
    return [];
  }

  const firstBlock = startBlock ?? endBlock;
  const lastBlock = endBlock ?? startBlock;
  const blocks: HTMLElement[] = [];
  let current: Element | null = firstBlock;

  while (current instanceof HTMLElement) {
    blocks.push(current);
    if (current === lastBlock) {
      break;
    }
    current = current.nextElementSibling;
  }

  return blocks;
};

const isVisualListElement = (element: HTMLElement): boolean => (
  ['UL', 'OL'].includes(element.tagName)
);

const extractVisualListItemHtml = (item: HTMLLIElement): string => {
  const container = document.createElement('div');

  Array.from(item.childNodes).forEach((node) => {
    if (node instanceof HTMLInputElement && node.type === 'checkbox') {
      return;
    }

    if (node instanceof HTMLElement && ['UL', 'OL'].includes(node.tagName)) {
      return;
    }

    container.appendChild(node.cloneNode(true));
  });

  const html = container.innerHTML.trim();
  return html && html !== '<br>' ? html : '列表项';
};

const createVisualParagraphFromListItem = (item: HTMLLIElement): HTMLParagraphElement => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = extractVisualListItemHtml(item) || '<br />';
  return paragraph;
};

const createVisualListItem = (
  html: string,
  kind: 'unordered' | 'ordered' | 'task',
): HTMLLIElement => {
  const item = document.createElement('li');

  if (kind === 'task') {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    item.appendChild(checkbox);
  }

  item.insertAdjacentHTML('beforeend', html && html !== '<br>' ? html : '列表项');
  return item;
};

const rangeToHtml = (range: Range): string => {
  const container = document.createElement('div');
  container.appendChild(range.cloneContents());
  return container.innerHTML;
};

const hasMeaningfulHtmlContent = (html: string): boolean => (
  html
    .replace(/<br\s*\/?>/gi, '')
    .replace(/&nbsp;/gi, '')
    .trim()
    .length > 0
);

const createVisualTextBlock = (
  templateBlock: HTMLElement | null,
  html: string,
): HTMLElement | null => {
  if (!hasMeaningfulHtmlContent(html)) {
    return null;
  }

  const allowedTags = new Set(['P', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']);
  const tagName = templateBlock && allowedTags.has(templateBlock.tagName)
    ? templateBlock.tagName.toLowerCase()
    : 'p';
  const element = document.createElement(tagName);
  element.innerHTML = html;
  return element;
};

/**
 * 编辑器核心 Hook
 * 管理内容、历史记录、选择、媒体上传、可视化编辑等核心能力
 */
export function useEditor(
  value?: string,
  defaultValue = '',
  onChange?: (value: string) => void,
  markdownTools: ReturnType<typeof useMarkdown> = useMarkdown(),
  media?: RichEditorMediaConfig,
) {
  const initialContent = value ?? defaultValue;

  const [content, setContentState] = useState(initialContent);
  const [history, setHistory] = useState<string[]>([initialContent]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [savedSelection, setSavedSelection] = useState<{ start: number; end: number } | null>(null);
  const [pendingUploads, setPendingUploads] = useState<RichEditorPendingUpload[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const visualEditorRef = useRef<HTMLDivElement>(null);
  const savedVisualRangeRef = useRef<Range | null>(null);
  const savedVisualBlockSelectionRef = useRef<{ startIndex: number; endIndex: number } | null>(null);
  const savedSourceSelectionRef = useRef<{ start: number; end: number } | null>(null);
  const activeEditorRef = useRef<'source' | 'visual'>('source');
  const skipNextVisualSyncRef = useRef(false);
  const isUndoRedoActionRef = useRef(false);
  const contentRef = useRef(content);
  const historyRef = useRef(history);
  const historyIndexRef = useRef(historyIndex);
  const pendingUploadPromisesRef = useRef(new Map<string, Promise<void>>());
  const uploadControllersRef = useRef(new Map<string, AbortController>());

  const canUndo = useMemo(() => historyIndex > 0, [historyIndex]);
  const canRedo = useMemo(() => historyIndex < history.length - 1, [historyIndex, history.length]);

  const updateHistory = useCallback((newContent: string) => {
    const currentEntries = historyRef.current;
    const nextEntries = currentEntries.slice(0, historyIndexRef.current + 1);

    if (nextEntries[nextEntries.length - 1] === newContent) {
      return;
    }

    nextEntries.push(newContent);
    if (nextEntries.length > 50) {
      nextEntries.shift();
    }

    const nextIndex = nextEntries.length - 1;
    historyRef.current = nextEntries;
    historyIndexRef.current = nextIndex;
    setHistory(nextEntries);
    setHistoryIndex(nextIndex);
  }, []);

  const handleContentChange = useCallback((newContent: string, addToHistory = true) => {
    contentRef.current = newContent;
    setContentState(newContent);
    onChange?.(newContent);

    if (addToHistory && !isUndoRedoActionRef.current) {
      updateHistory(newContent);
    }
  }, [onChange, updateHistory]);

  useEffect(() => {
    if (value !== undefined && value !== contentRef.current) {
      contentRef.current = value;
      setContentState(value);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      uploadControllersRef.current.forEach((controller) => controller.abort());
      pendingUploadPromisesRef.current.clear();
    };
  }, []);

  const saveSourceSelection = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    activeEditorRef.current = 'source';
    const nextSelection = {
      start: textarea.selectionStart,
      end: textarea.selectionEnd,
    };
    savedSourceSelectionRef.current = nextSelection;
    setSavedSelection(nextSelection);
  }, []);

  const setVisualSelectionRange = useCallback((range: Range) => {
    const selection = window.getSelection();
    const editor = visualEditorRef.current;
    if (!selection) {
      return;
    }

    activeEditorRef.current = 'visual';
    savedVisualRangeRef.current = range.cloneRange();
    if (editor) {
      const blocks = collectVisualBlocks(editor, range);
      if (blocks.length > 0) {
        const children = Array.from(editor.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
        const startIndex = children.indexOf(blocks[0]);
        const endIndex = children.indexOf(blocks[blocks.length - 1]);
        if (startIndex !== -1 && endIndex !== -1) {
          savedVisualBlockSelectionRef.current = { startIndex, endIndex };
        }
      }
    }
    selection.removeAllRanges();
    selection.addRange(range);
  }, []);

  const saveVisualSelection = useCallback(() => {
    const editor = visualEditorRef.current;
    if (!editor) {
      return;
    }

    activeEditorRef.current = 'visual';
    const selection = window.getSelection();
    const fallbackRange = document.createRange();
    fallbackRange.selectNodeContents(editor);
    fallbackRange.collapse(false);

    if (!selection || selection.rangeCount === 0) {
      savedVisualRangeRef.current = fallbackRange;
      return;
    }

    const range = selection.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) {
      savedVisualRangeRef.current = fallbackRange;
      return;
    }

    const isRootCollapsedSelection = (
      range.collapsed
      && range.startContainer === editor
      && range.endContainer === editor
    );

    if (isRootCollapsedSelection && savedVisualRangeRef.current) {
      return;
    }

    activeEditorRef.current = 'visual';
    savedVisualRangeRef.current = range.cloneRange();
    const blocks = collectVisualBlocks(editor, range);
    if (blocks.length > 0) {
      const children = Array.from(editor.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
      const startIndex = children.indexOf(blocks[0]);
      const endIndex = children.indexOf(blocks[blocks.length - 1]);
      if (startIndex !== -1 && endIndex !== -1) {
        savedVisualBlockSelectionRef.current = { startIndex, endIndex };
      }
    }
  }, []);

  const saveSelection = useCallback(() => {
    const editor = visualEditorRef.current;
    const selection = window.getSelection();

    if (
      editor &&
      selection &&
      selection.rangeCount > 0 &&
      editor.contains(selection.getRangeAt(0).commonAncestorContainer)
    ) {
      saveVisualSelection();
      return;
    }

    saveSourceSelection();
  }, [saveSourceSelection, saveVisualSelection]);

  const restoreSelection = useCallback(() => {
    if (activeEditorRef.current === 'visual') {
      const editor = visualEditorRef.current;
      const range = savedVisualRangeRef.current;
      if (!editor) {
        return;
      }

      const selection = window.getSelection();
      if (!selection) {
        return;
      }

      editor.focus();
      if (range && editor.contains(range.commonAncestorContainer)) {
        selection.removeAllRanges();
        selection.addRange(range);
        return;
      }

      const blockSelection = savedVisualBlockSelectionRef.current;
      if (blockSelection) {
        const children = Array.from(editor.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
        const startBlock = children[Math.min(blockSelection.startIndex, children.length - 1)];
        const endBlock = children[Math.min(blockSelection.endIndex, children.length - 1)];

        if (startBlock && endBlock) {
          const nextRange = document.createRange();
          nextRange.setStartBefore(startBlock);
          nextRange.setEndAfter(endBlock);
          selection.removeAllRanges();
          selection.addRange(nextRange);
        }
      }
      return;
    }

    const textarea = textareaRef.current;
    const sourceSelection = savedSourceSelectionRef.current ?? savedSelection;
    if (!textarea || !sourceSelection) {
      return;
    }

    textarea.focus();
    textarea.setSelectionRange(sourceSelection.start, sourceSelection.end);
  }, [savedSelection]);

  const focus = useCallback(() => {
    if (visualEditorRef.current && activeEditorRef.current === 'visual') {
      visualEditorRef.current.focus();
      saveVisualSelection();
      return;
    }

    if (textareaRef.current) {
      textareaRef.current.focus();
      return;
    }

    if (visualEditorRef.current) {
      activeEditorRef.current = 'visual';
      visualEditorRef.current.focus();
      saveVisualSelection();
    }
  }, [saveVisualSelection]);

  const syncVisualEditorContent = useCallback(() => {
    const editor = visualEditorRef.current;
    if (!editor) {
      return;
    }

    editor.setAttribute('data-rich-editor-root', 'true');

    if (skipNextVisualSyncRef.current) {
      skipNextVisualSyncRef.current = false;
      return;
    }

    const nextHtml = markdownTools.renderEditableHtml(contentRef.current);
    if (editor.innerHTML !== nextHtml) {
      editor.innerHTML = nextHtml;
    }
  }, [markdownTools]);

  useEffect(() => {
    syncVisualEditorContent();
  }, [content, syncVisualEditorContent]);

  const syncContentFromVisualEditor = useCallback(() => {
    const editor = visualEditorRef.current;
    if (!editor) {
      return;
    }

    activeEditorRef.current = 'visual';
    skipNextVisualSyncRef.current = true;
    handleContentChange(markdownTools.editableHtmlToMarkdown(editor));
  }, [handleContentChange, markdownTools]);

  const undo = useCallback(() => {
    if (historyIndexRef.current <= 0) {
      return;
    }

    const nextIndex = historyIndexRef.current - 1;
    const nextContent = historyRef.current[nextIndex];
    isUndoRedoActionRef.current = true;
    historyIndexRef.current = nextIndex;
    setHistoryIndex(nextIndex);
    contentRef.current = nextContent;
    setContentState(nextContent);
    onChange?.(nextContent);
    setTimeout(() => {
      isUndoRedoActionRef.current = false;
      syncVisualEditorContent();
    }, 0);
  }, [onChange, syncVisualEditorContent]);

  const redo = useCallback(() => {
    if (historyIndexRef.current >= historyRef.current.length - 1) {
      return;
    }

    const nextIndex = historyIndexRef.current + 1;
    const nextContent = historyRef.current[nextIndex];
    isUndoRedoActionRef.current = true;
    historyIndexRef.current = nextIndex;
    setHistoryIndex(nextIndex);
    contentRef.current = nextContent;
    setContentState(nextContent);
    onChange?.(nextContent);
    setTimeout(() => {
      isUndoRedoActionRef.current = false;
      syncVisualEditorContent();
    }, 0);
  }, [onChange, syncVisualEditorContent]);

  const insertTextInSourceEditor = useCallback((text: string, block = false) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    restoreSelection();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const nextText = block ? buildSourceBlockInsertion(value, start, end, text) : text;

    markdownTools.replaceSelection(textarea, nextText);
    saveSourceSelection();
    handleContentChange(textarea.value);
  }, [handleContentChange, markdownTools, restoreSelection, saveSourceSelection]);

  const insertHtmlInVisualEditor = useCallback((html: string) => {
    const editor = visualEditorRef.current;
    if (!editor) {
      return;
    }

    activeEditorRef.current = 'visual';
    restoreSelection();
    editor.focus();
    document.execCommand('insertHTML', false, html);
    saveVisualSelection();
    syncContentFromVisualEditor();
  }, [restoreSelection, saveVisualSelection, syncContentFromVisualEditor]);

  const replaceUploadPlaceholder = useCallback((token: string, replacement: string) => {
    const placeholderRegex = new RegExp(
      `<ari-media-placeholder\\b[^>]*token=["']${escapeRegExp(token)}["'][^>]*><\\/ari-media-placeholder>`,
      'i',
    );
    const currentContent = contentRef.current;
    const nextContent = currentContent.replace(placeholderRegex, replacement);
    handleContentChange(nextContent);
  }, [handleContentChange]);

  const createMediaMarkup = useCallback((
    kind: RichEditorMediaKind,
    result: RichEditorUploadResult,
    file: File,
  ): string => {
    if (kind === 'video') {
      return markdownTools.renderVideoHtml({
        src: result.url,
        poster: result.posterUrl,
        id: result.id,
      }, false);
    }

    return markdownTools.renderImageHtml({
      src: result.url,
      alt: result.alt || file.name,
      title: result.title,
      id: result.id,
    }, false);
  }, [markdownTools]);

  const updatePendingUpload = useCallback((token: string, updater: (current: RichEditorPendingUpload) => RichEditorPendingUpload | null) => {
    setPendingUploads((current) => (
      current
        .map((item) => (item.token === token ? updater(item) : item))
        .filter(Boolean) as RichEditorPendingUpload[]
    ));
  }, []);

  const removePendingUpload = useCallback((token: string) => {
    setPendingUploads((current) => current.filter((item) => item.token !== token));
  }, []);

  const validateMediaFile = useCallback((file: File, kind: RichEditorMediaKind): boolean => {
    const isImage = kind === 'image';
    const expectedPrefix = isImage ? 'image/' : 'video/';

    if (!file.type.startsWith(expectedPrefix)) {
      AriMessage.warning(`仅支持${isImage ? '图片' : '视频'}文件`);
      return false;
    }

    const maxSize = isImage ? media?.maxImageSize : media?.maxVideoSize;
    if (maxSize && file.size > maxSize) {
      AriMessage.warning(`${file.name} 超出大小限制`);
      return false;
    }

    return true;
  }, [media?.maxImageSize, media?.maxVideoSize]);

  const queueMediaUpload = useCallback((
    file: File,
    kind: RichEditorMediaKind,
    source: RichEditorMediaSource,
    token: string,
  ) => {
    if (!media?.upload) {
      return;
    }

    const controller = new AbortController();
    uploadControllersRef.current.set(token, controller);

    const uploadPromise = media.upload({
      file,
      kind,
      source,
      signal: controller.signal,
    }).then((result) => {
      replaceUploadPlaceholder(token, createMediaMarkup(kind, result, file));
      removePendingUpload(token);
    }).catch((error) => {
      const message = error instanceof Error ? error.message : '媒体上传失败';
      updatePendingUpload(token, (current) => ({
        ...current,
        status: 'error',
        error: message,
      }));
      replaceUploadPlaceholder(token, markdownTools.createMediaPlaceholderTag({
        token,
        kind,
        status: 'error',
        name: file.name,
        error: message,
      }));
      AriMessage.error(message);
    }).finally(() => {
      pendingUploadPromisesRef.current.delete(token);
      uploadControllersRef.current.delete(token);
    });

    pendingUploadPromisesRef.current.set(token, uploadPromise);
  }, [
    createMediaMarkup,
    markdownTools,
    media,
    removePendingUpload,
    replaceUploadPlaceholder,
    updatePendingUpload,
  ]);

  const insertMediaFiles = useCallback((
    files: File[],
    source: RichEditorMediaSource,
  ) => {
    if (!media?.upload) {
      AriMessage.warning('请先通过 media.upload 提供媒体上传接口');
      return;
    }

    const validFiles = files.filter((file) => {
      const kind = file.type.startsWith('video/') ? 'video' : 'image';
      return validateMediaFile(file, kind);
    });

    if (validFiles.length === 0) {
      return;
    }

    const placeholders = validFiles.map((file) => {
      const kind: RichEditorMediaKind = file.type.startsWith('video/') ? 'video' : 'image';
      const token = createUploadToken();

      setPendingUploads((current) => current.concat({
        token,
        kind,
        source,
        name: file.name,
        status: 'uploading',
      }));

      queueMediaUpload(file, kind, source, token);

      return {
        kind,
        token,
        file,
        markdown: markdownTools.createMediaPlaceholderTag({
          token,
          kind,
          status: 'uploading',
          name: file.name,
        }),
      };
    });

    if (activeEditorRef.current === 'visual' && visualEditorRef.current) {
      const html = placeholders.map((item) => markdownTools.renderMediaPlaceholderHtml({
        token: item.token,
        kind: item.kind,
        status: 'uploading',
        name: item.file.name,
      }, true)).join('<p><br /></p>');
      insertHtmlInVisualEditor(html);
      return;
    }

    insertTextInSourceEditor(placeholders.map((item) => item.markdown).join('\n\n'), true);
  }, [
    insertHtmlInVisualEditor,
    insertTextInSourceEditor,
    markdownTools,
    media,
    queueMediaUpload,
    validateMediaFile,
  ]);

  const handleMediaFilesSelected = useCallback((
    fileList: FileList | File[] | null,
    source: RichEditorMediaSource,
  ) => {
    if (!fileList) {
      return;
    }

    insertMediaFiles(Array.from(fileList), source);
  }, [insertMediaFiles]);

  const handlePaste = useCallback((event: React.ClipboardEvent<HTMLTextAreaElement | HTMLDivElement>) => {
    if (!media?.upload || media.enablePasteUpload === false) {
      return;
    }

    const files = Array.from(event.clipboardData.items)
      .map((item) => item.getAsFile())
      .filter((file): file is File => file instanceof File && /^(image|video)\//.test(file.type));

    if (files.length === 0) {
      return;
    }

    event.preventDefault();
    insertMediaFiles(files, 'paste');
  }, [insertMediaFiles, media?.enablePasteUpload, media?.upload]);

  const handleInsertHeading = useCallback((level: string | number) => {
    const levelNum = typeof level === 'string' ? parseInt(level, 10) : level;

    if (activeEditorRef.current === 'visual' && visualEditorRef.current) {
      restoreSelection();
      document.execCommand('formatBlock', false, `<h${levelNum}>`);
      saveVisualSelection();
      syncContentFromVisualEditor();
      return;
    }

    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    restoreSelection();
    const prefix = `${'#'.repeat(levelNum)} `;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const hasSelection = start !== end;
    const blockRange = resolveSourceBlockRange(value, start, end);
    const currentBlock = value.slice(blockRange.start, blockRange.end);
    const nextBlock = currentBlock
      .split('\n')
      .map((line) => applyHeadingToSourceLine(line, prefix, !hasSelection))
      .join('\n');

    textarea.value = value.slice(0, blockRange.start) + nextBlock + value.slice(blockRange.end);

    if (hasSelection) {
      textarea.selectionStart = blockRange.start;
      textarea.selectionEnd = blockRange.start + nextBlock.length;
    } else {
      const currentPrefixLength = currentBlock.match(markdownHeadingPattern)?.[0].length ?? 0;
      const contentOffset = currentBlock.trim()
        ? Math.max(0, start - blockRange.start - currentPrefixLength)
        : 0;
      const nextCursor = Math.min(nextBlock.length, prefix.length + contentOffset);

      textarea.selectionStart = blockRange.start + nextCursor;
      textarea.selectionEnd = blockRange.start + nextCursor;
    }

    textarea.focus();
    saveSourceSelection();
    handleContentChange(textarea.value);
  }, [
    handleContentChange,
    restoreSelection,
    saveSourceSelection,
    saveVisualSelection,
    syncContentFromVisualEditor,
  ]);

  const transformSourceLines = useCallback((
    textarea: HTMLTextAreaElement,
    formatter: (lines: string[], hasSelection: boolean) => string[],
  ) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const hasSelection = start !== end;
    const blockRange = resolveSourceBlockRange(textarea.value, start, end);
    const currentBlock = textarea.value.slice(blockRange.start, blockRange.end);
    const nextBlock = formatter(currentBlock.split('\n'), hasSelection).join('\n');

    replaceSourceBlock(textarea, blockRange.start, blockRange.end, nextBlock, hasSelection);
  }, []);

  const applyQuoteToSource = useCallback((textarea: HTMLTextAreaElement) => {
    transformSourceLines(textarea, (lines, hasSelection) => {
      const nonEmptyLines = lines.filter((line) => line.trim());
      const shouldRemoveQuote = nonEmptyLines.length > 0 && nonEmptyLines.every((line) => markdownQuotePattern.test(line));

      return lines.map((line) => {
        if (!line.trim()) {
          return hasSelection ? line : '> ';
        }

        const content = line.replace(markdownQuotePattern, '').trim();
        return shouldRemoveQuote ? content : `> ${content}`;
      });
    });
  }, [transformSourceLines]);

  const applyListToSource = useCallback((
    textarea: HTMLTextAreaElement,
    kind: 'unordered' | 'ordered' | 'task',
  ) => {
    transformSourceLines(textarea, (lines, hasSelection) => {
      const targetPattern = kind === 'unordered'
        ? markdownUnorderedListPattern
        : kind === 'ordered'
          ? markdownOrderedListPattern
          : markdownTaskListPattern;
      const nonEmptyLines = lines.filter((line) => line.trim());
      const shouldClear = nonEmptyLines.length > 0 && nonEmptyLines.every((line) => targetPattern.test(line));
      let itemIndex = 0;

      return lines.map((line) => {
        if (!line.trim()) {
          if (hasSelection || shouldClear) {
            return line;
          }

          return kind === 'ordered'
            ? '1. '
            : kind === 'task'
              ? '- [ ] '
              : '- ';
        }

        const content = stripListPrefix(line);
        if (shouldClear) {
          return content;
        }

        itemIndex += 1;
        if (kind === 'ordered') {
          return `${itemIndex}. ${content}`;
        }

        if (kind === 'task') {
          return `- [ ] ${content}`;
        }

        return `- ${content}`;
      });
    });
  }, [transformSourceLines]);

  const resolveVisualBlocksForAction = useCallback((range: Range): HTMLElement[] => {
    const editor = visualEditorRef.current;
    if (!editor) {
      return [];
    }

    const blocks = collectVisualBlocks(editor, range);
    const isRootSelection = (
      range.startContainer === editor
      && range.endContainer === editor
    );

    if ((!isRootSelection && blocks.length > 0) || !savedVisualBlockSelectionRef.current) {
      return blocks;
    }

    const children = Array.from(editor.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
    if (children.length === 0) {
      return blocks;
    }

    const { startIndex, endIndex } = savedVisualBlockSelectionRef.current;
    return children.slice(
      Math.max(0, Math.min(startIndex, children.length - 1)),
      Math.max(0, Math.min(endIndex, children.length - 1)) + 1,
    );
  }, []);

  const applyListToVisual = useCallback((kind: 'unordered' | 'ordered' | 'task') => {
    const editor = visualEditorRef.current;
    const selection = window.getSelection();

    if (!editor || !selection || selection.rangeCount === 0) {
      return false;
    }

    const range = selection.getRangeAt(0);
    const blocks = resolveVisualBlocksForAction(range);
    const targetTag = kind === 'ordered' ? 'OL' : 'UL';
    const isTaskList = kind === 'task';

    if (blocks.length === 0) {
      const list = document.createElement(targetTag.toLowerCase());
      if (isTaskList) {
        list.setAttribute('data-rich-editor-task-list', 'true');
      }
      const item = createVisualListItem('待办事项', kind);
      list.appendChild(item);
      editor.appendChild(list);

      const nextRange = document.createRange();
      nextRange.selectNodeContents(item);
      nextRange.collapse(false);
      setVisualSelectionRange(nextRange);
      return true;
    }

    const shouldClear = blocks.every((block) => {
      if (block.tagName !== targetTag) {
        return false;
      }

      if (isTaskList) {
        return block.hasAttribute('data-rich-editor-task-list');
      }

      return !(targetTag === 'UL' && block.hasAttribute('data-rich-editor-task-list'));
    });
    const firstBlock = blocks[0];
    const lastBlock = blocks[blocks.length - 1];
    const afterNode = lastBlock.nextSibling;

    if (shouldClear) {
      const nextBlocks: HTMLElement[] = [];

      blocks.forEach((block) => {
        Array.from(block.children).forEach((child) => {
          if (child instanceof HTMLLIElement) {
            nextBlocks.push(createVisualParagraphFromListItem(child));
          }
        });
      });

      blocks.forEach((block) => block.remove());

      nextBlocks.forEach((block) => {
        editor.insertBefore(block, afterNode);
      });

      const focusBlock = nextBlocks[nextBlocks.length - 1];
      if (focusBlock) {
        const nextRange = document.createRange();
        nextRange.selectNodeContents(focusBlock);
        nextRange.collapse(false);
        setVisualSelectionRange(nextRange);
      }

      return true;
    }

    const list = document.createElement(targetTag.toLowerCase());
    if (isTaskList) {
      list.setAttribute('data-rich-editor-task-list', 'true');
    }

    blocks.forEach((block) => {
      if (isVisualListElement(block)) {
        Array.from(block.children).forEach((child) => {
          if (!(child instanceof HTMLLIElement)) {
            return;
          }

          const item = createVisualListItem(extractVisualListItemHtml(child), kind);
          list.appendChild(item);
        });
        return;
      }

      const html = block.innerHTML.trim();
      const item = createVisualListItem(html, kind);
      list.appendChild(item);
    });

    blocks.forEach((block) => block.remove());
    editor.insertBefore(list, afterNode);

    const focusItem = list.lastElementChild ?? list;
    const nextRange = document.createRange();
    nextRange.selectNodeContents(focusItem);
    nextRange.collapse(false);
    setVisualSelectionRange(nextRange);
    return true;
  }, [resolveVisualBlocksForAction, setVisualSelectionRange]);

  const applyCodeBlockToVisual = useCallback(() => {
    const editor = visualEditorRef.current;
    const selection = window.getSelection();

    if (!editor || !selection || selection.rangeCount === 0) {
      return false;
    }

    const range = selection.getRangeAt(0);
    const blocks = resolveVisualBlocksForAction(range);
    const codeValue = selection.toString().replace(/\u00a0/g, ' ').trim() || '// 在这里输入代码';
    const codeBlock = document.createElement('pre');
    codeBlock.setAttribute('data-rich-editor-code-block', 'true');
    codeBlock.setAttribute('data-language', 'plaintext');

    const code = document.createElement('code');
    code.textContent = codeValue;
    codeBlock.appendChild(code);

    const trailingParagraph = document.createElement('p');
    trailingParagraph.innerHTML = '<br />';

    if (blocks.length === 0) {
      editor.appendChild(codeBlock);
      editor.appendChild(trailingParagraph);
    } else if (range.collapsed) {
      const currentBlock = blocks[blocks.length - 1];
      editor.insertBefore(codeBlock, currentBlock.nextSibling);
      editor.insertBefore(trailingParagraph, codeBlock.nextSibling);
    } else if (blocks.length === 1) {
      const currentBlock = blocks[0];
      const beforeRange = document.createRange();
      beforeRange.selectNodeContents(currentBlock);
      beforeRange.setEnd(range.startContainer, range.startOffset);

      const afterRange = document.createRange();
      afterRange.selectNodeContents(currentBlock);
      afterRange.setStart(range.endContainer, range.endOffset);

      const beforeBlock = createVisualTextBlock(currentBlock, rangeToHtml(beforeRange));
      const afterBlock = createVisualTextBlock(currentBlock, rangeToHtml(afterRange));
      const afterNode = currentBlock.nextSibling;

      currentBlock.remove();

      if (beforeBlock) {
        editor.insertBefore(beforeBlock, afterNode);
      }
      editor.insertBefore(codeBlock, afterNode);
      if (afterBlock) {
        editor.insertBefore(afterBlock, afterNode);
      } else {
        editor.insertBefore(trailingParagraph, afterNode);
      }
    } else {
      const afterNode = blocks[blocks.length - 1].nextSibling;
      blocks.forEach((block) => block.remove());
      editor.insertBefore(codeBlock, afterNode);
      editor.insertBefore(trailingParagraph, afterNode);
    }

    const nextRange = document.createRange();
    nextRange.selectNodeContents(code);
    nextRange.collapse(false);
    setVisualSelectionRange(nextRange);
    return true;
  }, [resolveVisualBlocksForAction, setVisualSelectionRange]);

  const applyQuoteToVisual = useCallback(() => {
    const editor = visualEditorRef.current;
    const selection = window.getSelection();

    if (!editor || !selection || selection.rangeCount === 0) {
      return false;
    }

    const range = selection.getRangeAt(0);
    const blocks = resolveVisualBlocksForAction(range);

    if (blocks.length === 0) {
      const blockquote = document.createElement('blockquote');
      blockquote.textContent = '引用内容';
      editor.appendChild(blockquote);

      const nextRange = document.createRange();
      nextRange.selectNodeContents(blockquote);
      setVisualSelectionRange(nextRange);
      return true;
    }

    const shouldClear = blocks.every((block) => block.tagName === 'BLOCKQUOTE');
    const afterNode = blocks[blocks.length - 1].nextSibling;
    const nextBlocks: HTMLElement[] = blocks.map((block) => {
      if (shouldClear) {
        return createVisualTextBlock(null, block.innerHTML.trim()) ?? (() => {
          const paragraph = document.createElement('p');
          paragraph.innerHTML = '<br />';
          return paragraph;
        })();
      }

      const blockquote = document.createElement('blockquote');
      const html = block.innerHTML.trim();
      blockquote.innerHTML = html && html !== '<br>' ? html : '引用内容';
      return blockquote;
    });

    blocks.forEach((block) => block.remove());
    nextBlocks.forEach((block) => {
      editor.insertBefore(block, afterNode);
    });

    const focusBlock = nextBlocks[nextBlocks.length - 1];
    const nextRange = document.createRange();
    nextRange.selectNodeContents(focusBlock);
    setVisualSelectionRange(nextRange);
    return true;
  }, [resolveVisualBlocksForAction, setVisualSelectionRange]);

  const handleVisualToolbarAction = useCallback((action: string) => {
    restoreSelection();

    switch (action) {
      case 'bold':
        document.execCommand('bold');
        break;
      case 'italic':
        document.execCommand('italic');
        break;
      case 'strikethrough':
        document.execCommand('strikeThrough');
        break;
      case 'quote':
        if (!applyQuoteToVisual()) {
          return;
        }
        break;
      case 'code': {
        const selected = window.getSelection()?.toString() || '行内代码';
        insertHtmlInVisualEditor(`<code>${selected.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`);
        return;
      }
      case 'codeBlock':
        if (!applyCodeBlockToVisual()) {
          return;
        }
        break;
      case 'link': {
        const url = window.prompt('请输入链接地址', 'https://');
        if (!url) {
          return;
        }

        const selected = window.getSelection()?.toString();
        if (selected) {
          document.execCommand('createLink', false, url);
        } else {
          insertHtmlInVisualEditor(`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
        }
        break;
      }
      case 'table':
        insertHtmlInVisualEditor([
          '<table>',
          '<thead><tr><th>Header 1</th><th>Header 2</th></tr></thead>',
          '<tbody><tr><td>Cell 1</td><td>Cell 2</td></tr></tbody>',
          '</table>',
          '<p><br /></p>',
        ].join(''));
        return;
      case 'list':
        if (!applyListToVisual('unordered')) {
          return;
        }
        break;
      case 'orderedList':
        if (!applyListToVisual('ordered')) {
          return;
        }
        break;
      case 'taskList':
        if (!applyListToVisual('task')) {
          return;
        }
        break;
      default:
        return;
    }

    saveVisualSelection();
    syncContentFromVisualEditor();
  }, [applyCodeBlockToVisual, applyListToVisual, applyQuoteToVisual, insertHtmlInVisualEditor, restoreSelection, saveVisualSelection, syncContentFromVisualEditor]);

  const handleToolbarAction = useCallback((action: string) => {
    if (action === 'undo') {
      undo();
      return;
    }

    if (action === 'redo') {
      redo();
      return;
    }

    if (activeEditorRef.current === 'visual' && visualEditorRef.current) {
      handleVisualToolbarAction(action);
      return;
    }

    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    restoreSelection();

    let result: { success: boolean; message?: string; hasSelection: boolean } | null = null;

    switch (action) {
      case 'bold':
        result = markdownTools.toggleWrapSelection(textarea, '**', '**');
        break;
      case 'italic':
        result = markdownTools.toggleWrapSelection(textarea, '*', '*');
        break;
      case 'strikethrough':
        result = markdownTools.toggleWrapSelection(textarea, '~~', '~~');
        break;
      case 'quote':
        applyQuoteToSource(textarea);
        result = { success: true, hasSelection: textarea.selectionStart !== textarea.selectionEnd };
        break;
      case 'code':
        result = markdownTools.toggleWrapSelection(textarea, '`', '`');
        break;
      case 'codeBlock':
        result = markdownTools.toggleWrapSelection(textarea, '\n```\n', '\n```\n');
        if (!result.success) {
          markdownTools.insertTextAtCursor(textarea, '\n```plaintext\n\n```\n');
          result = { success: true, hasSelection: false };
        }
        break;
      case 'link': {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = textarea.value.slice(start, end);
        const url = window.prompt('请输入链接地址', 'https://');

        if (!url) {
          return;
        }

        const nextText = selected ? `[${selected}](${url})` : `[链接文本](${url})`;
        if (selected) {
          markdownTools.replaceSelection(textarea, nextText);
        } else {
          markdownTools.insertTextAtCursor(textarea, nextText);
        }

        result = { success: true, hasSelection: Boolean(selected) };
        break;
      }
      case 'table':
        markdownTools.insertTextAtCursor(textarea, '\n| Header 1 | Header 2 |\n| --- | --- |\n| Cell 1 | Cell 2 |\n');
        result = { success: true, hasSelection: false };
        break;
      case 'list':
        applyListToSource(textarea, 'unordered');
        result = { success: true, hasSelection: textarea.selectionStart !== textarea.selectionEnd };
        break;
      case 'orderedList':
        applyListToSource(textarea, 'ordered');
        result = { success: true, hasSelection: textarea.selectionStart !== textarea.selectionEnd };
        break;
      case 'taskList':
        applyListToSource(textarea, 'task');
        result = { success: true, hasSelection: textarea.selectionStart !== textarea.selectionEnd };
        break;
      default:
        return;
    }

    if (result && !result.success && result.message) {
      AriMessage.warning(result.message);
      return;
    }

    saveSourceSelection();
    handleContentChange(textarea.value);
  }, [
    applyListToSource,
    applyQuoteToSource,
    handleContentChange,
    handleVisualToolbarAction,
    markdownTools,
    redo,
    restoreSelection,
    saveSourceSelection,
    undo,
  ]);

  const clear = useCallback(() => handleContentChange(''), [handleContentChange]);

  const setContent = useCallback((newContent: string) => {
    handleContentChange(newContent);
  }, [handleContentChange]);

  const getContent = useCallback(() => contentRef.current, []);

  const hasPendingUploads = useCallback(() => pendingUploadPromisesRef.current.size > 0, []);

  const waitForPendingUploads = useCallback(async () => {
    await Promise.allSettled(Array.from(pendingUploadPromisesRef.current.values()));
  }, []);

  const handleVisualInput = useCallback(() => {
    saveVisualSelection();
    syncContentFromVisualEditor();
  }, [saveVisualSelection, syncContentFromVisualEditor]);

  const handleTextareaClick = useCallback(() => {
    saveSourceSelection();
  }, [saveSourceSelection]);

  const handleTextareaSelect = useCallback(() => {
    saveSourceSelection();
  }, [saveSourceSelection]);

  return {
    content,
    history,
    historyIndex,
    canUndo,
    canRedo,
    savedSelection,
    pendingUploads,
    textareaRef,
    lineNumbersRef,
    previewRef,
    visualEditorRef,
    handleContentChange,
    getContent,
    setContent,
    clear,
    saveSelection,
    saveSourceSelection,
    saveVisualSelection,
    restoreSelection,
    focus,
    undo,
    redo,
    handleInsertHeading,
    handleToolbarAction,
    handleMediaFilesSelected,
    handlePaste,
    handleVisualInput,
    syncVisualEditorContent,
    syncContentFromVisualEditor,
    handleTextareaClick,
    handleTextareaSelect,
    hasPendingUploads,
    waitForPendingUploads,
  };
}
