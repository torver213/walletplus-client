import { AuthActionType, AuthActions } from "../actions/auth.actions";
import { IUserAuth } from "../interfaces/user.interface";
import { userInitState } from "../states/auth.state";

const AuthReducer = (state: IUserAuth, action: AuthActionType) => {
    switch (action.type) {
        case AuthActions.LOGIN_USER:
            return {...state,user: {...state.user,...action.payload}, isAuthenticated: true, isAuthenticating: false }
        case AuthActions.LOG_OUT:
            return {...state,isAuthenticated:false,isAuthenticating: false, isLogout: true,user:userInitState} 
        default:
            return state;
    }
}

export default AuthReducer
