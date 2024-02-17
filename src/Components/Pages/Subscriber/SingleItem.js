import React from 'react';
import dateFormat from "dateformat";
const SingleItem = ({data, handleDelete}) => {
    return (
        <>
            <tr>
                <td data-label="Email">{data?.email}</td>
                <td data-label="Subscribe At">{dateFormat(data.OutTime, "d-m-yyyy h:MM:ss TT")}</td>
                <td data-label="Action">
                    <button onClick={()=>handleDelete(data?._id)} className="btn btn-sm btn-outline-danger "  >
                        <i className="las la-trash"></i> Remove                                    </button>
                </td>
            </tr>

        </>
    );
};

export default SingleItem;