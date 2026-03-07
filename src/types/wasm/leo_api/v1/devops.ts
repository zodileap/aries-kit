import { Headers, WasmApiResponse } from "./api"

export interface DevopsInstance {
    /**
    * 创建单个Gitea仓库配置
    */
    gitRepoPost(data: GitRepoPostReq, headers?: Headers): Promise<WasmApiResponse<GitRepoPostResp>>;
    /**
    * 更新Gitea仓库配置
    */
    gitRepoPut(data: GitRepoPutReq, headers?: Headers): Promise<WasmApiResponse<GitRepoPutResp>>;
    /**
    * 获取单个Gitea仓库配置
    */
    gitRepoGet(params: GitRepoGetReq, headers?: Headers): Promise<WasmApiResponse<GitRepoGetResp>>;
    /**
    * 删除Gitea仓库配置
    */
    gitRepoDelete(params: GitRepoDeleteReq, headers?: Headers): Promise<WasmApiResponse<GitRepoDeleteResp>>;
    /**
    * 获取Git仓库详情
    */
    gitRepoDetailGet(params: GitRepoDetailGetReq, headers?: Headers): Promise<WasmApiResponse<GitRepoDetailGetResp>>;
    /**
    * 获取多个Gitea仓库配置
    */
    gitRepoListGet(params: GitRepoListGetReq, headers?: Headers): Promise<WasmApiResponse<GitRepoListGetResp>>;
    /**
    * 删除流水线扩展配置项
    */
    pipelineExtensionconfigDelete(params: PipelineExtensionconfigDeleteReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionconfigDeleteResp>>;
    /**
    * 创建多个流水线扩展配置项
    */
    pipelineExtensionconfigListPost(data: PipelineExtensionconfigListPostReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionconfigListPostResp>>;
    /**
    * 更新多个流水线扩展配置项
    */
    pipelineExtensionconfigListPut(data: PipelineExtensionconfigListPutReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionconfigListPutResp>>;
    /**
    * 获取多个流水线扩展配置项
    */
    pipelineExtensionconfigListGet(params: PipelineExtensionconfigListGetReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionconfigListGetResp>>;
    /**
    * 获取多个流水线扩展
    */
    pipelineExtensionListGet(params: PipelineExtensionListGetReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionListGetResp>>;
    /**
    * 创建单个流水线扩展
    */
    pipelineExtensionSinglePost(data: PipelineExtensionSinglePostReq, headers?: Headers): Promise<WasmApiResponse<PipelineExtensionSinglePostResp>>;
    /**
    * 获取流水线列表
    */
    pipelineListGet(params: PipelineListGetReq, headers?: Headers): Promise<WasmApiResponse<PipelineListGetResp>>;
    /**
    * 创建流水线
    */
    pipelineSinglePost(data: PipelineSinglePostReq, headers?: Headers): Promise<WasmApiResponse<PipelineSinglePostResp>>;
    /**
    * 获取流水线详情
    */
    pipelineSingleGet(params: PipelineSingleGetReq, headers?: Headers): Promise<WasmApiResponse<PipelineSingleGetResp>>;
    /**
    * 删除流水线
    */
    pipelineSingleDelete(params: PipelineSingleDeleteReq, headers?: Headers): Promise<WasmApiResponse<PipelineSingleDeleteResp>>;
}


/**
* 创建单条Gitea仓库配置
*/
export interface GitRepoPostReq {
    /**
        * 仓库来源, 1: Gitea 2: Github (必填)
        */
    gitOrigin: number;
    /**
        * 仓库名称 (必填)
        */
    name: string;
    /**
        * 仓库url (必填)
        */
    repoUrl: string;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径 (可选)
        */
    path?: string;
    /**
        * 仓库描述 (可选)
        */
    description?: string;
}
/**
* Gitea仓库配置
*/
export interface GitRepoPostResp {
    /**
        * Id 仓库配置ID
        */
    id: string;
    /**
        * GitOrigin 仓库来源, 1: Gitea 2: Github
        */
    gitOrigin: number;
    /**
        * Name 仓库名称
        */
    name: string;
    /**
        * RepoUrl 仓库url
        */
    repoUrl: string;
    /**
        * Path 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    path?: string;
    /**
        * Description 仓库描述
        */
    description?: string;
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
* 请求 - 更新Gitea仓库配置
*/
export interface GitRepoPutReq {
    /**
        * 查询条件
        */
    query: {
        /** 仓库配置ID */
        id?: string;
        /** 仓库配置ID */
        ids?: string[];
        /** 按照仓库配置ID排序 */
        byId?: number;
        /** 仓库来源, 1: Gitea 2: Github */
        gitOrigin?: number;
        /** 仓库来源, 1: Gitea 2: Github */
        gitOrigins?: number[];
        /** 按照仓库来源, 1: Gitea 2: Github排序 */
        byGitOrigin?: number;
        /** 仓库名称 */
        name?: string;
        /** 仓库名称 */
        names?: string[];
        /** 按照仓库名称排序 */
        byName?: number;
        /** 仓库url */
        repoUrl?: string;
        /** 仓库url */
        repoUrls?: string[];
        /** 按照仓库url排序 */
        byRepoUrl?: number;
        /** 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        paths?: string[];
        /** 按照仓库路径, 如果没有配置，则使用使用RepoURL的路径排序 */
        byPath?: number;
        /** 仓库描述 */
        description?: string;
        /** 仓库描述 */
        descriptions?: string[];
        /** 按照仓库描述排序 */
        byDescription?: number;
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
        /** 仓库来源, 1: Gitea 2: Github */
        gitOrigin?: number;
        /** 仓库名称 */
        name?: string;
        /** 仓库url */
        repoUrl?: string;
        /** 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** 仓库描述 */
        description?: string
    };
}
/**
* 响应 - 更新Gitea仓库配置
*/
export interface GitRepoPutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 仓库配置ID */
        id: string;
        /** GitOrigin 仓库来源, 1: Gitea 2: Github */
        gitOrigin: number;
        /** Name 仓库名称 */
        name: string;
        /** RepoUrl 仓库url */
        repoUrl: string;
        /** Path 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** Description 仓库描述 */
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
* 查询Gitea仓库配置
*/
export interface GitRepoGetReq {
    /**
        * 仓库配置ID
        */
    id?: string;
    /**
        * 仓库配置ID
        */
    ids?: string[];
    /**
        * 按照仓库配置ID排序
        */
    byId?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigin?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigins?: number[];
    /**
        * 按照仓库来源, 1: Gitea 2: Github排序
        */
    byGitOrigin?: number;
    /**
        * 仓库名称
        */
    name?: string;
    /**
        * 仓库名称
        */
    names?: string[];
    /**
        * 按照仓库名称排序
        */
    byName?: number;
    /**
        * 仓库url
        */
    repoUrl?: string;
    /**
        * 仓库url
        */
    repoUrls?: string[];
    /**
        * 按照仓库url排序
        */
    byRepoUrl?: number;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    path?: string;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    paths?: string[];
    /**
        * 按照仓库路径, 如果没有配置，则使用使用RepoURL的路径排序
        */
    byPath?: number;
    /**
        * 仓库描述
        */
    description?: string;
    /**
        * 仓库描述
        */
    descriptions?: string[];
    /**
        * 按照仓库描述排序
        */
    byDescription?: number;
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
* Gitea仓库配置
*/
export interface GitRepoGetResp {
    /**
        * Id 仓库配置ID
        */
    id: string;
    /**
        * GitOrigin 仓库来源, 1: Gitea 2: Github
        */
    gitOrigin: number;
    /**
        * Name 仓库名称
        */
    name: string;
    /**
        * RepoUrl 仓库url
        */
    repoUrl: string;
    /**
        * Path 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    path?: string;
    /**
        * Description 仓库描述
        */
    description?: string;
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
* 请求 - 删除Gitea仓库配置
*/
export interface GitRepoDeleteReq {
    /**
        * 查询条件
        */
    query: {
        /** 仓库配置ID */
        id?: string;
        /** 仓库配置ID */
        ids?: string[];
        /** 按照仓库配置ID排序 */
        byId?: number;
        /** 仓库来源, 1: Gitea 2: Github */
        gitOrigin?: number;
        /** 仓库来源, 1: Gitea 2: Github */
        gitOrigins?: number[];
        /** 按照仓库来源, 1: Gitea 2: Github排序 */
        byGitOrigin?: number;
        /** 仓库名称 */
        name?: string;
        /** 仓库名称 */
        names?: string[];
        /** 按照仓库名称排序 */
        byName?: number;
        /** 仓库url */
        repoUrl?: string;
        /** 仓库url */
        repoUrls?: string[];
        /** 按照仓库url排序 */
        byRepoUrl?: number;
        /** 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        paths?: string[];
        /** 按照仓库路径, 如果没有配置，则使用使用RepoURL的路径排序 */
        byPath?: number;
        /** 仓库描述 */
        description?: string;
        /** 仓库描述 */
        descriptions?: string[];
        /** 按照仓库描述排序 */
        byDescription?: number;
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
* 响应 - 删除Gitea仓库配置
*/
export interface GitRepoDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询Gitea仓库配置
*/
export interface GitRepoDetailGetReq {
    /**
        * 仓库配置ID
        */
    id?: string;
    /**
        * 仓库配置ID
        */
    ids?: string[];
    /**
        * 按照仓库配置ID排序
        */
    byId?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigin?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigins?: number[];
    /**
        * 按照仓库来源, 1: Gitea 2: Github排序
        */
    byGitOrigin?: number;
    /**
        * 仓库名称
        */
    name?: string;
    /**
        * 仓库名称
        */
    names?: string[];
    /**
        * 按照仓库名称排序
        */
    byName?: number;
    /**
        * 仓库url
        */
    repoUrl?: string;
    /**
        * 仓库url
        */
    repoUrls?: string[];
    /**
        * 按照仓库url排序
        */
    byRepoUrl?: number;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    path?: string;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    paths?: string[];
    /**
        * 按照仓库路径, 如果没有配置，则使用使用RepoURL的路径排序
        */
    byPath?: number;
    /**
        * 仓库描述
        */
    description?: string;
    /**
        * 仓库描述
        */
    descriptions?: string[];
    /**
        * 按照仓库描述排序
        */
    byDescription?: number;
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
* 响应 - 获取Git仓库详情
*/
export interface GitRepoDetailGetResp {
    /**
        * Git仓库基本信息
        */
    gitRepo: {
        /** Id 仓库配置ID */
        id: string;
        /** GitOrigin 仓库来源, 1: Gitea 2: Github */
        gitOrigin: number;
        /** Name 仓库名称 */
        name: string;
        /** RepoUrl 仓库url */
        repoUrl: string;
        /** Path 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** Description 仓库描述 */
        description?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 提交总数
        */
    commitCount?: number;
    /**
        * 所有版本记录
        */
    releases: {
        /** 版本ID */
        id?: string;
        /** 标签名称 */
        tag_name?: string;
        /** 目标提交 */
        target_commitish?: string;
        /** 版本标题 */
        name?: string;
        /** 版本说明 */
        body?: string;
        /** 版本URL */
        url?: string;
        /** 版本HTML URL */
        htmlUrl?: string;
        /** tar包URL */
        tarballUrl?: string;
        /** zip包URL */
        zipballUrl?: string;
        /** 是否草稿 */
        draft?: boolean;
        /** 是否预发布 */
        prerelease?: boolean;
        /** 创建时间 */
        createdAt?: Record<string, unknown>;
        /** 发布时间 */
        publishedAt?: Record<string, unknown>;
        /** 用户ID 发布者 */
        author?: {
            id?: string;
            /** 用户名称 */
            name?: string;
            /** 用户邮箱 */
            email?: string;
            /** 用户名 */
            username?: string;
            /** 用户全名 */
            fullName?: string;
            /** 用户头像URL */
            avatarUrl?: string
        };
        /** 附件ID 附件列表 */
        assets?: {
            id?: string;
            /** 附件名称 */
            name?: string;
            /** 附件大小 */
            size?: string;
            /** 下载次数 */
            downloadCount?: string;
            /** 创建时间 */
            createdAt?: Record<string, unknown>;
            /** 附件URL */
            url?: string;
            /** 附件浏览URL */
            browserUrl?: string
        }[]
    }[];
}

/**
* 查询Gitea仓库配置
*/
export interface GitRepoListGetReq {
    /**
        * 仓库配置ID
        */
    id?: string;
    /**
        * 仓库配置ID
        */
    ids?: string[];
    /**
        * 按照仓库配置ID排序
        */
    byId?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigin?: number;
    /**
        * 仓库来源, 1: Gitea 2: Github
        */
    gitOrigins?: number[];
    /**
        * 按照仓库来源, 1: Gitea 2: Github排序
        */
    byGitOrigin?: number;
    /**
        * 仓库名称
        */
    name?: string;
    /**
        * 仓库名称
        */
    names?: string[];
    /**
        * 按照仓库名称排序
        */
    byName?: number;
    /**
        * 仓库url
        */
    repoUrl?: string;
    /**
        * 仓库url
        */
    repoUrls?: string[];
    /**
        * 按照仓库url排序
        */
    byRepoUrl?: number;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    path?: string;
    /**
        * 仓库路径, 如果没有配置，则使用使用RepoURL的路径
        */
    paths?: string[];
    /**
        * 按照仓库路径, 如果没有配置，则使用使用RepoURL的路径排序
        */
    byPath?: number;
    /**
        * 仓库描述
        */
    description?: string;
    /**
        * 仓库描述
        */
    descriptions?: string[];
    /**
        * 按照仓库描述排序
        */
    byDescription?: number;
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
* 响应 - 获取多个Gitea仓库配置
*/
export interface GitRepoListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 仓库配置ID */
        id: string;
        /** GitOrigin 仓库来源, 1: Gitea 2: Github */
        gitOrigin: number;
        /** Name 仓库名称 */
        name: string;
        /** RepoUrl 仓库url */
        repoUrl: string;
        /** Path 仓库路径, 如果没有配置，则使用使用RepoURL的路径 */
        path?: string;
        /** Description 仓库描述 */
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
* 请求 - 删除流水线扩展配置项
*/
export interface PipelineExtensionconfigDeleteReq {
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
        /** 关联的扩展ID */
        extensionId?: string;
        /** 关联的扩展ID */
        extensionIds?: string[];
        /** 按照关联的扩展ID排序 */
        byExtensionId?: number;
        /** 扩展配置的名称 */
        name?: string;
        /** 扩展配置的名称 */
        names?: string[];
        /** 按照扩展配置的名称排序 */
        byName?: number;
        /** 扩展配置的唯一标识符 */
        code?: string;
        /** 扩展配置的唯一标识符 */
        codes?: string[];
        /** 按照扩展配置的唯一标识符排序 */
        byCode?: number;
        /** 扩展配置的描述 */
        description?: string;
        /** 扩展配置的描述 */
        descriptions?: string[];
        /** 按照扩展配置的描述排序 */
        byDescription?: number;
        /** 是否必须 */
        required?: boolean;
        /** 是否必须 */
        requireds?: boolean[];
        /** 按照是否必须排序 */
        byRequired?: number;
        /** 扩展配置的类型(text/number/select等) */
        configType?: number;
        /** 扩展配置的类型(text/number/select等) */
        configTypes?: number[];
        /** 按照扩展配置的类型(text/number/select等)排序 */
        byConfigType?: number;
        /** 默认值 */
        defaultValue?: string;
        /** 默认值 */
        defaultValues?: string[];
        /** 按照默认值排序 */
        byDefaultValue?: number;
        /** 扩展配置的选项(JSON格式，用于select类型) */
        option?: Record<string, unknown>;
        /** 扩展配置的选项(JSON格式，用于select类型) */
        options?: Record<string, unknown>[];
        /** 按照 扩展配置的选项(JSON格式，用于select类型)排序 */
        byOption?: number;
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
* 响应 - 删除流水线扩展配置项
*/
export interface PipelineExtensionconfigDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 请求 - 创建多个流水线扩展配置项
*/
export interface PipelineExtensionconfigListPostReq {
    /**
        * 创建的数据
        */
    list: {
        /** 关联的扩展ID (必填) */
        extensionId: string;
        /** 扩展配置的名称 (必填) */
        name: string;
        /** 扩展配置的唯一标识符 (必填) */
        code: string;
        /** 扩展配置的描述 (可选) */
        description?: string;
        /** 是否必须 (可选) */
        required?: boolean;
        /** 扩展配置的类型(text/number/select等) (可选) */
        configType?: number;
        /** 默认值 (可选) */
        defaultValue?: string;
        /** 扩展配置的选项(JSON格式，用于select类型) (可选) */
        option?: Record<string, unknown>
    }[];
}
/**
* 响应 - 创建多个流水线扩展配置项
*/
export interface PipelineExtensionconfigListPostResp {
    /**
        * 创建的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** ExtensionId 关联的扩展ID */
        extensionId: string;
        /** Name 扩展配置的名称 */
        name: string;
        /** Code 扩展配置的唯一标识符 */
        code: string;
        /** Description 扩展配置的描述 */
        description?: string;
        /** Required 是否必须 */
        required?: boolean;
        /** ConfigType 扩展配置的类型(text/number/select等) */
        configType?: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Option  扩展配置的选项(JSON格式，用于select类型) */
        options?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 更新多个流水线扩展配置项
*/
export interface PipelineExtensionconfigListPutReq {
    /**
        * 更新的数据
        */
    list: {
        /** 主键Id 查询条件 */
        query: {
            id?: string;
            /** 主键Id */
            ids?: string[];
            /** 按照主键Id排序 */
            byId?: number;
            /** 关联的扩展ID */
            extensionId?: string;
            /** 关联的扩展ID */
            extensionIds?: string[];
            /** 按照关联的扩展ID排序 */
            byExtensionId?: number;
            /** 扩展配置的名称 */
            name?: string;
            /** 扩展配置的名称 */
            names?: string[];
            /** 按照扩展配置的名称排序 */
            byName?: number;
            /** 扩展配置的唯一标识符 */
            code?: string;
            /** 扩展配置的唯一标识符 */
            codes?: string[];
            /** 按照扩展配置的唯一标识符排序 */
            byCode?: number;
            /** 扩展配置的描述 */
            description?: string;
            /** 扩展配置的描述 */
            descriptions?: string[];
            /** 按照扩展配置的描述排序 */
            byDescription?: number;
            /** 是否必须 */
            required?: boolean;
            /** 是否必须 */
            requireds?: boolean[];
            /** 按照是否必须排序 */
            byRequired?: number;
            /** 扩展配置的类型(text/number/select等) */
            configType?: number;
            /** 扩展配置的类型(text/number/select等) */
            configTypes?: number[];
            /** 按照扩展配置的类型(text/number/select等)排序 */
            byConfigType?: number;
            /** 默认值 */
            defaultValue?: string;
            /** 默认值 */
            defaultValues?: string[];
            /** 按照默认值排序 */
            byDefaultValue?: number;
            /** 扩展配置的选项(JSON格式，用于select类型) */
            option?: Record<string, unknown>;
            /** 扩展配置的选项(JSON格式，用于select类型) */
            options?: Record<string, unknown>[];
            /** 按照 扩展配置的选项(JSON格式，用于select类型)排序 */
            byOption?: number;
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
        /** 关联的扩展ID 更新内容 */
        update: {
            extensionId?: string;
            /** 扩展配置的名称 */
            name?: string;
            /** 扩展配置的唯一标识符 */
            code?: string;
            /** 扩展配置的描述 */
            description?: string;
            /** 是否必须 */
            required?: boolean;
            /** 扩展配置的类型(text/number/select等) */
            configType?: number;
            /** 默认值 */
            defaultValue?: string;
            /** 扩展配置的选项(JSON格式，用于select类型) */
            option?: Record<string, unknown>
        }
    }[];
}
/**
* 响应 - 更新多个流水线扩展配置项
*/
export interface PipelineExtensionconfigListPutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** ExtensionId 关联的扩展ID */
        extensionId: string;
        /** Name 扩展配置的名称 */
        name: string;
        /** Code 扩展配置的唯一标识符 */
        code: string;
        /** Description 扩展配置的描述 */
        description?: string;
        /** Required 是否必须 */
        required?: boolean;
        /** ConfigType 扩展配置的类型(text/number/select等) */
        configType?: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Option  扩展配置的选项(JSON格式，用于select类型) */
        options?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询流水线扩展配置项
*/
export interface PipelineExtensionconfigListGetReq {
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
        * 关联的扩展ID
        */
    extensionId?: string;
    /**
        * 关联的扩展ID
        */
    extensionIds?: string[];
    /**
        * 按照关联的扩展ID排序
        */
    byExtensionId?: number;
    /**
        * 扩展配置的名称
        */
    name?: string;
    /**
        * 扩展配置的名称
        */
    names?: string[];
    /**
        * 按照扩展配置的名称排序
        */
    byName?: number;
    /**
        * 扩展配置的唯一标识符
        */
    code?: string;
    /**
        * 扩展配置的唯一标识符
        */
    codes?: string[];
    /**
        * 按照扩展配置的唯一标识符排序
        */
    byCode?: number;
    /**
        * 扩展配置的描述
        */
    description?: string;
    /**
        * 扩展配置的描述
        */
    descriptions?: string[];
    /**
        * 按照扩展配置的描述排序
        */
    byDescription?: number;
    /**
        * 是否必须
        */
    required?: boolean;
    /**
        * 是否必须
        */
    requireds?: boolean[];
    /**
        * 按照是否必须排序
        */
    byRequired?: number;
    /**
        * 扩展配置的类型(text/number/select等)
        */
    configType?: number;
    /**
        * 扩展配置的类型(text/number/select等)
        */
    configTypes?: number[];
    /**
        * 按照扩展配置的类型(text/number/select等)排序
        */
    byConfigType?: number;
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
        *  扩展配置的选项(JSON格式，用于select类型)
        */
    option?: Record<string, unknown>;
    /**
        *  扩展配置的选项(JSON格式，用于select类型)
        */
    options?: Record<string, unknown>[];
    /**
        * 按照 扩展配置的选项(JSON格式，用于select类型)排序
        */
    byOption?: number;
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
* 响应 - 获取多个流水线扩展配置项
*/
export interface PipelineExtensionconfigListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** ExtensionId 关联的扩展ID */
        extensionId: string;
        /** Name 扩展配置的名称 */
        name: string;
        /** Code 扩展配置的唯一标识符 */
        code: string;
        /** Description 扩展配置的描述 */
        description?: string;
        /** Required 是否必须 */
        required?: boolean;
        /** ConfigType 扩展配置的类型(text/number/select等) */
        configType?: number;
        /** DefaultValue 默认值 */
        defaultValue?: string;
        /** Option  扩展配置的选项(JSON格式，用于select类型) */
        options?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询流水线扩展
*/
export interface PipelineExtensionListGetReq {
    /**
        * 主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定
        */
    id?: string;
    /**
        * 主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定
        */
    ids?: string[];
    /**
        * 按照主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定排序
        */
    byId?: number;
    /**
        * 扩展名称，【国际化后会显示在前端】
        */
    name?: string;
    /**
        * 扩展名称，【国际化后会显示在前端】
        */
    names?: string[];
    /**
        * 按照扩展名称，【国际化后会显示在前端】排序
        */
    byName?: number;
    /**
        * 扩展唯一标识符
        */
    code?: string;
    /**
        * 扩展唯一标识符
        */
    codes?: string[];
    /**
        * 按照扩展唯一标识符排序
        */
    byCode?: number;
    /**
        * 扩展描述
        */
    description?: string;
    /**
        * 扩展描述
        */
    descriptions?: string[];
    /**
        * 按照扩展描述排序
        */
    byDescription?: number;
    /**
        * 扩展版本
        */
    version?: string;
    /**
        * 扩展版本
        */
    versions?: string[];
    /**
        * 按照扩展版本排序
        */
    byVersion?: number;
    /**
        * 是否启用
        */
    enabled?: number;
    /**
        * 是否启用
        */
    enableds?: number[];
    /**
        * 按照是否启用排序
        */
    byEnabled?: number;
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
* 响应 - 获取多个流水线扩展
*/
export interface PipelineExtensionListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定 */
        id: string;
        /** Name 扩展名称，【国际化后会显示在前端】 */
        name: string;
        /** Code 扩展唯一标识符 */
        code: string;
        /** Description 扩展描述 */
        description?: string;
        /** Version 扩展版本 */
        version: string;
        /** Enabled 是否启用 */
        enabled?: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 创建单条流水线扩展
*/
export interface PipelineExtensionSinglePostReq {
    /**
        * 扩展名称，【国际化后会显示在前端】 (必填)
        */
    name: string;
    /**
        * 扩展唯一标识符 (必填)
        */
    code: string;
    /**
        * 扩展描述 (可选)
        */
    description?: string;
    /**
        * 扩展版本 (必填)
        */
    version: string;
    /**
        * 是否启用 (可选)
        */
    enabled?: number;
}
/**
* 流水线扩展
*/
export interface PipelineExtensionSinglePostResp {
    /**
        * Id 主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定
        */
    id: string;
    /**
        * Name 扩展名称，【国际化后会显示在前端】
        */
    name: string;
    /**
        * Code 扩展唯一标识符
        */
    code: string;
    /**
        * Description 扩展描述
        */
    description?: string;
    /**
        * Version 扩展版本
        */
    version: string;
    /**
        * Enabled 是否启用
        */
    enabled?: number;
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
* 
*/
export interface PipelineListGetReq {
}
/**
* 响应 - 获取获取列表
*/
export interface PipelineListGetResp {
    /**
        * 项目列表
        */
    pipelines: {
        /** Id 流水线ID */
        id: string;
        /** Name 流水线名称 */
        name: string;
        /** ExtensionIds 使用的扩展，一个流水线会有多个扩展 */
        extensionIds?: string[];
        /** Description 流水线描述 */
        description?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 创建流水线
*/
export interface PipelineSinglePostReq {
    /**
        * 流水线名称
        */
    name: string;
    /**
        * 扩展
        */
    extensions: {
        /** 扩展ID */
        extensionId?: string;
        /** 配置ID 参数 */
        params?: {
            configId?: string;
            /** 值 */
            value?: string
        }[]
    }[];
    /**
        * 流水线描述
        */
    description?: string;
}
/**
* 响应 - 创建流水线
*/
export interface PipelineSinglePostResp {
    /**
        * 是否创建成功
        */
    success?: boolean;
}

/**
* 请求 - 获取项目详情
*/
export interface PipelineSingleGetReq {
    /**
        * 流水线ID
        */
    id: string;
}
/**
* 响应 - 获取项目详情
*/
export interface PipelineSingleGetResp {
    /**
        * 流水线信息
        */
    pipeline: {
        /** Id 流水线ID */
        id: string;
        /** Name 流水线名称 */
        name: string;
        /** ExtensionIds 使用的扩展，一个流水线会有多个扩展 */
        extensionIds?: string[];
        /** Description 流水线描述 */
        description?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 扩展信息
        */
    extensions: {
        /** Id 主键Id，之所以使用uuid是因为扩展可能需要和webSocket结合，那需要用uuid绑定 扩展信息 */
        extension?: {
            id: string;
            /** Name 扩展名称，【国际化后会显示在前端】 */
            name: string;
            /** Code 扩展唯一标识符 */
            code: string;
            /** Description 扩展描述 */
            description?: string;
            /** Version 扩展版本 */
            version: string;
            /** Enabled 是否启用 */
            enabled?: number;
            /** CreatedAt 创建数据时间 */
            createdAt?: string;
            /** LastAt 更新数据时间 */
            lastAt?: string;
            /** DeletedAt 删除数据时间（逻辑删除） */
            deletedAt?: string
        };
        /** Id 主键Id 配置信息 */
        params?: {
            /** ExtensionId 关联的扩展ID */
            config?: {
                id: string;
                extensionId: string;
                /** Name 扩展配置的名称 */
                name: string;
                /** Code 扩展配置的唯一标识符 */
                code: string;
                /** Description 扩展配置的描述 */
                description?: string;
                /** Required 是否必须 */
                required?: boolean;
                /** ConfigType 扩展配置的类型(text/number/select等) */
                configType?: number;
                /** DefaultValue 默认值 */
                defaultValue?: string;
                /** Option  扩展配置的选项(JSON格式，用于select类型) */
                options?: string;
                /** CreatedAt 创建数据时间 */
                createdAt?: string;
                /** LastAt 更新数据时间 */
                lastAt?: string;
                /** DeletedAt 删除数据时间（逻辑删除） */
                deletedAt?: string
            }
        }[];
        /** 值 */
        value?: string
    }[];
}

/**
* 请求 - 删除项目
*/
export interface PipelineSingleDeleteReq {
    /**
        * 项目ID
        */
    id: string;
}
/**
* 响应 - 删除项目
*/
export interface PipelineSingleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}


