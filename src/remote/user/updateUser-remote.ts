import { User } from "../../models/user";
import { invalidCredentialsError, InternalServerError } from "../../errors/log_Error";
import { reimUser } from "./user-Axios";

export async function updateUserData(userId:number,username: string, password: string,firstName: string,lastName: string,
    email: string,role :string): Promise<User> {
    let updateUser = {
        userId,username,password,firstName,lastName,email,role
    }
    try {
        console.log('we are in remote');
        

        let response = await reimUser.patch('/users', updateUser)
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