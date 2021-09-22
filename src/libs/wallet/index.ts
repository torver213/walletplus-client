import {AxiosResponse, AxiosError } from 'axios'
import { WalletActions, WalletDispatchAction } from '../../actions/wallet.actions'
import { Axios } from '../../config'
import { TTransaction } from '../../interfaces/wallet.interface'
import { getDepositPoint, getErrorMessage } from '../../util'

type TFund = {
    userId: string;
    amount: number;
    pin: number;
}
type TTransfer = {
    userId: string;
    amount: number;
    accountNumber: number;
    pin: number;
}
type TSendFund = {
    userId: string;
    amount: number;
    email: string;
    pin: number;
}
type TWalletPin = {
    userId: string;
    pin: number
}
type ITransactData = {
    transactions: TTransaction[];
    total: number
}

export const depositFund = async (payload:TFund,  dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.post(`deposit`,payload)
        dispatch({type: WalletActions.DEPOSIT_FUND, payload: res.data.data[0] })
        dispatch({type: WalletActions.UPDATE_POINT, payload: getDepositPoint(payload.amount)})
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any){
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const sendFund = async (payload:TSendFund,  dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.post(`send`,payload)
        dispatch({type: WalletActions.SEND_FUND, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const withdrawFund = async (payload:TTransfer,  dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.post(`withdraw`,payload)
        dispatch({type: WalletActions.WITHDRAW_FUND, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const transferFund = async (payload:TTransfer,  dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.post(`transfer`,payload)
        dispatch({type: WalletActions.TRANSFER_FUND, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const changeWalletPin = async (payload:TWalletPin) =>{
    try {
        const res:AxiosResponse = await Axios.patch(`change_pin`,payload)
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const getUserAccount = async (userId: string, dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.get(`accounts/user/${userId}`)
        dispatch({type: WalletActions.GET_ACCOUNT, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const getUserPoint = async (userId: string, dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.get(`points/user/${userId}`)
        dispatch({type: WalletActions.GET_POINT, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const getUserTransactions = async (userId: string, dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.get(`transactions/user/${userId}`)
        const data:ITransactData = res.data.data[0]
        const totalUserTransactions = data.total
        const userTransactions = data.transactions
        const payload = {totalUserTransactions,userTransactions}
        dispatch({type: WalletActions.GET_TRANSACTIONS, payload})
        return {error: false, msg: res.data.message, data}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}
export const getAllTransactions = async (dispatch: WalletDispatchAction) =>{
    try {
        const res:AxiosResponse = await Axios.get(`transactions`)
        dispatch({type: WalletActions.GET_TRANSACTIONS, payload: res.data.data[0] })
        return {error: false, msg: res.data.message, data: res.data.data[0]}
    } catch (error: any) {
        return {error: true, msg: getErrorMessage(error as AxiosError), data: null}
    }
}

