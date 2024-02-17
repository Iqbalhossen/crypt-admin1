import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import SingleItem from './SingleItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FixedDepositView = () => {
    

    // view data 
    const refSubmitDis = useRef();


    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/fixed/deposit/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])


    const handleDelete = id => {
        fetch(`https://gffex.xyz/api/admin/fixed/deposit/delete/${id}`, {
            method: 'DELETE',
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
                <h6 className="page-title">Fixed Deposit List</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" className="d-flex flex-wrap gap-2 search-form">
                        <div className="input-group w-auto flex-fill">
                            <input type="search" name="search" className="form-control bg--white" placeholder="Name,Symbol...." defaultValue="" id="search" />
                            <button className="btn btn-primary" type="submit"><i className="la la-search"></i></button>
                        </div>

                    </form>
                    <Link to='/admin/fixed/deposit/add'  className="btn btn-sm btn-outline-primary addBtn">
                        <i className="las la-plus"></i>Add New</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card b-radius--10 ">
                        <div className="card-body p-0">
                            <div className="table-responsive--md  table-responsive">
                                <table className="table table--light style--two mb-0">
                                    <thead>
                                        <tr>
                                            <th>S.N</th>
                                            <th>Promotion Name</th>
                                            <th>Period (day)</th>
                                            <th>Profit</th>
                                            <th>Expired Time</th>
                                            <th>Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data._id} handleDelete={handleDelete}></SingleItem>
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

export default FixedDepositView;