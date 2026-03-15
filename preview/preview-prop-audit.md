# Preview Props 覆盖审计

生成时间: 2026-03-13T02:47:19.279Z

审计方法:
- 仅审计同时存在以下文件的组件:
  - `src/types/components/{component}.ts`
  - `preview/src/docs/{component}.tsx`
  - `preview/src/docs/codes/{component}.tsx`
- 从 `preview/src/docs/{component}.tsx` 的 `DocAPI.props` 中提取 `param` 字段。
- 在对应的 `preview/src/docs/codes/{component}.tsx` 中搜索 prop 名字是否被显式使用。
- 这是静态启发式检查，能够快速暴露大多数缺口，但仍需要人工确认示例是否真正体现了 prop 行为。

汇总:
- 审计组件数: 58
- 文档 props 总数: 710
- 代码显式命中 props 数: 708
- 缺失示例 props 数: 2
- 平均覆盖率: 99.72%

## 总览

| 组件 | 文档 props | 已命中 | 缺失 | 覆盖率 |
| --- | ---: | ---: | ---: | ---: |
| carousel | 15 | 14 | 1 | 93.33% |
| menu | 21 | 20 | 1 | 95.24% |
| app-layout | 4 | 4 | 0 | 100.00% |
| avatar | 11 | 11 | 0 | 100.00% |
| breadcrumb | 9 | 9 | 0 | 100.00% |
| button | 11 | 11 | 0 | 100.00% |
| calendar | 13 | 13 | 0 | 100.00% |
| callout | 8 | 8 | 0 | 100.00% |
| card | 24 | 24 | 0 | 100.00% |
| chart | 14 | 14 | 0 | 100.00% |
| checkbox | 6 | 6 | 0 | 100.00% |
| code | 23 | 23 | 0 | 100.00% |
| collapse | 3 | 3 | 0 | 100.00% |
| color-picker | 10 | 10 | 0 | 100.00% |
| container | 21 | 21 | 0 | 100.00% |
| context-menu | 19 | 19 | 0 | 100.00% |
| date-picker | 20 | 20 | 0 | 100.00% |
| divider | 9 | 9 | 0 | 100.00% |
| drag-list | 11 | 11 | 0 | 100.00% |
| drawer | 18 | 18 | 0 | 100.00% |
| empty | 4 | 4 | 0 | 100.00% |
| fixed-size-grid | 8 | 8 | 0 | 100.00% |
| flex | 8 | 8 | 0 | 100.00% |
| form | 18 | 18 | 0 | 100.00% |
| grid | 0 | 0 | 0 | 100.00% |
| icon | 10 | 10 | 0 | 100.00% |
| image | 11 | 11 | 0 | 100.00% |
| input | 18 | 18 | 0 | 100.00% |
| layout | 7 | 7 | 0 | 100.00% |
| link | 13 | 13 | 0 | 100.00% |
| list | 14 | 14 | 0 | 100.00% |
| message | 7 | 7 | 0 | 100.00% |
| modal | 20 | 20 | 0 | 100.00% |
| nav | 6 | 6 | 0 | 100.00% |
| notification | 9 | 9 | 0 | 100.00% |
| pagination | 11 | 11 | 0 | 100.00% |
| particle | 12 | 12 | 0 | 100.00% |
| popconfirm | 13 | 13 | 0 | 100.00% |
| portal | 2 | 2 | 0 | 100.00% |
| progress | 15 | 15 | 0 | 100.00% |
| radio | 7 | 7 | 0 | 100.00% |
| result | 7 | 7 | 0 | 100.00% |
| richEditor | 20 | 20 | 0 | 100.00% |
| select | 16 | 16 | 0 | 100.00% |
| sidebar | 10 | 10 | 0 | 100.00% |
| slider | 17 | 17 | 0 | 100.00% |
| spin | 6 | 6 | 0 | 100.00% |
| statistic | 14 | 14 | 0 | 100.00% |
| sticky | 6 | 6 | 0 | 100.00% |
| switch | 9 | 9 | 0 | 100.00% |
| table | 29 | 29 | 0 | 100.00% |
| tabs | 4 | 4 | 0 | 100.00% |
| tag | 8 | 8 | 0 | 100.00% |
| time-picker | 18 | 18 | 0 | 100.00% |
| timeline | 6 | 6 | 0 | 100.00% |
| tooltip | 12 | 12 | 0 | 100.00% |
| typography | 15 | 15 | 0 | 100.00% |
| upload | 30 | 30 | 0 | 100.00% |

## 缺口详情

### carousel
- 缺失 props: onChange
- Preview 文档: `preview/src/docs/carousel.tsx`
- Demo 代码: `preview/src/docs/codes/carousel.tsx`

### menu
- 缺失 props: textPosition
- Preview 文档: `preview/src/docs/menu.tsx`
- Demo 代码: `preview/src/docs/codes/menu.tsx`

