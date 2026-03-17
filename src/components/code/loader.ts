import type * as Monaco from "monaco-editor";

type MonacoModule = typeof Monaco;
type MonacoWorkerModule = {
  default: {
    new (): Worker;
  };
};

declare global {
  interface Window {
    MonacoEnvironment?: Monaco.Environment;
  }
}

let monacoModulePromise: Promise<MonacoModule> | null = null;

const ensureMonacoEnvironment = () => {
  if (typeof window === "undefined" || window.MonacoEnvironment) {
    return;
  }

  window.MonacoEnvironment = {
    getWorker: (_workerId, label) => {
      const workerLoaders: Record<string, () => Promise<MonacoWorkerModule>> = {
        json: () => import("monaco-editor/esm/vs/language/json/json.worker?worker"),
        css: () => import("monaco-editor/esm/vs/language/css/css.worker?worker"),
        scss: () => import("monaco-editor/esm/vs/language/css/css.worker?worker"),
        less: () => import("monaco-editor/esm/vs/language/css/css.worker?worker"),
        html: () => import("monaco-editor/esm/vs/language/html/html.worker?worker"),
        handlebars: () => import("monaco-editor/esm/vs/language/html/html.worker?worker"),
        razor: () => import("monaco-editor/esm/vs/language/html/html.worker?worker"),
        typescript: () => import("monaco-editor/esm/vs/language/typescript/ts.worker?worker"),
        javascript: () => import("monaco-editor/esm/vs/language/typescript/ts.worker?worker"),
      };

      const loadWorker =
        workerLoaders[label] ??
        (() => import("monaco-editor/esm/vs/editor/editor.worker?worker"));

      return loadWorker().then((module) => new module.default());
    },
  };
};

export const loadMonaco = async (): Promise<MonacoModule> => {
  ensureMonacoEnvironment();

  if (!monacoModulePromise) {
    monacoModulePromise = import("monaco-editor");
  }

  return monacoModulePromise;
};

export type { MonacoModule };
