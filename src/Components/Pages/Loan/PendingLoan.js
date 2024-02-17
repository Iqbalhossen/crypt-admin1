import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import { toast } from 'react-toastify';

const PendingLoan = () => {
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/loan/pending/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

    
    const handleReject = id => {
        fetch(`http://localhost:5000/api/admin/loan/reject/${id}`, {
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
                <h6 class="page-title">Pending Loan</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" class="d-flex flex-wrap gap-2 search-form">
                        <div class="input-group w-auto flex-fill">
                            <input type="search" name="search" class="form-control bg--white" placeholder="Username / Email" value="" id="search" />
                            <button class="btn btn--primary" type="submit"><i class="la la-search"></i></button>
                        </div>

                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card b-radius--10 ">
                        <div class="card-body p-0">
                            <div class="table-responsive--md  table-responsive">
                                <table class="table table--light style--two">
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Loan Amount</th>
                                            <th>Loan Resaon</th>
                                            <th>Create At</th>
                                           
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data._id} handleReject={handleReject} ></SingleItem>
                                                    );
                                                }
                                            }) :
                                            <tr>
                                                <td className="text-muted text-center" colspan="100%">Data not found</td>
                                            </tr>}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    );
};


export default PendingLoan;