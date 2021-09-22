import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import AccountCard from '../../../components/cards/AccountCard'
import PointCard from '../../../components/cards/PointCard'
import AdminTopCard from '../../../components/cards/AdminTopCard';
import { Redirect } from 'react-router-dom'
import { useAuthContext } from '../../../contexts/AuthContext';
const Index =  () =>{
    const{authState:{isAuthenticated,user:{role}}} = useAuthContext()
    if((!isAuthenticated && role !== 'admin') || (!isAuthenticated)){
        return <Redirect to='/dashboard' />
    }
    return (
        <React.Fragment>
            <div className='top-header pt-5 mt-5'>
                <MDBContainer fluid>
                    <AdminTopCard />
                </MDBContainer>
            </div>
            <MDBContainer fluid>
                <div className='mt--5'>
                    <MDBRow>
                        <MDBCol lg='6'>
                            <AccountCard />
                        </MDBCol>
                        <MDBCol lg='6'>
                            <PointCard />
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
            
        </React.Fragment>
    )
}
export default Index as React.FC;