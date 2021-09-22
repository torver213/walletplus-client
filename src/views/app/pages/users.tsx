import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import UsersTable from '../../../components/tables/UsersTable';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router-dom'

const Index =  () =>{
    const{authState:{isAuthenticated,user:{role}}} = useAuthContext()
    if((!isAuthenticated && role !== 'admin') || (!isAuthenticated)){
        return <Redirect to='/dashboard' />
    }
    return (
        <React.Fragment>
            <div className='top-header pt-5 mt-5'>
                    <h2>Users</h2>
                    <div className='d-flex justify-content-end'>
                        <Link to='/dashboard'>
                            <MDBBtn>Go Back</MDBBtn>
                        </Link>
                    </div>
            </div>
            <MDBContainer fluid>
                <div className='mt--5'>
                    <UsersTable />
                </div>
            </MDBContainer>
            
        </React.Fragment>
    )
}
export default Index as React.FC;