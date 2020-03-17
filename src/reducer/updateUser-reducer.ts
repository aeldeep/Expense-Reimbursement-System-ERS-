import { AnyAction } from "redux";
import { User } from "../models/user";
import { updateUserTypes } from "../action-maps/updateUser-Action-Map";
import { IUpdateUserState } from ".";


const initialState:IUpdateUserState = {
    userUpdate: new User(0,'','','','','',0,''),
    errorMessage:''
}

export const updateUserReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case updateUserTypes.UPDATE_USER:{
            return {
                ...state,
                userUpdate:action.payload.userUpdate
            }
        }  
        case updateUserTypes.FAILED_TO_UPDATE_USER:{
            return {
                ...state,
                errorMessage:'Failed to Update User'
            }
        } 
        default:
            console.log(state);
            return state;
            
            
    }
}