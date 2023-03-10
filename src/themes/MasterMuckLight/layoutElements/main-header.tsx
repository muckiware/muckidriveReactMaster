import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const MainHeader = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
            <a href="#" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                <svg className='bi me-2' width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                <span className='fs-4'>Simple header</span>
            </a>

            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <a href="#" className='nav-link active' aria-current="page">Home</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Features</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Pricing</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>FAQs</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>About</a>
                </li>
            </ul>
        </header>
    )
}

export default MainHeader;