import React from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
const SingleItem = ({ data, index,  handleReject }) => {
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
                    {data?.amount}$
                </td>

                <td data-label="Phone">
                    {data?.reason}
                </td>


                <td data-label="Joined At">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                </td>

                <td data-label="Action">
                    <div className="button--group">
                        <button onClick={() => handleReject(data._id)} className="btn btn-sm btn-outline-danger ms-1 confirmationBtn"
                        >
                            <i className="la la-eye-slash"></i>Reject
                        </button>


                        <Link to={`/admin/aproved/loan/${data._id}`} className="btn btn-sm btn-outline-success ms-1 confirmationBtn"
                        >
                            <i className="la la-eye"></i> Aproved
                        </Link>
                    </div>
                </td>

            </tr>

        </>
    );
};

export default SingleItem;