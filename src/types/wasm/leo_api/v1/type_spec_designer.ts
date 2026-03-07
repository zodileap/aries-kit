import { Headers, WasmApiResponse } from "./api"
export interface TypeSpecDesignerInstance {
    /**
    * 获取多个基础类型，包含基本的类型信息
    * url: type_spec_designer/base-type/v1/list
    */
    baseTypeListGet(params: BaseTypeListGetReq, headers?: Headers): Promise<WasmApiResponse<BaseTypeListGetResp>>;
    /**
    * 创建单个基础类型，包含基本的类型信息
    * url: type_spec_designer/base-type/v1/single
    */
    baseTypeSinglePost(data: BaseTypeSinglePostReq, headers?: Headers): Promise<WasmApiResponse<BaseTypeSinglePostResp>>;
    /**
    * 更新基础类型，包含基本的类型信息
    * url: type_spec_designer/base-type/v1/single
    */
    baseTypeSinglePut(data: BaseTypeSinglePutReq, headers?: Headers): Promise<WasmApiResponse<BaseTypeSinglePutResp>>;
    /**
    * 获取单个基础类型，包含基本的类型信息
    * url: type_spec_designer/base-type/v1/single
    */
    baseTypeSingleGet(params: BaseTypeSingleGetReq, headers?: Headers): Promise<WasmApiResponse<BaseTypeSingleGetResp>>;
    /**
    * 删除基础类型，包含基本的类型信息
    * url: type_spec_designer/base-type/v1/single
    */
    baseTypeSingleDelete(params: BaseTypeSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<BaseTypeSingleDeleteResp>>;
    /**
    * 获取多个类型分组
    * url: type_spec_designer/group/v1/list
    */
    groupListGet(params: GroupListGetReq, headers?: Headers): Promise<WasmApiResponse<GroupListGetResp>>;
    /**
    * 创建单个类型分组
    * url: type_spec_designer/group/v1/single
    */
    groupSinglePost(data: GroupSinglePostReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePostResp>>;
    /**
    * 更新类型分组
    * url: type_spec_designer/group/v1/single
    */
    groupSinglePut(data: GroupSinglePutReq, headers?: Headers): Promise<WasmApiResponse<GroupSinglePutResp>>;
    /**
    * 获取单个类型分组
    * url: type_spec_designer/group/v1/single
    */
    groupSingleGet(params: GroupSingleGetReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleGetResp>>;
    /**
    * 删除类型分组
    * url: type_spec_designer/group/v1/single
    */
    groupSingleDelete(params: GroupSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<GroupSingleDeleteResp>>;
    /**
    * 
    * url: type_spec_designer/spec/v1/build
    */
    specBuildGet(params: SpecBuildGetReq, headers?: Headers): Promise<WasmApiResponse<SpecBuildGetResp>>;
    /**
    * 通过组ID获取类型别名列表
    * url: type_spec_designer/spec/v1/group
    */
    specGroupGet(params: SpecGroupGetReq, headers?: Headers): Promise<WasmApiResponse<SpecGroupGetResp>>;
    /**
    * 获取多个类型别名定义
    * url: type_spec_designer/spec/v1/list
    */
    specListGet(params: SpecListGetReq, headers?: Headers): Promise<WasmApiResponse<SpecListGetResp>>;
    /**
    * 创建多个类型别名参数值
    * url: type_spec_designer/spec/v1/param/list
    */
    specParamlistPost(data: SpecParamlistPostReq, headers?: Headers): Promise<WasmApiResponse<SpecParamlistPostResp>>;
    /**
    * 获取多个类型别名参数值
    * url: type_spec_designer/spec/v1/param/list
    */
    specParamlistGet(params: SpecParamlistGetReq, headers?: Headers): Promise<WasmApiResponse<SpecParamlistGetResp>>;
    /**
    * 更新类型别名参数值
    * url: type_spec_designer/spec/v1/param/single
    */
    specParamsinglePut(data: SpecParamsinglePutReq, headers?: Headers): Promise<WasmApiResponse<SpecParamsinglePutResp>>;
    /**
    * 删除类型别名参数值
    * url: type_spec_designer/spec/v1/param/single
    */
    specParamsingleDelete(params: SpecParamsingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<SpecParamsingleDeleteResp>>;
    /**
    * 
    * url: type_spec_designer/spec/v1/parent/List
    */
    specParentListGet(params: SpecParentListGetReq, headers?: Headers): Promise<WasmApiResponse<SpecParentListGetResp>>;
    /**
    * 创建单个类型别名定义
    * url: type_spec_designer/spec/v1/single
    */
    specSinglePost(data: SpecSinglePostReq, headers?: Headers): Promise<WasmApiResponse<SpecSinglePostResp>>;
    /**
    * 更新类型别名定义
    * url: type_spec_designer/spec/v1/single
    */
    specSinglePut(data: SpecSinglePutReq, headers?: Headers): Promise<WasmApiResponse<SpecSinglePutResp>>;
    /**
    * 查询一个类型别名的详细信息
    * url: type_spec_designer/spec/v1/single
    */
    specSingleGet(params: SpecSingleGetReq, headers?: Headers): Promise<WasmApiResponse<SpecSingleGetResp>>;
    /**
    * 删除类型别名
    * url: type_spec_designer/spec/v1/single
    */
    specSingleDelete(params: SpecSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<SpecSingleDeleteResp>>;
    /**
    * 获取模板详情
    * url: type_spec_designer/template/v1/detail
    */
    templateDetailGet(params: TemplateDetailGetReq, headers?: Headers): Promise<WasmApiResponse<TemplateDetailGetResp>>;
    /**
    * 获取多个构建模板
    * url: type_spec_designer/template/v1/list
    */
    templateListGet(params: TemplateListGetReq, headers?: Headers): Promise<WasmApiResponse<TemplateListGetResp>>;
    /**
    * 获取多个模板参数
    * url: type_spec_designer/template/v1/param/list
    */
    templateParamlistGet(params: TemplateParamlistGetReq, headers?: Headers): Promise<WasmApiResponse<TemplateParamlistGetResp>>;
    /**
    * 添加模板
    * url: type_spec_designer/template/v1/single
    */
    templateSinglePost(data: TemplateSinglePostReq, headers?: Headers): Promise<WasmApiResponse<TemplateSinglePostResp>>;
    /**
    * 更新模板
    * url: type_spec_designer/template/v1/single
    */
    templateSinglePut(data: TemplateSinglePutReq, headers?: Headers): Promise<WasmApiResponse<TemplateSinglePutResp>>;
    /**
    * 删除模板
    * url: type_spec_designer/template/v1/single
    */
    templateSingleDelete(params: TemplateSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<TemplateSingleDeleteResp>>;
}


/**
* 查询基础类型，包含基本的类型信息
*/
export interface BaseTypeListGetReq {
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
        * 类型名称，一般是类型的中文名称
        */
    name?: string;
    /**
        * 类型名称，一般是类型的中文名称
        */
    names?: string[];
    /**
        * 按照类型名称，一般是类型的中文名称排序
        */
    byName?: number;
    /**
        * 类型编码，需唯一
        */
    code?: string;
    /**
        * 类型编码，需唯一
        */
    codes?: string[];
    /**
        * 按照类型编码，需唯一排序
        */
    byCode?: number;
    /**
        * Go语言类型
        */
    goType?: string;
    /**
        * Go语言类型
        */
    goTypes?: string[];
    /**
        * 按照Go语言类型排序
        */
    byGoType?: number;
    /**
        * 类型描述
        */
    description?: string;
    /**
        * 类型描述
        */
    descriptions?: string[];
    /**
        * 按照类型描述排序
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
        * 数据库实体字段
        */
    entityField?: string;
    /**
        * 数据库实体字段
        */
    entityFields?: string[];
    /**
        * 按照数据库实体字段排序
        */
    byEntityField?: number;
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
* 响应 - 获取多个基础类型，包含基本的类型信息
*/
export interface BaseTypeListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称，一般是类型的中文名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** GoType Go语言类型 */
        goType: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** EntityField 数据库实体字段 */
        entityField?: string
    }[];
}

/**
* 创建单条基础类型，包含基本的类型信息
*/
export interface BaseTypeSinglePostReq {
    /**
        * 类型名称，一般是类型的中文名称 (必填)
        */
    name: string;
    /**
        * 类型编码，需唯一 (必填)
        */
    code: string;
    /**
        * Go语言类型 (必填)
        */
    goType: string;
    /**
        * 类型描述 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
    /**
        * 数据库实体字段 (可选)
        */
    entityField?: string;
}
/**
* 基础类型，包含基本的类型信息
*/
export interface BaseTypeSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 类型名称，一般是类型的中文名称
        */
    name: string;
    /**
        * Code 类型编码，需唯一
        */
    code: string;
    /**
        * GoType Go语言类型
        */
    goType: string;
    /**
        * Description 类型描述
        */
    description?: string;
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
        * EntityField 数据库实体字段
        */
    entityField?: string;
}

/**
* 请求 - 更新基础类型，包含基本的类型信息
*/
export interface BaseTypeSinglePutReq {
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
        /** 类型名称，一般是类型的中文名称 */
        name?: string;
        /** 类型名称，一般是类型的中文名称 */
        names?: string[];
        /** 按照类型名称，一般是类型的中文名称排序 */
        byName?: number;
        /** 类型编码，需唯一 */
        code?: string;
        /** 类型编码，需唯一 */
        codes?: string[];
        /** 按照类型编码，需唯一排序 */
        byCode?: number;
        /** Go语言类型 */
        goType?: string;
        /** Go语言类型 */
        goTypes?: string[];
        /** 按照Go语言类型排序 */
        byGoType?: number;
        /** 类型描述 */
        description?: string;
        /** 类型描述 */
        descriptions?: string[];
        /** 按照类型描述排序 */
        byDescription?: number;
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
        /** 数据库实体字段 */
        entityField?: string;
        /** 数据库实体字段 */
        entityFields?: string[];
        /** 按照数据库实体字段排序 */
        byEntityField?: number;
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
        /** 类型名称，一般是类型的中文名称 */
        name?: string;
        /** 类型编码，需唯一 */
        code?: string;
        /** Go语言类型 */
        goType?: string;
        /** 类型描述 */
        description?: string;
        /** 状态 */
        status?: number;
        /** 数据库实体字段 */
        entityField?: string
    };
}
/**
* 响应 - 更新基础类型，包含基本的类型信息
*/
export interface BaseTypeSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称，一般是类型的中文名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** GoType Go语言类型 */
        goType: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** EntityField 数据库实体字段 */
        entityField?: string
    }[];
}

/**
* 查询基础类型，包含基本的类型信息
*/
export interface BaseTypeSingleGetReq {
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
        * 类型名称，一般是类型的中文名称
        */
    name?: string;
    /**
        * 类型名称，一般是类型的中文名称
        */
    names?: string[];
    /**
        * 按照类型名称，一般是类型的中文名称排序
        */
    byName?: number;
    /**
        * 类型编码，需唯一
        */
    code?: string;
    /**
        * 类型编码，需唯一
        */
    codes?: string[];
    /**
        * 按照类型编码，需唯一排序
        */
    byCode?: number;
    /**
        * Go语言类型
        */
    goType?: string;
    /**
        * Go语言类型
        */
    goTypes?: string[];
    /**
        * 按照Go语言类型排序
        */
    byGoType?: number;
    /**
        * 类型描述
        */
    description?: string;
    /**
        * 类型描述
        */
    descriptions?: string[];
    /**
        * 按照类型描述排序
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
        * 数据库实体字段
        */
    entityField?: string;
    /**
        * 数据库实体字段
        */
    entityFields?: string[];
    /**
        * 按照数据库实体字段排序
        */
    byEntityField?: number;
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
* 基础类型，包含基本的类型信息
*/
export interface BaseTypeSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 类型名称，一般是类型的中文名称
        */
    name: string;
    /**
        * Code 类型编码，需唯一
        */
    code: string;
    /**
        * GoType Go语言类型
        */
    goType: string;
    /**
        * Description 类型描述
        */
    description?: string;
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
        * EntityField 数据库实体字段
        */
    entityField?: string;
}

/**
* 请求 - 删除基础类型，包含基本的类型信息
*/
export interface BaseTypeSingleDeleteReq {
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
        /** 类型名称，一般是类型的中文名称 */
        name?: string;
        /** 类型名称，一般是类型的中文名称 */
        names?: string[];
        /** 按照类型名称，一般是类型的中文名称排序 */
        byName?: number;
        /** 类型编码，需唯一 */
        code?: string;
        /** 类型编码，需唯一 */
        codes?: string[];
        /** 按照类型编码，需唯一排序 */
        byCode?: number;
        /** Go语言类型 */
        goType?: string;
        /** Go语言类型 */
        goTypes?: string[];
        /** 按照Go语言类型排序 */
        byGoType?: number;
        /** 类型描述 */
        description?: string;
        /** 类型描述 */
        descriptions?: string[];
        /** 按照类型描述排序 */
        byDescription?: number;
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
        /** 数据库实体字段 */
        entityField?: string;
        /** 数据库实体字段 */
        entityFields?: string[];
        /** 按照数据库实体字段排序 */
        byEntityField?: number;
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
* 响应 - 删除基础类型，包含基本的类型信息
*/
export interface BaseTypeSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询类型分组
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
        * 分组名称
        */
    name?: string;
    /**
        * 分组名称
        */
    names?: string[];
    /**
        * 按照分组名称排序
        */
    byName?: number;
    /**
        * 分组编码，需唯一
        */
    code?: string;
    /**
        * 分组编码，需唯一
        */
    codes?: string[];
    /**
        * 按照分组编码，需唯一排序
        */
    byCode?: number;
    /**
        * 分组描述
        */
    description?: string;
    /**
        * 分组描述
        */
    descriptions?: string[];
    /**
        * 按照分组描述排序
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
* 响应 - 获取多个类型分组
*/
export interface GroupListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 分组名称 */
        name: string;
        /** Code 分组编码，需唯一 */
        code: string;
        /** Description 分组描述 */
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
* 创建单条类型分组
*/
export interface GroupSinglePostReq {
    /**
        * 分组名称 (必填)
        */
    name: string;
    /**
        * 分组编码，需唯一 (必填)
        */
    code: string;
    /**
        * 分组描述 (自动填充)
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
* 类型分组
*/
export interface GroupSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 分组名称
        */
    name: string;
    /**
        * Code 分组编码，需唯一
        */
    code: string;
    /**
        * Description 分组描述
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
* 请求 - 更新类型分组
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
        /** 分组名称 */
        name?: string;
        /** 分组名称 */
        names?: string[];
        /** 按照分组名称排序 */
        byName?: number;
        /** 分组编码，需唯一 */
        code?: string;
        /** 分组编码，需唯一 */
        codes?: string[];
        /** 按照分组编码，需唯一排序 */
        byCode?: number;
        /** 分组描述 */
        description?: string;
        /** 分组描述 */
        descriptions?: string[];
        /** 按照分组描述排序 */
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
        /** 分组名称 */
        name?: string;
        /** 分组编码，需唯一 */
        code?: string;
        /** 分组描述 */
        description?: string;
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number
    };
}
/**
* 响应 - 更新类型分组
*/
export interface GroupSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 分组名称 */
        name: string;
        /** Code 分组编码，需唯一 */
        code: string;
        /** Description 分组描述 */
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
* 查询类型分组
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
        * 分组名称
        */
    name?: string;
    /**
        * 分组名称
        */
    names?: string[];
    /**
        * 按照分组名称排序
        */
    byName?: number;
    /**
        * 分组编码，需唯一
        */
    code?: string;
    /**
        * 分组编码，需唯一
        */
    codes?: string[];
    /**
        * 按照分组编码，需唯一排序
        */
    byCode?: number;
    /**
        * 分组描述
        */
    description?: string;
    /**
        * 分组描述
        */
    descriptions?: string[];
    /**
        * 按照分组描述排序
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
* 类型分组
*/
export interface GroupSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 分组名称
        */
    name: string;
    /**
        * Code 分组编码，需唯一
        */
    code: string;
    /**
        * Description 分组描述
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
* 请求 - 删除类型分组
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
        /** 分组名称 */
        name?: string;
        /** 分组名称 */
        names?: string[];
        /** 按照分组名称排序 */
        byName?: number;
        /** 分组编码，需唯一 */
        code?: string;
        /** 分组编码，需唯一 */
        codes?: string[];
        /** 按照分组编码，需唯一排序 */
        byCode?: number;
        /** 分组描述 */
        description?: string;
        /** 分组描述 */
        descriptions?: string[];
        /** 按照分组描述排序 */
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
* 响应 - 删除类型分组
*/
export interface GroupSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 
*/
export interface SpecBuildGetReq {
}
/**
* 
*/
export interface SpecBuildGetResp {
    /**
        * 是否构建成功
        */
    success?: boolean;
}

/**
* 通过组ID获取类型别名列表
*/
export interface SpecGroupGetReq {
    /**
        * 组ID
        */
    groupId: string;
}
/**
* 通过组ID获取类型别名列表
*/
export interface SpecGroupGetResp {
    /**
        * 类型别名列表
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** BaseTypeId 基础类型ID */
        baseTypeId: string;
        /** SliceNum 是否为数组类型 */
        sliceNum?: number;
        /** BuildTemplateId 构建模板ID */
        buildTemplateId: string;
        /** GroupId 分组ID */
        groupId: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** ParentId 父类型ID */
        parentId?: string
    }[];
}

/**
* 查询类型别名定义
*/
export interface SpecListGetReq {
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
        * 类型名称
        */
    name?: string;
    /**
        * 类型名称
        */
    names?: string[];
    /**
        * 按照类型名称排序
        */
    byName?: number;
    /**
        * 类型编码，需唯一
        */
    code?: string;
    /**
        * 类型编码，需唯一
        */
    codes?: string[];
    /**
        * 按照类型编码，需唯一排序
        */
    byCode?: number;
    /**
        * 基础类型ID
        */
    baseTypeId?: string;
    /**
        * 基础类型ID
        */
    baseTypeIds?: string[];
    /**
        * 按照基础类型ID排序
        */
    byBaseTypeId?: number;
    /**
        * 是否为数组类型
        */
    sliceNum?: number;
    /**
        * 是否为数组类型
        */
    sliceNums?: number[];
    /**
        * 按照是否为数组类型排序
        */
    bySliceNum?: number;
    /**
        * 构建模板ID
        */
    buildTemplateId?: string;
    /**
        * 构建模板ID
        */
    buildTemplateIds?: string[];
    /**
        * 按照构建模板ID排序
        */
    byBuildTemplateId?: number;
    /**
        * 分组ID
        */
    groupId?: string;
    /**
        * 分组ID
        */
    groupIds?: string[];
    /**
        * 按照分组ID排序
        */
    byGroupId?: number;
    /**
        * 类型描述
        */
    description?: string;
    /**
        * 类型描述
        */
    descriptions?: string[];
    /**
        * 按照类型描述排序
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
        * 父类型ID
        */
    parentId?: string;
    /**
        * 父类型ID
        */
    parentIds?: string[];
    /**
        * 按照父类型ID排序
        */
    byParentId?: number;
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
* 响应 - 获取多个类型别名定义
*/
export interface SpecListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** BaseTypeId 基础类型ID */
        baseTypeId: string;
        /** SliceNum 是否为数组类型 */
        sliceNum?: number;
        /** BuildTemplateId 构建模板ID */
        buildTemplateId: string;
        /** GroupId 分组ID */
        groupId: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** ParentId 父类型ID */
        parentId?: string
    }[];
}

