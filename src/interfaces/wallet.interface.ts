export type TWallet = {
    userId: string;
    balance: number;
    createdAt: string;
    updateAt: string;
}
type TUser = {
    _id: string;
    firstName: string;
    email: string;
}
export type TTransaction = {
    _id: string;
    fromUser: TUser;
    toUser: TUser;
    type: string;
    eventType: string;
    amount: number;
    createdAt: string;
    updateAt: string;
}
type IUserTransac = {
    transactions: TTransaction[];
    totalTransactions: number;
}
type IAllTransac = {
    totalUserTransactions: number;
    userTransactions: TTransaction[]
}
export type ITransacPayload = IUserTransac | IAllTransac

export interface IWallet {
    account: TWallet;
    point: TWallet;
    transactions: TTransaction[];
    total: number;
    userTransactions: TTransaction[];
    totalUserTransactions: number;
    isFetchedAccount: boolean;
    isFetchedPoint: boolean;
    isFetchedWallets: boolean;
}
