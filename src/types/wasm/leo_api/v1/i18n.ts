import { Headers, WasmApiResponse } from "./api"
export interface I18nInstance {
    /**
    * 构建i18n JSON并推送
    * url: i18n/i18n/v1/build_i18n_json
    */
    i18nBuildI18nJsonPost(data: I18nBuildI18nJsonPostReq, headers?: Headers): Promise<WasmApiResponse<I18nBuildI18nJsonPostResp>>;
    /**
    * 获取模块的Key树
    * url: i18n/i18n/v1/get_module_key_tree
    */
    i18nGetModuleKeyTreeGet(params: I18nGetModuleKeyTreeGetReq, headers?: Headers): Promise<WasmApiResponse<I18nGetModuleKeyTreeGetResp>>;
    /**
    * 创建单个国际化翻译键
    * url: i18n/i18n/v1/key
    */
    i18nKeyPost(data: I18nKeyPostReq, headers?: Headers): Promise<WasmApiResponse<I18nKeyPostResp>>;
    /**
    * 更新国际化翻译键
    * url: i18n/i18n/v1/key
    */
    i18nKeyPut(data: I18nKeyPutReq, headers?: Headers): Promise<WasmApiResponse<I18nKeyPutResp>>;
    /**
    * 删除键和关联的翻译
    * url: i18n/i18n/v1/key
    */
    i18nKeyDelete(params: I18nKeyDeleteReq, headers?: Headers): Promise<WasmApiResponse<I18nKeyDeleteResp>>;
    /**
    * 创建翻译键（包含翻译内容）
    * url: i18n/i18n/v1/key-with-translations
    */
    i18nKeyWithTranslationsPost(data: I18nKeyWithTranslationsPostReq, headers?: Headers): Promise<WasmApiResponse<I18nKeyWithTranslationsPostResp>>;
    /**
    * 更新翻译键（包含翻译内容）
    * url: i18n/i18n/v1/key-with-translations
    */
    i18nKeyWithTranslationsPut(data: I18nKeyWithTranslationsPutReq, headers?: Headers): Promise<WasmApiResponse<I18nKeyWithTranslationsPutResp>>;
    /**
    * 创建单个支持的语言
    * url: i18n/i18n/v1/language
    */
    i18nLanguagePost(data: I18nLanguagePostReq, headers?: Headers): Promise<WasmApiResponse<I18nLanguagePostResp>>;
    /**
    * 更新支持的语言
    * url: i18n/i18n/v1/language
    */
    i18nLanguagePut(data: I18nLanguagePutReq, headers?: Headers): Promise<WasmApiResponse<I18nLanguagePutResp>>;
    /**
    * 删除支持的语言
    * url: i18n/i18n/v1/language
    */
    i18nLanguageDelete(params: I18nLanguageDeleteReq, headers?: Headers): Promise<WasmApiResponse<I18nLanguageDeleteResp>>;
    /**
    * 获取多个支持的语言
    * url: i18n/i18n/v1/language-list
    */
    i18nLanguageListGet(params: I18nLanguageListGetReq, headers?: Headers): Promise<WasmApiResponse<I18nLanguageListGetResp>>;
    /**
    * 创建模块（带语言关联）
    * url: i18n/i18n/v1/module
    */
    i18nModulePost(data: I18nModulePostReq, headers?: Headers): Promise<WasmApiResponse<I18nModulePostResp>>;
    /**
    * 更新模块（带语言关联）
    * url: i18n/i18n/v1/module
    */
    i18nModulePut(data: I18nModulePutReq, headers?: Headers): Promise<WasmApiResponse<I18nModulePutResp>>;
    /**
    * 获取单个国际化模块
    * url: i18n/i18n/v1/module
    */
    i18nModuleGet(params: I18nModuleGetReq, headers?: Headers): Promise<WasmApiResponse<I18nModuleGetResp>>;
    /**
    * 删除国际化模块
    * url: i18n/i18n/v1/module
    */
    i18nModuleDelete(params: I18nModuleDeleteReq, headers?: Headers): Promise<WasmApiResponse<I18nModuleDeleteResp>>;
    /**
    * 得到模块的语言列表
    * url: i18n/i18n/v1/module/language-list
    */
    i18nModulelanguageListGet(params: I18nModulelanguageListGetReq, headers?: Headers): Promise<WasmApiResponse<I18nModulelanguageListGetResp>>;
    /**
    * 获取多个国际化模块
    * url: i18n/i18n/v1/module-list
    */
    i18nModuleListGet(params: I18nModuleListGetReq, headers?: Headers): Promise<WasmApiResponse<I18nModuleListGetResp>>;
    /**
    * 删除国际化翻译内容
    * url: i18n/i18n/v1/translation
    */
    i18nTranslationDelete(params: I18nTranslationDeleteReq, headers?: Headers): Promise<WasmApiResponse<I18nTranslationDeleteResp>>;
    /**
    * 创建多个国际化翻译内容
    * url: i18n/i18n/v1/translation-list
    */
    i18nTranslationListPost(data: I18nTranslationListPostReq, headers?: Headers): Promise<WasmApiResponse<I18nTranslationListPostResp>>;
    /**
    * 更新多个国际化翻译内容
    * url: i18n/i18n/v1/translation-list
    */
    i18nTranslationListPut(data: I18nTranslationListPutReq, headers?: Headers): Promise<WasmApiResponse<I18nTranslationListPutResp>>;
}


