
/**
 * 请求头
 */
export interface Headers {
    [key: string]: string;
}
/**
 * 响应数据
 */
export interface WasmApiResponse<T> {
    code: number;
    data: T;
    message: string;
}
/**
 * API模拟请求，这是用于测试，到了实际业务应该使用具体的API
 */
export interface APIRequest {
    /**
     * GET请求
     */
    get(url: string, params: any, headers: any): Promise<WasmApiResponse<any>>;
    /**
     * POST请求
     */
    post(url: string, data: any, headers: any): Promise<WasmApiResponse<any>>;
    /**
     * PUT请求
     */
    put(url: string, data: any, headers: any): Promise<WasmApiResponse<any>>;
    /**
     * Remove请求
     */
    remove(url: string, params: any, headers: any): Promise<WasmApiResponse<any>>;
}