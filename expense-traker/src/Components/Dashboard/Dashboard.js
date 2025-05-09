import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import '../../App.css'

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, [])



    return (
        <div className='DashboardStyled'>
            <div className='InnerLayout'>
                <div className='CustomScrollableContainer'>
                    <h1>Transactions History</h1>
                    <div className="stats-con">
                        <div className="chart-con">
                            <Chart />
                            <div className="amount-con">
                                <div className="income">
                                    <h2>Total Income</h2>
                                    <p>
                                        {dollar} {totalIncome()}
                                    </p>
                                </div>
                                <div className="expense">
                                    <h2>Total Expenses</h2>
                                    <p>
                                        {dollar} {totalExpenses()}
                                    </p>
                                </div>
                                <div className="balance">
                                    <h2>Total Balance</h2>
                                    <p>
                                        {dollar} {totalBalance()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="history-con">
                            <History />
                            <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...incomes.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...incomes.map(item => item.amount))}
                                </p>
                            </div>
                            <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                            <div className="salary-item">
                                <p>
                                    ${Math.min(...expenses.map(item => item.amount))}
                                </p>
                                <p>
                                    ${Math.max(...expenses.map(item => item.amount))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard