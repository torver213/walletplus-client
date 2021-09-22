import React, { createContext, useContext, useReducer } from 'react'
import { walletInitialState } from '../states/wallet.state'
import WalletReducer from '../reducers/WalletReducer'
import { IWallet } from '../interfaces/wallet.interface'
import { WalletDispatchAction } from '../actions/wallet.actions'

export const WalletContext = createContext<{walletState: IWallet, walletDispatch: WalletDispatchAction }>({walletState: walletInitialState,walletDispatch: () => undefined})

const WalletProvider = ({children}: any) => {
    const [walletState, walletDispatch] = useReducer(WalletReducer, walletInitialState)
    return (
        <WalletContext.Provider value={{walletState,walletDispatch}}>
            {children}
        </WalletContext.Provider> 
    )
}

export const useWalletContext = () => useContext(WalletContext)

export default WalletProvider

