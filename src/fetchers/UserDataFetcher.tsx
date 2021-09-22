import React, { useEffect, useState} from 'react'
import ReactInterval from 'react-interval'
import { useAuthContext } from '../contexts/AuthContext'
import { useUserContext } from '../contexts/UserContext'
import { getUsers } from '../libs/users'
const UserDataFetcher = () => {
    const{authState:{isAuthenticated,user:{role}}} = useAuthContext()
    const{userState:{isFetchedUsers},userDispatch} = useUserContext()
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        const fetchData = async () =>{
            if(!isAuthenticated || !role) return
            if(isFetchedUsers) return
            if(role === 'admin'){
                console.log("about to fetch users")
                await getUsers(userDispatch)
            }
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

export default UserDataFetcher

