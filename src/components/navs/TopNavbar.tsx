import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useAuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../libs/auth';
import { Link } from 'react-router-dom';

const TopNavbar = () =>{
  const {authState:{user:{firstName}}} = useAuthContext()
  const handleLogout = async(e:React.FormEvent) =>{
    try {
      e.preventDefault()
      await logoutUser()
      window.location.reload()
    } catch (error) {
      
    }
  }
  return (
    <MDBNavbar expand='lg' light bgColor='light' fixed='top'>
      <MDBContainer fluid>
        <h4 className='text-center'>Welcome back, <em>{firstName}</em></h4>
        <MDBNavbarBrand>
          <Link to='/dashboard'>WalletPlus</Link>
        </MDBNavbarBrand>
        <MDBBtn color='danger' onClick={(e:React.FormEvent) =>handleLogout(e)}>Logout</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default TopNavbar