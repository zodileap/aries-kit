import i18n, { Resource, ResourceLanguage } from 'i18next';
import { initReactI18next, useTranslation, UseTranslationOptions } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nNamespace, UseI18nReturn } from '@ari/types';
import { useMemo } from 'react';
import enCommon from './locales/en/common.json';
import zhCNCommon from './locales/zh-CN/common.json';

export interface InitI18nOptions {
    resources?: Resource;
}

const createBuiltInResources = (): Resource => ({
    en: {
        common: enCommon,
    },
    zh: {
        common: zhCNCommon,
    },
    'zh-CN': {
        common: zhCNCommon,
    },
});

let preloadedResources: Resource = {};

const mergeResources = (target: Resource, source?: Resource): Resource => {
    if (!source) {
        return target;
    }
    Object.entries(source).forEach(([lng, namespaces]) => {
        if (!target[lng]) {
            target[lng] = {};
        }
        Object.entries((namespaces || {}) as ResourceLanguage).forEach(([ns, resource]) => {
            target[lng]![ns] = resource;
        });
    });
    return target;
};

const applyRuntimeResources = (resources?: Resource) => {
    if (!resources || !i18n.isInitialized) {
        return;
    }
    Object.entries(resources).forEach(([lng, namespaces]) => {
        Object.entries((namespaces || {}) as ResourceLanguage).forEach(([ns, resource]) => {
            i18n.addResourceBundle(lng, ns, resource, true, true);
        });
    });
};

export const addI18nResources = (resources: Resource) => {
    preloadedResources = mergeResources(preloadedResources, resources);
    applyRuntimeResources(resources);
};

export const initI18n = (options: InitI18nOptions = {}) => {
    if (i18n.isInitialized) {
        if (options.resources) {
            addI18nResources(options.resources);
        }
        return i18n;
    }

    const resources = mergeResources(
        mergeResources(createBuiltInResources(), preloadedResources),
        options.resources
    );
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            fallbackLng: "en",
            // 虽然没有zh的翻译包，但是这里不要删除zh，否则会导致i18next无法识别zh
            supportedLngs: ['zh', 'zh-CN', 'en'],
            // 这允许i18next匹配不太具体的语言代码。
            nonExplicitSupportedLngs: true,
            // 从所有命名空间加载翻译
            load: 'all',
            // debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false, // not needed for React as it escapes by default
            },
            ns: ['common'],
            defaultNS: 'common',
            detection: {
                order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'], // 调整顺序，优先使用浏览器设置
                lookupQuerystring: 'lng',
                lookupCookie: 'i18nextLng',
                lookupLocalStorage: 'i18nextLng',
                caches: ['localStorage', 'cookie'],
            },
        })

    return i18n;
}

/**
 * useI18n 国际化钩子函数
 * 
 * Params:
 *   - ns: 命名空间列表
 *   - options: useTranslation配置项
 * 
 * Returns:
 *   返回translate函数和i18n实例
 * 
 * Example:
 *   const { translate } = useI18n();
 *   translate('cicd.createProject', 'code/devops'); // 等同于 t('code/devops:cicd.createProject')
 */
