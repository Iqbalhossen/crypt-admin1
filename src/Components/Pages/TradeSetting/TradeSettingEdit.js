import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const TradeSettingEdit = () => {

    const [results, setResults] = useState({});
    const [dataVulue, setDataVulue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    const { id } = useParams();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { ...dataVulue };
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.put(`http://localhost:5000/api/admin/Trade/setting/update/${id}`, userData, config)
            .then(response => {
                event.target.reset();
                refSubmitDis.current.removeAttribute("disabled");
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

            }).catch((error) => {
                refSubmitDis.current.removeAttribute("disabled");
            });

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
                <h6 className="page-title">Update Trade Setting</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to="/admin/trade/setting" className="btn btn-sm btn-outline-primary">
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
                                                    <label htmlFor="Time" className="required">Time</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name="Time" onBlur={handleInputBlur} required="" id="Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="Profit" className="required">Profit %</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name="Profit" onBlur={handleInputBlur} required="" id="Profit" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="Unit" className="required">Unit</label>
                                                    <div className="input-group">

                                                        <select className="form-control" onBlur={handleInputBlur} name="Unit" required="" id="Unit">
                                                            <option disabled selected>Select One</option>
                                                            <option value="seconds">Seconds</option>
                                                            <option value="minutes">Minutes</option>
                                                            <option value="hours">Hours</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
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

export default TradeSettingEdit;