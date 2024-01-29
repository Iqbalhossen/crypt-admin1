import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import dateFormat from "dateformat";
import { Modal } from 'react-bootstrap';

const Details = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);
    const [userUpdateData, setuserUpdateData] = useState({});


    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/user/view/single/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.data)
            })
    }, [userUpdateData])

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/user/view/history/view/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])


    const refSubmitDis = useRef();
    // Balance Add 

    const [BalanceAddModalshow, setBalanceAddModalShow] = useState(false);
    const handleBalanceAddModalClose = () => setBalanceAddModalShow(false);
    const handleBalanceAddModalShow = () => setBalanceAddModalShow(true);

    // view data 
    const [BalanceAddDataVulue, setBalanceAddDataVulue] = useState({});


    // store data 

    const handleSubmitData = event => {
        event.preventDefault();
        const storeData = { ...BalanceAddDataVulue, user_id: id }
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/user/view/balance/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(storeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    handleBalanceAddModalClose()
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error =>
                refSubmitDis.current.removeAttribute("disabled"));
    }

    const handleBalanceAddInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...BalanceAddDataVulue };
        newData[field] = value;
        setBalanceAddDataVulue(newData);
    }

    // Balance Minus  

    const [BalanceMinusModalshow, setBalanceMinusModalShow] = useState(false);
    const handleBalanceMinusModalClose = () => setBalanceMinusModalShow(false);
    const handleBalanceMinusModalShow = () => setBalanceMinusModalShow(true);

    // view data 
    const [BalanceMinusDataVulue, setBalanceMinusDataVulue] = useState({});

    // store data 

    const handleBalanceMinusSubmitData = event => {
        event.preventDefault();
        const storeData = { ...BalanceMinusDataVulue, user_id: id }
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/user/view/balance/subtract`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(storeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    handleBalanceMinusModalClose()
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error =>
                refSubmitDis.current.removeAttribute("disabled"));
    }

    const handleBalanceMinusInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...BalanceMinusDataVulue };
        newData[field] = value;
        setBalanceMinusDataVulue(newData);
    }




    // view data 
    const [dataVulue, setDataVulue] = useState({});


    // store data 

    const handleUserSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/user/view/update/by/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dataVulue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    userUpdateData(data?.data);
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    handleBalanceAddModalClose()
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error =>
                refSubmitDis.current.removeAttribute("disabled"));
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...dataVulue };
        newData[field] = value;
        setDataVulue(newData);
    }



    // banned user 



    const [BannedModalshow, setBannedModalShow] = useState(false);
    const handleBannedModalClose = () => setBannedModalShow(false);
    const handleBannedModalShow = () => setBannedModalShow(true);

    // view data 
    const [BanDataVulue, setBanDataVulue] = useState({});


    // store data 

    const handleBanSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        fetch(`http://66.29.142.198:5000/api/admin/user/view/banned/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(BanDataVulue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    handleBannedModalClose()
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    event.target.reset();
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
            .catch(error =>
                refSubmitDis.current.removeAttribute("disabled"));
    }

    const handleUserBanInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newData = { ...BanDataVulue };
        newData[field] = value;
        setBanDataVulue(newData);
        console.log()
    }

    return (
        <>
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">User Detail - {userData?.name}</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="row gy-4">
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--19">
                                <div className="widget-two__icon b-radius--5 bg--primary">
                                    <i className="las la-money-bill-wave-alt"></i>
                                </div>
                                <div className="widget-two__content">
                                    <h3 className="text-white">${userData?.balance}</h3>
                                    <p className="text-white">Balance</p>
                                </div>
                                <Link to={`/admin/report/transaction/history/${userData?._id}`} className="widget-two__btn">View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--primary">
                                <div className="widget-two__icon b-radius--5 bg--primary">
                                    <i className="las la-wallet"></i>
                                </div>
                                <div className="widget-two__content">
                                    <h3 className="text-white">${data?.DepositAcceptBalanceSum}</h3>
                                    <p className="text-white">Deposits</p>
                                </div>
                                <Link to={`/admin/deposit/history/${userData?._id}`} className="widget-two__btn" alt=''>View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--1">
                                <div className="widget-two__icon b-radius--5 bg--primary">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <div className="widget-two__content">
                                    <h3 className="text-white">${data?.WithdrawalAcceptBalanceSum}</h3>
                                    <p className="text-white">Withdrawals</p>
                                </div>
                                <Link to={`/admin/withdraw/history/${userData?._id}`} className="widget-two__btn" alt=''>View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--17">
                                <div className="widget-two__icon b-radius--5 bg--primary">
                                    <i className="las la-exchange-alt"></i>
                                </div>
                                <div className="widget-two__content">
                                    <h3 className="text-white">{data?.TotalTransactions}</h3>
                                    <p className="text-white">Transactions</p>
                                </div>
                                <Link to={`/admin/report/transaction/history/${userData?._id}`} className="widget-two__btn">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 mt-2">
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--15">
                                <div className="widget-two__icon b-radius--5 bg--15">
                                    <i className="las la-gamepad"></i>
                                </div>

                                <div className="widget-two__content">
                                    <h3 className="text-white">{data?.TotalTradeLog}</h3>
                                    <p className="text-white">Total Trades</p>
                                </div>
                                <Link to={`/admin/trade/log/history/${userData?._id}`} className="widget-two__btn" alt='' >View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--success-2">
                                <div className="widget-two__icon b-radius--5 bg--success-2">
                                    <i className="las la-trophy"></i>
                                </div>

                                <div className="widget-two__content">
                                    <h3 className="text-white">{data?.WinTradeLog}</h3>
                                    <p className="text-white">Win Trades</p>
                                </div>
                                <Link to={`/admin/trade/log/win/history/${userData?._id}`} className="widget-two__btn" alt='' >View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--danger-2">
                                <div className="widget-two__icon b-radius--5 bg--danger-2">
                                    <i className="las la-slash"></i>
                                </div>

                                <div className="widget-two__content">
                                    <h3 className="text-white">{data?.LossTradeLog}</h3>
                                    <p className="text-white">Loss Trades</p>
                                </div>
                                <Link to={`/admin/trade/log/loss/history/${userData?._id}`} className="widget-two__btn" alt='' >View All</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                            <div className="widget-two style--two box--shadow2 b-radius--5 bg--3">
                                <div className="widget-two__icon b-radius--5 bg--3">
                                    <i className="las la-draw-polygon"></i>
                                </div>

                                <div className="widget-two__content">
                                    <h3 className="text-white">{data?.DrawTradeLog}</h3>
                                    <p className="text-white">Draw Trades</p>
                                </div>
                                <Link to={`/admin/trade/log/draw/history/${userData?._id}`} className="widget-two__btn" alt='' >View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <div className="flex-fill">
                            <button onClick={handleBalanceAddModalShow} className="btn btn-success btn-shadow w-100 btn-lg bal-btn">
                                <i className="las la-plus-circle"></i> Balance                    </button>
                        </div>

                        <div className="flex-fill">
                            <button onClick={handleBalanceMinusModalShow} className="btn btn-danger btn-shadow w-100 btn-lg bal-btn" data-act="sub">
                                <i className="las la-minus-circle"></i> Balance                    </button>
                        </div>

                        <div className="flex-fill">
                            <Link to={`/admin/report/login/history/${userData?._id}`} className="btn btn-primary btn-shadow w-100 btn-lg">
                                <i className="las la-list-alt"></i>Logins
                            </Link>
                        </div>

                        <div className="flex-fill">
                            <a href="https://gffexvip.biz/admin/users/notification-log/46" className="btn btn-secondary btn-shadow w-100 btn-lg">
                                <i className="las la-bell"></i>Notifications                    </a>
                        </div>

                        <div className="flex-fill">
                            <Link href="https://gffexvip.biz/admin/users/login/46" target="_blank" className="btn btn-primary btn-gradi btn-shadow w-100 btn-lg" alt=''>
                                <i className="las la-sign-in-alt"></i>Login as User                    </Link>
                        </div>

                        <div className="flex-fill">
                            <Link to={`/admin/users/kyc-data/${userData?._id}`} target="_blank" className="btn btn-dark btn-shadow w-100 btn-lg">
                                <i className="las la-user-check"></i>KYC Data                    </Link>
                        </div>

                        <div className="flex-fill">
                            <button className="btn btn-warning btn-gradi btn--shadow w-100 btn-lg userStatus" onClick={handleBannedModalShow}>
                                <i className="las la-ban"></i>Ban User                    </button>
                        </div>
                    </div>



                    <div className="card mt-30">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Information of {userData?.name}</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUserSubmitData}>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group ">
                                            <label for="first_profit" className="required">30 Seconds Profit (%)</label>
                                            <input type="number" onBlur={handleInputBlur} name="first_profit" defaultValue={userData?.first_profit} className="form-control" required="" id="first_profit" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="form-control-label required" for="second_profit">60 Seconds Profit (%)</label>
                                            <input type="number" onBlur={handleInputBlur} name="second_profit" defaultValue={userData?.second_profit} className="form-control" required="" id="second_profit" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="third_profit" className="required">120 Seconds Profit (%)</label>
                                            <input type="number" onBlur={handleInputBlur} name="third_profit" defaultValue={userData?.third_profit} className="form-control" required="" id="third_profit" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="fourth_profit" className="required">300 Seconds Profit (%)</label>
                                            <div className="input-group ">
                                                <input type="number" onBlur={handleInputBlur} name="fourth_profit" defaultValue={userData?.fourth_profit} className="form-control" required="" id="fourth_profit" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-xl-6 col-md-6">
                                        <div className="form-group">
                                            <label for="trading_type">Trade Type</label>
                                            <select name="trading_type" onBlur={handleInputBlur} className="form-control" id="trading_type">
                                                <option defaultValue="">Select Trading Type</option>
                                                <option defaultValue="Win">Win</option>
                                                <option defaultValue="Lose">Lose</option>
                                                <option defaultValue="Draw">Draw</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <label htmlFor="firstname" className="required">First Name</label>
                                            <input className="form-control" onBlur={handleInputBlur} type="text" name="name" required="" defaultValue={userData?.name} id="firstname" />
                                        </div>
                                    </div>


                                </div>



                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email" className="required">Email </label>
                                            <input className="form-control" onBlur={handleInputBlur} type="email" name="email" defaultValue={userData?.email} required="" id="email" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="required">Mobile Number </label>
                                            <div className="input-group ">
                                                {/* <span className="input-group-text mobile-code">+880</span> */}
                                                <input type="number" name="mobile" onBlur={handleInputBlur} defaultValue={userData?.mobile} id="mobile" className="form-control checkUser" required="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="form-group ">
                                            <label for="address">Address</label>
                                            <input className="form-control" type="text" onBlur={handleInputBlur} name="address" defaultValue={userData?.address} id="address" />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="form-group">
                                            <label for="city">City</label>
                                            <input className="form-control" type="text" name="city" defaultValue={userData?.city} onBlur={handleInputBlur} id="city" />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="form-group ">
                                            <label for="state">State</label>
                                            <input className="form-control" type="text" name="state" defaultValue={userData?.state} onBlur={handleInputBlur} id="state" />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="form-group ">
                                            <label for="zip">Zip/Postal</label>
                                            <input className="form-control" type="text" name="zip_postal" defaultValue={userData?.zip_postal} onBlur={handleInputBlur} id="zip" />
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6">
                                        <div className="form-group ">
                                            <label for="country">Country</label>

                                            <select name="country" className="form-control" defaultValue={userData?.country} onBlur={handleInputBlur} id="country">
                                                <option >select</option>
                                                <option data-mobile_code="93" value="AF">Afghanistan</option>
                                                <option data-mobile_code="358" value="AX">Aland Islands</option>
                                                <option data-mobile_code="355" value="AL">Albania</option>
                                                <option data-mobile_code="213" value="DZ">Algeria</option>
                                                <option data-mobile_code="1684" value="AS">AmericanSamoa</option>
                                                <option data-mobile_code="376" value="AD">Andorra</option>
                                                <option data-mobile_code="244" value="AO">Angola</option>
                                                <option data-mobile_code="1264" value="AI">Anguilla</option>
                                                <option data-mobile_code="672" value="AQ">Antarctica</option>
                                                <option data-mobile_code="1268" value="AG">Antigua and Barbuda</option>
                                                <option data-mobile_code="54" value="AR">Argentina</option>
                                                <option data-mobile_code="374" value="AM">Armenia</option>
                                                <option data-mobile_code="297" value="AW">Aruba</option>
                                                <option data-mobile_code="61" value="AU">Australia</option>
                                                <option data-mobile_code="43" value="AT">Austria</option>
                                                <option data-mobile_code="994" value="AZ">Azerbaijan</option>
                                                <option data-mobile_code="1242" value="BS">Bahamas</option>
                                                <option data-mobile_code="973" value="BH">Bahrain</option>
                                                <option data-mobile_code="880" value="BD">Bangladesh</option>
                                                <option data-mobile_code="1246" value="BB">Barbados</option>
                                                <option data-mobile_code="375" value="BY">Belarus</option>
                                                <option data-mobile_code="32" value="BE">Belgium</option>
                                                <option data-mobile_code="501" value="BZ">Belize</option>
                                                <option data-mobile_code="229" value="BJ">Benin</option>
                                                <option data-mobile_code="1441" value="BM">Bermuda</option>
                                                <option data-mobile_code="975" value="BT">Bhutan</option>
                                                <option data-mobile_code="591" value="BO">Plurinational State of Bolivia</option>
                                                <option data-mobile_code="387" value="BA">Bosnia and Herzegovina</option>
                                                <option data-mobile_code="267" value="BW">Botswana</option>
                                                <option data-mobile_code="55" value="BR">Brazil</option>
                                                <option data-mobile_code="246" value="IO">British Indian Ocean Territory</option>
                                                <option data-mobile_code="673" value="BN">Brunei Darussalam</option>
                                                <option data-mobile_code="359" value="BG">Bulgaria</option>
                                                <option data-mobile_code="226" value="BF">Burkina Faso</option>
                                                <option data-mobile_code="257" value="BI">Burundi</option>
                                                <option data-mobile_code="855" value="KH">Cambodia</option>
                                                <option data-mobile_code="237" value="CM">Cameroon</option>
                                                <option data-mobile_code="1" value="CA">Canada</option>
                                                <option data-mobile_code="238" value="CV">Cape Verde</option>
                                                <option data-mobile_code=" 345" value="KY">Cayman Islands</option>
                                                <option data-mobile_code="236" value="CF">Central African Republic</option>
                                                <option data-mobile_code="235" value="TD">Chad</option>
                                                <option data-mobile_code="56" value="CL">Chile</option>
                                                <option data-mobile_code="86" value="CN">China</option>
                                                <option data-mobile_code="61" value="CX">Christmas Island</option>
                                                <option data-mobile_code="61" value="CC">Cocos (Keeling) Islands</option>
                                                <option data-mobile_code="57" value="CO">Colombia</option>
                                                <option data-mobile_code="269" value="KM">Comoros</option>
                                                <option data-mobile_code="242" value="CG">Congo</option>
                                                <option data-mobile_code="243" value="CD">The Democratic Republic of the Congo</option>
                                                <option data-mobile_code="682" value="CK">Cook Islands</option>
                                                <option data-mobile_code="506" value="CR">Costa Rica</option>
                                                <option data-mobile_code="225" value="CI">Cote d'Ivoire</option>
                                                <option data-mobile_code="385" value="HR">Croatia</option>
                                                <option data-mobile_code="53" value="CU">Cuba</option>
                                                <option data-mobile_code="357" value="CY">Cyprus</option>
                                                <option data-mobile_code="420" value="CZ">Czech Republic</option>
                                                <option data-mobile_code="45" value="DK">Denmark</option>
                                                <option data-mobile_code="253" value="DJ">Djibouti</option>
                                                <option data-mobile_code="1767" value="DM">Dominica</option>
                                                <option data-mobile_code="1849" value="DO">Dominican Republic</option>
                                                <option data-mobile_code="593" value="EC">Ecuador</option>
                                                <option data-mobile_code="20" value="EG">Egypt</option>
                                                <option data-mobile_code="503" value="SV">El Salvador</option>
                                                <option data-mobile_code="240" value="GQ">Equatorial Guinea</option>
                                                <option data-mobile_code="291" value="ER">Eritrea</option>
                                                <option data-mobile_code="372" value="EE">Estonia</option>
                                                <option data-mobile_code="251" value="ET">Ethiopia</option>
                                                <option data-mobile_code="500" value="FK">Falkland Islands (Malvinas)</option>
                                                <option data-mobile_code="298" value="FO">Faroe Islands</option>
                                                <option data-mobile_code="679" value="FJ">Fiji</option>
                                                <option data-mobile_code="358" value="FI">Finland</option>
                                                <option data-mobile_code="33" value="FR">France</option>
                                                <option data-mobile_code="594" value="GF">French Guiana</option>
                                                <option data-mobile_code="689" value="PF">French Polynesia</option>
                                                <option data-mobile_code="241" value="GA">Gabon</option>
                                                <option data-mobile_code="220" value="GM">Gambia</option>
                                                <option data-mobile_code="995" value="GE">Georgia</option>
                                                <option data-mobile_code="49" value="DE">Germany</option>
                                                <option data-mobile_code="233" value="GH">Ghana</option>
                                                <option data-mobile_code="350" value="GI">Gibraltar</option>
                                                <option data-mobile_code="30" value="GR">Greece</option>
                                                <option data-mobile_code="299" value="GL">Greenland</option>
                                                <option data-mobile_code="1473" value="GD">Grenada</option>
                                                <option data-mobile_code="590" value="GP">Guadeloupe</option>
                                                <option data-mobile_code="1671" value="GU">Guam</option>
                                                <option data-mobile_code="502" value="GT">Guatemala</option>
                                                <option data-mobile_code="44" value="GG">Guernsey</option>
                                                <option data-mobile_code="224" value="GN">Guinea</option>
                                                <option data-mobile_code="245" value="GW">Guinea-Bissau</option>
                                                <option data-mobile_code="595" value="GY">Guyana</option>
                                                <option data-mobile_code="509" value="HT">Haiti</option>
                                                <option data-mobile_code="379" value="VA">Holy See (Vatican City State)</option>
                                                <option data-mobile_code="504" value="HN">Honduras</option>
                                                <option data-mobile_code="852" value="HK">Hong Kong</option>
                                                <option data-mobile_code="36" value="HU">Hungary</option>
                                                <option data-mobile_code="354" value="IS">Iceland</option>
                                                <option data-mobile_code="91" value="IN">India</option>
                                                <option data-mobile_code="62" value="ID">Indonesia</option>
                                                <option data-mobile_code="98" value="IR">Iran, Islamic Republic of Persian Gulf</option>
                                                <option data-mobile_code="964" value="IQ">Iraq</option>
                                                <option data-mobile_code="353" value="IE">Ireland</option>
                                                <option data-mobile_code="44" value="IM">Isle of Man</option>
                                                <option data-mobile_code="972" value="IL">Israel</option>
                                                <option data-mobile_code="39" value="IT">Italy</option>
                                                <option data-mobile_code="1876" value="JM">Jamaica</option>
                                                <option data-mobile_code="81" value="JP">Japan</option>
                                                <option data-mobile_code="44" value="JE">Jersey</option>
                                                <option data-mobile_code="962" value="JO">Jordan</option>
                                                <option data-mobile_code="77" value="KZ">Kazakhstan</option>
                                                <option data-mobile_code="254" value="KE">Kenya</option>
                                                <option data-mobile_code="686" value="KI">Kiribati</option>
                                                <option data-mobile_code="850" value="KP">Democratic People's Republic of Korea</option>
                                                <option data-mobile_code="82" value="KR">Republic of South Korea</option>
                                                <option data-mobile_code="965" value="KW">Kuwait</option>
                                                <option data-mobile_code="996" value="KG">Kyrgyzstan</option>
                                                <option data-mobile_code="856" value="LA">Laos</option>
                                                <option data-mobile_code="371" value="LV">Latvia</option>
                                                <option data-mobile_code="961" value="LB">Lebanon</option>
                                                <option data-mobile_code="266" value="LS">Lesotho</option>
                                                <option data-mobile_code="231" value="LR">Liberia</option>
                                                <option data-mobile_code="218" value="LY">Libyan Arab Jamahiriya</option>
                                                <option data-mobile_code="423" value="LI">Liechtenstein</option>
                                                <option data-mobile_code="370" value="LT">Lithuania</option>
                                                <option data-mobile_code="352" value="LU">Luxembourg</option>
                                                <option data-mobile_code="853" value="MO">Macao</option>
                                                <option data-mobile_code="389" value="MK">Macedonia</option>
                                                <option data-mobile_code="261" value="MG">Madagascar</option>
                                                <option data-mobile_code="265" value="MW">Malawi</option>
                                                <option data-mobile_code="60" value="MY">Malaysia</option>
                                                <option data-mobile_code="960" value="MV">Maldives</option>
                                                <option data-mobile_code="223" value="ML">Mali</option>
                                                <option data-mobile_code="356" value="MT">Malta</option>
                                                <option data-mobile_code="692" value="MH">Marshall Islands</option>
                                                <option data-mobile_code="596" value="MQ">Martinique</option>
                                                <option data-mobile_code="222" value="MR">Mauritania</option>
                                                <option data-mobile_code="230" value="MU">Mauritius</option>
                                                <option data-mobile_code="262" value="YT">Mayotte</option>
                                                <option data-mobile_code="52" value="MX">Mexico</option>
                                                <option data-mobile_code="691" value="FM">Federated States of Micronesia</option>
                                                <option data-mobile_code="373" value="MD">Moldova</option>
                                                <option data-mobile_code="377" value="MC">Monaco</option>
                                                <option data-mobile_code="976" value="MN">Mongolia</option>
                                                <option data-mobile_code="382" value="ME">Montenegro</option>
                                                <option data-mobile_code="1664" value="MS">Montserrat</option>
                                                <option data-mobile_code="212" value="MA">Morocco</option>
                                                <option data-mobile_code="258" value="MZ">Mozambique</option>
                                                <option data-mobile_code="95" value="MM">Myanmar</option>
                                                <option data-mobile_code="264" value="NA">Namibia</option>
                                                <option data-mobile_code="674" value="NR">Nauru</option>
                                                <option data-mobile_code="977" value="NP">Nepal</option>
                                                <option data-mobile_code="31" value="NL">Netherlands</option>
                                                <option data-mobile_code="599" value="AN">Netherlands Antilles</option>
                                                <option data-mobile_code="687" value="NC">New Caledonia</option>
                                                <option data-mobile_code="64" value="NZ">New Zealand</option>
                                                <option data-mobile_code="505" value="NI">Nicaragua</option>
                                                <option data-mobile_code="227" value="NE">Niger</option>
                                                <option data-mobile_code="234" value="NG">Nigeria</option>
                                                <option data-mobile_code="683" value="NU">Niue</option>
                                                <option data-mobile_code="672" value="NF">Norfolk Island</option>
                                                <option data-mobile_code="1670" value="MP">Northern Mariana Islands</option>
                                                <option data-mobile_code="47" value="NO">Norway</option>
                                                <option data-mobile_code="968" value="OM">Oman</option>
                                                <option data-mobile_code="92" value="PK">Pakistan</option>
                                                <option data-mobile_code="680" value="PW">Palau</option>
                                                <option data-mobile_code="970" value="PS">Palestinian Territory</option>
                                                <option data-mobile_code="507" value="PA">Panama</option>
                                                <option data-mobile_code="675" value="PG">Papua New Guinea</option>
                                                <option data-mobile_code="595" value="PY">Paraguay</option>
                                                <option data-mobile_code="51" value="PE">Peru</option>
                                                <option data-mobile_code="63" value="PH">Philippines</option>
                                                <option data-mobile_code="872" value="PN">Pitcairn</option>
                                                <option data-mobile_code="48" value="PL">Poland</option>
                                                <option data-mobile_code="351" value="PT">Portugal</option>
                                                <option data-mobile_code="1939" value="PR">Puerto Rico</option>
                                                <option data-mobile_code="974" value="QA">Qatar</option>
                                                <option data-mobile_code="40" value="RO">Romania</option>
                                                <option data-mobile_code="7" value="RU">Russia</option>
                                                <option data-mobile_code="250" value="RW">Rwanda</option>
                                                <option data-mobile_code="262" value="RE">Reunion</option>
                                                <option data-mobile_code="590" value="BL">Saint Barthelemy</option>
                                                <option data-mobile_code="290" value="SH">Saint Helena</option>
                                                <option data-mobile_code="1869" value="KN">Saint Kitts and Nevis</option>
                                                <option data-mobile_code="1758" value="LC">Saint Lucia</option>
                                                <option data-mobile_code="590" value="MF">Saint Martin</option>
                                                <option data-mobile_code="508" value="PM">Saint Pierre and Miquelon</option>
                                                <option data-mobile_code="1784" value="VC">Saint Vincent and the Grenadines</option>
                                                <option data-mobile_code="685" value="WS">Samoa</option>
                                                <option data-mobile_code="378" value="SM">San Marino</option>
                                                <option data-mobile_code="239" value="ST">Sao Tome and Principe</option>
                                                <option data-mobile_code="966" value="SA">Saudi Arabia</option>
                                                <option data-mobile_code="221" value="SN">Senegal</option>
                                                <option data-mobile_code="381" value="RS">Serbia</option>
                                                <option data-mobile_code="248" value="SC">Seychelles</option>
                                                <option data-mobile_code="232" value="SL">Sierra Leone</option>
                                                <option data-mobile_code="65" value="SG">Singapore</option>
                                                <option data-mobile_code="421" value="SK">Slovakia</option>
                                                <option data-mobile_code="386" value="SI">Slovenia</option>
                                                <option data-mobile_code="677" value="SB">Solomon Islands</option>
                                                <option data-mobile_code="252" value="SO">Somalia</option>
                                                <option data-mobile_code="27" value="ZA">South Africa</option>
                                                <option data-mobile_code="211" value="SS">South Sudan</option>
                                                <option data-mobile_code="500" value="GS">South Georgia and the South Sandwich Islands</option>
                                                <option data-mobile_code="34" value="ES">Spain</option>
                                                <option data-mobile_code="94" value="LK">Sri Lanka</option>
                                                <option data-mobile_code="249" value="SD">Sudan</option>
                                                <option data-mobile_code="597" value="SR">Suricountry</option>
                                                <option data-mobile_code="47" value="SJ">Svalbard and Jan Mayen</option>
                                                <option data-mobile_code="268" value="SZ">Swaziland</option>
                                                <option data-mobile_code="46" value="SE">Sweden</option>
                                                <option data-mobile_code="41" value="CH">Switzerland</option>
                                                <option data-mobile_code="963" value="SY">Syrian Arab Republic</option>
                                                <option data-mobile_code="886" value="TW">Taiwan</option>
                                                <option data-mobile_code="992" value="TJ">Tajikistan</option>
                                                <option data-mobile_code="255" value="TZ">Tanzania</option>
                                                <option data-mobile_code="66" value="TH">Thailand</option>
                                                <option data-mobile_code="670" value="TL">Timor-Leste</option>
                                                <option data-mobile_code="228" value="TG">Togo</option>
                                                <option data-mobile_code="690" value="TK">Tokelau</option>
                                                <option data-mobile_code="676" value="TO">Tonga</option>
                                                <option data-mobile_code="1868" value="TT">Trinidad and Tobago</option>
                                                <option data-mobile_code="216" value="TN">Tunisia</option>
                                                <option data-mobile_code="90" value="TR">Turkey</option>
                                                <option data-mobile_code="993" value="TM">Turkmenistan</option>
                                                <option data-mobile_code="1649" value="TC">Turks and Caicos Islands</option>
                                                <option data-mobile_code="688" value="TV">Tuvalu</option>
                                                <option data-mobile_code="256" value="UG">Uganda</option>
                                                <option data-mobile_code="380" value="UA">Ukraine</option>
                                                <option data-mobile_code="971" value="AE">United Arab Emirates</option>
                                                <option data-mobile_code="44" value="GB">United Kingdom</option>
                                                <option data-mobile_code="1" value="US">United States</option>
                                                <option data-mobile_code="598" value="UY">Uruguay</option>
                                                <option data-mobile_code="998" value="UZ">Uzbekistan</option>
                                                <option data-mobile_code="678" value="VU">Vanuatu</option>
                                                <option data-mobile_code="58" value="VE">Venezuela</option>
                                                <option data-mobile_code="84" value="VN">Vietnam</option>
                                                <option data-mobile_code="1284" value="VG">British Virgin Islands</option>
                                                <option data-mobile_code="1340" value="VI">U.S. Virgin Islands</option>
                                                <option data-mobile_code="681" value="WF">Wallis and Futuna</option>
                                                <option data-mobile_code="967" value="YE">Yemen</option>
                                                <option data-mobile_code="260" value="ZM">Zambia</option>
                                                <option data-mobile_code="263" value="ZW">Zimbabwe</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="form-group  col-xl-3 col-md-6 col-12">
                                        <label for="ev">Email Verification</label>

                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" type="radio" name="ev" id="ev1" value={true} />
                                            <label className="form-check-label" for="ev1">
                                                Verified
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" type="radio" name="ev" id="ev2" value={false} />
                                            <label className="form-check-label" for="ev2">
                                                Unverified
                                            </label>
                                        </div>

                                    </div>

                                    <div className="form-group  col-xl-3 col-md-6 col-12">
                                        <label for="sv">Mobile Verification</label>
                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" value={true} type="radio" name="mv" id="mv1" />
                                            <label className="form-check-label" for="mv1">
                                                Verified
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" type="radio" name="mv" id="mv2" value={false} />
                                            <label className="form-check-label" for="mv2">
                                                Unverified
                                            </label>
                                        </div>

                                    </div>
                                    <div className="form-group  col-xl-3 col-md-6 col-12">
                                        <label for="sv">2FA Verification</label>
                                        <div className="form-check">
                                            <input className="form-check-input" value={true} type="radio" name="2FA" id="2FA1" />
                                            <label className="form-check-label" for="2FA1">
                                                Verified
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="2FA" id="2FA2" value={false} />
                                            <label className="form-check-label" for="2FA2">
                                                Unverified
                                            </label>
                                        </div>

                                    </div>

                                    <div className="form-group col-xl-3 col-md- col-12">
                                        <label for="kv">KYC </label>
                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" type="radio" name="kv" id="kv1" value={true} />
                                            <label className="form-check-label" for="kv1">
                                                Verified
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input onBlur={handleInputBlur} className="form-check-input" type="radio" name="kv" id="kv2" value={false} />
                                            <label className="form-check-label" for="kv2">
                                                Unverified
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button ref={refSubmitDis} type="submit" className="btn btn-primary w-100 h-45">Submit                                    </button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>




            {/* Modal  Plus */}

            <Modal show={BalanceAddModalshow} onHide={handleBalanceAddModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 class="modal-title">
                            <span class="type">Add </span>
                            <span>Balance</span>
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmitData}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="amount" className="required">Amount</label>
                                <div className="input-group">
                                    <input type="number" step="any" onBlur={handleBalanceAddInputBlur} name="amount" className="form-control" placeholder="Please provide positive amount" required id="amount" />
                                    <div className="input-group-text">USD</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remark" className="required">Remark</label>
                                <textarea className="form-control" onBlur={handleBalanceAddInputBlur} placeholder="Remark" name="remark" rows="4" required id="remark"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refSubmitDis} type="submit" className="btn btn-primary h-45 w-100">Submit</button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>
            {/* Modal  Minus */}

            <Modal show={BalanceMinusModalshow} onHide={handleBalanceMinusModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 class="modal-title">
                            <span class="type">Subtract  </span>
                            <span>Balance</span>
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleBalanceMinusSubmitData}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="amount" className="required">Amount</label>
                                <div className="input-group">
                                    <input type="number" step="any" onBlur={handleBalanceMinusInputBlur} name="amount" className="form-control" placeholder="Please provide positive amount" required id="amount" />
                                    <div className="input-group-text">USD</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remark" className="required">Remark</label>
                                <textarea className="form-control" onBlur={handleBalanceMinusInputBlur} placeholder="Remark" name="remark" rows="4" required id="remark"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refSubmitDis} type="submit" className="btn btn-primary h-45 w-100">Submit</button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>


            {/* Modal  Banned */}

            <Modal show={BannedModalshow} onHide={handleBannedModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 class="modal-title">
                            <span class="type">Ban   </span>
                            <span>User</span>
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleBanSubmitData}>
                        <div className="modal-body">
                            <h4>If you ban this user he/she won't able to access his/her dashboard.</h4>
                            <div className="form-group">
                                <label htmlFor="ban_reason" className="required">Reason</label>
                                <textarea className="form-control" onBlur={handleUserBanInputBlur} placeholder="ban_reason" name="ban_reason" rows="4" required id="ban_reason"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refSubmitDis} type="submit" className="btn btn-primary h-45 w-100">Submit</button>
                        </div>
                    </form>

                </Modal.Body>
            </Modal>

        </>
    );
};


export default Details;