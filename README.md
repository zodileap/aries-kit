# Aries Kit

Aries Kit is a React frontend library that combines UI components, hooks, initialization utilities, and built-in i18n resources.

## Features

- React component library for common product interfaces
- Reusable hooks for routing, clipboard, drag sorting, validation, and layout behaviors
- Built-in `common` locale resources for `en` and `zh-CN`
- Theme assets and stylesheet output for direct consumption

## Installation

```bash
pnpm add react react-dom react-router-dom @aries-kit/react
```

or

```bash
npm install react react-dom react-router-dom @aries-kit/react
```

`react`, `react-dom`, and `react-router-dom` are peer dependencies.

## Quick Start

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AriButton, initI18n } from '@aries-kit/react';
import '@aries-kit/react/style.css';

initI18n();

function App() {
  return <AriButton type="primary">Hello Aries Kit</AriButton>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

## Hooks

Hooks are currently exported from the main package:

```tsx
import { useClipboard, useValidators, useRouter } from '@aries-kit/react';
```

If the hooks surface is split into a standalone package later, the planned package name is `@aries-kit/hooks`.

## I18n

Aries Kit ships with built-in `common` namespace resources, so consumers do not need to copy locale JSON files into `public/locales`.

```tsx
import { initI18n, useI18n } from '@aries-kit/react';

initI18n();

function Example() {
  const { t } = useI18n(['common']);
  return <span>{t.common.copy}</span>;
}
```

You can also merge custom resources at runtime:

```tsx
import { addI18nResources } from '@aries-kit/react';

addI18nResources({
  en: {
    custom: {
      hello: 'Hello',
    },
  },
});
```

## Styling

- For plain usage, import `@aries-kit/react/style.css`
- For Sass-based customization, import `@aries-kit/react/theme/index.scss`

## Development

```bash
pnpm install
pnpm build
pnpm build:preview
```

## Publishing

The publishable package is generated in `dist/`.

```bash
pnpm build
cd dist
npm publish --access public
```

## License

MIT. See [LICENSE](./LICENSE).
