import React from 'react';
import { MarkdownElement } from '../hooks/useMarkdown';
import { CodeBlock, Callout } from './markdown';

export interface MarkdownRendererProps {
  elements: MarkdownElement[];
}

/**
 * Markdown 渲染器组件
 * 根据解析后的数据结构渲染 React 组件
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ elements }) => {
  const renderElement = (element: MarkdownElement, index: number): React.ReactElement => {
    const key = `${element.type}-${index}`;

    switch (element.type) {
      case 'heading': {
        const HeadingTag = `h${element.props?.level || 1}` as keyof JSX.IntrinsicElements;
        return React.createElement(
          HeadingTag,
          { key, id: element.props?.id },
          element.children?.map((child, childIndex) => renderElement(child, childIndex)),
        );
      }

      case 'paragraph':
        return (
          <p key={key}>
            {element.children?.map((child, childIndex) => renderElement(child, childIndex))}
          </p>
        );

      case 'codeBlock':
        return (
          <CodeBlock
            key={key}
            language={element.props?.language}
            title={element.props?.title}
            code={element.props?.code}
            highlightLines={element.props?.highlightLines}
            config={element.props?.config}
          />
        );

      case 'blockquote':
        return (
          <blockquote key={key}>
            {element.children?.map((child, childIndex) => renderElement(child, childIndex))}
          </blockquote>
        );

      case 'callout':
        return (
          <Callout
            key={key}
            type={element.props?.type}
            title={element.props?.title}
            children={element.children}
            renderElement={renderElement}
          />
        );

      case 'list': {
        const ListTag = (element.props?.listType || 'ul') as keyof JSX.IntrinsicElements;
        return React.createElement(
          ListTag,
          { key },
          element.children?.map((child, childIndex) => (
            <li key={`li-${childIndex}`} className={child.props?.className}>
              {child.props?.checked !== undefined && (
                <input
                  type="checkbox"
                  checked={child.props.checked}
                  disabled
                  style={{ marginRight: '8px' }}
                />
              )}
              {child.children?.map((grandChild, grandChildIndex) => renderElement(grandChild, grandChildIndex))}
            </li>
          )),
        );
      }

      case 'table': {
        const header = element.props?.header || [];
        const rows = element.props?.rows || [];
        return (
          <table key={key}>
            {header.length > 0 && (
              <thead>
                <tr>
                  {header.map((cell: string, cellIndex: number) => (
                    <th key={`${key}-header-${cellIndex}`}>{cell}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row: string[], rowIndex: number) => (
                <tr key={`${key}-row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${key}-cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }

      case 'hr':
        return <hr key={key} />;

      case 'bold':
        return <strong key={key}>{element.content}</strong>;

      case 'italic':
        return <em key={key}>{element.content}</em>;

      case 'strikethrough':
        return <del key={key}>{element.content}</del>;

      case 'inlineCode':
        return (
          <code key={key} className="inline-code">
            {element.content}
          </code>
        );

      case 'link':
        return (
          <a
            key={key}
            href={element.props?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {element.content}
          </a>
        );

      case 'image':
        return (
          <img
            key={key}
            src={element.props?.src}
            alt={element.props?.alt || ''}
            title={element.props?.title}
            loading="lazy"
            data-media-id={element.props?.id}
          />
        );

      case 'video':
        return (
          <video
            key={key}
            controls
            playsInline
            preload="metadata"
            src={element.props?.src}
            poster={element.props?.poster}
            data-media-id={element.props?.id}
          />
        );

      case 'mediaPlaceholder':
        return (
          <div
            key={key}
            data-rich-editor-media-placeholder="true"
            data-token={element.props?.token}
            data-kind={element.props?.kind}
            data-status={element.props?.status}
            data-name={element.props?.name}
            data-error={element.props?.error}
          >
            <strong>{element.props?.status === 'error' ? '上传失败' : '上传中'}</strong>
            <span>{element.props?.name || '未命名资源'}</span>
            {element.props?.error && <span>{element.props.error}</span>}
          </div>
        );

      case 'text':
      default:
        return <span key={key}>{element.content}</span>;
    }
  };

  return <>{elements.map((element, index) => renderElement(element, index))}</>;
};