### app-layout
- 缺失: 无
- Preview 文档: `preview/src/docs/app-layout.tsx`
- Demo 代码: `preview/src/docs/codes/app-layout.tsx`

### avatar
- 缺失: 无
- Preview 文档: `preview/src/docs/avatar.tsx`
- Demo 代码: `preview/src/docs/codes/avatar.tsx`

### breadcrumb
- 缺失: 无
- Preview 文档: `preview/src/docs/breadcrumb.tsx`
- Demo 代码: `preview/src/docs/codes/breadcrumb.tsx`

### button
- 缺失: 无
- Preview 文档: `preview/src/docs/button.tsx`
- Demo 代码: `preview/src/docs/codes/button.tsx`

### calendar
- 缺失: 无
- Preview 文档: `preview/src/docs/calendar.tsx`
- Demo 代码: `preview/src/docs/codes/calendar.tsx`

### callout
- 缺失: 无
- Preview 文档: `preview/src/docs/callout.tsx`
- Demo 代码: `preview/src/docs/codes/callout.tsx`

### card
- 缺失: 无
- Preview 文档: `preview/src/docs/card.tsx`
- Demo 代码: `preview/src/docs/codes/card.tsx`

### chart
- 缺失: 无
- Preview 文档: `preview/src/docs/chart.tsx`
- Demo 代码: `preview/src/docs/codes/chart.tsx`

### checkbox
- 缺失: 无
- Preview 文档: `preview/src/docs/checkbox.tsx`
- Demo 代码: `preview/src/docs/codes/checkbox.tsx`

### code
- 缺失: 无
- Preview 文档: `preview/src/docs/code.tsx`
- Demo 代码: `preview/src/docs/codes/code.tsx`

### collapse
- 缺失: 无
- Preview 文档: `preview/src/docs/collapse.tsx`
- Demo 代码: `preview/src/docs/codes/collapse.tsx`

### color-picker
- 缺失: 无
- Preview 文档: `preview/src/docs/color-picker.tsx`
- Demo 代码: `preview/src/docs/codes/color-picker.tsx`

### container
- 缺失: 无
- Preview 文档: `preview/src/docs/container.tsx`
- Demo 代码: `preview/src/docs/codes/container.tsx`

### context-menu
- 缺失: 无
- Preview 文档: `preview/src/docs/context-menu.tsx`
- Demo 代码: `preview/src/docs/codes/context-menu.tsx`

### date-picker
- 缺失: 无
- Preview 文档: `preview/src/docs/date-picker.tsx`
- Demo 代码: `preview/src/docs/codes/date-picker.tsx`

### divider
- 缺失: 无
- Preview 文档: `preview/src/docs/divider.tsx`
- Demo 代码: `preview/src/docs/codes/divider.tsx`

### drag-list
- 缺失: 无
- Preview 文档: `preview/src/docs/drag-list.tsx`
- Demo 代码: `preview/src/docs/codes/drag-list.tsx`

### drawer
- 缺失: 无
- Preview 文档: `preview/src/docs/drawer.tsx`
- Demo 代码: `preview/src/docs/codes/drawer.tsx`

### empty
- 缺失: 无
- Preview 文档: `preview/src/docs/empty.tsx`
- Demo 代码: `preview/src/docs/codes/empty.tsx`

### fixed-size-grid
- 缺失: 无
- Preview 文档: `preview/src/docs/fixed-size-grid.tsx`
- Demo 代码: `preview/src/docs/codes/fixed-size-grid.tsx`

### flex
- 缺失: 无
- Preview 文档: `preview/src/docs/flex.tsx`
- Demo 代码: `preview/src/docs/codes/flex.tsx`

### form
- 缺失: 无
- Preview 文档: `preview/src/docs/form.tsx`
- Demo 代码: `preview/src/docs/codes/form.tsx`

### grid
- 缺失: 无
- Preview 文档: `preview/src/docs/grid.tsx`
- Demo 代码: `preview/src/docs/codes/grid.tsx`

### icon
- 缺失: 无
- Preview 文档: `preview/src/docs/icon.tsx`
- Demo 代码: `preview/src/docs/codes/icon.tsx`

### image
- 缺失: 无
- Preview 文档: `preview/src/docs/image.tsx`
- Demo 代码: `preview/src/docs/codes/image.tsx`

### input
- 缺失: 无
- Preview 文档: `preview/src/docs/input.tsx`
- Demo 代码: `preview/src/docs/codes/input.tsx`

### layout
- 缺失: 无
- Preview 文档: `preview/src/docs/layout.tsx`
- Demo 代码: `preview/src/docs/codes/layout.tsx`

### link
- 缺失: 无
- Preview 文档: `preview/src/docs/link.tsx`
- Demo 代码: `preview/src/docs/codes/link.tsx`

### list
- 缺失: 无
- Preview 文档: `preview/src/docs/list.tsx`
- Demo 代码: `preview/src/docs/codes/list.tsx`