/**
* 请求 - 创建多个类型别名参数值
*/
export interface SpecParamlistPostReq {
    /**
        * 创建的数据
        */
    list: {
        /** 类型别名ID (必填) */
        typeSpecId: string;
        /** 模板参数ID (必填) */
        templateParamId: string;
        /** 参数值 (自动填充) */
        paramValue?: string;
        /** 说明 (自动填充) */
        description?: string;
        /** 状态 (自动填充) */
        status?: number
    }[];
}
/**
* 响应 - 创建多个类型别名参数值
*/
export interface SpecParamlistPostResp {
    /**
        * 创建的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** TypeSpecId 类型别名ID */
        typeSpecId: string;
        /** TemplateParamId 模板参数ID */
        templateParamId: string;
        /** ParamValue 参数值 */
        paramValue?: string;
        /** Description 说明 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询类型别名参数值
*/
export interface SpecParamlistGetReq {
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
        * 类型别名ID
        */
    typeSpecId?: string;
    /**
        * 类型别名ID
        */
    typeSpecIds?: string[];
    /**
        * 按照类型别名ID排序
        */
    byTypeSpecId?: number;
    /**
        * 模板参数ID
        */
    templateParamId?: string;
    /**
        * 模板参数ID
        */
    templateParamIds?: string[];
    /**
        * 按照模板参数ID排序
        */
    byTemplateParamId?: number;
    /**
        * 参数值
        */
    paramValue?: string;
    /**
        * 参数值
        */
    paramValues?: string[];
    /**
        * 按照参数值排序
        */
    byParamValue?: number;
    /**
        * 说明
        */
    description?: string;
    /**
        * 说明
        */
    descriptions?: string[];
    /**
        * 按照说明排序
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
* 响应 - 获取多个类型别名参数值
*/
export interface SpecParamlistGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** TypeSpecId 类型别名ID */
        typeSpecId: string;
        /** TemplateParamId 模板参数ID */
        templateParamId: string;
        /** ParamValue 参数值 */
        paramValue?: string;
        /** Description 说明 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 更新类型别名参数值
*/
export interface SpecParamsinglePutReq {
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
        /** 类型别名ID */
        typeSpecId?: string;
        /** 类型别名ID */
        typeSpecIds?: string[];
        /** 按照类型别名ID排序 */
        byTypeSpecId?: number;
        /** 模板参数ID */
        templateParamId?: string;
        /** 模板参数ID */
        templateParamIds?: string[];
        /** 按照模板参数ID排序 */
        byTemplateParamId?: number;
        /** 参数值 */
        paramValue?: string;
        /** 参数值 */
        paramValues?: string[];
        /** 按照参数值排序 */
        byParamValue?: number;
        /** 说明 */
        description?: string;
        /** 说明 */
        descriptions?: string[];
        /** 按照说明排序 */
        byDescription?: number;
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
        /** 类型别名ID */
        typeSpecId?: string;
        /** 模板参数ID */
        templateParamId?: string;
        /** 参数值 */
        paramValue?: string;
        /** 说明 */
        description?: string;
        /** 状态 */
        status?: number
    };
}
/**
* 响应 - 更新类型别名参数值
*/
export interface SpecParamsinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** TypeSpecId 类型别名ID */
        typeSpecId: string;
        /** TemplateParamId 模板参数ID */
        templateParamId: string;
        /** ParamValue 参数值 */
        paramValue?: string;
        /** Description 说明 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除类型别名参数值
*/
export interface SpecParamsingleDeleteReq {
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
        /** 类型别名ID */
        typeSpecId?: string;
        /** 类型别名ID */
        typeSpecIds?: string[];
        /** 按照类型别名ID排序 */
        byTypeSpecId?: number;
        /** 模板参数ID */
        templateParamId?: string;
        /** 模板参数ID */
        templateParamIds?: string[];
        /** 按照模板参数ID排序 */
        byTemplateParamId?: number;
        /** 参数值 */
        paramValue?: string;
        /** 参数值 */
        paramValues?: string[];
        /** 按照参数值排序 */
        byParamValue?: number;
        /** 说明 */
        description?: string;
        /** 说明 */
        descriptions?: string[];
        /** 按照说明排序 */
        byDescription?: number;
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
* 响应 - 删除类型别名参数值
*/
export interface SpecParamsingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 
*/
export interface SpecParentListGetReq {
}
/**
* 获取所有可选为父类型的类型别名
*/
export interface SpecParentListGetResp {
    /**
        * 类型别名列表
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** BaseTypeId 基础类型ID */
        baseTypeId: string;
        /** SliceNum 是否为数组类型 */
        sliceNum?: number;
        /** BuildTemplateId 构建模板ID */
        buildTemplateId: string;
        /** GroupId 分组ID */
        groupId: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** ParentId 父类型ID */
        parentId?: string
    }[];
}

/**
* 创建单条类型别名定义
*/
export interface SpecSinglePostReq {
    /**
        * 类型名称 (必填)
        */
    name: string;
    /**
        * 类型编码，需唯一 (必填)
        */
    code: string;
    /**
        * 基础类型ID (必填)
        */
    baseTypeId: string;
    /**
        * 是否为数组类型 (自动填充)
        */
    sliceNum?: number;
    /**
        * 构建模板ID (必填)
        */
    buildTemplateId: string;
    /**
        * 分组ID (必填)
        */
    groupId: string;
    /**
        * 类型描述 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
    /**
        * 父类型ID (可选)
        */
    parentId?: string;
}
/**
* 类型别名定义
*/
export interface SpecSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 类型名称
        */
    name: string;
    /**
        * Code 类型编码，需唯一
        */
    code: string;
    /**
        * BaseTypeId 基础类型ID
        */
    baseTypeId: string;
    /**
        * SliceNum 是否为数组类型
        */
    sliceNum?: number;
    /**
        * BuildTemplateId 构建模板ID
        */
    buildTemplateId: string;
    /**
        * GroupId 分组ID
        */
    groupId: string;
    /**
        * Description 类型描述
        */
    description?: string;
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
        * ParentId 父类型ID
        */
    parentId?: string;
}

