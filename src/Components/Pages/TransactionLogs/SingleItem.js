import React from 'react';
import dateFormat from "dateformat";
const SingleItem = ({ data }) => {
    // const {user_name, trx} =data;
    // console.log(user_name)

    return (
        <>
            <tr>
                <td data-label="User">
                    <span className="fw-bold">{data?.user_name}</span>
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