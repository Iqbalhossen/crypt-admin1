import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

const SingleItem = ({ data, index }) => {

    return (
        <>
            <tr>
                <td data-label="User">
                   <Link to={`/admin/users/details/${data.user_id}`}> <span class="fw-bold">{data?.user_name}</span></Link>
                    <br />
                </td>

                <td data-label="TRX">
                    <strong>{data?.trx}</strong>
                </td>

                <td data-label="Transacted">
                    {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                    {/* <br />2 weeks ago */}
                </td>

                <td class="budget" data-label="Amount">
                    {
                        data.trx_type === "+" ?
                            <span class="fw-bold text-success ">
                                + {data?.amount} USD
                            </span>
                            :
                            <span class="fw-bold  text--danger ">
                                - {data?.amount} USD
                            </span>
                    }

                </td>

                <td class="budget" data-label="Post Balance">
                    {data?.post_balance} USD
                </td>

                <td data-label="Details">
                    {data?.remark === null ?
                        <> {data?.details}</>
                        :
                        <> {data?.remark}</>
                    }</td>
            </tr>

        </>
    );
};

export default SingleItem;