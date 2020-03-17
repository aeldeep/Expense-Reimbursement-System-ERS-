import { IFindUserState } from ".";
import { AnyAction } from "redux";
import { User } from "../models/user";
import { findUserTypes } from "../action-maps/findUserById-action-map";


const initialState:IFindUserState = {
    userFound: new User(0,'','','','','',0,''),
    errorMessage:''
}

export const findUserReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case findUserTypes.GET_USER:{
            return {
                ...state,
                userFound:action.payload.userFound
            }
        }  
        case findUserTypes.FAILED_TO_RETRIEVE_USER:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve User'
            }
        } 
        default:
            return state;
    }
}