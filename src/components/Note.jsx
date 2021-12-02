import React from 'react'

function Note({title, content}) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <br/>
            <p>{content}</p>
            <button class="del">Delete</button>
            <button class="edit">Edit</button>
        </div>
    )
}

export default Note
