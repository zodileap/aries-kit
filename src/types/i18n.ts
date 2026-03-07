

/**
 * i18n 实例类型
 */
export interface I18n {
    /**
     * 切换语言
     * @param lng 
     */
    changeLanguage(lng: LanguageCode): Promise<(key: string, options?: object) => string>;
    /**
     * 当前语言
     */
    language: LanguageCode;
}

/**
 * useI18n钩子返回值类型
 * Params:
 *   - t: 翻译函数
 *   - i18n: i18n实例
 */
export interface UseI18nReturn {
    /**
     * i18n实例
     */
    i18n: I18n;
    /**
     * 翻译函数，自定义封装
     */
    t: I18nTranslates
}

/**
 * 支持的语言命名空间
 */
export type I18nNamespace = 'common'
      | 'i18n'
      | 'system_definitions'
      | 'system_definitions/type_spec_designer'
      | 'system_definitions/status_code_designer'
      | 'system_definitions/err_code_designer'
      | 'user'
      | 'group'
      | 'router'
      | 'devops'
      | 'devops/codeRepo'
      | 'devops/pipeline'
      | 'development'
      | 'development/database_designer'
      | 'web_tools'
      | 'web_tools/media_tools'
      | 'web_tools/image_tools'
      | 'web_tools/document_tools'

/**
 * 支持的语言代码
 */
export type LanguageCode = 'zh' | 'zh-CN' | 'en'

/**
 * i18n翻译键
 */
