import { UserActionType, UserActions } from "../actions/user.actions";
import { IUserState } from "../interfaces/user.interface";

const UserReducer = (state: IUserState,action: UserActionType) => {
    switch (action.type) {
        case UserActions.GET_USERS:
            return {...state,...action.payload, isFetchedUsers: false }
        case UserActions.ERROR:
            return {...state, isFetchedUsers: false }
        default:
            return state;
    }
}

export default UserReducer
