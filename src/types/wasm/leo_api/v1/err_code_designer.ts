import { Headers, WasmApiResponse } from "./api"
export interface ErrCodeDesignerInstance {
    /**
    * 
    * url: err_code_designer/err-code/v1/build
    */
    errCodeBuildPost(data: ErrCodeBuildPostReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeBuildPostResp>>;
    /**
    * 获取多个错误码定义
    * url: err_code_designer/err-code/v1/list
    */
    errCodeListGet(params: ErrCodeListGetReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeListGetResp>>;
    /**
    * 创建单个错误码定义
    * url: err_code_designer/err-code/v1/single
    */
    errCodeSinglePost(data: ErrCodeSinglePostReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeSinglePostResp>>;
    /**
    * 更新错误码定义
    * url: err_code_designer/err-code/v1/single
    */
    errCodeSinglePut(data: ErrCodeSinglePutReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeSinglePutResp>>;
    /**
    * 获取单个错误码定义
    * url: err_code_designer/err-code/v1/single
    */
    errCodeSingleGet(params: ErrCodeSingleGetReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeSingleGetResp>>;
    /**
    * 删除错误码定义
    * url: err_code_designer/err-code/v1/single
    */
    errCodeSingleDelete(params: ErrCodeSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<ErrCodeSingleDeleteResp>>;
    /**
    * 获取多个错误码组
    * url: err_code_designer/group/v1/list
    */
    groupListGet(params: GroupListGetReq, headers?: Headers): Promise<WasmApiResponse<GroupListGetResp>>;
    /**
    * 创建单个错误码组
    * url: err_code_designer/group/v1/single
    */
    groupSinglePost(data: GroupSinglePostReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePostResp>>;
    /**
    * 更新错误码组
    * url: err_code_designer/group/v1/single
    */
    groupSinglePut(data: GroupSinglePutReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePutResp>>;
    /**
    * 获取单个错误码组
    * url: err_code_designer/group/v1/single
    */
    groupSingleGet(params: GroupSingleGetReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleGetResp>>;
    /**
    * 删除错误码组
    * url: err_code_designer/group/v1/single
    */
    groupSingleDelete(params: GroupSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleDeleteResp>>;
    /**
    * 获取多个错误码段
    * url: err_code_designer/segment/v1/list
    */
    segmentListGet(params: SegmentListGetReq, headers?: Headers): Promise<WasmApiResponse<SegmentListGetResp>>;
    /**
    * 创建单个错误码段
    * url: err_code_designer/segment/v1/single
    */
    segmentSinglePost(data: SegmentSinglePostReq, headers?: Headers): Promise<WasmApiResponse<SegmentSinglePostResp>>;
    /**
    * 更新错误码段
    * url: err_code_designer/segment/v1/single
    */
    segmentSinglePut(data: SegmentSinglePutReq, headers?: Headers): Promise<WasmApiResponse<SegmentSinglePutResp>>;
    /**
    * 获取单个错误码段
    * url: err_code_designer/segment/v1/single
    */
    segmentSingleGet(params: SegmentSingleGetReq, headers?: Headers): Promise<WasmApiResponse<SegmentSingleGetResp>>;
    /**
    * 删除错误码段
    * url: err_code_designer/segment/v1/single
    */
    segmentSingleDelete(params: SegmentSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<SegmentSingleDeleteResp>>;
}


/**
* 
*/
export interface ErrCodeBuildPostReq {
}
/**
* 
*/
export interface ErrCodeBuildPostResp {
    /**
        * 是否构建
        */
    success?: boolean;
}

/**
* 查询错误码定义
*/
export interface ErrCodeListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 错误信息
        */
    msg?: string;
    /**
        * 错误信息
        */
    msgs?: string[];
    /**
        * 按照错误信息排序
        */
    byMsg?: number;
    /**
        * 错误码名称（如Err_1007001004）
        */
    name?: string;
    /**
        * 错误码名称（如Err_1007001004）
        */
    names?: string[];
    /**
        * 按照错误码名称（如Err_1007001004）排序
        */
    byName?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string[];
    /**
        * 按照所属组ID排序
        */
    byGroupId?: number;
    /**
        * 业务编号（1-3位）
        */
    businessId?: string;
    /**
        * 业务编号（1-3位）
        */
    businessIds?: string[];
    /**
        * 按照业务编号（1-3位）排序
        */
    byBusinessId?: number;
    /**
        * 模块编号（4-6位）
        */
    moduleId?: string;
    /**
        * 模块编号（4-6位）
        */
    moduleIds?: string[];
    /**
        * 按照模块编号（4-6位）排序
        */
    byModuleId?: number;
    /**
        * 错误码 (7-9位)
        */
    code?: string;
    /**
        * 错误码 (7-9位)
        */
    codes?: string[];
    /**
        * 按照错误码 (7-9位)排序
        */
    byCode?: number;
    /**
        * 详细描述
        */
    description?: string;
    /**
        * 详细描述
        */
    descriptions?: string[];
    /**
        * 按照详细描述排序
        */
    byDescription?: number;
    /**
        * 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errType?: number;
    /**
        * 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errTypes?: number[];
    /**
        * 按照错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)排序
        */
    byErrType?: number;
    /**
        * 错误原因
        */
    reason?: string;
    /**
        * 错误原因
        */
    reasons?: string[];
    /**
        * 按照错误原因排序
        */
    byReason?: number;
    /**
        * 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCode?: string;
    /**
        * 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCodes?: string[];
    /**
        * 按照状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户排序
        */
    byStatusCode?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 占位符
        */
    verbs?: string[];
    /**
        * 占位符
        */
    verbss?: string[];
    /**
        * 按照占位符排序
        */
    byVerbs?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 响应 - 获取多个错误码定义
*/
export interface ErrCodeListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Msg 错误信息 */
        msg: string;
        /** Name 错误码名称（如Err_1007001004） */
        name: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** BusinessId 业务编号（1-3位） */
        businessId: string;
        /** ModuleId 模块编号（4-6位） */
        moduleId: string;
        /** Code 错误码 (7-9位) */
        code: string;
        /** Description 详细描述 */
        description?: string;
        /** ErrType 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errType: number;
        /** Reason 错误原因 */
        reason?: string;
        /** StatusCode 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCode?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** Verbs 占位符 */
        verbs?: string[]
    }[];
}

/**
* 创建单条错误码定义
*/
export interface ErrCodeSinglePostReq {
    /**
        * 错误信息 (必填)
        */
    msg: string;
    /**
        * 错误码名称（如Err_1007001004） (必填)
        */
    name: string;
    /**
        * 所属组ID (必填)
        */
    groupId: string;
    /**
        * 业务编号（1-3位） (必填)
        */
    businessId: string;
    /**
        * 模块编号（4-6位） (必填)
        */
    moduleId: string;
    /**
        * 错误码 (7-9位) (必填)
        */
    code: string;
    /**
        * 详细描述 (自动填充)
        */
    description?: string;
    /**
        * 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) (自动填充)
        */
    errType?: number;
    /**
        * 错误原因 (自动填充)
        */
    reason?: string;
    /**
        * 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 (可选)
        */
    statusCode?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
    /**
        * 占位符 (可选)
        */
    verbs?: string[];
}
/**
* 错误码定义
*/
export interface ErrCodeSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Msg 错误信息
        */
    msg: string;
    /**
        * Name 错误码名称（如Err_1007001004）
        */
    name: string;
    /**
        * GroupId 所属组ID
        */
    groupId: string;
    /**
        * BusinessId 业务编号（1-3位）
        */
    businessId: string;
    /**
        * ModuleId 模块编号（4-6位）
        */
    moduleId: string;
    /**
        * Code 错误码 (7-9位)
        */
    code: string;
    /**
        * Description 详细描述
        */
    description?: string;
    /**
        * ErrType 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errType: number;
    /**
        * Reason 错误原因
        */
    reason?: string;
    /**
        * StatusCode 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCode?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
    /**
        * Verbs 占位符
        */
    verbs?: string[];
}

/**
* 请求 - 更新错误码定义
*/
export interface ErrCodeSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 错误信息 */
        msg?: string;
        /** 错误信息 */
        msgs?: string[];
        /** 按照错误信息排序 */
        byMsg?: number;
        /** 错误码名称（如Err_1007001004） */
        name?: string;
        /** 错误码名称（如Err_1007001004） */
        names?: string[];
        /** 按照错误码名称（如Err_1007001004）排序 */
        byName?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string[];
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 业务编号（1-3位） */
        businessIds?: string[];
        /** 按照业务编号（1-3位）排序 */
        byBusinessId?: number;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 模块编号（4-6位） */
        moduleIds?: string[];
        /** 按照模块编号（4-6位）排序 */
        byModuleId?: number;
        /** 错误码 (7-9位) */
        code?: string;
        /** 错误码 (7-9位) */
        codes?: string[];
        /** 按照错误码 (7-9位)排序 */
        byCode?: number;
        /** 详细描述 */
        description?: string;
        /** 详细描述 */
        descriptions?: string[];
        /** 按照详细描述排序 */
        byDescription?: number;
        /** 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errType?: number;
        /** 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errTypes?: number[];
        /** 按照错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)排序 */
        byErrType?: number;
        /** 错误原因 */
        reason?: string;
        /** 错误原因 */
        reasons?: string[];
        /** 按照错误原因排序 */
        byReason?: number;
        /** 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCode?: string;
        /** 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCodes?: string[];
        /** 按照状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户排序 */
        byStatusCode?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 占位符 */
        verbs?: string[];
        /** 占位符 */
        verbss?: string[];
        /** 按照占位符排序 */
        byVerbs?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 更新内容
        */
    update: {
        /** 错误信息 */
        msg?: string;
        /** 错误码名称（如Err_1007001004） */
        name?: string;
        /** 所属组ID */
        groupId?: string;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 错误码 (7-9位) */
        code?: string;
        /** 详细描述 */
        description?: string;
        /** 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errType?: number;
        /** 错误原因 */
        reason?: string;
        /** 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCode?: string;
        /** 状态 */
        status?: number;
        /** 占位符 */
        verbs?: string[]
    };
}
/**
* 响应 - 更新错误码定义
*/
export interface ErrCodeSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Msg 错误信息 */
        msg: string;
        /** Name 错误码名称（如Err_1007001004） */
        name: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** BusinessId 业务编号（1-3位） */
        businessId: string;
        /** ModuleId 模块编号（4-6位） */
        moduleId: string;
        /** Code 错误码 (7-9位) */
        code: string;
        /** Description 详细描述 */
        description?: string;
        /** ErrType 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errType: number;
        /** Reason 错误原因 */
        reason?: string;
        /** StatusCode 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCode?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** Verbs 占位符 */
        verbs?: string[]
    }[];
}

/**
* 查询错误码定义
*/
export interface ErrCodeSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 错误信息
        */
    msg?: string;
    /**
        * 错误信息
        */
    msgs?: string[];
    /**
        * 按照错误信息排序
        */
    byMsg?: number;
    /**
        * 错误码名称（如Err_1007001004）
        */
    name?: string;
    /**
        * 错误码名称（如Err_1007001004）
        */
    names?: string[];
    /**
        * 按照错误码名称（如Err_1007001004）排序
        */
    byName?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string[];
    /**
        * 按照所属组ID排序
        */
    byGroupId?: number;
    /**
        * 业务编号（1-3位）
        */
    businessId?: string;
    /**
        * 业务编号（1-3位）
        */
    businessIds?: string[];
    /**
        * 按照业务编号（1-3位）排序
        */
    byBusinessId?: number;
    /**
        * 模块编号（4-6位）
        */
    moduleId?: string;
    /**
        * 模块编号（4-6位）
        */
    moduleIds?: string[];
    /**
        * 按照模块编号（4-6位）排序
        */
    byModuleId?: number;
    /**
        * 错误码 (7-9位)
        */
    code?: string;
    /**
        * 错误码 (7-9位)
        */
    codes?: string[];
    /**
        * 按照错误码 (7-9位)排序
        */
    byCode?: number;
    /**
        * 详细描述
        */
    description?: string;
    /**
        * 详细描述
        */
    descriptions?: string[];
    /**
        * 按照详细描述排序
        */
    byDescription?: number;
    /**
        * 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errType?: number;
    /**
        * 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errTypes?: number[];
    /**
        * 按照错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)排序
        */
    byErrType?: number;
    /**
        * 错误原因
        */
    reason?: string;
    /**
        * 错误原因
        */
    reasons?: string[];
    /**
        * 按照错误原因排序
        */
    byReason?: number;
    /**
        * 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCode?: string;
    /**
        * 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCodes?: string[];
    /**
        * 按照状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户排序
        */
    byStatusCode?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 占位符
        */
    verbs?: string[];
    /**
        * 占位符
        */
    verbss?: string[];
    /**
        * 按照占位符排序
        */
    byVerbs?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 错误码定义
*/
export interface ErrCodeSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Msg 错误信息
        */
    msg: string;
    /**
        * Name 错误码名称（如Err_1007001004）
        */
    name: string;
    /**
        * GroupId 所属组ID
        */
    groupId: string;
    /**
        * BusinessId 业务编号（1-3位）
        */
    businessId: string;
    /**
        * ModuleId 模块编号（4-6位）
        */
    moduleId: string;
    /**
        * Code 错误码 (7-9位)
        */
    code: string;
    /**
        * Description 详细描述
        */
    description?: string;
    /**
        * ErrType 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)
        */
    errType: number;
    /**
        * Reason 错误原因
        */
    reason?: string;
    /**
        * StatusCode 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户
        */
    statusCode?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
    /**
        * Verbs 占位符
        */
    verbs?: string[];
}

/**
* 请求 - 删除错误码定义
*/
export interface ErrCodeSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 错误信息 */
        msg?: string;
        /** 错误信息 */
        msgs?: string[];
        /** 按照错误信息排序 */
        byMsg?: number;
        /** 错误码名称（如Err_1007001004） */
        name?: string;
        /** 错误码名称（如Err_1007001004） */
        names?: string[];
        /** 按照错误码名称（如Err_1007001004）排序 */
        byName?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string[];
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 业务编号（1-3位） */
        businessIds?: string[];
        /** 按照业务编号（1-3位）排序 */
        byBusinessId?: number;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 模块编号（4-6位） */
        moduleIds?: string[];
        /** 按照模块编号（4-6位）排序 */
        byModuleId?: number;
        /** 错误码 (7-9位) */
        code?: string;
        /** 错误码 (7-9位) */
        codes?: string[];
        /** 按照错误码 (7-9位)排序 */
        byCode?: number;
        /** 详细描述 */
        description?: string;
        /** 详细描述 */
        descriptions?: string[];
        /** 按照详细描述排序 */
        byDescription?: number;
        /** 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errType?: number;
        /** 错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2) */
        errTypes?: number[];
        /** 按照错误类型(1:业务错误（即api返回400)，2:系统或代码编写错误 (api返回500) 1 << 1，4:用户输入错误 (api返回200，但是业务码为特定值) 1 << 2)排序 */
        byErrType?: number;
        /** 错误原因 */
        reason?: string;
        /** 错误原因 */
        reasons?: string[];
        /** 按照错误原因排序 */
        byReason?: number;
        /** 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCode?: string;
        /** 状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户 */
        statusCodes?: string[];
        /** 按照状态码，这个是给前端使用的，前端可以根据这个状态码来判断是否需要提示用户排序 */
        byStatusCode?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 占位符 */
        verbs?: string[];
        /** 占位符 */
        verbss?: string[];
        /** 按照占位符排序 */
        byVerbs?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 是否物理删除
        */
    remove?: boolean;
}
/**
* 响应 - 删除错误码定义
*/
export interface ErrCodeSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询错误码组
*/
export interface GroupListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 组名称
        */
    name?: string;
    /**
        * 组名称
        */
    names?: string[];
    /**
        * 按照组名称排序
        */
    byName?: number;
    /**
        * 组编码（如100,101等）
        */
    code?: string;
    /**
        * 组编码（如100,101等）
        */
    codes?: string[];
    /**
        * 按照组编码（如100,101等）排序
        */
    byCode?: number;
    /**
        * 组描述
        */
    description?: string;
    /**
        * 组描述
        */
    descriptions?: string[];
    /**
        * 按照组描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 排序
        */
    sorts?: number[];
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 响应 - 获取多个错误码组
*/
export interface GroupListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 组名称 */
        name: string;
        /** Code 组编码（如100,101等） */
        code: string;
        /** Description 组描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 创建单条错误码组
*/
export interface GroupSinglePostReq {
    /**
        * 组名称 (必填)
        */
    name: string;
    /**
        * 组编码（如100,101等） (必填)
        */
    code: string;
    /**
        * 组描述 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
    /**
        * 排序 (自动填充)
        */
    sort?: number;
}
/**
* 错误码组
*/
export interface GroupSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 组名称
        */
    name: string;
    /**
        * Code 组编码（如100,101等）
        */
    code: string;
    /**
        * Description 组描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * Sort 排序
        */
    sort?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
}

/**
* 请求 - 更新错误码组
*/
export interface GroupSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 组名称 */
        name?: string;
        /** 组名称 */
        names?: string[];
        /** 按照组名称排序 */
        byName?: number;
        /** 组编码（如100,101等） */
        code?: string;
        /** 组编码（如100,101等） */
        codes?: string[];
        /** 按照组编码（如100,101等）排序 */
        byCode?: number;
        /** 组描述 */
        description?: string;
        /** 组描述 */
        descriptions?: string[];
        /** 按照组描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number[];
        /** 按照排序排序 */
        bySort?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 更新内容
        */
    update: {
        /** 组名称 */
        name?: string;
        /** 组编码（如100,101等） */
        code?: string;
        /** 组描述 */
        description?: string;
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number
    };
}
/**
* 响应 - 更新错误码组
*/
export interface GroupSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 组名称 */
        name: string;
        /** Code 组编码（如100,101等） */
        code: string;
        /** Description 组描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询错误码组
*/
export interface GroupSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 组名称
        */
    name?: string;
    /**
        * 组名称
        */
    names?: string[];
    /**
        * 按照组名称排序
        */
    byName?: number;
    /**
        * 组编码（如100,101等）
        */
    code?: string;
    /**
        * 组编码（如100,101等）
        */
    codes?: string[];
    /**
        * 按照组编码（如100,101等）排序
        */
    byCode?: number;
    /**
        * 组描述
        */
    description?: string;
    /**
        * 组描述
        */
    descriptions?: string[];
    /**
        * 按照组描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 排序
        */
    sorts?: number[];
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 错误码组
*/
export interface GroupSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 组名称
        */
    name: string;
    /**
        * Code 组编码（如100,101等）
        */
    code: string;
    /**
        * Description 组描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * Sort 排序
        */
    sort?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
}

