import {AxiosResponse, AxiosError } from 'axios'
import { UserActions, UserDispatchAction } from '../../actions/user.actions'
import { Axios } from '../../config'
import { getErrorMessage } from '../../util'

export const getUsers = async (dispatch: UserDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.get(`users`)
        dispatch({type: UserActions.GET_USERS, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}