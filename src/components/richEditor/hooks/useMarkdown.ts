import { useCallback } from 'react';

export type MarkdownElementType =
  | 'heading'
  | 'paragraph'
  | 'codeBlock'
  | 'blockquote'
  | 'callout'
  | 'list'
  | 'table'
  | 'hr'
  | 'text'
  | 'bold'
  | 'italic'
  | 'strikethrough'
  | 'inlineCode'
  | 'link'
  | 'image'
  | 'video'
  | 'mediaPlaceholder';

export interface MarkdownElement {
  type: MarkdownElementType;
  content?: string;
  props?: Record<string, any>;
  children?: MarkdownElement[];
}

export interface CodeBlockConfig {
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  showTitle?: boolean;
  onCodeEdit?: (code: string, language: string, title?: string) => void;
}

const escapeHtml = (value: string = ''): string => (
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
);

const unescapeHtml = (value: string = ''): string => {
  if (typeof document === 'undefined') {
    return value;
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = value;
  return textarea.value;
};

const escapeAttribute = (value?: string | number | boolean): string => (
  escapeHtml(String(value ?? ''))
);

const parseHtmlAttributes = (markup: string): Record<string, string> => {
  const attrs: Record<string, string> = {};
  const attrRegex = /([:@\w-]+)=["']([^"']*)["']/g;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(markup)) !== null) {
    attrs[match[1]] = unescapeHtml(match[2]);
  }

  return attrs;
};

const serializeHighlightLines = (value?: Array<number | { start: number; end: number }>): string => {
  if (!value || value.length === 0) {
    return '';
  }

  return value.map((item) => (
    typeof item === 'number'
      ? String(item)
      : `${item.start}-${item.end}`
  )).join(',');
};

const normalizeText = (value: string = ''): string => (
  value
    .replace(/\u00a0/g, ' ')
    .replace(/\u200b/g, '')
);

const trimEmptyBlocks = (blocks: string[]): string[] => {
  const next = [...blocks];

  while (next.length > 0 && !next[next.length - 1].trim()) {
    next.pop();
  }

  return next;
};

const isElementNode = (node: Node): node is HTMLElement => (
  node.nodeType === Node.ELEMENT_NODE
);

const isTextNode = (node: Node): node is Text => (
  node.nodeType === Node.TEXT_NODE
);

const getNodeText = (node: Node): string => normalizeText(node.textContent || '');

