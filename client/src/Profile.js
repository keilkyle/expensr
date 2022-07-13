import React from 'react'

function Profile({user, setUser}) {
    
    function deleteAccount() {
        fetch("/user", {
            headers: {
                "content-type": "application/json"
            },
            method: "DELETE"
        })
        .then(r => {
            debugger
            if (r.ok) {
                setUser(null);
              }
        })
    }

    return(
        <div>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <button onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}

export default Profile