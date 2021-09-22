import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { loginUser } from '../../libs/auth'

const LoginForm = () =>{
    const {authDispatch} = useAuthContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value)
        setUsernameError('')
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        setPasswordError('')
    }

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            let isError = false
            if(username.trim() === ""){
                setUsernameError('Please enter your username or email address or mobile number')
                isError = true
            }
            if(password.trim() === ""){
                setPasswordError('Please enter your password')
                isError = true
            }
            if(isError) return
            setIsLoading(true)
            const res = await loginUser({password,username},authDispatch)
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
                        <MDBTypography className='text-center' variant='h2'>Login</MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <form className='nav-form pt-3 pb-2'>
                        <div className='mb-4'>
                            <input type='text' value={username} onChange={handleUsernameInput} placeholder='Email address|Username' />
                        </div>
                        <p className='text-danger'>{usernameError} </p>
                        <div className='mb-4'>
                            <input type='password'  value={password} onChange={handlePasswordInput} placeholder='Your Password' />
                        </div>
                        <p className='text-danger'>{passwordError} </p>
                        {/* <div className='mb-4 d-flex justify-content-end'>
                            <Link to='/auth/forgot-password'>
                                Forgot password?
                            </Link>
                        </div> */}
                        
                        <div className='text-center'>
                            {
                                isLoading ? <MDBSpinner /> : <p className='text-info'>{message} </p>
                            }
                            <button disabled={isLoading} onClick={handleSubmit} className='w-100'>Login</button>
                        </div>
                    </form>
                    <div className='mb-2'>
                        <p className='d-flex justify-content-end'>Don&apos;t Have An Account?</p>
                        <MDBBtn outline>
                            <Link to='/auth/register'>
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

export default LoginForm