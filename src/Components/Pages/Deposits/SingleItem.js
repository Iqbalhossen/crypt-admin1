import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        if(data?.user_id){
            fetch(`http://localhost:5000/api/admin/user/view/single/${data?.user_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setuserData(data.data)
                })
        }
     
    }, [])

    return (
        <>
            <tr>
                <td data-label="Gateway | Transaction">
                    <span className="fw-bold"> <Link to="/admin/gateway/manual">{data?.GatewayName}</Link> </span>
                    <br />
                    <small> {data?.Transaction} </small>
                </td>

                <td data-label="Initiated">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}<br />
                </td>
                <td data-label="User">
                <Link to={`/admin/users/details/${userData?._id}`}>
                <span className="fw-bold">{userData.fname} {userData.lname}</span>
                 </Link>                 
                   
                </td>
                <td data-label="Amount">
                    ${data?.Amount} + <span className="text-danger" title="" data-bs-original-title="charge">
                        {parseFloat(data?.AmountWithVat) - parseFloat(data?.Amount)}
                    </span>
                    <br />
                    <strong title="" data-bs-original-title="Amount with charge">
                        {data?.AmountWithVat} USD
                    </strong>
                </td>
                <td data-label="Conversion">
                    1 USD =  {data.Conversion} USD
                    <br />
                    <strong>{parseFloat(data?.Amount) * parseFloat(data.Conversion)} USD</strong>
                </td>
                <td data-label="Status">
                    {data.Status === 0 ?
                        <span className="badge badge--warning text-warning">Pending</span>
                        : ''}
                    {data.Status === 1 ?
                        <span className="badge badge--success text-success">Approved</span>
                        : ''}
                    {data.Status === 2 ?
                        <span className="badge badge--danger text-danger">Rejected</span>
                        : ''}
                </td>
                <td data-label="Action">
                    <Link to={`/admin/deposit/details/${data._id}`} className="btn btn-sm btn-outline-primary ms-1">
                        <i className="la la-desktop"></i> Details                                    </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleItem;