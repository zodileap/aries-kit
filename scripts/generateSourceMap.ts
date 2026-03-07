import * as fs from 'fs-extra';
import * as path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'preview/src/docs/codes');

// 定义要排除的文件模式
const EXCLUDED_FILES = ['source-map.ts', 'source_map.ts'];

async function generateSourceMap() {
    try {
        // 扫描目录中的所有文件
        const files = await fs.readdir(DOCS_DIR);
        const fileExports: Record<string, Record<string, string>> = {};

        for (const file of files) {
            // 排除 source-map 相关文件
            if (EXCLUDED_FILES.includes(file)) continue;

            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const filePath = path.join(DOCS_DIR, file);
                const content = await fs.readFile(filePath, 'utf-8');

                // 获取文件名（不带扩展名）
                const fileName = path.basename(file, path.extname(file));

                // 提取所有导出的函数/组件
                const exportedFunctions = extractExportedFunctionsImproved(content);

                if (Object.keys(exportedFunctions).length > 0) {
                    fileExports[fileName] = exportedFunctions;
                }
            }
        }

        // 构建源码映射对象
        let sourceMapContent = 'export const sourceMap = {\n';

        for (const [fileName, functions] of Object.entries(fileExports)) {
            sourceMapContent += `  "${fileName}": {\n`;

            for (const [functionName, functionCode] of Object.entries(functions)) {
                // 修正第二行缩进
                const fixedCode = fixSecondLineIndentation(functionCode);
                // 同时转义反引号和模板字符串内部的 ${}
                sourceMapContent += `    "${functionName}": \`${escapeSpecialChars(fixedCode)}\`,\n`;
            }

            sourceMapContent += '  },\n';
        }

        sourceMapContent += '} as const;\n\n';
        sourceMapContent += 'export type SourceMapKeys = keyof typeof sourceMap;\n';

        // 生成 TypeScript 文件
        const outputPath = path.join(DOCS_DIR, 'source-map.ts');
        await fs.writeFile(outputPath, sourceMapContent, 'utf8');

        console.log(`已生成 ${outputPath}`);
        console.log('源代码映射生成完成。');
    } catch (error) {
        console.error('生成源代码映射时出错:', error);
        throw error;
    }
}

// 转义反引号和模板字符串中的 ${，但保留字符串中已转义的反引号
function escapeSpecialChars(str: string): string {
    // 先保护已经转义的反引号和模板字符串
    const protectedChars: string[] = [];
    let result = str;
    
    // 保护已经转义的反引号 \`
    result = result.replace(/\\`/g, () => {
        const index = protectedChars.length;
        protectedChars.push('\\`');
        return `__PROTECTED_${index}__`;
    });
    
    // 保护已经转义的模板字符串 \${
    result = result.replace(/\\\$\{/g, () => {
        const index = protectedChars.length;
        protectedChars.push('\\${');
        return `__PROTECTED_${index}__`;
    });
    
    // 现在转义剩余的反引号和模板字符串
    result = result
        .replace(/`/g, '\\`')                // 转义反引号
        .replace(/\$\{/g, '\\${');           // 转义模板字符串中的 ${
    
    // 恢复被保护的字符
    protectedChars.forEach((char, index) => {
        result = result.replace(`__PROTECTED_${index}__`, char);
    });
    
    return result;
}

// 修正第二行缩进
function fixSecondLineIndentation(code: string): string {
    const lines = code.split('\n');

    // 至少有两行才进行处理
    if (lines.length >= 2) {
        // 第二行
        const secondLine = lines[1];
        const secondLineMatch = secondLine.match(/^(\s*)/);
        const secondLineIndent = secondLineMatch ? secondLineMatch[1] : '';

        // 如果第二行有缩进，减少两个空格
        if (secondLineIndent.length >= 2) {
            // 移除两个空格
            lines[1] = secondLine.substring(2);
        }

        // 如果是制表符缩进，减少一个制表符
        if (secondLineIndent.includes('\t')) {
            lines[1] = secondLine.replace(/^\t/, '');
        }
    }

    return lines.join('\n');
}

function extractExportedFunctionsImproved(sourceText: string): Record<string, string> {
    const exportedFunctions: Record<string, string> = {};

    // 首先匹配所有导出声明的开头部分
    const exportStartRegex = /export\s+const\s+([A-Za-z0-9_]+)(?:\s*:\s*[^=]+)?\s*=/g;

    let match;
    while ((match = exportStartRegex.exec(sourceText)) !== null) {
        const functionName = match[1];
        const startIndex = match.index;

        // 从匹配点开始寻找函数体的结束位置
        // 需要处理嵌套的大括号和JSX标签
        let endIndex = findFunctionEndIndex(sourceText, startIndex);

        if (endIndex !== -1) {
            // 提取完整的函数代码
            const fullFunctionText = sourceText.substring(startIndex, endIndex);
            exportedFunctions[functionName] = fullFunctionText;
        }
    }

    return exportedFunctions;
}

function findFunctionEndIndex(text: string, startIndex: number): number {
    // 查找第一个等号出现的位置
    const equalsIndex = text.indexOf('=', startIndex);
    if (equalsIndex === -1) return -1;

    // 从等号后开始分析
    let pos = equalsIndex + 1;
    let braceLevel = 0;
    let parenLevel = 0;
    let jsxLevel = 0;
    let foundFunctionStart = false;

    // 跳过等号后的空白
    while (pos < text.length && /\s/.test(text[pos])) pos++;

    // 检查是否是箭头函数
    const isArrowFunction = text.substring(pos).trim().startsWith('(');

    // 函数体可能是 { ... } 或者 (...) => { ... } 或者 (...) => (...)
    for (let i = pos; i < text.length; i++) {
        const char = text[i];
        const nextChar = i + 1 < text.length ? text[i + 1] : '';

        // 处理开始的箭头函数定义
        if (!foundFunctionStart && isArrowFunction && char === '(') {
            parenLevel++;
            continue;
        }

        if (!foundFunctionStart && isArrowFunction && char === ')' && parenLevel > 0) {
            parenLevel--;

            // 找到了箭头函数的参数部分结束
            if (parenLevel === 0) {
                // 寻找箭头 =>
                const arrowStart = text.indexOf('=>', i);
                if (arrowStart !== -1) {
                    i = arrowStart + 1; // 跳过箭头
                    foundFunctionStart = true;
                }
            }
            continue;
        }

        // 箭头后跟着小括号的情况: () => (...)
        if (foundFunctionStart && char === '(' && braceLevel === 0) {
            parenLevel++;
            continue;
        }

        if (char === '(' && parenLevel >= 0) {
            parenLevel++;
            continue;
        }

        if (char === ')' && parenLevel > 0) {
            parenLevel--;

            // 如果是箭头函数末尾的小括号，且函数已开始
            if (parenLevel === 0 && foundFunctionStart && braceLevel === 0) {
                // 检查是否是完整的函数结束（后面跟着分号或换行或文件结束）
                let j = i + 1;
                while (j < text.length && /\s/.test(text[j])) j++;

                if (j >= text.length || text[j] === ';' || text[j] === '\n') {
                    return j >= text.length ? text.length : (text[j] === ';' ? j + 1 : j);
                }
            }
            continue;
        }

        // 处理JSX标签
        if (char === '<' && nextChar !== '/' && !text.substring(i).startsWith('<=')) {
            jsxLevel++;
            continue;
        }

        if (char === '/' && nextChar === '>') {
            jsxLevel--;
            i++; // 跳过 '>'
            continue;
        }

        if (char === '<' && nextChar === '/') {
            // 找到对应的关闭标签
            const closeIndex = text.indexOf('>', i);
            if (closeIndex !== -1) {
                jsxLevel--;
                i = closeIndex;
            }
            continue;
        }

        // 处理函数体大括号
        if (char === '{') {
            braceLevel++;
            // 如果这是第一个大括号，标记为找到了函数开始
            if (braceLevel === 1) {
                foundFunctionStart = true;
            }
            continue;
        }

        if (char === '}' && braceLevel > 0) {
            braceLevel--;

            // 如果大括号已全部闭合，且JSX标签也已闭合
            if (braceLevel === 0 && jsxLevel === 0 && foundFunctionStart) {
                // 检查是否是完整的函数结束（后面跟着分号或换行或文件结束）
                let j = i + 1;
                while (j < text.length && /\s/.test(text[j])) j++;

                if (j >= text.length || text[j] === ';' || text[j] === '\n') {
                    return j >= text.length ? text.length : (text[j] === ';' ? j + 1 : j);
                }
            }
            continue;
        }
    }

    // 如果没找到结束位置，返回文本长度
    return text.length;
}

generateSourceMap().catch(console.error);