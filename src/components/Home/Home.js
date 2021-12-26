import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import useToggle from '../../hooks/useToggle';
import NoteList from '../Notes/NoteList';
import AddNotes from '../AddNotes/AddNotes'
import Search from '../Search/Search'
import keepimg from '../images/keep_2020q4_48dp.png'
import './Home.css'
const Home = () => {
    const [notes, setNotes] = useState([])
    const [newList, setNewList, wrapperRef] = useToggle();
    const [searchText, setSearchText] = useState('')
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }

        setNotes([...notes, newNote])
    }


    const deleteNote = (id) => {
        const newNote = notes.filter(note => note.id !== id)
        setNotes(newNote)
    }
    return (
        <>

            <div className="container">
                <h1 className='keep'>
                    <img src={keepimg} alt="" />
                    <span>Keep Clone</span>
                </h1>
                <Search handleSearchNote={setSearchText} />
            </div>
            <div className="note-container" ref={wrapperRef}>

                {newList && (

                    <div className="note-box" onClick={() => setNewList(!newList)}>
                        <input type="text" placeholder="Take a note...." />
                    </div>

                )}

                {!newList && (
                    <AddNotes addNote={addNote} />
                )}

            </div>

            <NoteList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} deleteNote={deleteNote} />

        </>
    );
};

export default Home;