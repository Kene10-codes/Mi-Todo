import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

function Header() {
    return (
        <header>
            <h1>Mi-Todo</h1>
            <Link style={linkStyle} to="/">Home</Link> |
            <Link style={linkStyle} to="/about"> About </Link> 
        </header>
    )
}

export default Header;