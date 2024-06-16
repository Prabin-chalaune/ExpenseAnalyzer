import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import '../../App.css'


function Income() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <div className='IncomeStyled'>
            <div className='InnerLayout'>
                <div className='CustomScrollable'>
                    <h1>My Incomes</h1>
                    <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                    <div className="income-content">
                        <div className="form-container">
                            <Form />
                        </div>
                        <div className="incomes">
                            {incomes.map((income) => {
                                const {_id, title, amount, date, category, description, type} = income;
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
                                    deleteItem={deleteIncome}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income