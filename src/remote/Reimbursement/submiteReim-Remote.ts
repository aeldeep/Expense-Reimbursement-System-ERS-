import { invalidCredentialsError, InternalServerError } from "../../errors/log_Error";
import { reimUser } from "../user/user-Axios";
import { Reimbursement } from "../../models/reimbursement";

export async function submiteReimeData(amount: number, description: string, type: string): Promise<Reimbursement> {
    let reimData = {
        amount,description,type
    }
    try {
        console.log('we are in remote');
        

        let response = await reimUser.post('/reimbursements', reimData)
        console.log('we are in remote '+response);
        if(response.status === 404){
            throw new invalidCredentialsError()
        }
        return response.data
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}