import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 取消禁止使用 TypeScript 中的 namespace（命名空间）语法
      "@typescript-eslint/no-namespace": "off",
      // 取消未使用变量的警告
      "@typescript-eslint/no-unused-vars": "off",
      // 取消空对象类型的警告
      "@typescript-eslint/no-empty-object-type": "off",
      // 关闭对函数参数类型any的检查
      '@typescript-eslint/no-explicit-any': 'off',
      // 关闭对依赖项的检查
      "react-hooks/exhaustive-deps": "off"
    },
  },
)
