import { WalletActionType, WalletActions } from "../actions/wallet.actions";
import { IWallet } from "../interfaces/wallet.interface";

const WalletReducer = (state: IWallet, action: WalletActionType) => {
    switch (action.type) {
        case WalletActions.GET_ACCOUNT:
            return {...state,account: {...state.account,...action.payload}, isFetchedAccount: true }
        case WalletActions.GET_POINT:
            return {...state, point: {...state.point,...action.payload}, isFetchedPoint: true }
        case WalletActions.UPDATE_POINT: 
            return {...state, point: {...state.point, balance: state.point.balance + action.payload} }
        case WalletActions.DEPOSIT_FUND: 
            return {...state, account: {...state.account,...action.payload} }
        case WalletActions.SEND_FUND: 
            return {...state, account: {...state.account,...action.payload} }
        case WalletActions.TRANSFER_FUND: 
            return {...state, account: {...state.account,...action.payload} }
        case WalletActions.WITHDRAW_FUND: 
            return {...state, account: {...state.account,...action.payload} }
        case WalletActions.GET_TRANSACTIONS: 
            return {...state,...action.payload}
        default:
            return state;
    }
}

export default WalletReducer
