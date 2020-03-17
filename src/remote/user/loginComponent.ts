import { User } from "../../models/user";
import { invalidCredentialsError, InternalServerError } from "../../errors/log_Error";
import { reimUser } from "./user-Axios";

export async function reimLogin(username: string, password: string): Promise<User> {
    let credentials = {
        username,
        password
    }
    try {

        let response = await reimUser.post('/login', credentials)
        console.log(response);
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