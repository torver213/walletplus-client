import React, {useState}from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBCardTitle,MDBTypography, MDBCardText } from 'mdb-react-ui-kit';
import FundWalletModal from '../modal/FundWalletModal'
import SendFundModal from '../modal/SendFundModal'
import WithdrawalModal from '../modal/WithdrawalModal'
import TransferFundModal from '../modal/TransferFundModal'
import { useWalletContext } from '../../contexts/WalletContext';
import { TWallet } from '../../interfaces/wallet.interface';
import { formatCurrency } from '../../util';

export default function PointCard() {
  const [openFundWalletModal, setOpenFundWalletModal] = useState(false);
  const toggleFundWalletModal = () => setOpenFundWalletModal(!openFundWalletModal);
  
  const [openSendFundWalletModal, setOpenSendFundWalletModal] = useState(false);
  const toggleSendFundWalletModal = () => setOpenSendFundWalletModal(!openSendFundWalletModal);

  const [openWithdrawalModal, setOpenWithdrawalModal] = useState(false);
  const toggleWithdrawalModal = () => setOpenWithdrawalModal(!openWithdrawalModal);

  const [openTransferFundModal, setOpenTransferFundModal] = useState(false);
  const toggleTransferFundModal = () => setOpenTransferFundModal(!openTransferFundModal);
  // get data from context
  const {walletState:{point}} = useWalletContext()
  const {balance} = point as TWallet
  return (
    <>
    <MDBCard style={{ width: '100%' }} className='pb-2 pr-2 pl-2 h-100'>
    <MDBCardHeader>
      <MDBTypography className='text-center' variant='h3'>Points</MDBTypography>
    </MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>
          <em>Balance: </em>
        </MDBCardText>
        <MDBCardTitle className='subtitle'>{formatCurrency(balance)}</MDBCardTitle>
        <MDBCardText>
          <em>Available for transacion</em>
        </MDBCardText>
        <MDBRow className='mb-2'>
          <MDBCol><button className='w-100' onClick={toggleFundWalletModal}>Redeem</button></MDBCol>
          <MDBCol><button className='w-100' onClick={toggleSendFundWalletModal}>Buy Airtime</button></MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    {/* fund wallet modal */}
    <FundWalletModal isOpen={openFundWalletModal} toggleShow={toggleFundWalletModal} />
    {/* send fund modal */}
    <SendFundModal isOpen={openSendFundWalletModal} toggleShow={toggleSendFundWalletModal} />
    {/* fund wallet modal */}
    <WithdrawalModal isOpen={openWithdrawalModal} toggleShow={toggleWithdrawalModal} />
    {/* fund wallet modal */}
    <TransferFundModal isOpen={openTransferFundModal} toggleShow={toggleTransferFundModal} />
    </>
  );
}