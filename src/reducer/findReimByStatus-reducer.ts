import {  IFindReimStatusState } from ".";
import { AnyAction } from "redux";
import { findReimStatusTypes } from "../action-maps/findReimByStatus-action-map";
import { Reimbursement } from "../models/reimbursement";

const initialState:IFindReimStatusState = {
    reimStatus:[],
    currentReim: new Reimbursement (0,'',0,'','','','','',''),
    errorMessage: '',
    //reimByUserId:[],
    checked:false
}
export const findReimByStatusReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case findReimStatusTypes.GET_REIM_STATUS:{
            return {
                ...state,
                reimStatus:action.payload.reimFound
            }
        }  
        case findReimStatusTypes.FAILED_TO_RETRIEVE_REIM_STATUS:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Reimbursement'
            }
        } 
        default:
            return state;
    }
}