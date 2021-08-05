import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import '../Style/Header.css';

function Header() {
    return (
        <div className="Header">
            <h2>UrCityWeather</h2>
            {/* <SearchBar></SearchBar>
            <NavBar></NavBar> */}
        </div>
    )
}

export default Header
