import { Headers, WasmApiResponse } from "./api"

export interface StatusCodeDesignerInstance {
    /**
    * 获取多个状态码组
    */
    groupListGet(params: GroupListGetReq, headers?: Headers): Promise<WasmApiResponse<GroupListGetResp>>;
    /**
    * 创建单个状态码组
    */
    groupSinglePost(data: GroupSinglePostReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePostResp>>;
    /**
    * 更新状态码组
    */
    groupSinglePut(data: GroupSinglePutReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePutResp>>;
    /**
    * 获取单个状态码组
    */
    groupSingleGet(params: GroupSingleGetReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleGetResp>>;
    /**
    * 删除状态码组
    */
    groupSingleDelete(params: GroupSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleDeleteResp>>;
    /**
    * 获取多个状态码段
    */
    segmentListGet(params: SegmentListGetReq, headers?: Headers): Promise<WasmApiResponse<SegmentListGetResp>>;
    /**
    * 创建单个状态码段
    */
    segmentSinglePost(data: SegmentSinglePostReq, headers?: Headers): Promise<WasmApiResponse<SegmentSinglePostResp>>;
    /**
    * 更新状态码段
    */
    segmentSinglePut(data: SegmentSinglePutReq, headers?: Headers): Promise<WasmApiResponse<SegmentSinglePutResp>>;
    /**
    * 获取单个状态码段
    */
    segmentSingleGet(params: SegmentSingleGetReq, headers?: Headers): Promise<WasmApiResponse<SegmentSingleGetResp>>;
    /**
    * 删除状态码段
    */
    segmentSingleDelete(params: SegmentSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<SegmentSingleDeleteResp>>;
    /**
    * 
    */
    statusCodeBuildPost(data: StatusCodeBuildPostReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeBuildPostResp>>;
    /**
    * 获取多个状态码定义
    */
    statusCodeListGet(params: StatusCodeListGetReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeListGetResp>>;
    /**
    * 创建单个状态码定义
    */
    statusCodeSinglePost(data: StatusCodeSinglePostReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeSinglePostResp>>;
    /**
    * 更新状态码定义
    */
    statusCodeSinglePut(data: StatusCodeSinglePutReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeSinglePutResp>>;
    /**
    * 获取单个状态码定义
    */
    statusCodeSingleGet(params: StatusCodeSingleGetReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeSingleGetResp>>;
    /**
    * 删除状态码定义
    */
    statusCodeSingleDelete(params: StatusCodeSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<StatusCodeSingleDeleteResp>>;
}


/**
* 查询状态码组
*/
export interface GroupListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
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
    names?: string;
    /**
        * 按照组名称排序
        */
    byName?: number;
    /**
        * 组编码（如1000,1001等）
        */
    code?: string;
    /**
        * 组编码（如1000,1001等）
        */
    codes?: string;
    /**
        * 按照组编码（如1000,1001等）排序
        */
    byCode?: number;
    /**
        * 组描述
        */
    description?: string;
    /**
        * 组描述
        */
    descriptions?: string;
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
    statuss?: number;
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
    sorts?: number;
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
* 响应 - 获取多个状态码组
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
        /** Code 组编码（如1000,1001等） */
        code: string;
        /** Description 组描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 创建单条状态码组
*/
export interface GroupSinglePostReq {
    /**
        * 组名称 (必填)
        */
    name: string;
    /**
        * 组编码（如1000,1001等） (必填)
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
* 状态码组
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
        * Code 组编码（如1000,1001等）
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
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 更新状态码组
*/
export interface GroupSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 组名称 */
        name?: string;
        /** 组名称 */
        names?: string;
        /** 按照组名称排序 */
        byName?: number;
        /** 组编码（如1000,1001等） */
        code?: string;
        /** 组编码（如1000,1001等） */
        codes?: string;
        /** 按照组编码（如1000,1001等）排序 */
        byCode?: number;
        /** 组描述 */
        description?: string;
        /** 组描述 */
        descriptions?: string;
        /** 按照组描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number;
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
        /** 组编码（如1000,1001等） */
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
* 响应 - 更新状态码组
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
        /** Code 组编码（如1000,1001等） */
        code: string;
        /** Description 组描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** Sort 排序 */
        sort?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 查询状态码组
*/
export interface GroupSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
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
    names?: string;
    /**
        * 按照组名称排序
        */
    byName?: number;
    /**
        * 组编码（如1000,1001等）
        */
    code?: string;
    /**
        * 组编码（如1000,1001等）
        */
    codes?: string;
    /**
        * 按照组编码（如1000,1001等）排序
        */
    byCode?: number;
    /**
        * 组描述
        */
    description?: string;
    /**
        * 组描述
        */
    descriptions?: string;
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
    statuss?: number;
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
    sorts?: number;
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
* 状态码组
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
        * Code 组编码（如1000,1001等）
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
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 删除状态码组
*/
export interface GroupSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 组名称 */
        name?: string;
        /** 组名称 */
        names?: string;
        /** 按照组名称排序 */
        byName?: number;
        /** 组编码（如1000,1001等） */
        code?: string;
        /** 组编码（如1000,1001等） */
        codes?: string;
        /** 按照组编码（如1000,1001等）排序 */
        byCode?: number;
        /** 组描述 */
        description?: string;
        /** 组描述 */
        descriptions?: string;
        /** 按照组描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number;
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
* 响应 - 删除状态码组
*/
export interface GroupSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询状态码段
*/
export interface SegmentListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
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
    names?: string;
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
    codes?: string;
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
    groupIds?: string;
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
    parentIds?: string;
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
    descriptions?: string;
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
    statuss?: number;
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
    sorts?: number;
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 分类, 1:业务, 2:模块
        */
    category?: number;
    /**
        * 分类, 1:业务, 2:模块
        */
    categorys?: number;
    /**
        * 按照分类, 1:业务, 2:模块排序
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
* 响应 - 获取多个状态码段
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
        /** Category 分类, 1:业务, 2:模块 */
        category?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 创建单条状态码段
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
        * 分类, 1:业务, 2:模块 (自动填充)
        */
    category?: number;
}
/**
* 状态码段
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
        * Category 分类, 1:业务, 2:模块
        */
    category?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 更新状态码段
*/
export interface SegmentSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 段名称 */
        name?: string;
        /** 段名称 */
        names?: string;
        /** 按照段名称排序 */
        byName?: number;
        /** 段编码（如001,002等） */
        code?: string;
        /** 段编码（如001,002等） */
        codes?: string;
        /** 按照段编码（如001,002等）排序 */
        byCode?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string;
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 父段ID（可为空） */
        parentId?: string;
        /** 父段ID（可为空） */
        parentIds?: string;
        /** 按照父段ID（可为空）排序 */
        byParentId?: number;
        /** 段描述 */
        description?: string;
        /** 段描述 */
        descriptions?: string;
        /** 按照段描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number;
        /** 按照排序排序 */
        bySort?: number;
        /** 分类, 1:业务, 2:模块 */
        category?: number;
        /** 分类, 1:业务, 2:模块 */
        categorys?: number;
        /** 按照分类, 1:业务, 2:模块排序 */
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
        /** 分类, 1:业务, 2:模块 */
        category?: number
    };
}
/**
* 响应 - 更新状态码段
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
        /** Category 分类, 1:业务, 2:模块 */
        category?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 查询状态码段
*/
export interface SegmentSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
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
    names?: string;
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
    codes?: string;
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
    groupIds?: string;
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
    parentIds?: string;
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
    descriptions?: string;
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
    statuss?: number;
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
    sorts?: number;
    /**
        * 按照排序排序
        */
    bySort?: number;
    /**
        * 分类, 1:业务, 2:模块
        */
    category?: number;
    /**
        * 分类, 1:业务, 2:模块
        */
    categorys?: number;
    /**
        * 按照分类, 1:业务, 2:模块排序
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
* 状态码段
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
        * Category 分类, 1:业务, 2:模块
        */
    category?: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 删除状态码段
*/
export interface SegmentSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 段名称 */
        name?: string;
        /** 段名称 */
        names?: string;
        /** 按照段名称排序 */
        byName?: number;
        /** 段编码（如001,002等） */
        code?: string;
        /** 段编码（如001,002等） */
        codes?: string;
        /** 按照段编码（如001,002等）排序 */
        byCode?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string;
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 父段ID（可为空） */
        parentId?: string;
        /** 父段ID（可为空） */
        parentIds?: string;
        /** 按照父段ID（可为空）排序 */
        byParentId?: number;
        /** 段描述 */
        description?: string;
        /** 段描述 */
        descriptions?: string;
        /** 按照段描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
        /** 排序 */
        sort?: number;
        /** 排序 */
        sorts?: number;
        /** 按照排序排序 */
        bySort?: number;
        /** 分类, 1:业务, 2:模块 */
        category?: number;
        /** 分类, 1:业务, 2:模块 */
        categorys?: number;
        /** 按照分类, 1:业务, 2:模块排序 */
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
* 响应 - 删除状态码段
*/
export interface SegmentSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 
*/
export interface StatusCodeBuildPostReq {
}
/**
* 
*/
export interface StatusCodeBuildPostResp {
    /**
        * 是否构建
        */
    success?: boolean;
}

/**
* 查询状态码定义
*/
export interface StatusCodeListGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 状态信息
        */
    message?: string;
    /**
        * 状态信息
        */
    messages?: string;
    /**
        * 按照状态信息排序
        */
    byMessage?: number;
    /**
        * 状态码名称（如APIMate_Doc_Get_Failed）
        */
    name?: string;
    /**
        * 状态码名称（如APIMate_Doc_Get_Failed）
        */
    names?: string;
    /**
        * 按照状态码名称（如APIMate_Doc_Get_Failed）排序
        */
    byName?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string;
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
    businessIds?: string;
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
    moduleIds?: string;
    /**
        * 按照模块编号（4-6位）排序
        */
    byModuleId?: number;
    /**
        * 状态码 (7-9位)
        */
    statusCode?: string;
    /**
        * 状态码 (7-9位)
        */
    statusCodes?: string;
    /**
        * 按照状态码 (7-9位)排序
        */
    byStatusCode?: number;
    /**
        * 详细描述
        */
    description?: string;
    /**
        * 详细描述
        */
    descriptions?: string;
    /**
        * 按照详细描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number;
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
* 响应 - 获取多个状态码定义
*/
export interface StatusCodeListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Message 状态信息 */
        message: string;
        /** Name 状态码名称（如APIMate_Doc_Get_Failed） */
        name: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** BusinessId 业务编号（1-3位） */
        businessId: string;
        /** ModuleId 模块编号（4-6位） */
        moduleId: string;
        /** StatusCode 状态码 (7-9位) */
        statusCode: string;
        /** Description 详细描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 创建单条状态码定义
*/
export interface StatusCodeSinglePostReq {
    /**
        * 状态信息 (必填)
        */
    message: string;
    /**
        * 状态码名称（如APIMate_Doc_Get_Failed） (必填)
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
        * 状态码 (7-9位) (必填)
        */
    statusCode: string;
    /**
        * 详细描述 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
}
/**
* 状态码定义
*/
export interface StatusCodeSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Message 状态信息
        */
    message: string;
    /**
        * Name 状态码名称（如APIMate_Doc_Get_Failed）
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
        * StatusCode 状态码 (7-9位)
        */
    statusCode: string;
    /**
        * Description 详细描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 更新状态码定义
*/
export interface StatusCodeSinglePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 状态信息 */
        message?: string;
        /** 状态信息 */
        messages?: string;
        /** 按照状态信息排序 */
        byMessage?: number;
        /** 状态码名称（如APIMate_Doc_Get_Failed） */
        name?: string;
        /** 状态码名称（如APIMate_Doc_Get_Failed） */
        names?: string;
        /** 按照状态码名称（如APIMate_Doc_Get_Failed）排序 */
        byName?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string;
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 业务编号（1-3位） */
        businessIds?: string;
        /** 按照业务编号（1-3位）排序 */
        byBusinessId?: number;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 模块编号（4-6位） */
        moduleIds?: string;
        /** 按照模块编号（4-6位）排序 */
        byModuleId?: number;
        /** 状态码 (7-9位) */
        statusCode?: string;
        /** 状态码 (7-9位) */
        statusCodes?: string;
        /** 按照状态码 (7-9位)排序 */
        byStatusCode?: number;
        /** 详细描述 */
        description?: string;
        /** 详细描述 */
        descriptions?: string;
        /** 按照详细描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
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
        /** 状态信息 */
        message?: string;
        /** 状态码名称（如APIMate_Doc_Get_Failed） */
        name?: string;
        /** 所属组ID */
        groupId?: string;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 状态码 (7-9位) */
        statusCode?: string;
        /** 详细描述 */
        description?: string;
        /** 状态 */
        status?: number
    };
}
/**
* 响应 - 更新状态码定义
*/
export interface StatusCodeSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Message 状态信息 */
        message: string;
        /** Name 状态码名称（如APIMate_Doc_Get_Failed） */
        name: string;
        /** GroupId 所属组ID */
        groupId: string;
        /** BusinessId 业务编号（1-3位） */
        businessId: string;
        /** ModuleId 模块编号（4-6位） */
        moduleId: string;
        /** StatusCode 状态码 (7-9位) */
        statusCode: string;
        /** Description 详细描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: Record<string, unknown>;
        /** LastAt 更新数据时间 */
        lastAt?: Record<string, unknown>;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: Record<string, unknown>
    }[];
}

/**
* 查询状态码定义
*/
export interface StatusCodeSingleGetReq {
    /**
        * 主键Id
        */
    id?: string;
    /**
        * 主键Id
        */
    ids?: string;
    /**
        * 按照主键Id排序
        */
    byId?: number;
    /**
        * 状态信息
        */
    message?: string;
    /**
        * 状态信息
        */
    messages?: string;
    /**
        * 按照状态信息排序
        */
    byMessage?: number;
    /**
        * 状态码名称（如APIMate_Doc_Get_Failed）
        */
    name?: string;
    /**
        * 状态码名称（如APIMate_Doc_Get_Failed）
        */
    names?: string;
    /**
        * 按照状态码名称（如APIMate_Doc_Get_Failed）排序
        */
    byName?: number;
    /**
        * 所属组ID
        */
    groupId?: string;
    /**
        * 所属组ID
        */
    groupIds?: string;
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
    businessIds?: string;
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
    moduleIds?: string;
    /**
        * 按照模块编号（4-6位）排序
        */
    byModuleId?: number;
    /**
        * 状态码 (7-9位)
        */
    statusCode?: string;
    /**
        * 状态码 (7-9位)
        */
    statusCodes?: string;
    /**
        * 按照状态码 (7-9位)排序
        */
    byStatusCode?: number;
    /**
        * 详细描述
        */
    description?: string;
    /**
        * 详细描述
        */
    descriptions?: string;
    /**
        * 按照详细描述排序
        */
    byDescription?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 状态
        */
    statuss?: number;
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
* 状态码定义
*/
export interface StatusCodeSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Message 状态信息
        */
    message: string;
    /**
        * Name 状态码名称（如APIMate_Doc_Get_Failed）
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
        * StatusCode 状态码 (7-9位)
        */
    statusCode: string;
    /**
        * Description 详细描述
        */
    description?: string;
    /**
        * Status 状态
        */
    status: number;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: Record<string, unknown>;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: Record<string, unknown>;
    /**
        * DeletedAt 删除数据时间（逻辑删除）
        */
    deletedAt?: Record<string, unknown>;
}

/**
* 请求 - 删除状态码定义
*/
export interface StatusCodeSingleDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string;
        /** 按照主键Id排序 */
        byId?: number;
        /** 状态信息 */
        message?: string;
        /** 状态信息 */
        messages?: string;
        /** 按照状态信息排序 */
        byMessage?: number;
        /** 状态码名称（如APIMate_Doc_Get_Failed） */
        name?: string;
        /** 状态码名称（如APIMate_Doc_Get_Failed） */
        names?: string;
        /** 按照状态码名称（如APIMate_Doc_Get_Failed）排序 */
        byName?: number;
        /** 所属组ID */
        groupId?: string;
        /** 所属组ID */
        groupIds?: string;
        /** 按照所属组ID排序 */
        byGroupId?: number;
        /** 业务编号（1-3位） */
        businessId?: string;
        /** 业务编号（1-3位） */
        businessIds?: string;
        /** 按照业务编号（1-3位）排序 */
        byBusinessId?: number;
        /** 模块编号（4-6位） */
        moduleId?: string;
        /** 模块编号（4-6位） */
        moduleIds?: string;
        /** 按照模块编号（4-6位）排序 */
        byModuleId?: number;
        /** 状态码 (7-9位) */
        statusCode?: string;
        /** 状态码 (7-9位) */
        statusCodes?: string;
        /** 按照状态码 (7-9位)排序 */
        byStatusCode?: number;
        /** 详细描述 */
        description?: string;
        /** 详细描述 */
        descriptions?: string;
        /** 按照详细描述排序 */
        byDescription?: number;
        /** 状态 */
        status?: number;
        /** 状态 */
        statuss?: number;
        /** 按照状态排序 */
        byStatus?: number;
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
* 响应 - 删除状态码定义
*/
export interface StatusCodeSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}


