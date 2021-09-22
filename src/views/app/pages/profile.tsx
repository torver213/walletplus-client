import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBContainer,MDBRow,MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const Index =  () =>{
    const{authState:{user:{role,firstName,lastName,email,phone}}} = useAuthContext()
    return (
        <React.Fragment>
            <div className='top-header pt-5 mt-5'>
                    <h2>User Profile</h2>
                    <div className='d-flex justify-content-end'>
                        <Link to='/dashboard'>
                            <MDBBtn>Go Back</MDBBtn>
                        </Link>
                    </div>
            </div>
            <MDBContainer fluid>
                <div className='mt--5'>
                    <MDBCard className="p-5">
                        <div className="image-div">
                            <img className="profile-img" src={require("../../../assets/images/login-bg.jpg").default} alt={firstName} />
                        </div>
                        <MDBCardBody>
                            <MDBCol lg="6" className='container'>
                                <MDBRow>
                                    <MDBCol lg='6' className='mb-2'>
                                        <strong>First name: </strong>
                                        <em>{firstName}</em>
                                    </MDBCol>
                                    <MDBCol lg='6' className='mb-2'>
                                        <strong>Last name: </strong>
                                        <em>{lastName}</em>
                                    </MDBCol>
                                    
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol lg='4' className='mb-2'>
                                        <strong>Phone number: </strong>
                                        <em>{phone}</em>
                                    </MDBCol>
                                    <MDBCol lg='4' className='mb-2'>
                                        <strong>Email address: </strong>
                                        <em>{email}</em>
                                    </MDBCol>
                                    <MDBCol lg='4' className='mb-2'>
                                        <strong>Role: </strong>
                                        <em>{role}</em>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </MDBContainer>
            
        </React.Fragment>
    )
}
export default Index as React.FC;