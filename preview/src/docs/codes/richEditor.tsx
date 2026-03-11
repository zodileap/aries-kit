import React, { useState, useRef } from 'react';
import { AriFlex, AriRichEditor, AriButton, AriCard, AriMessage } from '@aries-kit/react';
import { RichEditorInstance, RichEditorUploadRequest } from '@aries-kit/react';

const readFileAsDataUrl = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = () => reject(new Error('读取文件失败'));
  reader.readAsDataURL(file);
});

const mockUploadMedia = async ({ file, kind, source, signal }: RichEditorUploadRequest) => {
  if (signal?.aborted) {
    throw new Error('上传已取消');
  }

  await new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, 400);
    signal?.addEventListener('abort', () => {
      window.clearTimeout(timer);
      reject(new Error('上传已取消'));
    }, { once: true });
  });

  const url = await readFileAsDataUrl(file);
  return {
    id: `${kind}-${Date.now()}`,
    url,
    alt: file.name,
    title: source === 'paste' ? '来自剪贴板' : '来自工具栏',
  };
};

const demoMediaConfig = {
  upload: mockUploadMedia,
  enablePasteUpload: true,
  maxImageSize: 10 * 1024 * 1024,
  maxVideoSize: 100 * 1024 * 1024,
};

export const BasicExample: React.FC = () => {
  const [content, setContent] = useState(`# 欢迎使用富文本编辑器

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

开始编写你的内容吧！`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="400px"
        placeholder="开始编写你的内容..."
        media={demoMediaConfig}
      />
    </AriCard>
  );
};

