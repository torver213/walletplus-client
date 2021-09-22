import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import LoaderSpinner from '../components/others/LoadingSpinner'

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    isAuthenticating: boolean;
} & RouteProps

const ProtectedRoute = ({isAuthenticated, isAuthenticating, ...rest}: ProtectedRouteProps) => {
    if(isAuthenticating){
        return <LoaderSpinner />
    }
    if(isAuthenticated) {
        return <Route {...rest} />
    }
    return <Redirect to={{pathname: '/auth',state: {from: rest.location}}} />
}

export default ProtectedRoute;
