# 全局规范

- 当进行回答的时候，我希望默认使用中文

## Git规范

# Git规范

## 对于版本号

主要是三段式 Major.Minor.Patch

- 每次修改版本号时，必须同步补充本次更新记录到 `CHANGELOG.md`。
- 更新记录至少要包含：版本号、日期、主要变更点，以及涉及的组件、构建、文档或发布影响。
- 如果本次对外行为、公开 props、默认值、构建产物或发布流程有变化，必须在版本记录中明确写出；未补齐更新记录前，不允许认为版本更新完成。

## 对于commit：

约定式提交规范是一种基于提交信息的轻量级约定。
它提供了一组简单规则来创建清晰的提交历史；这更有利于编写自动化工具。

提交说明的结构如下所示：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

多标签格式（当涉及多个变更类型时）：

```
<type1>[optional scope]: <description1>
<type2>[optional scope]: <description2>

[optional body]

[optional footer(s)]
```

### 核心提交类型

`major`: 重大更新或架构变更
版本变更: Major (X.0.0)
适用场景: 不兼容的API变更，大规模重构。**当使用此类型时，应在提交信息的正文或脚注中明确指出 `BREAKING CHANGE: <详细描述不兼容的变更>`。**
`feat`: 新增功能或模块
版本变更: Minor (0.X.0)
适用场景: 新增完整功能，模块或组件
`update`: 现有功能的微小更新或调整
版本变更: Patch (0.0.X)
适用场景: 对现有功能进行参数调整、配置更新、文案修改、或不涉及大规模代码结构变化的轻微改进。
`fix`: 缺陷修复
版本变更: Patch (0.0.X)
适用场景: 修复bug，解决问题
`perf`: 性能优化
版本变更: Patch (0.0.X)
适用场景: 提高性能的代码更改
`refactor`: 代码重构
版本变更: Patch (0.0.X)
适用场景: 既不修复bug也不添加功能的代码更改
`build`: 构建系统变更
版本变更: Patch (0.0.X)
适用场景: 更改构建系统或外部依赖项

### 辅助提交类型（不影响版本号）

`docs`: 文档更新
版本变更: 不变
适用场景: 更新README，注释或API文档
`style`: 代码风格调整
版本变更: 不变
适用场景: 格式化代码，不影响代码功能
`test`: 测试相关
版本变更: 不变
适用场景: 添加或修改测试用例
`ci`: CI配置变更
版本变更: 不变
适用场景: 更改CI配置文件和脚本
`chore`: 杂项变更
版本变更: 不变
适用场景: 不修改src或test的其他变更
`revert`: 代码回退
版本变更: 特殊处理
适用场景: 回退之前的提交

### 提交信息格式要求

- 必须使用中文描述
- 严格遵循约定式提交规范格式
- 不添加额外的签名信息（如Claude Code生成标识）
- 提交信息应简洁明了，准确反映变更内容
- **支持多个标签**: 当一次提交涉及多个变更类型时，可以使用多个标签
- 不要在最后署名
## 文档注释规范


# 总体说明:

1. 用于文档注释，注释的标签都是可选的。

2. 注释以描述开头，开头不要添加函数，方法，属性等的名称！

3. 每个标签的内容中间要空一行，比如
```
Params:

   - path: 文件路径。
   - b: 文件内容。

Returns:

  0: 成功。
```

4. 对于描述需要详细描述作用。如果是函数方法文档注释，需要详细说明这个函数做了哪些事情

# 标签：

- `Params:` [ParamTag] 参数标签

```
// Params:
//
//   - path: 文件路径。
//   - b: 文件内容。
```

- `default:` [ParamDefaultTag] 默认值标签，这个是参数的默认值

```
// Params:
//
//   - path: 文件夹路径。
//     default: 111
```

- `Returns:` [ReturnTag] 返回值标签

```
// Returns:
//
//   0: 成功。
```

- `Example:` [ExampleTag] 示例代码标签

- `ExamplePath:` [ExamplePathTag] 示例代码在git上的路径

```
// ExamplePath:  taurus_go_demo/asset/asset_test.go
```

- `ErrCodes:` [ErrCodesTag] 错误码标签，这是用于函数或者方法的注释中

```
// ErrCodes:
//   - Err_0200010001
//   - Err_0200010002
```

- `Verbs:` [ErrFormatVerbsTag] 错误码的参数值注释，这是用于错误码的注释中
- `Extends:` [未定义] 这是用于标记继承自谁

