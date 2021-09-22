import React, {useEffect, useState} from 'react'
import ReactInterval from 'react-interval'
import { useAuthContext } from '../contexts/AuthContext'
import { getNewAuthToken } from '../libs/auth'

const AuthChecker = () => {
    const{authState:{isAuthenticated},authDispatch} = useAuthContext()
    const [counter,setCounter] = useState(0)
    useEffect(() => {
        const fetchData = async () =>{
            if(!isAuthenticated && counter < 5){
                await getNewAuthToken(authDispatch)
            }
        }
        fetchData()
        return () => {}
        // eslint-disable-next-line
    }, [counter])
    const updateState = () => setCounter(n => n+1)
    return (
        <div>
            <ReactInterval timeout={5000} enabled={true} callback={updateState} />
        </div>
    )
}

export default AuthChecker

