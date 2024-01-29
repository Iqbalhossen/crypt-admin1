import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import SingleItem from './SingleItem';
import axios from 'axios';

const CryptoCurrency = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // view data 

    const [data, setData] = useState([]);
    const [updateData, setupdateData] = useState([]);

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();


    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/crypto/currency/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [updateData, results])


    const handleEnableDisabled = id => {
        fetch(`http://66.29.142.198:5000/api/admin/crypto/currency/enable/disable/${id}`, {
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

    const handleDelete = id => {
        fetch(`http://66.29.142.198:5000/api/admin/crypto/currency/delete/${id}`, {
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


    // store data 




    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const handleImage = (e) => {
        setMessage("")
        setImage(e.target.files[0])

    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue, image: image };
        if (userData.image === '') {
            setMessage("please choose your image");
        } else {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            axios.post(`http://66.29.142.198:5000/api/admin/crypto/currency/store`, userData, config)
                .then(response => {
                    event.target.reset();
                    setShow(false)
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
                    setResults(response);
                    refSubmitDis.current.removeAttribute("disabled");
                }).catch((error) => {
                    refSubmitDis.current.removeAttribute("disabled");
                });

        }

    }


    const handleInputBlur = event => {
        setErrorMessage({})
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
                <h6 className="page-title">Crypto Currency List</h6>
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
                                            <th>Crypto</th>
                                            <th>Symbol</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                console.log(data)
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data._id} ></SingleItem>
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
                    <Modal.Title>Add Crypto Currency</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmitData}>
                        <div class="modal-body">
                            <div class="form-group">
                                <label htmlFor="name" class="required">Name</label>
                                <input type="text" class="form-control" name="Name" onBlur={handleInputBlur} required="" id="name" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="symbol" class="required">Symbol</label>
                                <input type="text" class="form-control" name="Symbol" onBlur={handleInputBlur} required="" id="symbol" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="image" class="required">Image</label>
                                <input type="file" accept=".jpg,.jpeg,.png" class="form-control" name="image" onChange={handleImage} required="" id="image" />
                                <small class="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into  400x400 px </small>
                            </div>
                            <button type="submit" ref={refSubmitDis} class="btn btn-primary w-100 h-45">Submit</button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default CryptoCurrency;