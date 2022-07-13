import React from 'react'

function Profile({user}) {
    
    debugger

    return(
        <li>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </li>
    )
}

export default Profile