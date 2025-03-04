import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="blog-title">CS Student Blog</h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;