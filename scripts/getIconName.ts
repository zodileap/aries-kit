import fs from 'fs';
import path from 'path';

const iconDir = path.resolve(__dirname, '../preview/public/assets/icons');
const outputDir = path.resolve(__dirname, '../preview/src/docs/icon');
const outputFile = path.resolve(outputDir, 'iconNames.ts');

function getIconNames(): string[] {
    const files = fs.readdirSync(iconDir);
    return files
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''))
        .sort();
}

function generateIconNamesFile(iconNames: string[]) {
    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const content = `// This file is auto-generated, do not edit manually
export const iconNames = ${JSON.stringify(iconNames, null, 2)} as const;
`;
    fs.writeFileSync(outputFile, content);
}

const iconNames = getIconNames();
generateIconNamesFile(iconNames);
console.log(`Generated ${iconNames.length} icon names to ${outputFile}`);
