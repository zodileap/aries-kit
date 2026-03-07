import { AriGoogleLoginButtonProps } from '@ari/types/components';
import { useCss } from '@ari/utils';
import  { useEffect, useRef } from 'react';

declare global {
    interface Window {
        /**
         * Google认证相关的全局对象
         * 通过引入Google认证脚本后自动注入到window对象中
         */
        google: any;
    }
}

/**
 * Google登录按钮组件
 * 提供标准的 Google 账号登录功能按钮，使用 Google Identity Services 实现
 * 
 * Params:
 * 
 *   继承 GoogleLoginButtonProps 的所有属性
 * 
 * Returns:
 * 
 *   ReactElement: 返回 Google 登录按钮组件
 * 
 * Example:
 * 
 *   <AriGoogleLoginButton />
 */
export const AriGoogleLoginButton: React.FC<AriGoogleLoginButtonProps> = () => {
    // Google按钮容器的引用
    const googleButtonRef = useRef(null);
    const cn = useCss("social-login-button");

    // Google认证的客户端ID
    const clientId = "";

    /**
     * Google登录成功的回调函数
     * 
     * Params:
     * 
     *   - googleUser: Google用户信息对象
     * 
     * Returns:
     *   
     *   void: 无返回值
     */
    const onSuccess = (googleUser: unknown) => {

    }

    // 初始化Google登录按钮
    useEffect(() => {
        if (typeof window.google !== 'undefined') {
            // 初始化Google Identity Services
            window.google.accounts.id.initialize({
                client_id: clientId,
                callback: onSuccess,
            });

            // 渲染Google登录按钮
            window.google.accounts.id.renderButton(
                googleButtonRef.current,
                {
                    size: 'large',
                    shape: "rectangular",
                    theme: "outline",
                    logo_alignment: "center"
                }
            );
        }
    }, [clientId, onSuccess]);

    return <div ref={googleButtonRef} className={cn.gen(cn.b(), cn.e('google'))}></div>;
};