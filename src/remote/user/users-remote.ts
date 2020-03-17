import { InternalServerError } from "../../errors/log_Error"
import { reimUser } from "./user-Axios"


export const reimGetAllUsers = async () => {
    try {
        console.log('we are in remote');
        
        let response = await reimUser.get('/users')
        console.log(response.data);
        
        if(response.status === 200){
            return response.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}


