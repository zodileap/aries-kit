# Aries Kit

Aries Kit is a React frontend library that combines UI components, hooks, initialization utilities, and built-in i18n resources.

## Features

- React component library for common product interfaces
- Reusable hooks for routing, clipboard, drag sorting, validation, and layout behaviors
- Built-in `common` locale resources for `en` and `zh-CN`
- Theme assets and stylesheet output for direct consumption

## Installation

```bash
pnpm add @aries-kit/react
```

or

```bash
npm install @aries-kit/react
```

Before using Aries Kit, make sure your project already has `react`, `react-dom`, and `react-router-dom` installed. They are peer dependencies and are not bundled into the package.

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

- For compiled component styles, import `@aries-kit/react/style.css`
- `@aries-kit/react/theme/index.scss` only exposes Sass globals, variables, and mixins
- For the full Sass theme source, import `@aries-kit/react/theme/style.scss`

## Development

```bash
pnpm install
pnpm build
pnpm build:preview
```

## Publishing

The publishable package is generated in `dist/`.

Do not publish from the repository root. The root package is marked as private to prevent accidental empty-package releases.

```bash
pnpm release:npm:dry-run
pnpm release:npm
```

## License

MIT. See [LICENSE](./LICENSE).