export const ModeExample: React.FC = () => {
  const [mode, setMode] = useState<'source' | 'visual' | 'split'>('split');
  const [content, setContent] = useState(`# 模式切换演示

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
- 实时同步编辑`);

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
          media={demoMediaConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const ToolbarExample: React.FC = () => {
  const [content, setContent] = useState(`# 工具栏演示

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

试试选中一些文本，然后使用工具栏按钮！`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="350px"
        media={demoMediaConfig}
        toolbar={{
          buttons: ['bold', 'italic', 'strikethrough', 'divider', 'heading', 'code', 'link']
        }}
      />
    </AriCard>
  );
};

export const CustomToolbarExample: React.FC = () => {
  const [content, setContent] = useState(`# 自定义工具栏

这个编辑器只显示基本的格式化工具，隐藏了导入导出功能。

你可以根据需要自定义工具栏的显示内容。`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="300px"
        media={demoMediaConfig}
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
  const content = `# 只读模式演示

这是一个只读的富文本编辑器，可以用来展示 Markdown 内容。

## 特点

- 不可编辑
- 保留所有样式
- 适合内容展示

**加粗文本** 和 *斜体文本*

\`\`\`javascript
const readOnly = true;
\`\`\`

> 这是只读模式的引用文本`;

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
  const [saving, setSaving] = useState(false);

  const handleClear = () => {
    editorRef.current?.clear();
  };

  const handleSetContent = () => {
    editorRef.current?.setContent(`# 通过 API 设置的内容

这个内容是通过 editorRef.current.setContent() 方法设置的。

## API 方法

- \`getContent()\`: 获取内容
- \`setContent(content)\`: 设置内容  
- \`clear()\`: 清空内容
- \`focus()\`: 聚焦编辑器
- \`exportAs(format)\`: 导出内容
- \`hasPendingUploads()\`: 检查是否还有媒体上传中
- \`waitForPendingUploads()\`: 等待上传结束再保存`);
  };

  const handleGetContent = () => {
    const currentContent = editorRef.current?.getContent();
    alert(`当前内容长度: ${currentContent?.length || 0} 字符`);
  };

  const handleFocus = () => {
    editorRef.current?.focus();
  };

  const handleSave = async () => {
    setSaving(true);
    await editorRef.current?.waitForPendingUploads();
    const currentContent = editorRef.current?.getContent() || '';
    AriMessage.success(`已模拟保存 ${currentContent.length} 个字符`);
    setSaving(false);
  };

  return (
    <AriFlex vertical space={16}>
      <AriFlex space={8} wrap>
        <AriButton onClick={handleSetContent}>设置内容</AriButton>
        <AriButton onClick={handleGetContent}>获取内容</AriButton>
        <AriButton onClick={handleClear}>清空内容</AriButton>
        <AriButton onClick={handleFocus}>聚焦编辑器</AriButton>
        <AriButton loading={saving} onClick={handleSave}>
          等待上传后保存
        </AriButton>
      </AriFlex>
      
      <AriCard>
        <AriRichEditor
          ref={editorRef}
          value={content}
          onChange={setContent}
          height="300px"
          media={demoMediaConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const MediaUploadExample: React.FC = () => {
  const editorRef = useRef<RichEditorInstance>(null);
  const [content, setContent] = useState([
    '# 媒体上传演示',
    '',
    '这个示例模拟了业务方提供上传接口后的完整链路：',
    '',
    '- 点击工具栏里的图片 / 视频按钮上传文件',
    '- 在源码模式或可视模式下直接粘贴剪贴板中的图片 / 视频文件',
    '- 上传完成后，内容里会写入真正可保存的媒体地址标记',
    '',
    '建议操作：',
    '',
    '1. 切换到可视模式',
    '2. 上传一张图片或一个小视频',
    '3. 点击下方的“模拟保存”按钮',
    '',
    '保存后你会拿到带 `<img />` / `<video />` 标签的 Markdown 内容。',
  ].join('\n'));
  const [savedContent, setSavedContent] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await editorRef.current?.waitForPendingUploads();
    const nextContent = editorRef.current?.getContent() || '';
    setSavedContent(nextContent);
    AriMessage.success('已等待所有上传完成并写入保存内容');
    setSaving(false);
  };

  return (
    <AriFlex vertical space={16}>
      <AriFlex space={8} wrap>
        <AriButton loading={saving} onClick={handleSave}>模拟保存</AriButton>
        <AriButton
          type="text"
          onClick={() => {
            const isPending = editorRef.current?.hasPendingUploads();
            AriMessage.info(isPending ? '还有媒体正在上传' : '当前没有待完成上传');
          }}
        >
          检查上传状态
        </AriButton>
      </AriFlex>

      <AriCard>
        <AriRichEditor
          ref={editorRef}
          value={content}
          onChange={setContent}
          height="420px"
          media={demoMediaConfig}
        />
      </AriCard>

      {savedContent && (
        <AriCard>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{savedContent}</pre>
        </AriCard>
      )}
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
          media={demoMediaConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightExample: React.FC = () => {
  const [content, setContent] = useState(`# 代码高亮功能演示

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
- **onCodeEdit**: 代码编辑回调函数`);

  const codeBlockConfig = {
    showLineNumbers: true,
    showCopyButton: true,
    showTitle: true,
    enableHighlight: true,
    enableMonaco: true,
    onCodeEdit: (code: string, language: string, title?: string) => {
      AriMessage.info(`点击编辑了 ${language} 代码块${title ? ` "${title}"` : ''}`);
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
          media={demoMediaConfig}
        />
      </AriCard>
    </AriFlex>
  );
};

export const CodeHighlightLinesExample: React.FC = () => {
  const [content, setContent] = useState(`# 代码行高亮功能演示

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

高亮行功能让代码示例更加直观，帮助读者快速理解关键代码段。`);

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
        media={demoMediaConfig}
      />
    </AriCard>
  );
};

export const CalloutExample: React.FC = () => {
  const [content, setContent] = useState(`# 告示框功能演示

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

告示框功能让文档更加结构化，帮助读者快速识别和理解重要信息。`);

  return (
    <AriCard>
      <AriRichEditor
        value={content}
        onChange={setContent}
        height="600px"
        media={demoMediaConfig}
      />
    </AriCard>
  );
};

export const CodeTitleExample: React.FC = () => {
  const [content, setContent] = useState(`# 代码标题功能演示

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

每个代码块都有清晰的标题，帮助读者理解代码的用途和上下文。`);

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
        media={demoMediaConfig}
      />
    </AriCard>
  );
};

export const AdvancedConfigExample: React.FC = () => {
  const [mode, setMode] = useState<'source' | 'visual' | 'split'>('split');
  const defaultContent = [
    '# 高级配置演示',
    '',
    '这个示例集中展示以下能力：',
    '',
    '- defaultValue: 非受控初始内容',
    '- onModeChange: 同步模式切换',
    '- minHeight / maxHeight: 约束编辑区域高度',
    '- beforeImport: 导入前校验文件类型',
    '- beforeExport: 导出前注入额外内容',
    '',
    '试试切换模式，或使用工具栏里的导入 / 导出按钮。',
  ].join('\n');

  return (
    <AriFlex vertical space={12}>
      <AriCard>
        <AriRichEditor
          defaultValue={defaultContent}
          mode={mode}
          onModeChange={(nextMode) => {
            setMode(nextMode);
            AriMessage.info('当前模式: ' + nextMode);
          }}
          minHeight={260}
          maxHeight={360}
          beforeImport={async (file) => {
            const isMarkdown = file.name.endsWith('.md');
            AriMessage.info('准备导入: ' + file.name);
            if (!isMarkdown) {
              AriMessage.warning('仅允许导入 .md 文件');
            }
            return isMarkdown;
          }}
          beforeExport={async (format, content) => {
            AriMessage.success('准备导出 ' + format.toUpperCase() + ' 文件');
            return content + '\n\n<!-- exported:' + format + ' -->';
          }}
          media={demoMediaConfig}
        />
      </AriCard>
      <div>当前编辑模式: {mode}</div>
    </AriFlex>
  );
};
