import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [currentPage, handlePageChange] = useState('Home');

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Home')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('About')}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Projects')}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;