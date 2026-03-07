import fs from "fs";
import path from "path";

type AuditResult = {
  component: string;
  docPath: string;
  codePath: string;
  documentedProps: string[];
  coveredProps: string[];
  missingProps: string[];
};

const repoRoot = path.resolve(__dirname, "..");
const docsDir = path.resolve(repoRoot, "preview", "src", "docs");
const codesDir = path.resolve(repoRoot, "preview", "src", "docs", "codes");
const typesDir = path.resolve(repoRoot, "src", "types", "components");
const reportPath = path.resolve(repoRoot, "preview", "preview-prop-audit.md");

const readText = (filePath: string) => fs.readFileSync(filePath, "utf8");
const toBaseName = (filePath: string) => path.basename(filePath, path.extname(filePath));
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getFiles = (dirPath: string, extension: string) =>
  fs
    .readdirSync(dirPath)
    .filter((fileName) => fileName.endsWith(extension))
    .map((fileName) => path.resolve(dirPath, fileName))
    .sort((a, b) => a.localeCompare(b));

const extractBracketBlock = (content: string, startIndex: number, openChar: string, closeChar: string) => {
  let depth = 0;
  let cursor = startIndex;

  while (cursor < content.length) {
    const char = content[cursor];

    if (char === openChar) {
      depth += 1;
    } else if (char === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return content.slice(startIndex, cursor + 1);
      }
    }

    cursor += 1;
  }

  return "";
};

