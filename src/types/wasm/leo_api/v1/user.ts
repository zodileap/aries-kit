import { Headers, WasmApiResponse } from "./api"

export interface UserInstance {
    /**
    * 注册用户
    */
    userRegisterPost(data: RegisterPostReq, headers?: Headers): Promise<WasmApiResponse<RegisterPostResp>>;
    /**
    * 用户登录(通过邮箱和密码登录)
    */
    userLoginPost(data: LoginPostReq, headers?: Headers): Promise<WasmApiResponse<LoginPostResp>>;
    /**
    * 判断用户是否存在
    */
    userExistPost(data: ExistPostReq, headers?: Headers): Promise<WasmApiResponse<ExistPostResp>>;
}


/**
* 
*/
export interface RegisterPostReq {
}
/**
* 响应 - 注册用户
*/
export interface RegisterPostResp {
    /**
        * 
        */
    success: boolean;
}

/**
* 
*/
export interface LoginPostReq {
}
/**
* 响应 - 登录
*/
export interface LoginPostResp {
    /**
        * IdentityToken 身份令牌
        */
    identityToken: string;
    /**
        * UserId 用户ID
        */
    userId: string;
}

/**
* 
*/
export interface ExistPostReq {
}
/**
* 响应 - 判断用户是否存在
*/
export interface ExistPostResp {
    /**
        * 
        */
    exist: boolean;
}


