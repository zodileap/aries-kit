import React, { useState } from 'react';
import { AriFlex, AriCallout, AriButton, AriCard } from '@aries-kit/react';

export const BasicExample: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriCallout type="note">
      这是一个基础的注意告示框，用于显示一般性的重要信息。
    </AriCallout>
    
    <AriCallout type="tip">
      这是一个提示告示框，用于分享有用的建议和最佳实践。
    </AriCallout>
    
    <AriCallout type="info">
      这是一个信息告示框，用于提供额外的背景信息或说明。
    </AriCallout>
    
    <AriCallout type="warning">
      这是一个警告告示框，用于提醒用户注意潜在的问题。
    </AriCallout>
    
    <AriCallout type="danger">
      这是一个危险告示框，用于强调可能导致严重问题的操作或情况。
    </AriCallout>
  </AriFlex>
);

export const CustomTitleExample: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriCallout type="note" title="自定义标题">
      通过 title 属性可以为告示框设置自定义标题。
    </AriCallout>
    
    <AriCallout type="tip" title="专业提示">
      自定义标题可以让告示框更加具体和有针对性。
    </AriCallout>
    
    <AriCallout type="warning" title="重要更新">
      API v2.0 即将发布，请提前做好升级准备。
    </AriCallout>
    
    <AriCallout type="danger" title="安全警告">
      请勿在生产环境中使用调试配置！
    </AriCallout>
  </AriFlex>
);

export const ComplexContentExample: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriCallout type="info" title="复杂内容示例">
      <div>
        <p>告示框支持复杂的HTML内容：</p>
        <ul>
          <li><strong>粗体文本</strong></li>
          <li><em>斜体文本</em></li>
          <li><code>行内代码</code></li>
        </ul>
        <p>
          还可以包含 <a href="#">链接</a> 和其他格式化元素。
        </p>
      </div>
    </AriCallout>
    
    <AriCallout type="tip" title="代码示例">
      <div>
        <p>安装依赖：</p>
        <pre style={{ background: '#f5f5f5', padding: '8px', borderRadius: '4px' }}>
          <code>npm install aries-react</code>
        </pre>
        <p>然后在组件中导入：</p>
        <pre style={{ background: '#f5f5f5', padding: '8px', borderRadius: '4px' }}>
          <code>{`import { AriCallout } from 'aries-react';`}</code>
        </pre>
      </div>
    </AriCallout>
  </AriFlex>
);

export const CollapsibleExample: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <AriFlex vertical space={16}>
      <AriCallout 
        type="info" 
        title="可折叠告示框"
        collapsible
        defaultExpanded={true}
        onExpandedChange={setExpanded}
      >
        <div>
          <p>这是一个可折叠的告示框，点击标题栏可以展开或收起内容。</p>
          <p>当前状态：{expanded ? '展开' : '收起'}</p>
          <ul>
            <li>节省页面空间</li>
            <li>改善用户体验</li>
            <li>支持状态回调</li>
          </ul>
        </div>
      </AriCallout>
      
      <AriCallout 
        type="warning" 
        title="默认收起的告示框"
        collapsible
        defaultExpanded={false}
      >
        <div>
          <p>这个告示框默认是收起状态，需要点击才能查看详细内容。</p>
          <p>适合用于详细说明或次要信息。</p>
        </div>
      </AriCallout>
    </AriFlex>
  );
};

export const NoIconExample: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriCallout type="note" showIcon={false}>
      这个告示框隐藏了图标，只显示文本内容。
    </AriCallout>
    
    <AriCallout type="tip" title="无图标提示" showIcon={false}>
      有时候你可能希望告示框更简洁，不显示类型图标。
    </AriCallout>
    
    <AriCallout type="warning" showIcon={false}>
      即使没有图标，告示框仍然保持相应的颜色主题。
    </AriCallout>
  </AriFlex>
);

export const UseCaseExample: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriCallout type="info" title="产品介绍">
      <div>
        <p>欢迎使用 Aries Kit 前端基础库！</p>
        <p>特色功能：</p>
        <ul>
          <li>🎨 支持主题定制</li>
          <li>📱 响应式设计</li>
          <li>♿ 无障碍支持</li>
          <li>🔧 TypeScript 与 Hooks 支持</li>
        </ul>
      </div>
    </AriCallout>
    
    <AriCallout type="warning" title="升级提醒">
      <div>
        <p>v2.0 版本即将发布，包含以下重大变更：</p>
        <ul>
          <li>API 接口调整</li>
          <li>样式系统重构</li>
          <li>性能优化</li>
        </ul>
        <p>请查看 <a href="#">迁移指南</a> 了解详情。</p>
      </div>
    </AriCallout>
    
    <AriCallout type="danger" title="安全提醒">
      <div>
        <p>⚠️ 请勿在生产环境使用以下配置：</p>
        <pre style={{ background: '#fee', padding: '8px', borderRadius: '4px', border: '1px solid #fcc' }}>
          <code>{`{
  "debug": true,
  "allowAllOrigins": true
}`}</code>
        </pre>
        <p>这可能导致安全漏洞！</p>
      </div>
    </AriCallout>
    
    <AriCallout type="tip" title="性能优化建议">
      <div>
        <p>为了获得最佳性能，建议：</p>
        <ol>
          <li>使用代码分割减小包体积</li>
          <li>启用 Tree Shaking</li>
          <li>合理使用 React.memo</li>
          <li>优化重渲染逻辑</li>
        </ol>
      </div>
    </AriCallout>
  </AriFlex>
);

export const InteractiveExample: React.FC = () => {
  const [calloutType, setCalloutType] = useState<'note' | 'tip' | 'info' | 'warning' | 'danger'>('info');
  const [showIcon, setShowIcon] = useState(true);
  const [collapsible, setCollapsible] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  
  return (
    <AriFlex vertical space={16}>
      <AriCard style={{ padding: '16px' }}>
        <AriFlex vertical space={12}>
          <h4>自定义告示框</h4>
          
          <AriFlex space={8} wrap>
            <label>类型：</label>
            <select 
              value={calloutType} 
              onChange={(e) => setCalloutType(e.target.value as any)}
              style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="note">Note</option>
              <option value="tip">Tip</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
            </select>
          </AriFlex>
          
          <AriFlex space={8}>
            <label>
              <input 
                type="checkbox" 
                checked={showIcon} 
                onChange={(e) => setShowIcon(e.target.checked)} 
              />
              显示图标
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={collapsible} 
                onChange={(e) => setCollapsible(e.target.checked)} 
              />
              可折叠
            </label>
          </AriFlex>
          
          <AriFlex space={8}>
            <label>自定义标题：</label>
            <input 
              type="text" 
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="留空使用默认标题"
              style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ddd', flex: 1 }}
            />
          </AriFlex>
        </AriFlex>
      </AriCard>
      
      <AriCallout
        type={calloutType}
        title={customTitle || undefined}
        showIcon={showIcon}
        collapsible={collapsible}
        defaultExpanded={true}
      >
        <div>
          <p>这是一个动态配置的告示框示例。</p>
          <p>当前配置：</p>
          <ul>
            <li>类型：{calloutType}</li>
            <li>显示图标：{showIcon ? '是' : '否'}</li>
            <li>可折叠：{collapsible ? '是' : '否'}</li>
            <li>自定义标题：{customTitle || '无'}</li>
          </ul>
        </div>
      </AriCallout>
    </AriFlex>
  );
};
