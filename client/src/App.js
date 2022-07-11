import React, {useState} from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import './App.css';

function App() {
 
  const [user, setUser] = useState(null)  

  function onLogout() {
    setUser(null)
  }
 
  if (!user) return <Signup setUser={setUser} />;

  return (
    <>
      <Navbar onLogout={onLogout} user={user}/>
    </>
  );
}

export default App;
