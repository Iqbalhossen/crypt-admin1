import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, index, handleDelete }) => {
    return (
        <>
            <tr>
                <td >{data.name}</td>
                <td >{data.slug}</td>
                <td >
                    <div className="button-group">
                        <Link to={`/admin/frontend/manage-section/${data?._id}`} className="btn btn-sm btn-outline-primary"><i className="la la-pen"></i> Edit</Link>
                        <button className="btn btn-sm btn-outline-danger confirmationBtn" onClick={() => handleDelete(data._id)} >
                            <i className="las la-trash"></i> Delete                                                </button>
                    </div>
                </td>
            </tr>

        </>
    );
};

export default SingleItem;