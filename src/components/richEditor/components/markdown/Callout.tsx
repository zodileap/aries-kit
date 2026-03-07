import React from 'react';
import { AriCallout } from '@ari/components';
import { MarkdownElement } from '../../hooks';

export interface CalloutProps {
  type: string;
  title?: string;
  children?: MarkdownElement[];
  renderElement?: (element: MarkdownElement, index: number) => React.ReactElement;
}

/**
 * Markdown告示框组件
 * 用于渲染告示框内容，支持嵌套的Markdown元素
 */
export const Callout: React.FC<CalloutProps> = ({
  type,
  title,
  children,
  renderElement
}) => {
  return (
    <AriCallout
      type={type as any}
      title={title}
    >
      {children && renderElement ? (
        children.map((element, index) => renderElement(element, index))
      ) : (
        children?.map((element, index) => (
          <div key={index}>{element.content}</div>
        ))
      )}
    </AriCallout>
  );
};