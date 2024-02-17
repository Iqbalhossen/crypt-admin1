import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ index, data, handleDelete }) => {
    return (
        <>
            <tr>
                <td data-label="S.N.">{index + 1}</td>
                <td  data-label="Iamge">
                <div className="user">
                        <div className="thumb">
                            <img src={`http://localhost:5000/${data?.image_url}`} alt='' />
                        </div>
                    </div>
                </td>
                <td data-label="Title">{data?.title}</td>
                <td data-label="Action">
                    <div class="button--group">
                        <Link to={`/admin/frontend/frontend-sections/our/products/edit/${data?._id}`} class="btn btn-sm btn-outline-primary"><i class="la la-pencil-alt"></i> Edit</Link>
                        <button class="btn btn-sm btn-outline-danger " onClick={()=>handleDelete(data?._id)} ><i class="la la-trash"></i> Remove</button>
                    </div>
                </td>
            </tr>

        </>
    );
};

export default SingleItem;