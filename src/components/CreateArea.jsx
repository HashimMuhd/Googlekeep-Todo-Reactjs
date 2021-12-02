import React, { useState } from 'react'

function CreateArea({submitButton, onAdd}) {
    
    let [note, setNote]=useState({
        title: "",
        content: "",
    });

    function InputEvent(e){
        let{name, value}=e.target
        setNote(preData =>{
            return {
                ...preData,
                [name]: value,
            };
        });
    }

    function submitButton(event){
        onAdd(note);
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input value={note.title} onChange={InputEvent} type="text" placeholder="Title" name="title" autoComplete="off" />
                <p>
                    <textarea value={note.content} onChange={InputEvent} name="content" placeholder="Take a note..." autoComplete="off"></textarea>
                </p>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea
