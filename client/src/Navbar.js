import React from 'react'

function Navbar({ onLogout, user }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <h1>Hello {user.username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

export default Navbar