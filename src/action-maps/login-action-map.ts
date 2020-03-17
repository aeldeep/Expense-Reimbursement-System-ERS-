import { Dispatch } from "redux";
import { reimLogin } from "../remote/user/loginComponent";
export const loginTypes = {
    SUCCESSFUL_LOGIN : 'USER_SUCCESSFUL_LOGIN',
    INVALID_CREDENTIALS: 'USER_INVALID_CREDENTIALS',
    INTERNAL_SERVER: 'USER_INTERNAL_SERVER_ERROR'
}

export const reimLoginActionMapper = (username:string, password:string) => async  (dispatch:Dispatch) => {
    try {
        let user = await reimLogin(username,password)
        dispatch({
          type:  loginTypes.SUCCESSFUL_LOGIN,
          payload:{
              user
          }
        })
    }catch(e){
        console.log(e);
        
        if(e.status === 400){
            dispatch({
                type:loginTypes.INVALID_CREDENTIALS
            })
        }else {
            dispatch({
                type:loginTypes.INTERNAL_SERVER
            })
        }
    }

}