import { WasmApiResponse } from "../wasm";

/**
 * API 调用选项配置
 */
export interface ApiCallOptions<T = any> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  onFinally?: () => void;
  onPanic?: (error: unknown) => void;
  setLoading?: (loading: boolean) => void;
  successMessage?: string;
  errorMessage?: string;
  method?: string;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
}

/**
 * 提取 Promise 的返回类型
 */
export type PromiseReturnType<T> = T extends Promise<infer U> ? U : never;

/**
 * 提取 WasmApiResponse 的泛型参数
 */
export type ExtractWasmApiResponse<T> = T extends WasmApiResponse<infer U> ? U : T;

/**
 * 提取 API 方法的返回类型
 */
export type ApiMethodReturnType<T> = T extends (...args: any[]) => Promise<infer U> 
  ? ExtractWasmApiResponse<U> 
  : never;

/**
 * useApi Hook 的返回类型
 */
export interface UseApiReturn<T> {
  call: <
    K extends keyof T, 
    P extends T[K] extends (...args: any[]) => any ? Parameters<T[K]>[0] : never, 
    R = ApiMethodReturnType<T[K]>
  >(
    method: K,
    params?: P,
    options?: ApiCallOptions<R>
  ) => Promise<R>;
     
  callWithLoading: <
    K extends keyof T, 
    P extends T[K] extends (...args: any[]) => any ? Parameters<T[K]>[0] : never, 
    R = ApiMethodReturnType<T[K]>
  >(
    method: K,
    params: P,
    setLoading: (loading: boolean) => void,
    options?: ApiCallOptions<R>
  ) => Promise<R>;
}