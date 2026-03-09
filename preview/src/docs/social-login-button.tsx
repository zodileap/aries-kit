import React from 'react';
import Doc from '../layout/doc';
import { DocExample, DocAPI } from '../layout/types';
import { BasicSocialLogin } from './codes/social-login-button';
import { sourceMap } from './codes/source-map';

export const socialLoginExamples: Record<string, DocExample> = {
    basic: {
        title: '基础用法',
        key: 'basic-usage',
        description: '社交账号登录按钮，支持Google和Apple登录。',
        demos: [{
            component: BasicSocialLogin,
            sourceCode: sourceMap['social-login-button']['BasicSocialLogin']
        }]
    }
};

export const googleLoginAPI: DocAPI = {
    props: [
        {
            param: 'clientId',
            desc: 'Google OAuth 应用的 Client ID，用于发起登录授权',
            type: 'string',
            default: '-'
        },
        {
            param: 'onSuccess',
            desc: '第三方登录成功并返回授权结果后触发',
            type: '(response: any) => void',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const appleLoginAPI: DocAPI = {
    props: [
        {
            param: 'clientId',
            desc: 'Apple Sign In 服务标识（Client ID）',
            type: 'string',
            default: '-'
        },
        {
            param: 'onSuccess',
            desc: '第三方登录成功并返回授权结果后触发',
            type: '(response: any) => void',
            default: '-'
        }
    ],
    events: [],
    slots: []
};

export const anchors = Object.values(socialLoginExamples).map(example => ({
    key: example.key,
    label: example.title
})).concat(
    { key: 'google-api', label: 'Google Login API' },
    { key: 'apple-api', label: 'Apple Login API' }
);

const SocialLoginButtonDoc: React.FC = () => {
    return (
        <Doc
            title="Social Login Button 社交登录按钮"
            description="提供标准的社交账号登录按钮，支持Google和Apple登录。"
            apiTitle="Google Login API"
            apiAnchor="google-api"
            examples={socialLoginExamples}
            api={googleLoginAPI}
            extraProps={[
                {
                    title: 'Apple Login API',
                    data: appleLoginAPI.props,
                    anchor: 'apple-api'
                }
            ]}
        />
    );
};

export default SocialLoginButtonDoc;