const createMediaPlaceholderTag = (props: Record<string, string | undefined>): string => {
  const attrs = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}="${escapeAttribute(value)}"`)
    .join(' ');

  return `<ari-media-placeholder ${attrs}></ari-media-placeholder>`;
};

const renderMediaPlaceholderHtml = (props: Record<string, string | undefined>, editable: boolean): string => {
  const status = props.status || 'uploading';
  const name = escapeHtml(props.name || '未命名资源');
  const error = props.error ? `<span data-rich-editor-placeholder-error="true">${escapeHtml(props.error)}</span>` : '';

  return [
    '<div',
    ' data-rich-editor-media-placeholder="true"',
    ` data-token="${escapeAttribute(props.token)}"`,
    ` data-kind="${escapeAttribute(props.kind)}"`,
    ` data-status="${escapeAttribute(status)}"`,
    props.name ? ` data-name="${escapeAttribute(props.name)}"` : '',
    props.error ? ` data-error="${escapeAttribute(props.error)}"` : '',
    editable ? ' contenteditable="false"' : '',
    '>',
    `<strong>${status === 'error' ? '上传失败' : '上传中'}</strong>`,
    `<span>${name}</span>`,
    error,
    '</div>',
  ].join('');
};

const renderImageHtml = (props: Record<string, any>, editable: boolean): string => (
  [
    '<img',
    ` src="${escapeAttribute(props.src)}"`,
    props.alt ? ` alt="${escapeAttribute(props.alt)}"` : ' alt=""',
    props.title ? ` title="${escapeAttribute(props.title)}"` : '',
    props.id ? ` data-media-id="${escapeAttribute(props.id)}"` : '',
    editable ? ' data-rich-editor-media="image"' : '',
    ' />',
  ].join('')
);

const renderVideoHtml = (props: Record<string, any>, editable: boolean): string => (
  [
    '<video controls playsinline preload="metadata"',
    ` src="${escapeAttribute(props.src)}"`,
    props.poster ? ` poster="${escapeAttribute(props.poster)}"` : '',
    props.id ? ` data-media-id="${escapeAttribute(props.id)}"` : '',
    editable ? ' data-rich-editor-media="video"' : '',
    '></video>',
  ].join('')
);

const isStandaloneMediaLine = (line: string): boolean => {
  const trimmed = line.trim();
  return (
    /^!\[[^\]]*]\([^)]+\)$/.test(trimmed) ||
    /^<img\b[^>]*\/?>$/i.test(trimmed) ||
    /^<video\b[^>]*>.*<\/video>$/i.test(trimmed) ||
    /^<ari-media-placeholder\b[^>]*><\/ari-media-placeholder>$/i.test(trimmed)
  );
};

const serializeElementAttributes = (element: HTMLElement): Record<string, string> => {
  const attrs: Record<string, string> = {};
  Array.from(element.attributes).forEach((attribute) => {
    attrs[attribute.name] = attribute.value;
  });
  return attrs;
};

export function useMarkdown(config?: CodeBlockConfig) {
  const parseHighlightLines = useCallback((highlightStr: string): Array<number | { start: number; end: number }> => {
    if (!highlightStr.trim()) return [];

    const result: Array<number | { start: number; end: number }> = [];
    const parts = highlightStr.split(',');

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) {
        continue;
      }

      if (trimmed.includes('-')) {
        const [start, end] = trimmed.split('-').map((n) => parseInt(n.trim(), 10));
        if (!Number.isNaN(start) && !Number.isNaN(end) && start <= end) {
          result.push({ start, end });
        }
        continue;
      }

      const lineNumber = parseInt(trimmed, 10);
      if (!Number.isNaN(lineNumber)) {
        result.push(lineNumber);
      }
    }

    return result;
  }, []);

  const parseInlineMarkdown = useCallback((text: string): MarkdownElement[] => {
    const elements: MarkdownElement[] = [];
    let remaining = text;

    while (remaining.length > 0) {
      const placeholderMatch = remaining.match(/^<ari-media-placeholder\b([^>]*)><\/ari-media-placeholder>(.*)$/i);
      if (placeholderMatch) {
        const attrs = parseHtmlAttributes(placeholderMatch[0]);
        elements.push({
          type: 'mediaPlaceholder',
          props: attrs,
        });
        remaining = placeholderMatch[2];
        continue;
      }

      const videoMatch = remaining.match(/^<video\b([^>]*)>(.*?)<\/video>(.*)$/i);
      if (videoMatch) {
        const attrs = parseHtmlAttributes(videoMatch[0]);
        elements.push({
          type: 'video',
          props: {
            src: attrs.src,
            poster: attrs.poster,
            id: attrs['data-media-id'],
          },
        });
        remaining = videoMatch[3];
        continue;
      }

      const imageHtmlMatch = remaining.match(/^<img\b([^>]*)\/?>(.*)$/i);
      if (imageHtmlMatch) {
        const attrs = parseHtmlAttributes(imageHtmlMatch[0]);
        elements.push({
          type: 'image',
          props: {
            src: attrs.src,
            alt: attrs.alt || '',
            title: attrs.title,
            id: attrs['data-media-id'],
          },
        });
        remaining = imageHtmlMatch[2];
        continue;
      }

      const codeMatch = remaining.match(/^`([^`]+)`(.*)$/);
      if (codeMatch) {
        elements.push({
          type: 'inlineCode',
          content: codeMatch[1],
        });
        remaining = codeMatch[2];
        continue;
      }

      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*(.*)$/) || remaining.match(/^__([^_]+)__(.*)$/);
      if (boldMatch) {
        elements.push({
          type: 'bold',
          content: boldMatch[1],
        });
        remaining = boldMatch[2];
        continue;
      }

      const italicMatch = remaining.match(/^\*([^*]+)\*(.*)$/) || remaining.match(/^_([^_]+)_(.*)$/);
      if (italicMatch) {
        elements.push({
          type: 'italic',
          content: italicMatch[1],
        });
        remaining = italicMatch[2];
        continue;
      }

      const strikeMatch = remaining.match(/^~~([^~]+)~~(.*)$/);
      if (strikeMatch) {
        elements.push({
          type: 'strikethrough',
          content: strikeMatch[1],
        });
        remaining = strikeMatch[2];
        continue;
      }

      const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)(.*)$/);
      if (linkMatch) {
        elements.push({
          type: 'link',
          content: linkMatch[1],
          props: {
            href: linkMatch[2],
          },
        });
        remaining = linkMatch[3];
        continue;
      }

      const imageMatch = remaining.match(/^!\[([^\]]*)\]\(([^)]+)\)(.*)$/);
      if (imageMatch) {
        elements.push({
          type: 'image',
          props: {
            src: imageMatch[2],
            alt: imageMatch[1],
          },
        });
        remaining = imageMatch[3];
        continue;
      }

      elements.push({
        type: 'text',
        content: remaining[0],
      });
      remaining = remaining.substring(1);
    }

    return elements;
  }, []);

  const parseMarkdown = useCallback((markdown: string): MarkdownElement[] => {
    const elements: MarkdownElement[] = [];
    const lines = markdown.split('\n');
    let currentIndex = 0;

    while (currentIndex < lines.length) {
      const line = lines[currentIndex];
      const trimmed = line.trim();

      if (line.startsWith(':::')) {
        const calloutMatch = line.match(/^:::(\w+)\s*(.*)$/);
        if (calloutMatch) {
          const type = calloutMatch[1];
          const title = calloutMatch[2].trim() || '';
          const validTypes = ['note', 'tip', 'info', 'warning', 'danger'];

          if (validTypes.includes(type)) {
            let calloutEndIndex = currentIndex + 1;
            while (calloutEndIndex < lines.length && !lines[calloutEndIndex].startsWith(':::')) {
              calloutEndIndex++;
            }

            const contentLines = lines.slice(currentIndex + 1, calloutEndIndex);
            const content = contentLines.join('\n').trim();

            elements.push({
              type: 'callout',
              props: {
                type,
                title: title || undefined,
              },
              children: content ? parseMarkdown(content) : [],
            });

            currentIndex = calloutEndIndex < lines.length ? calloutEndIndex + 1 : calloutEndIndex;
            continue;
          }
        }
      }

      if (line.startsWith('```')) {
        const codeBlockMatch = line.match(/```(\w+)?\s*(?:\{([^}]*)\})?\s*(?:title="([^"]*)")?\s*$/);
        if (codeBlockMatch) {
          const language = codeBlockMatch[1] || 'plaintext';
          const highlightLinesStr = codeBlockMatch[2] || '';
          const title = codeBlockMatch[3] || '';

          let codeEndIndex = currentIndex + 1;
          while (codeEndIndex < lines.length && !lines[codeEndIndex].startsWith('```')) {
            codeEndIndex++;
          }

          if (codeEndIndex < lines.length) {
            const codeLines = lines.slice(currentIndex + 1, codeEndIndex);
            elements.push({
              type: 'codeBlock',
              props: {
                language,
                title,
                code: codeLines.join('\n'),
                highlightLines: parseHighlightLines(highlightLinesStr),
                config,
              },
            });

            currentIndex = codeEndIndex + 1;
            continue;
          }
        }
      }

      const placeholderMatch = trimmed.match(/^<ari-media-placeholder\b([^>]*)><\/ari-media-placeholder>$/i);
      if (placeholderMatch) {
        elements.push({
          type: 'mediaPlaceholder',
          props: parseHtmlAttributes(placeholderMatch[0]),
        });
        currentIndex++;
        continue;
      }

      const imageMarkdownMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imageMarkdownMatch) {
        elements.push({
          type: 'image',
          props: {
            alt: imageMarkdownMatch[1],
            src: imageMarkdownMatch[2],
          },
        });
        currentIndex++;
        continue;
      }

      const imageHtmlMatch = trimmed.match(/^<img\b([^>]*)\/?>$/i);
      if (imageHtmlMatch) {
        const attrs = parseHtmlAttributes(imageHtmlMatch[0]);
        elements.push({
          type: 'image',
          props: {
            src: attrs.src,
            alt: attrs.alt || '',
            title: attrs.title,
            id: attrs['data-media-id'],
          },
        });
        currentIndex++;
        continue;
      }

      const videoMatch = trimmed.match(/^<video\b([^>]*)>.*<\/video>$/i);
      if (videoMatch) {
        const attrs = parseHtmlAttributes(videoMatch[0]);
        elements.push({
          type: 'video',
          props: {
            src: attrs.src,
            poster: attrs.poster,
            id: attrs['data-media-id'],
          },
        });
        currentIndex++;
        continue;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const content = headingMatch[2];
        elements.push({
          type: 'heading',
          props: {
            level: headingMatch[1].length,
            id: content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
          },
          children: parseInlineMarkdown(content),
        });
        currentIndex++;
        continue;
      }

      const isTableHeader = trimmed.includes('|')
        && currentIndex + 1 < lines.length
        && /^\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(lines[currentIndex + 1].trim());

      if (isTableHeader) {
        const parseTableRow = (row: string): string[] => (
          row
            .trim()
            .replace(/^\|/, '')
            .replace(/\|$/, '')
            .split('|')
            .map((cell) => cell.trim())
        );

        const header = parseTableRow(line);
        const rows: string[][] = [];
        currentIndex += 2;

        while (currentIndex < lines.length) {
          const tableLine = lines[currentIndex].trim();
          if (!tableLine || !tableLine.includes('|')) {
            break;
          }

          rows.push(parseTableRow(lines[currentIndex]));
          currentIndex++;
        }

        elements.push({
          type: 'table',
          props: {
            header,
            rows,
          },
        });
        continue;
      }

      if (line.startsWith('> ')) {
        elements.push({
          type: 'blockquote',
          children: parseInlineMarkdown(line.substring(2)),
        });
        currentIndex++;
        continue;
      }

      if (trimmed === '---') {
        elements.push({ type: 'hr' });
        currentIndex++;
        continue;
      }

      if (line.match(/^[*-]\s+/) || line.match(/^\d+\.\s+/) || line.match(/^- \[[x ]\]\s+/)) {
        const listItems: MarkdownElement[] = [];
        let listType = 'ul';

        if (line.match(/^\d+\.\s+/)) {
          listType = 'ol';
        }

        while (currentIndex < lines.length) {
          const currentLine = lines[currentIndex];
          const taskMatch = currentLine.match(/^- \[([x ])\]\s*(.*)$/);
          if (taskMatch) {
            listItems.push({
              type: 'text',
              props: {
                className: 'task-item',
                checked: taskMatch[1] === 'x',
              },
              children: parseInlineMarkdown(taskMatch[2]),
            });
            currentIndex++;
            continue;
          }

          const listMatch = currentLine.match(/^(?:[*-]|\d+\.)\s*(.*)$/);
          if (listMatch) {
            listItems.push({
              type: 'text',
              children: parseInlineMarkdown(listMatch[1]),
            });
            currentIndex++;
            continue;
          }

          break;
        }

        if (listItems.length === 0) {
          elements.push({
            type: 'paragraph',
            children: parseInlineMarkdown(line),
          });
          currentIndex++;
          continue;
        }

        elements.push({
          type: 'list',
          props: {
            listType,
          },
          children: listItems,
        });
        continue;
      }

      if (trimmed === '') {
        currentIndex++;
        continue;
      }

      if (isStandaloneMediaLine(line)) {
        elements.push({
          type: 'paragraph',
          children: parseInlineMarkdown(trimmed),
        });
        currentIndex++;
        continue;
      }

      elements.push({
        type: 'paragraph',
        children: parseInlineMarkdown(line),
      });
      currentIndex++;
    }

    return elements;
  }, [config, parseHighlightLines, parseInlineMarkdown]);

  const renderInlineElementsToHtml = useCallback((elements: MarkdownElement[] = [], editable = false): string => (
    elements.map((element) => {
      switch (element.type) {
        case 'bold':
          return `<strong>${escapeHtml(element.content || '')}</strong>`;
        case 'italic':
          return `<em>${escapeHtml(element.content || '')}</em>`;
        case 'strikethrough':
          return `<del>${escapeHtml(element.content || '')}</del>`;
        case 'inlineCode':
          return `<code>${escapeHtml(element.content || '')}</code>`;
        case 'link':
          return `<a href="${escapeAttribute(element.props?.href || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(element.content || '')}</a>`;
        case 'image':
          return renderImageHtml(element.props || {}, editable);
        case 'video':
          return renderVideoHtml(element.props || {}, editable);
        case 'mediaPlaceholder':
          return renderMediaPlaceholderHtml(element.props || {}, editable);
        case 'text':
        default:
          return escapeHtml(element.content || '');
      }
    }).join('')
  ), []);

  const renderBlockElementsToHtml = useCallback((elements: MarkdownElement[] = [], editable = false): string => (
    elements.map((element) => {
      switch (element.type) {
        case 'heading': {
          const level = Math.min(Math.max(Number(element.props?.level || 1), 1), 6);
          return `<h${level}>${renderInlineElementsToHtml(element.children, editable)}</h${level}>`;
        }

        case 'paragraph': {
          const childrenHtml = renderInlineElementsToHtml(element.children, editable);
          const onlyMedia = (element.children || []).every((child) => ['image', 'video', 'mediaPlaceholder'].includes(child.type));

          if (onlyMedia) {
            return childrenHtml;
          }

          return `<p>${childrenHtml || '<br />'}</p>`;
        }

        case 'codeBlock': {
          const highlightLines = serializeHighlightLines(element.props?.highlightLines);
          return [
            '<pre',
            editable ? ' data-rich-editor-code-block="true"' : '',
            ` data-language="${escapeAttribute(element.props?.language || 'plaintext')}"`,
            element.props?.title ? ` data-title="${escapeAttribute(element.props.title)}"` : '',
            highlightLines ? ` data-highlight-lines="${escapeAttribute(highlightLines)}"` : '',
            '><code>',
            escapeHtml(element.props?.code || ''),
            '</code></pre>',
          ].join('');
        }

        case 'blockquote':
          return `<blockquote>${renderInlineElementsToHtml(element.children, editable)}</blockquote>`;

        case 'callout':
          return [
            '<div',
            editable ? ' data-rich-editor-callout="true"' : '',
            ` data-callout-type="${escapeAttribute(element.props?.type || 'note')}"`,
            element.props?.title ? ` data-callout-title="${escapeAttribute(element.props.title)}"` : '',
            '>',
            element.props?.title ? `<div data-rich-editor-callout-title="true">${escapeHtml(element.props.title)}</div>` : '',
            `<div data-rich-editor-callout-body="true">${renderBlockElementsToHtml(element.children, editable)}</div>`,
            '</div>',
          ].join('');

        case 'list': {
          const ListTag = element.props?.listType === 'ol' ? 'ol' : 'ul';
          const isTaskList = (element.children || []).some((child) => child.props?.checked !== undefined);
          return [
            `<${ListTag}${isTaskList ? ' data-rich-editor-task-list="true"' : ''}>`,
            (element.children || []).map((child) => {
              const checkbox = child.props?.checked !== undefined
                ? `<input type="checkbox" ${child.props.checked ? 'checked ' : ''}${editable ? '' : 'disabled '} />`
                : '';

              return `<li>${checkbox}${renderInlineElementsToHtml(child.children, editable)}</li>`;
            }).join(''),
            `</${ListTag}>`,
          ].join('');
        }

        case 'table':
          return [
            '<table>',
            '<thead><tr>',
            (element.props?.header || []).map((cell: string) => `<th>${escapeHtml(cell)}</th>`).join(''),
            '</tr></thead>',
            '<tbody>',
            (element.props?.rows || []).map((row: string[]) => (
              `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`
            )).join(''),
            '</tbody>',
            '</table>',
          ].join('');

        case 'hr':
          return '<hr />';

        case 'image':
          return renderImageHtml(element.props || {}, editable);

        case 'video':
          return renderVideoHtml(element.props || {}, editable);

        case 'mediaPlaceholder':
          return renderMediaPlaceholderHtml(element.props || {}, editable);

        default:
          return '';
      }
    }).join('')
  ), [renderInlineElementsToHtml]);

  const renderEditableHtml = useCallback((markdown: string): string => {
    const elements = parseMarkdown(markdown);
    const html = renderBlockElementsToHtml(elements, true).trim();
    return html || '<p><br /></p>';
  }, [parseMarkdown, renderBlockElementsToHtml]);

  const renderHtmlFragment = useCallback((markdown: string): string => {
    const elements = parseMarkdown(markdown);
    return renderBlockElementsToHtml(elements, false).trim();
  }, [parseMarkdown, renderBlockElementsToHtml]);

  const renderHtmlDocument = useCallback((markdown: string): string => {
    const fragment = renderHtmlFragment(markdown);
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rich Editor Export</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 32px; color: #1f2937; line-height: 1.7; }
    img, video { max-width: 100%; border-radius: 12px; display: block; margin: 16px 0; }
    pre { background: #111827; color: #f9fafb; padding: 16px; border-radius: 12px; overflow: auto; }
    code { font-family: "SFMono-Regular", Consolas, monospace; }
    blockquote { margin: 16px 0; padding: 12px 16px; border-left: 4px solid #3b82f6; background: #eff6ff; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; }
    th, td { border: 1px solid #d1d5db; padding: 8px 12px; text-align: left; }
    hr { border: none; border-top: 1px solid #d1d5db; margin: 24px 0; }
    [data-callout-type] { margin: 16px 0; padding: 16px; border-radius: 12px; background: #f8fafc; border: 1px solid #e5e7eb; }
    [data-rich-editor-callout-title="true"] { font-weight: 600; margin-bottom: 8px; }
    [data-rich-editor-media-placeholder="true"] { padding: 12px 16px; border-radius: 12px; border: 1px dashed #d1d5db; background: #f8fafc; color: #6b7280; }
  </style>
</head>
<body>${fragment}</body>
</html>`;
  }, [renderHtmlFragment]);

  const editableHtmlToMarkdown = useCallback((container: HTMLElement): string => {
    const serializeInlineNode = (node: Node): string => {
      if (isTextNode(node)) {
        return normalizeText(node.textContent || '');
      }

      if (!isElementNode(node)) {
        return '';
      }

      if (node.hasAttribute('data-rich-editor-media-placeholder')) {
        return createMediaPlaceholderTag({
          token: node.getAttribute('data-token') || undefined,
          kind: node.getAttribute('data-kind') || undefined,
          status: node.getAttribute('data-status') || undefined,
          name: node.getAttribute('data-name') || undefined,
          error: node.getAttribute('data-error') || undefined,
        });
      }

      const tagName = node.tagName.toLowerCase();
      switch (tagName) {
        case 'br':
          return '\n';
        case 'strong':
        case 'b':
          return `**${serializeInlineNodes(Array.from(node.childNodes))}**`;
        case 'em':
        case 'i':
          return `*${serializeInlineNodes(Array.from(node.childNodes))}*`;
        case 'del':
        case 's':
          return `~~${serializeInlineNodes(Array.from(node.childNodes))}~~`;
        case 'code':
          if (node.closest('pre')) {
            return getNodeText(node);
          }
          return `\`${getNodeText(node)}\``;
        case 'a':
          return `[${serializeInlineNodes(Array.from(node.childNodes))}](${node.getAttribute('href') || '#'})`;
        case 'img': {
          const src = node.getAttribute('src') || '';
          const alt = node.getAttribute('alt') || '';
          const title = node.getAttribute('title') || '';
          const id = node.getAttribute('data-media-id') || '';

          if (id || title) {
            return `<img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}"${title ? ` title="${escapeAttribute(title)}"` : ''}${id ? ` data-media-id="${escapeAttribute(id)}"` : ''} />`;
          }

          return `![${alt}](${src})`;
        }
        case 'video': {
          const src = node.getAttribute('src') || '';
          const poster = node.getAttribute('poster') || '';
          const id = node.getAttribute('data-media-id') || '';
          return `<video controls src="${escapeAttribute(src)}"${poster ? ` poster="${escapeAttribute(poster)}"` : ''}${id ? ` data-media-id="${escapeAttribute(id)}"` : ''}></video>`;
        }
        default:
          return serializeInlineNodes(Array.from(node.childNodes));
      }
    };

    const serializeInlineNodes = (nodes: Node[]): string => (
      nodes.map((node) => serializeInlineNode(node)).join('')
    );

    const serializeList = (element: HTMLElement, ordered: boolean, depth = 0): string[] => {
      const prefixBase = '  '.repeat(depth);
      const lines: string[] = [];

      Array.from(element.children).forEach((child, index) => {
        if (!(child instanceof HTMLLIElement)) {
          return;
        }

        const checkbox = child.querySelector(':scope > input[type="checkbox"]') as HTMLInputElement | null;
        const nestedLists = Array.from(child.children).filter((node) => ['UL', 'OL'].includes(node.tagName));
        const inlineNodes = Array.from(child.childNodes).filter((node) => {
          if (isElementNode(node) && ['UL', 'OL'].includes(node.tagName)) {
            return false;
          }
          if (isElementNode(node) && node.tagName === 'INPUT') {
            return false;
          }
          return true;
        });
        const inlineContent = serializeInlineNodes(inlineNodes).trim() || '列表项';
        const itemPrefix = checkbox
          ? `- [${checkbox.checked ? 'x' : ' '}] `
          : ordered
            ? `${index + 1}. `
            : '- ';

        lines.push(`${prefixBase}${itemPrefix}${inlineContent}`);

        nestedLists.forEach((nestedList) => {
          const nestedLines = serializeList(nestedList as HTMLElement, nestedList.tagName === 'OL', depth + 1);
          lines.push(...nestedLines);
        });
      });

      return lines;
    };

    const serializeTable = (element: HTMLTableElement): string => {
      const rows = Array.from(element.querySelectorAll('tr')).map((row) => (
        Array.from(row.children).map((cell) => normalizeText(cell.textContent || '').trim())
      )).filter((row) => row.length > 0);

      if (rows.length === 0) {
        return '';
      }

      const header = rows[0];
      const body = rows.slice(1);
      const headerLine = `| ${header.join(' | ')} |`;
      const separatorLine = `| ${header.map(() => '---').join(' | ')} |`;
      const bodyLines = body.map((row) => `| ${row.join(' | ')} |`);

      return [headerLine, separatorLine, ...bodyLines].join('\n');
    };

    const serializeBlock = (node: Node): string => {
      if (isTextNode(node)) {
        return normalizeText(node.textContent || '').trim();
      }

      if (!isElementNode(node)) {
        return '';
      }

      if (node.hasAttribute('data-rich-editor-media-placeholder')) {
        return createMediaPlaceholderTag({
          token: node.getAttribute('data-token') || undefined,
          kind: node.getAttribute('data-kind') || undefined,
          status: node.getAttribute('data-status') || undefined,
          name: node.getAttribute('data-name') || undefined,
          error: node.getAttribute('data-error') || undefined,
        });
      }

      if (node.hasAttribute('data-rich-editor-callout')) {
        const type = node.getAttribute('data-callout-type') || 'note';
        const title = node.getAttribute('data-callout-title') || '';
        const body = node.querySelector('[data-rich-editor-callout-body="true"]') as HTMLElement | null;
        const content = body ? serializeBlocks(Array.from(body.childNodes)).join('\n\n') : '';
        return `:::${type}${title ? ` ${title}` : ''}\n${content}\n:::`;
      }

      if (node.tagName.toLowerCase() === 'pre') {
        const language = node.getAttribute('data-language') || 'plaintext';
        const title = node.getAttribute('data-title') || '';
        const highlightLines = node.getAttribute('data-highlight-lines') || '';
        const code = node.textContent || '';
        const meta = [
          language,
          highlightLines ? ` {${highlightLines}}` : '',
          title ? ` title="${title}"` : '',
        ].join('');
        return `\`\`\`${meta}\n${code.replace(/\n+$/, '')}\n\`\`\``;
      }

      const tagName = node.tagName.toLowerCase();
      switch (tagName) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6': {
          const level = parseInt(tagName.replace('h', ''), 10);
          return `${'#'.repeat(level)} ${serializeInlineNodes(Array.from(node.childNodes)).trim()}`;
        }
        case 'p': {
          const text = serializeInlineNodes(Array.from(node.childNodes)).trim();
          return text;
        }
        case 'blockquote': {
          const text = serializeInlineNodes(Array.from(node.childNodes)).trim();
          return text.split('\n').map((line) => `> ${line}`).join('\n');
        }
        case 'ul':
          return serializeList(node, false).join('\n');
        case 'ol':
          return serializeList(node, true).join('\n');
        case 'hr':
          return '---';
        case 'table':
          return serializeTable(node as HTMLTableElement);
        case 'img':
        case 'video':
          return serializeInlineNode(node);
        case 'div': {
          if (node.getAttribute('data-rich-editor-root') === 'true') {
            return serializeBlocks(Array.from(node.childNodes)).join('\n\n');
          }

          const childBlocks = serializeBlocks(Array.from(node.childNodes));
          if (childBlocks.length > 0) {
            return childBlocks.join('\n\n');
          }

          return serializeInlineNodes(Array.from(node.childNodes)).trim();
        }
        default:
          return serializeInlineNodes(Array.from(node.childNodes)).trim();
      }
    };

    const serializeBlocks = (nodes: Node[]): string[] => (
      trimEmptyBlocks(
        nodes
          .map((node) => serializeBlock(node))
          .map((value) => value.trim())
          .filter(Boolean)
      )
    );

    return serializeBlocks(Array.from(container.childNodes)).join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
  }, []);

  const insertTextAtCursor = useCallback((textarea: HTMLTextAreaElement, text: string): void => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    textarea.value = value.substring(0, start) + text + value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  }, []);

  const replaceSelection = useCallback((textarea: HTMLTextAreaElement, text: string): void => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    textarea.value = value.substring(0, start) + text + value.substring(end);
    const nextCursor = start + text.length;
    textarea.selectionStart = nextCursor;
    textarea.selectionEnd = nextCursor;
    textarea.focus();
  }, []);

  const hasFormat = useCallback((text: string, before: string, after: string): boolean => (
    text.startsWith(before) && text.endsWith(after)
  ), []);

  const removeFormat = useCallback((text: string, before: string, after: string): string => {
    if (hasFormat(text, before, after)) {
      return text.substring(before.length, text.length - after.length);
    }
    return text;
  }, [hasFormat]);

  const toggleWrapSelection = useCallback((
    textarea: HTMLTextAreaElement,
    before: string,
    after: string
  ): { success: boolean; message?: string; hasSelection: boolean } => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.substring(start, end);

    if (start === end) {
      return { success: false, message: '请先选中要格式化的文本', hasSelection: false };
    }

    const nextText = hasFormat(selected, before, after)
      ? removeFormat(selected, before, after)
      : `${before}${selected}${after}`;

    textarea.value = value.substring(0, start) + nextText + value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + nextText.length;
    textarea.focus();

    return { success: true, hasSelection: true };
  }, [hasFormat, removeFormat]);

  const wrapSelection = useCallback((textarea: HTMLTextAreaElement, before: string, after: string): void => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.substring(start, end);

    textarea.value = value.substring(0, start) + before + selected + after + value.substring(end);

    if (selected) {
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selected.length;
    } else {
      textarea.selectionStart = textarea.selectionEnd = start + before.length;
    }

    textarea.focus();
  }, []);

  return {
    parseMarkdown,
    parseInlineMarkdown,
    renderEditableHtml,
    renderHtmlFragment,
    renderHtmlDocument,
    editableHtmlToMarkdown,
    createMediaPlaceholderTag,
    renderMediaPlaceholderHtml,
    renderImageHtml,
    renderVideoHtml,
    insertTextAtCursor,
    replaceSelection,
    toggleWrapSelection,
    wrapSelection,
    hasFormat,
    removeFormat,
    serializeHighlightLines,
  };
}
