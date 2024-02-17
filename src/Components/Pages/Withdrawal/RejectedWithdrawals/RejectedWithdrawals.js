import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SingleItem from '../SingleItem';

const RejectedWithdrawals = () => {
    const [data, setData] = useState([]);
    const [dataSum, setdataSum] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/withdrawal/reject`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                setdataSum(data);
            })
    }, [])
    return (
        <>
              <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 class="page-title">Rejected Withdrawals</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" class="d-flex flex-wrap gap-2 search-form">
                        <div class="input-group w-auto flex-fill">
                            <input type="search" name="search" class="form-control bg--white" placeholder="Search..." value="" id="search" />
                            <button class="btn btn--primary" type="submit"><i class="la la-search"></i></button>
                        </div>
                        <div class="input-group w-auto flex-fill">
                            <input name="date" type="search" data-range="true" data-multiple-dates-separator=" - " data-language="en" data-format="Y-m-d" class="datepicker-here form-control bg--white pe-2" data-position="bottom right" placeholder="Start Date - End Date" autocomplete="off" value="" id="date" />
                            <button class="btn btn--primary input-group-text"><i class="la la-search"></i></button>
                        </div>



                    </form>
                </div>
            </div>

            <div class="row justify-content-center">
            <div class="col-xl-6 col-sm-6 mb-30">
                    <div class="widget-two box--shadow2 has-link b-radius--5 bg--success">
                        <div class="widget-two__content">
                            <h2 class="text-white">${dataSum.WithdrawalPendingSum}</h2>
                            <p class="text-white">Rejected Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-sm-6 mb-30">
                    <div class="widget-two box--shadow2 has-link b-radius--5 bg--6">
                        <div class="widget-two__content">
                            <h2 class="text-white">{dataSum.length}</h2>
                            <p class="text-white">Totals Rejected Withdrawals</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card b-radius--10">
                        <div class="card-body p-0">
                            <div class="table-responsive--sm table-responsive">
                                <table class="table table--light style--two mb-0" >
                                    <thead>
                                        <tr>
                                            <th>Gateway | Transaction</th>
                                            <th>Initiated</th>
                                            <th>Full Name</th>
                                            <th>Amount</th>
                                            <th>Conversion</th>
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
        </>
    );
};

export default RejectedWithdrawals;