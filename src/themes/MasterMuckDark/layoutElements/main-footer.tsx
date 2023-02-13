import React from 'react';

import './main-footer.scss';

const MainFooter = () => {

    return (
        <footer className='d-flex flex-wrap border-top'>
            <ul className='nav col-md-4 justify-content-end'>
                <li className='nav-item'>
                    <a href="#" className='nav-link px-2 text-muted'>About</a>
                </li>
            </ul>
        </footer>
    )
}

export default MainFooter;