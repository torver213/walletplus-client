import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import FundWalletModal from '../modal/FundWalletModal';
import SetUpPinModal from '../modal/SetUpPin';

const items = [
    {
        title: 'My Transactions',
        link: 'transactions/user',
        popup: false,
        id: 1

    },
    {
        title: 'Fund My Wallet',
        link: '#!',
        popup: true,
        id: 2
    },
    {
        title: 'Set Up Pin',
        link: '#!',
        popup: true,
        id: 3
    },
    {
        title: 'Profile',
        link: 'profile',
        popup: false,
        id: 4
    }
]
const Index =  () =>{
    const [openFundWalletModal, setOpenFundWalletModal] = useState(false);
    const toggleFundWalletModal = () => setOpenFundWalletModal(!openFundWalletModal);

    const [openSetupPinModal, setOpenSetupPinModal] = useState(false)
    const toggleSetupPinModal = () => setOpenSetupPinModal(!openSetupPinModal);

    const handleFundModal = (e: React.FormEvent) =>{
        e.preventDefault()
        toggleFundWalletModal()
    }
    const handleSetupModal = (e: React.FormEvent) =>{
        e.preventDefault()
        toggleSetupPinModal()
    }
    return (
        <React.Fragment>
            <MDBContainer fluid>
                <MDBRow>
                    {
                        items.map(d =>(
                            <MDBCol key={d.title} lg='3' xs="6" sm="6" className='mb-1'>
                                {
                                    d.popup && d.id === 2 ?
                                    <Link to='#!' onClick={handleFundModal}>
                                        <MDBCard>
                                            <MDBCardBody className='p-5'>
                                                <MDBCardTitle>{d.title}</MDBCardTitle>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </Link>:
                                    d.popup && d.id === 3 ?
                                    <Link to='#!' onClick={handleSetupModal}>
                                        <MDBCard>
                                            <MDBCardBody className='p-5'>
                                                <MDBCardTitle>{d.title}</MDBCardTitle>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </Link>:
                                    <Link to={`/dashboard/${d.link}`}>
                                    <MDBCard>
                                        <MDBCardBody className='p-5'>
                                            <MDBCardTitle>{d.title}</MDBCardTitle>
                                        </MDBCardBody>
                                    </MDBCard>
                                </Link>
                                }
                                
                            </MDBCol>
                        ))
                    }
                </MDBRow>
            </MDBContainer>
            {/* fund wallet modal */}
            <FundWalletModal isOpen={openFundWalletModal} toggleShow={toggleFundWalletModal} />
            {/* setup pin modal */}
            <SetUpPinModal isOpen={openSetupPinModal} toggleShow={toggleSetupPinModal} />
        </React.Fragment>
    )
}
export default Index as React.FC;