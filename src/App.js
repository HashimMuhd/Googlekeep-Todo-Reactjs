import React from 'react';
import "./styles.css";
import { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App(props) {
let [notes, setNotes] =useState([])

  function addNote(newNote){
    setNotes(prevData =>{
      return [...prevData, newNote];
    });
  }
  
  function deleteNotes(id){
    setNotes(preData =>{
      return [...preData.filter((note, index) =>
       index !==id )];
    });
  }

  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index)=>(
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} />
      ))}
    </div>
  );
}

export default App
