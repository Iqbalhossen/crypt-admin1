import React, { useEffect, useState, useRef } from 'react';
import SingleItem from './SingleItem';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'antd/dist/reset.css';
import dateFormat from "dateformat";
import { DatePicker, ConfigProvider } from "antd";
const TransactionLogs = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/report/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])

    const [trx_typeFilter, setTrx_typeFilter] = useState("");
    const [nameFilter, setNameFilter] = useState("");
    const [Remark, setRemark] = useState("");
    const [dateValue, setDateValue] = useState([]);
    const [dateValueShow, setDateValueShow] = useState([]);

















    const refSubmitDis = useRef();


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.get(`http://localhost:5000/api/admin/report/view?search=${nameFilter}&trx_type=${trx_typeFilter}&remark=${Remark}&start_date=${dateValue[0]}&end_date=${dateValue[1]}`, config)
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
                setData(response.data.data)
                refSubmitDis.current.removeAttribute("disabled");
            }).catch((error) => {
                refSubmitDis.current.removeAttribute("disabled");
            });

    }


    const { RangePicker } = DatePicker;

    const Time = () => {

        return (
            <>
                <RangePicker
                    value={dateValueShow}
                    onChange={(e) => {
                        setDateValue(e.map(item => {
                            return dateFormat(item, "isoUtcDateTime")
                        }));
                        setDateValueShow(e);
                    }}
                />
            </>
        );
    };

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
                                <form onSubmit={handleSubmitData}>
                                    <div className="d-flex flex-wrap gap-4">
                                        <div className="flex-grow-1">
                                            <label>TRX</label>
                                            <input type="text" name="search" className="form-control" id="search" value={nameFilter}
                                                onChange={(e) => setNameFilter(e.currentTarget.value)} />
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Type</label>
                                            <select name="trx_type" value={trx_typeFilter}
                                                onChange={(e) => setTrx_typeFilter(e.currentTarget.value)} className="form-control" id="trx_type">
                                                <option value="">All</option>
                                                <option value="plus">Plus</option>
                                                <option value="-">Minus</option>
                                            </select>
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Remark</label>
                                            <select value={Remark}
                                                onChange={(e) => setRemark(e.currentTarget.value)} className="form-control" name="remark" id="remark">
                                                <option value="">Any</option>
                                                <option value="balance_add">Balance add</option>
                                                <option value="balance_subtract">Balance subtract</option>
                                                <option value="deposit">Deposit</option>
                                                <option value="withdraw">Withdraw</option>
                                                <option value="withdraw_reject">Withdraw reject</option>
                                            </select>
                                        </div>
                                        <div className="flex-grow-1">
                                            <label>Date</label>
                                            <br />
                                            <Time className="datepicker-here form-control" />
                                            {/* <input name="date" type="text"  placeholder="Start date - End date" autocomplete="off" value="" id="date" /> */}
                                        </div>
                                        <div className="flex-grow-1 align-self-end">
                                            <button ref={refSubmitDis} className="btn btn-primary w-100 h-45"><i className="fas fa-filter"></i> Filter</button>
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



            </div>
        </>
    );
};

export default TransactionLogs;