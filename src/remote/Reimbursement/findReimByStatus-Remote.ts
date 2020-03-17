import { InternalServerError } from "../../errors/log_Error"
import { reimUser } from "../user/user-Axios";
import { Reimbursement } from "../../models/reimbursement";

export async function findReimStatus(id: number): Promise<Reimbursement[]>
{

    try {
        //console.log('we are in remote');
        let findResponse = await reimUser.get(`/reimbursements/status/${id}`)
        if(findResponse.status === 200){
            return findResponse.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}
