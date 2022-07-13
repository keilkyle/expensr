import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import Profile from './Profile';
import Summary
 from './Summary';
import './App.css';
 import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <NewExpense user={user} expenses={expenses} setExpenses={setExpenses} />        
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />    
        </Route>
        <Route path="/profile">
          <Profile user={user}/>
        </Route>
        <Route path="/summary">
          <Summary user={user} userexpenses={expenses} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
