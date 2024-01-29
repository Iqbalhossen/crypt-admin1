import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/user/view/single/${data?.user_id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setuserData(data.data)
            })
    }, [])

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/admin/users/details/${userData?._id}`}>
                    <span classNameName="d-block">{userData?.name}</span>
                    </Link>
                    {/* <span>
                        <Link to="#" classNameName="text--small">id</Link>
                    </span> */}
                </td>
                <td>
                    <span>{data.Crypto}</span> <br />
                    {/* <span classNameName="text--small">{data.Crypto}</span> */}
                </td>
                <td>{data?.Amount} $</td>
                <td> {dateFormat(data.OutTime, "d-m-yyyy h:MM:ss TT")}</td>
                <td>
                    {data.HighLow === "High"
                        ?
                        <span className="badge badge--success text-success">High</span>
                        :
                        <span classNameName="badge badge--danger text-danger">Low</span>
                    }

                </td>
                <td>
                    {data.Result === "Win"
                        ?
                        <span className="badge badge--success text-success">Win</span>
                        :
                        ''
                    }
                    {data.Result === "Draw"
                        ?
                        <span className="badge badge--dark text-dark">Draw</span>
                        :
                        ''
                    }
                    {data.Result === "Loss"
                        ?
                        <span classNameName="badge badge--danger text-danger">Loss</span>
                        :
                        ''
                    }

                </td>
                <td>
                    {data.Result === null
                        ?
                        <span classNameName="badge badge--danger text-danger">Running</span>                   
                        :
                        <span classNameName="badge badge--success text-success">Completed</span>
                    }
                   
                </td>
                <td> {dateFormat(data.InTime, "d-m-yyyy h:MM:ss TT")}</td>
            </tr>
        </>
    );
};

export default SingleItem;