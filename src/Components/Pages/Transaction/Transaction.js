import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import { useParams } from 'react-router-dom';

const Transaction = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/user/transactions/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])
    return (
        <>


            <div class="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 class="page-title">Transaction Logs</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center br /eadcrumb-plugins">
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="show-filter mb-3 text-end">
                        <button type="button" class="btn btn-outline--primary showFilterBtn btn-sm"><i class="las la-filter"></i> Filter</button>
                    </div>
                    <div class="card responsive-filter-card mb-4">
                        <div class="card-body">
                            <form action="">
                                <div class="d-flex flex-wrap gap-4">
                                    <div class="flex-grow-1">
                                        <label>TRX/Username</label>
                                        <input type="text" name="search" class="form-control" id="search" />
                                    </div>
                                    <div class="flex-grow-1">
                                        <label>Type</label>
                                        <select name="trx_type" class="form-control" id="trx_type">
                                            <option value="">All</option>
                                            <option value="+">Plus</option>
                                            <option value="-">Minus</option>
                                        </select>
                                    </div>
                                    <div class="flex-grow-1">
                                        <label>Remark</label>
                                        <select class="form-control" name="remark" id="remark">
                                            <option value="">Any</option>
                                            <option value="" selected=""></option>
                                            <option value="balance_add">Balance add</option>
                                            <option value="balance_subtract">Balance subtract</option>
                                            <option value="deposit">Deposit</option>
                                            <option value="withdraw">Withdraw</option>
                                            <option value="withdraw_reject">Withdraw reject</option>
                                        </select>
                                    </div>
                                    <div class="flex-grow-1">
                                        <label>Date</label>
                                        <input name="date" type="text" data-range="true" data-multiple-dates-separator=" - " data-language="en" class="datepicker-here form-control" data-position="bottom right" placeholder="Start date - End date" autocomplete="off" value="" id="date" />
                                    </div>
                                    <div class="flex-grow-1 align-self-end">
                                        <button class="btn btn-primary w-100 h-45"><i class="fas fa-filter"></i> Filter</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card b-radius--10 ">
                        <div class="card-body p-0">
                            <div class="table-responsive--sm table-responsive">
                                <table class="table table--light style--two">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>TRX</th>
                                            <th>Transacted</th>
                                            <th>Amount</th>
                                            <th>Post Balance</th>
                                            <th>Details</th>
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

export default Transaction;