import React, { useState, useEffect } from 'react';

// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Collapse from 'react-bootstrap/Collapse';
import './theme.scss';

import ModelTheme from '../../models/theme'

import MainHeader from './layoutElements/main-header';
import MainFooter from './layoutElements/main-footer';
import MainNavLeft from './layoutElements/main-nav-left';
import MainContent from './layoutElements/main-content';

// import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout: React.FC<ModelTheme> = (props) => {

    const [open, setOpen] = useState(false);

    // useEffect(() => {

    //     console.log('theme setup in layout:', props)
    // }, [props]);


    console.log('theme setup in layout:', props)

    return (
        <div>
            <MainHeader/>
            <div className='container-fluid'>
                <div className='row flex-nowrap'>
                    <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                        <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100\'>
                           <MainNavLeft />
                        </div>
                    </div>
                    <div className='col py-3'>
                        <MainContent />
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}

export default Layout;