```
//flutter
Extends [AriContainer]

// ts 
Extends {@link AriContainer}
```

# 开发规范

- 使用react hooks时遵循最佳的开发实践

## React组件开发规范

# 开发步骤

每次对话都要先阅读

1. 第一步阅读组件参考文件，<repo-root>/src/components/button这个组件，学习组件的tsx结构
2. 第二部阅读组件样式参考文件，<repo-root>/src/theme/components/button.scss下的文件夹获取已有的组件样式，学习现有格式
3. 第三步阅读组件类型参考文件，<repo-root>/src/types/components下的文件夹获取已有的组件类型，学习现有格式
4. 第四步阅读组件hook参考文件，<repo-root>/src/types/hooks下的文件夹获取已有的组件hook，了解想可以使用的hook
5. 第五步阅读BEM样式规范，掌握新的BEM体系使用方法
6. 开始开发

# 开发规范

## 基本信息介绍

1. 库的根目录在<repo-root>/src下
2. 项目环境:  React 19,typescript,pnpm,vite,scss。
3. 使用@ari,@ari是从src文件夹开始的。
4. 全部的样式都写在@ari/theme中，通过index.scss导出。
5. 类型全部写在@ari/types/下，通过index.ts导出。所有的类型都要添加文档注释，注释用中文。


## 开发规范

1. 不使用第三方库
2. 图标使用AriIcon,参数见<repo-root>/src/types/componets/icon.ts，可使用的图标名称见Google Fonts 的 Icons
3. 组件需要三个文件，第一个是布局文件写在 src/components/{componentName}/index.tsx，第二个是样式文件写在 src/theme/components/{componentName}.scss，第三个是类型文件写在 src/types/components/{componentName}.ts
4. 对于tsx文件，单个文件保持行数在400行以下，如果超过，拆分文件来压缩
5. 我的scss样式文件，尤其是颜色系统可能定义的不充分，如果在构建库文件或者项目文件时，如果没有需要的颜色，请提供新的定义。
6. 组件tsx布局页面代码结构
7. 每一个组件都需要在preview目录下编写文档，参考已有的组件文档
8. 每次对组件进行修改时，必须更新文档，确保文档内容与组件功能保持一致
9. 每个组件的 Preview 文档必须覆盖该组件全部公开 props。文档 API 表中列出的每一个 prop，至少要在 `preview/src/docs/codes/{component}.tsx` 的一个可见示例中被显式使用，并能从页面上观察到效果或行为差异。
10. 如果组件存在子组件或额外 API（例如 `TreeView`、`TreeNode`），对应的 Preview 也必须分别为它们的公开 props 提供示例，不允许只写 API 表不写 demo。
11. 新增组件、修改组件 props、调整默认值、删除 props 后，必须重新执行 Preview props 覆盖检查；未通过检查前，不允许认为文档已完成。
12. Preview 文档中的示例优先展示单个 prop 的独立效果；当多个 prop 组合展示时，仍需确保每个 prop 至少有一个示例可以清楚判断其作用。

```tsx
/**
 * 组件文档
 * 
 * Example:
 * {@link https://aries-react.dev/docs/ComponentName}
 */
export const AriComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2,
  ...restProps
}) => {
  // 1 状态初始化和Refs以及引用的hook
  const [state1, setState1] = useState(initialValue);
  const [state2, setState2] = useState(initialValue);
  const ref1 = useRef(null);
  const { hookData } = useCustomHook();
  
  // 2 派生状态计算（计算得出的值）
  const derivedValue1 = useMemo(() => {
    // 基于state1和prop1的计算
    return computedValue;
  }, [state1, prop1]);
  const derivedValue2 = state1 && prop2; // 简单派生值不需要useMemo
  
  // 3 事件处理函数，直接响应用户交互的函数（使用useCallback优化性能）
  const handleEvent = useCallback((e) => {
    // 处理事件逻辑
    setState1(newValue);
  }, [/* 依赖项 */]);
  
  // 4 业务逻辑函，处理实际业务逻辑的函数，不直接与用户交互绑定
  const doSomething = useCallback(() => {
    // 业务逻辑
  }, [/* 依赖项 */]);
  
  // 5 副作用处理
  useEffect(() => {
    // 初始化副作用
    return () => {
      // 清理副作用
    };
  }, [/* 依赖项 */]);
  
  useEffect(() => {
    // 响应特定状态变化的副作用
  }, [state1]);
  
  // 6 上下文值计算
  const contextValue = useMemo(() => ({
    value1: state1,
    method1: handleEvent,
    // 其他上下文值
  }), [state1, handleEvent]);
  
  // 7 样式计算
  const containerStyle = useMemo(() => ({
    width: prop1 ? '100%' : 'auto',
    // 其他样式
  }), [prop1]);
  
  // 8 渲染辅助函数
  const renderItem = useCallback((item) => (
    <div key={item.id}>{item.name}</div>
  ), []);
  
  // 9 条件渲染判断
  if (!prop1) return null; // 早期返回
  
  // 10 主要JSX返回
  return (
    <ComponentContext.Provider value={contextValue}>
      <div className="component" style={containerStyle} {...restProps}>
        {/* 主要内容渲染 */}
        <header>{prop2}</header>
        
        <main>
          {state1 && <div>{derivedValue1}</div>}
          {state2.map(renderItem)}
        </main>
        
        {/* 条件渲染 */}
        {derivedValue2 && (
          <footer>
            <button onClick={handleEvent}>操作</button>
          </footer>
        )}
      </div>
    </ComponentContext.Provider>
  );
};
```

