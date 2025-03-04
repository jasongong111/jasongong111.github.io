import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
                <p>
                    Follow me on 
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"> Twitter</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;