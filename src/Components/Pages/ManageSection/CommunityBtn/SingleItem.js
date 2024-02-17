import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SingleItem = ({ index, data, handleDelete }) => {
    return (
        <>
            <tr>
            <td data-label="S.N.">{index + 1}</td>
                <td data-label="Iamge">
                    <div className="user">
                        <div className="thumb">
                           <Link to={data?.btn_url}> <img src={`https://gffex.xyz/${data?.btn_image}`} alt='' /></Link>
                        </div>
                    </div>
                </td>
                
                <td data-label="Created">
                {dateFormat(data.created_at, "d-m-yyyy h:MM:ss TT")}
                </td>
                <td data-label="Action">
                    <Link to={`/admin/frontend/frontend-sections/community/btn/edit/${data._id}`} className="btn btn-sm btn-outline-primary editBtn"
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