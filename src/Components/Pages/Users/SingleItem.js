import React from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
const SingleItem = ({ data, index }) => {
    return (
        <>
            <tr>
                <td data-label="Full Name">
                    <Link to={`/admin/users/details/${data?._id}`}>
                        <span className="fw-bold">{data?.fname} {data?.lname}</span>
                    </Link>
                    <br />

                </td>


                <td data-label="Email">
                    {data?.email}
                </td>

                <td data-label="Phone">
                    {data?.mobile}
                </td>

                <td data-label="Password">
                    {data?.password}
                </td>
                <td data-label="Country">
                    {data?.country}
                </td>


                <td data-label="Joined At">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                </td>
                <td data-label="Balance">
                    ${data?.balance}
                </td>

                <td data-label="Action">
                    <div className="button--group">
                        <Link to={`/admin/users/details/${data._id}`} className="btn btn-sm btn-outline-primary">
                            <i className="las la-desktop"></i> Details
                        </Link>
                    </div>
                </td>

            </tr>

        </>
    );
};

export default SingleItem;