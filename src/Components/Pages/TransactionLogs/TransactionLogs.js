import React from 'react';

const TransactionLogs = () => {
    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Transaction Logs</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center br /eadcrumb-plugins">
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-12">
                        <div className="show-filter mb-3 text-end">
                            <button type="button" className="btn btn-outline--primary showFilterBtn btn-sm"><i className="las la-filter"></i> Filter</button>
                        </div>
                        <div className="card responsive-filter-card mb-4">
                            <div className="card-body">
                                <form  >
                                    <div className="d-flex flex-wrap gap-4">
                                        <div className="flex-grow-1">
                                            <label>TRX/Username</label>
                                            <input type="text" name="search" value="" className="form-control" id="search" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Type</label>
                                            <select name="trx_type" className="form-control" id="trx_type">
                                                <option value="">All</option>
                                                <option value="+">Plus</option>
                                                <option value="-">Minus</option>
                                            </select>
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Remark</label>
                                            <select className="form-control" name="remark" id="remark">
                                                <option value="">Any</option>
                                                <option value="" selected=""></option>
                                                <option value="balance_add">Balance add</option>
                                                <option value="balance_subtract">Balance subtract</option>
                                                <option value="deposit">Deposit</option>
                                                <option value="withdraw">Withdraw</option>
                                                <option value="withdraw_reject">Withdraw reject</option>
                                            </select>
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Date</label>
                                            <input name="date" type="text" data-range="true" data-multiple-dates-separator=" - " data-language="en" className="datepicker-here form-control" data-position="bottom right" placeholder="Start date - End date" autocomplete="off" value="" id="date" />
                                        </div>
                                        <div className="flex-grow-1 align-self-end">
                                            <button className="btn btn--primary w-100 h-45"><i className="fas fa-filter"></i> Filter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive--sm table-responsive">
                                    <table className="table table--light style--two">
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
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">Wilmer Danilo Nuñez Mejia</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=wnunez"><span>@</span>wnunez</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>W3NYSTQV2TD5</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-21 11:34 PM<br />1 day ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 1,000,000,000.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    569,720,580.00 USD
                                                </td>

                                                <td data-label="Details">990,000,000.00 USD Withdraw Via Bank transfer</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">Wilmer Danilo Nuñez Mejia</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=wnunez"><span>@</span>wnunez</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>C9Y5CRQU8PO8</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-21 11:27 PM<br />1 day ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 20,000,000.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    1,569,720,580.00 USD
                                                </td>

                                                <td data-label="Details">Trade to Gold WIN</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">Wilmer Danilo Nuñez Mejia</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=wnunez"><span>@</span>wnunez</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>TTE2PJJEQ62M</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-21 11:26 PM<br />1 day ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 20,000,000.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    1,539,720,580.00 USD
                                                </td>

                                                <td data-label="Details">Trade to Gold High</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>USSHPQU62ROP</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-21 05:02 AM<br />2 days ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,939.00 USD
                                                </td>

                                                <td data-label="Details">no</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>RO7FDDDWV68G</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-09 06:32 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 20.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,949.00 USD
                                                </td>

                                                <td data-label="Details">0.00 USD Withdraw Via ETH</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>NCJA9OPNP2X5</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-08 01:20 PM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC High</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>WJQ1ZM7QW7VN</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:24 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC DRAW</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>6H2YFCJDAVSV</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:23 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC Low</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>K66BXUVS6KV9</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:23 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC DRAW</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>VPZQ4SNBBTJF</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:22 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC High</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>UBJKE5DPCTEN</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:22 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC DRAW</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>QBTSD61QN6K8</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:22 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC High</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>EEFBUKXWW2FT</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:21 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC WIN</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>3TKW3ZUDJZ62</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:20 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC High</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>13A5MY2C9G74</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:19 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC DRAW</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>KRB43DA5S3S4</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:19 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC Low</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>BTORYSH5RZJQ</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:16 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,979.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC WIN</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>GD7WGZ1D5NBR /</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:15 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold text--success ">
                                                        + 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade BTC DRAW</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>C7EY2NA72R88</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:15 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,959.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC Low</td>
                                            </tr>
                                            <tr>
                                                <td data-label="User">
                                                    <span className="fw-bold">iqbal Ahmed</span>
                                                    <br />
                                                        <span className="small"> <a href="https://gffexvip.biz/admin/report/transaction?search=miller5547l"><span>@</span>miller5547l</a> </span>
                                                </td>

                                                <td data-label="TRX">
                                                    <strong>CGV775B1HKWX</strong>
                                                </td>

                                                <td data-label="Transacted">
                                                    2024-01-06 11:14 AM<br />2 weeks ago
                                                </td>

                                                <td className="budget" data-label="Amount">
                                                    <span className="fw-bold  text--danger ">
                                                        - 10.00 USD
                                                    </span>
                                                </td>

                                                <td className="budget" data-label="Post Balance">
                                                    99,969.00 USD
                                                </td>

                                                <td data-label="Details">Trade to BTC Low</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default TransactionLogs;