import { MonacoTheme } from './types';

/**
 * Brand主题 - 亮色模式
 * 基于Atom One Light配色方案的亮色主题，提供专业的代码高亮效果
 */
export const brandLightTheme: MonacoTheme = {
  base: "vs",
  inherit: true,
  rules: [
    // 注释 - 使用灰色 (One Light: #8F8F8F)
    { token: "comment", foreground: "#8F8F8F", fontStyle: "italic" },
    { token: "comment.line", foreground: "#8F8F8F", fontStyle: "italic" },
    { token: "comment.block", foreground: "#8F8F8F", fontStyle: "italic" },

    // 字符串 - 使用绿色 (One Light Green: #42933E)
    { token: "string", foreground: "#42933E" },
    { token: "string.quoted", foreground: "#42933E" },
    { token: "string.template", foreground: "#42933E" },

    // 关键字 - 使用紫色/洋红 (One Light Magenta: #9340EF)
    { token: "keyword", foreground: "#9340EF" },
    { token: "keyword.control", foreground: "#9340EF" },
    { token: "keyword.operator", foreground: "#9340EF" },

    // 数字 - 使用蓝色 (One Light Blue: #325EEF)
    { token: "number", foreground: "#325EEF" },
    { token: "number.hex", foreground: "#325EEF" },
    { token: "number.binary", foreground: "#325EEF" },
    { token: "number.octal", foreground: "#325EEF" },
    { token: "number.float", foreground: "#325EEF" },

    // 分隔符和括号 - 使用前景色 (One Light Foreground: #2A2C32)
    { token: "delimiter", foreground: "#2A2C32" },
    { token: "delimiter.bracket", foreground: "#2A2C32" },
    { token: "delimiter.parenthesis", foreground: "#2A2C32" },
    { token: "delimiter.square", foreground: "#2A2C32" },
    { token: "delimiter.angle", foreground: "#2A2C32" },

    // 类型 - 使用黄色/橙色 (One Light Yellow: #855504)
    { token: "type", foreground: "#855504" },
    { token: "type.identifier", foreground: "#855504" },

    // 变量 - 使用前景色 (亮色主题用深色)
    { token: "variable", foreground: "#2A2C32" },
    { token: "variable.predefined", foreground: "#325EEF" },
    { token: "variable.parameter", foreground: "#2A2C32" },

    // 常量 - 使用蓝色
    { token: "constant", foreground: "#325EEF" },
    { token: "constant.language", foreground: "#325EEF" },
    { token: "constant.numeric", foreground: "#325EEF" },

    // 构造函数和类 - 使用黄色
    { token: "constructor", foreground: "#855504" },
    { token: "constructor.call", foreground: "#855504" },

    // 操作符 - 使用红色 (One Light Red: #DB3F39)
    { token: "operator", foreground: "#DB3F39" },
    { token: "operator.assignment", foreground: "#DB3F39" },
    { token: "operator.comparison", foreground: "#DB3F39" },
    { token: "operator.logical", foreground: "#DB3F39" },

    // 函数 - 使用蓝色
    { token: "function", foreground: "#325EEF" },
    { token: "function.call", foreground: "#325EEF" },
    { token: "function.definition", foreground: "#325EEF" },

    // HTML/XML 相关 - 使用绿色
    { token: "tag", foreground: "#42933E" },
    { token: "tag.name", foreground: "#DB3F39" },
    { token: "attribute.name", foreground: "#855504" },
    { token: "attribute.value", foreground: "#42933E" },

    // CSS 相关
    { token: "property", foreground: "#325EEF" },
    { token: "property.value", foreground: "#42933E" },
    { token: "selector", foreground: "#9340EF" },

    // JSON 相关
    { token: "key", foreground: "#325EEF" },
    { token: "value", foreground: "#42933E" },

    // 其他语言元素
    { token: "annotation", foreground: "#8F8F8F" },
    { token: "decorator", foreground: "#9340EF" },
    { token: "namespace", foreground: "#325EEF" },
    { token: "module", foreground: "#325EEF" },
    { token: "class", foreground: "#855504" },
    { token: "class.name", foreground: "#855504" },
    { token: "interface", foreground: "#855504" },
    { token: "enum", foreground: "#855504" },
  ],
  colors: {
    "editor.background": "#F9F9F9", // One Light背景色
    "editor.foreground": "#2A2C32", // One Light前景色
    "editorLineNumber.foreground": "#8F8F97", // 行号颜色(淡化版前景色)
    "editorCursor.foreground": "#9340EF", // 紫色光标
    "editor.selectionBackground": "#f3f1ff", // 选中背景色（半透明）
    "editorWhitespace.foreground": "#8F8F9733", // 微妙的空白字符
  },
};

