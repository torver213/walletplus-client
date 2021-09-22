import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import TransactionTable from '../../../components/tables/TransactionTable';
import { Link } from 'react-router-dom';
import { useWalletContext } from '../../../contexts/WalletContext';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router-dom'

const Index =  () =>{
    const {walletState:{total,transactions}} = useWalletContext()
    const{authState:{isAuthenticated,user:{role}}} = useAuthContext()
    if((!isAuthenticated && role !== 'admin') || (!isAuthenticated)){
        return <Redirect to='/dashboard' />
    }
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
                    <TransactionTable title="All Transactions"  total={total} data={transactions} />
                </div>
            </MDBContainer>
            
        </React.Fragment>
    )
}
export default Index as React.FC;