const extractDocumentedProps = (docContent: string) => {
  const propsBlocks: string[] = [];
  let searchIndex = 0;

  while (searchIndex < docContent.length) {
    const propsIndex = docContent.indexOf("props:", searchIndex);
    if (propsIndex === -1) {
      break;
    }

    const arrayStart = docContent.indexOf("[", propsIndex);
    if (arrayStart === -1) {
      break;
    }

    const block = extractBracketBlock(docContent, arrayStart, "[", "]");
    if (block) {
      propsBlocks.push(block);
      searchIndex = arrayStart + block.length;
      continue;
    }

    searchIndex = propsIndex + "props:".length;
  }

  const matches = propsBlocks.flatMap((block) => [...block.matchAll(/param:\s*'([^']+)'/g)]);
  return [...new Set(matches.map((match) => match[1]))];
};

const hasPropMention = (codeContent: string, propName: string) => {
  const pattern = new RegExp(`(^|[^\\w])${escapeRegExp(propName)}([^\\w]|$)`, "m");
  return pattern.test(codeContent);
};

const docFiles = getFiles(docsDir, ".tsx");
const codeFiles = new Map(getFiles(codesDir, ".tsx").map((filePath) => [toBaseName(filePath), filePath]));
const typeFiles = new Set(
  getFiles(typesDir, ".ts")
    .map((filePath) => toBaseName(filePath))
    .filter((name) => !["base", "index"].includes(name))
);

const skippedDocs: Array<{ name: string; reason: string }> = [];
const results: AuditResult[] = [];

for (const docPath of docFiles) {
  const component = toBaseName(docPath);

  if (!typeFiles.has(component)) {
    skippedDocs.push({ name: component, reason: "没有匹配的组件类型文件，视为非组件文档或独立专题页" });
    continue;
  }

  const codePath = codeFiles.get(component);
  if (!codePath) {
    skippedDocs.push({ name: component, reason: "缺少对应的 preview demo 代码文件" });
    continue;
  }

  const docContent = readText(docPath);
  const codeContent = readText(codePath);
  const documentedProps = extractDocumentedProps(docContent);
  const coveredProps = documentedProps.filter((propName) => hasPropMention(codeContent, propName));
  const missingProps = documentedProps.filter((propName) => !coveredProps.includes(propName));

  results.push({
    component,
    docPath,
    codePath,
    documentedProps,
    coveredProps,
    missingProps,
  });
}

results.sort((a, b) => {
  if (b.missingProps.length !== a.missingProps.length) {
    return b.missingProps.length - a.missingProps.length;
  }
  return a.component.localeCompare(b.component);
});

const totalDocumentedProps = results.reduce((sum, item) => sum + item.documentedProps.length, 0);
const totalCoveredProps = results.reduce((sum, item) => sum + item.coveredProps.length, 0);
const totalMissingProps = results.reduce((sum, item) => sum + item.missingProps.length, 0);
const auditedComponents = results.length;
const avgCoverage = totalDocumentedProps === 0 ? 100 : (totalCoveredProps / totalDocumentedProps) * 100;

const summaryLines = [
  "# Preview Props 覆盖审计",
  "",
  `生成时间: ${new Date().toISOString()}`,
  "",
  "审计方法:",
  "- 仅审计同时存在以下文件的组件:",
  "  - `src/types/components/{component}.ts`",
  "  - `preview/src/docs/{component}.tsx`",
  "  - `preview/src/docs/codes/{component}.tsx`",
  "- 从 `preview/src/docs/{component}.tsx` 的 `DocAPI.props` 中提取 `param` 字段。",
  "- 在对应的 `preview/src/docs/codes/{component}.tsx` 中搜索 prop 名字是否被显式使用。",
  "- 这是静态启发式检查，能够快速暴露大多数缺口，但仍需要人工确认示例是否真正体现了 prop 行为。",
  "",
  "汇总:",
  `- 审计组件数: ${auditedComponents}`,
  `- 文档 props 总数: ${totalDocumentedProps}`,
  `- 代码显式命中 props 数: ${totalCoveredProps}`,
  `- 缺失示例 props 数: ${totalMissingProps}`,
  `- 平均覆盖率: ${avgCoverage.toFixed(2)}%`,
  "",
  "## 总览",
  "",
  "| 组件 | 文档 props | 已命中 | 缺失 | 覆盖率 |",
  "| --- | ---: | ---: | ---: | ---: |",
  ...results.map((item) => {
    const coverage = item.documentedProps.length === 0 ? 100 : (item.coveredProps.length / item.documentedProps.length) * 100;
    return `| ${item.component} | ${item.documentedProps.length} | ${item.coveredProps.length} | ${item.missingProps.length} | ${coverage.toFixed(2)}% |`;
  }),
  "",
  "## 缺口详情",
  "",
  ...results.flatMap((item) => {
    if (item.missingProps.length === 0) {
      return [
        `### ${item.component}`,
        "- 缺失: 无",
        `- Preview 文档: \`${path.relative(repoRoot, item.docPath)}\``,
        `- Demo 代码: \`${path.relative(repoRoot, item.codePath)}\``,
        "",
      ];
    }

    return [
      `### ${item.component}`,
      `- 缺失 props: ${item.missingProps.join(", ")}`,
      `- Preview 文档: \`${path.relative(repoRoot, item.docPath)}\``,
      `- Demo 代码: \`${path.relative(repoRoot, item.codePath)}\``,
      "",
    ];
  }),
  "## 跳过的文档",
  "",
  ...skippedDocs.map((item) => `- ${item.name}: ${item.reason}`),
  "",
];

fs.writeFileSync(reportPath, summaryLines.join("\n"));

const topMissing = results
  .filter((item) => item.missingProps.length > 0)
  .slice(0, 10)
  .map((item) => `${item.component}(${item.missingProps.length})`)
  .join(", ");

console.log(`已生成审计报告: ${path.relative(repoRoot, reportPath)}`);
console.log(`审计组件数: ${auditedComponents}`);
console.log(`文档 props 总数: ${totalDocumentedProps}`);
console.log(`代码显式命中 props 数: ${totalCoveredProps}`);
console.log(`缺失示例 props 数: ${totalMissingProps}`);
console.log(`平均覆盖率: ${avgCoverage.toFixed(2)}%`);
console.log(`缺口最多的组件: ${topMissing || "无"}`);
