import React from 'react'

function Summary({expenses, setExpenses, user}) {
    
    let tags = []
    for (const tag in user.tags) {
        if(!tags.includes(user.tags[tag].name)) {
            tags.push(user.tags[tag].name)
        }
    }       

    debugger 

    return(
        <div>
            <strong>Purchase Categories</strong>
            {tags.map((tag) => <p key={tag}>{tag}</p>)}
        </div>
    )
}

export default Summary