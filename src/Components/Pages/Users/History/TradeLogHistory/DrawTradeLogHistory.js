import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleItem from './SingleItem';


const DrawTradeLogHistory = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/user/trade/log/draw/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])

    return (
        <>


            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Draw Trade Log</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" className="d-flex flex-wrap gap-2 search-form">
                        <div className="input-group w-auto flex-fill">
                            <input type="search" name="search" className="form-control bg--white" placeholder="Username,Crypto..." defaultValue="" id="search" />
                            <button className="btn btn--primary" type="submit"><i className="la la-search"></i></button>
                        </div>
                        <div className="input-group w-auto flex-fill">
                            <input name="date" type="search" data-range="true" data-multiple-dates-separator=" - " data-language="en" data-format="Y-m-d" className="datepicker-here form-control bg--white pe-2" data-position="bottom right" placeholder="Start Date - End Date" autoComplete="off" defaultValue="" id="date" />
                            <button className="btn btn--primary input-group-text"><i className="la la-search"></i></button>
                        </div>



                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card b-radius--10 ">
                        <div className="card-body p-0">
                            <div className="table-responsive--md  table-responsive">
                                <table className="table table--light style-two mb-0">
                                    <thead>
                                        <tr>
                                            <th>S.N.</th>
                                            <th>User</th>
                                            <th>Crypto</th>
                                            <th>Amount</th>
                                            <th>In Time</th>
                                            <th>HighLow</th>
                                            <th>Result</th>
                                            <th>Status</th>
                                            <th>Date</th>
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
                        {/* paginateLinks */}

                        {/* paginateLinks */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrawTradeLogHistory;