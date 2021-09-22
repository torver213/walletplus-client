import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { validateEmail } from '../../util'
import { useAuthContext } from '../../contexts/AuthContext';
import { useWalletContext } from '../../contexts/WalletContext';
import { sendFund } from '../../libs/wallet';

type IProps = {
    isOpen: boolean;
    toggleShow: () => void
}
const SendFundModal: React.FC<IProps> = ({isOpen,toggleShow}) =>{
  const [isLoading, setIsLoading] = useState(false)
  const [amount, setAmount] = useState<number>(0)
  const [amountError, setAmountError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [pin, setPin] = useState(0)
  const [pinError, setPinError] = useState('')
  const [message, setMessage] = useState('')
  const {authState:{user}} = useAuthContext()
  const {walletState:{account:{balance}},walletDispatch} = useWalletContext()

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            let isError = false
            setMessage('')
            if (amount === 0) {
              setAmountError('Enter amount')
              isError = true
            }
            if ((amount >= 1000000)) {
              setAmountError('Amount too large. Maximum amount allowed to send is $ 1,000,000')
              isError = true
            }
            if (amount > balance) {
                setAmountError('Amount is greater than your balance')
                isError = true
            }
            if(email.trim() === ""){
              setEmailError('Enter user email address')
              isError = true
            }
            if(email.trim() !== "" && !validateEmail(email)){
                setEmailError('Enter a valid email address')
                isError = true
            }
            if(email.trim() === user.email){
              setEmailError("Sorry you can't send money to your own account")
              isError = true
            }
            if (pin === 0) {
              setPinError('Enter your pin')
              isError = true
            }
            if (pin.toString().length !== 4) {
              setPinError('Enter your valid pin')
              isError = true
            }
            if(isError) return
            setIsLoading(true)
            const {msg,error} = await sendFund({amount, pin, userId: user._id,email},walletDispatch)
            if(!error){
              setPin(0);
              setEmail('')
              setAmount(0)
            }
            setIsLoading(false)
            setMessage(msg)
        } catch (error) {
            setIsLoading(false)
        }
    }
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setEmail(e.target.value)
      setEmailError('')
      setMessage('')
    }
    const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAmount(e.target.valueAsNumber)
        setAmountError('')
        setMessage('')
    }
    const handlePinInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setPin(e.target.valueAsNumber)
      setPinError('')
    }
  return (
    <>
      <MDBModal tabIndex='-1' show={isOpen} backdrop>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Send Fund</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form className='nav-form pt-3 pb-2'>
                    <div className='mb-4'>
                      <input type='number' value={amount !== 0 ? amount :''} onChange={handleAmountInput} placeholder={amount === 0  ? 'Enter Amount' : ''} />
                    </div>
                    <p className='text-danger'>{amountError} </p>
                    <div className='mb-2'>
                          <input type='email' value={email} onChange={handleEmailInput} placeholder='Email address' />
                    </div>
                    <p className='text-danger'>{emailError} </p>
                    <div className='mb-4'>
                        <input type='number'  value={pin !== 0 ? pin :''} onChange={handlePinInput} placeholder={pin === 0  ? 'Enter your pin' : ''} />
                    </div>
                    <p className='text-danger'>{pinError} </p>
                    <div className='text-center'>
                      <p className='text-info'>{message} </p>
                        { isLoading && <MDBSpinner /> }
                        <button disabled={isLoading} onClick={handleSubmit} className='w-100'>Send</button>
                    </div>
                </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default SendFundModal