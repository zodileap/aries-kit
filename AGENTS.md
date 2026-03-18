# 仓库基础规范

## Git 与发布规范

- 版本号遵循三段式 `Major.Minor.Patch`。
- 提交信息默认使用中文，并遵循约定式提交格式：

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- 多标签提交格式：

```text
<type1>[optional scope]: <description1>
<type2>[optional scope]: <description2>

[optional body]

[optional footer(s)]
```

- 常用提交类型：
  - `major`：重大更新或架构变更，版本变更 `Major (X.0.0)`；不兼容变更必须写明 `BREAKING CHANGE: <详细描述>`。
  - `feat`：新增功能或模块，版本变更 `Minor (0.X.0)`。
  - `update`、`fix`、`perf`、`refactor`、`build`：版本变更 `Patch (0.0.X)`。
  - `docs`、`style`、`test`、`ci`、`chore`：不触发版本号变更。
  - `revert`：回退之前的提交，按实际回退内容处理。
- 提交信息要求：
  - 简洁准确反映变更内容
  - 不添加额外签名信息
  - 不在末尾署名
- 每次提交 Git 时，如果改动会进入下一次发布，必须同步更新 `CHANGELOG.md` 中“下一个版本号”的更新记录，而不是当前 `package.json` 里的版本号。
- 当用户明确要求“更新版本”时，才真正修改版本号。
- 更新记录至少要包含版本号、日期、主要变更点，以及涉及的组件、构建、文档或发布影响。
- 如果对外行为、公开 props、默认值、构建产物或发布流程有变化，必须在版本记录中明确写出。
- 版本升级完成时，必须同步创建 annotated tag，格式为 `<版本号>`。
- tag 消息必须直接使用 `CHANGELOG.md` 中对应版本的完整更新内容，不能只写单行摘要。
- 如果本次提交包含版本升级，则 commit 和 tag 必须一起推送。
- 如果用户只说“提交 git”而没有说“更新版本”，默认只维护下一版本的更新记录，不修改 `package.json` 版本号，也不创建新 tag。

## 文档注释规范

- 文档注释中的标签均为可选。
- 注释开头先写描述，不要先写函数、方法、属性名称。
- 函数或方法注释要写清楚职责和实际做了什么。
- 各标签内容之间保留空行。
- 支持的标签：
  - `Params:`
  - `default:`
  - `Returns:`
  - `Example:`
  - `ExamplePath:`
  - `ErrCodes:`
  - `Verbs:`
  - `Extends:`

# 开发规范

## 基本信息

- 项目环境：React 19、TypeScript、pnpm、Vite、SCSS。
- 逻辑代码根目录在 `<repo-root>/src`。
- `@ari` 从 `src` 开始映射。
- 样式统一写在 `@ari/theme`，并通过 `index.scss` 导出。
- 类型统一写在 `@ari/types`，并通过 `index.ts` 导出；公开类型需要中文文档注释。

## 开发前阅读

1. 阅读 `src/components/button`，参考组件结构。
2. 阅读 `src/theme/components/button.scss`，参考现有样式写法。
3. 阅读 `src/types/components`，参考现有类型组织。
4. 阅读 `src/types/hooks`，了解已有 hook。
5. 阅读 `src/theme/components/avatar.scss`、`src/theme/global/rule.scss`、`src/theme/global/animation.scss`、`src/theme/mixins/mixins.scss`，掌握当前 BEM 和 mixin 用法。

## 组件开发规范

- 使用 React hooks 时遵循最佳实践。
- 默认不引入第三方库。
- 图标统一使用 `AriIcon`；参数参考 `src/types/componets/icon.ts`，图标名称参考 Google Fonts Icons。
- 组件通常拆成三个文件：
  - `src/components/{componentName}/index.tsx`
  - `src/theme/components/{componentName}.scss`
  - `src/types/components/{componentName}.ts`
- 单个 TSX 文件尽量控制在 400 行以内，超过时主动拆分。
- 如果现有颜色系统或变量不足，补充到主题系统，不直接硬编码。
- 组件代码的推荐组织顺序：
  - 状态、refs、依赖 hook
  - 派生状态
  - 事件处理函数
  - 业务逻辑函数
  - 副作用
  - 上下文值
  - 样式计算
  - 渲染辅助函数
  - 条件提前返回
  - 主 JSX 返回
- 对于包含大型运行时、编辑器、图表引擎、可视化渲染器、worker 或大体积样式资源的组件，必须提供独立子入口，格式为 `@aries-kit/react/{componentName}`；必要时同时提供 `@aries-kit/react/{componentName}/style.css`。
- 大组件不能只依赖根入口导出；未引入子入口时，不应让主运行时、worker 或专属样式进入默认首屏加载路径。

## 预览与文档规范

- 每个组件都需要在 `preview` 中提供文档和示例。
- 组件功能、公开 props、默认值或行为变更时，必须同步更新文档。
- 文档默认按两层组织：
  - `preview/src/docs/{componentName}.tsx`
  - `preview/src/docs/codes/{componentName}.tsx`
- 新增组件时，记得同步更新 `preview/src/config.tsx` 中的导航项。
- Preview 文档必须覆盖组件全部公开 props。
- 如果组件存在子组件或额外 API（例如 `TreeView`、`TreeNode`），也必须分别提供对应示例。
- 每个 prop 至少要有一个可见示例，能够清楚看出其效果或行为差异。
- 多个 prop 可以组合展示，但不能只靠组合示例覆盖所有 prop。
- 文档中的示例代码必须可运行，且与实际 API 保持一致。
- `sourceCode` 这类展示内容由系统自动处理时，不要手动维护重复数据。

## useCss 与 BEM 规范

- 使用 `useCss` 生成类名；传入的组件名必须与 SCSS 根选择器一致。
- 类名组合统一使用 `cn.gen()`，不要手动拼接状态类和修饰符类。
- 常用方法：
  - `b()`：块
  - `e()`：元素
  - `m()`：修饰符
  - `is()`：状态
  - `be()`、`em()`、`bm()`、`bem()`：组合形式
- BEM 统一使用标准 SCSS 语法：
  - 根选择器：`.#{$namespace}-component`
  - 元素：`&__element`
  - 修饰符：`&--modifier`
  - 状态：`&.#{$namespace}-is-state`
- 优先使用现有 mixin，尤其是：
  - `src/theme/global/rule.scss`
  - `src/theme/global/animation.scss`
  - `src/theme/mixins/mixins.scss`
- 多个元素共享同样样式时合并选择器；重复修饰符变体优先使用 `@each` 等循环生成；避免过深嵌套。

## 主题变量规范

- 禁止直接硬编码颜色和数值。
- 颜色统一使用 `getVar(color, ...)`，尺寸和间距等统一使用 `getVar(...)`。
- 写样式前先查：
  - `src/theme/global/color-theme/theme-config.scss`
  - `src/theme/global/color-theme/brand/light.scss`
  - `src/theme/global/var.scss`
- 新增主题时通过 `theme-config.scss` 的统一结构接入，不要重复定义整套映射逻辑。

## 本地联调

- 修改库代码后，如果需要同步到本地依赖方，优先执行：

```bash
cd <repo-root>
pnpm build
yalc push
```