# useCss Hook使用规范

## 概述

`useCss`是一个用于生成BEM类名的React Hook，它与SCSS中的标准BEM命名规范配合使用，确保组件样式的一致性和可维护性。

## 基本使用

```tsx
import { useCss } from "@ari/utils";

export const AriButton: React.FC<ButtonProps> = ({ className, ...props }) => {
  const cn = useCss("button"); // 传入组件名称
  
  return (
    <button className={cn.gen(
      className,        // 自定义className
      cn.b(),          // 生成 z-button
      cn.m("primary"), // 生成 z-button--primary
      cn.is("active")  // 生成 z-is-active
    )}>
      {/* 组件内容 */}
    </button>
  );
};
```

## API说明

### 1. 基础方法

```tsx
const cn = useCss("component-name");

// b() - Block 块
cn.b()                    // => "z-component-name"
cn.b("suffix")           // => "z-component-name-suffix"

// e() - Element 元素
cn.e("header")           // => "z-component-name__header"

// m() - Modifier 修饰符
cn.m("large")            // => "z-component-name--large"

// is() - State 状态
cn.is("active")          // => "z-is-active"
cn.is("active", true)    // => "z-is-active" (当条件为true时)
cn.is("active", false)   // => "" (当条件为false时)
```

### 2. 组合方法

```tsx
// be() - Block + Element
cn.be("card", "title")   // => "z-component-name-card__title"

// em() - Element + Modifier
cn.em("button", "primary") // => "z-component-name__button--primary"

// bm() - Block + Modifier
cn.bm("card", "large")   // => "z-component-name-card--large"

// bem() - Block + Element + Modifier
cn.bem("card", "title", "bold") // => "z-component-name-card__title--bold"
```

### 3. gen() 类名生成器

`gen()`方法用于组合多个类名，自动过滤空值并去重：

```tsx
cn.gen(
  className,              // 外部传入的className
  cn.b(),                // 基础类名
  cn.m(size),            // 尺寸修饰符
  cn.m(type),            // 类型修饰符
  cn.is("active", isActive), // 条件状态
  someCondition && cn.m("special"), // 条件修饰符
  [cn.e("icon"), cn.m("large")] // 支持数组
) // => "custom-class z-button z-button--sm z-button--primary z-is-active"
```

## 注意事项

1. **命名一致性**：传入`useCss`的组件名必须与SCSS文件中的根选择器名称一致
2. **条件类名**：使用`is()`方法处理条件状态，避免手动拼接
3. **类名组合**：始终使用`gen()`方法组合类名，它会自动处理空值和重复
4. **语义化**：修饰符和状态名应该语义化，便于理解和维护

## 与SCSS的对应关系

| useCss方法 | 生成的类名 | SCSS选择器 |
|-----------|----------|-----------|
| `cn.b()` | `z-button` | `.#{$namespace}-button` |
| `cn.e("icon")` | `z-button__icon` | `&__icon` |
| `cn.m("primary")` | `z-button--primary` | `&--primary` |
| `cn.is("active")` | `z-is-active` | `&.#{$namespace}-is-active` |

# SCSS开发规范

## BEM体系概述

