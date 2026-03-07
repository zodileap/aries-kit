import React, { useState } from 'react';
import { AriFlex, AriTypography, AriButton, AriCode, AriTabs } from '@aries-kit/react';

interface StyleItemProps {
    title: string;
    description?: string;
    data: Array<{
        name: string;
        variable: string;
        value: string;
        desc: string;
        example?: string;
    }>;
}

const StyleSection: React.FC<StyleItemProps> = ({ title, description, data }) => {
    const copyToClipboard = (variable: string) => {
        navigator.clipboard.writeText(variable);
    };

    return (
      <div style={{ marginBottom: "48px" }}>
        <AriTypography
          variant="h3"
          value={title}
          style={{ marginBottom: "8px" }}
        />
        {description && (
          <AriTypography
            variant="body"
            value={description}
            color="secondary"
            style={{ marginBottom: "24px" }}
          />
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid var(--z-color-border)",
                borderRadius: "var(--z-border-radius-sm)",
                padding: "16px",
                backgroundColor: "var(--z-color-bg)",
                cursor: "pointer",
                transition: "all var(--z-duration-element-interaction)",
              }}
              onClick={() => copyToClipboard(`getVar(${item.variable})`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--z-color-box-shadow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <AriFlex
                justify="space-between"
                align="flex-start"
                style={{ marginBottom: "8px" }}
              >
                <AriTypography
                  variant="body"
                  value={item.name}
                  style={{ fontWeight: "500" }}
                />
                <AriTypography
                  variant="caption"
                  value={item.value}
                  color="secondary"
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "var(--z-color-bg-secondary)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                />
              </AriFlex>
              <AriTypography
                variant="caption"
                value={item.desc}
                color="secondary"
                style={{ marginBottom: "8px" }}
              />
              <AriTypography
                variant="caption"
                value={`getVar(${item.variable})`}
                style={{
                  fontFamily: "monospace",
                  color: "var(--z-color-brand)",
                  fontSize: "11px",
                }}
              />
              {item.example && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "8px",
                    backgroundColor: "var(--z-color-bg-secondary)",
                    borderRadius: "4px",
                    border: "1px solid var(--z-color-border-divider)",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: item.example }}
                    style={{ fontSize: "12px" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

const StyleDoc: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('spacing');

    // 间距系统
    const spacingData = [
        { name: '超小间距', variable: 'inset, xxs', value: '2px', desc: '最小的间距，用于紧密元素' },
        { name: '极小间距', variable: 'inset, xs', value: '4px', desc: '小间距，用于内边距' },
        { name: '小间距', variable: 'inset, sm', value: '8px', desc: '容器内元素间距' },
        { name: '中间距', variable: 'inset, md', value: '12px', desc: '中等元素间距' },
        { name: '标准间距', variable: 'inset', value: '16px', desc: '标准间距，最常用' },
        { name: '大间距', variable: 'inset, lg', value: '20px', desc: '大元素间距' },
        { name: '超大间距', variable: 'inset, xl', value: '24px', desc: '区块间距' },
        { name: '极大间距', variable: 'inset, xxl', value: '32px', desc: '页面级间距' },
    ];

    // 尺寸系统
    const sizeData = [
        { name: '微小尺寸', variable: 'element-size, xxs', value: '12px', desc: '最小的元素尺寸' },
        { name: '极小尺寸', variable: 'element-size, xs', value: '16px', desc: '小图标、按钮高度' },
        { name: '小尺寸', variable: 'element-size, sm', value: '24px', desc: '标准图标尺寸' },
        { name: '标准尺寸', variable: 'element-size', value: '28px', desc: '默认元素高度' },
        { name: '大尺寸', variable: 'element-size, lg', value: '40px', desc: '大按钮、输入框' },
        { name: '超大尺寸', variable: 'element-size, xl', value: '48px', desc: '头像、卡片' },
        { name: '极大尺寸', variable: 'element-size, xxl', value: '64px', desc: '大型组件' },
    ];

    // 圆角系统
    const borderRadiusData = [
        { name: '无圆角', variable: 'border-radius, zero', value: '0px', desc: '方形边框' },
        { name: '微圆角', variable: 'border-radius, xs', value: '2px', desc: '最小圆角' },
        { name: '小圆角', variable: 'border-radius, sm', value: '4px', desc: '按钮、输入框' },
        { name: '标准圆角', variable: 'border-radius', value: '5px', desc: '卡片、容器' },
        { name: '大圆角', variable: 'border-radius, lg', value: '8px', desc: '弹窗、面板' },
        { name: '超大圆角', variable: 'border-radius, xl', value: '12px', desc: '大型容器' },
    ];

    // 字体系统
    const fontData = [
        { name: '大标题', variable: 'font-size, large-title', value: '32px', desc: '页面主标题，通常只有一个' },
        { name: '一级标题', variable: 'font-size, title-1', value: '27px', desc: '段落或内容区域标题' },
        { name: '二级标题', variable: 'font-size, title-2', value: '21px', desc: '侧边栏、菜单标题' },
        { name: '三级标题', variable: 'font-size, title-3', value: '16.4px', desc: '正文内的小标题' },
        { name: '提要', variable: 'font-size, headline', value: '16px', desc: '需要强调的内容' },
        { name: '正文', variable: 'font-size, body', value: '16px', desc: '最常用的字体大小' },
        { name: '标注', variable: 'font-size, callout', value: '15px', desc: '时间、作者等次要信息' },
        { name: '小标题', variable: 'font-size, subheadline', value: '14px', desc: '文章小节目录' },
        { name: '说明', variable: 'font-size, caption', value: '12px', desc: '附加提示、说明文字' },
        { name: '脚注', variable: 'font-size, footnote', value: '12px', desc: '页脚信息' },
    ];

    // 动画时间系统
    const durationData = [
        { name: '瞬间', variable: 'duration, zero', value: '0ms', desc: '无动画' },
        { name: '快速1', variable: 'duration, fast-1', value: '50ms', desc: '极快响应' },
        { name: '快速2', variable: 'duration, fast-2', value: '100ms', desc: '快速响应' },
        { name: '快速3', variable: 'duration, fast-3', value: '150ms', desc: '收起动画' },
        { name: '快速4', variable: 'duration, fast-4', value: '200ms', desc: '快速过渡' },
        { name: '中等1', variable: 'duration, lg-1', value: '250ms', desc: '元素交互' },
        { name: '中等2', variable: 'duration, lg-2', value: '300ms', desc: '元素显示隐藏' },
        { name: '标准', variable: 'duration', value: '350ms', desc: '默认动画时长' },
        { name: '页面', variable: 'duration, page', value: '350ms', desc: '页面过渡' },
    ];

    // 层级系统
    const zIndexData = [
        { name: '粘性定位', variable: 'z-index, sticky', value: '1001', desc: '粘性头部、导航' },
        { name: '导航栏', variable: 'z-index, nav', value: '2001', desc: '主导航栏' },
        { name: '遮罩层', variable: 'z-index, mask', value: '3001', desc: '模态框遮罩' },
        { name: '抽屉', variable: 'z-index, drawer', value: '4001', desc: '侧边抽屉' },
        { name: '弹出层', variable: 'z-index, popover', value: '5001', desc: '下拉菜单、工具提示' },
        { name: '加载层', variable: 'z-index, spin', value: '10000', desc: '全局加载动画' },
    ];

    // 混合工具
    const mixinData = [
        { 
            name: 'Flex布局', 
            variable: '@include flex($justify, $align, $direction)', 
            value: 'mixin', 
            desc: 'Flexbox布局快速设置',
            example: '<strong>用法:</strong><br/>@include flex(center, center); // 居中对齐<br/>@include flex(space-between, flex-start, column); // 列布局'
        },
        { 
            name: '绝对居中', 
            variable: '@include elCenter', 
            value: 'mixin', 
            desc: '元素绝对定位居中',
            example: '<strong>效果:</strong><br/>position: absolute;<br/>top: 50%; left: 50%;<br/>transform: translate(-50%, -50%);'
        },
        { 
            name: '网格布局', 
            variable: '@include grid($columns, $gap, $padding)', 
            value: 'mixin', 
            desc: 'CSS Grid布局设置',
            example: '<strong>用法:</strong><br/>@include grid(3, getVar(inset, sm)); // 3列网格<br/>@include grid(auto-fit, getVar(inset)); // 自适应列'
        },
        { 
            name: '交互元素', 
            variable: '@include interactive($transition)', 
            value: 'mixin', 
            desc: '为元素添加交互状态',
            example: '<strong>包含:</strong><br/>cursor: pointer;<br/>hover、focus状态<br/>过渡动画'
        },
        { 
            name: '波浪动画', 
            variable: '@include rippleAnim($color, $bgColor)', 
            value: 'mixin', 
            desc: '点击波浪扩散效果',
            example: '<strong>用法:</strong><br/>@include rippleAnim(); // 默认颜色<br/>@include rippleAnim(#ff0000, #ffffff); // 自定义颜色'
        },
        { 
            name: '展开收起', 
            variable: '@include expandCollapseAnim($direction, $stagger)', 
            value: 'mixin', 
            desc: '元素展开收起动画',
            example: '<strong>用法:</strong><br/>@include expandCollapseAnim(right, true); // 右侧展开，阶梯效果<br/>@include expandCollapseAnim(left, false); // 左侧展开，同时展开'
        },
        { 
            name: '旋转动画', 
            variable: '@include elementRotate($duration)', 
            value: 'mixin', 
            desc: '元素旋转动画',
            example: '<strong>用法:</strong><br/>@include elementRotate(1s); // 1秒旋转一圈<br/>@include elementRotate(2s); // 2秒旋转一圈'
        },
        { 
            name: '箭头生成', 
            variable: '@include arrow($direction, $color, $size, $position)', 
            value: 'mixin', 
            desc: '生成CSS箭头',
            example: '<strong>用法:</strong><br/>@include arrow(top, brand, 8px); // 向上的品牌色箭头<br/>@include arrow(bottom, danger, 6px, absolute); // 向下的红色绝对定位箭头'
        },
    ];

    const categories = [
        { key: 'spacing', label: '间距系统', data: spacingData },
        { key: 'size', label: '尺寸系统', data: sizeData },
        { key: 'border', label: '圆角系统', data: borderRadiusData },
        { key: 'font', label: '字体系统', data: fontData },
        { key: 'duration', label: '动画时间', data: durationData },
        { key: 'zindex', label: '层级系统', data: zIndexData },
        { key: 'mixins', label: '混合工具', data: mixinData },
    ];

    const tabItems = categories.map(category => ({
        key: category.key,
        label: category.label,
        children: (
            <StyleSection
                title={category.label}
                description={`点击任意项目可复制对应的 SCSS 变量语法`}
                data={category.data}
            />
        )
    }));

    return (
        <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '32px' }}>
                <AriTypography variant="h1" value="样式系统" style={{ marginBottom: '8px' }} />
                <AriTypography 
                    variant="body" 
                    value="Aries Kit 的完整样式变量和工具系统，以16px为基准，提供一致性的设计规范。" 
                    color="secondary" 
                />
            </div>

            <div style={{ marginBottom: '32px' }}>
                <AriTypography variant="h2" value="使用指南" style={{ marginBottom: '16px' }} />
                <AriTypography variant="body" color="secondary" style={{ marginBottom: '12px' }}>
                    在 SCSS 中使用样式变量：
                </AriTypography>
                <AriCode
                    language="scss"
                    showCopyButton={true}
                    showLineNumbers={true}
                    value={`// 间距变量
padding: getVar(inset);           // 16px 标准间距
margin: getVar(inset, lg);        // 20px 大间距
gap: getVar(inset, xs);           // 4px 小间距

// 尺寸变量
width: getVar(element-size, lg);  // 40px 大尺寸
height: getVar(element-size);     // 28px 标准尺寸

// 圆角变量
border-radius: getVar(border-radius, sm);  // 4px 小圆角

// 字体变量
font-size: getVar(font-size, title-1);     // 27px 一级标题
font-weight: getVar(font-weight, semibold); // 600 半粗体

// 动画变量
transition: all getVar(duration, element-interaction); // 250ms

// 使用Mixins
@include flex(center, center);     // Flex居中布局
@include interactive();            // 添加交互状态
@include rippleAnim();             // 波浪点击效果`}
                />
            </div>

            <AriTabs
                activeKey={selectedCategory}
                items={tabItems}
                onChange={(key) => setSelectedCategory(key)}
            />

            <div style={{ 
                marginTop: '48px', 
                padding: '24px', 
                backgroundColor: 'var(--z-color-bg-secondary)', 
                borderRadius: '8px',
                border: '1px solid var(--z-color-border)'
            }}>
                <AriTypography variant="h3" value="设计原则" style={{ marginBottom: '16px' }} />
                <AriFlex vertical space={12}>
                    <AriTypography variant="body">
                        • <strong>一致性：</strong>统一的变量系统确保整个应用的视觉一致性
                    </AriTypography>
                    <AriTypography variant="body">
                        • <strong>可扩展性：</strong>基于16px基准，使用rem单位支持响应式设计
                    </AriTypography>
                    <AriTypography variant="body">
                        • <strong>语义化：</strong>变量名称具有明确的语义，便于理解和使用
                    </AriTypography>
                    <AriTypography variant="body">
                        • <strong>主题支持：</strong>所有变量支持CSS自定义属性，便于主题切换
                    </AriTypography>
                    <AriTypography variant="body">
                        • <strong>工具优先：</strong>提供丰富的Mixins减少重复代码，提高开发效率
                    </AriTypography>
                </AriFlex>
            </div>
        </div>
    );
};

export default StyleDoc;