/**
* 请求 - 删除错误码组
*/
export interface GroupSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 组名称 */
        name?: string;
        /** 组名称 */
        names?: string[];
        /** 按照组名称排序 */
        byName?: number;
        /** 组编码（如100,101等） */
        code?: string;
        /** 组编码（如100,101等） */
        codes?: string[];
        /** 按照组编码（如100,101等）排序 */
        byCode?: number;
        /** 组描述 */
        description?: string;
        /** 组描述 */
        descriptions?: string[];
        /** 按照组描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number[];
        /** 按照排序排序 */
        bySort?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 是否物理删除
        */
    remove?: boolean;
}
/**
* 响应 - 删除错误码组
*/
export interface GroupSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询错误码段
*/
export interface SegmentListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 段名称
        */
    name?: string;
    /**
        * 段名称
        */
    names?: string[];
    /**
        * 按照段名称排序
        */
    byName?: number;
    /**
        * 段编码（如001,002等）
        */
    code?: string;
    /**
        * 段编码（如001,002等）
        */
    codes?: string[];
    /**
        * 按照段编码（如001,002等）排序
        */
    byCode?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string[];
    /**
        * 按照所属组ID排序
        */
    byGroupId?: number;
    /**
        * 父段ID（可为空）
        */
    parentId?: string;
    /**
        * 父段ID（可为空）
        */
    parentIds?: string[];
    /**
        * 按照父段ID（可为空）排序
        */
    byParentId?: number;
    /**
        * 段描述
        */
    description?: string;
    /**
        * 段描述
        */
    descriptions?: string[];
    /**
        * 按照段描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 排序
        */
    sorts?: number[];
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    category?: number;
    /**
        * 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    categorys?: number[];
    /**
        * 按照分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位排序
        */
    byCategory?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 响应 - 获取多个错误码段
