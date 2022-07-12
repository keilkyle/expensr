import React, {useState} from 'react';

function NewExpense({ expenses, setExpenses }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const [errors, setErrors] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        date,
        amount,
      }),
    })
    .then((r) => {
      console.log(r)
      if (r.ok) {
          r.json().then((expense) => {
            const newExpenses = [...expenses, expense]
            setExpenses(newExpenses)
          });
        } else {
          r.json().then((err) => {
            setErrors(err.error)});
        } 
      });
  }

  return (
    <>
      <h1>Make new expense</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor="description">Description:</label>
              <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="date">Date:</label>
              <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="amount">Amount:</label>
              <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
              <button type="submit">Submit</button>
          </form>
          <p>{errors}</p>
      </>
      )
    }

export default NewExpense