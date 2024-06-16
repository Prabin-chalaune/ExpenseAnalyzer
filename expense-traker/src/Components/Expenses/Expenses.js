import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
import '../../App.css'

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <div className='ExpenseStyled'>
            <div className='InnerLayout'>
                <div className='CustomScroll'>
                    <h1>Expenses</h1>
                    <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
                    <div className="income-content">
                        <div className="form-container">
                            <ExpenseForm />
                        </div>
                        <div className="incomes">
                            {expenses.map((income) => {
                                const {_id, title, amount, date, category, description, type} = income;
                                console.log(income)
                                return <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteExpense}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Expenses;