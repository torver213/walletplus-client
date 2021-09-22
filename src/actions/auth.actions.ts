import { IUser } from "../interfaces/user.interface";

export type AuthActionType = 
| {type: "LOGIN_USER"; payload: IUser } 
| {type: "ERROR"; payload: {}}
| {type: "LOG_OUT"; payload: {}}

export enum AuthActions{ 
    LOG_OUT = "LOG_OUT",
    LOGIN_USER = "LOGIN_USER",
    REGISTER_USER = "REGISTER_USER",
    ERROR = "ERROR"
}

export type AuthDispatchAction = React.Dispatch<AuthActionType>

