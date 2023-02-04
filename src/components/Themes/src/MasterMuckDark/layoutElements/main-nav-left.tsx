import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const MainNavLeft = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Nav defaultActiveKey="/home" className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                <Nav.Link href="/home" className='nav-item'>
                    <i className='fs-4 bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Home</span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                <li className='nav-item'>
                    <a href='www.google.d' className='nav-link align-middle px-0'>
                        <i className='fs-4 bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Home</span>
                    </a>
                </li>
                <li>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    click
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
                </li>
                <li>
                    <a href='www.google.d' className='nav-link px-0 align-middle'>
                        <i className='fs-4 bi-table'></i> <span className='ms-1 d-none d-sm-inline'>Orders</span>
                    </a>
                </li>
            </ul>
            <hr/>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}

export default MainNavLeft;