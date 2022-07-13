import React from 'react'

function Summary({expenses, setExpenses, user}) {
    
    let tags = []
    for (const tag in user.tags) {
        if(!tags.includes(user.tags[tag].name)) {
            tags.push(user.tags[tag].name)
        }
    }    
       
    return(
        <div>
            <h1>Purchase Categories</h1>
            {tags.map((tag) => <h2 key={tag}>{tag}</h2>)}
        </div>
    )
}

export default Summary