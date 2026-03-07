import React from 'react';
import { AriTypography, AriFlex } from '@aries-kit/react';

export const BasicTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography variant="h1">H1 标题</AriTypography>
    <AriTypography variant="h2">H2 标题</AriTypography>
    <AriTypography variant="h3">H3 标题</AriTypography>
    <AriTypography variant="h4">H4 标题</AriTypography>
    <AriTypography variant="body">正文内容 (默认)</AriTypography>
    <AriTypography variant="caption">说明文字</AriTypography>
    <AriTypography variant="overline">上标文字</AriTypography>
  </AriFlex>
);

export const ColorTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography color="primary">主要颜色</AriTypography>
    <AriTypography color="secondary">次要颜色</AriTypography>
    <AriTypography color="error">错误颜色</AriTypography>
    <AriTypography color="warning">警告颜色</AriTypography>
    <AriTypography color="info">信息颜色</AriTypography>
    <AriTypography color="success">成功颜色</AriTypography>
    <AriTypography color="inherit">继承颜色 (默认)</AriTypography>
  </AriFlex>
);

export const StyleTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography>普通文本（默认）</AriTypography>
    <AriTypography bold>加粗文本（bold）</AriTypography>
    <AriTypography italic>斜体文本（italic）</AriTypography>
    <AriTypography bold italic>加粗斜体文本（bold + italic）</AriTypography>
    <AriTypography variant="h3" bold>
      标题加粗（与 variant 组合）
    </AriTypography>
  </AriFlex>
);

export const AlignmentTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography align="left">左对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="center">居中对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="right">右对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="justify">两端对齐：这是一段比较长的文本内容，用来演示两端对齐的效果。文本会在容器两端均匀分布，看起来更加整齐。</AriTypography>
  </AriFlex>
);

export const OtherPropsTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography gutterBottom>底部间距：在文本下方添加间距。</AriTypography>
    <AriTypography noWrap>不换行：这段文本不会换行，超出容器宽度时会显示省略号。这是一段很长的文本内容用来演示效果。</AriTypography>
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '8px' }}>
      <AriTypography lineClamp={2}>行数限制：这是一段很长的文本内容，会被限制在指定的行数内，超出部分会被截断并显示省略号。这里设置了2行的限制。</AriTypography>
    </div>
  </AriFlex>
);

export const EventTypography: React.FC = () => (
  <AriFlex vertical space={8}>
    <AriTypography 
      onClick={() => alert('文本被点击了！')} 
      color="primary"
      style={{ cursor: 'pointer' }}
    >
      可点击文本：点击我试试看！
    </AriTypography>
    <AriTypography 
      onMouseEnter={() => console.log('鼠标进入')}
      onMouseLeave={() => console.log('鼠标离开')}
      color="success"
      style={{ cursor: 'pointer' }}
    >
      鼠标悬停文本：查看控制台输出
    </AriTypography>
    <AriTypography 
      onMouseDown={() => console.log('鼠标按下')}
      onMouseUp={() => console.log('鼠标松开')}
      color="warning"
      style={{ cursor: 'pointer' }}
    >
      鼠标按下/松开：查看控制台输出
    </AriTypography>
  </AriFlex>
);

export const ContentTypography: React.FC = () => (
  <>
    <style>{`
      .preview-typography-outline {
        outline: 2px dashed var(--z-color-primary);
        outline-offset: 4px;
      }
    `}</style>
    <AriFlex vertical space={12}>
      <AriTypography
        value="通过 value 直接传入文本内容"
        className="preview-typography-outline"
      />
      <div style={{ width: 220, border: '1px solid #ccc', padding: '8px' }}>
        <AriTypography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          value="whiteSpace + overflow + textOverflow 组合后，超出的文本会显示省略号。"
        />
      </div>
      <AriTypography>
        <span>通过 children 传入 </span>
        <strong>富文本节点</strong>
      </AriTypography>
    </AriFlex>
  </>
);
