import React from 'react'

function CreateArea() {
    

    function submitButton(i){
        i.preventDefault();
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Title" name="title" />
                <p>
                    <textarea name="content" placeholder="Take a note..."></textarea>
                </p>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea
