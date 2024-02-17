import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleItem = ({ index, data, handleEnableDisabled, handleDelete }) => {

    

    return (
        <>
            <tr>
                <td data-label="Crypto">
                    <div className="user" >
                        <div className="thumb">
                            <img src={`http://localhost:5000/${data?.image}`} alt='' />
                        </div>
                        <span className="name"></span>
                    </div>
                </td>
                <td data-label="Symbol">{data.Symbol}</td>
                <td data-label="Status">
                    {data?.Status === 1 ?
                        <span className="badge badge--success text-success">Enabled</span>
                        :
                        <span><span class="badge badge--warning text-warning">Disabled</span></span>
                    }
                </td>
                <td data-label="Action">
                    <Link to={`/admin/crypto/currency/edit/${data._id}`} className="btn btn-sm btn-outline-primary editBtn"
                    >
                        <i className="la la-pencil"></i>Edit
                    </Link>

                    {data?.Status === 1 ?
                        <button onClick={() => handleEnableDisabled(data._id)} className="btn btn-sm btn-outline-danger ms-1 confirmationBtn"
                        >
                            <i className="la la-eye-slash"></i>Disable
                        </button>
                        :

                        <button onClick={() => handleEnableDisabled(data._id)} className="btn btn-sm btn-outline-success ms-1 confirmationBtn"
                        >
                            <i className="la la-eye"></i> Enable
                        </button>
                    }


                </td>
            </tr>


       

        </>
    );
};

export default SingleItem;