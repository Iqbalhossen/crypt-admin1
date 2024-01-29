import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WithdrawalMethodsAdd = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')


    const [dataVulue, setDataVulue] = useState({});
    const refSubmitDis = useRef();


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const storeData = { ...dataVulue, WithdrawInstruction:content}
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.post(`http://66.29.142.198:5000/api/admin/withdrawal/methods/store`, storeData, config)
            .then(response => {
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
                refSubmitDis.current.removeAttribute("disabled");
                event.target.reset();
            }).catch((error) => {
            });

    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }


    return (
        <>

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Add Withdrawal Methods</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <Link to="/admin/withdraw/method" className="btn btn-sm btn-outline-primary">
                        <i className="la la-undo"></i> Back</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <form onSubmit={handleSubmitData}>
                            <div className="card-body">
                                <div className="payment-method-item">

                                    <div className="payment-method-body">
                                        <div className="row mb-none-15">
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-15">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="required"> Name</label>
                                                    <input type="text" className="form-control " name="Name" onBlur={handleInputBlur} required="" id="name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-15">

                                                <div className="form-group">
                                                    <label htmlFor="currency" className="required">Currency</label>
                                                    <input type="text" name='Currency' onBlur={handleInputBlur} className="form-control border-radius-5" required="" id="currency" />
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-15">
                                                <div className="form-group">
                                                    <label htmlFor="rate" className="required">Rate</label>
                                                    <div className="input-group">
                                                        <div className="input-group-text">1 USD =</div>
                                                        <input type="number" step="any" className="form-control" name="Rate" min='0' onBlur={handleInputBlur} required="" id="rate" />
                                                        <div className="input-group-text"><span className="currency_symbol"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                <div className="card border--primary mt-3">
                                                    <h5 className="card-header bg--primary">Range</h5>
                                                    <div className="card-body">
                                                        <div className="form-group">
                                                            <label htmlFor="min_limit" className="required">Minimum Amount</label>
                                                            <div className="input-group">
                                                                <input type="number" step="any" className="form-control" name="MinimumAmount" required="" min='0' onBlur={handleInputBlur} id="min_limit" />
                                                                <div className="input-group-text">USD</div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="max_limit" className="required">Maximum Amount</label>
                                                            <div className="input-group">
                                                                <input type="number" step="any" className="form-control" required="" id="max_limit" name="MaximumAmount" min='0' onBlur={handleInputBlur} />
                                                                <div className="input-group-text">USD</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                <div className="card border-primary mt-3">
                                                    <h5 className="card-header bg--primary">Charge</h5>
                                                    <div className="card-body">
                                                        <div className="form-group">
                                                            <label htmlFor="fixed_charge" className="required">Fixed Charge</label>
                                                            <div className="input-group">
                                                                <input type="number" step="any" className="form-control" required="" v name="FixedCharge"

                                                                    placeholder='Fixed Charge' min='0' onBlur={handleInputBlur} id="fixed_charge" />
                                                                <div className="input-group-text">USD</div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="percent_charge" className="required">Percent Charge</label>
                                                            <div className="input-group">
                                                                <input type="number" step="any" className="form-control" name="PercentCharge" min='0' onBlur={handleInputBlur}required="" id="percent_charge" />
                                                                <div className="input-group-text">%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="card border--primary mt-3">
                                                    <h5 className="card-header bg-primary">Withdrawal Instruction</h5>
                                                    <div className="card-body">
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={content}
                                                            height="600"
                                                            onChange={(newContent) => setContent(newContent)}
                                                        />
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

export default WithdrawalMethodsAdd;