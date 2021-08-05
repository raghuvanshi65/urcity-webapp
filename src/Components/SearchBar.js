import React from 'react';
import '../Style/SearchBar.css';

function SearchBar() {
    return (
        <div className="SearchForm">
            <input type="text" name="cityName" id="cityName" placeholder="disabled"/>
            <button type="submit">Search</button>
        </div>
    )
}

export default SearchBar
