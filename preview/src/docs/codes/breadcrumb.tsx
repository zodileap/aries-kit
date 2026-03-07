import { AriBreadcrumb, AriContainer, AriFlex } from '@aries-kit/react';
import React from 'react';

export const BasicBreadcrumb: React.FC = () => (
  <AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页' },
        { key: 'products', label: '产品' },
        { key: 'detail', label: '详情页' }
      ]} 
    />
  </AriContainer>
);

export const WithIconBreadcrumb: React.FC = () => (
  <AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页', icon: 'home' },
        { key: 'products', label: '产品列表', icon: 'unorderedlist' },
        { key: 'detail', label: '产品详情', icon: 'file' }
      ]} 
    />
  </AriContainer>
);

export const WithLinkBreadcrumb: React.FC = () => (
  <AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页', href: '#/home' },
        { key: 'products', label: '产品列表', href: '#/products' },
        { key: 'detail', label: '产品详情' }
      ]} 
    />
  </AriContainer>
);

export const CustomSeparatorBreadcrumb: React.FC = () => (
  <AriFlex vertical space={16}>
    <AriContainer>
      <AriBreadcrumb 
        separator=">"
        items={[
          { key: 'home', label: '首页' },
          { key: 'products', label: '产品' },
          { key: 'detail', label: '详情页' }
        ]} 
      />
    </AriContainer>
    <AriContainer>
      <AriBreadcrumb 
        separator="|"
        items={[
          { key: 'home', label: '首页' },
          { key: 'products', label: '产品' },
          { key: 'detail', label: '详情页' }
        ]} 
      />
    </AriContainer>
    <AriContainer>
      <AriBreadcrumb 
        separator={<span style={{ color: 'red' }}>•</span>}
        items={[
          { key: 'home', label: '首页' },
          { key: 'products', label: '产品' },
          { key: 'detail', label: '详情页' }
        ]} 
      />
    </AriContainer>
  </AriFlex>
);

export const WithClickEventBreadcrumb: React.FC = () => (
  <AriContainer>
    <AriBreadcrumb 
      items={[
        { 
          key: 'home', 
          label: '首页', 
          onClick: () => alert('点击了首页') 
        },
        { 
          key: 'products', 
          label: '产品列表', 
          onClick: () => alert('点击了产品列表') 
        },
        { 
          key: 'detail', 
          label: '产品详情',
          onClick: () => alert('点击了产品详情')
        }
      ]} 
    />
  </AriContainer>
);
