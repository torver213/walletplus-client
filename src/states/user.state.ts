import { IUserState } from "../interfaces/user.interface";

export const userInitialState: IUserState = {
    users: [],
    totalUsers: 0,
    isFetchedUsers: false
}