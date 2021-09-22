import React from 'react'
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import AccountCard from '../../../components/cards/AccountCard'
import PointCard from '../../../components/cards/PointCard'
import UserTopCard from '../../../components/cards/UserTopCard';

const Index =  () =>{
    return (
        <React.Fragment>
            <div className='top-header pt-5 mt-5'>
                <MDBContainer fluid>
                    <UserTopCard />
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