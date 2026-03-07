export const sourceMap = {
  "app-layout": {
    "BasicAppLayout": `export const BasicAppLayout: React.FC = () => {
  const mockConfig: AppConfig = {
        baseUrl: "",
        localImgSrc: 'http://localhost:3000',
    };

    return (
        <AriAppLayoutProvider appConfig={mockConfig}>
            <AriAppLayout style={{ width: '300px', height: 'auto' }}>
                <h3>示例应用</h3>
                <p>这是一个基础的应用布局示例</p>
            </AriAppLayout>
        </AriAppLayoutProvider>
    );
};`,
  },
  "avatar": {
    "BasicAvatar": `export const BasicAvatar: React.FC = () => (
  <>
        <AriFlex space={16} align="center">
            <AriAvatar size='xs' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <AriAvatar icon="person" />
            <AriAvatar text="用户" />
            <AriAvatar>U</AriAvatar>
        </AriFlex>
    </>
);`,
    "ShapeDemo": `export const ShapeDemo: React.FC = () => (
  <>
        <AriFlex space={16} align="center">
            <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="circle" />
            <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square" />
        </AriFlex>
    </>
);`,
    "SizeDemo": `export const SizeDemo: React.FC = () => (
  <>
        <AriFlex space={16} align="center">
            <AriAvatar size="xs" icon="person" />
            <AriAvatar size="sm" icon="person" />
            <AriAvatar size="default" icon="person" />
            <AriAvatar size="lg" icon="person" />
            <AriAvatar size="xl" icon="person" />
            <AriAvatar size="xxl" icon="person" />
        </AriFlex>
    </>
);`,
    "CustomStyleDemo": `export const CustomStyleDemo: React.FC = () => (
  <>
        <AriFlex space={16} align="center">
            <AriAvatar backgroundColor="#1890ff" icon="person" textColor="#ffffff" />
            <AriAvatar backgroundColor="#52c41a" text="用户" textColor="#ffffff" />
            <AriAvatar backgroundColor="#f5222d" icon="star" textColor="#ffffff" />
            <AriAvatar backgroundColor="#722ed1" text="ZL" textColor="#ffffff" />
        </AriFlex>
    </>
);`,
    "TypeDemo": `export const TypeDemo: React.FC = () => (
  <>
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <AriTypography variant='h3'>图片头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar icon="person" />
                <AriTypography variant='h3'>图标头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar text="ZL" />
                <AriTypography variant='h3'>文字头像</AriTypography>
            </AriFlex>
            
            <AriFlex space={16} align="center">
                <AriAvatar>
                    <span style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</span>
                </AriAvatar>
                <AriTypography variant='h3'>自定义内容</AriTypography>
            </AriFlex>
        </AriFlex>
    </>
);`,
  },
  "breadcrumb": {
    "BasicBreadcrumb": `export const BasicBreadcrumb: React.FC = () => (
<AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页' },
        { key: 'products', label: '产品' },
        { key: 'detail', label: '详情页' }
      ]} 
    />
  </AriContainer>
);`,
    "WithIconBreadcrumb": `export const WithIconBreadcrumb: React.FC = () => (
<AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页', icon: 'home' },
        { key: 'products', label: '产品列表', icon: 'unorderedlist' },
        { key: 'detail', label: '产品详情', icon: 'file' }
      ]} 
    />
  </AriContainer>
);`,
    "WithLinkBreadcrumb": `export const WithLinkBreadcrumb: React.FC = () => (
<AriContainer>
    <AriBreadcrumb 
      items={[
        { key: 'home', label: '首页', href: '#/home' },
        { key: 'products', label: '产品列表', href: '#/products' },
        { key: 'detail', label: '产品详情' }
      ]} 
    />
  </AriContainer>
);`,
    "CustomSeparatorBreadcrumb": `export const CustomSeparatorBreadcrumb: React.FC = () => (
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
);`,
    "WithClickEventBreadcrumb": `export const WithClickEventBreadcrumb: React.FC = () => (
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
);`,
  },
  "button": {
    "BasicButton": `export const BasicButton: React.FC = () => (
  <>
        <AriButton label="默认按钮" />
        <AriButton label="收藏" icon="star" />
        <AriButton icon="star" />
        <AriButton disabled label="禁用按钮" />
        <AriButton loading label="加载中" />
        <AriButton ghost label="幽灵按钮" />
    </>
);`,
    "ColorDemo": `export const ColorDemo: React.FC = () => (
  <>
        <AriButton color="primary" label="主要按钮" />
        <AriButton color="success" label="成功按钮" />
        <AriButton color="warning" label="警告按钮" />
        <AriButton color="danger" label="危险按钮" />
        <AriButton color="info" label="信息按钮" />
        <AriButton color="brand" label="品牌按钮" />
    </>
);`,
    "ShapeDemo": `export const ShapeDemo: React.FC = () => (
<>
    <AriButton shape="default" label="默认形状" />
    <AriButton shape="circle" icon="star" label="圆角按钮" />
    <AriButton shape="round" icon="star" />
  </>
);`,
    "SizeDemo": `export const SizeDemo: React.FC = () => (
  <>
        <AriButton size="xs" icon='star'  label="极小按钮" />
        <AriButton size="sm" icon='star' label="小按钮" />
        <AriButton icon='star' label="默认按钮" />
        <AriButton size="lg" icon='star' label="大按钮" />
        <AriButton size="xl" icon='star' label="超大按钮" />
        <AriButton size="xxl" icon='star' label="极大按钮" />
    </>
);`,
    "TypeDemo": `export const TypeDemo: React.FC = () => (
  <>
        <AriButton type="dashed" label="虚线按钮" />
        <AriButton type="link" label="链接按钮" />
        <AriButton type="text" label="文本按钮" />
    </>
);`,
  },
  "calendar": {
    "BasicCalendar": `export const BasicCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
    
    return (
        <AriFlex vertical>
            <AriCalendar
                value={date}
                onChange={(newDate) => setDate(newDate)}
            />
            <div style={{ marginTop: 16 }}>
                当前选择的日期: {date.toLocaleDateString()}
            </div>
        </AriFlex>
    );
};

export const DisabledCalendar: React.FC = () => {
    // 禁用过去的日期
    const today = new Date();
    
    // 禁用特定日期
    const disabledDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
    ];
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用过去的日期:</div>
                <AriCalendar minDate={today} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用特定日期:</div>
                <AriCalendar disabledDates={disabledDates} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>完全禁用的日历:</div>
                <AriCalendar disabled />
            </AriFlex>
        </AriFlex>
    );
};

export const ModeCalendar: React.FC = () => {
    const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton onClick={() => setMode('date')} color={mode === 'date' ? 'primary' : 'default'}>日期视图</AriButton>
                <AriButton onClick={() => setMode('month')} color={mode === 'month' ? 'primary' : 'default'}>月份视图</AriButton>
                <AriButton onClick={() => setMode('year')} color={mode === 'year' ? 'primary' : 'default'}>年份视图</AriButton>
            </AriFlex>
            <AriCalendar mode={mode} />
        </AriFlex>
    );
};

export const CustomHeaderCalendar: React.FC = () => {
    return (
        <AriCalendar 
            headerRender={(
                date,
                mode,
                changeMode,
                onPrevMonth,
                onNextMonth,
                onPrevYear,
                onNextYear
            ) => (
                <AriFlex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_left" size="sm" onClick={onPrevMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="left" size="sm" onClick={onPrevYear} />}
                    </AriFlex>
                    
                    <div onClick={() => {
                        if (mode === 'date') changeMode('month');
                        else if (mode === 'month') changeMode('year');
                    }} style={{ cursor: 'pointer' }}>
                        {mode === 'date' && \`\${date.getFullYear()}年\${date.getMonth() + 1}月\`}
                        {mode === 'month' && \`\${date.getFullYear()}年\`}
                        {mode === 'year' && \`\${Math.floor(date.getFullYear() / 10) * 10}年代\`}
                    </div>
                    
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_right" size="sm" onClick={onNextMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="right" size="sm" onClick={onNextYear} />}
                    </AriFlex>
                </AriFlex>
            )}
        />
    );
};

export const CustomRenderCalendar: React.FC = () => {
    // 模拟有事件的日期
    const now = new Date();
    const eventsData = {
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-10\`]: { type: 'success', content: '产品发布会' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-15\`]: { type: 'warning', content: '团队会议' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-20\`]: { type: 'error', content: '项目截止日' },
    };
    
    return (
        <AriCalendar 
            dateRender={(date, isSelected, isDisabled, isToday) => {
                const dateKey = \`\${date.getFullYear()}-\${date.getMonth() + 1}-\${date.getDate()}\`;
                const hasEvent = dateKey in eventsData;
                
                return (
                    <div style={{ 
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: isSelected ? '#1890ff' : isToday ? '#e6f7ff' : 'transparent',
                        color: isSelected ? '#fff' : isDisabled ? '#ccc' : 'inherit',
                        borderRadius: '50%'
                    }}>
                        {date.getDate()}
                        {hasEvent && (
                            <AriTooltip content={eventsData[dateKey].content}>
                                <div style={{ 
                                    position: 'absolute',
                                    bottom: '2px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: eventsData[dateKey].type === 'success' ? '#52c41a' : 
                                               eventsData[dateKey].type === 'warning' ? '#faad14' : '#f5222d'
                                }} />
                            </AriTooltip>
                        )}
                    </div>
                );
            }}
        />
    );
};
`,
    "DisabledCalendar": `export const DisabledCalendar: React.FC = () => {
  // 禁用过去的日期
    const today = new Date();
    
    // 禁用特定日期
    const disabledDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
    ];
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用过去的日期:</div>
                <AriCalendar minDate={today} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>禁用特定日期:</div>
                <AriCalendar disabledDates={disabledDates} />
            </AriFlex>
            
            <AriFlex vertical>
                <div style={{ marginBottom: 8 }}>完全禁用的日历:</div>
                <AriCalendar disabled />
            </AriFlex>
        </AriFlex>
    );
};`,
    "ModeCalendar": `export const ModeCalendar: React.FC = () => {
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');
    
    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton onClick={() => setMode('date')} color={mode === 'date' ? 'primary' : 'default'}>日期视图</AriButton>
                <AriButton onClick={() => setMode('month')} color={mode === 'month' ? 'primary' : 'default'}>月份视图</AriButton>
                <AriButton onClick={() => setMode('year')} color={mode === 'year' ? 'primary' : 'default'}>年份视图</AriButton>
            </AriFlex>
            <AriCalendar mode={mode} />
        </AriFlex>
    );
};

export const CustomHeaderCalendar: React.FC = () => {
    return (
        <AriCalendar 
            headerRender={(
                date,
                mode,
                changeMode,
                onPrevMonth,
                onNextMonth,
                onPrevYear,
                onNextYear
            ) => (
                <AriFlex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_left" size="sm" onClick={onPrevMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="left" size="sm" onClick={onPrevYear} />}
                    </AriFlex>
                    
                    <div onClick={() => {
                        if (mode === 'date') changeMode('month');
                        else if (mode === 'month') changeMode('year');
                    }} style={{ cursor: 'pointer' }}>
                        {mode === 'date' && \`\${date.getFullYear()}年\${date.getMonth() + 1}月\`}
                        {mode === 'month' && \`\${date.getFullYear()}年\`}
                        {mode === 'year' && \`\${Math.floor(date.getFullYear() / 10) * 10}年代\`}
                    </div>
                    
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_right" size="sm" onClick={onNextMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="right" size="sm" onClick={onNextYear} />}
                    </AriFlex>
                </AriFlex>
            )}
        />
    );
};

export const CustomRenderCalendar: React.FC = () => {
    // 模拟有事件的日期
    const now = new Date();
    const eventsData = {
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-10\`]: { type: 'success', content: '产品发布会' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-15\`]: { type: 'warning', content: '团队会议' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-20\`]: { type: 'error', content: '项目截止日' },
    };
    
    return (
        <AriCalendar 
            dateRender={(date, isSelected, isDisabled, isToday) => {
                const dateKey = \`\${date.getFullYear()}-\${date.getMonth() + 1}-\${date.getDate()}\`;
                const hasEvent = dateKey in eventsData;
                
                return (
                    <div style={{ 
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: isSelected ? '#1890ff' : isToday ? '#e6f7ff' : 'transparent',
                        color: isSelected ? '#fff' : isDisabled ? '#ccc' : 'inherit',
                        borderRadius: '50%'
                    }}>
                        {date.getDate()}
                        {hasEvent && (
                            <AriTooltip content={eventsData[dateKey].content}>
                                <div style={{ 
                                    position: 'absolute',
                                    bottom: '2px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: eventsData[dateKey].type === 'success' ? '#52c41a' : 
                                               eventsData[dateKey].type === 'warning' ? '#faad14' : '#f5222d'
                                }} />
                            </AriTooltip>
                        )}
                    </div>
                );
            }}
        />
    );
};
`,
    "CustomHeaderCalendar": `export const CustomHeaderCalendar: React.FC = () => {
  return (
        <AriCalendar 
            headerRender={(
                date,
                mode,
                changeMode,
                onPrevMonth,
                onNextMonth,
                onPrevYear,
                onNextYear
            ) => (
                <AriFlex justify="space-between" align="center" style={{ padding: '8px 16px' }}>
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_left" size="sm" onClick={onPrevMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="left" size="sm" onClick={onPrevYear} />}
                    </AriFlex>
                    
                    <div onClick={() => {
                        if (mode === 'date') changeMode('month');
                        else if (mode === 'month') changeMode('year');
                    }} style={{ cursor: 'pointer' }}>
                        {mode === 'date' && \`\${date.getFullYear()}年\${date.getMonth() + 1}月\`}
                        {mode === 'month' && \`\${date.getFullYear()}年\`}
                        {mode === 'year' && \`\${Math.floor(date.getFullYear() / 10) * 10}年代\`}
                    </div>
                    
                    <AriFlex space={8}>
                        {mode === 'date' && <AriButton icon="arrow_right" size="sm" onClick={onNextMonth} />}
                        {(mode === 'month' || mode === 'year') && <AriButton icon="right" size="sm" onClick={onNextYear} />}
                    </AriFlex>
                </AriFlex>
            )}
        />
    );
};`,
    "CustomRenderCalendar": `export const CustomRenderCalendar: React.FC = () => {
  // 模拟有事件的日期
    const now = new Date();
    const eventsData = {
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-10\`]: { type: 'success', content: '产品发布会' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-15\`]: { type: 'warning', content: '团队会议' },
        [\`\${now.getFullYear()}-\${now.getMonth() + 1}-20\`]: { type: 'error', content: '项目截止日' },
    };
    
    return (
        <AriCalendar 
            dateRender={(date, isSelected, isDisabled, isToday) => {
                const dateKey = \`\${date.getFullYear()}-\${date.getMonth() + 1}-\${date.getDate()}\`;
                const hasEvent = dateKey in eventsData;
                
                return (
                    <div style={{ 
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: isSelected ? '#1890ff' : isToday ? '#e6f7ff' : 'transparent',
                        color: isSelected ? '#fff' : isDisabled ? '#ccc' : 'inherit',
                        borderRadius: '50%'
                    }}>
                        {date.getDate()}
                        {hasEvent && (
                            <AriTooltip content={eventsData[dateKey].content}>
                                <div style={{ 
                                    position: 'absolute',
                                    bottom: '2px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: eventsData[dateKey].type === 'success' ? '#52c41a' : 
                                               eventsData[dateKey].type === 'warning' ? '#faad14' : '#f5222d'
                                }} />
                            </AriTooltip>
                        )}
                    </div>
                );
            }}
        />
    );
};`,
  },
  "callout": {
    "BasicExample": `export const BasicExample: React.FC = () => (
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
);`,
    "CustomTitleExample": `export const CustomTitleExample: React.FC = () => (
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
);`,
    "ComplexContentExample": `export const ComplexContentExample: React.FC = () => (
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
          <code>{\`import { AriCallout } from 'aries-react';\`}</code>
        </pre>
      </div>
    </AriCallout>
  </AriFlex>
);`,
    "CollapsibleExample": `export const CollapsibleExample: React.FC = () => {
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
};`,
    "NoIconExample": `export const NoIconExample: React.FC = () => (
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
);`,
    "UseCaseExample": `export const UseCaseExample: React.FC = () => (
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
          <code>{\`{
  "debug": true,
  "allowAllOrigins": true
}\`}</code>
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
);`,
    "InteractiveExample": `export const InteractiveExample: React.FC = () => {
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
`,
  },
  "card": {
    "BasicCard": `export const BasicCard: React.FC = () => {
  return (
        <AriFlex vertical space={24} padding={20}>
            <AriCard>
                <AriTypography variant='caption' value='这是一个基础的卡片组件，默认带有阴影和圆角效果。' />
                <AriTypography variant='caption' value='卡片组件继承自Container组件，保留了所有Container的功能' />
                <AriTypography variant='caption' value='你可以在卡片中放置任何内容，比如文字、图片、表格等' />
            </AriCard>
        </AriFlex>
    );
};`,
  },
  "carousel": {
    "BasicExample": `export const BasicExample: React.FC = () => (
  <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);`,
    "AutoplayExample": `export const AutoplayExample: React.FC = () => (
  <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            autoplay={true}
            interval={4000}
            pauseOnHover={true}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);`,
    "NoLoopExample": `export const NoLoopExample: React.FC = () => (
  <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            loop={false}
            autoplay={false}
            showArrows={true}
            showIndicators={true}
        />
    </div>
);`,
    "CustomIndicatorsExample": `export const CustomIndicatorsExample: React.FC = () => (
  <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
        <AriCarousel 
            items={carouselImages} 
            height="500px"
            autoplay={false}
            showArrows={true}
            showIndicators={true}
            renderIndicator={(index, isActive) => (
                <div style={{
                    width: isActive ? '32px' : '16px',
                    height: '6px',
                    borderRadius: '3px',
                    background: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.3s ease',
                    border: isActive ? '2px solid rgba(255, 255, 255, 0.8)' : 'none'
                }} />
            )}
        />
    </div>
);`,
    "ChildrenExample": `export const ChildrenExample: React.FC = () => (
  <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
        <AriCarousel height="500px" autoplay={true} interval={3000}>
            <div style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容1
            </div>
            <div style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容2
            </div>
            <div style={{ 
                width: '100%',
                height: '100%', 
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '48px',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '16px'
            }}>
                轮播内容3
            </div>
        </AriCarousel>
    </div>
);`,
    "MinimalExample": `export const MinimalExample: React.FC = () => (
  <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' }}>
        <AriCarousel 
            items={carouselImages.slice(0, 3)} 
            height="400px"
            autoplay={false}
            showArrows={false}
            showIndicators={false}
        />
    </div>
);`,
  },
  "chart": {
    "BasicChartDemo": `export const BasicChartDemo: React.FC = () => {
  // 饼图数据
    const pieData: AriChartDataPoint[] = [
        { label: '类别A', value: 335 },
        { label: '类别B', value: 234 },
        { label: '类别C', value: 158 },
        { label: '类别D', value: 129 },
        { label: '类别E', value: 86 }
    ];

    // 柱状图和折线图共用数据
    const xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月'];
    const barSeries: AriChartSeries[] = [
        {
            name: '销售额',
            data: [120, 200, 150, 80, 70, 110]
        },
        {
            name: '利润',
            data: [90, 130, 100, 40, 50, 70]
        }
    ];

    return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={8}>
                <AriChart
                    type="pie"
                    title="饼图示例"
                    data={pieData}
                    height={350}
                />
            </AriCol>
            <AriCol span={8}>
                <AriChart
                    type="bar"
                    title="柱状图示例"
                    xAxis={xAxisData}
                    series={barSeries}
                    height={350}
                />
            </AriCol>
            <AriCol span={8}>
                <AriChart
                    type="line"
                    title="折线图示例"
                    xAxis={xAxisData}
                    series={barSeries}
                    height={350}
                />
            </AriCol>
        </AriRow>
    );
};`,
    "CustomStyleDemo": `export const CustomStyleDemo: React.FC = () => {
  const data: AriChartDataPoint[] = [
        { label: '产品A', value: 335, color: 'var(--z-ramp-violet-500)' },
        { label: '产品B', value: 234, color: 'var(--z-ramp-teal-500)' },
        { label: '产品C', value: 158, color: 'var(--z-ramp-persimmon-500)' },
        { label: '产品D', value: 129, color: 'var(--z-ramp-yellow-500)' },
        { label: '产品E', value: 86, color: 'var(--z-ramp-blue-500)' }
    ];

    const xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const series: AriChartSeries[] = [
        {
            name: '访问量',
            data: [120, 132, 101, 134, 90, 230, 210],
            color: 'var(--z-ramp-green-500)'
        },
        {
            name: '销售额',
            data: [220, 182, 191, 234, 290, 330, 310],
            color: 'var(--z-ramp-blue-500)'
        }
    ];

    return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={12}>
                <AriChart
                    type="pie"
                    title="自定义颜色饼图"
                    data={data}
                    height={350}
                    showDataLabels={true}
                    legendPosition="right"
                />
            </AriCol>
            <AriCol span={12}>
                <AriChart
                    type="line"
                    title="自定义折线图"
                    xAxis={xAxisData}
                    series={series}
                    height={600}
                    yAxis={{ title: '数值', min: 0, max: 400 }}
                />
            </AriCol>
        </AriRow>
    );
};`,
    "InteractiveDemo": `export const InteractiveDemo: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string>('未选择');

    const data: AriChartDataPoint[] = [
        { label: '类别A', value: 335 },
        { label: '类别B', value: 234 },
        { label: '类别C', value: 158 },
        { label: '类别D', value: 129 }
    ];

    const xAxisData = ['Q1', 'Q2', 'Q3', 'Q4'];
    const series: AriChartSeries[] = [
        {
            name: '今年',
            data: [120, 132, 101, 134]
        },
        {
            name: '去年',
            data: [90, 120, 90, 110]
        }
    ];

    const handlePieClick = (data: AriChartDataPoint | AriChartSeries, index: number) => {
        if ('label' in data && 'value' in data) {
            setSelectedElement(\`饼图: \${data.label}，值: \${data.value}\`);
        }
    };

    const handleBarClick = (data: AriChartDataPoint | AriChartSeries, index: number) => {
        if ('name' in data && 'data' in data) {
            setSelectedElement(\`柱状图: \${data.name}，索引: \${index}\`);
        }
    };

    return (
        <>
            <AriTypography variant='h3' value={"点击图表元素查看交互效果：" + selectedElement} />
            <AriFlex space={24} vertical style={{ width: '100%' }}>
                <AriChart
                    type="pie"
                    title="可交互饼图"
                    data={data}
                    height={350}
                    onElementClick={handlePieClick}
                    interactive={true}
                />

                <AriChart
                    type="bar"
                    title="可交互柱状图"
                    xAxis={xAxisData}
                    series={series}
                    height={600}
                    onElementClick={handleBarClick}
                    interactive={true}
                />
            </AriFlex>
        </>
    );
};

export const LegendAndLabelsDemo: React.FC = () => {
    const [showDataLabels, setShowDataLabels] = useState(false);
    const [legendPosition, setLegendPosition] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');

    const data: AriChartDataPoint[] = [
        { label: '产品A', value: 335 },
        { label: '产品B', value: 234 },
        { label: '产品C', value: 158 },
        { label: '产品D', value: 129 }
    ];

    const xAxisData = ['第一季度', '第二季度', '第三季度', '第四季度'];
    const series: AriChartSeries[] = [
        {
            name: '2023年',
            data: [120, 132, 101, 134]
        },
        {
            name: '2022年',
            data: [90, 120, 90, 110]
        }
    ];

    return (
        <>
            <AriFlex space={16} style={{ marginBottom: 16 }}>
                <AriRadio.Group
                    name="chart-legend-position"
                    value={legendPosition}
                    onChange={(value: string | number) => setLegendPosition(value as 'top' | 'right' | 'bottom' | 'left')}
                    options={[
                        { label: '顶部', value: 'top' },
                        { label: '右侧', value: 'right' },
                        { label: '底部', value: 'bottom' },
                        { label: '左侧', value: 'left' }
                    ]}
                />
                <AriButton
                    onClick={() => setShowDataLabels(!showDataLabels)}
                >
                    {showDataLabels ? '隐藏数据标签' : '显示数据标签'}
                </AriButton>
            </AriFlex>

            <AriRow gutter={[24, 24]} style={{ minHeight: "400px" }}>
                <AriCol span={12}>
                    <AriChart
                        type="pie"
                        title="图例和标签示例 (饼图)"
                        data={data}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
                <AriCol span={12}>
                    <AriChart
                        type="bar"
                        title="图例和标签示例 (柱状图)"
                        xAxis={xAxisData}
                        series={series}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
            </AriRow>
        </>
    );
};
`,
    "LegendAndLabelsDemo": `export const LegendAndLabelsDemo: React.FC = () => {
  const [showDataLabels, setShowDataLabels] = useState(false);
    const [legendPosition, setLegendPosition] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');

    const data: AriChartDataPoint[] = [
        { label: '产品A', value: 335 },
        { label: '产品B', value: 234 },
        { label: '产品C', value: 158 },
        { label: '产品D', value: 129 }
    ];

    const xAxisData = ['第一季度', '第二季度', '第三季度', '第四季度'];
    const series: AriChartSeries[] = [
        {
            name: '2023年',
            data: [120, 132, 101, 134]
        },
        {
            name: '2022年',
            data: [90, 120, 90, 110]
        }
    ];

    return (
        <>
            <AriFlex space={16} style={{ marginBottom: 16 }}>
                <AriRadio.Group
                    name="chart-legend-position"
                    value={legendPosition}
                    onChange={(value: string | number) => setLegendPosition(value as 'top' | 'right' | 'bottom' | 'left')}
                    options={[
                        { label: '顶部', value: 'top' },
                        { label: '右侧', value: 'right' },
                        { label: '底部', value: 'bottom' },
                        { label: '左侧', value: 'left' }
                    ]}
                />
                <AriButton
                    onClick={() => setShowDataLabels(!showDataLabels)}
                >
                    {showDataLabels ? '隐藏数据标签' : '显示数据标签'}
                </AriButton>
            </AriFlex>

            <AriRow gutter={[24, 24]} style={{ minHeight: "400px" }}>
                <AriCol span={12}>
                    <AriChart
                        type="pie"
                        title="图例和标签示例 (饼图)"
                        data={data}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
                <AriCol span={12}>
                    <AriChart
                        type="bar"
                        title="图例和标签示例 (柱状图)"
                        xAxis={xAxisData}
                        series={series}
                        height={350}
                        showDataLabels={showDataLabels}
                        legendPosition={legendPosition}
                        showLegend={true}
                    />
                </AriCol>
            </AriRow>
        </>
    );
};
`,
  },
  "checkbox": {
    "BasicCheckbox": `export const BasicCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);

    return (
        <AriFlex>
            <AriCheckbox
                checked={checked}
                onChange={setChecked}
            >
                点击选择
            </AriCheckbox>
            <AriButton label="选择" onClick={() => setChecked(!checked)} />
        </AriFlex>
    );
};`,
    "DisabledDemo": `export const DisabledDemo: React.FC = () => {
  return (
        <AriFlex vertical>
            <AriCheckbox checked={false} onChange={() => { }} disabled>
                禁用未选中
            </AriCheckbox>
            <AriCheckbox checked={true} onChange={() => { }} disabled>
                禁用已选中
            </AriCheckbox>
        </AriFlex>
    );
};`,
    "IndeterminateDemo": `export const IndeterminateDemo: React.FC = () => {
  const [checkedAll, setCheckedAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkedList, setCheckedList] = useState<string[]>([]);
    
    const options = ['苹果', '香蕉', '橙子'];
    
    const onCheckAllChange = (checked: boolean) => {
        setCheckedAll(checked);
        setIndeterminate(false);
        setCheckedList(checked ? options : []);
    };
    
    const onChange = (list: Array<string | number>) => {
        setCheckedList(list as string[]);
        setIndeterminate(list.length > 0 && list.length < options.length);
        setCheckedAll(list.length === options.length);
    };
    
    return (
        <AriFlex vertical>
            <AriCheckbox 
                checked={checkedAll} 
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
            >
                全选
            </AriCheckbox>
            
            <div style={{ margin: '8px 0 0 24px' }}>
                <AriCheckboxGroup
                    value={checkedList}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <AriCheckbox key={option} value={option}>
                            {option}
                        </AriCheckbox>
                    ))}
                </AriCheckboxGroup>
            </div>
        </AriFlex>
    );
};

export const CheckboxGroupDemo: React.FC = () => {
    const [value, setValue] = useState<Array<string | number>>(['选项1', '选项3']);
    
    return (
        <AriFlex vertical>
            <AriCheckboxGroup value={value} onChange={setValue}>
                <AriCheckbox value="选项1">选项1</AriCheckbox>
                <AriCheckbox value="选项2">选项2</AriCheckbox>
                <AriCheckbox value="选项3">选项3</AriCheckbox>
                <AriCheckbox value="选项4" disabled>选项4（禁用）</AriCheckbox>
            </AriCheckboxGroup>
            
            <div style={{ marginTop: '16px' }}>
                当前选中的值: {JSON.stringify(value)}
            </div>
        </AriFlex>
    );
};`,
    "CheckboxGroupDemo": `export const CheckboxGroupDemo: React.FC = () => {
  const [value, setValue] = useState<Array<string | number>>(['选项1', '选项3']);
    
    return (
        <AriFlex vertical>
            <AriCheckboxGroup value={value} onChange={setValue}>
                <AriCheckbox value="选项1">选项1</AriCheckbox>
                <AriCheckbox value="选项2">选项2</AriCheckbox>
                <AriCheckbox value="选项3">选项3</AriCheckbox>
                <AriCheckbox value="选项4" disabled>选项4（禁用）</AriCheckbox>
            </AriCheckboxGroup>
            
            <div style={{ marginTop: '16px' }}>
                当前选中的值: {JSON.stringify(value)}
            </div>
        </AriFlex>
    );
};`,
  },
  "code": {
    "BasicCodeDemo": `export const BasicCodeDemo: React.FC = () => (
  <AriCode
        language="javascript"
        value="// 一个简单的JavaScript函数\nfunction sayHello(name) {\n  console.log(\`Hello, \${name}!\`);\n  return \`Hello, \${name}!\`;\n}\n\n// 调用函数\nsayHello('World');"
    />
);`,
    "WithTitleDemo": `export const WithTitleDemo: React.FC = () => (
  <AriCode
        path="src/components/code/index.tsx"
        addedCount={16}
        removedCount={0}
        language="typescript"
        showLineNumbers
        diffLines={{ added: [{ start: 2, end: 7 }] }}
        value={\`import { AriCode } from '@aries-kit/react';

export const CodePanel = () => {
  return (
    <AriCode
      path="src/components/code/index.tsx"
      value="console.log('hello world')"
    />
  );
};\`}
    />
);`,
    "CodePanel": `export const CodePanel = () => {
return (
    <AriCode
      path="src/components/code/index.tsx"
      value="console.log('hello world')"
    />
  );
};`,
    "LineNumbersDemo": `export const LineNumbersDemo: React.FC = () => (
  <AriCode
        language="css"
        showLineNumbers
        value=".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n\n.item {\n  margin: 10px;\n  padding: 15px;\n  background-color: white;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}"
    />
);`,
    "EditableCodeDemo": `export const EditableCodeDemo: React.FC = () => {
  const [code, setCode] = useState<string>("// 这是一个可编辑的代码示例\n// 试着修改这段代码\n\nconst colors = ['red', 'green', 'blue'];\nconst items = colors.map((color, index) => {\n  return \`Item \${index + 1}: \${color}\`;\n});\n\nconsole.log(items);");

    return (
        <AriFlex vertical space={8}>
            <AriCode
                title="可编辑代码"
                language="javascript"
                editable
                height="150px"
                value={code}
                onChange={(value) => setCode(value)}
            />
            <div>当前代码长度: {code.length} 字符</div>
        </AriFlex>
    );
};

export const MultiLanguageDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriCode
            title="HTML"
            language="html"
            value='<div class=\" container\">\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n  <button id=\"btn\">Click Me</button>\n</div> '
        />
        
        <AriCode
            title="CSS"
            language="css"
            value="body {\n  font-family: Arial, sans-serif;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n}"
        />
        
        <AriCode
            title="TypeScript"
            language="typescript"
            value="interface ButtonProps {\n  text: string;\n  onClick?: () => void;\n  disabled?: boolean;\n}\n\nfunction Button({ text, onClick, disabled = false }: ButtonProps) {\n  return (\n    <button onClick={onClick} disabled={disabled}>\n      {text}\n    </button>\n  );\n}"
        />
        
        <AriCode
            title="JSON"
            language="json"
            value='{\n  \"name\": \"John Doe\",\n  \"age\": 30,\n  \"isActive\": true,\n  \"address\": {\n    \"street\": \"123 Main St\",\n    \"city\": \"Anytown\",\n    \"country\": \"USA\"\n  },\n  \"hobbies\": [\"reading\", \"cycling\", \"photography\"]\n}'
        />
    </AriFlex>
);`,
    "MultiLanguageDemo": `export const MultiLanguageDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriCode
            title="HTML"
            language="html"
            value='<div class=\" container\">\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n  <button id=\"btn\">Click Me</button>\n</div> '
        />
        
        <AriCode
            title="CSS"
            language="css"
            value="body {\n  font-family: Arial, sans-serif;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n}"
        />
        
        <AriCode
            title="TypeScript"
            language="typescript"
            value="interface ButtonProps {\n  text: string;\n  onClick?: () => void;\n  disabled?: boolean;\n}\n\nfunction Button({ text, onClick, disabled = false }: ButtonProps) {\n  return (\n    <button onClick={onClick} disabled={disabled}>\n      {text}\n    </button>\n  );\n}"
        />
        
        <AriCode
            title="JSON"
            language="json"
            value='{\n  \"name\": \"John Doe\",\n  \"age\": 30,\n  \"isActive\": true,\n  \"address\": {\n    \"street\": \"123 Main St\",\n    \"city\": \"Anytown\",\n    \"country\": \"USA\"\n  },\n  \"hobbies\": [\"reading\", \"cycling\", \"photography\"]\n}'
        />
    </AriFlex>
);`,
    "HighlightLinesDemo": `export const HighlightLinesDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriCode
            title="单行高亮示例"
            language="javascript"
            showLineNumbers
            highlightLines={[2, 4, 6]}
            value="function calculateSum(a, b) {\n  console.log('计算开始'); // 高亮行\n  const result = a + b;\n  console.log('结果:', result); // 高亮行\n  return result;\n  console.log('函数结束'); // 高亮行\n}\n\nconst sum = calculateSum(10, 20);\nconsole.log('最终结果:', sum);"
        />
        
        <AriCode
            title="范围高亮示例"
            language="typescript"
            showLineNumbers
            highlightLines={[{start: 1, end: 3}, {start: 8, end: 10}]}
            value={\`import React from 'react';
import { useState } from 'react';
import { User } from './types';

interface Props {
  users: User[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} onClick={() => handleSelect(user.id)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};\`}
        />
        
        <AriCode
            title="混合高亮示例"
            language="python"
            showLineNumbers
            highlightLines={[1, {start: 5, end: 7}, 12]}
            value="import pandas as pd\nimport numpy as np\n\ndef analyze_data(filename):\n    # 重要的数据加载步骤\n    df = pd.read_csv(filename)\n    df = df.dropna()  # 清洗数据\n    \n    # 数据处理\n    processed_data = df.groupby('category').sum()\n    \n    print(f'处理了 {len(df)} 行数据')  # 重要输出\n    \n    return processed_data\n\n# 使用函数\nresult = analyze_data('data.csv')"
        />
    </AriFlex>
);`,
    "UserList": `export const UserList: React.FC<Props> = ({ users }) => {
const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} onClick={() => handleSelect(user.id)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};\`}
        />
        
        <AriCode
            title="混合高亮示例"
            language="python"
            showLineNumbers
            highlightLines={[1, {start: 5, end: 7}, 12]}
            value="import pandas as pd\nimport numpy as np\n\ndef analyze_data(filename):\n    # 重要的数据加载步骤\n    df = pd.read_csv(filename)\n    df = df.dropna()  # 清洗数据\n    \n    # 数据处理\n    processed_data = df.groupby('category').sum()\n    \n    print(f'处理了 {len(df)} 行数据')  # 重要输出\n    \n    return processed_data\n\n# 使用函数\nresult = analyze_data('data.csv')"
        />
    </AriFlex>
);

export const DiffCodeDemo: React.FC = () => (
    <AriCode
        path="crates/core/agent/src/python_orchestrator.rs"
        language="rust"
        showLineNumbers
        customLineNumbers={[109, 110, 110, 111, 114, 114, 118, 119, 120]}
        addedCount={16}
        removedCount={2}
        diffLines={{
            added: [3, 6, 8],
            removed: [2, 5, 7]
        }}
        value={\`//
// - 解析 diff 文本中的新增/删除行号，供 AriCode 的 diffLines 做差异高亮。
// - 根据文件路径后缀推断代码语言，优先用于“已编辑”步骤的文件预览。
//
// - detailText: 详情文本，通常为 unified diff 或 patch 内容。
// - filePath: 文件绝对路径或相对路径。
//
// - 命中新增加/删除时返回行号集合；否则返回 undefined。
export function resolveRunSegmentDiffLines(detailText: string): void {
    console.log(detailText);
}\`}
    />
);`,
    "DiffCodeDemo": `export const DiffCodeDemo: React.FC = () => (
  <AriCode
        path="crates/core/agent/src/python_orchestrator.rs"
        language="rust"
        showLineNumbers
        customLineNumbers={[109, 110, 110, 111, 114, 114, 118, 119, 120]}
        addedCount={16}
        removedCount={2}
        diffLines={{
            added: [3, 6, 8],
            removed: [2, 5, 7]
        }}
        value={\`//
// - 解析 diff 文本中的新增/删除行号，供 AriCode 的 diffLines 做差异高亮。
// - 根据文件路径后缀推断代码语言，优先用于“已编辑”步骤的文件预览。
//
// - detailText: 详情文本，通常为 unified diff 或 patch 内容。
// - filePath: 文件绝对路径或相对路径。
//
// - 命中新增加/删除时返回行号集合；否则返回 undefined。
export function resolveRunSegmentDiffLines(detailText: string): void {
    console.log(detailText);
}\`}
    />
);`,
    "CustomLineNumbersDemo": `export const CustomLineNumbersDemo: React.FC = () => (
  <AriCode
        title="自定义行号（支持重复）"
        language="typescript"
        showLineNumbers
        customLineNumbers={[110, 110, 111, 112]}
        diffLines={{ removed: [1], added: [2] }}
        value={\`// - old logic
// + new logic
const value = 1;
console.log(value);\`}
    />
);`,
    "ClosableLanguageTagDemo": `export const ClosableLanguageTagDemo: React.FC = () => (
  <AriCode
        title="可关闭语言标签"
        language="json"
        languageTagClosable
        value={\`{
  "name": "@aries-kit/react",
  "version": "0.1.390",
  "description": "Code component demo"
}\`}
    />
);`,
    "FontSizeDemo": `export const FontSizeDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriCode
            title="小字号（sm）"
            language="typescript"
            fontSize="sm"
            height="180px"
            value={\`const smallText = () => {
  return "small font size";
};\`}
        />
        <AriCode
            title="默认字号（default）"
            language="typescript"
            fontSize="default"
            height="180px"
            value={\`const defaultText = () => {
  return "default font size";
};\`}
        />
        <AriCode
            title="大字号（lg）"
            language="typescript"
            fontSize="lg"
            height="180px"
            value={\`const largeText = () => {
  return "large font size";
};\`}
        />
    </AriFlex>
);`,
  },
  "collapse": {
    "BasicCollapse": `export const BasicCollapse: React.FC = () => {
  return (
        <AriCollapse
            collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
        >
            <div style={{ padding: '20px' }}>点击展开/收起</div>
        </AriCollapse>
    );
};`,
    "ShadowDemo": `export const ShadowDemo: React.FC = () => {
  return (
        <AriFlex space={36} padding={36}>
            <AriCollapse
                shadowMode="always"
                collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
            >
                <div style={{ padding: '20px' }}>总是显示阴影</div>
            </AriCollapse>
            <AriCollapse
                shadowMode="active"
                collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
            >
                <div style={{ padding: '20px' }}>悬浮显示阴影</div>
            </AriCollapse>
        </AriFlex>
    );
};`,
    "DefaultExpandedDemo": `export const DefaultExpandedDemo: React.FC = () => {
  return (
        <AriCollapse
            defaultExpanded={true}
            collapseContent={<div style={{ padding: '20px' }}>默认展开的内容</div>}
        >
            <div style={{ padding: '20px' }}>默认展开状态</div>
        </AriCollapse>
    );
};`,
  },
  "color-picker": {
    "BasicColorPicker": `export const BasicColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#1890ff');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    {color}
                </div>
            </AriCol>
        </AriRow>
    );
};

export const SizeColorPicker: React.FC = () => {
    return (
        <AriFlex space={16}>
            <AriColorPicker defaultValue="#1890ff" size="sm" />
            <AriColorPicker defaultValue="#1890ff" size="default" />
            <AriColorPicker defaultValue="#1890ff" size="lg" />
        </AriFlex>
    );
};

export const CustomPresetColorPicker: React.FC = () => {
    const presetColors = [
        '#F5222D', '#FA541C', '#FA8C16', '#FAAD14', '#FADB14',
        '#A0D911', '#52C41A', '#13C2C2', '#1890FF', '#2F54EB',
        '#722ED1', '#EB2F96', '#F5222D', '#FA541C', '#FA8C16'
    ];

    return (
        <AriColorPicker defaultValue="#1890ff" presetColors={presetColors} />
    );
};

export const FormatColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('rgb(24, 144, 255)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={6}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsl(215, 100%, 55%)"
                    format="hsl"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsb(215, 91%, 100%)"
                    format="hsb"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="#1890ff"
                    format="hex"
                />
            </AriCol>
        </AriRow>
    );
};

export const AlphaColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    showAlpha
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                }}>
                    <div style={{
                        backgroundColor: color,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px'
                    }}>
                        {color}
                    </div>
                </div>
            </AriCol>
        </AriRow>
    );
};

export const GradientColorPicker: React.FC = () => {
    const [colorValue, setColorValue] = useState<AriColorValue>({
        direction: 'to right',
        stops: [
            { color: '#1890ff', position: 0 },
            { color: '#f5222d', position: 100 }
        ]
    });

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={colorValue}
                    enableGradient
                    onChange={setColorValue}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    backgroundImage: typeof colorValue === 'object' ?
                        \`linear-gradient(\${colorValue.direction}, \${colorValue.stops.map(stop =>
                            \`\${stop.color} \${stop.position}%\`).join(', ')})\` :
                        'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    渐变色预览
                </div>
            </AriCol>
        </AriRow>
    );
};

export const DisabledColorPicker: React.FC = () => {
    return (
        <AriColorPicker defaultValue="#1890ff" disabled />
    );
};

export const FormUsageColorPicker: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};
`,
    "SizeColorPicker": `export const SizeColorPicker: React.FC = () => {
  return (
        <AriFlex space={16}>
            <AriColorPicker defaultValue="#1890ff" size="sm" />
            <AriColorPicker defaultValue="#1890ff" size="default" />
            <AriColorPicker defaultValue="#1890ff" size="lg" />
        </AriFlex>
    );
};`,
    "CustomPresetColorPicker": `export const CustomPresetColorPicker: React.FC = () => {
  const presetColors = [
        '#F5222D', '#FA541C', '#FA8C16', '#FAAD14', '#FADB14',
        '#A0D911', '#52C41A', '#13C2C2', '#1890FF', '#2F54EB',
        '#722ED1', '#EB2F96', '#F5222D', '#FA541C', '#FA8C16'
    ];

    return (
        <AriColorPicker defaultValue="#1890ff" presetColors={presetColors} />
    );
};`,
    "FormatColorPicker": `export const FormatColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('rgb(24, 144, 255)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={6}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsl(215, 100%, 55%)"
                    format="hsl"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="hsb(215, 91%, 100%)"
                    format="hsb"
                />
            </AriCol>
            <AriCol span={6}>
                <AriColorPicker
                    defaultValue="#1890ff"
                    format="hex"
                />
            </AriCol>
        </AriRow>
    );
};

export const AlphaColorPicker: React.FC = () => {
    const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    showAlpha
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                }}>
                    <div style={{
                        backgroundColor: color,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px'
                    }}>
                        {color}
                    </div>
                </div>
            </AriCol>
        </AriRow>
    );
};

export const GradientColorPicker: React.FC = () => {
    const [colorValue, setColorValue] = useState<AriColorValue>({
        direction: 'to right',
        stops: [
            { color: '#1890ff', position: 0 },
            { color: '#f5222d', position: 100 }
        ]
    });

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={colorValue}
                    enableGradient
                    onChange={setColorValue}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    backgroundImage: typeof colorValue === 'object' ?
                        \`linear-gradient(\${colorValue.direction}, \${colorValue.stops.map(stop =>
                            \`\${stop.color} \${stop.position}%\`).join(', ')})\` :
                        'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    渐变色预览
                </div>
            </AriCol>
        </AriRow>
    );
};

export const DisabledColorPicker: React.FC = () => {
    return (
        <AriColorPicker defaultValue="#1890ff" disabled />
    );
};

export const FormUsageColorPicker: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};
`,
    "AlphaColorPicker": `export const AlphaColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={color}
                    format="rgb"
                    showAlpha
                    onChange={(value) => setColor(value as string)}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                }}>
                    <div style={{
                        backgroundColor: color,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px'
                    }}>
                        {color}
                    </div>
                </div>
            </AriCol>
        </AriRow>
    );
};

export const GradientColorPicker: React.FC = () => {
    const [colorValue, setColorValue] = useState<AriColorValue>({
        direction: 'to right',
        stops: [
            { color: '#1890ff', position: 0 },
            { color: '#f5222d', position: 100 }
        ]
    });

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={colorValue}
                    enableGradient
                    onChange={setColorValue}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    backgroundImage: typeof colorValue === 'object' ?
                        \`linear-gradient(\${colorValue.direction}, \${colorValue.stops.map(stop =>
                            \`\${stop.color} \${stop.position}%\`).join(', ')})\` :
                        'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    渐变色预览
                </div>
            </AriCol>
        </AriRow>
    );
};

export const DisabledColorPicker: React.FC = () => {
    return (
        <AriColorPicker defaultValue="#1890ff" disabled />
    );
};

export const FormUsageColorPicker: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};
`,
    "GradientColorPicker": `export const GradientColorPicker: React.FC = () => {
  const [colorValue, setColorValue] = useState<AriColorValue>({
        direction: 'to right',
        stops: [
            { color: '#1890ff', position: 0 },
            { color: '#f5222d', position: 100 }
        ]
    });

    return (
        <AriRow gutter={[16, 16]}>
            <AriCol span={12}>
                <AriColorPicker
                    value={colorValue}
                    enableGradient
                    onChange={setColorValue}
                />
            </AriCol>
            <AriCol span={12}>
                <div style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    backgroundImage: typeof colorValue === 'object' ?
                        \`linear-gradient(\${colorValue.direction}, \${colorValue.stops.map(stop =>
                            \`\${stop.color} \${stop.position}%\`).join(', ')})\` :
                        'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    渐变色预览
                </div>
            </AriCol>
        </AriRow>
    );
};

export const DisabledColorPicker: React.FC = () => {
    return (
        <AriColorPicker defaultValue="#1890ff" disabled />
    );
};

export const FormUsageColorPicker: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};
`,
    "DisabledColorPicker": `export const DisabledColorPicker: React.FC = () => {
  return (
        <AriColorPicker defaultValue="#1890ff" disabled />
    );
};`,
    "FormUsageColorPicker": `export const FormUsageColorPicker: React.FC = () => {
  const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <AriForm
            onFinish={onFinish}
            style={{ maxWidth: '600px' }}
            initialValues={{
                backgroundColor: "#1890ff",
                textColor: "#ffffff",
                borderColor: "rgba(24, 144, 255, 0.5)",
                gradientBackground: {
                    direction: 'to right',
                    stops: [
                        { color: '#1890ff', position: 0 },
                        { color: '#722ed1', position: 100 }
                    ]
                }
            }}
        >
            <AriFormItem
                label="背景颜色"
                name="backgroundColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="文字颜色"
                name="textColor"
            >
                <AriColorPicker />
            </AriFormItem>

            <AriFormItem
                label="边框颜色"
                name="borderColor"
            >
                <AriColorPicker showAlpha />
            </AriFormItem>

            <AriFormItem
                label="渐变背景"
                name="gradientBackground"
            >
                <AriColorPicker enableGradient />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};`,
  },
  "container": {
    "BasicContainer": `export const BasicContainer: React.FC = () => (
  <AriContainer>
        基础容器
    </AriContainer>
);`,
    "BorderRadiusDemo": `export const BorderRadiusDemo: React.FC = () => {
  return (
        <AriContainer showBorderRadius={true} shadowMode="always" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--z-color-bg-secondary)' }} >
            圆角容器
        </AriContainer>
    );
};`,
    "FillDemo": `export const FillDemo: React.FC = () => {
  const cs = useCss("");
    return (
        <>
            <AriFlex vertical>
                <AriContainer
                    fill={false}
                >
                    默认不填充容器
                </AriContainer>

                <div style={{backgroundColor: '#f0f2f5', padding: '1rem'}}>
                    <AriContainer
                        fill={true}
                    >
                        填充容器
                    </AriContainer>
                </div>
            </AriFlex>

        </>
    );
};`,
    "PositionDemo": `export const PositionDemo: React.FC = () => {
  return (
        <>
            <AriFlex vertical>
                <AriContainer
                    showBorder={true}
                    showBorderRadius={true}
                    alignment={WIDGET_POSITIONS.LEFT}
                >
                    左对齐
                </AriContainer>
                <div style={{ position: 'relative', width: '100%', marginBottom: '1rem', height: '80px' }}>
                    <AriContainer
                        showBorder={true}
                        showBorderRadius={true}
                        alignment={WIDGET_POSITIONS.CENTER}
                    >
                        居中对齐
                    </AriContainer>
                </div>
            </AriFlex>

        </>
    );
};`,
    "ShadowDemo": `export const ShadowDemo: React.FC = () => {
  return (
        <>
            <AriFlex vertical space={24} padding={16}>
                <AriContainer shadowMode="always">
                    <div >
                        始终显示阴影
                    </div>
                </AriContainer>
                <AriContainer shadowMode="active">
                    <div>
                        悬停显示阴影（鼠标移上来试试）
                    </div>
                </AriContainer>
            </AriFlex>
        </>
    );
};`,
    "BorderDemo": `export const BorderDemo: React.FC = () => {
  return (
        <>
            <AriFlex vertical>
                <AriContainer showBorder={true}>
                    显示边框
                </AriContainer>
                <AriContainer showBorder={true} borderStyle='dashed'>
                    显示虚线
                </AriContainer>
                <AriContainer showBorder={true} borderStyle='dotted'>
                    显示点线
                </AriContainer>
            </AriFlex>
        </>
    );
}

export const BackgroundDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={16} style={{ backgroundColor: 'var(--z-color-bg-tertiary)', padding: '16px' }}>
                <AriContainer style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
                    默认容器（无背景色）
                </AriContainer>
                <AriContainer 
                    bgVariant="solid" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    实心背景色变体
                </AriContainer>
                <AriContainer 
                    bgVariant="glass" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    玻璃背景色变体
                </AriContainer>
            </AriFlex>
        </>
    );
}

export const CustomBackgroundDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={16}>
                <AriContainer 
                    bgColor="#f0f8ff" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    自定义背景色（浅蓝色）
                </AriContainer>
                <AriContainer 
                    bgColor="var(--color-brand)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    使用主题变量背景色
                </AriContainer>
                <AriContainer 
                    bgColor="linear-gradient(45deg, #ff6b6b, #4ecdc4)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    渐变背景色
                </AriContainer>
            </AriFlex>
        </>
    );
}`,
    "BackgroundDemo": `export const BackgroundDemo: React.FC = () => {
  return (
        <>
            <AriFlex vertical space={16} style={{ backgroundColor: 'var(--z-color-bg-tertiary)', padding: '16px' }}>
                <AriContainer style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
                    默认容器（无背景色）
                </AriContainer>
                <AriContainer 
                    bgVariant="solid" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    实心背景色变体
                </AriContainer>
                <AriContainer 
                    bgVariant="glass" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    玻璃背景色变体
                </AriContainer>
            </AriFlex>
        </>
    );
}

export const CustomBackgroundDemo: React.FC = () => {
    return (
        <>
            <AriFlex vertical space={16}>
                <AriContainer 
                    bgColor="#f0f8ff" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    自定义背景色（浅蓝色）
                </AriContainer>
                <AriContainer 
                    bgColor="var(--color-brand)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    使用主题变量背景色
                </AriContainer>
                <AriContainer 
                    bgColor="linear-gradient(45deg, #ff6b6b, #4ecdc4)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    渐变背景色
                </AriContainer>
            </AriFlex>
        </>
    );
}`,
    "CustomBackgroundDemo": `export const CustomBackgroundDemo: React.FC = () => {
  return (
        <>
            <AriFlex vertical space={16}>
                <AriContainer 
                    bgColor="#f0f8ff" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    自定义背景色（浅蓝色）
                </AriContainer>
                <AriContainer 
                    bgColor="var(--color-brand)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    使用主题变量背景色
                </AriContainer>
                <AriContainer 
                    bgColor="linear-gradient(45deg, #ff6b6b, #4ecdc4)" 
                    style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                >
                    渐变背景色
                </AriContainer>
            </AriFlex>
        </>
    );
}`,
  },
  "context-menu": {
    "BasicContextMenu": `export const BasicContextMenu: React.FC = () => {
  const menuItems = [
        { key: 'open', label: '打开', icon: 'folder_open' },
        { key: 'rename', label: '重命名', icon: 'edit' },
        { key: 'delete', label: '删除', icon: 'delete' },
    ];

    return (
        <AriContextMenu
            items={menuItems}
            onSelect={(key) => console.log('context menu select:', key)}
        >
            <AriContainer
                showBorder
                material='glass'
                padding={getCssVarName('inset')}
                style={{
                    width: getCssVarName('element-size', 'content-sm'),
                    minHeight: getCssVarName('element-size', 'content-xs'),
                }}
            >
                <AriTypography variant='h3' value='右键这里打开菜单' />
                <AriTypography
                    variant='caption'
                    value='默认渲染 AriMenu，支持 onSelect 回调。'
                />
            </AriContainer>
        </AriContextMenu>
    );
};`,
    "CustomContextMenu": `export const CustomContextMenu: React.FC = () => {
  const [name, setName] = useState('新建会话');

    return (
        <AriContextMenu
            renderOverlay={({ close }) => (
                <AriContainer
                    showBorder
                    material='glass'
                    padding={getCssVarName('inset', 'sm')}
                    style={{
                        width: getCssVarName('element-size', 'content-xs'),
                    }}
                >
                    <AriFlex vertical space={getCssVarName('inset', 'sm')}>
                        <AriTypography variant='h3' value='快捷操作' />
                        <AriInput value={name} onChange={setName} placeholder='输入名称' />
                        <AriFlex justify='flex-end' space={getCssVarName('inset', 'xs')}>
                            <AriButton type='text' onClick={close}>取消</AriButton>
                            <AriButton
                                color='primary'
                                onClick={() => {
                                    console.log('create:', name);
                                    close();
                                }}
                            >
                                创建
                            </AriButton>
                        </AriFlex>
                    </AriFlex>
                </AriContainer>
            )}
        >
            <AriContainer
                showBorder
                padding={getCssVarName('inset')}
                style={{
                    width: getCssVarName('element-size', 'content-sm'),
                    minHeight: getCssVarName('element-size', 'content-xs'),
                }}
            >
                <AriTypography variant='h3' value='右键这里打开自定义菜单' />
                <AriTypography
                    variant='caption'
                    value='使用 renderOverlay 完全自定义内部内容。'
                />
            </AriContainer>
        </AriContextMenu>
    );
};`,
    "DetachedContextMenu": `export const DetachedContextMenu: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
    const menuItems = [
        { key: 'copy', label: '复制', icon: 'content_copy' },
        { key: 'paste', label: '粘贴', icon: 'content_paste' },
        { key: 'delete', label: '删除', icon: 'delete' },
    ];

    return (
        <AriFlex vertical space={getCssVarName('inset', 'sm')}>
            <AriContextMenu
                targetRef={targetRef}
                items={menuItems}
                onSelect={(key) => console.log('detached context menu select:', key)}
            />
            <div
                ref={targetRef}
                style={{
                    width: getCssVarName('element-size', 'content-sm'),
                    minHeight: getCssVarName('element-size', 'content-xs'),
                    border: \`1px dashed \${getCssVarName('color', 'border')}\`,
                    borderRadius: getCssVarName('border-radius', 'container'),
                    padding: getCssVarName('inset'),
                    background: getCssVarName('color', 'bg-opacity'),
                    boxSizing: 'border-box',
                }}
            >
                <AriTypography variant='h3' value='独立目标：右键此区域打开菜单' />
                <AriTypography
                    variant='caption'
                    value='AriContextMenu 不包裹此区域，只通过 targetRef 监听右键事件。'
                />
            </div>
        </AriFlex>
    );
};
`,
  },
  "date-picker": {
    "BasicDatePicker": `export const BasicDatePicker: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

    const handleChange = (newDate: Date | undefined) => {
        setDate(newDate);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='h4' value="基础用法" />
            <AriDatePicker value={date} onChange={handleChange} />

            <AriTypography variant='h4' value="不同尺寸" />
            <AriFlex space={8} align="center">
                <AriDatePicker placeholder="小尺寸" size="small" />
                <AriDatePicker placeholder="中等尺寸" size="medium" />
                <AriDatePicker placeholder="大尺寸" size="large" />
            </AriFlex>

            <AriTypography variant='h4' value="清除按钮" />
            <AriDatePicker defaultValue={new Date()} clearable={true} />
            <AriDatePicker defaultValue={new Date()} clearable={false} placeholder="不可清除" />

            <AriTypography variant='h4' value="禁用状态" />
            <AriDatePicker defaultValue={new Date()} disabled />

            <AriTypography variant='h4' value="自定义格式" />
            <AriDatePicker 
                defaultValue={new Date()} 
                format={(d) => \`\${d.getFullYear()}年\${d.getMonth() + 1}月\${d.getDate()}日\`} 
            />

            <AriTypography variant='h4' value="日期范围限制" />
            <AriDatePicker 
                minDate={new Date(2025, 4, 1)} // May 1, 2025
                maxDate={new Date(2025, 4, 15)} // May 15, 2025
                placeholder="选择 5/1 到 5/15 之间的日期"
            />

            <AriTypography variant='h4' value="带时间选择" />
            <AriDatePicker showTime defaultValue={new Date()} />

            <AriTypography variant='h4' value="带时间选择并自定义格式" />
            <AriDatePicker 
                showTime 
                defaultValue={new Date()} 
                dateTimeFormat={(d) => \`\${d.getFullYear()}年\${d.getMonth() + 1}月\${d.getDate()}日 \${d.getHours()}:\${d.getMinutes()}\`}
            />
        </AriFlex>
    );
};
`,
  },
  "divider": {
    "BasicDivider": `export const BasicDivider: React.FC = () => (
  <>
        <div>上方内容</div>
        <AriDivider />
        <div>下方内容</div>
    </>
);`,
    "LabelDivider": `export const LabelDivider: React.FC = () => (
  <>
        <div>登录账号</div>
        <AriDivider>或者</AriDivider>
        <div>扫码登录</div>
    </>
);`,
    "OrientationDivider": `export const OrientationDivider: React.FC = () => (
  <>
        <div>内容区域</div>
        <AriDivider orientation="left">左对齐</AriDivider>
        <div>内容区域</div>
        <AriDivider orientation="center">居中对齐</AriDivider>
        <div>内容区域</div>
        <AriDivider orientation="right">右对齐</AriDivider>
        <div>内容区域</div>
    </>
);`,
    "VariantDivider": `export const VariantDivider: React.FC = () => (
  <>
        <div>默认分割线</div>
        <AriDivider variant="default" color="#46b2ff" />
        <div>虚线分割线</div>
        <AriDivider variant="dashed" />
        <div>点状分割线</div>
        <AriDivider variant="dotted" />
    </>
);`,
    "PlainDivider": `export const PlainDivider: React.FC = () => (
  <>
        <div>内容区域</div>
        <AriDivider plain>简洁样式</AriDivider>
        <div>内容区域</div>
        <AriDivider>默认样式</AriDivider>
        <div>内容区域</div>
    </>
);`,
    "VerticalDivider": `export const VerticalDivider: React.FC = () => (
  <AriFlex justify='center'>
        <span>文本</span>
        <AriDivider type="vertical" />
        <span>文本</span>
    </AriFlex>
);`,
  },
  "drag-list": {
    "BasicExample": `export const BasicExample: React.FC = () => {
  const [items, setItems] = useState<AriDragListItem[]>([
        { id: 1, content: '第一项 - 可以拖拽我' },
        { id: 2, content: '第二项 - 拖拽改变顺序' },
        { id: 3, content: '第三项 - 简单易用' },
        { id: 4, content: '第四项 - 流畅交互' }
    ]);

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setItems(newItems);
        console.log(\`项目从位置 \${fromIndex} 移动到位置 \${toIndex}\`);
    };

    return (
        <AriContainer width={400}>
            <AriDragList 
                items={items} 
                onSortChange={handleSortChange}
            />
        </AriContainer>
    );
};

// 间距设置示例
export const GapExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '拖拽项 1' },
        { id: 2, content: '拖拽项 2' },
        { id: 3, content: '拖拽项 3' }
    ];

    return (
        <AriFlex space={24} vertical>
            <div>
                <AriTypography variant="caption" gutterBottom>小间距 (xs)</AriTypography>
                <AriDragList items={items} gap="xs" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>中等间距 (md)</AriTypography>
                <AriDragList items={items} gap="md" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>大间距 (lg)</AriTypography>
                <AriDragList items={items} gap="lg" />
            </div>
        </AriFlex>
    );
};

// 自定义渲染示例
export const CustomRenderExample: React.FC = () => {
    const [tasks, setTasks] = useState<AriDragListItem[]>([
        { 
            id: 1, 
            content: { 
                title: '设计用户界面', 
                status: 'progress', 
                priority: 'high',
                assignee: '张三'
            } 
        },
        { 
            id: 2, 
            content: { 
                title: '前端开发', 
                status: 'pending', 
                priority: 'medium',
                assignee: '李四'
            } 
        },
        { 
            id: 3, 
            content: { 
                title: '代码审查', 
                status: 'done', 
                priority: 'low',
                assignee: '王五'
            } 
        }
    ]);

    const renderTaskItem = (item: AriDragListItem) => {
        const task = item.content as any;
        const statusColors = {
            pending: 'warning',
            progress: 'info', 
            done: 'success'
        };
        
        const priorityColors = {
            high: 'danger',
            medium: 'warning',
            low: 'info'
        };

        return (
            <AriContainer 
                padding={16} 
                showBorder 
                style={{ backgroundColor: 'white' }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex vertical space={8}>
                        <AriTypography variant="body" style={{ fontWeight: 600 }}>
                            {task.title}
                        </AriTypography>
                        <AriFlex space={8} align="center">
                            <AriTag color={statusColors[task.status]}>
                                {task.status === 'pending' ? '待处理' : 
                                 task.status === 'progress' ? '进行中' : '已完成'}
                            </AriTag>
                            <AriTag color={priorityColors[task.priority]}>
                                {task.priority === 'high' ? '高优先级' : 
                                 task.priority === 'medium' ? '中优先级' : '低优先级'}
                            </AriTag>
                        </AriFlex>
                    </AriFlex>
                    <AriFlex vertical align="flex-end" space={4}>
                        <AriIcon name="person" size="sm" />
                        <AriTypography variant="caption">{task.assignee}</AriTypography>
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[]) => {
        setTasks(newItems);
    };

    return (
        <AriContainer width={500}>
            <AriDragList 
                items={tasks}
                renderItem={renderTaskItem}
                onSortChange={handleSortChange}
                gap="sm"
            />
        </AriContainer>
    );
};

// 禁用状态示例
export const DisabledExample: React.FC = () => {
    const [items] = useState<AriDragListItem[]>([
        { id: 1, content: '正常项目 - 可以拖拽' },
        { id: 2, content: '禁用项目 - 无法拖拽', disabled: true },
        { id: 3, content: '正常项目 - 可以拖拽' },
        { id: 4, content: '禁用项目 - 无法拖拽', disabled: true }
    ]);

    const [globalDisabled, setGlobalDisabled] = useState(false);

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriButton 
                    size="sm"
                    color={globalDisabled ? 'success' : 'danger'}
                    onClick={() => setGlobalDisabled(!globalDisabled)}
                >
                    {globalDisabled ? '启用列表' : '禁用列表'}
                </AriButton>
                <AriTypography variant="caption">
                    {globalDisabled ? '列表已全局禁用' : '列表正常，部分项目单独禁用'}
                </AriTypography>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    disabled={globalDisabled}
                    onSortChange={(newItems) => console.log('排序变化:', newItems)}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 拖拽手柄配置示例
export const HandleConfigExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '显示拖拽手柄的项目' },
        { id: 2, content: '拖拽手柄使用自定义图标' },
        { id: 3, content: '无拖拽手柄，点击任意位置拖拽' }
    ];

    return (
        <AriFlex vertical space={24}>
            <div>
                <AriTypography variant="caption" gutterBottom>
                    默认拖拽手柄 (drag_indicator)
                </AriTypography>
                <AriDragList items={items} />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    自定义手柄图标 (menu)
                </AriTypography>
                <AriDragList 
                    items={items} 
                    dragHandleIcon="menu"
                />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    隐藏拖拽手柄
                </AriTypography>
                <AriDragList 
                    items={items} 
                    showDragHandle={false}
                />
            </div>
        </AriFlex>
    );
};

// 空状态处理示例
export const EmptyStateExample: React.FC = () => {
    const [items, setItems] = useState<AriDragListItem[]>([]);
    const [allowEmpty, setAllowEmpty] = useState(true);

    const addItem = () => {
        const newItem: AriDragListItem = {
            id: Date.now(),
            content: \`新项目 \${items.length + 1}\`
        };
        setItems([...items, newItem]);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={12}>
                <AriButton size="sm" color="primary" onClick={addItem}>
                    添加项目
                </AriButton>
                <AriButton size="sm" color="danger" onClick={clearItems}>
                    清空列表
                </AriButton>
                <AriButton 
                    size="sm"
                    color={allowEmpty ? 'warning' : 'success'}
                    onClick={() => setAllowEmpty(!allowEmpty)}
                >
                    {allowEmpty ? '禁止空状态' : '允许空状态'}
                </AriButton>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    allowEmpty={allowEmpty}
                    emptyContent={
                        <AriFlex vertical align="center" space={12} style={{ padding: '40px 20px' }}>
                            <AriIcon name="inbox" size="lg" color="#ccc" />
                            <AriTypography variant="caption" color="secondary">
                                暂无数据，点击上方按钮添加项目
                            </AriTypography>
                        </AriFlex>
                    }
                    onSortChange={setItems}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 复杂数据操作示例
export const ComplexDataExample: React.FC = () => {
    const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: \`4px solid \${category.color}\`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(\`分类 "\${(newItems[toIndex].content as any).name}" 优先级从 \${fromIndex + 1} 调整为 \${toIndex + 1}\`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "GapExample": `export const GapExample: React.FC = () => {
  const items: AriDragListItem[] = [
        { id: 1, content: '拖拽项 1' },
        { id: 2, content: '拖拽项 2' },
        { id: 3, content: '拖拽项 3' }
    ];

    return (
        <AriFlex space={24} vertical>
            <div>
                <AriTypography variant="caption" gutterBottom>小间距 (xs)</AriTypography>
                <AriDragList items={items} gap="xs" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>中等间距 (md)</AriTypography>
                <AriDragList items={items} gap="md" />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>大间距 (lg)</AriTypography>
                <AriDragList items={items} gap="lg" />
            </div>
        </AriFlex>
    );
};`,
    "CustomRenderExample": `export const CustomRenderExample: React.FC = () => {
  const [tasks, setTasks] = useState<AriDragListItem[]>([
        { 
            id: 1, 
            content: { 
                title: '设计用户界面', 
                status: 'progress', 
                priority: 'high',
                assignee: '张三'
            } 
        },
        { 
            id: 2, 
            content: { 
                title: '前端开发', 
                status: 'pending', 
                priority: 'medium',
                assignee: '李四'
            } 
        },
        { 
            id: 3, 
            content: { 
                title: '代码审查', 
                status: 'done', 
                priority: 'low',
                assignee: '王五'
            } 
        }
    ]);

    const renderTaskItem = (item: AriDragListItem) => {
        const task = item.content as any;
        const statusColors = {
            pending: 'warning',
            progress: 'info', 
            done: 'success'
        };
        
        const priorityColors = {
            high: 'danger',
            medium: 'warning',
            low: 'info'
        };

        return (
            <AriContainer 
                padding={16} 
                showBorder 
                style={{ backgroundColor: 'white' }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex vertical space={8}>
                        <AriTypography variant="body" style={{ fontWeight: 600 }}>
                            {task.title}
                        </AriTypography>
                        <AriFlex space={8} align="center">
                            <AriTag color={statusColors[task.status]}>
                                {task.status === 'pending' ? '待处理' : 
                                 task.status === 'progress' ? '进行中' : '已完成'}
                            </AriTag>
                            <AriTag color={priorityColors[task.priority]}>
                                {task.priority === 'high' ? '高优先级' : 
                                 task.priority === 'medium' ? '中优先级' : '低优先级'}
                            </AriTag>
                        </AriFlex>
                    </AriFlex>
                    <AriFlex vertical align="flex-end" space={4}>
                        <AriIcon name="person" size="sm" />
                        <AriTypography variant="caption">{task.assignee}</AriTypography>
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[]) => {
        setTasks(newItems);
    };

    return (
        <AriContainer width={500}>
            <AriDragList 
                items={tasks}
                renderItem={renderTaskItem}
                onSortChange={handleSortChange}
                gap="sm"
            />
        </AriContainer>
    );
};

// 禁用状态示例
export const DisabledExample: React.FC = () => {
    const [items] = useState<AriDragListItem[]>([
        { id: 1, content: '正常项目 - 可以拖拽' },
        { id: 2, content: '禁用项目 - 无法拖拽', disabled: true },
        { id: 3, content: '正常项目 - 可以拖拽' },
        { id: 4, content: '禁用项目 - 无法拖拽', disabled: true }
    ]);

    const [globalDisabled, setGlobalDisabled] = useState(false);

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriButton 
                    size="sm"
                    color={globalDisabled ? 'success' : 'danger'}
                    onClick={() => setGlobalDisabled(!globalDisabled)}
                >
                    {globalDisabled ? '启用列表' : '禁用列表'}
                </AriButton>
                <AriTypography variant="caption">
                    {globalDisabled ? '列表已全局禁用' : '列表正常，部分项目单独禁用'}
                </AriTypography>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    disabled={globalDisabled}
                    onSortChange={(newItems) => console.log('排序变化:', newItems)}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 拖拽手柄配置示例
export const HandleConfigExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '显示拖拽手柄的项目' },
        { id: 2, content: '拖拽手柄使用自定义图标' },
        { id: 3, content: '无拖拽手柄，点击任意位置拖拽' }
    ];

    return (
        <AriFlex vertical space={24}>
            <div>
                <AriTypography variant="caption" gutterBottom>
                    默认拖拽手柄 (drag_indicator)
                </AriTypography>
                <AriDragList items={items} />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    自定义手柄图标 (menu)
                </AriTypography>
                <AriDragList 
                    items={items} 
                    dragHandleIcon="menu"
                />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    隐藏拖拽手柄
                </AriTypography>
                <AriDragList 
                    items={items} 
                    showDragHandle={false}
                />
            </div>
        </AriFlex>
    );
};

// 空状态处理示例
export const EmptyStateExample: React.FC = () => {
    const [items, setItems] = useState<AriDragListItem[]>([]);
    const [allowEmpty, setAllowEmpty] = useState(true);

    const addItem = () => {
        const newItem: AriDragListItem = {
            id: Date.now(),
            content: \`新项目 \${items.length + 1}\`
        };
        setItems([...items, newItem]);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={12}>
                <AriButton size="sm" color="primary" onClick={addItem}>
                    添加项目
                </AriButton>
                <AriButton size="sm" color="danger" onClick={clearItems}>
                    清空列表
                </AriButton>
                <AriButton 
                    size="sm"
                    color={allowEmpty ? 'warning' : 'success'}
                    onClick={() => setAllowEmpty(!allowEmpty)}
                >
                    {allowEmpty ? '禁止空状态' : '允许空状态'}
                </AriButton>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    allowEmpty={allowEmpty}
                    emptyContent={
                        <AriFlex vertical align="center" space={12} style={{ padding: '40px 20px' }}>
                            <AriIcon name="inbox" size="lg" color="#ccc" />
                            <AriTypography variant="caption" color="secondary">
                                暂无数据，点击上方按钮添加项目
                            </AriTypography>
                        </AriFlex>
                    }
                    onSortChange={setItems}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 复杂数据操作示例
export const ComplexDataExample: React.FC = () => {
    const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: \`4px solid \${category.color}\`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(\`分类 "\${(newItems[toIndex].content as any).name}" 优先级从 \${fromIndex + 1} 调整为 \${toIndex + 1}\`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "DisabledExample": `export const DisabledExample: React.FC = () => {
  const [items] = useState<AriDragListItem[]>([
        { id: 1, content: '正常项目 - 可以拖拽' },
        { id: 2, content: '禁用项目 - 无法拖拽', disabled: true },
        { id: 3, content: '正常项目 - 可以拖拽' },
        { id: 4, content: '禁用项目 - 无法拖拽', disabled: true }
    ]);

    const [globalDisabled, setGlobalDisabled] = useState(false);

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={16} align="center">
                <AriButton 
                    size="sm"
                    color={globalDisabled ? 'success' : 'danger'}
                    onClick={() => setGlobalDisabled(!globalDisabled)}
                >
                    {globalDisabled ? '启用列表' : '禁用列表'}
                </AriButton>
                <AriTypography variant="caption">
                    {globalDisabled ? '列表已全局禁用' : '列表正常，部分项目单独禁用'}
                </AriTypography>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    disabled={globalDisabled}
                    onSortChange={(newItems) => console.log('排序变化:', newItems)}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 拖拽手柄配置示例
export const HandleConfigExample: React.FC = () => {
    const items: AriDragListItem[] = [
        { id: 1, content: '显示拖拽手柄的项目' },
        { id: 2, content: '拖拽手柄使用自定义图标' },
        { id: 3, content: '无拖拽手柄，点击任意位置拖拽' }
    ];

    return (
        <AriFlex vertical space={24}>
            <div>
                <AriTypography variant="caption" gutterBottom>
                    默认拖拽手柄 (drag_indicator)
                </AriTypography>
                <AriDragList items={items} />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    自定义手柄图标 (menu)
                </AriTypography>
                <AriDragList 
                    items={items} 
                    dragHandleIcon="menu"
                />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    隐藏拖拽手柄
                </AriTypography>
                <AriDragList 
                    items={items} 
                    showDragHandle={false}
                />
            </div>
        </AriFlex>
    );
};

// 空状态处理示例
export const EmptyStateExample: React.FC = () => {
    const [items, setItems] = useState<AriDragListItem[]>([]);
    const [allowEmpty, setAllowEmpty] = useState(true);

    const addItem = () => {
        const newItem: AriDragListItem = {
            id: Date.now(),
            content: \`新项目 \${items.length + 1}\`
        };
        setItems([...items, newItem]);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={12}>
                <AriButton size="sm" color="primary" onClick={addItem}>
                    添加项目
                </AriButton>
                <AriButton size="sm" color="danger" onClick={clearItems}>
                    清空列表
                </AriButton>
                <AriButton 
                    size="sm"
                    color={allowEmpty ? 'warning' : 'success'}
                    onClick={() => setAllowEmpty(!allowEmpty)}
                >
                    {allowEmpty ? '禁止空状态' : '允许空状态'}
                </AriButton>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    allowEmpty={allowEmpty}
                    emptyContent={
                        <AriFlex vertical align="center" space={12} style={{ padding: '40px 20px' }}>
                            <AriIcon name="inbox" size="lg" color="#ccc" />
                            <AriTypography variant="caption" color="secondary">
                                暂无数据，点击上方按钮添加项目
                            </AriTypography>
                        </AriFlex>
                    }
                    onSortChange={setItems}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 复杂数据操作示例
export const ComplexDataExample: React.FC = () => {
    const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: \`4px solid \${category.color}\`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(\`分类 "\${(newItems[toIndex].content as any).name}" 优先级从 \${fromIndex + 1} 调整为 \${toIndex + 1}\`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "HandleConfigExample": `export const HandleConfigExample: React.FC = () => {
  const items: AriDragListItem[] = [
        { id: 1, content: '显示拖拽手柄的项目' },
        { id: 2, content: '拖拽手柄使用自定义图标' },
        { id: 3, content: '无拖拽手柄，点击任意位置拖拽' }
    ];

    return (
        <AriFlex vertical space={24}>
            <div>
                <AriTypography variant="caption" gutterBottom>
                    默认拖拽手柄 (drag_indicator)
                </AriTypography>
                <AriDragList items={items} />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    自定义手柄图标 (menu)
                </AriTypography>
                <AriDragList 
                    items={items} 
                    dragHandleIcon="menu"
                />
            </div>
            
            <div>
                <AriTypography variant="caption" gutterBottom>
                    隐藏拖拽手柄
                </AriTypography>
                <AriDragList 
                    items={items} 
                    showDragHandle={false}
                />
            </div>
        </AriFlex>
    );
};`,
    "EmptyStateExample": `export const EmptyStateExample: React.FC = () => {
  const [items, setItems] = useState<AriDragListItem[]>([]);
    const [allowEmpty, setAllowEmpty] = useState(true);

    const addItem = () => {
        const newItem: AriDragListItem = {
            id: Date.now(),
            content: \`新项目 \${items.length + 1}\`
        };
        setItems([...items, newItem]);
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={12}>
                <AriButton size="sm" color="primary" onClick={addItem}>
                    添加项目
                </AriButton>
                <AriButton size="sm" color="danger" onClick={clearItems}>
                    清空列表
                </AriButton>
                <AriButton 
                    size="sm"
                    color={allowEmpty ? 'warning' : 'success'}
                    onClick={() => setAllowEmpty(!allowEmpty)}
                >
                    {allowEmpty ? '禁止空状态' : '允许空状态'}
                </AriButton>
            </AriFlex>
            
            <AriContainer width={400}>
                <AriDragList 
                    items={items}
                    allowEmpty={allowEmpty}
                    emptyContent={
                        <AriFlex vertical align="center" space={12} style={{ padding: '40px 20px' }}>
                            <AriIcon name="inbox" size="lg" color="#ccc" />
                            <AriTypography variant="caption" color="secondary">
                                暂无数据，点击上方按钮添加项目
                            </AriTypography>
                        </AriFlex>
                    }
                    onSortChange={setItems}
                />
            </AriContainer>
        </AriFlex>
    );
};

// 复杂数据操作示例
export const ComplexDataExample: React.FC = () => {
    const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: \`4px solid \${category.color}\`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(\`分类 "\${(newItems[toIndex].content as any).name}" 优先级从 \${fromIndex + 1} 调整为 \${toIndex + 1}\`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "ComplexDataExample": `export const ComplexDataExample: React.FC = () => {
  const [categories, setCategories] = useState<AriDragListItem[]>([
        {
            id: 'work',
            content: {
                name: '工作事项',
                count: 5,
                color: '#1890ff'
            }
        },
        {
            id: 'personal', 
            content: {
                name: '个人事项',
                count: 3,
                color: '#52c41a'
            }
        },
        {
            id: 'urgent',
            content: {
                name: '紧急事项', 
                count: 2,
                color: '#ff4d4f'
            }
        }
    ]);

    const renderCategoryItem = (item: AriDragListItem, index: number, isDragging: boolean) => {
        const category = item.content as any;
        
        return (
            <AriContainer 
                padding={20}
                showBorder
                style={{ 
                    backgroundColor: isDragging ? '#f0f9ff' : 'white',
                    borderLeft: \`4px solid \${category.color}\`,
                    transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                }}
            >
                <AriFlex justify="space-between" align="center">
                    <AriFlex space={16} align="center">
                        <div 
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: category.color
                            }}
                        />
                        <AriFlex vertical space={4}>
                            <AriTypography variant="body" style={{ fontWeight: 600 }}>
                                {category.name}
                            </AriTypography>
                            <AriTypography variant="caption" color="secondary">
                                优先级: #{index + 1}
                            </AriTypography>
                        </AriFlex>
                    </AriFlex>
                    
                    <AriFlex space={12} align="center">
                        <AriTag color="default">
                            {category.count} 项
                        </AriTag>
                        <AriIcon 
                            name="arrow_upward" 
                            size="sm" 
                            style={{ 
                                opacity: isDragging ? 1 : 0.3,
                                transition: 'opacity 0.2s'
                            }} 
                        />
                    </AriFlex>
                </AriFlex>
            </AriContainer>
        );
    };

    const handleSortChange = (newItems: AriDragListItem[], fromIndex: number, toIndex: number) => {
        setCategories(newItems);
        
        // 模拟API调用保存新顺序
        console.log(\`分类 "\${(newItems[toIndex].content as any).name}" 优先级从 \${fromIndex + 1} 调整为 \${toIndex + 1}\`);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer padding={16} showBorder bgColor="#fafafa">
                <AriTypography variant="caption" color="secondary">
                    拖拽调整分类优先级，实时保存到服务器
                </AriTypography>
            </AriContainer>
            
            <AriContainer width={500}>
                <AriDragList 
                    items={categories}
                    renderItem={renderCategoryItem}
                    onSortChange={handleSortChange}
                    gap="md"
                />
            </AriContainer>
        </AriFlex>
    );
};`,
  },
  "drawer": {
    "BasicDrawer": `export const BasicDrawer: React.FC = () => {
const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <AriButton onClick={showDrawer}>打开抽屉</AriButton>
      <AriDrawer
        title="基础抽屉"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </>
  );
};`,
    "PlacementDrawer": `export const PlacementDrawer: React.FC = () => {
const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<AriDrawerPlacement>('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (value: string | number | boolean) => {
    setPlacement(value as AriDrawerPlacement);
  };

  return (
    <>
      <AriFlex space={8} align="center">
        <AriRadio.Group value={placement} onChange={onChange}>
          <AriRadio value="top">top</AriRadio>
          <AriRadio value="right">right</AriRadio>
          <AriRadio value="bottom">bottom</AriRadio>
          <AriRadio value="left">left</AriRadio>
        </AriRadio.Group>
        <AriButton onClick={showDrawer}>打开抽屉</AriButton>
      </AriFlex>
      <AriDrawer
        title="不同位置的抽屉"
        placement={placement}
        onClose={onClose}
        visible={visible}
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </>
  );
};

export const CustomContentDrawer: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <AriButton onClick={showDrawer}>打开自定义页脚抽屉</AriButton>
            <AriDrawer
                title="自定义页脚"
                placement="right"
                onClose={onClose}
                visible={visible}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <AriButton onClick={onClose} style={{ marginRight: 8 }}>
                            取消
                        </AriButton>
                        <AriButton color="primary" onClick={onClose}>
                            确认
                        </AriButton>
                    </div>
                }
            >
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
            </AriDrawer>
        </>
    );
};


export const ContainerDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: 300,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ccc',
        padding: 20,
        textAlign: 'center',
      }}
    >
      渲染在当前容器
      <AriButton onClick={showDrawer} style={{ marginLeft: 16 }}>打开抽屉</AriButton>
      <AriDrawer
        title="容器内抽屉"
        placement="right"
        onClose={onClose}
        visible={visible}
        getContainer={() => containerRef.current!} // 指定容器
        style={{ position: 'absolute' }} // 需要设置 position: absolute
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </div>
  );
};
`,
    "CustomContentDrawer": `export const CustomContentDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <AriButton onClick={showDrawer}>打开自定义页脚抽屉</AriButton>
            <AriDrawer
                title="自定义页脚"
                placement="right"
                onClose={onClose}
                visible={visible}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <AriButton onClick={onClose} style={{ marginRight: 8 }}>
                            取消
                        </AriButton>
                        <AriButton color="primary" onClick={onClose}>
                            确认
                        </AriButton>
                    </div>
                }
            >
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
            </AriDrawer>
        </>
    );
};`,
    "ContainerDrawer": `export const ContainerDrawer: React.FC = () => {
const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: 300,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ccc',
        padding: 20,
        textAlign: 'center',
      }}
    >
      渲染在当前容器
      <AriButton onClick={showDrawer} style={{ marginLeft: 16 }}>打开抽屉</AriButton>
      <AriDrawer
        title="容器内抽屉"
        placement="right"
        onClose={onClose}
        visible={visible}
        getContainer={() => containerRef.current!} // 指定容器
        style={{ position: 'absolute' }} // 需要设置 position: absolute
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </div>
  );
};
`,
  },
  "empty": {
    "BasicEmpty": `export const BasicEmpty: React.FC = () => (
  <AriEmpty />
);`,
    "CustomIconDemo": `export const CustomIconDemo: React.FC = () => (
  <AriEmpty
        icon="face"
        description="没有找到相关内容"
    />
);`,
    "CustomImageDemo": `export const CustomImageDemo: React.FC = () => (
  <AriEmpty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description="暂无数据"
    />
);`,
  },
  "fixed-size-grid": {
    "BasicGrid": `export const BasicGrid: React.FC = () => (
  <AriContainer style={{ height: '400px',overflowY: 'auto' }}>
        <AriFixedSizeGrid
            columnCount={4}
            columnWidth={100}
            rowHeight={100}
            height="100%"
            width="100%"
            itemCount={20}
        >
            {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * 4 + columnIndex;
                // 只渲染在 itemCount 范围内的单元格
                if (index >= 20) return null;

                return (
                    <div style={{ ...style, padding: '8px' }}>
                        <div style={{ ...cellStyle, height: '100%' }}>
                            <AriTypography variant='h3' value={String(index + 1)} />
                        </div>
                    </div>
                );
            }}
        </AriFixedSizeGrid>
    </AriContainer>
);`,
    "CustomSizeGrid": `export const CustomSizeGrid: React.FC = () => (
<AriContainer style={{ height: "350px" }}>
    <AriFixedSizeGrid
      columnCount={3}
      columnWidth={150}
      rowHeight={120}
      height="100%"
      width="100%"
      itemCount={15}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * 3 + columnIndex;
        if (index >= 15) return null;

        return (
          <div style={{ ...style, padding: "8px" }}>
            <div style={{ ...cellStyle, height: "100%" }}>
              <AriTypography variant="h3" value={"项目 " + (index + 1)} />
            </div>
          </div>
        );
      }}
    </AriFixedSizeGrid>
  </AriContainer>
);`,
    "OverscanDemo": `export const OverscanDemo: React.FC = () => (
<AriContainer style={{ height: "300px" }}>
    <AriFixedSizeGrid
      columnCount={4}
      columnWidth={100}
      rowHeight={80}
      height="100%"
      width="100%"
      overscanRowsCount={50}
      itemCount={500}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * 4 + columnIndex;
        if (index >= 500) return null;

        return (
          <div style={{ ...style, padding: "6px" }}>
            <div style={{ ...cellStyle, height: "100%" }}>
              <AriTypography variant="h3" value={String(index + 1)} />
            </div>
          </div>
        );
      }}
    </AriFixedSizeGrid>
  </AriContainer>
);`,
    "EventDemo": `export const EventDemo: React.FC = () => {
  const [scrollInfo, setScrollInfo] = React.useState({ scrollTop: 0, scrollLeft: 0 });
    const [visibleRange, setVisibleRange] = React.useState({ start: 0, end: 0 });

    return (
      <AriContainer style={{ height: "450px" }}>
        <AriTypography
          variant="h3"
          value={\`滚动位置: 上 \${scrollInfo.scrollTop}px, 左 \${scrollInfo.scrollLeft}px\`}
        />
        <AriTypography
          variant="h3"
          value={\`可见项目: \${visibleRange.start} - \${visibleRange.end}\`}
        />

        <AriFixedSizeGrid
          columnCount={5}
          columnWidth={80}
          rowHeight={80}
          height="300px"
          width="100%"
          itemCount={100}
          onScroll={(scrollTop, scrollLeft) =>
            setScrollInfo({ scrollTop, scrollLeft })
          }
          onItemsRendered={(params) =>
            setVisibleRange({
              start: params.visibleStartIndex,
              end: params.visibleStopIndex,
            })
          }
        >
          {({ columnIndex, rowIndex, style }) => {
            const index = rowIndex * 5 + columnIndex;
            if (index >= 100) return null;

            return (
              <div style={{ ...style, padding: "5px" }}>
                <div style={{ ...cellStyle, height: "100%" }}>
                  <AriTypography variant="h3" value={String(index + 1)} />
                </div>
              </div>
            );
          }}
        </AriFixedSizeGrid>
      </AriContainer>
    );
};`,
  },
  "flex": {
    "BasicFlex": `export const BasicFlex: React.FC = () => (
  <AriFlex>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
    </AriFlex>
);`,
    "VerticalFlex": `export const VerticalFlex: React.FC = () => (
  <AriFlex vertical>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
    </AriFlex>
);`,
    "SizeFlex": `export const SizeFlex: React.FC = () => (
  <>
        <AriFlex space={8} vertical>
            <AriFlex space={8} showBorder borderStyle='dashed'>
                <AriButton label="间距 8px" />
                <AriButton label="间距 8px" />
            </AriFlex>
            <AriFlex space={16} showBorder borderStyle='dashed'>
                <AriButton label="间距 16px" />
                <AriButton label="间距 16px" />
            </AriFlex>
            <AriFlex space="2em" showBorder borderStyle='dashed'>
                <AriButton label="间距 2em" />
                <AriButton label="间距 2em" />
            </AriFlex>
        </AriFlex>
    </>
);`,
    "AlignFlex": `export const AlignFlex: React.FC = () => (
  <>
        <AriFlex align="flex-start" showBorder borderStyle='dashed'>
            <AriButton label="顶部对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="顶部对齐" />
        </AriFlex>
        <AriFlex align="center" showBorder borderStyle='dashed'>
            <AriButton label="居中对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="居中对齐" />
        </AriFlex>
        <AriFlex align="baseline" showBorder borderStyle='dashed'>
            <AriButton label="基线对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="基线对齐" />
        </AriFlex>
    </>
);`,
    "JustifyFlex": `export const JustifyFlex: React.FC = () => (
  <>
        <AriFlex space={8} vertical>
            <AriFlex justify="flex-start" showBorder borderStyle='dashed'>
                <AriButton label="左对齐" />
                <AriButton label="start" />
            </AriFlex>
            <AriFlex justify="center" showBorder borderStyle='dashed'>
                <AriButton label="居中对齐" />
                <AriButton label="center" />
            </AriFlex>
            <AriFlex justify="flex-end" showBorder borderStyle='dashed'>
                <AriButton label="右对齐" />
                <AriButton label="end" />
            </AriFlex>
            <AriFlex justify="space-between" showBorder borderStyle='dashed'>
                <AriButton label="两端对齐" />
                <AriButton label="space-between" />
            </AriFlex>
            <AriFlex justify="space-around" showBorder borderStyle='dashed'>
                <AriButton label="环绕对齐" />
                <AriButton label="space-around" />
            </AriFlex>
        </AriFlex>
    </>
);`,
    "WrapFlex": `export const WrapFlex: React.FC = () => (
  <AriFlex wrap showBorder borderStyle='dashed'>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
        <AriButton label="按钮4" />
        <AriButton label="按钮5" />
    </AriFlex>
);`,
    "FlexItemDemo": `export const FlexItemDemo: React.FC = () => (
  <>
        <AriFlex space={8} vertical height={400} flexItem={{ index: 1, overflow: 'auto' }}>
            <AriButton label="按钮" />
            <div style={{ padding: '8px', backgroundColor: '#f0f0f0', height: "600px" }}>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
            </div>
            <AriButton label="按钮" />
        </AriFlex>
    </>
);`,
  },
  "form": {
    "BasicForm": `export const BasicForm: React.FC = () => (
  <AriForm
        labelAlign="right"
        labelWidth={100}
        initialValues={{ user: { name: 'John' } }}
        rules={{
            user: {
                name: { required: true, message: '请输入用户名' },
                email: [
                    { required: true, message: '请输入邮箱' },
                    { pattern: /^\S+@\S+$/, message: '邮箱格式不正确' }
                ]
            }
        }}
        onFinish={(values) => {
            console.log('表单提交成功:', values);
        }}
        onFinishFailed={(errorFields, values) => {
            console.log('表单校验失败:', errorFields);
        }}
    >
        <AriFormItem name="user.name" label="用户名">
            <AriInput />
        </AriFormItem>
        <AriFormItem name="user.email" label="邮箱">
            <AriInput />
        </AriFormItem>
        <AriFormItem>
            <AriButton htmlType="submit">提交</AriButton>
        </AriFormItem>
    </AriForm>
);`,
    "LayoutDemo": `export const LayoutDemo: React.FC = () => (
  <>
        <AriFlex vertical space={24}>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平布局（默认）' />
                <AriForm layout="horizontal" style={{ maxWidth: 600 }} labelWidth={80}>
                    <AriFormItem label="用户名" required>
                        <AriInput placeholder="请输入用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码" required>
                        <AriInput type="password" placeholder="请输入密码" />
                    </AriFormItem>
                    <AriFormItem wrapperCol={{ offset: 80 }}>
                        <AriButton color="primary">提交</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='垂直布局' />
                <AriForm layout="vertical" style={{ maxWidth: 600 }}>
                    <AriFormItem label="用户名" required>
                        <AriInput placeholder="请输入用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码" required>
                        <AriInput type="password" placeholder="请输入密码" />
                    </AriFormItem>
                    <AriFormItem>
                        <AriButton color="primary">提交</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='内联布局' />
                <AriForm layout="inline">
                    <AriFormItem label="用户名">
                        <AriInput placeholder="用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码">
                        <AriInput type="password" placeholder="密码" />
                    </AriFormItem>
                    <AriFormItem>
                        <AriButton color="primary">登录</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
        </AriFlex>
    </>
);`,
    "ValidationDemo": `export const ValidationDemo: React.FC = () => {
  const handleFinish = (values: any) => {
        console.log('表单值:', values);
        AriMessage.success('表单验证通过');
    };

    const handleFinishFailed = (errorFields: any, values: any) => {
        console.log('验证失败:', errorFields);
        AriMessage.danger('表单验证失败');
    };

    return (
      <AriForm
        layout="horizontal"
        labelWidth={100}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        style={{ maxWidth: 600 }}
      >
        <AriFormItem
          label="用户名"
          name="username"
          rules={[
            { required: true, message: "请输入用户名" },
            { min: 3, max: 20, message: "用户名长度必须在3-20个字符之间" },
          ]}
          help={<AriIcon name="info" />}
          helpTooltip="用户名将用于登录系统，请谨慎选择"
        >
          <AriInput placeholder="请输入用户名" />
        </AriFormItem>

        <AriFormItem
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "邮箱格式不正确",
            },
          ]}
        >
          <AriInput placeholder="请输入邮箱" />
        </AriFormItem>

        <AriFormItem
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码长度不能少于6个字符" },
          ]}
        >
          <AriInput type="password" placeholder="请输入密码" />
        </AriFormItem>

        <AriFormItem
          label="确认密码"
          name="confirmPassword"
          rules={[
            { required: true, message: "请确认密码" },
            {
              validator: (value, values) =>
                value === values.password ? undefined : "两次输入的密码不一致",
            },
          ]}
        >
          <AriInput type="password" placeholder="请再次输入密码" />
        </AriFormItem>

        <AriFormItem wrapperCol={{ offset: 100 }}>
          <AriButton color="primary" htmlType="submit">
            提交
          </AriButton>
        </AriFormItem>
      </AriForm>
    );
};`,
    "NestedFieldsDemo": `export const NestedFieldsDemo: React.FC = () => {
  const initialValues = {
        user: {
            name: 'John Doe',
            contact: {
                email: 'john@example.com',
                phone: '13800138000'
            }
        },
        address: {
            city: '北京',
            street: '朝阳区'
        }
    };

    const handleFinish = (values: any) => {
        console.log('表单值:', values);
        AriMessage.success('提交成功');
    };

    return (
        <AriForm
            layout="horizontal"
            labelWidth={120}
            initialValues={initialValues}
            onFinish={handleFinish}
            style={{ maxWidth: 600 }}
        >
            <AriFormItem label="用户名" name="user.name" required>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="邮箱" name="user.contact.email" required>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="电话" name="user.contact.phone">
                <AriInput />
            </AriFormItem>

            <AriFormItem label="城市" name={['address', 'city']}>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="街道地址" name={['address', 'street']}>
                <AriInput />
            </AriFormItem>

            <AriFormItem wrapperCol={{ offset: 120 }}>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};`,
    "CustomLayoutDemo": `export const CustomLayoutDemo: React.FC = () => (
  <AriForm style={{ maxWidth: 700 }}>
        {/* 标准布局 */}
        <AriFormItem
            label="默认布局"
            labelCol={6}
            wrapperCol={18}
        >
            <AriInput placeholder="标签占6列，控件占18列" />
        </AriFormItem>

        {/* 自定义标签宽度 */}
        <AriFormItem
            label="窄标签"
            labelCol={4}
            wrapperCol={20}
        >
            <AriInput placeholder="标签占4列，控件占20列" />
        </AriFormItem>

        {/* 宽标签 */}
        <AriFormItem
            label="宽标签文本示例"
            labelCol={8}
            wrapperCol={16}
        >
            <AriInput placeholder="标签占8列，控件占16列" />
        </AriFormItem>

        {/* 带偏移量的控件 */}
        <AriFormItem
            labelCol={6}
            wrapperCol={{ span: 18, offset: 6 }}
        >
            <AriButton color="primary">提交</AriButton>
        </AriFormItem>
    </AriForm>
);`,
    "DirectionDemo": `export const DirectionDemo: React.FC = () => (
  <>
        <AriForm layout="vertical" style={{ marginBottom: '20px' }}>
            <AriFormItem label="垂直布局">
                <AriTextInput />
            </AriFormItem>
            <AriFormItem label="示例输入">
                <AriTextInput />
            </AriFormItem>
        </AriForm>

        <AriForm layout="horizontal">
            <AriFormItem label="水平布局">
                <AriTextInput />
            </AriFormItem>
            <AriFormItem label="示例输入">
                <AriTextInput />
            </AriFormItem>
        </AriForm>
    </>
);`,
    "ResponsiveDemo": `export const ResponsiveDemo: React.FC = () => (
  <AriForm layout="vertical">
        <AriRow gutter={16}>
            <AriCol xs={24} sm={24} md={12} lg={12} xl={12}>
                <AriFormItem label="姓" required>
                    <AriInput placeholder="请输入姓" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={24} md={12} lg={12} xl={12}>
                <AriFormItem label="名" required>
                    <AriInput placeholder="请输入名" />
                </AriFormItem>
            </AriCol>
        </AriRow>

        <AriFormItem label="邮箱" required>
            <AriInput placeholder="请输入邮箱" />
        </AriFormItem>

        <AriRow gutter={16}>
            <AriCol xs={24} sm={24} md={8} lg={8} xl={8}>
                <AriFormItem label="省/自治区/直辖市">
                    <AriInput placeholder="省份" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={8} xl={8}>
                <AriFormItem label="城市">
                    <AriInput placeholder="城市" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={8} xl={8}>
                <AriFormItem label="区县">
                    <AriInput placeholder="区县" />
                </AriFormItem>
            </AriCol>
        </AriRow>

        <AriFormItem label="详细地址">
            <AriInput placeholder="街道门牌信息" />
        </AriFormItem>

        <AriFormItem>
            <AriButton color="primary">提交</AriButton>
        </AriFormItem>
    </AriForm>
);`,
    "UseRefDemo": `export const UseRefDemo: React.FC = () => {
  // 创建表单ref
    const formRef = useRef<AriFormInstance>(null);

    // 表单方法调用示例
    const handleReset = () => {
        formRef.current?.resetFields();
    };

    const handleFill = () => {
        formRef.current?.setFieldsValue({
            username: 'admin',
            password: '123456'
        });
    };

    const handleGetValues = () => {
        const values = formRef.current?.getFieldsValue();
        console.log('当前表单值：', values);
        alert(JSON.stringify(values, null, 2));
    };

    const handleValidate = () => {
        formRef.current?.validate().then((res) => {
            if (res.isValid) {
                AriMessage.success('表单验证通过');
            } else {
                AriMessage.danger('表单验证失败');
            }
        })
    }

    return (
        <>
            <AriForm
                ref={formRef}
                initialValues={{ username: '' }}
                onFinish={(values) => {
                    console.log('表单提交:', values);
                }}
            >
                <AriFormItem name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
                    <AriInput placeholder="请输入用户名" />
                </AriFormItem>
                <AriFormItem name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
                    <AriInput type="password" placeholder="请输入密码" />
                </AriFormItem>
                <AriFormItem>
                    <AriButton htmlType="submit" color="primary">提交</AriButton>
                </AriFormItem>
            </AriForm>

            <AriFlex style={{ marginTop: '20px' }}>
                <AriButton onClick={handleReset}>重置表单</AriButton>
                <AriButton onClick={handleFill}>填充数据</AriButton>
                <AriButton onClick={handleGetValues}>获取表单值</AriButton>
                <AriButton onClick={handleValidate}>验证表单</AriButton>
            </AriFlex>
        </>
    );
};


export const UseHookDemo: React.FC = () => {
    // 自定义表单字段组件
    const CustomFormField: React.FC = () => {
        // 使用useForm获取表单上下文
        const form = useForm();

        // 使用form实例直接操作表单
        const handleClick = () => {
            // 设置一个新值
            form.setFieldValue('email', \`usename@example.com\`);
        };

        return (
            <div>
                <AriButton onClick={handleClick}>根据用户名生成邮箱</AriButton>
            </div>
        );
    };

    return (
        <AriFlex vertical space={24}>
            <AriTypography variant='h4' value='个人资料' />
            <AriForm layout="horizontal" labelCol={6} wrapperCol={18}>
                <AriFormItem label="用户名" name="username">
                    <AriInput placeholder="请输入用户名" />
                </AriFormItem>

                <AriFormItem label="邮箱" name="email">
                    <AriInput placeholder="请输入邮箱" />
                </AriFormItem>

                <AriFormItem >
                    <CustomFormField />
                </AriFormItem>

                <AriFormItem >
                    <AriButton type="default" htmlType="submit">保存</AriButton>
                </AriFormItem>
            </AriForm>
        </AriFlex>
    );
};


`,
    "UseHookDemo": `export const UseHookDemo: React.FC = () => {
  // 自定义表单字段组件
    const CustomFormField: React.FC = () => {
        // 使用useForm获取表单上下文
        const form = useForm();

        // 使用form实例直接操作表单
        const handleClick = () => {
            // 设置一个新值
            form.setFieldValue('email', \`usename@example.com\`);
        };

        return (
            <div>
                <AriButton onClick={handleClick}>根据用户名生成邮箱</AriButton>
            </div>
        );
    };

    return (
        <AriFlex vertical space={24}>
            <AriTypography variant='h4' value='个人资料' />
            <AriForm layout="horizontal" labelCol={6} wrapperCol={18}>
                <AriFormItem label="用户名" name="username">
                    <AriInput placeholder="请输入用户名" />
                </AriFormItem>

                <AriFormItem label="邮箱" name="email">
                    <AriInput placeholder="请输入邮箱" />
                </AriFormItem>

                <AriFormItem >
                    <CustomFormField />
                </AriFormItem>

                <AriFormItem >
                    <AriButton type="default" htmlType="submit">保存</AriButton>
                </AriFormItem>
            </AriForm>
        </AriFlex>
    );
};`,
  },
  "grid": {
    "BasicGrid": `export const BasicGrid: React.FC = () => (
  <>
        <AriFlex space={8} vertical>
            <AriRow className="grid-demo-row">
                <AriCol span={24}><div className="grid-demo-box">col-24</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={12}><div className="grid-demo-box">col-12</div></AriCol>
                <AriCol span={12}><div className="grid-demo-box">col-12</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
            </AriRow>
        </AriFlex>

    </>
);`,
    "GutterDemo": `export const GutterDemo: React.FC = () => (
  <>
        <AriFlex space={8} vertical>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平间距(16px)' />
                <AriRow gutter={16} className="grid-demo-row">
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平垂直间距(16px, 24px)' />
                <AriRow gutter={[16, 24]} className="grid-demo-row">
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                </AriRow>
            </AriFlex>
        </AriFlex>
    </>
);`,
    "ResponsiveDemo": `export const ResponsiveDemo: React.FC = () => (
  <>
        <AriRow className="grid-demo-row">
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
        </AriRow>

        <AriRow style={{ marginTop: 16 }} className="grid-demo-row">
            <AriCol xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }}>
                <div className="grid-demo-box">对象配置</div>
            </AriCol>
            <AriCol xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8, offset: 4 }}>
                <div className="grid-demo-box">对象配置</div>
            </AriCol>
        </AriRow>
    </>
);`,
    "AlignmentDemo": `export const AlignmentDemo: React.FC = () => (
  <>
        <AriFlex space={8} vertical>
            <AriTypography variant='h4' value='水平对齐' />
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="flex-start"' />
                <AriRow justify="flex-start" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="center"' />
                <AriRow justify="center" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="flex-end"' />
                <AriRow justify="flex-end" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="space-around"' />
                <AriRow justify="space-between" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="space-around"' />
                <AriRow justify="space-around" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>  
            <AriTypography variant='h4' value='垂直对齐' />
            <AriFlex vertical>
                <AriRow align="top" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='align="middle"' />
                <AriRow align="middle" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='align="bottom"' />
                <AriRow align="bottom" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
        </AriFlex>
    </>
);`,
    "OffsetOrderDemo": `export const OffsetOrderDemo: React.FC = () => (
  <>
        <AriContainer>
            <AriTypography variant='h4' value='栅格偏移' />
            <AriRow className="grid-demo-row">
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8} offset={8}><div className="grid-demo-box">col-8 offset-8</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={6} offset={6}><div className="grid-demo-box">col-6 offset-6</div></AriCol>
                <AriCol span={6} offset={6}><div className="grid-demo-box">col-6 offset-6</div></AriCol>
            </AriRow>
        </AriContainer>

        <AriContainer style={{ marginTop: 24 }}>
            <AriTypography variant='h4' value='栅格排序' />
            <AriRow className="grid-demo-row">
                <AriCol span={6} push={18}><div className="grid-demo-box">col-6 push-18</div></AriCol>
                <AriCol span={18} pull={6}><div className="grid-demo-box">col-18 pull-6</div></AriCol>
            </AriRow>
        </AriContainer>

        <AriContainer style={{ marginTop: 24 }}>
            <AriTypography variant='h4' value='Flex 排序' />
            <AriRow className="grid-demo-row">
                <AriCol span={6} order={4}><div className="grid-demo-box">1 col-6 order-4</div></AriCol>
                <AriCol span={6} order={3}><div className="grid-demo-box">2 col-6 order-3</div></AriCol>
                <AriCol span={6} order={2}><div className="grid-demo-box">3 col-6 order-2</div></AriCol>
                <AriCol span={6} order={1}><div className="grid-demo-box">4 col-6 order-1</div></AriCol>
            </AriRow>
        </AriContainer>
    </>
);`,
  },
  "icon": {
    "BasicIcon": `export const BasicIcon: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" />
            <AriIcon name="edit" />
            <AriIcon name="delete" />
        </AriFlex>
    </>
);`,
    "ColorDemo": `export const ColorDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" color="#1890ff" />
            <AriIcon name="star" color="#52c41a" />
            <AriIcon name="star" color="#f5222d" />
            <AriIcon name="star" color="#722ed1" />
        </AriFlex>
    </>
);`,
    "SizeDemo": `export const SizeDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" size="xs" />
            <AriIcon name="star" size="sm" />
            <AriIcon name="star" />
            <AriIcon name="star" size="lg" />
            <AriIcon name="star" size="xl" />
            <AriIcon name="star" size="xxl" />
        </AriFlex>

    </>
);`,
    "StrokeWidthDemo": `export const StrokeWidthDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" size='xl' strokeWidth={0} />
            <AriIcon name="star" size='xl' strokeWidth={1} />
            <AriIcon name="star" size='xl' strokeWidth={20} />
        </AriFlex>
    </>
);`,
    "StyleVariantDemo": `export const StyleVariantDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" styleVariant="clickable" />
            <AriIcon name="star" styleVariant="filled" />
            <AriIcon name="star" styleVariant="outlined" />
            <AriIcon name="star" styleVariant="circular" />
        </AriFlex>
    </>
);`,
    "AnimationDemo": `export const AnimationDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" animation="spinning" />
            <AriIcon name="star" animation="pulse" />
            <AriIcon name="star" animation="shake" />
        </AriFlex>
    </>
);`,
    "StateDemo": `export const StateDemo: React.FC = () => (
  <>
        <AriFlex space={16}>
            <AriIcon name="star" />
            <AriIcon name="star" state="disabled" />
            <AriIcon name="star" state="loading" />
            <AriIcon name="star" state="error" />
            <AriIcon name="star" state="success" />
        </AriFlex>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            注意：error状态有震动动画和红色，success状态有弹跳动画和绿色
        </p>
    </>
);`,
  },
  "image": {
    "BackgroundDemo": `export const BackgroundDemo: React.FC = () => (
  <AriContainer style={{ width: '300px', height: '200px' }}>
        <AriImage
            fileName="example.png"
            usage="background"
        />
    </AriContainer>
);`,
    "BasicImage": `export const BasicImage: React.FC = () => (
  <AriImage
        fileName="example.png"
        usage="image"
        style={{ width: '200px' }}
    />
);`,
    "FallbackDemo": `export const FallbackDemo: React.FC = () => (
  <AriFlex space={16} vertical justify='center'>
        <AriImage
            fileName="non-existent-image.png"
            usage="image"
            style={{ width: '200px', height: '150px' }}
            fallback={
                <AriContainer style={{ 
                    width: '200px', 
                    height: '150px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    border: '1px dashed #d9d9d9',
                    borderRadius: '4px'
                }}>
                    <AriFlex vertical justify="center">
                        <AriIcon name="image" style={{ fontSize: '32px', color: '#999' }} />
                        <AriTypography variant='caption' value='图片加载失败' />
                    </AriFlex>
                </AriContainer>
            }
        />
        
        <AriImage
            fileName="another-missing-image.jpg"
            usage="image"
            style={{ width: '200px', height: '150px' }}
            fallback="图片无法显示"
        />
    </AriFlex>
);`,
    "PlaceholderDemo": `export const PlaceholderDemo: React.FC = () => (
  <AriImage
        fileName="large-image.jpg"
        usage="image"
        style={{ width: '300px' }}
        placeholder
    />
);`,
    "PreviewDemo": `export const PreviewDemo: React.FC = () => (
  <AriImage
        fileName="example.png"
        usage="image"
        style={{ width: '250px' }}
        preview
    />
);`,
    "SrcDemo": `export const SrcDemo: React.FC = () => (
  <AriFlex space={16}>
        <AriImage
            src="https://picsum.photos/200"
            usage="image"
            style={{ width: '200px' }}
        />
        
        <AriImage
            src="https://picsum.photos/300/200"
            usage="background"
            style={{ width: '300px', height: '200px' }}
        />
    </AriFlex>
);`,
  },
  "input": {
    "BasicInput": `export const BasicInput: React.FC = () => {
  const [value, setValue] = useState('');

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="请输入内容"
                value={value}
                onChange={setValue}
            />
            <div>当前输入值: {value}</div>
        </AriFlex>
    );
};`,
    "InputWithLabel": `export const InputWithLabel: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput label="用户名" placeholder="请输入用户名" />
            <AriInput label="邮箱地址" placeholder="请输入邮箱" />
        </AriFlex>
    );
};`,
    "InputWithPrefixSuffix": `export const InputWithPrefixSuffix: React.FC = () => {
  return (
      <AriFlex vertical space={16}>
        <AriInput
          placeholder="带前缀的输入框"
          prefix={<AriIcon name="search" />}
        />
        <AriInput
          placeholder="带后缀的输入框"
          suffix={<AriIcon name="search" />}
        />
        <AriInput placeholder="带前缀和后缀的输入框" prefix="￥" suffix="RMB" />
      </AriFlex>
    );
};`,
    "InputWithCount": `export const InputWithCount: React.FC = () => {
  const [value, setValue] = useState('');

    return (
        <AriFlex vertical space={16}>
            <AriInput
                placeholder="限制最多输入20个字符"
                showCount
                maxLength={20}
            />
            <AriInput
                placeholder="字数统计"
                showCount
                value={value}
                onChange={setValue}
            />
            <AriInput.TextArea
                placeholder="限制最多输入100个字符的多行文本"
                showCount
                maxLength={100}
            />
        </AriFlex>
    );
};`,
    "InputWithClear": `export const InputWithClear: React.FC = () => {
  const [value, setValue] = useState('可以点击右侧图标清除');

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="请输入内容"
                allowClear
                value={value}
                onChange={setValue}
            />
            <AriInput.Search
                placeholder="搜索框也可以清除"
                allowClear
            />
        </AriFlex>
    );
};`,
    "InputTypes": `export const InputTypes: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput type="text" placeholder="文本输入框" />
            <AriInput type="password" placeholder="密码输入框" />
            <AriInput type="email" placeholder="邮箱输入框" />
            <AriInput type="tel" placeholder="电话号码输入框" />
        </AriFlex>
    );
};`,
    "VariantDemp": `export const VariantDemp: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput placeholder="有边框" variant="outlined" />
            <AriInput placeholder="无边框" variant="borderless" />
            <AriInput placeholder="通过 bordered 关闭边框" bordered={false} />
            <AriInput placeholder="填充背景" variant="filled" />
            <AriInput placeholder="下划线" variant="underlined" />
        </AriFlex>
    );
}

export const NoHoverFocusEffectDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="关闭 hover/focus 悬浮效果的输入框"
                enableHoverFocusEffect={false}
            />
            <AriInput.TextArea
                placeholder="关闭 hover/focus 悬浮效果的文本域"
                rows={4}
                enableHoverFocusEffect={false}
            />
        </AriFlex>
    );
}

export const AutoCompleteDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriTypography variant='h4' value="常用自动完成属性示例" />
            <AriInput type="text" placeholder="姓名" autoComplete="name" />
            <AriInput type="email" placeholder="电子邮箱" autoComplete="email" />
            <AriInput type="tel" placeholder="电话号码" autoComplete="tel" />
            <AriInput type="text" placeholder="用户名" autoComplete="username" />
            <AriInput type="password" placeholder="当前密码" autoComplete="current-password" />
            <AriInput type="password" placeholder="新密码" autoComplete="new-password" />
            <AriInput type="text" placeholder="地址" autoComplete="street-address" />
            <AriInput type="text" placeholder="禁用自动完成" autoComplete="off" />
        </AriFlex>
    );
};`,
    "NoHoverFocusEffectDemo": `export const NoHoverFocusEffectDemo: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput
                placeholder="关闭 hover/focus 悬浮效果的输入框"
                enableHoverFocusEffect={false}
            />
            <AriInput.TextArea
                placeholder="关闭 hover/focus 悬浮效果的文本域"
                rows={4}
                enableHoverFocusEffect={false}
            />
        </AriFlex>
    );
}

export const AutoCompleteDemo: React.FC = () => {
    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriTypography variant='h4' value="常用自动完成属性示例" />
            <AriInput type="text" placeholder="姓名" autoComplete="name" />
            <AriInput type="email" placeholder="电子邮箱" autoComplete="email" />
            <AriInput type="tel" placeholder="电话号码" autoComplete="tel" />
            <AriInput type="text" placeholder="用户名" autoComplete="username" />
            <AriInput type="password" placeholder="当前密码" autoComplete="current-password" />
            <AriInput type="password" placeholder="新密码" autoComplete="new-password" />
            <AriInput type="text" placeholder="地址" autoComplete="street-address" />
            <AriInput type="text" placeholder="禁用自动完成" autoComplete="off" />
        </AriFlex>
    );
};`,
    "AutoCompleteDemo": `export const AutoCompleteDemo: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriTypography variant='h4' value="常用自动完成属性示例" />
            <AriInput type="text" placeholder="姓名" autoComplete="name" />
            <AriInput type="email" placeholder="电子邮箱" autoComplete="email" />
            <AriInput type="tel" placeholder="电话号码" autoComplete="tel" />
            <AriInput type="text" placeholder="用户名" autoComplete="username" />
            <AriInput type="password" placeholder="当前密码" autoComplete="current-password" />
            <AriInput type="password" placeholder="新密码" autoComplete="new-password" />
            <AriInput type="text" placeholder="地址" autoComplete="street-address" />
            <AriInput type="text" placeholder="禁用自动完成" autoComplete="off" />
        </AriFlex>
    );
};`,
    "DisabledInput": `export const DisabledInput: React.FC = () => {
  return (
        <AriFlex vertical space={16}>
            <AriInput placeholder="普通输入框" />
            <AriInput placeholder="禁用状态" disabled />
        </AriFlex>
    );
};`,
    "TextAreaDemo": `export const TextAreaDemo: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.TextArea
                placeholder="基础文本域"
                rows={4}
                allowClear
                showCount
            />
            <AriInput.TextArea
                placeholder="自适应高度文本域"
                autoSize={{ minRows: 2, maxRows: 6 }}

            />
            <AriInput.TextArea
                placeholder="禁用状态"
                disabled
                allowClear
            />
            <AriInput.TextArea
                placeholder="通过 bordered 关闭边框"
                bordered={false}
            />
            <AriInput.TextArea
                placeholder="通过 variant 使用无边框"
                variant="borderless"
            />
        </AriFlex>
    );
};`,
    "BasicSearchInput": `export const BasicSearchInput: React.FC = () => {
  const [value, setValue] = useState('');

    const handleSearch = (searchValue: string) => {
        console.log('搜索:', searchValue);
    };

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.Search
                placeholder="请输入搜索内容"
                value={value}
                onChange={setValue}
                onSearch={handleSearch}
            />
            <AriInput.Search
                placeholder="加载中的搜索框"
                loading={true}
                onSearch={handleSearch}
            />
        </AriFlex>
    );
};`,
    "CustomSearchButton": `export const CustomSearchButton: React.FC = () => {
  return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.Search
                placeholder="默认搜索按钮"
                onSearch={(value) => console.log('搜索:', value)}
            />
            <AriInput.Search
                placeholder="自定义搜索按钮"
                enterButton="搜索"
                onSearch={(value) => console.log('搜索:', value)}
            />
            <AriInput.Search
                placeholder="自定义元素按钮"
                enterButton={<span>🔍</span>}
                onSearch={(value) => console.log('搜索:', value)}
            />
        </AriFlex>
    );
};`,
    "BasicInputNumber": `export const BasicInputNumber: React.FC = () => {
  const [value, setValue] = useState<number>(3);

    return (
        <AriFlex vertical space={16}>
            <AriInput.Number
                value={value}
                onChange={setValue}
                allowClear
            />
            <div>当前值: {value}</div>
            <AriInput.Number
                disabled
            />
        </AriFlex>
    );
};

export const InputNumberRange: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.Number min={1} max={10} defaultValue={5} />
            <div>范围限制: 1-10</div>
        </AriFlex>
    );
};

export const InputNumberStep: React.FC = () => {
    return (
        <AriFlex space={16} vertical>
            <AriInput.Number step={1} defaultValue={0} />
            <AriInput.Number step={0.1} defaultValue={0} precision={1} />
            <AriInput.Number step={0.01} defaultValue={0} precision={2} />
        </AriFlex>
    );
};

export const BasicTextListInput: React.FC = () => {
    const [value, setValue] = useState<string[]>(['React', 'Vue', 'Angular']);

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.TextList
                label="技术栈"
                value={value}
                onChange={setValue}
                placeholder="请输入技术名称"
            />
            <div>当前列表: {JSON.stringify(value)}</div>
        </AriFlex>
    );
};

export const TextListWithEvents: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (message: string) => {
        setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="待办事项"
                defaultValue={['学习 React', '写技术博客']}
                onItemChange={(index, value, all) => addLog(\`修改项 \${index}: \${value}\`)}
                onItemAdd={(index, all) => addLog(\`添加项 \${index}\`)}
                onItemRemove={(index, deleted, all) => addLog(\`删除项: \${deleted}\`)}
                onDragSort={(from, to, all) => addLog(\`移动项: \${from} -> \${to}\`)}
            />
            
            <div style={{ marginTop: 16 }}>
                <h4>操作日志：</h4>
                <div style={{ height: 150, overflow: 'auto', border: '1px solid #ccc', padding: 8 }}>
                    {logs.map((log, index) => (
                        <div key={index} style={{ fontSize: '12px', margin: '2px 0' }}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </AriFlex>
    );
};

export const TextListWithLimits: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="最多3项的列表"
                maxItems={3}
                defaultValue={['项目1', '项目2']}
                addText="添加项目"
            />
            
            <AriInput.TextList
                label="至少2项的列表"
                minItems={2}
                defaultValue={['必需项1', '必需项2', '可选项']}
            />
        </AriFlex>
    );
};

export const TextListVariants: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="禁用状态"
                disabled
                defaultValue={['不可编辑项1', '不可编辑项2']}
            />
            
            <AriInput.TextList
                label="禁用拖拽排序"
                allowDrag={false}
                defaultValue={['固定顺序1', '固定顺序2', '固定顺序3']}
            />
            
            <AriInput.TextList
                label="允许空项"
                allowEmpty
                defaultValue={['有内容的项', '']}
                itemPlaceholder="可以为空"
            />
        </AriFlex>
    );
};

export const TextListSizes: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="小尺寸"
                size="sm"
                defaultValue={['小尺寸项1', '小尺寸项2']}
            />
            
            <AriInput.TextList
                label="默认尺寸"
                size="default"
                defaultValue={['默认尺寸项1', '默认尺寸项2']}
            />
            
            <AriInput.TextList
                label="大尺寸"
                size="lg"
                defaultValue={['大尺寸项1', '大尺寸项2']}
            />
        </AriFlex>
    );
};
`,
    "InputNumberRange": `export const InputNumberRange: React.FC = () => {
  return (
        <AriFlex vertical space={16}>
            <AriInput.Number min={1} max={10} defaultValue={5} />
            <div>范围限制: 1-10</div>
        </AriFlex>
    );
};`,
    "InputNumberStep": `export const InputNumberStep: React.FC = () => {
  return (
        <AriFlex space={16} vertical>
            <AriInput.Number step={1} defaultValue={0} />
            <AriInput.Number step={0.1} defaultValue={0} precision={1} />
            <AriInput.Number step={0.01} defaultValue={0} precision={2} />
        </AriFlex>
    );
};`,
    "BasicTextListInput": `export const BasicTextListInput: React.FC = () => {
  const [value, setValue] = useState<string[]>(['React', 'Vue', 'Angular']);

    return (
        <AriFlex vertical space={16} style={{ width: '100%' }}>
            <AriInput.TextList
                label="技术栈"
                value={value}
                onChange={setValue}
                placeholder="请输入技术名称"
            />
            <div>当前列表: {JSON.stringify(value)}</div>
        </AriFlex>
    );
};

export const TextListWithEvents: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (message: string) => {
        setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="待办事项"
                defaultValue={['学习 React', '写技术博客']}
                onItemChange={(index, value, all) => addLog(\`修改项 \${index}: \${value}\`)}
                onItemAdd={(index, all) => addLog(\`添加项 \${index}\`)}
                onItemRemove={(index, deleted, all) => addLog(\`删除项: \${deleted}\`)}
                onDragSort={(from, to, all) => addLog(\`移动项: \${from} -> \${to}\`)}
            />
            
            <div style={{ marginTop: 16 }}>
                <h4>操作日志：</h4>
                <div style={{ height: 150, overflow: 'auto', border: '1px solid #ccc', padding: 8 }}>
                    {logs.map((log, index) => (
                        <div key={index} style={{ fontSize: '12px', margin: '2px 0' }}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </AriFlex>
    );
};

export const TextListWithLimits: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="最多3项的列表"
                maxItems={3}
                defaultValue={['项目1', '项目2']}
                addText="添加项目"
            />
            
            <AriInput.TextList
                label="至少2项的列表"
                minItems={2}
                defaultValue={['必需项1', '必需项2', '可选项']}
            />
        </AriFlex>
    );
};

export const TextListVariants: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="禁用状态"
                disabled
                defaultValue={['不可编辑项1', '不可编辑项2']}
            />
            
            <AriInput.TextList
                label="禁用拖拽排序"
                allowDrag={false}
                defaultValue={['固定顺序1', '固定顺序2', '固定顺序3']}
            />
            
            <AriInput.TextList
                label="允许空项"
                allowEmpty
                defaultValue={['有内容的项', '']}
                itemPlaceholder="可以为空"
            />
        </AriFlex>
    );
};

export const TextListSizes: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="小尺寸"
                size="sm"
                defaultValue={['小尺寸项1', '小尺寸项2']}
            />
            
            <AriInput.TextList
                label="默认尺寸"
                size="default"
                defaultValue={['默认尺寸项1', '默认尺寸项2']}
            />
            
            <AriInput.TextList
                label="大尺寸"
                size="lg"
                defaultValue={['大尺寸项1', '大尺寸项2']}
            />
        </AriFlex>
    );
};
`,
    "TextListWithEvents": `export const TextListWithEvents: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
    
    const addLog = (message: string) => {
        setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };

    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="待办事项"
                defaultValue={['学习 React', '写技术博客']}
                onItemChange={(index, value, all) => addLog(\`修改项 \${index}: \${value}\`)}
                onItemAdd={(index, all) => addLog(\`添加项 \${index}\`)}
                onItemRemove={(index, deleted, all) => addLog(\`删除项: \${deleted}\`)}
                onDragSort={(from, to, all) => addLog(\`移动项: \${from} -> \${to}\`)}
            />
            
            <div style={{ marginTop: 16 }}>
                <h4>操作日志：</h4>
                <div style={{ height: 150, overflow: 'auto', border: '1px solid #ccc', padding: 8 }}>
                    {logs.map((log, index) => (
                        <div key={index} style={{ fontSize: '12px', margin: '2px 0' }}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </AriFlex>
    );
};

export const TextListWithLimits: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="最多3项的列表"
                maxItems={3}
                defaultValue={['项目1', '项目2']}
                addText="添加项目"
            />
            
            <AriInput.TextList
                label="至少2项的列表"
                minItems={2}
                defaultValue={['必需项1', '必需项2', '可选项']}
            />
        </AriFlex>
    );
};

export const TextListVariants: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="禁用状态"
                disabled
                defaultValue={['不可编辑项1', '不可编辑项2']}
            />
            
            <AriInput.TextList
                label="禁用拖拽排序"
                allowDrag={false}
                defaultValue={['固定顺序1', '固定顺序2', '固定顺序3']}
            />
            
            <AriInput.TextList
                label="允许空项"
                allowEmpty
                defaultValue={['有内容的项', '']}
                itemPlaceholder="可以为空"
            />
        </AriFlex>
    );
};

export const TextListSizes: React.FC = () => {
    return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="小尺寸"
                size="sm"
                defaultValue={['小尺寸项1', '小尺寸项2']}
            />
            
            <AriInput.TextList
                label="默认尺寸"
                size="default"
                defaultValue={['默认尺寸项1', '默认尺寸项2']}
            />
            
            <AriInput.TextList
                label="大尺寸"
                size="lg"
                defaultValue={['大尺寸项1', '大尺寸项2']}
            />
        </AriFlex>
    );
};
`,
    "TextListWithLimits": `export const TextListWithLimits: React.FC = () => {
  return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="最多3项的列表"
                maxItems={3}
                defaultValue={['项目1', '项目2']}
                addText="添加项目"
            />
            
            <AriInput.TextList
                label="至少2项的列表"
                minItems={2}
                defaultValue={['必需项1', '必需项2', '可选项']}
            />
        </AriFlex>
    );
};`,
    "TextListVariants": `export const TextListVariants: React.FC = () => {
  return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="禁用状态"
                disabled
                defaultValue={['不可编辑项1', '不可编辑项2']}
            />
            
            <AriInput.TextList
                label="禁用拖拽排序"
                allowDrag={false}
                defaultValue={['固定顺序1', '固定顺序2', '固定顺序3']}
            />
            
            <AriInput.TextList
                label="允许空项"
                allowEmpty
                defaultValue={['有内容的项', '']}
                itemPlaceholder="可以为空"
            />
        </AriFlex>
    );
};`,
    "TextListSizes": `export const TextListSizes: React.FC = () => {
  return (
        <AriFlex vertical space={16}>
            <AriInput.TextList
                label="小尺寸"
                size="sm"
                defaultValue={['小尺寸项1', '小尺寸项2']}
            />
            
            <AriInput.TextList
                label="默认尺寸"
                size="default"
                defaultValue={['默认尺寸项1', '默认尺寸项2']}
            />
            
            <AriInput.TextList
                label="大尺寸"
                size="lg"
                defaultValue={['大尺寸项1', '大尺寸项2']}
            />
        </AriFlex>
    );
};`,
  },
  "layout": {
    "BasicLayout": `export const BasicLayout: React.FC = () => {
  const cs = useCss("");
    return (
        <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
            <AriLayout
                left={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%' }}>左侧区域</AriContainer>}
                center={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg', 'active')}\`, height: '100%' }}>中间区域</AriContainer>}
                right={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg',)}\`, height: '100%' }}>右侧区域</AriContainer>}
            />
        </AriContainer>
    )
}

export const CustomLayout: React.FC = () => {
    const cs = useCss("");
    const [visibleAreas, setVisibleAreas] = useState(['left', 'center', 'right']);

    const handleVisibilityChange = (areas: string[]) => {
        setVisibleAreas(areas);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center', 'right'])}
                    color={visibleAreas.length === 3 ? 'primary' : 'default'}>
                    显示全部
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center'])}
                    color={visibleAreas.length === 1 && visibleAreas[0] === 'center' ? 'primary' : 'default'}>
                    仅显示中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('left') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示左侧和中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center', 'right'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('right') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示中间和右侧
                </AriButton>
            </AriFlex>

            <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
                <AriLayout
                    key={visibleAreas.join('-')}
                    defaultVisibleAreas={visibleAreas as AriLayoutArea[]}
                    onAreaVisibilityChange={setVisibleAreas as (areas: AriLayoutArea[]) => void}
                    left={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%' }}>左侧区域</AriContainer>}
                    center={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg', 'active')}\`, height: '100%' }}>中间区域</AriContainer>}
                    right={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%' }}>右侧区域</AriContainer>}
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "CustomLayout": `export const CustomLayout: React.FC = () => {
  const cs = useCss("");
    const [visibleAreas, setVisibleAreas] = useState(['left', 'center', 'right']);

    const handleVisibilityChange = (areas: string[]) => {
        setVisibleAreas(areas);
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8}>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center', 'right'])}
                    color={visibleAreas.length === 3 ? 'primary' : 'default'}>
                    显示全部
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center'])}
                    color={visibleAreas.length === 1 && visibleAreas[0] === 'center' ? 'primary' : 'default'}>
                    仅显示中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['left', 'center'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('left') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示左侧和中间
                </AriButton>
                <AriButton
                    onClick={() => handleVisibilityChange(['center', 'right'])}
                    color={visibleAreas.length === 2 && visibleAreas.includes('right') && visibleAreas.includes('center') ? 'primary' : 'default'}>
                    显示中间和右侧
                </AriButton>
            </AriFlex>

            <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
                <AriLayout
                    key={visibleAreas.join('-')}
                    defaultVisibleAreas={visibleAreas as AriLayoutArea[]}
                    onAreaVisibilityChange={setVisibleAreas as (areas: AriLayoutArea[]) => void}
                    left={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%' }}>左侧区域</AriContainer>}
                    center={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg', 'active')}\`, height: '100%' }}>中间区域</AriContainer>}
                    right={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%' }}>右侧区域</AriContainer>}
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "ContextLayout": `export const ContextLayout: React.FC = () => {
  const cs = useCss("");

    const ControlPanel: React.FC = () => {
        // 使用布局钩子获取控制方法
        const { setArea, isVisible } = useLayout();

        return (
            <div style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg', 'active')}\`, height: '100%' }}>
                <AriButton
                    onClick={() => setArea('left')}
                    label={isVisible('left') ? "隐藏左侧面板" : "显示左侧面板"}
                />

                <AriButton
                    onClick={() => setArea('right')}
                    label={isVisible('right') ? "隐藏右侧面板" : "显示右侧面板"}
                />
            </div>
        );
    };
    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='h4' value="使用 LayoutContext 控制区域可见性" />
            <AriContainer style={{ height: '300px', border: '1px solid #eee' }}>
                <AriLayout
                    left={
                        <AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%', padding: '16px' }}>
                            左侧区域
                        </AriContainer>
                    }
                    leftWidth='250px'
                    center={<ControlPanel />}
                    right={<AriContainer className="layout-demo-box" style={{ backgroundColor: \`\${cs.getCssVarName('color', 'bg')}\`, height: '100%', padding: '16px' }}>右侧区域</AriContainer>}
                    rightWidth='250px'
                />
            </AriContainer>
        </AriFlex>
    )

}`,
  },
  "link": {
    "BasicLink": `export const BasicLink: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs">默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand">品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success">成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning">警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger">危险链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="info">信息链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="muted">静音链接</AriLink>
    </AriFlex>
);`,
    "DisabledLink": `export const DisabledLink: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" disabled>禁用的默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" disabled>禁用的品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" disabled>禁用的成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning" disabled>禁用的警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger" disabled>禁用的危险链接</AriLink>
    </AriFlex>
);`,
    "UnderlineLink": `export const UnderlineLink: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" underline>带下划线的默认链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" underline>带下划线的品牌色链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" underline>带下划线的成功链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="warning" underline>带下划线的警告链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="danger" underline>带下划线的危险链接</AriLink>
    </AriFlex>
);`,
    "SizeLink": `export const SizeLink: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" size="small">小尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs">默认尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" size="large">大尺寸链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" size="extra-large">超大尺寸链接</AriLink>
    </AriFlex>
);`,
    "IconLink": `export const IconLink: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriLink href="https://aries-react.dev/docs" icon="link">带左侧图标的链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" icon="link" iconPosition="right">带右侧图标的链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="brand" icon="external-link" target="_blank">外部链接</AriLink>
        <AriLink href="https://aries-react.dev/docs" type="success" icon="download">下载链接</AriLink>
    </AriFlex>
);`,
    "BlockLink": `export const BlockLink: React.FC = () => (
  <AriContainer style={{ width: '100%', maxWidth: '300px' }}>
        <AriFlex space={16} vertical>
            <AriTypography variant='h4' value="块级链接示例" />
            <AriLink href="https://aries-react.dev/docs" block>默认块级链接</AriLink>
            <AriLink href="https://aries-react.dev/docs" type="brand" block icon="link">带图标的块级链接</AriLink>
        </AriFlex>
    </AriContainer>
);`,
  },
  "list": {
    "BasicList": `export const BasicList: React.FC = () => {
  const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发",
        "拥有完善的文档和示例"
    ];

    return (
        <AriList
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};`,
    "BorderedList": `export const BorderedList: React.FC = () => {
  const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发",
        "拥有完善的文档和示例"
    ];

    return (
        <AriList
            bordered
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};`,
    "SizeList": `export const SizeList: React.FC = () => {
  const data = ["列表项内容"];

    return (
        <AriFlex space={16} vertical>
            <AriList
                size="sm"
                bordered
                header="小尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
            <AriList
                size="md"
                bordered
                header="中尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
            <AriList
                size="lg"
                bordered
                header="大尺寸列表"
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
        </AriFlex>
    );
};`,
    "HeaderFooterList": `export const HeaderFooterList: React.FC = () => {
  const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发"
    ];

    return (
        <AriList
            bordered
            header={<div style={{ fontWeight: 'bold' }}>列表标题</div>}
            footer={<div>列表底部</div>}
            dataSource={data}
            renderItem={(item) => <div>{item}</div>}
        />
    );
};`,
    "EmptyList": `export const EmptyList: React.FC = () => {
  return (
        <AriFlex space={16} vertical>
            <AriList 
                bordered
                header="默认空状态"
                dataSource={[]}
            />
            <AriList 
                bordered
                header="自定义空状态"
                dataSource={[]}
                emptyMessage={
                    <AriEmpty 
                        description="暂无列表数据"
                        image="https://placehold.co/96x96/png"
                    />
                }
            />
        </AriFlex>
    );
};`,
    "LoadingList": `export const LoadingList: React.FC = () => {
  const [loading, setLoading] = useState(true);
    const data = [
        "Aries Kit 是面向 React 的前端基础库",
        "同时提供组件、hooks 和基础交互能力",
        "支持响应式设计、主题定制与组合式开发"
    ];

    return (
        <AriFlex space={16} vertical>
            <AriButton onClick={() => setLoading(!loading)}>
                {loading ? '停止加载' : '开始加载'}
            </AriButton>
            <AriList
                bordered
                loading={loading}
                dataSource={data}
                renderItem={(item) => <div>{item}</div>}
            />
        </AriFlex>
    );
};`,
    "ListItemDemo": `export const ListItemDemo: React.FC = () => {
  const data = [1, 2, 3];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem 
                    key={item}
                    split={index < data.length - 1}
                    actions={[
                        <AriButton key="edit" type="text">编辑</AriButton>,
                        <AriButton key="delete" type="text">删除</AriButton>
                    ]}
                    extra={<AriTag>标签 {item}</AriTag>}
                >
                    <AriFlex align="center" space={8}>
                        <AriAvatar>{item}</AriAvatar>
                        <div>列表项 {item} 的内容</div>
                    </AriFlex>
                </AriListItem>
            ))}
        </AriList>
    );
};

export const ComplexList: React.FC = () => {
    const data = [
        {
            title: 'Aries Kit',
            description: '面向 React 的前端基础库，提供组件、hooks 与基础交互能力',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['React', 'Hooks']
        },
        {
            title: '组件与交互',
            description: '覆盖常用组件场景，支持响应式布局、主题定制与细粒度交互',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['UI', '组件']
        },
        {
            title: '主题与样式',
            description: '内置图标、颜色、排版与样式变量，方便建立一致的前端体验',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['Theme', 'Styles']
        }
    ];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem
                    key={item.title}
                    split={index < data.length - 1}
                    actions={[
                        <AriButton key="view" type="text">查看</AriButton>,
                        <AriButton key="edit" type="text">编辑</AriButton>
                    ]}
                    extra={
                        <AriImage
                            width={120}
                            height={80}
                            src={item.avatar}
                            alt={item.title}
                        />
                    }
                >
                    <AriTypography variant='h3' style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</AriTypography>
                    <AriTypography variant='h3' color='secondary'>{item.description}</AriTypography>
                    <div style={{ marginTop: '8px' }}>
                        {item.tags.map(tag => (
                            <AriTag key={tag} style={{ marginRight: '8px' }}>{tag}</AriTag>
                        ))}
                    </div>
                </AriListItem>
            ))}
        </AriList>
    );
};
`,
    "ComplexList": `export const ComplexList: React.FC = () => {
  const data = [
        {
            title: 'Aries Kit',
            description: '面向 React 的前端基础库，提供组件、hooks 与基础交互能力',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['React', 'Hooks']
        },
        {
            title: '组件与交互',
            description: '覆盖常用组件场景，支持响应式布局、主题定制与细粒度交互',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['UI', '组件']
        },
        {
            title: '主题与样式',
            description: '内置图标、颜色、排版与样式变量，方便建立一致的前端体验',
            avatar: 'https://placehold.co/96x96/png',
            tags: ['Theme', 'Styles']
        }
    ];

    return (
        <AriList bordered>
            {data.map((item, index) => (
                <AriListItem
                    key={item.title}
                    split={index < data.length - 1}
                    actions={[
                        <AriButton key="view" type="text">查看</AriButton>,
                        <AriButton key="edit" type="text">编辑</AriButton>
                    ]}
                    extra={
                        <AriImage
                            width={120}
                            height={80}
                            src={item.avatar}
                            alt={item.title}
                        />
                    }
                >
                    <AriTypography variant='h3' style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</AriTypography>
                    <AriTypography variant='h3' color='secondary'>{item.description}</AriTypography>
                    <div style={{ marginTop: '8px' }}>
                        {item.tags.map(tag => (
                            <AriTag key={tag} style={{ marginRight: '8px' }}>{tag}</AriTag>
                        ))}
                    </div>
                </AriListItem>
            ))}
        </AriList>
    );
};
`,
  },
  "menu": {
    "BasicMenu": `export const BasicMenu: React.FC = () => {
  const items = [
        { key: '1', label: '菜单项1', icon: 'home' },
        { key: '2', label: '菜单项2', icon: 'person' },
        { key: '3', label: '菜单项3', icon: 'settings' }
    ];

    return (
        <AriMenu
            items={items}
            defaultSelectedKey="1"
            onSelect={(key, item) => console.log('selected:', key, item)}
        />
    );
};`,
    "SubMenu": `export const SubMenu: React.FC = () => {
  const items = [
        {
            key: '1',
            label: '菜单1',
            icon: 'folder',
            children: [
                { key: '1-1', label: '子项1-1', icon: 'home' },
                { key: '1-2', label: '子项1-2' }
            ]
        },
        {
            key: '2',
            label: '菜单2',
            icon: 'folder',
            children: [
                { key: '2-1', label: '子项2-1' },
                { key: '2-2', label: '子项2-2' }
            ]
        }
    ];

    return (
        <AriMenu
            items={items}
            defaultExpandedKeys={['1']}
            mode="vertical"
        />
    );
};`,
    "ModeDemo": `export const ModeDemo: React.FC = () => {
  const items = [
        { key: '1', label: '菜单项1', icon: 'home' },
        { key: '2', label: '菜单项2', icon: 'person' },
        { key: '3', label: '菜单项3', icon: 'settings' }
    ];

    return (
        <>
            <AriContainer style={{ marginBottom: '20px' }}>
                <h4>水平模式</h4>
                <AriMenu items={items} mode="horizontal" />
            </AriContainer>

            <AriContainer>
                <h4>垂直模式</h4>
                <AriMenu items={items} mode="vertical" />
            </AriContainer>
        </>
    );
};`,
    "IconAnimationDemo": `export const IconAnimationDemo: React.FC = () => {
  const items = [
        {
            key: 'sync',
            label: '同步中（旋转）',
            icon: 'sync',
            fillIcon: 'sync',
            iconAnimation: 'spinning' as const,
            iconState: 'loading' as const,
            meta: <AriTypography variant='caption'>处理中</AriTypography>,
        },
        {
            key: 'success',
            label: '同步完成',
            icon: 'check_circle',
            fillIcon: 'check_circle',
            iconState: 'success' as const,
            meta: <AriTypography variant='caption'>已完成</AriTypography>,
        },
        {
            key: 'warning',
            label: '同步失败（抖动）',
            icon: 'warning',
            fillIcon: 'warning',
            iconAnimation: 'shake' as const,
            iconState: 'error' as const,
            meta: <AriTypography variant='caption'>需重试</AriTypography>,
        }
    ];

    return (
        <AriMenu
            items={items}
            defaultSelectedKey='sync'
        />
    );
};`,
    "ArrowPositionDemo": `export const ArrowPositionDemo: React.FC = () => {
  const items = [
        {
            key: '1',
            label: '菜单1',
            icon: 'folder',
            children: [
                { key: '1-1', label: '子项1-1' },
                { key: '1-2', label: '子项1-2' }
            ]
        },
        {
            key: '2',
            label: '菜单2',
            icon: 'folder',
            children: [
                { key: '2-1', label: '子项2-1' },
                { key: '2-2', label: '子项2-2' }
            ]
        }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriContainer>
                <AriTypography variant='caption'>右侧箭头（默认）</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="right" />
            </AriContainer>
            <AriContainer>
                <AriTypography variant='caption'>左侧箭头</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="left" />
            </AriContainer>
            <AriContainer>
                <AriTypography variant='caption'>无箭头</AriTypography>
                <AriMenu items={items} defaultExpandedKeys={['1']} expandIconPosition="none" />
            </AriContainer>
        </AriFlex>
    );
};`,
    "GroupDemo": `export const GroupDemo: React.FC = () => {
  const items = [
        {
            key: 'group1',
            label: '系统功能',
            isGroup: true
        },
        {
            key: 'dashboard',
            label: '仪表盘',
            icon: 'dashboard'
        },
        {
            key: 'settings',
            label: '系统设置',
            icon: 'settings'
        },
        {
            key: 'group2',
            label: '内容管理',
            isGroup: true
        },
        {
            key: 'article',
            label: '文章管理',
            icon: 'article'
        },
        {
            key: 'comment',
            label: '评论管理',
            icon: 'comment'
        }
    ];

    return (
        <AriMenu items={items} defaultSelectedKey="dashboard" />
    );
};`,
    "SessionLikeMenu": `export const SessionLikeMenu: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('s-1');
    const [pinnedKeys, setPinnedKeys] = useState<string[]>([]);
    const [renamingKey, setRenamingKey] = useState<string>('');
    const [renameValue, setRenameValue] = useState('');
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number; key: string } | null>(null);
    const [titleMap, setTitleMap] = useState<Record<string, string>>({});

    const sessions = [
        { key: 's-1', title: '机械臂材质方案：PBR + 烘焙流程', time: '今天 10:12' },
        { key: 's-2', title: '低模角色风格探索', time: '昨天 18:22' },
        { key: 's-3', title: '工业控制台重建与导出', time: '02/08 09:18' },
    ];

    const sortedSessions = useMemo(() => {
        return [...sessions].sort((a, b) => {
            const aPinned = pinnedKeys.includes(a.key);
            const bPinned = pinnedKeys.includes(b.key);
            if (aPinned === bPinned) return 0;
            return aPinned ? -1 : 1;
        });
    }, [pinnedKeys]);

    const startRename = (key: string) => {
        const target = sessions.find(item => item.key === key);
        if (!target) return;
        setRenamingKey(key);
        setRenameValue(titleMap[key] || target.title);
    };

    const commitRename = () => {
        if (!renamingKey) return;
        const value = renameValue.trim();
        if (value) {
            setTitleMap(prev => ({ ...prev, [renamingKey]: value }));
        }
        setRenamingKey('');
        setRenameValue('');
    };

    return (
        <AriContainer style={{ position: 'relative', maxWidth: 360 }}>
            <AriTypography variant='caption'>
                标题左侧自适应省略，右侧时间固定；Hover 显示图钉/删除；右键菜单支持重命名。
            </AriTypography>
            <AriContainer style={{ height: 8 }} />
            <AriMenu
                selectedKey={selectedKey}
                items={sortedSessions.map((session) => {
                    const isPinned = pinnedKeys.includes(session.key);
                    const isRenaming = renamingKey === session.key;
                    const title = titleMap[session.key] || session.title;
                    return {
                        key: session.key,
                        label: isRenaming ? (
                            <AriInput
                                value={renameValue}
                                autoFocus
                                onChange={setRenameValue}
                                onBlur={commitRename}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        commitRename();
                                    }
                                    if (event.key === 'Escape') {
                                        event.preventDefault();
                                        setRenamingKey('');
                                        setRenameValue('');
                                    }
                                }}
                            />
                        ) : (
                            title
                        ),
                        meta: isRenaming ? null : <AriTypography variant='caption'>{session.time}</AriTypography>,
                        actions: isRenaming ? null : (
                            <AriFlex align='center' space={4}>
                                <AriButton
                                    type='text'
                                    size='sm'
                                    icon={isPinned ? 'push_pin_fill' : 'push_pin'}
                                    onClick={() => {
                                        setPinnedKeys(prev =>
                                            prev.includes(session.key)
                                                ? prev.filter(key => key !== session.key)
                                                : [session.key, ...prev]
                                        );
                                    }}
                                />
                                <AriButton
                                    type='text'
                                    size='sm'
                                    icon='delete'
                                    onClick={() => console.log('delete:', session.key)}
                                />
                            </AriFlex>
                        ),
                        showActionsOnHover: true,
                        onContextMenu: (event) => {
                            event.preventDefault();
                            setContextMenu({ x: event.clientX, y: event.clientY, key: session.key });
                        },
                        onClick: () => setSelectedKey(session.key),
                    };
                })}
                onSelect={(key) => setSelectedKey(key)}
            />

            {contextMenu ? (
                <AriContainer
                    style={{
                        position: 'fixed',
                        left: contextMenu.x,
                        top: contextMenu.y,
                        zIndex: 999,
                        minWidth: 180,
                    }}
                    onClick={(event) => event.stopPropagation()}
                >
                    <AriMenu
                        items={[
                            {
                                key: 'rename',
                                icon: 'edit',
                                label: '重新命名',
                                onClick: () => {
                                    startRename(contextMenu.key);
                                    setContextMenu(null);
                                },
                            }
                        ]}
                    />
                </AriContainer>
            ) : null}
        </AriContainer>
    );
};
`,
  },
  "message": {
    "BasicMessage": `export const BasicMessage: React.FC = () => {
  return (
        <AriContainer>
            <AriFlex space={16}>
                <AriButton
                    label="显示主要信息"
                    onClick={() => {
                        AriMessage.primary('这是一条主要信息');
                    }}
                />
                <AriButton
                    label="显示成功信息"
                    onClick={() => {
                        AriMessage.success('这是一条成功信息');
                    }}
                />
                <AriButton
                    label="显示警告信息"
                    onClick={() => {
                        AriMessage.warning('这是一条警告信息');
                    }}
                />
                <AriButton
                    label="显示错误信息"
                    onClick={() => {
                        AriMessage.error('这是一条错误信息');
                    }}
                />
                <AriButton
                    label="显示提示信息"
                    onClick={() => {
                        AriMessage.info('这是一条提示信息');
                    }}
                />
            </AriFlex>
        </AriContainer>
    );
}

export const DurationDemo: React.FC = () => {
    return (
        <AriContainer>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <AriButton
                    label="显示3秒消息"
                    onClick={() => {
                        AriMessage.info({
                            content: '3秒后自动关闭的消息提示',
                            duration: 3000,
                        })
                    }}
                />
            </div>
        </AriContainer>
    );
};`,
    "DurationDemo": `export const DurationDemo: React.FC = () => {
  return (
        <AriContainer>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <AriButton
                    label="显示3秒消息"
                    onClick={() => {
                        AriMessage.info({
                            content: '3秒后自动关闭的消息提示',
                            duration: 3000,
                        })
                    }}
                />
            </div>
        </AriContainer>
    );
};`,
    "CloseButtonDemo": `export const CloseButtonDemo: React.FC = () => {
  return (
        <AriContainer>
            <AriButton
                label="显示可关闭消息"
                onClick={() => {
                    AriMessage.info({
                        content: '点击右侧按钮可以关闭此消息',
                        showClose: true,
                        autoClose: false,
                        onClose: () => {
                            console.log('消息被关闭');
                        }
                    })
                }}
            />
        </AriContainer>
    );
}



`,
  },
  "modal": {
    "BasicModal": `export const BasicModal: React.FC = () => {
const [visible, setVisible] = useState(false);

  return (
    <>
      <AriButton color="primary" onClick={() => setVisible(true)}>
        打开对话框
      </AriButton>

      <AriModal
        visible={visible}
        title="基础对话框"
        onClose={() => setVisible(false)}
        footer={
            <AriFlex justify="flex-end" align="center" space={8}>
            <AriButton onClick={() => setVisible(false)}>取消</AriButton>
            <AriButton color="primary" onClick={() => setVisible(false)}>
              确定
            </AriButton>
          </AriFlex>
        }
      >
        <p>这是一个基础对话框，展示了标题、内容和底部按钮的用法。</p>
      </AriModal>
    </>
  );
};`,
    "SizeModal": `export const SizeModal: React.FC = () => {
const [visibleXS, setVisibleXS] = useState(false);
  const [visibleSM, setVisibleSM] = useState(false);
  const [visibleDefault, setVisibleDefault] = useState(false);
  const [visibleLG, setVisibleLG] = useState(false);
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleCustom, setVisibleCustom] = useState(false);

  return (
    <AriFlex space={8} wrap>
      <AriButton onClick={() => setVisibleXS(true)}>超小尺寸</AriButton>
      <AriButton onClick={() => setVisibleSM(true)}>小尺寸</AriButton>
      <AriButton onClick={() => setVisibleDefault(true)}>默认尺寸</AriButton>
      <AriButton onClick={() => setVisibleLG(true)}>大尺寸</AriButton>
      <AriButton onClick={() => setVisibleXL(true)}>超大尺寸</AriButton>
      <AriButton onClick={() => setVisibleCustom(true)}>自定义尺寸</AriButton>

      <AriModal
        visible={visibleXS}
        title="超小尺寸对话框"
        width="xs"
        onClose={() => setVisibleXS(false)}
      >
        <p>宽度预设为超小尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleSM}
        title="小尺寸对话框"
        width="sm"
        onClose={() => setVisibleSM(false)}
      >
        <p>宽度预设为小尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleDefault}
        title="默认尺寸对话框"
        width="default"
        onClose={() => setVisibleDefault(false)}
      >
        <p>宽度预设为默认尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleLG}
        title="大尺寸对话框"
        width="lg"
        onClose={() => setVisibleLG(false)}
      >
        <p>宽度预设为大尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleXL}
        title="超大尺寸对话框"
        width="xl"
        onClose={() => setVisibleXL(false)}
      >
        <p>宽度预设为超大尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleCustom}
        title="自定义尺寸对话框"
        width={720}
        onClose={() => setVisibleCustom(false)}
      >
        <p>自定义宽度为720px</p>
      </AriModal>
    </AriFlex>
  );
};`,
    "PositionModal": `export const PositionModal: React.FC = () => {
const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'center' | 'bottom'>('center');

  return (
    <AriFlex vertical space={16}>
          <AriFlex space={8} align="center">
        <AriTypography variant='h3'>对话框位置：</AriTypography>
        <AriSelect
          style={{ width: 120 }}
          value={position}
          onChange={(value) => setPosition(value as any)}
          options={[
            { value: 'top', label: '顶部' },
            { value: 'center', label: '居中' },
            { value: 'bottom', label: '底部' },
          ]}
        />
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title={\`\${position === 'top' ? '顶部' : position === 'center' ? '居中' : '底部'}对话框\`}
        position={position}
        onClose={() => setVisible(false)}
      >
        <p>对话框位置设置为 {position}</p>
      </AriModal>
    </AriFlex>
  );
};

export const FullscreenModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [maximizable, setMaximizable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>启用最大化按钮：</AriTypography>
          <AriSwitch checked={maximizable} onChange={setMaximizable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>默认全屏：</AriTypography>
          <AriSwitch checked={fullscreen} onChange={setFullscreen} />
        </AriFlex>
        <AriButton color='primary' onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="可全屏对话框"
        maximizable={maximizable}
        fullscreen={fullscreen}
        onClose={() => setVisible(false)}
        onFullscreenChange={(isFullscreen) => setFullscreen(isFullscreen)}
      >
        <div style={{ height: 300 }}>
          <p>通过右上角按钮可以切换全屏状态</p>
          <p>也可以通过属性控制全屏状态</p>
        </div>
      </AriModal>
    </AriFlex>
  );
};

export const CustomModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [maskClosable, setMaskClosable] = useState(true);
  const [escClosable, setEscClosable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>点击遮罩关闭：</AriTypography>
          <AriSwitch checked={maskClosable} onChange={setMaskClosable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>ESC键关闭：</AriTypography>
          <AriSwitch checked={escClosable} onChange={setEscClosable} />
        </AriFlex>
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="自定义行为对话框"
        maskClosable={maskClosable}
        escClosable={escClosable}
        onClose={() => setVisible(false)}
      >
        <p>你可以自定义对话框的交互方式</p>
        <p>当前设置：</p>
        <p>- 点击遮罩关闭：{maskClosable ? '开启' : '关闭'}</p>
        <p>- ESC键关闭：{escClosable ? '开启' : '关闭'}</p>
      </AriModal>
    </AriFlex>
  );
};
`,
    "FullscreenModal": `export const FullscreenModal: React.FC = () => {
const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [maximizable, setMaximizable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>启用最大化按钮：</AriTypography>
          <AriSwitch checked={maximizable} onChange={setMaximizable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>默认全屏：</AriTypography>
          <AriSwitch checked={fullscreen} onChange={setFullscreen} />
        </AriFlex>
        <AriButton color='primary' onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="可全屏对话框"
        maximizable={maximizable}
        fullscreen={fullscreen}
        onClose={() => setVisible(false)}
        onFullscreenChange={(isFullscreen) => setFullscreen(isFullscreen)}
      >
        <div style={{ height: 300 }}>
          <p>通过右上角按钮可以切换全屏状态</p>
          <p>也可以通过属性控制全屏状态</p>
        </div>
      </AriModal>
    </AriFlex>
  );
};`,
    "CustomModal": `export const CustomModal: React.FC = () => {
const [visible, setVisible] = useState(false);
  const [maskClosable, setMaskClosable] = useState(true);
  const [escClosable, setEscClosable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>点击遮罩关闭：</AriTypography>
          <AriSwitch checked={maskClosable} onChange={setMaskClosable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>ESC键关闭：</AriTypography>
          <AriSwitch checked={escClosable} onChange={setEscClosable} />
        </AriFlex>
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="自定义行为对话框"
        maskClosable={maskClosable}
        escClosable={escClosable}
        onClose={() => setVisible(false)}
      >
        <p>你可以自定义对话框的交互方式</p>
        <p>当前设置：</p>
        <p>- 点击遮罩关闭：{maskClosable ? '开启' : '关闭'}</p>
        <p>- ESC键关闭：{escClosable ? '开启' : '关闭'}</p>
      </AriModal>
    </AriFlex>
  );
};`,
  },
  "nav": {
    "BasicNav": `export const BasicNav: React.FC = () => {
  const navigate = useNavigate();

    return (
      <AriContainer style={{ position: "relative" }} height={50}>
        <AriNav
          items={[
            { key: "home", label: "首页", path: "/" },
            { key: "products", label: "产品", path: "/products" },
            { key: "about", label: "关于", path: "/about" },
          ]}
          logo={
            <AriImage
              fileName="/assets/logo/logo-circle.svg"
              style={{ width: 16, height: 16 }}
              usage="image"
            />
          }
          navigate={navigate}
        />
      </AriContainer>
    );
};`,
    "DisableHoverNav": `export const DisableHoverNav: React.FC = () => {
  const navigate = useNavigate();

    return (
        <AriContainer style={{ position: 'relative', height: '300px' }}>
            <AriNav
                items={[
                    {
                        key: 'products',
                        label: '产品',
                        children: [
                            {
                                key: 'group1',
                                title: '产品组1',
                                items: [
                                    { key: 'item1', title: '产品1', path: '/item1' },
                                    { key: 'item2', title: '产品2', path: '/item2' }
                                ]
                            }
                        ]
                    },
                    {
                        key: 'services',
                        label: '服务',
                        children: [
                            {
                                key: 'support',
                                title: '技术支持',
                                items: [
                                    { key: 'docs', title: '文档', path: '/docs' },
                                    { key: 'faq', title: 'FAQ', path: '/faq' }
                                ]
                            }
                        ]
                    }
                ]}
                navigate={navigate}
                disableHover={true}
            />
        </AriContainer>

    );
};`,
    "SubMenuNav": `export const SubMenuNav: React.FC = () => {
  const navigate = useNavigate();

    return (
        <AriContainer style={{ position: 'relative', height: '600px'}}>
            <AriNav
                items={[
                    {
                        key: 'products',
                        label: '产品',
                        path: '/products',
                        children: [
                            {
                                key: 'software',
                                title: '软件产品',
                                items: [
                                    { key: 'ide', title: '开发工具', path: '/ide' },
                                    { key: 'cms', title: '内容管理', path: '/cms' }
                                ]
                            },
                            {
                                key: 'hardware',
                                title: '硬件产品',
                                items: [
                                    { key: 'device', title: '智能设备', path: '/device' },
                                    { key: 'accessory', title: '配件', path: '/accessory' }
                                ]
                            }
                        ]
                    },
                    {
                        key: 'solutions',
                        label: '解决方案',
                        path: '/solutions',
                        children: [
                            {
                                key: 'industry',
                                title: '行业方案',
                                items: [
                                    { key: 'finance', title: '金融', path: '/finance' },
                                    { key: 'education', title: '教育', path: '/education' }
                                ]
                            }
                        ]
                    }
                ]}
                navigate={navigate}
            />
        </AriContainer>

    );
};`,
  },
  "notification": {
    "BasicNotification": `export const BasicNotification: React.FC = () => {
const handleClick = () => {
    // 基本使用
    AriNotification.info('这是一条信息通知');
  };

  return (
    <AriButton onClick={handleClick}>显示通知</AriButton>
  );
};`,
    "NotificationTypes": `export const NotificationTypes: React.FC = () => {
return (
    <AriFlex>
      <AriButton onClick={() => AriNotification.info('这是一条信息通知')}>信息通知</AriButton>
      <AriButton onClick={() => AriNotification.success('这是一条成功通知')}>成功通知</AriButton>
      <AriButton onClick={() => AriNotification.warning('这是一条警告通知')}>警告通知</AriButton>
      <AriButton onClick={() => AriNotification.error('这是一条错误通知')}>错误通知</AriButton>
    </AriFlex>
  );
};`,
    "CustomDurationNotification": `export const CustomDurationNotification: React.FC = () => {
const handleNormalClick = () => {
    // 带标题的使用
    AriNotification.success({
      title: '成功',
      content: '操作已成功完成',
      duration: 3000
    });
  };

  const handleLongClick = () => {
    // 配置更长的显示时间
    AriNotification.success({
      title: '成功',
      content: '将在10秒后自动关闭',
      duration: 10000
    });
  };

  const handlePersistentClick = () => {
    // 设置为0则不会自动关闭
    AriNotification.info({
      title: '通知标题',
      content: '这是一个不会自动关闭的通知',
      duration: 0
    });
  };

  return (
    <AriFlex>
      <AriButton onClick={handleNormalClick}>默认时长</AriButton>
      <AriButton onClick={handleLongClick}>较长时长(10s)</AriButton>
      <AriButton onClick={handlePersistentClick}>不自动关闭</AriButton>
    </AriFlex>
  );
};`,
    "CustomPositionNotification": `export const CustomPositionNotification: React.FC = () => {
const positions = [
    'top-right', 'top-left', 'bottom-right', 
    'bottom-left', 'top-center', 'bottom-center'
  ] as const;

  return (
    <AriFlex wrap>
      {positions.map(position => (
        <AriButton 
          key={position}
          onClick={() => AriNotification.warning({
            content: \`位置: \${position}\`,
            position,
          })}
        >
          {position}
        </AriButton>
      ))}
    </AriFlex>
  );
};`,
    "NotificationWithoutClose": `export const NotificationWithoutClose: React.FC = () => {
const handleClick = () => {
    AriNotification({
      title: '通知标题',
      content: '这个通知没有关闭按钮',
      showClose: false,
    });
  };

  return (
    <AriButton onClick={handleClick}>没有关闭按钮的通知</AriButton>
  );
};`,
    "ManualCloseNotification": `export const ManualCloseNotification: React.FC = () => {
const [closeFunc, setCloseFunc] = React.useState<(() => void) | null>(null);
  
  const handleShow = () => {
    // 手动关闭实例
    const { close } = AriNotification.error('这是一个可以手动关闭的错误通知');
    setCloseFunc(() => close);
  };
  
  const handleClose = () => {
    if (closeFunc) {
      closeFunc();
      setCloseFunc(null);
    }
  };
  
  const handleClearAll = () => {
    // 清除所有通知
    AriNotification.clear();
  };

  return (
    <AriFlex>
      <AriButton onClick={handleShow}>显示通知</AriButton>
      <AriButton onClick={handleClose} disabled={!closeFunc}>手动关闭</AriButton>
      <AriButton onClick={handleClearAll}>清除所有通知</AriButton>
    </AriFlex>
  );
};

// 使用Context钩子示例
export const NotificationWithContext: React.FC = () => {
  const ContextExample = () => {
    const notification = useNotification();
    
    return (
      <AriButton 
        onClick={() => notification.info('这是通过useNotification钩子创建的通知')}
      >
        使用Context
      </AriButton>
    );
  };

  return (
    <AriNotificationProvider>
      <ContextExample />
    </AriNotificationProvider>
  );
};
`,
    "NotificationWithContext": `export const NotificationWithContext: React.FC = () => {
const ContextExample = () => {
    const notification = useNotification();
    
    return (
      <AriButton 
        onClick={() => notification.info('这是通过useNotification钩子创建的通知')}
      >
        使用Context
      </AriButton>
    );
  };

  return (
    <AriNotificationProvider>
      <ContextExample />
    </AriNotificationProvider>
  );
};`,
  },
  "pagination": {
    "BasicPagination": `export const BasicPagination: React.FC = () => {
  const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination total={50} current={current} onChange={handleChange} />
    );
};`,
    "SimplePagination": `export const SimplePagination: React.FC = () => {
  const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination total={50} current={current} onChange={handleChange} simple />
    );
};`,
    "JumperPagination": `export const JumperPagination: React.FC = () => {
  const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination
            total={500}
            current={current}
            onChange={handleChange}
            showQuickJumper
        />
    );
};`,
    "SizeChangerPagination": `export const SizeChangerPagination: React.FC = () => {
  const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleChange = (page: number, size: number) => {
        setCurrent(page);
        setPageSize(size);
    };

    const handleSizeChange = (current: number, size: number) => {
        setPageSize(size);
        setCurrent(current);
    };

    return (
        <AriPagination
            total={500}
            current={current}
            pageSize={pageSize}
            onChange={handleChange}
            showSizeChanger
            pageSizeOptions={[10, 20, 50, 100]}
            onShowSizeChange={handleSizeChange}
        />
    );
};`,
    "DisabledPagination": `export const DisabledPagination: React.FC = () => {
  return (
        <AriPagination total={50} disabled />
    );
};`,
    "TotalInfoPagination": `export const TotalInfoPagination: React.FC = () => {
  const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleChange = (page: number, size: number) => {
        setCurrent(page);
        setPageSize(size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer>
                <AriPagination
                    total={85}
                    current={current}
                    pageSize={pageSize}
                    onChange={handleChange}
                    showTotal={(total) => \`共 \${total} 条\`}
                />
            </AriContainer>

            <AriContainer>
                <AriPagination
                    total={85}
                    current={current}
                    pageSize={pageSize}
                    onChange={handleChange}
                    showTotal={(total, range) => \`第 \${range[0]}-\${range[1]} 条，共 \${total} 条\`}
                />
            </AriContainer>
        </AriFlex>
    );
};`,
  },
  "particle": {
    "BasicParticle": `export const BasicParticle: React.FC = () => (
  <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <AriParticle 
            count={150}
            sizeRange={[3, 25]}
            speedRange={[0.1, 0.3]}
            glowIntensity={1.2}
            interactive={true}
            interactionRadius={120}
            alphaRange={[0.4, 0.9]}
            blurAmount={20}
            backgroundColor="#000000"
        >
            <AriCard style={{ 
                maxWidth: 350, 
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
            }}>
                <AriTypography style={{ 
                    color: '#ffffff', 
                    fontSize: '28px', 
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                    marginBottom: '10px'
                }}>
                    五彩斑斓粒子
                </AriTypography>
                <AriTypography style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    canvas五彩斑斓的粒子动画特效，具有虚化发光效果，鼠标交互时粒子会产生排斥运动
                </AriTypography>
            </AriCard>
        </AriParticle>
    </div>
);`,
  },
  "popconfirm": {
    "BasicPopconfirm": `export const BasicPopconfirm: React.FC = () => (
  <AriPopconfirm
        title="确定要执行此操作吗？"
        onConfirm={() => AriMessage.success('已确认')}
        onCancel={() => AriMessage.info('已取消')}
    >
        <AriButton>点击触发</AriButton>
    </AriPopconfirm>
);`,
    "PlacementPopconfirm": `export const PlacementPopconfirm: React.FC = () => {
  const [placement, setPlacement] = useState<AriPopconfirmProps['placement']>('top');

    const placements: AriPopconfirmProps['placement'][] = [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ];

    return (
        <AriFlex vertical space={16}> {/* 使用 space 属性并指定数值 */}
            <AriRadio.Group value={placement} onChange={(val) => setPlacement(val as AriPopconfirmProps['placement'])}> {/* 修正 AriRadioGroup 用法 */}
                {placements.map(p => <AriRadio key={p} value={p as string}>{p}</AriRadio>)}
            </AriRadio.Group>
            <AriPopconfirm
                title={\`当前位置：\${placement}\`}
                placement={placement}
                onConfirm={() => AriMessage.success('已确认')}
            >
                <AriButton>触发位置：{placement}</AriButton>
            </AriPopconfirm>
        </AriFlex>
    );
};

export const ControlledPopconfirm: React.FC = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleConfirm = () => {
        AriMessage.success('已确认');
        setOpen(false);
    };

    const handleCancel = () => {
        AriMessage.info('已取消');
        setOpen(false);
    };

    return (
        <AriFlex space={8} align="center">
            <AriButton ref={buttonRef} onClick={() => setOpen(true)}>
                打开 Popconfirm (受控)
            </AriButton>
            <AriPopconfirm
                title="这是一个受控的 Popconfirm"
                open={open}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                okButtonProps={{ color: 'danger' }}
                cancelButtonProps={{ type: 'outline' }}
                positionTarget={buttonRef}
            >
                <span style={{ display: 'none' }} />
            </AriPopconfirm>
            <span>当前状态: {open ? '打开' : '关闭'}</span>
        </AriFlex>
    );
};

export const CustomButtonPopconfirm: React.FC = () => (
    <AriPopconfirm
        title="自定义按钮文本和属性"
        okText="是的"
        cancelText="不了"
        okButtonProps={{ color: 'success', type: 'outline' }}
        cancelButtonProps={{ color: 'secondary' }}
        onConfirm={() => AriMessage.success('选择了 是的')}
        onCancel={() => AriMessage.info('选择了 不了')}
    >
        <AriButton>自定义按钮</AriButton>
    </AriPopconfirm>
);`,
    "ControlledPopconfirm": `export const ControlledPopconfirm: React.FC = () => {
  const [open, setOpen] = useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleConfirm = () => {
        AriMessage.success('已确认');
        setOpen(false);
    };

    const handleCancel = () => {
        AriMessage.info('已取消');
        setOpen(false);
    };

    return (
        <AriFlex space={8} align="center">
            <AriButton ref={buttonRef} onClick={() => setOpen(true)}>
                打开 Popconfirm (受控)
            </AriButton>
            <AriPopconfirm
                title="这是一个受控的 Popconfirm"
                open={open}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                okButtonProps={{ color: 'danger' }}
                cancelButtonProps={{ type: 'outline' }}
                positionTarget={buttonRef}
            >
                <span style={{ display: 'none' }} />
            </AriPopconfirm>
            <span>当前状态: {open ? '打开' : '关闭'}</span>
        </AriFlex>
    );
};

export const CustomButtonPopconfirm: React.FC = () => (
    <AriPopconfirm
        title="自定义按钮文本和属性"
        okText="是的"
        cancelText="不了"
        okButtonProps={{ color: 'success', type: 'outline' }}
        cancelButtonProps={{ color: 'secondary' }}
        onConfirm={() => AriMessage.success('选择了 是的')}
        onCancel={() => AriMessage.info('选择了 不了')}
    >
        <AriButton>自定义按钮</AriButton>
    </AriPopconfirm>
);`,
    "CustomButtonPopconfirm": `export const CustomButtonPopconfirm: React.FC = () => (
  <AriPopconfirm
        title="自定义按钮文本和属性"
        okText="是的"
        cancelText="不了"
        okButtonProps={{ color: 'success', type: 'outline' }}
        cancelButtonProps={{ color: 'secondary' }}
        onConfirm={() => AriMessage.success('选择了 是的')}
        onCancel={() => AriMessage.info('选择了 不了')}
    >
        <AriButton>自定义按钮</AriButton>
    </AriPopconfirm>
);`,
  },
  "portal": {
    "BasicPortal": `export const BasicPortal: React.FC = () => {
  const [visible, setVisible] = useState(false);

    return (
        <>
            <AriButton onClick={() => setVisible(true)}>显示Portal内容</AriButton>

            {visible && (
                <AriPortal>
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'white',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                            zIndex: 1000
                        }}
                    >
                        <AriFlex vertical space={16}>
                            <AriTypography variant='h3' value='这个内容被传送到了document.body' />
                            <AriButton onClick={() => setVisible(false)}>关闭</AriButton>
                        </AriFlex>
                    </div>
                </AriPortal>
            )}
        </>
    );
};`,
    "CustomContainerPortal": `export const CustomContainerPortal: React.FC = () => {
  const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <AriFlex vertical space={16}>
            <AriButton onClick={() => setVisible(true)}>显示在自定义容器中</AriButton>

            <div
                ref={containerRef}
                style={{
                    position: 'relative',
                    border: '1px dashed #ccc',
                    padding: '20px',
                    minHeight: '150px'
                }}
            >
                <AriTypography variant='h3' value='自定义容器 - Portal内容将显示在这里' />
            </div>

            {visible && (
                <AriPortal container={containerRef.current}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'white',
                            padding: '20px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                            border: '1px solid #eee'
                        }}
                    >
                        <AriFlex vertical space={16}>
                            <AriTypography variant='h3' value='这个内容被传送到了自定义容器' />
                            <AriButton onClick={() => setVisible(false)}>关闭</AriButton>
                        </AriFlex>
                    </div>
                </AriPortal>
            )}
        </AriFlex>
    );
};`,
  },
  "progress": {
    "BasicProgress": `export const BasicProgress: React.FC = () => (
  <AriFlex space={16} vertical>
        <AriProgress percent={30} />
        <AriProgress percent={50} status="active" />
        <AriProgress percent={70} status="exception" />
        <AriProgress percent={100} />
    </AriFlex>
);`,
    "CircleProgress": `export const CircleProgress: React.FC = () => (
  <AriFlex space={24}>
        <AriProgress type="circle" percent={30} />
        <AriProgress type="circle" percent={70} status="exception" />
        <AriProgress type="circle" percent={100} />
    </AriFlex>
);`,
    "DashboardProgress": `export const DashboardProgress: React.FC = () => (
  <AriFlex space={24}>
        <AriProgress type="dashboard" percent={30} />
        <AriProgress type="dashboard" percent={70} gapDegree={30} />
        <AriProgress type="dashboard" percent={100} gapPosition="top" />
    </AriFlex>
);`,
    "SizeDemo": `export const SizeDemo: React.FC = () => (
  <AriFlex vertical space={24}>
        <AriFlex space={24}>
            <AriProgress type="circle" percent={75} size="sm" />
            <AriProgress type="circle" percent={75} size="default" />
            <AriProgress type="circle" percent={75} size="lg" />
        </AriFlex>
        
        <AriFlex vertical space={16}>
            <AriProgress percent={50} size="sm" />
            <AriProgress percent={50} size="default" />
            <AriProgress percent={50} size="lg" strokeWidth={12} />
        </AriFlex>
    </AriFlex>
);`,
    "ColorDemo": `export const ColorDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriProgress percent={40} strokeColor="#1890ff" />
        <AriProgress percent={60} strokeColor="#52c41a" />
        <AriProgress 
            percent={80} 
            strokeColor={{
                from: '#108ee9',
                to: '#87d068',
            }} 
        />
        <AriProgress 
            type="circle" 
            percent={90} 
            strokeColor="#722ed1" 
        />
    </AriFlex>
);`,
    "StepsDemo": `export const StepsDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriProgress percent={60} steps={5} />
        <AriProgress percent={30} steps={10} size="sm" />
        <AriProgress percent={100} steps={10} strokeColor="#52c41a" />
        <AriProgress percent={60} steps={5} strokeColor="#f5222d" status="exception" />
    </AriFlex>
);`,
    "FormatDemo": `export const FormatDemo: React.FC = () => (
  <AriFlex space={24}>
        <AriProgress 
            type="circle" 
            percent={75} 
            format={(percent) => \`\${percent} 天\`} 
        />
        <AriProgress 
            type="dashboard" 
            percent={80} 
            format={() => '优秀'} 
        />
        <AriProgress 
            percent={50} 
            format={(percent) => {
                if (percent < 30) return '低';
                if (percent < 70) return '中';
                return '高';
            }} 
        />
    </AriFlex>
);`,
    "SuccessSegmentDemo": `export const SuccessSegmentDemo: React.FC = () => (
  <AriFlex vertical space={16}>
        <AriProgress percent={60} successPercent={30} />
        <AriProgress percent={70} successPercent={50} strokeRounded />
        <AriProgress type="circle" percent={80} successPercent={40} />
        <AriProgress type="dashboard" percent={90} successPercent={60} />
    </AriFlex>
);`,
  },
  "radio": {
    "BasicRadio": `export const BasicRadio: React.FC = () => {
const [value, setValue] = useState<string>('1');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio
        value="1"
        name="basic-radio"
        checked={value === "1"}
        onChange={handleChange}
        label="选项1"
      />
      <AriRadio
        value="2"
        name="basic-radio"
        checked={value === "2"}
        onChange={handleChange}
        label="选项2"
      />
    </AriFlex>
  );
};

/**
 * 单选框组示例
 * 使用RadioGroup统一管理一组Radio
 */
export const RadioGroupExample: React.FC = () => {
  const [value, setValue] = useState<string>('a');
  
  return (
    <AriRadio.Group
      name="radio-group-example"
      value={value}
      onChange={(val) => setValue(val as string)}
    >
      <AriRadio value="a" label="选项A" />
      <AriRadio value="b" label="选项B" />
      <AriRadio value="c" label="选项C" />
      <AriRadio value="d" label="选项D" disabled />
    </AriRadio.Group>
  );
};

/**
 * 使用options属性创建单选框组
 */
export const RadioGroupWithOptions: React.FC = () => {
  const [value, setValue] = useState<string>('apple');
  
  const options = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true }
  ];
  
  return (
    <AriRadio.Group
      name="radio-options-example"
      options={options}
      value={value}
      onChange={(val) => setValue(val as string)}
    />
  );
};

/**
 * 按钮样式的单选框组
 */
export const RadioButtonExample: React.FC = () => {
  const [value, setValue] = useState<string>('small');
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio.Group
        name="radio-button-example"
        value={value}
        onChange={(val) => setValue(val as string)}
      >
        <AriRadio.Button value="small">小号</AriRadio.Button>
        <AriRadio.Button value="medium">中号</AriRadio.Button>
        <AriRadio.Button value="large">大号</AriRadio.Button>
      </AriRadio.Group>
      
      <AriRadio.Group
        name="radio-button-disabled-example"
        value={value}
        onChange={(val) => setValue(val as string)}
        disabled
      >
        <AriRadio.Button value="small">小号(禁用)</AriRadio.Button>
        <AriRadio.Button value="medium">中号(禁用)</AriRadio.Button>
        <AriRadio.Button value="large">大号(禁用)</AriRadio.Button>
      </AriRadio.Group>
    </AriFlex>
  );
};

/**
 * 不同尺寸的单选框
 */
export const RadioSizesExample: React.FC = () => {
  const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};`,
    "RadioGroupExample": `export const RadioGroupExample: React.FC = () => {
const [value, setValue] = useState<string>('a');
  
  return (
    <AriRadio.Group
      name="radio-group-example"
      value={value}
      onChange={(val) => setValue(val as string)}
    >
      <AriRadio value="a" label="选项A" />
      <AriRadio value="b" label="选项B" />
      <AriRadio value="c" label="选项C" />
      <AriRadio value="d" label="选项D" disabled />
    </AriRadio.Group>
  );
};

/**
 * 使用options属性创建单选框组
 */
export const RadioGroupWithOptions: React.FC = () => {
  const [value, setValue] = useState<string>('apple');
  
  const options = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true }
  ];
  
  return (
    <AriRadio.Group
      name="radio-options-example"
      options={options}
      value={value}
      onChange={(val) => setValue(val as string)}
    />
  );
};

/**
 * 按钮样式的单选框组
 */
export const RadioButtonExample: React.FC = () => {
  const [value, setValue] = useState<string>('small');
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio.Group
        name="radio-button-example"
        value={value}
        onChange={(val) => setValue(val as string)}
      >
        <AriRadio.Button value="small">小号</AriRadio.Button>
        <AriRadio.Button value="medium">中号</AriRadio.Button>
        <AriRadio.Button value="large">大号</AriRadio.Button>
      </AriRadio.Group>
      
      <AriRadio.Group
        name="radio-button-disabled-example"
        value={value}
        onChange={(val) => setValue(val as string)}
        disabled
      >
        <AriRadio.Button value="small">小号(禁用)</AriRadio.Button>
        <AriRadio.Button value="medium">中号(禁用)</AriRadio.Button>
        <AriRadio.Button value="large">大号(禁用)</AriRadio.Button>
      </AriRadio.Group>
    </AriFlex>
  );
};

/**
 * 不同尺寸的单选框
 */
export const RadioSizesExample: React.FC = () => {
  const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};`,
    "RadioGroupWithOptions": `export const RadioGroupWithOptions: React.FC = () => {
const [value, setValue] = useState<string>('apple');
  
  const options = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true }
  ];
  
  return (
    <AriRadio.Group
      name="radio-options-example"
      options={options}
      value={value}
      onChange={(val) => setValue(val as string)}
    />
  );
};

/**
 * 按钮样式的单选框组
 */
export const RadioButtonExample: React.FC = () => {
  const [value, setValue] = useState<string>('small');
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio.Group
        name="radio-button-example"
        value={value}
        onChange={(val) => setValue(val as string)}
      >
        <AriRadio.Button value="small">小号</AriRadio.Button>
        <AriRadio.Button value="medium">中号</AriRadio.Button>
        <AriRadio.Button value="large">大号</AriRadio.Button>
      </AriRadio.Group>
      
      <AriRadio.Group
        name="radio-button-disabled-example"
        value={value}
        onChange={(val) => setValue(val as string)}
        disabled
      >
        <AriRadio.Button value="small">小号(禁用)</AriRadio.Button>
        <AriRadio.Button value="medium">中号(禁用)</AriRadio.Button>
        <AriRadio.Button value="large">大号(禁用)</AriRadio.Button>
      </AriRadio.Group>
    </AriFlex>
  );
};

/**
 * 不同尺寸的单选框
 */
export const RadioSizesExample: React.FC = () => {
  const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};`,
    "RadioButtonExample": `export const RadioButtonExample: React.FC = () => {
const [value, setValue] = useState<string>('small');
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio.Group
        name="radio-button-example"
        value={value}
        onChange={(val) => setValue(val as string)}
      >
        <AriRadio.Button value="small">小号</AriRadio.Button>
        <AriRadio.Button value="medium">中号</AriRadio.Button>
        <AriRadio.Button value="large">大号</AriRadio.Button>
      </AriRadio.Group>
      
      <AriRadio.Group
        name="radio-button-disabled-example"
        value={value}
        onChange={(val) => setValue(val as string)}
        disabled
      >
        <AriRadio.Button value="small">小号(禁用)</AriRadio.Button>
        <AriRadio.Button value="medium">中号(禁用)</AriRadio.Button>
        <AriRadio.Button value="large">大号(禁用)</AriRadio.Button>
      </AriRadio.Group>
    </AriFlex>
  );
};

/**
 * 不同尺寸的单选框
 */
export const RadioSizesExample: React.FC = () => {
  const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};`,
    "RadioSizesExample": `export const RadioSizesExample: React.FC = () => {
const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};`,
  },
  "result": {
    "BasicResult": `export const BasicResult: React.FC = () => (
<AriResult
    title="基础结果"
    subTitle="这是一条基础结果的描述文本"
  />
);`,
    "StatusResults": `export const StatusResults: React.FC = () => (
<AriFlex vertical space={24}>
    <AriResult
      status="success"
      title="成功状态"
      subTitle="这是一条成功状态的描述文本"
    />
    <AriResult
      status="error"
      title="错误状态"
      subTitle="这是一条错误状态的描述文本"
    />
    <AriResult
      status="info"
      title="信息状态"
      subTitle="这是一条信息状态的描述文本"
    />
    <AriResult
      status="warning"
      title="警告状态"
      subTitle="这是一条警告状态的描述文本"
    />
  </AriFlex>
);`,
    "CustomIcon": `export const CustomIcon: React.FC = () => (
<AriResult
    title="自定义图标"
    subTitle="使用自定义图标替代默认状态图标"
    icon="smile"
  />
);`,
    "CustomImage": `export const CustomImage: React.FC = () => (
<AriResult
    title="自定义图片"
    subTitle="使用自定义图片替代默认图标"
    image="https://via.placeholder.com/150"
  />
);`,
    "ExtraContent": `export const ExtraContent: React.FC = () => (
<AriResult
    status="success"
    title="提交成功"
    subTitle="提交结果已经通过审核"
    extra={
      <AriFlex space={8}>
        <AriButton color="primary">返回首页</AriButton>
        <AriButton>查看详情</AriButton>
      </AriFlex>
    }
  >
    <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '4px' }}>
      这里可以放置一些额外的内容说明，结果详情等
    </div>
  </AriResult>
);`,
  },
  "richEditor": {
    "BasicExample": `export const BasicExample: React.FC = () => {
const [content, setContent] = useState(\`# 欢迎使用富文本编辑器

这是一个功能强大的 Markdown 编辑器，支持实时预览和多种导出格式。

## 功能特性

- **实时预览**: 边写边看效果
- **多种模式**: 编辑、预览、分屏模式
- **工具栏**: 快捷格式化操作
- **导入导出**: 支持 MD、HTML、PDF 格式

## 示例内容

### 文本格式

**加粗文本** 和 *斜体文本* 以及 ~~删除线~~

### 代码示例

\`\`\`javascript
function hello() {
  console.log('Hello World!');
}
\`\`\`

### 列表

- 项目 1
- 项目 2
- 项目 3

### 链接和图片

[GitHub](https://github.com) 

> 这是一个引用文本

---

开始编写你的内容吧！\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        placeholder="开始编写你的内容..."
      />
    </AriCard>
  );
};`,
    "ModeExample": `export const ModeExample: React.FC = () => {
const [mode, setMode] = useState<'source' | 'visual' | 'split'>('split');
  const [content, setContent] = useState(\`# 模式切换演示

切换不同的编辑模式来体验不同的编辑体验：

## 源码编辑模式
- 专注于 Markdown 源码编写
- 显示原始的 Markdown 语法
- 支持语法高亮和行号

## 可视化编辑模式  
- 查看渲染后的最终效果
- 所见即所得的编辑体验
- 完整样式展示

## 分屏模式
- 同时显示源码和渲染效果
- 左侧源码，右侧预览
- 实时同步编辑\`);

  return (
    <AriFlex vertical space={16}>
      <AriFlex space={8}>
        <AriButton 
          type={mode === 'source' ? 'default' : 'text'}
          onClick={() => setMode('source')}
        >
          源码编辑
        </AriButton>
        <AriButton 
          type={mode === 'visual' ? 'default' : 'text'}
          onClick={() => setMode('visual')}
        >
          可视化编辑
        </AriButton>
        <AriButton 
          type={mode === 'split' ? 'default' : 'text'}
          onClick={() => setMode('split')}
        >
          分屏模式
        </AriButton>
      </AriFlex>
      
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          mode={mode}
          height="350px"
        />
      </AriCard>
    </AriFlex>
  );
};

export const ToolbarExample: React.FC = () => {
  const [content, setContent] = useState(\`# 工具栏演示

使用工具栏可以快速格式化文本：

## 格式化选项

选中文本后点击工具栏按钮：
- **加粗**
- *斜体*
- ~~删除线~~

## 插入元素

- 标题
- 代码块
- 链接
- 图片
- 表格
- 列表

试试选中一些文本，然后使用工具栏按钮！\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="350px"
        toolbar={{
          buttons: ['bold', 'italic', 'strikethrough', 'divider', 'heading', 'code', 'link']
        }}
      />
    </AriCard>
  );
};

export const CustomToolbarExample: React.FC = () => {
  const [content, setContent] = useState(\`# 自定义工具栏

这个编辑器只显示基本的格式化工具，隐藏了导入导出功能。

你可以根据需要自定义工具栏的显示内容。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="300px"
        toolbar={{
          buttons: ['bold', 'italic', 'heading', 'quote', 'list'],
          showImport: false,
          showExport: false,
          showModeSwitch: false
        }}
      />
    </AriCard>
  );
};

export const ReadOnlyExample: React.FC = () => {
  const content = \`# 只读模式演示

这是一个只读的富文本编辑器，可以用来展示 Markdown 内容。

## 特点

- 不可编辑
- 保留所有样式
- 适合内容展示

**加粗文本** 和 *斜体文本*

\`\`\`javascript
const readOnly = true;
\`\`\`

> 这是只读模式的引用文本\`;

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        readOnly
        height="300px"
        mode="visual"
        toolbar={false}
      />
    </AriCard>
  );
};

export const ApiExample: React.FC = () => {
  const editorRef = useRef<RichEditorInstance>(null);
  const [content, setContent] = useState('# API 演示\n\n使用下面的按钮来控制编辑器');

  const handleClear = () => {
    editorRef.current?.clear();
  };

  const handleSetContent = () => {
    editorRef.current?.setContent(\`# 通过 API 设置的内容

这个内容是通过 editorRef.current.setContent() 方法设置的。

## API 方法

- \`getContent()\`: 获取内容
- \`setContent(content)\`: 设置内容  
- \`clear()\`: 清空内容
- \`focus()\`: 聚焦编辑器
- \`exportAs(format)\`: 导出内容\`);
  };

  const handleGetContent = () => {
    const currentContent = editorRef.current?.getContent();
    alert(\`当前内容长度: \${currentContent?.length || 0} 字符\`);
  };

  const handleFocus = () => {
    editorRef.current?.focus();
  };

  return (
    <AriFlex vertical space={16}>
      <AriFlex space={8} wrap>
        <AriButton onClick={handleSetContent}>设置内容</AriButton>
        <AriButton onClick={handleGetContent}>获取内容</AriButton>
        <AriButton onClick={handleClear}>清空内容</AriButton>
        <AriButton onClick={handleFocus}>聚焦编辑器</AriButton>
      </AriFlex>
      
      <AriCard>
        <AriRichEditor
          ref={editorRef}
          value={content}
          onChange={setContent}
          height="300px"
        />
      </AriCard>
    </AriFlex>
  );
};

export const AutoSaveExample: React.FC = () => {
  const [content, setContent] = useState('# 自动保存演示\n\n编辑内容会每5秒自动保存一次');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleAutoSave = (content: string) => {
    console.log('自动保存:', content);
    setLastSaved(new Date());
    // 这里可以调用后端API保存内容
  };

  return (
    <AriFlex vertical space={16}>
      {lastSaved && (
        <div>最后保存时间: {lastSaved.toLocaleString()}</div>
      )}
      
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="300px"
          autoSave
          autoSaveInterval={5000}
          onAutoSave={handleAutoSave}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码高亮功能演示

富文本编辑器支持专业的代码语法高亮，使用 Monaco Editor 引擎提供与 VS Code 相同的语法高亮效果。

## 特性介绍

- **语法高亮**: 支持 100+ 编程语言
- **标题显示**: 代码块可以显示文件名或标题
- **复制功能**: 一键复制代码到剪贴板
- **行号显示**: 可选择显示代码行号
- **主题支持**: 支持明暗主题切换

## 基础 JavaScript 代码

\`\`\`javascript
function greet(name) {
  const message = 'Hello, ' + name + '!';
  console.log(message);
  return message.toUpperCase();
}

// 调用函数
const result = greet('World');
document.getElementById('output').textContent = result;
\`\`\`

## 带标题的 TypeScript 代码

\`\`\`typescript title="/src/components/UserCard.tsx"
import React from 'react';

interface UserProps {
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  email, 
  age = 18, 
  isActive 
}) => {
  const statusClass = isActive ? 'user-active' : 'user-inactive';
  
  const handleClick = () => {
    console.log('Clicked user: ' + name);
  };

  return (
    <div className={'user-card ' + statusClass} onClick={handleClick}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      <span className="status">
        {isActive ? '在线' : '离线'}
      </span>
    </div>
  );
};

export default UserCard;
\`\`\`

## Python 数据处理示例

\`\`\`python title="data_processor.py"
import pandas as pd
import numpy as np
from typing import List, Dict, Optional

class DataProcessor:
    def __init__(self, data_source: str):
        self.data_source = data_source
        self.df: Optional[pd.DataFrame] = None
    
    def load_data(self) -> bool:
        """加载数据并进行基础验证"""
        try:
            self.df = pd.read_csv(self.data_source)
            print("数据加载成功，共", len(self.df), "行")
            return True
        except Exception as e:
            print("数据加载失败:", e)
            return False
    
    def process_data(self) -> Dict[str, any]:
        """处理数据并返回统计信息"""
        if self.df is None:
            raise ValueError("数据未加载")
        
        # 数据清洗
        self.df = self.df.dropna()
        self.df['processed_at'] = pd.Timestamp.now()
        
        # 统计分析
        stats = {
            'total_rows': len(self.df),
            'columns': list(self.df.columns),
            'numeric_summary': self.df.describe().to_dict()
        }
        
        return stats

# 使用示例
processor = DataProcessor('user_data.csv')
if processor.load_data():
    results = processor.process_data()
    print("处理完成：", results['total_rows'], "行数据")
\`\`\`

## Go 语言 Web 服务

\`\`\`go title="main.go"
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "time"
    
    "github.com/gorilla/mux"
)

type User struct {
    ID        int       'json:"id"'
    Name      string    'json:"name"'
    Email     string    'json:"email"'
    CreatedAt time.Time 'json:"created_at"'
}

type Server struct {
    users []User
    nextID int
}

func NewServer() *Server {
    return &Server{
        users:  make([]User, 0),
        nextID: 1,
    }
}

func (s *Server) createUser(w http.ResponseWriter, r *http.Request) {
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    user.ID = s.nextID
    user.CreatedAt = time.Now()
    s.nextID++
    s.users = append(s.users, user)
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func (s *Server) getUser(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    for _, user := range s.users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    http.Error(w, "User not found", http.StatusNotFound)
}

func main() {
    server := NewServer()
    
    r := mux.NewRouter()
    r.HandleFunc("/users", server.createUser).Methods("POST")
    r.HandleFunc("/users/{id}", server.getUser).Methods("GET")
    
    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
\`\`\`

## SQL 查询示例

\`\`\`sql title="user_analytics.sql"
-- 用户行为分析查询
WITH user_stats AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date,
    AVG(o.total_amount) as avg_order_value
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
  GROUP BY u.id, u.name, u.email
),
user_segments AS (
  SELECT *,
    CASE 
      WHEN total_spent > 1000 THEN 'VIP'
      WHEN total_spent > 500 THEN 'Premium' 
      WHEN order_count > 0 THEN 'Regular'
      ELSE 'New'
    END as segment
  FROM user_stats
)
SELECT 
  segment,
  COUNT(*) as user_count,
  AVG(total_spent) as avg_lifetime_value,
  AVG(order_count) as avg_orders_per_user
FROM user_segments
GROUP BY segment
ORDER BY avg_lifetime_value DESC;
\`\`\`

## 配置选项

你可以通过 codeBlockConfig 属性来配置代码块的显示和功能：

- **showLineNumbers**: 显示行号
- **showCopyButton**: 显示复制按钮  
- **showTitle**: 显示代码标题
- **enableHighlight**: 启用语法高亮
- **enableMonaco**: 使用 Monaco Editor 引擎
- **onCodeEdit**: 代码编辑回调函数\`);

  const codeBlockConfig = {
    showLineNumbers: true,
    showCopyButton: true,
    showTitle: true,
    enableHighlight: true,
    enableMonaco: true,
    onCodeEdit: (code: string, language: string, title?: string) => {
      AriMessage.info(\`点击编辑了 \${language} 代码块\${title ? \` "\${title}"\` : ''}\`);
      console.log('编辑代码:', { code, language, title });
    }
  };

  return (
    <AriFlex vertical space={16}>
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="600px"
          codeBlockConfig={codeBlockConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightLinesExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码行高亮功能演示

除了语法高亮，还可以高亮显示特定的代码行，帮助读者关注重点内容。

## 语法格式

使用以下语法为代码块指定要高亮的行：

\`\`\`language {行号列表}
代码内容
\`\`\`

支持的行号格式：
- 单行：\`{1}\`
- 多行：\`{1,3,5}\`
- 范围：\`{1-5}\`
- 混合：\`{1,4-6,11}\`

## React 组件示例

\`\`\`jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
\`\`\`

## 带标题的高亮示例

\`\`\`typescript {2,7-9,15} title="user-service.ts"
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private baseURL = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.baseURL);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await axios.post<User>(this.baseURL, user);
    return response.data;
  }
}

export default UserService;
\`\`\`

## Python 数据处理高亮

\`\`\`python {3,8-10,16-18} title="data_analysis.py"
import pandas as pd
import numpy as np

# 重点：导入数据
df = pd.read_csv('sales_data.csv')

# 数据清洗
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])
df['profit'] = df['revenue'] - df['cost']

# 分析销售趋势
monthly_sales = df.groupby(df['date'].dt.to_period('M')).agg({
    'revenue': 'sum',
    'profit': 'sum',
    'orders': 'count'
}).reset_index()

# 计算增长率
monthly_sales['revenue_growth'] = monthly_sales['revenue'].pct_change()
monthly_sales['profit_margin'] = (monthly_sales['profit'] / monthly_sales['revenue']) * 100

print("分析完成！")
\`\`\`

## SQL 查询高亮示例

\`\`\`sql {1,5-8,12} title="complex_query.sql"
-- 高亮：查询主体
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
    AND o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;
\`\`\`

## 配置示例

\`\`\`json {4,8-10,15} title="vite.config.js"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "ToolbarExample": `export const ToolbarExample: React.FC = () => {
const [content, setContent] = useState(\`# 工具栏演示

使用工具栏可以快速格式化文本：

## 格式化选项

选中文本后点击工具栏按钮：
- **加粗**
- *斜体*
- ~~删除线~~

## 插入元素

- 标题
- 代码块
- 链接
- 图片
- 表格
- 列表

试试选中一些文本，然后使用工具栏按钮！\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="350px"
        toolbar={{
          buttons: ['bold', 'italic', 'strikethrough', 'divider', 'heading', 'code', 'link']
        }}
      />
    </AriCard>
  );
};`,
    "CustomToolbarExample": `export const CustomToolbarExample: React.FC = () => {
const [content, setContent] = useState(\`# 自定义工具栏

这个编辑器只显示基本的格式化工具，隐藏了导入导出功能。

你可以根据需要自定义工具栏的显示内容。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="300px"
        toolbar={{
          buttons: ['bold', 'italic', 'heading', 'quote', 'list'],
          showImport: false,
          showExport: false,
          showModeSwitch: false
        }}
      />
    </AriCard>
  );
};`,
    "ReadOnlyExample": `export const ReadOnlyExample: React.FC = () => {
const content = \`# 只读模式演示

这是一个只读的富文本编辑器，可以用来展示 Markdown 内容。

## 特点

- 不可编辑
- 保留所有样式
- 适合内容展示

**加粗文本** 和 *斜体文本*

\`\`\`javascript
const readOnly = true;
\`\`\`

> 这是只读模式的引用文本\`;

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        readOnly
        height="300px"
        mode="visual"
        toolbar={false}
      />
    </AriCard>
  );
};`,
    "ApiExample": `export const ApiExample: React.FC = () => {
const editorRef = useRef<RichEditorInstance>(null);
  const [content, setContent] = useState('# API 演示\n\n使用下面的按钮来控制编辑器');

  const handleClear = () => {
    editorRef.current?.clear();
  };

  const handleSetContent = () => {
    editorRef.current?.setContent(\`# 通过 API 设置的内容

这个内容是通过 editorRef.current.setContent() 方法设置的。

## API 方法

- \`getContent()\`: 获取内容
- \`setContent(content)\`: 设置内容  
- \`clear()\`: 清空内容
- \`focus()\`: 聚焦编辑器
- \`exportAs(format)\`: 导出内容\`);
  };

  const handleGetContent = () => {
    const currentContent = editorRef.current?.getContent();
    alert(\`当前内容长度: \${currentContent?.length || 0} 字符\`);
  };

  const handleFocus = () => {
    editorRef.current?.focus();
  };

  return (
    <AriFlex vertical space={16}>
      <AriFlex space={8} wrap>
        <AriButton onClick={handleSetContent}>设置内容</AriButton>
        <AriButton onClick={handleGetContent}>获取内容</AriButton>
        <AriButton onClick={handleClear}>清空内容</AriButton>
        <AriButton onClick={handleFocus}>聚焦编辑器</AriButton>
      </AriFlex>
      
      <AriCard>
        <AriRichEditor
          ref={editorRef}
          value={content}
          onChange={setContent}
          height="300px"
        />
      </AriCard>
    </AriFlex>
  );
};

export const AutoSaveExample: React.FC = () => {
  const [content, setContent] = useState('# 自动保存演示\n\n编辑内容会每5秒自动保存一次');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleAutoSave = (content: string) => {
    console.log('自动保存:', content);
    setLastSaved(new Date());
    // 这里可以调用后端API保存内容
  };

  return (
    <AriFlex vertical space={16}>
      {lastSaved && (
        <div>最后保存时间: {lastSaved.toLocaleString()}</div>
      )}
      
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="300px"
          autoSave
          autoSaveInterval={5000}
          onAutoSave={handleAutoSave}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码高亮功能演示

富文本编辑器支持专业的代码语法高亮，使用 Monaco Editor 引擎提供与 VS Code 相同的语法高亮效果。

## 特性介绍

- **语法高亮**: 支持 100+ 编程语言
- **标题显示**: 代码块可以显示文件名或标题
- **复制功能**: 一键复制代码到剪贴板
- **行号显示**: 可选择显示代码行号
- **主题支持**: 支持明暗主题切换

## 基础 JavaScript 代码

\`\`\`javascript
function greet(name) {
  const message = 'Hello, ' + name + '!';
  console.log(message);
  return message.toUpperCase();
}

// 调用函数
const result = greet('World');
document.getElementById('output').textContent = result;
\`\`\`

## 带标题的 TypeScript 代码

\`\`\`typescript title="/src/components/UserCard.tsx"
import React from 'react';

interface UserProps {
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  email, 
  age = 18, 
  isActive 
}) => {
  const statusClass = isActive ? 'user-active' : 'user-inactive';
  
  const handleClick = () => {
    console.log('Clicked user: ' + name);
  };

  return (
    <div className={'user-card ' + statusClass} onClick={handleClick}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      <span className="status">
        {isActive ? '在线' : '离线'}
      </span>
    </div>
  );
};

export default UserCard;
\`\`\`

## Python 数据处理示例

\`\`\`python title="data_processor.py"
import pandas as pd
import numpy as np
from typing import List, Dict, Optional

class DataProcessor:
    def __init__(self, data_source: str):
        self.data_source = data_source
        self.df: Optional[pd.DataFrame] = None
    
    def load_data(self) -> bool:
        """加载数据并进行基础验证"""
        try:
            self.df = pd.read_csv(self.data_source)
            print("数据加载成功，共", len(self.df), "行")
            return True
        except Exception as e:
            print("数据加载失败:", e)
            return False
    
    def process_data(self) -> Dict[str, any]:
        """处理数据并返回统计信息"""
        if self.df is None:
            raise ValueError("数据未加载")
        
        # 数据清洗
        self.df = self.df.dropna()
        self.df['processed_at'] = pd.Timestamp.now()
        
        # 统计分析
        stats = {
            'total_rows': len(self.df),
            'columns': list(self.df.columns),
            'numeric_summary': self.df.describe().to_dict()
        }
        
        return stats

# 使用示例
processor = DataProcessor('user_data.csv')
if processor.load_data():
    results = processor.process_data()
    print("处理完成：", results['total_rows'], "行数据")
\`\`\`

## Go 语言 Web 服务

\`\`\`go title="main.go"
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "time"
    
    "github.com/gorilla/mux"
)

type User struct {
    ID        int       'json:"id"'
    Name      string    'json:"name"'
    Email     string    'json:"email"'
    CreatedAt time.Time 'json:"created_at"'
}

type Server struct {
    users []User
    nextID int
}

func NewServer() *Server {
    return &Server{
        users:  make([]User, 0),
        nextID: 1,
    }
}

func (s *Server) createUser(w http.ResponseWriter, r *http.Request) {
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    user.ID = s.nextID
    user.CreatedAt = time.Now()
    s.nextID++
    s.users = append(s.users, user)
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func (s *Server) getUser(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    for _, user := range s.users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    http.Error(w, "User not found", http.StatusNotFound)
}

func main() {
    server := NewServer()
    
    r := mux.NewRouter()
    r.HandleFunc("/users", server.createUser).Methods("POST")
    r.HandleFunc("/users/{id}", server.getUser).Methods("GET")
    
    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
\`\`\`

## SQL 查询示例

\`\`\`sql title="user_analytics.sql"
-- 用户行为分析查询
WITH user_stats AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date,
    AVG(o.total_amount) as avg_order_value
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
  GROUP BY u.id, u.name, u.email
),
user_segments AS (
  SELECT *,
    CASE 
      WHEN total_spent > 1000 THEN 'VIP'
      WHEN total_spent > 500 THEN 'Premium' 
      WHEN order_count > 0 THEN 'Regular'
      ELSE 'New'
    END as segment
  FROM user_stats
)
SELECT 
  segment,
  COUNT(*) as user_count,
  AVG(total_spent) as avg_lifetime_value,
  AVG(order_count) as avg_orders_per_user
FROM user_segments
GROUP BY segment
ORDER BY avg_lifetime_value DESC;
\`\`\`

## 配置选项

你可以通过 codeBlockConfig 属性来配置代码块的显示和功能：

- **showLineNumbers**: 显示行号
- **showCopyButton**: 显示复制按钮  
- **showTitle**: 显示代码标题
- **enableHighlight**: 启用语法高亮
- **enableMonaco**: 使用 Monaco Editor 引擎
- **onCodeEdit**: 代码编辑回调函数\`);

  const codeBlockConfig = {
    showLineNumbers: true,
    showCopyButton: true,
    showTitle: true,
    enableHighlight: true,
    enableMonaco: true,
    onCodeEdit: (code: string, language: string, title?: string) => {
      AriMessage.info(\`点击编辑了 \${language} 代码块\${title ? \` "\${title}"\` : ''}\`);
      console.log('编辑代码:', { code, language, title });
    }
  };

  return (
    <AriFlex vertical space={16}>
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="600px"
          codeBlockConfig={codeBlockConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightLinesExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码行高亮功能演示

除了语法高亮，还可以高亮显示特定的代码行，帮助读者关注重点内容。

## 语法格式

使用以下语法为代码块指定要高亮的行：

\`\`\`language {行号列表}
代码内容
\`\`\`

支持的行号格式：
- 单行：\`{1}\`
- 多行：\`{1,3,5}\`
- 范围：\`{1-5}\`
- 混合：\`{1,4-6,11}\`

## React 组件示例

\`\`\`jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
\`\`\`

## 带标题的高亮示例

\`\`\`typescript {2,7-9,15} title="user-service.ts"
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private baseURL = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.baseURL);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await axios.post<User>(this.baseURL, user);
    return response.data;
  }
}

export default UserService;
\`\`\`

## Python 数据处理高亮

\`\`\`python {3,8-10,16-18} title="data_analysis.py"
import pandas as pd
import numpy as np

# 重点：导入数据
df = pd.read_csv('sales_data.csv')

# 数据清洗
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])
df['profit'] = df['revenue'] - df['cost']

# 分析销售趋势
monthly_sales = df.groupby(df['date'].dt.to_period('M')).agg({
    'revenue': 'sum',
    'profit': 'sum',
    'orders': 'count'
}).reset_index()

# 计算增长率
monthly_sales['revenue_growth'] = monthly_sales['revenue'].pct_change()
monthly_sales['profit_margin'] = (monthly_sales['profit'] / monthly_sales['revenue']) * 100

print("分析完成！")
\`\`\`

## SQL 查询高亮示例

\`\`\`sql {1,5-8,12} title="complex_query.sql"
-- 高亮：查询主体
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
    AND o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;
\`\`\`

## 配置示例

\`\`\`json {4,8-10,15} title="vite.config.js"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "AutoSaveExample": `export const AutoSaveExample: React.FC = () => {
const [content, setContent] = useState('# 自动保存演示\n\n编辑内容会每5秒自动保存一次');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleAutoSave = (content: string) => {
    console.log('自动保存:', content);
    setLastSaved(new Date());
    // 这里可以调用后端API保存内容
  };

  return (
    <AriFlex vertical space={16}>
      {lastSaved && (
        <div>最后保存时间: {lastSaved.toLocaleString()}</div>
      )}
      
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="300px"
          autoSave
          autoSaveInterval={5000}
          onAutoSave={handleAutoSave}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码高亮功能演示

富文本编辑器支持专业的代码语法高亮，使用 Monaco Editor 引擎提供与 VS Code 相同的语法高亮效果。

## 特性介绍

- **语法高亮**: 支持 100+ 编程语言
- **标题显示**: 代码块可以显示文件名或标题
- **复制功能**: 一键复制代码到剪贴板
- **行号显示**: 可选择显示代码行号
- **主题支持**: 支持明暗主题切换

## 基础 JavaScript 代码

\`\`\`javascript
function greet(name) {
  const message = 'Hello, ' + name + '!';
  console.log(message);
  return message.toUpperCase();
}

// 调用函数
const result = greet('World');
document.getElementById('output').textContent = result;
\`\`\`

## 带标题的 TypeScript 代码

\`\`\`typescript title="/src/components/UserCard.tsx"
import React from 'react';

interface UserProps {
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  email, 
  age = 18, 
  isActive 
}) => {
  const statusClass = isActive ? 'user-active' : 'user-inactive';
  
  const handleClick = () => {
    console.log('Clicked user: ' + name);
  };

  return (
    <div className={'user-card ' + statusClass} onClick={handleClick}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      <span className="status">
        {isActive ? '在线' : '离线'}
      </span>
    </div>
  );
};

export default UserCard;
\`\`\`

## Python 数据处理示例

\`\`\`python title="data_processor.py"
import pandas as pd
import numpy as np
from typing import List, Dict, Optional

class DataProcessor:
    def __init__(self, data_source: str):
        self.data_source = data_source
        self.df: Optional[pd.DataFrame] = None
    
    def load_data(self) -> bool:
        """加载数据并进行基础验证"""
        try:
            self.df = pd.read_csv(self.data_source)
            print("数据加载成功，共", len(self.df), "行")
            return True
        except Exception as e:
            print("数据加载失败:", e)
            return False
    
    def process_data(self) -> Dict[str, any]:
        """处理数据并返回统计信息"""
        if self.df is None:
            raise ValueError("数据未加载")
        
        # 数据清洗
        self.df = self.df.dropna()
        self.df['processed_at'] = pd.Timestamp.now()
        
        # 统计分析
        stats = {
            'total_rows': len(self.df),
            'columns': list(self.df.columns),
            'numeric_summary': self.df.describe().to_dict()
        }
        
        return stats

# 使用示例
processor = DataProcessor('user_data.csv')
if processor.load_data():
    results = processor.process_data()
    print("处理完成：", results['total_rows'], "行数据")
\`\`\`

## Go 语言 Web 服务

\`\`\`go title="main.go"
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "time"
    
    "github.com/gorilla/mux"
)

type User struct {
    ID        int       'json:"id"'
    Name      string    'json:"name"'
    Email     string    'json:"email"'
    CreatedAt time.Time 'json:"created_at"'
}

type Server struct {
    users []User
    nextID int
}

func NewServer() *Server {
    return &Server{
        users:  make([]User, 0),
        nextID: 1,
    }
}

func (s *Server) createUser(w http.ResponseWriter, r *http.Request) {
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    user.ID = s.nextID
    user.CreatedAt = time.Now()
    s.nextID++
    s.users = append(s.users, user)
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func (s *Server) getUser(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    for _, user := range s.users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    http.Error(w, "User not found", http.StatusNotFound)
}

func main() {
    server := NewServer()
    
    r := mux.NewRouter()
    r.HandleFunc("/users", server.createUser).Methods("POST")
    r.HandleFunc("/users/{id}", server.getUser).Methods("GET")
    
    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
\`\`\`

## SQL 查询示例

\`\`\`sql title="user_analytics.sql"
-- 用户行为分析查询
WITH user_stats AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date,
    AVG(o.total_amount) as avg_order_value
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
  GROUP BY u.id, u.name, u.email
),
user_segments AS (
  SELECT *,
    CASE 
      WHEN total_spent > 1000 THEN 'VIP'
      WHEN total_spent > 500 THEN 'Premium' 
      WHEN order_count > 0 THEN 'Regular'
      ELSE 'New'
    END as segment
  FROM user_stats
)
SELECT 
  segment,
  COUNT(*) as user_count,
  AVG(total_spent) as avg_lifetime_value,
  AVG(order_count) as avg_orders_per_user
FROM user_segments
GROUP BY segment
ORDER BY avg_lifetime_value DESC;
\`\`\`

## 配置选项

你可以通过 codeBlockConfig 属性来配置代码块的显示和功能：

- **showLineNumbers**: 显示行号
- **showCopyButton**: 显示复制按钮  
- **showTitle**: 显示代码标题
- **enableHighlight**: 启用语法高亮
- **enableMonaco**: 使用 Monaco Editor 引擎
- **onCodeEdit**: 代码编辑回调函数\`);

  const codeBlockConfig = {
    showLineNumbers: true,
    showCopyButton: true,
    showTitle: true,
    enableHighlight: true,
    enableMonaco: true,
    onCodeEdit: (code: string, language: string, title?: string) => {
      AriMessage.info(\`点击编辑了 \${language} 代码块\${title ? \` "\${title}"\` : ''}\`);
      console.log('编辑代码:', { code, language, title });
    }
  };

  return (
    <AriFlex vertical space={16}>
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="600px"
          codeBlockConfig={codeBlockConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightLinesExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码行高亮功能演示

除了语法高亮，还可以高亮显示特定的代码行，帮助读者关注重点内容。

## 语法格式

使用以下语法为代码块指定要高亮的行：

\`\`\`language {行号列表}
代码内容
\`\`\`

支持的行号格式：
- 单行：\`{1}\`
- 多行：\`{1,3,5}\`
- 范围：\`{1-5}\`
- 混合：\`{1,4-6,11}\`

## React 组件示例

\`\`\`jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
\`\`\`

## 带标题的高亮示例

\`\`\`typescript {2,7-9,15} title="user-service.ts"
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private baseURL = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.baseURL);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await axios.post<User>(this.baseURL, user);
    return response.data;
  }
}

export default UserService;
\`\`\`

## Python 数据处理高亮

\`\`\`python {3,8-10,16-18} title="data_analysis.py"
import pandas as pd
import numpy as np

# 重点：导入数据
df = pd.read_csv('sales_data.csv')

# 数据清洗
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])
df['profit'] = df['revenue'] - df['cost']

# 分析销售趋势
monthly_sales = df.groupby(df['date'].dt.to_period('M')).agg({
    'revenue': 'sum',
    'profit': 'sum',
    'orders': 'count'
}).reset_index()

# 计算增长率
monthly_sales['revenue_growth'] = monthly_sales['revenue'].pct_change()
monthly_sales['profit_margin'] = (monthly_sales['profit'] / monthly_sales['revenue']) * 100

print("分析完成！")
\`\`\`

## SQL 查询高亮示例

\`\`\`sql {1,5-8,12} title="complex_query.sql"
-- 高亮：查询主体
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
    AND o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;
\`\`\`

## 配置示例

\`\`\`json {4,8-10,15} title="vite.config.js"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "CodeHighlightExample": `export const CodeHighlightExample: React.FC = () => {
const [content, setContent] = useState(\`# 代码高亮功能演示

富文本编辑器支持专业的代码语法高亮，使用 Monaco Editor 引擎提供与 VS Code 相同的语法高亮效果。

## 特性介绍

- **语法高亮**: 支持 100+ 编程语言
- **标题显示**: 代码块可以显示文件名或标题
- **复制功能**: 一键复制代码到剪贴板
- **行号显示**: 可选择显示代码行号
- **主题支持**: 支持明暗主题切换

## 基础 JavaScript 代码

\`\`\`javascript
function greet(name) {
  const message = 'Hello, ' + name + '!';
  console.log(message);
  return message.toUpperCase();
}

// 调用函数
const result = greet('World');
document.getElementById('output').textContent = result;
\`\`\`

## 带标题的 TypeScript 代码

\`\`\`typescript title="/src/components/UserCard.tsx"
import React from 'react';

interface UserProps {
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

const UserCard: React.FC<UserProps> = ({ 
  name, 
  email, 
  age = 18, 
  isActive 
}) => {
  const statusClass = isActive ? 'user-active' : 'user-inactive';
  
  const handleClick = () => {
    console.log('Clicked user: ' + name);
  };

  return (
    <div className={'user-card ' + statusClass} onClick={handleClick}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {age && <p>Age: {age}</p>}
      <span className="status">
        {isActive ? '在线' : '离线'}
      </span>
    </div>
  );
};

export default UserCard;
\`\`\`

## Python 数据处理示例

\`\`\`python title="data_processor.py"
import pandas as pd
import numpy as np
from typing import List, Dict, Optional

class DataProcessor:
    def __init__(self, data_source: str):
        self.data_source = data_source
        self.df: Optional[pd.DataFrame] = None
    
    def load_data(self) -> bool:
        """加载数据并进行基础验证"""
        try:
            self.df = pd.read_csv(self.data_source)
            print("数据加载成功，共", len(self.df), "行")
            return True
        except Exception as e:
            print("数据加载失败:", e)
            return False
    
    def process_data(self) -> Dict[str, any]:
        """处理数据并返回统计信息"""
        if self.df is None:
            raise ValueError("数据未加载")
        
        # 数据清洗
        self.df = self.df.dropna()
        self.df['processed_at'] = pd.Timestamp.now()
        
        # 统计分析
        stats = {
            'total_rows': len(self.df),
            'columns': list(self.df.columns),
            'numeric_summary': self.df.describe().to_dict()
        }
        
        return stats

# 使用示例
processor = DataProcessor('user_data.csv')
if processor.load_data():
    results = processor.process_data()
    print("处理完成：", results['total_rows'], "行数据")
\`\`\`

## Go 语言 Web 服务

\`\`\`go title="main.go"
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "time"
    
    "github.com/gorilla/mux"
)

type User struct {
    ID        int       'json:"id"'
    Name      string    'json:"name"'
    Email     string    'json:"email"'
    CreatedAt time.Time 'json:"created_at"'
}

type Server struct {
    users []User
    nextID int
}

func NewServer() *Server {
    return &Server{
        users:  make([]User, 0),
        nextID: 1,
    }
}

func (s *Server) createUser(w http.ResponseWriter, r *http.Request) {
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    user.ID = s.nextID
    user.CreatedAt = time.Now()
    s.nextID++
    s.users = append(s.users, user)
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func (s *Server) getUser(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    for _, user := range s.users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    http.Error(w, "User not found", http.StatusNotFound)
}

func main() {
    server := NewServer()
    
    r := mux.NewRouter()
    r.HandleFunc("/users", server.createUser).Methods("POST")
    r.HandleFunc("/users/{id}", server.getUser).Methods("GET")
    
    fmt.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
\`\`\`

## SQL 查询示例

\`\`\`sql title="user_analytics.sql"
-- 用户行为分析查询
WITH user_stats AS (
  SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    MAX(o.created_at) as last_order_date,
    AVG(o.total_amount) as avg_order_value
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
  GROUP BY u.id, u.name, u.email
),
user_segments AS (
  SELECT *,
    CASE 
      WHEN total_spent > 1000 THEN 'VIP'
      WHEN total_spent > 500 THEN 'Premium' 
      WHEN order_count > 0 THEN 'Regular'
      ELSE 'New'
    END as segment
  FROM user_stats
)
SELECT 
  segment,
  COUNT(*) as user_count,
  AVG(total_spent) as avg_lifetime_value,
  AVG(order_count) as avg_orders_per_user
FROM user_segments
GROUP BY segment
ORDER BY avg_lifetime_value DESC;
\`\`\`

## 配置选项

你可以通过 codeBlockConfig 属性来配置代码块的显示和功能：

- **showLineNumbers**: 显示行号
- **showCopyButton**: 显示复制按钮  
- **showTitle**: 显示代码标题
- **enableHighlight**: 启用语法高亮
- **enableMonaco**: 使用 Monaco Editor 引擎
- **onCodeEdit**: 代码编辑回调函数\`);

  const codeBlockConfig = {
    showLineNumbers: true,
    showCopyButton: true,
    showTitle: true,
    enableHighlight: true,
    enableMonaco: true,
    onCodeEdit: (code: string, language: string, title?: string) => {
      AriMessage.info(\`点击编辑了 \${language} 代码块\${title ? \` "\${title}"\` : ''}\`);
      console.log('编辑代码:', { code, language, title });
    }
  };

  return (
    <AriFlex vertical space={16}>
      <AriCard>
        <AriRichEditor
          value={content}
          onChange={setContent}
          height="600px"
          codeBlockConfig={codeBlockConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightLinesExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码行高亮功能演示

除了语法高亮，还可以高亮显示特定的代码行，帮助读者关注重点内容。

## 语法格式

使用以下语法为代码块指定要高亮的行：

\`\`\`language {行号列表}
代码内容
\`\`\`

支持的行号格式：
- 单行：\`{1}\`
- 多行：\`{1,3,5}\`
- 范围：\`{1-5}\`
- 混合：\`{1,4-6,11}\`

## React 组件示例

\`\`\`jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
\`\`\`

## 带标题的高亮示例

\`\`\`typescript {2,7-9,15} title="user-service.ts"
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private baseURL = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.baseURL);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await axios.post<User>(this.baseURL, user);
    return response.data;
  }
}

export default UserService;
\`\`\`

## Python 数据处理高亮

\`\`\`python {3,8-10,16-18} title="data_analysis.py"
import pandas as pd
import numpy as np

# 重点：导入数据
df = pd.read_csv('sales_data.csv')

# 数据清洗
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])
df['profit'] = df['revenue'] - df['cost']

# 分析销售趋势
monthly_sales = df.groupby(df['date'].dt.to_period('M')).agg({
    'revenue': 'sum',
    'profit': 'sum',
    'orders': 'count'
}).reset_index()

# 计算增长率
monthly_sales['revenue_growth'] = monthly_sales['revenue'].pct_change()
monthly_sales['profit_margin'] = (monthly_sales['profit'] / monthly_sales['revenue']) * 100

print("分析完成！")
\`\`\`

## SQL 查询高亮示例

\`\`\`sql {1,5-8,12} title="complex_query.sql"
-- 高亮：查询主体
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
    AND o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;
\`\`\`

## 配置示例

\`\`\`json {4,8-10,15} title="vite.config.js"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "CodeHighlightLinesExample": `export const CodeHighlightLinesExample: React.FC = () => {
const [content, setContent] = useState(\`# 代码行高亮功能演示

除了语法高亮，还可以高亮显示特定的代码行，帮助读者关注重点内容。

## 语法格式

使用以下语法为代码块指定要高亮的行：

\`\`\`language {行号列表}
代码内容
\`\`\`

支持的行号格式：
- 单行：\`{1}\`
- 多行：\`{1,3,5}\`
- 范围：\`{1-5}\`
- 混合：\`{1,4-6,11}\`

## React 组件示例

\`\`\`jsx {1,4-6,11}
import React from 'react';

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
\`\`\`

## 带标题的高亮示例

\`\`\`typescript {2,7-9,15} title="user-service.ts"
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private baseURL = '/api/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.baseURL);
    return response.data;
  }

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await axios.post<User>(this.baseURL, user);
    return response.data;
  }
}

export default UserService;
\`\`\`

## Python 数据处理高亮

\`\`\`python {3,8-10,16-18} title="data_analysis.py"
import pandas as pd
import numpy as np

# 重点：导入数据
df = pd.read_csv('sales_data.csv')

# 数据清洗
df = df.dropna()
df['date'] = pd.to_datetime(df['date'])
df['profit'] = df['revenue'] - df['cost']

# 分析销售趋势
monthly_sales = df.groupby(df['date'].dt.to_period('M')).agg({
    'revenue': 'sum',
    'profit': 'sum',
    'orders': 'count'
}).reset_index()

# 计算增长率
monthly_sales['revenue_growth'] = monthly_sales['revenue'].pct_change()
monthly_sales['profit_margin'] = (monthly_sales['profit'] / monthly_sales['revenue']) * 100

print("分析完成！")
\`\`\`

## SQL 查询高亮示例

\`\`\`sql {1,5-8,12} title="complex_query.sql"
-- 高亮：查询主体
SELECT 
    u.name,
    u.email,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
    AND o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;
\`\`\`

## 配置示例

\`\`\`json {4,8-10,15} title="vite.config.js"
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "CalloutExample": `export const CalloutExample: React.FC = () => {
const [content, setContent] = useState(\`# 告示框功能演示

富文本编辑器支持多种类型的告示框（Callout），用于突出显示重要信息。

## 语法格式

使用以下语法创建告示框：

\`\`\`
:::type
内容
:::
\`\`\`

## 基础告示框类型

:::note
这是一个 **注意** 告示框，用于提供一般性的重要信息。支持 _Markdown_ 语法，包括 \`行内代码\` 和 [链接](#)。
:::

:::tip
这是一个 **提示** 告示框，用于分享有用的建议和最佳实践。你可以在其中使用各种 Markdown 格式。
:::

:::info
这是一个 **信息** 告示框，用于提供额外的背景信息或说明。
:::

:::warning
这是一个 **警告** 告示框，用于提醒用户注意潜在的问题或需要谨慎对待的事项。
:::

:::danger
这是一个 **危险** 告示框，用于强调可能导致严重问题的操作或情况。请务必仔细阅读！
:::

## 自定义标题

你可以在类型后面添加自定义标题：

:::note 自定义标题
这个告示框有一个自定义的标题，而不是默认的"注意"。
:::

:::tip 专业提示
使用自定义标题可以让告示框更加具体和有针对性。
:::

## 嵌套内容

告示框支持各种 Markdown 内容：

:::info 复杂内容示例
### 支持的内容类型

1. **列表项目**
   - 子项目 1
   - 子项目 2

2. **代码块**
   \`\`\`javascript
   console.log('告示框中的代码');
   \`\`\`

3. **引用**
   > 这是告示框中的引用文本

4. **链接和图片**
   访问 [示例链接](https://example.com) 了解更多信息。
:::

## 实际应用场景

:::warning 重要更新
从 v2.0.0 版本开始，API 发生了以下重大变更：
- \`oldMethod()\` 已被弃用，请使用 \`newMethod()\`
- 配置文件格式已更新
- 需要更新依赖项

请在升级前仔细阅读[迁移指南](#)。
:::

:::danger 安全警告
**绝对不要** 在生产环境中使用以下配置：
\`\`\`json
{
  "debug": true,
  "allowAllOrigins": true
}
\`\`\`
这会导致严重的安全漏洞！
:::

:::tip 性能优化建议
为了获得最佳性能，建议：
1. 启用缓存机制
2. 使用 CDN 加速静态资源
3. 开启 Gzip 压缩
4. 实施懒加载策略

详细配置请参考性能优化文档。
:::

## 组合使用

告示框可以与其他 Markdown 元素灵活组合：

:::note 学习路径
### 初学者路线
1. 了解基础概念
2. 完成入门教程
3. 实践小项目

### 进阶路线
- 深入理解原理
- 学习最佳实践
- 参与开源项目

> 记住：实践是最好的学习方式！
:::

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
      />
    </AriCard>
  );
};`,
    "CodeTitleExample": `export const CodeTitleExample: React.FC = () => {
const [content, setContent] = useState(\`# 代码标题功能演示

代码块支持使用 title 属性来显示文件名或标题，让代码更加清晰易懂。

## 语法格式

使用以下语法为代码块添加标题：

\`\`\`language title="文件名或标题"
代码内容
\`\`\`

## React 组件示例

\`\`\`tsx title="Button.tsx"
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## 配置文件示例

\`\`\`json title="package.json"
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "keywords": ["react", "typescript"],
  "license": "MIT"
}
\`\`\`

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。\`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        codeBlockConfig={{
          showLineNumbers: true,
          showCopyButton: true,
          showTitle: true
        }}
      />
    </AriCard>
  );
};

`,
    "Button": `export const Button: React.FC<ButtonProps> = ({
children,
  variant = 'primary',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={'btn btn-' + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`,
  },
  "select": {
    "BasicDemo": `export const BasicDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            placeholder="请选择"
        />
    );
};`,
    "ClearableDemo": `export const ClearableDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return <AriSelect options={options} allowClear={true} placeholder="可清除" />;
};`,
    "CustomStyleDemo": `export const CustomStyleDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            style={{ width: '200px' }}
            placeholder="自定义宽度"
        />
    );
};`,
    "DisabledDemo": `export const DisabledDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3', disabled: true },
        { value: '4', label: '选项4' }
    ];

    return (
        <AriSelect
            options={options}
            disabled={true}
            placeholder="禁用状态"
        />
    );
};`,
    "TriggerActionDemo": `export const TriggerActionDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' }
    ];
    const [showCustomPanel, setShowCustomPanel] = useState(false);

    return (
        <div style={{ width: '260px' }}>
            <AriSelect
                options={options}
                placeholder="点击后执行自定义行为"
                openOnTriggerClick={false}
                onTriggerClick={() => setShowCustomPanel(prev => !prev)}
            />
            {showCustomPanel && (
                <div style={{ marginTop: '8px', padding: '8px', border: '1px dashed #d9d9d9', borderRadius: '8px' }}>
                    这里可以放自定义组件（例如自定义弹窗内容）
                </div>
            )}
        </div>
    );
};`,
    "BorderlessDemo": `export const BorderlessDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' }
    ];

    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <AriSelect options={options} placeholder="默认有边框" style={{ width: '180px' }} />
            <AriSelect options={options} placeholder="无边框" bordered={false} style={{ width: '180px' }} />
        </div>
    );
};`,
    "CustomArrowDemo": `export const CustomArrowDemo: React.FC = () => {
  const options = [
        { value: '1', label: '选项1' },
        { value: '2', label: '选项2' },
        { value: '3', label: '选项3' }
    ];

    return (
        <AriSelect
            options={options}
            placeholder="自定义箭头图标"
            arrowIcon="chevron_right"
            style={{ width: '220px' }}
        />
    );
};`,
  },
  "sidebar": {
    "BasicSidebar": `export const BasicSidebar: React.FC = () => (
  <AriContainer style={{ height: '400px' }}>
        <AriSidebar
            content={
                <div style={{ padding: '20px' }}>
                    <h3>基础侧边栏</h3>
                    <p>这是一个最基本的侧边栏示例，展示简单的自定义内容。</p>
                </div>
            }
            width={250}
        />
    </AriContainer>
);`,
    "DirectionDemo": `export const DirectionDemo: React.FC = () => {
  const [direction, setDirection] = useState<'left' | 'right'>('left');

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <AriButton
                    label="切换方向"
                    onClick={() => setDirection(prev => prev === 'left' ? 'right' : 'left')}
                />
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    direction={direction}
                    content={
                        <div style={{ padding: '20px' }}>
                            <h3>{direction === 'left' ? '左侧' : '右侧'}侧边栏</h3>
                            <p>当前方向: {direction}</p>
                        </div>
                    }
                    width={250}
                />
            </AriContainer>
        </div>
    );
};

export const ActivityBarPositionDemo: React.FC = () => {
    const [position, setPosition] = useState<'top' | 'bottom' | 'side'>('side');

    const activityItems = [
        {
            key: 'files',
            icon: 'docs',
            title: '文件',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>文件浏览器</h3>
                    <p>这里展示文件列表内容</p>
                </div>
            )
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>这里是搜索界面</p>
                </div>
            )
        },
        {
            key: 'settings',
            icon: 'settings',
            title: '设置',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>设置选项</h3>
                    <p>这里是设置界面</p>
                </div>
            )
        }
    ];

    const handlePositionChange = (newPosition: 'top' | 'bottom' | 'side') => {
        setPosition(newPosition);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <AriButton
                    label="顶部"
                    onClick={() => handlePositionChange('top')}
                    style={{ marginRight: '8px' }}
                    color={position === 'top' ? 'primary' : 'default'}
                />
                <AriButton
                    label="底部"
                    onClick={() => handlePositionChange('bottom')}
                    style={{ marginRight: '8px' }}
                    color={position === 'bottom' ? 'primary' : 'default'}
                />
                <AriButton
                    label="侧边"
                    onClick={() => handlePositionChange('side')}
                    color={position === 'side' ? 'primary' : 'default'}
                />
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    activityBarPosition={position}
                    width={300}
                />
            </AriContainer>
        </div>
    );
};

export const EventHandlingDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');
    const [activeTab, setActiveTab] = useState<string>('files');

    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    children: [
                        {
                            key: 'components',
                            name: 'components.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'public',
                    name: 'public',
                    icon: 'folder',
                    children: [
                        {
                            key: 'index',
                            name: 'index.html',
                            icon: 'file-html'
                        }
                    ]
                }
            ]
        }
    ];

    const activityItems = [
        {
            key: 'files',
            icon: 'file',
            title: '文件',
            contentType: 'fileTree',
            fileTree: fileTreeData
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>搜索界面</p>
                </div>
            )
        }
    ];

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    const handleActivityChange = (item: any) => {
        setActiveTab(item.title);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
                <p><strong>当前活动标签:</strong> {activeTab}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    width={300}
                    onNodeSelect={handleNodeSelect}
                    onActivityChange={handleActivityChange}
                />
            </AriContainer>
        </div>
    );
};

export const FileTreeDemo: React.FC = () => {
    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    expanded: true,
                    children: [
                        {
                            key: 'components',
                            name: 'components',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'button1',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button2',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button3',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button4',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button5',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button6',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button7',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                // {
                                //     key: 'button8',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button9',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button10',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'button11',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button12',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button13',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button14',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button15',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'sidebar',
                                //     name: 'sidebar.tsx',
                                //     icon: 'file-code'
                                // }
                            ]
                        },
                        {
                            key: 'styles',
                            name: 'styles',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'main',
                                    name: 'main.scss',
                                    icon: 'file-css'
                                }
                            ]
                        },
                        {
                            key: 'index',
                            name: 'index.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'package',
                    name: 'package.json',
                    icon: 'file-json'
                },
                {
                    key: 'readme',
                    name: 'README.md',
                    icon: 'file-markdown'
                }
            ]
        }
    ];
    return (

        <AriContainer style={{ height: '800px' }}>
            <AriSidebar.TreeView
                tree={fileTreeData}
                width={300}
                onNodeSelect={(node) => console.log('Selected:', node)}
            />
        </AriContainer>
    );
}

export const TreeViewComponentDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};

`,
    "ActivityBarPositionDemo": `export const ActivityBarPositionDemo: React.FC = () => {
  const [position, setPosition] = useState<'top' | 'bottom' | 'side'>('side');

    const activityItems = [
        {
            key: 'files',
            icon: 'docs',
            title: '文件',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>文件浏览器</h3>
                    <p>这里展示文件列表内容</p>
                </div>
            )
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>这里是搜索界面</p>
                </div>
            )
        },
        {
            key: 'settings',
            icon: 'settings',
            title: '设置',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>设置选项</h3>
                    <p>这里是设置界面</p>
                </div>
            )
        }
    ];

    const handlePositionChange = (newPosition: 'top' | 'bottom' | 'side') => {
        setPosition(newPosition);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <AriButton
                    label="顶部"
                    onClick={() => handlePositionChange('top')}
                    style={{ marginRight: '8px' }}
                    color={position === 'top' ? 'primary' : 'default'}
                />
                <AriButton
                    label="底部"
                    onClick={() => handlePositionChange('bottom')}
                    style={{ marginRight: '8px' }}
                    color={position === 'bottom' ? 'primary' : 'default'}
                />
                <AriButton
                    label="侧边"
                    onClick={() => handlePositionChange('side')}
                    color={position === 'side' ? 'primary' : 'default'}
                />
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    activityBarPosition={position}
                    width={300}
                />
            </AriContainer>
        </div>
    );
};

export const EventHandlingDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');
    const [activeTab, setActiveTab] = useState<string>('files');

    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    children: [
                        {
                            key: 'components',
                            name: 'components.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'public',
                    name: 'public',
                    icon: 'folder',
                    children: [
                        {
                            key: 'index',
                            name: 'index.html',
                            icon: 'file-html'
                        }
                    ]
                }
            ]
        }
    ];

    const activityItems = [
        {
            key: 'files',
            icon: 'file',
            title: '文件',
            contentType: 'fileTree',
            fileTree: fileTreeData
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>搜索界面</p>
                </div>
            )
        }
    ];

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    const handleActivityChange = (item: any) => {
        setActiveTab(item.title);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
                <p><strong>当前活动标签:</strong> {activeTab}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    width={300}
                    onNodeSelect={handleNodeSelect}
                    onActivityChange={handleActivityChange}
                />
            </AriContainer>
        </div>
    );
};

export const FileTreeDemo: React.FC = () => {
    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    expanded: true,
                    children: [
                        {
                            key: 'components',
                            name: 'components',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'button1',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button2',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button3',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button4',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button5',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button6',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button7',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                // {
                                //     key: 'button8',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button9',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button10',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'button11',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button12',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button13',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button14',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button15',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'sidebar',
                                //     name: 'sidebar.tsx',
                                //     icon: 'file-code'
                                // }
                            ]
                        },
                        {
                            key: 'styles',
                            name: 'styles',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'main',
                                    name: 'main.scss',
                                    icon: 'file-css'
                                }
                            ]
                        },
                        {
                            key: 'index',
                            name: 'index.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'package',
                    name: 'package.json',
                    icon: 'file-json'
                },
                {
                    key: 'readme',
                    name: 'README.md',
                    icon: 'file-markdown'
                }
            ]
        }
    ];
    return (

        <AriContainer style={{ height: '800px' }}>
            <AriSidebar.TreeView
                tree={fileTreeData}
                width={300}
                onNodeSelect={(node) => console.log('Selected:', node)}
            />
        </AriContainer>
    );
}

export const TreeViewComponentDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};

`,
    "EventHandlingDemo": `export const EventHandlingDemo: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('');
    const [activeTab, setActiveTab] = useState<string>('files');

    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    children: [
                        {
                            key: 'components',
                            name: 'components.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'public',
                    name: 'public',
                    icon: 'folder',
                    children: [
                        {
                            key: 'index',
                            name: 'index.html',
                            icon: 'file-html'
                        }
                    ]
                }
            ]
        }
    ];

    const activityItems = [
        {
            key: 'files',
            icon: 'file',
            title: '文件',
            contentType: 'fileTree',
            fileTree: fileTreeData
        },
        {
            key: 'search',
            icon: 'search',
            title: '搜索',
            contentType: 'custom',
            content: (
                <div style={{ padding: '20px' }}>
                    <h3>搜索功能</h3>
                    <p>搜索界面</p>
                </div>
            )
        }
    ];

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    const handleActivityChange = (item: any) => {
        setActiveTab(item.title);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
                <p><strong>当前活动标签:</strong> {activeTab}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    activityBarItems={activityItems}
                    width={300}
                    onNodeSelect={handleNodeSelect}
                    onActivityChange={handleActivityChange}
                />
            </AriContainer>
        </div>
    );
};

export const FileTreeDemo: React.FC = () => {
    const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    expanded: true,
                    children: [
                        {
                            key: 'components',
                            name: 'components',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'button1',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button2',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button3',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button4',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button5',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button6',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button7',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                // {
                                //     key: 'button8',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button9',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button10',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'button11',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button12',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button13',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button14',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button15',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'sidebar',
                                //     name: 'sidebar.tsx',
                                //     icon: 'file-code'
                                // }
                            ]
                        },
                        {
                            key: 'styles',
                            name: 'styles',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'main',
                                    name: 'main.scss',
                                    icon: 'file-css'
                                }
                            ]
                        },
                        {
                            key: 'index',
                            name: 'index.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'package',
                    name: 'package.json',
                    icon: 'file-json'
                },
                {
                    key: 'readme',
                    name: 'README.md',
                    icon: 'file-markdown'
                }
            ]
        }
    ];
    return (

        <AriContainer style={{ height: '800px' }}>
            <AriSidebar.TreeView
                tree={fileTreeData}
                width={300}
                onNodeSelect={(node) => console.log('Selected:', node)}
            />
        </AriContainer>
    );
}

export const TreeViewComponentDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};

`,
    "FileTreeDemo": `export const FileTreeDemo: React.FC = () => {
  const fileTreeData = [
        {
            key: 'root',
            name: '项目根目录',
            icon: 'folder',
            expanded: true,
            children: [
                {
                    key: 'src',
                    name: 'src',
                    icon: 'folder',
                    expanded: true,
                    children: [
                        {
                            key: 'components',
                            name: 'components',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'button1',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button2',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button3',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button4',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button5',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button6',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                {
                                    key: 'button7',
                                    name: 'button.tsx',
                                    icon: 'file-code'
                                },
                                // {
                                //     key: 'button8',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button9',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button10',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'button11',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button12',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button13',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button14',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },
                                // {
                                //     key: 'button15',
                                //     name: 'button.tsx',
                                //     icon: 'file-code'
                                // },

                                // {
                                //     key: 'sidebar',
                                //     name: 'sidebar.tsx',
                                //     icon: 'file-code'
                                // }
                            ]
                        },
                        {
                            key: 'styles',
                            name: 'styles',
                            icon: 'folder',
                            children: [
                                {
                                    key: 'main',
                                    name: 'main.scss',
                                    icon: 'file-css'
                                }
                            ]
                        },
                        {
                            key: 'index',
                            name: 'index.tsx',
                            icon: 'file-code'
                        }
                    ]
                },
                {
                    key: 'package',
                    name: 'package.json',
                    icon: 'file-json'
                },
                {
                    key: 'readme',
                    name: 'README.md',
                    icon: 'file-markdown'
                }
            ]
        }
    ];
    return (

        <AriContainer style={{ height: '800px' }}>
            <AriSidebar.TreeView
                tree={fileTreeData}
                width={300}
                onNodeSelect={(node) => console.log('Selected:', node)}
            />
        </AriContainer>
    );
}

export const TreeViewComponentDemo: React.FC = () => {
    const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};

`,
    "TreeViewComponentDemo": `export const TreeViewComponentDemo: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('');

    const handleNodeSelect = (node: any) => {
        setSelectedNode(node.name);
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <p><strong>当前选中节点:</strong> {selectedNode || '无'}</p>
            </div>
            <AriContainer style={{ height: '400px' }}>
                <AriSidebar
                    width={300}
                    content={
                        <AriSidebar.TreeView
                            tree={[
                                {
                                    key: 'docs',
                                    name: '文档',
                                    icon: 'folder',
                                    expanded: true,
                                    children: [
                                        {
                                            key: 'react',
                                            name: 'React指南',
                                            icon: 'file-pdf',
                                        },
                                        {
                                            key: 'components',
                                            name: '组件文档',
                                            icon: 'folder',
                                            expanded: true,
                                            children: [
                                                {
                                                    key: 'sidebar-doc',
                                                    name: '侧边栏文档',
                                                    icon: 'file-markdown'
                                                },
                                                {
                                                    key: 'treeview-doc',
                                                    name: '树视图文档',
                                                    icon: 'file-markdown'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]}
                            onNodeSelect={handleNodeSelect}
                        />
                    }
                />
            </AriContainer>
        </div>
    );
};

`,
  },
  "slider": {
    "BasicSlider": `export const BasicSlider: React.FC = () => {
  const [value, setValue] = useState(30);

    const handleChange = (value: number) => {
        setValue(value);
    };

    return (
        <AriContainer>
            <AriSliderComponent value={value} onChange={handleChange} />
            <div style={{ marginTop: '20px' }}>当前值: {value}</div>
        </AriContainer>
    );
};`,
    "RangeSlider": `export const RangeSlider: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);

    const handleChange = (value: [number, number]) => {
        setValue(value);
    };

    return (
        <AriContainer>
            <AriSliderComponent.Range value={value} onChange={handleChange} />
            <div style={{ marginTop: '20px' }}>当前范围: [{value[0]}, {value[1]}]</div>
        </AriContainer>
    );
};

export const DisabledSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} disabled />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} disabled />
            </AriContainer>
        </AriFlex>
    );
};

export const StepsSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} step={10} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} step={10} />
            </AriContainer>
        </AriFlex>
    );
};

export const MarksSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickCount={5} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickLabels={["差", "一般", "良好", "优秀", "极佳"]} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showTicks 
                    tickCount={4} 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ValueLabelSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showValueLabel 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    showValueLabel 
                    valueLabelFormat={(value) => \`\${value}%\`} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ColorSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} color="primary" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={40} color="success" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} color="warning" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={60} color="danger" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} color="info" />
            </AriContainer>
        </AriFlex>
    );
};

export const VerticalSlider: React.FC = () => {
    return (
        <AriFlex space={24} style={{ height: '200px' }}>
            <AriContainer>
                <AriSliderComponent vertical defaultValue={30} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range vertical defaultValue={[20, 80]} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    vertical 
                    defaultValue={50} 
                    showTicks 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const PrefixSuffixSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    prefix={<AriIcon name="volume_down" />} 
                    suffix={<AriIcon name="volume_up" />} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    prefix="0°C" 
                    suffix="100°C" 
                />
            </AriContainer>
        </AriFlex>
    );
};

export const ShapeSlider: React.FC = () => {
    return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} shape="default" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} shape="rounded" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} shape="square" />
            </AriContainer>
        </AriFlex>
    );
};
`,
    "DisabledSlider": `export const DisabledSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} disabled />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} disabled />
            </AriContainer>
        </AriFlex>
    );
};`,
    "StepsSlider": `export const StepsSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} step={10} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range defaultValue={[20, 80]} step={10} />
            </AriContainer>
        </AriFlex>
    );
};`,
    "MarksSlider": `export const MarksSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickCount={5} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showTicks 
                    tickLabels={["差", "一般", "良好", "优秀", "极佳"]} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showTicks 
                    tickCount={4} 
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "ValueLabelSlider": `export const ValueLabelSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    showValueLabel 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    showValueLabel 
                    valueLabelFormat={(value) => \`\${value}%\`} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range 
                    defaultValue={[20, 80]} 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "ColorSlider": `export const ColorSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} color="primary" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={40} color="success" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} color="warning" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={60} color="danger" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} color="info" />
            </AriContainer>
        </AriFlex>
    );
};`,
    "VerticalSlider": `export const VerticalSlider: React.FC = () => {
  return (
        <AriFlex space={24} style={{ height: '200px' }}>
            <AriContainer>
                <AriSliderComponent vertical defaultValue={30} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent.Range vertical defaultValue={[20, 80]} />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    vertical 
                    defaultValue={50} 
                    showTicks 
                    showValueLabel 
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "PrefixSuffixSlider": `export const PrefixSuffixSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={30} 
                    prefix={<AriIcon name="volume_down" />} 
                    suffix={<AriIcon name="volume_up" />} 
                />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent 
                    defaultValue={50} 
                    prefix="0°C" 
                    suffix="100°C" 
                />
            </AriContainer>
        </AriFlex>
    );
};`,
    "ShapeSlider": `export const ShapeSlider: React.FC = () => {
  return (
        <AriFlex vertical space={24}>
            <AriContainer>
                <AriSliderComponent defaultValue={30} shape="default" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={50} shape="rounded" />
            </AriContainer>
            <AriContainer>
                <AriSliderComponent defaultValue={70} shape="square" />
            </AriContainer>
        </AriFlex>
    );
};`,
  },
  "social-login-button": {
    "BasicSocialLogin": `export const BasicSocialLogin: React.FC = () => (
  <>
        <AriGoogleLoginButton />
        <AriAppleLoginButton />
    </>
);`,
  },
  "spin": {
    "BasicSpin": `export const BasicSpin = () => {
  const [spinning, setSpinning] = useState(true);
    const cs = useCss("")
    return (
        <AriFlex>
            <AriSpin spinning={spinning}>
                <div style={{ padding: '20px', backgroundColor: cs.getCssVarName('color', 'bg'), minHeight: '120px' }}>
                    可以被包裹的内容区域
                </div>
            </AriSpin>

            <AriButton onClick={() => setSpinning(!spinning)}>
                {spinning ? '停止加载' : '开始加载'}
            </AriButton>
        </AriFlex>
    );
};`,
    "CustomIconDemo": `export const CustomIconDemo = () => {
  return (
        <AriFlex>

            <AriSpin icon={<AriIcon name="refresh" className="custom-spinning-icon" />}>
                <div style={{ padding: '20px' }}>使用自定义图标</div>
            </AriSpin>


            <AriSpin
                icon={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AriIcon name="sync" className="spinning-icon" />
                        <AriIcon name="arrow_forward" style={{ marginLeft: '5px' }} />
                    </div>
                }
            >
                <div style={{ padding: '20px' }}>使用复杂自定义图标</div>
            </AriSpin>
        </AriFlex>
    );
};`,
    "FullScreenDemo": `export const FullScreenDemo = () => {
  const [fullScreenSpinning, setFullScreenSpinning] = useState(false);

    return (
        <>
            <AriButton onClick={() => setFullScreenSpinning(true)}>
                显示全屏加载
            </AriButton>

            {fullScreenSpinning && (
                <AriSpin
                    fullScreen
                    spinning={true}
                    tip="加载中，请稍候..."
                    onClick={() => setFullScreenSpinning(false)}
                />
            )}
            <p>点击全屏遮罩可关闭</p>
        </>
    );
};`,
    "SizeDemo": `export const SizeDemo = () => {
  return (
        <AriFlex space={48} align='center'>

            <AriSpin size="xs">
                <div style={{ padding: '20px' }}>超小尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="sm">
                <div style={{ padding: '20px' }}>小尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="default">
                <div style={{ padding: '20px' }}>默认尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="lg">
                <div style={{ padding: '20px' }}>大尺寸加载图标</div>
            </AriSpin>

            <AriSpin size="xl">
                <div style={{ padding: '20px' }}>超大尺寸加载图标</div>
            </AriSpin>
        </AriFlex>
    );
};`,
    "TipDemo": `export const TipDemo = () => {
  return (
        <AriFlex space={48} align='center'>
            <AriSpin tip="加载中，请稍候...">
                <div style={{ padding: '20px' }}>内容区域</div>
            </AriSpin>
        </AriFlex>
    );
};`,
  },
  "statistic": {
    "BasicStatistic": `export const BasicStatistic: React.FC = () => {
  return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="活跃用户"
                value={112893}
            />
            <AriStatistic
                title="反馈数"
                value={1128}
                prefix={<AriIcon name="attach_email" />}
            />
            <AriStatistic
                title="完成率"
                value={93.5}
                suffix="%"
                precision={1}
            />
        </AriFlex>
    );
};`,
    "StatisticWithFormat": `export const StatisticWithFormat: React.FC = () => {
  return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="数值格式化"
                value={1234567.89}
                precision={2}
            />
            <AriStatistic
                title="自定义分隔符"
                value={1234567.89}
                groupSeparator=" "
                decimalSeparator="."
                precision={2}
            />
            <AriStatistic
                title="自定义格式化函数"
                value={9527}
                formatter={(value) => \`¥ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
        </AriFlex>
    );
};`,
    "StatisticSize": `export const StatisticSize: React.FC = () => {
  return (
        <AriFlex space={24} vertical>
            <AriStatistic
                title="小尺寸"
                value={128.56}
                size="small"
                prefix={<AriIcon name="star" />}
            />
            <AriStatistic
                title="默认尺寸"
                value={9527}
                prefix={<AriIcon name="star" />}
            />
            <AriStatistic
                title="大尺寸"
                value={10086}
                size="large"
                prefix={<AriIcon name="star" />}
            />
        </AriFlex>
    );
};`,
    "StatisticColor": `export const StatisticColor: React.FC = () => {
  return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="默认"
                value={1234}
            />
            <AriStatistic
                title="主色"
                value={1234}
                color="primary"
            />
            <AriStatistic
                title="成功"
                value={1234}
                color="success"
            />
            <AriStatistic
                title="警告"
                value={1234}
                color="warning"
            />
            <AriStatistic
                title="危险"
                value={1234}
                color="danger"
            />
            <AriStatistic
                title="信息"
                value={1234}
                color="info"
            />
        </AriFlex>
    );
};`,
    "StatisticLayout": `export const StatisticLayout: React.FC = () => {
  return (
        <AriFlex space={24} vertical>
            <AriTypography variant='h4' value="垂直布局" />
            <AriStatistic
                title="垂直布局"
                value={1234}
                prefix={<AriIcon name="trending_up" />}
                suffix={<AriIcon name="arrow_outward" />}
            />
            
            <AriTypography variant='h4' value="内联布局" />
            <AriStatistic
                title="内联布局"
                value={1234}
                layout="inline"
                prefix={<AriIcon name="trending_up" />}
                suffix={<AriIcon name="arrow_outward" />}
            />
        </AriFlex>
    );
};`,
    "StatisticAlign": `export const StatisticAlign: React.FC = () => {
  return (
        <AriRow gutter={[24, 24]}>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="左对齐（默认）"
                        value={1234}
                        align="left"
                    />
                </AriContainer>
            </AriCol>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="居中"
                        value={1234}
                        align="center"
                    />
                </AriContainer>
            </AriCol>
            <AriCol span={8}>
                <AriContainer>
                    <AriStatistic
                        title="右对齐"
                        value={1234}
                        align="right"
                    />
                </AriContainer>
            </AriCol>
        </AriRow>
    );
};`,
    "StatisticLoading": `export const StatisticLoading: React.FC = () => {
  return (
        <AriFlex space={24} wrap>
            <AriStatistic
                title="加载中"
                value={1234}
                loading={true}
            />
            <AriStatistic
                title="加载中"
                value={5678}
                loading={true}
                size="large"
            />
        </AriFlex>
    );
};`,
    "CountdownDemo": `export const CountdownDemo: React.FC = () => {
  return (
        <AriFlex space={24} vertical>
            <AriTypography variant='h4' value="基本倒计时" />
            <AriFlex space={24} wrap>
                <AriCountdown
                    title="秒倒计时"
                    value={Date.now() + 10000}
                    format="ss秒"
                    onFinish={() => console.log('倒计时完成!')}
                />
                <AriCountdown
                    title="标准倒计时"
                    value={Date.now() + 1000 * 60 * 60 * 2}
                    format="HH:mm:ss"
                />
            </AriFlex>
            
            <AriTypography variant='h4' value="自定义格式" />
            <AriFlex space={24} wrap>
                <AriCountdown
                    title="天时分秒"
                    value={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 30}
                    format="D天 H时 m分 s秒"
                />
                <AriCountdown
                    title="带前缀和后缀"
                    value={Date.now() + 1000 * 60 * 60 * 24 * 2}
                    format="DD天 HH:mm:ss"
                    prefix={<AriIcon name="timer" />}
                    suffix="后结束"
                />
            </AriFlex>
        </AriFlex>
    );
};`,
  },
  "sticky": {
    "BasicSticky": `export const BasicSticky: React.FC = () => (
  <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky>
            <AriContainer 
                bgColor="#1677ff" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                我会粘在顶部
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);`,
    "PositionSticky": `export const PositionSticky: React.FC = () => (
  <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky position="top" offset={0}>
            <AriContainer 
                bgColor="#1677ff" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                顶部粘性 (Top)
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, padding: 16 }}>
            <AriTypography value="内容区域" />
        </AriContainer>
        
        <AriSticky position="bottom" offset={0}>
            <AriContainer 
                bgColor="#52c41a" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                底部粘性 (Bottom)
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);`,
    "OffsetSticky": `export const OffsetSticky: React.FC = () => (
  <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
        <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
            <AriTypography value="向下滚动查看效果" />
        </AriContainer>
        
        <AriSticky offset={20}>
            <AriContainer 
                bgColor="#ff4d4f" 
                style={{ padding: '10px 20px', color: 'white' }}
            >
                距顶部20px
            </AriContainer>
        </AriSticky>
        
        <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
            <AriTypography value="继续向下滚动..." />
        </AriContainer>
    </AriContainer>
);`,
    "StickyStateDemo": `export const StickyStateDemo: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <AriContainer
            ref={scrollContainerRef}
            style={{
                height: 400,
                overflow: 'auto',
                position: 'relative',
                border: '1px solid #eee'
            }}
        >
            <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
                <AriTypography value="向下滚动查看效果" />
            </AriContainer>

            <AriSticky
                onStickyChange={setIsSticky}
                enabled={true}
                scrollContainer={scrollContainerRef}
            >
                <AriContainer
                    bgColor={isSticky ? '#722ed1' : '#faad14'}
                    style={{
                        padding: '10px 20px',
                        color: 'white',
                        transition: 'background-color 0.3s'
                    }}
                >
                    {isSticky ? '我现在是粘性状态' : '我现在是普通状态'}
                </AriContainer>
            </AriSticky>

            <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
                <AriTypography value="继续向下滚动..." />
            </AriContainer>
        </AriContainer>
    );
};

export const DisabledSticky: React.FC = () => {
    const [enabled, setEnabled] = useState(true);
    
    return (
        <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
            <AriContainer style={{ padding: '10px 0' }}>
                <button 
                    onClick={() => setEnabled(!enabled)} 
                    style={{ 
                        padding: '5px 10px', 
                        background: enabled ? '#52c41a' : '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {enabled ? '禁用粘性' : '启用粘性'}
                </button>
            </AriContainer>
            
            <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
                <AriTypography value="向下滚动查看效果" />
            </AriContainer>
            
            <AriSticky enabled={enabled}>
                <AriContainer 
                    bgColor="#1677ff" 
                    style={{ padding: '10px 20px', color: 'white' }}
                >
                    {enabled ? '粘性已启用' : '粘性已禁用'}
                </AriContainer>
            </AriSticky>
            
            <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
                <AriTypography value="继续向下滚动..." />
            </AriContainer>
        </AriContainer>
    );
};
`,
    "DisabledSticky": `export const DisabledSticky: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
    
    return (
        <AriContainer style={{ height: 400, overflow: 'auto', position: 'relative', border: '1px solid #eee' }}>
            <AriContainer style={{ padding: '10px 0' }}>
                <button 
                    onClick={() => setEnabled(!enabled)} 
                    style={{ 
                        padding: '5px 10px', 
                        background: enabled ? '#52c41a' : '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {enabled ? '禁用粘性' : '启用粘性'}
                </button>
            </AriContainer>
            
            <AriContainer style={{ height: 200, background: '#f5f5f5', padding: 16 }}>
                <AriTypography value="向下滚动查看效果" />
            </AriContainer>
            
            <AriSticky enabled={enabled}>
                <AriContainer 
                    bgColor="#1677ff" 
                    style={{ padding: '10px 20px', color: 'white' }}
                >
                    {enabled ? '粘性已启用' : '粘性已禁用'}
                </AriContainer>
            </AriSticky>
            
            <AriContainer style={{ height: 400, background: '#f0f0f0', padding: 16 }}>
                <AriTypography value="继续向下滚动..." />
            </AriContainer>
        </AriContainer>
    );
};`,
  },
  "switch": {
    "BasicSwitch": `export const BasicSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
    };

    return (
        <AriContainer>
            <AriSwitch checked={checked} onChange={handleChange} />
        </AriContainer>
    );
};`,
    "SizeSwitch": `export const SizeSwitch: React.FC = () => {
  return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch size="sm" />
            </AriContainer>
            <AriContainer>
                <AriSwitch size="default" />
            </AriContainer>
            <AriContainer>
                <AriSwitch size="lg" />
            </AriContainer>
        </AriFlex>
    );
};`,
    "DisabledSwitch": `export const DisabledSwitch: React.FC = () => {
  return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch disabled />
            </AriContainer>
            <AriContainer>
                <AriSwitch checked disabled />
            </AriContainer>
        </AriFlex>
    );
};`,
    "LoadingSwitch": `export const LoadingSwitch: React.FC = () => {
  return (
        <AriFlex space={24}>
            <AriContainer>
                <AriSwitch loading />
            </AriContainer>
            <AriContainer>
                <AriSwitch checked loading />
            </AriContainer>
        </AriFlex>
    );
};`,
    "TextSwitch": `export const TextSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
    };

    return (
        <AriFlex vertical>
            <AriSwitch checked={checked} onChange={handleChange} checkedChildren="开启" unCheckedChildren="关闭" /> 
        </AriFlex>
    );
};`,
  },
  "table": {
    "BasicTable": `export const BasicTable: React.FC = () => {
  const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    return (
        <AriTable data={data} columns={columns} />
    )
}



export const BorderedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <div>
            <h4>有边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={true}
            />

            <h4 style={{ marginTop: '30px' }}>无边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={false}
            />
        </div>
    );
}


export const CustomRenderTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, status: 'active' },
        { name: '李四', age: 30, status: 'inactive' },
        { name: '王五', age: 28, status: 'active' },
        { name: '赵六', age: 32, status: 'inactive' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        {
            title: '状态',
            key: 'status',
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '4px 8px',
                    borderRadius: '2px',
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    return (
        <AriTable data={data} columns={columns} />
    )
}

export const FixedColumnsTable: React.FC = () => {
    const data = [
        { id: 1, name: '张三', age: 25, city: '北京', address: '朝阳区建国路88号', phone: '13812345678', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 30, city: '上海', address: '浦东新区陆家嘴1号', phone: '13912345678', email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 28, city: '广州', address: '天河区体育西路123号', phone: '13712345678', email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 32, city: '深圳', address: '南山区科技园456号', phone: '13612345678', email: 'zhaoliu@example.com' },
    ];

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80, fixed: 'left' },
        { title: '姓名', key: 'name', width: 100, fixed: 'left' },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '电话', key: 'phone', width: 150 },
        { title: '邮箱', key: 'email', width: 180, fixed: 'right' }
    ];

    return (
        <div style={{ width: '100%' }}>
            <AriTable
                data={data}
                columns={columns}
                bordered
            />
        </div>
    );
}

export const SelectableTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "BorderedTable": `export const BorderedTable: React.FC = () => {
  const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <div>
            <h4>有边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={true}
            />

            <h4 style={{ marginTop: '30px' }}>无边框表格</h4>
            <AriTable
                data={data}
                columns={columns}
                bordered={false}
            />
        </div>
    );
}


export const CustomRenderTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, status: 'active' },
        { name: '李四', age: 30, status: 'inactive' },
        { name: '王五', age: 28, status: 'active' },
        { name: '赵六', age: 32, status: 'inactive' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        {
            title: '状态',
            key: 'status',
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '4px 8px',
                    borderRadius: '2px',
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    return (
        <AriTable data={data} columns={columns} />
    )
}

export const FixedColumnsTable: React.FC = () => {
    const data = [
        { id: 1, name: '张三', age: 25, city: '北京', address: '朝阳区建国路88号', phone: '13812345678', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 30, city: '上海', address: '浦东新区陆家嘴1号', phone: '13912345678', email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 28, city: '广州', address: '天河区体育西路123号', phone: '13712345678', email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 32, city: '深圳', address: '南山区科技园456号', phone: '13612345678', email: 'zhaoliu@example.com' },
    ];

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80, fixed: 'left' },
        { title: '姓名', key: 'name', width: 100, fixed: 'left' },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '电话', key: 'phone', width: 150 },
        { title: '邮箱', key: 'email', width: 180, fixed: 'right' }
    ];

    return (
        <div style={{ width: '100%' }}>
            <AriTable
                data={data}
                columns={columns}
                bordered
            />
        </div>
    );
}

export const SelectableTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "CustomRenderTable": `export const CustomRenderTable: React.FC = () => {
  const data = [
        { name: '张三', age: 25, status: 'active' },
        { name: '李四', age: 30, status: 'inactive' },
        { name: '王五', age: 28, status: 'active' },
        { name: '赵六', age: 32, status: 'inactive' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        {
            title: '状态',
            key: 'status',
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '4px 8px',
                    borderRadius: '2px',
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    return (
        <AriTable data={data} columns={columns} />
    )
}

export const FixedColumnsTable: React.FC = () => {
    const data = [
        { id: 1, name: '张三', age: 25, city: '北京', address: '朝阳区建国路88号', phone: '13812345678', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 30, city: '上海', address: '浦东新区陆家嘴1号', phone: '13912345678', email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 28, city: '广州', address: '天河区体育西路123号', phone: '13712345678', email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 32, city: '深圳', address: '南山区科技园456号', phone: '13612345678', email: 'zhaoliu@example.com' },
    ];

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80, fixed: 'left' },
        { title: '姓名', key: 'name', width: 100, fixed: 'left' },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '电话', key: 'phone', width: 150 },
        { title: '邮箱', key: 'email', width: 180, fixed: 'right' }
    ];

    return (
        <div style={{ width: '100%' }}>
            <AriTable
                data={data}
                columns={columns}
                bordered
            />
        </div>
    );
}

export const SelectableTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "FixedColumnsTable": `export const FixedColumnsTable: React.FC = () => {
  const data = [
        { id: 1, name: '张三', age: 25, city: '北京', address: '朝阳区建国路88号', phone: '13812345678', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', age: 30, city: '上海', address: '浦东新区陆家嘴1号', phone: '13912345678', email: 'lisi@example.com' },
        { id: 3, name: '王五', age: 28, city: '广州', address: '天河区体育西路123号', phone: '13712345678', email: 'wangwu@example.com' },
        { id: 4, name: '赵六', age: 32, city: '深圳', address: '南山区科技园456号', phone: '13612345678', email: 'zhaoliu@example.com' },
    ];

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80, fixed: 'left' },
        { title: '姓名', key: 'name', width: 100, fixed: 'left' },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '电话', key: 'phone', width: 150 },
        { title: '邮箱', key: 'email', width: 180, fixed: 'right' }
    ];

    return (
        <div style={{ width: '100%' }}>
            <AriTable
                data={data}
                columns={columns}
                bordered
            />
        </div>
    );
}

export const SelectableTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "SelectableTable": `export const SelectableTable: React.FC = () => {
  const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriTable
            data={data}
            columns={columns}
            selectable
            onSelectionChange={(selectedItems) => {
                console.log('选中的行:', selectedItems);
            }}
        />
    );
}



export const StripedTable: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "StripedTable": `export const StripedTable: React.FC = () => {
  const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
        { name: '钱七', age: 27, city: '杭州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];
    
    return (
        <AriTable
            data={data}
            columns={columns}
            striped
        />
    );
}

export const StickyHeaderTable: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "StickyHeaderTable": `export const StickyHeaderTable: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    // 生成大量数据以便展示滚动效果
    const generateData = () => {
        const data = [];
        for (let i = 1; i <= 20; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + i,
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                address: \`示例地址\${i}号\`,
                date: \`2023-\${Math.floor(i/3) + 1}-\${i % 28 + 1}\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 80 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        { title: '地址', key: 'address', width: 200 },
        { title: '日期', key: 'date', width: 120 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前表头状态: \${isSticky ? '已固定' : '未固定'}\`} />
            
            <div 
                ref={containerRef} 
                style={{ 
                    height: '300px', 
                    overflow: 'auto', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                }}
            >
                <AriTable
                    data={generateData()}
                    columns={columns}
                    bordered
                    stickyHeader={true}
                    parentContainer={containerRef}
                    onStickyChange={setIsSticky}
                />
            </div>
            
            <AriTypography variant='body' value="滚动上面的容器查看表头固定效果" />
        </AriFlex>
    );
}

export const RowEventsTable: React.FC = () => {
    const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "RowEventsTable": `export const RowEventsTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
        { name: '赵六', age: 32, city: '深圳' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    const handleRowProps = (record: { name: string; age: number; city: string }) => {
        return {
            onClick: () => {
                setClickedRow(record.name);
            },
            onMouseEnter: () => {
                setHoveredRow(record.name);
            },
            onMouseLeave: () => {
                setHoveredRow(null);
            },
            style: {
                cursor: 'pointer',
                backgroundColor: record.name === hoveredRow ? 'rgba(24, 144, 255, 0.1)' : undefined,
                transition: 'background-color 0.3s'
            }
        };
    };

    return (
        <AriFlex vertical space={16}>
            <AriFlex space={8} align="center">
                <span>当前悬停行: </span>
                <span style={{ fontWeight: 'bold' }}>{hoveredRow || '无'}</span>
            </AriFlex>
            <AriFlex space={8} align="center">
                <span>当前点击行: </span>
                <span style={{ fontWeight: 'bold' }}>{clickedRow || '无'}</span>
            </AriFlex>
            
            <AriTable
                data={data}
                columns={columns}
                bordered
                onRow={handleRowProps}
            />
            
            <AriTypography variant='body' value="将鼠标悬停在行上或点击行查看效果。onRow 属性可以为表格行添加自定义事件处理和样式。" />
        </AriFlex>
    );
}

export const SizeDemo: React.FC = () => {
    const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "SizeDemo": `export const SizeDemo: React.FC = () => {
  const data = [
        { name: '张三', age: 25, city: '北京' },
        { name: '李四', age: 30, city: '上海' },
        { name: '王五', age: 28, city: '广州' },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={24}>
            <AriFlex vertical space={8}>
                <h4>紧凑型表格 (xs)</h4>
                <AriTable data={data} columns={columns} size="xs" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>默认尺寸 (default)</h4>
                <AriTable data={data} columns={columns} size="default" bordered />
            </AriFlex>
            
            <AriFlex vertical space={8}>
                <h4>宽松型表格 (xl)</h4>
                <AriTable data={data} columns={columns} size="xl" bordered />
            </AriFlex>
        </AriFlex>
    );
}

export const EllipsisDemo: React.FC = () => {
    const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "EllipsisDemo": `export const EllipsisDemo: React.FC = () => {
  const data = [
        { 
            name: '张三', 
            description: '这是一个非常长的描述文本，用来演示省略号功能。当文本超出列宽时，会显示省略号，并在鼠标悬停时显示完整内容的提示框。',
            city: '北京市朝阳区建国路88号SOHO现代城' 
        },
        { 
            name: '李四', 
            description: '另一个长描述文本示例，展示ellipsis属性的效果',
            city: '上海市浦东新区陆家嘴金融贸易区' 
        },
        { 
            name: '王五', 
            description: '短描述',
            city: '广州市天河区珠江新城' 
        },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name', width: 80 },
        { 
            title: '描述', 
            key: 'description', 
            width: 200,
            ellipsis: true 
        },
        { 
            title: '地址', 
            key: 'city', 
            maxWidth: 150,
            ellipsis: true 
        },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable data={data} columns={columns} bordered />
            <AriTypography variant='body' value="描述列和地址列启用了文本省略功能，当内容超出列宽时会显示省略号，鼠标悬停可查看完整内容。" />
        </AriFlex>
    );
}

export const MaxHeightDemo: React.FC = () => {
    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "MaxHeightDemo": `export const MaxHeightDemo: React.FC = () => {
  const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                email: \`user\${i}@example.com\`
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 80 },
        { title: '年龄', key: 'age', width: 60 },
        { title: '城市', key: 'city', width: 80 },
        { title: '邮箱', key: 'email', width: 180 }
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value="设置 maxHeight={300} 限制表格内容区域高度，超出部分会出现滚动条。" />
            <AriTable 
                data={generateData(30)} 
                columns={columns} 
                bordered 
                maxHeight={300}
                stickyHeader
            />
        </AriFlex>
    );
}

export const PaginationDemo: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "PaginationDemo": `export const PaginationDemo: React.FC = () => {
  const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const generateData = (count: number) => {
        const data = [];
        for (let i = 1; i <= count; i++) {
            data.push({
                id: i,
                name: \`用户\${i}\`,
                age: 20 + (i % 50),
                city: ['北京', '上海', '广州', '深圳', '杭州'][i % 5],
                status: i % 3 === 0 ? 'inactive' : 'active'
            });
        }
        return data;
    };

    const columns: AriTableColumn[] = [
        { title: 'ID', key: 'id', width: 60 },
        { title: '姓名', key: 'name', width: 100 },
        { title: '年龄', key: 'age', width: 80 },
        { title: '城市', key: 'city', width: 100 },
        {
            title: '状态',
            key: 'status',
            width: 100,
            render: (value: string) => (
                <span style={{
                    color: value === 'active' ? '#52c41a' : '#ff4d4f',
                    backgroundColor: value === 'active' ? '#f6ffed' : '#fff2f0',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontSize: '12px'
                }}>
                    {value === 'active' ? '活跃' : '不活跃'}
                </span>
            )
        }
    ];

    const handlePageChange = (page: number, size: number) => {
        setCurrent(page);
        console.log('页码变化:', page, size);
    };

    const handlePageSizeChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrent(1); // 重置到第一页
        console.log('每页条数变化:', page, size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriTypography variant='body' value={\`当前第 \${current} 页，每页显示 \${pageSize} 条数据\`} />
            <AriTable 
                data={generateData(85)} 
                columns={columns} 
                bordered
                current={current}
                pageSize={pageSize}
                showPagination={true}
                showSizeChanger={true}
                showQuickJumper={true}
                showTotal={(total, range) => \`共 \${total} 条，当前显示 \${range[0]}-\${range[1]} 条\`}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                pageSizeOptions={[5, 10, 20, 50]}
            />
        </AriFlex>
    );
}

export const EmptyPlaceholderDemo: React.FC = () => {
    const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
    "EmptyPlaceholderDemo": `export const EmptyPlaceholderDemo: React.FC = () => {
  const data = [
        { name: '张三', age: null, city: '' },
        { name: '', age: 30, city: '上海' },
        { name: '王五', age: 28, city: undefined },
    ];

    const columns: AriTableColumn[] = [
        { title: '姓名', key: 'name' },
        { title: '年龄', key: 'age' },
        { title: '城市', key: 'city' },
    ];

    return (
        <AriFlex vertical space={16}>
            <AriTable 
                data={data} 
                columns={columns} 
                bordered 
                emptyPlaceholder="暂无数据"
            />
            <AriTypography variant='body' value="表格中的空值（null、undefined、空字符串）会显示为自定义占位符 '暂无数据'。" />
        </AriFlex>
    );
}
`,
  },
  "tabs": {
    "BasicTabs": `export const BasicTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState('1');

    const items = [
        { key: '1', label: '标签1', children: '标签1的内容' },
        { key: '2', label: '标签2', children: '标签2的内容' },
        { key: '3', label: '标签3', children: '标签3的内容' },
    ];

    return (
        <AriTabs
            activeKey={activeKey}
            items={items}
            onChange={setActiveKey}
        />
    );
};`,
    "DisabledTabs": `export const DisabledTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState('1');
    
    const items = [
        { key: '1', label: '标签1', children: '标签1的内容' },
        { key: '2', label: '标签2', children: '标签2的内容', disabled: true },
        { key: '3', label: '标签3', children: '标签3的内容' },
    ];

    return (
        <AriTabs 
            activeKey={activeKey} 
            items={items}
            onChange={setActiveKey}
        />
    );
};`,
  },
  "tag": {
    "BasicTag": `export const BasicTag: React.FC = () => (
  <AriTag>默认标签</AriTag>
);`,
    "ClosableDemo": `export const ClosableDemo: React.FC = () => {
  const handleClose = () => {
        AriMessage.success('标签已关闭');
    };

    return (
        <AriTag closable onClose={handleClose}>
            可关闭标签
        </AriTag>
    );
};`,
    "ColorTagDemo": `export const ColorTagDemo: React.FC = () => (
  <AriFlex space={8}>
        <AriTag color="primary">主要</AriTag>
        <AriTag color="success">成功</AriTag>
        <AriTag color="warning">警告</AriTag>
        <AriTag color="danger">危险</AriTag>
        <AriTag color="info">信息</AriTag>
        <AriTag color="#f50">自定义颜色 #f50</AriTag>
        <AriTag color="#2db7f5">自定义颜色 #2db7f5</AriTag>
        <AriTag color="#87d068">自定义颜色 #87d068</AriTag>
    </AriFlex>
);`,
    "IconTagDemo": `export const IconTagDemo: React.FC = () => (
  <AriFlex space={8}>
        <AriTag icon="info-circle">信息</AriTag>
        <AriTag icon="check-circle">成功</AriTag>
        <AriTag icon="warning-circle">警告</AriTag>
        <AriTag icon="close-circle">错误</AriTag>
        <AriTag icon="star" color="warning">收藏</AriTag>
        <AriTag icon="heart" color="danger">喜爱</AriTag>
    </AriFlex>
);`,
    "BorderedTagDemo": `export const BorderedTagDemo: React.FC = () => (
  <AriFlex space={8}>
        <AriTag bordered>默认边框</AriTag>
        <AriTag bordered color="primary">主要</AriTag>
        <AriTag bordered color="success">成功</AriTag>
        <AriTag bordered color="warning">警告</AriTag>
        <AriTag bordered color="danger">危险</AriTag>
        <AriTag bordered color="info">信息</AriTag>
    </AriFlex>
);`,
    "CombinationDemo": `export const CombinationDemo: React.FC = () => (
  <AriFlex space={8}>
        <AriTag bordered color="primary" icon="tag">标签</AriTag>
        <AriTag bordered color="success" icon="check-circle" closable>已完成</AriTag>
        <AriTag bordered color="warning" icon="clock">待处理</AriTag>
        <AriTag bordered color="danger" icon="exclamation-circle" closable>紧急</AriTag>
    </AriFlex>
);`,
  },
  "text": {
    "BasicText": `export const BasicText: React.FC = () => (
  <AriFlex vertical>
        <AriTypography variant="h1" value="这是一个标题" />
        <AriTypography variant="body" value="这是一段正文内容，展示了最基本的文本组件使用方式。" />
        <AriTypography variant="caption" value="这是一段说明文本" />
    </AriFlex>
);`,
    "TextEvents": `export const TextEvents: React.FC = () => {
  const handleClick = () => {
        AriMessage.info('文本被点击了');
    };

    const handleMouseEnter = () => {
        AriMessage.info('鼠标移入');
    };

    const handleMouseLeave = () => {
        AriMessage.info('鼠标移出');
    };

    return (
        <AriFlex vertical>
            <AriTypography
                variant="body"
                value="这是一个可点击的文本，点击试试看"
                onClick={handleClick}
            />

            <AriTypography
                variant="body"
                value="这是一个带有鼠标移入移出效果的文本，移动鼠标试试看"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </AriFlex>
    );
};`,
    "TextOverflow": `export const TextOverflow: React.FC = () => (
  <AriFlex vertical>

        <AriTypography variant="h3" value="单行省略" style={{ marginTop: '1rem' }} />
        <AriTypography variant="body" value="通过内置的text-truncate" />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。"
            className="text-truncate"
            style={{
                width: '300px',
            }}
        />
        <AriTypography variant="body" value="通过参数设置" />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。"
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'
            style={{
                width: '300px',
            }}
        />

        <AriTypography variant="h3" value="多行省略" style={{ marginTop: '1rem' }} />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。"
            overflow='hidden'
            textOverflow='ellipsis'
            lineClamp={2}
            style={{
                width: '300px',
            }}
        />

        <AriTypography variant="h3" value="不换行" style={{ marginTop: '1rem' }} />
        <div style={{ width: '300px', border: '1px dashed #ccc', padding: '8px' }}>
            <AriTypography
                variant="body"
                value="这段文本设置了whiteSpace: nowrap，不会自动换行，可能会超出容器。"
                whiteSpace='nowrap'
            />
        </div>
    </AriFlex>
);`,
    "TextTypes": `export const TextTypes: React.FC = () => (
  <AriFlex vertical>
        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h1" value="标题1文本 - H1" />
            <AriTypography variant="body" value="用于页面的主标题，如主要内容区域的标题、仪表盘的标题、表格/列表的标题。字体最大，视觉重量最重" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h2" value="标题2文本 - H2" />
            <AriTypography variant="body" value="用于次级界面元素的标题，如侧边栏导航分组、设置面板的类别标题、模态框的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h3" value="标题3文本 - H3" />
            <AriTypography variant="body" value="用于界面中较小内容块的标题，如卡片组件的标题、表单分区的标题、折叠面板的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h4" value="标题4文本 - H4" />
            <AriTypography variant="body" value="用于需要突出显示的界面元素，如表格列头、数据卡片上的数值标签、统计图表的标题、筛选选项的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="overline" value="上标文本 - Overline" />
            <AriTypography variant="body" value="用于目录或导航类元素，如文档页右侧的目录项、树形控件的节点文本、步骤导航的步骤名称" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="body" value="正文文本 - Body " />
            <AriTypography variant="body" value="用于界面的主要文本内容，如段落文本、描述信息、对话框内容、列表项文本。这是最常用的文本样式" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="caption" value="说明文本 - Caption" />
            <AriTypography variant="body" value="用于最小级别的辅助说明，如输入框下方的格式提示、图表下方的数据说明、文件上传区域的格式限制、表格底部的提示信息。" />
        </AriFlex>
    </AriFlex>
);`,
  },
  "time-picker": {
    "BasicTimePicker": `export const BasicTimePicker: React.FC = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

    const handleChange = (newTime: Date | undefined) => {
        setTime(newTime);
    };

    return (
        <AriFlex vertical space={16} height={400}>
            <AriTimePicker value={time} onChange={handleChange} />
            <AriTimePicker defaultValue={new Date(2024, 1, 1, 10, 30, 0)} />
            <AriTimePicker use12Hours showSecond={false} />
            <AriTimePicker disabled />
            <AriTimePicker clearable={false} />
        </AriFlex>
    );
};

export const ControlledTimePicker: React.FC = () => {
    const [time, setTime] = useState<Date | undefined>(new Date());

    return (
      <AriFlex vertical space={16} height={300}>
        <AriTimePicker value={time} onChange={setTime} />
        <AriButton onClick={() => setTime(new Date(2025, 4, 9, 12, 0, 0))}>
          Set Time to 12:00
        </AriButton>
        <AriButton onClick={() => setTime(undefined)}>Clear Time</AriButton>
        <div>Selected Time: {time ? time.toLocaleTimeString() : "None"}</div>
      </AriFlex>
    );
};

export const TimePickerStep: React.FC = () => {
    return (
        <AriTimePicker step={{ hour: 2, minute: 15, second: 30 }} />
    );
};

export const TimePickerMinMax: React.FC = () => {
    const minTime = new Date();
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(18, 0, 0, 0);

    return (
        <AriTimePicker minTime={minTime} maxTime={maxTime} />
    );
};`,
    "ControlledTimePicker": `export const ControlledTimePicker: React.FC = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

    return (
      <AriFlex vertical space={16} height={300}>
        <AriTimePicker value={time} onChange={setTime} />
        <AriButton onClick={() => setTime(new Date(2025, 4, 9, 12, 0, 0))}>
          Set Time to 12:00
        </AriButton>
        <AriButton onClick={() => setTime(undefined)}>Clear Time</AriButton>
        <div>Selected Time: {time ? time.toLocaleTimeString() : "None"}</div>
      </AriFlex>
    );
};

export const TimePickerStep: React.FC = () => {
    return (
        <AriTimePicker step={{ hour: 2, minute: 15, second: 30 }} />
    );
};

export const TimePickerMinMax: React.FC = () => {
    const minTime = new Date();
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(18, 0, 0, 0);

    return (
        <AriTimePicker minTime={minTime} maxTime={maxTime} />
    );
};`,
    "TimePickerStep": `export const TimePickerStep: React.FC = () => {
  return (
        <AriTimePicker step={{ hour: 2, minute: 15, second: 30 }} />
    );
};`,
    "TimePickerMinMax": `export const TimePickerMinMax: React.FC = () => {
  const minTime = new Date();
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(18, 0, 0, 0);

    return (
        <AriTimePicker minTime={minTime} maxTime={maxTime} />
    );
};`,
  },
  "timeline": {
    "BasicTimeline": `export const BasicTimeline: React.FC = () => (
  <AriContainer>
        <AriTimeline 
            items={[
                {
                    label: '2024-01-10',
                    children: <AriTypography variant='h3'>创建项目</AriTypography>
                },
                {
                    label: '2024-02-15',
                    children: <AriTypography variant='h3'>完成第一阶段开发</AriTypography>
                },
                {
                    label: '2024-04-30',
                    children: <AriTypography variant='h3'>测试和修复</AriTypography>
                },
                {
                    label: '2024-05-10',
                    children: <AriTypography variant='h3'>发布</AriTypography>
                }
            ]}
        />
    </AriContainer>
);`,
    "DirectionTimeline": `export const DirectionTimeline: React.FC = () => (
  <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">垂直方向（默认）</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                direction="vertical"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">水平方向</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布</AriTypography>
                    }
                ]}
                direction="horizontal"
            />
        </AriContainer>
    </AriFlex>
);`,
    "ModeTimeline": `export const ModeTimeline: React.FC = () => (
  <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">左侧模式（默认）</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    }
                ]}
                mode="left"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">右侧模式</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    }
                ]}
                mode="right"
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">居中模式</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '2024-01-10',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '2024-02-15',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '2024-04-30',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '2024-05-10',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                mode="center"
            />
        </AriContainer>
    </AriFlex>
);`,
    "CustomNodeTimeline": `export const CustomNodeTimeline: React.FC = () => (
  <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">自定义颜色</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '进行中',
                        children: <AriTypography variant='h3'>当前任务</AriTypography>,
                        color: 'primary'
                    },
                    {
                        label: '成功',
                        children: <AriTypography variant='h3'>已完成任务</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '警告',
                        children: <AriTypography variant='h3'>需注意任务</AriTypography>,
                        color: 'warning'
                    },
                    {
                        label: '错误',
                        children: <AriTypography variant='h3'>有问题任务</AriTypography>,
                        color: 'danger'
                    },
                    {
                        label: '信息',
                        children: <AriTypography variant='h3'>参考信息</AriTypography>,
                        color: 'info'
                    },
                    {
                        label: '自定义色彩',
                        children: <AriTypography variant='h3'>自定义颜色</AriTypography>,
                        color: '#8A2BE2'
                    }
                ]}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">自定义图标</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '创建时间',
                        children: <AriTypography variant='h3'>2024-01-10 创建项目</AriTypography>,
                        icon: <AriIcon name="clock" />
                    },
                    {
                        label: '完成阶段',
                        children: <AriTypography variant='h3'>2024-02-15 完成第一阶段</AriTypography>,
                        icon: <AriIcon name="check-circle" />,
                        color: 'success'
                    },
                    {
                        label: '注意事项',
                        children: <AriTypography variant='h3'>2024-04-30 测试中发现问题</AriTypography>,
                        icon: <AriIcon name="exclamation-circle" />,
                        color: 'warning'
                    },
                    {
                        label: '参考信息',
                        children: <AriTypography variant='h3'>2024-05-10 发布相关信息</AriTypography>,
                        icon: <AriIcon name="info-circle" />,
                        color: 'info'
                    }
                ]}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">节点类型</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '默认填充节点',
                        children: <AriTypography variant='h3'>type: filled (默认)</AriTypography>,
                        type: 'filled'
                    },
                    {
                        label: '空心节点',
                        children: <AriTypography variant='h3'>type: hollow</AriTypography>,
                        type: 'hollow',
                        color: 'primary'
                    },
                    {
                        label: '无边框节点',
                        children: <AriTypography variant='h3'>type: borderless</AriTypography>,
                        type: 'borderless',
                        color: 'success'
                    }
                ]}
            />
        </AriContainer>
    </AriFlex>
);`,
    "AdvancedTimeline": `export const AdvancedTimeline: React.FC = () => (
  <AriFlex vertical space={24}>
        <AriContainer>
            <AriTypography className="demo-title">倒序排列</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '步骤一',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>
                    },
                    {
                        label: '步骤二',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>
                    },
                    {
                        label: '步骤三',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>
                    },
                    {
                        label: '步骤四',
                        children: <AriTypography variant='h3'>发布上线</AriTypography>
                    }
                ]}
                reverse={true}
            />
        </AriContainer>
        
        <AriContainer>
            <AriTypography className="demo-title">虚线连接</AriTypography>
            <AriTimeline 
                items={[
                    {
                        label: '已完成',
                        children: <AriTypography variant='h3'>创建项目</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '已完成',
                        children: <AriTypography variant='h3'>开发功能</AriTypography>,
                        color: 'success'
                    },
                    {
                        label: '进行中',
                        children: <AriTypography variant='h3'>测试和修复</AriTypography>,
                        color: 'primary',
                        dashed: true
                    },
                    {
                        label: '未开始',
                        children: <AriTypography variant='h3'>准备发布</AriTypography>,
                        color: 'info'
                    }
                ]}
                lastDashed={true}
            />
        </AriContainer>
    </AriFlex>
);`,
    "RichContentTimeline": `export const RichContentTimeline: React.FC = () => (
  <AriContainer>
        <AriTimeline 
            items={[
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-01-10</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard  style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>项目启动</AriTypography>
                                <AriTypography variant='h3'>确定项目需求，开始规划设计</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 张三</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="file-text" />,
                    color: 'primary'
                },
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-02-15</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard  style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>开发阶段</AriTypography>
                                <AriTypography variant='h3'>完成核心功能开发，进入内部测试</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 李四</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="setting" />,
                    color: 'success'
                },
                {
                    label: <AriFlex align="center" space={8}>
                        <AriIcon name="calendar" />
                        <AriTypography variant='h3'>2024-04-30</AriTypography>
                    </AriFlex>,
                    children: (
                        <AriCard style={{ width: '100%', maxWidth: 380 }}>
                            <AriFlex vertical space={8}>
                                <AriTypography variant='h3'>测试阶段</AriTypography>
                                <AriTypography variant='h3'>进行全面测试，修复bug，优化性能</AriTypography>
                                <AriFlex align="center" space={4}>
                                    <AriIcon name="user" />
                                    <AriTypography variant='h3'>负责人: 王五</AriTypography>
                                </AriFlex>
                            </AriFlex>
                        </AriCard>
                    ),
                    icon: <AriIcon name="exclamation-circle" />,
                    color: 'warning',
                    dashed: true
                }
            ]}
        />
    </AriContainer>
);`,
  },
  "tooltip": {
    "BasicTooltip": `export const BasicTooltip: React.FC = () => {
  return (
        <AriFlex space={16}>
            <AriTooltip content="这是一个简单的提示框">
                <AriButton>鼠标悬停</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};`,
    "PositionedTooltip": `export const PositionedTooltip: React.FC = () => {
  return (
        <AriFlex space={16}>
            <AriTooltip content="上方提示" position="top">
                <AriButton>上方</AriButton>
            </AriTooltip>
            <AriTooltip content="右侧提示" position="right">
                <AriButton>右侧</AriButton>
            </AriTooltip>
            <AriTooltip content="下方提示" position="bottom">
                <AriButton>下方</AriButton>
            </AriTooltip>
            <AriTooltip content="左侧提示" position="left">
                <AriButton>左侧</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};`,
    "TriggerTooltip": `export const TriggerTooltip: React.FC = () => {
  return (
        <AriFlex space={16}>
            <AriTooltip content="悬停触发" trigger="hover">
                <AriButton>悬停触发</AriButton>
            </AriTooltip>
            <AriTooltip content="点击触发" trigger="click">
                <AriButton>点击触发</AriButton>
            </AriTooltip>
            <AriTooltip content="获取焦点触发" trigger="focus">
                <AriButton>获取焦点触发</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};`,
    "ControlledTooltip": `export const ControlledTooltip: React.FC = () => {
  const [visible, setVisible] = useState(false);

    return (
        <AriFlex space={16}>
            <AriTooltip
                content="这是一个手动控制的提示框"
                trigger="manual"
                visible={visible}
            >
                <AriButton onClick={() => setVisible(!visible)}>
                    {visible ? '隐藏提示' : '显示提示'}
                </AriButton>
            </AriTooltip>
        </AriFlex>
    );
};`,
    "NoArrowTooltip": `export const NoArrowTooltip: React.FC = () => {
  return (
        <AriFlex space={16}>
            <AriTooltip content="默认无箭头（无需配置）">
                <AriButton>默认无箭头</AriButton>
            </AriTooltip>
            <AriTooltip content="手动开启箭头" arrow={true}>
                <AriButton>开启箭头</AriButton>
            </AriTooltip>
        </AriFlex>
    );
};`,
    "RichContentTooltip": `export const RichContentTooltip: React.FC = () => {
  const content = (
        <AriFlex vertical space={8}>
            <AriTypography variant='h3' value='提示标题' />
            <div>这是一段描述文本，可以包含<b>加粗</b>、<i>斜体</i>等样式</div>
            <AriButton size="sm">点击操作</AriButton>
        </AriFlex>
    );

    return (
        <AriTooltip content={content}>
            <AriButton>富文本提示框</AriButton>
        </AriTooltip>
    );
};`,
  },
  "typography": {
    "BasicTypography": `export const BasicTypography: React.FC = () => (
<AriFlex vertical space={8}>
    <AriTypography variant="h1">H1 标题</AriTypography>
    <AriTypography variant="h2">H2 标题</AriTypography>
    <AriTypography variant="h3">H3 标题</AriTypography>
    <AriTypography variant="h4">H4 标题</AriTypography>
    <AriTypography variant="body">正文内容 (默认)</AriTypography>
    <AriTypography variant="caption">说明文字</AriTypography>
    <AriTypography variant="overline">上标文字</AriTypography>
  </AriFlex>
);`,
    "ColorTypography": `export const ColorTypography: React.FC = () => (
<AriFlex vertical space={8}>
    <AriTypography color="primary">主要颜色</AriTypography>
    <AriTypography color="secondary">次要颜色</AriTypography>
    <AriTypography color="error">错误颜色</AriTypography>
    <AriTypography color="warning">警告颜色</AriTypography>
    <AriTypography color="info">信息颜色</AriTypography>
    <AriTypography color="success">成功颜色</AriTypography>
    <AriTypography color="inherit">继承颜色 (默认)</AriTypography>
  </AriFlex>
);`,
    "StyleTypography": `export const StyleTypography: React.FC = () => (
<AriFlex vertical space={8}>
    <AriTypography>普通文本（默认）</AriTypography>
    <AriTypography bold>加粗文本（bold）</AriTypography>
    <AriTypography italic>斜体文本（italic）</AriTypography>
    <AriTypography bold italic>加粗斜体文本（bold + italic）</AriTypography>
    <AriTypography variant="h3" bold>
      标题加粗（与 variant 组合）
    </AriTypography>
  </AriFlex>
);`,
    "AlignmentTypography": `export const AlignmentTypography: React.FC = () => (
<AriFlex vertical space={8}>
    <AriTypography align="left">左对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="center">居中对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="right">右对齐：这是一段示例文本。</AriTypography>
    <AriTypography align="justify">两端对齐：这是一段比较长的文本内容，用来演示两端对齐的效果。文本会在容器两端均匀分布，看起来更加整齐。</AriTypography>
  </AriFlex>
);`,
    "OtherPropsTypography": `export const OtherPropsTypography: React.FC = () => (
<AriFlex vertical space={8}>
    <AriTypography gutterBottom>底部间距：在文本下方添加间距。</AriTypography>
    <AriTypography noWrap>不换行：这段文本不会换行，超出容器宽度时会显示省略号。这是一段很长的文本内容用来演示效果。</AriTypography>
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '8px' }}>
      <AriTypography lineClamp={2}>行数限制：这是一段很长的文本内容，会被限制在指定的行数内，超出部分会被截断并显示省略号。这里设置了2行的限制。</AriTypography>
    </div>
  </AriFlex>
);`,
    "EventTypography": `export const EventTypography: React.FC = () => (
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
);`,
  },
  "upload": {
    "BasicExample": `export const BasicExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleUpload = (files: File[]) => {
    console.log('上传文件:', files);
    // 这里可以实现实际的上传逻辑
  };

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
  };

  return (
    <AriUpload
      fileList={fileList}
      onChange={handleChange}
      onUpload={handleUpload}
      uploadText="点击或拖拽文件到此区域上传"
      uploadDescription="支持单个或批量上传"
    />
  );
};

export const FileTypesExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>仅支持图片文件</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          accept="image/*"
          uploadText="支持 JPG、PNG、GIF 格式"
          uploadDescription="单个文件不超过 5MB"
          maxSize={5 * 1024 * 1024}
        />
      </div>
      
      <div>
        <h4>仅支持文档文件</h4>
        <AriUpload
          accept=".pdf,.doc,.docx,.txt"
          uploadText="支持 PDF、Word、TXT 格式"
          uploadDescription="仅支持常见文档格式"
        />
      </div>
    </AriFlex>
  );
};

export const LimitExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleValidationError = (file: File, reason: string) => {
    AriMessage.error(\`文件 "\${file.name}" 上传失败: \${reason}\`);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>限制文件数量（最多3个）</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          maxCount={3}
          uploadText="最多上传 3 个文件"
          onValidationError={handleValidationError}
        />
      </div>
      
      <div>
        <h4>限制文件大小（最大2MB）</h4>
        <AriUpload
          maxSize={2 * 1024 * 1024}
          uploadText="单个文件不超过 2MB"
          onValidationError={handleValidationError}
        />
      </div>
    </AriFlex>
  );
};

export const CustomRenderExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderFileItem = (file: AriUploadFile, index: number) => (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {file.name}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        大小: {(file.size / 1024).toFixed(1)} KB | 状态: {file.status}
      </div>
      {file.status === 'uploading' && file.progress && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e9ecef', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: \`\${file.progress}%\`, 
              height: '100%', 
              background: '#007bff',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
            {file.progress}%
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderFileItem={renderFileItem}
      uploadText="自定义文件项渲染"
      uploadDescription="每个文件项都有自定义的样式"
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "FileTypesExample": `export const FileTypesExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>仅支持图片文件</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          accept="image/*"
          uploadText="支持 JPG、PNG、GIF 格式"
          uploadDescription="单个文件不超过 5MB"
          maxSize={5 * 1024 * 1024}
        />
      </div>
      
      <div>
        <h4>仅支持文档文件</h4>
        <AriUpload
          accept=".pdf,.doc,.docx,.txt"
          uploadText="支持 PDF、Word、TXT 格式"
          uploadDescription="仅支持常见文档格式"
        />
      </div>
    </AriFlex>
  );
};

export const LimitExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleValidationError = (file: File, reason: string) => {
    AriMessage.error(\`文件 "\${file.name}" 上传失败: \${reason}\`);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>限制文件数量（最多3个）</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          maxCount={3}
          uploadText="最多上传 3 个文件"
          onValidationError={handleValidationError}
        />
      </div>
      
      <div>
        <h4>限制文件大小（最大2MB）</h4>
        <AriUpload
          maxSize={2 * 1024 * 1024}
          uploadText="单个文件不超过 2MB"
          onValidationError={handleValidationError}
        />
      </div>
    </AriFlex>
  );
};

export const CustomRenderExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderFileItem = (file: AriUploadFile, index: number) => (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {file.name}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        大小: {(file.size / 1024).toFixed(1)} KB | 状态: {file.status}
      </div>
      {file.status === 'uploading' && file.progress && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e9ecef', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: \`\${file.progress}%\`, 
              height: '100%', 
              background: '#007bff',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
            {file.progress}%
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderFileItem={renderFileItem}
      uploadText="自定义文件项渲染"
      uploadDescription="每个文件项都有自定义的样式"
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "LimitExample": `export const LimitExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleValidationError = (file: File, reason: string) => {
    AriMessage.error(\`文件 "\${file.name}" 上传失败: \${reason}\`);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>限制文件数量（最多3个）</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          maxCount={3}
          uploadText="最多上传 3 个文件"
          onValidationError={handleValidationError}
        />
      </div>
      
      <div>
        <h4>限制文件大小（最大2MB）</h4>
        <AriUpload
          maxSize={2 * 1024 * 1024}
          uploadText="单个文件不超过 2MB"
          onValidationError={handleValidationError}
        />
      </div>
    </AriFlex>
  );
};

export const CustomRenderExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderFileItem = (file: AriUploadFile, index: number) => (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {file.name}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        大小: {(file.size / 1024).toFixed(1)} KB | 状态: {file.status}
      </div>
      {file.status === 'uploading' && file.progress && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e9ecef', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: \`\${file.progress}%\`, 
              height: '100%', 
              background: '#007bff',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
            {file.progress}%
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderFileItem={renderFileItem}
      uploadText="自定义文件项渲染"
      uploadDescription="每个文件项都有自定义的样式"
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "CustomRenderExample": `export const CustomRenderExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderFileItem = (file: AriUploadFile, index: number) => (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {file.name}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        大小: {(file.size / 1024).toFixed(1)} KB | 状态: {file.status}
      </div>
      {file.status === 'uploading' && file.progress && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e9ecef', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: \`\${file.progress}%\`, 
              height: '100%', 
              background: '#007bff',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
            {file.progress}%
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderFileItem={renderFileItem}
      uploadText="自定义文件项渲染"
      uploadDescription="每个文件项都有自定义的样式"
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "DisabledExample": `export const DisabledExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "CustomUploadAreaExample": `export const CustomUploadAreaExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: \`2px dashed \${dragActive ? '#007bff' : '#dee2e6'}\`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "ManualUploadExample": `export const ManualUploadExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: \`\${Date.now()}-\${Math.random().toString(36).substring(2, 9)}\`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
    "FrontendOnlyExample": `export const FrontendOnlyExample: React.FC = () => {
const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};`,
  },
} as const;

export type SourceMapKeys = keyof typeof sourceMap;
