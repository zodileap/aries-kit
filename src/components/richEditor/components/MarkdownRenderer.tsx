import React from 'react';
import { MarkdownElement } from '../hooks/useMarkdown';
import { CodeBlock, Callout } from './markdown';

export interface MarkdownRendererProps {
  elements: MarkdownElement[];
}

/**
 * Markdown渲染器组件
 * 根据解析后的数据结构渲染React组件
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ elements }) => {
  const renderElement = (element: MarkdownElement, index: number): React.ReactElement => {
    const key = `${element.type}-${index}`;

    switch (element.type) {
      case 'heading': {
        const { level, id } = element.props || {};
        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
        return React.createElement(
          HeadingTag,
          { key, id },
          element.children?.map((child, childIndex) => renderElement(child, childIndex))
        );
      }

      case 'paragraph':
        return (
          <p key={key}>
            {element.children?.map((child, childIndex) => renderElement(child, childIndex))}
          </p>
        );

      case 'codeBlock': {
        const { language, title, code, highlightLines, config } = element.props || {};
        return (
          <CodeBlock
            key={key}
            language={language}
            title={title}
            code={code}
            highlightLines={highlightLines}
            config={config}
          />
        );
      }

      case 'blockquote':
        return (
          <blockquote key={key}>
            {element.children?.map((child, childIndex) => renderElement(child, childIndex))}
          </blockquote>
        );

      case 'callout': {
        const { type, title } = element.props || {};
        return (
          <Callout
            key={key}
            type={type}
            title={title}
            children={element.children}
            renderElement={renderElement}
          />
        );
      }

      case 'list': {
        const { listType } = element.props || {};
        const ListTag = listType as keyof JSX.IntrinsicElements;
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
              {child.children?.map((grandChild, grandChildIndex) => 
                renderElement(grandChild, grandChildIndex)
              )}
            </li>
          ))
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

      case 'link': {
        const { href } = element.props || {};
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {element.content}
          </a>
        );
      }

      case 'image': {
        const { src, alt } = element.props || {};
        return (
          <img
            key={key}
            src={src}
            alt={alt}
            loading="lazy"
          />
        );
      }

      case 'text':
      default:
        return <span key={key}>{element.content}</span>;
    }
  };

  return (
    <>
      {elements.map((element, index) => renderElement(element, index))}
    </>
  );
};