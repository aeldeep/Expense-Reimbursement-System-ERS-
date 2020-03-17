import { Dispatch } from "redux";
import { findReimStatus } from "../remote/Reimbursement/findReimByStatus-Remote";
import { Reimbursement } from "../models/reimbursement";

export const findReimStatusTypes = {
    GET_REIM_STATUS: 'REIM_GET_REIM_STATUS',
    FAILED_TO_RETRIEVE_REIM_STATUS:'REIM_FAILED_TO_RETRIEVE_REIM_STATUS',
    RESET_SEARCH: 'RESET_SEARCH'
}



export const findReimByStatusActionMapper = (id:number) => async  (dispatch:Dispatch) => {
    try {
        //console.log('we are in action mapper '+status);

        let reimFound:Reimbursement[] = await findReimStatus(id)
        console.log('we are in Action Map '+ reimFound);
        
        dispatch({
          type:  findReimStatusTypes.GET_REIM_STATUS,
          payload:{
            reimFound
          }
        })
    }catch(e){
        console.log(e);
        if(e.status === 400){
            dispatch({
                type:findReimStatusTypes.FAILED_TO_RETRIEVE_REIM_STATUS,
            })
        }else {
            dispatch({
                type:findReimStatusTypes.RESET_SEARCH
            })
        }
    }
}