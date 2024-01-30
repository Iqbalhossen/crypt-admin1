import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SingleItem from '../SingleItem';

const PendingWithdrawals = () => {
    const [dataSum, setdataSum] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/withdrawal/pending`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
                setdataSum(data)
            })
    }, [])
    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Pending Withdrawals</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" className="d-flex flex-wrap gap-2 search-form">
                        <div className="input-group w-auto flex-fill">
                            <input type="search" name="search" className="form-control bg--white" placeholder="Search..." value="" id="search" />
                            <button className="btn btn--primary" type="submit"><i className="la la-search"></i></button>
                        </div>
                        <div className="input-group w-auto flex-fill">
                            <input name="date" type="search" data-range="true" data-multiple-dates-separator=" - " data-language="en" data-format="Y-m-d" className="datepicker-here form-control bg--white pe-2" data-position="bottom right" placeholder="Start Date - End Date" autocomplete="off" value="" id="date" />
                            <button className="btn btn--primary input-group-text"><i className="la la-search"></i></button>
                        </div>



                    </form>
                </div>
            </div>

            <div className="row justify-content-center">
                <div class="col-xl-6 col-sm-6 mb-30">
                    <div class="widget-two box--shadow2 has-link b-radius--5 bg--success">
                        <div class="widget-two__content">
                            <h2 class="text-white">${dataSum.WithdrawalPendingSum}</h2>
                            <p class="text-white">Pending Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-sm-6 mb-30">
                    <div class="widget-two box--shadow2 has-link b-radius--5 bg--6">
                        <div class="widget-two__content">
                            <h2 class="text-white">{dataSum.length}</h2>
                            <p class="text-white">Totals Pending Withdrawals</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="card b-radius-10 ">
                        <div className="card-body p-0">

                            <div className="table-responsive-sm table-responsive">
                                <table className="table table-light style-two mb-0">
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
                                                <td classNameName="text-muted text-center" colSpan="100%">Data not found</td>
                                            </tr>}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="card-footer py-4">
                            <nav className="d-flex justify-content-end">
                                <ul className="pagination">

                                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span className="page-link" aria-hidden="true">‹</span>
                                    </li>





                                    <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="https://gffexvip.biz/admin/withdraw/log?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="https://gffexvip.biz/admin/withdraw/log?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="https://gffexvip.biz/admin/withdraw/log?page=4">4</a></li>


                                    <li className="page-item">
                                        <a className="page-link" href="https://gffexvip.biz/admin/withdraw/log?page=2" rel="next" aria-label="Next »">›</a>
                                    </li>
                                </ul>
                            </nav>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PendingWithdrawals;