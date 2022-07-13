import React from 'react'

function Expense({expense}) {
    return(
        <div className="expense">
            <div className="left">
                <h2>{expense.description}</h2>
                <p className="date">{expense.date}</p>
            </div>
            <div className="right">
                <p className="price">${expense.amount.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Expense