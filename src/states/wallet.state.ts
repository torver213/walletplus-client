import { IWallet, TWallet } from "../interfaces/wallet.interface";
const account: TWallet = {
    userId: "",
    balance: 0,
    createdAt: "",
    updateAt: ""
}
const point: TWallet = {
    userId: "",
    balance: 0,
    createdAt: "",
    updateAt: ""
}
export const walletInitialState: IWallet = {
    account,
    point,
    transactions: [],
    total: 0,
    userTransactions: [],
    totalUserTransactions: 0,
    isFetchedAccount: false,
    isFetchedPoint: false,
    isFetchedWallets: false
}