/**
* 请求 - 更新类型别名定义
*/
export interface SpecSinglePutReq {
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
        /** 类型名称 */
        name?: string;
        /** 类型名称 */
        names?: string[];
        /** 按照类型名称排序 */
        byName?: number;
        /** 类型编码，需唯一 */
        code?: string;
        /** 类型编码，需唯一 */
        codes?: string[];
        /** 按照类型编码，需唯一排序 */
        byCode?: number;
        /** 基础类型ID */
        baseTypeId?: string;
        /** 基础类型ID */
        baseTypeIds?: string[];
        /** 按照基础类型ID排序 */
        byBaseTypeId?: number;
        /** 是否为数组类型 */
        sliceNum?: number;
        /** 是否为数组类型 */
        sliceNums?: number[];
        /** 按照是否为数组类型排序 */
        bySliceNum?: number;
        /** 构建模板ID */
        buildTemplateId?: string;
        /** 构建模板ID */
        buildTemplateIds?: string[];
        /** 按照构建模板ID排序 */
        byBuildTemplateId?: number;
        /** 分组ID */
        groupId?: string;
        /** 分组ID */
        groupIds?: string[];
        /** 按照分组ID排序 */
        byGroupId?: number;
        /** 类型描述 */
        description?: string;
        /** 类型描述 */
        descriptions?: string[];
        /** 按照类型描述排序 */
        byDescription?: number;
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
        /** 父类型ID */
        parentId?: string;
        /** 父类型ID */
        parentIds?: string[];
        /** 按照父类型ID排序 */
        byParentId?: number;
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
        /** 类型名称 */
        name?: string;
        /** 类型编码，需唯一 */
        code?: string;
        /** 基础类型ID */
        baseTypeId?: string;
        /** 是否为数组类型 */
        sliceNum?: number;
        /** 构建模板ID */
        buildTemplateId?: string;
        /** 分组ID */
        groupId?: string;
        /** 类型描述 */
        description?: string;
        /** 状态 */
        status?: number;
        /** 父类型ID */
        parentId?: string
    };
}
/**
* 响应 - 更新类型别名定义
*/
export interface SpecSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** BaseTypeId 基础类型ID */
        baseTypeId: string;
        /** SliceNum 是否为数组类型 */
        sliceNum?: number;
        /** BuildTemplateId 构建模板ID */
        buildTemplateId: string;
        /** GroupId 分组ID */
        groupId: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** ParentId 父类型ID */
        parentId?: string
    }[];
}

