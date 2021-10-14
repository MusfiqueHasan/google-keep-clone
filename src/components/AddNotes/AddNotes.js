import React, { useState } from 'react';
import './AddNotes.css'
const AddNotes = ({ addNote }) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 400;
    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value)
        }
    }
    const handleSaveClick = (e) => {
        if (noteText.trim().length > 0) {
            addNote(noteText)
            setNoteText('')
        }
    }
    return (
        <div className="note-add new">
            <textarea
                cols="30"
                rows="10"
                placeholder="Type to add a note"
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNotes;