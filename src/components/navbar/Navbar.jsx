import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="brand">teslo</h1>
            <div className="search_bar">
                <input type="search" 
                name="" 
                id=""
                className="search_input"
                placeholder="mau cari apa ..."/>
                <button>Search</button>
            </div>
        </nav>
    )
}

export default Navbar
