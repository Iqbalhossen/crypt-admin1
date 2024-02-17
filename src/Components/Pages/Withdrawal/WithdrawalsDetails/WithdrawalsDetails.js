import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dateFormat from "dateformat";
const WithdrawalsDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/withdrawal/single/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

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
    }, [data])

    const handleAccept = id => {
        fetch(`https://gffex.xyz/api/admin/withdrawal/accept/${id}`, {
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
            .catch(error => console.log(error));
    }
    const handleReject = id => {
        fetch(`https://gffex.xyz/api/admin/withdrawal/reject/${id}`, {
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
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">{userData?.fname} {userData?.lname} Withdraw Requested {data?.AmountWithVat} USD</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row mb-none-30">
                <div className="col-lg-4 col-md-4 mb-30">
                    <div className="card b-radius--10 overflow-hidden box--shadow1">
                        <div className="card-body">
                            <h5 className="mb-20 text-muted">Withdraw Via B{data?.GatewayName}</h5>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Date                            <span className="fw-bold">{dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Trx Number                            <span className="fw-bold"> {data?.Transaction}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Username                            <span className="fw-bold">
                                        <Link to={`/admin/users/details/${userData?._id}`}>{userData?.fname} {userData?.lname}</Link>
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Method                            <span className="fw-bold">{data?.GatewayName}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Amount                            <span className="fw-bold">{data?.AmountWithVat} USD</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Charge                            <span className="fw-bold">{parseFloat(data?.AmountWithVat) - parseFloat(data?.Amount)} USD</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    After Charge                            <span className="fw-bold">{data?.Amount} USD</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Rate                            <span className="fw-bold">1 USD
                                        = {data?.Conversion} USD</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Payable                            <span className="fw-bold"> {data.Status === 1 ?
                                        <>{data?.Amount} </>
                                        : <>0 USD</>} </span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">

                                    Status

                                    {data.Status === 0 ?
                                        <span className="badge badge--warning text-warning">
                                            Pending
                                        </span>
                                        : ''}
                                    {data.Status === 1 ?
                                        <span class="badge badge--success text-success">Approved</span>
                                        : ''}
                                    {data.Status === 2 ?
                                        <span class="badge badge--danger text-danger">Rejected</span>
                                        : ''}


                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 mb-30">

                    <div className="card b-radius--10 overflow-hidden box--shadow1">
                        <div className="card-body">
                            <h5 className="card-title border-bottom pb-2">User Withdraw Information</h5>


                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h6>Network Type</h6>
                                    <p>{data?.NetworkType}</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h6>Withdrawal address</h6>
                                    <p>{data?.WithdrawalAddress}</p>
                                </div>
                            </div>




                            <div className="row mt-4">
                                <div className="col-md-12">

                                    {data.Status === 0 ?

                                        <>


                                            <button onClick={() => handleAccept(data?._id)} className="btn btn-outline-success ms-1 approveBtn" data-id="108" data-amount="990,000.00 USD">
                                                <i className="fas la-check"></i> Approve
                                            </button>
                                            <button onClick={() => handleReject(data?._id)} className="btn btn-outline-danger ms-1 rejectBtn" data-id="108">
                                                <i className="fas fa-ban"></i> Reject
                                            </button>
                                        </>
                                        : ''}



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WithdrawalsDetails;