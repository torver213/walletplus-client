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
import { changeWalletPin } from '../../libs/wallet';
import { useAuthContext } from '../../contexts/AuthContext';
type IProps = {
    isOpen: boolean;
    toggleShow: () => void
}
const SetUpPinModal: React.FC<IProps> = ({isOpen,toggleShow}) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [pin, setPin] = useState(0)
    const [confPin, setConfPin] = useState(0)
    const [message, setMessage] = useState('')
    const {authState: {user:{_id}}} = useAuthContext()

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault()
        try {
            let isError = false
            if (pin === 0) {
                setMessage('Enter new pin')
                isError = true
            }
            if (pin !== 0 && pin !== confPin) {
                setMessage('Pin does not match')
                isError = true
            }
            if(isError) return
            setIsLoading(true)
            const {msg} = await changeWalletPin({pin,userId:_id})
            setIsLoading(false)
            setMessage(msg)
        } catch (error) {
            setIsLoading(false)
        }
    }
    const handlePinInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPin(e.target.valueAsNumber)
        setMessage('')
    }
    const handleConfPinInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setConfPin(e.target.valueAsNumber)
        setMessage('')
    }

  return (
    <>
      <MDBModal tabIndex='-1' show={isOpen} backdrop >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Setup Wallet Pin</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <form className='nav-form pt-3 pb-2'>
                    <div className='mb-4'>
                        <input type='number' maxLength={4} minLength={4} value={pin !== 0 ? pin :''} onChange={handlePinInput} placeholder={pin === 0  ? 'Enter new pin' : ''} />
                    </div>
                    <div className='mb-4'>
                        <input type='number' maxLength={4} minLength={4} value={confPin !== 0 ? confPin :''} onChange={handleConfPinInput} placeholder={confPin === 0  ? 'Confirm new pin' : ''} />
                    </div>
                    <p className='text-danger'>{message} </p>
                    <div className='text-center'>
                        { isLoading && <MDBSpinner /> }
                        <button disabled={isLoading} onClick={handleSubmit} className='w-100'>Change</button>
                    </div>
                </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default SetUpPinModal