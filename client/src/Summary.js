import React from 'react'

function Summary({expenses, user}) {
    return(
        <div>
            <strong>Purchases</strong>
            {user.tags.map((tag) => {
                return(
                    <>
                        <p>{tag.name}</p>
                        <ul>
                        {tag.expenses.map((expense) => {
                            return(<li key={expense.id}>{expense.description}</li>)
                            })}
                        </ul> 
                    </>
                )
                }
            )}

        </div>
    )
}

export default Summary