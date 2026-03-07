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
            desc: 'Google OAuth客户端ID',
            type: 'string',
            default: '-'
        },
        {
            param: 'onSuccess',
            desc: '登录成功回调',
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
            desc: 'Apple开发者ID',
            type: 'string',
            default: '-'
        },
        {
            param: 'onSuccess',
            desc: '登录成功回调',
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
            examples={socialLoginExamples}
            api={googleLoginAPI}
        />
    );
};

export default SocialLoginButtonDoc;
