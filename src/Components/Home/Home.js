import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
const Home = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/admin/dashboard/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    const aadata = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
        datasets: [
          {
            label: "Deposit",
            data: [112, 19, 3, 5, 2, 3],
            backgroundColor: "rgb(255, 99, 132)"
          },
          {
            label: "Withdraw",
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: "rgb(54, 162, 235)"
          },
        
        ]
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };
    return (
        <>

            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                <h6 className="page-title">Dashboard</h6>
                <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                    <span className="text--info">Last Cron Run:<strong>3 seconds ago</strong></span>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-xxl-3 col-sm-6">
                    <div className="card bg--primary overflow-hidden box--shadow2">
                        <Link to='/admin/users/all'  className="item-link"></Link>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <i className="la las la-users f-size--56 f-size--56 text--white"></i>
                                </div>
                                <div className="col-8 text-end">
                                    <span className="text--white text--small">Total Users</span>
                                    <h2 className="text--white">{data ? data?.ActiveUser : 0}</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card bg--success overflow-hidden box--shadow2">
                        <Link to='/admin/users/active' className="item-link"></Link>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <i className="la las la-user-check f-size--56 f-size--56 text--white"></i>
                                </div>
                                <div className="col-8 text-end">
                                    <span className="text--white text--small">Active Users</span>
                                    <h2 className="text--white">{data ? data?.ActiveUser : 0}</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card bg--danger overflow-hidden box--shadow2">
                        <Link to='/admin/users/email-unverified' className="item-link"></Link>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <i className="la lar la-envelope f-size--56 f-size--56 text--white"></i>
                                </div>
                                <div className="col-8 text-end">
                                    <span className="text--white text--small">Email Unverified Users</span>
                                    <h2 className="text--white">{data ? data?.EmailUnverifyUser : 0}</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card bg--red overflow-hidden box--shadow2">
                        <Link to='/admin/users/mobile-unverified' className="item-link"></Link>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <i className="la las la-comment-slash f-size--56 f-size--56 text--white"></i>
                                </div>
                                <div className="col-8 text-end">
                                    <span className="text--white text--small">Mobile Unverified Users</span>
                                    <h2 className="text--white">{data ? data?.MobileUnverifyUser : 0}</h2>
                                </div>
                            </div>
                        </div>
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
                            <h3 className="text-white">{data ? data?.TotalTrade : 0}</h3>
                            <p className="text-white">Total Trades</p>
                        </div>
                        <Link to="/admin/trade/log" className="widget-two__btn">View All</Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two style--two box--shadow2 b-radius--5 bg--success-2">
                        <div className="widget-two__icon b-radius--5 bg--success-2">
                            <i className="las la-trophy"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3 className="text-white">{data ? data?.WinTrade : 0}</h3>
                            <p className="text-white">Win Trades</p>
                        </div>
                        <Link to='/admin/trade/log/wining' className="widget-two__btn">View All</Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two style--two box--shadow2 b-radius--5 bg--danger-2">
                        <div className="widget-two__icon b-radius--5 bg--danger-2">
                            <i className="las la-slash"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3 className="text-white">{data ? data?.LossTrade : 0}</h3>
                            <p className="text-white">Loss Trades</p>
                        </div>
                        <Link to='/admin/trade/log/losing' className="widget-two__btn">View All</Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two style--two box--shadow2 b-radius--5 bg--3">
                        <div className="widget-two__icon b-radius--5 bg--3">
                            <i className="las la-draw-polygon"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3 className="text-white">{data ? data?.DrawTrade : 0}</h3>
                            <p className="text-white">Draw Trades</p>
                        </div>
                        <Link to='/admin/trade/log/draw' className="widget-two__btn">View All</Link>
                    </div>
                </div>
            </div>

            <div className="row gy-4 mt-2">
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="fas fa-hand-holding-usd overlay-icon text--success"></i>

                        <div className="widget-two__icon b-radius--5   bg--success  ">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>${data ? data?.DepositBalanceSum : 0}</h3>
                            <p>Total Deposited</p>
                        </div>

                        <Link to='/admin/deposit' className="widget-two__btn btn btn-outline--success">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="fas fa-spinner overlay-icon text--warning"></i>

                        <div className="widget-two__icon b-radius--5   bg--warning  ">
                            <i className="fas fa-spinner"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>{data ? data?.PendingDeposit : 0}</h3>
                            <p>Pending Deposits</p>
                        </div>

                        <Link to='/admin/deposit/pending' className="widget-two__btn btn btn-outline--warning">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="fas fa-ban overlay-icon text--warning"></i>

                        <div className="widget-two__icon b-radius--5   bg--warning  ">
                            <i className="fas fa-ban"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>{data ? data?.RejectDeposit : 0}</h3>
                            <p>Rejected Deposits</p>
                        </div>

                        <Link to='/admin/deposit/rejected' className="widget-two__btn btn btn-outline--warning">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="fas fa-percentage overlay-icon text--primary"></i>

                        <div className="widget-two__icon b-radius--5   bg--primary  ">
                            <i className="fas fa-percentage"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>$0.00</h3>
                            <p>Deposited Charge</p>
                        </div>

                        <Link to="/admin/deposit" className="widget-two__btn btn btn-outline--primary">View All</Link>
                    </div>

                </div>
            </div>


            <div className="row gy-4 mt-2">
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="lar la-credit-card overlay-icon text--success"></i>

                        <div className="widget-two__icon b-radius--5   border border--success text--success  ">
                            <i className="lar la-credit-card"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>${data ? data?.WithdrawalAcceptSum : 0}</h3>
                            <p>Total Withdrawan</p>
                        </div>

                        <Link to='/admin/withdraw/log' className="widget-two__btn btn btn-outline--success">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="las la-sync overlay-icon text--warning"></i>

                        <div className="widget-two__icon b-radius--5   border border--warning text--warning  ">
                            <i className="las la-sync"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>{data ? data?.PendingWithdrawal : 0}</h3>
                            <p>Pending Withdrawals</p>
                        </div>

                        <Link to='/admin/withdraw/pending' className="widget-two__btn btn btn-outline--warning">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="las la-times-circle overlay-icon text--danger"></i>

                        <div className="widget-two__icon b-radius--5   border border--danger text--danger  ">
                            <i className="las la-times-circle"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>{data ? data?.PendingWithdrawal : 0}</h3>
                            <p>Rejected Withdrawals</p>
                        </div>

                        <Link to='/admin/withdraw/rejected' className="widget-two__btn btn btn-outline--danger">View All</Link>
                    </div>

                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="widget-two box--shadow2 b-radius--5 bg--white">
                        <i className="las la-percent overlay-icon text--primary"></i>

                        <div className="widget-two__icon b-radius--5   border border--primary text--primary  ">
                            <i className="las la-percent"></i>
                        </div>

                        <div className="widget-two__content">
                            <h3>$0</h3>
                            <p>Withdrawal Charge</p>
                        </div>

                        <Link to="withdraw/log" className="widget-two__btn btn btn-outline--primary">View All</Link>
                    </div>

                </div>
            </div>
            <Bar data={aadata} options={options} />
        </>
    );
};

export default Home;