/**
 * Brand主题 - 暗色模式
 * 基于Atom One Dark配色方案的暗色主题，提供优雅的代码高亮效果
 */
export const brandDarkTheme: MonacoTheme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    // 注释 - 使用灰色 (One Dark: #5C6370)
    { token: "comment", foreground: "#5C6370", fontStyle: "italic" },
    { token: "comment.line", foreground: "#5C6370", fontStyle: "italic" },
    { token: "comment.block", foreground: "#5C6370", fontStyle: "italic" },

    // 字符串 - 使用绿色 (One Dark Green: #98C379)
    { token: "string", foreground: "#98C379" },
    { token: "string.quoted", foreground: "#98C379" },
    { token: "string.template", foreground: "#98C379" },

    // 关键字 - 使用紫色 (One Dark Magenta: #C678DD)
    { token: "keyword", foreground: "#C678DD" },
    { token: "keyword.control", foreground: "#C678DD" },
    { token: "keyword.operator", foreground: "#C678DD" },

    // 数字 - 使用蓝色 (One Dark Blue: #61AFEF)
    { token: "number", foreground: "#61AFEF" },
    { token: "number.hex", foreground: "#61AFEF" },
    { token: "number.binary", foreground: "#61AFEF" },
    { token: "number.octal", foreground: "#61AFEF" },
    { token: "number.float", foreground: "#61AFEF" },

    // 分隔符和括号 - 使用前景色 (One Dark Foreground: #ABB2BF)
    { token: "delimiter", foreground: "#ABB2BF" },
    { token: "delimiter.bracket", foreground: "#ABB2BF" },
    { token: "delimiter.parenthesis", foreground: "#ABB2BF" },
    { token: "delimiter.square", foreground: "#ABB2BF" },
    { token: "delimiter.angle", foreground: "#ABB2BF" },

    // 类型 - 使用黄色 (One Dark Yellow: #D19A66)
    { token: "type", foreground: "#D19A66" },
    { token: "type.identifier", foreground: "#D19A66" },

    // 变量 - 使用前景色
    { token: "variable", foreground: "#ABB2BF" },
    { token: "variable.predefined", foreground: "#61AFEF" },
    { token: "variable.parameter", foreground: "#ABB2BF" },

    // 常量 - 使用蓝色
    { token: "constant", foreground: "#61AFEF" },
    { token: "constant.language", foreground: "#61AFEF" },
    { token: "constant.numeric", foreground: "#61AFEF" },

    // 构造函数和类 - 使用黄色
    { token: "constructor", foreground: "#D19A66" },
    { token: "constructor.call", foreground: "#D19A66" },

    // 操作符 - 使用红色 (One Dark Red: #E06C75)
    { token: "operator", foreground: "#E06C75" },
    { token: "operator.assignment", foreground: "#E06C75" },
    { token: "operator.comparison", foreground: "#E06C75" },
    { token: "operator.logical", foreground: "#E06C75" },

    // 函数 - 使用蓝色
    { token: "function", foreground: "#61AFEF" },
    { token: "function.call", foreground: "#61AFEF" },
    { token: "function.definition", foreground: "#61AFEF" },

    // HTML/XML 相关
    { token: "tag", foreground: "#98C379" },
    { token: "tag.name", foreground: "#E06C75" },
    { token: "attribute.name", foreground: "#D19A66" },
    { token: "attribute.value", foreground: "#98C379" },

    // CSS 相关
    { token: "property", foreground: "#61AFEF" },
    { token: "property.value", foreground: "#98C379" },
    { token: "selector", foreground: "#C678DD" },

    // JSON 相关
    { token: "key", foreground: "#61AFEF" },
    { token: "value", foreground: "#98C379" },

    // 其他语言元素
    { token: "annotation", foreground: "#5C6370" },
    { token: "decorator", foreground: "#C678DD" },
    { token: "namespace", foreground: "#61AFEF" },
    { token: "module", foreground: "#61AFEF" },
    { token: "class", foreground: "#D19A66" },
    { token: "class.name", foreground: "#D19A66" },
    { token: "interface", foreground: "#D19A66" },
    { token: "enum", foreground: "#D19A66" },
  ],
  colors: {
    "editor.background": "#1E2127", // One Dark背景色
    "editor.foreground": "#ABB2BF", // One Dark前景色
    "editorLineNumber.foreground": "#5C6370", // 行号颜色(注释色)
    "editorCursor.foreground": "#C678DD", // 紫色光标
    "editor.selectionBackground": "#2e2c4c", // 选中背景
    "editorWhitespace.foreground": "#5C637033", // 微妙的空白字符
  },
};