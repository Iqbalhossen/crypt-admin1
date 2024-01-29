import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem';

const ActiveUsers = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/user/view/all`, {
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
                <h6 class="page-title">Active Users</h6>
                <div class="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <form action="" method="GET" class="d-flex flex-wrap gap-2 search-form">
                        <div class="input-group w-auto flex-fill">
                            <input type="search" name="search" class="form-control bg--white" placeholder="Username / Email" value="" id="search" />
                            <button class="btn btn--primary" type="submit"><i class="la la-search"></i></button>
                        </div>

                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card b-radius--10 ">
                        <div class="card-body p-0">
                            <div class="table-responsive--md  table-responsive">
                                <table class="table table--light style--two">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Email-Phone</th>
                                            <th>Password</th>
                                            <th>Country</th>
                                            <th>Joined At</th>
                                            <th>Balance</th>
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
                                                <td className="text-muted text-center" colspan="100%">Data not found</td>
                                            </tr>}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div class="card-footer py-4">
                            <nav class="d-flex justify-content-end">
                                <ul class="pagination">

                                    <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span class="page-link" aria-hidden="true">‹</span>
                                    </li>





                                    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                    <li class="page-item"><a class="page-link" href="https://gffexvip.biz/admin/users/active?page=2">2</a></li>


                                    <li class="page-item">
                                        <a class="page-link" href="https://gffexvip.biz/admin/users/active?page=2" rel="next" aria-label="Next »">›</a>
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

export default ActiveUsers;