import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
//array

const StaffAdd = () => {
    const [dataVulue, setDataVulue] = useState({});

    const refSubmitDis = useRef();
    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
        });
    };


    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }


    const handleSubmitData = event => {
        event.preventDefault();
        const StoreData = { ...dataVulue, ...checkedItems }
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.post(`http://66.29.142.198:5000/api/admin/role/store`, StoreData, config)
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
                refSubmitDis.current.removeAttribute("disabled");
            }).catch((error) => {
                toast.error(`${error.response?.data.message}`, {
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
            });

    }




    return (
        <>

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Admin Add</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmitData}>
                                <div className="row">
                                    <div className=" col-md-12 ">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="heading" className="required">Full Name </label>
                                                <input type="text" className="form-control" name="name" onBlur={handleInputBlur} required id="heading" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="sub_heading" className="required">Email</label>
                                            <input type="email" className="form-control" name='email' onBlur={handleInputBlur} required id="sub_heading" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="required"> Phone</label>
                                            <input type="number" className="form-control" name="phone" onBlur={handleInputBlur} required id="phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password" className="required"> Password</label>
                                            <input type="password" className="form-control" name="password" onBlur={handleInputBlur} required id="password" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="role"  className="required"> Role</label>
                                            <select className="form-control"  onBlur={handleInputBlur} name="role" id="role" required>
                                                <option selected disabled>select</option>
                                                <option value="super_admin">Super Admin</option>
                                                <option value="admin">Admin</option>
                                                <option value="staff">Staff</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="button_one_url" > Manage Role</label>

                                        </div>
                                    </div>
                                    <div className="col-md-3 admin-role">

                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.dashboard} onChange={handleChange} name='dashboard' id="dashboard" />
                                                <label className="form-check-label" htmlFor="dashboard">Dashboard</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.crypto_currency} onChange={handleChange} name='crypto_currency' id="crypto_currency" />
                                                <label className="form-check-label" htmlFor="crypto_currency">Crypto Currency</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.trade_setting} onChange={handleChange} name='trade_setting' id="trade_setting" />
                                                <label className="form-check-label" htmlFor="trade_setting">Trade Setting</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.manage_staff} onChange={handleChange} name='manage_staff' id="manage_staff" />
                                                <label className="form-check-label" htmlFor="manage_staff">Manage Staff</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.trade_log} onChange={handleChange} name='trade_log' id="trade_log" />
                                                <label className="form-check-label" htmlFor="trade_log">Trade log</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.practice_trade_log} onChange={handleChange} name='practice_trade_log' id="practice_trade_log" />
                                                <label className="form-check-label" htmlFor="practice_trade_log">Practice Trade Log</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.manage_users} onChange={handleChange} name='manage_users' id="manage_users" />
                                                <label className="form-check-label" htmlFor="manage_users">Manage Users</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.payment_gateways} onChange={handleChange} name='payment_gateways' id="payment_gateways" />
                                                <label className="form-check-label" htmlFor="payment_gateways">Payment Gateways</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.deposits} onChange={handleChange} name='deposits' id="deposits" />
                                                <label className="form-check-label" htmlFor="deposits">Deposits</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.withdrawals} onChange={handleChange} name='withdrawals' id="withdrawals" />
                                                <label className="form-check-label" htmlFor="withdrawals">Withdrawals</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.support_ticket} onChange={handleChange} name='support_ticket' id="support_ticket" />
                                                <label className="form-check-label" htmlFor="support_ticket">Support Ticket</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.report} onChange={handleChange} name='report' id="report" />
                                                <label className="form-check-label" htmlFor="report">Report</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.subscribers} onChange={handleChange} name='subscribers' id="subscribers" />
                                                <label className="form-check-label" htmlFor="subscribers">Subscribers</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.site_setting} onChange={handleChange} name='site_setting' id="site_setting" />
                                                <label className="form-check-label" htmlFor="site_setting">Site Setting</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.KYC_setting} onChange={handleChange} name='KYC_setting' id="KYC_setting" />
                                                <label className="form-check-label" htmlFor="KYC_setting">KYC Setting</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.manage_template} onChange={handleChange} name='manage_template' id="manage_template" />
                                                <label className="form-check-label" htmlFor="manage_template">Manage Template</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.manage_page} onChange={handleChange} name='manage_page' id="manage_page" />
                                                <label className="form-check-label" htmlFor="manage_page">Manage Page</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.manage_section} onChange={handleChange} name='manage_section' id="manage_section" />
                                                <label className="form-check-label" htmlFor="manage_section">Manage Section</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={checkedItems.notification_setting} onChange={handleChange} name='notification_setting' id="notification_setting" />
                                                <label className="form-check-label" htmlFor="notification_setting">Notification Setting</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <div className="form-group">
                                            <label htmlFor="button_one_url" >Editor or Viewer</label>

                                        </div>
                                    </div>

                                    <div className="col-md-3 admin-role mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="EditororViewer" onBlur={handleInputBlur} id="exampleRadios1" value="editor" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">
                                                Editor
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="EditororViewer" onBlur={handleInputBlur} id="exampleRadios2" value="viewer" />
                                            <label className="form-check-label" htmlFor="exampleRadios2">
                                                Viewer
                                            </label>
                                        </div>

                                    </div>



                                </div>

                                <div className="form-group">
                                    <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default StaffAdd;