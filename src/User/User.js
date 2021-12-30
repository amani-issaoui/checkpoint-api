import React from 'react'
import './user.css'
function User({el}) {
    return (
        <div className="user">
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
        </div>
    )
}

export default User