export interface I18nTranslates  {
    i18n: {
        /**
         * I18n主页， 模块表格的模块名称列的列名
         */
        "moduleName": string;
        /**
         * i18n主页，页面大标题
         */
        "management": string;
        /**
         * i18n主页，添加模块按钮的文本
         */
        "addModule": string;
        /**
         * i18n主页，管理语言的按钮文本
         */
        "manageLanguages": string;
        /**
         * i18n主页，构建按钮的文本
         */
        "buildAndPush": string;
        /**
         *  I18n主页， 模块表格的模块名称列的列名
         */
        "moduleCode": string;
        /**
         * i18n主页点击构建按钮，构建成功后的消息
         */
        "buildSuccess": string;
        /**
         * i18n主页构建按钮点击后出现构建失败
         */
        "buildFailed": string;
        /**
         * 语言列表的列名
         */
        "languageCode": string;
        /**
         * 语言的名称
         */
        "languageName": string;
        /**
         * 返回到i18n的主页
         */
        "backToI18n": string;
        /**
         * 添加语言的按钮的文本
         */
        "addLanguage": string;
        /**
         * 没有语言列表时的文本
         */
        "noLanguageData": string;
        /**
         * 语言的管理页面，会在面包屑中使用
         */
        "languageManage": string;
        /**
         * 在语言表单页面，面包屑显示的编辑文本
         */
        "editLanguage": string;
        /**
         * 在语言表单页面，面包屑显示的新增文本
         */
        "createLanguage": string;
        /**
         * 在语言的编辑表单中，语言标识符的输入框的提示
         */
        "pleaseEnterLanguageCode": string;
        /**
         * 在语言的编辑表单中，语言名称的输入框的提示
         */
        "pleaseEnterLanguageName": string;
        /**
         * 语言创建成功
         */
        "languageCreateSuccess": string;
        /**
         * 语言更新成功
         */
        "languageUpdateSuccess": string;
        /**
         * 语言更新失败
         */
        "languageUpdateFailed": string;
        /**
         * 编辑模块
         */
        "editModule": string;
        /**
         * 模块支持的语言
         */
        "supportedLanguages": string;
        /**
         * 模块添加需要翻译的键
         */
        "addKey": string;
        /**
         * 搜索模块中翻译的键的名称
         */
        "searchKeyName": string;
        /**
         * 编辑翻译的键
         */
        "editTranslation": string;
        /**
         * 模块中翻译键表格中翻译数量列的列名
         */
        "completionRate": string;
        /**
         * 模块的翻译键的表格中键路径的列名
         */
        "keyPath": string;
        /**
         * 键的名称
         */
        "keyName": string;
        /**
         * 创建模块
         */
        "createModule": string;
        /**
         * 
         */
        "pleaseEnterModuleCode": string;
        /**
         * 
         */
        "pleaseEnterModuleName": string;
        /**
         * 模块没有选中的语言
         */
        "noLanguageSelected": string;
        /**
         * 模块能够使用的语言
         */
        "availableLanguages": string;
        /**
         * 模块创建成功
         */
        "moduleCreateSuccess": string;
        /**
         * 模块创建失败
         */
        "moduleCreateFailed": string;
        /**
         * 更新成功
         */
        "moduleUpdateSuccess": string;
        /**
         * 更新失败
         */
        "moduleUpdateFailed": string;
        /**
         * 模块详情页面
         */
        "moduleDetail": string;
        /**
         * 检查模块的Id的时候出现id为空的情况
         */
        "moduleIdRequired": string;
        /**
         * 翻译键的描述的表单标题文本
         */
        "keyDescription": string;
        /**
         * 
         */
        "moduleOverview": string;
        /**
         * 删除模型
         */
        "deleteModule": string;
        /**
         * 在模块中选择它的父模块的下拉选择框的提示
         */
        "pleaseSelectParentModule": string;
        /**
         * 翻译键的列表
         */
        "keyList": string;
        /**
         * 语言
         */
        "language": string;
        /**
         * 上级模块
         */
        "parentModule": string;
        /**
         * 请输入键名称
         */
        "pleaseEnterKeyName": string;
        /**
         * 请输入键描述
         */
        "pleaseEnterKeyDescription": string;
        /**
         * 请输入翻译内容
         */
        "pleaseEnterTranslation": string;
    };
    common: {
        /**
         * 等待的文本
         */
        "loading": string;
        /**
         * 创建时间
         */
        "createdAt": string;
        /**
         * 用于表格中操作列的列名
         */
        "tableActions": string;
        /**
         * 编辑操作的文本，一般用于按钮中
         */
        "edit": string;
        /**
         * 删除文本
         */
        "delete": string;
        /**
         * 更新
         */
        "update": string;
        /**
         * 创建
         */
        "create": string;
        /**
         * 取消
         */
        "cancel": string;
        /**
         * 保存
         */
        "save": string;
        /**
         * 返回
         */
        "back": string;
        /**
         * 创建失败的提示
         */
        "createFailed": string;
        /**
         * 创建成功的提示
         */
        "createSuccess": string;
        /**
         * 更新失败的提示
         */
        "updateFailed": string;
        /**
         * 更新成功的提示
         */
        "updateSuccess": string;
        /**
         * 保存失败
         */
        "saveFailed": string;
        /**
         * 保存成功
         */
        "saveSuceess": string;
        /**
         * 参数无效
         */
        "invalidParameters": string;
        /**
         * 描述
         */
        "description": string;
        /**
         * 获取失败
         */
        "getFailed": string;
        /**
         * 获取成功
         */
        "getSuccess": string;
        /**
         * 删除失败的文本
         */
        "deleteFailed": string;
        /**
         * 删除成功文本
         */
        "deleteSuccess": string;
        /**
         * 禁用
         */
        "disabled": string;
        /**
         * 搜索框的文本提示
         */
        "search": string;
        /**
         * 暂无数据
         */
        "noData": string;
        /**
         * 仪表盘
         */
        "dashboard": string;
        /**
         * 输入描述的提示
         */
        "inputDescription": string;
        /**
         * 重置
         */
        "reset": string;
        /**
         * 状态
         */
        "status": string;
        /**
         * 启用
         */
        "enabled": string;
        /**
         * 操作
         */
        "actions": string;
        /**
         * 复制成功
         */
        "copySuccess": string;
        /**
         * 复制失败
         */
        "copyFailed": string;
        /**
         * 点击复制
         */
        "clickToCopy": string;
        /**
         * 全部
         */
        "all": string;
        /**
         * 确认删除?
         */
        "confirmDelete": string;
        /**
         * 是否必填
         */
        "isRequired": string;
        /**
         * 请输入排序值
         */
        "pleaseInputSortValue": string;
        /**
         * 构建
         */
        "build": string;
        /**
         * 撤销
         */
        "undo": string;
        /**
         * 重做
         */
        "redo": string;
        /**
         * 格式化
         */
        "format": string;
        /**
         * 查找
         */
        "find": string;
        /**
         * 请输入搜索内容
         */
        "searchPlaceholder": string;
        /**
         * 排序
         */
        "sort": string;
        /**
         * 复制
         */
        "copy": string;
        /**
         * 暂无搜索结果
         */
        "noSearchResults": string;
        /**
         * 编辑参数
         */
        "editParam": string;
        /**
         * 分组
         */
        "group": string;
        /**
         * 未知分组
         */
        "unknownGroup": string;
        /**
         * 表单验证失败
         */
        "formValidationFailed": string;
        /**
         * 请输入描述
         */
        "descriptionPlaceholder": string;
        /**
         * 分类
         */
        "category": string;
        /**
         * 请选择分类
         */
        "categoryRequired": string;
        /**
         * 请输入
         */
        "pleaseEnter": string;
        /**
         * 构建失败
         */
        "buildFailed": string;
        /**
         * 操作失败
         */
        "operationFailed": string;
        /**
         * 请选择
         */
        "pleaseSelect": string;
        /**
         * ID
         */
        "id": string;
        /**
         * 添加参数
         */
        "addParam": string;
        /**
         * 默认值
         */
        "defaultValue": string;
        /**
         * 请输入默认值
         */
        "pleaseEnterDefaultValue": string;
        /**
         * 示例值
         */
        "exampleValue": string;
        /**
         * 参数名称
         */
        "paramName": string;
        /**
         * 请输入参数名称
         */
        "pleaseEnterParamName": string;
        /**
         * 参数类型
         */
        "paramType": string;
        /**
         * 请选择参数类型
         */
        "pleaseSelectParamType": string;
        /**
         * 名称
         */
        "name": string;
        /**
         * 请输入名称
         */
        "pleaseEnterName": string;
        /**
         * 编码
         */
        "code": string;
        /**
         * 参数编码
         */
        "paramCode": string;
        /**
         * 请输入参数编码
         */
        "pleaseEnterParamCode": string;
        /**
         * 请输入编码
         */
        "pleaseEnterCode": string;
    };
    system_definitions: {
        type_spec_designer: {
            /**
             * 类型编码
             */
            "typeCode": string;
            /**
             * Go语言类型
             */
            "goType": string;
            /**
             * 类型描述
             */
            "typeDescription": string;
            /**
             * 请输入类型描述
             */
            "pleaseInputTypeDescription": string;
            /**
             * 确定要删除此基础类型吗？
             */
            "confirmDeleteBaseType": string;
            /**
             * 基础类型管理
             */
            "baseTypeManagement": string;
            /**
             * 基础类型
             */
            "baseType": string;
            /**
             * 模版
             */
            "template": string;
            /**
             * 编辑基础类型
             */
            "editBaseType": string;
            /**
             * 请输入类型编码
             */
            "pleaseInputTypeCode": string;
            /**
             * 请输入类型名称
             */
            "pleaseInputTypeName": string;
            /**
             * 类型设计器
             */
            "typeDesigner": string;
            /**
             * 模版管理
             */
            "templateManagement": string;
            /**
             * 创建模板
             */
            "createTemplate": string;
            /**
             * 编辑模版
             */
            "editTemplate": string;
            /**
             * 模板参数
             */
            "templateParams": string;
            /**
             * 类型名称
             */
            "typeName": string;
            /**
             * 请选择基础类型
             */
            "pleaseSelectBaseType": string;
            /**
             * 请选择构建模板
             */
            "pleaseSelectBuildTemplate": string;
            /**
             * 构建模板
             */
            "buildTemplate": string;
            /**
             * 实体类字段
             */
            "entityField": string;
            /**
             * 请输入实体类字段
             */
            "pleaseInputEntityField": string;
            /**
             * 数组
             */
            "isArrayType": string;
            /**
             * 设置为数组的提示
             */
            "arrayTypeTooltip": string;
            /**
             * 上级类型
             */
            "parentType": string;
            /**
             * 请选择上级类型
             */
            "pleaseSelectParentType": string;
            /**
             * 未知类型
             */
            "unknownType": string;
            /**
             * 请输入Go类型
             */
            "pleaseInputGoType": string;
        };
        status_code_designer: {
            /**
             * 状态码设计器
             */
            "statusCodeDesigner": string;
            /**
             * 分段
             */
            "segment": string;
            /**
             * 所属分组
             */
            "belongGroup": string;
            /**
             * 状态信息
             */
            "statusMessage": string;
            /**
             * 请输入状态信息
             */
            "statusMessageRequired": string;
            /**
             * 请输入状态信息
             */
            "statusMessagePlaceholder": string;
            /**
             * 状态码名称
             */
            "statusCodeName": string;
            /**
             * 请输入状态码名称
             */
            "statusCodeNameRequired": string;
            /**
             * 请输入状态码名称，如APIMate_Doc_Get_Failed
             */
            "statusCodeNamePlaceholder": string;
            /**
             * 请输入分组名称
             */
            "groupNameRequired": string;
            /**
             * 请输入分组名称
             */
            "groupNamePlaceholder": string;
            /**
             * 分组编码
             */
            "groupCode": string;
            /**
             * 请输入分组编码
             */
            "groupCodeRequired": string;
            /**
             * 请选择所属分组
             */
            "belongGroupRequired": string;
            /**
             * 请选择所属分组
             */
            "belongGroupPlaceholder": string;
            /**
             * 分段名称
             */
            "segmentName": string;
            /**
             * 请输入分段名称
             */
            "segmentNameRequired": string;
            /**
             * 请输入分段名称
             */
            "segmentNamePlaceholder": string;
            /**
             * 分段编码
             */
            "segmentCode": string;
            /**
             * 请输入分段编码
             */
            "segmentCodeRequired": string;
            /**
             * 分段编码必须为3位数字
             */
            "segmentCodeFormat": string;
            /**
             * 请输入分段编码，如001
             */
            "segmentCodePlaceholder": string;
            /**
             * 父级分段
             */
            "parentSegment": string;
            /**
             * 请选择父级分段
             */
            "parentSegmentPlaceholder": string;
            /**
             * 业务编号必须为4位数字
             */
            "businessCodeFormat": string;
            /**
             * 状态码
             */
            "statusCode": string;
            /**
             * 请输入状态码
             */
            "statusCodeRequired": string;
            /**
             * 状态码必须为3位数字
             */
            "statusCodeFormat": string;
            /**
             * 请输入状态码，如001
             */
            "statusCodePlaceholder": string;
            /**
             * 详细描述
             */
            "detailDescription": string;
            /**
             * 请输入详细描述
             */
            "detailDescriptionPlaceholder": string;
            /**
             * 分组管理
             */
            "groupManagement": string;
            /**
             * 分段管理
             */
            "segmentManagement": string;
            /**
             * 确认删除该分组？
             */
            "confirmDeleteGroup": string;
            /**
             * 确认删除该分段？
             */
            "confirmDeleteSegment": string;
            /**
             * 请输入分组编码，如1000
             */
            "groupCodePlaceholder": string;
            /**
             * 业务
             */
            "business": string;
            /**
             * 模块
             */
            "module": string;
            /**
             * 请选择模块编号
             */
            "moduleSegmentPlaceholder": string;
            /**
             * 模块编号
             */
            "moduleSegment": string;
            /**
             * 业务编号
             */
            "businessSegment": string;
            /**
             * 请选择业务编号
             */
            "businessSegmentRequired": string;
            /**
             * 请选择业务编号
             */
            "businessSegmentPlaceholder": string;
            /**
             * 请选择模块编号
             */
            "moduleSegmentRequired": string;
            /**
             * 状态码必须是3位数字
             */
            "statusCodeMustBe3Digits": string;
        };
        err_code_designer: {
            /**
             * 运行错误
             */
            "systemError": string;
            /**
             * 业务错误
             */
            "businessError": string;
            /**
             * 请求错误
             */
            "requestError": string;
            /**
             * 错误码设计器
             */
            "errCodeDesigner": string;
            /**
             * 错误码名称
             */
            "errCodeName": string;
            /**
             * 错误信息
             */
            "errMessage": string;
            /**
             * 错误码
             */
            "errCode": string;
            /**
             * 错误类型
             */
            "errType": string;
            /**
             * 状态码
             */
            "statusCode": string;
            /**
             * 未知错误类型
             */
            "unknownErrorType": string;
            /**
             * 分段
             */
            "segment": string;
            /**
             * 业务编码
             */
            "businessCode": string;
            /**
             * 模块编码
             */
            "moduleCode": string;
            /**
             * 未知业务
             */
            "unknownBusiness": string;
            /**
             * 未知模块
             */
            "unknownModule": string;
            /**
             * 未知分组
             */
            "unknownGroup": string;
            /**
             * 分段管理
             */
            "segmentManagement": string;
            /**
             * 段名称
             */
            "segmentName": string;
            /**
             * 段编码
             */
            "segmentCode": string;
            /**
             * 段描述
             */
            "segmentDescription": string;
            /**
             * 业务
             */
            "business": string;
            /**
             * 模块
             */
            "module": string;
            /**
             * 父级分段
             */
            "parentSegment": string;
            /**
             * 未知父级分段
             */
            "unknownParent": string;
            /**
             * 名称必须符合变量命名规范：以字母或下划线开头，只能包含字母、数字、下划线
             */
            "errCodeNameFormat": string;
            /**
             * 请输入分段名称
             */
            "segmentNameRequired": string;
            /**
             * 请输入分段名称
             */
            "segmentNamePlaceholder": string;
            /**
             * 请选择父级分段
             */
            "parentSegmentPlaceholder": string;
            /**
             * 请输入错误码名称
             */
            "errCodeNameRequired": string;
            /**
             * 请输入错误信息
             */
            "errMessageRequired": string;
            /**
             * 业务编号
             */
            "businessSegment": string;
            /**
             * 请选择业务编号
             */
            "businessSegmentRequired": string;
            /**
             * 模块编号
             */
            "moduleSegment": string;
            /**
             * 请选择模块编号
             */
            "moduleSegmentRequired": string;
            /**
             * 请输入错误码
             */
            "errCodeRequired": string;
            /**
             * 请选择状态码
             */
            "selectStatusCode": string;
            /**
             * 请选择错误类型
             */
            "selectErrType": string;
            /**
             * 错误原因
             */
            "errorReason": string;
            /**
             * 请输入错误原因
             */
            "errorReasonPlaceholder": string;
            /**
             * 占位符
             */
            "verbs": string;
            /**
             * 请输入占位符
             */
            "verbsPlaceholder": string;
            /**
             * 模块编码必须为4位数字
             */
            "segmentModuleCodeFormat": string;
            /**
             * 业务编码必须为3位数字
             */
            "segmentBusinessCodeFormat": string;
            /**
             * 请输入业务编码，如001
             */
            "segmentBusinessCodePlaceholder": string;
            /**
             * 请输入模块编码，如1001
             */
            "segmentModuleCodePlaceholder": string;
        };
    };
    user: {
        /**
         * 登录按钮的文本
         */
        "title": string;
        /**
         * 邮箱登录
         */
        "email-login": string;
        /**
         * 用户密码输入框的提示
         */
        "password": string;
        /**
         * 苹果登录
         */
        "apple-login": string;
        /**
         * 谷歌登录
         */
        "google-login": string;
        /**
         * 用户邮箱输入框的提示
         */
        "email": string;
    };
    group: {
        /**
         * 请输入分组名称
         */
        "groupNameRequired": string;
        /**
         * 分组名称
         */
        "groupName": string;
        /**
         * 分组编码
         */
        "groupCode": string;
        /**
         * 请选择所属分组
         */
        "groupSelect": string;
        /**
         * 所属分组
         */
        "group": string;
        /**
         * 上级分组
         */
        "parentGroup": string;
        /**
         * 分组管理
         */
        "groupManagement": string;
        /**
         * 请选择上级分组
         */
        "parentGroupSelect": string;
        /**
         * 请输入分组编码
         */
        "groupCodeRequired": string;
        /**
         * 确认删除该分组？
         */
        "confirmDeleteGroup": string;
    };
    router: {
        /**
         * 文档工具标题
         */
        "documentToolsTitle": string;
        /**
         * 媒体播放器标题
         */
        "mediaPlayerTitle": string;
        /**
         * 图片工具标题
         */
        "imageToolsTitle": string;
        /**
         * 媒体播放器描述
         */
        "mediaPlayerDescription": string;
        /**
         * 图片处理器标题
         */
        "imageProcessorTitle": string;
        /**
         * 音视频工具标题
         */
        "mediaToolsTitle": string;
        /**
         * 图片处理器描述
         */
        "imageProcessorDescription": string;
        /**
         * 音视频转换器标题
         */
        "mediaConverterTitle": string;
        /**
         * 音视频转换器描述
         */
        "mediaConverterDescription": string;
        /**
         * 图片转换器标题
         */
        "imageConverterTitle": string;
        /**
         * 开发管理平台
         */
        "devmpTitle": string;
        /**
         * 开发工具
         */
        "developmentTitle": string;
        /**
         * 系统定义
         */
        "systemDefinitionsTitle": string;
        /**
         * 持续集成与部署
         */
        "devopsTitle": string;
        /**
         * API 管理
         */
        "apiManagementTitle": string;
        /**
         * API 接口调试与文档管理
         */
        "apiManagementDescription": string;
        /**
         * 数据库工具
         */
        "databaseTitle": string;
        /**
         * 数据库操作与管理
         */
        "databaseDescription": string;
        /**
         * 代码生成器
         */
        "codeGenTitle": string;
        /**
         * 快速生成代码模板
         */
        "codeGenDescription": string;
        /**
         * 国际化管理
         */
        "i18nTitle": string;
        /**
         * 多语言管理与配置
         */
        "i18nDescription": string;
        /**
         * 类型设计器
         */
        "typeSpecDesignerTitle": string;
        /**
         * 设计系统统一的类型别名
         */
        "typeSpecDesignerDescription": string;
        /**
         * 状态码设计器
         */
        "statusCodeDesignerTitle": string;
        /**
         * 设计系统的状态码
         */
        "statusCodeDesignerDescription": string;
        /**
         * 错误码设计器
         */
        "errorCodeDesignerTitle": string;
        /**
         * 设计系统的错误码
         */
        "errorCodeDesignerDescription": string;
        /**
         * 流水线管理
         */
        "pipelineTitle": string;
        /**
         * CI/CD 流水线配置与监控
         */
        "pipelineDescription": string;
        /**
         * 代码仓库
         */
        "codeRepoTitle": string;
        /**
         * 代码仓库管理与集成
         */
        "codeRepoDescription": string;
        /**
         * 部署管理
         */
        "deployTitle": string;
        /**
         * 应用部署与环境管理
         */
        "deployDescription": string;
        /**
         * 主页
         */
        "home": string;
        /**
         * 工具集标题
         */
        "toolsTitle": string;
        /**
         * 图片转换器描述
         */
        "imageConverterDescription": string;
    };
    devops: {
        codeRepo: {
            /**
             * 返回代码仓库的主页
             */
            "backToRepository": string;
            /**
             * 创建仓库的按钮文本
             */
            "create": string;
            /**
             * 仓库的描述
             */
            "description": string;
            /**
             * 没有仓库的提示文本
             */
            "emptyTip": string;
            /**
             * 仓库名称
             */
            "name": string;
            /**
             * 仓库的详情
             */
            "repositoryDetail": string;
            /**
             * 仓库列表的标题
             */
            "repositoryList": string;
            /**
             * 仓库的来源
             */
            "source": string;
            /**
             * 标题
             */
            "title": string;
            /**
             * 仓库的地址
             */
            "url": string;
            /**
             * 提交总数的标题
             */
            "commitTotal": string;
            /**
             * 仓库的当前版本号
             */
            "currentVersion": string;
            /**
             * 发布新版本的按钮文本
             */
            "addVersion": string;
            /**
             * 仓库的来源
             */
            "origin": string;
            /**
             * 无版本的文本
             */
            "noVersions": string;
            /**
             * 版本列表的标题
             */
            "versionList": string;
            /**
             * 请输入仓库名称
             */
            "namePlaceholder": string;
            /**
             * 请输入仓库URL地址
             */
            "urlPlaceholder": string;
            /**
             * 请输入仓库描述信息（可选）
             */
            "descriptionPlaceholder": string;
        };
        pipeline: {
            /**
             * 项目概览
             */
            "projectOverview": string;
            /**
             * 创建流水线
             */
            "createPipeline": string;
            /**
             * 菜单中进入流水线列表的项
             */
            "pipelineList": string;
            /**
             * 菜单中扩展列表的项
             */
            "extensionList": string;
            /**
             * 在流水线的项目中，没有发现项目的文字
             */
            "projectNotFound": string;
            /**
             * 在流水线项目中，项目没有关联的扩展
             */
            "noExtensions": string;
            /**
             * 项目页面，运行信息tab
             */
            "currentRunInfo": string;
            /**
             * 项目中，当前没有运行的提示
             */
            "noCurrentRunInfo": string;
            /**
             * 拓展
             */
            "extensions": string;
            /**
             * 历史
             */
            "history": string;
            /**
             * 无运行历史
             */
            "noHistoryInfo": string;
            /**
             * 运行
             */
            "run": string;
            /**
             * 流水线名称输入提示
             */
            "inputPipelineName": string;
            /**
             * 扩展
             */
            "extension": string;
            /**
             * 流水线名称
             */
            "pipelineName": string;
            /**
             * 选择扩展的提示
             */
            "selectExtension": string;
            /**
             * 扩展添加配置项
             */
            "addConfig": string;
        };
    };
    development: {
        database_designer: {
            /**
             * 字段类型参数
             */
            "fieldTypeParams": string;
            /**
             * 支持类型
             */
            "supportedTypes": string;
            /**
             * 请输入支持的类型设计器中的基础类型，如varchar、int、text等
             */
            "supportedTypesPlaceholder": string;
            /**
             * 数据库名称必须是大写驼峰格式的验证错误信息
             */
            "databaseNameMustBePascalCase": string;
            /**
             * 字段构建器参数
             */
            "fieldBuilderParameters": string;
            /**
             * 表名称必须是大写驼峰格式的验证错误信息
             */
            "tableNameMustBePascalCase": string;
            /**
             * 数据库表设计器功能模块的标题
             */
            "tableDesigner": string;
            /**
             * 请输入数据库名称
             */
            "pleaseEnterDatabaseName": string;
            /**
             * 数据库名称
             */
            "databaseName": string;
            /**
             * 数据库设计器
             */
            "databaseDesigner": string;
            /**
             * 连接标签
             */
            "connectionTag": string;
            /**
             * 数据库类型
             */
            "databaseType": string;
            /**
             * 实体表
             */
            "table": string;
            /**
             * 表属性名
             */
            "tableAttrName": string;
            /**
             * 表备注
             */
            "tableComment": string;
            /**
             * 字段类型
             */
            "fieldType": string;
            /**
             * 字段
             */
            "field": string;
            /**
             * 字段类型管理
             */
            "fieldTypeManagement": string;
            /**
             * 字段管理
             */
            "fieldManagement": string;
            /**
             * 表名称
             */
            "tableName": string;
            /**
             * 请输入连接标签
             */
            "pleaseEnterConnectionTag": string;
            /**
             * 请选择数据库类型
             */
            "pleaseSelectDatabaseType": string;
            /**
             * 请输入字段ID
             */
            "pleaseEnterFieldId": string;
            /**
             * 字段名称
             */
            "fieldName": string;
            /**
             * 字段备注
             */
            "fieldComment": string;
            /**
             * Zspecs类型
             */
            "zspecsType": string;
            /**
             * 表管理
             */
            "tableManagement": string;
            /**
             * 请输入字段名称
             */
            "pleaseEnterFieldName": string;
            /**
             * 请选择字段类型
             */
            "pleaseSelectFieldType": string;
            /**
             * 请输入字段备注
             */
            "pleaseEnterFieldComment": string;
            /**
             * 请输入Zspecs类型
             */
            "pleaseEnterZspecsType": string;
            /**
             * 请输入排序号
             */
            "pleaseEnterSortOrder": string;
            /**
             * 请输入表ID
             */
            "pleaseEnterTableId": string;
            /**
             * 请输入表名称
             */
            "pleaseEnterTableName": string;
            /**
             * 请输入表属性名
             */
            "pleaseEnterTableAttrName": string;
            /**
             * 请输入表备注
             */
            "pleaseEnterTableComment": string;
            /**
             * 请选择表字段
             */
            "pleaseSelectTableFields": string;
            /**
             * 表字段1
             */
            "tableFields": string;
        };
    };
    web_tools: {
        /**
         * 工具集标题
         */
        "toolsTitle": string;
        media_tools: {
            /**
             * 媒体播放器标题
             */
            "mediaPlayerTitle": string;
            /**
             * 媒体播放器描述
             */
            "mediaPlayerDescription": string;
            /**
             * 媒体格式转换器标题
             */
            "mediaConverterTitle": string;
            /**
             * 媒体格式转换器描述
             */
            "mediaConverterDescription": string;
        };
        image_tools: {
            /**
             * 图片格式转换器描述
             */
            "imageConverterDescription": string;
            /**
             * 图片处理器标题
             */
            "imageProcessorTitle": string;
            /**
             * 图片处理器描述
             */
            "imageProcessorDescription": string;
            /**
             * 图片格式转换器标题
             */
            "imageConverterTitle": string;
        };
    };

}

