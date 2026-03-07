import React, { useState } from 'react';
import { AriCode, AriFlex } from '@aries-kit/react';

export const BasicCodeDemo: React.FC = () => (
    <AriCode
        language="javascript"
        value="// 一个简单的JavaScript函数\nfunction sayHello(name) {\n  console.log(`Hello, ${name}!`);\n  return `Hello, ${name}!`;\n}\n\n// 调用函数\nsayHello('World');"
    />
);

export const WithTitleDemo: React.FC = () => (
    <AriCode
        path="src/components/code/index.tsx"
        addedCount={16}
        removedCount={0}
        language="typescript"
        showLineNumbers
        diffLines={{ added: [{ start: 2, end: 7 }] }}
        value={`import { AriCode } from '@aries-kit/react';

export const CodePanel = () => {
  return (
    <AriCode
      path="src/components/code/index.tsx"
      value="console.log('hello world')"
    />
  );
};`}
    />
);

export const LineNumbersDemo: React.FC = () => (
    <AriCode
        language="css"
        showLineNumbers
        value=".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n}\n\n.item {\n  margin: 10px;\n  padding: 15px;\n  background-color: white;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}"
    />
);

export const EditableCodeDemo: React.FC = () => {
    const [code, setCode] = useState<string>("// 这是一个可编辑的代码示例\n// 试着修改这段代码\n\nconst colors = ['red', 'green', 'blue'];\nconst items = colors.map((color, index) => {\n  return `Item ${index + 1}: ${color}`;\n});\n\nconsole.log(items);");

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
);

export const HighlightLinesDemo: React.FC = () => (
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
            value={`import React from 'react';
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
};`}
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
        value={`//
// - 解析 diff 文本中的新增/删除行号，供 AriCode 的 diffLines 做差异高亮。
// - 根据文件路径后缀推断代码语言，优先用于“已编辑”步骤的文件预览。
//
// - detailText: 详情文本，通常为 unified diff 或 patch 内容。
// - filePath: 文件绝对路径或相对路径。
//
// - 命中新增加/删除时返回行号集合；否则返回 undefined。
export function resolveRunSegmentDiffLines(detailText: string): void {
    console.log(detailText);
}`}
    />
);

export const CustomLineNumbersDemo: React.FC = () => (
    <AriCode
        title="自定义行号（支持重复）"
        language="typescript"
        showLineNumbers
        customLineNumbers={[110, 110, 111, 112]}
        diffLines={{ removed: [1], added: [2] }}
        value={`// - old logic
// + new logic
const value = 1;
console.log(value);`}
    />
);

export const ClosableLanguageTagDemo: React.FC = () => (
    <AriCode
        title="可关闭语言标签"
        language="json"
        languageTagClosable
        value={`{
  "name": "@aries-kit/react",
  "version": "0.1.390",
  "description": "Code component demo"
}`}
    />
);

export const FontSizeDemo: React.FC = () => (
    <AriFlex vertical space={16}>
        <AriCode
            title="小字号（sm）"
            language="typescript"
            fontSize="sm"
            height="180px"
            value={`const smallText = () => {
  return "small font size";
};`}
        />
        <AriCode
            title="默认字号（default）"
            language="typescript"
            fontSize="default"
            height="180px"
            value={`const defaultText = () => {
  return "default font size";
};`}
        />
        <AriCode
            title="大字号（lg）"
            language="typescript"
            fontSize="lg"
            height="180px"
            value={`const largeText = () => {
  return "large font size";
};`}
        />
    </AriFlex>
);
