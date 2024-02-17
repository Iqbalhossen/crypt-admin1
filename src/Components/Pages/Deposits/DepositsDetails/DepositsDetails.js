import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dateFormat from "dateformat";
const DepositsDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/deposit/single/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

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

    }, [data])

    const handleAccept = id => {
        fetch(`https://gffex.xyz/api/admin/deposit/accept/${id}`, {
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
        fetch(`https://gffex.xyz/api/admin/deposit/reject/${id}`, {
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
            <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 class="page-title">{userData?.fname} {userData?.lname} requested {data?.AmountWithVat} USD</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div class="row mb-none-30 justify-content-center">
                <div class="col-xl-4 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="mb-20 text-muted">Deposit Via {data?.GatewayName}</h5>
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Date                            <span class="fw-bold">{dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Transaction Number                            <span class="fw-bold"> {data?.Transaction}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Username                            <span class="fw-bold">
                                        <Link href={`/admin/users/details/${userData?._id}`}>{userData?.fname} {userData?.lname}</Link>
                                    </span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Method                            <span class="fw-bold"> {data?.GatewayName}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Amount                            <span class="fw-bold">{data?.AmountWithVat} USD</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Charge                            <span class="fw-bold"> {parseFloat(data?.AmountWithVat) - parseFloat(data?.Amount)} USD</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    After Charge                            <span class="fw-bold">{data?.Amount} USD</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Rate                            <span class="fw-bold">1 USD
                                        = {data.Conversion} USD</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Payable                            <span class="fw-bold">
                                        {data.Status === 1 ?
                                            <>{data?.Amount} </>
                                            : <>0 </>}
                                        USD</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Status

                                    {data.Status === 0 ?
                                        <span class="badge badge--warning text-warning">Pending</span>
                                        : ''}
                                    {data.Status === 1 ?
                                        <span class="badge badge--success text-success">Approved</span>
                                        : ''}
                                    {data.Status === 2 ?
                                        <span class="badge badge--danger text-danger">Rejected</span>
                                        : ''}

                                    <span>
                                        <br />
                                        {/* 1 week ago */}
                                    </span>                        </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="card-title mb-50 border-bottom pb-2">User Deposit Information</h5>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h6>Network Type</h6>

                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h6>Transaction screenshot</h6>
                                    <a href={`https://gffex.xyz/${data?.screenshot}`} target='_blank' class="me-3" alt=''><i class="fa fa-file"></i>  Attachment </a>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">



                                    {data.Status === 0 ?

                                        <>
                                            <button onClick={() => handleAccept(data?._id)} className="btn btn-sm btn-outline-success ms-1 confirmationBtn"
                                            >
                                                Approve
                                            </button>
                                            <button onClick={() => handleReject(data?._id)} className="btn btn-sm btn-outline-danger ms-1 confirmationBtn"
                                            >
                                                Reject
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

export default DepositsDetails;