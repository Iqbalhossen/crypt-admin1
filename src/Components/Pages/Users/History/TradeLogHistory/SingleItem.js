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
                    <span className="d-block">{userData.name}</span>
                    {/* <span>
                        <Link to="#" className="text--small">id</Link>
                    </span> */}
                </td>
                <td>
                    <span>{data.Crypto}</span> <br />
                    {/* <span className="text--small">{data.Crypto}</span> */}
                </td>
                <td>{data.Amount} $</td>
                <td> {dateFormat(data.OutTime, "d-m-yyyy h:MM:ss TT")}</td>
                <td>
                    {data.HighLow === "High"
                        ?
                        <span class="badge badge--success text-success">High</span>
                        :
                        <span className="badge badge--danger text-danger">Low</span>
                    }

                </td>
                <td>
                    {data.Result === "Win"
                        ?
                        <span class="badge badge--success text-success">Win</span>
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
                        <span className="badge badge--danger text-danger">Loss</span>
                        :
                        ''
                    }

                </td>
                <td>
                    {data.Result === null
                        ?
                        <span className="badge badge--danger text-danger">Running</span>                   
                        :
                        <span className="badge badge--success text-success">Completed</span>
                    }
                   
                </td>
                <td> {dateFormat(data.InTime, "d-m-yyyy h:MM:ss TT")}</td>
            </tr>
        </>
    );
};

export default SingleItem;