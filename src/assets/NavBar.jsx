import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Projects" className="nav-link">Projects</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
            <Link to="/Resume" className="nav-link">Resume</Link>
        </nav>
    );
};

export default NavBar;
