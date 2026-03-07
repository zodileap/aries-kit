
/** API参数类型 */
export interface ApiParam {
    /** 参数键 */
    key: string;
    /** 参数值 */
    value: string;
    /** 参数描述 */
    description?: string;
}

/** API错误码类型 */
export interface ApiErrorCode {
    /** 错误码 */
    code: string;
    /** 错误描述 */
    description: string;
}

/** API特性类型 */
export interface ApiFeature {
    /** 特性名称 */
    name: string;
    /** 特性描述 */
    description: string;
    /** 是否启用 */
    enabled: boolean;
}

/** 历史记录类型 */
export interface ApiHistory {
    /** 请求ID */
    id: string;
    /** 请求方法 */
    method: HttpMethod;
    /** 请求URL */
    url: string;
    /** 请求时间 */
    timestamp: number;
    /** 响应状态 */
    status?: number;
}

/** HTTP方法类型 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
