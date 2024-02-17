import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleItem from './SingleItem';

const WithdrawalsHistory = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [dataSum, setDataSum] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/withdrawal/history/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setDataSum(data)
                setData(data.data)
            })
    }, [])
    return (
        <>


            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Withdrawals History</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center br /eadcrumb-plugins">
                    <form className="d-flex flex-wrap gap-2 search-form">
                        <div className="input-group w-auto flex-fill">
                            <input type="search" name="search" className="form-control bg--white" placeholder="Search..." id="search" />
                            <button className="btn btn--primary" type="submit"><i className="la la-search"></i></button>
                        </div>
                        <div className="input-group w-auto flex-fill">
                            <input name="date" type="search" data-range="true" data-multiple-dates-separator=" - " data-language="en" data-format="Y-m-d" className="datepicker-here form-control bg--white pe-2" data-position="bottom right" placeholder="Start Date - End Date" autocomplete="off" value="" id="date" />
                            <button className="btn btn--primary input-group-text">
                                <i className="la la-search"></i>
                            </button>
                        </div>



                    </form>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-xxl-3 col-sm-4 mb-30">
                    <div className="widget-two box--shadow2 b-radius--5 bg--success has-link">
                        <Link to="/admin/withdraw/approved" className="item-link"></Link>
                        <div className="widget-two__content">
                            <h2 className="text-white">${dataSum?.WithdrawalAcceptBalanceSum}</h2>
                            <p className="text-white">Successful Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-4 mb-30">
                    <div className="widget-two box--shadow2 b-radius--5 bg--6 has-link">
                        <Link to="/admin/withdraw/pending" className="item-link"></Link>
                        <div className="widget-two__content">
                            <h2 className="text-white">${dataSum?.WithdrawalPendingBalanceSum}</h2>
                            <p className="text-white">Pending Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-4 mb-30">
                    <div className="widget-two box--shadow2 has-link b-radius--5 bg--pink">
                        <Link to="/admin/withdraw/rejected" className="item-link"></Link>
                        <div className="widget-two__content">
                            <h2 className="text-white">${dataSum?.WithdrawalRejectBalanceSum}</h2>
                            <p className="text-white">Rejected Withdrawals</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="card b-radius--10">
                        <div className="card-body p-0">
                            <div className="table-responsive--sm table-responsive">
                                <table className="table table--light style--two">
                                    <thead>
                                        <tr>
                                            <th>Gateway | Transaction</th>
                                            <th>Initiated</th>
                                            <th>User</th>
                                            <th>Amount</th>
                                            <th>Conversion</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data._id} ></SingleItem>
                                                    );
                                                }
                                            }) :
                                            <tr>
                                                <td className="text-muted text-center" colSpan="100%">Data not found</td>
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

export default WithdrawalsHistory;