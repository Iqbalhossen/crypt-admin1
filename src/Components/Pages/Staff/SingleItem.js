import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ index, data, handleDelete }) => {
    return (
        <>
            <tr>
                <td data-label="Name">
                    <div className="user">
                        <span className="name">{data?.name}</span>
                    </div>
                </td>
                <td data-label="Email">{data?.email}</td>
                <td data-label="Phone">{data?.phone}</td>
                <td data-label="Editor Or Viewer">
                    {data?.EditororViewer === "editor" ?
                        <span className="badge badge--success text-success">Editor</span>

                        :
                        <span className="badge badge--warning text-warning">Viewer</span>
                    }
                </td>
                <td data-label="Role">
                {data?.role === "super_admin" ?
                        <span className="badge text-bg-primary">Super Admin</span>

                        :
                        ''
                    }
                    {data?.role === "admin" ?
                        <span className="badge text-bg-success">Admin</span>

                        :
                        ''
                    }           
                    {data?.role === "staff" ?
                        <span className="badge text-bg-info">Staff</span>

                        :
                        ''
                    }
                </td>
                <td data-label="Action">
                    <Link to={`/admin/staff/details/${data._id}`} className="btn btn-sm btn-outline-primary ms-1">
                        <i className="la la-desktop"></i> Details                                    </Link>
                    <Link to={`/admin/staff/edit/${data?._id}`} class="btn btn-sm btn-outline-primary"><i class="la la-pencil-alt"></i> Edit</Link>
                    <button class="btn btn-sm btn-outline-danger " onClick={() => handleDelete(data?._id)} ><i class="la la-trash"></i> Remove</button>
                </td>
            </tr>
        </>
    );
};

export default SingleItem;