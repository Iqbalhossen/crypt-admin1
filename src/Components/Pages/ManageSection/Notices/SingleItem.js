import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SingleItem = ({ index, data, handleDelete }) => {
    return (
        <>
            <tr>
            <td>{index + 1}</td>
                <td>
                    {data.name}
                </td>
                
                <td>
                {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}
                </td>
                <td>
                    <Link to={`/admin/frontend/frontend-sections/notices/edit/${data._id}`} className="btn btn-sm btn-outline-primary editBtn"
                    >
                        <i className="la la-pencil"></i>Edit
                    </Link>
                    <button onClick={() => handleDelete(data._id)} className="btn btn-sm btn-outline-danger ms-1 confirmationBtn"
                    >
                       <FontAwesomeIcon icon="fa-solid fa-trash-can" />Delete
                    </button>


                </td>
            </tr>
        </>
    );
};

export default SingleItem;