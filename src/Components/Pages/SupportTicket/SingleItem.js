import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {
    return (
        <>
            <tr>
                <td data-label="Subject">
                    <Link to="" className="fw-bold"> [Ticket#{data?.ticket}]{data.subject} </Link>
                </td>

                <td data-label="Submitted By">
                    <p className="fw-bold"> {data?.name}</p>
                </td>
                <td data-label="Status">
                    {data?.status === 0 ?
                        <span className="badge badge--success text-success">Open</span>
                        :
                        ''
                    }
                    {data?.status === 1 ?
                        <span className="badge badge--success text-success">Answered</span>
                        :
                        ''
                    }
                    {data?.status === 2 ?
                        <span className="badge badge--success text-success">Replied</span>
                        :
                        ''
                    }
                    {data?.status === 3 ?
                        <span className="badge badge--danger text-dark">Close</span>
                        :
                        ''
                    }

                </td>
                <td data-label="Priority">
                    {data?.priority === 1 ?
                    <span className="badge  badge--warning text-warning">Low</span>
                  
                    :''}
                    {data?.priority === 2 ?
                    <span className="badge  badge--warning text-warning">Medium</span>
                  
                    :''}
                    {data?.priority === 3 ?
                    <span className="badge  badge--warning text-warning">High</span>
                  
                    :''}
                </td>

                <td data-label="Last Reply">
                {dateFormat(data.created_at, "d-m-yyyy h:MM:ss TT")}
                </td>

                <td data-label="Action">
                    <Link to={`/admin/ticket/view/${data?._id}`} className="btn btn-sm btn-outline-primary ms-1">
                        <i className="las la-desktop"></i> Details                                        </Link>
                </td>
            </tr>
        </>
    );
};

export default SingleItem;