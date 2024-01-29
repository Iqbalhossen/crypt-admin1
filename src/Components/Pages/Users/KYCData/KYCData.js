import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const KYCData = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/kyc/details/by/user/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

    const refSubmitDis = useRef();

    const handleAccept = () => {
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/kyc/accept/${data?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setupdateData(data);
                toast.success(`${data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(error => refSubmitDis.current.removeAttribute("disabled"));
    }
    const handleReject = () => {
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/kyc/reject/${data?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setupdateData(data);
                toast.error(`${data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            })
            .catch(error => refSubmitDis.current.removeAttribute("disabled"));
    }

    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">KYC Details</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card b-radius--10">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Full Name
                                        <span>
                                            <p>{data?.user_name}</p>
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Certification
                                        <span>
                                            <p>{data?.type}</p>
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Front Part Photo
                                        <span>
                                            <Link to={`http://66.29.142.198:5000/${data?.front_img}`} className="me-3" target='_blank'><i className="fa fa-file"></i>  Attachment </Link>
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Back Part Photo
                                        <span>
                                            <Link to={`http://66.29.142.198:5000/${data?.back_img}`} className="me-3" target='_blank'><i className="fa fa-file"></i>  Attachment </Link>
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Live Photo
                                        <span>
                                            <a href={data?.user_img} className="me-3" target='_blank'><i className="fa fa-file"></i>  Attachment </a>
                                        </span>
                                    </li>
                                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                                        SSN
                                        <span>
                                            <p>2345</p>
                                        </span>
                                    </li> */}
                                </ul>

                                <div className="d-flex flex-wrap justify-content-end mt-3">
                                    {data?.status === 0 ?
                                        <> <button ref={refSubmitDis} className="btn btn-outline-danger me-3 confirmationBtn" onClick={handleReject}><i className="las la-ban"></i>Reject</button>
                                            <button ref={refSubmitDis} className="btn btn-outline-success confirmationBtn" onClick={handleAccept}><i className="las la-check"></i>Approve</button></> :
                                        ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
};

export default KYCData;