本项目使用简化的BEM命名体系，采用标准SCSS语法，降低心智负担，提高开发效率。

## 核心语法规则

### ⚠️ 重要使用规则

**使用纯SCSS语法编写BEM选择器，不再使用复杂的混入系统！**

**基础结构：**
- 根选择器：`.#{$namespace}-component`
- 修饰符：`&--modifier`
- 元素：`&__element`
- 状态：`&.#{$namespace}-is-state`

### 1. 基础BEM结构规则

**✅ 标准SCSS BEM语法：**
```scss
.#{$namespace}-button {
  // 组件根样式
  @include flex();
  position: relative;
  padding: getVar(inset, sm) getVar(inset);
  background-color: getVar(color, bg);
  
  // 悬停效果
  &:hover {
    background-color: getVar(color, bg-active);
  }
  
  // 修饰符变体
  &--large {
    height: getVar(element-size, lg);
    font-size: getVar(font-size, lg);
  }
  
  &--primary {
    background-color: getVar(color, brand);
    color: getVar(color, text-on-brand);
  }
  
  // 子元素样式
  &__icon {
    font-size: getVar(font-size);
    margin-right: getVar(inset, xs);
  }
  
  &__label {
    flex: 1;
    text-align: center;
  }
  
  // 状态
  &.#{$namespace}-is-disabled {
    opacity: getVar(opacity, disabled);
    cursor: not-allowed;
    
    &:hover {
      background-color: getVar(color, bg);
    }
  }
  
  &.#{$namespace}-is-loading {
    pointer-events: none;
    
    .#{$namespace}-button__icon {
      animation: spin 1s linear infinite;
    }
  }
  
  // 修饰符内的元素样式
  &--large {
    .#{$namespace}-button__icon {
      font-size: calc(getVar(font-size) * 1.2);
    }
  }
}

### 2. 现有通用mixin使用

项目已提供丰富的通用mixin，在写新样式前必须先查看是否有现成的mixin可用：

**参考文件：**
- `<repo-root>/src/theme/global/rule.scss` - 布局相关mixin（flex、居中、箭头等）
- `<repo-root>/src/theme/global/animation.scss` - 动画相关mixin（波浪、展开收起、旋转等）
- `<repo-root>/src/theme/mixins/mixins.scss` - BEM相关mixin

**使用原则：**
1. 优先使用现有mixin，避免重复实现
2. 如果现有mixin不满足需求，考虑扩展而不是重写
3. 新的通用mixin应该添加到对应的global文件中

## 最佳实践

### 1. 减少重复代码

**❌ 不推荐 - 重复的样式**
```scss
&__button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

&__link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
```

**✅ 推荐 - 合并相同样式**
```scss
&__button,
&__link {
  @include flex(); // 使用通用mixin
  cursor: pointer;
  transition: all getVar(duration, element-interaction);
}
```

### 2. 状态与修饰符组合优化

**❌ 不推荐 - 重复的状态修饰符组合**
```scss
&.#{$namespace}-is-icon-only {
  &.#{$namespace}-button--default {
    min-width: getVar(element-size);
  }
  &.#{$namespace}-button--xs {
    min-width: getVar(element-size, xs);
  }
  &.#{$namespace}-button--sm {
    min-width: getVar(element-size, sm);
  }
  &.#{$namespace}-button--lg {
    min-width: getVar(element-size, lg);
  }
  // ... 更多重复代码
}
```

**✅ 推荐 - 使用SCSS循环优化**
```scss
&.#{$namespace}-is-icon-only {
  $sizes: (xs, sm, lg, xl, xxl);
  
  min-width: getVar(element-size); // 默认尺寸
  
  @each $size in $sizes {
    &.#{$namespace}-button--#{$size} {
      min-width: getVar(element-size, $size);
    }
  }
}
```

### 3. 合理使用嵌套

**✅ 推荐 - 在状态内定义多个元素**
```scss
&.#{$namespace}-is-disabled {
  cursor: not-allowed;
  opacity: getVar(opacity, disabled);
  
  .#{$namespace}-button__icon,
  .#{$namespace}-button__label {
    pointer-events: none;
    opacity: 0.5;
  }
}
```

### 4. 利用现有动画和效果

**✅ 推荐 - 使用现有动画mixin**
```scss
&__button {
  @include rippleAnim(); // 波浪点击效果
  
  &:hover {
    @include elementRotate(0.5s); // hover时旋转
  }
}

