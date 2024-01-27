import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const SingleItem = ({ data, index, handleEnableDisabled }) => {


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <span className="d-block"> {data?.GatewayName}</span>
                </td>              
                <td>
                    {data?.Status === 1 ?
                        <span class="badge badge--success text-success">Enabled</span>
                        :
                        <span><span class="badge badge--warning text-warning">Disabled</span></span>
                    }
                </td>
                <td>
                    <div class="button-group">
                        <Link to={`/admin/gateway/manual/edit/${data._id}`} class="btn btn-sm btn-outline-primary editGatewayBtn">
                            <i class="la la-pencil"></i> Edit
                        </Link>
                        {data?.Status === 1 ?
                           <button onClick={() => handleEnableDisabled(data._id)} class="btn btn-sm btn-outline-danger confirmationBtn" >
                           <i class="la la-eye-slash"></i> Disable                                                </button>
                            :
                            <button onClick={() => handleEnableDisabled(data._id)} class="btn btn-sm btn-outline-success confirmationBtn" >
                                <i class="la la-eye"></i> Enable                                                </button>
                        }
                    </div>
                </td>





            </tr>
        </>
    );
};

export default SingleItem;