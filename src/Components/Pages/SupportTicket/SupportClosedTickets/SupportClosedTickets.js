import React from 'react';

const SupportClosedTickets = () => {
    return (
        <>
              <div className="bodywrapper__inner">

<div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
    <h6 className="page-title">Closed Tickets</h6>
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
                            <tr>
                                <td data-label="Subject">
                                    <a href="https://gffexvip.biz/admin/ticket/view/84" className="fw-bold"> [Ticket#89707690] re: collaboration request </a>
                                </td>

                                <td data-label="Submitted By">
                                    <p className="fw-bold"> Hassie</p>
                                </td>
                                <td data-label="Status">
                                    <span className="badge badge--success">Open</span>                                    </td>
                                <td data-label="Priority">
                                    <span className="badge  badge--warning">Medium</span>
                                </td>

                                <td data-label="Last Reply">
                                    2 days ago
                                </td>

                                <td data-label="Action">
                                    <a href="https://gffexvip.biz/admin/ticket/view/84" className="btn btn-sm btn-outline-primary ms-1">
                                        <i className="las la-desktop"></i> Details                                        </a>
                                </td>
                            </tr>
                          

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

export default SupportClosedTickets;