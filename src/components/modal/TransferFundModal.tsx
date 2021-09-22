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
import { useAuthContext } from '../../contexts/AuthContext';
import { useWalletContext } from '../../contexts/WalletContext';
import { transferFund } from '../../libs/wallet';
type IProps = {
    isOpen: boolean;
    toggleShow: () => void
}
const TransferFundModal: React.FC<IProps> = ({isOpen,toggleShow}) =>{
  const [isLoading, setIsLoading] = useState(false)
    const [amount, setAmount] = useState<number>(0)
    const [amountError, setAmountError] = useState('')
    const [accountNumber, setAccountNumber] = useState<number>(0)
    const [accountNumberError, setAccountNumberError] = useState('')
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
            if (accountNumber === 0) {
              setAccountNumberError('Enter account number')
              isError = true
            }
            if (accountNumber.toString().length !== 10) {
                setAccountNumberError('Enter correct account number')
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
            const {msg,error} = await transferFund({amount, pin, userId: user._id,accountNumber},walletDispatch)
            if(!error){
              setPin(0);
              setAccountNumber(0)
              setAmount(0)
            }
            setIsLoading(false)
            setMessage(msg)
        } catch (error) {
            setIsLoading(false)
        }
    }
    const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAmount(e.target.valueAsNumber)
        setAmountError('')
    }
    const handleAccountInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAccountNumber(e.target.valueAsNumber)
        setAccountNumberError('')
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
              <MDBModalTitle>Transfer Funds</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form className='nav-form pt-3 pb-2'>
                    <div className='mb-4'>
                        <input type='number' value={amount !== 0 ? amount : ''} onChange={handleAmountInput} placeholder={amount !== 0 ? '' : 'Enter Amount'} />
                    </div>
                    <p className='text-danger'>{amountError} </p>
                    <div className='mb-4'>
                        <input type='number' value={accountNumber !== 0 ? accountNumber : ''} onChange={handleAccountInput} placeholder={accountNumber !== 0 ? '': 'Enter account number'} />
                    </div>
                    <p className='text-danger'>{accountNumberError} </p>
                    <div className='mb-4'>
                        <input type='number' min="4" max="4" value={pin !== 0 ? pin :''} onChange={handlePinInput} placeholder={pin === 0  ? 'Enter your pin' : ''} />
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
export default TransferFundModal