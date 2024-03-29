import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';

const ManualGateways = () => {

    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/gateway/manual/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

    const handleDelete = id => {
        fetch(`http://localhost:5000/api/admin/gateway/manual/delete/${id}`, {
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
    const handleEnableDisabled = id => {
        fetch(`http://localhost:5000/api/admin/gateway/manual/enable/disable/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setupdateData(data);
                if (data?.data?.Status === 0) {
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
                }
                if (data?.data?.Status === 1) {
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
                }

            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Manual Gateways</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <div className="input-group w-auto search-form">
                        <input type="text" name="search_table" className="form-control bg--white" placeholder="Search..." id="search_table" />
                        <button className="btn btn--primary input-group-text"><i className="fa fa-search"></i></button>
                    </div>
                    <Link className="btn btn-outline-primary" to='/admin/gateway/manual/new'><i className="las la-plus"></i>Add New</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card b-radius--10 ">
                        <div className="card-body p-0">
                            <div className="table-responsive--md  table-responsive">
                                <table className="table table--light style-two mb-0">
                                    <thead>
                                        <tr>
                                            <th>S.N.</th>
                                            <th>Gateway</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data._id} handleEnableDisabled={handleEnableDisabled}></SingleItem>
                                                    );
                                                }
                                            }) :
                                            <tr>
                                                <td className="text-muted text-center" colSpan="100%">Data not found</td>
                                            </tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* paginateLinks */}

                        {/* paginateLinks */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManualGateways;