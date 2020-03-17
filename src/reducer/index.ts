import { combineReducers } from "redux";
import { User } from "../models/user";
import { Reimbursement } from "../models/reimbursement";
import { loginReducer } from "./login-reducer";
import { usersReducer } from "./users-reducer";
import { findUserReducer } from "./findUserById-reducer";
import { updateUserReducer } from "./updateUser-reducer";
import { findReimByStatusReducer } from "./findReimByStatus-reducer";
import { updateReimReducer } from "./updateReim-reducer";
import { findReimByUserIdReducer } from "./findReimByUserId-Reducer";
import { submiteReimReducer } from "./submiteReim-Reducer";



//make interfaces for each "piece" of state
export interface ILoginState{
    user:User
    errorMessage:string
}

export interface IUsersState{
    allUsers:User[]
    errorMessage:string

}
export interface IFindUserState
{
    errorMessage:string
    userFound:User
}
export interface IUpdateUserState
{
    userUpdate:User
    errorMessage:string
}
export interface ISubmiteReimState
{
    SubmiteReim:Reimbursement
    errorMessage:string
}

export interface IFindReimStatusState
{
    reimStatus:Reimbursement[]
    currentReim: Reimbursement
    errorMessage: string
   // reimByUserId:Reimbursement[]
    checked:boolean
}

export interface IFindReimByUserIdState
{
    //reimStatus:Reimbursement[] 
    currentReim: Reimbursement
    errorMessage: string
    reimByUserId:Reimbursement[]
    checked:boolean
}
export interface IUpdateReimState
{
    updateReimInfo:Reimbursement
    errorMessage:string
}


//define all of the pieces of state
export interface IState{
    login:ILoginState
    users:IUsersState
    findUser:IFindUserState
    upUser:IUpdateUserState
    reimByStatus:IFindReimStatusState
    upReim:IUpdateReimState
    reimByUser:IFindReimByUserIdState
    newReim:ISubmiteReimState
   
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    login: loginReducer,
    users: usersReducer,
    findUser : findUserReducer,
    upUser : updateUserReducer,
    reimByStatus : findReimByStatusReducer,
    upReim : updateReimReducer,
    reimByUser:findReimByUserIdReducer,
    newReim:submiteReimReducer,
   
})