import React, { useState, useEffect } from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
const SingleItem = ({ data, ticket, handleDelete }) => {
    const { admin_id, message, created_at, _id } = data;

    const [FileData, setFileData] = useState([]);
    useEffect(() => {
        if (_id) {
            fetch(`http://localhost:5000/api/admin/support/tickets/file/view/${_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setFileData(data.data)
                })
        }

    }, [])


    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        if (admin_id !== null && data) {
            fetch(`http://localhost:5000/api/admin/role/view/${admin_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.data)
                })
        }

    }, [])


    const [userData, setuserData] = useState([]);
    useEffect(() => {
        if (data?.user_id) {
            fetch(`http://localhost:5000/api/admin/user/view/single/${data?.user_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setuserData(data.data)
                })
        }
    }, [])


    if (admin_id === null) {
        return (
            <>

                <div className="row border border--primary border-radius-3 my-3 mx-2">

                    <div className="col-md-3 border-end text-md-end text-start">
                        <h5 className="my-3">{ticket?.name}</h5>

                        <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm my-3 confirmationBtn" ><i className="la la-trash"></i> Delete</button>
                    </div>

                    <div className="col-md-9">
                        <p className="text-muted fw-bold my-3">
                            Posted on {dateFormat(created_at, "d-m-yyyy h:MM:ss TT")}</p>
                        <p>{message}</p>
                        <div className="my-3">
                            {FileData?.attachment !== undefined ?
                                <Link target='_blank' to={`http://localhost:5000/${FileData?.attachment}`} className="me-2"><i className="fa fa-file"></i> Attachment</Link>
                                : ''}


                        </div>
                    </div>
                </div>

            </>
        );
    } else {
        return (
            <>


                <div className="row border border-warning border-radius-3 my-3 mx-2 admin-bg-reply">

                    <div className="col-md-3 border-end text-md-end text-start">
                        <h5 className="my-3 text-dark">{admin?.name}</h5>
                        {admin?.role === 'super_admin' ?
                            <p className="lead text-muted">Super Admin</p>
                            : ''}
                        {admin?.role === 'admin' ?
                            <p className="lead text-muted">Admin</p>
                            : ''}
                        {admin?.role === 'staff' ?
                            <p className="lead text-muted">Staff</p>
                            : ''}

                        <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm my-3 confirmationBtn" ><i className="la la-trash"></i> Delete</button>
                    </div>

                    <div className="col-md-9">
                        <p className="text-muted fw-bold my-3">
                            Posted on {dateFormat(created_at, "d-m-yyyy h:MM:ss TT")}</p>
                        <p>{message}</p>
                        <div className="my-3">
                            {FileData?.attachment !== undefined ?
                                <Link target='_blank' to={`http://localhost:5000/${FileData?.attachment}`} className="me-2"><i className="fa fa-file"></i> Attachment</Link>
                                : ''}

                        </div>
                    </div>

                </div>


            </>
        );

    }

};

export default SingleItem;