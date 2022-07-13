import React, {useState} from 'react'

function SignUp({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const [errors, setErrors] = useState(null)

    const [showLogin, setShowLogin] = useState(true);

    function handleSignup(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
      .then((r) => {
        console.log(r)
        if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => {
                debugger
                setErrors(err.error)});
          } 
        });
    }

    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameLog,
            password: passwordLog}),
        })
          .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
              } else {
                r.json().then((err) => setErrors(err.error));
              } 
        });
      }
  
    return (
      <>
      {showLogin ? (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={usernameLog}
                onChange={(e) => setUsernameLog(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={passwordLog}
                onChange={(e) => setPasswordLog(e.target.value)}
            />
            <button type="submit">Submit</button>
            </form>
            <p>{errors}</p>
            <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </p>
        </>
      ) : (
        <>
        <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Username:</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <p>{errors}</p>
            <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowLogin(true)}>Log In</button>
            </p>
            

        </>)}
    </>
    );
  }

  export default SignUp