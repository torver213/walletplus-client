import React, {useState} from 'react'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit'
import { registerUser } from '../../libs/auth'
import { validateEmail } from '../../util'

const RegisterForm = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleFirstNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFirstName(e.target.value)
        setFirstNameError('')
    }
    const handleLastNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setLastName(e.target.value)
        setLastNameError('')
    }
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
        setEmailError('')
    }

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPhone(e.target.value)
        setPhoneError('')
    }

    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value)
        setUsernameError('')
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        setPasswordError('')
    }

    const handleConfPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setConfPassword(e.target.value)
        setMessage('')
    }

    const clearInputs = () =>{
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setUsername('')
        setPassword('')
        setConfPassword('')
    }

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            setMessage('')
            let isError = false
            if(firstName.trim() === ""){
                setFirstNameError('Enter your first name')
                isError = true
            }
            if(firstName.trim() !== "" && firstName.length < 2){
                setFirstNameError('Enter a valid name')
                isError = true
            }
            if(lastName.trim() === ""){
                setLastNameError('Enter your last name')
                isError = true
            }
            if(lastName.trim() !== "" && firstName.length < 2){
                setLastNameError('Enter a valid name')
                isError = true
            }
            if(email.trim() === ""){
                setEmailError('Enter your email address')
                isError = true
            }
            if(email.trim() !== "" && !validateEmail(email)){
                setEmailError('Enter a valid email address')
                isError = true
            }
            if(phone.trim() === ''){
                setPhoneError('Enter your phone number')
                isError = true
            }
            if(phone.trim().length < 11){
                setPhoneError('Enter a valid phone number')
                isError = true
            }
            if(username.trim() === ""){
                setUsernameError('Enter your username')
                isError = true
            }
            if(username.trim() !== "" && username.length < 3){
                setUsernameError('Enter username longer than 3 chars')
                isError = true
            }
            if(password.trim() === ""){
                setPasswordError('Enter a password')
                isError = true
            }
            if(password.trim() !== "" && password.length < 8){
                setPasswordError('Your password is too short')
                isError = true
            }
            if(password.trim() !== confPassword.trim()){
                setPasswordError('Your passwords do not match')
                isError = true
            }

            if(isError) return
            setIsLoading(true)
            const {error, msg} = await registerUser({password,phone,username,firstName, lastName,email})
            if(!error){
                clearInputs()
            }
            setIsLoading(false)
            setMessage(msg)
            
        } catch (error) {
            
        }
    }
    return (
        <div className="main container">
            <div className='pt-4 pb-5'>
                <MDBCard background='#a4e2df' >
                    <MDBCardHeader className=''>
                        <MDBTypography className='text-center' variant='h2'>Register</MDBTypography>
                    </MDBCardHeader>
                    <MDBCardBody>
                    <form className='nav-form pb-2'>
                        <div className='mb-2'>
                            <input type='text' value={firstName} onChange={handleFirstNameInput} placeholder='First name' />
                        </div>
                        <p className='text-danger'>{firstNameError} </p>

                        <div className='mb-2'>
                            <input type='text' value={lastName} onChange={handleLastNameInput} placeholder='Last name' />
                        </div>
                        <p className='text-danger'>{lastNameError} </p>
                        <div className='mb-2'>
                            <label htmlFor='phone'></label>
                            <input id="phone" type='tel' value={phone} onChange={handlePhoneInput} placeholder='Phone number' inputMode='numeric' pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
                            
                        </div>
                        <p className='text-danger'>{phoneError} </p>
                        <div className='mb-2'>
                            <input type='email' value={email} onChange={handleEmailInput} placeholder='Email address' />
                        </div>
                        <p className='text-danger'>{emailError} </p>
                        <div className='mb-2'>
                            <input type='text' value={username} onChange={handleUsernameInput} placeholder='Username' />
                        </div>
                        <p className='text-danger'>{usernameError} </p>
                        <div className='mb-2'>
                            <input type='password' value={password} onChange={handlePasswordInput} placeholder='Your Password' />
                        </div>
                        <p className='text-danger'>{passwordError} </p>
                        <div className='mb-2'>
                            <input type='password' value={confPassword} onChange={handleConfPasswordInput} placeholder='Confirm Password' />
                        </div>                        
                        {/* <div className='mb-4 d-flex justify-content-end'>
                            <Link to='/'>
                                Already Have An Account?
                            </Link>
                        </div> */}
                        <div className='text-center'>
                            {
                                isLoading ? <MDBSpinner /> : <p className='text-danger'>{message} </p>
                            }
                            <button disabled={isLoading} onClick={handleSubmit} className='w-100 fas fa-paper-plane'>Register</button>
                        </div>
                    </form>
                    {/* <div className='mb-2'>
                        <p className='d-flex justify-content-end'>Already Have An Account?</p>
                        <MDBBtn outline>
                            <Link to='/auth'>
                                Login here
                            </Link>
                        </MDBBtn>
                    </div> */}
                    </MDBCardBody>
                </MDBCard>
            </div>            
        </div>
    )
}

export default RegisterForm