import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleItem from './SingleItem';
import { toast } from 'react-toastify';

const Subscriber = () => {
    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/subscriber/manager/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])

    const handleDelete = id => {
        fetch(`https://gffex.xyz/api/admin/subscriber/manager/delete/${id}`, {
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
                    <h6 className="page-title">Subscriber Manager</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <Link to="/admin/subscriber/send-email" className="btn btn-sm btn-outline-primary" alt=''><i className="las la-paper-plane"></i>Send Email</Link>
                    </div>
                </div>


                <div className="row">

                    <div className="col-lg-12">
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive--sm table-responsive">
                                    <table className="table table--light style--two">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Subscribe At</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                console.log(data)
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

export default Subscriber;