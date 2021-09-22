import {AxiosError, AxiosResponse } from 'axios'
import { Axios } from '../../config'
import { AuthActions, AuthDispatchAction } from '../../actions/auth.actions'
import { getErrorMessage } from '../../util'
type TLoginUser = {
    password: string;
    username: string;
}
type TRegUser = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
}
export const loginUser = async (user:TLoginUser,dispatch: AuthDispatchAction) =>{
    try {
        let res: AxiosResponse =  await Axios.post(`login`,user)
        dispatch({type: AuthActions.LOGIN_USER, payload: res.data.data[0]})
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        dispatch({type: AuthActions.LOG_OUT, payload: {}})
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}

export const registerUser = async (user:TRegUser) =>{
    try {
        const res:AxiosResponse = await Axios.post(`register`,user)
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}

export const verifyUser = async(verifyToken: string) =>{
    try {
        let res:AxiosResponse =  await Axios.post(`verify_account`,{verifyToken})
        return {error: false, msg: res.data.message, data: null}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}

export const userForgotPassword = async(email: string) =>{
    try{
        const res:AxiosResponse = await Axios.post(`forgot_password`,{email})
        return {error: false, msg: res.data.message, data: null}
    } catch (error: any){
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}

export const userResetPassword = async(user: { password: string}) =>{
    try{
        const res:AxiosResponse = await Axios.post(`reset_password`,user)
        return {error: false, msg: res.data.message,data: null}
    } catch (error: any){
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}


export const logoutUser = async () =>{
    try {
        let res:AxiosResponse =  await Axios.get(`logout`,{})
        return {error:false,msg:res.data.message,data: null}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const getNewAuthToken = async(dispatch: AuthDispatchAction) =>{
    try {
        let res:AxiosResponse =  await Axios.get(`refresh_token`)
        dispatch({type: AuthActions.LOGIN_USER, payload: res.data.data[0]})
        return res.data.data[0]
    } catch (error: any) {
        dispatch({type: AuthActions.LOG_OUT, payload: {}})
    }
}

export const getAuthToken = (name: string) =>{
    let cookieArray = document.cookie.split(";");
    for (let index = 0; index < cookieArray.length; index++) {
        const cookiePair = cookieArray[index].split("=")
        if(cookiePair[0].trim() === name){
            return decodeURIComponent(cookiePair[1]);
        }   
    }
    return null
}

