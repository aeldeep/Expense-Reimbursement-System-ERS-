import { Dispatch } from "redux";
import { findUserId } from "../remote/user/findUserById-remote";

export const findUserTypes = {
    GET_USER: 'USER_GET_One_USER',
    FAILED_TO_RETRIEVE_USER:'USER_FAILED_TO_RETRIEVE_USER'
}


export const findUserByIdActionMapper = (id:number) => async  (dispatch:Dispatch) => {
    try {
        let userFound = await findUserId(id)
        dispatch({
          type:  findUserTypes.GET_USER,
          payload:{
            userFound
          }
        })
    }catch(e){
        console.log(e);
        
        if(e.status === 400){
            dispatch({
                type:findUserTypes.FAILED_TO_RETRIEVE_USER
            })
        }else {
            dispatch({
                type:findUserTypes.FAILED_TO_RETRIEVE_USER
            })
        }
    }

}