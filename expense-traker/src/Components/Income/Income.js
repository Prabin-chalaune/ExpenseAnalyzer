import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';


function Income() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <CustomScrollable>
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
                </CustomScrollable>
            </InnerLayout>
        </IncomeStyled>
    )
}
//  overflow: auto;
const IncomeStyled = styled.div`
    display: flex;
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
            font-weight: 600;
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

    @media only screen and (max-width: 1000px) and (min-width: 700px) {
        height:auto;
        overflow-y:auto;
        width:auto;
        .total-income {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.7rem;
            margin: 0.7rem 0;
            font-size: 1.2rem;
            width: auto;
            gap: 0.5rem;
            span {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--color-green);
            }
        }
        .income-content {
            display: flex;
            flex-direction:column;
            gap: 1rem;
            .incomes {
                display: flex;
                flex-direction: column;
            }
        }
    }
    @media only screen and (max-width: 600px) and (min-width: 310px) {
        .total-income {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            margin: 0.5rem 0;
            font-size: 0.8rem;
            width: auto;
            gap: 0.5rem;
            span {
                font-size: 0.8rem;
                font-weight: 600;
                color: var(--color-green);
            }
        }
        .income-content {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            font-size:0.8rem;
            .incomes {
                display: flex;
                flex-direction: column;
            }
        }

    }
`;


const CustomScrollable =styled.div`
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    /* Webkit (Chrome, Safari) */
    &::-webkit-scrollbar {
    width: 10px;
    }


`
export default Income