### message
- 缺失: 无
- Preview 文档: `preview/src/docs/message.tsx`
- Demo 代码: `preview/src/docs/codes/message.tsx`

### modal
- 缺失: 无
- Preview 文档: `preview/src/docs/modal.tsx`
- Demo 代码: `preview/src/docs/codes/modal.tsx`

### nav
- 缺失: 无
- Preview 文档: `preview/src/docs/nav.tsx`
- Demo 代码: `preview/src/docs/codes/nav.tsx`

### notification
- 缺失: 无
- Preview 文档: `preview/src/docs/notification.tsx`
- Demo 代码: `preview/src/docs/codes/notification.tsx`

### pagination
- 缺失: 无
- Preview 文档: `preview/src/docs/pagination.tsx`
- Demo 代码: `preview/src/docs/codes/pagination.tsx`

### particle
- 缺失: 无
- Preview 文档: `preview/src/docs/particle.tsx`
- Demo 代码: `preview/src/docs/codes/particle.tsx`

### popconfirm
- 缺失: 无
- Preview 文档: `preview/src/docs/popconfirm.tsx`
- Demo 代码: `preview/src/docs/codes/popconfirm.tsx`

### portal
- 缺失: 无
- Preview 文档: `preview/src/docs/portal.tsx`
- Demo 代码: `preview/src/docs/codes/portal.tsx`

### progress
- 缺失: 无
- Preview 文档: `preview/src/docs/progress.tsx`
- Demo 代码: `preview/src/docs/codes/progress.tsx`

### radio
- 缺失: 无
- Preview 文档: `preview/src/docs/radio.tsx`
- Demo 代码: `preview/src/docs/codes/radio.tsx`

### result
- 缺失: 无
- Preview 文档: `preview/src/docs/result.tsx`
- Demo 代码: `preview/src/docs/codes/result.tsx`

### richEditor
- 缺失: 无
- Preview 文档: `preview/src/docs/richEditor.tsx`
- Demo 代码: `preview/src/docs/codes/richEditor.tsx`

### select
- 缺失: 无
- Preview 文档: `preview/src/docs/select.tsx`
- Demo 代码: `preview/src/docs/codes/select.tsx`

### sidebar
- 缺失: 无
- Preview 文档: `preview/src/docs/sidebar.tsx`
- Demo 代码: `preview/src/docs/codes/sidebar.tsx`

### slider
- 缺失: 无
- Preview 文档: `preview/src/docs/slider.tsx`
- Demo 代码: `preview/src/docs/codes/slider.tsx`

### spin
- 缺失: 无
- Preview 文档: `preview/src/docs/spin.tsx`
- Demo 代码: `preview/src/docs/codes/spin.tsx`

### statistic
- 缺失: 无
- Preview 文档: `preview/src/docs/statistic.tsx`
- Demo 代码: `preview/src/docs/codes/statistic.tsx`

### sticky
- 缺失: 无
- Preview 文档: `preview/src/docs/sticky.tsx`
- Demo 代码: `preview/src/docs/codes/sticky.tsx`

### switch
- 缺失: 无
- Preview 文档: `preview/src/docs/switch.tsx`
- Demo 代码: `preview/src/docs/codes/switch.tsx`

### table
- 缺失: 无
- Preview 文档: `preview/src/docs/table.tsx`
- Demo 代码: `preview/src/docs/codes/table.tsx`

### tabs
- 缺失: 无
- Preview 文档: `preview/src/docs/tabs.tsx`
- Demo 代码: `preview/src/docs/codes/tabs.tsx`

### tag
- 缺失: 无
- Preview 文档: `preview/src/docs/tag.tsx`
- Demo 代码: `preview/src/docs/codes/tag.tsx`

### time-picker
- 缺失: 无
- Preview 文档: `preview/src/docs/time-picker.tsx`
- Demo 代码: `preview/src/docs/codes/time-picker.tsx`

### timeline
- 缺失: 无
- Preview 文档: `preview/src/docs/timeline.tsx`
- Demo 代码: `preview/src/docs/codes/timeline.tsx`

### tooltip
- 缺失: 无
- Preview 文档: `preview/src/docs/tooltip.tsx`
- Demo 代码: `preview/src/docs/codes/tooltip.tsx`

### typography
- 缺失: 无
- Preview 文档: `preview/src/docs/typography.tsx`
- Demo 代码: `preview/src/docs/codes/typography.tsx`

### upload
- 缺失: 无
- Preview 文档: `preview/src/docs/upload.tsx`
- Demo 代码: `preview/src/docs/codes/upload.tsx`

## 跳过的文档

- color: 没有匹配的组件类型文件，视为非组件文档或独立专题页
- social-login-button: 没有匹配的组件类型文件，视为非组件文档或独立专题页
- style: 没有匹配的组件类型文件，视为非组件文档或独立专题页
- text: 没有匹配的组件类型文件，视为非组件文档或独立专题页
