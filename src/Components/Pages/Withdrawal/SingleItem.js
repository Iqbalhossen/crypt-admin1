import React from 'react';
import dateFormat from "dateformat";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const SingleItem = ({ data, index }) => {
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        if(data?.user_id){
            fetch(`https://gffex.xyz/api/admin/user/view/single/${data?.user_id}`, {
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
                    <span class="fw-bold"><Link to="/admin/withdraw/method"> {data?.GatewayName}</Link></span>
                    <br />
                    <small>{data?.Transaction}</small>
                </td>
                <td data-label="Initiated">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                    {/* <br />  1 week ago */}
                </td>

                <td data-label="Full Name">
                    <Link to={`/admin/users/details/${userData?._id}`}>
                        <span class="fw-bold">{userData.fname} {userData.lname}</span>
                    </Link>
                </td>


                <td data-label="Amount">
                    ${data?.AmountWithVat}  <span class="text-danger" title="" data-bs-original-title="charge">{parseFloat(data?.Amount - data?.AmountWithVat).toFixed(2)} </span>
                    <br />
                    <strong title="" data-bs-original-title="Amount after charge">
                        {data?.Amount} USD
                    </strong>

                </td>

                <td data-label="Conversion">
                    1 USD =  {data?.Conversion} USD
                    <br />
                    <strong>{parseFloat(data?.Amount * data?.Conversion).toFixed(2)} USD</strong>
                </td>

                <td data-label="Status">

                    {data.Status === 0 ?

                        <span class="badge badge--warning text-warning">Pending</span>
                        : ''}
                    {data.Status === 1 ?
                        <span class="badge badge--success text-success">Approved</span>
                        : ''}
                    {data.Status === 2 ?
                        <span class="badge badge--danger text-danger">Rejected</span>
                        : ''}
                </td>
                <td data-label="Action">
                    <Link to={`/admin/withdraw/details/${data._id}`} class="btn btn-sm btn-outline-primary ms-1">
                        <i class="la la-desktop"></i> Details                                    </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleItem;