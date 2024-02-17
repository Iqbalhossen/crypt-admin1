import React, { useEffect, useState } from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
const SingleItem = ({ data }) => {
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        if (data?.user_id) {
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
                <td data-label="Full Name">
                    <Link to={`/admin/users/details/${userData?._id}`}>
                        <span className="fw-bold">{userData?.fname} {userData?.lname}</span>
                    </Link>
                    <br />
                    {/* <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=wnunez"><span>@</span>wnunez</a> </span> */}
                </td>

                <td data-label="TRX">
                    <strong>{data?.trx}</strong>
                </td>

                <td data-label="Transacted">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
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

                <td data-label="Details">{data?.details}</td>
            </tr>

        </>
    );
};

export default SingleItem;