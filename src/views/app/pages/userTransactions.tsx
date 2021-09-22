import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import TransactionTable from '../../../components/tables/TransactionTable';
import { Link } from 'react-router-dom';
import { useWalletContext } from '../../../contexts/WalletContext';

const Index =  () =>{
    const {walletState:{userTransactions,totalUserTransactions}} = useWalletContext()
    
    return (
        <React.Fragment>
            <div className='top-header pt-5 mt-5'>
                    <h2>Transactions</h2>
                    <div className='d-flex justify-content-end'>
                        <Link to='/dashboard'>
                            <MDBBtn>Go Back</MDBBtn>
                        </Link>
                    </div>
            </div>
            <MDBContainer fluid>
                <div className='mt--5'>
                    <TransactionTable title="My Transactions"  total={totalUserTransactions} data={userTransactions} />
                </div>
            </MDBContainer>
            
        </React.Fragment>
    )
}
export default Index as React.FC;