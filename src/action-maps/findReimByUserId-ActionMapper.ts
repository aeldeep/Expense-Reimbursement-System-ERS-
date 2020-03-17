import { Dispatch } from "redux";
import { Reimbursement } from "../models/reimbursement";
import { findReimUserId } from "../remote/Reimbursement/findReimByUserId-Remote";

export const findReimUserIdTypes = {
    GET_REIM_ID: 'REIM_GET_REIM_ID',
    FAILED_TO_RETRIEVE_REIM_ID:'REIM_FAILED_TO_RETRIEVE_REIM_ID',
    
}



export const findReimByUserIdActionMapper = (id:number) => async  (dispatch:Dispatch) => {
    try {
        //console.log('we are in action mapper '+status);

        let reimIdFound:Reimbursement[] = await findReimUserId(id)
        console.log('we are in Action Map '+ reimIdFound);
        
        dispatch({
          type:  findReimUserIdTypes.GET_REIM_ID,
          payload:{
            reimIdFound
          }
        })
    }catch(e){
        console.log(e);
        if(e.status === 400){
            dispatch({
                type:findReimUserIdTypes.FAILED_TO_RETRIEVE_REIM_ID,
            })
        }else {
            dispatch({
                type:findReimUserIdTypes.FAILED_TO_RETRIEVE_REIM_ID,
            })
        }
    }
}