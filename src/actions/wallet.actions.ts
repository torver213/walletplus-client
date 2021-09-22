import { ITransacPayload, TWallet } from "../interfaces/wallet.interface";

export type WalletActionType = 
| {type: "GET_ACCOUNT"; payload: TWallet } 
| {type: "GET_POINT"; payload: TWallet }
| {type: "UPDATE_POINT"; payload: number }
| {type: "DEPOSIT_FUND"; payload: TWallet } 
| {type: "SEND_FUND"; payload: TWallet }
| {type: "WITHDRAW_FUND"; payload: TWallet }
| {type: "TRANSFER_FUND"; payload: TWallet } 
| {type: "GET_TRANSACTIONS"; payload: ITransacPayload }  
| {type: "ERROR"; payload: {}}


export enum WalletActions {
    GET_ACCOUNT = "GET_ACCOUNT",
    GET_POINT = "GET_POINT",
    DEPOSIT_FUND = "DEPOSIT_FUND",
    SEND_FUND = "SEND_FUND",
    WITHDRAW_FUND = "WITHDRAW_FUND",
    TRANSFER_FUND = "TRANSFER_FUND",
    GET_TRANSACTIONS = "GET_TRANSACTIONS",
    ERROR = "ERROR",
    UPDATE_POINT = "UPDATE_POINT"
}

export type WalletDispatchAction = React.Dispatch<WalletActionType>
