import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import SingleItem from './SingleItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OurProducts = () => {

    const [TitleResults, setTitleResults] = useState({});
    const [TitleDataVulue, setTitleDataVulue] = useState({});
    const refTitleSubmitDis = useRef();

    const handleTitleSubmitData = event => {
        event.preventDefault();
        refTitleSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://localhost:5000/api/admin/home/our/products/title/store`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(TitleDataVulue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                } else {
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
                    refTitleSubmitDis.current.removeAttribute("disabled");
                    setTitleResults(data);
                    event.target.reset();
                }
            })
            .catch(error =>
                refTitleSubmitDis.current.removeAttribute("disabled")
            );
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...TitleDataVulue };
        newData[field] = value;
        setTitleDataVulue(newData);
    }

    const [TitleData, setTitleData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/our/products/title/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setTitleData(data.data))
    }, [TitleResults])


    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/our/products/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData])


    const handleDelete = id => {
        fetch(`http://localhost:5000/api/admin/home/our/products/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
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
                setupdateData(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Our Products Section</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to='/admin/frontend/frontend-sections/our/products/add' className="btn btn-sm btn-outline-primary"><i className="las la-plus"></i>Add New</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleTitleSubmitData}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="sub_heading" className="required">Title</label>
                                            <input type="text" onBlur={handleInputBlur} className="form-control" name="title" defaultValue={TitleData?.title} required="" id="sub_heading" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button ref={refTitleSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-end mb-3">
                <div className="d-inline">
                    <div className="input-group justify-content-end">
                        <input type="text" name="search_table" className="form-control bg--white" placeholder="Search..." id="search_table" />
                        <button className="btn btn--primary input-group-text"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body p-0" >
                            <div className="table-responsive--sm table-responsive">
                                <table className="table table--light style--two custom-data-table">
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
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

export default OurProducts;