*/
export interface SegmentListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 段名称 */
        name: string;
        /** Code 段编码（如001,002等） */
        code: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** ParentId 父段ID（可为空） */
        parentId?: string;
        /** Description 段描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** Category 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        category?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 创建单条错误码段
*/
export interface SegmentSinglePostReq {
    /**
        * 段名称 (必填)
        */
    name: string;
    /**
        * 段编码（如001,002等） (必填)
        */
    code: string;
    /**
        * 所属组ID (必填)
        */
    groupId: string;
    /**
        * 父段ID（可为空） (可选)
        */
    parentId?: string;
    /**
        * 段描述 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
    /**
        * 排序 (自动填充)
        */
    sort?: number;
    /**
        * 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 (自动填充)
        */
    category?: number;
}
/**
* 错误码段
*/
export interface SegmentSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 段名称
        */
    name: string;
    /**
        * Code 段编码（如001,002等）
        */
    code: string;
    /**
        * GroupId 所属组ID
        */
    groupId: string;
    /**
        * ParentId 父段ID（可为空）
        */
    parentId?: string;
    /**
        * Description 段描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * Sort 排序
        */
    sort?: number;
    /**
        * Category 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    category?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
}

/**
* 请求 - 更新错误码段
*/
export interface SegmentSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 段名称 */
        name?: string;
        /** 段名称 */
        names?: string[];
        /** 按照段名称排序 */
        byName?: number;
        /** 段编码（如001,002等） */
        code?: string;
        /** 段编码（如001,002等） */
        codes?: string[];
        /** 按照段编码（如001,002等）排序 */
        byCode?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string[];
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 父段ID（可为空） */
        parentId?: string;
        /** 父段ID（可为空） */
        parentIds?: string[];
        /** 按照父段ID（可为空）排序 */
        byParentId?: number;
        /** 段描述 */
        description?: string;
        /** 段描述 */
        descriptions?: string[];
        /** 按照段描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number[];
        /** 按照排序排序 */
        bySort?: number;
        /** 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        category?: number;
        /** 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        categorys?: number[];
        /** 按照分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位排序 */
        byCategory?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 更新内容
        */
    update: {
        /** 段名称 */
        name?: string;
        /** 段编码（如001,002等） */
        code?: string;
        /** 所属组ID */
        groupId?: string;
        /** 父段ID（可为空） */
        parentId?: string;
        /** 段描述 */
        description?: string;
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number;
        /** 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        category?: number
    };
}
/**
* 响应 - 更新错误码段
*/
export interface SegmentSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 段名称 */
        name: string;
        /** Code 段编码（如001,002等） */
        code: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** ParentId 父段ID（可为空） */
        parentId?: string;
        /** Description 段描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** Category 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        category?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询错误码段
*/
export interface SegmentSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string[];
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 段名称
        */
    name?: string;
    /**
        * 段名称
        */
    names?: string[];
    /**
        * 按照段名称排序
        */
    byName?: number;
    /**
        * 段编码（如001,002等）
        */
    code?: string;
    /**
        * 段编码（如001,002等）
        */
    codes?: string[];
    /**
        * 按照段编码（如001,002等）排序
        */
    byCode?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string[];
    /**
        * 按照所属组ID排序
        */
    byGroupId?: number;
    /**
        * 父段ID（可为空）
        */
    parentId?: string;
    /**
        * 父段ID（可为空）
        */
    parentIds?: string[];
    /**
        * 按照父段ID（可为空）排序
        */
    byParentId?: number;
    /**
        * 段描述
        */
    description?: string;
    /**
        * 段描述
        */
    descriptions?: string[];
    /**
        * 按照段描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number[];
    /**
        * 按照状态排序
        */
    byStatus?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 排序
        */
    sorts?: number[];
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    category?: number;
    /**
        * 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    categorys?: number[];
    /**
        * 按照分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位排序
        */
    byCategory?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除数据时间（逻辑删除）排序
        */
    byDeletedAt?: number;
    /**
        * 创建时间起始
        */
    createdAtStart?: string;
    /**
        * 创建时间结束
        */
    createdAtEnd?: string;
    /**
        * 最后更新时间起始
        */
    lastAtStart?: string;
    /**
        * 最后更新时间结束
        */
    lastAtEnd?: string;
}
/**
* 错误码段
*/
export interface SegmentSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 段名称
        */
    name: string;
    /**
        * Code 段编码（如001,002等）
        */
    code: string;
    /**
        * GroupId 所属组ID
        */
    groupId: string;
    /**
        * ParentId 父段ID（可为空）
        */
    parentId?: string;
    /**
        * Description 段描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * Sort 排序
        */
    sort?: number;
    /**
        * Category 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位
        */
    category?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: string;
}

/**
* 请求 - 删除错误码段
*/
export interface SegmentSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 段名称 */
        name?: string;
        /** 段名称 */
        names?: string[];
        /** 按照段名称排序 */
        byName?: number;
        /** 段编码（如001,002等） */
        code?: string;
        /** 段编码（如001,002等） */
        codes?: string[];
        /** 按照段编码（如001,002等）排序 */
        byCode?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string[];
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 父段ID（可为空） */
        parentId?: string;
        /** 父段ID（可为空） */
        parentIds?: string[];
        /** 按照父段ID（可为空）排序 */
        byParentId?: number;
        /** 段描述 */
        description?: string;
        /** 段描述 */
        descriptions?: string[];
        /** 按照段描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number[];
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number[];
        /** 按照排序排序 */
        bySort?: number;
        /** 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        category?: number;
        /** 分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位 */
        categorys?: number[];
        /** 按照分类, 1:业务/服务，1-4位，对于系统级或者platform_go包中的以1开头，内部服务2-4开头，外部服务从5-9开头, 2:模块 5-7位排序 */
        byCategory?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除数据时间（逻辑删除）排序 */
        byDeletedAt?: number;
        /** 创建时间起始 */
        createdAtStart?: string;
        /** 创建时间结束 */
        createdAtEnd?: string;
        /** 最后更新时间起始 */
        lastAtStart?: string;
        /** 最后更新时间结束 */
        lastAtEnd?: string
    };
    /**
        * 是否物理删除
        */
    remove?: boolean;
}
/**
* 响应 - 删除错误码段
*/
export interface SegmentSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}