/**
* 查询一个类型别名的详细信息
*/
export interface SpecSingleGetReq {
    /**
        * 类型别名ID
        */
    id: string;
}
/**
* 查询一个类型别名的详细信息
*/
export interface SpecSingleGetResp {
    /**
        * 类型别名
        */
    typeSpec: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** BaseTypeId 基础类型ID */
        baseTypeId: string;
        /** SliceNum 是否为数组类型 */
        sliceNum?: number;
        /** BuildTemplateId 构建模板ID */
        buildTemplateId: string;
        /** GroupId 分组ID */
        groupId: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** ParentId 父类型ID */
        parentId?: string
    };
    /**
        * 基础类型
        */
    baseType: {
        /** Id 主键Id */
        id: string;
        /** Name 类型名称，一般是类型的中文名称 */
        name: string;
        /** Code 类型编码，需唯一 */
        code: string;
        /** GoType Go语言类型 */
        goType: string;
        /** Description 类型描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string;
        /** EntityField 数据库实体字段 */
        entityField?: string
    };
    /**
        * 参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** TypeSpecId 类型别名ID */
        typeSpecId: string;
        /** TemplateParamId 模板参数ID */
        templateParamId: string;
        /** ParamValue 参数值 */
        paramValue?: string;
        /** Description 说明 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 删除类型别名
*/
export interface SpecSingleDeleteReq {
    /**
        * 类型别名ID
        */
    id: string;
    /**
        * 是否物理删除
        */
    remove?: boolean;
}
/**
* 删除类型别名
*/
export interface SpecSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询构建模板详情
*/
export interface TemplateDetailGetReq {
    /**
        * 模板ID
        */
    id: string;
}
/**
* 查询构建模板详情
*/
export interface TemplateDetailGetResp {
    /**
        * 构建模板
        */
    template: {
        /** Id 主键Id */
        id: string;
        /** Name 模板名称 */
        name: string;
        /** Code 模板编码，需唯一 */
        code: string;
        /** Description 模板描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 模板参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** TemplateId 关联的模板ID */
        templateId: string;
        /** Name 参数名称 */
        name: string;
        /** Code 参数编码，需唯一 */
        code: string;
        /** ParamType 参数类型 */
        paramType: string;
        /** IsRequired 是否必填 */
        isRequired: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Description 参数描述 */
        description?: string;
        /** Example 参数示例值 */
        example?: string;
        /** Sort 参数顺序 */
        sort?: number;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询构建模板
*/
export interface TemplateListGetReq {
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
        * 模板名称
        */
    name?: string;
    /**
        * 模板名称
        */
    names?: string[];
    /**
        * 按照模板名称排序
        */
    byName?: number;
    /**
        * 模板编码，需唯一
        */
    code?: string;
    /**
        * 模板编码，需唯一
        */
    codes?: string[];
    /**
        * 按照模板编码，需唯一排序
        */
    byCode?: number;
    /**
        * 模板描述
        */
    description?: string;
    /**
        * 模板描述
        */
    descriptions?: string[];
    /**
        * 按照模板描述排序
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
* 响应 - 获取多个构建模板
*/
export interface TemplateListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 模板名称 */
        name: string;
        /** Code 模板编码，需唯一 */
        code: string;
        /** Description 模板描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询模板参数
*/
export interface TemplateParamlistGetReq {
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
        * 关联的模板ID
        */
    templateId?: string;
    /**
        * 关联的模板ID
        */
    templateIds?: string[];
    /**
        * 按照关联的模板ID排序
        */
    byTemplateId?: number;
    /**
        * 参数名称
        */
    name?: string;
    /**
        * 参数名称
        */
    names?: string[];
    /**
        * 按照参数名称排序
        */
    byName?: number;
    /**
        * 参数编码，需唯一
        */
    code?: string;
    /**
        * 参数编码，需唯一
        */
    codes?: string[];
    /**
        * 按照参数编码，需唯一排序
        */
    byCode?: number;
    /**
        * 参数类型
        */
    paramType?: string;
    /**
        * 参数类型
        */
    paramTypes?: string[];
    /**
        * 按照参数类型排序
        */
    byParamType?: number;
    /**
        * 是否必填
        */
    isRequired?: number;
    /**
        * 是否必填
        */
    isRequireds?: number[];
    /**
        * 按照是否必填排序
        */
    byIsRequired?: number;
    /**
        * 默认值
        */
    defaultValue?: string;
    /**
        * 默认值
        */
    defaultValues?: string[];
    /**
        * 按照默认值排序
        */
    byDefaultValue?: number;
    /**
        * 参数描述
        */
    description?: string;
    /**
        * 参数描述
        */
    descriptions?: string[];
    /**
        * 按照参数描述排序
        */
    byDescription?: number;
    /**
        * 参数示例值
        */
    example?: string;
    /**
        * 参数示例值
        */
    examples?: string[];
    /**
        * 按照参数示例值排序
        */
    byExample?: number;
    /**
        * 参数顺序
        */
    sort?: number;
    /**
        * 参数顺序
        */
    sorts?: number[];
    /**
        * 按照参数顺序排序
        */
    bySort?: number;
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
* 响应 - 获取多个模板参数
*/
export interface TemplateParamlistGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** TemplateId 关联的模板ID */
        templateId: string;
        /** Name 参数名称 */
        name: string;
        /** Code 参数编码，需唯一 */
        code: string;
        /** ParamType 参数类型 */
        paramType: string;
        /** IsRequired 是否必填 */
        isRequired: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Description 参数描述 */
        description?: string;
        /** Example 参数示例值 */
        example?: string;
        /** Sort 参数顺序 */
        sort?: number;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 添加构建模板
*/
export interface TemplateSinglePostReq {
    /**
        * 模板名称
        */
    name: string;
    /**
        * 模板编码，需唯一
        */
    code: string;
    /**
        * 模板描述
        */
    description?: string;
    /**
        * 状态
        */
    status?: number;
    /**
        * 模板参数列表
        */
    params: {
        /** 参数名称 */
        name: string;
        /** 参数编码 */
        code: string;
        /** 参数类型 */
        paramType: string;
        /** 是否必填 */
        isRequired?: number;
        /** 默认值 */
        defaultValue?: string;
        /** 参数描述 */
        description?: string;
        /** 参数示例值 */
        example?: string;
        /** 参数顺序 */
        sort?: number;
        /** 状态 */
        status?: number
    }[];
}
/**
* 添加构建模板
*/
export interface TemplateSinglePostResp {
    /**
        * 构建模板
        */
    template: {
        /** Id 主键Id */
        id: string;
        /** Name 模板名称 */
        name: string;
        /** Code 模板编码，需唯一 */
        code: string;
        /** Description 模板描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 模板参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** TemplateId 关联的模板ID */
        templateId: string;
        /** Name 参数名称 */
        name: string;
        /** Code 参数编码，需唯一 */
        code: string;
        /** ParamType 参数类型 */
        paramType: string;
        /** IsRequired 是否必填 */
        isRequired: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Description 参数描述 */
        description?: string;
        /** Example 参数示例值 */
        example?: string;
        /** Sort 参数顺序 */
        sort?: number;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 更新构建模板
*/
export interface TemplateSinglePutReq {
    /**
        * 模板ID
        */
    id: string;
    /**
        * 模板名称
        */
    name?: string;
    /**
        * 模板编码
        */
    code?: string;
    /**
        * 模板描述
        */
    description?: string;
    /**
        * 状态
        */
    status?: number;
    /**
        * 新增模板参数列表
        */
    addParams: {
        /** 参数名称 */
        name: string;
        /** 参数编码 */
        code: string;
        /** 参数类型 */
        paramType: string;
        /** 是否必填 */
        isRequired?: number;
        /** 默认值 */
        defaultValue?: string;
        /** 参数描述 */
        description?: string;
        /** 参数示例值 */
        example?: string;
        /** 参数顺序 */
        sort?: number;
        /** 状态 */
        status?: number
    }[];
    /**
        * 更新模板参数列表
        */
    updateParams: {
        /** 参数ID */
        id: string;
        /** 参数名称 */
        name?: string;
        /** 参数编码 */
        code?: string;
        /** 参数类型 */
        paramType?: string;
        /** 是否必填 */
        isRequired?: number;
        /** 默认值 */
        defaultValue?: string;
        /** 参数描述 */
        description?: string;
        /** 参数示例值 */
        example?: string;
        /** 参数顺序 */
        sort?: number;
        /** 状态 */
        status?: number
    }[];
    /**
        * 要删除的参数ID列表
        */
    removeParams: {
        /** 参数ID */
        id: string;
        /** 参数名称 */
        name?: string;
        /** 参数编码 */
        code?: string;
        /** 参数类型 */
        paramType?: string;
        /** 是否必填 */
        isRequired?: number;
        /** 默认值 */
        defaultValue?: string;
        /** 参数描述 */
        description?: string;
        /** 参数示例值 */
        example?: string;
        /** 参数顺序 */
        sort?: number;
        /** 状态 */
        status?: number
    }[];
}
/**
* 更新构建模板
*/
export interface TemplateSinglePutResp {
    /**
        * 构建模板
        */
    template: {
        /** Id 主键Id */
        id: string;
        /** Name 模板名称 */
        name: string;
        /** Code 模板编码，需唯一 */
        code: string;
        /** Description 模板描述 */
        description?: string;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 模板参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** TemplateId 关联的模板ID */
        templateId: string;
        /** Name 参数名称 */
        name: string;
        /** Code 参数编码，需唯一 */
        code: string;
        /** ParamType 参数类型 */
        paramType: string;
        /** IsRequired 是否必填 */
        isRequired: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Description 参数描述 */
        description?: string;
        /** Example 参数示例值 */
        example?: string;
        /** Sort 参数顺序 */
        sort?: number;
        /** Status 状态 */
        status: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 删除构建模板
*/
export interface TemplateSingleDeleteReq {
    /**
        * 模板ID
        */
    id: string;
}
/**
* 删除构建模板
*/
export interface TemplateSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}


