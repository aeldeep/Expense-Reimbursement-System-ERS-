import {   IFindReimByUserIdState } from ".";
import { AnyAction } from "redux";
import { Reimbursement } from "../models/reimbursement";
import { findReimUserIdTypes } from "../action-maps/findReimByUserId-ActionMapper";

const initialState:IFindReimByUserIdState = {
    //reimStatus:[],
    currentReim: new Reimbursement (0,'',0,'','','','','',''),
    errorMessage: '',
    reimByUserId:[],
    checked:false
}
export const findReimByUserIdReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case findReimUserIdTypes.GET_REIM_ID:{
            return {
                ...state,
                reimByUserId:action.payload.reimIdFound
            }
        }  
        case findReimUserIdTypes.FAILED_TO_RETRIEVE_REIM_ID:{
            return {
                ...state,
                errorMessage:'Failed to Retrieve Reimbursement'
            }
        } 
        default:
            return state;
    }
}