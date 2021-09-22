import React from 'react'
import {Redirect} from "react-router-dom"
import LoginForm from "../../components/auth/LoginForm"
import { useAuthContext } from "../../contexts/AuthContext"
import LoadingSpinner from "../../components/others/LoadingSpinner"

const Login  = () =>{
    const {authState:{isAuthenticated, isAuthenticating}} = useAuthContext()
    if(isAuthenticating){
      return <LoadingSpinner />
    }
    if(isAuthenticated){
      return <Redirect to='/dashboard' />
    }

    return (
      <div className='login-container'>
          <LoginForm />
      </div>
    )
}

export default Login