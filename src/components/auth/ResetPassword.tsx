import React, {useState} from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { userResetPassword } from '../../libs/auth'

const ResetPasswordForm = () =>{
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        setPasswordError('')
    }

    const handleConfPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setConfPassword(e.target.value)
        setMessage('')
    }

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            setMessage('')
            setIsError(false)
            if(password.trim() === ""){
                setPasswordError('Enter a password')
                setIsError(true)
            }
            if(password.trim() !== "" && password.length < 8){
                setPasswordError('Your password is too short')
                setIsError(true)
            }
            if(password.trim() !== confPassword.trim()){
                setPasswordError('Your passwords do not match')
                setIsError(true)
            }
            if(isError) return
            setIsLoading(true)
            const res = await userResetPassword({password})
            setIsLoading(false)
            setMessage(res.msg)
        } catch (error) {
            
        }
    }
    return (
        <div className="main container">
            <MDBCol lg='4' className='container pt-4 pb-5'>
                <MDBCard background='#a4e2df' >
                    <MDBCardHeader className='p-3'>
                        <MDBTypography className='text-center' variant='h2'>Reset New Password</MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <form className='nav-form pt-1 pb-2'>
                        <div className='mb-4'>
                            <input type='password' value={password} onChange={handlePasswordInput} placeholder='New Password' />
                        </div>
                        <p className='text-danger'>{passwordError} </p>
                        <div className='mb-4'>
                        <input type='password' value={confPassword} onChange={handleConfPasswordInput} placeholder='Confirm Password' />
                        </div>
                        <div className='text-center'>
                            { isLoading ? <MDBSpinner /> :<p className='text-danger'>{message} </p> }
                            <button disabled={isLoading} onClick={handleSubmit} className='w-100'>Reset Password</button>
                        </div>
                        
                    </form>
                    <div className='mb-2'>
                        <p className='d-flex justify-content-end'>Already Have An Account?</p>
                        <MDBBtn outline>
                            <Link to='/auth'>
                                Login here
                            </Link>
                        </MDBBtn>
                    </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>            
        </div>
    )
}

export default ResetPasswordForm