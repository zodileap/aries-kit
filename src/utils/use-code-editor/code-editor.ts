/**
 * 代码编辑器辅助函数
 */

/**
 * 获取选中的行范围
 * 
 * Params:
 *  
 *   - text: 文本内容
 *   - selStart: 选择开始位置  
 *   - selEnd: 选择结束位置
 * 
 * Returns:
 * 
 *   包含选择区域和行范围的对象
 */
export const getSelectedLineRange = (
  text: string,
  selStart: number,
  selEnd: number
) => {
  // 如果没有选中文本，返回当前行
  if (selStart === selEnd) {
    const startLinePos = text.lastIndexOf('\n', selStart - 1) + 1;
    const endLinePos = text.indexOf('\n', selStart);
    return {
      start: startLinePos,
      end: endLinePos === -1 ? text.length : endLinePos,
      lineStart: startLinePos,
      lineEnd: endLinePos === -1 ? text.length : endLinePos,
    };
  }

  // 获取选中区域的行范围
  const startLinePos = text.lastIndexOf('\n', selStart - 1) + 1;
  const endLinePos = text.indexOf('\n', selEnd);

  return {
    start: selStart,
    end: selEnd,
    lineStart: startLinePos,
    lineEnd: endLinePos === -1 ? text.length : endLinePos,
  };
};

/**
 * 对文本进行缩进操作
 * 
 * Params:
 * 
 *   - text: 要处理的文本
 *   - selStart: 选择开始位置
 *   - selEnd: 选择结束位置
 *   - tabSize: 缩进空格数
 * 
 * Returns:
 * 
 *   - text: 处理后的文本
 *   - newSelStart: 新的选择开始位置
 *   - newSelEnd: 新的选择结束位置
 */
export const indentText = (
  text: string,
  selStart: number,
  selEnd: number,
  tabSize: number = 4
) => {
  const { lineStart, lineEnd } = getSelectedLineRange(text, selStart, selEnd);
  
  // 获取所有受影响的行
  const selectedText = text.substring(lineStart, lineEnd);
  const lines = selectedText.split('\n');
  
  // 在每行开头添加缩进
  const spaces = ' '.repeat(tabSize);
  const indentedText = lines.map(line => spaces + line).join('\n');
  
  // 替换文本
  const newText = text.substring(0, lineStart) + indentedText + text.substring(lineEnd);
  
  // 计算选中区域的新起始和结束位置
  const newSelStart = selStart === lineStart ? selStart : selStart + tabSize;
  const newSelEnd = selEnd + (lines.length * tabSize);
  
  return {
    text: newText,
    newSelStart,
    newSelEnd
  };
};

/**
 * 对文本进行取消缩进操作
 * 
 * Params:
 * 
 *   - text: 要处理的文本
 *   - selStart: 选择开始位置
 *   - selEnd: 选择结束位置
 *   - tabSize: 缩进空格数
 * 
 * Returns:
 * 
 *   - text: 处理后的文本
 *   - newSelStart: 新的选择开始位置
 *   - newSelEnd: 新的选择结束位置
 */
export const outdentText = (
  text: string,
  selStart: number,
  selEnd: number,
  tabSize: number = 4
) => {
  const { lineStart, lineEnd, start } = getSelectedLineRange(text, selStart, selEnd);
  
  // 获取所有受影响的行
  const selectedText = text.substring(lineStart, lineEnd);
  const lines = selectedText.split('\n');
  
  // 创建缩进模式检测正则表达式
  const indentPattern = new RegExp(`^( {1,${tabSize}}|\\t)`);
  
  // 不同行的缩进一样多
  let removedChars = 0;
  const outdentedLines = lines.map(line => {
    const match = line.match(indentPattern);
    if (match) {
      const indentLength = match[0].length;
      removedChars += indentLength;
      return line.substring(indentLength);
    }
    return line;
  });
  
  const outdentedText = outdentedLines.join('\n');
  
  // 替换文本
  const newText = text.substring(0, lineStart) + outdentedText + text.substring(lineEnd);
  
  // 计算新的选中区域
  const firstLineMatch = lines[0].match(indentPattern);
  const firstLineIndent = firstLineMatch ? firstLineMatch[0].length : 0;
  
  const newSelStart = Math.max(lineStart, selStart - firstLineIndent);
  const newSelEnd = selEnd - removedChars;
  
  return {
    text: newText,
    newSelStart,
    newSelEnd
  };
};

/**
 * 处理Tab键插入
 * 
 * Params:
 * 
 *   - text: 要处理的文本
 *   - selStart: 选择开始位置
 *   - selEnd: 选择结束位置
 *   - tabSize: 缩进空格数
 * 
 * Returns:
 * 
 *   - text: 处理后的文本
 *   - newSelStart: 新的选择开始位置
 *   - newSelEnd: 新的选择结束位置
 */
export const insertTab = (
  text: string,
  selStart: number,
  tabSize: number = 4
) => {
  const spaces = ' '.repeat(tabSize);
  const newText = text.substring(0, selStart) + spaces + text.substring(selStart);
  const newPos = selStart + tabSize;
  
  return {
    text: newText,
    newSelStart: newPos,
    newSelEnd: newPos
  };
};

/**
 * 判断是否应该触发缩进操作
 * 
 * Params:
 * 
 *   - e: 键盘事件
 * 
 * Returns:
 * 
 *   是否应该触发缩进
 */
export const shouldIndent = (e: React.KeyboardEvent): boolean => {
  return e.key === 'Tab' && !e.shiftKey;
};

/**
 * 判断是否应该触发取消缩进操作
 * 
 * Params:
 * 
 *   - e: 键盘事件
 * 
 * Returns:
 * 
 *   是否应该触发取消缩进
 */
export const shouldOutdent = (e: React.KeyboardEvent): boolean => {
  return e.key === 'Tab' && e.shiftKey;
};

/**
 * 判断是否应该触发撤销操作
 * 
 * Params:
 * 
 *   - e: 键盘事件
 * 
 * Returns:
 * 
 *   是否应该触发撤销
 */
export const shouldUndo = (e: React.KeyboardEvent): boolean => {
  return (e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey;
};

/**
 * 判断是否应该触发重做操作
 * 
 * Params:
 * 
 *   - e: 键盘事件
 * 
 * Returns:
 * 
 *   是否应该触发重做
 */
export const shouldRedo = (e: React.KeyboardEvent): boolean => {
  return ((e.ctrlKey || e.metaKey) && e.key === 'z' && e.shiftKey) || 
         ((e.ctrlKey || e.metaKey) && e.key === 'y');
};

/**
 * 判断是否应该触发保存操作
 * 
 * Params:
 * 
 *   - e: 键盘事件
 * 
 * Returns:
 * 
 *   是否应该触发保存
 */
export const shouldSave = (e: React.KeyboardEvent): boolean => {
  return (e.ctrlKey || e.metaKey) && e.key === 's';
};
