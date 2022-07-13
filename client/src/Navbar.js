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
        <Link to="/">Home</Link>
        <Link to="/profile">Edit Profile</Link>
        <Link to="/summary">See Tags</Link>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

export default Navbar