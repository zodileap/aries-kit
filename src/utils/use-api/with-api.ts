import { AriMessage } from "@ari/components/message";
import { WasmApiResponse } from "@ari/types/wasm/leo_api/v1";

export enum ErrorLevel {
  NONE = 0,
  INFO = 100,
  WARNING = 200,
  NORMAL = 300,
  BAD_REQUEST = 310,
  BUSINESS = 400,
  BUSINESS_OPERATE = 410,
  RATE_LIMIT = 420,
  SYSTEM = 500,
  NETWORK = 510,
  TIMEOUT = 520,
  SERVER_ERROR = 530,
  PANIC = 900,
  AUTHENTICATION_FAILED = 910,
  PERMISSION_DENIED = 920,
  SECURITY_VIOLATION = 930,
}

export interface ErrorResponse {
  level: ErrorLevel;
  msg: string;
}

const handlerError = (
  code: number,
  res: WasmApiResponse<any>
): ErrorResponse => {
  if (code === 200) {
    return { level: ErrorLevel.NONE, msg: "" };
  }

  const msg = res.data?.message || res.message || "";

  switch (true) {
    case [401, 1000001001, 1000001002, 419].includes(code):
      return {
        level: ErrorLevel.AUTHENTICATION_FAILED,
        msg: "会话已过期，请重新登录",
      };
    case code === 403:
      return { level: ErrorLevel.PERMISSION_DENIED, msg: "权限不足" };
    case [400, 1000002001, 1000002002].includes(code):
      return { level: ErrorLevel.BAD_REQUEST, msg: msg || "请求参数错误" };
    case code === 429:
      return { level: ErrorLevel.RATE_LIMIT, msg: "请求频率过高，请稍后再试" };
    case [1000002003, 1000002004, 1000002005, 1000002006].includes(code):
      return { level: ErrorLevel.BUSINESS_OPERATE, msg: msg || "操作失败" };
    case code === 500:
      return { level: ErrorLevel.SERVER_ERROR, msg: "服务器错误" };
    case code === 502:
      return { level: ErrorLevel.NETWORK, msg: "网关错误" };
    case code === 503:
      return { level: ErrorLevel.SERVER_ERROR, msg: "服务暂时不可用" };
    case code === 504:
      return { level: ErrorLevel.TIMEOUT, msg: "请求超时" };
    default:
      return { level: ErrorLevel.NORMAL, msg: msg || "未知错误" };
  }
};

interface ApiChain<T> {
  onSuccess(
    callback: (data: T, fullResponse?: WasmApiResponse<T>) => void
  ): ApiChain<T>;
  onError(
    callback: (
      message: string,
      code: number,
      fullResponse?: WasmApiResponse<T>
    ) => void
  ): ApiChain<T>;
  onPanic(
    callback: (
      message: string,
      code: number,
      fullResponse?: WasmApiResponse<T>
    ) => void
  ): ApiChain<T>;
  finally(
    callback: (error: ErrorResponse, fullResponse: WasmApiResponse<T>) => void
  ): ApiChain<T>;
}

export const withApi = <T>(
  apiCall: () => Promise<WasmApiResponse<T>>,
  showErrorMessage = true
): ApiChain<T> => {
  const callbacks = {
    success: null as ((data: T, fullResponse?: WasmApiResponse<T>) => void) | null,
    error: null as
      | ((message: string, code: number, fullResponse?: WasmApiResponse<T>) => void)
      | null,
    panic: null as
      | ((message: string, code: number, fullResponse?: WasmApiResponse<T>) => void)
      | null,
    finally: null as ((error: ErrorResponse, fullResponse: WasmApiResponse<T>) => void) | null,
  };

  const deferredHandler: ApiChain<T> = {
    onSuccess(callback) {
      callbacks.success = callback;
      return deferredHandler;
    },
    onError(callback) {
      callbacks.error = callback;
      return deferredHandler;
    },
    onPanic(callback) {
      callbacks.panic = callback;
      return deferredHandler;
    },
    finally(callback) {
      callbacks.finally = callback;
      return deferredHandler;
    },
  };

  apiCall()
    .then((res) => {
      const error = handlerError(res.code, res);

      switch (true) {
        case error.level === ErrorLevel.NONE:
          callbacks.success?.(res.data, res);
          break;
        case error.level >= ErrorLevel.PANIC:
          if (callbacks.panic) {
            callbacks.panic(error.msg, res.code, res);
          } else if (showErrorMessage) {
            AriMessage.error(error.msg);
          }
          break;
        default:
          if (callbacks.error) {
            callbacks.error(error.msg, res.code, res);
          } else if (showErrorMessage) {
            AriMessage.warning(error.msg);
          }
          break;
      }

      callbacks.finally?.(error, res);
    })
    .catch((err) => {
      console.log(err);
      const networkError = {
        level: ErrorLevel.NETWORK,
        msg: "请求失败，请检查网络连接",
      };

      if (callbacks.error) {
        callbacks.error(networkError.msg, -1, {
          code: -1,
          message: networkError.msg,
          data: null,
        } as any);
      } else if (showErrorMessage) {
        AriMessage.warning(networkError.msg);
      }

      callbacks.finally?.(networkError, {
        code: -1,
        message: networkError.msg,
        data: null,
      } as any);
    });

  return deferredHandler;
};
