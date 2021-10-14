import React from 'react';
import Notes from './Notes';

const NoteList = ({ notes, addNote, deleteNote }) => {
    return (
        <div className="note-list">
            
            {
                notes.map(note => <Notes key={note.id} note={note} deleteNote={deleteNote} />)
            }
        </div>
    );
};

export default NoteList;