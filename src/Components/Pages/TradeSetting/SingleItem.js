import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ index, data, handleDelete }) => {
    return (
        <>
            <tr>
                <td > {index + 1}</td>
                <td>{data?.Time}</td>
                <td >{data.Unit}</td>
                <th>{data.Profit} %</th>
                <td >
                    <Link to={`/admin/trade/setting/edit/${data._id}`} className="btn btn-sm btn-outline-primary editBtn">
                        <i className="la la-pencil"></i>Edit
                    </Link>
                    <button onClick={() => handleDelete(data._id)} className="btn btn-sm btn-outline-danger ms-1 confirmationBtn"  >
                        <i className="las la-trash"></i>Delete                                    </button>
                </td>
            </tr>

        </>
    );
};

export default SingleItem;