export const useI18n = (
    ns?: I18nNamespace[],
    options?: UseTranslationOptions<undefined>
): UseI18nReturn => {
    const use = useTranslation(ns, options);
    const i18n = use.i18n;

    const t = useMemo(() => {
        // 创建一个更安全的翻译函数，确保正确指定命名空间
        const safeT = (key: string, namespace: string) => {
            return i18n.t(key, { ns: namespace });
                };
        return {
        i18n: {
            "moduleName": safeT('moduleName', 'i18n'),
            "management": safeT('management', 'i18n'),
            "addModule": safeT('addModule', 'i18n'),
            "manageLanguages": safeT('manageLanguages', 'i18n'),
            "buildAndPush": safeT('buildAndPush', 'i18n'),
            "moduleCode": safeT('moduleCode', 'i18n'),
            "buildSuccess": safeT('buildSuccess', 'i18n'),
            "buildFailed": safeT('buildFailed', 'i18n'),
            "languageCode": safeT('languageCode', 'i18n'),
            "languageName": safeT('languageName', 'i18n'),
            "backToI18n": safeT('backToI18n', 'i18n'),
            "addLanguage": safeT('addLanguage', 'i18n'),
            "noLanguageData": safeT('noLanguageData', 'i18n'),
            "languageManage": safeT('languageManage', 'i18n'),
            "editLanguage": safeT('editLanguage', 'i18n'),
            "createLanguage": safeT('createLanguage', 'i18n'),
            "pleaseEnterLanguageCode": safeT('pleaseEnterLanguageCode', 'i18n'),
            "pleaseEnterLanguageName": safeT('pleaseEnterLanguageName', 'i18n'),
            "languageCreateSuccess": safeT('languageCreateSuccess', 'i18n'),
            "languageUpdateSuccess": safeT('languageUpdateSuccess', 'i18n'),
            "languageUpdateFailed": safeT('languageUpdateFailed', 'i18n'),
            "editModule": safeT('editModule', 'i18n'),
            "supportedLanguages": safeT('supportedLanguages', 'i18n'),
            "addKey": safeT('addKey', 'i18n'),
            "searchKeyName": safeT('searchKeyName', 'i18n'),
            "editTranslation": safeT('editTranslation', 'i18n'),
            "completionRate": safeT('completionRate', 'i18n'),
            "keyPath": safeT('keyPath', 'i18n'),
            "keyName": safeT('keyName', 'i18n'),
            "createModule": safeT('createModule', 'i18n'),
            "pleaseEnterModuleCode": safeT('pleaseEnterModuleCode', 'i18n'),
            "pleaseEnterModuleName": safeT('pleaseEnterModuleName', 'i18n'),
            "noLanguageSelected": safeT('noLanguageSelected', 'i18n'),
            "availableLanguages": safeT('availableLanguages', 'i18n'),
            "moduleCreateSuccess": safeT('moduleCreateSuccess', 'i18n'),
            "moduleCreateFailed": safeT('moduleCreateFailed', 'i18n'),
            "moduleUpdateSuccess": safeT('moduleUpdateSuccess', 'i18n'),
            "moduleUpdateFailed": safeT('moduleUpdateFailed', 'i18n'),
            "moduleDetail": safeT('moduleDetail', 'i18n'),
            "moduleIdRequired": safeT('moduleIdRequired', 'i18n'),
            "keyDescription": safeT('keyDescription', 'i18n'),
            "moduleOverview": safeT('moduleOverview', 'i18n'),
            "deleteModule": safeT('deleteModule', 'i18n'),
            "pleaseSelectParentModule": safeT('pleaseSelectParentModule', 'i18n'),
            "keyList": safeT('keyList', 'i18n'),
            "language": safeT('language', 'i18n'),
            "parentModule": safeT('parentModule', 'i18n'),
            "pleaseEnterKeyName": safeT('pleaseEnterKeyName', 'i18n'),
            "pleaseEnterKeyDescription": safeT('pleaseEnterKeyDescription', 'i18n'),
            "pleaseEnterTranslation": safeT('pleaseEnterTranslation', 'i18n'),
        },
        common: {
            "loading": safeT('loading', 'common'),
            "createdAt": safeT('createdAt', 'common'),
            "tableActions": safeT('tableActions', 'common'),
            "edit": safeT('edit', 'common'),
            "delete": safeT('delete', 'common'),
            "update": safeT('update', 'common'),
            "create": safeT('create', 'common'),
            "cancel": safeT('cancel', 'common'),
            "save": safeT('save', 'common'),
            "back": safeT('back', 'common'),
            "createFailed": safeT('createFailed', 'common'),
            "createSuccess": safeT('createSuccess', 'common'),
            "updateFailed": safeT('updateFailed', 'common'),
            "updateSuccess": safeT('updateSuccess', 'common'),
            "saveFailed": safeT('saveFailed', 'common'),
            "saveSuceess": safeT('saveSuceess', 'common'),
            "invalidParameters": safeT('invalidParameters', 'common'),
            "description": safeT('description', 'common'),
            "getFailed": safeT('getFailed', 'common'),
            "getSuccess": safeT('getSuccess', 'common'),
            "deleteFailed": safeT('deleteFailed', 'common'),
            "deleteSuccess": safeT('deleteSuccess', 'common'),
            "disabled": safeT('disabled', 'common'),
            "search": safeT('search', 'common'),
            "noData": safeT('noData', 'common'),
            "dashboard": safeT('dashboard', 'common'),
            "inputDescription": safeT('inputDescription', 'common'),
            "reset": safeT('reset', 'common'),
            "status": safeT('status', 'common'),
            "enabled": safeT('enabled', 'common'),
            "actions": safeT('actions', 'common'),
            "copySuccess": safeT('copySuccess', 'common'),
            "copyFailed": safeT('copyFailed', 'common'),
            "clickToCopy": safeT('clickToCopy', 'common'),
            "all": safeT('all', 'common'),
            "confirmDelete": safeT('confirmDelete', 'common'),
            "isRequired": safeT('isRequired', 'common'),
            "pleaseInputSortValue": safeT('pleaseInputSortValue', 'common'),
            "build": safeT('build', 'common'),
            "undo": safeT('undo', 'common'),
            "redo": safeT('redo', 'common'),
            "format": safeT('format', 'common'),
            "find": safeT('find', 'common'),
            "searchPlaceholder": safeT('searchPlaceholder', 'common'),
            "sort": safeT('sort', 'common'),
            "copy": safeT('copy', 'common'),
            "noSearchResults": safeT('noSearchResults', 'common'),
            "editParam": safeT('editParam', 'common'),
            "group": safeT('group', 'common'),
            "unknownGroup": safeT('unknownGroup', 'common'),
            "formValidationFailed": safeT('formValidationFailed', 'common'),
            "descriptionPlaceholder": safeT('descriptionPlaceholder', 'common'),
            "category": safeT('category', 'common'),
            "categoryRequired": safeT('categoryRequired', 'common'),
            "pleaseEnter": safeT('pleaseEnter', 'common'),
            "buildFailed": safeT('buildFailed', 'common'),
            "operationFailed": safeT('operationFailed', 'common'),
            "pleaseSelect": safeT('pleaseSelect', 'common'),
            "id": safeT('id', 'common'),
            "addParam": safeT('addParam', 'common'),
            "defaultValue": safeT('defaultValue', 'common'),
            "pleaseEnterDefaultValue": safeT('pleaseEnterDefaultValue', 'common'),
            "exampleValue": safeT('exampleValue', 'common'),
            "paramName": safeT('paramName', 'common'),
            "pleaseEnterParamName": safeT('pleaseEnterParamName', 'common'),
            "paramType": safeT('paramType', 'common'),
            "pleaseSelectParamType": safeT('pleaseSelectParamType', 'common'),
            "name": safeT('name', 'common'),
            "pleaseEnterName": safeT('pleaseEnterName', 'common'),
            "code": safeT('code', 'common'),
            "paramCode": safeT('paramCode', 'common'),
            "pleaseEnterParamCode": safeT('pleaseEnterParamCode', 'common'),
            "pleaseEnterCode": safeT('pleaseEnterCode', 'common'),
        },
        system_definitions: {
            type_spec_designer: {
                "typeCode": safeT('typeCode', 'system_definitions/type_spec_designer'),
                "goType": safeT('goType', 'system_definitions/type_spec_designer'),
                "typeDescription": safeT('typeDescription', 'system_definitions/type_spec_designer'),
                "pleaseInputTypeDescription": safeT('pleaseInputTypeDescription', 'system_definitions/type_spec_designer'),
                "confirmDeleteBaseType": safeT('confirmDeleteBaseType', 'system_definitions/type_spec_designer'),
                "baseTypeManagement": safeT('baseTypeManagement', 'system_definitions/type_spec_designer'),
                "baseType": safeT('baseType', 'system_definitions/type_spec_designer'),
                "template": safeT('template', 'system_definitions/type_spec_designer'),
                "editBaseType": safeT('editBaseType', 'system_definitions/type_spec_designer'),
                "pleaseInputTypeCode": safeT('pleaseInputTypeCode', 'system_definitions/type_spec_designer'),
                "pleaseInputTypeName": safeT('pleaseInputTypeName', 'system_definitions/type_spec_designer'),
                "typeDesigner": safeT('typeDesigner', 'system_definitions/type_spec_designer'),
                "templateManagement": safeT('templateManagement', 'system_definitions/type_spec_designer'),
                "createTemplate": safeT('createTemplate', 'system_definitions/type_spec_designer'),
                "editTemplate": safeT('editTemplate', 'system_definitions/type_spec_designer'),
                "templateParams": safeT('templateParams', 'system_definitions/type_spec_designer'),
                "typeName": safeT('typeName', 'system_definitions/type_spec_designer'),
                "pleaseSelectBaseType": safeT('pleaseSelectBaseType', 'system_definitions/type_spec_designer'),
                "pleaseSelectBuildTemplate": safeT('pleaseSelectBuildTemplate', 'system_definitions/type_spec_designer'),
                "buildTemplate": safeT('buildTemplate', 'system_definitions/type_spec_designer'),
                "entityField": safeT('entityField', 'system_definitions/type_spec_designer'),
                "pleaseInputEntityField": safeT('pleaseInputEntityField', 'system_definitions/type_spec_designer'),
                "isArrayType": safeT('isArrayType', 'system_definitions/type_spec_designer'),
                "arrayTypeTooltip": safeT('arrayTypeTooltip', 'system_definitions/type_spec_designer'),
                "parentType": safeT('parentType', 'system_definitions/type_spec_designer'),
                "pleaseSelectParentType": safeT('pleaseSelectParentType', 'system_definitions/type_spec_designer'),
                "unknownType": safeT('unknownType', 'system_definitions/type_spec_designer'),
                "pleaseInputGoType": safeT('pleaseInputGoType', 'system_definitions/type_spec_designer'),
            },
            status_code_designer: {
                "statusCodeDesigner": safeT('statusCodeDesigner', 'system_definitions/status_code_designer'),
                "segment": safeT('segment', 'system_definitions/status_code_designer'),
                "belongGroup": safeT('belongGroup', 'system_definitions/status_code_designer'),
                "statusMessage": safeT('statusMessage', 'system_definitions/status_code_designer'),
                "statusMessageRequired": safeT('statusMessageRequired', 'system_definitions/status_code_designer'),
                "statusMessagePlaceholder": safeT('statusMessagePlaceholder', 'system_definitions/status_code_designer'),
                "statusCodeName": safeT('statusCodeName', 'system_definitions/status_code_designer'),
                "statusCodeNameRequired": safeT('statusCodeNameRequired', 'system_definitions/status_code_designer'),
                "statusCodeNamePlaceholder": safeT('statusCodeNamePlaceholder', 'system_definitions/status_code_designer'),
                "groupNameRequired": safeT('groupNameRequired', 'system_definitions/status_code_designer'),
                "groupNamePlaceholder": safeT('groupNamePlaceholder', 'system_definitions/status_code_designer'),
                "groupCode": safeT('groupCode', 'system_definitions/status_code_designer'),
                "groupCodeRequired": safeT('groupCodeRequired', 'system_definitions/status_code_designer'),
                "belongGroupRequired": safeT('belongGroupRequired', 'system_definitions/status_code_designer'),
                "belongGroupPlaceholder": safeT('belongGroupPlaceholder', 'system_definitions/status_code_designer'),
                "segmentName": safeT('segmentName', 'system_definitions/status_code_designer'),
                "segmentNameRequired": safeT('segmentNameRequired', 'system_definitions/status_code_designer'),
                "segmentNamePlaceholder": safeT('segmentNamePlaceholder', 'system_definitions/status_code_designer'),
                "segmentCode": safeT('segmentCode', 'system_definitions/status_code_designer'),
                "segmentCodeRequired": safeT('segmentCodeRequired', 'system_definitions/status_code_designer'),
                "segmentCodeFormat": safeT('segmentCodeFormat', 'system_definitions/status_code_designer'),
                "segmentCodePlaceholder": safeT('segmentCodePlaceholder', 'system_definitions/status_code_designer'),
                "parentSegment": safeT('parentSegment', 'system_definitions/status_code_designer'),
                "parentSegmentPlaceholder": safeT('parentSegmentPlaceholder', 'system_definitions/status_code_designer'),
                "businessCodeFormat": safeT('businessCodeFormat', 'system_definitions/status_code_designer'),
                "statusCode": safeT('statusCode', 'system_definitions/status_code_designer'),
                "statusCodeRequired": safeT('statusCodeRequired', 'system_definitions/status_code_designer'),
                "statusCodeFormat": safeT('statusCodeFormat', 'system_definitions/status_code_designer'),
                "statusCodePlaceholder": safeT('statusCodePlaceholder', 'system_definitions/status_code_designer'),
                "detailDescription": safeT('detailDescription', 'system_definitions/status_code_designer'),
                "detailDescriptionPlaceholder": safeT('detailDescriptionPlaceholder', 'system_definitions/status_code_designer'),
                "groupManagement": safeT('groupManagement', 'system_definitions/status_code_designer'),
                "segmentManagement": safeT('segmentManagement', 'system_definitions/status_code_designer'),
                "confirmDeleteGroup": safeT('confirmDeleteGroup', 'system_definitions/status_code_designer'),
                "confirmDeleteSegment": safeT('confirmDeleteSegment', 'system_definitions/status_code_designer'),
                "groupCodePlaceholder": safeT('groupCodePlaceholder', 'system_definitions/status_code_designer'),
                "business": safeT('business', 'system_definitions/status_code_designer'),
                "module": safeT('module', 'system_definitions/status_code_designer'),
                "moduleSegmentPlaceholder": safeT('moduleSegmentPlaceholder', 'system_definitions/status_code_designer'),
                "moduleSegment": safeT('moduleSegment', 'system_definitions/status_code_designer'),
                "businessSegment": safeT('businessSegment', 'system_definitions/status_code_designer'),
                "businessSegmentRequired": safeT('businessSegmentRequired', 'system_definitions/status_code_designer'),
                "businessSegmentPlaceholder": safeT('businessSegmentPlaceholder', 'system_definitions/status_code_designer'),
                "moduleSegmentRequired": safeT('moduleSegmentRequired', 'system_definitions/status_code_designer'),
                "statusCodeMustBe3Digits": safeT('statusCodeMustBe3Digits', 'system_definitions/status_code_designer'),
            },
            err_code_designer: {
                "systemError": safeT('systemError', 'system_definitions/err_code_designer'),
                "businessError": safeT('businessError', 'system_definitions/err_code_designer'),
                "requestError": safeT('requestError', 'system_definitions/err_code_designer'),
                "errCodeDesigner": safeT('errCodeDesigner', 'system_definitions/err_code_designer'),
                "errCodeName": safeT('errCodeName', 'system_definitions/err_code_designer'),
                "errMessage": safeT('errMessage', 'system_definitions/err_code_designer'),
                "errCode": safeT('errCode', 'system_definitions/err_code_designer'),
                "errType": safeT('errType', 'system_definitions/err_code_designer'),
                "statusCode": safeT('statusCode', 'system_definitions/err_code_designer'),
                "unknownErrorType": safeT('unknownErrorType', 'system_definitions/err_code_designer'),
                "segment": safeT('segment', 'system_definitions/err_code_designer'),
                "businessCode": safeT('businessCode', 'system_definitions/err_code_designer'),
                "moduleCode": safeT('moduleCode', 'system_definitions/err_code_designer'),
                "unknownBusiness": safeT('unknownBusiness', 'system_definitions/err_code_designer'),
                "unknownModule": safeT('unknownModule', 'system_definitions/err_code_designer'),
                "unknownGroup": safeT('unknownGroup', 'system_definitions/err_code_designer'),
                "segmentManagement": safeT('segmentManagement', 'system_definitions/err_code_designer'),
                "segmentName": safeT('segmentName', 'system_definitions/err_code_designer'),
                "segmentCode": safeT('segmentCode', 'system_definitions/err_code_designer'),
                "segmentDescription": safeT('segmentDescription', 'system_definitions/err_code_designer'),
                "business": safeT('business', 'system_definitions/err_code_designer'),
                "module": safeT('module', 'system_definitions/err_code_designer'),
                "parentSegment": safeT('parentSegment', 'system_definitions/err_code_designer'),
                "unknownParent": safeT('unknownParent', 'system_definitions/err_code_designer'),
                "errCodeNameFormat": safeT('errCodeNameFormat', 'system_definitions/err_code_designer'),
                "segmentNameRequired": safeT('segmentNameRequired', 'system_definitions/err_code_designer'),
                "segmentNamePlaceholder": safeT('segmentNamePlaceholder', 'system_definitions/err_code_designer'),
                "parentSegmentPlaceholder": safeT('parentSegmentPlaceholder', 'system_definitions/err_code_designer'),
                "errCodeNameRequired": safeT('errCodeNameRequired', 'system_definitions/err_code_designer'),
                "errMessageRequired": safeT('errMessageRequired', 'system_definitions/err_code_designer'),
                "businessSegment": safeT('businessSegment', 'system_definitions/err_code_designer'),
                "businessSegmentRequired": safeT('businessSegmentRequired', 'system_definitions/err_code_designer'),
                "moduleSegment": safeT('moduleSegment', 'system_definitions/err_code_designer'),
                "moduleSegmentRequired": safeT('moduleSegmentRequired', 'system_definitions/err_code_designer'),
                "errCodeRequired": safeT('errCodeRequired', 'system_definitions/err_code_designer'),
                "selectStatusCode": safeT('selectStatusCode', 'system_definitions/err_code_designer'),
                "selectErrType": safeT('selectErrType', 'system_definitions/err_code_designer'),
                "errorReason": safeT('errorReason', 'system_definitions/err_code_designer'),
                "errorReasonPlaceholder": safeT('errorReasonPlaceholder', 'system_definitions/err_code_designer'),
                "verbs": safeT('verbs', 'system_definitions/err_code_designer'),
                "verbsPlaceholder": safeT('verbsPlaceholder', 'system_definitions/err_code_designer'),
                "segmentModuleCodeFormat": safeT('segmentModuleCodeFormat', 'system_definitions/err_code_designer'),
                "segmentBusinessCodeFormat": safeT('segmentBusinessCodeFormat', 'system_definitions/err_code_designer'),
                "segmentBusinessCodePlaceholder": safeT('segmentBusinessCodePlaceholder', 'system_definitions/err_code_designer'),
                "segmentModuleCodePlaceholder": safeT('segmentModuleCodePlaceholder', 'system_definitions/err_code_designer'),
            },
        },
        user: {
            "title": safeT('title', 'user'),
            "email-login": safeT('email-login', 'user'),
            "password": safeT('password', 'user'),
            "apple-login": safeT('apple-login', 'user'),
            "google-login": safeT('google-login', 'user'),
            "email": safeT('email', 'user'),
        },
        group: {
            "groupNameRequired": safeT('groupNameRequired', 'group'),
            "groupName": safeT('groupName', 'group'),
            "groupCode": safeT('groupCode', 'group'),
            "groupSelect": safeT('groupSelect', 'group'),
            "group": safeT('group', 'group'),
            "parentGroup": safeT('parentGroup', 'group'),
            "groupManagement": safeT('groupManagement', 'group'),
            "parentGroupSelect": safeT('parentGroupSelect', 'group'),
            "groupCodeRequired": safeT('groupCodeRequired', 'group'),
            "confirmDeleteGroup": safeT('confirmDeleteGroup', 'group'),
        },
        router: {
            "documentToolsTitle": safeT('documentToolsTitle', 'router'),
            "mediaPlayerTitle": safeT('mediaPlayerTitle', 'router'),
            "imageToolsTitle": safeT('imageToolsTitle', 'router'),
            "mediaPlayerDescription": safeT('mediaPlayerDescription', 'router'),
            "imageProcessorTitle": safeT('imageProcessorTitle', 'router'),
            "mediaToolsTitle": safeT('mediaToolsTitle', 'router'),
            "imageProcessorDescription": safeT('imageProcessorDescription', 'router'),
            "mediaConverterTitle": safeT('mediaConverterTitle', 'router'),
            "mediaConverterDescription": safeT('mediaConverterDescription', 'router'),
            "imageConverterTitle": safeT('imageConverterTitle', 'router'),
            "devmpTitle": safeT('devmpTitle', 'router'),
            "developmentTitle": safeT('developmentTitle', 'router'),
            "systemDefinitionsTitle": safeT('systemDefinitionsTitle', 'router'),
            "devopsTitle": safeT('devopsTitle', 'router'),
            "apiManagementTitle": safeT('apiManagementTitle', 'router'),
            "apiManagementDescription": safeT('apiManagementDescription', 'router'),
            "databaseTitle": safeT('databaseTitle', 'router'),
            "databaseDescription": safeT('databaseDescription', 'router'),
            "codeGenTitle": safeT('codeGenTitle', 'router'),
            "codeGenDescription": safeT('codeGenDescription', 'router'),
            "i18nTitle": safeT('i18nTitle', 'router'),
            "i18nDescription": safeT('i18nDescription', 'router'),
            "typeSpecDesignerTitle": safeT('typeSpecDesignerTitle', 'router'),
            "typeSpecDesignerDescription": safeT('typeSpecDesignerDescription', 'router'),
            "statusCodeDesignerTitle": safeT('statusCodeDesignerTitle', 'router'),
            "statusCodeDesignerDescription": safeT('statusCodeDesignerDescription', 'router'),
            "errorCodeDesignerTitle": safeT('errorCodeDesignerTitle', 'router'),
            "errorCodeDesignerDescription": safeT('errorCodeDesignerDescription', 'router'),
            "pipelineTitle": safeT('pipelineTitle', 'router'),
            "pipelineDescription": safeT('pipelineDescription', 'router'),
            "codeRepoTitle": safeT('codeRepoTitle', 'router'),
            "codeRepoDescription": safeT('codeRepoDescription', 'router'),
            "deployTitle": safeT('deployTitle', 'router'),
            "deployDescription": safeT('deployDescription', 'router'),
            "home": safeT('home', 'router'),
            "toolsTitle": safeT('toolsTitle', 'router'),
            "imageConverterDescription": safeT('imageConverterDescription', 'router'),
        },
        devops: {
            codeRepo: {
                "backToRepository": safeT('backToRepository', 'devops/codeRepo'),
                "create": safeT('create', 'devops/codeRepo'),
                "description": safeT('description', 'devops/codeRepo'),
                "emptyTip": safeT('emptyTip', 'devops/codeRepo'),
                "name": safeT('name', 'devops/codeRepo'),
                "repositoryDetail": safeT('repositoryDetail', 'devops/codeRepo'),
                "repositoryList": safeT('repositoryList', 'devops/codeRepo'),
                "source": safeT('source', 'devops/codeRepo'),
                "title": safeT('title', 'devops/codeRepo'),
                "url": safeT('url', 'devops/codeRepo'),
                "commitTotal": safeT('commitTotal', 'devops/codeRepo'),
                "currentVersion": safeT('currentVersion', 'devops/codeRepo'),
                "addVersion": safeT('addVersion', 'devops/codeRepo'),
                "origin": safeT('origin', 'devops/codeRepo'),
                "noVersions": safeT('noVersions', 'devops/codeRepo'),
                "versionList": safeT('versionList', 'devops/codeRepo'),
                "namePlaceholder": safeT('namePlaceholder', 'devops/codeRepo'),
                "urlPlaceholder": safeT('urlPlaceholder', 'devops/codeRepo'),
                "descriptionPlaceholder": safeT('descriptionPlaceholder', 'devops/codeRepo'),
            },
            pipeline: {
                "projectOverview": safeT('projectOverview', 'devops/pipeline'),
                "createPipeline": safeT('createPipeline', 'devops/pipeline'),
                "pipelineList": safeT('pipelineList', 'devops/pipeline'),
                "extensionList": safeT('extensionList', 'devops/pipeline'),
                "projectNotFound": safeT('projectNotFound', 'devops/pipeline'),
                "noExtensions": safeT('noExtensions', 'devops/pipeline'),
                "currentRunInfo": safeT('currentRunInfo', 'devops/pipeline'),
                "noCurrentRunInfo": safeT('noCurrentRunInfo', 'devops/pipeline'),
                "extensions": safeT('extensions', 'devops/pipeline'),
                "history": safeT('history', 'devops/pipeline'),
                "noHistoryInfo": safeT('noHistoryInfo', 'devops/pipeline'),
                "run": safeT('run', 'devops/pipeline'),
                "inputPipelineName": safeT('inputPipelineName', 'devops/pipeline'),
                "extension": safeT('extension', 'devops/pipeline'),
                "pipelineName": safeT('pipelineName', 'devops/pipeline'),
                "selectExtension": safeT('selectExtension', 'devops/pipeline'),
                "addConfig": safeT('addConfig', 'devops/pipeline'),
            },
        },
        development: {
            database_designer: {
                "fieldTypeParams": safeT('fieldTypeParams', 'development/database_designer'),
                "supportedTypes": safeT('supportedTypes', 'development/database_designer'),
                "supportedTypesPlaceholder": safeT('supportedTypesPlaceholder', 'development/database_designer'),
                "databaseNameMustBePascalCase": safeT('databaseNameMustBePascalCase', 'development/database_designer'),
                "fieldBuilderParameters": safeT('fieldBuilderParameters', 'development/database_designer'),
                "tableNameMustBePascalCase": safeT('tableNameMustBePascalCase', 'development/database_designer'),
                "tableDesigner": safeT('tableDesigner', 'development/database_designer'),
                "pleaseEnterDatabaseName": safeT('pleaseEnterDatabaseName', 'development/database_designer'),
                "databaseName": safeT('databaseName', 'development/database_designer'),
                "databaseDesigner": safeT('databaseDesigner', 'development/database_designer'),
                "connectionTag": safeT('connectionTag', 'development/database_designer'),
                "databaseType": safeT('databaseType', 'development/database_designer'),
                "table": safeT('table', 'development/database_designer'),
                "tableAttrName": safeT('tableAttrName', 'development/database_designer'),
                "tableComment": safeT('tableComment', 'development/database_designer'),
                "fieldType": safeT('fieldType', 'development/database_designer'),
                "field": safeT('field', 'development/database_designer'),
                "fieldTypeManagement": safeT('fieldTypeManagement', 'development/database_designer'),
                "fieldManagement": safeT('fieldManagement', 'development/database_designer'),
                "tableName": safeT('tableName', 'development/database_designer'),
                "pleaseEnterConnectionTag": safeT('pleaseEnterConnectionTag', 'development/database_designer'),
                "pleaseSelectDatabaseType": safeT('pleaseSelectDatabaseType', 'development/database_designer'),
                "pleaseEnterFieldId": safeT('pleaseEnterFieldId', 'development/database_designer'),
                "fieldName": safeT('fieldName', 'development/database_designer'),
                "fieldComment": safeT('fieldComment', 'development/database_designer'),
                "zspecsType": safeT('zspecsType', 'development/database_designer'),
                "tableManagement": safeT('tableManagement', 'development/database_designer'),
                "pleaseEnterFieldName": safeT('pleaseEnterFieldName', 'development/database_designer'),
                "pleaseSelectFieldType": safeT('pleaseSelectFieldType', 'development/database_designer'),
                "pleaseEnterFieldComment": safeT('pleaseEnterFieldComment', 'development/database_designer'),
                "pleaseEnterZspecsType": safeT('pleaseEnterZspecsType', 'development/database_designer'),
                "pleaseEnterSortOrder": safeT('pleaseEnterSortOrder', 'development/database_designer'),
                "pleaseEnterTableId": safeT('pleaseEnterTableId', 'development/database_designer'),
                "pleaseEnterTableName": safeT('pleaseEnterTableName', 'development/database_designer'),
                "pleaseEnterTableAttrName": safeT('pleaseEnterTableAttrName', 'development/database_designer'),
                "pleaseEnterTableComment": safeT('pleaseEnterTableComment', 'development/database_designer'),
                "pleaseSelectTableFields": safeT('pleaseSelectTableFields', 'development/database_designer'),
                "tableFields": safeT('tableFields', 'development/database_designer'),
            },
        },
        web_tools: {
            "toolsTitle": safeT('toolsTitle', 'web_tools'),
            media_tools: {
                "mediaPlayerTitle": safeT('mediaPlayerTitle', 'web_tools/media_tools'),
                "mediaPlayerDescription": safeT('mediaPlayerDescription', 'web_tools/media_tools'),
                "mediaConverterTitle": safeT('mediaConverterTitle', 'web_tools/media_tools'),
                "mediaConverterDescription": safeT('mediaConverterDescription', 'web_tools/media_tools'),
            },
            image_tools: {
                "imageConverterDescription": safeT('imageConverterDescription', 'web_tools/image_tools'),
                "imageProcessorTitle": safeT('imageProcessorTitle', 'web_tools/image_tools'),
                "imageProcessorDescription": safeT('imageProcessorDescription', 'web_tools/image_tools'),
                "imageConverterTitle": safeT('imageConverterTitle', 'web_tools/image_tools'),
            },
        },
    }
    }, [i18n, ns]);

    return { t, i18n } as UseI18nReturn;
};
