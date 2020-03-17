import { InternalServerError } from "../../errors/log_Error"
import { reimUser } from "./user-Axios"
import { User } from "../../models/user"


export async function findUserId(userId: number): Promise<User> 
{
    let Id = userId
    
    try {
        console.log('we are in remote');
        
        let findResponse = await reimUser.get(`/users/${Id}`)
        console.log(findResponse.data);
        
        if(findResponse.status === 200){
            return findResponse.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}


