import { Headers, WasmApiResponse } from "./api"
export interface DatabaseDesignerInstance {
    /**
    * 获取多个数据库设计
    * url: database_designer/database/v1/list
    */
    databaseListGet(params: DatabaseListGetReq, headers?: Headers): Promise<WasmApiResponse<DatabaseListGetResp>>;
    /**
    * 创建单个数据库设计
    * url: database_designer/database/v1/single
    */
    databaseSinglePost(data: DatabaseSinglePostReq, headers?: Headers): Promise<WasmApiResponse<DatabaseSinglePostResp>>;
    /**
    * 更新数据库设计
    * url: database_designer/database/v1/single
    */
    databaseSinglePut(data: DatabaseSinglePutReq, headers?: Headers): Promise<WasmApiResponse<DatabaseSinglePutResp>>;
    /**
    * 获取单个数据库设计
    * url: database_designer/database/v1/single
    */
    databaseSingleGet(params: DatabaseSingleGetReq, headers?: Headers): Promise<WasmApiResponse<DatabaseSingleGetResp>>;
    /**
    * 删除数据库设计
    * url: database_designer/database/v1/single
    */
    databaseSingleDelete(params: DatabaseSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<DatabaseSingleDeleteResp>>;
    /**
    * 获取多个字段设计
    * url: database_designer/field/v1/list
    */
    fieldListGet(params: FieldListGetReq, headers?: Headers): Promise<WasmApiResponse<FieldListGetResp>>;
    /**
    * 获取多个字段参数值
    * url: database_designer/field/v1/paramlist
    */
    fieldParamlistGet(params: FieldParamlistGetReq, headers?: Headers): Promise<WasmApiResponse<FieldParamlistGetResp>>;
    /**
    * 创建单个字段参数值
    * url: database_designer/field/v1/paramsingle
    */
    fieldParamsinglePost(data: FieldParamsinglePostReq, headers?: Headers): Promise<WasmApiResponse<FieldParamsinglePostResp>>;
    /**
    * 更新字段参数值
    * url: database_designer/field/v1/paramsingle
    */
    fieldParamsinglePut(data: FieldParamsinglePutReq, headers?: Headers): Promise<WasmApiResponse<FieldParamsinglePutResp>>;
    /**
    * 获取单个字段参数值
    * url: database_designer/field/v1/paramsingle
    */
    fieldParamsingleGet(params: FieldParamsingleGetReq, headers?: Headers): Promise<WasmApiResponse<FieldParamsingleGetResp>>;
    /**
    * 删除字段参数值
    * url: database_designer/field/v1/paramsingle
    */
    fieldParamsingleDelete(params: FieldParamsingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<FieldParamsingleDeleteResp>>;
    /**
    * 创建单个字段设计
    * url: database_designer/field/v1/single
    */
    fieldSinglePost(data: FieldSinglePostReq, headers?: Headers): Promise<WasmApiResponse<FieldSinglePostResp>>;
    /**
    * 更新字段设计
    * url: database_designer/field/v1/single
    */
    fieldSinglePut(data: FieldSinglePutReq, headers?: Headers): Promise<WasmApiResponse<FieldSinglePutResp>>;
    /**
    * 获取单个字段设计
    * url: database_designer/field/v1/single
    */
    fieldSingleGet(params: FieldSingleGetReq, headers?: Headers): Promise<WasmApiResponse<FieldSingleGetResp>>;
    /**
    * 删除字段设计
    * url: database_designer/field/v1/single
    */
    fieldSingleDelete(params: FieldSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<FieldSingleDeleteResp>>;
    /**
    * 获取字段建造器详情
    * url: database_designer/field-builder/v1/detail
    */
    fieldBuilderDetailGet(params: FieldBuilderDetailGetReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderDetailGetResp>>;
    /**
    * 获取多个字段构建器
    * url: database_designer/field-builder/v1/list
    */
    fieldBuilderListGet(params: FieldBuilderListGetReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderListGetResp>>;
    /**
    * 获取多个字段构建器参数定义
    * url: database_designer/field-builder/v1/paramlist
    */
    fieldBuilderParamlistGet(params: FieldBuilderParamlistGetReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderParamlistGetResp>>;
    /**
    * 创建字段建造器
    * url: database_designer/field-builder/v1/single
    */
    fieldBuilderSinglePost(data: FieldBuilderSinglePostReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderSinglePostResp>>;
    /**
    * 更新字段建造器
    * url: database_designer/field-builder/v1/single
    */
    fieldBuilderSinglePut(data: FieldBuilderSinglePutReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderSinglePutResp>>;
    /**
    * 删除字段建造器
    * url: database_designer/field-builder/v1/single
    */
    fieldBuilderSingleDelete(params: FieldBuilderSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<FieldBuilderSingleDeleteResp>>;
    /**
    * 批量创建字段（包含字段参数）
    * url: database_designer/field-combo/v1/batch
    */
    fieldComboBatchPost(data: FieldComboBatchPostReq, headers?: Headers): Promise<WasmApiResponse<FieldComboBatchPostResp>>;
    /**
    * 获取字段详情（包含字段参数）
    * url: database_designer/field-combo/v1/detail
    */
    fieldComboDetailGet(params: FieldComboDetailGetReq, headers?: Headers): Promise<WasmApiResponse<FieldComboDetailGetResp>>;
    /**
    * 创建字段（包含字段参数）
    * url: database_designer/field-combo/v1/single
    */
    fieldComboSinglePost(data: FieldComboSinglePostReq, headers?: Headers): Promise<WasmApiResponse<FieldComboSinglePostResp>>;
    /**
    * 更新字段（包含字段参数）
    * url: database_designer/field-combo/v1/single
    */
    fieldComboSinglePut(data: FieldComboSinglePutReq, headers?: Headers): Promise<WasmApiResponse<FieldComboSinglePutResp>>;
    /**
    * 删除字段（包含字段参数）
    * url: database_designer/field-combo/v1/single
    */
    fieldComboSingleDelete(params: FieldComboSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<FieldComboSingleDeleteResp>>;
    /**
    * 获取多个实体设计
    * url: database_designer/table/v1/list
    */
    tableListGet(params: TableListGetReq, headers?: Headers): Promise<WasmApiResponse<TableListGetResp>>;
    /**
    * 创建单个实体设计
    * url: database_designer/table/v1/single
    */
    tableSinglePost(data: TableSinglePostReq, headers?: Headers): Promise<WasmApiResponse<TableSinglePostResp>>;
    /**
    * 更新实体设计
    * url: database_designer/table/v1/single
    */
    tableSinglePut(data: TableSinglePutReq, headers?: Headers): Promise<WasmApiResponse<TableSinglePutResp>>;
    /**
    * 获取单个实体设计
    * url: database_designer/table/v1/single
    */
    tableSingleGet(params: TableSingleGetReq, headers?: Headers): Promise<WasmApiResponse<TableSingleGetResp>>;
    /**
    * 删除实体设计
    * url: database_designer/table/v1/single
    */
    tableSingleDelete(params: TableSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<TableSingleDeleteResp>>;
}


/**
* 查询数据库设计
*/
export interface DatabaseListGetReq {
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
        * 数据库名称
        */
    name?: string;
    /**
        * 数据库名称
        */
    names?: string[];
    /**
        * 按照数据库名称排序
        */
    byName?: number;
    /**
        * 连接的标签
        */
    connectionTag?: string;
    /**
        * 连接的标签
        */
    connectionTags?: string[];
    /**
        * 按照连接的标签排序
        */
    byConnectionTag?: number;
    /**
        * 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbType?: number;
    /**
        * 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbTypes?: number[];
    /**
        * 按照数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)排序
        */
    byDbType?: number;
    /**
        * 包含的实体ID列表
        */
    entityIds?: string[];
    /**
        * 包含的实体ID列表
        */
    entityIdss?: string[];
    /**
        * 按照包含的实体ID列表排序
        */
    byEntityIds?: number;
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
* 响应 - 获取多个数据库设计
*/
export interface DatabaseListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 数据库名称 */
        name: string;
        /** ConnectionTag 连接的标签 */
        connectionTag: string;
        /** DbType 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbType: number;
        /** EntityIds 包含的实体ID列表 */
        entityIds?: string[];
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
* 创建单条数据库设计
*/
export interface DatabaseSinglePostReq {
    /**
        * 数据库名称 (必填)
        */
    name: string;
    /**
        * 连接的标签 (必填)
        */
    connectionTag: string;
    /**
        * 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) (自动填充)
        */
    dbType?: number;
    /**
        * 包含的实体ID列表 (可选)
        */
    entityIds?: string[];
    /**
        * 状态 (自动填充)
        */
    status?: number;
}
/**
* 数据库设计
*/
export interface DatabaseSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 数据库名称
        */
    name: string;
    /**
        * ConnectionTag 连接的标签
        */
    connectionTag: string;
    /**
        * DbType 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbType: number;
    /**
        * EntityIds 包含的实体ID列表
        */
    entityIds?: string[];
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
}

/**
* 请求 - 更新数据库设计
*/
export interface DatabaseSinglePutReq {
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
        /** 数据库名称 */
        name?: string;
        /** 数据库名称 */
        names?: string[];
        /** 按照数据库名称排序 */
        byName?: number;
        /** 连接的标签 */
        connectionTag?: string;
        /** 连接的标签 */
        connectionTags?: string[];
        /** 按照连接的标签排序 */
        byConnectionTag?: number;
        /** 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbType?: number;
        /** 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbTypes?: number[];
        /** 按照数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)排序 */
        byDbType?: number;
        /** 包含的实体ID列表 */
        entityIds?: string[];
        /** 包含的实体ID列表 */
        entityIdss?: string[];
        /** 按照包含的实体ID列表排序 */
        byEntityIds?: number;
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
        /** 数据库名称 */
        name?: string;
        /** 连接的标签 */
        connectionTag?: string;
        /** 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbType?: number;
        /** 包含的实体ID列表 */
        entityIds?: string[];
        /** 状态 */
        status?: number
    };
}
/**
* 响应 - 更新数据库设计
*/
export interface DatabaseSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 数据库名称 */
        name: string;
        /** ConnectionTag 连接的标签 */
        connectionTag: string;
        /** DbType 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbType: number;
        /** EntityIds 包含的实体ID列表 */
        entityIds?: string[];
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
* 查询数据库设计
*/
export interface DatabaseSingleGetReq {
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
        * 数据库名称
        */
    name?: string;
    /**
        * 数据库名称
        */
    names?: string[];
    /**
        * 按照数据库名称排序
        */
    byName?: number;
    /**
        * 连接的标签
        */
    connectionTag?: string;
    /**
        * 连接的标签
        */
    connectionTags?: string[];
    /**
        * 按照连接的标签排序
        */
    byConnectionTag?: number;
    /**
        * 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbType?: number;
    /**
        * 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbTypes?: number[];
    /**
        * 按照数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)排序
        */
    byDbType?: number;
    /**
        * 包含的实体ID列表
        */
    entityIds?: string[];
    /**
        * 包含的实体ID列表
        */
    entityIdss?: string[];
    /**
        * 按照包含的实体ID列表排序
        */
    byEntityIds?: number;
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
* 数据库设计
*/
export interface DatabaseSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 数据库名称
        */
    name: string;
    /**
        * ConnectionTag 连接的标签
        */
    connectionTag: string;
    /**
        * DbType 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)
        */
    dbType: number;
    /**
        * EntityIds 包含的实体ID列表
        */
    entityIds?: string[];
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
}

/**
* 请求 - 删除数据库设计
*/
export interface DatabaseSingleDeleteReq {
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
        /** 数据库名称 */
        name?: string;
        /** 数据库名称 */
        names?: string[];
        /** 按照数据库名称排序 */
        byName?: number;
        /** 连接的标签 */
        connectionTag?: string;
        /** 连接的标签 */
        connectionTags?: string[];
        /** 按照连接的标签排序 */
        byConnectionTag?: number;
        /** 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbType?: number;
        /** 数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server) */
        dbTypes?: number[];
        /** 按照数据库驱动类型(1:MySQL 2:PostgreSQL 3:SQLite 4:Oracle 5:SQL Server)排序 */
        byDbType?: number;
        /** 包含的实体ID列表 */
        entityIds?: string[];
        /** 包含的实体ID列表 */
        entityIdss?: string[];
        /** 按照包含的实体ID列表排序 */
        byEntityIds?: number;
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
* 响应 - 删除数据库设计
*/
export interface DatabaseSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询字段设计
*/
export interface FieldListGetReq {
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
        * 字段名称
        */
    name?: string;
    /**
        * 字段名称
        */
    names?: string[];
    /**
        * 按照字段名称排序
        */
    byName?: number;
    /**
        * 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    code?: string;
    /**
        * 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    codes?: string[];
    /**
        * 按照字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分排序
        */
    byCode?: number;
    /**
        * 字段构建器ID
        */
    fieldBuilderId?: string;
    /**
        * 字段构建器ID
        */
    fieldBuilderIds?: string[];
    /**
        * 按照字段构建器ID排序
        */
    byFieldBuilderId?: number;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeId?: string;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeIds?: string[];
    /**
        * 按照对应的zspecs类型排序
        */
    byZspecsTypeId?: number;
    /**
        * 字段注释
        */
    comment?: string;
    /**
        * 字段注释
        */
    comments?: string[];
    /**
        * 按照字段注释排序
        */
    byComment?: number;
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
* 响应 - 获取多个字段设计
*/
export interface FieldListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 字段名称 */
        name: string;
        /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
        /** ZspecsTypeId 对应的zspecs类型 */
        zspecsTypeId: string;
        /** Comment 字段注释 */
        comment?: string;
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
* 查询字段参数值
*/
export interface FieldParamlistGetReq {
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
        * 字段ID
        */
    fieldId?: string;
    /**
        * 字段ID
        */
    fieldIds?: string[];
    /**
        * 按照字段ID排序
        */
    byFieldId?: number;
    /**
        * 字段构建器参数ID
        */
    fieldBuilderParamId?: string;
    /**
        * 字段构建器参数ID
        */
    fieldBuilderParamIds?: string[];
    /**
        * 按照字段构建器参数ID排序
        */
    byFieldBuilderParamId?: number;
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
* 响应 - 获取多个字段参数值
*/
export interface FieldParamlistGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** FieldId 字段ID */
        fieldId: string;
        /** FieldBuilderParamId 字段构建器参数ID */
        fieldBuilderParamId: string;
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
* 创建单条字段参数值
*/
export interface FieldParamsinglePostReq {
    /**
        * 字段ID (必填)
        */
    fieldId: string;
    /**
        * 字段构建器参数ID (必填)
        */
    fieldBuilderParamId: string;
    /**
        * 参数值 (自动填充)
        */
    paramValue?: string;
    /**
        * 说明 (自动填充)
        */
    description?: string;
    /**
        * 状态 (自动填充)
        */
    status?: number;
}
/**
* 字段参数值
*/
export interface FieldParamsinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * FieldId 字段ID
        */
    fieldId: string;
    /**
        * FieldBuilderParamId 字段构建器参数ID
        */
    fieldBuilderParamId: string;
    /**
        * ParamValue 参数值
        */
    paramValue?: string;
    /**
        * Description 说明
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
}

/**
* 请求 - 更新字段参数值
*/
export interface FieldParamsinglePutReq {
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
        /** 字段ID */
        fieldId?: string;
        /** 字段ID */
        fieldIds?: string[];
        /** 按照字段ID排序 */
        byFieldId?: number;
        /** 字段构建器参数ID */
        fieldBuilderParamId?: string;
        /** 字段构建器参数ID */
        fieldBuilderParamIds?: string[];
        /** 按照字段构建器参数ID排序 */
        byFieldBuilderParamId?: number;
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
        /** 字段ID */
        fieldId?: string;
        /** 字段构建器参数ID */
        fieldBuilderParamId?: string;
        /** 参数值 */
        paramValue?: string;
        /** 说明 */
        description?: string;
        /** 状态 */
        status?: number
    };
}
/**
* 响应 - 更新字段参数值
*/
export interface FieldParamsinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** FieldId 字段ID */
        fieldId: string;
        /** FieldBuilderParamId 字段构建器参数ID */
        fieldBuilderParamId: string;
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
* 查询字段参数值
*/
export interface FieldParamsingleGetReq {
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
        * 字段ID
        */
    fieldId?: string;
    /**
        * 字段ID
        */
    fieldIds?: string[];
    /**
        * 按照字段ID排序
        */
    byFieldId?: number;
    /**
        * 字段构建器参数ID
        */
    fieldBuilderParamId?: string;
    /**
        * 字段构建器参数ID
        */
    fieldBuilderParamIds?: string[];
    /**
        * 按照字段构建器参数ID排序
        */
    byFieldBuilderParamId?: number;
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
* 字段参数值
*/
export interface FieldParamsingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * FieldId 字段ID
        */
    fieldId: string;
    /**
        * FieldBuilderParamId 字段构建器参数ID
        */
    fieldBuilderParamId: string;
    /**
        * ParamValue 参数值
        */
    paramValue?: string;
    /**
        * Description 说明
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
}

/**
* 请求 - 删除字段参数值
*/
export interface FieldParamsingleDeleteReq {
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
        /** 字段ID */
        fieldId?: string;
        /** 字段ID */
        fieldIds?: string[];
        /** 按照字段ID排序 */
        byFieldId?: number;
        /** 字段构建器参数ID */
        fieldBuilderParamId?: string;
        /** 字段构建器参数ID */
        fieldBuilderParamIds?: string[];
        /** 按照字段构建器参数ID排序 */
        byFieldBuilderParamId?: number;
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
* 响应 - 删除字段参数值
*/
export interface FieldParamsingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 创建单条字段设计
*/
export interface FieldSinglePostReq {
    /**
        * 字段名称 (必填)
        */
    name: string;
    /**
        * 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 (必填)
        */
    code: string;
    /**
        * 字段构建器ID (必填)
        */
    fieldBuilderId: string;
    /**
        * 对应的zspecs类型 (必填)
        */
    zspecsTypeId: string;
    /**
        * 字段注释 (可选)
        */
    comment?: string;
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
* 字段设计
*/
export interface FieldSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 字段名称
        */
    name: string;
    /**
        * Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    code: string;
    /**
        * FieldBuilderId 字段构建器ID
        */
    fieldBuilderId: string;
    /**
        * ZspecsTypeId 对应的zspecs类型
        */
    zspecsTypeId: string;
    /**
        * Comment 字段注释
        */
    comment?: string;
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
* 请求 - 更新字段设计
*/
export interface FieldSinglePutReq {
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
        /** 字段名称 */
        name?: string;
        /** 字段名称 */
        names?: string[];
        /** 按照字段名称排序 */
        byName?: number;
        /** 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code?: string;
        /** 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        codes?: string[];
        /** 按照字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分排序 */
        byCode?: number;
        /** 字段构建器ID */
        fieldBuilderId?: string;
        /** 字段构建器ID */
        fieldBuilderIds?: string[];
        /** 按照字段构建器ID排序 */
        byFieldBuilderId?: number;
        /** 对应的zspecs类型 */
        zspecsTypeId?: string;
        /** 对应的zspecs类型 */
        zspecsTypeIds?: string[];
        /** 按照对应的zspecs类型排序 */
        byZspecsTypeId?: number;
        /** 字段注释 */
        comment?: string;
        /** 字段注释 */
        comments?: string[];
        /** 按照字段注释排序 */
        byComment?: number;
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
        /** 字段名称 */
        name?: string;
        /** 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code?: string;
        /** 字段构建器ID */
        fieldBuilderId?: string;
        /** 对应的zspecs类型 */
        zspecsTypeId?: string;
        /** 字段注释 */
        comment?: string;
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number
    };
}
/**
* 响应 - 更新字段设计
*/
export interface FieldSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 字段名称 */
        name: string;
        /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
        /** ZspecsTypeId 对应的zspecs类型 */
        zspecsTypeId: string;
        /** Comment 字段注释 */
        comment?: string;
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
* 查询字段设计
*/
export interface FieldSingleGetReq {
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
        * 字段名称
        */
    name?: string;
    /**
        * 字段名称
        */
    names?: string[];
    /**
        * 按照字段名称排序
        */
    byName?: number;
    /**
        * 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    code?: string;
    /**
        * 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    codes?: string[];
    /**
        * 按照字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分排序
        */
    byCode?: number;
    /**
        * 字段构建器ID
        */
    fieldBuilderId?: string;
    /**
        * 字段构建器ID
        */
    fieldBuilderIds?: string[];
    /**
        * 按照字段构建器ID排序
        */
    byFieldBuilderId?: number;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeId?: string;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeIds?: string[];
    /**
        * 按照对应的zspecs类型排序
        */
    byZspecsTypeId?: number;
    /**
        * 字段注释
        */
    comment?: string;
    /**
        * 字段注释
        */
    comments?: string[];
    /**
        * 按照字段注释排序
        */
    byComment?: number;
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
* 字段设计
*/
export interface FieldSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 字段名称
        */
    name: string;
    /**
        * Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分
        */
    code: string;
    /**
        * FieldBuilderId 字段构建器ID
        */
    fieldBuilderId: string;
    /**
        * ZspecsTypeId 对应的zspecs类型
        */
    zspecsTypeId: string;
    /**
        * Comment 字段注释
        */
    comment?: string;
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
* 请求 - 删除字段设计
*/
export interface FieldSingleDeleteReq {
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
        /** 字段名称 */
        name?: string;
        /** 字段名称 */
        names?: string[];
        /** 按照字段名称排序 */
        byName?: number;
        /** 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code?: string;
        /** 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        codes?: string[];
        /** 按照字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分排序 */
        byCode?: number;
        /** 字段构建器ID */
        fieldBuilderId?: string;
        /** 字段构建器ID */
        fieldBuilderIds?: string[];
        /** 按照字段构建器ID排序 */
        byFieldBuilderId?: number;
        /** 对应的zspecs类型 */
        zspecsTypeId?: string;
        /** 对应的zspecs类型 */
        zspecsTypeIds?: string[];
        /** 按照对应的zspecs类型排序 */
        byZspecsTypeId?: number;
        /** 字段注释 */
        comment?: string;
        /** 字段注释 */
        comments?: string[];
        /** 按照字段注释排序 */
        byComment?: number;
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
* 响应 - 删除字段设计
*/
export interface FieldSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询字段建造器详情
*/
export interface FieldBuilderDetailGetReq {
    /**
        * 字段建造器ID
        */
    id: string;
}
/**
* 查询字段建造器详情响应
*/
export interface FieldBuilderDetailGetResp {
    /**
        * 字段建造器
        */
    fieldBuilder: {
        /** Id 主键Id */
        id: string;
        /** Name 字段构建器名称 */
        name: string;
        /** Description 字段构建器描述 */
        description?: string;
        /** SupportedTypes 支持的字段类型列表（如varchar、int、text等） */
        supportedTypes?: string[];
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
    };
    /**
        * 字段建造器参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
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
* 查询字段构建器
*/
export interface FieldBuilderListGetReq {
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
        * 字段构建器名称
        */
    name?: string;
    /**
        * 字段构建器名称
        */
    names?: string[];
    /**
        * 按照字段构建器名称排序
        */
    byName?: number;
    /**
        * 字段构建器描述
        */
    description?: string;
    /**
        * 字段构建器描述
        */
    descriptions?: string[];
    /**
        * 按照字段构建器描述排序
        */
    byDescription?: number;
    /**
        * 支持的字段类型列表（如varchar、int、text等）
        */
    supportedTypes?: string[];
    /**
        * 支持的字段类型列表（如varchar、int、text等）
        */
    supportedTypess?: string[];
    /**
        * 按照支持的字段类型列表（如varchar、int、text等）排序
        */
    bySupportedTypes?: number;
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
* 响应 - 获取多个字段构建器
*/
export interface FieldBuilderListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 字段构建器名称 */
        name: string;
        /** Description 字段构建器描述 */
        description?: string;
        /** SupportedTypes 支持的字段类型列表（如varchar、int、text等） */
        supportedTypes?: string[];
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
* 查询字段构建器参数定义
*/
export interface FieldBuilderParamlistGetReq {
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
        * 字段构建器ID
        */
    fieldBuilderId?: string;
    /**
        * 字段构建器ID
        */
    fieldBuilderIds?: string[];
    /**
        * 按照字段构建器ID排序
        */
    byFieldBuilderId?: number;
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
* 响应 - 获取多个字段构建器参数定义
*/
export interface FieldBuilderParamlistGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
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
* 创建字段建造器
*/
export interface FieldBuilderSinglePostReq {
    /**
        * 字段建造器名称
        */
    name: string;
    /**
        * 字段建造器描述
        */
    description?: string;
    /**
        * 支持的字段类型列表（如varchar、int、text等）
        */
    supportedTypes?: string[];
    /**
        * 排序
        */
    sort?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 字段建造器参数列表
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
* 创建字段建造器响应
*/
export interface FieldBuilderSinglePostResp {
    /**
        * 字段建造器
        */
    fieldBuilder: {
        /** Id 主键Id */
        id: string;
        /** Name 字段构建器名称 */
        name: string;
        /** Description 字段构建器描述 */
        description?: string;
        /** SupportedTypes 支持的字段类型列表（如varchar、int、text等） */
        supportedTypes?: string[];
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
    };
    /**
        * 字段建造器参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
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
* 更新字段建造器
*/
export interface FieldBuilderSinglePutReq {
    /**
        * 字段建造器ID
        */
    id: string;
    /**
        * 字段建造器名称
        */
    name?: string;
    /**
        * 字段建造器描述
        */
    description?: string;
    /**
        * 支持的字段类型列表（如varchar、int、text等）
        */
    supportedTypes?: string[];
    /**
        * 排序
        */
    sort?: number;
    /**
        * 状态
        */
    status?: number;
    /**
        * 新增字段建造器参数列表
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
        * 更新字段建造器参数列表
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
* 更新字段建造器响应
*/
export interface FieldBuilderSinglePutResp {
    /**
        * 字段建造器
        */
    fieldBuilder: {
        /** Id 主键Id */
        id: string;
        /** Name 字段构建器名称 */
        name: string;
        /** Description 字段构建器描述 */
        description?: string;
        /** SupportedTypes 支持的字段类型列表（如varchar、int、text等） */
        supportedTypes?: string[];
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
    };
    /**
        * 字段建造器参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
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
* 删除字段建造器
*/
export interface FieldBuilderSingleDeleteReq {
    /**
        * 字段建造器ID
        */
    id: string;
}
/**
* 删除字段建造器响应
*/
export interface FieldBuilderSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 批量创建字段（包含字段参数）
*/
export interface FieldComboBatchPostReq {
    /**
        * 字段列表
        */
    fields: {
        /** 字段名称 */
        name: string;
        /** 字段编码，需唯一 */
        code: string;
        /** 字段构建器ID */
        fieldBuilderId: string;
        /** 对应的zspecs类型 */
        zspecsTypeId: string;
        /** 字段注释 */
        comment?: string;
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number;
        /** 字段构建器参数ID 字段参数值列表 */
        params?: {
            fieldBuilderParamId: string;
            /** 参数值 */
            paramValue?: string;
            /** 说明 */
            description?: string
        }[]
    }[];
}
/**
* 批量创建字段响应
*/
export interface FieldComboBatchPostResp {
    /**
        * 创建的字段列表
        */
    fields: {
        /** Id 主键Id 字段信息 */
        field?: {
            id: string;
            /** Name 字段名称 */
            name: string;
            /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
            code: string;
            /** FieldBuilderId 字段构建器ID */
            fieldBuilderId: string;
            /** ZspecsTypeId 对应的zspecs类型 */
            zspecsTypeId: string;
            /** Comment 字段注释 */
            comment?: string;
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
        };
        /** Id 主键Id 字段参数列表 */
        params?: {
            id: string;
            /** FieldId 字段ID */
            fieldId: string;
            /** FieldBuilderParamId 字段构建器参数ID */
            fieldBuilderParamId: string;
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
        }[]
    }[];
}

/**
* 查询字段详情（包含字段参数）
*/
export interface FieldComboDetailGetReq {
    /**
        * 字段ID
        */
    id: string;
}
/**
* 查询字段详情响应
*/
export interface FieldComboDetailGetResp {
    /**
        * 字段信息
        */
    field: {
        /** Id 主键Id */
        id: string;
        /** Name 字段名称 */
        name: string;
        /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
        /** ZspecsTypeId 对应的zspecs类型 */
        zspecsTypeId: string;
        /** Comment 字段注释 */
        comment?: string;
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
    };
    /**
        * 字段参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldId 字段ID */
        fieldId: string;
        /** FieldBuilderParamId 字段构建器参数ID */
        fieldBuilderParamId: string;
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
* 创建字段（包含字段参数）
*/
export interface FieldComboSinglePostReq {
    /**
        * 字段名称
        */
    name: string;
    /**
        * 字段编码，需唯一
        */
    code: string;
    /**
        * 字段构建器ID
        */
    fieldBuilderId: string;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeId: string;
    /**
        * 字段注释
        */
    comment?: string;
    /**
        * 状态
        */
    status?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 字段参数值列表
        */
    params: {
        /** 字段构建器参数ID */
        fieldBuilderParamId: string;
        /** 参数值 */
        paramValue?: string;
        /** 说明 */
        description?: string
    }[];
}
/**
* 创建字段响应
*/
export interface FieldComboSinglePostResp {
    /**
        * 字段信息
        */
    field: {
        /** Id 主键Id */
        id: string;
        /** Name 字段名称 */
        name: string;
        /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
        /** ZspecsTypeId 对应的zspecs类型 */
        zspecsTypeId: string;
        /** Comment 字段注释 */
        comment?: string;
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
    };
    /**
        * 字段参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldId 字段ID */
        fieldId: string;
        /** FieldBuilderParamId 字段构建器参数ID */
        fieldBuilderParamId: string;
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
* 更新字段（包含字段参数）
*/
export interface FieldComboSinglePutReq {
    /**
        * 字段ID
        */
    id: string;
    /**
        * 字段名称
        */
    name?: string;
    /**
        * 字段编码
        */
    code?: string;
    /**
        * 字段构建器ID
        */
    fieldBuilderId?: string;
    /**
        * 对应的zspecs类型
        */
    zspecsTypeId?: string;
    /**
        * 字段注释
        */
    comment?: string;
    /**
        * 状态
        */
    status?: number;
    /**
        * 排序
        */
    sort?: number;
    /**
        * 新增字段参数列表
        */
    addParams: {
        /** 字段构建器参数ID */
        fieldBuilderParamId: string;
        /** 参数值 */
        paramValue?: string;
        /** 说明 */
        description?: string
    }[];
    /**
        * 更新字段参数列表
        */
    updateParams: {
        /** 字段参数ID */
        id: string;
        /** 参数值 */
        paramValue?: string;
        /** 说明 */
        description?: string
    }[];
    /**
        * 删除字段参数列表
        */
    removeParams: {
        /** 字段参数ID */
        id: string
    }[];
}
/**
* 更新字段响应
*/
export interface FieldComboSinglePutResp {
    /**
        * 字段信息
        */
    field: {
        /** Id 主键Id */
        id: string;
        /** Name 字段名称 */
        name: string;
        /** Code 字段编码，需唯一，这个是用来标识字段，比如两个字段都是name,但是它们一个是通用的，一个是业务的，所以需要用code区分 */
        code: string;
        /** FieldBuilderId 字段构建器ID */
        fieldBuilderId: string;
        /** ZspecsTypeId 对应的zspecs类型 */
        zspecsTypeId: string;
        /** Comment 字段注释 */
        comment?: string;
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
    };
    /**
        * 字段参数列表
        */
    params: {
        /** Id 主键Id */
        id: string;
        /** FieldId 字段ID */
        fieldId: string;
        /** FieldBuilderParamId 字段构建器参数ID */
        fieldBuilderParamId: string;
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
* 删除字段（包含字段参数）
*/
export interface FieldComboSingleDeleteReq {
    /**
        * 字段ID
        */
    id: string;
}
/**
* 删除字段响应
*/
export interface FieldComboSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询实体设计
*/
export interface TableListGetReq {
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
        * 实体结构体名称
        */
    name?: string;
    /**
        * 实体结构体名称
        */
    names?: string[];
    /**
        * 按照实体结构体名称排序
        */
    byName?: number;
    /**
        * 实体数据库属性名
        */
    attrName?: string;
    /**
        * 实体数据库属性名
        */
    attrNames?: string[];
    /**
        * 按照实体数据库属性名排序
        */
    byAttrName?: number;
    /**
        * 实体注释
        */
    comment?: string;
    /**
        * 实体注释
        */
    comments?: string[];
    /**
        * 按照实体注释排序
        */
    byComment?: number;
    /**
        * 包含的字段ID列表
        */
    fieldIds?: string[];
    /**
        * 包含的字段ID列表
        */
    fieldIdss?: string[];
    /**
        * 按照包含的字段ID列表排序
        */
    byFieldIds?: number;
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
* 响应 - 获取多个实体设计
*/
export interface TableListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 实体结构体名称 */
        name: string;
        /** AttrName 实体数据库属性名 */
        attrName: string;
        /** Comment 实体注释 */
        comment: string;
        /** FieldIds 包含的字段ID列表 */
        fieldIds?: string[];
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
* 创建单条实体设计
*/
export interface TableSinglePostReq {
    /**
        * 实体结构体名称 (必填)
        */
    name: string;
    /**
        * 实体数据库属性名 (必填)
        */
    attrName: string;
    /**
        * 实体注释 (必填)
        */
    comment: string;
    /**
        * 包含的字段ID列表 (可选)
        */
    fieldIds?: string[];
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
* 实体设计
*/
export interface TableSinglePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 实体结构体名称
        */
    name: string;
    /**
        * AttrName 实体数据库属性名
        */
    attrName: string;
    /**
        * Comment 实体注释
        */
    comment: string;
    /**
        * FieldIds 包含的字段ID列表
        */
    fieldIds?: string[];
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
* 请求 - 更新实体设计
*/
export interface TableSinglePutReq {
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
        /** 实体结构体名称 */
        name?: string;
        /** 实体结构体名称 */
        names?: string[];
        /** 按照实体结构体名称排序 */
        byName?: number;
        /** 实体数据库属性名 */
        attrName?: string;
        /** 实体数据库属性名 */
        attrNames?: string[];
        /** 按照实体数据库属性名排序 */
        byAttrName?: number;
        /** 实体注释 */
        comment?: string;
        /** 实体注释 */
        comments?: string[];
        /** 按照实体注释排序 */
        byComment?: number;
        /** 包含的字段ID列表 */
        fieldIds?: string[];
        /** 包含的字段ID列表 */
        fieldIdss?: string[];
        /** 按照包含的字段ID列表排序 */
        byFieldIds?: number;
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
        /** 实体结构体名称 */
        name?: string;
        /** 实体数据库属性名 */
        attrName?: string;
        /** 实体注释 */
        comment?: string;
        /** 包含的字段ID列表 */
        fieldIds?: string[];
        /** 状态 */
        status?: number;
        /** 排序 */
        sort?: number
    };
}
/**
* 响应 - 更新实体设计
*/
export interface TableSinglePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Name 实体结构体名称 */
        name: string;
        /** AttrName 实体数据库属性名 */
        attrName: string;
        /** Comment 实体注释 */
        comment: string;
        /** FieldIds 包含的字段ID列表 */
        fieldIds?: string[];
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
* 查询实体设计
*/
export interface TableSingleGetReq {
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
        * 实体结构体名称
        */
    name?: string;
    /**
        * 实体结构体名称
        */
    names?: string[];
    /**
        * 按照实体结构体名称排序
        */
    byName?: number;
    /**
        * 实体数据库属性名
        */
    attrName?: string;
    /**
        * 实体数据库属性名
        */
    attrNames?: string[];
    /**
        * 按照实体数据库属性名排序
        */
    byAttrName?: number;
    /**
        * 实体注释
        */
    comment?: string;
    /**
        * 实体注释
        */
    comments?: string[];
    /**
        * 按照实体注释排序
        */
    byComment?: number;
    /**
        * 包含的字段ID列表
        */
    fieldIds?: string[];
    /**
        * 包含的字段ID列表
        */
    fieldIdss?: string[];
    /**
        * 按照包含的字段ID列表排序
        */
    byFieldIds?: number;
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
* 实体设计
*/
export interface TableSingleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Name 实体结构体名称
        */
    name: string;
    /**
        * AttrName 实体数据库属性名
        */
    attrName: string;
    /**
        * Comment 实体注释
        */
    comment: string;
    /**
        * FieldIds 包含的字段ID列表
        */
    fieldIds?: string[];
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
* 请求 - 删除实体设计
*/
export interface TableSingleDeleteReq {
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
        /** 实体结构体名称 */
        name?: string;
        /** 实体结构体名称 */
        names?: string[];
        /** 按照实体结构体名称排序 */
        byName?: number;
        /** 实体数据库属性名 */
        attrName?: string;
        /** 实体数据库属性名 */
        attrNames?: string[];
        /** 按照实体数据库属性名排序 */
        byAttrName?: number;
        /** 实体注释 */
        comment?: string;
        /** 实体注释 */
        comments?: string[];
        /** 按照实体注释排序 */
        byComment?: number;
        /** 包含的字段ID列表 */
        fieldIds?: string[];
        /** 包含的字段ID列表 */
        fieldIdss?: string[];
        /** 按照包含的字段ID列表排序 */
        byFieldIds?: number;
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
* 响应 - 删除实体设计
*/
export interface TableSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}


