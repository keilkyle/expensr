import React, {useEffect} from 'react'
import Expense from "./Expense.js"

function ExpenseList ({expenses, setExpenses}) {
  
  useEffect(() => {
    fetch("/me")
    .then(r => r.json())
    .then(data => {
      setExpenses(data.expenses)})
    },[])

    return (
      <>
        <h1>Here's all your expenses.</h1>
        <div>{expenses.map((expense) => <Expense key={expense.id} expense={expense} />)}</div>
      </>
    );
  }

export default ExpenseList