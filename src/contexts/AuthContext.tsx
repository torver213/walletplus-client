import React, { createContext, useContext, useReducer } from 'react'
import jwt  from 'jwt-decode'
import { authInitialState } from '../states/auth.state'
import AuthReducer from '../reducers/AuthReducer'
import { IUserAuth } from '../interfaces/user.interface'
import { AuthDispatchAction } from '../actions/auth.actions'
import { getAuthToken } from '../libs/auth'
import { isEmptyObject } from '../util'

export const AuthContext = createContext<{authState: IUserAuth, authDispatch: AuthDispatchAction }>({authState: authInitialState,authDispatch: () => undefined})

const AuthProvider = ({children}: any) => {
    const [authState, authDispatch] = useReducer(AuthReducer, authInitialState, 
        () =>{
            const userAuthToken = getAuthToken('_w_p_at')
            if(userAuthToken === null) return authInitialState
            const data: any = jwt(userAuthToken)
            if(isEmptyObject(data)){
                return {...authInitialState,user:data,isAuthenticated:false,isAuthenticating: false}
            }
            return {...authInitialState,user:data,isAuthenticated:true,isAuthenticating: false}
        })
    return (
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider> 
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider


