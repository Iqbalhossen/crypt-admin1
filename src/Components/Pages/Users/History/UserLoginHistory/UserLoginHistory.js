import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleItem from './SingleItem';
import { useParams } from 'react-router-dom';

const UserLoginHistory = () => {
const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://gffex.xyz/api/admin/user/view/login/history/${id}`, {
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
                    <h6 className="page-title">User Login History</h6>
                    <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        <form action="" method="GET" className="d-flex flex-wrap gap-2 search-form">
                            <div className="input-group w-auto flex-fill">
                                <input type="search" name="search" className="form-control bg--white" placeholder="Enter Username" value="miller5547l" id="search" />
                                    <button className="btn btn--primary" type="submit"><i className="la la-search"></i></button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-12">
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">

                                <div className="table-responsive--sm table-responsive">
                                    <table className="table table--light style--two">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Login at</th>
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

export default UserLoginHistory;