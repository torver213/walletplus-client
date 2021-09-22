import React, {useState} from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { validateEmail } from '../../util'
import {userForgotPassword} from '../../libs/auth'
const ForgotPasswordForm = () =>{
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            setEmailError('')
            setIsError(false)
            if(email.trim() === ""){
                setEmailError('Enter your email address')
                setIsError(true)
            }
            if(email.trim() !== "" && !validateEmail(email)){
                setEmailError('Enter a valid email address')
                setIsError(true)
            }
            if(isError) return
            setIsLoading(true)
            const res = await userForgotPassword(email)
            setIsLoading(false)
            setMessage(res.msg)
        } catch (error) {
            
        }
    }
    return (
        <div className="main container">
            <MDBCol lg='4' className='container pt-5 pb-5'>
                <MDBCard background='#a4e2df' >
                    <MDBCardHeader className='p-3'>
                        <MDBTypography className='text-center' variant='h2'>Forgot Password</MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <form className='nav-form pt-3 pb-2'>
                        <p className='mb-2'>Enter Your Email Below To Request For New Password</p>
                        <div className='mb-4'>
                            <input type='email' value={email} onChange={handleEmailInput} placeholder='Email address' />
                        </div>
                        <p className='text-danger'>{emailError} </p>
                        <div className='text-center'>
                            {
                                isLoading ? <MDBSpinner /> : <p className='text-info'>{message} </p>
                            }
                            <button disabled={isLoading} onClick={handleSubmit} className='w-100'>Request Password</button>
                        </div>
                    </form>
                    <div className='mb-2'>
                        <p className='d-flex justify-content-end'>Don&apos;t Have An Account?</p>
                        <MDBBtn outline>
                            <Link to='/auth/reset-password'>
                                Create New Account
                            </Link>
                        </MDBBtn>
                    </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>            
        </div>
    )
}

export default ForgotPasswordForm