import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, index, handleDelete }) => {
    return (
        <>
            <tr>
                <td data-label="Name">{data.name}</td>
                <td data-label="Slug">{data.slug}</td>
                <td data-label="Action">
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