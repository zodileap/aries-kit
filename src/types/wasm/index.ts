export interface WasmApiResponse<T = unknown> {
  code: number;
  message?: string;
  data: T;
}
