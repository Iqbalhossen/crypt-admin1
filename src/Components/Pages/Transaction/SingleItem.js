import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

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
                <td data-label="User">
                    <Link to={`/admin/users/details/${data?.user_id}`}> <span className="fw-bold">{userData?.fname} {userData?.lname}</span></Link>
                    <br />
                </td>

                <td data-label="TRX">
                    <strong>{data?.trx}</strong>
                </td>

                <td data-label="Transacted">
                    {dateFormat(data?.createdAt, "d-m-yyyy h:MM:ss TT")}
                    {/* <br />2 weeks ago */}
                </td>

                <td className="budget" data-label="Amount">
                    {
                        data.trx_type === "+" ?
                            <span className="fw-bold text-success ">
                                + {data?.amount} USD
                            </span>
                            :
                            <span className="fw-bold  text--danger ">
                                - {data?.amount} USD
                            </span>
                    }

                </td>

                <td className="budget" data-label="Post Balance">
                    {data?.post_balance} USD
                </td>

                <td data-label="Details">
                    {data?.details}
                </td>
            </tr>

        </>
    );
};

export default SingleItem;