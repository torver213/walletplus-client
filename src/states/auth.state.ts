import { IUser, IUserAuth } from "../interfaces/user.interface";

export const userInitState: IUser = {
    _id: "",
    firstName: "",
    lastName: "",
    phone: 0,
    username: "",
    email: "",
    role: ""
}
export const authInitialState: IUserAuth = {
    user: userInitState,
    isAuthenticated: false,
    isAuthenticating: true,
    isLogout: false,
}