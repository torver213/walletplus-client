import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';
import { TTransaction } from '../../interfaces/wallet.interface';
import { formatDate } from '../../util';

type IProps = {
    data: TTransaction[];
    total: number;
    title: string;
}
const TransactionTable: React.FC<IProps> = ({data,title,total = 0}) => {
    return (
        <MDBCard>
            <MDBCardHeader>{title}({total})</MDBCardHeader>
            <MDBCardBody>
            <MDBTable bordered responsive hover>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>S/N</th>
                    <th scope='col'>#</th>
                    <th scope='col'>From</th>
                    <th scope='col'>From Email</th>
                    <th scope='col'>To</th>
                    <th scope='col'>To Email</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Action</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Date</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        data.map((d: TTransaction,i) => (
                            <tr>
                                <th scope='row'>{i+1}</th>
                                <td>{d._id.toString()}</td>
                                <td>{d.fromUser.firstName}</td>
                                <td>{d.fromUser.email}</td>
                                <td>{d.toUser.firstName}</td>
                                <td>{d.toUser.email}</td>
                                <td>{d.type}</td>
                                <td>{d.eventType}</td>
                                <td>{d.amount}</td>
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
export default TransactionTable