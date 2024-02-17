import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dateFormat from "dateformat";
import axios from 'axios';

const AprovedNow = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/loan/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

    useEffect(() => {
        if (data?.user_id) {
            fetch(`http://localhost:5000/api/admin/user/view/single/${data?.user_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserData(data.data)
                })
        }
    }, [data])


    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.put(`http://localhost:5000/api/admin/loan/accept/${data?._id}`, dataVulue, config)
            .then(response => {
                event.target.reset();
                toast.success(`${response?.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setupdateData(response?.data);
                refSubmitDis.current.removeAttribute("disabled");
            }).catch((error) => {
                refSubmitDis.current.removeAttribute("disabled");
            });

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }



    return (
        <>
            <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 class="page-title"> {userData?.fname} {userData?.lname} requested loan {data?.amount}  USD</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div class="row mb-none-30 justify-content-center">
                <div class="col-xl-5 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="mb-20 text-muted">Loan {data?.status === 0 ? 'pending' : ''}  {data?.status === 1 ? 'Aproved' : ''} {data?.status === 2 ? 'Reject' : ''}

                            </h5>

                            <div className="row">
                                <div className="col-lg-12 col-md-12 mb-30">
                                    <div className="card">
                                        <div className="card-body">
                                            {data?.status === 0


                                                ?

                                                <form onSubmit={handleSubmitData}>
                                                    <div className="row">
                                                        <div className=" col-md-12 ">

                                                            <div className="form-group">
                                                                <label htmlFor="heading" className="required">Percentage</label>
                                                                <input type="number" className="form-control" name="percentage" onBlur={handleInputBlur} placeholder='Percentage' required min='0' id="heading" />
                                                            </div>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="heading" className="required">Expired Time</label>
                                                                <input type="date" className="form-control" name="expired_time" onBlur={handleInputBlur} placeholder='Title' required id="heading" />
                                                            </div>
                                                        </div>


                                                    </div>


                                                    <div className="form-group">
                                                        <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Submit</button>
                                                    </div>
                                                </form>

                                                :

                                                <ul class="list-group">

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        Status

                                                        {data.status === 1 ?
                                                            <span class="badge badge--success text-success">Approved</span>
                                                            : ''}
                                                        {data.status === 2 ?
                                                            <span class="badge badge--danger text-danger">Rejected</span>
                                                            : ''}

                                                        <span>
                                                            <br />
                                                            {/* 1 week ago */}
                                                        </span>                        </li>
                                                </ul>


                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="card-title mb-50 border-bottom pb-2">Loan Details</h5>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h6>Full Name</h6>
                                    <p>{userData?.fname} {userData?.lname}</p>

                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h6>Amount</h6>
                                    <p>{data?.amount} $</p>

                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h6>Reason</h6>
                                    <p>{data?.reason} </p>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AprovedNow;