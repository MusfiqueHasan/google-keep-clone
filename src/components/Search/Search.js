import React from 'react';
import './Search.css'
const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <input type="text" placeholder="type to search" onChange={(e) => handleSearchNote(e.target.value)} />
        </div>
    );
};

export default Search;