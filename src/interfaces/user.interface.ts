import { TWallet } from "./wallet.interface";

export interface IUser {
    readonly _id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: number;
    readonly username: string;
    readonly email: string;
    readonly role: string;
}

export type TUserData = {
    readonly _id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: number;
    readonly username: string;
    readonly email: string;
    readonly role: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly account: TWallet;
    readonly point: TWallet
}

export interface IUserState {
    users: TUserData[];
    totalUsers: number;
    isFetchedUsers: boolean
}

export interface IUserAuth {
    user: IUser;
    isAuthenticated: boolean;
    isAuthenticating: boolean;
    isLogout: boolean
}

export interface IResponse {
    error: boolean;
    message: string;
    data: IUser[]
}