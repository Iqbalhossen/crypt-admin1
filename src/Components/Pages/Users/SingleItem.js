import React from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
const SingleItem = ({ data, index }) => {
    return (
        <>
            <tr>
                <td data-label="User">
                    <Link to={`/admin/users/details/${data?._id}`}>
                        <span className="fw-bold">{data?.name}</span>
                    </Link>
                    <br />

                </td>


                <td data-label="Email-Phone">
                    {data?.email}
                </td>

                <td data-label="Password">
                    {data?.password}
                </td>
                <td data-label="Password">
                    {data?.country}
                </td>


                <td data-label="Joined At">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                </td>
                <td data-label="Joined At">
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