import React from 'react';
import { AriCode } from '@ari/components';
import { CodeBlockConfig } from '../../hooks';

export interface CodeBlockProps {
  language: string;
  title?: string;
  code: string;
  highlightLines?: Array<number | {start: number; end: number}>;
  config?: CodeBlockConfig;
}

/**
 * Markdown代码块组件
 * 直接使用AriCode组件渲染，AriCode已经支持标题、复制、编辑等功能
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  title,
  code,
  highlightLines,
  config
}) => {
  
  return (
    <div style={{ margin: '16px 0' }}>
      <AriCode
        title={title}
        language={language}
        value={code}
        height="auto"
        showCopyButton={config?.showCopyButton !== false}
        showToolbar={false}
        showLineNumbers={config?.showLineNumbers !== false}
        editable={false}
        highlightLines={highlightLines}
      />
    </div>
  );
};