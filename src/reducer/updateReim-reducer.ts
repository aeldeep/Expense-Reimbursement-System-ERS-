import { AnyAction } from "redux";
import { IUpdateReimState } from ".";
import { Reimbursement } from "../models/reimbursement";
import { updateReimTypes } from "../action-maps/updateReim-Action-Map";


const initialState:IUpdateReimState = {
    updateReimInfo:new Reimbursement (0,'',0,'','','','','',''),
    errorMessage:''
}

export const updateReimReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case updateReimTypes.UPDATE_REIM:{
            return {
                ...state,
                updateReimInfo:action.payload.updateReimInfo
            }
        }   
        case updateReimTypes.FAILED_TO_UPDATE_REIM:{
            return {
                ...state,
                errorMessage:'REIM_FAILED_TO_BE_UPDATE_REIM'
            }
        } 
        default:
            console.log( 'we are in the default reducer '+ state);
            return state;
            
            
    }
}