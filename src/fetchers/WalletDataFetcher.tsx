import React, { useEffect, useState} from 'react'
import ReactInterval from 'react-interval'
import { useAuthContext } from '../contexts/AuthContext'
import { useWalletContext } from '../contexts/WalletContext'
import { getUserAccount, getUserPoint, getUserTransactions, getAllTransactions } from '../libs/wallet'

const WalletDataFetcher = () => {
    const{authState:{isAuthenticated,user:{role, _id}}} = useAuthContext()
    const{walletState:{isFetchedAccount,isFetchedPoint,isFetchedWallets},walletDispatch} = useWalletContext()
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        const fetchData = async () =>{
            if(!isAuthenticated || !role) return
            if(isFetchedAccount || isFetchedPoint || isFetchedWallets) return
            if(role === 'admin'){
                await getAllTransactions(walletDispatch)
            }
            await getUserAccount(_id,walletDispatch)
            await getUserPoint(_id,walletDispatch)
            await getUserTransactions(_id,walletDispatch)
        }
        fetchData()
        return () => {
        }
        // eslint-disable-next-line
    }, [counter])
    const updateState = () => setCounter(n => n+1)
    return (
        <div>
            <ReactInterval timeout={5000} enabled={true} callback={updateState} />
        </div>
    )
}

export default WalletDataFetcher

