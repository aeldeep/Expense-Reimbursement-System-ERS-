import { Dispatch } from "redux";
import { User } from "../models/user";
import { reimGetAllUsers } from "../remote/user/users-remote";

export const usersTypes = {
    GET_ALL_USERS: 'USER_GET_ALL_USERS',
    FAILED_TO_RETRIEVE_USERS:'USER_FAILED_TO_RETRIEVE_USERS'
}



export const getAllUsersActionMapper = () => async (dispatch:Dispatch) => {

    try{

        let allUsers:User[] = await reimGetAllUsers()

        dispatch({
            type: usersTypes.GET_ALL_USERS,
            payload:{
                allUsers
            }
        })
    } catch (e){

        dispatch({
            type:usersTypes.FAILED_TO_RETRIEVE_USERS
        })
    }

}