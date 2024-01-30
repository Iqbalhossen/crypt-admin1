import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleItem from './SingleItem';
import { toast } from 'react-toastify';

const Staff = () => {

        // view data 
        const [results, setResults] = useState({});
        const [data, setData] = useState([]);
    
        useEffect(() => {
            fetch(`http://localhost:5000/api/admin/role/view`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data.data)
                })
        }, [results])
    
    
        const handleDelete = id => {
            fetch(`http://localhost:5000/api/admin/role/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    setResults(data);
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
            <div className="bodywrapper__inner">
                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Staff</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <Link to='/admin/staff/add' className="btn btn-sm btn-outline-primary p-2 addBtn">
                            <i className="las la-plus"></i>Add New Staff</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card b-radius-10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive-md  table-responsive">
                                    <table className="table table-light style-two">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Editor Or Viewer</th>
                                                <th>Role</th>
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

            </div>
        </>
    );
};

export default Staff;