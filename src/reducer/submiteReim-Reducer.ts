import { AnyAction } from "redux";
import { updateUserTypes } from "../action-maps/updateUser-Action-Map";
import { ISubmiteReimState } from ".";
import { Reimbursement } from "../models/reimbursement";
import { submiteReimTypes } from "../action-maps/submiteReim-Action-Map";

const initialState:ISubmiteReimState = {
    SubmiteReim: new Reimbursement (0,'',0,'','','','','',''),
    errorMessage:''
}

export const submiteReimReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case submiteReimTypes.SUBMITE_REIM:{
            return {
                ...state,
                submiteReim:action.payload.submiteReim
            }
        }  
        case updateUserTypes.FAILED_TO_UPDATE_USER:{
            return {
                ...state,
                errorMessage:'Failed to Submite The Reimbursement'
            }
        } 
        default:
            return state;
            
            
    }
}