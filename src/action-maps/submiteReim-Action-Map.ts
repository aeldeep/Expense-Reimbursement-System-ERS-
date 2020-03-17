import { Dispatch } from "redux";
import { submiteReimeData } from "../remote/Reimbursement/submiteReim-Remote";


export const submiteReimTypes = {
    SUBMITE_REIM: 'REIM_SUBMITE_REIM',
    FAILED_TO_SUBMITE_REIM:'REIM_FAILE_TO_SUBMITE_REIM'
}


export const submiteReimActionMapper = (  amount: number, description: string, type: string ) => async  (dispatch:Dispatch) => {
    try {
        let submiteReim = await submiteReimeData(amount,description,type)
        dispatch({
          type:  submiteReimTypes.SUBMITE_REIM,
          payload:{
            submiteReim
          }
        })
    }catch(e){
        console.log('error in action mapper'+e);
       
            dispatch({
                type:submiteReimTypes.FAILED_TO_SUBMITE_REIM,
            })
        }
    }

