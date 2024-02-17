import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CryptoCurrencyEdit = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    const { id } = useParams();

    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const handleImage = (e) => {
        setMessage("")
        setImage(e.target.files[0])

    }
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        };
        if (image) {        
            const userData = { ...dataVulue, image: image };
            axios.put(`https://gffex.xyz/api/admin/crypto/currency/update/${id}`, userData, config)
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
                    setResults(response)
                    refSubmitDis.current.removeAttribute("disabled");

                }).catch((error) => {
                    refSubmitDis.current.removeAttribute("disabled");
                });

        } else {
            const userData = { ...dataVulue };
            axios.put(`https://gffex.xyz/api/admin/crypto/currency/update/${id}`, userData, config)
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
                    setResults(response)
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
                <h6 className="page-title">Update Crypto Currency</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to="/admin/crypto/currency/list" className="btn btn-sm btn-outline-primary">
                        <i className="la la-undo"></i> Back</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <form onSubmit={handleSubmitData}>
                            <div className="card-body">
                                <div className="payment-method-item">
                                    <div className="payment-method-body">

                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="name" className="required">Name</label>
                                                    <div className="input-group">

                                                        <input type="text" className="form-control" name="Name" onBlur={handleInputBlur} required="" id="name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="symbol" className="required">Symbol</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name="Symbol" onBlur={handleInputBlur} required="" id="symbol" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="image" className="required">Image</label>
                                            <input type="file" accept=".jpg,.jpeg,.png" className="form-control" name="image" onChange={handleImage} required="" id="image" />
                                            <small className="mt-2  ">Supported files: <b>jpeg, jpg, png.</b> Image will be resized into  400x400 px </small>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <button type="submit" ref={refSubmitDis} className="btn btn-primary w-100 h-45">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CryptoCurrencyEdit;