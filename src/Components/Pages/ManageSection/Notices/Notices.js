import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import SingleItem from './SingleItem';
import axios from 'axios';

const Notices = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // view data 
    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/notices/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [results])


    const handleDelete = id => {
        fetch(`http://66.29.142.198:5000/api/admin/home/notice/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                setResults(data);
            })
            .catch(error => console.log(error));
    }


    // store data 

    
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/home/notice/store`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dataVulue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
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
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    handleClose()
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
                    setResults(data)
                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error => 
                refSubmitDis.current.removeAttribute("disabled"));
    }

    const handleInputBlur = event => {
        setResults({});
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }

    return (
        <>
              <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Slider List</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" className="d-flex flex-wrap gap-2 search-form">
                        <div className="input-group w-auto flex-fill">
                            <input type="search" name="search" className="form-control bg--white" placeholder="Name,Symbol...." defaultValue="" id="search" />
                            <button className="btn btn-primary" type="submit"><i className="la la-search"></i></button>
                        </div>

                    </form>
                    <button onClick={handleShow} className="btn btn-sm btn-outline-primary addBtn">
                        <i className="las la-plus"></i>Add New</button>
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
                                            <th>Name</th>
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


            {/* Modal  */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmitData}>
                        <div class="modal-body">
                            <div class="form-group">
                                <label htmlFor="image" class="required">Notice Name</label>
                                <input type="text" accept=".jpg,.jpeg,.png" class="form-control" name="name" onBlur={handleInputBlur} required="" id="image" />
                               
                            </div>
                            <button type="submit" ref={refSubmitDis} class="btn btn-primary w-100 h-45">Submit</button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default Notices;