import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const SingleItem = ({ data, index }) => {

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        if(data?.user_id){
            fetch(`http://localhost:5000/api/admin/user/view/single/${data?.user_id}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((data) => {
                    setuserData(data.data)
                })
        }
     
    }, [])

    return (
        <>
            <tr>
                <td data-label="S.N.">{index + 1}</td>
                <td data-label="Full Name">
                    <Link to={`/admin/users/details/${userData?._id}`}>
                    <span className="d-block">{userData?.fname} {userData?.lname}</span>
                    </Link>
                    {/* <span>
                        <Link to="#" className="text--small">id</Link>
                    </span> */}
                </td>
                <td data-label="Crypto">
                    <span>{data.Crypto}</span> <br />
                    {/* <span className="text--small">{data.Crypto}</span> */}
                </td>
                <td data-label="Amount">{data?.Amount} $</td>
                <td data-label="In Time"> {dateFormat(data.OutTime, "d-m-yyyy h:MM:ss TT")}</td>
                <td data-label="HighLow">
                    {data.HighLow === "High"
                        ?
                        <span className="badge badge--success text-success">High</span>
                        :
                        <span className="badge badge--danger text-danger">Low</span>
                    }

                </td>
                <td data-label="Result">
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
                        <span className="badge badge--danger text-danger">Loss</span>
                        :
                        ''
                    }

                </td>
                <td data-label="Status">
                    {data.Result === null
                        ?
                        <span className="badge badge--danger text-danger">Running</span>                   
                        :
                        <span className="badge badge--success text-success">Completed</span>
                    }
                   
                </td>
                <td data-label="Date"> {dateFormat(data.InTime, "d-m-yyyy h:MM:ss TT")}</td>
            </tr>
        </>
    );
};

export default SingleItem;