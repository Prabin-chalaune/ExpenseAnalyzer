import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout>
                <CustomScroll>
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
                </CustomScroll>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    height:100%;
    overflow-y: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.2rem;
        gap: .5rem;
        span{
            font-size: 1.2rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

    @media only screen and (max-width:1000px) and (min-width:700px){
        display: flex;

        .total-income{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            margin: 1rem 0;
            font-size: 1rem;
            gap: .5rem;
            span{
                font-size: 1rem;
                font-weight: 800;
                color: var(--color-green);
            }
        }
        .income-content{
            display: flex;
            flex-direction:column;
            gap: 1rem;
            .incomes{
                display:flex;
                flex-direction:column;
            }
        }

    }
    @media only screen and (max-width:600px) and (min-width:310px){
        display:flex;
        height:auto;
        overflow-y: auto;
        .total-income{

            padding: 0.5rem;
            margin: 0.5rem 0;
            font-size: 0.8rem;
            gap: .5rem;
            span{
                font-size: 0.8rem;
                font-weight: 600;
                color: var(--color-green);
            }
        }
        .income-content{
            display: flex;
            flex-direction:column;
            gap: 0.5rem;
            font-size:0.8rem;

            .incomes{
                display:flex;
                flex-direction:column;
            }
        }


    }
`;


const CustomScroll =styled.div`
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    /* Webkit (Chrome, Safari) */
    &::-webkit-scrollbar {
    width: 10px;
    }


`
export default Expenses;