&__menu {
  @include expandCollapseAnim(); // 展开收起动画
}
```

### 5. 响应式设计

**✅ 推荐 - 使用响应式mixins**
```scss
// 在小屏幕下全宽
@include res(sm) {
  &--full-width {
    width: 100%;
  }
}

// 在中等屏幕下隐藏
@include res(md) {
  &--hidden {
    display: none;
  }
}
```

## 常见使用模式

### 1. 交互元素模式
```scss
&__button,
&__link,
&__tab {
  cursor: pointer;
  transition: all getVar(duration, element-interaction);
  
  // 单个伪类
  &:hover {
    background-color: getVar(color, bg-active);
  }
  
  // 多个伪类共享样式
  &:hover,
  &:focus {
    outline: 2px solid getVar(color, brand);
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &.#{$namespace}-is-disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: getVar(opacity, disabled);
  }
}
```

### 2. 容器布局模式
```scss
&__header,
&__footer {
  @include flex(space-between, center);
  padding: getVar(inset);
  border-bottom: 1px solid getVar(color, border);
}

&__main,
&__content {
  @include flex(flex-start, stretch, column);
  flex: 1;
  padding: getVar(inset, lg);
}
```

### 3. 网格布局模式
```scss
&__grid,
&__list {
  display: grid;
  gap: getVar(gap);
}

&__grid {
  &--cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  &--cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 注意事项

1. **💡 使用标准SCSS语法**：使用`&--modifier`、`&__element`等标准SCSS嵌套语法
2. **💡 变量命名规范**：使用`$namespace`变量生成类名，确保一致性
3. **优先使用现有mixin**：在写新样式前，先检查global中是否有现成的mixin
4. **合并相同样式**：当多个元素共享样式时，使用逗号分隔的选择器减少重复
5. **合理使用嵌套**：避免过深的嵌套，保持CSS结构清晰
6. **SCSS循环优化**：重复的修饰符变体使用`@each`循环生成
7. **语义化命名**：BEM的命名要语义化，便于理解和维护
8. **性能考虑**：避免过深的选择器嵌套，提高CSS性能
9. **一致性**：整个项目使用统一的BEM规范，保持代码风格一致
10. **响应式设计**：使用`@include res()`处理响应式变体

### 开发优势
- **降低心智负担**：直观的SCSS语法，易于理解和维护
- **提高开发效率**：无需学习复杂的混入系统
- **更好的IDE支持**：标准SCSS语法获得更好的代码提示和高亮
- **易于调试**：生成的CSS选择器直观明了，便于调试

## 示例参考

参考 `<repo-root>/src/theme/components/avatar.scss` 查看完整的简化BEM使用示例。

## 主题变量系统规范

### 变量使用原则

为确保项目支持多主题切换，所有样式中的颜色和数值必须使用统一的变量系统。

### 颜色变量规范

#### 1. 使用主题颜色变量系统

**❌ 禁止直接使用颜色值**
```scss
color: #333333;
background-color: #f5f5f5;
border: 1px solid #e1e1e1;
```

**✅ 必须使用主题颜色变量**
```scss
color: getVar(color, text);
background-color: getVar(color, bg);
border: 1px solid getVar(color, border);
```

#### 2. 颜色变量

**参考文件：** 
- **主题配置结构：** `<repo-root>/src/theme/global/color-theme/theme-config.scss`
- **具体主题实现：** `<repo-root>/src/theme/global/color-theme/brand/light.scss`

使用前请先读取参考文件获取所有可用的颜色变量名称和分类。

### 数值变量规范

#### 1. 使用var.scss变量系统

**❌ 禁止直接使用数值**
```scss
padding: 16px;
margin: 8px;
width: 280px;
height: 32px;
border-radius: 4px;
```

**✅ 必须使用var变量**
```scss
padding: getVar(inset);
margin: getVar(inset, xs);
width: getVar(element-size, content-sm);
height: getVar(element-size, "");
border-radius: getVar(border-radius, sm);
```

#### 2. 数值变量

**参考文件：** `<repo-root>/src/theme/global/var.scss`

使用前请先读取参考文件获取所有可用的数值变量类型和具体变量名称。

### 变量使用最佳实践

#### 1. 组合使用示例

```scss
@include e(button) {
  // 使用多个变量系统
  padding: getVar(inset, sm) getVar(inset);           // 8px 16px
  font-size: getVar(font-size, button);               // 12px
  font-weight: getVar(font-weight, semibold);         // 600
  border-radius: getVar(border-radius, sm);           // 4px
  background-color: getVar(color, brand);             // 品牌色
  color: getVar(color, text-on-brand);                // 品牌色上的文本
  transition: all getVar(duration, element-interaction); // 250ms
  
  @include pseudo(hover) {
    background-color: getVar(color, brand-active);    // 品牌色激活态
  }
}
```

#### 2. 响应式变量使用

```scss
@include e(container) {
  padding: getVar(inset);                    // 默认16px
  
  @include res(sm) {
    padding: getVar(inset, lg);              // 小屏幕20px
  }
  
  @include res(lg) {
    padding: getVar(inset, xl);              // 大屏幕24px
  }
}
```

### 注意事项

1. **完全禁止硬编码**：任何颜色和数值都不能直接写在样式中
2. **变量优先级**：优先使用语义化变量（如brand、primary），避免使用具体色值变量
3. **主题兼容性**：所有变量都支持多主题切换，确保不同主题都能正常显示
4. **性能考虑**：变量系统使用CSS自定义属性，运行时高效
5. **维护性**：统一的变量系统便于全局调整和主题定制

### 变量查找参考

- **主题系统架构：** `<repo-root>/src/theme/global/color-theme/theme-config.scss`
- **具体主题实现：** `<repo-root>/src/theme/global/color-theme/brand/light.scss`
- **数值变量定义：** `<repo-root>/src/theme/global/var.scss`
- **使用示例：** `<repo-root>/src/theme/components/calendar.scss`

### 主题系统架构说明

项目采用统一的主题配置系统，通过 `theme-config.scss` 中的 `@mixin theme-config()` 统一管理所有主题的变量结构。

**新主题创建流程：**
1. 复制现有主题文件（如 `light.scss`）
2. 修改 `data-theme` 和 `color-scheme` 属性
3. 调用 `@include theme-config()` 并提供新的颜色值
4. 无需重复定义变量结构和映射逻辑

# 文档编写规范

## 概述

每个组件都需要编写完整的文档和示例代码，确保用户能够清楚了解组件的使用方法和所有功能特性。

## 文档结构

### 1. 主文档文件 (`preview/src/docs/{componentName}.tsx`)

主文档文件包含组件的完整说明、示例配置和API文档。

```tsx
import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicExample, SizeExample, ColorExample } from './codes/{componentName}';

export const {componentName}Examples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '组件的基本使用方法，展示最简单的配置。',
        demos: [{
            component: BasicExample,
            sourceCode: "" // 不需要手动填写，系统会自动处理
        }]
    },
    size: {
        title: '尺寸设置',
        key: 'size',
        description: '通过size属性设置组件大小，支持多种尺寸选项。',
        demos: [{
            component: SizeExample,
            sourceCode: ""
        }]
    },
    // 更多示例...
};

export const {componentName}API: DocAPI = {
    props: [
        {
            param: 'size',
            desc: '组件大小',
            type: "'xs' | 'sm' | 'default' | 'lg' | 'xl'",
            default: 'default'
        },
        // 更多属性...
    ],
    events: [
        {
            event: 'onClick',
            desc: '点击事件',
            type: '(e: React.MouseEvent) => void'
        }
        // 更多事件...
    ],
    slots: [] // 大部分组件可能为空
};

export const anchors = Object.values({componentName}Examples).map(example => ({
    key: example.key,
    label: example.title
})).concat({ key: 'api', label: 'API' });

const {ComponentName}Doc: React.FC = () => {
    return (
        <Doc
            title="{ComponentName} 组件名称"
            description="组件的简要描述，说明主要功能和用途。"
            examples={{componentName}Examples}
            api={{componentName}API}
        />
    );
};

export default {ComponentName}Doc;
```

### 2. 示例代码文件 (`preview/src/docs/codes/{componentName}.tsx`)

示例代码文件包含所有演示组件的具体实现。

```tsx
import { AriFlex, Ari{ComponentName} } from '@aries-kit/react';

export const BasicExample: React.FC = () => (
    <AriFlex space={16}>
        <Ari{ComponentName}>基础示例</Ari{ComponentName}>
    </AriFlex>
);

export const SizeExample: React.FC = () => (
    <AriFlex space={16}>
        <Ari{ComponentName} size="xs">超小</Ari{ComponentName}>
        <Ari{ComponentName} size="sm">小</Ari{ComponentName}>
        <Ari{ComponentName}>默认</Ari{ComponentName}>
        <Ari{ComponentName} size="lg">大</Ari{ComponentName}>
        <Ari{ComponentName} size="xl">超大</Ari{ComponentName}>
    </AriFlex>
);

export const ColorExample: React.FC = () => (
    <AriFlex space={16}>
        <Ari{ComponentName} colorVariant="brand">品牌色</Ari{ComponentName}>
        <Ari{ComponentName} colorVariant="success">成功</Ari{ComponentName}>
        <Ari{ComponentName} colorVariant="warning">警告</Ari{ComponentName}>
        <Ari{ComponentName} colorVariant="danger">危险</Ari{ComponentName}>
    </AriFlex>
);

// 更多示例组件...
```

### 3. 导航配置 (`preview/src/config.tsx`)

在配置文件中添加组件的导航项。

```tsx
// 在相应的分类中添加
{
    label: '{ComponentName} 组件名称',
    key: '{componentName}',
    path: '/docs/{componentName}'
}
```

## 编写规范

### 1. 文档示例规范

**示例命名：**
- 使用描述性的名称，如 `BasicExample`, `SizeExample`, `ColorVariantExample`
- 每个示例应该专注于展示一个特定功能或属性

**示例内容：**
- 每个示例都应该是独立完整的，可以直接运行
- 使用 `AriFlex` 组件来布局多个示例项
- 展示最典型和常用的使用场景

**描述文字：**
- 每个示例都要有清晰的标题和描述
- 描述应该说明该示例展示的功能和用法
- 使用简洁明了的中文描述

### 2. API文档规范

**属性文档 (props)：**
```tsx
{
    param: '属性名',           // 属性的名称
    desc: '属性描述',          // 属性的功能说明
    type: '类型定义',          // TypeScript类型，使用字符串格式
    default: '默认值'          // 默认值，没有默认值用 '-'
}
```

**事件文档 (events)：**
```tsx
{
    event: '事件名',           // 事件的名称（如onClick）
    desc: '事件描述',          // 事件的触发时机和用途
    type: '回调函数类型'        // 回调函数的TypeScript类型
}
```

**插槽文档 (slots)：**
大部分组件不需要插槽文档，可以设置为空数组。

### 3. 类型定义参考

文档使用的类型定义位于 `preview/src/layout/types.ts`：

```tsx
export interface DocExample {
    title: string;        // 示例标题
    key: string;         // 示例的唯一标识
    description: string; // 示例描述
    demos: Array<{
        component: React.ComponentType;  // 示例组件
        sourceCode: string;             // 源代码（通常为空字符串）
    }>;
}

export interface DocAPI {
    props: Array<{
        param: string;    // 参数名
        desc: string;     // 参数描述  
        type: string;     // 参数类型
        default: string;  // 默认值
    }>;
    events: Array<{
        event: string;    // 事件名
        desc: string;     // 事件描述
        type: string;     // 事件类型
    }>;
    slots: Array<any>;   // 插槽配置（通常为空）
}
```

## 最佳实践

### 1. 示例设计原则

- **渐进式展示**：从基础用法开始，逐步展示高级功能
- **功能完整性**：确保所有重要的属性和功能都有对应的示例
- **实用性优先**：优先展示常用场景和最佳实践
- **视觉清晰**：合理使用间距和布局，确保示例清晰易懂

### 2. 文档写作原则

- **准确性**：确保所有API文档与实际组件接口一致
- **完整性**：覆盖组件的所有公开属性、事件和用法
- **易理解**：使用简洁明了的语言，避免技术术语过于复杂
- **示例驱动**：通过丰富的示例帮助用户理解功能

### 3. 维护规范

- **同步更新**：组件功能变更时，及时更新对应文档
- **测试验证**：确保所有示例代码都能正常运行
- **用户反馈**：根据用户使用情况优化文档内容和示例

## 注意事项

1. **不需要编写sourceMap**：示例代码的源码映射由系统自动处理
2. **保持一致性**：所有组件的文档结构和风格应该保持一致
3. **及时更新**：当组件API发生变化时，必须同步更新文档
4. **测试覆盖**：确保文档中的示例代码都经过测试验证
5. **导航配置**：新增组件时记得在config.tsx中添加对应的导航项

## 开发时同步更新

每次改了 aries-kit：

cd <repo-root>
pnpm build
yalc push
