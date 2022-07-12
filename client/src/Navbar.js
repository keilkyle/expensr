import React from 'react'
import { Link } from "react-router-dom";

function Navbar({ onLogout, user }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <h1>Hello {user.username}!</h1>
        <Link to="/">See All Expenses</Link>
        <Link to="/new">Make New Expense</Link>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

export default Navbar