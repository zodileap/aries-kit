import { useCallback, useRef } from "react";
import { AriMessage } from "@ari/components/message";
import { I18nTranslates } from "@ari/types";
import { WasmApiResponse } from "@ari/types/wasm/leo_api/v1";
import { withApi } from "./with-api";
import {
  UseApiReturn,
  ApiMethodReturnType,
  ApiCallOptions,
} from "../../types/hooks/use-api";

/**
 * 通用的 API 调用 Hook
 *
 * Example:
 *
 * ```tsx
 * const api = useApi(t, core.apiV1.typeSpecDesigner);
 *
 * // 带完整类型提示的调用
 * const data = await api.call('specListGet', { byName: 1 });
 * const detail = await api.call('specSingleGet', { id: 'xxx' });
 *
 * // 带配置选项
 * const result = await api.call('specSinglePost', params, {
 *   successMessage: '创建成功',
 *   onSuccess: (data) => setState(data)
 * });
 * ```
 */
export const useApi = <T>(t: I18nTranslates, apiCore: T): UseApiReturn<T> => {
  const tRef = useRef(t);
  const apiCoreRef = useRef(apiCore);

  const call = useCallback(
    async <
      K extends keyof T,
      P extends T[K] extends (...args: any[]) => any
        ? Parameters<T[K]>[0]
        : never,
      R = ApiMethodReturnType<T[K]>
    >(
      method: K,
      params?: P,
      options: ApiCallOptions<R> = {}
    ): Promise<R> => {
      const {
        onSuccess,
        onError,
        onFinally,
        onPanic,
        setLoading,
        successMessage,
        errorMessage,
        showSuccessMessage = !!successMessage,
        showErrorMessage = true,
      } = options;

      // 根据method确定默认错误消息的逻辑
      const getDefaultMessage = (methodName?: string) => {
        let actualMethod = methodName;
        // 如果没有传入httpMethod，尝试从methodName推断
        if (actualMethod) {
          const methodStr = String(actualMethod).toLowerCase();
          if (methodStr.endsWith('get')) {
            actualMethod = 'get';
          } else if (methodStr.endsWith('post')) {
            actualMethod = 'post';
          } else if (methodStr.endsWith('put')) {
            actualMethod = 'put';
          } else if (methodStr.endsWith('delete')) {
            actualMethod = 'delete';
          }
        }
        // 如果还是没有method，返回错误消息或默认消息
        if (!actualMethod) return errorMessage;
        const methodLower = actualMethod.toLowerCase();
        switch (methodLower) {
          case "get":
            return tRef.current.common.getSuccess;
          case "post":
            return tRef.current.common.createSuccess;
          case "put":
            return tRef.current.common.updateSuccess;
          case "delete":
            return tRef.current.common.deleteSuccess;
          default:
            return null;
        }
      };

      return new Promise((resolve, reject) => {
        // 开始loading
        if (setLoading) {
          setLoading(true);
        }

        // 调用 API 方法
        const apiMethod = (apiCoreRef.current as any)[method];
        if (typeof apiMethod !== "function") {
          if (setLoading) {
            setLoading(false);
          }
          reject(new Error(`Method ${String(method)} is not a function`));
          return;
        }

        const apiCall = params
          ? () => apiMethod.call(apiCoreRef.current, params)
          : () => apiMethod.call(apiCoreRef.current, {});

        // withApi 的 onSuccess 回调中：
        // - 第一个参数 data 的类型是 ApiMethodReturnType<T[K]>（即 R）
        // - 第二个参数 fullResponse 的类型是 WasmApiResponse<ApiMethodReturnType<T[K]>>
        withApi<R>(apiCall)
          .onSuccess((data: R, fullResponse?: WasmApiResponse<R>) => {
            const msg = successMessage || getDefaultMessage(String(method));
            if (showSuccessMessage && msg) {
              AriMessage.success(msg);
            }
            if (onSuccess) {
              onSuccess(data);
            }
            // 返回实际的数据
            resolve(data);
          })
          .onError((msg) => {
            const error = errorMessage || msg;
            if (showErrorMessage) {
              AriMessage.warning(error);
            }
            if (onError) {
              onError(error);
            }
            reject(error);
          })
          .onPanic((msg) => {

            const error = errorMessage || msg;
            if (showErrorMessage) {
              AriMessage.error(error);
            }
            if (onPanic) {
              onPanic(error);
            }
            reject(error);
          })
          .finally(() => {
            if (setLoading) {
              setLoading(false);
            }
            if (onFinally) {
              onFinally();
            }
          });
      });
    },
    []
  );

  const callWithLoading = useCallback(
    async <
      K extends keyof T,
      P extends T[K] extends (...args: any[]) => any
        ? Parameters<T[K]>[0]
        : never,
      R = ApiMethodReturnType<T[K]>
    >(
      method: K,
      params: P,
      setLoading: (loading: boolean) => void,
      options: ApiCallOptions<R> = {}
    ): Promise<R> => {
      setLoading(true);
      try {
        const result = await call<K, P, R>(method, params, options);
        return result;
      } finally {
        setLoading(false);
      }
    },
    [call]
  );

  return {
    call,
    callWithLoading,
  };
};

export * from "./with-api";
