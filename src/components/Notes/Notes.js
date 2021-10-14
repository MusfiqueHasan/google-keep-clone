import React from 'react';
import './AllNotes.css'
const Notes = ({ note, deleteNote }) => {
    const { id, text, date } = note;
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button className="save" onClick={() => deleteNote(id)}>delete</button>
            </div>

        </div>
    );
};

export default Notes;