/**
* 
*/
export interface I18nBuildI18nJsonPostReq {
}
/**
* 响应 - 构建i18n JSON并推送
*/
export interface I18nBuildI18nJsonPostResp {
    /**
        * 是否成功
        */
    success?: boolean;
    /**
        * 提交ID
        */
    commitId?: string;
}

/**
* 请求 - 获取模块的Key树
*/
export interface I18nGetModuleKeyTreeGetReq {
    /**
        * 模块ID
        */
    moduleId: string;
    /**
        * 树节点模式
        */
    mode: string;
    /**
        * 可选的语言ID，指定时只返回该语言的翻译
        */
    languageId?: string;
    /**
        * 可选的键ID，指定时只返回该键的信息
        */
    keyId?: string;
}
/**
* 响应 - 获取模块的Key树
*/
export interface I18nGetModuleKeyTreeGetResp {
    /**
        * 基于Key的扁平列表 (当mode=key时返回)
        */
    keyList: {
        /** 键ID */
        id: string;
        /** 模块ID */
        moduleId: string;
        /** 完整路径 */
        path: string;
        /** 键名 */
        key: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** 描述 */
        description?: string;
        /** 翻译值 以语言代码为键的翻译映射 */
        translations?: Record<string, {
            value?: string;
            /** 语言ID */
            languageId?: string;
            /** 键ID */
            keyId?: string
        }>
    }[];
    /**
        * 基于语言的扁平列表 (当mode=language时返回)
        */
    languages: {
        /** 语言ID */
        id?: string;
        /** 语言代码 */
        code?: string;
        /** 语言名称 */
        name?: string;
        /** 键ID 该语言下的所有键 */
        keys?: {
            id?: string;
            /** 模块ID */
            moduleId?: string;
            /** 完整路径 */
            path?: string;
            /** 键名 */
            key?: string;
            /** 描述 */
            description?: string;
            /** 翻译值 对应语言的翻译 */
            translation?: {
                value?: string;
                /** 语言ID */
                languageId?: string;
                /** 键ID */
                keyId?: string
            }
        }[]
    }[];
    /**
        * 所有支持的语言列表
        */
    allLanguages: {
        /** Id 主键Id */
        id: string;
        /** Code 语言代码(如: en-US, zh-CN) */
        code: string;
        /** Name 语言名称(如: English, 中文) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 创建单条国际化翻译键
*/
export interface I18nKeyPostReq {
    /**
        * 所属模块ID (必填)
        */
    moduleId: string;
    /**
        * 键名(如: title) (必填)
        */
    key: string;
    /**
        * 描述(可选) (自动填充)
        */
    description?: string;
    /**
        * 是否启用 (自动填充)
        */
    enabled?: number;
}
/**
* 国际化翻译键
*/
export interface I18nKeyPostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * ModuleId 所属模块ID
        */
    moduleId: string;
    /**
        * Key 键名(如: title)
        */
    key: string;
    /**
        * Description 描述(可选)
        */
    description?: string;
    /**
        * Enabled 是否启用
        */
    enabled: number;
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
* 请求 - 更新国际化翻译键
*/
export interface I18nKeyPutReq {
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
        /** 所属模块ID */
        moduleId?: string;
        /** 所属模块ID */
        moduleIds?: string[];
        /** 按照所属模块ID排序 */
        byModuleId?: number;
        /** 键名(如: title) */
        key?: string;
        /** 键名(如: title) */
        keys?: string[];
        /** 按照键名(如: title)排序 */
        byKey?: number;
        /** 描述(可选) */
        description?: string;
        /** 描述(可选) */
        descriptions?: string[];
        /** 按照描述(可选)排序 */
        byDescription?: number;
        /** 是否启用 */
        enabled?: number;
        /** 是否启用 */
        enableds?: number[];
        /** 按照是否启用排序 */
        byEnabled?: number;
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
        /** 所属模块ID */
        moduleId?: string;
        /** 键名(如: title) */
        key?: string;
        /** 描述(可选) */
        description?: string;
        /** 是否启用 */
        enabled?: number
    };
}
/**
* 响应 - 更新国际化翻译键
*/
export interface I18nKeyPutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** ModuleId 所属模块ID */
        moduleId: string;
        /** Key 键名(如: title) */
        key: string;
        /** Description 描述(可选) */
        description?: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除键和关联的翻译
*/
export interface I18nKeyDeleteReq {
    /**
        * 键查询条件
        */
    query: {
        /** 主键Id */
        id?: string;
        /** 主键Id */
        ids?: string[];
        /** 按照主键Id排序 */
        byId?: number;
        /** 所属模块ID */
        moduleId?: string;
        /** 所属模块ID */
        moduleIds?: string[];
        /** 按照所属模块ID排序 */
        byModuleId?: number;
        /** 键名(如: title) */
        key?: string;
        /** 键名(如: title) */
        keys?: string[];
        /** 按照键名(如: title)排序 */
        byKey?: number;
        /** 描述(可选) */
        description?: string;
        /** 描述(可选) */
        descriptions?: string[];
        /** 按照描述(可选)排序 */
        byDescription?: number;
        /** 是否启用 */
        enabled?: number;
        /** 是否启用 */
        enableds?: number[];
        /** 按照是否启用排序 */
        byEnabled?: number;
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
* 响应 - 删除键和关联的翻译
*/
export interface I18nKeyDeleteResp {
    /**
        * 是否成功
        */
    success?: boolean;
}

/**
* 请求 - 创建翻译键（包含翻译内容）
*/
export interface I18nKeyWithTranslationsPostReq {
    /**
        * 模块ID
        */
    moduleId: string;
    /**
        * 键名
        */
    key: string;
    /**
        * 描述
        */
    description?: string;
    /**
        * 翻译内容列表
        */
    translations: {
        /** 语言ID */
        languageId: string;
        /** 翻译值 */
        value: string
    }[];
}
/**
* 响应 - 创建翻译键
*/
export interface I18nKeyWithTranslationsPostResp {
    /**
        * 创建的键
        */
    key: {
        /** Id 主键Id */
        id: string;
        /** ModuleId 所属模块ID */
        moduleId: string;
        /** Key 键名(如: title) */
        key: string;
        /** Description 描述(可选) */
        description?: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 创建的翻译内容
        */
    translations: {
        /** Id 主键Id */
        id: string;
        /** KeyId 关联的键ID */
        keyId: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** Value 翻译值 */
        value: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 更新翻译键（包含翻译内容）
*/
export interface I18nKeyWithTranslationsPutReq {
    /**
        * 键ID
        */
    id: string;
    /**
        * 键名
        */
    key?: string;
    /**
        * 描述
        */
    description?: string;
    /**
        * 翻译内容列表（会覆盖所有现有翻译）
        */
    translations: {
        /** 语言ID */
        languageId: string;
        /** 翻译值 */
        value: string
    }[];
}
/**
* 响应 - 更新翻译键
*/
export interface I18nKeyWithTranslationsPutResp {
    /**
        * 更新的键
        */
    key: {
        /** Id 主键Id */
        id: string;
        /** ModuleId 所属模块ID */
        moduleId: string;
        /** Key 键名(如: title) */
        key: string;
        /** Description 描述(可选) */
        description?: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 更新的翻译内容
        */
    translations: {
        /** Id 主键Id */
        id: string;
        /** KeyId 关联的键ID */
        keyId: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** Value 翻译值 */
        value: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 创建单条支持的语言
*/
export interface I18nLanguagePostReq {
    /**
        * 语言代码(如: en-US, zh-CN) (必填)
        */
    code: string;
    /**
        * 语言名称(如: English, 中文) (必填)
        */
    name: string;
    /**
        * 是否启用 (自动填充)
        */
    enabled?: number;
}
/**
* 支持的语言
*/
export interface I18nLanguagePostResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Code 语言代码(如: en-US, zh-CN)
        */
    code: string;
    /**
        * Name 语言名称(如: English, 中文)
        */
    name: string;
    /**
        * Enabled 是否启用
        */
    enabled: number;
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
* 请求 - 更新支持的语言
*/
export interface I18nLanguagePutReq {
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
        /** 语言代码(如: en-US, zh-CN) */
        code?: string;
        /** 语言代码(如: en-US, zh-CN) */
        codes?: string[];
        /** 按照语言代码(如: en-US, zh-CN)排序 */
        byCode?: number;
        /** 语言名称(如: English, 中文) */
        name?: string;
        /** 语言名称(如: English, 中文) */
        names?: string[];
        /** 按照语言名称(如: English, 中文)排序 */
        byName?: number;
        /** 是否启用 */
        enabled?: number;
        /** 是否启用 */
        enableds?: number[];
        /** 按照是否启用排序 */
        byEnabled?: number;
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
        /** 语言代码(如: en-US, zh-CN) */
        code?: string;
        /** 语言名称(如: English, 中文) */
        name?: string;
        /** 是否启用 */
        enabled?: number
    };
}
/**
* 响应 - 更新支持的语言
*/
export interface I18nLanguagePutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Code 语言代码(如: en-US, zh-CN) */
        code: string;
        /** Name 语言名称(如: English, 中文) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除支持的语言
*/
export interface I18nLanguageDeleteReq {
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
        /** 语言代码(如: en-US, zh-CN) */
        code?: string;
        /** 语言代码(如: en-US, zh-CN) */
        codes?: string[];
        /** 按照语言代码(如: en-US, zh-CN)排序 */
        byCode?: number;
        /** 语言名称(如: English, 中文) */
        name?: string;
        /** 语言名称(如: English, 中文) */
        names?: string[];
        /** 按照语言名称(如: English, 中文)排序 */
        byName?: number;
        /** 是否启用 */
        enabled?: number;
        /** 是否启用 */
        enableds?: number[];
        /** 按照是否启用排序 */
        byEnabled?: number;
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
* 响应 - 删除支持的语言
*/
export interface I18nLanguageDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 查询支持的语言
*/
export interface I18nLanguageListGetReq {
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
        * 语言代码(如: en-US, zh-CN)
        */
    code?: string;
    /**
        * 语言代码(如: en-US, zh-CN)
        */
    codes?: string[];
    /**
        * 按照语言代码(如: en-US, zh-CN)排序
        */
    byCode?: number;
    /**
        * 语言名称(如: English, 中文)
        */
    name?: string;
    /**
        * 语言名称(如: English, 中文)
        */
    names?: string[];
    /**
        * 按照语言名称(如: English, 中文)排序
        */
    byName?: number;
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
* 响应 - 获取多个支持的语言
*/
export interface I18nLanguageListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Code 语言代码(如: en-US, zh-CN) */
        code: string;
        /** Name 语言名称(如: English, 中文) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 创建模块（带语言关联）
*/
export interface I18nModulePostReq {
    /**
        * 模块代码
        */
    code: string;
    /**
        * 模块名称
        */
    name: string;
    /**
        * 关联的语言ID列表
        */
    languageIds: string[];
    /**
        * 可选的父模块ID
        */
    parentId?: string;
}
/**
* 响应 - 创建模块
*/
export interface I18nModulePostResp {
    /**
        * 创建的模块
        */
    module: {
        /** Id 主键Id */
        id: string;
        /** Code 模块代码(如: user, system) */
        code: string;
        /** Name 模块名称(如: 用户模块, 系统模块) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** ParentId 父模块ID */
        parentId?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 创建的语言关联
        */
    languageRels: {
        /** Id 主键Id */
        id: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** ModuleId 模块ID */
        moduleId: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 更新模块（带语言关联）
*/
export interface I18nModulePutReq {
    /**
        * 模块ID
        */
    id: string;
    /**
        * 模块代码
        */
    code?: string;
    /**
        * 模块名称
        */
    name?: string;
    /**
        * 更新后的语言ID列表
        */
    languageIds: string[];
    /**
        * 可选的父模块ID
        */
    parentId?: string;
}
/**
* 响应 - 更新模块
*/
export interface I18nModulePutResp {
    /**
        * 更新的模块
        */
    module: {
        /** Id 主键Id */
        id: string;
        /** Code 模块代码(如: user, system) */
        code: string;
        /** Name 模块名称(如: 用户模块, 系统模块) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** ParentId 父模块ID */
        parentId?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    };
    /**
        * 更新后的语言关联
        */
    languageRels: {
        /** Id 主键Id */
        id: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** ModuleId 模块ID */
        moduleId: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询国际化模块
*/
export interface I18nModuleGetReq {
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
        * 模块代码(如: user, system)
        */
    code?: string;
    /**
        * 模块代码(如: user, system)
        */
    codes?: string[];
    /**
        * 按照模块代码(如: user, system)排序
        */
    byCode?: number;
    /**
        * 模块名称(如: 用户模块, 系统模块)
        */
    name?: string;
    /**
        * 模块名称(如: 用户模块, 系统模块)
        */
    names?: string[];
    /**
        * 按照模块名称(如: 用户模块, 系统模块)排序
        */
    byName?: number;
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
        * 父模块ID
        */
    parentId?: string;
    /**
        * 父模块ID
        */
    parentIds?: string[];
    /**
        * 按照父模块ID排序
        */
    byParentId?: number;
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
* 国际化模块
*/
export interface I18nModuleGetResp {
    /**
        * Id 主键Id
        */
    id: string;
    /**
        * Code 模块代码(如: user, system)
        */
    code: string;
    /**
        * Name 模块名称(如: 用户模块, 系统模块)
        */
    name: string;
    /**
        * Enabled 是否启用
        */
    enabled: number;
    /**
        * ParentId 父模块ID
        */
    parentId?: string;
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
* 请求 - 删除国际化模块
*/
export interface I18nModuleDeleteReq {
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
        /** 模块代码(如: user, system) */
        code?: string;
        /** 模块代码(如: user, system) */
        codes?: string[];
        /** 按照模块代码(如: user, system)排序 */
        byCode?: number;
        /** 模块名称(如: 用户模块, 系统模块) */
        name?: string;
        /** 模块名称(如: 用户模块, 系统模块) */
        names?: string[];
        /** 按照模块名称(如: 用户模块, 系统模块)排序 */
        byName?: number;
        /** 是否启用 */
        enabled?: number;
        /** 是否启用 */
        enableds?: number[];
        /** 按照是否启用排序 */
        byEnabled?: number;
        /** 父模块ID */
        parentId?: string;
        /** 父模块ID */
        parentIds?: string[];
        /** 按照父模块ID排序 */
        byParentId?: number;
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
* 响应 - 删除国际化模块
*/
export interface I18nModuleDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 请求 - 得到模块的语言列表
*/
export interface I18nModulelanguageListGetReq {
    /**
        * 模块ID
        */
    moduleId: string;
}
/**
* 响应 - 得到模块的语言列表
*/
export interface I18nModulelanguageListGetResp {
    /**
        * 语言列表
        */
    languages: {
        /** Id 主键Id */
        id: string;
        /** Code 语言代码(如: en-US, zh-CN) */
        code: string;
        /** Name 语言名称(如: English, 中文) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 查询国际化模块
*/
export interface I18nModuleListGetReq {
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
        * 模块代码(如: user, system)
        */
    code?: string;
    /**
        * 模块代码(如: user, system)
        */
    codes?: string[];
    /**
        * 按照模块代码(如: user, system)排序
        */
    byCode?: number;
    /**
        * 模块名称(如: 用户模块, 系统模块)
        */
    name?: string;
    /**
        * 模块名称(如: 用户模块, 系统模块)
        */
    names?: string[];
    /**
        * 按照模块名称(如: 用户模块, 系统模块)排序
        */
    byName?: number;
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
        * 父模块ID
        */
    parentId?: string;
    /**
        * 父模块ID
        */
    parentIds?: string[];
    /**
        * 按照父模块ID排序
        */
    byParentId?: number;
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
* 响应 - 获取多个国际化模块
*/
export interface I18nModuleListGetResp {
    /**
        * 获得的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** Code 模块代码(如: user, system) */
        code: string;
        /** Name 模块名称(如: 用户模块, 系统模块) */
        name: string;
        /** Enabled 是否启用 */
        enabled: number;
        /** ParentId 父模块ID */
        parentId?: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 删除国际化翻译内容
*/
export interface I18nTranslationDeleteReq {
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
        /** 关联的键ID */
        keyId?: string;
        /** 关联的键ID */
        keyIds?: string[];
        /** 按照关联的键ID排序 */
        byKeyId?: number;
        /** 语言ID */
        languageId?: string;
        /** 语言ID */
        languageIds?: string[];
        /** 按照语言ID排序 */
        byLanguageId?: number;
        /** 翻译值 */
        value?: string;
        /** 翻译值 */
        values?: string[];
        /** 按照翻译值排序 */
        byValue?: number;
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
* 响应 - 删除国际化翻译内容
*/
export interface I18nTranslationDeleteResp {
    /**
        * 是否删除成功
        */
    success?: boolean;
}

/**
* 请求 - 创建多个国际化翻译内容
*/
export interface I18nTranslationListPostReq {
    /**
        * 创建的数据
        */
    list: {
        /** 关联的键ID (必填) */
        keyId: string;
        /** 语言ID (必填) */
        languageId: string;
        /** 翻译值 (必填) */
        value: string
    }[];
}
/**
* 响应 - 创建多个国际化翻译内容
*/
export interface I18nTranslationListPostResp {
    /**
        * 创建的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** KeyId 关联的键ID */
        keyId: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** Value 翻译值 */
        value: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}

/**
* 请求 - 更新多个国际化翻译内容
*/
export interface I18nTranslationListPutReq {
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
            /** 关联的键ID */
            keyId?: string;
            /** 关联的键ID */
            keyIds?: string[];
            /** 按照关联的键ID排序 */
            byKeyId?: number;
            /** 语言ID */
            languageId?: string;
            /** 语言ID */
            languageIds?: string[];
            /** 按照语言ID排序 */
            byLanguageId?: number;
            /** 翻译值 */
            value?: string;
            /** 翻译值 */
            values?: string[];
            /** 按照翻译值排序 */
            byValue?: number;
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
        /** 关联的键ID 更新内容 */
        update: {
            keyId?: string;
            /** 语言ID */
            languageId?: string;
            /** 翻译值 */
            value?: string
        }
    }[];
}
/**
* 响应 - 更新多个国际化翻译内容
*/
export interface I18nTranslationListPutResp {
    /**
        * 更新的数据
        */
    list: {
        /** Id 主键Id */
        id: string;
        /** KeyId 关联的键ID */
        keyId: string;
        /** LanguageId 语言ID */
        languageId: string;
        /** Value 翻译值 */
        value: string;
        /** CreatedAt 创建数据时间 */
        createdAt?: string;
        /** LastAt 更新数据时间 */
        lastAt?: string;
        /** DeletedAt 删除数据时间（逻辑删除） */
        deletedAt?: string
    }[];
}


