import { Headers, WasmApiResponse } from "./api"
export interface PermissionInstance {
    /**
    * 获取API令牌
    * url: permission/user/v1/get_api_token
    */
    userGetApiTokenPost(data: UserGetApiTokenPostReq, headers?: Headers): Promise<WasmApiResponse<UserGetApiTokenPostResp>>;
    /**
    * 更新API令牌
    * 
    * 只需要保证identitytoken和apitoken里的identitytoken是一致的
    * 如果没有传入旧的identitytoken或者新的token为空，返回401。
    * url: permission/user/v1/update_api_token
    */
    userUpdateApiTokenPost(data: UserUpdateApiTokenPostReq, headers?: Headers): Promise<WasmApiResponse<UserUpdateApiTokenPostResp>>;
    /**
    * 更新身份令牌
    * 
    * 需要验证上传的用户id、设备id、应用id 与 identitytoken是否一致。
    * 如果没有传入旧的identitytoken或者新的token为空，返回401。
    * url: permission/user/v1/update_identity
    */
    userUpdateIdentityPost(data: UserUpdateIdentityPostReq, headers?: Headers): Promise<WasmApiResponse<UserUpdateIdentityPostResp>>;
}


/**
* 请求 - 获取API令牌
*/
export interface UserGetApiTokenPostReq {
    /**
        * 用户唯一标识
        */
    uuid: string;
    /**
        * 设备唯一标识
        */
    deviceId: string;
    /**
        * 应用唯一标识
        */
    appId: string;
    /**
        * 身份令牌(可选)
        */
    identityToken?: string;
}
/**
* 响应 - 获取API令牌
*/
export interface UserGetApiTokenPostResp {
    /**
        * API访问令牌
        */
    apiToken?: string;
}

/**
* 请求 - 更新API令牌
*/
export interface UserUpdateApiTokenPostReq {
    /**
        * 身份令牌
        */
    identityToken?: string;
    /**
        * API访问令牌
        */
    apiToken?: string;
}
/**
* 响应 - 更新API令牌
*/
export interface UserUpdateApiTokenPostResp {
    /**
        * 更新后的API令牌
        */
    apiToken?: string;
}

/**
* 请求 - 更新身份令牌
*/
export interface UserUpdateIdentityPostReq {
    /**
        * 身份令牌
        */
    identityToken?: string;
}
/**
* 响应 - 更新身份令牌
*/
export interface UserUpdateIdentityPostResp {
    /**
        * 更新后的身份令牌
        */
    identityToken?: string;
}


