import React, { useEffect, useState } from 'react';
import dateFormat from "dateformat";
import { useParams } from 'react-router-dom';
const StaffDetails = () => {
    // view data 
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/role/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            })
    }, [])



    return (
        <>
            <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 class="page-title">{data?.name} is {data?.role === "super_admin" ? " Super Admin" : " "} {data?.role === "admin" ? " Admin" : " "} {data?.role === "staff" ? "Staff" : " "} </h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div class="row mb-none-30 justify-content-center">
                <div class="col-xl-4 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="mb-20 text-muted">Details</h5>
                            <ul class="list-group">

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Name
                                    <span class="fw-bold"> {data?.name}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Email
                                    <span class="fw-bold"> {data?.email}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Phone
                                    <span class="fw-bold">{data?.phone}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Editor Or Viewer
                                    <span class="fw-bold"> {data?.EditororViewer === 'editor' ? 'Editor' : 'Viewer'} </span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Role
                                    <span class="fw-bold">{data?.role === "super_admin" ? " Super Admin" : " "} {data?.role === "admin" ? " Admin" : " "} {data?.role === "staff" ? "Staff" : " "}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Date
                                    <span class="fw-bold">{dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}</span>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Status

                                    {data.status === 0 ?
                                        <span class="badge badge--warning text-warning">Inactive</span>
                                        : ''}
                                    {data.status === 1 ?
                                        <span class="badge badge--success text-success">Active</span>
                                        : ''}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-md-6 mb-30">
                    <div class="card b-radius--10 overflow-hidden box--shadow1">
                        <div class="card-body">
                            <h5 class="card-title mb-50 border-bottom pb-2">Permission</h5>

                            <div className="row">
                                  
                                    <div className="col-md-6 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.dashboard}  name='dashboard' id="dashboard"  disabled/>
                                                <label className="form-check-label" htmlFor="dashboard">Dashboard</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.crypto_currency}  name='crypto_currency' id="crypto_currency"  disabled/>
                                                <label className="form-check-label" htmlFor="crypto_currency">Crypto Currency</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.trade_setting}  name='trade_setting' id="trade_setting"  disabled/>
                                                <label className="form-check-label" htmlFor="trade_setting">Trade Setting</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.manage_staff}  name='manage_staff' id="manage_staff"  disabled/>
                                                <label className="form-check-label" htmlFor="manage_staff">Manage Staff</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.trade_log}  name='trade_log' id="trade_log"  disabled/>
                                                <label className="form-check-label" htmlFor="trade_log">Trade log</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.practice_trade_log}  name='practice_trade_log' id="practice_trade_log"  disabled/>
                                                <label className="form-check-label" htmlFor="practice_trade_log">Practice Trade Log</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.manage_users}  name='manage_users' id="manage_users"  disabled/>
                                                <label className="form-check-label" htmlFor="manage_users">Manage Users</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.payment_gateways}  name='payment_gateways' id="payment_gateways"  disabled/>
                                                <label className="form-check-label" htmlFor="payment_gateways">Payment Gateways</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.deposits}  name='deposits' id="deposits"  disabled/>
                                                <label className="form-check-label" htmlFor="deposits">Deposits</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.withdrawals}  name='withdrawals' id="withdrawals"  disabled/>
                                                <label className="form-check-label" htmlFor="withdrawals">Withdrawals</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.support_ticket}  name='support_ticket' id="support_ticket"  disabled/>
                                                <label className="form-check-label" htmlFor="support_ticket">Support Ticket</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.report}  name='report' id="report"  disabled/>
                                                <label className="form-check-label" htmlFor="report">Report</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.subscribers}  name='subscribers' id="subscribers"  disabled/>
                                                <label className="form-check-label" htmlFor="subscribers">Subscribers</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.site_setting}  name='site_setting' id="site_setting"  disabled/>
                                                <label className="form-check-label" htmlFor="site_setting">Site Setting</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.KYC_setting}  name='KYC_setting' id="KYC_setting"  disabled/>
                                                <label className="form-check-label" htmlFor="KYC_setting">KYC Setting</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 admin-role">
                                        <div className="form-group">
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.manage_template}  name='manage_template' id="manage_template"  disabled/>
                                                <label className="form-check-label" htmlFor="manage_template">Manage Template</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.manage_page}  name='manage_page' id="manage_page"  disabled/>
                                                <label className="form-check-label" htmlFor="manage_page">Manage Page</label>
                                            </div>
                                            <div className="form-check form-switch ">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.manage_section}  name='manage_section' id="manage_section"  disabled/>
                                                <label className="form-check-label" htmlFor="manage_section">Manage Section</label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input mt-2" type="checkbox" checked={data?.notification_setting}  name='notification_setting' id="notification_setting"   disabled/>
                                                <label className="form-check-label" htmlFor="notification_setting">Notification Setting</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StaffDetails;