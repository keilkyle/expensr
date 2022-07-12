import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import './App.css';
 
import NewExpense from './NewExpense';
import ExpenseList from './ExpenseList';

function App() {
 
  const [user, setUser] = useState(null)  

  const [expenses, setExpenses] = useState([])

  function onLogout() {
    setUser(null)
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  

  if (!user) return <Signup setUser={setUser} />;

  return (
    <>
      <Navbar onLogout={onLogout} user={user}/>
      <NewExpense user={user} expenses={expenses} setExpenses={setExpenses} />        
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />    
    </>
  );
}

export default App;
