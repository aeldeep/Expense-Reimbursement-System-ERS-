import { Dispatch } from "redux";
import { updateReimData } from "../remote/Reimbursement/updateReim-Remote";


export const updateReimTypes = {
    UPDATE_REIM: 'REIM_UPDATE_REIM',
    FAILED_TO_UPDATE_REIM:'REIM_FAILED_TO_BE_UPDATE_REIM'
}


export const updateReimActionMapper = (reimbursementId: number, author: string,amount: number, dateSubmitted: string, dateResolved: string,description: string, resolver: string, status: string, type: string ) => async (dispatch:Dispatch) =>
{
    try {
        let updateReimInfo = await updateReimData(reimbursementId,author,amount,dateSubmitted,dateResolved,description,resolver,status,type)
        dispatch({
          type:  updateReimTypes.UPDATE_REIM,
          payload:{
            updateReimInfo
          } 
        })
    }catch(e){
        console.log('error in action mapper'+e);
        
            dispatch({
                type:updateReimTypes.FAILED_TO_UPDATE_REIM
            })
        
    }

}