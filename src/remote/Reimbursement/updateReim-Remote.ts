import { invalidCredentialsError, InternalServerError } from "../../errors/log_Error";
import { reimUser } from "../user/user-Axios";
import { Reimbursement } from "../../models/reimbursement";

export async function updateReimData(reimbursementId: number, author: string,amount: number, dateSubmitted: string, dateResolved: string,
    description: string, resolver: string, status: string, type: string): Promise<Reimbursement> {
    let update = {
        reimbursementId,author,amount,dateSubmitted,dateResolved,description,resolver,status,type
    }
    try {
        console.log('we are in remote');
        

        let response = await reimUser.patch('/reimbursements', update)
        console.log('we are in remote '+response);
        if(response.status === 404){
            throw new invalidCredentialsError()
        }
        return response.data
    } catch (e) {
        if(e.status === 400){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}