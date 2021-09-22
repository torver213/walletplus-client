import React from 'react'
import { MDBContainer, MDBRow, MDBCol, } from 'mdb-react-ui-kit'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPassword'
import ResetPasswordForm from './ResetPassword'

type IProps = {
    isLogin: boolean,
    isForgot: boolean,
    isReset: boolean
}
const AuthSection:React.FC<IProps> = ({isLogin,isReset,isForgot}) =>{
    return (
        <div className='auth'>
            <MDBContainer  fluid>
                { 
                isLogin ? 
                    <LoginForm /> : 
                isForgot ?
                    <ForgotPasswordForm /> :
                isReset ?
                    <ResetPasswordForm />:
                    <RegisterForm /> 
                }
            </MDBContainer>
        </div>
    )
}
export default AuthSection