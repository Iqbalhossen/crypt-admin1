import React from 'react';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {
    return (
        <>
            <tr>

                <td data-label="User">
                    <span className="fw-bold">{data?.user_name}</span>
                    <br />
                        <span className="small"> <a href="https://gffexvip.biz/admin/users/detail/46"><span>@</span>miller5547l</a> </span>
                </td>


                <td data-label="Login at">
                {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                </td> 
            </tr>
        </>
    );
};

export default SingleItem;