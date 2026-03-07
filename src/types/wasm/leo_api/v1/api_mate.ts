import { Headers, WasmApiResponse } from "./api"
export interface ApiMateInstance {
    /**
    * 获取API文档详情
    * url: api_mate/api-doc/v1/doc
    */
    apiDocDocGet(params: ApiDocDocGetReq, headers?: Headers): Promise<WasmApiResponse<ApiDocDocGetResp>>;
    /**
    * 获取API文档树
    * url: api_mate/api-doc/v1/doc-tree
    */
    apiDocDocTreeGet(params: ApiDocDocTreeGetReq, headers?: Headers): Promise<WasmApiResponse<ApiDocDocTreeGetResp>>;
    /**
    * 创建单个API环境配置
    * url: api_mate/config-manager/v1/environment
    */
    configManagerEnvironmentPost(data: ConfigManagerEnvironmentPostReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentPostResp>>;
    /**
    * 更新API环境配置
    * url: api_mate/config-manager/v1/environment
    */
    configManagerEnvironmentPut(data: ConfigManagerEnvironmentPutReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentPutResp>>;
    /**
    * 删除API环境配置
    * url: api_mate/config-manager/v1/environment
    */
    configManagerEnvironmentDelete(params: ConfigManagerEnvironmentDeleteReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentDeleteResp>>;
    /**
    * 创建单个API环境变量
    * url: api_mate/config-manager/v1/environment-variable
    */
    configManagerEnvironmentVariablePost(data: ConfigManagerEnvironmentVariablePostReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentVariablePostResp>>;
    /**
    * 更新API环境变量
    * url: api_mate/config-manager/v1/environment-variable
    */
    configManagerEnvironmentVariablePut(data: ConfigManagerEnvironmentVariablePutReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentVariablePutResp>>;
    /**
    * 删除API环境变量
    * url: api_mate/config-manager/v1/environment-variable
    */
    configManagerEnvironmentVariableDelete(params: ConfigManagerEnvironmentVariableDeleteReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentVariableDeleteResp>>;
    /**
    * 获取多个API环境变量
    * url: api_mate/config-manager/v1/environment-variables
    */
    configManagerEnvironmentVariablesGet(params: ConfigManagerEnvironmentVariablesGetReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentVariablesGetResp>>;
    /**
    * 获取多个API环境配置
    * url: api_mate/config-manager/v1/environments
    */
    configManagerEnvironmentsGet(params: ConfigManagerEnvironmentsGetReq, headers?: Headers): Promise<WasmApiResponse<ConfigManagerEnvironmentsGetResp>>;
}


/**
* 请求 - 获取API文档
*/
export interface ApiDocDocGetReq {
    /**
        * 文档ID
        */
    id: string;
}
/**
* 响应 - 获取API文档
*/
export interface ApiDocDocGetResp {
    /**
        * 请求信息列表
        */
    requestInfo: {
        /** ID 主键ID */
        id: string;
        /** ApiDocID 关联的API文档ID */
        apiDocId: string;
        /** Field 字段名 */
        field: string;
        /** FieldType 字段类型 */
        fieldType: string;
        /** Definition 定义信息 */
        definitionJson?: string;
        /** Description 描述 */
        description?: string;
        /** Features 特性 */
        features?: string[];
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
    /**
        * 请求头列表
        */
    requestHeader: {
        /** ID 主键ID */
        id: string;
        /** ApiDocID 关联的API文档ID */
        apiDocId: string;
        /** HeaderName 头部名称 */
        headerName: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
    /**
        * 响应信息列表
        */
    responseInfo: {
        /** ID 主键ID */
        id: string;
        /** ApiDocID 关联的API文档ID */
        apiDocId: string;
        /** Field 字段名 */
        field: string;
        /** FieldType 字段类型 */
        fieldType: string;
        /** Definition 定义信息 */
        definitionJson?: string;
        /** Description 描述 */
        description?: string;
        /** StatusCodes 状态码 */
        statusCode: string[];
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
    /**
        * 状态码列表
        */
    statusCode: {
        /** ID 主键ID */
        id: string;
        /** ApiDocID 关联的API文档ID */
        apiDocId: string;
        /** StatusCode 状态码 */
        statusCode: string;
        /** Description 描述 */
        description?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 
*/
export interface ApiDocDocTreeGetReq {
}
/**
* 响应 - 获取文档树
*/
export interface ApiDocDocTreeGetResp {
    /**
        * 文档树结构 分支、服务、版本、路由进行组织
        */
    tree: {
        /** 分支名称 */
        name: string;
        /** 服务名称 子节点列表 */
        children?: {
            name: string;
            /** 版本号 子节点列表 */
            children?: {
                version: string;
                /** 路由名称 子节点列表 */
                children?: {
                    name: string;
                    /** 文档ID 子节点列表 */
                    children?: {
                        id?: string;
                        /** 节点名称 */
                        name?: string;
                        /** API路径 */
                        path?: string;
                        /** HTTP方法(1:GET 2:POST 3:PUT 4:DELETE) */
                        method?: number;
                        /** 描述信息 */
                        description?: string
                    }[]
                }[]
            }[]
        }[]
    }[];
}

/**
* 创建单条API环境配置
*/
export interface ConfigManagerEnvironmentPostReq {
    /**
        * 环境标识，可以当作git仓库的分支名 (必填)
        */
    envKey: string;
    /**
        * 环境名称 (必填)
        */
    name: string;
}
/**
* API环境配置
*/
export interface ConfigManagerEnvironmentPostResp {
    /**
        * ID 主键ID
        */
    id: string;
    /**
        * EnvKey 环境标识，可以当作git仓库的分支名
        */
    envKey: string;
    /**
        * Name 环境名称
        */
    name: string;
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
* 请求 - 更新API环境配置
*/
export interface ConfigManagerEnvironmentPutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键ID */
        iD?: string;
        /** 主键ID */
        iDs?: string[];
        /** 按照主键ID排序 */
        byID?: number;
        /** 环境标识，可以当作git仓库的分支名 */
        envKey?: string;
        /** 环境标识，可以当作git仓库的分支名 */
        envKeys?: string[];
        /** 按照环境标识，可以当作git仓库的分支名排序 */
        byEnvKey?: number;
        /** 环境名称 */
        name?: string;
        /** 环境名称 */
        names?: string[];
        /** 按照环境名称排序 */
        byName?: number;
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
        /** 环境标识，可以当作git仓库的分支名 */
        envKey?: string;
        /** 环境名称 */
        name?: string
    };
}
/**
* 响应 - 更新API环境配置
*/
export interface ConfigManagerEnvironmentPutResp {
    /**
        * 更新的数据
        */
    list: {
        /** ID 主键ID */
        id: string;
        /** EnvKey 环境标识，可以当作git仓库的分支名 */
        envKey: string;
        /** Name 环境名称 */
        name: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除API环境配置
*/
export interface ConfigManagerEnvironmentDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键ID */
        iD?: string;
        /** 主键ID */
        iDs?: string[];
        /** 按照主键ID排序 */
        byID?: number;
        /** 环境标识，可以当作git仓库的分支名 */
        envKey?: string;
        /** 环境标识，可以当作git仓库的分支名 */
        envKeys?: string[];
        /** 按照环境标识，可以当作git仓库的分支名排序 */
        byEnvKey?: number;
        /** 环境名称 */
        name?: string;
        /** 环境名称 */
        names?: string[];
        /** 按照环境名称排序 */
        byName?: number;
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
* 响应 - 删除API环境配置
*/
export interface ConfigManagerEnvironmentDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 创建单条API环境变量
*/
export interface ConfigManagerEnvironmentVariablePostReq {
    /**
        * 环境配置ID (必填)
        */
    envID: string;
    /**
        * 变量名 (必填)
        */
    varName: string;
    /**
        * 变量值 (必填)
        */
    varValue: string;
}
/**
* API环境变量
*/
export interface ConfigManagerEnvironmentVariablePostResp {
    /**
        * ID 主键ID
        */
    id: string;
    /**
        * EnvID 环境配置ID
        */
    envId: string;
    /**
        * VarName 变量名
        */
    varName: string;
    /**
        * VarValue 变量值
        */
    varValue: string;
    /**
        * CreatedAt 创建数据时间
        */
    createdAt?: string;
    /**
        * LastAt 更新数据时间
        */
    lastAt?: string;
    /**
        * DeletedAt 删除时间（逻辑删除）
        */
    deletedAt?: string;
}

/**
* 请求 - 更新API环境变量
*/
export interface ConfigManagerEnvironmentVariablePutReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键ID */
        iD?: string;
        /** 主键ID */
        iDs?: string[];
        /** 按照主键ID排序 */
        byID?: number;
        /** 环境配置ID */
        envID?: string;
        /** 环境配置ID */
        envIDs?: string[];
        /** 按照环境配置ID排序 */
        byEnvID?: number;
        /** 变量名 */
        varName?: string;
        /** 变量名 */
        varNames?: string[];
        /** 按照变量名排序 */
        byVarName?: number;
        /** 变量值 */
        varValue?: string;
        /** 变量值 */
        varValues?: string[];
        /** 按照变量值排序 */
        byVarValue?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除时间（逻辑删除）排序 */
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
        /** 环境配置ID */
        envID?: string;
        /** 变量名 */
        varName?: string;
        /** 变量值 */
        varValue?: string
    };
}
/**
* 响应 - 更新API环境变量
*/
export interface ConfigManagerEnvironmentVariablePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** ID 主键ID */
        id: string;
        /** EnvID 环境配置ID */
        envId: string;
        /** VarName 变量名 */
        varName: string;
        /** VarValue 变量值 */
        varValue: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除API环境变量
*/
export interface ConfigManagerEnvironmentVariableDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 主键ID */
        iD?: string;
        /** 主键ID */
        iDs?: string[];
        /** 按照主键ID排序 */
        byID?: number;
        /** 环境配置ID */
        envID?: string;
        /** 环境配置ID */
        envIDs?: string[];
        /** 按照环境配置ID排序 */
        byEnvID?: number;
        /** 变量名 */
        varName?: string;
        /** 变量名 */
        varNames?: string[];
        /** 按照变量名排序 */
        byVarName?: number;
        /** 变量值 */
        varValue?: string;
        /** 变量值 */
        varValues?: string[];
        /** 按照变量值排序 */
        byVarValue?: number;
        /** 按照创建数据时间排序 */
        byCreatedAt?: number;
        /** 按照更新数据时间排序 */
        byLastAt?: number;
        /** 按照删除时间（逻辑删除）排序 */
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
* 响应 - 删除API环境变量
*/
export interface ConfigManagerEnvironmentVariableDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询API环境变量
*/
export interface ConfigManagerEnvironmentVariablesGetReq {
    /**
        * 主键ID
        */
    iD?: string;
    /**
        * 主键ID
        */
    iDs?: string[];
    /**
        * 按照主键ID排序
        */
    byID?: number;
    /**
        * 环境配置ID
        */
    envID?: string;
    /**
        * 环境配置ID
        */
    envIDs?: string[];
    /**
        * 按照环境配置ID排序
        */
    byEnvID?: number;
    /**
        * 变量名
        */
    varName?: string;
    /**
        * 变量名
        */
    varNames?: string[];
    /**
        * 按照变量名排序
        */
    byVarName?: number;
    /**
        * 变量值
        */
    varValue?: string;
    /**
        * 变量值
        */
    varValues?: string[];
    /**
        * 按照变量值排序
        */
    byVarValue?: number;
    /**
        * 按照创建数据时间排序
        */
    byCreatedAt?: number;
    /**
        * 按照更新数据时间排序
        */
    byLastAt?: number;
    /**
        * 按照删除时间（逻辑删除）排序
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
* 响应 - 获取多个API环境变量
*/
export interface ConfigManagerEnvironmentVariablesGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** ID 主键ID */
        id: string;
        /** EnvID 环境配置ID */
        envId: string;
        /** VarName 变量名 */
        varName: string;
        /** VarValue 变量值 */
        varValue: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询API环境配置
*/
export interface ConfigManagerEnvironmentsGetReq {
    /**
        * 主键ID
        */
    iD?: string;
    /**
        * 主键ID
        */
    iDs?: string[];
    /**
        * 按照主键ID排序
        */
    byID?: number;
    /**
        * 环境标识，可以当作git仓库的分支名
        */
    envKey?: string;
    /**
        * 环境标识，可以当作git仓库的分支名
        */
    envKeys?: string[];
    /**
        * 按照环境标识，可以当作git仓库的分支名排序
        */
    byEnvKey?: number;
    /**
        * 环境名称
        */
    name?: string;
    /**
        * 环境名称
        */
    names?: string[];
    /**
        * 按照环境名称排序
        */
    byName?: number;
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
* 响应 - 获取多个API环境配置
*/
export interface ConfigManagerEnvironmentsGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** ID 主键ID */
        id: string;
        /** EnvKey 环境标识，可以当作git仓库的分支名 */
        envKey: string;
        /** Name 环境名称 */
        name: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}


