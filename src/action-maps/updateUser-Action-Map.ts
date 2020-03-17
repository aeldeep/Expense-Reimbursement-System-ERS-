import { Dispatch } from "redux";
import { updateUserData } from "../remote/user/updateUser-remote";


export const updateUserTypes = {
    UPDATE_USER: 'USER_UPDATE_USER',
    FAILED_TO_UPDATE_USER:'USER_FAILED_TO_BE_UPDATE_USER'
}


export const updateUserActionMapper = (userId:number,username: string, password: string,firstName: string,lastName: string,email: string,role :string) => async  (dispatch:Dispatch) => {
    try {
        let updateUserInfo = await updateUserData(userId,username,password,firstName,lastName,email,role)
        dispatch({
          type:  updateUserTypes.UPDATE_USER,
          payload:{
            updateUserInfo
          }
        })
    }catch(e){
        console.log('error in action mapper'+e);
        
        if(e.status === 400){
            dispatch({
                type:updateUserTypes.FAILED_TO_UPDATE_USER
            })
        }else {
            dispatch({
                type:updateUserTypes.FAILED_TO_UPDATE_USER
            })
        }
    }

}