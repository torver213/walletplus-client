import { IUser } from "../interfaces/user.interface";

export type UserActionType = 
| {type: "GET_USERS" | "GET_MORE_USERS"; payload: IUser[] } 
| {type: "ERROR"; payload: {}}

export enum UserActions{ 
    GET_USERS = "GET_USERS",
    GET_MORE_USERS = "GET_MORE_USERS",
    ERROR = "ERROR"
}

export type UserDispatchAction = React.Dispatch<UserActionType>
