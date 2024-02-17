import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleItem from '../SingleItem';

const SupportTicketAnswered = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/support/tickets/answered/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })
    }, [])
    return (
        <>
            <div className="bodywrapper__inner">

                <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                    <h6 className="page-title">Answered  Tickets</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive--sm table-responsive">
                                    <table className="table table--light">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Submitted By</th>
                                                <th>Status</th>
                                                <th>Priority</th>
                                                <th>Last Reply</th>
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
                            {/* <div className="card-footer py-4">
                <nav className="d-flex justify-content-end">
                    <ul className="pagination">

                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                            <span className="page-link" aria-hidden="true">‹</span>
                        </li>





                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                        <li className="page-item"><a className="page-link" href="https://gffexvip.biz/admin/ticket/pending?page=2">2</a></li>
                        <li className="page-item"><a className="page-link" href="https://gffexvip.biz/admin/ticket/pending?page=3">3</a></li>


                        <li className="page-item">
                            <a className="page-link" href="https://gffexvip.biz/admin/ticket/pending?page=2" rel="next" aria-label="Next »">›</a>
                        </li>
                    </ul>
                </nav>

            </div> */}
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default SupportTicketAnswered;