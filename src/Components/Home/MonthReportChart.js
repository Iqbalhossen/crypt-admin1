import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
const MonthReportChart = ({data}) => {
    const DepositChart = data?.DepositChart ;
    const WithdrawalChart = data?.WithdrawalChart
 

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
          {/* <Bar data={aadata} options={options} />  */}
        </>
    );
};

export default MonthReportChart;