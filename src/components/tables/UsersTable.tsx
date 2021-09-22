import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';
import { formatDate } from '../../util';
import { useUserContext } from '../../contexts/UserContext';
import { TUserData } from '../../interfaces/user.interface';

const UsersTable = () => {
    const {userState:{users,totalUsers}} = useUserContext()

    return (
        <MDBCard>
            <MDBCardHeader>All Users({totalUsers})</MDBCardHeader>
            <MDBCardBody>
            <MDBTable bordered responsive hover>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>S/N</th>
                    <th scope='col'>#</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Role</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Points</th>
                    <th scope='col'>Date</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        users.map((d: TUserData,i) => (
                            <tr>
                                <th scope='row'>{i+1}</th>
                                <td>{d._id.toString()}</td>
                                <td>{d.firstName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.role}</td>
                                <td>{d.account.balance}</td>
                                <td>{d.point.balance}</td>
                                <td>{formatDate(d.createdAt)}</td>
                            </tr>
                        ))
                    }
                </MDBTableBody>
                </MDBTable>
            </MDBCardBody>
        </MDBCard>
    );
    }
export default UsersTable