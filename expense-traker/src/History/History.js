import React from 'react'
import '../App.css'
import { useGlobalContext } from '../context/globalContext';


function History() {
    const {transactionHistory} = useGlobalContext();

    const [...history] = transactionHistory();
    return (
        <div className='HistoryStyled'>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </div>
    )
}



export default History;