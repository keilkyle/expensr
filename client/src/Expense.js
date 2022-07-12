import React from 'react'

function Expense({expense}) {
    return(
        <li>
            <p>{expense.description}</p>
            <p>{expense.date}</p>
            <p>${expense.amount.toFixed(2)}</p>
        </li>
    )
}

export default Expense