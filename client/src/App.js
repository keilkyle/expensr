import React, {useState} from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import './App.css';
import { Switch, Route } from "react-router-dom";
 
import NewExpense from './NewExpense';
import ExpenseList from './ExpenseList';

function App() {
 
  const [user, setUser] = useState(null)  

  function onLogout() {
    setUser(null)
  }
 
  if (!user) return <Signup setUser={setUser} />;

  return (
    <>
      <Navbar onLogout={onLogout} user={user}/>
      <Switch>
        <Route exact path="/">
            <ExpenseList user={user}/>
          </Route>
        <Route path="/new">
          <NewExpense user={user} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
