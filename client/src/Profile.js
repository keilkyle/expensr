import React, {useState} from 'react'

function Profile({user, setUser}) {
    
    function deleteAccount() {
        fetch("/user", {
            headers: {
                "content-type": "application/json"
            },
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                setUser(null);
              }
        })
    }
  const [email, setEmail] = useState(user.email);
  const [errors, setErrors] = useState(null);

  function editEmail(e) {
    e.preventDefault();
    fetch("/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    })
    .then((r) => r.json())
    .then((data) => {
        setUser(data)
      });
  }

    return(
        <div>
            <h1>Profile for {user.username}</h1>
            <p>Your current email: {user.email}</p>
            <h2>Edit email?</h2>
            <form onSubmit={editEmail}>
              <label htmlFor="email">New email address:</label>
              <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Submit new email</button>
          </form>
          <p>{errors}</p>

          <button onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}

export default Profile