import React, { useState } from 'react';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';

const AutomaticGateways = () => {
    
    const [data, setData] = useState([]);
 

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Automatic Gateways</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <div className="input-group w-auto search-form">
                        <input type="text" name="search_table" className="form-control bg--white" placeholder="Search..." id="search_table" />
                        <button className="btn btn--primary input-group-text"><i className="fa fa-search"></i></button>
                    </div>
                    <Link className="btn btn-outline-primary" to='#'><i className="las la-plus"></i>Add New</Link>
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
                                            <th>Gateway</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length !== 0 ?
                                            data.map((data, index) => {
                                                if (data) {
                                                    return (
                                                        <SingleItem data={data} index={index} key={data?._id} ></SingleItem>
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
                        {/* paginateLinks */}

                        {/* paginateLinks */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default AutomaticGateways;